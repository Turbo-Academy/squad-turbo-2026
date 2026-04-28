# 09 · Tráfego — análise automática Meta Ads

> 4 workflows n8n que sustentam o engine de análise de tráfego: 1 pull diário + 3 análises (diária · 2 dias · semanal).
>
> **Especificação das regras:** `trafego/template/07-analise-automatica.md`
> **Pipeline Meta API:** `trafego/template/08-meta-ads-pipeline.md`

---

## 🎯 Os 4 workflows

| # | Workflow | Cron | Trigger adicional | Dependência |
|---|---|---|---|---|
| **A** | `trafego-pull-meta-diario` | `0 5 * * *` | manual via webhook | Meta Ads API |
| **B** | `trafego-analise-diaria` | `0 7 * * *` | após A completar | Sheets `MetaAds_Normalized` |
| **C** | `trafego-analise-2dias` | `0 8 */2 * *` | manual via dashboard | Sheets `MetaAds_Normalized` |
| **D** | `trafego-analise-semanal` | `0 8 * * 1` | manual via dashboard | Sheets `MetaAds_Normalized` |

> **Sequência:** A grava dados → B/C/D leem dados → escrevem em `Recomendações` → dashboard exibe.

---

## 🅰️ Workflow A · Pull Meta Ads diário

### Trigger

```yaml
type:           Cron
schedule:       "0 5 * * *"           # 5h America/Sao_Paulo
timezone:       America/Sao_Paulo
```

### Nodes (sequência)

```
1. Cron trigger
   ↓
2. Set vars
   - data_d1 = formatDate(now - 1 day, "YYYY-MM-DD")
   - data_d8 = formatDate(now - 8 day, "YYYY-MM-DD")
   ↓
3. HTTP Request: Meta Ads Insights API
   GET https://graph.facebook.com/v22.0/{META_AD_ACCOUNT_ID}/insights
   Query:
     level=ad
     fields=campaign_id,campaign_name,ad_id,ad_name,spend,impressions,
            reach,frequency,clicks,ctr,cpm,cpc,actions,action_values,
            video_3_sec_watched_actions,video_p75_watched_actions
     time_range={"since":"{{$node.SetVars.data_d1}}","until":"{{$node.SetVars.data_d1}}"}
     time_increment=1
     action_attribution_windows=["7d_click","1d_view"]
     limit=500
     access_token={{$credentials.metaToken}}
   ↓
4. Loop paginação (cursor → next page) até esgotar
   ↓
5. Function: normalizar (calcular Hook/Hold/Body/ROAS · status_qualidade)
   ↓
6. Sheets append: aba MetaAds_Daily (linha bruta + raw_json)
   ↓
7. Sheets append: aba MetaAds_Normalized (linha calculada)
   ↓
8. Webhook trigger: POST /trafego-analise-diaria-trigger (dispara workflow B)
   ↓
9. Slack/Telegram: notificar sucesso + N linhas inseridas
```

### Function node: `normalizar`

```javascript
// Recebe array de insights da Meta API · retorna array normalizado
const HOOK_RATE_MIN = 20;
const HOLD_RATE_MIN = 5;
const BODY_RATE_MIN = 2;

function getActionValue(actions, type) {
  const found = actions?.find(a => a.action_type === type);
  return found ? parseFloat(found.value) : 0;
}

return items.map(item => {
  const i = item.json;
  const purchases = getActionValue(i.actions, 'purchase');
  const purchase_value = getActionValue(i.action_values, 'purchase');
  const v3s = getActionValue(i.video_3_sec_watched_actions, 'video_view');
  const p75 = getActionValue(i.video_p75_watched_actions, 'video_view');

  const hook_rate = i.impressions > 0 ? (v3s / i.impressions) * 100 : null;
  const hold_rate = v3s > 0 ? (p75 / v3s) * 100 : null;
  const body_rate = p75 > 0 ? (purchases / p75) * 100 : (i.clicks > 0 ? (purchases / i.clicks) * 100 : 0);
  const roas = i.spend > 0 ? purchase_value / parseFloat(i.spend) : 0;

  // Status (assume gasto lifetime virá agregado mais tarde · por ora usa do dia)
  const passou =
    (hook_rate !== null && hook_rate >= HOOK_RATE_MIN ? 1 : 0) +
    (hold_rate !== null && hold_rate >= HOLD_RATE_MIN ? 1 : 0) +
    (body_rate >= BODY_RATE_MIN ? 1 : 0);

  let status_qualidade = 'novo';
  if (parseFloat(i.spend) >= 100) {
    status_qualidade = passou === 3 ? 'verde' : passou === 2 ? 'amarelo' : 'vermelho';
  }

  return {
    json: {
      data: i.date_start,
      campaign_id: i.campaign_id,
      campaign_name: i.campaign_name,
      ad_id: i.ad_id,
      ad_name: i.ad_name,
      spend: parseFloat(i.spend),
      impressions: parseInt(i.impressions),
      reach: parseInt(i.reach || 0),
      frequency: parseFloat(i.frequency || 0),
      clicks: parseInt(i.clicks),
      ctr: parseFloat(i.ctr || 0),
      cpm: parseFloat(i.cpm || 0),
      cpc: parseFloat(i.cpc || 0),
      purchases,
      purchase_value,
      v3s,
      v_p75: p75,
      hook_rate,
      hold_rate,
      body_rate,
      roas,
      status_qualidade,
      pulled_at: new Date().toISOString()
    }
  };
});
```

---

## 🅱️ Workflow B · Análise diária (anomalias)

### Trigger

```yaml
type:           Webhook
path:           /trafego-analise-diaria-trigger
fallback_cron:  "0 7 * * *"           # roda mesmo se A não disparou
```

### Nodes

```
1. Webhook/Cron trigger
   ↓
2. Set vars
   - data_d1     = ontem (YYYY-MM-DD)
   - baseline_in = D-7
   - baseline_fim= D-2
   ↓
3. Sheets read: MetaAds_Normalized · range = baseline + D-1
   ↓
4. Function: agregação por campanha (somatórios · médias)
   ↓
5. Function: aplicar 8 regras D-XX (executar em sequência)
   ↓
6. Filter: apenas regras com flag=true
   ↓
7. Function: gerar UUID + payload da sugestão
   ↓
8. Function: deduplicar contra Recomendações pendentes do mesmo id_regra (idempotência)
   ↓
9. Sheets append: Recomendações
   ↓
10. Function: marcar sugestões antigas (D-7+) como obsoleta
   ↓
11. IF severidade=alta · count > 0
       → Slack/Telegram alert: "🔴 N alertas críticos no tráfego"
   ↓
12. Webhook response: { ok: true, sugestoes_geradas: N }
```

### Function node: `aplicar_regras_diarias`

```javascript
// Pseudo-código das 8 regras
const baseline = items.filter(i => i.json.data >= baseline_in && i.json.data <= baseline_fim);
const d1 = items.filter(i => i.json.data === data_d1);

// Agrega baseline (média móvel 7d)
const baselineAgg = {
  roas_media: avg(baseline.map(b => b.json.roas)),
  cpm_media: avg(baseline.map(b => b.json.cpm)),
  spend_media: avg(baseline.map(b => b.json.spend))
};

// D-1 agregado por campanha
const d1Agg = aggregate(d1);

const sugestoes = [];

// D-01: ROAS de ontem caiu vs baseline 7d
const deltaRoas = ((d1Agg.roas - baselineAgg.roas_media) / baselineAgg.roas_media) * 100;
if (deltaRoas <= -30) {
  sugestoes.push({
    id_regra: 'D-01',
    severidade: 'alta',
    metrica: 'ROAS',
    valor_observado: d1Agg.roas,
    valor_baseline: baselineAgg.roas_media,
    delta_pct: deltaRoas,
    threshold: 'queda ≥ 30%',
    acao_sugerida: 'Investigar criativos · NÃO mexer ainda'
  });
}

// D-03: CPM disparou
if (d1Agg.cpm > CPM_MAX || ((d1Agg.cpm - baselineAgg.cpm_media) / baselineAgg.cpm_media) >= 0.25) {
  sugestoes.push({
    id_regra: 'D-03',
    severidade: 'media',
    metrica: 'CPM',
    valor_observado: d1Agg.cpm,
    valor_baseline: baselineAgg.cpm_media,
    threshold: `CPM > ${CPM_MAX} ou subida ≥ 25%`,
    acao_sugerida: 'Revisar fadiga · checar concorrência · NÃO mexer público'
  });
}

// D-04: Volume zerado
if (d1Agg.spend >= 100 && d1Agg.purchases === 0) {
  sugestoes.push({
    id_regra: 'D-04',
    severidade: 'alta',
    metrica: 'purchases',
    valor_observado: 0,
    threshold: 'gasto ≥ R$100 e 0 compras',
    acao_sugerida: 'URGENTE · verificar tracking · pixel · página fora do ar'
  });
}

// D-05, D-06, D-07, D-08: análogas

return sugestoes.map(s => ({ json: enrichWithMetadata(s) }));
```

### Idempotência (dedupe)

```javascript
// Antes de inserir, ler pendentes da mesma combinação
const pendentes = await sheets.query(
  `SELECT * FROM Recomendações
   WHERE id_regra = '${nova.id_regra}'
     AND campanha_id = '${nova.campanha_id}'
     AND status = 'pendente'
     AND data_geracao >= '${nova.data_geracao - 24h}'`
);

if (pendentes.length > 0) {
  // Atualiza linha existente (incrementa contador de re-detecção)
  await sheets.update(pendentes[0].id_sugestao, {
    delta_pct: nova.delta_pct,
    valor_observado: nova.valor_observado,
    contexto: { ...nova.contexto, redeteccoes: pendentes[0].contexto.redeteccoes + 1 }
  });
} else {
  await sheets.append(nova);
}
```

---

## 🅲 Workflow C · Análise a cada 2 dias (criativos)

### Trigger

```yaml
type:           Cron
schedule:       "0 8 */2 * *"
```

### Nodes

```
1. Cron trigger
   ↓
2. Set vars
   - janela_inicio = D-3
   - janela_fim    = D-1
   - baseline_inicio = D-10
   - baseline_fim    = D-8
   ↓
3. Sheets read: MetaAds_Normalized · janelas
   ↓
4. Function: agregar por ad_id (criativo individual)
   ↓
5. Function: aplicar 8 regras C-XX
   ↓
6. Filter: regras com flag=true
   ↓
7. Function: ordenar por severidade · prioridade
   ↓
8. Sheets append: Recomendações
   ↓
9. Webhook response: { sugestoes_por_criativo: {...} }
```

### Function node: `aplicar_regras_2dias` (resumo)

```javascript
// Itera por criativo (15 esperados na campanha principal)
for (const ad of ads) {
  // C-01: criativo novo com Hook ruim após R$ 100
  if (ad.idade_dias <= 5 && ad.spend_lifetime >= 100 && ad.hook_rate < HOOK_RATE_MIN) {
    push({ id_regra: 'C-01', ad_id: ad.id, acao: 'Pausar · refazer só hook' });
  }

  // C-02, C-03: análogas pra Hold e Body

  // C-06: 2 das 3 métricas no vermelho
  const reds = [
    ad.hook_rate < HOOK_RATE_MIN,
    ad.hold_rate < HOLD_RATE_MIN,
    ad.body_rate < BODY_RATE_MIN
  ].filter(Boolean).length;
  if (reds >= 2 && ad.spend_lifetime >= 100) {
    push({ id_regra: 'C-06', ad_id: ad.id, acao: 'Pausar · refazer criativo inteiro' });
  }
}

// C-04: Top 3 concentram > 80% das vendas
const totalPurchases = ads.reduce((s, a) => s + a.purchases, 0);
const top3 = ads.sort((a,b) => b.purchases - a.purchases).slice(0, 3);
const top3Purchases = top3.reduce((s, a) => s + a.purchases, 0);
if (totalPurchases > 0 && (top3Purchases / totalPurchases) > 0.80) {
  push({
    id_regra: 'C-04',
    severidade: 'media',
    acao: 'Pausar 12 perdedores · renovar com novos hooks'
  });
}
```

---

## 🅳 Workflow D · Análise semanal (4 ações)

### Trigger

```yaml
type:           Cron
schedule:       "0 8 * * 1"           # toda segunda 8h
```

### Nodes

```
1. Cron trigger (Seg 8h)
   ↓
2. Set vars
   - semana_atual = D-7 a D-1
   - semana_anterior = D-14 a D-8
   ↓
3. Sheets read: MetaAds_Normalized · ambas as semanas
   ↓
4. Function: agregar por campanha (semana)
   ↓
5. Function: aplicar 4 regras S-XX em cascata
   ↓
6. Filter: pegar APENAS 1 sugestão (primeira que disparar na ordem S-04, S-01, S-03, S-02)
   ↓
7. Function: enriquecer com contexto do evento (semana ISO · fase captação/evento/carrinho)
   ↓
8. Sheets append: Recomendações
   ↓
9. Slack/Telegram: enviar resumo semanal pro time
   ↓
10. Webhook response
```

### Function node: `aplicar_regras_semanais`

```javascript
const sa = agregaSemana(semana_atual);     // semana atual
const sp = agregaSemana(semana_anterior);  // pra contexto

// Conta dias estáveis (ROAS ≥ alvo) na semana
const diasEstaveis = semana_atual.filter(d => d.roas >= ROAS_ALVO_INGRESSO).length;
const diasRuins = semana_atual.filter(d => d.roas < ROAS_ALVO_INGRESSO).length;

// === S-04: DUPLICAR (mais alto valor) ===
if (
  diasEstaveis >= 5 &&
  sa.spend_diario_medio >= 300 &&
  hasNewCriativosReady() // checa em outra aba se há 15 novos prontos
) {
  return [{ id_regra: 'S-04', acao: 'duplicar_campanha', detalhe: { ... } }];
}

// === S-01: SUBIR ===
if (diasEstaveis >= 3 && sa.hook_rate_avg >= HOOK_RATE_IDEAL && sa.body_rate_avg >= BODY_RATE_IDEAL) {
  const verba_nova = sa.spend_diario_medio * 1.05;
  return [{
    id_regra: 'S-01',
    acao: 'subir_verba',
    detalhe: {
      verba_atual: sa.spend_diario_medio,
      verba_sugerida: verba_nova,
      incremento_pct: 5
    }
  }];
}

// === S-03: RENOVAR ===
const top3Concentra = top3Purchases / totalPurchases > 0.80;
const muitos_ruins = ads.filter(a => atLeastOneMetricBelowMin(a)).length >= 5;
if (top3Concentra || muitos_ruins) {
  return [{ id_regra: 'S-03', acao: 'renovar_5_criativos', detalhe: { ... } }];
}

// === S-02: DESCER ===
if (diasRuins >= 3) {
  const verba_nova = sa.spend_diario_medio * 0.5;
  return [{
    id_regra: 'S-02',
    acao: 'descer_verba',
    detalhe: {
      verba_atual: sa.spend_diario_medio,
      verba_sugerida: verba_nova,
      decremento_pct: 50
    }
  }];
}

// Default: manter
return [{ id_regra: 'S-MANTER', acao: 'manter', severidade: 'informativo' }];
```

### Resumo no Slack/Telegram (template)

```
📊 *Análise semanal LPSG · {SEMANA_ISO}*

Campanha: `LPS_120526_PRI_001`
Período: D-7 a D-1

✅ ROAS médio:      1.42 (alvo: 1.0)
✅ Spend total:     R$ 4.200
✅ Compras:         142
✅ CPM:             R$ 38

🎯 *Sugestão da semana:* SUBIR VERBA
   Verba atual:     R$ 600/dia
   Verba sugerida:  R$ 630/dia (+5%)
   Razão:           5 dias estáveis com ROAS ≥ 1.0
                    Hook/Hold/Body todos no ideal

👉 Aplicar: dashboard.{DOMINIO}.com.br/sugestoes
```

---

## 🔁 Idempotência geral (regra única)

> Toda escrita na aba `Recomendações` passa por **3 verificações** antes do append:

```typescript
function podeInserir(nova: Sugestao): boolean {
  // 1. Tem regra ativa pendente da mesma combinação?
  const ativa = sheets.query(
    `id_regra='${nova.id_regra}'
     AND campanha_id='${nova.campanha_id}'
     AND criativo_id='${nova.criativo_id || ""}'
     AND status='pendente'
     AND data_geracao >= '${cutoff(nova.cadencia)}'`
  );
  if (ativa.length > 0) {
    sheets.update(ativa[0].id, { redeteccoes: ativa[0].redeteccoes + 1 });
    return false;
  }

  // 2. Foi aplicada/ignorada nas últimas 24h? (cooling period)
  const recente = sheets.query(
    `id_regra='${nova.id_regra}' AND aplicada_em >= NOW() - 24h`
  );
  if (recente.length > 0) return false;

  // 3. É duplicada exata?
  const exata = sheets.query(
    `id_regra='${nova.id_regra}'
     AND janela_fim='${nova.janela_fim}'`
  );
  return exata.length === 0;
}
```

---

## 📡 Webhook Manual (dashboard pode disparar)

> Permite que o usuário aperte "Atualizar análise agora" no dashboard.

```yaml
endpoints:
  POST /trafego-analise-diaria/run-now
  POST /trafego-analise-2dias/run-now
  POST /trafego-analise-semanal/run-now

payload:
  { "force_recalc": false }    # se true · ignora idempotência (use com cuidado)

response:
  {
    "ok": true,
    "sugestoes_geradas": N,
    "duracao_ms": M
  }
```

---

## 🔐 Segurança

- Webhooks protegidos com `X-Webhook-Secret` header
- Token Meta NUNCA loggado (mascara `EAAB...****`)
- Service Account Google com permissão **apenas** de write nas 3 abas
- Cron de auditoria (mensal) compara escritas vs membros da equipe que aplicaram

---

## 📋 Sistema de tags relacionado (ManyChat)

> Uma vez que o lead tá na fila, marca tags no ManyChat se for uma sugestão "alerta-equipe":

| Sugestão crítica | Tag aplicada no responsável |
|---|---|
| `D-04` (volume zerado) | `alerta-trafego-critico` |
| `D-07` (sangria) | `alerta-trafego-critico` |
| `S-02` (descer verba) | `decisao-trafego-pendente` |
| `S-03` (renovar criativos) | `tarefa-criativo-pendente` |

---

## ✅ Checklist de implementação

- [ ] 4 workflows criados no n8n e nomeados conforme padrão
- [ ] Credentials Meta + Sheets configuradas (não em hardcode)
- [ ] Aba `MetaAds_Daily` criada (22 colunas)
- [ ] Aba `MetaAds_Normalized` criada (15 colunas)
- [ ] Aba `Recomendações` criada (24 colunas)
- [ ] Workflow A testado manualmente · valida idempotência
- [ ] Workflow B testado contra dados reais (1 cenário com anomalia mockada)
- [ ] Workflow C testado contra dados reais (criativo com Hook ruim mockado)
- [ ] Workflow D testado contra dados reais (semana com ROAS estável mockada)
- [ ] Resumo Slack/Telegram da análise semanal validado
- [ ] Endpoint manual `/run-now` testado a partir do dashboard
- [ ] Cron de arquivamento mensal das abas Daily/Normalized configurado
- [ ] Logs de erro disparando alerta no canal de operações
- [ ] Token Meta validado pra long-lived (não vai expirar em 60d)

---

## 🔗 Referências cruzadas

| O quê | Onde |
|---|---|
| **Regras D-XX, C-XX, S-XX** | `trafego/template/07-analise-automatica.md` |
| **Endpoints Meta API e fields** | `trafego/template/08-meta-ads-pipeline.md` |
| **Status verde/amarelo/vermelho do criativo** | `trafego/template/03-criativo-ganhador.md` (semântica) · aqui (cálculo) |
| **Adapter Sheets → dashboard** | `dashboard/template/03-fonte-de-dados.md` |
| **Módulo "Sugestões" no dashboard** | `dashboard/template/02-modulos-do-dashboard.md` (Módulo 10) |
| **Sistema de tags ManyChat** | `automacoes/template/08-sistema-de-tags-e-fases.md` |

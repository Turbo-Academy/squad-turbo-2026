# 08 · Meta Ads Pipeline — pull diário, normalização e armazenamento

> Pipeline que puxa métricas da Meta Ads API todos os dias, normaliza no schema interno e alimenta o engine de análise (`07-analise-automatica.md`) e o dashboard.

---

## 🎯 Decisão arquitetural

| O quê | Decidido |
|---|---|
| **Onde rodam os crons** | n8n (mesmo orquestrador das outras automações LPSG) |
| **Frequência do pull bruto** | 1x/dia (todo dia 5h, antes das análises) |
| **Storage dos dados brutos** | Sheets aba `MetaAds_Daily` (auditoria) |
| **Storage dos dados normalizados** | Sheets aba `MetaAds_Normalized` (input das análises) |
| **Storage das sugestões** | Sheets aba `Recomendações` (ver `07-analise-automatica.md`) |
| **Atribuição** | 7 dias clique · 1 dia visualização (padrão LPSG) |
| **Time zone** | America/Sao_Paulo (UTC-3) |

> **Por que Sheets em vez de banco?** Visibilidade total · time consegue auditar manualmente · funciona sem subir infra extra · custo zero. Trade-off: limite de 10M células · suficiente pra ~3 anos de histórico LPSG.

---

## 🔌 Setup Meta Business Manager

### Pré-requisitos

1. Acesso admin ao **Meta Business Manager**
2. Ad Account ID (formato `act_XXXXXXXXXX`)
3. Pixel ID instalado na página
4. Permissão `ads_read` + `business_management`

### Gerar System User Token (long-lived)

1. `business.facebook.com` → Configurações → **Usuários do Sistema**
2. Criar System User com role **Admin**
3. Gerar token com permissões: `ads_read`, `business_management`, `pages_read_engagement`
4. Selecionar **Nunca expirar** (long-lived)
5. Copiar e guardar em **secret manager** (n8n credentials)

### Variáveis de ambiente

```bash
# n8n credentials
META_AD_ACCOUNT_ID=act_1234567890
META_ACCESS_TOKEN=EAAB...                # long-lived system user token
META_API_VERSION=v22.0                   # versão atual da Graph API
META_PIXEL_ID=1234567890

# Sheets
GOOGLE_SHEETS_ID=1abc...xyz
GOOGLE_SERVICE_ACCOUNT_JSON={...}        # base64 do JSON da service account

# Time zone
TZ_PROJETO=America/Sao_Paulo
```

---

## 📡 Endpoint principal — Insights API

### URL

```
GET https://graph.facebook.com/{API_VERSION}/{AD_ACCOUNT_ID}/insights
```

### Parâmetros essenciais

```javascript
{
  level:         "ad",                          // ad | adset | campaign | account
  fields:        [                              // ver tabela abaixo
    "campaign_id", "campaign_name",
    "adset_id", "adset_name",
    "ad_id", "ad_name",
    "spend", "impressions", "reach", "frequency",
    "clicks", "ctr", "cpm", "cpc",
    "actions", "action_values",
    "video_3_sec_watched_actions",
    "video_p25_watched_actions",
    "video_p50_watched_actions",
    "video_p75_watched_actions",
    "video_p100_watched_actions"
  ].join(","),

  time_range:    JSON.stringify({               // dia anterior (D-1)
    since: "2026-04-25",
    until: "2026-04-25"
  }),

  time_increment: 1,                            // 1 = diário

  action_attribution_windows: ["7d_click","1d_view"],

  limit: 500,                                   // paginar com cursors
  access_token: META_ACCESS_TOKEN
}
```

### Campos puxados (mapeados)

| Campo Meta | Tipo | Uso interno |
|---|---|---|
| `campaign_id` | string | ID único · join com nome |
| `campaign_name` | string | Padrão `{XYZ}_{DDMMYY}_{TIPO}_{N}` |
| `ad_id` | string | ID do criativo |
| `ad_name` | string | Padrão `{XYZ}_{FMT}_{HOOK}_v{N}` |
| `spend` | number (R$) | Gasto |
| `impressions` | number | Impressões |
| `reach` | number | Alcance único |
| `frequency` | number | impressions / reach |
| `clicks` | number | Clicks (link clicks via `actions`) |
| `cpm` | number | Custo por mil impressões |
| `actions` | array | Conversões (purchase · lead · view_content · 3sec_view) |
| `action_values` | array | Valor das conversões |
| `video_3_sec_watched_actions` | array | Views ≥ 3s (input do **Hook Rate**) |
| `video_p75_watched_actions` | array | Quem assistiu 75%+ (input do **Hold Rate**) |

---

## 🧮 Cálculo das 3 métricas-chave (Hook · Hold · Body)

```typescript
// === Hook Rate ===
// (visualizações de 3s) / (impressões) × 100
function hookRate(insight: AdInsight): number {
  const v3s = getActionValue(insight.video_3_sec_watched_actions, 'video_view');
  return (v3s / insight.impressions) * 100;
}

// === Hold Rate ===
// (assistiu 75% do vídeo) / (visualizações de 3s) × 100
function holdRate(insight: AdInsight): number {
  const p75 = getActionValue(insight.video_p75_watched_actions, 'video_view');
  const v3s = getActionValue(insight.video_3_sec_watched_actions, 'video_view');
  return v3s > 0 ? (p75 / v3s) * 100 : 0;
}

// === Body Rate ===
// (compras de ingresso) / (assistiu 75%) × 100
function bodyRate(insight: AdInsight): number {
  const purchases = getActionValue(insight.actions, 'purchase');
  const p75 = getActionValue(insight.video_p75_watched_actions, 'video_view');
  return p75 > 0 ? (purchases / p75) * 100 : 0;
}

// === ROAS de ingresso ===
function roasIngresso(insight: AdInsight): number {
  const valor = getActionValue(insight.action_values, 'purchase');
  return insight.spend > 0 ? valor / insight.spend : 0;
}

// helper
function getActionValue(actions: Action[], type: string): number {
  const found = actions?.find(a => a.action_type === type);
  return found ? parseFloat(found.value) : 0;
}
```

### Casos de borda

| Caso | Tratamento |
|---|---|
| `video_p75_watched_actions` ausente (não-vídeo) | Hook Rate · Hold Rate = `null`. Body Rate calcula como `purchases / clicks` |
| `spend = 0` (criativo pausado dia inteiro) | Pular linha · não enviar pra análise |
| `impressions = 0` | Pular linha · sem dados |
| Criativo carrossel | Sem hold/hook de vídeo · só Body Rate (purchases / clicks) |
| Criativo estático | Idem carrossel |
| Atribuição parcial (lead view-only) | Considera apenas `7d_click` para conversão fim-funil |

---

## 🔄 Workflow de pull diário (n8n · pseudo)

```
Cron 5h ─→ [Buscar contas/campanhas ativas no Sheets]
           ↓
       [Para cada campanha · paralelo]
           ↓
       [GET Meta Insights API · D-1 · level=ad]
           ↓
       [Paginar com cursors até esgotar]
           ↓
       [Normaliza: calcula Hook/Hold/Body/ROAS]
           ↓
       [Append em MetaAds_Daily · linha bruta]
           ↓
       [Append em MetaAds_Normalized · linha calculada]
           ↓
       [Trigger workflow de análise diária 7h]
```

### Schema da aba `MetaAds_Daily` (raw)

```
A:  data                       ISO date (D-1)
B:  campaign_id
C:  campaign_name
D:  ad_id
E:  ad_name
F:  spend                      R$
G:  impressions
H:  reach
I:  frequency
J:  clicks
K:  ctr                        %
L:  cpm                        R$
M:  cpc                        R$
N:  purchases                  número
O:  purchase_value             R$
P:  v3s                        views 3s
Q:  v_p25
R:  v_p50
S:  v_p75
T:  v_p100
U:  raw_json                   JSON original do Meta (auditoria)
V:  pulled_at                  ISO datetime
```

### Schema da aba `MetaAds_Normalized`

```
A:  data                       ISO date
B:  nivel                      "campaign" | "ad"
C:  campaign_id
D:  ad_id                      vazio se nivel = campaign
E:  spend
F:  roas_ingresso              calculado
G:  roas_alvo                  vindo de variáveis (1.0)
H:  ranking_roas               1-N por dia
I:  hook_rate                  % (null se não-vídeo)
J:  hold_rate                  % (null se não-vídeo)
K:  body_rate                  %
L:  cpm
M:  frequency
N:  status_qualidade           "verde" | "amarelo" | "vermelho" | "novo" (gasto < R$ 100)
O:  flag_anomalia              JSON array de regras D-XX violadas
```

---

## 🚦 Status de qualidade do criativo (cor)

Calculado no momento da normalização. Vai pro dashboard direto.

```typescript
function statusQualidade(c: AdNormalized): 'verde' | 'amarelo' | 'vermelho' | 'novo' {
  if (c.spend_total_lifetime < 100) return 'novo';

  const hookOk = c.hook_rate >= HOOK_RATE_MIN;
  const holdOk = c.hold_rate >= HOLD_RATE_MIN;
  const bodyOk = c.body_rate >= BODY_RATE_MIN;
  const passou = [hookOk, holdOk, bodyOk].filter(Boolean).length;

  if (passou === 3) return 'verde';
  if (passou === 2) return 'amarelo';
  return 'vermelho';
}
```

---

## 📦 Idempotência

> Rodar o pipeline 2x no mesmo dia **não duplica** linhas.

```typescript
// Antes de inserir em MetaAds_Daily
const exists = await sheets.search(
  `MetaAds_Daily`,
  `data = "${date}" AND ad_id = "${adId}"`
);
if (exists.length > 0) {
  await sheets.update(exists[0].rowIndex, normalizedRow);
} else {
  await sheets.append(normalizedRow);
}
```

---

## ⚠️ Erros comuns e tratamento

| Erro | Causa | Tratamento |
|---|---|---|
| `(#100) Param time_range[since]` | Date format inválido | Usar `YYYY-MM-DD` (não ISO datetime) |
| `(#17) User request limit reached` | Rate limit Meta | Backoff exponencial · retry após 60s |
| `(#190) Access token expired` | Token expirou | Notificar admin · system user token deveria ser long-lived |
| `(#80004) too many calls` | Rate limit Ad Account | Reduzir paralelismo · paginar com mais batch |
| `OAuthException 200` | Permissão revogada | Refresh token · revalidar System User |
| `Body Rate = NaN` | Divisão por zero (sem v_p75) | Tratar como `null` · não 0 |

---

## 📅 Janela de retenção

| Aba | Retenção | Motivo |
|---|---|---|
| `MetaAds_Daily` (raw) | **90 dias** | Auditoria recente · debug · re-cálculo |
| `MetaAds_Normalized` | **365 dias** | Análises de baseline anual |
| `Recomendações` | **forever** | Histórico de decisões e qualidade das regras |

> Cron mensal `0 3 1 * *` arquiva linhas antigas pra aba `_Archive_AAAAMM` e limpa.

---

## 🔗 Integração com outras estruturas

| Estrutura | Como usa |
|---|---|
| `automacoes/template/09-trafego-analise-meta.md` | Workflows que consomem este pipeline · executam regras D/C/S |
| `dashboard/template/02-modulos-do-dashboard.md` | Módulo 4 (Tráfego) lê de `MetaAds_Normalized` · Módulo 10 (Sugestões) lê de `Recomendações` |
| `dashboard/template/03-fonte-de-dados.md` | Adapter Sheets pra ambas as abas |
| `criativos-lpsg` | Status de qualidade (verde/amarelo/vermelho) usado pra decidir renovação |

---

## ✅ Checklist de implementação

- [ ] System User criado no Business Manager com permissões corretas
- [ ] Token long-lived gerado e salvo no n8n credentials (não em .env de código)
- [ ] Pixel ID confirmado e instalado na página
- [ ] 3 abas criadas no Sheets: `MetaAds_Daily` · `MetaAds_Normalized` · `Recomendações`
- [ ] Workflow n8n "pull-meta-diario" criado e testado manualmente
- [ ] Cron `0 5 * * *` agendado e validado
- [ ] Idempotência testada (rodar 2x mesma data não duplica)
- [ ] Cálculo de Hook/Hold/Body validado contra Ads Manager (pegar 1 criativo, comparar)
- [ ] Cron de arquivamento mensal configurado
- [ ] Rate limit handling com backoff testado
- [ ] Webhook de erro disparando alerta no Slack/Telegram

# 07 · Análise Automática & Sugestões de Otimização

> **Regra de ouro:** o engine **NUNCA executa otimização**. Apenas **gera sugestões** que entram numa fila pra revisão humana antes de aplicar. Tráfego pago é decisão crítica — automação aqui é diagnóstico, não ação.

---

## 🎯 Por que automatizar a análise (e não a ação)

| O que humano faz mal | O que máquina faz bem |
|---|---|
| Cruzar 15 criativos × 7 dias × 3 métricas mentalmente | Calcular tendência e variação em segundos |
| Lembrar de checar todo dia 7h | Cron disparando sem falha |
| Aplicar threshold consistente | Regra determinística |
| Detectar anomalias sutis (CPM subindo 8%/dia) | Detecção estatística de drift |

| O que máquina faz mal | O que humano faz bem |
|---|---|
| Decidir se contexto justifica exceção | Saber que dia 30 cai feriado e CPM sobe naturalmente |
| Considerar fontes externas (notícia, sazonalidade) | Cruzar com calendário real |
| Aceitar perda controlada por estratégia | "Hoje vou aceitar ROAS 0.8 porque é teste" |

> **Por isso:** engine sugere. Humano decide. Dashboard mostra. Closer aplica.

---

## 📅 As 3 cadências de análise

| Cadência | Cron | Janela analisada | Foco | Output típico |
|---|---|---|---|---|
| **Diária** | `0 7 * * *` (todo dia 7h) | Últimas 24h vs baseline 7d | **Anomalias** (CPM, ROAS, volume) | 0-3 alertas urgentes |
| **A cada 2 dias** | `0 8 */2 * *` | Últimas 48-72h | **Tendências de criativo** (Hook/Hold/Body) | 1-5 sugestões por criativo |
| **Semanal** | `0 8 * * 1` (toda segunda 8h) | Últimos 7 dias | **As 4 ações** (subir/descer/renovar/duplicar) | 1 decisão estratégica |

> Cadências rodam em **paralelo, não em substituição**. Diária pega anomalia que semanal perderia. Semanal vê padrão que diária ignora.

---

## 🟦 Cadência 1 · Análise Diária — anomalias

### Quando dispara

`0 7 * * *` (todo dia às 7h, antes da revisão da equipe)

### Janela de comparação

```
Período avaliado:    D-1 (ontem · 00:00 → 23:59)
Baseline:            D-7 a D-2 (média móvel 7 dias)
```

### Regras de detecção

> Cada regra gera **uma sugestão** se ativada. Sugestões viram linhas na aba `Recomendações` do Sheets.

| ID | Regra | Threshold | Severidade | Ação sugerida |
|---|---|---|---|---|
| `D-01` | ROAS de ontem caiu vs baseline 7d | queda ≥ 30% | 🔴 alta | Investigar criativos · não mexer ainda |
| `D-02` | ROAS de ontem subiu vs baseline 7d | subida ≥ 30% | 🟢 informativo | Avaliar incremento de verba (apenas avaliar) |
| `D-03` | CPM disparou vs baseline | CPM > {CPM_MAX} OU subida ≥ 25% | 🟡 média | Revisar concorrência/saturação · NÃO mexer público |
| `D-04` | Volume de compras zerado | 0 vendas em 24h após R$ 100+ gastos | 🔴 alta | Verificar tracking · pixel quebrado · página fora do ar |
| `D-05` | Frequência > 3 (público saturado) | freq ≥ 3.0 | 🟡 média | Renovar criativos · sinal de fadiga |
| `D-06` | 1+ criativo com Hook < {HOOK_RATE_MIN} após R$ 100 | gasto ≥ 100 + Hook < threshold | 🟡 média | Pausar criativo · refazer hook |
| `D-07` | Sangria diária acima do limite | gasto + R$ Y mas ROAS < 0.5 | 🔴 alta | Considerar pausar conjunto |
| `D-08` | Spike de impressões sem clicks | impressões ≥ 2x baseline + CTR < 0.5% | 🟡 média | Bot/fraude · revisar Quality Account Score |

### Schema da sugestão diária

```yaml
id_regra:           "D-03"
data_geracao:       "2026-04-26T07:00:00Z"
cadencia:           "diaria"
severidade:         "media"               # alta | media | informativo
janela_analisada:   "2026-04-25"
baseline:           "2026-04-18 a 2026-04-24"
metrica:            "CPM"
valor_observado:    52.30
valor_baseline:     38.10
delta_pct:          37.3                  # % de variação
threshold_violado:  "CPM > R$ 40 (CPM_MAX)"
contexto:
  campanha_id:      "120211234567890"
  campanha_nome:    "LPS_120526_PRI_001"
  spend_dia:        850.00
  roas_dia:         0.92
acao_sugerida:      "Revisar fadiga · checar concorrência · NÃO mexer público"
prioridade:         1                     # 1 = mais urgente
status:             "pendente"            # pendente | aplicada | ignorada | obsoleta
aplicada_em:        null
aplicada_por:       null
notas:              null
```

---

## 🟨 Cadência 2 · Análise a Cada 2 Dias — tendências de criativo

### Quando dispara

`0 8 */2 * *` (a cada 2 dias às 8h)

### Janela de comparação

```
Período avaliado:    D-2 a D-1 (últimas 48h fechadas)
Baseline:            mesma janela 1 semana atrás (D-9 a D-8)
Foco:                criativo individual (15 criativos)
```

### Regras de detecção (por criativo)

| ID | Regra | Threshold | Ação sugerida |
|---|---|---|---|
| `C-01` | Criativo novo (≤ 5 dias) com Hook < {HOOK_RATE_MIN} após R$ 100 | gasto ≥ 100 + Hook < threshold | Pausar · refazer hook |
| `C-02` | Criativo novo com Hold < {HOLD_RATE_MIN} | mesmo gasto + Hold ruim | Pausar · refazer miolo |
| `C-03` | Criativo novo com Body < {BODY_RATE_MIN} | mesmo gasto + Body ruim | Pausar · refazer CTA |
| `C-04` | Top 3 criativos concentram > 80% das vendas | concentração calculada | Pausar 12 perdedores · renovar |
| `C-05` | Criativo "estrela" cai 20%+ no Hook entre 2 dias | tendência negativa em 48h | Sinal de fadiga inicial · monitorar |
| `C-06` | Criativo com 2 das 3 métricas críticas no vermelho | 2+ thresholds violados | Pausar · refazer criativo inteiro (não 1 parte) |
| `C-07` | Variância de Hook entre criativos > 15% | dispersão alta | Promover padrão do top performer |
| `C-08` | Carrossel/Estático/Vídeo com performance dispar | um formato dominando 70%+ | Próxima batelada: 80% no formato vencedor |

### Output esperado (por análise)

```
Criativos analisados:    15
Sugestões geradas:       2-5 (típico)
Distribuição:
  - Pausar criativo:      0-3
  - Renovar parte:        1-3
  - Promover padrão:      0-1
```

---

## 🟪 Cadência 3 · Análise Semanal — as 4 ações estratégicas

### Quando dispara

`0 8 * * 1` (toda segunda às 8h, antes do rito semanal de revisão)

### Janela de comparação

```
Período avaliado:    Semana anterior (D-7 a D-1)
Baseline:            Semana retrasada (D-14 a D-8)
```

### As 4 ações (framework do `05-otimizacao-diagnostico.md`)

| ID | Ação | Critério | Output |
|---|---|---|---|
| `S-01` | **SUBIR VERBA** | ROAS ≥ {ROAS_ALVO_INGRESSO} por 3+ dias na semana + Hook/Body ideais | Sugestão "+5% no orçamento diário" |
| `S-02` | **DESCER VERBA** | ROAS < {ROAS_ALVO_INGRESSO} por 3+ dias | Sugestão "-30 a -50% imediato" |
| `S-03` | **RENOVAR CRIATIVOS** | top 3 concentram > 80% OU 5+ criativos com 1 métrica abaixo do mínimo | Sugestão "trocar 5 criativos (1/3 do lote)" |
| `S-04` | **DUPLICAR CAMPANHA** | ROAS ≥ {ROAS_ALVO_INGRESSO} estável 5+ dias + verba ≥ R$ 300 + 15 criativos novos prontos | Sugestão "duplicar campanha" |

### Lógica de seleção (não pode sugerir 2 ao mesmo tempo)

```
SE S-04 viável     → sugere DUPLICAR    (mais alto valor)
SENÃO SE S-01      → sugere SUBIR
SENÃO SE S-03      → sugere RENOVAR
SENÃO SE S-02      → sugere DESCER
SENÃO              → sugere MANTER (status quo)
```

> **Regra:** apenas **1 ação estratégica por semana**. Não acumular. Se humano não aplicou a da semana passada, nova sugestão substitui.

### Schema da sugestão semanal

```yaml
id_regra:           "S-01"
data_geracao:       "2026-04-27T08:00:00Z"
cadencia:           "semanal"
severidade:         "alta"
janela_analisada:   "2026-04-20 a 2026-04-26"
baseline:           "2026-04-13 a 2026-04-19"
acao:               "subir_verba"
detalhe:
  verba_atual:      300.00
  verba_sugerida:   315.00              # +5%
  incremento_pct:   5.0
  roas_semana:      1.42
  roas_alvo:        1.0
  dias_estaveis:    5
prioridade:         1
status:             "pendente"
context_aulas_evento:
  semana_iso:       17
  fase_evento:      "captacao"          # captacao | evento | carrinho
  observacao:       "Captação · 6 dias até início Aula 1 do próximo ciclo"
```

---

## 📊 Aba `Recomendações` no Google Sheets

### Schema da aba (24 colunas)

```
A:  id_sugestao              UUID
B:  data_geracao             ISO datetime
C:  cadencia                 diaria | 2dias | semanal
D:  id_regra                 D-01..D-08 | C-01..C-08 | S-01..S-04
E:  severidade               alta | media | informativo
F:  janela_inicio            ISO date
G:  janela_fim               ISO date
H:  baseline_inicio          ISO date
I:  baseline_fim             ISO date
J:  metrica                  ROAS | CPM | Hook | Hold | Body | etc.
K:  valor_observado          número
L:  valor_baseline           número
M:  delta_pct                número (variação %)
N:  threshold                texto da regra violada
O:  campanha_id              ID Meta
P:  campanha_nome            nome da campanha
Q:  criativo_id              ID criativo (se aplicável)
R:  criativo_nome            nome do criativo
S:  acao_sugerida            texto curto
T:  contexto                 JSON com dados extras
U:  prioridade               1-3
V:  status                   pendente | aplicada | ignorada | obsoleta
W:  aplicada_em              ISO datetime (quando humano aplicou)
X:  aplicada_por             email/nome do humano
```

### Regras de gestão da aba

- Sugestões `pendente` aparecem no dashboard
- Sugestões `aplicada` viram histórico (auditoria de decisão)
- Sugestões `ignorada` saem do dashboard mas ficam pra análise (taxa de ignored alta = regra ruim)
- Sugestões `obsoleta` (uma nova substitui a anterior) só ficam no histórico

### Schema condicional

> Se sugestão diária do mesmo `id_regra` repetir 3 dias seguidos com status `pendente`, **escala severidade pra 🔴 alta** e marca prioridade 1.

---

## 🧮 Algoritmo de Lead Score da regra (qualidade)

Cada regra tem um score interno baseado em histórico:

```typescript
interface RegraQualidade {
  id_regra: string;
  total_sugeridas: number;
  total_aplicadas: number;
  total_ignoradas: number;
  taxa_aceite: number;        // aplicadas / sugeridas
  efeito_medio_pos_aplicacao: number;  // delta da métrica após 7d
}

// Se taxa_aceite < 30% após 30+ sugestões → revisar threshold
// Se efeito_medio negativo → revisar lógica
```

> Mensalmente, gerar relatório de qualidade das regras. Regras ruins viram WIP.

---

## 🚦 Princípios da automação

| # | Princípio | Por quê |
|---|---|---|
| 1 | **Engine sugere · humano aplica** | Tráfego é caro pra automatizar ação errada |
| 2 | **Threshold determinístico, não ML** | Auditável · explicável · ajustável manualmente |
| 3 | **3 cadências, não 1 só** | Cada cadência captura tipo diferente de problema |
| 4 | **Baseline rolando, não fixo** | Adaptação a sazonalidade do nicho |
| 5 | **1 ação estratégica/semana máx** | Aprendizado isolado · sem mexer 2 coisas juntas |
| 6 | **Histórico auditável** | Permite analisar qualidade das sugestões |
| 7 | **Idempotência** | Rodar duas vezes a mesma análise não duplica sugestão |
| 8 | **Sugestão obsoleta → expira** | Diária expira em 24h · 2-dias em 48h · semanal em 7d |

---

## 📐 Configuração final (variáveis)

Adicionar em `00-variaveis-globais.md`:

```yaml
# === Engine de análise ===
ENGINE_ANALISE:               "n8n"                                # n8n | vercel-cron | github-actions
SHEETS_ID_RECOMENDACOES:      "{SHEETS_ID}"                        # ID da planilha
SHEETS_ABA_RECOMENDACOES:     "Recomendações"                      # nome da aba
WEBHOOK_RECOMENDACOES:        "{N8N_WEBHOOK_RECOMENDACOES}"        # disparo manual

# === Cadências ===
CRON_DIARIA:                  "0 7 * * *"
CRON_2DIAS:                   "0 8 */2 * *"
CRON_SEMANAL:                 "0 8 * * 1"

# === Thresholds (já no 00 mas referenciados aqui) ===
ROAS_ALVO_INGRESSO:           "{ROAS_ALVO_INGRESSO}"
CPM_MAX:                      "{CPM_MAX}"
HOOK_RATE_MIN:                "{HOOK_RATE_MIN}"
HOLD_RATE_MIN:                "{HOLD_RATE_MIN}"
BODY_RATE_MIN:                "{BODY_RATE_MIN}"

# === Janelas ===
JANELA_BASELINE_DIARIA:       "7d"
JANELA_BASELINE_2DIAS:        "mesma_janela_semana_anterior"
JANELA_BASELINE_SEMANAL:      "semana_anterior"

# === Expiração ===
EXPIRACAO_DIARIA:             "24h"
EXPIRACAO_2DIAS:              "48h"
EXPIRACAO_SEMANAL:            "7d"
```

---

## 🔗 Onde mora o quê

| Conceito | Fonte oficial |
|---|---|
| **Regras (D-01..S-04)** | aqui (`07-analise-automatica.md`) |
| **Pipeline Meta API (puxar dados)** | `08-meta-ads-pipeline.md` |
| **Workflows n8n (cron + execução)** | `automacoes/template/09-trafego-analise-meta.md` |
| **Schema completo da aba Recomendações** | aqui (seção acima) |
| **Adapter Sheets → dashboard** | `dashboard/template/03-fonte-de-dados.md` (Modo 7) |
| **Módulo dashboard "Sugestões"** | `dashboard/template/02-modulos-do-dashboard.md` (Módulo 10) |

---

## ✅ Checklist de implementação

- [ ] Aba `Recomendações` criada no Sheets do projeto com 24 colunas
- [ ] 3 workflows n8n criados (diária · 2 dias · semanal)
- [ ] Cron de cada workflow validado (testar com cron manual antes do agendado)
- [ ] Pipeline Meta Ads API funcionando (ver `08-meta-ads-pipeline.md`)
- [ ] 8 regras D-XX implementadas e testadas
- [ ] 8 regras C-XX implementadas e testadas
- [ ] 4 regras S-XX implementadas e testadas
- [ ] Idempotência testada (rodar 2x mesma análise não duplica)
- [ ] Expiração automática configurada (sugestões antigas viram `obsoleta`)
- [ ] Dashboard lê da aba e exibe sugestões `pendente` ordenadas por prioridade
- [ ] Workflow de "marcar como aplicada" no dashboard (botão por linha)
- [ ] Relatório mensal de qualidade das regras agendado

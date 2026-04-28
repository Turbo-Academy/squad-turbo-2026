# 00 · Variáveis preenchidas — Exemplo LPSG (Leo Tabari)

> Exemplo do template `00-variaveis-globais.md` preenchido com a operação real.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"
EDICAO:                   "01/26"
META_FATURAMENTO:         1500000              # R$ 1.5M
META_INGRESSOS:           1000
META_VENDAS_PRODUTO:      70
```

---

## 👥 Time atual (5 pessoas · padrão LPSG)

```yaml
EXPERT:                   "Leo Tabari (sócio)"
GESTOR_TRAFEGO:           "{nome} · 8k base + bônus ROAS"
GESTOR_OPERACAO:          "{nome} · 8k base"
DESIGNER:                 "{nome} · 6k base"
CLOSER:                   "{nome} · 3k base + 7% comissão"

PROXIMA_CONTRATACAO:      "Editor de vídeo (gatilho: 3 edições > R$ 1.2M líquido)"
TIMING_PREVISTO:          "Q4 2026"
```

---

## 🎯 SLAs LPSG

```yaml
SLA_CLOSER_CHECKOUT:      5 min
SLA_BOAS_VINDAS:          10 min
SLA_FICHA_RECEBIDA:       2 min
SLA_DUVIDA_ALUNO:         2 horas (úteis)
SLA_DECISAO_LEO:          24 horas
SLA_FALHA_AUTOMACAO:      5 min
SLA_APROVACAO_CRIATIVO:   24 horas
SLA_EDICAO_AULA:          48 horas
```

---

## 📅 Ritmo de operação

```yaml
WEEKLY_PLANNING:          "Segunda 10h · 30min · todos no Slack call"
WEEKLY_RETRO:             "Sexta 17h · 30min"
DAILY:                    "Seg-Sex 8h · 15min · só semanas W e W+1"
1:1_EXPERT_DRI:
  - "Leo ↔ Tráfego · 1ª segunda do mês · 15min"
  - "Leo ↔ Operação · 1ª terça do mês · 30min"
  - "Leo ↔ Designer · 1ª quarta do mês · 15min"
  - "Leo ↔ Closer · 1ª quinta do mês · 30min"
POS_MORTEM:               "Sex W+2 · 14:00-17:00 · todos"
```

---

## 🛠️ Ferramentas oficiais

```yaml
SLACK:                    "turbo-academy.slack.com"
NOTION:                   "turbo.notion.site/lpsg"
KANBAN_TOOL:              "Notion (template LPSG instalado)"
DASHBOARD_LPSG:           "https://dash.turbo.academy/lpsg-01-26"
PLANILHA_OPS:             "Sheets · 'Operacao-LPS-01-26'"
GRAVACAO_REUNIAO:         "Google Meet built-in"
```

---

## 🔠 Matriz RACI · DRIs nomeados

```yaml
CAPTACAO:                 "{nome_trafego}"
CONTEUDO_AULAS:           "Leo Tabari"
EDICAO_AULAS:             "{nome_operacao} (até contratar editor dedicado · ~Q4 2026)"
CRIATIVOS:                "{nome_designer}"
PAGINAS:                  "{nome_designer} (Next.js · usa template paginas-lpsg)"
MENSAGERIA:               "{nome_operacao}"
TSUNAMI_CARRINHO:         "{nome_operacao}"
CLOSER_VENDAS:            "{nome_closer}"
RECUPERACAO:              "{nome_closer}"
SUPORTE_GRUPO:            "{nome_operacao} (até contratar CS)"
SOCIAL_ORGANICO:          "Leo Tabari (executa) + {nome_social_freelancer} (roteiriza)"
AUTOMACOES_TECNICAS:      "{nome_operacao} (configura) + dev pontual (refactors)"
```

---

## 💸 Custo do time

```yaml
GESTOR_TRAFEGO:           "R$ 8.000/mês"
GESTOR_OPERACAO:          "R$ 8.000/mês"
DESIGNER:                 "R$ 6.000/mês"
CLOSER:                   "R$ 3.000 base + ~R$ 8.000 comissão = R$ 11.000/mês médio"

TOTAL_FOLHA:              "R$ 33.000/mês"
EXPERT:                   "—"           # sócio · % do líquido

% DO LIQUIDO_LANCAMENTO:  "5-7%"        # super saudável
```

---

## 🚀 Resultado esperado (LPSG 01/26 · 5 pessoas)

```yaml
INSCRITOS_EVENTO:         1.000
CONVERSAO_PITCH:          7-10%
VENDAS_PRODUTO:           70
TICKET_MEDIO:             R$ 18.000
FATURAMENTO_BRUTO:        R$ 1.260.000
FATURAMENTO_LIQUIDO:      ~R$ 950.000      # após Hotmart 9.99% + impostos

DEMANDA_DO_LEO:           "20-30h/semana"
DEMANDA_OUTROS:           "30-50h/semana cada"
```

---

## 📋 SOPs ativas

```yaml
PUBLICADAS_NO_NOTION:
  - "1 · Pré-evento checklist (T-7 dias)"
  - "2 · Lançar batelada de criativos"
  - "3 · Subir campanha Meta ASC"
  - "4 · Gravar uma aula"
  - "6 · Aprovar mensageria"
  - "8 · Atender checkout iniciado (≤5min)"
  - "9 · Conduzir conversa de recuperação"
  - "12 · Pós-mortem da edição"

EM_REDACAO:
  - "5 · Editar uma aula (vai criar quando contratar editor)"
  - "10 · Lançar nova edição (re-uso de assets)"
  - "11 · Onboarding de novo membro (precisa antes do próximo hire)"
```

---

## 🎯 Sinais que estão monitorados pra próxima contratação

```yaml
EDITOR_DE_VIDEO:
  gatilho:                "3 edições consecutivas com R$ 1.2M+ líquido"
  status:                 "Aguardando · monitorando"

CS_DEDICADO:
  gatilho:                "Time tá cobrindo · sem queixas · não urgente"
  status:                 "D+6 meses (depois do editor)"
```

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Configuração padrão LPSG 01/26.

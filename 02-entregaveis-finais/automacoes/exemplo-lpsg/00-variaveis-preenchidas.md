# 00 · Variáveis preenchidas — Exemplo LPSG (Leo Tabari)

> Exemplo do template `00-variaveis-globais.md` preenchido com dados reais.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"
EDICAO:                   "01/26"
TIMEZONE:                 "America/Sao_Paulo"
LOCALE:                   "pt-BR"
```

---

## 📅 Datas-chave

```yaml
INICIO_CAPTACAO:          "2026-05-02"
FIM_CAPTACAO:             "2026-05-11"
INICIO_AULAS:             "2026-05-12 07:00"
DATA_AULA_2:              "2026-05-13 07:00"
DATA_AULA_3:              "2026-05-14 07:00"
DATA_AULA_4:              "2026-05-15 07:00"
DATA_AULA_5:              "2026-05-16 07:00"
DATA_TIRADUVIDAS:         "2026-05-17 10:00"
DATA_PITCH:               "2026-05-18 20:00"
ABERTURA_FICHA:           "2026-05-19 06:50"
ABERTURA_GERAL:           "2026-05-19 07:00"
FECHA_3H:                 "2026-05-19 10:00"
FECHA_1DAY:               "2026-05-19 23:59"
FECHA_CARRINHO:           "2026-05-23 23:59"
INICIO_RECUPERACAO:       "2026-05-24"
FIM_RECUPERACAO:          "2026-05-30"
```

---

## 🛠️ Stack escolhida

```yaml
ORQUESTRADOR_PRINCIPAL:   "n8n cloud (Pro)"
CHATBOT_WHATSAPP:         "ManyChat (Pro)"
PLANILHA:                 "Google Sheets"
HOSPEDAGEM_N8N:           "n8n.cloud"
```

---

## 🎯 SLAs LPSG

```yaml
SLA_CLOSER_CHECKOUT:      5         # min
SLA_BOAS_VINDAS:          10        # min
SLA_FICHA_RECEBIDA:       2         # min
SLA_REEMBOLSO_HUMANO:     30        # min
SLA_FALHA_AUTOMACAO:      5         # min
```

---

## 📊 Volumes esperados (LPS 01/26)

```yaml
INSCRITOS_ESPERADOS:      1000
DISPAROS_TOTAIS:          200000     # 40 mensagens × 5000 leads ativos
TAXA_UTILITY:             80         # %
COMPRAS_ESPERADAS:        70
ABANDONOS_ESPERADOS:      210        # 3x compras
LEADS_RECUPERACAO:        210
RECUPERACAO_ESPERADA:     21         # 10% das tentativas
```

---

## 🪝 Webhooks ativos

```yaml
WEBHOOK_HOTMART_COMPRA:   "https://SEU-N8N.exemplo.com/webhook/hotmart-compra"
WEBHOOK_HOTMART_ABANDONO: "https://SEU-N8N.exemplo.com/webhook/hotmart-checkout-iniciado"
WEBHOOK_HOTMART_REEMBOLSO:"https://SEU-N8N.exemplo.com/webhook/hotmart-reembolso"
WEBHOOK_TYPEFORM_FICHA:   "https://SEU-N8N.exemplo.com/webhook/ficha-interesse"
WEBHOOK_MANYCHAT_REACAO:  "https://SEU-N8N.exemplo.com/webhook/reacao-emoji"
WEBHOOK_HEALTH_CHECK:     "https://SEU-N8N.exemplo.com/webhook/health"
```

---

## 🏷️ Tags e fases (LPS 01/26 = LPSG-W20 · ano 2026)

```yaml
TAG_IDENTIDADE:           "LPSG-W20"           # ISO week 20 de 2026 (12-18 maio)
TAG_ALIAS_HUMANO:         "LPSG-01-26"

CALENDARIO_FASES:
  W19 (5-11 mai 2026):    "PASSADO"            # captação · aquecimento
  W20 (12-18 mai 2026):   "PRESENTE"           # 5 aulas + pitch domingo 20h
  W21 (19-23 mai 2026):   "FUTURO"             # carrinho aberto seg-sex
  W22+ (24 mai → ∞):      "EX-ALUNO"           # tag global EX-ALUNO-LPSG

WORKFLOW_TRANSICAO:       "Ativo · cron 23:50 daily"
                          # roda toda meia-noite menos 10min
                          # detecta nova semana ISO · transiciona leads
```

### Tags-exemplo de um lead (jornada completa)

```yaml
LEAD_JOAO (entrou em 5 mai · comprou ingresso):
  W19_dia_5:    ["LPSG-W20", "LPSG-W20-PASSADO", "LPSG-W20-INSCRITO_INGRESSO"]
  W20_dia_12:   ["LPSG-W20", "LPSG-W20-PRESENTE", "LPSG-W20-PRESENTE-AULA-1",
                 "LPSG-W20-INSCRITO_INGRESSO"]
  W20_dia_15:   adicionou "LPSG-W20-PRESENTE-AULA-4", "LPSG-W20-FICHA-PREENCHIDA"
  W20_dia_18:   adicionou "LPSG-W20-PRESENTE-AULA-6"
  W21_dia_19:   ["LPSG-W20", "LPSG-W20-FUTURO", "LPSG-W20-FUTURO-CHECKOUT", ...]
  W21_dia_19:   comprou na janela 1h → "LPSG-W20-FUTURO-COMPROU", "ALUNO-ATIVO-ACELERADOR"
  W22_dia_24:   transição → "LPSG-W20-EX-ALUNO" + "EX-ALUNO-LPSG" (preserva COMPROU)
```

---

## 📊 Dashboard alimentado

```yaml
DASHBOARD_URL:            "https://dash.turbo.academy/lpsg-01-26"
SHEETS_ID:                "1abc...xyz"

ABAS_ATIVAS:
  - "Leads (5k linhas esperadas)"
  - "Vendas-Live (real-time durante carrinho)"
  - "Aulas (pico ao vivo)"
  - "Logs"
  - "Falhas"
  - "Alertas"
  - "Health"
```

---

## 🎯 Resultado esperado

```yaml
TAXA_ENTREGA_WHATSAPP:    "≥ 96%"
TAXA_LEITURA_WHATSAPP:    "≥ 75%"
TAXA_REACAO_AUDIO:        "≥ 42%"
SLA_CLOSER_MEDIA:         "≤ 4min"
RECUPERACAO_TOTAL:        "10-12% (21-25 vendas)"
UPTIME_AUTOMACAO:         "≥ 99.5%"
```

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Configuração padrão LPSG 01/26.

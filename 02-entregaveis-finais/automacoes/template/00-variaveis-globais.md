# 00 · Variáveis Globais — Automações LPSG

> Fonte da verdade das automações. Tools · tokens · webhooks · timezones.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"
EDICAO:                   "{EDICAO}"
TIMEZONE:                 "America/Sao_Paulo"
LOCALE:                   "pt-BR"
```

---

## 📅 Datas-chave (ancoram triggers temporais)

```yaml
INICIO_CAPTACAO:          "{DATA_CAPT_INICIO}"
FIM_CAPTACAO:             "{DATA_CAPT_FIM}"
INICIO_AULAS:             "{DATA_AULA_1}"            # seg 7h
DATA_AULA_2:              "{DATA_AULA_2}"            # ter 7h
DATA_AULA_3:              "{DATA_AULA_3}"            # qua 7h
DATA_AULA_4:              "{DATA_AULA_4}"            # qui 7h
DATA_AULA_5:              "{DATA_AULA_5}"            # sex 7h
DATA_TIRADUVIDAS:         "{DATA_TIRA}"              # sáb 10h
DATA_PITCH:               "{DATA_PITCH}"             # dom 20h
ABERTURA_FICHA:           "{DATA_FICHA}"             # seg 6h50
ABERTURA_GERAL:           "{DATA_GERAL}"             # seg 7h00
FECHA_3H:                 "{DATA_3H}"                # seg 10h
FECHA_1DAY:               "{DATA_1DAY}"              # seg 23h59
FECHA_CARRINHO:           "{DATA_FECHA}"             # sex 23h59
INICIO_RECUPERACAO:       "{DATA_REC_D1}"            # ter (D+1 fechamento)
FIM_RECUPERACAO:          "{DATA_REC_D7}"            # 7 dias depois
```

---

## 🛠️ Stack de automação (3 camadas)

```yaml
ORQUESTRADOR_PRINCIPAL:   "n8n"                       # ou Make · self-hosted ou cloud
ORQUESTRADOR_VERSAO:      "n8n 1.x"
ORQUESTRADOR_HOSPEDAGEM:  "{n8n.cloud | self-hosted-vps | docker-local}"

CHATBOT_WHATSAPP:         "ManyChat"                  # ou WATI · Twilio · 360dialog
CHATBOT_PLANO:            "{free | pro | premium}"

PLANILHA:                 "Google Sheets"             # alimentação do dashboard
TIMEZONE_PLANILHA:        "America/Sao_Paulo"
```

> **Por que n8n + ManyChat?** n8n orquestra a lógica complexa (webhook → enrich → Hotmart → Sheets). ManyChat resolve o último km de WhatsApp/Instagram com UX nativa.

---

## 🔐 Credenciais (todas em `.env` · nunca commitar)

```yaml
# Hotmart
HOTMART_CLIENT_ID:        "{HOTMART_CLIENT_ID}"
HOTMART_CLIENT_SECRET:    "{HOTMART_CLIENT_SECRET}"
HOTMART_WEBHOOK_HOTTOK:   "{WEBHOOK_HOTTOK}"          # validação webhook
HOTMART_PRODUCT_ID:       "{PRODUCT_ID}"
HOTMART_OFFER_KEY_INGRESSO: "{OFFER_INGRESSO}"
HOTMART_OFFER_KEY_PRODUTO:  "{OFFER_PRODUTO}"

# Meta WhatsApp Business API (Cloud API)
WABA_PHONE_NUMBER_ID:     "{PHONE_NUMBER_ID}"
WABA_ACCESS_TOKEN:        "{WABA_LONG_LIVED_TOKEN}"   # 60 dias
WABA_BUSINESS_ID:         "{BUSINESS_ID}"
WABA_VERIFY_TOKEN:        "{VERIFY_WEBHOOK}"

# Meta Ads (CAPI · enviar conversões pra otimização)
META_PIXEL_ID:            "{PIXEL_ID}"
META_CAPI_TOKEN:          "{CAPI_TOKEN}"
META_TEST_EVENT_CODE:     "{TEST_EVENT_CODE}"          # remover em produção

# Google Sheets
GOOGLE_SHEETS_ID:         "{SHEETS_ID}"
GOOGLE_SERVICE_ACCOUNT:   "{SERVICE_ACCOUNT_JSON}"     # base64

# ManyChat
MANYCHAT_API_KEY:         "{MANYCHAT_API_KEY}"
MANYCHAT_PAGE_ID:         "{PAGE_ID}"

# YouTube
YOUTUBE_API_KEY:          "{YT_KEY}"
YOUTUBE_LIVE_IDS:         "[A1, A2, A3, A4, A5, A6]"

# n8n
N8N_WEBHOOK_BASE_URL:     "https://n8n.{dominio}.com/webhook"
N8N_BASIC_AUTH_USER:      "{USER}"
N8N_BASIC_AUTH_PASS:      "{PASS}"
```

---

## 🪝 Webhooks (URLs públicas)

```yaml
WEBHOOK_HOTMART_COMPRA:   "${N8N_WEBHOOK_BASE_URL}/hotmart-compra"
WEBHOOK_HOTMART_ABANDONO: "${N8N_WEBHOOK_BASE_URL}/hotmart-abandono"
WEBHOOK_HOTMART_REEMBOLSO:"${N8N_WEBHOOK_BASE_URL}/hotmart-reembolso"
WEBHOOK_TYPEFORM_FICHA:   "${N8N_WEBHOOK_BASE_URL}/ficha-interesse"
WEBHOOK_MANYCHAT_REACAO:  "${N8N_WEBHOOK_BASE_URL}/manychat-reacao-emoji"
WEBHOOK_META_LEAD_AD:     "${N8N_WEBHOOK_BASE_URL}/meta-lead"
WEBHOOK_HEALTH_CHECK:     "${N8N_WEBHOOK_BASE_URL}/health"        # monitora cron jobs
```

---

## 🎯 SLAs (acordos de tempo de resposta)

```yaml
SLA_CLOSER_CHECKOUT:      5         # min · resposta a checkout iniciado (humano)
SLA_BOAS_VINDAS:          10        # min · após compra de ingresso
SLA_FICHA_RECEBIDA:       2         # min · confirmação de ficha
SLA_REEMBOLSO_HUMANO:     30        # min · alerta pro time
SLA_FALHA_AUTOMACAO:      5         # min · alerta no Slack/Telegram interno
```

---

## 📊 Volumes esperados

```yaml
INSCRITOS_ESPERADOS:      "{INSCRITOS_META}"          # ex: 1000
DISPAROS_TOTAIS:          "{DISPAROS_TOTAIS}"         # ex: 200000 (40 mensagens × 5000 leads)
TAXA_UTILITY:             80                          # %
COMPRAS_ESPERADAS:        "{COMPRAS_META}"            # ex: 70 vendas
ABANDONOS_ESPERADOS:      "{ABANDONOS_EST}"           # ex: 200 (3x compras)
LEADS_RECUPERACAO:        "{LEADS_REC}"               # ex: 200
```

---

## 🏷️ Sistema de tags (ver `08-sistema-de-tags-e-fases.md` pra detalhes)

```yaml
TAG_IDENTIDADE:           "LPSG-W{NN}"
                          # NN = ISO week number do ano do evento
                          # ex: evento 12-18 mai 2026 → LPSG-W20

TAG_FASE_PASSADO:         "LPSG-W{NN}-PASSADO"        # semana ANTES do evento
TAG_FASE_PRESENTE:        "LPSG-W{NN}-PRESENTE"       # semana DO evento (seg-dom)
TAG_FASE_FUTURO:          "LPSG-W{NN}-FUTURO"         # semana DO carrinho (seg-sex)
TAG_FASE_EX_ALUNO:        "LPSG-W{NN}-EX-ALUNO"       # depois do carrinho fechar

TAG_GLOBAL_EX_ALUNO:      "EX-ALUNO-LPSG"             # adicionada na 1ª transição p/ EX-ALUNO

TAGS_COMPORTAMENTO:       "LPSG-W{NN}-{ACAO}"         # acumulam · ex: -INSCRITO_INGRESSO,
                                                       # -PRESENTE-AULA-1, -FICHA-PREENCHIDA,
                                                       # -FUTURO-CHECKOUT, -FUTURO-COMPROU
```

---

## 🚦 Estados do fluxo (state machine do lead · convertido pra tags)

```yaml
ESTADOS_DO_LEAD (legado · sendo migrado pra tags):
  - "INSCRITO_INGRESSO"           # → tag LPSG-W{NN}-INSCRITO_INGRESSO
  - "GRUPO_ENTROU"                # → tag LPSG-W{NN}-GRUPO_ENTROU
  - "AULA_N_PRESENTE"             # → tag LPSG-W{NN}-PRESENTE-AULA-{N}
  - "FICHA_PREENCHIDA"            # → tag LPSG-W{NN}-FICHA-PREENCHIDA
  - "PITCH_ASSISTIU"              # → tag LPSG-W{NN}-PRESENTE-AULA-6
  - "CHECKOUT_INICIADO"           # → tag LPSG-W{NN}-FUTURO-CHECKOUT
  - "COMPROU_PRODUTO"             # → tag LPSG-W{NN}-FUTURO-COMPROU + ALUNO-ATIVO-ACELERADOR
  - "ABANDONOU_CHECKOUT"          # tag LPSG-W{NN}-FUTURO-CHECKOUT sem -COMPROU
  - "EM_RECUPERACAO_D1"           # → tag LPSG-W{NN}-EX-ALUNO + lógica de dias
  - "RECUPERADO"                  # → tag LPSG-W{NN}-FUTURO-RECUPERADO
  - "REEMBOLSO_INCONDICIONAL"     # → tag LPSG-W{NN}-REEMBOLSO-7D
  - "REEMBOLSO_CONDICIONAL"       # → tag LPSG-W{NN}-REEMBOLSO-COND
  - "ALUNO_ATIVO"                 # → tag ALUNO-ATIVO-ACELERADOR (global)
```

> **Direção:** novas implementações usam tags. Sheets mantém ambos durante migração (coluna `estado_atual` legacy + coluna `tags` novo padrão).

---

## 🎯 Default LPSG (Leo Tabari)

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"
ORQUESTRADOR_PRINCIPAL:   "n8n (cloud)"
CHATBOT_WHATSAPP:         "ManyChat (Pro)"
TIMEZONE:                 "America/Sao_Paulo"
SLA_CLOSER_CHECKOUT:      5
SLA_BOAS_VINDAS:          10
INSCRITOS_ESPERADOS:      1000
COMPRAS_ESPERADAS:        70
DISPAROS_TOTAIS:          200000
TAXA_UTILITY:             80
```

# 06 · Integrações — APIs externas

> Hotmart · Meta WABA · Meta CAPI · Google Sheets · YouTube · ManyChat. Setup detalhado.

---

## 🔌 Mapa de integrações

```
                           ┌──────────────┐
              ┌────────────│   n8n        │────────────┐
              │            │ orquestrador │            │
              │            └──────┬───────┘            │
              │                   │                    │
       ┌──────▼──────┐    ┌───────▼────────┐    ┌──────▼──────┐
       │  Hotmart    │    │   Sheets       │    │  WABA       │
       │  webhooks   │    │   storage      │    │  templates  │
       └─────────────┘    └────────────────┘    └─────────────┘
              │                                         │
       ┌──────▼──────┐                          ┌──────▼──────┐
       │  Meta CAPI  │                          │  ManyChat   │
       │  conversões │                          │  fluxos     │
       └─────────────┘                          └─────────────┘
              │                                         │
              └─────────┬───────────────────────────────┘
                        │
                  ┌─────▼─────┐
                  │  YouTube  │
                  │  Live API │
                  └───────────┘
```

---

## 1️⃣ Hotmart · webhooks + API

### Webhooks (você recebe eventos)

#### Setup

1. **Painel Hotmart → Ferramentas → Webhooks**
2. Criar URL: `${N8N_BASE}/hotmart-{evento}`
3. Selecionar eventos:
   - `PURCHASE_APPROVED`
   - `PURCHASE_REFUNDED`
   - `PURCHASE_COMPLETE`
   - `CHECKOUT_INITIATED` (chamado de "carrinho abandonado")
   - `SUBSCRIPTION_*` (se tem recorrência)
4. Copiar **HOTTOK** gerado · adicionar no `.env` do n8n

#### Eventos importantes pra LPSG

| Evento | Quando dispara | Uso no LPSG |
|---|---|---|
| `PURCHASE_APPROVED` | Pagamento aprovado | Onboarding · marca INSCRITO |
| `PURCHASE_REFUNDED` | Reembolso processado | Remove acesso · marca REEMBOLSO |
| `CHECKOUT_INITIATED` | Lead bateu no checkout | SLA closer ≤ 5min |

#### Validação de webhook (segurança)

```javascript
// SEMPRE validar HOTTOK
if (request.body.hottok !== process.env.HOTMART_HOTTOK) {
  return response.status(401).send("Unauthorized");
}
```

### API REST (você consulta dados)

#### Auth · OAuth2 client_credentials

```bash
# Token expira em 1h · cachear no n8n credentials
curl --location 'https://api-sec-vlc.hotmart.com/security/oauth/token' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=client_credentials' \
  --data-urlencode "client_id=${HOTMART_CLIENT_ID}" \
  --data-urlencode "client_secret=${HOTMART_CLIENT_SECRET}"
```

#### Endpoints principais

```yaml
GET /payments/api/v1/sales:
  descricao:              "Listar vendas (com filtros de data · produto · status)"
  uso:                    "Cron 30s pra dashboard real-time"

GET /payments/api/v1/sales/users:
  descricao:              "Detalhes do comprador"
  uso:                    "Enriquecer lead após compra"

GET /payments/api/v1/refunds:
  descricao:              "Reembolsos do período"
  uso:                    "Métrica de devolução · dashboard"

GET /payments/api/v1/abandoned:
  descricao:              "Carrinhos abandonados"
  uso:                    "Sync com Sheets · recuperação"
```

---

## 2️⃣ Meta WhatsApp Business API (Cloud API)

### Setup

```yaml
PRE_REQUISITOS:
  - "Business Manager configurado"
  - "Phone Number verificado"
  - "WABA (WhatsApp Business Account) criado"
  - "Display name aprovado"

SETUP_PASSOS:
  1: "developers.facebook.com → Meu App → WhatsApp"
  2: "Copiar PHONE_NUMBER_ID e BUSINESS_ID"
  3: "Generate token · upgradar pra long-lived (60 dias)"
  4: "Configurar webhook URL no Meta · validar com VERIFY_TOKEN"
  5: "Inscrever no evento 'messages'"
```

### Envio de mensagem (template)

```javascript
// POST graph.facebook.com/v22.0/{PHONE_NUMBER_ID}/messages
const body = {
  messaging_product: "whatsapp",
  to: "5511999999999",  // sem + · só dígitos
  type: "template",
  template: {
    name: "lembrete_aula_lpsg_v1",
    language: { code: "pt_BR" },
    components: [
      {
        type: "header",
        parameters: [{ type: "text", text: "1" }]  // {{1}} = "1"
      },
      {
        type: "body",
        parameters: [
          { type: "text", text: "João" },
          { type: "text", text: "Desafio LPSG" },
          { type: "text", text: "às 07:00" },
          // ...
        ]
      },
      {
        type: "button",
        sub_type: "url",
        index: "0",
        parameters: [{ type: "text", text: "live-link-aula-1" }]  // suffix da URL
      }
    ]
  }
};

// Headers
Authorization: Bearer {WABA_ACCESS_TOKEN}
Content-Type: application/json
```

### Receber mensagem (webhook)

```javascript
// POST /webhooks/waba
{
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "5511999999999",
          "id": "wamid.HBg...",
          "timestamp": "1234567890",
          "type": "text",
          "text": { "body": "Quanto custa?" }
        }],
        "contacts": [{
          "profile": { "name": "João Silva" },
          "wa_id": "5511999999999"
        }]
      }
    }]
  }]
}

// Validar assinatura
const hmac = crypto.createHmac("sha256", process.env.WABA_APP_SECRET);
const expected = "sha256=" + hmac.update(rawBody).digest("hex");
if (request.headers["x-hub-signature-256"] !== expected) {
  return response.status(401).send("Invalid signature");
}
```

### Templates · classificação Utility vs Marketing

> Ver `mensageria-lpsg/whatsapp-templates-meta.md` para regras detalhadas.

```yaml
UTILITY_OBRIGATORIO_QUANDO:
  - "Confirma transação iniciada pelo lead (compra · ficha · cadastro)"
  - "Sem CTA promocional"
  - "Sem oferta · sem cupom · sem 'compre agora'"
  - "Mensagem é genérica · sem segmentação por interesse"

MARKETING_QUANDO:
  - "Inicia conversa · não há transação anterior"
  - "Tem CTA promocional · cupom · oferta"
  - "Disparo em massa segmentado por interesse"
  - "Áudio · vídeo · stickers"

CUSTO:
  Utility:                "R$ 0.05-0.08 por mensagem"
  Marketing:              "R$ 0.30-0.40 por mensagem (5-8x mais caro)"
```

---

## 3️⃣ Meta CAPI · Conversion API

### Por que importa

```
Pixel browser-side perde 30-40% dos eventos:
- Adblockers
- Safari ITP (Intelligent Tracking Prevention)
- iOS 14+ ATT
- Conexões com VPN/Tor

CAPI server-side captura 100% dos eventos:
- Roda no n8n (server)
- Envia direto pra Meta
- Deduplica via event_id

RESULTADO: ROAS aparente sobe 25-40% · ASC otimiza melhor
```

### Setup

```yaml
PRE_REQUISITOS:
  - "Pixel ID configurado"
  - "CAPI access token gerado em Events Manager"

SETUP:
  1: "Events Manager → Settings → Conversions API"
  2: "Generate access token · copiar"
  3: "Adicionar em .env como META_CAPI_TOKEN"
```

### Envio de evento (Purchase)

```javascript
// POST graph.facebook.com/v22.0/{PIXEL_ID}/events
const body = {
  data: [{
    event_name: "Purchase",
    event_time: Math.floor(Date.now() / 1000),
    event_id: "txn_ABC123",  // chave de deduplicação
    action_source: "website",
    event_source_url: "https://lp.dominio.com.br/lpsg",
    user_data: {
      em: [sha256(email.toLowerCase().trim())],
      ph: [sha256(phoneOnly digits)],
      fbc: cookieFbc || undefined,
      fbp: cookieFbp || undefined,
      client_ip_address: clientIp,
      client_user_agent: userAgent
    },
    custom_data: {
      currency: "BRL",
      value: 62.00,
      content_ids: ["LPS_ingresso"],
      content_type: "product"
    }
  }],
  access_token: META_CAPI_TOKEN,
  test_event_code: process.env.META_TEST_EVENT_CODE  // remover em produção
};
```

### Eventos importantes pra LPSG

| Evento CAPI | Quando enviar |
|---|---|
| `PageView` | Lead acessa página de ingresso |
| `Lead` | Lead preenche ficha de interesse |
| `InitiateCheckout` | Click em "garantir vaga" |
| `Purchase` | Hotmart webhook compra (ingresso ou produto) |
| `ViewContent` | Lead vê pitch (Aula 6) |

### Match quality · garantir bom score

```yaml
MIN_DADOS_OBRIGATORIO:    "email + phone + IP + user_agent"

OPCIONAIS_QUE_AJUDAM:
  - "fbc cookie (Facebook click ID)"
  - "fbp cookie (Facebook browser ID)"
  - "external_id (interno · ex: hotmart_transaction_id)"

HASH_OBRIGATORIO:         "SHA256 · lower-case · trim · sem formatação"
                          # email → "joao@email.com" → sha256("joao@email.com")
                          # phone → "11999999999" (sem +55 · só dígitos)
```

---

## 4️⃣ Google Sheets · storage

### Setup com Service Account

```yaml
PRE_REQUISITOS:
  - "Projeto Google Cloud criado"
  - "Sheets API habilitada"
  - "Service Account criado · JSON download"

SETUP:
  1: "console.cloud.google.com → APIs & Services → Sheets API · Enable"
  2: "Service Accounts → Create · download JSON"
  3: "Compartilhar planilha com email do service account (Editor)"
  4: "Adicionar JSON em .env como GOOGLE_SERVICE_ACCOUNT (base64)"
```

### Operações no n8n

```javascript
// Adicionar linha (append)
sheets.append({
  spreadsheetId: process.env.GOOGLE_SHEETS_ID,
  range: "Leads!A:Z",
  valueInputOption: "USER_ENTERED",
  insertDataOption: "INSERT_ROWS",
  resource: {
    values: [[ /* linha de dados */ ]]
  }
});

// Buscar com filtro
const result = sheets.get({
  spreadsheetId: process.env.GOOGLE_SHEETS_ID,
  range: "Leads!A:Z"
});

const filtered = result.data.values
  .slice(1)  // pula header
  .filter(row => row[ESTADO_COL] === "INSCRITO_INGRESSO");

// Atualizar célula específica (precisa do row number)
sheets.update({
  spreadsheetId: process.env.GOOGLE_SHEETS_ID,
  range: `Leads!${col}${row}`,
  valueInputOption: "USER_ENTERED",
  resource: { values: [[ newValue ]] }
});

// Batch update (múltiplas células · evita rate limit)
sheets.batchUpdate({
  spreadsheetId: process.env.GOOGLE_SHEETS_ID,
  resource: {
    data: [
      { range: "Leads!E2", values: [["INSCRITO"]] },
      { range: "Leads!E3", values: [["INSCRITO"]] }
    ],
    valueInputOption: "USER_ENTERED"
  }
});
```

### Schema da planilha LPSG

```yaml
ABA_LEADS:                 "Lead 1 por linha"
COLUNAS:                   ["phone", "email", "nome", "fonte", "data_inscricao",
                            "estado_atual", "ultima_atualizacao", "ficha_preenchida",
                            "comprou", "valor_compra", "janela_compra",
                            "em_recuperacao", "responsavel_closer",
                            "engajamento_aula_1", "engajamento_aula_2", ...
                            "checkout_iniciado_em", "manychat_id", ...]

ABA_VENDAS_LIVE:           "Venda 1 por linha (atualiza a cada 30s durante carrinho)"
COLUNAS:                   ["timestamp", "buyer_name", "valor", "offer_code",
                            "janela", "transaction_id"]

ABA_AULAS:                 "Pico ao vivo das aulas (1 row a cada 5min durante live)"
COLUNAS:                   ["timestamp", "youtube_id", "pico_concurrent", "aula_nome"]

ABA_LOGS:                  "Toda execução de workflow"
COLUNAS:                   ["timestamp", "workflow_name", "qtd_processada",
                            "status (ok/erro)", "mensagem"]

ABA_FALHAS:                "Erros pra revisar"
COLUNAS:                   ["timestamp", "workflow", "erro", "stack_trace", "input_data"]
```

---

## 5️⃣ YouTube Live API

### Setup

```yaml
PRE_REQUISITOS:
  - "Google Cloud → YouTube Data API v3 habilitada"
  - "API Key criada · com restrição de domínio (recomendado)"

SETUP:
  1: "console.cloud.google.com → YouTube Data API v3 → Enable"
  2: "Credentials → Create · API Key"
  3: "Restringir a YouTube Data API v3 (segurança)"
  4: "Adicionar em .env como YOUTUBE_API_KEY"
```

### Operações principais

```javascript
// Pegar pico ao vivo de uma live em andamento
const response = await fetch(
  `https://www.googleapis.com/youtube/v3/videos?` +
  `id=${VIDEO_ID}&` +
  `part=liveStreamingDetails,statistics&` +
  `key=${YOUTUBE_API_KEY}`
);

const data = await response.json();
const concurrent = data.items[0].liveStreamingDetails.concurrentViewers;
const totalViews = data.items[0].statistics.viewCount;

// Pegar lista de lives em andamento (canal)
const lives = await fetch(
  `https://www.googleapis.com/youtube/v3/search?` +
  `channelId=${CHANNEL_ID}&` +
  `eventType=live&` +
  `type=video&` +
  `part=snippet&` +
  `key=${YOUTUBE_API_KEY}`
);
```

### Limites

```yaml
QUOTA_DIARIA:             "10.000 unidades/dia"
CUSTO_POR_OPERACAO:
  videos.list:            "1 unidade"
  search.list:            "100 unidades"
  liveBroadcasts.list:    "1 unidade"

CALCULO_LPSG:             "6 aulas × 12 polls/hora × 1 unidade = 72 unidades/dia"
                          # bem dentro do limite
```

---

## 6️⃣ ManyChat · API + webhooks

### Setup

```yaml
PRE_REQUISITOS:
  - "Conta ManyChat (Pro recomendado)"
  - "Page conectada ao Facebook · Instagram · WhatsApp"

SETUP_API:
  1: "ManyChat → Settings → API → Generate Token"
  2: "Copiar · adicionar em .env como MANYCHAT_API_KEY"
```

### Operações · API

```javascript
// Adicionar contato
POST https://api.manychat.com/fb/subscriber/createSubscriberWithCustomData
Headers:
  Authorization: Bearer ${MANYCHAT_API_KEY}
Body:
  {
    "phone": "+5511999999999",
    "first_name": "João",
    "last_name": "Silva",
    "consent_phrase": "Aceito receber mensagens",
    "custom_fields": {
      "sigla_evento": "LPS",
      "valor_compra": 62
    }
  }

// Disparar fluxo
POST https://api.manychat.com/fb/sending/sendFlow
Body:
  {
    "subscriber_id": "12345",
    "flow_ns": "content20240412141213_xyz123"
  }

// Atualizar custom field
POST https://api.manychat.com/fb/subscriber/setCustomField
Body:
  {
    "subscriber_id": "12345",
    "field_id": "67890",
    "field_value": "INSCRITO_INGRESSO"
  }
```

### External Request (ManyChat → n8n)

```yaml
DENTRO_DO_FLUXO:
  Action:                  "External Request (POST)"
  URL:                     "${N8N_BASE}/manychat-evento"
  Headers:
    Content-Type:          "application/json"
    X-Secret:              "{SECRET}"
  Body:
    {
      "event": "{event_name}",
      "user_id": "{{user.id}}",
      "phone": "{{user.phone}}",
      "context": "{{custom_field.context}}"
    }
```

---

## 🔄 Fluxo de tokens · ciclo de vida

```yaml
HOTMART_TOKEN:
  duracao:                "1 hora"
  refresh:                "Cachear no n8n · auto-refresh 5min antes de expirar"

WABA_LONG_LIVED_TOKEN:
  duracao:                "60 dias"
  refresh:                "Manual · alerta 7 dias antes"
  rotacao:                "Renovar via Graph API · sobrescrever .env"

GOOGLE_SERVICE_ACCOUNT_TOKEN:
  duracao:                "1 hora (auto-renovado pelo SDK)"
  refresh:                "Automático"

MANYCHAT_API_KEY:
  duracao:                "Permanente (até revogar)"
  refresh:                "Não expira"

YOUTUBE_API_KEY:
  duracao:                "Permanente"
  refresh:                "Não expira"
```

---

## ✅ Checklist de integrações

```
[ ] Hotmart · webhooks configurados (PURCHASE_APPROVED, CHECKOUT_INITIATED, REFUND)
[ ] Hotmart · HOTTOK validado em todo webhook
[ ] Hotmart · API client_id + secret no .env
[ ] WABA · Phone Number verificado
[ ] WABA · Long-lived token (60 dias)
[ ] WABA · Webhook validado com VERIFY_TOKEN
[ ] WABA · X-Hub-Signature validado em mensagens recebidas
[ ] Meta CAPI · access token gerado
[ ] Meta CAPI · 5 eventos enviando (PageView, Lead, IC, Purchase, ViewContent)
[ ] Meta CAPI · match quality > 7 (Events Manager)
[ ] Sheets · Service Account com acesso de Editor
[ ] Sheets · 5 abas criadas (Leads, Vendas-Live, Aulas, Logs, Falhas)
[ ] YouTube · API Key restrita ao domínio
[ ] ManyChat · API key gerada
[ ] ManyChat · External Request testado pra n8n
[ ] Todos os tokens em .env (nada hardcoded)
[ ] Alerta 7 dias antes do WABA token expirar
```

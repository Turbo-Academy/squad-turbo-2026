# 02 · Fluxos de captação — anúncio até inscrito

> Do click no anúncio até o lead estar dentro do grupo do evento.

---

## 🎯 Fluxos desta etapa (4)

| # | Fluxo | Trigger | Output |
|---|---|---|---|
| 1 | **Captura de lead na página** | Pixel + CAPI | Evento `Lead` na Meta + Sheets |
| 2 | **Compra de ingresso** | Hotmart webhook compra | Lead `INSCRITO_INGRESSO` + ManyChat |
| 3 | **Onboarding pós-compra** | Cron 10min após compra | Mensagem boas-vindas + link grupo |
| 4 | **Ficha de interesse submetida** | POST `/ficha-interesse` da página | Lead score + tier (HOT/WARM/COLD) + roteamento |

---

## 1️⃣ Captura de lead — Pixel + CAPI

### Quando dispara

Visitante clica no botão "Garantir vaga" da página de ingresso.

### Fluxo

```
[Click no botão "Garantir vaga"]
    ↓
[Pixel Meta dispara 'InitiateCheckout' no browser]
    ↓
[Página redireciona pra Hotmart checkout]
    ↓
[Backend dispara CAPI] ─→ [n8n webhook /meta-capi-initiate-checkout]
    ↓
[n8n] envia evento server-side pra Meta
    ↓
[Meta recebe duplicado · deduplica por event_id]
```

### Por que disparar Pixel + CAPI

```yaml
PIXEL_BROWSER:            "Some 30-40% por adblocker · Safari ITP · iOS 14+"
CAPI_SERVER_SIDE:         "Não some · roda no servidor · legítimo"
DEDUPLICACAO:             "Mesmo event_id em ambos · Meta detecta duplicata"

RESULTADO:
  - "ROAS aparente sobe 25-40% (eventos não perdidos)"
  - "Otimização do ASC funciona melhor (mais sinal)"
  - "Custo por aquisição cai (algoritmo enxerga conversão)"
```

### Workflow n8n (resumo)

```
Webhook trigger:    POST /meta-capi-initiate-checkout
    ↓
Validate:           event_id presente · valor válido · UTMs válidos
    ↓
Hash PII:           SHA256 de email + phone (Meta exige)
    ↓
HTTP Request:       POST graph.facebook.com/v22.0/{PIXEL_ID}/events
    body: {
      data: [{
        event_name: "InitiateCheckout",
        event_time: timestamp,
        event_id: "{{event_id}}",
        action_source: "website",
        user_data: {
          em: [hash(email)],
          ph: [hash(phone)],
          fbc: "{{cookie_fbc}}",
          fbp: "{{cookie_fbp}}",
          client_ip_address: "{{ip}}",
          client_user_agent: "{{user_agent}}"
        },
        custom_data: {
          value: 62,
          currency: "BRL"
        }
      }],
      access_token: "{META_CAPI_TOKEN}"
    }
    ↓
Log to Sheets:      timestamp · event_id · user data · resposta da Meta
```

---

## 2️⃣ Compra de ingresso — Hotmart webhook

### Quando dispara

Lead finaliza compra do ingresso (R$ 62) na Hotmart.

### Fluxo

```
[Lead finaliza pagamento]
    ↓
[Hotmart envia webhook] ─→ [n8n webhook /hotmart-compra]
    ↓
[n8n valida HOTTOK]
    ↓
[Enrich data] (limpa telefone · valida email · pega UTMs)
    ↓
[Sheets] grava INSCRITO_INGRESSO
    ↓
[Meta CAPI] envia 'Purchase' (R$ 62)
    ↓
[ManyChat] adiciona contato + dispara fluxo boas-vindas (atrasado em 10 min)
```

### Workflow n8n (detalhado)

```javascript
// Webhook trigger
POST /hotmart-compra

// 1. Validar HOTTOK
IF body.hottok !== process.env.HOTMART_WEBHOOK_HOTTOK {
  RESPOND 401 Unauthorized
}

// 2. Filtrar evento (só PURCHASE_APPROVED)
IF body.event !== "PURCHASE_APPROVED" {
  RESPOND 200 OK (ignored)
}

// 3. Filtrar produto (só ingresso · não confundir com produto premium)
IF body.data.product.id !== process.env.HOTMART_PRODUCT_ID
   OR body.data.purchase.offer.code !== process.env.HOTMART_OFFER_KEY_INGRESSO {
  RESPOND 200 OK (ignored · é compra de outro produto)
}

// 4. Enrich
const lead = {
  email: body.data.buyer.email,
  phone: cleanPhone(body.data.buyer.checkout_phone), // remove +55 · só dígitos
  nome: body.data.buyer.name,
  valor_compra: body.data.purchase.price.value,
  fonte: body.data.purchase.tracking_source || "direct",
  utm_source: body.data.purchase.tracking?.source,
  utm_campaign: body.data.purchase.tracking?.campaign,
  data_inscricao: new Date().toISOString(),
  estado_atual: "INSCRITO_INGRESSO"
};

// 5. Append to Sheets (aba Leads)
sheets.append({
  spreadsheetId: GOOGLE_SHEETS_ID,
  range: "Leads!A:Z",
  values: [[lead.phone, lead.email, lead.nome, ...]]
});

// 6. Meta CAPI Purchase
http.post("https://graph.facebook.com/v22.0/{PIXEL_ID}/events", {
  data: [{
    event_name: "Purchase",
    event_time: timestamp,
    event_id: body.data.purchase.transaction,
    action_source: "website",
    user_data: { em: [hash(lead.email)], ph: [hash(lead.phone)] },
    custom_data: { value: 62, currency: "BRL" }
  }],
  access_token: META_CAPI_TOKEN
});

// 7. Adicionar no ManyChat
http.post("https://api.manychat.com/fb/subscriber/createSubscriber", {
  whatsapp_phone: lead.phone,
  first_name: lead.nome.split(" ")[0],
  last_name: lead.nome.split(" ").slice(1).join(" "),
  custom_fields: {
    sigla_evento: "LPS",
    edicao: "01/26",
    valor_compra: lead.valor_compra
  }
});

// 8. Schedule disparo boas-vindas (10 min depois)
n8n.schedule({
  workflow: "onboarding-pos-compra",
  delay: "10m",
  data: { phone: lead.phone, nome: lead.nome }
});

RESPOND 200 OK
```

---

## 3️⃣ Onboarding pós-compra — boas-vindas

### Quando dispara

10 minutos após `INSCRITO_INGRESSO`. Atraso intencional pra:
- Hotmart processar definitivamente (evita reembolso instantâneo)
- Lead estar ainda no contexto da compra

### Fluxo

```
[Cron 10 min depois] ─→ [n8n] ─→ [ManyChat]
    ↓
[ManyChat envia template Utility "boas_vindas_lpsg"]
    ↓
[Lead recebe mensagem]
    ↓
[Mensagem tem botão "ENTRAR NO GRUPO"] → link wa.me/+5511XXXX
    ↓
[Lead entra no grupo] → bot do grupo detecta entrada
    ↓
[n8n webhook do bot] → grava GRUPO_ENTROU no Sheets
```

### Template Utility (Meta API)

> Ver `mensageria-lpsg/template/whatsapp-templates-meta.md` pra estrutura completa.

```yaml
TEMPLATE_NAME:            "boas_vindas_lpsg_v1"
CATEGORY:                 "UTILITY"
LANGUAGE:                 "pt_BR"

HEADER:                   "🎉 Confirmado! Sua vaga no {{1}} chegou."
BODY:
  text: |
    Olá, {{2}}!

    Sua inscrição no {{1}} foi confirmada com sucesso.
    Acesso ao evento: {{3}}

    Pra começar, entra no grupo agora:

FOOTER:                   "Te vejo lá dentro · {{4}}"
BUTTONS:
  - type: URL
    text: "ENTRAR NO GRUPO"
    url: "{{5}}"            # wa.me/+5511XXXX

VARIABLES:
  {{1}} = nome do evento ("Desafio LPSG")
  {{2}} = primeiro nome do lead
  {{3}} = data de início ("12 de maio")
  {{4}} = nome do expert ("Leo Tabari")
  {{5}} = link do grupo
```

---

## 4️⃣ Ficha de interesse — submit · score · roteamento

> Estrutura da ficha (11 etapas): `paginas/template/08-ficha-interesse.md`
> Mensageria por tier após submit: `mensageria/template/mensageria-template.md` (FASE 4-B)

### Quando dispara

Lead clica em "Enviar" na etapa 11 da ficha de interesse. A página dispara `POST /ficha-interesse`.

### Fluxo

```
[Lead submete ficha (etapa 11)]
    ↓
[Página → POST /api/ficha-interesse no Next.js]
    ↓
[API Route grava no Sheets · calcula score · responde 200]
    ↓
[API dispara webhook] ─→ [n8n /ficha-interesse-submetida]
    ↓
[n8n] Calcula tier definitivo + roteia
    ├─→ HOT  → ManyChat tag `tier-hot`  + CAPI `LeadQualified` + fila SDR
    ├─→ WARM → ManyChat tag `tier-warm` + adiciona no grupo VIP
    └─→ COLD → ManyChat tag `tier-cold` + nutrição perpétua
    ↓
[n8n] Schedule disparo de mensagem por tier (15 min depois)
    ↓
[Lead recebe mensagem específica do tier no WhatsApp]
```

### Workflow n8n (detalhado)

```javascript
// Webhook trigger
POST /ficha-interesse-submetida

// 1. Validar payload
const { respostas, xcod, timestamp } = body;
IF !respostas.q1_email OR !respostas.q9_intencao {
  RESPOND 400 Bad Request
}

// 2. Calcular lead score
function calcularScore(r) {
  // Capacidade (Q5+Q6+Q7) — 0-13
  const capacidade =
    indexFaixa(r.q5_investimento_edu) +     // 0-3
    indexFaixa(r.q6_investimento_midia) +   // 0-5
    indexFaixa(r.q7_faturamento);           // 0-4

  // Operacional (Q2+Q3+Q4+Q8) — 0-7
  const operacional =
    indexFaixa(r.q2_tempo_mercado) +        // 0-3
    indexFaixa(r.q3_estagio) +              // 0-3 (peso baixo)
    (r.q4_funis.includes('LANCAMENTO_PAGO') ? 2 : r.q4_funis.length > 1 ? 1 : 0) +  // 0-2
    indexFaixa(r.q8_equipe);                // 0-2

  // Intenção (Q9) — 0-10
  const intencao =
    r.q9_intencao === 'COM_CERTEZA'      ? 10 :
    r.q9_intencao === 'TENHO_QUE_PENSAR' ? 4  :
    0;

  return { capacidade, operacional, intencao, total: capacidade + operacional + intencao };
}

const score = calcularScore(respostas);

// 3. Definir tier
let tier;
if (score.intencao === 10 && score.capacidade >= 7)       tier = 'HOT';
else if (score.intencao === 0 || score.capacidade <= 2)   tier = 'COLD';
else                                                       tier = 'WARM';

// 4. Append no Sheets (aba Fichas) — TODAS as respostas + score + tier
sheets.append({
  spreadsheetId: GOOGLE_SHEETS_ID,
  range: "Fichas!A:Z",
  values: [[
    timestamp, respostas.q1_email, respostas.q1_whatsapp,
    respostas.q1_nome, respostas.q1_instagram,
    respostas.q2_tempo_mercado, respostas.q3_estagio,
    JSON.stringify(respostas.q4_funis), respostas.q5_investimento_edu,
    respostas.q6_investimento_midia, respostas.q7_faturamento,
    respostas.q8_equipe, respostas.q9_intencao,
    respostas.q10_historia, respostas.q11_pergunta_tiraduvidas,
    score.capacidade, score.operacional, score.intencao, score.total,
    tier, xcod
  ]]
});

// 5. Atualiza tag do contato no ManyChat
http.post("https://api.manychat.com/fb/subscriber/setCustomField", {
  whatsapp_phone: respostas.q1_whatsapp,
  field_name: "tier",
  field_value: tier.toLowerCase()
});

http.post("https://api.manychat.com/fb/subscriber/addTag", {
  whatsapp_phone: respostas.q1_whatsapp,
  tag_name: `tier-${tier.toLowerCase()}`
});

http.post("https://api.manychat.com/fb/subscriber/addTag", {
  whatsapp_phone: respostas.q1_whatsapp,
  tag_name: "ficha-submetida"
});

// 6. Se HOT, dispara CAPI custom event LeadQualified (otimização do ASC)
if (tier === 'HOT') {
  http.post(`https://graph.facebook.com/v22.0/${PIXEL_ID}/events`, {
    data: [{
      event_name: "LeadQualified",
      event_time: timestamp,
      event_id: `ficha_${respostas.q1_email}_${timestamp}`,
      action_source: "website",
      user_data: {
        em: [hash(respostas.q1_email)],
        ph: [hash(respostas.q1_whatsapp)]
      },
      custom_data: { lead_score: score.total, tier: "HOT" }
    }],
    access_token: META_CAPI_TOKEN
  });
}

// 7. Roteamento operacional
if (tier === 'HOT') {
  // Adiciona à fila do SDR (ex: cria card no Trello/Notion)
  http.post("https://api.notion.com/v1/pages", {
    parent: { database_id: NOTION_FILA_SDR_ID },
    properties: {
      Lead: { title: [{ text: { content: respostas.q1_nome } }] },
      Whatsapp: { phone_number: respostas.q1_whatsapp },
      Tier: { select: { name: "HOT" } },
      Score: { number: score.total },
      Historia: { rich_text: [{ text: { content: respostas.q10_historia } }] },
      Status: { select: { name: "PRIORIDADE · ligar em 24h" } }
    }
  });
} else if (tier === 'WARM') {
  // Adiciona ao grupo VIP do WhatsApp via bot
  http.post(`${BASE}/grupo-vip-add`, {
    phone: respostas.q1_whatsapp,
    nome: respostas.q1_nome
  });
}

// 8. Schedule disparo da mensagem do tier (15 min depois)
n8n.schedule({
  workflow: `mensageria-pos-ficha-${tier.toLowerCase()}`,
  delay: "15m",
  data: {
    phone: respostas.q1_whatsapp,
    nome: respostas.q1_nome.split(" ")[0],
    tier: tier
  }
});

RESPOND 200 OK { tier, score: score.total }
```

### Schema da aba `Fichas` no Sheets

```yaml
Colunas:
  A:  timestamp_submit                 # ISO datetime
  B:  email
  C:  whatsapp
  D:  nome
  E:  instagram
  F:  q2_tempo_mercado                 # string da opção
  G:  q3_estagio
  H:  q4_funis                         # JSON array
  I:  q5_investimento_edu
  J:  q6_investimento_midia
  K:  q7_faturamento
  L:  q8_equipe
  M:  q9_intencao                      # COM_CERTEZA | TENHO_QUE_PENSAR | NO_MOMENTO_NAO
  N:  q10_historia                     # textarea livre
  O:  q11_pergunta_tiraduvidas         # textarea livre
  P:  score_capacidade                 # 0-13
  Q:  score_operacional                # 0-7
  R:  score_intencao                   # 0-10
  S:  score_total                      # 0-30
  T:  tier                             # HOT | WARM | COLD
  U:  xcod                             # JSON do xcod (UUID lead + URL origem)
  V:  status_atendimento               # pendente | em_atendimento | comprou | descartou
  W:  data_compra                      # se comprou o produto principal
```

> **Por que essa aba importa pra dashboard:** o módulo "Ficha" do dashboard lê dessa aba e mostra distribuição por tier, conversão Q9 → compra, e top respostas qualitativas (Q10/Q11) pro closer.

### Variáveis de ambiente

```bash
N8N_WEBHOOK_FICHA_INTERESSE=https://n8n.{DOMINIO}/webhook/ficha-interesse-submetida
GOOGLE_SHEETS_ID_FICHAS={SHEETS_ID}
NOTION_FILA_SDR_ID={NOTION_DB_ID}              # opcional · só se usar Notion como CRM
GRUPO_VIP_WEBHOOK={BOT_WEBHOOK}                # adiciona ao grupo VIP
META_CAPI_TOKEN={TOKEN_LONG_LIVED}
```

---

## 🪝 Webhooks de captação · resumo

| Webhook | URL | Trigger |
|---|---|---|
| Lead na página (CAPI) | `${BASE}/meta-capi-initiate-checkout` | Click no botão da página |
| Compra ingresso | `${BASE}/hotmart-compra` | Hotmart `PURCHASE_APPROVED` |
| Reembolso ingresso | `${BASE}/hotmart-reembolso` | Hotmart `PURCHASE_CANCELED` |
| Lead Ad Meta (alternativa) | `${BASE}/meta-lead` | Lead Ad Form fill |
| Entrada no grupo | `${BASE}/grupo-entrou` | Bot detecta novo membro |
| **Ficha de interesse** | `${BASE}/ficha-interesse-submetida` | Submit etapa 11 da ficha |

---

## ⚠️ Erros comuns

| Erro | Causa | Solução |
|---|---|---|
| Webhook Hotmart 401 | HOTTOK errado no `.env` | Validar no painel Hotmart > Ferramentas > Webhooks |
| Telefone formatado errado | Brasil tem 9 dígito · alguns têm 8 | Função `cleanPhone()` deve normalizar |
| ManyChat retorna 400 | Phone não tem DDI | Garantir +55 · sem espaços · só dígitos |
| Meta CAPI rejeita | Hash não-SHA256 lower-case | Sempre `sha256(email.toLowerCase().trim())` |
| Duplicate purchase | Webhook disparou 2x | Deduplica por `body.data.purchase.transaction` |

---

## ✅ Checklist de implementação

```
[ ] Pixel Meta instalado na página (head do HTML)
[ ] CAPI configurado no n8n com hash SHA256 de PII
[ ] Webhook Hotmart criado e testado (modo test event)
[ ] HOTTOK validado em todo webhook
[ ] Sheets com aba "Leads" criada (ver schema 01-arquitetura.md)
[ ] Service Account Google com acesso de edição
[ ] ManyChat conectado ao WABA
[ ] Template Utility "boas_vindas_lpsg" aprovado pela Meta
[ ] Cron de 10 min testado
[ ] Bot do grupo configurado pra detectar entrada
[ ] Logs de erro disparando alerta no Slack/Telegram
[ ] Webhook /ficha-interesse-submetida testado com payload mock (3 cenários: HOT · WARM · COLD)
[ ] Aba "Fichas" do Sheets criada com schema correto (23 colunas)
[ ] Custom event "LeadQualified" registrado no Meta Events Manager
[ ] Tags `tier-hot`, `tier-warm`, `tier-cold`, `ficha-submetida` criadas no ManyChat
[ ] 3 fluxos de mensageria pós-ficha (HOT/WARM/COLD) configurados no n8n
[ ] Fila de SDR (Notion/Trello/CRM) recebendo HOT corretamente
```

# 04 · Fluxos do tsunami — pitch e carrinho aberto

> Da Aula 6 (pitch · domingo 20h) até o fechamento do carrinho (sex 23h59).

---

## 🎯 Fluxos desta etapa (5)

| # | Fluxo | Trigger | Output |
|---|---|---|---|
| 1 | **Aquecimento pré-pitch** | Cron (D-1 · D-12h · D-2h) | Mensagens de antecipação |
| 2 | **Janelas do tsunami** | Cron (4 horários) | Disparos com cada link de janela |
| 3 | **Checkout iniciado · SLA closer** | Hotmart webhook | Slack/Telegram + closer humano |
| 4 | **Compra do produto** | Hotmart webhook | Confirmação + remove de recuperação |
| 5 | **Vendas ao vivo (dashboard)** | Cron 30s | `/tsunami` em real-time |

---

## 🌊 As 4 janelas (referência)

> Definidas em `oferta-lpsg/02-bonus-tsunami.md`. Aqui só os triggers.

```yaml
JANELA_FICHA_10MIN:       "06:50 → 07:00 · 50% off (R$ 12.500)"
JANELA_1H:                "07:00 → 08:00 · 40% off (R$ 15.000)"
JANELA_3H:                "07:00 → 10:00 · 30% off (R$ 17.500)"
JANELA_1DAY:              "07:00 → 23:59 · cheio com bônus (R$ 25.000)"
```

---

## 1️⃣ Aquecimento pré-pitch

### Quando dispara

Disparos automáticos antes do pitch (Aula 6 · domingo 20h).

```yaml
SCHEDULE:
  - "Sábado 20:00 (D-1 do pitch) · convite explícito"
  - "Domingo 12:00 (D-8h) · lembrete + ângulo emocional"
  - "Domingo 18:00 (D-2h) · last call live"
  - "Domingo 19:50 (D-10min) · 'tô entrando no ar'"
```

### Workflow n8n (resumo)

```javascript
// 4 crons agendados manualmente · todos disparam mesma estrutura
schedule.cron("0 20 * * 6", () => sendBlast("convite_pitch_dminus1"));
schedule.cron("0 12 * * 0", () => sendBlast("convite_pitch_dminus8h"));
schedule.cron("0 18 * * 0", () => sendBlast("convite_pitch_dminus2h"));
schedule.cron("50 19 * * 0", () => sendBlast("convite_pitch_dminus10min"));

async function sendBlast(template_name) {
  const leads = await sheets.get({
    range: "Leads!A:Z",
    filter: { estado_atual: "engajado" || "ficha_preenchida" }
  });

  for (const lead of leads) {
    await manychat.sendFlow({
      subscriber_id: lead.manychat_id,
      flow_ns: template_name,
      data: { nome: lead.first_name, link_pitch: YT_PITCH_URL }
    });
    await sleep(50);
  }
}
```

---

## 2️⃣ Janelas do tsunami · 4 disparos coordenados

### Quando dispara

Segunda-feira após o pitch · 4 horários precisos.

```yaml
SCHEDULE_TSUNAMI:
  - "06:45 · lembrete da abertura (5min antes)"
  - "06:50 · ABRE FICHA (link da janela 10min)"
  - "07:00 · ABRE GERAL (link da janela 1h)"
  - "08:00 · fecha 1h · disparo da 3h"
  - "10:00 · fecha 3h · disparo da 1day (preço cheio)"
  - "23:00 · last call dia 1"
```

### Workflow n8n — disparo da janela ficha (06:50)

```javascript
schedule.cron("50 6 * * 1", async () => {

  // 1. Filtrar quem assistiu pitch + preencheu ficha (prioridade)
  const leadsHot = await sheets.get({
    filter: {
      pitch_assistiu: true,
      ficha_preenchida: true
    }
  });

  // 2. Disparar template Utility (link com cupom de janela 10min)
  for (const lead of leadsHot) {
    await wabaSendTemplate({
      to: lead.phone,
      template: "abertura_ficha_lpsg_v1",
      variables: {
        nome: lead.first_name,
        link: `https://pay.hotmart.com/?off=${OFFER_INGRESSO}&cupom=FICHA10`,
        valor_promocional: "R$ 12.500",
        valor_cheio: "R$ 25.000",
        countdown: "10 minutos"
      }
    });
    await sleep(50);
  }

  // 3. Log
  console.log(`[06:50] Disparo ficha · ${leadsHot.length} leads`);
});
```

### Template Utility · janela ficha

```yaml
TEMPLATE_NAME:            "abertura_ficha_lpsg_v1"
CATEGORY:                 "UTILITY"

HEADER:                   "🚪 Janela 10min ABRIU · {{1}}"
BODY:
  text: |
    Oi {{2}} · acabou de abrir a janela exclusiva pra quem preencheu a ficha.

    {{3}} → {{4}} (50% off · só nos próximos 10 minutos)

    Garante a sua agora · {{5}}:

BUTTONS:
  - type: URL
    text: "GARANTIR VAGA · 10MIN"
    url: "{{6}}"

VARIABLES:
  {{1}} = nome do produto
  {{2}} = primeiro nome
  {{3}} = valor cheio
  {{4}} = valor promocional
  {{5}} = countdown ("10 minutos")
  {{6}} = link Hotmart com cupom da janela
```

> **Por que Utility funciona aqui?** É confirmação de uma transação iniciada pelo lead (preencheu ficha · agora recebe a janela esperada). Meta classifica como Utility se o template for genérico e a expectativa do lead estiver clara.

---

## 3️⃣ Checkout iniciado · SLA closer ≤ 5 min

### Quando dispara

Lead bate na Hotmart e não finaliza em X minutos.

### Fluxo

```
[Lead clica em "Garantir vaga"]
    ↓
[Hotmart webhook /hotmart-checkout-iniciado]
    ↓
[n8n] grava CHECKOUT_INICIADO no Sheets
    ↓
[n8n] dispara Slack/Telegram interno · time de closer
    ↓ "Lead João Silva · janela 10min · R$ 12.500 · iniciado às 06:51"
[Closer humano vê notificação em ≤ 5min]
    ↓
[Closer envia mensagem 1:1 manual via WhatsApp pessoal]
    ↓ ou via ManyChat (live chat)
[Aguarda compra]
    ↓
   ┌─ comprou em 30min? → marca COMPROU_PRODUTO · remove de recuperação
   │
   └─ não comprou em 24h? → marca ABANDONOU_CHECKOUT · entra em recuperação D+1
```

### Workflow n8n

```javascript
// Hotmart webhook trigger
POST /hotmart-checkout-iniciado

const lead = {
  phone: cleanPhone(body.data.buyer.checkout_phone),
  email: body.data.buyer.email,
  nome: body.data.buyer.name,
  valor: body.data.purchase.price.value,
  janela: detectJanela(body.data.purchase.offer.code),
  iniciado_em: Date.now()
};

// 1. Atualizar Sheets
await sheets.update({
  range: `Leads!{phone_row}:Z`,
  values: { estado_atual: "CHECKOUT_INICIADO", checkout_iniciado_em: lead.iniciado_em }
});

// 2. Notificar closer no Slack/Telegram
await slack.postMessage({
  channel: "#closer-tsunami",
  text: `🔥 CHECKOUT INICIADO\n` +
        `Lead: ${lead.nome}\n` +
        `Phone: ${lead.phone}\n` +
        `Janela: ${lead.janela}\n` +
        `Valor: R$ ${lead.valor}\n` +
        `Iniciado: ${formatDate(lead.iniciado_em)}\n\n` +
        `⏱ SLA: 5 minutos · vai!`
});

// 3. Schedule cron de fallback (se não comprou em 25min · alerta 2)
n8n.schedule({
  workflow: "checkout-not-completed-alert",
  delay: "25m",
  data: { phone: lead.phone, iniciado_em: lead.iniciado_em }
});

RESPOND 200 OK;
```

### Workflow do alerta 2 (25min depois)

```javascript
// Trigger: cron schedule de 25min depois
async function checkoutNotCompletedAlert(data) {

  // Verificar se já comprou
  const lead = await sheets.getOne({ phone: data.phone });

  if (lead.estado_atual === "COMPROU_PRODUTO") return; // já comprou · ignorar

  // Não comprou · alerta 2
  await slack.postMessage({
    channel: "#closer-tsunami",
    text: `⚠️ AINDA NÃO COMPROU · 25 MIN\n` +
          `Lead: ${lead.nome}\n` +
          `Phone: ${lead.phone}\n` +
          `Janela: ${lead.janela_compra}\n\n` +
          `Reforço urgente · janela fechando.`
  });
}
```

---

## 4️⃣ Compra do produto · sucesso

### Quando dispara

Lead finaliza compra do Acelerador Turbo (R$ 12.500 a R$ 25.000).

### Fluxo

```
[Hotmart webhook PURCHASE_APPROVED] → [n8n /hotmart-compra]
    ↓
[Filter] product_id === ACELERADOR (não ingresso)
    ↓
[Sheets] grava COMPROU_PRODUTO · valor · janela
    ↓
[Meta CAPI] envia 'Purchase' (R$ X)
    ↓
[ManyChat] dispara confirmação ("Bem-vindo · acesso em X horas")
    ↓
[Slack/Telegram] notifica venda 🎉
    ↓
[Notion/CRM] cria card "Aluno novo"
    ↓
[Email transacional] envia info de acesso
```

### Workflow n8n — diferença vs ingresso

```javascript
// Mesmo webhook /hotmart-compra
// Detecta produto pelo product_id

if (body.data.product.id === HOTMART_PRODUCT_ID_INGRESSO) {
  // ... fluxo de ingresso (já em 02-fluxos-de-captacao.md)
}

else if (body.data.product.id === HOTMART_PRODUCT_ID_PRODUTO) {
  // Lead comprou o ACELERADOR
  const lead = enrichLead(body);
  const janela = detectJanela(body.data.purchase.offer.code);

  // 1. Atualizar Sheets
  await sheets.update({
    range: `Leads!{phone_row}:Z`,
    values: {
      estado_atual: "COMPROU_PRODUTO",
      valor_compra: lead.valor,
      janela_compra: janela,
      em_recuperacao: false
    }
  });

  // 2. Meta CAPI Purchase
  await metaCAPI.send({
    event: "Purchase",
    value: lead.valor,
    user: lead
  });

  // 3. Confirmação no ManyChat
  await manychat.sendFlow({
    subscriber_id: lead.manychat_id,
    flow_ns: "confirmacao_compra_acelerador"
  });

  // 4. Notificar venda no Slack 🎉
  await slack.postMessage({
    channel: "#vendas",
    text: `🎉 VENDA · R$ ${lead.valor} · ${janela}\nCloser: ${lead.responsavel_closer || "—"}`
  });

  // 5. Criar card no Notion/CRM
  await notion.createCard({ ... });

  // 6. Email transacional
  await sendgrid.send({
    to: lead.email,
    template: "boas_vindas_aluno_acelerador",
    data: { nome: lead.nome, link_curso: COURSE_URL }
  });
}
```

---

## 5️⃣ Vendas ao vivo · dashboard real-time

### Quando dispara

Cron a cada 30s · só durante carrinho aberto (seg 06:50 a sex 23:59).

### Fluxo

```
[Cron 30s · 06:50 seg → 23:59 sex] ─→ [n8n]
    ↓
[Hotmart API /sales] busca vendas dos últimos 30s
    ↓
[Sheets · aba "Vendas-Live"] grava cada venda
    ↓
[Dashboard /tsunami] consulta Sheets · atualiza UI em real-time
```

### Workflow n8n

```javascript
// Cron a cada 30s · só na janela do carrinho
schedule.cron("*/30 * 6-23 * * 1-5", async () => {

  const vendasNovas = await hotmart.getSales({
    transaction_status: "approved",
    transaction_dates: {
      from: Date.now() - 30000,
      to: Date.now()
    }
  });

  for (const venda of vendasNovas) {
    await sheets.append({
      range: "Vendas-Live!A:F",
      values: [[
        venda.transaction_date,
        venda.buyer.name,
        venda.purchase.price.value,
        venda.purchase.offer.code,
        detectJanela(venda.purchase.offer.code),
        venda.transaction
      ]]
    });
  }
});
```

> Dashboard `/tsunami` (do `dashboard-lpsg`) faz polling no Sheets a cada 5s e mostra "vendas ao vivo".

---

## 🪝 Webhooks do tsunami · resumo

| Webhook | URL | Trigger |
|---|---|---|
| Checkout iniciado | `${BASE}/hotmart-checkout-iniciado` | Hotmart `CHECKOUT_INITIATED` |
| Compra aprovada | `${BASE}/hotmart-compra` | Hotmart `PURCHASE_APPROVED` |
| Reembolso | `${BASE}/hotmart-reembolso` | Hotmart `PURCHASE_REFUNDED` |
| Cron janelas (interno) | `${BASE}/cron-janela-X` | n8n schedule |

---

## ⏰ Schedule completo da semana de carrinho

```yaml
SEGUNDA (carrinho abre):
  - "06:45 · lembrete 5min"
  - "06:50 · DISPARA janela ficha (10min)"
  - "07:00 · DISPARA janela 1h"
  - "08:00 · fecha 1h · DISPARA janela 3h"
  - "10:00 · fecha 3h · DISPARA janela 1day"
  - "23:00 · last call dia 1"
  - "23:59 · fecha 1day"

TERCA-QUINTA:
  - "08:00 · disparo manhã (urgência crescente · stack vs preço)"
  - "12:00 · disparo almoço (depoimento · prova social)"
  - "20:00 · disparo noite (ângulo emocional)"

SEXTA (último dia):
  - "08:00 · LAST DAY"
  - "12:00 · 12h pra fechar"
  - "18:00 · 6h pra fechar"
  - "22:00 · 2h pra fechar"
  - "23:30 · 30min pra fechar"
  - "23:59 · CARRINHO FECHA"
```

---

## ✅ Checklist de implementação

```
[ ] 4 crons de aquecimento pré-pitch (sáb 20h · dom 12h · dom 18h · dom 19h50)
[ ] Cron 06:50 · disparo janela ficha
[ ] Cron 07:00 · disparo janela 1h
[ ] Cron 08:00 · fecha 1h + dispara 3h
[ ] Cron 10:00 · fecha 3h + dispara 1day
[ ] Cron 23:00 · last call dia 1
[ ] Webhook /hotmart-checkout-iniciado conectado
[ ] Webhook /hotmart-compra (com filtro de produto correto)
[ ] Slack/Telegram do closer integrado · canal dedicado
[ ] Cron 30s de captura de vendas durante janela
[ ] Aba "Vendas-Live" no Sheets criada
[ ] Dashboard /tsunami consultando Sheets em tempo real
[ ] Templates Utility e Marketing das janelas aprovados
[ ] Cupons da Hotmart configurados (FICHA10 · 1H · 3H · 1DAY)
```

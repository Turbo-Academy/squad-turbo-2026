# 03 · Fluxos do evento — durante as 5 aulas + sábado

> Lembretes, áudios noturnos, captura de engajamento e ficha de interesse.

---

## 🎯 Fluxos desta etapa (5)

| # | Fluxo | Trigger | Output |
|---|---|---|---|
| 1 | **Lembrete pré-aula** | Cron (15min antes da aula) | Mensagem WPP/Telegram com link |
| 2 | **Áudio noturno** | Cron (20h após aula) | Áudio + CTA reação 🚀 |
| 3 | **Captura de engajamento (🚀)** | ManyChat webhook | Sheets `engajamento_aula_N=true` |
| 4 | **Ficha de interesse (Aula 4)** | Cron (após A4) | Typeform link + lembrete |
| 5 | **Tira-dúvidas sábado** | Cron sáb 9h | Lembrete + perguntas pré-coletadas |

---

## 1️⃣ Lembrete pré-aula

### Quando dispara

15 minutos antes do horário oficial da aula. **Cron por aula** (5 crons agendados).

### Fluxo

```
[Cron 06:45 seg/ter/qua/qui/sex] ─→ [n8n]
    ↓
[Sheets] busca leads INSCRITO_INGRESSO ou GRUPO_ENTROU
    ↓
[Filter] remove leads que JÁ ESTÃO no chat ao vivo (opcional)
    ↓
[ManyChat] dispara fluxo "lembrete_aula_N" pra cada lead
    ↓
[Mensagem chega 15min antes]
    ↓
[Lead clica no link YT da aula]
```

### Workflow n8n

```javascript
// Cron: 06:45 segunda-feira (Aula 1)
schedule.cron("45 6 * * 1", async () => {

  // 1. Buscar leads ativos
  const leads = await sheets.get({
    range: "Leads!A:Z",
    filter: { estado_atual: ["INSCRITO_INGRESSO", "GRUPO_ENTROU"] }
  });

  // 2. Para cada lead · disparo no ManyChat
  for (const lead of leads) {
    await manychat.sendFlow({
      subscriber_id: lead.manychat_id,
      flow_ns: "lembrete_aula_1",
      data: {
        nome_lead: lead.first_name,
        link_aula: process.env.YOUTUBE_LIVE_AULA_1,
        horario: "07:00"
      }
    });

    // 3. Throttle (evitar limite WABA)
    await sleep(50);  // 20 msgs/segundo · seguro
  }

  // 4. Log
  await sheets.append({
    range: "Logs!A:E",
    values: [[Date.now(), "lembrete_aula_1", leads.length, "ok", ""]]
  });
});
```

### Template Utility (Meta API)

```yaml
TEMPLATE_NAME:            "lembrete_aula_lpsg_v1"
CATEGORY:                 "UTILITY"
LANGUAGE:                 "pt_BR"

HEADER:                   "⏰ Aula {{1}} começa em 15 minutos"
BODY:
  text: |
    Oi {{2}}!

    A Aula {{1}} do {{3}} começa em 15 minutos · {{4}}.

    Tema: {{5}}

    Te espero lá:

BUTTONS:
  - type: URL
    text: "ENTRAR NA AULA"
    url: "{{6}}"            # link YouTube live

VARIABLES:
  {{1}} = número da aula (1, 2, 3, 4, 5)
  {{2}} = primeiro nome
  {{3}} = nome do evento
  {{4}} = horário ("às 07:00")
  {{5}} = tema da aula
  {{6}} = URL do live YT
```

---

## 2️⃣ Áudio noturno · CTA reação 🚀

### Quando dispara

20:00 do mesmo dia da aula (após assistir/replay). 5 áudios = 5 crons (seg-sex).

### Fluxo

```
[Cron 20:00 seg/ter/qua/qui/sex] ─→ [n8n]
    ↓
[Mensagem texto curta + áudio MP3 anexado]
    ↓ "ouve esse áudio · reaja com 🚀 quando terminar"
[Lead ouve áudio]
    ↓
[Lead reage com 🚀]
    ↓
[ManyChat captura reação] ─→ [n8n webhook /reacao-emoji]
    ↓
[Sheets] grava engajamento_aula_N=true
    ↓
[ManyChat] envia próxima mensagem (gancho da aula seguinte)
```

### Template (Marketing · NÃO Utility · áudio é promocional)

```yaml
TEMPLATE_NAME:            "audio_noturno_aula_lpsg_v1"
CATEGORY:                 "MARKETING"
LANGUAGE:                 "pt_BR"

# Áudio é classificado como Marketing pela Meta (mesmo Utility-like)
# Por isso o áudio noturno é o ÚNICO disparo Marketing por aula
# Mantém 80% Utility / 20% Marketing
```

### Workflow de reação no n8n

```javascript
// Webhook trigger · ManyChat dispara quando lead reage
POST /reacao-emoji

const { user_id, phone, emoji, context } = body;

// Só nos importa 🚀
IF emoji !== "🚀" RETURN 200 OK;

// Extrair número da aula do context (ex: "audio_aula_2")
const aula_n = parseInt(context.match(/audio_aula_(\d)/)[1]);

// Atualizar Sheets
await sheets.update({
  range: `Leads!{phone_row}:Z`,
  values: { [`engajamento_aula_${aula_n}`]: true, [`reagiu_em`]: timestamp }
});

// Disparar mensagem de continuidade (próximo gancho)
await manychat.sendFlow({
  subscriber_id: user_id,
  flow_ns: `gancho_proxima_aula_${aula_n + 1}`
});

RETURN 200 OK;
```

---

## 3️⃣ Ficha de interesse — Aula 4

### Quando dispara

11:00 da quinta (após A4 às 7h). Lead que assistiu A4 ou pelo menos clicou.

### Fluxo

```
[Cron 11:00 quinta] ─→ [n8n]
    ↓
[Filter] leads com engajamento_aula_4=true OU presente_aula_4=true
    ↓
[ManyChat] envia mensagem com link do Typeform da ficha
    ↓
[Lead preenche ficha]
    ↓
[Typeform webhook] ─→ [n8n /ficha-interesse]
    ↓
[Sheets] FICHA_PREENCHIDA=true
    ↓
[ManyChat] envia confirmação ("Recebemos · prepara o coração pro pitch")
    ↓
[CRM/Notion] cria card pro time de venda
```

### Estrutura da ficha (Typeform)

```yaml
PERGUNTAS:
  - "Qual seu faturamento mensal hoje?"           # range
  - "Há quanto tempo você atua no mercado?"
  - "Qual seu maior desafio agora?"
  - "Você já fez algum lançamento pago?"
  - "Você tem equipe? Quantas pessoas?"
  - "O que você espera levar do {NOME_EVENTO}?"
  - "Você tem disponibilidade de R$ X pra investir em método?"
  - "Email · WhatsApp · nome (já preenchidos via UTM)"

CONFIGURACOES:
  hidden_fields:          ["lead_id", "phone", "email"]
  webhook_url:            "${N8N_WEBHOOK_BASE_URL}/ficha-interesse"
  redirect_url:           "https://lp.dominio.com.br/obrigado-ficha"
```

### Workflow n8n da ficha

```javascript
// Webhook trigger
POST /ficha-interesse

// 1. Validar (Typeform usa hash secret no header)
verifyTypeformSignature(headers["typeform-signature"], body);

// 2. Extrair respostas + hidden fields
const ficha = {
  lead_id: body.form_response.hidden.lead_id,
  phone: body.form_response.hidden.phone,
  faturamento: body.form_response.answers[0].choice.label,
  tempo_mercado: body.form_response.answers[1].choice.label,
  desafio: body.form_response.answers[2].text,
  // ...
  preenchida_em: body.form_response.submitted_at
};

// 3. Atualizar Sheets
await sheets.update({
  range: `Leads!{phone_row}:Z`,
  values: { ficha_preenchida: true, ficha_dados: JSON.stringify(ficha) }
});

// 4. Confirmar no ManyChat
await manychat.sendFlow({
  subscriber_id: ficha.lead_id,
  flow_ns: "confirmacao_ficha_recebida"
});

// 5. Criar card no CRM
await notion.createCard({
  database_id: NOTION_FICHA_DB,
  properties: {
    nome: ficha.nome,
    phone: ficha.phone,
    faturamento: ficha.faturamento,
    desafio: ficha.desafio,
    status: "Ficha recebida"
  }
});

RETURN 200 OK;
```

---

## 4️⃣ Tira-dúvidas — sábado

### Quando dispara

Sábado às 09:00 · lembrete da live de tira-dúvidas (10:00).

### Fluxo

```
[Cron sáb 09:00] ─→ [n8n]
    ↓
[Mensagem com link YT live + form de pergunta antecipada]
    ↓
[Leads enviam perguntas via ManyChat]
    ↓
[ManyChat] grava perguntas em campo personalizado
    ↓
[n8n] consolida perguntas no Sheets (aba "Perguntas-Sabado")
    ↓
[Time exporta perguntas pra apresentação ao vivo]
```

### Template

```yaml
TEMPLATE_NAME:            "tira_duvidas_sabado_lpsg_v1"
CATEGORY:                 "UTILITY"

BODY:
  text: |
    Bom dia, {{1}}!

    Hoje é nosso tira-dúvidas ao vivo · 10h na minha live.

    Antes de começar · me manda aqui sua maior dúvida sobre {{2}}.
    Vou responder ao vivo.

    Te vejo daqui a pouco:

BUTTONS:
  - type: URL
    text: "ENTRAR NO TIRA-DÚVIDAS"
    url: "{{3}}"

  - type: QUICK_REPLY
    text: "Tenho uma dúvida"
    payload: "captura_pergunta_sabado"
```

---

## 5️⃣ Captura de presença ao vivo · automática

### Quando dispara

Durante cada live (5x · seg-sex 7h-8h).

### Fluxo

```
[Live no YouTube em andamento]
    ↓ a cada 5 min
[n8n cron] busca dados via YouTube API
    ↓
[YouTube API /liveBroadcasts/list] retorna concurrentViewers
    ↓
[Sheets · aba Aulas] grava pico ao vivo
    ↓
[Dashboard /aulas] atualiza gauge em tempo real
```

### Workflow n8n

```javascript
// Cron · a cada 5 min · só durante janela de live (07:00-08:00 seg-sex)
schedule.cron("*/5 7 * * 1-5", async () => {

  for (const aulaId of YOUTUBE_LIVE_IDS) {
    const stats = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${aulaId}&part=liveStreamingDetails&key=${YOUTUBE_API_KEY}`
    );

    const concurrent = stats.items[0].liveStreamingDetails.concurrentViewers;

    await sheets.append({
      range: "Aulas!A:E",
      values: [[
        Date.now(),
        aulaId,
        concurrent,
        getCurrentAulaName(aulaId)
      ]]
    });
  }
});
```

---

## 🪝 Webhooks do evento · resumo

| Webhook | URL | Trigger |
|---|---|---|
| Reação emoji | `${BASE}/reacao-emoji` | ManyChat detecta 🚀 |
| Ficha preenchida | `${BASE}/ficha-interesse` | Typeform submission |
| Pergunta tira-dúvidas | `${BASE}/pergunta-sabado` | ManyChat quick reply |
| Pico ao vivo | `${BASE}/youtube-pico-vivo` | n8n cron + YT API |

---

## ⏰ Schedule completo da semana

```yaml
SEGUNDA:
  - "06:45 · lembrete Aula 1"
  - "20:00 · áudio noturno A1"

TERCA:
  - "06:45 · lembrete Aula 2"
  - "20:00 · áudio noturno A2"

QUARTA:
  - "06:45 · lembrete Aula 3"
  - "20:00 · áudio noturno A3"

QUINTA:
  - "06:45 · lembrete Aula 4"
  - "11:00 · ficha de interesse"
  - "20:00 · áudio noturno A4"

SEXTA:
  - "06:45 · lembrete Aula 5"
  - "20:00 · áudio noturno A5"
  - "21:00 · convite explícito pro pitch"

SABADO:
  - "09:00 · lembrete tira-dúvidas"
  - "20:00 · convite final pro pitch"
```

---

## ✅ Checklist de implementação

```
[ ] 5 crons de lembrete pré-aula (06:45 seg-sex) configurados
[ ] 5 crons de áudio noturno (20:00 seg-sex)
[ ] Templates Utility "lembrete_aula_lpsg_v1" aprovados
[ ] Template Marketing "audio_noturno_aula_lpsg_v1" aprovado
[ ] Webhook /reacao-emoji conectado ao ManyChat
[ ] Typeform da ficha de interesse criado
[ ] Webhook /ficha-interesse conectado ao Typeform
[ ] Cron de captura de pico ao vivo (a cada 5min · 07:00-08:00 seg-sex)
[ ] Dashboard /aulas alimentando-se em tempo real
[ ] Logs de cada cron no Sheets aba "Logs"
[ ] Alerta de falha (Slack/Telegram) configurado
```

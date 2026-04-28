# 05 · Fluxos de recuperação — D+1 a D+7 do carrinho aberto

> Automação híbrida: bot pra triagem · closer humano pra fechar.

---

## 🎯 Princípio: 80% automação · 20% humano

```
Recuperação 100% automática   →  10-15% recuperação típica
Recuperação 100% humana       →  20-25% (mas custa fortuna)
Recuperação 80/20 híbrida     →  15-25% com custo razoável

LPSG default:  AUTOMAÇÃO faz triagem + 1ª mensagem
               HUMANO entra no calor da conversa
```

---

## 🎯 Fluxos desta etapa (4)

| # | Fluxo | Trigger | Output |
|---|---|---|---|
| 1 | **Marca abandono** | 24h sem comprar | EM_RECUPERACAO_D1 |
| 2 | **Sequência D+1 a D+7** | Daily cron | Mensagens automáticas |
| 3 | **Closer humano** | Sinal de calor | Conversa 1:1 |
| 4 | **Conversão recuperada** | Hotmart compra | Remove do funil |

---

## 1️⃣ Marca abandono · 24h após início

### Quando dispara

Cron diário 23:00 · pega quem iniciou checkout no dia anterior e não comprou.

### Fluxo

```
[Cron 23:00 · todos os dias durante carrinho aberto]
    ↓
[Sheets] busca leads CHECKOUT_INICIADO há > 24h
    ↓
[Filter] estado_atual !== COMPROU_PRODUTO
    ↓
[Update] estado_atual = "EM_RECUPERACAO_D1"
        em_recuperacao_desde = now()
    ↓
[Trigger] início da sequência de recuperação
```

### Workflow n8n

```javascript
schedule.cron("0 23 * * 1-5", async () => {  // seg-sex 23h

  const leads = await sheets.get({
    range: "Leads!A:Z",
    filter: {
      estado_atual: "CHECKOUT_INICIADO",
      checkout_iniciado_em: { lt: Date.now() - 24*60*60*1000 }
    }
  });

  for (const lead of leads) {
    // Marcar como em recuperação
    await sheets.update({
      range: `Leads!{row}:Z`,
      values: {
        estado_atual: "EM_RECUPERACAO_D1",
        em_recuperacao_desde: Date.now()
      }
    });

    // Disparar primeiro toque
    await manychat.sendFlow({
      subscriber_id: lead.manychat_id,
      flow_ns: "recuperacao_D1_primeiro_toque"
    });
  }

  console.log(`[23:00] ${leads.length} leads marcados pra recuperação D+1`);
});
```

---

## 2️⃣ Sequência D+1 a D+7

### Cronograma de mensagens

```yaml
D+1 (24h após abandono):
  - "Mensagem amistosa · 'tudo bem? deu algum problema?'"
  - "Tom: empático · sem pressão"
  - "Pergunta aberta pra disparar resposta"

D+2:
  - "Lembrança do bônus · stack vs preço"
  - "Tom: lembrança · valor"
  - "1 pergunta sobre objeção"

D+3:
  - "Caso real · depoimento de aluno que estava na mesma situação"
  - "Tom: prova social"
  - "CTA com link"

D+5:
  - "Quebra a objeção mais comum (preço · tempo · medo)"
  - "Tom: educacional · valida"
  - "Pergunta: 'qual sua dúvida agora?'"

D+7 (last call):
  - "URGÊNCIA REAL · carrinho fecha em X horas"
  - "Tom: direto · urgente"
  - "CTA forte"
```

### Workflow n8n · sequência diária

```javascript
schedule.cron("0 10 * * *", async () => {  // todos os dias 10h

  // Buscar todos em recuperação · agrupados por dia
  const leadsRec = await sheets.get({
    range: "Leads!A:Z",
    filter: { estado_atual: { startsWith: "EM_RECUPERACAO" } }
  });

  for (const lead of leadsRec) {
    const diasEmRec = Math.floor(
      (Date.now() - lead.em_recuperacao_desde) / (24*60*60*1000)
    );

    // Mapear dia · template
    const templates = {
      1: "recuperacao_D1_amigavel",
      2: "recuperacao_D2_bonus",
      3: "recuperacao_D3_caso_real",
      5: "recuperacao_D5_objecao",
      7: "recuperacao_D7_last_call"
    };

    const template = templates[diasEmRec];
    if (!template) continue;  // dias 4 e 6 sem disparo automático

    await manychat.sendFlow({
      subscriber_id: lead.manychat_id,
      flow_ns: template,
      data: {
        nome: lead.first_name,
        link_compra: lead.checkout_link_pessoal,  // mantido do checkout iniciado
        horas_restantes: calcularHorasAteFechamento()
      }
    });

    // Atualizar estado
    await sheets.update({
      range: `Leads!{row}:Z`,
      values: { estado_atual: `EM_RECUPERACAO_D${diasEmRec}` }
    });

    await sleep(50);
  }
});
```

### Templates de recuperação (referência)

```yaml
TEMPLATE_D1_AMIGAVEL:
  category:               "MARKETING"
  body: |
    Oi {{1}}, viu sua janela de inscrição expirar.

    Aconteceu algum imprevisto? Posso ajudar com algo?

    Se foi só timing, ainda dá pra entrar no preço cheio:
    {{2}}

TEMPLATE_D3_CASO_REAL:
  category:               "MARKETING"
  body: |
    {{1}}, ontem o {{2}} (aluno LPSG 03/25) me mandou esse áudio.

    Ele tava no exato ponto que você está agora · não sabia se valia.

    Ouve aqui: {{3}}

TEMPLATE_D7_LAST_CALL:
  category:               "MARKETING"
  body: |
    {{1}}, em {{2}} horas o carrinho fecha · próxima edição daqui 30 dias.

    Última chance · {{3}}:

  buttons:
    - text: "GARANTIR AGORA"
      url: "{{4}}"
```

---

## 3️⃣ Closer humano · entrada no calor

### Quando o closer entra

Bot detecta **sinais de calor** na conversa:
- Lead respondeu à mensagem (não só recebeu)
- Lead clicou no link mas não comprou
- Lead fez pergunta específica
- Lead reagiu com emoji

### Fluxo

```
[Lead responde mensagem D+1 com pergunta]
    ↓
[ManyChat detecta resposta] ─→ [n8n webhook /lead-respondeu]
    ↓
[n8n] grava no Sheets: lead_quente=true · ultima_resposta=now()
    ↓
[n8n] envia notificação no Slack/Telegram do closer
    ↓ "🔥 Lead João respondeu · 'qual a diferença pro outro curso?'"
[Closer humano abre conversa]
    ↓
[Closer responde pelo ManyChat (live chat) OU WhatsApp pessoal]
    ↓
[Conversa 1:1 até fechar OU desistir]
    ↓
   ┌─ comprou → COMPROU_PRODUTO · remove de recuperação
   │
   └─ desistiu explicitamente → REJEITOU_FINAL · sai do funil
```

### Workflow n8n · detecção de calor

```javascript
POST /lead-respondeu  (vem do ManyChat External Request)

const { user_id, phone, message_text, message_type } = body;

// Detectar se é "calor" (responder ≠ ignorar)
const sinaisCalor = [
  /quanto/i,
  /\?/,                                // pergunta
  /como/i,
  /tem (alguma|outra)/i,
  /quero/i,
  /interessei/i,
  /me explica/i
];

const ehCalor = sinaisCalor.some(re => re.test(message_text));

// Atualizar Sheets
await sheets.update({
  range: `Leads!{row}:Z`,
  values: {
    lead_quente: ehCalor,
    ultima_resposta: Date.now(),
    ultima_mensagem_texto: message_text
  }
});

if (ehCalor) {
  // Notificar closer URGENTE
  await slack.postMessage({
    channel: "#closer-recuperacao",
    text: `🔥 LEAD QUENTE · respondeu\n` +
          `Phone: ${phone}\n` +
          `Mensagem: "${message_text}"\n` +
          `Estado: em recuperação D${diasEmRec}\n\n` +
          `⏱ SLA: 5 min · vai!`
  });

  // Remover dos disparos automáticos (closer assumiu)
  await sheets.update({
    range: `Leads!{row}:Z`,
    values: { estado_atual: "EM_RECUPERACAO_HUMANO" }
  });
}
```

---

## 4️⃣ Conversão recuperada · sucesso

### Fluxo

```
[Lead em recuperação compra finalmente]
    ↓
[Hotmart webhook PURCHASE_APPROVED]
    ↓
[n8n] já existe (mesmo de 04-fluxos-do-tsunami.md)
    ↓
[Detecção] estado_anterior === "EM_RECUPERACAO_*"?
    ↓ SIM
[Sheets] grava RECUPERADO=true · janela_compra="recuperacao_D{N}"
    ↓
[Slack/Telegram] notifica venda RECUPERADA 🔥
    ↓ "💎 RECUPERAÇÃO · Lead João · D+3 · R$ 12.500"
[Para o closer humano] reconhecimento + comissão
```

### Workflow (extensão do /hotmart-compra)

```javascript
// No webhook /hotmart-compra (já existe)
// Adicionar verificação:

if (lead.estado_atual.startsWith("EM_RECUPERACAO")) {
  const diasRec = parseInt(lead.estado_atual.replace("EM_RECUPERACAO_D", ""));

  await sheets.update({
    range: `Leads!{row}:Z`,
    values: {
      recuperado: true,
      janela_compra: `recuperacao_D${diasRec}`,
      closer_responsavel: lead.closer_assignee || "automacao"
    }
  });

  // Notificar venda recuperada (canal separado)
  await slack.postMessage({
    channel: "#vendas-recuperadas",
    text: `💎 RECUPERAÇÃO\n` +
          `Lead: ${lead.nome}\n` +
          `Dia: D+${diasRec}\n` +
          `Valor: R$ ${lead.valor}\n` +
          `Closer: ${lead.closer_assignee || "automação"}`
  });
}
```

---

## 📊 Métricas que importam · monitorar

```yaml
TAXA_RECUPERACAO_TOTAL:   "% dos abandonos que fecharam (D+1 a D+7)"
                          # Alvo: 5-15% (média LPSG: 10%)

TAXA_RECUPERACAO_HUMANO:  "% das conversas com closer que fecharam"
                          # Alvo: 25-40%

SLA_CLOSER_RECUPERACAO:   "Tempo médio de resposta do closer ao sinal de calor"
                          # Alvo: ≤ 5 min

CONVERSOES_POR_DIA:
  D+1:                    "Maior volume (lead ainda quente)"
  D+3:                    "Pico secundário (caso real ressoa)"
  D+7:                    "Last call · urgência real"

CUSTO_ADQUISICAO_RECUPERADO: "Comissão closer + tempo gasto / vendas recuperadas"
                              # Alvo: < 20% do ticket
```

---

## 🪝 Webhooks da recuperação · resumo

| Webhook | URL | Trigger |
|---|---|---|
| Lead respondeu | `${BASE}/lead-respondeu` | ManyChat detecta resposta |
| Cron daily recovery | `${BASE}/cron-recovery-daily` | n8n schedule 10:00 |
| Conversão recuperada | `${BASE}/hotmart-compra` (extensão) | Mesmo webhook · estado anterior |

---

## ⚠️ Cuidados (não destruir reputação WhatsApp)

```yaml
EVITAR:
  - "Disparos diários sem pausa · D+1 D+2 D+3 D+4 D+5 D+6 D+7"
    → certo: D+1 D+2 D+3 (skip) D+5 (skip) D+7

  - "Mesmo template Marketing repetido"
    → certo: 5 templates diferentes · variar tom

  - "Disparo madrugada"
    → certo: 9h-21h apenas · timezone do lead

  - "Sem opt-out claro"
    → certo: toda mensagem Marketing tem 'STOP' funcional

  - "Recuperar quem já disse não"
    → certo: detectar 'não tenho interesse' · marcar REJEITOU_FINAL

CONSEQUENCIAS_DE_IGNORAR:
  - "Quality rating cai (Meta penaliza)"
  - "Tier WABA pode ser rebaixado (de 100k pra 10k mensagens/dia)"
  - "Bloqueio definitivo do número"
```

---

## ✅ Checklist de implementação

```
[ ] Cron 23:00 · marca abandono D+1
[ ] Cron 10:00 · sequência diária de recuperação
[ ] 5 templates de recuperação aprovados (D+1 D+2 D+3 D+5 D+7)
[ ] Webhook /lead-respondeu detectando sinais de calor
[ ] Slack/Telegram do closer · canal dedicado #closer-recuperacao
[ ] SLA closer ≤ 5 min monitorado
[ ] Detecção de "não tem interesse" · marcar REJEITOU_FINAL
[ ] Opt-out funcional em toda mensagem Marketing
[ ] Janela de envio: 9h-21h apenas
[ ] Slack/Telegram #vendas-recuperadas
[ ] Métricas no dashboard /recuperacao
```

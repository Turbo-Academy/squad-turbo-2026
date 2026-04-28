# WhatsApp Templates Meta API · Categoria UTILITY

> Como aprovar mensagens do LPSG como **Utility** na API oficial da Meta · regras + templates prontos.

**Última verificação:** abril 2026 · políticas Meta atualizadas em 9 abr 2025 (auto-recategorização) e 16 abr 2025 (sem aviso prévio em casos de abuso).

---

## 🎯 Por que isso importa

| Categoria | Custo aprox. (Brasil) | Quando dispara |
|---|---|---|
| **Utility** | **~R$ 0,03-0,08** por mensagem | Resposta a ação do usuário (compra, inscrição, etc.) |
| **Marketing** | **~R$ 0,30-0,50** por mensagem | Promoção · oferta · convite genérico |
| **Authentication** | ~R$ 0,02 | OTP / código de verificação |
| **Service** | Grátis (em conversa aberta) | Resposta a mensagem do usuário em < 24h |

> **Diferença em escala:** 1.000 disparos/dia = **R$ 30-80 (Utility)** vs **R$ 300-500 (Marketing)**. Em um lançamento com 5 mil compradores e 8 disparos por dia × 5 dias, a diferença passa de **R$ 10 mil/lançamento**.

---

## 📋 Regras Meta para aprovação como UTILITY

### ✅ DEVE ter

1. **Disparada por ação do usuário** — compra, inscrição, preenchimento de ficha, agendamento
2. **Conteúdo transacional específico** — número de pedido, data confirmada, link de acesso
3. **Tom neutro e factual** — informa, não persuade
4. **Variáveis preenchidas com dados reais** — `{{1}}`, `{{2}}` viram nome/data/link, não slogans
5. **URLs em botões**, nunca no corpo
6. **1 propósito por template** — não misturar confirmação + promoção
7. **Idioma único por submissão** — submeter cada idioma separadamente

### ❌ NÃO PODE ter

| Trigger | Exemplo proibido | Versão Utility |
|---|---|---|
| Promoção | "Aproveite 50% off!" | "Seu desconto de R$ {{1}} está aplicado." |
| Urgência genérica | "Última chance!" | "Seu acesso expira em {{1}}." |
| CTA de venda | "Compre agora" | "Acesse seu evento aqui." |
| Convite vago | "Vem conhecer nosso curso" | "Sua aula começa às {{1}}." |
| Upsell | "Que tal upgradar?" | (não usar — vai pra Marketing) |
| Linguagem de marketing | "Imperdível", "Exclusivo", "Novidade" | "Confirmação de inscrição: {{1}}" |

### 🚨 Palavras que **disparam** reclassificação automática para Marketing

```
❌ desconto · promoção · oferta · imperdível · exclusivo · limitado
❌ aproveite · não perca · última chance · garanta o seu
❌ deal · upgrade · economize · compre agora
❌ free · gratuito (quando vinculado a CTA promocional)
❌ shop now · learn more · browse products · check out
❌ "queremos te apresentar" · "temos uma novidade"
```

> **Regra prática:** se a frase pode aparecer num anúncio de Black Friday, ela **não é Utility**.

---

## 🔄 Como Meta classifica (algoritmo + revisão humana)

1. **Você submete** com categoria escolhida (Utility, Marketing, Authentication, Service)
2. **ML da Meta lê** o template em segundos
3. **Aprovação automática** se passa nos critérios
4. **Reclassificação automática** se Meta entender que é Marketing
5. **Disparo de email/webhook** notificando a mudança
6. **Você tem 60 dias** pra pedir revisão humana após reclassificação

> **Política de 16/abr/2025:** quando Meta detecta abuso (template Marketing submetido como Utility), **não há mais aviso prévio**. Recategoriza direto.

---

## 🧱 Anatomia de um template Utility no LPSG

```
┌──────────────────────────────────────────┐
│ HEADER (opcional)                        │
│   • Texto · Imagem · Vídeo · Documento   │
│   • Variáveis no header só em texto      │
├──────────────────────────────────────────┤
│ BODY (obrigatório, máx 1024 chars)       │
│   • Texto + variáveis {{1}}, {{2}}, ...  │
│   • Sem URLs, sem promoção               │
├──────────────────────────────────────────┤
│ FOOTER (opcional, máx 60 chars)          │
│   • Texto fixo (sem variáveis)           │
├──────────────────────────────────────────┤
│ BUTTONS (opcional, até 10 botões)        │
│   • URL (linkar ação)                    │
│   • Quick Reply (resposta rápida)        │
│   • Phone (ligar pra suporte)            │
└──────────────────────────────────────────┘
```

### Limites técnicos

| Componente | Limite |
|---|---|
| **Body** | 1024 caracteres |
| **Footer** | 60 caracteres |
| **Header texto** | 60 caracteres |
| **Variáveis no body** | Até 10 (`{{1}}` a `{{10}}`) |
| **URL com variável** | Última parte da URL pode ter `{{1}}` |
| **Botões** | Até 10 no total · 2 URL · 1 Phone |
| **Categoria** | 1 só (escolha bem) |
| **Idioma** | 1 por template (criar variantes separadas) |

---

## 📨 Templates Utility do LPSG (prontos para submeter)

> Todos os templates abaixo seguem o **gatilho Utility:** disparados por ação do usuário (compra de ingresso, preenchimento de ficha, presença em aula).
>
> **Classificação alvo:** **UTILITY** ✅

---

### 🟢 1. `lpsg_onboarding_confirmacao`
**Trigger:** logo após compra do ingresso (Hotmart webhook)

**Categoria:** `UTILITY`

```
[BODY]
Olá {{1}}, sua inscrição no {{2}} foi confirmada com o e-mail {{3}}.

O evento começa em {{4}} às {{5}}. Você receberá os links de acesso aqui mesmo.

Esse e-mail está correto?

[BUTTONS]
✅ Sim, é esse  (Quick Reply)
❌ Corrigir e-mail  (Quick Reply)

[FOOTER]
Suporte: {{6}}
```

---

### 🟢 2. `lpsg_onboarding_grupo`
**Trigger:** após confirmação do e-mail (Quick Reply na msg anterior)

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, agora preciso que você complete 3 passos pra garantir que receba todos os links do {{2}}.

1️⃣ Preencha sua ficha de inscrição (2 minutos)
2️⃣ Entre no grupo do WhatsApp (backup oficial do evento)
3️⃣ Responda "OK" às mensagens pra eu saber que chegaram

[BUTTONS]
🔗 Preencher ficha  (URL)
👥 Entrar no grupo  (URL)
```

---

### 🟢 3. `lpsg_aula_lembrete_10min`
**Trigger:** 10 min antes do horário da aula (cronjob)

**Categoria:** `UTILITY`

```
[BODY]
Bom dia {{1}}.

Sua aula {{2}} do {{3}} começa em 10 minutos.

[BUTTONS]
▶️ Acessar aula  (URL)
```

---

### 🟢 4. `lpsg_aula_iniciada`
**Trigger:** no horário exato da aula

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, sua aula {{2}} começou agora.

Acesse pelo link abaixo.

[BUTTONS]
▶️ Entrar agora  (URL)
```

---

### 🟢 5. `lpsg_replay_disponivel`
**Trigger:** ao meio-dia · após cada aula

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, a aula {{2}} de hoje está gravada.

Você pode acessar a qualquer momento pelo link abaixo.

[BUTTONS]
🎥 Assistir replay  (URL)
```

---

### 🟢 6. `lpsg_audio_resumo_diario`
**Trigger:** noite · após cada aula

**Categoria:** `UTILITY`

```
[HEADER]
Tipo: Áudio

[BODY]
{{1}}, gravei um áudio com o resumo do que vimos hoje na aula {{2}} e o que vamos fazer amanhã.

Toque no áudio acima pra ouvir.
```

---

### 🟢 7. `lpsg_ficha_interesse_aberta`
**Trigger:** após Aula 4 (presença confirmada)

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, a ficha de matrícula do {{2}} foi liberada para você.

Quem preenche a ficha tem acesso antecipado ao carrinho na próxima segunda às 6h50, antes da abertura geral.

[BUTTONS]
📋 Preencher ficha  (URL)
```

---

### 🟢 8. `lpsg_tiraduvidas_sabado`
**Trigger:** sábado de manhã · presença confirmada

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, hoje às {{2}} acontece o tira-dúvidas ao vivo do {{3}}.

Se você enviou pergunta na ficha, ela pode aparecer no encontro.

[BUTTONS]
▶️ Acessar agora  (URL)
```

---

### 🟢 9. `lpsg_pitch_lembrete_1h`
**Trigger:** domingo · 1h antes do pitch

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, a aula final do {{2}} começa em 1 hora ({{3}}).

[BUTTONS]
▶️ Acessar aula  (URL)
```

---

### 🟢 10. `lpsg_carrinho_ficha_aberto`
**Trigger:** segunda 6h50 · APENAS quem preencheu ficha

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, o acesso antecipado da ficha de matrícula está aberto.

Conforme combinado, sua janela exclusiva vai até {{2}}.

[BUTTONS]
🔓 Acessar agora  (URL)
```

---

### 🟢 11. `lpsg_carrinho_geral_aberto`
**Trigger:** segunda 7h00 · todos os inscritos

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, o acesso ao {{2}} está liberado para todos os inscritos do evento.

[BUTTONS]
🔓 Acessar  (URL)
```

---

### 🟢 12. `lpsg_recuperacao_checkout`
**Trigger:** 1h após InitiateCheckout sem Purchase

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, identifiquei que sua compra do {{2}} foi iniciada mas não foi concluída.

Posso te ajudar a finalizar?

[BUTTONS]
✅ Finalizar agora  (URL)
💬 Falar com suporte  (URL ou Phone)
```

---

### 🟢 13. `lpsg_carrinho_fecha_hoje`
**Trigger:** sexta · 12h antes do fechamento

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, lembrete: o prazo para sua matrícula no {{2}} encerra hoje às {{3}}.

[BUTTONS]
🔓 Acessar  (URL)
```

---

### 🟢 14. `lpsg_carrinho_fechado`
**Trigger:** sexta 23h59 · após fechamento

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, o prazo de matrícula no {{2}} foi encerrado.

Caso você tenha tentado finalizar e teve algum problema técnico, responda esta mensagem com o comprovante de pagamento ou número do pedido.
```

---

### 🟢 15. `lpsg_compra_confirmada`
**Trigger:** webhook de Purchase confirmada

**Categoria:** `UTILITY`

```
[BODY]
{{1}}, sua matrícula no {{2}} foi confirmada com sucesso.

Pedido: {{3}}
Acesso liberado em até 5 minutos no e-mail {{4}}.

[BUTTONS]
🎓 Acessar plataforma  (URL)
📄 Ver comprovante  (URL)
```

---

## 🚨 Mensagens que NÃO podem ser Utility

Algumas mensagens da rotina LPSG são naturalmente **Marketing** ou **Service**. Submeter como Utility vai causar reclassificação automática.

| Mensagem | Categoria correta | Por quê |
|---|---|---|
| Áudio do expert convidando para o tira-dúvidas com tom de venda | **Marketing** | Persuasão pra ação não solicitada |
| "Aproveite o último dia do bônus" | **Marketing** | Linguagem promocional explícita |
| Pesquisa NPS pós-evento | **Marketing** ou Service | Solicita ação não-transacional |
| Reativação de ex-aluno | **Marketing** | Não é resposta a ação recente |
| Convite pra próximo evento | **Marketing** | Promocional por natureza |
| Resposta direta a dúvida do aluno em < 24h da última msg dele | **Service** (grátis) | Em janela de conversa aberta |

> **Estratégia LPSG:** **80% dos disparos são Utility** (lembretes, confirmações, links de ação solicitada). Os 20% que são Marketing concentram-se em poucos pontos do ciclo (pré-pitch, áudios de oferta) — e o custo desses disparos cabe no orçamento.

---

## 🛠️ Como submeter um template

### Pelo Meta Business Manager

1. Acesse **WhatsApp Manager** → **Account Tools** → **Message Templates**
2. Clique em **Create Template**
3. **Category:** selecione `Utility` (não `Marketing`)
4. **Name:** use snake_case · ex: `lpsg_aula_lembrete_10min`
5. **Language:** Português (BR) · `pt_BR`
6. **Header (opcional):** Texto · Imagem · Vídeo · Documento
7. **Body:** texto com variáveis `{{1}}`, `{{2}}`, etc.
8. **Footer (opcional):** texto fixo
9. **Buttons:** URL (com variável dinâmica se quiser) · Quick Reply · Phone
10. **Sample values:** preenche as variáveis com exemplos reais (Meta usa pra avaliar)

### Pela API direta

```bash
curl -X POST \
  "https://graph.facebook.com/v22.0/{WABA_ID}/message_templates" \
  -H "Authorization: Bearer {TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "lpsg_aula_lembrete_10min",
    "language": "pt_BR",
    "category": "UTILITY",
    "components": [
      {
        "type": "BODY",
        "text": "Bom dia {{1}}. Sua aula {{2}} do {{3}} começa em 10 minutos.",
        "example": {
          "body_text": [["João", "Aula 1", "Desafio LPSG"]]
        }
      },
      {
        "type": "BUTTONS",
        "buttons": [
          {
            "type": "URL",
            "text": "▶️ Acessar aula",
            "url": "https://lp.dominio.com.br/v1?utm=wpp"
          }
        ]
      }
    ]
  }'
```

### Tempo de aprovação

- **ML automático:** segundos a minutos · maioria aprovada na hora
- **Revisão humana:** se ML duvidar · 24-48h
- **Rejeição:** vem com motivo no email/webhook · ajusta e ressubmete

---

## 🔍 Checklist antes de submeter

- [ ] Template é resposta a ação do usuário (compra · inscrição · ficha · presença)
- [ ] Sem palavras de marketing (lista negra acima)
- [ ] URLs estão em botões, não no body
- [ ] Variáveis `{{1}}`, `{{2}}` viram dados reais (nome, data, link)
- [ ] Sample values preenchidos com exemplos plausíveis
- [ ] Categoria selecionada: `UTILITY`
- [ ] Nome em snake_case com prefixo do projeto (`lpsg_`, `tas_`, etc.)
- [ ] Idioma único: `pt_BR`
- [ ] Body ≤ 1024 caracteres
- [ ] Footer ≤ 60 caracteres
- [ ] Política de privacidade disponível no domínio
- [ ] Opt-in registrado (lead deu consentimento ao comprar/inscrever)

---

## 💸 Custo comparado em um lançamento LPSG real

> Cenário: 5.000 inscritos · 8 mensagens/dia × 5 dias = **200.000 disparos**

| Cenário | Custo total |
|---|---|
| **100% Marketing** (R$ 0,40 médio) | **R$ 80.000** ❌ inviável |
| **50% Marketing + 50% Utility** | R$ 41.500 |
| **80% Utility + 20% Marketing** *(padrão LPSG)* | **R$ 14.800** ✅ |
| **100% Utility** (R$ 0,06 médio) | R$ 12.000 (não realista — alguns disparos são naturalmente Marketing) |

**Economia ao mover de Marketing pra Utility:** ~70-80% por disparo. Em 200k disparos, isso é a diferença entre **caber no orçamento** ou **comer toda a margem do produto**.

---

## 📚 Fontes oficiais e referências

- [Meta · Utility templates documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/utility-templates/)
- [Meta · Template categorization rules](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization)
- [Meta · Pricing on the WhatsApp Business Platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)
- [WhatsApp Template Categories Explained — WUSeller](https://www.wuseller.com/blog/whatsapp-template-categories-explained-marketing-vs-utility-vs-authentication-vs-service/)
- [How to Keep Your Templates in Utility — eGrow](https://help.egrow.com/en/article/whatsapp-template-category-guide-how-to-keep-your-templates-in-the-utility-category)
- [10 Useful WhatsApp Template Messages for Webinars & Events — AiSensy](https://m.aisensy.com/blog/whatsapp-template-messages-for-webinars/)
- [WhatsApp Business API Compliance 2026 — GMC](https://gmcsco.com/your-simple-guide-to-whatsapp-api-compliance-2026/)

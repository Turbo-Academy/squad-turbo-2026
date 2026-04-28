# 02 · Bônus Tsunami

> A escassez progressiva que **mata a venda no primeiro dia**. Sem isso, o carrinho ficaria aberto a semana inteira esperando decisão. Com isso, **70%+ das vendas fecham nas primeiras 24h**.

---

## 🎯 Princípio central

> **Quanto mais cedo a pessoa entra, mais leva.**
>
> A escassez não é sobre "subir o preço pra criar urgência" — é sobre **recompensar quem decide rápido** com algo que dinheiro nenhum compra depois.

---

## ⏰ As 4 janelas do Tsunami

> **Ordem temporal real do LPSG:**
> - **6h50** → carrinho da ficha de matrícula abre
> - **7h00** → carrinho geral abre + janela dos 10 min **fecha** simultaneamente
> - A janela dos 10 min fica disponível **das 6h50 às 7h00** (antes do carrinho geral)

```
┌─────────────────────────────────────────────────────────────────────┐
│  06:50      07:00      08:00      10:00     23:59          >24h    │
│   │          │          │          │         │             │       │
│   ▼          ▼          ▼          ▼         ▼             ▼       │
│  FICHA      GERAL      1h         3h        1dia         CHEIO     │
│  abre       abre       fecha      fecha     fecha                  │
│  (10min)    10min                                                  │
│  inicia     fecha                                                  │
└─────────────────────────────────────────────────────────────────────┘
```

| Janela | Duração | Quem acessa | Desconto |
|---|---|---|---|
| **10 minutos (ficha)** | 6h50 → 7h00 | Quem preencheu ficha de matrícula | Maior desconto · ~50% off · bônus principal |
| **1 hora** | 7h00 → 8h00 | Todos (carrinho geral aberto) | Mantém ~50% off |
| **3 horas** | 7h00 → 10h00 | Todos | ~40% off |
| **1 dia** | 7h00 → 23h59 (Seg) | Todos | ~30% off |
| **Dia 2 em diante** | Ter → Sex | Todos | Preço cheio |

> **Lógica do tsunami LPSG:**
> 1. Quem preenche **ficha de matrícula** ganha **10 minutos antecipados** (6h50 às 7h00) com **bônus único** + maior desconto.
> 2. Às 7h em ponto: a janela dos 10 min **fecha** e o carrinho **geral abre** com a janela de 1 hora começando.
> 3. Os bônus são **cumulativos pra trás**: quem entra na janela 10 min leva tudo (1h + 3h + 1dia). Quem entra na janela 1h leva 1h + 3h + 1dia. E assim por diante.

---

## 🎁 1️⃣ Janela "10 minutos" — 6h50 às 7h00

**A janela mais agressiva.** Acesso exclusivo pra quem preencheu a **ficha de matrícula**. Quem entra aqui leva **TUDO**.

### Bônus

```
✅ {BONUS_PRINCIPAL}                    # call 1:1 com expert / acesso vitalício / etc.
✅ + {BONUS_1H}                         # cumulativo
✅ + {BONUS_3H}                         # cumulativo
✅ + {BONUS_1DIA}                       # cumulativo

💰 Preço: R$ {VALOR_10MIN}              # ~50% off do valor cheio
⏰ Janela: 6h50 → 7h00 (10 minutos exatos)
```

### Função estratégica

- **Recompensa quem qualificou cedo** (preencheu ficha de matrícula antes do pitch)
- **Acesso antecipado VIP** — só quem está na ficha tem o link
- **Cria pico de vendas** antes do carrinho geral abrir
- Concentra ~25-30% das vendas totais aqui

### Critério para bônus principal

O bônus da janela 10 min precisa ser:
- **Único** (não pode ser comprado depois nem com mais dinheiro)
- **Tangível** (nome próprio · resultado claro)
- **Limitado** (vagas reais, não falsa escassez)

> **Exemplos:** call 1:1 com expert · acesso vitalício · entrega de algo físico · grupo VIP fechado.

### Comunicação no pitch

> "Quem preencher a **ficha de matrícula** terá acesso a uma janela exclusiva de **10 minutos**, das **6h50 às 7h00** da segunda-feira.
>
> Nessa janela, vou liberar **{BONUS_PRINCIPAL}** + **{BONUS_1H}** + **{BONUS_3H}** + **{BONUS_1DIA}** — tudo junto, por **R$ {VALOR_10MIN}**.
>
> Às **7h em ponto** essa janela fecha e o carrinho abre pra todo mundo — mas sem o bônus principal. **Não tem volta.**"

### URL específica

```
{URL_CHECKOUT}?cupom={CUPOM_10MIN}
```

> Acesso liberado **apenas** pra quem está na lista da ficha de matrícula. Disparo via API/grupo VIP às 6h50.

---

## 🎁 2️⃣ Janela "1 hora" — 7h00 às 8h00

> **Carrinho geral abre.** Aqui acessa qualquer pessoa do evento (não precisa ter preenchido ficha).

### Bônus

```
✅ {BONUS_1H}                           # ex: Estratégia Turbo · sessão coletiva
✅ + {BONUS_3H}                         # cumulativo
✅ + {BONUS_1DIA}                       # cumulativo

💰 Preço: R$ {VALOR_10MIN}              # MANTÉM o desconto da janela 10min
```

### Função estratégica

- **Captura quem não estava na ficha** mas decidiu rápido após o carrinho abrir
- Mantém o desconto agressivo (mesmo da janela 10min)
- O que perde é apenas o bônus principal (exclusivo da ficha)

### Comunicação

> "Quem entrar agora ainda leva **{BONUS_1H}** + os demais — pelo mesmo preço dos 10 minutos."

---

## 🎁 3️⃣ Janela "3 horas" — 7h00 às 10h00

### Bônus

```
✅ {BONUS_3H}                           # ex: 1 mês extra · template extra
✅ + {BONUS_1DIA}                       # cumulativo

💰 Preço: R$ {VALOR_3H}                 # ~40% off
```

### Função estratégica

- **Captura quem viu o pitch gravado** ou demorou pra decidir
- Desconto ainda atraente (40% off)
- Já não inclui o bônus principal nem o de 1h

### Comunicação

> "Em {TEMPO_RESTANTE} acaba a janela das 3 horas. Quem entrar até **10h** garante **{BONUS_3H}**."

---

## 🎁 4️⃣ Janela "1 dia" — 7h00 às 23h59 (Segunda)

### Bônus

```
✅ {BONUS_1DIA}                         # ex: bônus base · acesso ao grupo

💰 Preço: R$ {VALOR_1DIA}               # ~30% off
```

### Função estratégica

- **Última chance do desconto significativo**
- Captura quem tomou decisão durante o dia
- Mensageria intensa nas últimas 4h ("acaba meia-noite")

### Comunicação (8h da noite)

> "Em **4 horas** o desconto acaba. Depois disso o valor sobe pra R$ {VALOR_CHEIO}.
>
> A diferença é R$ {ECONOMIA} — {COMPARACAO_CONCRETA} (paga uma viagem · 6 meses de gestor · etc.)"

---

## 🎁 5️⃣ Dia 2 em diante — Preço cheio

```
✅ Acesso ao produto base
   (sem nenhum bônus tsunami)

💰 Preço: R$ {VALOR_CHEIO}              # 0% de desconto
```

### Função estratégica

- **Recupera quem decidiu tarde** mas ainda quer entrar
- Margem máxima · não está mais fazendo desconto
- Após dia 1: foco vai pra **recuperação humana** (ver `04-garantia-e-recuperacao.md`)

---

## 📊 Distribuição de vendas esperada

> Em operações maduras de LPSG, a distribuição de vendas é assim:

| Janela | % das vendas totais |
|---|---|
| **10 min (ficha · 6h50-7h00)** | ~25-30% |
| **1 hora (7h-8h)** | ~10-15% |
| **3 horas (7h-10h)** | ~10-15% |
| **1 dia (até 23h59 Seg)** | ~25-30% |
| **Dia 2 em diante (Ter-Sex)** | ~15-25% (recuperação humana) |

> **Meta:** ≥ 70% das vendas no primeiro dia. Se < 70%, **a oferta tá fraca** — bônus tsunami não está concentrando decisão.

---

## 🛠️ Implementação técnica

### URLs com cupom

Cada janela tem **URL específica com cupom já aplicado**:

```
URL_10MIN:       {CHECKOUT}?cupom=TURBO-50      # janela 10 min (ficha) · 6h50-7h00
URL_1H:          {CHECKOUT}?cupom=TURBO-50      # janela 1h (mantém preço) · 7h-8h
URL_3H:          {CHECKOUT}?cupom=TURBO-40      # janela 3 horas · 7h-10h
URL_1DIA:        {CHECKOUT}?cupom=TURBO-30      # janela 1 dia · 7h-23h59
URL_CHEIO:       {CHECKOUT}                     # sem cupom · dia 2 em diante
```

### Switch automático na página

O bloco da oferta na página de venda do produto **muda automaticamente** conforme a hora:

```typescript
function getCurrentOffer(now: Date): Offer {
  const fichaOpening = new Date("2026-05-19T06:50:00-03:00");
  const generalOpening = new Date("2026-05-19T07:00:00-03:00");

  if (now < fichaOpening) return offers.notYetOpen;

  // Janela 10 min: 6h50 → 7h00 (só ficha)
  if (now < generalOpening) return offers.window10min;

  // Janelas após 7h
  const minutesSinceOpening = (now.getTime() - generalOpening.getTime()) / 60000;
  if (minutesSinceOpening < 60)    return offers.window1h;     // 7h-8h
  if (minutesSinceOpening < 180)   return offers.window3h;     // 7h-10h
  if (minutesSinceOpening < 1019)  return offers.window1day;   // até 23h59 = 16h59 = 1019min
  return offers.fullPrice;
}
```

### Contador regressivo na página

Cada janela mostra um **contador real** pro fim da janela:

```
Janela atual: 10 minutos
Termina em: 04:23  ← contador regressivo real
```

> ❗ **Não usar contador falso** que reseta quando atualiza a página. Comunidade percebe e queima a marca.

---

## 📨 Mensageria do tsunami (extrato — ver `mensageria-lpsg`)

### Domingo 22h (após pitch)

> Áudio do expert: "Carrinho abre amanhã. Quem está na ficha tem 10 min antes às 6h50 com **bônus único**. Quem ficou de fora entra 7h."

### Segunda 6h50

> API (só ficha): "Carrinho aberto pra você. **{BONUS_PRINCIPAL}** + tudo junto por R$ {VALOR_10MIN} — só nos próximos 10 minutos. {URL_10MIN}"

### Segunda 7h00

> API (todos): "🚨 Janela dos 10 min fechou! Carrinho **aberto pra todos** agora. R$ {VALOR_10MIN} mantido por mais 1h. {URL_1H}"

### Segunda 8h00

> Grupo: "🚨 Janela de 1h fechou. Próximas 2h tem {BONUS_3H} por R$ {VALOR_3H}."

### Segunda 9h45

> Grupo: "15 min pra acabar a janela das 3h. R$ {VALOR_3H} + {BONUS_3H}."

### Segunda 19h

> Grupo: "Em 5h o bônus de 1 dia acaba. Depois disso volta pra R$ {VALOR_CHEIO}."

### Segunda 23h45

> Grupo + áudio: "15 min pra acabar tudo. Depois disso é preço cheio. Última chance: {URL_1DIA}"

---

## ✅ Checklist do bônus tsunami

- [ ] 4 janelas configuradas (10min · 1h · 3h · 1dia)
- [ ] Bônus principal (10min) é único e impossível de comprar depois
- [ ] Cada janela tem cupom + URL específica
- [ ] Switch automático na página da oferta
- [ ] Contador regressivo real (não falso)
- [ ] Mensageria configurada com 6+ disparos no dia 1
- [ ] Equipe de plantão no WhatsApp pra dúvidas
- [ ] Comunicação no pitch deixa claro: "depois desse minuto não tem volta"
- [ ] Bônus cumulativos (quem entra cedo leva tudo)
- [ ] Distribuição de vendas alvo: ≥ 70% no dia 1

---

## 🚨 Erros que matam o tsunami

| Erro | Consequência |
|---|---|
| Bônus principal disponível depois | Quebra a escassez · ninguém entra cedo |
| Janelas confusas (sem cumulatividade clara) | Lead trava · não decide |
| Sem cupom específico por janela | Preço errado no checkout · venda perdida |
| Contador falso que reseta | Comunidade descobre · queima credibilidade |
| Bônus genérico ("acesso ao grupo VIP") | Ninguém valoriza · não puxa decisão |
| Mensageria fraca no dia 1 | Concentra < 70% · vendas se diluem |
| Reabrir janela depois ("vai só hoje") | Próximo lançamento ninguém acredita |
| 5+ janelas (excesso de complexidade) | Lead se perde · 4 é o ideal |

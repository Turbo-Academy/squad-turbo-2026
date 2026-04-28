# 03 · Preço e Parcelamento

> O preço final + opções de pagamento + comunicação clara. **Atrito no checkout = venda perdida.**

---

## 🎯 Princípio central

> **Preço alto não é problema. Preço confuso é.**
>
> A pessoa não entra no checkout com calculadora. Se ela precisar fazer conta de cabeça, você perdeu a venda.

---

## 💰 Estrutura de preços

### Os 3 preços do LPSG

| Preço | Quando aparece | Função |
|---|---|---|
| **Valor cheio** | Stack de valor + dia 2 em diante | Âncora · ponto de comparação |
| **Valor à vista** | Janela ativa do tsunami | Preço com desconto · cobra menos |
| **Parcelamento** | Toda apresentação | Acessibilidade · transforma preço em "mensalidade" |

### Tabela de preços por janela (template)

```yaml
VALOR_CHEIO:              "R$ {VALOR_CHEIO}"

JANELA_10MIN:
  a_vista:                "R$ {VALOR_10MIN}"        # ~50% off
  cartao_12x:             "12x de R$ {PARC_10MIN}"  # com ou sem juros

JANELA_1H:
  a_vista:                "R$ {VALOR_10MIN}"        # mantém preço da 10min
  cartao_12x:             "12x de R$ {PARC_10MIN}"

JANELA_3H:
  a_vista:                "R$ {VALOR_3H}"           # ~40% off
  cartao_12x:             "12x de R$ {PARC_3H}"

JANELA_1DIA:
  a_vista:                "R$ {VALOR_1DIA}"         # ~30% off
  cartao_12x:             "12x de R$ {PARC_1DIA}"

DIA_2_EM_DIANTE:
  a_vista:                "R$ {VALOR_CHEIO}"
  cartao_12x:             "12x de R$ {PARC_CHEIO}"
```

---

## 💳 Formas de pagamento

### Hierarquia de aceitação (no LPSG)

| Forma | Plataforma | Característica | Quando faz sentido |
|---|---|---|---|
| **Cartão de crédito** | Hotmart / Eduzz / Stripe | 12x sem juros | **Padrão · 80%+ das vendas** |
| **Pix à vista** | Hotmart / Pix direto | Desconto adicional 5% | Quem decide rápido |
| **Boleto à vista** | Hotmart | Sem juros | Quem prefere boleto (raro) |
| **2 cartões** | Hotmart (split) | 24x dividido em 2 cartões | High-ticket > R$ 10k |
| **PJ via Nota Fiscal** | Conta empresarial | Pagamento em N parcelas | Empresa do comprador |

### Política de descontos por forma

```yaml
CARTAO_12X:               "Sem juros · preço cheio da janela"
PIX_AVISTA:               "5% off adicional"
BOLETO_AVISTA:            "5% off adicional"
2_CARTOES_24X:            "Sem juros · split 50/50 entre cartões"
PJ:                       "Negocia caso a caso · padrão: parcelado em N x"
```

### Exemplo concreto

```
Janela 1 dia (Segunda):
- À vista (Pix/Boleto):    R$ 16.625  (5% off de R$ 17.500)
- 12x cartão:              12x R$ 1.458  (R$ 17.500 sem juros)
- 2x cartões 24x:          24x R$ 729   (R$ 17.500 sem juros)
```

---

## 📊 Cálculo do parcelamento

### Regra do "valor mensal palatável"

> A parcela em **12x** deve ser ≤ 5% da renda mensal do avatar.

| Avatar com renda mensal | Parcela 12x ideal | Preço cheio máximo |
|---|---|---|
| R$ 5.000/mês | R$ 250 | R$ 3.000 |
| R$ 15.000/mês | R$ 750 | R$ 9.000 |
| R$ 30.000/mês | R$ 1.500 | R$ 18.000 |
| R$ 50.000/mês | R$ 2.500 | R$ 30.000 |
| R$ 100.000/mês | R$ 5.000 | R$ 60.000 |

> Se a parcela em 12x **passa de 5% da renda** do avatar, ele vai parcelar em 2 cartões ou desistir.

### Comunicação do parcelamento

**Padrão LPSG:**

```
R$ 17.500 à vista
ou 12x R$ 1.458 sem juros
```

**NÃO usar:**

```
❌ R$ 1.458 / mês (esconde o valor cheio)
❌ De R$ 25.000 por R$ 17.500 (mostra preço cheio antes do final)
```

> A regra é: **mostre o preço final primeiro, depois o parcelamento**. O cheio só aparece como âncora antes (na stack de valor).

---

## 🛒 Configuração do checkout

### Hotmart (mais comum no Brasil)

```yaml
CONFIGURACOES:
  metodos_pagamento:      "Cartão · Pix · Boleto · 2 cartões"
  parcelamento_max:       "12x sem juros"
  cobranca_2_cartoes:     "Habilitada (split)"
  desconto_pix:           "5% (configurar regra de desconto)"

  # Cupons das janelas
  cupom_ficha:            "FICHA-50 (50% off · uso único por CPF · valido 15 min)"
  cupom_10min:            "TURBO-50 (50% off · valido 10 min após abertura)"
  cupom_3h:               "TURBO-40 (40% off · valido 3h após abertura)"
  cupom_1dia:             "TURBO-30 (30% off · valido 24h após abertura)"

  # UTMs propagadas
  utm_propagation:        "Ativo · captura todas as UTMs no checkout"

  # Eventos
  pixel_meta:             "InitiateCheckout · AddPaymentInfo · Purchase"
  google_ads:             "Conversão configurada"
```

### Outras plataformas

| Plataforma | Vantagens | Desvantagens |
|---|---|---|
| **Hotmart** | Padrão Brasil · suporte forte · 12x sem juros nativo | Taxa 9.9% sobre venda |
| **Eduzz** | Taxa menor (~7%) · checkout customizável | Suporte mais lento |
| **Stripe + custom** | Taxa baixa (3.9%) · controle total | Precisa dev pra integrar Pix |
| **Kiwify** | Taxa razoável (8.9%) · cresceu rápido | Menos features que Hotmart |

> **Padrão LPSG do Leo:** Hotmart. Confiável, tem 12x sem juros direto, e o lead já conhece a plataforma.

---

## 🧮 Calculadora rápida (modelo)

Pra montar o preço final de cada janela:

```
VALOR_CHEIO = R$ 25.000

Janela 10min: 50% off = R$ 12.500
  - 12x R$ 1.041 sem juros

Janela 3h: 40% off = R$ 15.000
  - 12x R$ 1.250 sem juros

Janela 1dia: 30% off = R$ 17.500
  - 12x R$ 1.458 sem juros

Dia 2+: preço cheio = R$ 25.000
  - 12x R$ 2.083 sem juros
```

### Regra prática de descontos

| Janela | Desconto LPSG padrão |
|---|---|
| **10 min** | 40-50% off |
| **3 horas** | 30-40% off |
| **1 dia** | 20-30% off |
| **Dia 2+** | 0% (preço cheio) |

> Quanto **mais alto o ticket**, **maior o desconto agressivo dos 10min** funciona. Em produtos de R$ 25k, 50% é razoável. Em produtos de R$ 1k, 30% é o teto.

---

## 💬 Como comunicar o preço no pitch

### Sequência de revelação

1. **Stack de valor** apresentada (R$ {TOTAL_STACK})
2. **Pergunta retórica:** "Então quanto custa entrar?"
3. **Ancoragem:** "Se eu cobrasse R$ {TOTAL_STACK}, ainda valeria a pena."
4. **Antecipação:** "Mas eu não vou cobrar R$ {TOTAL_STACK}. Nem o valor cheio de R$ {VALOR_CHEIO}."
5. **Revelação da janela:** "Hoje, nos próximos 10 minutos, vocês entram por **R$ {VALOR_10MIN}** ou **12x de R$ {PARC_10MIN}**."

### Frases-padrão LPSG

> *"À vista R$ {VALOR_AVISTA}, ou doze vezes de R$ {PARC} sem juros, direto no seu cartão."*

> *"Nos primeiros 10 minutos é {DESCONTO}% off — depois o desconto cai pra {DESCONTO_PROXIMO}%."*

> *"Em **12 vezes** dá R$ {PARC} por mês. Menos do que muita gente gasta no Uber em uma semana."*

### Comparação acessível

Pra cada faixa de preço, compare com algo que o avatar consume mensalmente:

| Parcela 12x | Comparação |
|---|---|
| R$ 250 | "Menos que o Spotify Família + Netflix" |
| R$ 500 | "O custo de um almoço executivo por semana" |
| R$ 1.000 | "Menos que a parcela de um carro popular" |
| R$ 1.500 | "O preço de uma academia top + suplementos" |
| R$ 2.500 | "Menos que a mensalidade de um colégio particular médio" |

---

## 🚫 Erros de preço e parcelamento

| Erro | Consequência |
|---|---|
| Mostrar só preço à vista (sem 12x) | Lead acha que só pode comprar à vista · desiste |
| 12x **com juros** sem avisar | Quebra confiança no checkout |
| Cupom errado / expirado na janela | Lead clica e vê preço cheio · venda perdida |
| Múltiplas formas de pagamento confusas | Decisão paralisa |
| Sem desconto Pix | Perde quem decidiu rápido |
| Esconder o valor cheio | Sem ancoragem · "porque tá tão caro?" |
| Preço final acima de 5% da renda mensal em 12x | Avatar não compra, mesmo querendo |

---

## ✅ Checklist de preço e parcelamento

- [ ] Valor cheio definido e fixo (âncora)
- [ ] 4 valores de janela calculados (10min · 3h · 1dia · cheio)
- [ ] Parcelamento 12x calculado pra cada janela
- [ ] Pix com 5% off adicional ativo
- [ ] Cupons configurados na Hotmart com prazo correto
- [ ] URLs com cupom embutido prontas
- [ ] Checkout testado em 3 navegadores e 2 dispositivos
- [ ] Pixel + GA4 disparando InitiateCheckout / Purchase
- [ ] Política de 2 cartões habilitada (high-ticket)
- [ ] Comunicação do preço segue: à vista + 12x sem juros
- [ ] Parcela 12x ≤ 5% da renda mensal do avatar

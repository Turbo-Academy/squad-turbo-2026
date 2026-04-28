# 00 · Variáveis Globais — Oferta

> Fonte da verdade da oferta. Preencha aqui primeiro — todos os outros arquivos referenciam estas variáveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"
AVATAR:                   "{AVATAR}"
```

---

## 🎁 Entregável de Valor pré-pitch (15 min · obrigatório)

```yaml
NOME_ENTREGAVEL:          "{NOME_ENTREGAVEL}"            # Ex: Checklist Completo do LPSG
TIPO:                     "{TIPO_ENTREGAVEL}"            # Checklist · Swipe file · Framework · Calculadora · Setup
VALOR_PERCEBIDO:          "{VALOR_PERCEBIDO}"            # Ex: "vale mais que o ingresso sozinho"
COMO_ENTREGAR:            "{COMO_ENTREGAR}"              # Ex: link no chat YT + grupo WhatsApp + email
DURACAO_APRESENTACAO:     "15 min (FIXO)"                # Antes do ATO 1 do pitch
```

> **Regra:** os 15 minutos são **100% conteúdo prático**. Sem isso, o pitch converte 30-40% menos.

---

## 💎 Produto principal

```yaml
NOME_PRODUTO:             "{NOME_PRODUTO}"               # Ex: Acelerador Turbo
TIPO_PRODUTO:             "{TIPO}"                       # Curso · Mentoria · Acompanhamento · Híbrido
PROMESSA_PRODUTO:         "{PROMESSA}"                   # Ex: escalar 5x em 90 dias
DURACAO_ACESSO:           "{DURACAO}"                    # Ex: 12 meses · vitalício · 6 meses
NIVEL_SUPORTE:            "{SUPORTE}"                    # Ex: WhatsApp direto · group · 1:1 mensal
```

---

## 💰 Valores

```yaml
VALOR_CHEIO:              "{VALOR_CHEIO}"                # Ex: R$ 25.000 (preço da âncora)
VALOR_FINAL:              "{VALOR_FINAL}"                # Ex: R$ 17.500 (com desconto da janela atual)

# Parcelamento
VALOR_A_VISTA:            "{VALOR_AVISTA}"               # Ex: R$ 17.500 (com desconto à vista)
PARCELAMENTO_CARTAO:      "{PARC_CARTAO}"                # Ex: 12x R$ 2.083 (Hotmart sem juros)
PARCELAMENTO_BOLETO:      "{PARC_BOLETO}"                # Ex: 6x R$ 3.333 (boleto)
PIX:                      "{PIX_DESCONTO}"               # Ex: 5% off adicional pra Pix

# Cálculos derivados
ECONOMIA_VS_CHEIO:        "{ECONOMIA}"                   # Ex: R$ 7.500 (50% off)
PERCENTUAL_DESCONTO:      "{PERCENT}"                    # Ex: 30%
```

---

## 🎁 Bônus Tsunami (escassez progressiva)

```yaml
BONUS_TSUNAMI:
  10_MINUTOS:                                            # 6h50 às 7h00 · APENAS ficha de matrícula
    nome:                 "{NOME_BONUS_10MIN}"           # Ex: Call individual com {EXPERT}
    acesso:               "Apenas quem preencheu ficha de matrícula"
    valor_isolado:        "{VALOR_ISOLADO_10MIN}"        # Ex: R$ 5.000
    desconto_total:       "{DESCONTO_10MIN}"             # Ex: 50% off
    valor_final_janela:   "{VALOR_FINAL_10MIN}"          # Ex: R$ 12.500

  1_HORA:                                                # 7h00 às 8h00 · carrinho geral
    nome:                 "{NOME_BONUS_1H}"              # Ex: Estratégia Turbo
    valor_isolado:        "{VALOR_ISOLADO_1H}"
    desconto_total:       "{DESCONTO_1H}"
    valor_final_janela:   "{VALOR_FINAL_1H}"             # Mantém o valor da janela 10min

  3_HORAS:                                               # 7h00 às 10h00
    nome:                 "{NOME_BONUS_3H}"
    valor_isolado:        "{VALOR_ISOLADO_3H}"
    desconto_total:       "{DESCONTO_3H}"                # Ex: 40% off
    valor_final_janela:   "{VALOR_FINAL_3H}"             # Ex: R$ 15.000

  1_DIA:                                                 # 7h00 às 23h59 (Seg)
    nome:                 "{NOME_BONUS_1DIA}"
    valor_isolado:        "{VALOR_ISOLADO_1DIA}"
    desconto_total:       "{DESCONTO_1DIA}"              # Ex: 30% off
    valor_final_janela:   "{VALOR_FINAL_1DIA}"           # Ex: R$ 17.500

  DIA_2_EM_DIANTE:                                       # Ter → Sex
    valor_final:          "{VALOR_CHEIO}"                # Volta pro preço cheio
```

---

## 🛡️ Dupla garantia

```yaml
GARANTIA_INCONDICIONAL:
  janela:                 "7 dias"                       # FIXO no LPSG
  pre_requisito:          "Nenhum"

GARANTIA_CONDICIONAL:
  janela:                 "30 dias"                      # ou 60 dias para produtos longos
  pre_requisito:          "Prova de aplicação (tarefas concluídas + evidência)"

TEXTO_CURTO:              "Garantia Incondicional de 7 dias + Condicional de 30 dias. Assista! Se não gostar devolvo seu dinheiro."

TEXTO_COMPLETO:           |
  🛡️ DUPLA GARANTIA

  7 DIAS — INCONDICIONAL
  Assista a primeira semana. Se não for pra você por qualquer
  motivo, devolvo 100% do seu dinheiro. Sem perguntas.

  30 DIAS — CONDICIONAL POR EXECUÇÃO
  Aplicou tudo, executou as tarefas e mesmo assim não viu
  resultado? Devolvo 100% do seu dinheiro mediante prova
  de aplicação.

POLITICA_REEMBOLSO:       "Devolução em 24h via Pix · até 7 dias úteis via cartão (estorno)"
```

---

## 📦 Composição do produto (stack de valor)

```yaml
ITENS_INCLUSOS:
  - nome:                 "{ITEM_1}"                     # Ex: Curso completo Acelerador Turbo (12 módulos)
    valor_isolado:        "{VALOR_1}"                    # Ex: R$ 12.000

  - nome:                 "{ITEM_2}"                     # Ex: Suporte 1:1 com expert (12 sessões)
    valor_isolado:        "{VALOR_2}"

  - nome:                 "{ITEM_3}"
    valor_isolado:        "{VALOR_3}"

  - nome:                 "{ITEM_4}"
    valor_isolado:        "{VALOR_4}"

  - nome:                 "{ITEM_5}"
    valor_isolado:        "{VALOR_5}"

VALOR_TOTAL_STACK:        "{VALOR_TOTAL_STACK}"          # Soma dos valores isolados
ANCORAGEM_VS_FINAL:       "{ANCORAGEM}x"                 # Mín 1.5x · Ideal 2x sobre o preço final
ANCORAGEM_DESCONTO:       "{PERCENT_VS_STACK}"           # Ex: 50% de desconto sobre o valor total
```

---

## ⏰ Cronograma do carrinho

```yaml
DATA_PITCH:               "{DATA_PITCH}"                 # Ex: Dom 18/05 às 20h
DATA_ABERTURA_FICHA:      "{DATA_ABERTURA_FICHA}"        # Ex: Seg 19/05 às 6h50 (só ficha · janela 10 min)
DATA_ABERTURA_GERAL:      "{DATA_ABERTURA_GERAL}"        # Ex: Seg 19/05 às 7h00 (todos)
DATA_FECHAMENTO:          "{DATA_FECHAMENTO}"            # Ex: Sex 23/05 às 23h59

# Janelas dos bônus tsunami
JANELA_10MIN:             "06h50 às 07h00 (Seg) · APENAS quem preencheu ficha de matrícula"
JANELA_1H:                "07h00 às 08h00 (Seg) · carrinho geral"
JANELA_3H:                "07h00 às 10h00 (Seg)"
JANELA_1DIA:              "07h00 (Seg) às 23h59 (Seg)"
DIA_2_EM_DIANTE:          "00h00 (Ter) até fechamento"
```

---

## 🔄 Recuperação de carrinho

```yaml
INICIO_RECUPERACAO:       "Ter 00h00"                    # Após fim do bônus de 1 dia
JANELA_RECUPERACAO:       "Ter a Sex (4 dias)"
META_RECUPERACAO:         "5-10% adicional do faturamento total"
EQUIPE_RECUPERACAO:       "{N_PESSOAS}"                  # Ex: 1 comercial humano + automação
TEMPO_RESPOSTA_LEAD:      "≤ 5 minutos"                  # SLA do comercial
```

---

## 🔗 Checkout e tracking

```yaml
URL_CHECKOUT_BASE:        "{URL_CHECKOUT}"               # Ex: https://pay.hotmart.com/{...}
URL_CHECKOUT_BONUS_10MIN: "{URL_BONUS_10MIN}"            # URL específica com cupom da janela
URL_CHECKOUT_BONUS_3H:    "{URL_BONUS_3H}"
URL_CHECKOUT_BONUS_1DIA:  "{URL_BONUS_1DIA}"
URL_CHECKOUT_PRECO_CHEIO: "{URL_CHEIO}"

CUPONS:
  CUPOM_10MIN:            "{CUPOM_10MIN}"                # Ex: TURBO50
  CUPOM_3H:               "{CUPOM_3H}"
  CUPOM_1DIA:             "{CUPOM_1DIA}"

EVENTOS_CHECKOUT:         "InitiateCheckout · AddPaymentInfo · Purchase"
```

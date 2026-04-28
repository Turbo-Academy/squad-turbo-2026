# Template — Oferta do LPSG

> Template genérico da oferta do **Lançamento Pago Semanal Gravado**. Stack de valor + Bônus Tsunami + Preço + Garantia + Recuperação.

---

## 🎯 O que esse template entrega

- ✅ **Stack de valor** com 5 itens + ancoragem ≥ 5x sobre o preço final
- ✅ **Bônus Tsunami** com 4 janelas (10min · 1h · 3h · 1dia) + cumulatividade
- ✅ **Preço e parcelamento** estruturados pra cada janela
- ✅ **Garantia incondicional** com texto-padrão LPSG
- ✅ **Recuperação D+1 a D+7** com scripts e cronograma

---

## 📁 Arquivos

```
template/
├── README.md                       ← você está aqui
├── 00-variaveis-globais.md         ← preencha primeiro
├── 01-stack-de-valor.md            ← composição + ancoragem 5:1
├── 02-bonus-tsunami.md             ← 4 janelas com escassez progressiva
├── 03-preco-e-parcelamento.md      ← Hotmart · 12x · Pix · cupons
└── 04-garantia-e-recuperacao.md    ← garantia LPSG + scripts D+1 a D+7
```

---

## 🔄 Fluxo de uso

1. **Preencha `00-variaveis-globais.md`** — fonte da verdade
2. **Monte a stack** com `01-stack-de-valor.md` (5 itens · ancoragem 5x)
3. **Configure as 4 janelas** com `02-bonus-tsunami.md`
4. **Defina preço + parcelamento** com `03-preco-e-parcelamento.md`
5. **Implemente garantia + recuperação** com `04-garantia-e-recuperacao.md`

---

## 🎯 Princípios não negociáveis

| # | Princípio | Por quê |
|---|---|---|
| 1 | **Stack ≥ 5x preço final** | Sem ancoragem, qualquer preço parece caro |
| 2 | **5 itens na stack** (não 3, não 10) | Memória + percepção · padrão validado |
| 3 | **4 janelas tsunami** (10min · 1h · 3h · 1dia) | Padrão LPSG · cumulativo |
| 4 | **Bônus principal único** (10min) | Não disponível depois — sem isso, escassez vira teatro |
| 5 | **Garantia incondicional** | Texto exato LPSG. Sem "se", "mas", "desde que" |
| 6 | **Closer humano na recuperação** | 5-15% adicional de vendas |
| 7 | **Respeitar "não" definitivo** | Quem pede pra parar, para. Imediatamente. |
| 8 | **70% das vendas no dia 1** | Se < 70%, oferta tá fraca |

---

## 📊 Distribuição de vendas esperada

| Janela | % das vendas totais |
|---|---|
| Ficha + 10 min | 25-30% |
| 1 hora | 10-15% |
| 3 horas | 10-15% |
| 1 dia (até 23:59) | 25-30% |
| **Total dia 1** | **≥ 70%** |
| Recuperação (D+1 a D+7) | 15-25% |

---

## 🛡️ Dupla garantia

### Texto curto (hero · CTA · mensageria)

```
🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias
Assista! Se não gostar devolvo seu dinheiro.
```

### Texto completo (página do produto · pitch)

```
🛡️ DUPLA GARANTIA

7 DIAS — INCONDICIONAL
Assista a primeira semana. Se não for pra você por qualquer
motivo, devolvo 100% do seu dinheiro. Sem perguntas.

30 DIAS — CONDICIONAL POR EXECUÇÃO
Aplicou tudo, executou as tarefas e mesmo assim não viu
resultado? Devolvo 100% do seu dinheiro mediante prova
de aplicação.
```

> **Variação 60 dias** em produtos longos (emagrecimento, transformações).

---

## 🚫 O que NÃO fazer

- ❌ Vender sem stack de valor (lead acha caro mesmo barato)
- ❌ Bônus principal disponível depois dos 10 min
- ❌ Reabrir desconto após o prazo (queima credibilidade dos próximos lançamentos)
- ❌ Garantia condicional ("se você fez tudo")
- ❌ Recuperação genérica sem segmentação
- ❌ Insistir após "não" definitivo
- ❌ Stack com itens inflados (comunidade pega)

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Padrão validado em 12 meses de operação multi-nicho.
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
# 01 · Stack de Valor + Ancoragem

> A oferta não é o produto. A oferta é **o produto + tudo que vem junto + o ângulo que faz parecer absurdamente vantajoso**.

---

## 🎯 Princípio central

> **A pessoa não compra o que custa R$ X. Ela compra o que vale R$ Y e custa só R$ X.**
>
> Se R$ Y > R$ X de forma esmagadora, a venda acontece sozinha.

A "âncora" é o valor R$ Y. Sem âncora bem construída, qualquer preço parece caro.

---

## 🧱 Estrutura da stack de valor

### Regra dos 5 itens

A stack ideal tem **5 itens** com valor isolado claro. Menos: parece pobre. Mais: o lead não consegue lembrar.

```
ITEM 1 — {ENTREGAVEL_PRINCIPAL}                    Valor isolado: R$ X
ITEM 2 — {SUPORTE_OU_ACOMPANHAMENTO}               Valor isolado: R$ X
ITEM 3 — {COMUNIDADE_OU_GRUPO}                     Valor isolado: R$ X
ITEM 4 — {FERRAMENTA_OU_TEMPLATE}                  Valor isolado: R$ X
ITEM 5 — {ATALHO_OU_BONUS_DE_ENTREGA}              Valor isolado: R$ X
─────────────────────────────────────────────────────────────────
                                            VALOR TOTAL: R$ {SOMA}
```

### Hierarquia da stack (ordem de impacto)

| # | Tipo de item | O que entrega | Peso na percepção |
|---|---|---|---|
| 1 | **Entregável principal** | O método/curso/sistema central | 🟢🟢🟢🟢🟢 |
| 2 | **Suporte/acompanhamento** | Acesso ao expert ou time | 🟢🟢🟢🟢 |
| 3 | **Comunidade/grupo** | Network entre alunos | 🟢🟢🟢 |
| 4 | **Ferramenta/template** | Atalho prático de execução | 🟢🟢🟢 |
| 5 | **Bônus de entrega** | "De graça" extra (call, swipe file, etc.) | 🟢🟢 |

> **Regra:** o item 1 tem que ser o mais valioso. Se um bônus parece mais valioso que o produto, você tem **um problema de produto**, não de oferta.

---

## 💰 Como definir o valor isolado de cada item

### Método 1 — Valor de mercado real

> Quanto custaria comprar esse item separado?

| Item | Como precificar |
|---|---|
| Curso | Pesquise concorrentes diretos · use a média |
| Mentoria 1:1 | Calcule pelo seu valor/hora × N sessões |
| Comunidade | Use o preço de comunidades premium (Discord/Skool) |
| Templates/Ferramenta | Pesquise o que custa pronto no mercado |
| Bônus de entrega | Valor que você cobraria pra produzir sob demanda |

### Método 2 — Valor da transformação

> Quanto a pessoa **economiza ou ganha** aplicando esse item?

Útil quando o item é único e não tem comparativo direto.

> Exemplo: *"Esse template economiza 40h de trabalho. A 100/h, isso vale R$ 4.000."*

### Regras de honestidade

- ❌ **Não infle valor isolado** acima do realista (mercado pega · queima credibilidade)
- ❌ **Não some bônus que ninguém usa** (se 80% dos alunos não usam, é peso morto)
- ✅ **Pode arredondar pra cima** (R$ 4.870 → R$ 5.000)
- ✅ **Cada item precisa ter uso real** pra comprador médio

---

## 📊 Ancoragem — fazendo o preço parecer baixo

### A regra da ancoragem 1.5x

> **Valor total da stack ≥ 1.5× o preço final.**
> **Ideal: ≥ 2× o preço final.**
>
> Abaixo de 1.5x a oferta parece justa demais — e justo não vende. Acima de 2x começa a parecer "bom demais pra ser verdade" e ativa ceticismo.

### Tabela de ancoragem por preço final

| Preço final do produto | Stack mínima (1.5x) | Stack ideal (2x) |
|---|---|---|
| R$ 1.000 | R$ 1.500 | R$ 2.000 |
| R$ 5.000 | R$ 7.500 | R$ 10.000 |
| R$ 10.000 | R$ 15.000 | R$ 20.000 |
| R$ 15.000 | R$ 22.500 | R$ 30.000 |
| R$ 25.000 | R$ 37.500 | R$ 50.000 |

### Como apresentar a ancoragem

**Estrutura visual no pitch + página de oferta:**

```
ITEM 1 — {NOME_ITEM_1} ............... R$ {VALOR_1}
ITEM 2 — {NOME_ITEM_2} ............... R$ {VALOR_2}
ITEM 3 — {NOME_ITEM_3} ............... R$ {VALOR_3}
ITEM 4 — {NOME_ITEM_4} ............... R$ {VALOR_4}
ITEM 5 — {NOME_ITEM_5} ............... R$ {VALOR_5}
─────────────────────────────────────────────────────────
SE COMPRADO SEPARADO ................. R$ {VALOR_TOTAL_STACK}

Mas hoje, no LPSG, você leva tudo por:
                                       ╔════════════════╗
                                       ║   R$ {FINAL}   ║
                                       ╚════════════════╝
                                  Economia de R$ {ECONOMIA}
                                       ({PERCENT}% off)
```

---

## 🪜 Os 3 níveis de oferta

A oferta é apresentada **3 vezes** ao longo do pitch · cada vez com mais peso:

### Nível 1 — Apresentação (5-7 min do pitch)

> "Vocês estão prestes a conhecer o {NOME_PRODUTO} — um {DESCRICAO_CURTA} que entrega {RESULTADO_PRINCIPAL}."

**Foco:** o que é · pra quem é · o que entrega.
**NÃO falar de preço ainda.**

### Nível 2 — Stack de valor (8-15 min do pitch)

> Lista item por item com valor isolado.
> Soma o valor total da stack.
> Mostra "se comprado separado custaria R$ X".

**Foco:** ancoragem · constrói percepção de valor.
**NÃO falar do preço final ainda.**

### Nível 3 — Preço + bônus tsunami (15-20 min)

> "O valor é R$ {VALOR_CHEIO}.
> **MAS hoje** é diferente."

Aqui entra o **Bônus Tsunami** (ver `02-bonus-tsunami.md`).

---

## 🧠 6 alavancas que aumentam valor percebido

| Alavanca | Como aplicar | Exemplo |
|---|---|---|
| **1. Especificidade** | Nome próprio do método/módulo · não "treinamento de marketing" | "Método LPSG" / "Sistema 5+1" |
| **2. Tempo curto** | "Em 7 dias" > "rápido" · "12 semanas" > "alguns meses" | "Resultados em 30 dias" |
| **3. Resultado quantificado** | Número específico > adjetivo | "5x ROAS" > "ROAS muito bom" |
| **4. Remoção de obstáculo** | "Sem precisar de X" | "Sem gestor de tráfego" |
| **5. Acesso exclusivo** | Algo que dinheiro nenhum compra fora dali | "1:1 mensal com {EXPERT}" |
| **6. Risco transferido** | Garantia incondicional | "Devolvo seu dinheiro" |

> **Aplicar 4-6 alavancas** na oferta total = stack que vende sozinha.

---

## 🚫 Erros que quebram a stack de valor

| Erro | Por quê |
|---|---|
| Stack com 1-2 itens só | Parece pobre · não justifica preço |
| Stack com 10+ itens | Diluição · ninguém lembra · vira peso morto |
| Item principal mais barato que bônus | Sinal de produto fraco |
| Valores isolados inflados | Comunidade pega · queima credibilidade |
| Ancoragem < 1.5x o preço | Oferta justa demais · não cria desejo |
| Ancoragem > 3x o preço | Soa "bom demais" · ativa ceticismo |
| Mostra preço antes da stack | Pessoa decide antes de ver valor |
| Stack com itens que ninguém usa | Peso morto · soma sem percepção |

---

## ✅ Checklist da stack de valor

- [ ] Stack tem **5 itens** (não 3, não 10)
- [ ] Item #1 é o mais valioso
- [ ] Cada item tem valor isolado realista (não inflado)
- [ ] Valor total ≥ 1.5x preço final (mínimo · ideal 2x)
- [ ] Cada item resolve uma função distinta
- [ ] Comunicação visual: lista vertical com valor à direita
- [ ] Stack apresentada **antes** do preço final
- [ ] 4-6 alavancas de valor percebido aplicadas
- [ ] Linguagem específica (nomes próprios) em cada item
- [ ] Sem itens repetidos disfarçados de coisas diferentes

---

## 📋 Tabela de preenchimento (use como briefing)

```
┌──────┬───────────────────────────┬───────────────┬──────────────────┐
│ #    │ Nome do item              │ Valor isolado │ Função estratég. │
├──────┼───────────────────────────┼───────────────┼──────────────────┤
│ 1    │ {ITEM_1}                  │ R$            │ Entregável princ.│
│ 2    │ {ITEM_2}                  │ R$            │ Suporte          │
│ 3    │ {ITEM_3}                  │ R$            │ Comunidade       │
│ 4    │ {ITEM_4}                  │ R$            │ Ferramenta       │
│ 5    │ {ITEM_5}                  │ R$            │ Bônus entrega    │
├──────┼───────────────────────────┼───────────────┼──────────────────┤
│      │ VALOR TOTAL               │ R$            │                  │
│      │ Preço final               │ R$            │                  │
│      │ Ancoragem (Total/Final)   │     x         │ Mín 1.5x · Ideal 2x│
└──────┴───────────────────────────┴───────────────┴──────────────────┘
```
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
# 04 · Garantia + Recuperação de Carrinho

> A garantia tira o risco de quem decide. A recuperação captura quem **não decidiu no dia 1**. Juntas, elas adicionam **5-15% no faturamento total**.

---

## 🛡️ Parte 1 — Garantia

### Princípio central

> **Quem está vendendo um produto bom não tem medo de oferecer garantia incondicional.**
>
> A garantia **transfere o risco do comprador pra você**. Sem isso, o lead trava — *"e se não funcionar pra mim?"*. Com isso, ele decide.

---

### Padrão LPSG: garantia em 2 camadas

> **Camada 1 — Incondicional 7 dias** + **Camada 2 — Condicional 30 ou 60 dias.**
>
> A primeira tira o risco emocional ("vou tentar"). A segunda tira o risco de execução ("e se demorar mais que 7 dias pra ver resultado?").

#### Texto curto (hero da página · CTA)

```
🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias
Assista! Se não gostar devolvo seu dinheiro.
```

#### Texto completo (página de venda do produto · pitch)

```
🛡️ DUPLA GARANTIA

7 DIAS — INCONDICIONAL
Assista a primeira semana. Se não for pra você por qualquer
motivo, devolvo 100% do seu dinheiro. Sem perguntas.

30 DIAS — CONDICIONAL POR EXECUÇÃO
Aplicou tudo, executou as tarefas e mesmo assim não viu
resultado? Devolvo 100% do seu dinheiro mediante prova
de aplicação.
```

> **Variação 60 dias:** quando o produto exige mais tempo pra mostrar resultado (ex: emagrecimento, transformações de longo prazo), substitua "30 dias" por "60 dias" — a lógica é a mesma.

#### Por que dupla garantia funciona

| Camada | Tira o quê | Quem ela conforta |
|---|---|---|
| **Incondicional 7d** | Risco emocional · "e se eu não gostar?" | Comprador cético / inseguro |
| **Condicional 30-60d** | Risco de execução · "e se demorar?" | Comprador comprometido / executor |

#### Anatomia do texto

| Elemento | Função |
|---|---|
| "Incondicional 7 dias" | Janela curta sem condição · libera "tentar" |
| "Condicional 30/60 dias" | Janela longa com prova · libera "executar" |
| "Devolvo 100%" | Primeira pessoa · soa pessoal, não corporativo |
| "Mediante prova de aplicação" | Filtra abuso na janela de 30/60 dias |
| 2 camadas claras | Cobre os 2 perfis de comprador |

---

### Onde aparece a garantia

| Local | Forma |
|---|---|
| **Hero da página** (abaixo do botão) | Frase curta com 🛡️ |
| **Bloco final da página** (CTA final) | Repete frase completa |
| **Pitch** (após apresentação do preço) | Expert fala em primeira pessoa |
| **Mensageria** (após carrinho aberto) | Reforço em mensagens de recuperação |
| **Email de boas-vindas** (pós-compra) | Reforça conforto da decisão |
| **Página de checkout** | Em destaque acima do botão "Finalizar" |

> **Nunca esconder a garantia.** Lead com dúvida vai até as letras miúdas — se não acha, desiste.

---

### Tipos de garantia (do mais ao menos arriscado)

| Tipo | Descrição | Quando usar |
|---|---|---|
| **🟢 Incondicional total** | Devolve o dinheiro sem perguntar nada | Padrão LPSG · alta confiança no produto |
| **🟡 Performance** | "Se não atingir X em Y dias, devolvo" | Produto com promessa muito específica |
| **🟠 Condicional** | "Devolvo se você fez todo o programa" | Quando há risco de abuso |
| **🔴 Parcial** | "Devolvo X% após Y dias" | Quando há entrega física custosa |

> No LPSG, **sempre incondicional**. A taxa de devolução real fica em ~2-3% — bem menor que o ganho de conversão por confiança transferida.

---

### Texto da garantia em diferentes contextos

#### Página de venda do produto (hero · curto)

```
🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias
Assista! Se não gostar devolvo seu dinheiro.
```

#### Página de venda do produto (CTA final · completo)

```
🛡️ DUPLA GARANTIA

7 DIAS — INCONDICIONAL
Você tem 7 dias para conhecer o método.
Se em qualquer momento decidir que não é pra você,
devolvo 100% do seu investimento.
Sem perguntas. Sem complicações. Sem letras miúdas.

30 DIAS — CONDICIONAL POR EXECUÇÃO
Aplicou todo o programa, executou as tarefas e mesmo assim
não viu resultado? Devolvo 100% do seu dinheiro mediante
prova de aplicação.
```

> **Em produtos que exigem mais tempo de execução (60 dias):** trocar "30 dias" por "60 dias" mantendo a mesma lógica.

#### Pitch (fala do expert)

> *"Olha, se eu não tivesse certeza absoluta de que isso funciona, eu não estaria oferecendo dupla garantia.
>
> A primeira é **incondicional de 7 dias**: você entra, assiste, e se em qualquer momento decidir que não é pra você — por qualquer motivo — devolvo seu dinheiro via Pix em 24h. Sem precisar explicar nada.
>
> A segunda é **condicional de 30 dias**: você aplica o método, executa as tarefas, e se mesmo seguindo tudo não tiver resultado, devolvo o dinheiro mediante prova de aplicação.
>
> O risco é todo meu. O seu trabalho é só **assistir e aplicar**."*

#### Mensageria de recuperação

```
Tô lembrando aqui de um detalhe importante:
você tem dupla garantia.

7 dias incondicional pra testar.
30 dias condicional caso aplique e não veja resultado.

Em qualquer cenário, mando o dinheiro de volta.
Sem stress.
```

#### Página de ingresso (contexto: evento, NÃO o produto)

> Atenção: a página de ingresso (R$ 62) usa garantia diferente, focada na entrega do evento:

```
🛡️ Garantia Incondicional: Assista!
Se não gostar devolvo seu dinheiro ao final do evento.
```

> Esse texto curto vale só pra **página de venda do ingresso do evento**. Quando o lead avança pra **página do produto principal**, aparece a dupla garantia (7d + 30d).

---

### Política operacional de reembolso

```yaml
GARANTIA_INCONDICIONAL:
  janela:                 "7 dias a partir da compra"
  como_pedir:             "WhatsApp do suporte / e-mail / formulário"
  tempo_de_reembolso:     "Até 24h via Pix · até 7 dias úteis via cartão"
  perguntas:              "Nenhuma · não pedir motivo · não tentar reverter"
  taxa_alvo:              "≤ 3% das compras"

GARANTIA_CONDICIONAL:
  janela:                 "30 dias (ou 60 dias para produtos longos)"
  pre_requisito:          "Prova de aplicação: tarefas concluídas + screenshots/evidência"
  como_pedir:             "Formulário com prova de execução · revisão em 48h"
  tempo_de_reembolso:     "Até 7 dias após validação da prova"
  taxa_alvo:              "≤ 1% das compras (filtra abuso pela exigência de prova)"

DEVE_TER:
  - "Política escrita publicada no rodapé da página"
  - "Time treinado pra processar sem fricção"
  - "Planilha interna de devoluções (motivo · janela · valor)"
```

> **Time:** quando alguém pede reembolso, **devolve na hora**. Não tenta segurar. Cliente irritado fica X% mais tóxico que cliente satisfeito.

---

## 📞 Parte 2 — Recuperação de Carrinho

### Princípio central

> **70% das vendas fecham no dia 1. Os outros 30% precisam de empurrão humano.**
>
> Recuperação = todos os pontos de contato com lead que entrou no checkout, viu a oferta, mas **não comprou** ou **não voltou**.

---

### Quem entra na recuperação

```
Funil de recuperação (segmentação):

A. Comprou ingresso → não compareceu ao pitch
B. Compareceu pitch → não entrou no checkout
C. Entrou no checkout → não finalizou pagamento
D. Iniciou pagamento → cartão recusado / Pix não pago
E. Preencheu ficha de interesse → não comprou
```

> **Prioridade de contato:** D > C > B > E > A
>
> Quem **iniciou pagamento** está mais quente — atender primeiro.

---

### Cronograma de recuperação (D+0 a D+7)

```
    Dia                         Ação                                   Canal
─────────────────────────────────────────────────────────────────────────────
Seg (D+0) — Carrinho aberto · todas as janelas tsunami ativas
Seg 23h45 — Última chamada do dia 1                                  Grupo + áudio
─────────────────────────────────────────────────────────────────────────────
Ter (D+1) — INÍCIO da recuperação humana
  09h     — Primeira call/WhatsApp 1:1 pra todos do grupo D          Comercial 1:1
  18h     — Mensagem 1 de recuperação geral                          API
─────────────────────────────────────────────────────────────────────────────
Qua (D+2) — Segunda onda
  09h     — Follow-up grupos D e C                                   Comercial 1:1
  18h     — Mensagem 2 (depoimento de aluno novo)                    API
─────────────────────────────────────────────────────────────────────────────
Qui (D+3) — Terça onda + reforço de garantia
  09h     — Follow-up grupos B e E                                   Comercial 1:1
  18h     — Mensagem 3 (reforço da garantia)                         API
─────────────────────────────────────────────────────────────────────────────
Sex (D+4) — Última chance
  09h     — Mensagem "carrinho fecha hoje"                           API + comercial
  18h     — Áudio do expert "última chamada"                         API
  23h     — Mensagem "fecha em 1 hora"                               API
  23h59   — CARRINHO FECHA
─────────────────────────────────────────────────────────────────────────────
Sáb (D+5) — Pós-fechamento
  10h     — Retomada de quem entrou no checkout mas falhou           Comercial 1:1
─────────────────────────────────────────────────────────────────────────────
Dom (D+6) — Última oportunidade
  Comercial fecha vendas pendentes (boleto vencido, cartão recusado)
─────────────────────────────────────────────────────────────────────────────
Seg (D+7) — ENCERRA recuperação
  Lista de não compradores vai pra base do próximo lançamento
```

---

### Estrutura de equipe

| Função | Quantidade | O que faz |
|---|---|---|
| **Comercial humano (closer)** | 1-2 pessoas | Atende leads quentes 1:1 via WhatsApp |
| **Mensageria automática** | API/ManyChat | Disparos broadcast 1x/dia pro grupo |
| **Suporte (dúvidas técnicas)** | 1 pessoa | Cartão recusou · checkout travou · etc. |

> **Time mínimo do LPSG:** 1 closer + 1 suporte. Com 2 closers, conversão sobe ~3-5%.

---

### Scripts de mensagem (templates)

#### D+1 (Terça 09h) — primeiro contato com checkout falhado

```
Oi {NOME}, aqui é {NOME_COMERCIAL} do time do {EXPERT}.

Vi que você entrou no checkout do {NOME_PRODUTO}
ontem, mas o pagamento não foi concluído.

Posso te ajudar a finalizar?

Tem três opções:
1️⃣ Pix com 5% off
2️⃣ 12x sem juros no cartão
3️⃣ Em 2 cartões (24x sem juros)

Qual te atende melhor?
```

#### D+2 (Quarta 18h) — depoimento de aluno

```
Oi! Quero te mostrar o que o {NOME_ALUNO} fez
em 90 dias com o {NOME_PRODUTO}:

[print/vídeo do resultado]

A janela ainda está aberta — fecha sexta 23:59.

Quer entrar?
```

#### D+3 (Quinta 18h) — reforço da garantia

```
Oi {NOME}!

Sei que decidir investir não é fácil.
Por isso lembro: você tem **garantia incondicional de 7 dias**.

Entra. Testa. Aplica.

Se não for pra você, devolvo 100% do dinheiro
via Pix em 24h.

O risco é todo meu. O seu trabalho é só assistir e aplicar.

Quer fechar agora?
{LINK_CHECKOUT}
```

#### D+4 (Sexta 23h) — última hora

```
🚨 ÚLTIMA HORA

Em 1 hora o carrinho do {NOME_PRODUTO} fecha.

Depois disso o valor volta pra R$ {VALOR_CHEIO}
e os bônus desta semana NÃO voltam.

Se faz sentido, é agora.

{LINK_CHECKOUT}
```

---

### Métricas-alvo de recuperação

| Métrica | Mínimo | Ideal |
|---|---|---|
| **% das vendas no D+1 a D+7** | 5% | 10-15% |
| **Taxa de resposta WhatsApp 1:1** | ≥ 30% | ≥ 50% |
| **Conversão das respostas → venda** | ≥ 10% | ≥ 20% |
| **SLA do comercial** | < 30 min | **< 5 min** |
| **Total de checkouts iniciados** | — | (quanto maior, melhor) |

---

### Como **NÃO** fazer recuperação

| Anti-prática | Por quê é ruim |
|---|---|
| Mensagem genérica massiva | Lead vê que é spam · ignora |
| Não responder em < 1h | Lead esfria · perde interesse |
| Insistir após "não, obrigado" | Queima o número · denúncia |
| Falar só de preço/desconto | Reforça "é caro" como justificativa |
| Não usar nome próprio | Falta de personalização |
| Mandar mensagem fora do horário (00h-7h) | Irrita · incomoda · denuncia |

---

### O que fazer quando a pessoa fala "não"

Quem fala "não" entra em **4 categorias**. Trate cada uma diferente:

| Categoria | Resposta padrão |
|---|---|
| **"Não é o momento"** | Sai gracioso · adiciona ao funil de remarketing pra próximo lançamento |
| **"Não tenho dinheiro"** | Apresenta opções acessíveis (12x, 2 cartões, Pix). Se persiste, sai. |
| **"Não acreditei"** | Manda 1 case forte · prova adicional · e sai se não responder |
| **"Sair" / "Para de me mandar"** | **Para imediatamente.** Sem follow-up, sem "última chance". Respeito. |

> **Regra do "não" definitivo:** quando alguém pede pra parar, marca no CRM e **nunca mais manda mensagem desse lançamento**. Pode entrar em comunicação **outras campanhas no futuro**, mas nunca se voltar a enviar pelo mesmo lançamento.

---

## 📊 Fluxo completo (visual)

```
DOM 20h  ─→ Pitch ao vivo
SEG 06h45 ─→ Carrinho ficha (15 min)
SEG 07h00 ─→ Carrinho geral · Tsunami ativo
       └─→ JANELAS: 10min · 1h · 3h · 1dia
SEG 23h59 ─→ Fim do dia 1 (70% das vendas aqui)

────── INÍCIO RECUPERAÇÃO ──────

TER 09h  ─→ Comercial 1:1 nos checkouts falhados (grupo D)
TER 18h  ─→ Mensagem 1 broadcast
QUA 09h  ─→ Comercial 1:1 grupos D, C
QUA 18h  ─→ Mensagem 2 (depoimento)
QUI 09h  ─→ Comercial 1:1 grupos B, E
QUI 18h  ─→ Mensagem 3 (reforço garantia)
SEX 09h  ─→ "Última chance"
SEX 18h  ─→ Áudio do expert
SEX 23h  ─→ "Fecha em 1h"
SEX 23h59 ─→ CARRINHO FECHA

SAB-DOM  ─→ Recuperação de boleto/cartão recusado (1:1)

────── ENCERRA EM D+7 ──────
```

---

## ✅ Checklist de garantia + recuperação

### Garantia
- [ ] Dupla garantia configurada (7d incondicional + 30d/60d condicional)
- [ ] Texto curto da garantia em todos os CTAs
- [ ] Texto completo da dupla garantia na página de venda do produto
- [ ] Pitch comunica as 2 camadas claramente
- [ ] Mensageria de recuperação cita as 2 camadas
- [ ] Formulário de prova de aplicação pronto (pra janela 30/60d)
- [ ] Time treinado pra processar reembolso sem fricção
- [ ] Planilha de devoluções pra acompanhar taxa de cada janela
- [ ] Taxa alvo: ≤ 3% (incondicional) · ≤ 1% (condicional)

### Recuperação
- [ ] Closer designado (1-2 pessoas)
- [ ] Cronograma D+1 a D+7 mapeado
- [ ] Scripts dos 4 momentos prontos (D+1, D+2, D+3, D+4)
- [ ] Pixel do checkout configurado pra capturar abandono
- [ ] Lista de checkouts falhados sai do Hotmart pra CRM/planilha
- [ ] SLA do comercial: < 5 min de resposta
- [ ] Critério "não definitivo" respeitado
- [ ] Métricas tracadas (% vendas D+1 a D+7, taxa de resposta, conversão)

---

## 🚨 Erros que destroem a recuperação

| Erro | Consequência |
|---|---|
| Sem closer humano | Perde 5-15% das vendas possíveis |
| Sem segmentação dos não-compradores | Mensagem genérica · ignora |
| Reabrir desconto depois ("vou esticar 1 dia") | Próximo lançamento ninguém acredita no prazo |
| Comercial sem script | Cada um fala uma coisa diferente |
| Sem SLA (lead espera 4h por resposta) | Já comprou de outro · perdeu |
| Não respeitar "não" | Denúncia no WhatsApp · queima o número |
| Recuperação > 7 dias | Churn alto · vira spam |

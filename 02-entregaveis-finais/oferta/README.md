# Oferta — LPSG

> Estrutura completa da oferta do **Lançamento Pago Semanal Gravado**: stack de valor + bônus tsunami + preço + garantia + recuperação.

---

## 🎯 O método em 3 frases

1. **Stack de valor antes do preço** — pessoa só compra quando o valor percebido é ≥ 5x o preço final.
2. **4 janelas de Bônus Tsunami** (10min · 1h · 3h · 1dia) — escassez progressiva que mata 70%+ das vendas no dia 1.
3. **Garantia incondicional + recuperação humana** — tira o risco do comprador e captura quem não decidiu no dia 1 (5-15% adicional).

---

## 📁 Estrutura

```
oferta/
├── README.md                       ← você está aqui
│
├── template/                       ← TEMPLATE GENÉRICO
│   ├── README.md
│   ├── 00-variaveis-globais.md     ← preencha primeiro
│   ├── 01-stack-de-valor.md        ← composição + ancoragem 5:1
│   ├── 02-bonus-tsunami.md         ← 4 janelas com escassez progressiva
│   ├── 03-preco-e-parcelamento.md  ← Hotmart · 12x · Pix · cupons
│   └── 04-garantia-e-recuperacao.md ← garantia LPSG + scripts D+1 a D+7
│
└── exemplo-lpsg/                   ← VERSÃO PREENCHIDA
    ├── README.md
    └── 00-variaveis-preenchidas.md ← Acelerador Turbo R$25k completo
```

---

## 🧱 Os 4 pilares da oferta LPSG

| # | Pilar | O que cobre |
|---|---|---|
| 1 | **Stack de valor** | 5 itens · ancoragem 5x · valor isolado realista |
| 2 | **Bônus Tsunami** | 4 janelas (10min/1h/3h/1dia) · cumulativo · cupom por janela |
| 3 | **Preço + parcelamento** | À vista · 12x s/juros · Pix 5% off · 2 cartões (high-ticket) |
| 4 | **Garantia + recuperação** | Incondicional 7 dias · closer humano · D+1 a D+7 |

---

## 🎯 Como usar

### Cenário 1 — Você quer aplicar em outro projeto

1. Cópia da pasta `template/` pra um novo repo
2. Preenche `00-variaveis-globais.md`
3. Monta cada pilar usando os arquivos `01-04`
4. Use `exemplo-lpsg/` como referência de "como o Leo preenche"

### Cenário 2 — Você quer entender o método LPSG real

1. Lê `template/README.md` pra filosofia
2. Lê `exemplo-lpsg/00-variaveis-preenchidas.md` pra dados reais
3. Estuda os arquivos `01-04` aplicando os números do exemplo

---

## 📊 Métricas-alvo

| Indicador | Mínimo | Ideal LPSG |
|---|---|---|
| **Stack vs preço final** | 1.5x | 2x |
| **Vendas no dia 1** | 70% | 80%+ |
| **Conversão pitch → compra** | 7% | 10%+ |
| **Taxa de devolução** | < 5% | < 3% |
| **% adicional via recuperação** | 5% | 10-15% |
| **SLA do comercial humano** | < 30 min | < 5 min |

---

## 🛡️ Dupla garantia (LPSG)

### Texto curto (hero · CTA · mensageria)

```
🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias
Assista! Se não gostar devolvo seu dinheiro.
```

### Texto completo (página de venda do produto · pitch)

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

> **Variação 60 dias:** em produtos longos (emagrecimento, transformações), trocar "30 dias" por "60 dias".
>
> **Atenção:** a página de venda do **ingresso do evento** (R$ 62) usa garantia diferente, focada na entrega do evento: *"Garantia Incondicional: Assista! Se não gostar devolvo seu dinheiro ao final do evento."*

---

## ⏰ Cronograma do tsunami

```
DOM 20h    → Pitch ao vivo (15 min entrega de valor + 75-105 min pitch)
SEG 06h50  → Janela 10 min ABRE · APENAS quem preencheu ficha de matrícula
SEG 07h00  → Janela 10 min FECHA · Carrinho geral ABRE · janela 1h começa
SEG 08h00  → Fim janela 1 hora
SEG 10h00  → Fim janela 3 horas
SEG 23h59  → Fim janela 1 dia (preço cheio entra)
TER-SEX    → Recuperação humana D+1 a D+5
SEX 23h59  → Carrinho fecha
```

---

## 🚫 O que NÃO existe na oferta LPSG

- ❌ Bônus principal disponível depois dos 10 min
- ❌ Reabrir desconto após o prazo (queima credibilidade dos próximos lançamentos)
- ❌ Garantia condicional ("se você fez tudo")
- ❌ Stack inflada com valores irreais
- ❌ Recuperação genérica sem segmentação
- ❌ Insistir após "não" definitivo
- ❌ Mais de 4 janelas (vira confusão)

---

## 🔗 Integração com outras estruturas LPSG

- **`paginas/`** — página de venda do produto exibe a oferta com switch automático por janela
- **`mensageria/`** — disparos do tsunami no dia 1 + recuperação D+1 a D+7
- **`trafego/`** — campanha de produto **NÃO existe** no LPSG (oferta vende via evento + mensageria)
- **`estrutura-aulas/`** — pitch da Aula 6 apresenta a oferta

---

**Fontes:** método LPSG do Leo Tabari · Aula 6 (pitch) · 12 meses de operação multi-nicho · mentoria Leo × o mentorado (exemplo).

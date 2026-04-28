# Páginas — LPSG

> Estrutura completa de páginas de venda de ingresso.
> Stack fixo: **Next.js 14 + Tailwind + Vercel**. Mobile-first. Mínimo 5 variações.

---

## 🎯 O método em 3 frases

1. **5 variações sempre** — `/v1` a `/v5`. Mesmo esqueleto, eixos diferentes (headline · dor · cor · CTA).
2. **Stack fixo:** Next.js 14 + Tailwind + Vercel. Sem inventar moda. Performance > flexibilidade.
3. **Mobile-first** — fonte mín 16px, botão 56px+, LCP < 1.5s. 70% do tráfego é mobile.

---

## 📁 Estrutura

```
paginas/
├── README.md                       ← você está aqui
│
├── template/                       ← TEMPLATE GENÉRICO (lacunas { })
│   ├── README.md
│   ├── 00-variaveis-globais.md     ← preencha primeiro
│   ├── 01-stack-e-deploy.md        ← Next.js + Tailwind + Vercel
│   ├── 02-arquitetura-projeto.md   ← estrutura de pastas + rotas /v1-/v5
│   ├── 03-componentes-mobile-first.md ← 9 blocos como componentes React (com código)
│   ├── 04-matriz-variacoes.md      ← os 4 eixos das 5 variações
│   └── 05-performance-vercel.md    ← LCP/INP/CLS + checklist deploy
│
└── exemplo-lpsg/                   ← VERSÃO EXEMPLO (preenchida)
    ├── README.md
    └── 00-variaveis-preenchidas.md ← dados reais + 5 variações do Leo Tabari
```

---

## 🧱 9 blocos da página (ordem fixa)

```
1. TopBar          → barra de urgência sticky
2. Hero            → headline + sub + DATA + foto + CTA + GARANTIA
3. Pain            → amplificação da dor (lista R$ ou cards)
4. NotYourFault    → "a culpa não é sua"
5. Authority       → origem do expert
6. Promises        → o que muda quando aplica o método
7. Lessons         → o que vai aprender (5+1 aulas)
8. Testimonials    → mínimo 6 depoimentos
9. FinalCTA        → última chamada com urgência
```

---

## 📐 4 eixos das 5 variações

| Variação | Headline | Dor | Cor | CTA |
|---|---|---|---|---|
| **v1** | Pergunta polêmica | Lista R$ | Laranja | "INSCREVER POR {TICKET}" |
| **v2** | Prova em números | Lista R$ | Vermelho | "QUERO {RESULTADO}" |
| **v3** | Contra-intuitivo | 6 cards | Ciano | "GARANTIR VAGA AGORA" |
| **v4** | Antes vs depois | 6 cards | Amarelo | "QUERO TER {TRANSFORMACAO}" |
| **v5** | Confissão | Lista R$ | Roxo | "BORA TRANSFORMAR ISSO" |

---

## 🎯 Como usar

### Cenário 1 — Você quer aplicar em outro projeto/nicho

1. Cópia da pasta `template/` pra um novo repo Git
2. Setup inicial seguindo `01-stack-e-deploy.md` (15 minutos)
3. Estrutura o projeto com `02-arquitetura-projeto.md`
4. Implementa os 9 blocos com `03-componentes-mobile-first.md`
5. Configura as 5 variações com `04-matriz-variacoes.md`
6. Audita e faz deploy com `05-performance-vercel.md`
7. Sobe 5 campanhas de teste no Meta Ads, 1 pra cada `/v{N}`

### Cenário 2 — Você quer entender o método LPSG real

1. Lê `template/README.md` pra entender a filosofia
2. Lê `exemplo-lpsg/00-variaveis-preenchidas.md` pra ver os dados reais
3. Estuda os arquivos `01-05` com os números do exemplo

---

## 📊 Métricas-alvo

| Indicador | Mínimo | Ideal LPSG |
|---|---|---|
| **Conversão página** | 5% | 7%+ |
| **LCP** | < 2.0s | **< 1.5s** |
| **INP** | < 200ms | < 100ms |
| **CLS** | < 0.1 | **< 0.05** |
| **Lighthouse Mobile** | ≥ 90 | **≥ 95** |
| **Peso total** | < 2 MB | **< 1 MB** |

---

## 🚫 O que NÃO fazer

- ❌ WordPress, Elementor, qualquer page builder
- ❌ VSL no hero (LPSG não usa)
- ❌ Apenas 1 variação rodando
- ❌ Imagens não otimizadas
- ❌ Stock photos (sempre foto real)
- ❌ Pop-ups de carregamento
- ❌ Mais de 1 cor de destaque por variação

---

## 🔗 Integração com outras estruturas LPSG

- **`trafego/`** — campanhas de teste pra validar variações de página
- **`mensageria/`** — onboarding e nutrição dos compradores de ingresso
- **`estrutura-aulas/`** — define os títulos públicos das aulas (usados em `Lessons`)

---

**Fontes:** padrão validado em 3 páginas em produção (engenheiromatheus, radiestesiaterapeutica, reisbruno) · Aula 5 do LPSG · mentoria Leo Tabari.

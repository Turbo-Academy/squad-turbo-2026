# Template — Páginas do LPSG

> Template genérico de páginas de venda de ingresso do **Lançamento Pago Semanal Gravado**.
> Stack fixo: **Next.js 14 + Tailwind + Vercel**. Mobile-first, otimizado, prontas pra publicar.

---

## 🎯 O que esse template entrega

- ✅ **5 variações** de página (`/v1` a `/v5`) com mesmo esqueleto, eixos diferentes
- ✅ **9 blocos** componentizados em React (TopBar, Hero, Pain, NotYourFault, Authority, Promises, Lessons, Testimonials, FinalCTA)
- ✅ **Ficha de interesse de 11 etapas** (funil de consciência com lead score automático)
- ✅ **Mobile-first** com fonte mín 16px, botões 56px+, imagens AVIF/WebP
- ✅ **LCP < 1.5s** out-of-the-box (mais rigoroso que padrão da web)
- ✅ **Deploy 1-click no Vercel** com domínio customizado e HTTPS automático
- ✅ **Tracking integrado** (Meta Pixel + CAPI + GTM + GA4)
- ✅ **Headline + dor + cor + CTA** variados por padrão científico

---

## 📁 Arquivos

```
template/
├── README.md                       ← você está aqui
├── 00-variaveis-globais.md         ← preencha primeiro
├── 01-stack-e-deploy.md            ← Next.js + Tailwind + Vercel
├── 02-arquitetura-projeto.md       ← estrutura de pastas + rotas /v1-/v5
├── 03-componentes-mobile-first.md  ← 9 blocos como componentes React (com código)
├── 04-matriz-variacoes.md          ← os 4 eixos das 5 variações
├── 05-performance-vercel.md        ← LCP/INP/CLS + checklist de deploy
├── 06-modos-de-output.md           ← projeto pronto vs projeto em IA
├── 07-brief-claude-design.md       ← briefing pra IA designar
└── 08-ficha-interesse.md           ← funil de consciência 11 etapas + lead score
```

---

## 🔄 Fluxo de uso

1. **Preencha `00-variaveis-globais.md`** — fonte da verdade
2. **Setup inicial** seguindo `01-stack-e-deploy.md` (15 minutos)
3. **Estruture o projeto** com `02-arquitetura-projeto.md`
4. **Implemente os 9 blocos** com `03-componentes-mobile-first.md`
5. **Configure as 5 variações** com `04-matriz-variacoes.md`
6. **Audite e deploy** com `05-performance-vercel.md`
7. **Sobe 5 campanhas de teste** (1 pra cada variação) — ver `trafego/template/`

---

## 🎯 Princípios não-negociáveis

| # | Princípio | Por quê |
|---|---|---|
| 1 | **Mínimo 5 variações** | Sem comparação não há aprendizado |
| 2 | **Mobile-first** | 70%+ do tráfego pago é mobile |
| 3 | **Stack fixo (Next.js + Tailwind + Vercel)** | Performance + manutenção previsível |
| 4 | **9 blocos em ordem fixa** | Padrão validado em 3 LPs em produção |
| 5 | **Data do evento na 1ª dobra** | Sinaliza tempo concreto |
| 6 | **Garantia abaixo do botão** | Texto exato: "Garantia Incondicional: Assista! Se não gostar devolvo seu dinheiro ao final do evento." |
| 7 | **LCP < 1.5s** | Mais rigoroso que o padrão web (2.5s) |
| 8 | **Conversão mínima 5%** | Abaixo disso, página é o gargalo |
| 9 | **1 cor de destaque por variação** | Não misture cores |
| 10 | **Foto real do expert** | Sem stock photos |

---

## 📝 Ficha de Interesse — funil de consciência separado

A **ficha de interesse** é uma página separada (`/ficha-de-interesse`), disparada na Aula 4 (pré-pitch) do LPSG. Não é só formulário — é um **funil de 11 etapas** que sobe consciência, qualifica capacidade e ancora o preço do produto principal antes do pitch.

```
BLOCO A · Identidade (Et. 1-4)     → posiciona lead no estágio + admite gap de método
BLOCO B · Capacidade (Et. 5-8)      → lead declara investimento, faturamento, equipe
BLOCO C · Intenção (Et. 9-11)       → killer question (preço + ROI) → história → engaja próximo ritual
```

**Output:** lead score (HOT · WARM · COLD) + roteamento (closer · grupo VIP · nutrição).

> Detalhes em `08-ficha-interesse.md`. Conecta com `mensageria-lpsg` (mensagens por tier) e `automacoes-lpsg` (webhook + tagging + CAPI).

---

## 🧱 Os 9 blocos da página (ordem fixa)

```
1. TopBar          → barra de urgência sticky
2. Hero            → headline + sub + DATA + foto + CTA + GARANTIA
3. Pain            → amplificação da dor (lista R$ ou cards)
4. NotYourFault    → "a culpa não é sua"
5. Authority       → origem do expert ("eu errei muito pra você acertar")
6. Promises        → o que muda quando aplica o método
7. Lessons         → o que vai aprender (5+1 aulas)
8. Testimonials    → mínimo 6 depoimentos misturando vídeo/texto/print
9. FinalCTA        → última chamada com urgência + garantia
```

---

## 📐 Os 4 eixos das 5 variações

| Variação | Headline | Dor | Cor | CTA |
|---|---|---|---|---|
| **v1** | Pergunta polêmica | Lista R$ | Laranja | "INSCREVER POR {TICKET}" |
| **v2** | Prova em números | Lista R$ | Vermelho | "QUERO {RESULTADO}" |
| **v3** | Contra-intuitivo | 6 cards | Ciano | "GARANTIR VAGA AGORA" |
| **v4** | Antes vs depois | 6 cards | Amarelo | "QUERO TER {TRANSFORMACAO}" |
| **v5** | Confissão | Lista R$ | Roxo | "BORA TRANSFORMAR ISSO" |

Detalhes em `04-matriz-variacoes.md`.

---

## 🚀 Stack rápido

```yaml
Framework:    Next.js 14 (App Router)
Linguagem:    TypeScript
CSS:          Tailwind CSS 4
Componentes:  shadcn/ui (opcional)
Ícones:       lucide-react
Fontes:       Inter + Manrope (next/font)
Deploy:       Vercel (1-click)
Domínio:      Cloudflare DNS → Vercel
```

---

## 📊 Métricas-alvo (todas as variações)

| Indicador | Mínimo | Ideal LPSG |
|---|---|---|
| **Conversão página** | 5% | 7%+ |
| **LCP** | < 2.0s | **< 1.5s** |
| **INP** | < 200ms | < 100ms |
| **CLS** | < 0.1 | **< 0.05** |
| **Lighthouse Mobile** | ≥ 90 | **≥ 95** |
| **Peso total** | < 2 MB | **< 1 MB** |

---

## 🚫 O que NÃO usar

- ❌ WordPress, Elementor, qualquer page builder
- ❌ VSL no hero (LPSG **não usa** vídeo na primeira dobra)
- ❌ Bootstrap, Material UI, Chakra (peso desnecessário)
- ❌ Imagens não otimizadas (sempre WebP/AVIF via `next/image`)
- ❌ Pop-ups de carregamento (Meta pode bloquear)
- ❌ Apenas 1 variação (sempre rodar 5)
- ❌ Stock photos (sempre foto real do expert + alunos)

---

## 📦 Como compartilhar com outros experts

### Cenário 1 — Novo projeto
1. Cópia da pasta `template/` pra um novo repo
2. Preenche `00-variaveis-globais.md`
3. Setup inicial seguindo `01-stack-e-deploy.md`
4. Implementa os componentes seguindo `03-componentes-mobile-first.md`
5. Cria as 5 variações com `04-matriz-variacoes.md`
6. Deploy

### Cenário 2 — Adaptar projeto existente
1. Lê `02-arquitetura-projeto.md` pra entender a estrutura
2. Refatora seguindo o padrão de blocos
3. Cria `data/variations.ts` se ainda não tem
4. Deploy

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Padrão validado em 3 páginas em produção:
- engenheiromatheus.com.br
- radiestesiaterapeutica.com.br
- reisbruno.com.br

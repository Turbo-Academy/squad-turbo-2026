# Template — Páginas do LPSG

> Template genérico de páginas de venda de ingresso do **Lançamento Pago Semanal Gravado**.
> Stack fixo: **Next.js 14 + Tailwind + Vercel**. Mobile-first, otimizado, prontas pra publicar.

---

## 🎯 O que esse template entrega

- ✅ **5 variações** de página (`/v1` a `/v5`) com mesmo esqueleto, eixos diferentes
- ✅ **9 blocos** componentizados em React (TopBar, Hero, Pain, NotYourFault, Authority, Promises, Lessons, Testimonials, FinalCTA)
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
└── 05-performance-vercel.md        ← LCP/INP/CLS + checklist de deploy
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
# 00 · Variáveis Globais — Páginas

> Fonte da verdade pro projeto de páginas. Preencha aqui primeiro — todos os outros arquivos referenciam estas variáveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"
SUB_NICHO:                "{SUB_NICHO}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"                       # 3 letras MAIÚSCULAS
AVATAR:                   "{AVATAR}"
```

---

## 📅 Datas e horários do evento

```yaml
DATA_INICIO:              "{DATA_INICIO}"                 # Ex: 12/05
DATA_FIM:                 "{DATA_FIM}"                    # Ex: 18/05
HORARIO_AULAS:            "{HORARIO_AULAS}"               # Ex: 7h da manhã
HORARIO_PITCH:            "{HORARIO_PITCH}"               # Ex: 20h (domingo)
TEXTO_DATA_HERO:          "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO_AULAS}"
```

---

## 💰 Oferta

```yaml
TICKET_INGRESSO:          "{TICKET_INGRESSO}"             # Ex: R$ 62
TEXTO_GARANTIA_HERO:      "Garantia Incondicional: Assista! Se não gostar devolvo seu dinheiro ao final do evento."
```

---

## 🚀 Stack e deploy

```yaml
FRAMEWORK:                "Next.js 14 (App Router)"       # FIXO
LINGUAGEM:                "TypeScript"                    # FIXO
CSS:                      "Tailwind CSS 4"                # FIXO
FONTES:                   "Inter (Google Fonts) + Manrope" # Padrão LPSG
HOSPEDAGEM:               "Vercel"                        # FIXO
NODE_VERSION:             "20.x"
PACKAGE_MANAGER:          "pnpm"                          # ou npm/yarn
```

---

## 📐 Variações (5 mínimas)

```yaml
QUANTIDADE_VARIACOES:     "5 (mínimo) · obrigatório"
ROTAS:
  - "/v1"
  - "/v2"
  - "/v3"
  - "/v4"
  - "/v5"
EIXOS_VARIACAO:
  HEADLINE:
    v1: "Pergunta polêmica"
    v2: "Prova em números"
    v3: "Declaração contra-intuitiva"
    v4: "Antes vs depois"
    v5: "Confissão / vulnerabilidade"
  ESTRUTURA_DOR:
    v1: "Lista de R$ perdidos"
    v2: "Lista de R$ perdidos"
    v3: "6 cards de afirmações"
    v4: "6 cards de afirmações"
    v5: "Lista de R$ perdidos"
  COR_DESTAQUE:
    v1: "Laranja (#FF6B00)"
    v2: "Vermelho (#E53935)"
    v3: "Ciano (#00B4D8)"
    v4: "Amarelo (#FFB300)"
    v5: "Roxo (#7C3AED)"
  COPY_CTA:
    v1: "QUERO ME INSCREVER POR {TICKET_INGRESSO}"
    v2: "QUERO {RESULTADO_PRINCIPAL}"
    v3: "GARANTIR MINHA VAGA AGORA"
    v4: "QUERO TER {TRANSFORMACAO}"
    v5: "BORA TRANSFORMAR ISSO"
```

---

## 📊 Métricas-alvo (todas as variações)

```yaml
CONVERSAO_PAGINA_MIN:     "≥ 5%"
CONVERSAO_PAGINA_IDEAL:   "≥ 7%"
LCP_MAX:                  "< 1.5s"                        # mais rigoroso que padrão (≤2s)
INP_MAX:                  "< 200ms"
CLS_MAX:                  "< 0.05"                        # mais rigoroso que padrão (<0.1)
PESO_TOTAL_MAX:           "< 1 MB (mobile)"
PESO_HERO_IMG_MAX:        "< 150 KB (WebP/AVIF)"
LIGHTHOUSE_MIN:           "≥ 95 (mobile)"
```

---

## 📱 Mobile-first

```yaml
PRIORIDADE:               "Mobile sempre · desktop depois"
BREAKPOINT_BASE:          "375px (iPhone SE / mínimo)"
BREAKPOINTS:
  sm:                     "640px"
  md:                     "768px"
  lg:                     "1024px"
  xl:                     "1280px"
TAMANHO_FONTE_BASE:       "16px (não usar < 14px em nenhum lugar)"
ALTURA_BOTAO_MOBILE:      "≥ 56px (touch target Apple HIG)"
ESPACAMENTO_TOQUES:       "≥ 8px entre alvos clicáveis"
```

---

## 🔗 Tracking obrigatório

```yaml
META_PIXEL_ID:            "{META_PIXEL_ID}"
META_CAPI_TOKEN:          "{META_CAPI_TOKEN}"
GOOGLE_TAG_MANAGER:       "{GTM_ID}"
GOOGLE_ANALYTICS:         "{GA4_ID}"
EVENTOS_PADRAO:           "PageView · ViewContent · InitiateCheckout · Purchase"
UTMS_PROPAGADAS:          "Sim · todas as UTMs entram no checkout"
```

---

## 🌐 Domínio e estrutura de URL

```yaml
DOMINIO:                  "{SUBDOMINIO}.{DOMINIO_RAIZ}"   # Ex: lp.dominio.com.br
PADRAO_URL:               "{DOMINIO}/v{N}"                # Ex: lp.dominio.com.br/v3
HOMEPAGE_REDIRECT:        "redireciona / → /v{ATUAL}"     # Variação principal padrão
```
# 01 · Stack e Deploy

> Stack fixo do LPSG: **Next.js 14 + TypeScript + Tailwind CSS + Vercel**. Sem inventar moda.

---

## 🎯 Por que esse stack?

| Critério | Por que Next.js + Tailwind + Vercel |
|---|---|
| **Performance** | LCP < 1.5s out-of-the-box · Image optimization automática · Edge runtime |
| **Mobile-first** | Tailwind facilita responsivo · Next.js otimiza bundle por rota |
| **Deploy 1-click** | `git push` → produção. Sem servidor, sem dor |
| **A/B testing nativo** | Vercel Edge Config + Middleware suportam variações sem rebuild |
| **SEO + Open Graph** | Metadata API do Next 14 + sharing automatic |
| **Analytics integrado** | Vercel Analytics + Speed Insights · grátis no plano Pro |
| **HTTPS automático** | Cert grátis com auto-renew |
| **CDN global** | Edge network em 40+ regiões |
| **Preview por branch** | Cada PR vira URL única — fácil pra validar antes de subir |

---

## 📦 Stack completo

```yaml
Framework:        Next.js 14 (App Router)
Linguagem:        TypeScript
CSS:              Tailwind CSS 4
Componentes UI:   shadcn/ui (opcional, pra acelerar)
Ícones:           lucide-react
Animações:        Framer Motion (mínimo · só se necessário)
Fontes:           Inter (Google Fonts) + Manrope (variable, peso único)
Hospedagem:       Vercel
Domínio:          Cloudflare DNS → Vercel
Tracking:         Meta Pixel + CAPI · Google Tag Manager · GA4
Analytics:        Vercel Analytics + Speed Insights
```

---

## 🚀 Setup inicial (15 minutos)

### 1. Criar projeto

```bash
pnpm create next-app@latest lpsg-pages \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd lpsg-pages
pnpm install
```

### 2. Adicionar dependências

```bash
pnpm add lucide-react clsx tailwind-merge
pnpm add -D @types/node prettier prettier-plugin-tailwindcss
```

### 3. Configurar `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },
  async redirects() {
    return [
      // Homepage redireciona pra variação principal
      { source: "/", destination: "/v1", permanent: false },
    ];
  },
};

export default nextConfig;
```

### 4. Configurar Tailwind tokens

`tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",          // fundo escuro
        "bg-card": "#141414",   // card escuro
        fg: "#FAFAFA",          // texto principal
        "fg-muted": "#A3A3A3",  // texto secundário
        accent: "var(--accent)", // cor de destaque dinâmica por variação
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-manrope)", "ui-sans-serif"],
      },
    },
  },
} satisfies Config;
```

### 5. Configurar fontes

`src/app/layout.tsx`:

```tsx
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
```

---

## 🚢 Deploy no Vercel

### Primeira vez

1. Cria conta: [vercel.com](https://vercel.com) (login com GitHub)
2. Importa o repo do projeto
3. Vercel detecta Next.js automaticamente
4. **Não muda nada** no setup inicial — clica em "Deploy"
5. Em ~30s a URL `https://{projeto}.vercel.app` está no ar

### Variáveis de ambiente

Configurar em `Settings → Environment Variables`:

```
NEXT_PUBLIC_META_PIXEL_ID         = {SEU_PIXEL_ID}
NEXT_PUBLIC_GTM_ID                = GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID                = G-XXXXXXXXXX
META_CAPI_TOKEN                   = {SEU_CAPI_TOKEN}        # secret · não NEXT_PUBLIC_
NEXT_PUBLIC_CHECKOUT_URL          = https://pay.hotmart.com/...
```

### Domínio customizado

1. `Settings → Domains → Add`
2. Aponta o DNS no Cloudflare:
   - `CNAME lp → cname.vercel-dns.com.`
3. Vercel emite SSL em ~1 minuto

### Branches e preview

| Branch | URL | Função |
|---|---|---|
| `main` | `lp.{dominio}.com.br` | Produção |
| `dev` | `dev-lp.{dominio}.com.br` ou auto | Staging |
| `feature/*` | URL automática Vercel | Preview de PR |

> Cada PR vira uma URL preview — manda pro time validar antes do merge.

---

## 🔧 Vercel Edge Config (opcional · pra A/B testing)

Pra alternar variação principal sem rebuild:

1. `Storage → Create Edge Config`
2. Adiciona chave `current-variation` com valor `"v1"`
3. Lê em runtime via `@vercel/edge-config`
4. Mudança propaga em segundos · zero downtime

---

## 📊 Vercel Analytics

Ativa grátis em `Analytics`:

```bash
pnpm add @vercel/analytics @vercel/speed-insights
```

`src/app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

Métricas que vão aparecer no dashboard Vercel:
- Page views por rota (`/v1`, `/v2`...)
- Top pages
- Top referrers
- LCP/INP/CLS por rota (Speed Insights)

---

## 🚫 O que NÃO usar

| Tecnologia | Por quê |
|---|---|
| **WordPress / Elementor / similares** | LCP > 4s · plugins inflam bundle · ranking SEO ruim · vetor de ataque |
| **Bootstrap** | Bundle gigante · CSS antigo · Tailwind mais flexível |
| **Material UI / Chakra** | 200KB+ de runtime · não vale pra LP |
| **GSAP** | Pesado · use Framer Motion ou animação CSS pura |
| **Imagens não otimizadas** | Sempre WebP/AVIF via `next/image` |
| **Vídeo no hero** | Adia LCP · LPSG não usa VSL no topo |
| **Pop-ups de carregamento** | Meta Ads pode bloquear |

---

## 📋 Checklist de setup

- [ ] Repo Git criado (GitHub/GitLab/Bitbucket)
- [ ] `pnpm create next-app` rodado
- [ ] `next.config.ts` configurado com `redirects` e `images`
- [ ] Tailwind tokens definidos (cores, fontes)
- [ ] Fontes Inter + Manrope via `next/font/google`
- [ ] `.env.local` com todas as variáveis (não commitar)
- [ ] Deploy inicial no Vercel concluído
- [ ] Domínio customizado apontado
- [ ] Vercel Analytics + Speed Insights ativos
- [ ] Pixel + GTM + GA4 instalados e validados
- [ ] Preview por branch testado (PR vira URL)
# 02 · Arquitetura do Projeto

> Como organizar arquivos, rotas e dados pra rodar 5 variações sem duplicar código.

---

## 📁 Estrutura de pastas

```
{NOME_PROJETO}/
├── public/
│   ├── images/
│   │   ├── expert.webp                 ← foto do expert (única, otimizada)
│   │   ├── alunos/                     ← prints/fotos dos depoimentos
│   │   └── og-image.jpg                ← Open Graph (1200x630)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← layout raiz (fontes + analytics)
│   │   ├── page.tsx                    ← redireciona pra /v1
│   │   ├── globals.css                 ← reset + Tailwind base
│   │   ├── (variations)/               ← grupo de rotas das variações
│   │   │   ├── v1/page.tsx
│   │   │   ├── v2/page.tsx
│   │   │   ├── v3/page.tsx
│   │   │   ├── v4/page.tsx
│   │   │   └── v5/page.tsx
│   │   └── obrigado/page.tsx           ← thank you page (pós-checkout)
│   │
│   ├── components/
│   │   ├── blocks/                     ← os 9 blocos da página
│   │   │   ├── TopBar.tsx              ← barra de urgência
│   │   │   ├── Hero.tsx                ← headline + foto + CTA + garantia
│   │   │   ├── Pain.tsx                ← amplificação da dor
│   │   │   ├── NotYourFault.tsx        ← "a culpa não é sua"
│   │   │   ├── Authority.tsx           ← origem do expert
│   │   │   ├── Promises.tsx            ← promessas expandidas
│   │   │   ├── Lessons.tsx             ← o que vai aprender
│   │   │   ├── Testimonials.tsx        ← prova social
│   │   │   └── FinalCTA.tsx            ← CTA final + urgência
│   │   ├── ui/
│   │   │   ├── Button.tsx              ← componente de botão CTA
│   │   │   ├── Container.tsx           ← wrapper com largura máxima
│   │   │   └── GuaranteeBadge.tsx      ← bloco de garantia
│   │   └── tracking/
│   │       ├── MetaPixel.tsx           ← script do pixel
│   │       └── GTM.tsx                 ← script do GTM
│   │
│   ├── data/
│   │   ├── variations.ts               ← definições das 5 variações (SOURCE OF TRUTH)
│   │   ├── testimonials.ts             ← lista de depoimentos
│   │   ├── lessons.ts                  ← lista das 5+1 aulas
│   │   ├── pains.ts                    ← lista de dores
│   │   └── promises.ts                 ← lista de promessas
│   │
│   ├── lib/
│   │   ├── tracking.ts                 ← envio de eventos pixel/GA
│   │   ├── utils.ts                    ← clsx, cn, helpers
│   │   └── constants.ts                ← URLs, IDs
│   │
│   └── styles/
│       └── theme.css                   ← variáveis CSS por variação (cores)
│
├── .env.local                           ← variáveis (não commitar)
├── .env.example                         ← template
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛣️ Rotas e variações

### URL final em produção

```
https://lp.{DOMINIO}.com.br/      ← redireciona pra /v1
https://lp.{DOMINIO}.com.br/v1    ← variação 1
https://lp.{DOMINIO}.com.br/v2    ← variação 2
https://lp.{DOMINIO}.com.br/v3    ← variação 3
https://lp.{DOMINIO}.com.br/v4    ← variação 4
https://lp.{DOMINIO}.com.br/v5    ← variação 5
```

### Como cada `page.tsx` é estruturada

```tsx
// src/app/(variations)/v1/page.tsx

import { getVariation } from "@/data/variations";
import { TopBar } from "@/components/blocks/TopBar";
import { Hero } from "@/components/blocks/Hero";
import { Pain } from "@/components/blocks/Pain";
import { NotYourFault } from "@/components/blocks/NotYourFault";
import { Authority } from "@/components/blocks/Authority";
import { Promises } from "@/components/blocks/Promises";
import { Lessons } from "@/components/blocks/Lessons";
import { Testimonials } from "@/components/blocks/Testimonials";
import { FinalCTA } from "@/components/blocks/FinalCTA";

export const metadata = {
  title: "{TITULO_PADRAO}",
  description: "{DESC_PADRAO}",
};

export default function V1Page() {
  const variation = getVariation("v1");
  return (
    <main style={{ "--accent": variation.accentColor } as React.CSSProperties}>
      <TopBar variation={variation} />
      <Hero variation={variation} />
      <Pain variation={variation} />
      <NotYourFault variation={variation} />
      <Authority variation={variation} />
      <Promises variation={variation} />
      <Lessons variation={variation} />
      <Testimonials variation={variation} />
      <FinalCTA variation={variation} />
    </main>
  );
}
```

### Por que esse padrão?

- **Componentes idênticos** entre variações (1 source of truth por bloco)
- **Variação muda apenas dados** (headline, dor, cor, CTA) — não estrutura
- **Manutenção centralizada** — corrigiu 1 bloco, arruma nas 5 variações
- **Fácil adicionar v6, v7...** — copia pasta, ajusta `data/variations.ts`

---

## 📦 `data/variations.ts` — fonte da verdade

```typescript
// src/data/variations.ts

export type VariationId = "v1" | "v2" | "v3" | "v4" | "v5";

export type Variation = {
  id: VariationId;

  // HERO
  headline: string;
  subHeadline: string;
  heroImage: string;          // path da imagem do expert

  // DATA E HORÁRIO (mesmo pra todas)
  dateText: string;           // "De 12/05 a 18/05 · Sempre às 7h"

  // CTA
  ctaPrimary: string;         // texto do botão hero
  ctaSecondary: string;       // texto do botão final
  checkoutUrl: string;

  // VISUAL
  accentColor: string;        // cor de destaque (CSS)
  topBarText: string;         // "VAGAS SE ESGOTANDO" / "ÚLTIMOS 10%"

  // ESTRUTURA DE DOR
  painType: "money-list" | "affirmations";  // que tipo de bloco usar
  painHeadline: string;
};

export const variations: Record<VariationId, Variation> = {
  v1: {
    id: "v1",
    headline: "{HEADLINE_V1}",                  // Pergunta polêmica
    subHeadline: "{SUB_V1}",
    heroImage: "/images/expert.webp",
    dateText: "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO}",
    ctaPrimary: "QUERO ME INSCREVER POR {TICKET_INGRESSO}",
    ctaSecondary: "GARANTIR MEU INGRESSO",
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL!,
    accentColor: "oklch(70% 0.20 50)",          // laranja #FF6B00
    topBarText: "🔥 VAGAS SE ESGOTANDO",
    painType: "money-list",
    painHeadline: "VOCÊ NÃO TEM IDEIA DO PESADELO!",
  },
  v2: {
    id: "v2",
    headline: "{HEADLINE_V2}",                  // Prova em números
    subHeadline: "{SUB_V2}",
    heroImage: "/images/expert.webp",
    dateText: "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO}",
    ctaPrimary: "QUERO {RESULTADO_PRINCIPAL}",
    ctaSecondary: "GARANTIR MEU INGRESSO",
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL!,
    accentColor: "oklch(60% 0.22 25)",          // vermelho #E53935
    topBarText: "🔥 71% PREENCHIDO",
    painType: "money-list",
    painHeadline: "QUANTO CUSTA NÃO AGIR?",
  },
  v3: {
    id: "v3",
    headline: "{HEADLINE_V3}",                  // Contra-intuitiva
    subHeadline: "{SUB_V3}",
    heroImage: "/images/expert.webp",
    dateText: "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO}",
    ctaPrimary: "GARANTIR MINHA VAGA AGORA",
    ctaSecondary: "QUERO ENTRAR",
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL!,
    accentColor: "oklch(70% 0.15 220)",         // ciano #00B4D8
    topBarText: "🔥 ÚLTIMOS DIAS",
    painType: "affirmations",
    painHeadline: "{AVATAR}, alguma dessas afirmações te incomoda?",
  },
  v4: {
    id: "v4",
    headline: "{HEADLINE_V4}",                  // Antes vs depois
    subHeadline: "{SUB_V4}",
    heroImage: "/images/expert.webp",
    dateText: "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO}",
    ctaPrimary: "QUERO TER {TRANSFORMACAO}",
    ctaSecondary: "QUERO ESSE RESULTADO",
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL!,
    accentColor: "oklch(80% 0.18 90)",          // amarelo #FFB300
    topBarText: "🔥 INSCRIÇÕES ABERTAS",
    painType: "affirmations",
    painHeadline: "Reconhece sua situação atual?",
  },
  v5: {
    id: "v5",
    headline: "{HEADLINE_V5}",                  // Confissão
    subHeadline: "{SUB_V5}",
    heroImage: "/images/expert.webp",
    dateText: "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO}",
    ctaPrimary: "BORA TRANSFORMAR ISSO",
    ctaSecondary: "ME INSCREVER",
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL!,
    accentColor: "oklch(60% 0.20 290)",         // roxo #7C3AED
    topBarText: "🔥 TURMA NOVA",
    painType: "money-list",
    painHeadline: "EU JÁ ESTIVE NESSA SITUAÇÃO...",
  },
};

export function getVariation(id: VariationId): Variation {
  return variations[id];
}
```

---

## 📊 Outros arquivos de dados (compartilhados entre variações)

### `data/lessons.ts`

```typescript
export const lessons = [
  {
    n: 1,
    icon: "🔓",
    title: "{TITULO_PUBLICO_AULA_1}",
    description: "{1_LINHA}",
  },
  // ... 5+1 aulas
];
```

### `data/testimonials.ts`

```typescript
export type Testimonial = {
  id: string;
  type: "video" | "text" | "screenshot";
  name: string;
  cityOrProfession: string;
  result: string;            // "R$ 47k em 90 dias"
  emotional: string;         // "parei de ter insônia"
  mediaUrl?: string;         // foto/vídeo/print
  videoEmbed?: string;       // ID do vídeo
};

export const testimonials: Testimonial[] = [
  // mínimo 6 depoimentos
];
```

### `data/pains.ts`

```typescript
export const moneyPains = [
  { label: "{ERRO_1}", cost: "+ R$ 90.000,00" },
  { label: "{ERRO_2}", cost: "+ R$ 30.000,00" },
  // 4-6 itens
];

export const affirmationPains = [
  { icon: "✗", title: "{DOR_1}", description: "{1_LINHA}" },
  // 6 itens
];
```

### `data/promises.ts`

```typescript
export const promises = [
  { icon: "✓", text: "{TRANSFORMACAO_1}" },
  // 4-6 itens
];
```

---

## 🎨 Cor de destaque dinâmica (CSS variable)

Cada variação injeta `--accent` no root via inline style.

`globals.css`:

```css
:root {
  --accent: oklch(70% 0.20 50); /* fallback laranja */
}

.bg-accent { background-color: var(--accent); }
.text-accent { color: var(--accent); }
.border-accent { border-color: var(--accent); }
```

Componentes usam `bg-accent` / `text-accent` — cor muda por variação sem trocar classe.

---

## 🔁 Quando criar v6, v7...

1. Cria `src/app/(variations)/v6/page.tsx` (copia da v1, troca `getVariation("v1")` por `"v6"`)
2. Adiciona entrada em `data/variations.ts`
3. Atualiza tipo `VariationId`
4. Deploy automático no `git push`

> **Manutenção é trivial** porque o esqueleto da página é igual entre variações.

---

## 📋 Checklist de arquitetura

- [ ] Estrutura de pastas seguindo o padrão acima
- [ ] 5 rotas `/v1` a `/v5` criadas
- [ ] Homepage `/` redireciona pra `/v1` (ou variação principal)
- [ ] `data/variations.ts` com todas as 5 variações tipadas
- [ ] Componentes em `components/blocks/` com prop `variation`
- [ ] Cor de destaque via CSS variable `--accent`
- [ ] Imagens em `public/images/` otimizadas (WebP/AVIF)
- [ ] Open Graph image criada (`og-image.jpg` 1200x630)
- [ ] Tracking centralizado em `lib/tracking.ts`
# 03 · Componentes Mobile-First

> Cada um dos **9 blocos** da página vira um componente React. Tudo mobile-first. Aqui o esqueleto pronto pra copiar.

---

## 📱 Princípios mobile-first

| # | Princípio |
|---|---|
| 1 | **Tamanho de fonte mínimo: 16px** — abaixo disso, mobile faz zoom no input |
| 2 | **Botões com altura ≥ 56px** — touch target Apple HIG |
| 3 | **Espaçamento vertical entre seções: 64-96px** (`py-16` a `py-24`) |
| 4 | **Largura máxima de texto: 65 caracteres** (legibilidade) |
| 5 | **Imagens com `loading="lazy"`** exceto a do hero (`priority`) |
| 6 | **Sem hover-only** — todo estado também acessível por toque |
| 7 | **Contraste de texto ≥ 4.5:1** (WCAG AA) |
| 8 | **`viewport-fit=cover`** no `<meta viewport>` pra notch do iPhone |

---

## 🧱 Os 9 blocos como componentes

### 1️⃣ TopBar — Barra de urgência

```tsx
// src/components/blocks/TopBar.tsx
import { Variation } from "@/data/variations";

export function TopBar({ variation }: { variation: Variation }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-bg-card border-b border-white/10 py-2 px-4">
      <p className="text-center text-sm font-semibold text-accent">
        {variation.topBarText}
      </p>
    </div>
  );
}
```

---

### 2️⃣ Hero — A primeira dobra

```tsx
// src/components/blocks/Hero.tsx
import Image from "next/image";
import { Variation } from "@/data/variations";
import { Button } from "@/components/ui/Button";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";

export function Hero({ variation }: { variation: Variation }) {
  return (
    <section className="relative px-5 py-12 md:py-20">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Coluna texto */}
        <div className="flex-1 order-2 md:order-1">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight">
            {variation.headline}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-fg-muted">
            {variation.subHeadline}
          </p>

          {/* DATA DO EVENTO — obrigatória na primeira dobra */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-base">📅</span>
            <span className="text-sm md:text-base font-semibold text-accent">
              {variation.dateText}
            </span>
          </div>

          {/* CTA */}
          <Button
            href={variation.checkoutUrl}
            size="lg"
            className="mt-6 w-full md:w-auto"
          >
            {variation.ctaPrimary}
          </Button>

          {/* GARANTIA — obrigatória abaixo do botão */}
          <GuaranteeBadge className="mt-4" />

          {/* Linha de prova */}
          <p className="mt-6 text-sm text-fg-muted">
            ⭐ +{"{N_ALUNOS}"} alunos transformados
          </p>
        </div>

        {/* Foto do expert */}
        <div className="flex-1 order-1 md:order-2 w-full">
          <Image
            src={variation.heroImage}
            alt="{NOME_ESPECIALISTA}"
            width={600}
            height={600}
            priority
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

---

### 3️⃣ Pain — Amplificação da dor

Suporta 2 estilos: `money-list` (lista de R$) e `affirmations` (cards de dores).

```tsx
// src/components/blocks/Pain.tsx
import { Variation } from "@/data/variations";
import { moneyPains, affirmationPains } from "@/data/pains";

export function Pain({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24 bg-bg-card">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
          {variation.painHeadline}
        </h2>

        {variation.painType === "money-list" ? (
          <ul className="mt-8 space-y-3">
            {moneyPains.map((p) => (
              <li
                key={p.label}
                className="flex items-baseline justify-between gap-4 py-3 border-b border-white/10"
              >
                <span className="text-base md:text-lg">❌ {p.label}</span>
                <span className="font-mono font-bold text-accent">{p.cost}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {affirmationPains.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-xl bg-bg border border-white/10"
              >
                <p className="text-2xl">{p.icon}</p>
                <h3 className="mt-2 font-bold text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-fg-muted">{p.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

---

### 4️⃣ NotYourFault — "A culpa não é sua"

```tsx
// src/components/blocks/NotYourFault.tsx
export function NotYourFault({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold tracking-widest text-accent uppercase">
          ATENÇÃO
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-black">
          A culpa não é sua.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-fg-muted">
          {/* Substitua pelo texto da variação */}
          Sabe por quê? Porque {"{EXPLICACAO_DO_SISTEMA_QUEBRADO}"}.
          {" "}
          {"{DETALHE_DO_PROBLEMA_MAIOR}"}.
        </p>
      </div>
    </section>
  );
}
```

---

### 5️⃣ Authority — Origem do expert

```tsx
// src/components/blocks/Authority.tsx
import Image from "next/image";

export function Authority({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24 bg-bg-card">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <Image
            src="/images/expert-portrait.webp"
            alt="{NOME_ESPECIALISTA}"
            width={400}
            height={500}
            loading="lazy"
            className="rounded-xl w-full h-auto"
          />
        </div>

        <div className="md:w-2/3">
          <h2 className="font-display text-3xl md:text-4xl font-black">
            Eu errei MUITO pra você acertar 100%
          </h2>
          <div className="mt-4 space-y-3 text-base md:text-lg text-fg-muted">
            <p>{"{HISTORIA_PARAGRAFO_1}"}</p>
            <p>{"{HISTORIA_PARAGRAFO_2}"}</p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li>✓ {"{CREDENCIAL_1}"}</li>
            <li>✓ {"{CREDENCIAL_2}"}</li>
            <li>✓ {"{CREDENCIAL_3}"}</li>
            <li>✓ {"{CREDENCIAL_4}"}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
```

---

### 6️⃣ Promises — Promessas expandidas

```tsx
// src/components/blocks/Promises.tsx
import { promises } from "@/data/promises";

export function Promises() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-center">
          O que muda quando você domina o método:
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {promises.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-white/10"
            >
              <span className="text-2xl text-accent flex-shrink-0">{p.icon}</span>
              <p className="text-base md:text-lg">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 7️⃣ Lessons — O que vai aprender

```tsx
// src/components/blocks/Lessons.tsx
import { lessons } from "@/data/lessons";

export function Lessons() {
  return (
    <section className="px-5 py-16 md:py-24 bg-bg-card">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-center">
          O que você vai aprender
        </h2>

        <ol className="mt-10 space-y-4">
          {lessons.map((l) => (
            <li
              key={l.n}
              className="flex items-start gap-4 p-5 rounded-xl bg-bg border border-white/10"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-black text-xl">
                {l.n}
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  {l.icon} {l.title}
                </h3>
                <p className="mt-1 text-sm md:text-base text-fg-muted">
                  {l.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

---

### 8️⃣ Testimonials — Prova social massiva

```tsx
// src/components/blocks/Testimonials.tsx
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-center">
          É IMPOSSÍVEL NEGAR OS RESULTADOS
        </h2>
        <p className="mt-3 text-center text-fg-muted text-lg">
          Veja o que os alunos estão dizendo:
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="p-5 rounded-2xl bg-bg-card border border-white/10"
            >
              {t.type === "video" && t.videoEmbed && (
                <div className="aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={t.videoEmbed}
                    loading="lazy"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              )}

              {t.type === "screenshot" && t.mediaUrl && (
                <Image
                  src={t.mediaUrl}
                  alt={`Resultado ${t.name}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="rounded-xl w-full h-auto"
                />
              )}

              <h3 className="mt-4 font-black text-sm md:text-base uppercase text-accent">
                {t.result}
              </h3>
              <p className="mt-2 text-base">"{t.emotional}"</p>
              <p className="mt-3 text-sm text-fg-muted">
                — {t.name}, {t.cityOrProfession}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 9️⃣ FinalCTA — Última chamada

```tsx
// src/components/blocks/FinalCTA.tsx
import { Variation } from "@/data/variations";
import { Button } from "@/components/ui/Button";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";

export function FinalCTA({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24 bg-gradient-to-b from-bg to-bg-card">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold tracking-widest text-accent uppercase">
          ÚLTIMA CHAMADA
        </p>

        <h2 className="mt-2 font-display text-3xl md:text-5xl font-black">
          {variation.painHeadline.includes("?") ? "É agora ou nunca" : "Sua escolha"}
        </h2>

        <p className="mt-4 text-lg text-fg-muted">{variation.dateText}</p>

        <Button
          href={variation.checkoutUrl}
          size="lg"
          className="mt-8 w-full md:w-auto"
        >
          {variation.ctaSecondary}
        </Button>

        <GuaranteeBadge className="mt-4" />

        <ul className="mt-8 space-y-2 text-sm text-fg-muted">
          <li>✓ Acesso imediato após confirmação</li>
          <li>✓ Aulas ao vivo + gravadas</li>
          <li>✓ Suporte direto pelo WhatsApp</li>
        </ul>
      </div>
    </section>
  );
}
```

---

## 🎁 Componentes UI auxiliares

### `Button.tsx`

```tsx
// src/components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

export function Button({ href, children, size = "md", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-black uppercase tracking-wide rounded-xl transition-all",
        "bg-accent text-bg hover:scale-[1.02] active:scale-[0.98]",
        size === "lg" ? "min-h-[56px] px-8 text-base md:text-lg" : "min-h-[44px] px-6 text-sm",
        className
      )}
    >
      {children}
    </Link>
  );
}
```

### `GuaranteeBadge.tsx`

> **Nota:** este componente usa o **texto curto da garantia da página de ingresso** (R$ 62 · evento). Para a **página de venda do produto principal** (high-ticket), use a dupla garantia definida em [`oferta-lpsg/04-garantia-e-recuperacao.md`](../../oferta/template/04-garantia-e-recuperacao.md) — texto: *"🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias. Assista! Se não gostar devolvo seu dinheiro."*

```tsx
// src/components/ui/GuaranteeBadge.tsx
import { cn } from "@/lib/utils";

export function GuaranteeBadge({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-start gap-2 text-sm text-fg-muted", className)}>
      <span className="text-base flex-shrink-0">🛡️</span>
      <p className="text-left">
        <strong className="text-fg">Garantia Incondicional: Assista!</strong>
        <br />
        Se não gostar devolvo seu dinheiro ao final do evento.
      </p>
    </div>
  );
}
```

### `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🎨 Tailwind classes-padrão do LPSG

| Elemento | Classe |
|---|---|
| Container | `mx-auto max-w-6xl px-5` |
| Seção padrão | `px-5 py-16 md:py-24` |
| Headline H1 | `font-display text-4xl md:text-6xl font-black leading-tight` |
| Headline H2 | `font-display text-3xl md:text-5xl font-black uppercase` |
| Texto corpo | `text-base md:text-lg leading-relaxed text-fg-muted` |
| Botão CTA | `min-h-[56px] px-8 font-black uppercase rounded-xl bg-accent` |
| Card | `p-5 rounded-xl bg-bg-card border border-white/10` |

---

## 🚫 Erros comuns

| Erro | Consequência mobile |
|---|---|
| Fonte < 14px | Ilegível · Apple zoom em inputs |
| Botão < 44px de altura | Difícil tocar · taxa de erro alta |
| Imagens sem `next/image` | Sem otimização · LCP péssimo |
| Hero sem `priority` | LCP alto · perde mobile |
| Múltiplos H1 | SEO ruim · acessibilidade ruim |
| `<input>` sem `type` correto | Teclado errado · UX ruim |
| `position: fixed` sem cuidado | Quebra com teclado virtual |
| Modal sem `inert` | Foco escapa por trás |
| Animação heavy | INP > 200ms · perde Core Web Vitals |
| Sem `aria-label` em ícones | Screen reader ignora |

---

## 📋 Checklist de componentes

- [ ] 9 blocos criados em `components/blocks/`
- [ ] 2 componentes UI (Button + GuaranteeBadge)
- [ ] `lib/utils.ts` com helper `cn`
- [ ] Todos os componentes recebem prop `variation` quando relevante
- [ ] Hero usa `<Image priority>` (LCP)
- [ ] Outras imagens usam `loading="lazy"`
- [ ] Botões com `min-h-[56px]` no mobile
- [ ] Fonte mínima 16px no body
- [ ] Cores via `bg-accent` / `text-accent` (CSS variable)
- [ ] Espaçamento vertical consistente (`py-16 md:py-24`)
- [ ] Tudo responsivo (testar em 375px de largura)
# 04 · Matriz das 5 Variações

> Mínimo **5 variações** por projeto. Mesmo esqueleto, dados diferentes. Eixos: **headline · estrutura de dor · cor de destaque · CTA**.

---

## 🎯 Por que 5 variações?

- **Estatística:** menos que 5 → ruído maior que sinal
- **Hipóteses isoladas:** cada variação testa um eixo de hipótese
- **Velocidade:** roda 5 em paralelo em campanhas de teste · 1 sai vencedora em 7-10 dias
- **Aprendizado acumulado:** vencedora vira "principal" · perdedoras viram banco de aprendizagem
- **Sem trocar tudo de uma vez:** próxima rodada mantém vencedora e testa novas variações dos elementos perdedores

---

## 📊 Matriz padrão dos 4 eixos

| Variação | Headline | Estrutura de dor | Cor destaque | CTA primário |
|---|---|---|---|---|
| **v1** | Pergunta polêmica | Lista R$ perdidos | Laranja `#FF6B00` | "QUERO ME INSCREVER POR {TICKET}" |
| **v2** | Prova em números | Lista R$ perdidos | Vermelho `#E53935` | "QUERO {RESULTADO_PRINCIPAL}" |
| **v3** | Declaração contra-intuitiva | 6 cards de afirmações | Ciano `#00B4D8` | "GARANTIR MINHA VAGA AGORA" |
| **v4** | Antes vs depois | 6 cards de afirmações | Amarelo `#FFB300` | "QUERO TER {TRANSFORMACAO}" |
| **v5** | Confissão / vulnerabilidade | Lista R$ perdidos | Roxo `#7C3AED` | "BORA TRANSFORMAR ISSO" |

---

## 1️⃣ Eixo 1 — Headline (5 tipos de hook)

### v1 — Pergunta polêmica

**Estrutura:** *"Por que {CRENCA_COMUM} é mentira?"*

**Quando funciona:** avatar com objeção forte e ceticismo · nichos saturados de promessas iguais.

**Exemplos:**
- *"Por que acordar cedo é o pior conselho pra quem quer fazer dinheiro?"*
- *"Por que CPL gratuito está te falindo (e ninguém te conta)?"*

### v2 — Prova em números

**Estrutura:** *"{NUMERO_ESPECÍFICO} — e aqui está o que ninguém te conta"*

**Quando funciona:** avatar racional · executivo · busca evidência antes de acreditar.

**Exemplos:**
- *"5.165 leads pagaram pelo meu tráfego mês passado. Zero CPL queimado."*
- *"R$ 1.847.293 em 90 dias com este mesmo método."*

### v3 — Declaração contra-intuitiva

**Estrutura:** *"Todo mundo fala que {X}. Tá errado."*

**Quando funciona:** avatar saturado de conteúdo igual · quer "atalho diferente".

**Exemplos:**
- *"Todo mundo fala que lançamento gratuito escala. Tá errado."*
- *"Pare de fazer dieta. É isso que está te engordando."*

### v4 — Antes vs depois

**Estrutura:** transformação visual + headline curta

**Quando funciona:** avatar visual · resultado tangível e mensurável.

**Exemplos:**
- *"De R$ 8k pra R$ 80k em 6 meses — sem aumentar a equipe."*
- *"De 25% body fat pra 12% em 90 dias."*

### v5 — Confissão / vulnerabilidade

**Estrutura:** *"Eu errei muito antes de descobrir isso."*

**Quando funciona:** avatar emocional · busca conexão antes de comprar.

**Exemplos:**
- *"Quase fechei minha empresa por causa disso. Hoje uso a favor."*
- *"Eu fui um péssimo aluno. Esse método salvou minha vida."*

---

## 2️⃣ Eixo 2 — Estrutura de dor

### Estilo A — Lista de R$ perdidos (v1, v2, v5)

**Quando usar:** dor é **financeira mensurável** (construção, business, marketing, trade).

**Estrutura visual:**

```
VOCÊ NÃO TEM IDEIA DO PESADELO!

❌ {ERRO_1}                 + R$ 90.000,00
❌ {ERRO_2}                 + R$ 30.000,00
❌ {ERRO_3}                 + R$ 28.000,00
❌ {ERRO_4}                 + R$ 9.000,00
─────────────────────────────────────────
TOTAL                       + R$ 157.000,00
```

**Regras:**
- Mínimo 4 linhas · ideal 6
- Valores em R$ específicos (não "muito dinheiro")
- Soma final em destaque visual

### Estilo B — 6 cards de afirmações (v3, v4)

**Quando usar:** dor é **emocional ou comportamental** (saúde, terapia, relacionamento).

**Estrutura visual:**

```
{AVATAR}, alguma das afirmações abaixo te incomoda?

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Carreira         │  │ Frustração       │  │ Insegurança      │
│ estagnada        │  │ técnica          │  │ clínica          │
│ {1_LINHA}        │  │ {1_LINHA}        │  │ {1_LINHA}        │
└──────────────────┘  └──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Sem protocolo    │  │ Preso a          │  │ Desatualizado    │
│ claro            │  │ convênios        │  │ clinicamente     │
│ {1_LINHA}        │  │ {1_LINHA}        │  │ {1_LINHA}        │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Regras:**
- Exatamente 6 cards (3x2 ou 2x3)
- Título de 2-3 palavras
- 1 linha de descrição
- Mesmos cards em todas as variações que usam esse estilo

---

## 3️⃣ Eixo 3 — Cor de destaque

| Variação | Cor | OKLCH | Hex | Quando funciona |
|---|---|---|---|---|
| v1 | 🟠 Laranja | `oklch(70% 0.20 50)` | `#FF6B00` | Universal · marketing · construção |
| v2 | 🔴 Vermelho | `oklch(60% 0.22 25)` | `#E53935` | Urgência · saúde · transformação |
| v3 | 🔵 Ciano | `oklch(70% 0.15 220)` | `#00B4D8` | Tech · finanças · tom calmo |
| v4 | 🟡 Amarelo | `oklch(80% 0.18 90)` | `#FFB300` | Otimismo · educação · criativo |
| v5 | 🟣 Roxo | `oklch(60% 0.20 290)` | `#7C3AED` | Premium · espiritualidade · diferenciado |

### Regras de uso da cor

- **Apenas 1 cor de destaque por variação** — nunca misture
- Aplica em: botão CTA · barra do topo · ícones · borders de cards · highlights da headline
- Fundo permanece **escuro** (`#0A0A0A` / `#141414`) em todas as variações
- Texto principal permanece **branco/cinza-claro**

### Como trocar a cor sem refazer

```tsx
// page.tsx da variação
<main style={{ "--accent": "oklch(70% 0.20 50)" } as React.CSSProperties}>
  {/* todos os componentes usam bg-accent / text-accent */}
</main>
```

---

## 4️⃣ Eixo 4 — CTA (texto e tom)

### v1 — Direto e funcional

```
QUERO ME INSCREVER POR {TICKET_INGRESSO}
```

**Tom:** transparente, foca no valor monetário.

### v2 — Foco no resultado

```
QUERO {RESULTADO_PRINCIPAL}
```

**Tom:** ambicioso, foca na transformação.

**Exemplos:** *"QUERO FATURAR R$ 100K"* · *"QUERO PERDER 7KG"*

### v3 — Escassez

```
GARANTIR MINHA VAGA AGORA
```

**Tom:** urgência, escassez implícita.

### v4 — Aspiracional

```
QUERO TER {TRANSFORMACAO}
```

**Tom:** projeção do futuro desejado.

**Exemplos:** *"QUERO TER A LIBERDADE FINANCEIRA"* · *"QUERO TER UMA AGENDA CHEIA"*

### v5 — Coloquial / próximo

```
BORA TRANSFORMAR ISSO
```

**Tom:** parceiro, time, intimidade.

---

## 🎲 Como rodar o teste das 5 variações

### Setup

1. **Sobe as 5 rotas no Vercel** (já existem desde o setup inicial)
2. **Cria 5 campanhas de teste no Meta Ads**, uma pra cada variação:
   ```
   {SIGLA}_{DDMMYY}_TES-PAG_001  →  /v1
   {SIGLA}_{DDMMYY}_TES-PAG_002  →  /v2
   {SIGLA}_{DDMMYY}_TES-PAG_003  →  /v3
   {SIGLA}_{DDMMYY}_TES-PAG_004  →  /v4
   {SIGLA}_{DDMMYY}_TES-PAG_005  →  /v5
   ```
3. **Usa criativos JÁ VALIDADOS** (mesmos em todas as 5 campanhas — isolamento)
4. **R$ 50/dia mínimo por campanha** (regra LPSG · soma ≤ 20% do orçamento total)
5. **Roda 5-7 dias** pra dados estatísticos

### O que medir

| Métrica | Pra cada variação |
|---|---|
| **Conversão da página** (visitas → compras) | ≥ 5% mínimo |
| **Tempo médio na página** | ≥ 60s |
| **Scroll até "O que vai aprender"** | ≥ 50% |
| **Cliques no CTA primário (hero)** | ≥ 15% |
| **ROAS de ingresso** | ≥ 1.0 |

### Como decidir a vencedora

```
Variação vencedora = maior CONVERSÃO em 7 dias com ROAS ≥ alvo
```

- Diferença < 10% → estatisticamente igual · escolhe a mais simples de manter
- Diferença ≥ 10% → vencedora vira **principal**
- Vencedora vai pra `/`  (homepage redireciona pra ela)
- Outras 4 ficam ativas pra próxima rodada de teste

### Próxima rodada

- Mantém a vencedora intacta
- Cria 4 novas variações testando outros eixos (ou novas combinações)
- Repete o ciclo

---

## 📋 Tabela de preenchimento (use isso como briefing)

```
┌──────────┬───────────────┬─────────────────┬────────────┬──────────────┐
│ Variação │ Headline      │ Estrutura dor   │ Cor        │ CTA primário │
├──────────┼───────────────┼─────────────────┼────────────┼──────────────┤
│ v1       │ {HEADLINE_V1} │ Lista R$        │ Laranja    │ {CTA_V1}     │
│ v2       │ {HEADLINE_V2} │ Lista R$        │ Vermelho   │ {CTA_V2}     │
│ v3       │ {HEADLINE_V3} │ 6 cards         │ Ciano      │ {CTA_V3}     │
│ v4       │ {HEADLINE_V4} │ 6 cards         │ Amarelo    │ {CTA_V4}     │
│ v5       │ {HEADLINE_V5} │ Lista R$        │ Roxo       │ {CTA_V5}     │
└──────────┴───────────────┴─────────────────┴────────────┴──────────────┘
```

---

## 🚨 Erros comuns

| Erro | Por quê é ruim |
|---|---|
| Subir só 1 variação | Sem comparação · não aprende |
| Subir 10 variações de uma vez | Tráfego se dilui · sem dados estatísticos |
| Mudar 4 eixos de uma vez | Não dá pra isolar o que funcionou |
| Criativos diferentes em cada teste | Contamina dados · variável não isolada |
| Trocar cor sem testar | Cor afeta CR · não pula o teste |
| Manter perdedora "porque eu gostei" | Bias pessoal mata performance |
| Trocar variação principal toda semana | Sem maturidade nos dados |
# 05 · Performance & Deploy no Vercel

> Página rápida vende mais. **LCP < 1.5s** é a regra do LPSG — não os 2s padrão da web. Mobile é tudo.

---

## 🎯 Por que performance é decisivo

| Métrica | Impacto direto |
|---|---|
| LCP +1s | -7% conversão (Akamai · Google) |
| Mobile com 3G | 40% dos brasileiros — não pode quebrar |
| CLS > 0.1 | Frustra clique no CTA · taxa de erro alta |
| INP > 200ms | "Página travou" · perde tráfego pro botão |

**Tradução:** se a página é lenta, **o tráfego pago vira prejuízo direto**. Você paga pelo clique e o lead nem vê o conteúdo.

---

## 📊 Métricas-alvo do LPSG

| Métrica | Mínimo | Ideal LPSG | Padrão Web |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.0s | **< 1.5s** | < 2.5s |
| **INP** (Interaction to Next Paint) | < 200ms | **< 100ms** | < 200ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | **< 0.05** | < 0.1 |
| **TTFB** (Time to First Byte) | < 600ms | **< 300ms** | < 800ms |
| **Lighthouse Mobile** | ≥ 90 | **≥ 95** | ≥ 75 |
| **Peso total da página** | < 2 MB | **< 1 MB** | — |
| **Peso da imagem do hero** | < 200 KB | **< 150 KB** | — |

---

## 🖼️ Otimização de imagens (a alavanca #1)

### Sempre `next/image`

```tsx
import Image from "next/image";

<Image
  src="/images/expert.webp"
  alt="{NOME_ESPECIALISTA}"
  width={600}
  height={600}
  priority           // SOMENTE no hero · resto: loading="lazy" implícito
  quality={85}       // 85 é o sweet spot
  placeholder="blur"
  blurDataURL="..."  // base64 LQIP
/>
```

### Formato e tamanho

| Tipo de imagem | Formato | Resolução máx | Peso máx |
|---|---|---|---|
| Hero (foto do expert) | AVIF + WebP | 800x800 | 150 KB |
| Depoimentos / fotos | WebP | 400x400 | 80 KB |
| Open Graph | JPG | 1200x630 | 200 KB |
| Ícones | SVG inline | — | < 5 KB |
| Logos | SVG | — | < 10 KB |

### Comando rápido pra otimizar

```bash
# Instala sharp e cwebp
brew install webp jpeg-turbo

# Converte JPG → WebP otimizado
cwebp -q 85 expert.jpg -o expert.webp

# Resize antes (se a original for grande)
magick expert-original.jpg -resize 800x800 -strip expert.jpg
```

### Lazy loading correto

| Onde | Estratégia |
|---|---|
| Hero | `priority` (carrega primeiro) |
| Acima da dobra | `priority` se visível |
| Abaixo da dobra | `loading="lazy"` (default no `next/image`) |
| Vídeos de depoimentos | `loading="lazy"` no iframe + `data-src` se complexo |

---

## 🎨 Fontes — não derrube o LCP

### Use `next/font` sempre

```tsx
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",      // mostra fallback enquanto carrega
});
```

### Por que `next/font`?

- ✅ Self-hosted automático (sem chamada externa pro Google)
- ✅ Subset apenas o que usa
- ✅ `font-display: swap` automático
- ✅ Zero CLS por troca de fonte

### Pesos mínimos necessários

```tsx
const inter = Inter({
  weight: ["400", "600", "900"],   // só os que usa
  subsets: ["latin"],
});
```

---

## 🎬 Vídeos — manuseio cuidadoso

### Vídeos no hero — **NÃO usar**

Padrão LPSG: hero é **foto + texto**. Vídeo no topo derruba LCP.

### Vídeos de depoimentos

Embed lazy via `iframe` ou solução dedicada:

```tsx
// Versão simples
<iframe
  src={videoEmbed}
  loading="lazy"
  className="aspect-[9/16] w-full"
  allowFullScreen
/>

// Versão otimizada com placeholder
<div className="relative aspect-[9/16]">
  <Image src="/thumb.webp" fill alt="..." className="absolute" />
  <button onClick={() => loadVideo()}>▶ Assistir</button>
</div>
```

> **Dica:** placeholder que carrega o iframe **só após o clique** economiza ~200KB por vídeo no carregamento inicial.

---

## 🚀 Bundle size — mantenha enxuto

### Regras

- **Bundle JS inicial < 100 KB** (gzipped)
- **Bundle CSS < 30 KB** (gzipped)
- **Total < 1 MB** na primeira visita

### Como conferir

```bash
pnpm build
# Olha a coluna "First Load JS" no terminal
```

### O que evitar

| Biblioteca | Tamanho aproximado | Alternativa |
|---|---|---|
| Lodash completo | 70 KB | Funções nativas / lodash-es por função |
| Moment.js | 230 KB | `date-fns` (modular) ou `Intl.DateTimeFormat` nativo |
| jQuery | 30 KB | DOM API nativa |
| Material UI completo | 300+ KB | shadcn/ui (copia só o que precisa) |
| Tailwind UI sem purge | 3 MB | Configurar `content` corretamente no `tailwind.config` |

### Code splitting automático

Next.js já faz por rota. Cada `/v1`, `/v2`... carrega apenas o JS daquela página.

---

## 📡 Tracking e scripts externos

### Carregamento estratégico

```tsx
// src/app/layout.tsx
import Script from "next/script";

<Script
  id="meta-pixel"
  strategy="afterInteractive"     // depois do conteúdo principal
  dangerouslySetInnerHTML={{ __html: `...pixel code...` }}
/>

<Script
  id="gtm"
  strategy="afterInteractive"
  src="..."
/>
```

### Estratégias do `next/script`

| Strategy | Quando carrega | Quando usar |
|---|---|---|
| `beforeInteractive` | Antes do conteúdo | Crítico (auth, anti-fraud) — **raro** |
| `afterInteractive` | Após conteúdo | Pixel, GTM, GA · **padrão** |
| `lazyOnload` | Quando aba ociosa | Chats, widgets · não-críticos |

> **Padrão LPSG:** Pixel + GTM + GA = `afterInteractive`. Nunca `beforeInteractive`.

---

## 🌐 Vercel — configurações de produção

### `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    deviceSizes: [375, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],  // tree-shaking automático
  },

  async redirects() {
    return [
      { source: "/", destination: "/v1", permanent: false },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Vercel Edge Network

- **Edge automático:** Vercel coloca seu site em 40+ regiões globais
- **CDN cache:** assets estáticos cached por 1 ano
- **Brotli compression:** ativada por default (40% menor que gzip)
- **HTTP/3:** ativado por default

### Vercel Speed Insights

```bash
pnpm add @vercel/speed-insights
```

```tsx
// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

<SpeedInsights />
```

Métricas reais (de usuários reais) aparecem em `Project → Speed Insights`:
- LCP, INP, CLS por rota
- Compara com benchmark do nicho
- Mostra trend ao longo do tempo

---

## 🧪 Auditoria pré-deploy

### Lighthouse CLI (mobile)

```bash
pnpm dlx lighthouse https://lp.dominio.com.br/v1 \
  --preset=desktop \
  --form-factor=mobile \
  --output=html \
  --output-path=./reports/v1-mobile.html
```

Roda nas 5 variações antes de subir tráfego.

### PageSpeed Insights

```
https://pagespeed.web.dev/analysis?url=https://lp.dominio.com.br/v1
```

Ideal: **≥ 95 em mobile** (campo verde). Se < 90, **não suba tráfego ainda**.

### Critérios de aprovação por variação

- [ ] Lighthouse Mobile ≥ 95
- [ ] LCP < 1.5s (campo + lab)
- [ ] CLS < 0.05
- [ ] INP < 200ms (Real User Monitoring após 7 dias)
- [ ] Peso total < 1 MB
- [ ] Imagem do hero < 150 KB
- [ ] Sem warnings no console

---

## 🔒 Segurança e SEO básicos

### Headers de segurança (já no `next.config`)

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Metadata (Open Graph + Twitter)

```tsx
// app/(variations)/v1/page.tsx
export const metadata = {
  title: "{HEADLINE_CURTA} | {NOME_EVENTO}",
  description: "{SUB_HEADLINE}",
  openGraph: {
    title: "{HEADLINE_CURTA}",
    description: "{SUB_HEADLINE}",
    images: ["/images/og-image.jpg"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

### `robots.txt`

```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://lp.dominio.com.br/sitemap.xml
```

### Sitemap

`src/app/sitemap.ts`:

```typescript
export default function sitemap() {
  const base = "https://lp.dominio.com.br";
  return ["/v1", "/v2", "/v3", "/v4", "/v5"].map((url) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}
```

---

## 📋 Checklist pré-deploy de cada variação

### Performance
- [ ] `pnpm build` sem warnings
- [ ] Lighthouse Mobile ≥ 95
- [ ] LCP < 1.5s
- [ ] CLS < 0.05
- [ ] INP < 200ms
- [ ] Peso total < 1 MB
- [ ] Imagem hero otimizada (WebP/AVIF · < 150 KB)

### Funcionamento
- [ ] Botão CTA leva pra checkout correto
- [ ] UTMs propagam pro checkout
- [ ] Pixel disparando `PageView` + `InitiateCheckout`
- [ ] GA4 recebendo eventos
- [ ] Página renderiza correta no iPhone SE (375px)
- [ ] Página renderiza correta no Galaxy A50 (412px)

### Conteúdo
- [ ] Foto do expert otimizada e rosto centralizado
- [ ] Data do evento na primeira dobra
- [ ] Garantia abaixo do botão (texto exato LPSG)
- [ ] Mínimo 6 depoimentos misturados
- [ ] CTA final repete garantia
- [ ] Footer com termos de uso e privacidade

### SEO + Sharing
- [ ] `<title>` único por variação
- [ ] `<meta description>` único por variação
- [ ] Open Graph image (1200x630)
- [ ] `robots.txt` permite indexação
- [ ] `sitemap.xml` lista as 5 variações

### Tracking
- [ ] Pixel ID correto
- [ ] CAPI configurado
- [ ] GTM ID correto
- [ ] GA4 ID correto
- [ ] Variáveis de ambiente do Vercel populadas

### Pós-deploy
- [ ] URL de produção respondendo
- [ ] Domínio customizado HTTPS funcionando
- [ ] Vercel Analytics ativo
- [ ] Speed Insights coletando dados
- [ ] Preview branch testado

---

## 🚨 Erros que matam performance

| Erro | Impacto |
|---|---|
| Imagem JPG não otimizada (>500 KB) | LCP +2s |
| `<img>` puro sem `next/image` | Sem AVIF/WebP · sem lazy nativo |
| Hero sem `priority` | LCP péssimo |
| Fonte Google Fonts via `<link>` direto | CLS por troca de fonte |
| Pixel/GTM com `beforeInteractive` | Atrasa LCP em 500ms+ |
| Bundle com Lodash completo | +70 KB sem necessidade |
| Vídeo no hero | Atrasa LCP em 1-3s |
| CSS-in-JS com runtime grande | Atraso no paint |
| Múltiplas requisições de fonte | Render-blocking |
| Reset CSS pesado | Bundle CSS inflado |

---

## 🔁 Rotina de manutenção

| Frequência | Ação |
|---|---|
| **Diário** | Conferir Vercel Analytics — dropdown de erros |
| **Semanal** | Lighthouse nas 5 variações · comparar com semana anterior |
| **A cada deploy** | Lighthouse + Speed Insights · não subir se piorou >5 pontos |
| **Mensal** | Auditoria de bundle size · remover dependências não usadas |
| **Trimestral** | Rever benchmarks · atualizar dependências (security patches) |
# 06 · Modos de Output (Implementa Aqui · Brief para Claude Design)

> A skill `paginas-lpsg` suporta **2 modos de saída**. Pergunte ao usuário qual usar antes de gerar.

---

## 🎯 Quando usar cada modo

| Modo | Quando usar |
|---|---|
| **🟢 Modo A — Implementa Aqui** | Você quer o projeto React pronto, com Claude Preview rodando + Vercel deploy direto. Zero atrito. |
| **🟡 Modo B — Brief para Claude Design** | Você prefere usar o Claude Design (claude.ai web) pro código visual. Quer copiar/colar e voltar. |

> Se o usuário não especificar, **pergunte** antes de gerar.

---

## 🟢 Modo A — Implementa Aqui

### Fluxo

```
1. paginas-lpsg coleta contexto (variáveis preenchidas)
2. paginas-lpsg invoca designer-senior OU frontend-design OU lovable-style-turbo
3. Code do projeto Next.js + Tailwind é gerado nos 9 blocos
4. Claude Preview (mcp__Claude_Preview__) roda dev server localmente
5. preview_screenshot mostra resultado em tempo real
6. Iterar até aprovação
7. Vercel deploy via deploy-to-vercel ou vercel-cli-with-tokens
```

### Skills auxiliares acionadas

| Necessidade | Skill |
|---|---|
| Identidade visual + design system | `designer-senior` |
| Frontend production-grade evitando estética genérica | `frontend-design` |
| Stack Vite + React + Tailwind + shadcn (alternativa) | `lovable-style-turbo` |
| Tokens de cor / tipografia / espaço | `design-tokens-turbo` |
| Diretrizes de UI Web | `web-design-guidelines` |
| Preview local + screenshots | `mcp__Claude_Preview__*` |
| Deploy Vercel | `deploy-to-vercel` ou `vercel-cli-with-tokens` |

### Comando interno (passo a passo)

```
1. Ler 00-variaveis-globais.md (preenchido pelo usuário)
2. Ler 02-arquitetura-projeto.md
3. Ler 03-componentes-mobile-first.md
4. Para CADA bloco (TopBar, Hero, Pain, NotYourFault, Authority,
   Promises, Lessons, Testimonials, FinalCTA):
   - Invocar designer-senior OU frontend-design com:
     - Variáveis da variação atual (cor, headline, sub, dor, CTA)
     - Estrutura do bloco
     - Tokens (cores, fontes, breakpoints)
   - Receber componente React
   - Salvar em src/components/blocks/{Bloco}.tsx
5. Para CADA variação (v1-v5):
   - Criar src/app/(variations)/v{N}/page.tsx
   - Importar blocos e passar prop variation
6. Configurar tracking (Pixel + GTM + GA4)
7. Iniciar Claude Preview (preview_start)
8. Screenshot mobile (375x812) e desktop (1280x800)
9. Iterar com feedback do usuário
10. Deploy quando aprovado
```

### Vantagens

- ✅ Zero copy/paste entre janelas
- ✅ Iteração rápida (Claude Preview screenshot em segundos)
- ✅ Variáveis e dados sincronizados automaticamente
- ✅ Mantém histórico de decisões na sessão
- ✅ Deploy 1-click no fim

### Quando NÃO usar

- ❌ Se o usuário tem preferência forte pelo estilo do Claude Design
- ❌ Se o time interno trabalha primariamente no claude.ai web
- ❌ Se o cliente final só aceita design feito num determinado fluxo

---

## 🟡 Modo B — Brief para Claude Design

### Fluxo

```
1. paginas-lpsg coleta contexto (variáveis preenchidas)
2. paginas-lpsg gera UM brief estruturado pronto pra colar
3. Usuário cola no Claude Design (claude.ai web)
4. Claude Design produz o código React/HTML
5. Usuário traz o código de volta pra Claude Code
6. paginas-lpsg ajusta:
   - Variáveis dinâmicas (data/checkout/UTMs)
   - Conexão com data/variations.ts
   - Tracking (Pixel/GTM/GA4)
   - SEO + Open Graph
7. Deploy Vercel
```

### O que entra no brief

Ver `07-brief-claude-design.md` — template completo.

### Vantagens

- ✅ Aproveita o estilo visual do Claude Design (se você gostou)
- ✅ Permite que outras pessoas do time gerem o design (não precisam ter Claude Code)
- ✅ Brief é portátil — funciona também no v0.dev, Lovable, Bolt, etc.

### Desvantagens

- ❌ Copy/paste 2x (ida e volta)
- ❌ Variáveis preenchidas precisam ser revisadas no retorno
- ❌ Iteração mais lenta (cada ajuste = nova rodada de copy/paste)
- ❌ Tracking precisa ser religado manualmente

---

## 🔄 Fluxo de decisão (use como guia)

```
                                    ┌──────────────────────────┐
                                    │ Usuário pediu páginas    │
                                    │ do LPSG?                 │
                                    └────────────┬─────────────┘
                                                 │
                                                 ▼
                              ┌─────────────────────────────────┐
                              │ Pergunta: qual modo?            │
                              │ A) Implementa aqui              │
                              │ B) Brief pra Claude Design      │
                              └────┬────────────────────┬───────┘
                                   │                    │
                                   ▼                    ▼
                          ┌─────────────────┐  ┌─────────────────────┐
                          │ MODO A          │  │ MODO B              │
                          │ Invoca:         │  │ Gera:               │
                          │ - designer-sr   │  │ - Brief estruturado │
                          │ - frontend-dsg  │  │ - Variações listadas│
                          │ - claude-prev   │  │ - Tokens visuais    │
                          │ - vercel-deploy │  │                     │
                          │                 │  │ Usuário cola em     │
                          │ Resultado:      │  │ Claude Design,      │
                          │ projeto pronto  │  │ traz código de volta│
                          │                 │  │                     │
                          │                 │  │ paginas-lpsg ajusta │
                          │                 │  │ + faz deploy        │
                          └─────────────────┘  └─────────────────────┘
```

---

## 🚦 Sinalização clara para o usuário

**No início da sessão, sempre pergunte:**

> "Qual modo de output você quer pra essa página?
>
> 🟢 **A — Implementa aqui:** eu chamo as skills de design (`designer-senior`/`frontend-design`/`lovable-style-turbo`), gero o projeto Next.js completo, rodo o Claude Preview pra você ver, e fazemos deploy no Vercel. Zero atrito.
>
> 🟡 **B — Brief pra Claude Design:** eu gero um prompt estruturado pronto pra colar no Claude Design. Você gera o design lá, traz o código de volta, e eu finalizo aqui (variáveis dinâmicas, tracking, deploy).
>
> Qual?"

> Se o usuário disser "tanto faz" ou "o melhor", **default = Modo A**.

---

## 📋 Checklist por modo

### Modo A — Implementa Aqui
- [ ] Variáveis globais preenchidas
- [ ] Pelo menos 1 imagem do expert no `public/images/`
- [ ] Skills disponíveis: `designer-senior` ou `frontend-design`
- [ ] Claude Preview habilitado (`mcp__Claude_Preview__`)
- [ ] Tracking IDs prontos (Pixel + GTM)
- [ ] Domínio + Vercel configurados (ou em config)

### Modo B — Brief pra Claude Design
- [ ] Variáveis globais preenchidas
- [ ] `07-brief-claude-design.md` lido pra entender o template
- [ ] Claude Design ou v0.dev ou Lovable acessível pelo usuário
- [ ] Plano: gerar brief → colar → trazer código → continuar aqui
- [ ] Tracking IDs guardados pra religar no retorno

---

## 🚨 Erros comuns

| Erro | Como evitar |
|---|---|
| Misturar os 2 modos no meio | Decidir antes de começar · não trocar no meio do caminho |
| Esquecer de religar tracking no retorno do Modo B | Checklist específico de retorno (ver `07-brief-claude-design.md`) |
| Usar Modo B quando o time não tem acesso ao Claude Design | Cair pro Modo A direto |
| Iterar 5x no Modo B | Se está iterando muito, mudar pro Modo A na próxima rodada |
# 07 · Brief para Claude Design (Modo B)

> Template do prompt único pra colar no Claude Design (claude.ai web), v0.dev, Lovable ou similares.

---

## 🎯 Como usar

1. Preencha `00-variaveis-globais.md` com os dados do projeto
2. Substitua `{VARIÁVEIS}` neste template pelos valores reais
3. Copie o template inteiro
4. Cole no Claude Design / v0.dev / Lovable / Bolt
5. Receba o código React + Tailwind
6. Volte aqui no Claude Code com o código pra:
   - Conectar `data/variations.ts`
   - Religar tracking (Pixel + GTM + GA4)
   - Configurar SEO + Open Graph
   - Deploy Vercel

---

## 📋 TEMPLATE DO BRIEF (copiar tudo abaixo)

```
═══════════════════════════════════════════════════════════
BRIEF — Página de Venda de Ingresso · {NOME_EVENTO}
═══════════════════════════════════════════════════════════

# CONTEXTO

Crie uma página de venda de ingresso para o {NOME_EVENTO},
um evento online no formato de Lançamento Pago Semanal Gravado
(LPSG) com 5+1 aulas. O ingresso custa {TICKET_INGRESSO} e o
evento é vendido pra {AVATAR_RESUMIDO}.

A página tem um único objetivo: converter visitantes em
compradores de ingresso. Conversão alvo: ≥ 5%.

# STACK OBRIGATÓRIA

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 4
- Mobile-first (375px → 1280px)
- Imagens em next/image (WebP/AVIF)
- Fontes: Inter + Manrope (next/font)

# IDENTIDADE VISUAL

- **Tema:** dark mode (fundo #0A0A0A · cards #141414)
- **Cor principal de destaque:** {COR_DESTAQUE} (use OKLCH se possível)
- **Texto principal:** branco/cinza-claro
- **Tipografia:**
  - Headlines: Manrope ExtraBold/Black (font-display)
  - Corpo: Inter Regular (font-sans)
- **Tom:** direto, sem rebuscamento, mobile-first

# OS 9 BLOCOS (em ordem fixa)

## 1. TopBar (sticky)
Texto curto + cor de destaque alta:
"{TOPBAR_TEXTO}" (ex: "🔥 VAGAS SE ESGOTANDO")

## 2. Hero (primeira dobra)
Componentes obrigatórios em ordem:

1. **Headline:** "{HEADLINE}"
2. **Sub-headline:** "{SUBHEADLINE}"
3. **📅 Data do evento (OBRIGATÓRIO):** "{DATA_TEXTO}"
   (ex: "De 12/05 a 18/05 · Sempre às 7h da manhã")
   Aparece em destaque visual abaixo do sub.
4. **Foto do expert:** {URL_FOTO_EXPERT}
   (rosto principal · à direita no desktop · abaixo no mobile)
5. **Botão CTA primário:** "{CTA_PRIMARIO}"
   Min altura 56px no mobile · cor de destaque · arredondado.
6. **🛡️ Garantia (OBRIGATÓRIO abaixo do botão):**
   "🛡️ Garantia Incondicional: Assista!
    Se não gostar devolvo seu dinheiro ao final do evento."
   (fonte 14-16px, cinza claro, centralizado, ícone à esquerda)
7. **Linha de prova:** "+{N_ALUNOS} alunos transformados"

## 3. Pain — Amplificação da dor
Estilo: {ESTILO_DOR} (escolha "Lista de R$ perdidos" OU "6 cards de afirmações")

Headline: "{HEADLINE_DOR}"

{SE LISTA DE R$:}
Lista vertical com 4-6 itens:
- {DOR_1}                     + R$ {VALOR_1}
- {DOR_2}                     + R$ {VALOR_2}
- {DOR_3}                     + R$ {VALOR_3}
- {DOR_4}                     + R$ {VALOR_4}

Total destacado no fim.

{SE 6 CARDS:}
Grid 2x3 (mobile 1 col) com 6 cards.
Cada card: ícone X + título 2-3 palavras + descrição 1 linha.

## 4. NotYourFault — "A culpa não é sua"
Centralizado · headline grande · texto curto:

"A culpa não é sua.
Sabe por quê? Porque {EXPLICACAO_SISTEMA}.
{DETALHE_PROBLEMA_MAIOR}."

## 5. Authority — Origem do expert
Layout 2 colunas (mobile 1 col):
- Esquerda (1/3): foto profissional do expert
- Direita (2/3):
  - Headline: "Eu errei MUITO pra você acertar 100%"
  - 2 parágrafos de história
  - 4 bullets de credenciais (✓ {CREDENCIAL_1} · ✓ {CREDENCIAL_2}...)

## 6. Promises — O que muda quando aplica
Headline: "O QUE MUDA QUANDO VOCÊ DOMINA O MÉTODO:"

Grid 2x3 com 4-6 promessas:
- ✓ {TRANSFORMACAO_1}
- ✓ {TRANSFORMACAO_2}
- ✓ {TRANSFORMACAO_3}
- ✓ {TRANSFORMACAO_4}
- ✓ {TRANSFORMACAO_5}
- ✓ {TRANSFORMACAO_6}

## 7. Lessons — As 5+1 aulas
Headline: "O QUE VOCÊ VAI APRENDER"

Lista vertical numerada com:
- Aula 1 — {TITULO_AULA_1}
  {1 LINHA DESCRITIVA}
- Aula 2 — {TITULO_AULA_2}
- ... (até Aula 6)

## 8. Testimonials — Prova social massiva
Headline: "É IMPOSSÍVEL NEGAR OS RESULTADOS"

Grid 3 colunas (2 no tablet, 1 no mobile) com mínimo 6 depoimentos.
Mistura: vídeos curtos (9:16) + prints + texto.

Cada card: foto/vídeo · headline em CAIXA ALTA · 1 linha de
transformação · nome + cidade/profissão.

## 9. FinalCTA — Última chamada
Centralizado · gradiente sutil:

- "ÚLTIMA CHAMADA" (label)
- Headline grande: "{HEADLINE_FINAL_CTA}"
- Data do evento repetida
- Botão CTA grande (mesma cor de destaque)
- Garantia repetida (mesmo texto do hero)
- 3-4 bullets de reforço

# REQUISITOS DE PERFORMANCE

- LCP < 1.5s (mais rigoroso que padrão)
- INP < 200ms
- CLS < 0.05
- Peso total < 1 MB no mobile
- Lighthouse Mobile ≥ 95
- Imagem do hero com `priority` no next/image
- Outras imagens com `loading="lazy"`

# REQUISITOS DE ACESSIBILIDADE

- Fonte mínima 16px no body
- Botão CTA min 56px de altura no mobile
- Contraste de texto ≥ 4.5:1
- Sem hover-only · todo estado acessível por toque
- aria-label em ícones

# CTAs

- **Hero:** "{CTA_PRIMARIO}"
- **Final:** "{CTA_FINAL}"
- Ambos linkam pra: {URL_CHECKOUT}

# DADOS A NÃO ESQUECER

- Data do evento: "{DATA_TEXTO}"
- Texto exato da garantia (palavra por palavra)
- Foto do expert (sem stock photos)
- Mínimo 6 depoimentos (mistura de formatos)
- 1 cor de destaque consistente em toda a página
- Tema escuro

# ENTREGÁVEL ESPERADO

Código completo de uma página Next.js 14 + Tailwind CSS:
- Arquivo único OU separado em componentes (preferência: separado em src/components/blocks/)
- TypeScript com tipos bem definidos
- Tailwind classes (sem CSS extra exceto se necessário)
- next/image em todas as imagens
- next/font pra Inter + Manrope
- Metadata API pra SEO (title, description, openGraph)

═══════════════════════════════════════════════════════════
FIM DO BRIEF
═══════════════════════════════════════════════════════════
```

---

## 🔁 Quando voltar com o código (checklist de retorno)

Depois que o Claude Design (ou v0.dev/Lovable) gerar o código, traga aqui pra Claude Code finalizar:

### 1. Estrutura de pastas
- [ ] Mover componentes pra `src/components/blocks/`
- [ ] Criar `src/data/variations.ts` (source of truth das 5 variações)
- [ ] Criar `src/data/lessons.ts`, `testimonials.ts`, `pains.ts`, `promises.ts`
- [ ] Criar 5 rotas em `src/app/(variations)/v{1-5}/page.tsx`
- [ ] Refatorar componentes pra receber prop `variation`

### 2. Substituições de variável
- [ ] Trocar valores hardcoded por leitura de `data/variations.ts`
- [ ] Cor de destaque via CSS variable `--accent` (definida por variação)
- [ ] Datas do evento puxadas do arquivo de variáveis
- [ ] CTA primary/secondary vindos da variação atual

### 3. Tracking
- [ ] Instalar Pixel Meta + CAPI (`src/components/tracking/MetaPixel.tsx`)
- [ ] Instalar GTM (`src/components/tracking/GTM.tsx`)
- [ ] Instalar GA4
- [ ] Configurar `next/script` com `strategy="afterInteractive"`
- [ ] Adicionar Vercel Analytics + Speed Insights

### 4. SEO + sharing
- [ ] Metadata API por variação (`title`, `description`, `openGraph`)
- [ ] Imagem Open Graph (1200x630) no `public/images/og-image.jpg`
- [ ] `robots.txt` permitindo indexação
- [ ] `sitemap.xml` listando as 5 variações

### 5. Performance
- [ ] `next/image` em todas as imagens
- [ ] `priority` no hero
- [ ] `loading="lazy"` no resto
- [ ] Otimizar pra LCP < 1.5s
- [ ] Rodar Lighthouse Mobile ≥ 95

### 6. Variações
- [ ] Implementar as 5 variações via switch de cor + headline + dor + CTA
- [ ] Cor por variação:
  - v1 Laranja `oklch(70% 0.20 50)`
  - v2 Vermelho `oklch(60% 0.22 25)`
  - v3 Ciano `oklch(70% 0.15 220)`
  - v4 Amarelo `oklch(80% 0.18 90)`
  - v5 Roxo `oklch(60% 0.20 290)`

### 7. Deploy
- [ ] Variáveis de ambiente no Vercel
- [ ] Domínio customizado apontado
- [ ] Preview branch testado
- [ ] Lighthouse rodado nas 5 variações antes do tráfego

---

## 💡 Dicas pra o brief funcionar melhor

| Dica | Por quê |
|---|---|
| **Não corte o brief pela metade** — copie tudo | O design depende dos 9 blocos completos |
| **Sempre forneça URL real da foto do expert** | Pra evitar stock photo |
| **Especifique a cor em OKLCH** | Resultado mais consistente que hex |
| **Insista em "Tema escuro"** | Default da maioria dos LLMs é claro |
| **Repita "mobile-first"** | Sem isso, vem desktop-only |
| **Liste cada bloco numerado** | Sem hierarquia clara, blocos somem |

---

## 🚨 O que sair do Claude Design **não vai trazer**

| Item | Você adiciona aqui no Claude Code |
|---|---|
| `data/variations.ts` | sim |
| Tracking (Pixel/GTM/GA4) | sim |
| Open Graph image | sim |
| Sitemap.xml | sim |
| Configuração de Vercel | sim |
| Otimização final de LCP | sim |
| Switch automático de variação | sim |

---

## 🔄 Fluxo completo Modo B (visual)

```
┌─────────────────────────────────────────────────────────────┐
│ AQUI no Claude Code                                         │
│                                                             │
│ paginas-lpsg coleta variáveis                               │
│           │                                                 │
│           ▼                                                 │
│ paginas-lpsg gera BRIEF estruturado (este arquivo)          │
│           │                                                 │
│           ▼                                                 │
│ Você COPIA o brief                                          │
└──────┬──────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│ NO Claude Design (claude.ai web) ou v0.dev / Lovable        │
│                                                             │
│ Você COLA o brief                                           │
│           │                                                 │
│           ▼                                                 │
│ Claude Design GERA código React + Tailwind                  │
│           │                                                 │
│           ▼                                                 │
│ Você ITERA até ficar bom                                    │
│           │                                                 │
│           ▼                                                 │
│ Você COPIA o código final                                   │
└──────┬──────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│ DE VOLTA no Claude Code                                     │
│                                                             │
│ paginas-lpsg recebe código                                  │
│           │                                                 │
│           ▼                                                 │
│ Roda checklist de retorno (acima)                           │
│           │                                                 │
│           ▼                                                 │
│ Cria 5 variações, religa tracking, configura SEO            │
│           │                                                 │
│           ▼                                                 │
│ Claude Preview pra revisar                                  │
│           │                                                 │
│           ▼                                                 │
│ Vercel deploy → produção                                    │
└─────────────────────────────────────────────────────────────┘
```

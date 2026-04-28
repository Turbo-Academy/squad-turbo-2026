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

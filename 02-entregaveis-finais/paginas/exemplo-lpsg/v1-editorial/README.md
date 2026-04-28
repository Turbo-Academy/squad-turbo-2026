# V1 · Editorial Longform · Marina Costa (cadastro fictício)

Página V1 do LPSG da Marina Costa — arquétipo **Editorial Longform** (The Atlantic · Stripe Press · Aesop · Monocle).

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript 5
- Tailwind CSS v4 (alpha) · Inter (body) + Instrument Serif (headlines)
- Mobile-first · WCAG AA · `prefers-reduced-motion` respeitado

## Como rodar local

```bash
pnpm install
pnpm dev
# abre http://localhost:3000
```

(ou `npm install && npm run dev` / `yarn` se preferir)

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       Fontes (next/font) · lang="pt-BR" · metadata
│   ├── globals.css      Tailwind v4 · CSS vars Editorial Premium
│   └── page.tsx         A V1 inteira (8 blocos do arquétipo)
└── components/
    ├── EditorialHero.tsx     1 · Capa editorial (ticker + frase serif)
    ├── EditorialLead.tsx     2 · Lead em prosa
    ├── PullQuote.tsx         3 · Citação destacada serif gigante
    ├── BigNumber.tsx         5 · Dado embutido (número + 1 frase)
    ├── Notebook.tsx          6 · Caderno de campo (3 lições)
    ├── AuthorBio.tsx         7 · Foto B&W + 2 parágrafos
    └── EditorialCTA.tsx      8 · Convite editorial (link sublinhado)
```

(Bloco 4 — "O ensaio" — fica como prosa em `page.tsx` mesmo, sem componente próprio · é só texto editorial corrido.)

## Pendências humanas (antes de subir produção)

- Foto real da expert em PB editorial (Rembrandt) · trocar `placehold.co` em `AuthorBio.tsx` por foto da Marina
- Auditoria de copy pela Beatriz (copy do time)
- Validar pull quote com a Marina — frase precisa ser dela, não inventada
- Trocar checkout fake `pay.hotmart.com/MPR-INGRESSO-FAKE` pelo real
- OG image editorial (Instrument Serif sobre #0A0A0A · 1200x630)
- Pixel Meta + GA4 quando integrar com `@trafego-lpsg`

## Decisões de design tomadas

1. **Sem botão neon** — CTA é link textual sublinhado dourado champagne (arquétipo proíbe fill)
2. **Hierarquia tipográfica em 3 vozes** — Instrument Serif italic (capa, pull quote), Inter regular (prosa), Inter mono-spaced micro (ticker, garantia)
3. **Quebra de simetria deliberada** — capa alinha à esquerda · big number quebra coluna · notebook usa indentação manuscrita
4. **Foto only no AuthorBio** — capa é tipografia gigante (não foto full-bleed · arquétipo Editorial)
5. **Garantia em rodapé sutil** — micro 11px tracking 0.18em, NÃO selo gigante

## Arquétipo de referência

`/Users/leonardotabari/.claude/skills/paginas-lpsg/references/09-arquetipos-premium.md` — seção "V1 · ARQUÉTIPO EDITORIAL LONGFORM"

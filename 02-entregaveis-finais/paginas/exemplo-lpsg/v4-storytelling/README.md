# LPSG · V4 Storytelling / Timeline · Marina Costa · Mãe Produtiva

> Arquétipo V4 · narrativa cronológica em 5 capítulos · documentário interativo.
> Inspiração: Stripe Atlas · Apple keynote landing · Notion lifecycle.

## Stack
- Next.js 14 · App Router
- TypeScript
- Tailwind CSS v4 (alpha · `@theme` no CSS)
- `next/font` (Instrument Serif + Inter + JetBrains Mono)
- Mobile-first · LCP < 1.5s · WCAG AA · `prefers-reduced-motion`

## Como rodar
```bash
npm install
npm run dev
```

## Paleta
- Dominante 60%: `#FBFAF7` (papel reciclado quente)
- Secundária 30%: `#3A3A3A` (grafite suave)
- Accent 10%: `#FFB300` (amarelo otimista · usado COM MODERAÇÃO · só em data, CTA, ícones de pilares)

## Tipografia
- Títulos narrativos: Instrument Serif (italic em momentos chave)
- Body: Inter (16-18px)
- Datas/labels: JetBrains Mono (uppercase tracking)

## Estrutura de blocos
1. `StoryHero` · 1 frase serif italic · DATA corner top-right · garantia corner bottom
2. `TimelineVertical` · 5 capítulos (2018 → 2026) com linha vertical contínua
3. `ChapterPause` · pull quote isolada
4. `MetodoPilares` · 3 pilares descansam o leitor
5. `ProximoCapitulo` · 5 aulas como continuidade da timeline
6. `CartaFinal` · prosa em primeira pessoa
7. `StoryCTA` · CTA warm com tom de convite humano

## Princípios não-negociáveis aplicados
- Visual de documentário interativo · NÃO infoprodutor
- Amarelo accent USADO COM MODERAÇÃO
- Linha vertical da timeline VISÍVEL e contínua · pontos em destaque
- Mix tipográfico: serif italic / mono / sans
- Respiração ≥ 96px entre capítulos
- Touch target ≥ 56px · WCAG AA contraste ≥ 4.5:1
- Motion coreografada · 600-800ms reveal · cubic-bezier(0.16, 1, 0.3, 1)
- `prefers-reduced-motion` desabilita reveals · mantém conteúdo legível

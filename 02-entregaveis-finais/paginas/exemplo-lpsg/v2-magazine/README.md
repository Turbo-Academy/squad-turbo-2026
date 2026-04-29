# V2 · Bold Magazine Cover · Marina Costa · Mãe Produtiva

Variação 2 da batelada de páginas LPSG da Marina Costa (cadastro fictício de teste).
Arquétipo BOLD MAGAZINE COVER — capa de revista contemporânea (Bloomberg Businessweek · Wired · MIT Tech Review).

## Stack
- Next.js 14.2 (app router) · React 18.3 · TypeScript 5.5
- Tailwind CSS v4-alpha (`@theme` em `globals.css`)
- `next/font/google` carregando Space Grotesk (display 700–900) + Inter (body)
- Mobile-first · WCAG AA · `prefers-reduced-motion` respeitado · LCP < 1.5s

## Paleta · Bold Pop (DESIGN.md)
- Dominante 60% · `#FF5C00` (laranja saturado chapado)
- Secundária 30% · `#FFFFFF` (branco puro)
- Accent 10% · `#0F0F10` (preto · texto crítico)
- Zero gradient · zero glow · zero glassmorphism

## Estrutura (do 09-arquetipos-premium.md · seção V2)
1. **MagazineCover** — 1ª dobra · capa full-bleed · headline display extra-bold · DATA + CTA + GARANTIA
2. **EditionNumber** — "EDIÇÃO 001 · MÃE PRODUTIVA" + manchete
3. **CoverStory** — big number gigante (R$ 200k/mês) + 1 frase de manchete
4. **IssueIndex** — sumário de revista das 5 aulas com paginação editorial
5. **InsideThumbs** — 4 prévias do conteúdo (cartões de capa)
6. **PullQuoteBold** — 2 citações da Marina entre seções
7. **AboutAuthor** — foto da Marina + parágrafo bold + Instagram
8. **SubscribeCTA** — CTA "subscribe to next issue"

## Comandos
```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Notas operacionais
- Foto do expert: placeholder `https://placehold.co/1200x1500/FF5C00/FFFFFF?text=Marina`. Substituir por foto real (capa de revista · enquadramento vertical 4:5 · 1200×1500 mín.).
- Todos os números e copy vêm do cadastro `_private/cadastro-teste-ficticio.yaml` (Marina Costa).
- A página NUNCA comunica formato (sem "ao vivo" / "gravada") — regra do PRODUCT.md.
- CTA aponta pro checkout fake `https://pay.hotmart.com/MPR-INGRESSO-FAKE`.

# V3 · Interativo / Calculadora · Marina Costa (cadastro fictício)

Página V3 do LPSG da Marina Costa — arquétipo **Interativo / Calculadora**
(Linear · Vercel · Stripe pricing · NerdWallet · pricing pages SaaS premium).

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript 5
- Tailwind CSS v4 (alpha) · Inter (sans) + JetBrains Mono (números/inputs)
- Mobile-first · WCAG AA · `prefers-reduced-motion` respeitado
- Motion energy: REATIVA (Emil Kowalski · 100-200ms input · 250ms transição · ease-out)

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
│   ├── layout.tsx         next/font Inter + JetBrains Mono · lang="pt-BR"
│   ├── globals.css        Tailwind v4 · CSS vars Interativo (graphite + ciano)
│   └── page.tsx           Composição linear das 8 seções
└── components/
    ├── HeroTecnico.tsx        1 · Hero + DATA badge + CTA pricing + garantia + stat panel
    ├── Calculadora.tsx        2 · 3 sliders ("use client") · cálculo em tempo real
    ├── ComparativoTabela.tsx  3 · Tabela Antes/Depois estilo Stripe pricing
    ├── ComoFunciona.tsx       4 · 4 cards numerados + trilha conectora
    ├── StackAulas.tsx         5 · Feature list com checks SVG
    ├── LiveCounter.tsx        6 · "use client" · contador 23/50 com jitter sutil
    ├── FAQTecnico.tsx         7 · "use client" · accordion (botão + aria-expanded)
    └── PricingCTA.tsx         8 · Pricing card final + features + CTA repetido
```

## Pendências humanas (antes de subir produção)

- Trocar checkout fake `pay.hotmart.com/MPR-INGRESSO-FAKE` pelo link real Hotmart
- Validar números do comparativo (faturamento médio, horas, stress) com a Marina · auditoria precisa estar disponível
- Substituir o ícone OG / hero placeholder se for usar imagem (atualmente é tipografia + stat panel)
- Auditoria de copy pela Beatriz · principalmente FAQ
- Pixel Meta + GA4 quando integrar com `@trafego-lpsg`
- Validar contador real `23/50` com a estrutura · trocar pelo número honesto da edição quando entrar a captação
- OG image técnica (Inter + JetBrains Mono · 1200x630 · graphite + ciano)
- Caso vire produção · puxar contador via API (`/api/counter`) e remover o jitter mock

## Decisões de design tomadas (≤5)

1. **Sliders custom-styled (CSS puro · sem libs)** — track ciano com fill % via CSS var, thumb branco com borda ciano · feedback de toque em 120ms.
2. **Hero em duas colunas com stat panel** — cumpre obrigatoriedade da 1ª dobra (DATA badge 44px + CTA pricing + garantia) e já entrega prova quantitativa antes do scroll.
3. **Cálculo da calculadora transparente** — fórmula explicada no card de output (sem black-box) · cap 5x · disclaimer de método · `aria-live` no resultado.
4. **Cards numerados em grid de 4 com trilha conectora** — variação intencional ao "rounded-2xl shadow-lg border": borda única do container · separadores 1px · hover muda cor da linha (não eleva).
5. **Live counter com jitter sutil + `prefers-reduced-motion`** — sobe 1 vaga raramente para parecer ativo · usuários reduced-motion veem valor estável + texto sem pulse.

## Arquétipo de referência

`/Users/leonardotabari/.claude/skills/paginas-lpsg/references/09-arquetipos-premium.md`
— seção "V3 · ARQUÉTIPO INTERATIVO / CALCULADORA"

## Anti-patterns evitados

- Zero gradient mesh · zero glow falso · ciano só como accent reservado
- Cards têm 3 variantes (`card-tech` · `card-tech-flat` · `card-tech-accent`) · não clone único
- Botão pricing-style com sub-texto · não "Get Started" azul `#3B82F6`
- Headlines com pausa dramática (ponto-final dramático · vírgula longa) · não promessa publicitária
- "AO VIVO"/"GRAVADA" nunca aparece no público (regra PRODUCT.md) · "live counter" é só nome técnico interno
- CTA imperativo "Quero aprender agora →" · não "GARANTE A SUA VAGA"
- Mono em todos os números · `font-variant-numeric: tabular-nums`
- Touch targets ≥ 56px no CTA · sliders thumb 22px com hit-area expandida via padding do container

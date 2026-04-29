# V5 · Manifesto / Contrarian Outlier · Marina Costa

Variação **Outlier** da batelada de 5 páginas LPSG da Marina Costa. É a página que **se destaca das outras 4** — cor inesperada pro nicho, quebra deliberada de regras visuais, polariza, gera DM, gera screenshot enviado pra amigo.

> Inspiração: Liquid Death · Glossier · Oatly · brutalist web · sites de manifesto político.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind v4-alpha (`@tailwindcss/postcss`)
- `next/font/google` (Inter + Instrument Serif Italic)
- Mobile-first · LCP < 1.5s · WCAG AA · `prefers-reduced-motion`

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Estrutura

```
v5-manifesto/
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.mjs
├── README.md
├── public/
└── src/
    ├── app/
    │   ├── layout.tsx          (next/font Inter + Instrument Serif Italic · pt-BR)
    │   ├── globals.css         (Tailwind v4 @theme · paleta pink/preto/branco · brutalist motion)
    │   └── page.tsx
    └── components/
        ├── ManifestoHero.tsx       1 · 100vh frase gigante + 1ª dobra obrigatória
        ├── SeteOpinioes.tsx        2 · 7 afirmações brutalist numeradas
        ├── ProvasDuras.tsx         3 · 4 números secos · auditoria
        ├── DeveIgnorar.tsx         4 · filtragem agressiva (negativa)
        ├── DeveFicar.tsx           5 · filtragem positiva (perfil ideal)
        ├── Assinatura.tsx          6 · foto pequena + linha brutalist
        └── ManifestoCTA.tsx        7 · convite filtrado · 2 CTAs manifesto
```

## Paleta

```yaml
dominante_60:  "#FF2E93"   # rosa pink · cor inesperada pro nicho de produtividade feminino
secundaria_30: "#0A0A0A"   # preto · âncora visual
accent_10:     "#FFFFFF"   # branco puro · pra CTA respirar
textura:       ZERO · cor chapada · risco controlado
```

## Tipografia

- **Display:** Instrument Serif Italic (fallback: Migra · Domaine · Georgia)
- **Body/Caps:** Inter Medium/Bold/Black (500 · 700 · 800 · 900)
- **Mix brutalist:** italic + caps bold na mesma frase

## 1ª dobra obrigatória (LPSG)

| Elemento | Implementação |
|---|---|
| **DATA** | `11.05` em num-brutalist gigante · pílula preta/pink · rotação -3° |
| **CTA** | "Quero aprender agora →" · pílula brutalist com hover transform + drop shadow offset |
| **GARANTIA** | Texto direto logo abaixo do CTA · "Garantia incondicional · 7 dias · 100% do valor de volta · sem pergunta." |

## Princípios não-negociáveis aplicados

- [x] Pink #FF2E93 dominante (≥ 60% em ManifestoHero, DeveFicar, ManifestoCTA)
- [x] Visual de manifesto/coluna de opinião · NÃO infoprodutor BR · NÃO SaaS genérico
- [x] Cor inesperada (rosa pink em nicho que costuma usar rosé/dourado)
- [x] Tipografia experimental (italic serif + bold caps mix · brutalist)
- [x] Composição com grid quebrado deliberado (rotação ±3-8° em data/foto/símbolos)
- [x] Foto da Marina menor (~30% da área no bloco Assinatura)
- [x] Numeração brutalist (01. 02. 03. ... 07.) em destaque
- [x] ZERO sedução · ZERO promessa publicitária · só posicionamento e filtro
- [x] NÃO usa "AO VIVO" / "GRAVADA"
- [x] CTA imperativo "Quero aprender agora →" em estilo manifesto (pílula brutalist + link)
- [x] Touch target ≥ 64px · WCAG AA contraste ≥ 4.5:1 · `prefers-reduced-motion`
- [x] Motion quebrada (Jhey Tompkins) · ticker rodando 32s · pulso suave · bounce no CTA
- [x] Símbolos gigantes ✕ e ✓ rotacionados como elemento gráfico

## Notas

- Imagens usam placeholder `https://placehold.co/1200x1500/FF2E93/0A0A0A?text=Marina`
- `npm install` não foi executado — rodar manualmente na máquina de destino

## Pendências humanas

- Substituir foto placeholder por foto real da Marina (sem retoque · cenário cotidiano · iluminação natural)
- Confirmar URL final do checkout Hotmart (atualmente `https://pay.hotmart.com/MPR-INGRESSO-FAKE`)
- Revisar copy das 7 opiniões com a Marina (tom direto pode ter ajuste de palavra)
- Validar com avatar (mãe empreendedora 30-45) se a polarização funciona ou queima ponte demais
- Decidir se mantém o ticker rodando ou substitui por linha estática (depende de Lighthouse INP)

# Design

> Seed pre-implementation. Captura a direção visual da stack Squad Turbo LPSG 4.0 antes de existir um projeto Next.js compilado. Re-rodar `$impeccable document` quando uma das 5 variações estiver implementada · pra capturar tokens reais.

## Visual Theme

**Posição:** stack multi-arquétipo. Cada batelada de página ou criativo da Turbo Academy carrega 5 variações **drasticamente distintas entre si** — Editorial Premium · Bold Pop · Raw / Honest · Dark Cinema · Outlier / Contrarian. A unidade vem do método (LPSG · ingresso pago · 5+1 aulas) · não da estética. A diversidade é o ativo.

**Sentimento global:** confiança que vem de já ter feito. Nada decorativo. Tudo com função. Foto real do expert sobrepõe stock. Número grande sobrepõe adjetivo. Pausa dramática sobrepõe exclamação.

## Color Palettes

### Paleta 1 · Editorial Premium

```yaml
purpose:        Autoridade · ticket alto · revista de negócios
dominant_60:    "#0A0A0A"    # preto profundo · fundo
secondary_30:   "#F4F1EA"    # off-white aquecido · texto principal
accent_10:      "#D4AF37"    # dourado champagne · número e CTA
texture:        Grão sutil · papel imprensa · sem ruído digital
references:     The Atlantic · Stripe Press · Aesop · Monocle
```

### Paleta 2 · Bold Pop

```yaml
purpose:        Choque visual · público frio · scroll rápido
dominant_60:    "#FF5C00"    # cor primária saturada chapada (ajustável por projeto)
secondary_30:   "#FFFFFF"    # branco puro
accent_10:      "#0F0F10"    # preto · texto crítico
texture:        Flat · zero gradient · zero textura · vetor limpo
references:     Bloomberg Businessweek · Wired · IKEA editorial · Vercel
```

### Paleta 3 · Raw / Honest

```yaml
purpose:        Confissão · UGC-feel · primeira pessoa
dominant_60:    "#FBFAF7"    # bege quase branco · papel reciclado
secondary_30:   "#3A3A3A"    # grafite suave · texto
accent_10:      "{COR_PRIMARIA_70%}"   # cor primária do projeto a 70% saturação
texture:        Grão visível · iluminação natural · sem retoque
references:     Notion blog · Stripe Press · Substack
```

### Paleta 4 · Dark Cinema

```yaml
purpose:        Narrativa em 3 atos · transformação
dominant_60:    "#0F1115"    # preto azulado profundo
secondary_30:   "#1F2937"    # cinza-azul · sombra
accent_10:      "{COR_PRIMARIA_GLOW}"  # primária com bloom/rim light
texture:        Vinheta · profundidade rasa · luz lateral cinematográfica
references:     Apple keynote · Tesla launch · Christopher Nolan stills
```

### Paleta 5 · Outlier (DESTAQUE)

> Cor INESPERADA pro nicho. Pattern interrupt deliberado. NÃO compartilha cor com as outras 4 paletas da mesma batelada.

```yaml
purpose:        Polarização · re-targeting · screenshot enviado pra DM
options_by_niche:
  business:     "#FF2E93"   # rosa pink
  saude:        "#FF6B00"   # laranja acid
  educacao:     "#7C3AED"   # roxo elétrico
  beleza:       "#00D67D"   # verde neon
  tech:         "#FFD500"   # amarelo Pantone
secondary_30:   "#0A0A0A"   # preto · âncora visual
accent_10:      "#FFFFFF"   # branco puro
texture:        Cor chapada · zero textura · risco de saturação Meta (controlado)
references:     Liquid Death · Glossier · Oatly · brutalist web
```

### Tokens semânticos (cross-paleta)

```yaml
text_primary:        depende da paleta · contraste WCAG ≥ 4.5:1 sempre
text_muted:          depende da paleta · contraste ≥ 3:1
border:              opacidade reduzida da secundária (ex: rgba(0,0,0,0.08))
focus_ring:          accent da paleta · outline 2px · offset 2px
state_error:         "#E53935"  # vermelho consistente entre paletas
state_success:       "#10B981"  # verde consistente entre paletas
```

## Typography

### Famílias

```yaml
serif_editorial:     "Instrument Serif"          # paleta 1, 4 (headlines longas, pull quotes)
                     fallback: "Migra", "Domaine Display", Georgia, serif

sans_body:           "Inter"                     # corpo geral · todas as paletas
                     fallback: -apple-system, BlinkMacSystemFont, sans-serif
                     # Inter é PROIBIDA como única fonte · sempre acompanhada

sans_display_bold:   "Space Grotesk"             # paleta 2 (Bold Pop) · headlines
                     fallback: "Druk Wide", "Söhne Breit", sans-serif
                     weights_used: 700, 800, 900

mono:                "JetBrains Mono"            # paleta 3 (Raw) · números, código
                     fallback: "IBM Plex Mono", "Fira Code", monospace

display_experimental: "Migra Italic" ou "Söhne Breit"  # paleta 5 (Outlier)
                     fallback: "Larsseit", system serif
```

### Escala (mobile-first · ajusta no md+)

```yaml
hero_display:        96px / line-height 0.95 / weight 600 / tracking -0.04em   # paleta 1, 5
hero_bold:           80px / line-height 1.0 / weight 800 / tracking -0.02em    # paleta 2
hero_cinema:         72px / line-height 1.05 / weight 500 / tracking -0.02em   # paleta 4

h1:                  48px / line-height 1.1
h2:                  36px / line-height 1.2
h3:                  24px / line-height 1.3
h4:                  20px / line-height 1.4

body_large:          18px / line-height 1.6     # leitura editorial · prosa longa
body:                16px / line-height 1.55    # default · NUNCA abaixo (mobile zoom)
body_small:          14px / line-height 1.5     # rodapé, captions
mono_data:           14px / line-height 1.4     # números grandes em paleta 3
micro:               12px / line-height 1.4     # disclaimers · WCAG limite
```

### Regras de hierarquia

- Mínimo **2 pesos diferentes** + **3 tamanhos diferentes** por peça
- Mínimo **1 detalhe não-default**: tracking customizado, leading customizado, ou mix de famílias
- Headlines NUNCA começam com "Transforme sua...", "Descubra como...", "O segredo de..."
- Pontuação real: vírgula longa, travessão, ponto-final dramático

## Components

### Buttons (anti-`opacity-90`)

**Estados obrigatórios:** default · hover (transform + sombra real, não só `opacity`) · active (escala 0.98) · focus-visible (outline 2px da accent · offset 2px) · disabled (50% opacidade · `cursor-not-allowed`).

**Variantes por paleta:**
- Editorial → link sublinhado · ou border thin sem fill
- Bold Pop → fill sólido · cor saturada · sem gradient · sem glow
- Raw → texto + acento pequeno · informal
- Cinema → border accent + texto · fill apenas em hover
- Outlier → texto-link grande · sublinhado · ou cor inesperada chapada

**Touch target ≥ 56px** sempre (mobile).

### Cards (anti-`rounded-2xl shadow-lg border` clone)

- Variação obrigatória entre cards na mesma página
- Pelo menos 1 dos seguintes: borda assimétrica, sombra direcional, sem sombra mas com gap, ou full-bleed sem container
- Padding pode variar por importância (não tudo `p-6`)
- Em paletas Editorial/Cinema, cards podem ser texto-only sem container visível

### Forms (ficha de interesse 11 etapas)

- Inputs ≥ 56px de altura
- Label acima do input · 14px · weight 500
- Help text abaixo · 14px · `text-muted` (NÃO usar placeholder como label — ruim pra a11y)
- Estado erro: borda `state_error` + mensagem 14px abaixo
- Foco visível: outline 2px da accent · offset 2px

### Pull quote (paletas Editorial, Cinema)

- Tipografia 2x maior que o corpo · serif italic
- Sem aspas ornamentais · texto fala por si
- Padding generoso (≥ 96px vertical)

### Big number (paletas Editorial, Bold Pop, Raw)

- 96-144px · weight 600-800 dependendo da paleta
- Acompanhado de 1 frase de contexto (≤ 12 palavras)
- Cor accent reservada pro número · não pro contexto

## Layout

**Grid:** 12 colunas · gap 24px desktop · 16px mobile · margin lateral 24-32px mobile · 80-120px desktop.

**Largura máxima de leitura:** 65 caracteres (ch unit) · ≈ 720px em corpo 18px. Editorial pode ir até 80ch em prosa longa.

**Ritmo vertical baseline:** 8px. Espaçamentos múltiplos de 8 (8 · 16 · 24 · 32 · 48 · 64 · 96 · 128).

**Quebras de simetria:** cada arquétipo precisa de pelo menos 1 ponto de quebra deliberada (texto deslocado · imagem invadindo coluna · pull quote ocupando 2 colunas · etc).

**Mobile-first:** layout funciona primeiro em 375px (iPhone SE) · adiciona complexidade no md (768) e lg (1024).

## Motion

> `prefers-reduced-motion` respeitado em TODAS as variações. Versão estática equivalente sem perda de conteúdo.

### Energia por arquétipo (lentes design-motion-principles)

```yaml
v1_editorial_longform:
  energy:           Lenta · Jakub Krehel (polimento sutil)
  duration_default: 400-600ms
  easing:           cubic-bezier(0.32, 0.72, 0, 1)   # ease-out smooth
  use:              Fade-in suave em scroll · pull quote rise · imagens parallax sutil
  avoid:            Animações lúdicas · efeitos chamativos

v2_bold_magazine:
  energy:           Snappy · Emil Kowalski (velocidade com propósito)
  duration_default: 150-250ms
  easing:           cubic-bezier(0.4, 0, 0.2, 1)     # ease-out crisp
  use:              Hover snappy · transição entre seções rápida · zero overshoot
  avoid:            Easings com bounce · durações > 300ms

v3_interativo:
  energy:           Reativa · Emil Kowalski (microinterações imediatas)
  duration_default: 100-200ms para input feedback · 250ms para transições
  easing:           ease-out
  use:              Calculadora atualizando em tempo real · tabela hover · slider responsivo
  avoid:            Delay perceptível em input · skeleton loaders longos

v4_storytelling_timeline:
  energy:           Coreografada · mix Jakub + Emil
  duration_default: 600-800ms para reveal · 200ms para hover
  easing:           cubic-bezier(0.16, 1, 0.3, 1)    # ease-out expo (cinematográfico)
  use:              Scroll-driven timeline · pontos da timeline iluminam em sequência · fade entre capítulos
  avoid:            Tudo aparecer ao mesmo tempo · scroll jacking forçado

v5_outlier_manifesto:
  energy:           Quebrada · Jhey Tompkins (experimentação)
  duration_default: variável · pode usar 800ms+ deliberadamente
  easing:           pode quebrar regra (bounce, elastic, ease-in-out forte)
  use:              Tipografia rotacionada · ticker rolando · cor pulsando · grid quebrado
  avoid:            Movimento gratuito sem statement
```

### Princípios cross-arquétipo

- **Movimento serve à hierarquia** · NUNCA puro decorativo
- **Stagger > big bang** · sequência prefere a tudo de uma vez
- **Micro-interações sempre** em botões, links, inputs (NÃO opacity-90 · usar transform)
- **`AnimatePresence`** em UI condicional · nada some sem transição
- **Reduced-motion fallback obrigatório** · página estática válida também

## Iconography

- **NUNCA** misturar Lucide outline com Heroicons solid sem motivo
- Estilo único por projeto (preferência: Lucide line · 1.5px stroke · 24px default)
- **Emojis NÃO são ícones** em produto/marca sério — só SVG
- Quando precisar de ícone com personalidade · custom SVG > biblioteca

## Imagery

- **Foto real do expert** sobrepõe stock photo · sem exceção
- Iluminação natural ou rim light cinematográfica · NÃO chapada de softbox
- Cenário cotidiano (mesa de trabalho · cozinha · escritório real) · NÃO fundo branco corporativo
- Tratamento por paleta:
  - Editorial → preto-e-branco editorial
  - Bold Pop → cor saturada · enquadramento de capa de revista
  - Raw → sem retoque · grão visível
  - Cinema → rim light · profundidade rasa · vinheta
  - Outlier → pode ser experimental (foto invertida, sem foto, ou tipografia ocupando o frame)

## Accessibility

- **WCAG AA** · contraste texto ≥ 4.5:1 · UI elements ≥ 3:1
- **`prefers-reduced-motion`** respeitado · versão estática equivalente
- **Foco visível** sempre · outline 2px accent · offset 2px · NÃO `outline: none` sem alternativa
- **Touch target ≥ 56px**
- **Fonte mínima 16px**
- **Hierarquia semântica** correta (h1 único · h2-h6 sem pular níveis)
- **Alt text descritivo** em imagens não-decorativas (especialmente foto do expert · é autoridade · não decoração)
- **`lang="pt-BR"`** em `<html>`

## Anti-patterns (auto-rejeitar)

- `bg-white` + `bg-gray-50` como única estratégia de fundo
- `rounded-2xl shadow-lg border` em todos os cards
- Inter como única fonte
- Botão azul `#3B82F6` "Get Started"
- `gap-4` / `p-6` em tudo
- Hero centralizado + 3 cards alinhados + CTA · sem variação
- `text-sm` / `text-xl` como única hierarquia tipográfica
- `transition: all 0.3s` indiscriminado
- Glassmorphism gratuito (sem motivo de design)
- Gradient mesh roxo→rosa→azul sem propósito
- Emojis 🚀🔥💰 enfileirados como hierarquia visual
- "Lorem ipsum" / "Your tagline here" no committed
- Countdown timer · "ÚLTIMAS VAGAS!" · selo OFICIAL como medalha
- 3 features alinhadas com ícone circular + título + 2 linhas (template AI clássico)

---

**Última atualização:** 2026-04-28
**Stack Picasso ativa:** `frontend-design` (Anthropic) · `impeccable` (Paul Bakaus) · `design-motion-principles` (Kyle Zantos) · auditor `picasso-auditor-lpsg`

**Próximo passo:** quando V1 (Editorial) ou qualquer das 5 variações estiver implementada em Next.js real · re-rodar `$impeccable document` para capturar tokens reais (`tailwind.config.ts`, CSS variables, `next/font` configs).

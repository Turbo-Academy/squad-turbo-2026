# 01 · Stack e Deploy

> Stack fixo do LPSG: **Next.js 14 + TypeScript + Tailwind CSS + Cloudflare Pages** (export estático). Sem inventar moda.

---

## 🎯 Por que esse stack?

| Critério | Por que Next.js + Tailwind + Cloudflare Pages |
|---|---|
| **Performance** | LCP < 1.5s out-of-the-box · página estática (HTML pronto) servida da rede da Cloudflare |
| **Mobile-first** | Tailwind facilita responsivo · Next.js otimiza bundle por rota |
| **Deploy em 1 comando** | `npx wrangler pages deploy out` → produção. Sem servidor, sem dor |
| **A/B testing por rota** | 5 rotas `/v1`…`/v5`, cada anúncio aponta pra uma · sem rebuild pra trocar |
| **SEO + Open Graph** | Metadata API do Next 14 + sharing automatic |
| **Analytics integrado** | Cloudflare Web Analytics · sem cookie · mede LCP, INP e CLS |
| **HTTPS automático** | Cert grátis com auto-renew |
| **CDN global** | Rede da Cloudflare (CDN global, HTTPS automático) |
| **Preview por branch** | Cada branch vira URL única (`<branch>.<projeto>.pages.dev`) — fácil pra validar antes de subir |

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
Hospedagem:       Cloudflare Pages (export estático · pasta out/)
Domínio:          Cloudflare DNS → Cloudflare Pages
Tracking:         Meta Pixel + CAPI · Google Tag Manager · GA4
Analytics:        Cloudflare Web Analytics
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
  output: "export",      // `npx next build` gera a pasta out/ (é ela que sobe no Cloudflare Pages)
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,   // export estático não tem otimizador de imagem: suba WebP/AVIF já otimizados
  },
};

export default nextConfig;
```

> Em export estático o Next **não** roda `redirects()` nem `headers()` do `next.config`. O redirect da home vai num arquivo `public/_redirects` (o build copia pra `out/`):

```
/  /v1  302
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

## 🚢 Deploy no Cloudflare Pages

### Primeira vez

1. Cria conta: [dash.cloudflare.com](https://dash.cloudflare.com) (o plano grátis resolve)
2. Na raiz do projeto, cria o projeto Pages (uma vez só):

```bash
npx wrangler pages project create {projeto} --production-branch main
```

3. Gera o build e publica:

```bash
npx next build
npx wrangler pages deploy out --project-name {projeto} --branch main
```

4. A URL `https://{projeto}.pages.dev` está no ar

> **Opcional · deploy automático no `git push`:** Cloudflare → Workers & Pages → Create → Pages → conectar o repositório Git. Build command `npx next build`, build directory `out`.

### Variáveis de ambiente

Configurar em `Workers & Pages → projeto → Settings → Variables and Secrets`:

```
NEXT_PUBLIC_META_PIXEL_ID         = {SEU_PIXEL_ID}
NEXT_PUBLIC_GTM_ID                = GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID                = G-XXXXXXXXXX
META_CAPI_TOKEN                   = {SEU_CAPI_TOKEN}        # secret · não NEXT_PUBLIC_
NEXT_PUBLIC_CHECKOUT_URL          = https://pay.hotmart.com/...
```

> As `NEXT_PUBLIC_*` entram no build (são públicas, vão no HTML). Segredo (token Meta/Hotmart) **nunca** é `NEXT_PUBLIC_`: vai como segredo do projeto e só é lido por Pages Functions (`functions/api/<nome>.js`, ver `08-ficha-interesse.md`):

```bash
npx wrangler pages secret put META_CAPI_TOKEN --project-name {projeto}
```

### Domínio customizado

1. **Primeiro** associa o domínio no projeto: `Workers & Pages → projeto → Custom domains → Set up a domain`
2. **Depois** aponta o DNS: `CNAME lp → {projeto}.pages.dev` (zona já na Cloudflare: o próprio painel cria o registro)
3. HTTPS automático

> CNAME criado **antes** de associar o domínio no projeto = domínio não resolve (erro 522).

### Branches e preview

| Branch | URL | Função |
|---|---|---|
| `main` | `lp.{dominio}.com.br` | Produção |
| `dev` | `https://dev.{projeto}.pages.dev` | Staging |
| `feature-x` | `https://feature-x.{projeto}.pages.dev` | Preview |

```bash
npx wrangler pages deploy out --project-name {projeto} --branch feature-x
```

> Cada branch vira uma URL preview (minúsculas, caractere fora de letra/número vira hífen) — manda pro time validar antes de subir pra `main`.

---

## 🔧 A/B testing (por rota)

O A/B do LPSG é por **rota**, não por configuração em runtime:

1. As 5 variações já existem como rotas `/v1`…`/v5`
2. Cada anúncio aponta pra uma rota
3. Trocar a variação principal = trocar a linha do `public/_redirects` e publicar de novo
4. Precisa dividir tráfego na borda (mesma URL, variações diferentes)? Pages Functions: arquivo `functions/_middleware.js` exportando `onRequest`

---

## 📊 Cloudflare Web Analytics

Ativa grátis em `Workers & Pages → projeto → Metrics → Enable (Web Analytics)`. Não precisa instalar pacote nem mexer no `layout.tsx`. Sem cookie e sem localStorage (sem banner de consentimento).

Métricas que vão aparecer no painel da Cloudflare:
- Page views por rota (`/v1`, `/v2`...)
- Top pages
- Top referrers
- LCP/INP/CLS (Core Web Vitals)

---

## 🚫 O que NÃO usar

| Tecnologia | Por quê |
|---|---|
| **WordPress / Elementor / similares** | LCP > 4s · plugins inflam bundle · ranking SEO ruim · vetor de ataque |
| **Bootstrap** | Bundle gigante · CSS antigo · Tailwind mais flexível |
| **Material UI / Chakra** | 200KB+ de runtime · não vale pra LP |
| **GSAP** | Pesado · use Framer Motion ou animação CSS pura |
| **Imagens não otimizadas** | Sempre WebP/AVIF (converter antes de subir) via `next/image` |
| **Vídeo no hero** | Adia LCP · LPSG não usa VSL no topo |
| **Pop-ups de carregamento** | Meta Ads pode bloquear |

---

## 📋 Checklist de setup

- [ ] Repo Git criado (GitHub/GitLab/Bitbucket)
- [ ] `pnpm create next-app` rodado
- [ ] `next.config.ts` com `output: "export"` e `images.unoptimized` · `public/_redirects` com `/ → /v1`
- [ ] Tailwind tokens definidos (cores, fontes)
- [ ] Fontes Inter + Manrope via `next/font/google`
- [ ] `.env.local` com todas as variáveis (não commitar)
- [ ] Projeto Pages criado e deploy inicial (`wrangler pages deploy out`) concluído
- [ ] Domínio customizado apontado
- [ ] Cloudflare Web Analytics ativo
- [ ] Pixel + GTM + GA4 instalados e validados
- [ ] Preview por branch testado (`--branch` vira URL)

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

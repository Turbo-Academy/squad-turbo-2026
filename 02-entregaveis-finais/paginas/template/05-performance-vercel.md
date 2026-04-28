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

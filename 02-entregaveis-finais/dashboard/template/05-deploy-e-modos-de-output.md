# 05 · Deploy e modos de output — Dashboard LPSG v2

> 2 modos · uma codebase · zero retrabalho.

---

## 🎯 Os 2 modos

| | Modo A · Web app (Cloudflare Pages) | Modo B · HTML standalone |
|---|---|---|
| **Quando usar** | Time todo · sync ao vivo · APIs | Aluno · offline · backup |
| **Setup** | git clone + `wrangler pages deploy` | duplo-click no .html |
| **Atualização** | Auto (SWR 30s) | Manual (importa XLSX) |
| **Integrações** | Meta · Hotmart · GA4 · Sheets | XLSX manual ou Sheets público |
| **Tamanho** | 150 KB inicial · lazy-loaded | ~250 KB (tudo inline) |
| **Tempo de build** | <30s (`npx next build`) | ~10s (build:standalone) |

> **Mesma codebase.** O script `build-standalone.mjs` empacota o app em HTML único.

---

## 🚀 Modo A — Web app (Cloudflare Pages)

### Pré-requisitos

- Node 20.x · pnpm
- Conta Cloudflare (o plano grátis resolve)
- Repositório Git (GitHub · GitLab · Bitbucket)

### Setup

#### 1. Clonar template

```bash
gh repo clone turbo-academy/dashboard-lpsg-turbo-template my-dash
cd my-dash
pnpm install
```

#### 2. Configurar variáveis

```bash
cp .env.local.example .env.local
```

Editar `.env.local`:

```bash
# Projeto (obrigatório)
NEXT_PUBLIC_NOME_ESPECIALISTA="Leo Tabari"
NEXT_PUBLIC_SIGLA="LPS"
NEXT_PUBLIC_EDICAO="01/26"

# Fonte de dados (escolher 1+ modos)
# Modo 1 — Planilha local (default)
NEXT_PUBLIC_DATA_MODE=xlsx

# Modo 2 — Google Sheets
NEXT_PUBLIC_SHEETS_ID=
NEXT_PUBLIC_SHEETS_TAB="Dados dos Eventos"

# Modo 3 — Meta Ads (opcional · server-only · em produção vai por wrangler pages secret put)
META_ADS_TOKEN=
META_AD_ACCOUNT_ID=

# Modo 4 — Hotmart (opcional · server-only)
HOTMART_CLIENT_ID=
HOTMART_CLIENT_SECRET=
HOTMART_PRODUCT_ID=

# Modo 5 — GA4 (opcional)
GA4_PROPERTY_ID=
GCP_SERVICE_ACCOUNT_JSON=

# Modo 6 — YouTube (opcional)
YOUTUBE_API_KEY=
YOUTUBE_LIVE_VIDEO_IDS=
```

#### 3. Rodar local

```bash
pnpm dev          # http://localhost:3000
```

#### 4. Export estático + Pages Functions

O app sobe como site estático. `next.config.ts` com `output: "export"`; `npx next build` gera a pasta `out/`.

As chamadas server-only (Meta · Hotmart · GA4) não ficam no Next.js: viram Pages Functions em `functions/api/<nome>.js` na RAIZ do projeto (fora de `out/`), exportando `onRequest`. Cada função responde em `/api/<nome>` (ex.: `functions/api/meta-ads.js` → `/api/meta-ads`).

Segredos em produção (nunca com prefixo `NEXT_PUBLIC_`):

```bash
npx wrangler pages secret put META_ADS_TOKEN --project-name <projeto>
npx wrangler pages secret put HOTMART_CLIENT_SECRET --project-name <projeto>
npx wrangler pages secret put GCP_SERVICE_ACCOUNT_JSON --project-name <projeto>
```

> Ou pelo painel: projeto → Settings → Variables and Secrets. As `NEXT_PUBLIC_*` entram no build (são públicas).

#### 5. Deploy Cloudflare Pages

```bash
# Uma vez: criar o projeto
npx wrangler pages project create <projeto> --production-branch main

# A cada publicação (da raiz do projeto)
npx next build
npx wrangler pages deploy out --project-name <projeto> --branch main
```

Sai em `https://<projeto>.pages.dev`.

> Opcional: deploy automático no `git push`. Cloudflare → Workers & Pages → Create → Pages → conectar o repositório Git; build command `npx next build`, build directory `out`.

#### 6. Configurar domínio

Workers & Pages → projeto → Custom domains → Set up a domain
- `dash.turbo.academy` (ou subdomínio do projeto)

> PRIMEIRO associa o domínio no projeto, DEPOIS o CNAME `dash → <projeto>.pages.dev`. CNAME antes da associação = domínio não resolve (erro 522). Se a zona já está na Cloudflare, o próprio painel cria o registro. HTTPS automático.

---

## 📦 Modo B — HTML standalone

### Quando usar

- Compartilhar com aluno (sem dor de cabeça de servidor)
- Apresentação offline (Wi-Fi do hotel não funciona)
- Backup (funciona em qualquer máquina · qualquer browser)

### Setup

#### 1. Build

```bash
# No projeto SaaS
pnpm build:standalone
```

Isso gera:

```
dist/
└── dashboard-lpsg-turbo.html        # ~250 KB · tudo inline
```

#### 2. Distribuir

Mandar o `dashboard-lpsg-turbo.html` por email · Google Drive · Telegram.

#### 3. Aluno usa

1. Duplo-click no `.html`
2. Abre no browser (Chrome · Safari · Firefox · Edge)
3. Importa planilha XLSX (drag & drop)
4. Dashboard funciona offline

> **Bonus:** Se o aluno tiver Python, pode rodar `python3 -m http.server 8000` na pasta e ter sync com Sheets ao vivo.

---

## 🔧 Script `build-standalone.mjs`

### Como funciona

```javascript
// scripts/build-standalone.mjs
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';

// 1. Bundle TUDO em um JS único
await build({
  entryPoints: ['src/app/page.tsx'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'dist/bundle.js',
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.NEXT_PUBLIC_DATA_MODE': '"xlsx"',  // standalone só usa XLSX
  },
});

// 2. Bundle CSS Tailwind
await build({
  entryPoints: ['src/app/globals.css'],
  bundle: true,
  minify: true,
  outfile: 'dist/styles.css',
});

// 3. Inline tudo num HTML
const js = readFileSync('dist/bundle.js', 'utf8');
const css = readFileSync('dist/styles.css', 'utf8');
const xlsxLib = readFileSync('node_modules/xlsx/dist/xlsx.full.min.js', 'utf8');

const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Dashboard LPSG · {SIGLA}</title>
  <style>${css}</style>
</head>
<body>
  <div id="root"></div>
  <script>${xlsxLib}</script>
  <script type="module">${js}</script>
</body>
</html>
`;

writeFileSync('dist/dashboard-lpsg-turbo.html', html);
console.log('✅ Standalone gerado: dist/dashboard-lpsg-turbo.html');
```

### Resultado

| Arquivo | Tamanho |
|---|---|
| `dashboard-lpsg-turbo.html` | ~250 KB |
| Tempo de carregamento | <500ms (offline) |
| Compatibilidade | Chrome 100+ · Safari 15+ · Firefox 100+ · Edge 100+ |

---

## 🔐 Segurança e secrets

### Modo A (Web)

| Variável | Lado | Como expor |
|---|---|---|
| `META_ADS_TOKEN` | Server-only | Pages Function (`functions/api/`) intermediação · `wrangler pages secret put` |
| `HOTMART_CLIENT_SECRET` | Server-only | Pages Function · `wrangler pages secret put` |
| `GCP_SERVICE_ACCOUNT_JSON` | Server-only | Pages Function · `wrangler pages secret put` |
| `NEXT_PUBLIC_SHEETS_ID` | Cliente OK | Sheets é público |
| `YOUTUBE_API_KEY` | Cliente OK | Restringir ao domínio na Cloud Console |

> Tudo que começa com `NEXT_PUBLIC_` vai pro browser. **Nunca** colocar token sensível com esse prefixo.

### Modo B (Standalone)

> **Modo standalone NÃO pode ter secrets.** Se o aluno abrir o HTML, ele vê tudo. Por isso o standalone só usa:
- XLSX manual (sem token)
- Sheets público (sem token, gviz endpoint)
- Mock data (testes)

---

## 🔄 Update workflow

### Mudou alvo de métrica?

Editar `data/targets.ts` (ou `00-variaveis-globais.md` no modo Markdown). Recompilar.

### Mudou regra de alerta?

Editar `data/alerts-rules.ts`. Recompilar.

### Adicionou módulo novo?

1. Criar pasta `src/app/{novo-modulo}/`
2. Adicionar item no `Sidebar.tsx`
3. Adicionar regras em `data/alerts-rules.ts`
4. Adicionar adapter em `lib/adapters/` (se nova fonte)

### Distribuir update do standalone?

```bash
pnpm build:standalone
# Sobrescrever .html no GDrive / link de download
```

---

## 🧪 Modo dev avançado

### Rodar com mock data

```bash
NEXT_PUBLIC_DATA_MODE=mock pnpm dev
```

> Útil pra desenvolver sem precisar de planilha real.

### Preview branch (Cloudflare Pages)

Deploy com `--branch` diferente de main gera preview URL própria:
```bash
npx wrangler pages deploy out --project-name <projeto> --branch feature-x
# → https://feature-x.<projeto>.pages.dev
```

> O alias da branch fica em minúsculas e todo caractere não alfanumérico vira hífen.

> Compartilha link com o time pra revisão antes de merge.

### Testar standalone localmente

```bash
pnpm build:standalone
open dist/dashboard-lpsg-turbo.html
```

---

## 📊 Performance · monitoring

### Modo A (Cloudflare Pages)

- **Cloudflare Web Analytics** — projeto → Metrics → Enable (Web Analytics). Sem cookie e sem localStorage (sem banner)
- **Core Web Vitals** no mesmo painel — LCP · INP · CLS
- **Sentry** (opcional) — erros runtime

### Modo B (Standalone)

> Sem monitoring · tudo client-side. Se quebrar, gerar nova versão e re-distribuir.

---

## 🎯 Checklist de deploy (Modo A)

Antes de subir pro Cloudflare Pages:

```
[ ] .env.local configurado (dev) · segredos via wrangler pages secret put (produção)
[ ] next.config com output: "export" · npx next build gerou out/ sem erros
[ ] pnpm test passando
[ ] Lighthouse Mobile ≥ 95 (todas as rotas)
[ ] LCP < 1.5s
[ ] Responsivo (mobile · tablet · desktop)
[ ] Modo dark + light testado
[ ] Domínio configurado
[ ] Cloudflare Web Analytics habilitado
[ ] Time tem acesso ao projeto no Cloudflare Pages
```

### Checklist de distribuição (Modo B)

```
[ ] pnpm build:standalone gerou < 350 KB
[ ] Abriu local sem erros
[ ] Importou XLSX de teste com sucesso
[ ] Funciona offline (testar em modo avião)
[ ] Funciona em Chrome · Safari · Firefox
[ ] Documentação de uso anexa (PDF de 1 página)
```

---

## 🆘 Troubleshooting

| Problema | Causa | Solução |
|---|---|---|
| Standalone abre branco | JavaScript travou | F12 · console · debugar |
| Sheets não atualiza | CORS · gviz endpoint | Tornar planilha pública (anyone with link) |
| Meta API retorna 401 | Token expirou | Gerar novo long-lived token (60 dias) |
| Hotmart sem vendas | client_id sem permissão | Painel → API → habilitar `payments` |
| Lighthouse mobile < 95 | Imagens não otimizadas | AVIF/WebP no tamanho certo (com `output: "export"` o next/image exige `images: { unoptimized: true }` no next.config) |
| Build standalone > 350KB | Recharts não tree-shaken | Importar componentes individuais |

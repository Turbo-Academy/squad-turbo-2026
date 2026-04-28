# 01 · Arquitetura — Dashboard LPSG v2

> Stack moderno + retrocompatibilidade com a v1 (HTML standalone).

---

## 🎯 Princípios

1. **Mesma stack das outras estruturas LPSG** — Next.js 14 + Tailwind + Vercel · consistência
2. **Mobile-first** — gestor abre no celular pra ver ROAS · pico · vendas em tempo real
3. **2 modos de execução** — SaaS (Vercel) **OU** HTML standalone (sem servidor)
4. **Componentizado** — módulos isolados, fácil de adicionar/remover
5. **Compatível com a planilha v1** — mesma estrutura de XLSX importa sem retrabalho

---

## 🧱 Stack

```yaml
# Core
Framework:    Next.js 14 (App Router)
Linguagem:    TypeScript (strict)
CSS:          Tailwind CSS 4
Componentes:  shadcn/ui (cards, tabs, table, dialog)

# Data + state
Data fetch:   SWR (revalidação automática)
State:        React Context + useReducer (sem Redux)
Persistência: localStorage + IndexedDB (cache de planilhas)

# Visual
Gráficos:     Recharts (defaults dark)
Tabelas:      TanStack Table v8 (sortable, filterable)
Ícones:       lucide-react
Fontes:       Inter (corpo) + Space Grotesk (display)

# Integrações (todas opcionais)
XLSX:         SheetJS (xlsx-latest CDN ou bundle)
Sheets:       gviz/tq endpoint (pública) ou OAuth (privada)
Meta Ads:     Graph API v22 (server-side · token longo)
Hotmart:      API REST (vendas · carrinho aberto)
GA4:         BigQuery export (avançado)
YouTube:      YouTube Live Streaming API

# Deploy
Hospedagem:   Vercel (preview por PR + Edge global)
Standalone:   Build script gera HTML único (~250 KB · sem dependências)
```

---

## 🏗️ Estrutura de pastas

```
dashboard-lpsg/
├── public/
│   ├── images/expert.webp
│   └── og-image.jpg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← root + tema dark + fontes
│   │   ├── page.tsx                   ← redireciona pra /visao-geral
│   │   ├── globals.css                ← Tailwind base + tokens
│   │   │
│   │   ├── visao-geral/page.tsx       Módulo 1 · KPIs + funil
│   │   ├── trafego/page.tsx           Módulo 2 · Hook/Hold/Body Rate + 4 ações
│   │   ├── paginas/page.tsx           Módulo 3 · 5 variações + conv
│   │   ├── aulas/page.tsx             Módulo 4 · pico ao vivo + retenção
│   │   ├── mensageria/page.tsx        Módulo 5 · Utility vs Marketing + entrega
│   │   ├── tsunami/page.tsx           Módulo 6 · 4 janelas em tempo real
│   │   ├── recuperacao/page.tsx       Módulo 7 · D+1 a D+7 · closer
│   │   ├── operacao/page.tsx          Módulo 8 · kanban + timeline
│   │   └── estrategico/page.tsx       Módulo 9 · vs lançamentos anteriores
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopBar.tsx
│   │   │   └── LaunchSelector.tsx     ← seletor de lançamento ativo
│   │   ├── kpi/
│   │   │   ├── KpiCard.tsx
│   │   │   ├── KpiGrid.tsx
│   │   │   └── StatusBadge.tsx        ← verde / amarelo / vermelho
│   │   ├── charts/
│   │   │   ├── FunilVisual.tsx
│   │   │   ├── RetentionChart.tsx
│   │   │   ├── TsunamiTimeline.tsx
│   │   │   └── CreativePerformance.tsx
│   │   ├── tables/
│   │   │   ├── CreativesTable.tsx
│   │   │   ├── PagesTable.tsx
│   │   │   └── KanbanBoard.tsx
│   │   └── ui/                         ← shadcn/ui base
│   │
│   ├── data/
│   │   ├── targets.ts                  ← métricas-alvo (do 00-variaveis)
│   │   ├── alerts-rules.ts             ← motor de regras (ver 04)
│   │   └── mock.ts                     ← dados mock pra dev
│   │
│   ├── lib/
│   │   ├── adapters/
│   │   │   ├── xlsx-adapter.ts         ← importa planilha v1
│   │   │   ├── sheets-adapter.ts       ← Google Sheets ao vivo
│   │   │   ├── meta-ads-adapter.ts     ← Graph API
│   │   │   ├── hotmart-adapter.ts      ← Hotmart API
│   │   │   └── ga4-adapter.ts          ← GA4 BigQuery
│   │   ├── normalize.ts                ← schema único interno
│   │   ├── alerts-engine.ts            ← avalia regras + dispara
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── launch.ts                   ← Launch · Edition · CampaignSet · Creative
│   │   └── alerts.ts                   ← Alert · Rule · Severity
│   │
│   └── hooks/
│       ├── useLaunch.ts
│       ├── useAlerts.ts
│       └── useLiveSync.ts              ← polling SWR
│
├── scripts/
│   └── build-standalone.mjs            ← gera HTML único (modo B)
│
├── .env.local.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔄 2 Modos de execução

### Modo A — Web app (Vercel)

```
URL pública (lp.dominio.com.br/dash)
    ↓
Next.js no Edge (Vercel)
    ↓
APIs: Sheets / Meta / Hotmart / GA4 / YouTube
    ↓
Atualização automática (SWR · 30s)
```

**Quando usar:**
- Time todo acessa a mesma URL
- Atualização em tempo real durante o evento
- Integrações com APIs (Meta, Hotmart, etc.)
- Preview por branch para experimentação

**Setup:**
1. `git clone` do template
2. Configurar `.env.local` com tokens
3. `pnpm install && pnpm dev` (local) ou push pra Vercel

### Modo B — HTML standalone

```
Build script (pnpm build:standalone)
    ↓
Inline tudo: HTML + CSS + JS + dados mock
    ↓
Arquivo único: dashboard-lpsg.html (~250 KB)
    ↓
Aluno duplo-clica · funciona offline
    ↓
Importação manual de XLSX (sheetjs)
    ↓
(opcional) servidor local Python pra Sheets ao vivo
```

**Quando usar:**
- Compartilhar com alunos (sem dor de cabeça)
- Apresentação offline
- Backup que funciona em qualquer máquina

**Setup:**
1. `pnpm build:standalone` (no projeto SaaS)
2. Distribui o `dashboard-lpsg.html`
3. Aluno abre · importa planilha · pronto

> **Compatibilidade com v1:** o HTML standalone aceita o **mesmo formato XLSX** da v1 (planilha "Dados dos Eventos"). Aluno que já tem planilha não precisa migrar.

---

## 🎨 Design system (tokens)

```css
:root {
  /* Cores primárias */
  --brand: oklch(70% 0.20 38);              /* laranja Turbo */
  --brand-dim: oklch(70% 0.20 38 / 0.15);
  --accent: oklch(70% 0.18 285);            /* roxo */

  /* Status */
  --success: oklch(72% 0.18 150);           /* verde — métrica ok */
  --warning: oklch(80% 0.18 75);            /* amarelo — atenção */
  --danger: oklch(65% 0.24 22);             /* vermelho — alerta */

  /* Backgrounds (dark) */
  --bg: oklch(7% 0.008 270);
  --bg-elevated: oklch(12% 0.010 270);
  --bg-card: oklch(15% 0.012 270);

  /* Texto */
  --fg: oklch(97% 0.005 270);
  --fg-muted: oklch(72% 0.014 270);
  --fg-sub: oklch(46% 0.016 270);

  /* Border */
  --border: oklch(22% 0.012 270 / 0.8);
}
```

**Light mode opcional:** toggle no header · inverte oklch luminância.

---

## ⚡ Performance alvo

| Métrica | Alvo |
|---|---|
| LCP (modo Web) | < 1.5s |
| INP | < 200ms |
| Bundle inicial | < 150 KB gzip |
| HTML standalone | < 350 KB (com Recharts inline) |
| Polling SWR (modo Web) | 30s default · configurável |
| Tempo de import de XLSX | < 2s pra 1k linhas |

---

## 🚦 Status de cada módulo (load progressivo)

```
1. Visão Geral      ← carrega primeiro · KPIs essenciais
2. Tráfego          ← carrega quando aba ativa
3. Páginas          ← lazy load
4. Aulas            ← lazy load
5. Mensageria       ← lazy load
6. Tsunami          ← real-time (polling 5s · só no dia do carrinho)
7. Recuperação      ← lazy load
8. Operação         ← lazy load
9. Estratégico      ← lazy load (busca histórico)
```

> **Cada módulo é uma rota independente** — se um falha, os outros continuam funcionando.

---

## 🔐 Segurança

- **Tokens em `.env.local`** (server-side only · nunca expor no cliente)
- **API routes do Next.js** intermediam chamadas pra Meta/Hotmart (token nunca vai pro browser)
- **CORS restrito** ao domínio configurado
- **HTML standalone** funciona em modo "read-only" sem tokens (só XLSX manual)

---

## 📦 Dependências principais

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "typescript": "5.x",
    "tailwindcss": "4.x",
    "recharts": "2.x",
    "@tanstack/react-table": "8.x",
    "lucide-react": "0.x",
    "swr": "2.x",
    "xlsx": "0.x",
    "clsx": "2.x"
  },
  "devDependencies": {
    "esbuild": "^0.x",          // build standalone
    "@types/node": "20.x"
  }
}
```

> Total bundle (gzip): **~120 KB** (página principal) · **~250 KB** (todos os módulos lazy-loaded sob demanda)

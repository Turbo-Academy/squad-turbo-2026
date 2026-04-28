# 03 · Fontes de dados — Dashboard LPSG v2

> 6 modos de input · adaptadores que normalizam pra um schema único interno.

---

## 🎯 Princípio: schema único interno

Independente da fonte (XLSX · Sheets · API), todos os dados passam por um **adaptador** que converte pro schema único.

```
[XLSX]  →  xlsx-adapter  →  ┐
[Sheets] → sheets-adapter →  ├→ schema único → módulos
[Meta]  →  meta-adapter  →  │
[Hotmart] → hotmart-adapter →┘
```

Adicionar uma nova fonte = criar um novo adaptador. Os módulos não mudam.

---

## 📋 Schema único (TypeScript)

```typescript
// types/launch.ts

interface Launch {
  id: string;                    // "LPS-01-26"
  edition: string;               // "01/26"
  status: 'planning' | 'captacao' | 'evento' | 'carrinho' | 'recuperacao' | 'fechado';
  dates: {
    captacaoInicio: Date;
    captacaoFim: Date;
    aulasInicio: Date;
    pitch: Date;
    carrinhoAbre: Date;
    carrinhoFecha: Date;
  };
  metas: {
    inscritos: number;
    vendas: number;
    faturamento: number;
    orcamentoTrafego: number;
  };
  resultados: LaunchResults;
}

interface LaunchResults {
  trafego: TrafegoData;
  paginas: PaginasData;
  aulas: AulasData;
  mensageria: MensageriaData;
  vendas: VendasData;
  recuperacao: RecuperacaoData;
}

interface TrafegoData {
  spend: number;
  impressoes: number;
  clicks: number;
  ctr: number;
  cpm: number;
  conversoes: number;
  roas: number;
  criativos: Creative[];
}

interface Creative {
  nome: string;                  // "LPS_120526_PRI_001"
  tipo: 'video' | 'estatico' | 'carrossel';
  spend: number;
  hookRate: number;              // 0.0–1.0
  holdRate: number;
  bodyRate: number;
  roas: number;
  status: 'verde' | 'amarelo' | 'vermelho' | 'teste';
  acaoSugerida?: 'subir' | 'cortar' | 'duplicar' | 'manter';
}

interface PaginasData {
  variacoes: Variacao[];
}

interface Variacao {
  nome: string;                  // "v1-dor-promessa"
  url: string;
  trafegoEnviado: number;
  inscritos: number;
  conversao: number;             // %
  lcp: number;                   // segundos
  inp: number;
  cls: number;
  lighthouseMobile: number;
}

interface AulasData {
  comparecimentoA1: number;      // % dos inscritos
  retencao: {
    a2: number;                  // % do pico A1
    a3: number;
    a4: number;
    a5: number;
    a6: number;                  // % do pico A5 (alvo 130%)
  };
  picoVivo: { aula: string; pico: number; unicos: number }[];
}

interface MensageriaData {
  totalDisparos: number;
  utility: { count: number; custo: number };
  marketing: { count: number; custo: number };
  taxaEntrega: number;           // %
  taxaLeitura: number;
  mensagens: Mensagem[];
}

interface Mensagem {
  nome: string;
  categoria: 'utility' | 'marketing' | 'authentication';
  disparados: number;
  entregues: number;
  lidos: number;
  reagiu: number;                // % com emoji 🚀
}

interface VendasData {
  carrinho: 'fechado' | 'aberto';
  vendas: Venda[];
  janelas: {
    ficha: JanelaVenda;          // 6h50–7h00
    umaHora: JanelaVenda;        // 7h00–8h00
    tresHoras: JanelaVenda;      // 7h00–10h00
    umDia: JanelaVenda;          // 7h00–23h59
  };
  totalDia1: { vendas: number; receita: number; pct: number };
}

interface JanelaVenda {
  vendas: number;
  receita: number;
  ticketMedio: number;
  inicio: Date;
  fim: Date;
  ativa: boolean;
}

interface RecuperacaoData {
  abandonados: number;
  resgatados: number;
  pctRecuperacao: number;
  porDia: { dia: number; vendas: number; receita: number }[];
  slaCloser: number;             // minutos
}
```

---

## 🔌 Modo 1 — Planilha XLSX (default)

> **Quando usar:** todo lançamento · default LPSG · backup
> **Performance:** import < 2s pra 1k linhas

### Estrutura da planilha

Mesmo formato da v1 do dashboard LPSG (campo "Dados dos Eventos"):

```
Coluna A:  Edição
Coluna B:  Sigla
Coluna C:  Data início captação
Coluna D:  Data fim captação
Coluna E:  Data pitch
...
Coluna Z:  Total inscritos
Coluna AA: Total vendas dia 1
Coluna AB: ROAS captação
...
```

> **Compatibilidade:** o template aceita o **mesmo formato XLSX da v1**. Aluno que já tem planilha não precisa migrar.

### Adapter

```typescript
// lib/adapters/xlsx-adapter.ts
import * as XLSX from 'xlsx';

export async function importXLSX(file: File): Promise<Launch[]> {
  const wb = XLSX.read(await file.arrayBuffer());
  const sheet = wb.Sheets['Dados dos Eventos'];
  const rows = XLSX.utils.sheet_to_json(sheet);

  return rows.map(row => ({
    id: `${row.Sigla}-${row.Edição}`,
    edition: row.Edição,
    // ... mapeia colunas pro schema único
  }));
}
```

---

## 🔌 Modo 2 — Google Sheets ao vivo

> **Quando usar:** time todo edita planilha · sync automática
> **Requisito:** planilha publicada como leitor (gviz/tq endpoint) ou OAuth

### Setup

1. Compartilhar planilha como "qualquer pessoa com link"
2. Pegar `SHEETS_ID` da URL: `docs.google.com/spreadsheets/d/{SHEETS_ID}/edit`
3. Configurar `.env.local`:
```bash
NEXT_PUBLIC_SHEETS_ID=1abc...xyz
NEXT_PUBLIC_SHEETS_TAB=Dados dos Eventos
```

### Adapter

```typescript
// lib/adapters/sheets-adapter.ts

const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEETS_ID}/gviz/tq?tqx=out:json&sheet=${TAB}`;

export async function fetchSheets(): Promise<Launch[]> {
  const res = await fetch(GVIZ_URL);
  const text = await res.text();
  // Remove o prefixo do gviz: "google.visualization.Query.setResponse(...)"
  const json = JSON.parse(text.match(/{.*}/s)![0]);

  return json.table.rows.map(row => normalizeRow(row));
}
```

> Refetch a cada 30s via SWR.

---

## 🔌 Modo 3 — Meta Ads API (opcional · avançado)

> **Quando usar:** automação completa · sem digitar dados
> **Requisito:** Meta Business Manager + token long-lived + WABA

### Setup

1. Acessar `business.facebook.com`
2. Configurar **System User** com permissões `ads_read`, `business_management`
3. Gerar token **long-lived** (60 dias)
4. Pegar `Ad Account ID` (formato `act_1234567890`)
5. Adicionar ao `.env.local`:
```bash
META_ADS_TOKEN=EAAB...
META_AD_ACCOUNT_ID=act_1234567890
```

### Métricas puxadas

| Métrica | Endpoint Meta |
|---|---|
| Spend · Impressões · Clicks · CTR | `/insights` |
| Hook Rate (Views 3s / Impressões) | `/insights` (action_video_view) |
| Hold Rate (ThruPlay 75% / Views 3s) | `/insights` (video_p75_watched) |
| Body Rate (Purchase / ThruPlay 75%) | `/insights` + Pixel |
| Spend por criativo | `/ads/{ad_id}/insights` |

### Adapter

```typescript
// lib/adapters/meta-ads-adapter.ts

const META_API = 'https://graph.facebook.com/v22.0';

export async function fetchMetaAds(adAccountId: string, token: string) {
  const fields = [
    'campaign_name', 'spend', 'impressions', 'clicks',
    'video_3_sec_watched_actions', 'video_p75_watched_actions',
    'actions{action_type=purchase}'
  ].join(',');

  const res = await fetch(
    `${META_API}/${adAccountId}/insights?level=ad&fields=${fields}&access_token=${token}`
  );
  return res.json();
}
```

> ⚠️ Sempre rodar **server-side** (API Route do Next.js). Token nunca vai pro cliente.

---

## 🔌 Modo 4 — Hotmart API (opcional)

> **Quando usar:** vendas em tempo real · recuperação · cupons
> **Requisito:** acesso Hotmart Pro + Client ID + Secret

### Setup

1. Painel Hotmart → Ferramentas → API → criar Client
2. Pegar `client_id` e `client_secret`
3. Adicionar ao `.env.local`:
```bash
HOTMART_CLIENT_ID=...
HOTMART_CLIENT_SECRET=...
HOTMART_PRODUCT_ID=...
```

### Métricas puxadas

| Métrica | Endpoint |
|---|---|
| Compras (timestamp · cupom) | `/sales` |
| Iniciados sem finalizar (recuperação) | `/checkout-abandoned` |
| Reembolsos | `/refunds` |
| Ticket médio | calculado |

### Adapter

```typescript
// lib/adapters/hotmart-adapter.ts

async function getToken() {
  const res = await fetch('https://api-sec-vlc.hotmart.com/security/oauth/token', {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${ID}&client_secret=${SECRET}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return (await res.json()).access_token;
}

export async function fetchSales(productId: string) {
  const token = await getToken();
  const res = await fetch(
    `https://developers.hotmart.com/payments/api/v1/sales?product_id=${productId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.json();
}
```

> Polling 30s durante carrinho aberto · 5min em outros momentos.

---

## 🔌 Modo 5 — GA4 BigQuery (opcional · avançado)

> **Quando usar:** análise profunda de páginas · core web vitals
> **Requisito:** GA4 com export pro BigQuery habilitado

### Setup

1. GA4 → Admin → BigQuery linking
2. Criar service account no Google Cloud
3. Download JSON da service account
4. Adicionar ao `.env.local`:
```bash
GA4_PROPERTY_ID=123456789
GCP_SERVICE_ACCOUNT_JSON=$(cat service-account.json | base64)
```

### Métricas puxadas

| Métrica | Query |
|---|---|
| Conversão por variação | `event_name = 'sign_up' GROUP BY page_path` |
| LCP / INP / CLS | `event_name = 'web_vitals'` |
| Bounce rate | calculado |

---

## 🔌 Modo 6 — YouTube Live API

> **Quando usar:** retenção das aulas · pico ao vivo
> **Requisito:** chave da YouTube Data API v3

### Setup

1. Google Cloud Console → APIs → YouTube Data API v3 → Habilitar
2. Criar API Key
3. Adicionar ao `.env.local`:
```bash
YOUTUBE_API_KEY=AIza...
YOUTUBE_LIVE_VIDEO_IDS=A1_video_id,A2_video_id,A3_video_id,A4_video_id,A5_video_id,A6_video_id
```

### Métricas puxadas

| Métrica | Endpoint |
|---|---|
| Pico simultâneo | `liveBroadcasts.list` (statistics.concurrentViewers) |
| Espectadores únicos | `videos.list` (statistics.viewCount) |
| Duração assistida média | `analytics.reports` |

---

## 🔌 Modo 7 — Sheets aba `Recomendações` (engine de tráfego)

> **Quando usar:** sempre · alimenta o **Módulo 10 — Sugestões** do dashboard
> **Requisito:** workflows de análise rodando (ver `automacoes/template/09-trafego-analise-meta.md`)

### Estrutura

3 abas relacionadas:
- `MetaAds_Daily` (raw · auditoria)
- `MetaAds_Normalized` (calculado · alimenta módulos 2 e 4)
- `Recomendações` (sugestões · alimenta módulo 10)

### Adapter

```typescript
// lib/adapters/recomendacoes-adapter.ts

export interface Recomendacao {
  id_sugestao: string;
  data_geracao: string;            // ISO datetime
  cadencia: 'diaria' | '2dias' | 'semanal';
  id_regra: string;                // D-01..S-04
  severidade: 'alta' | 'media' | 'informativo';
  janela_inicio: string;
  janela_fim: string;
  metrica: string;
  valor_observado: number;
  valor_baseline: number | null;
  delta_pct: number | null;
  threshold: string;
  campanha_id: string;
  campanha_nome: string;
  criativo_id: string | null;
  criativo_nome: string | null;
  acao_sugerida: string;
  contexto: Record<string, unknown>;  // JSON
  prioridade: 1 | 2 | 3;
  status: 'pendente' | 'aplicada' | 'ignorada' | 'obsoleta';
  aplicada_em: string | null;
  aplicada_por: string | null;
}

const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEETS_ID}/gviz/tq?tqx=out:json&sheet=Recomendações`;

export async function fetchRecomendacoes(filtros?: {
  status?: 'pendente' | 'aplicada' | 'ignorada' | 'todas';
  cadencia?: string;
  severidade?: string;
}): Promise<Recomendacao[]> {
  const res = await fetch(GVIZ_URL);
  const text = await res.text();
  const json = JSON.parse(text.match(/\{.*\}/s)![0]);

  let rows = json.table.rows.map(normalizeRow);

  // Default: só pendentes
  const status = filtros?.status ?? 'pendente';
  if (status !== 'todas') rows = rows.filter(r => r.status === status);

  if (filtros?.cadencia)   rows = rows.filter(r => r.cadencia === filtros.cadencia);
  if (filtros?.severidade) rows = rows.filter(r => r.severidade === filtros.severidade);

  // Ordena: severidade DESC · prioridade ASC · data_geracao DESC
  return rows.sort((a, b) => {
    const sev = severidadeOrder(a.severidade) - severidadeOrder(b.severidade);
    if (sev !== 0) return sev;
    if (a.prioridade !== b.prioridade) return a.prioridade - b.prioridade;
    return new Date(b.data_geracao).getTime() - new Date(a.data_geracao).getTime();
  });
}

function severidadeOrder(s: string): number {
  return { alta: 0, media: 1, informativo: 2 }[s] ?? 9;
}

// === Marcar como aplicada/ignorada ===
export async function marcarRecomendacao(
  id: string,
  novoStatus: 'aplicada' | 'ignorada',
  email_usuario: string,
  notas?: string
): Promise<void> {
  await fetch(`${API_BASE}/recomendacoes/${id}/marcar`, {
    method: 'POST',
    body: JSON.stringify({ status: novoStatus, email_usuario, notas })
  });
  // O backend escreve no Sheets · dispara revalidação SWR
}

// === Forçar análise (botão do dashboard) ===
export async function forcarAnalise(cadencia: 'diaria' | '2dias' | 'semanal'): Promise<{ ok: boolean; sugestoes_geradas: number }> {
  const res = await fetch(`${N8N_BASE}/trafego-analise-${cadencia}/run-now`, {
    method: 'POST',
    headers: { 'X-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET! },
    body: JSON.stringify({ force_recalc: false })
  });
  return res.json();
}
```

### Hook React (com SWR)

```typescript
// hooks/useRecomendacoes.ts
import useSWR from 'swr';
import { fetchRecomendacoes } from '@/lib/adapters/recomendacoes-adapter';

export function useRecomendacoes(filtros?: RecomendacaoFiltros) {
  const { data, error, mutate } = useSWR(
    ['recomendacoes', filtros],
    () => fetchRecomendacoes(filtros),
    {
      refreshInterval: 60_000,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  return {
    recomendacoes: data ?? [],
    loading: !data && !error,
    error,
    refresh: mutate
  };
}
```

### API Route pra escrever no Sheets

```typescript
// app/api/recomendacoes/[id]/marcar/route.ts
import { google } from 'googleapis';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { status, email_usuario, notas } = await req.json();

  const sheets = google.sheets({ version: 'v4', auth: getServiceAccountAuth() });

  // Encontra a linha pelo id_sugestao
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: 'Recomendações!A:V'
  });

  const rows = result.data.values || [];
  const header = rows[0];
  const idCol = header.indexOf('id_sugestao');
  const rowIndex = rows.findIndex((r, i) => i > 0 && r[idCol] === params.id);

  if (rowIndex === -1) return Response.json({ error: 'not_found' }, { status: 404 });

  // Atualiza colunas: V (status), W (aplicada_em), X (aplicada_por)
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: `Recomendações!V${rowIndex + 1}:X${rowIndex + 1}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[status, new Date().toISOString(), email_usuario]]
    }
  });

  return Response.json({ ok: true });
}
```

---

## 🔌 Modo 8 — Sheets aba `Fichas` (módulo 11)

> **Quando usar:** sempre · alimenta o **Módulo 11 — Ficha**
> **Estrutura da ficha:** `paginas/template/08-ficha-interesse.md`
> **Fluxo de gravação:** `automacoes/template/02-fluxos-de-captacao.md` (Fluxo 4)

### Schema (23 colunas A-W)

```
A: timestamp_submit       ISO datetime
B: email
C: whatsapp
D: nome
E: instagram
F: q2_tempo_mercado       string opção
G: q3_estagio
H: q4_funis               JSON array
I: q5_investimento_edu
J: q6_investimento_midia
K: q7_faturamento
L: q8_equipe
M: q9_intencao            COM_CERTEZA | TENHO_QUE_PENSAR | NO_MOMENTO_NAO
N: q10_historia           textarea livre
O: q11_pergunta_tiraduvidas
P: score_capacidade       0-13
Q: score_operacional      0-7
R: score_intencao         0-10
S: score_total            0-30
T: tier                   HOT | WARM | COLD
U: xcod                   JSON do xcod
V: status_atendimento     pendente | em_atendimento | comprou | descartou
W: data_compra            ISO date (se comprou)
```

### Adapter

```typescript
// lib/adapters/fichas-adapter.ts

export interface Ficha {
  timestamp_submit: string;
  email: string;
  whatsapp: string;
  nome: string;
  instagram?: string;

  q2_tempo_mercado: string;
  q3_estagio: string;
  q4_funis: string[];
  q5_investimento_edu: string;
  q6_investimento_midia: string;
  q7_faturamento: string;
  q8_equipe: string;
  q9_intencao: 'COM_CERTEZA' | 'TENHO_QUE_PENSAR' | 'NO_MOMENTO_NAO';
  q10_historia: string;
  q11_pergunta_tiraduvidas: string;

  score_capacidade: number;
  score_operacional: number;
  score_intencao: number;
  score_total: number;
  tier: 'HOT' | 'WARM' | 'COLD';

  xcod: Record<string, unknown>;
  status_atendimento: 'pendente' | 'em_atendimento' | 'comprou' | 'descartou';
  data_compra: string | null;
}

const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEETS_ID}/gviz/tq?tqx=out:json&sheet=Fichas`;

export async function fetchFichas(filtros?: {
  tier?: 'HOT' | 'WARM' | 'COLD';
  status?: string;
  desde?: Date;
}): Promise<Ficha[]> {
  const res = await fetch(GVIZ_URL);
  const text = await res.text();
  const json = JSON.parse(text.match(/\{.*\}/s)![0]);

  let rows = json.table.rows.map(normalizeFichaRow);

  if (filtros?.tier)   rows = rows.filter(r => r.tier === filtros.tier);
  if (filtros?.status) rows = rows.filter(r => r.status_atendimento === filtros.status);
  if (filtros?.desde)  rows = rows.filter(r => new Date(r.timestamp_submit) >= filtros.desde!);

  return rows.sort((a, b) =>
    new Date(b.timestamp_submit).getTime() - new Date(a.timestamp_submit).getTime()
  );
}

// === Agregações pro dashboard ===

export function distribuicaoPorTier(fichas: Ficha[]): TierDist {
  const total = fichas.length;
  const hot  = fichas.filter(f => f.tier === 'HOT').length;
  const warm = fichas.filter(f => f.tier === 'WARM').length;
  const cold = fichas.filter(f => f.tier === 'COLD').length;

  return {
    total,
    hot:  { n: hot,  pct: (hot  / total) * 100 },
    warm: { n: warm, pct: (warm / total) * 100 },
    cold: { n: cold, pct: (cold / total) * 100 }
  };
}

export function conversaoTierCompra(fichas: Ficha[], tier: Ficha['tier']): number {
  const subset = fichas.filter(f => f.tier === tier);
  if (subset.length === 0) return 0;
  const compraram = subset.filter(f => f.status_atendimento === 'comprou').length;
  return (compraram / subset.length) * 100;
}

export function funilCompleto(fichas: Ficha[], inscritosIngresso: number) {
  const total = fichas.length;
  return {
    inscritos:     inscritosIngresso,
    submeteram:    total,
    pct_submit:    (total / inscritosIngresso) * 100,
    hot:           fichas.filter(f => f.tier === 'HOT').length,
    pct_hot:       (fichas.filter(f => f.tier === 'HOT').length / total) * 100,
    compraram_hot: fichas.filter(f => f.tier === 'HOT' && f.status_atendimento === 'comprou').length
  };
}

// === Heatmap de submissão (hora × dia) ===

export function heatmapSubmissao(fichas: Ficha[]): number[][] {
  // grid 7 dias × 24 horas
  const grid: number[][] = Array(7).fill(0).map(() => Array(24).fill(0));
  fichas.forEach(f => {
    const d = new Date(f.timestamp_submit);
    grid[d.getDay()][d.getHours()] += 1;
  });
  return grid;
}

// === Atualizar status_atendimento (closer marcou) ===

export async function atualizarStatusFicha(
  email: string,
  novoStatus: Ficha['status_atendimento'],
  comprou_em?: Date
): Promise<void> {
  await fetch(`${API_BASE}/fichas/${encodeURIComponent(email)}/status`, {
    method: 'POST',
    body: JSON.stringify({
      status: novoStatus,
      data_compra: comprou_em?.toISOString()
    })
  });
}
```

### Hook React (com SWR)

```typescript
// hooks/useFichas.ts
import useSWR from 'swr';
import { fetchFichas, distribuicaoPorTier, funilCompleto } from '@/lib/adapters/fichas-adapter';
import { useInscritos } from './useInscritos';

export function useFichas(filtros?: FichaFiltros) {
  const { data: fichas, error, mutate } = useSWR(
    ['fichas', filtros],
    () => fetchFichas(filtros),
    { refreshInterval: 60_000, revalidateOnFocus: true }
  );

  const { inscritos } = useInscritos();

  return {
    fichas: fichas ?? [],
    distribuicao: fichas ? distribuicaoPorTier(fichas) : null,
    funil: fichas && inscritos ? funilCompleto(fichas, inscritos) : null,
    loading: !fichas && !error,
    error,
    refresh: mutate
  };
}
```

### API Route — atualizar status

```typescript
// app/api/fichas/[email]/status/route.ts
import { google } from 'googleapis';

export async function POST(
  req: Request,
  { params }: { params: { email: string } }
) {
  const { status, data_compra } = await req.json();
  const email = decodeURIComponent(params.email);

  const sheets = google.sheets({ version: 'v4', auth: getServiceAccountAuth() });

  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: 'Fichas!A:W'
  });

  const rows = result.data.values || [];
  const emailCol = 1; // coluna B
  const rowIndex = rows.findIndex((r, i) => i > 0 && r[emailCol] === email);

  if (rowIndex === -1) return Response.json({ error: 'not_found' }, { status: 404 });

  // Atualiza V (status_atendimento) + W (data_compra)
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: `Fichas!V${rowIndex + 1}:W${rowIndex + 1}`,
    valueInputOption: 'RAW',
    requestBody: { values: [[status, data_compra ?? '']] }
  });

  return Response.json({ ok: true });
}
```

---

## 🔄 Hierarquia de fontes (qual sobrescreve qual?)

Quando há conflito (mesma métrica vindo de fontes diferentes), prevalece a fonte mais confiável:

```
1. Meta Ads API           ← mais confiável pra tráfego
2. Hotmart API            ← mais confiável pra vendas
3. YouTube Live API       ← mais confiável pra retenção
4. GA4 BigQuery           ← mais confiável pra páginas
5. Google Sheets ao vivo  ← se sem APIs
6. XLSX manual            ← fallback final
```

> Modo: **fonte automática** (usa a melhor disponível) ou **fonte manual** (usuário escolhe).

---

## 📦 Storage local (cache)

```typescript
// hooks/useLaunch.ts
import useSWR from 'swr';

const { data, error } = useSWR(
  `launch-${id}`,
  () => fetchAdapter(source),
  {
    refreshInterval: 30_000,        // 30s
    revalidateOnFocus: true,
    persistInLocalStorage: true,    // cache offline
  }
);
```

> Cache em `localStorage` (≤ 5MB) e `IndexedDB` (planilhas grandes).

# 02 · Módulos do Dashboard — LPSG v2

> 9 módulos independentes · cada um responde uma pergunta operacional do gestor.

---

## 🎯 Princípio: 1 módulo = 1 decisão

Cada módulo existe pra responder UMA pergunta do gestor durante o lançamento. Se um módulo não muda decisão, ele não entra no dashboard.

| # | Módulo | Pergunta que responde | Quem usa | Quando usa |
|---|---|---|---|---|
| 1 | Visão Geral | Como tá o lançamento agora? | Leo · gestor sênior | Dashboard inicial · sempre |
| 2 | Tráfego | Quais criativos rodam? Cortar/escalar quê? | Gestor de tráfego | Diário · 2x/dia |
| 3 | Páginas | Qual variação converte mais? | Gestor de tráfego · copywriter | Captação · 1x/dia |
| 4 | Aulas | Estamos retendo a audiência? | Leo · CS · social | Durante o evento (seg-sex) |
| 5 | Mensageria | Mensagens chegando? Lidas? | Gestor de operação | Diário · 1x/dia |
| 6 | Tsunami | Tô vendendo agora? | Leo · operação · closer | **Dom 20h até Seg 23h59** |
| 7 | Recuperação | Quantos voltaram? Quanto recuperei? | Closer humano | D+1 a D+7 do carrinho |
| 8 | Operação | Tarefas atrasadas? Time entregando? | Gestor de projetos | Diário · 2x/dia |
| 9 | Estratégico | Esse lançamento é melhor que o anterior? | Leo · sócios | Pós-mortem |

---

## 1️⃣ Visão Geral — KPIs essenciais

> **Quando aparece:** sempre · rota raiz `/visao-geral`
> **Pico de uso:** todo dia · primeira tela que o Leo abre

### O que mostra

```
┌─────────────────────────────────────────────────────┐
│  HEADER FIXO                                         │
│  [Lançamento ativo: LPS 01/26] [11–18 mai 2026]      │
│  [Dia atual: D+3 captação · 4 dias pra abrir]        │
└─────────────────────────────────────────────────────┘

┌────────┬────────┬────────┬────────┐
│ KPI    │ KPI    │ KPI    │ KPI    │
│ Card   │ Card   │ Card   │ Card   │
│        │        │        │        │
│ ROAS   │ Inscr. │ Hook   │ Conv.  │
│ 1.32 ✅ │ 847    │ 28% 🟡  │ 6.2% ✅ │
└────────┴────────┴────────┴────────┘

┌─────────────────────────────────────────────────────┐
│  FUNIL VISUAL                                        │
│  Impressão → Click → Página → Inscrito → Comprou     │
│   1.2M       60k     6k       847       0            │
│             5% CTR  10% click 14% conv               │
└─────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────────────────────┐
│  TIMELINE EVENTO │  ALERTAS CRÍTICOS                │
│  ✅ Captação      │  🔴 Hook Rate caiu pra 18%        │
│  ⏳ Aulas (-4d)   │  🟡 Página V2 com LCP de 2.1s     │
│  ⏳ Pitch (-7d)   │  🟢 Mensageria entrega 96%        │
└──────────────────┴──────────────────────────────────┘
```

### KPIs em destaque (cards)

| Card | Valor | Cor | Fonte |
|---|---|---|---|
| ROAS Ingresso | 1.32 | Verde | Meta API · Hotmart |
| Inscritos | 847 | Branco | Hotmart |
| Hook Rate médio | 28% | Amarelo | Meta API |
| Conv. página | 6.2% | Verde | GA4 / planilha |

### Funil visual (5 etapas)

```
Impressões → Clicks (CTR) → Página (LCP ok?) → Inscritos (conv) → Compradores (R$/CAC)
```

> Cada etapa tem um % e uma cor (verde · amarelo · vermelho conforme alvo do `00-variaveis-globais.md`).

### Alertas críticos

Lista do **motor de regras** (ver `04-alertas-e-diagnostico.md`):
- 🔴 Vermelho — métrica abaixo do mínimo, exige ação **agora**
- 🟡 Amarelo — entre mínimo e ideal, atenção
- 🟢 Verde — métrica ok

---

## 2️⃣ Tráfego — Criativos · ROAS · 4 ações

> **Quando aparece:** rota `/trafego`
> **Pico de uso:** 2x/dia durante captação

### O que mostra

#### Bloco 1 — KPIs de tráfego
```
ROAS · CPM · Spend · Clicks · CTR · Conversões · CAC
```

#### Bloco 2 — Tabela de criativos (15 criativos)
Coluna | Tipo
---|---
Nome (XYZ_DDMMYY_TIPO_NUMERO) | string
Tipo (vídeo · estático · carrossel) | tag
Spend | R$
Hook Rate | % + cor
Hold Rate | % + cor
Body Rate | % + cor
ROAS | num + cor
Status | 🟢 Escalar · 🟡 Manter · 🔴 Cortar · ⚪ Testar
Ação sugerida | botão `Subir +5%` · `Cortar` · `Duplicar`

#### Bloco 3 — Performance de criativos (Recharts)
```
Gráfico bar: top 5 criativos por ROAS
Gráfico line: evolução do Hook Rate (últimos 7 dias)
```

#### Bloco 4 — 4 ações de manutenção
Cards com sugestões automáticas baseadas nas regras:
- **Subir budget** — criativo com ROAS > 1.5 e budget < limite
- **Cortar** — criativo com Hook < 15% após 3 dias
- **Duplicar criativo ganhador** — testar variação
- **Lançar teste** — slot de teste disponível (até 20% do orçamento)

> Regra: **subir até +5%/dia · descer até -50%/dia** · mín R$ 50/dia/campanha · teste ≤ 20% do orçamento total.

---

## 3️⃣ Páginas — 5 variações + conversão

> **Quando aparece:** rota `/paginas`
> **Pico de uso:** 1x/dia durante captação

### O que mostra

#### Tabela das 5 variações

| Variação | URL | Tráfego enviado | Inscritos | Conv. % | LCP | Status |
|---|---|---|---|---|---|---|
| V1 — Dor + Promessa | /v1 | 2.1k | 156 | 7.4% ✅ | 1.2s ✅ | Vencedora |
| V2 — Curiosidade | /v2 | 1.8k | 98 | 5.4% 🟡 | 2.1s 🟡 | Otimizar LCP |
| V3 — Prova social | /v3 | 1.6k | 74 | 4.6% 🔴 | 1.4s ✅ | Pausar tráfego |
| V4 — VSL | /v4 | 1.5k | 122 | 8.1% ✅ | 1.8s 🟡 | Escalar |
| V5 — Bônus | /v5 | 1.4k | 71 | 5.1% 🟡 | 1.3s ✅ | Manter |

#### Métricas de cada variação
- Conversão · LCP · INP · CLS · Lighthouse Mobile Score
- Tempo médio na página · scroll médio · bounce rate

#### Heatmap de elementos (opcional, Hotjar)
Botões clicados · scrolls · zonas mortas

---

## 4️⃣ Aulas — pico ao vivo + retenção

> **Quando aparece:** rota `/aulas`
> **Pico de uso:** durante o evento (seg-sex 7h-8h · dom 20h)

### O que mostra

#### Tabela de retenção (atualiza ao vivo via YouTube API)

| Aula | Pico ao vivo | Espectadores únicos | Retenção (% pico anterior) | Status |
|---|---|---|---|---|
| A1 — Fundamentação | 1247 | 1893 | — (≥ 30% inscritos) | ✅ |
| A2 — Aprofundamento | 982 | 1521 | 78% ✅ (alvo ≥ 70%) | ✅ |
| A3 — Marco 1 | 902 | 1402 | 92% ✅ (alvo ≥ 85%) | ✅ |
| A4 — Pré-pitch | 821 | 1289 | 91% ✅ | ✅ |
| A5 — Marco 2 | 754 | 1198 | 92% ✅ | ✅ |
| A6 — Pitch | 1124 | 2012 | 149% ✅ (alvo ≥ 130%) | 💰 |

#### Gráficos
- Linha — pico ao vivo de A1 a A6
- Barra — % de retenção entre cada aula
- Gauge — comparecimento da Aula 1 vs inscritos (3D)

#### Indicadores de saúde
- **Comparecimento Aula 1** — meta ≥ 30% dos inscritos
- **Retenção média 5 aulas** — meta ≥ 80%
- **Pitch boost (A6 vs A5)** — meta ≥ 130%

---

## 5️⃣ Mensageria — Utility vs Marketing · entrega

> **Quando aparece:** rota `/mensageria`
> **Pico de uso:** 1x/dia durante o evento

### O que mostra

#### Bloco 1 — Distribuição Utility vs Marketing
```
Donut chart: 80% Utility / 20% Marketing (alvo)
```

Card com **economia atingida** vs cenário "100% Marketing":
```
Disparados: 187k mensagens
Custo Utility: R$ 12.480
Custo se 100% Marketing: R$ 74.800
Economia: R$ 62.320 ✅
```

#### Bloco 2 — Performance por mensagem (tabela)

| Mensagem | Categoria | Disparados | Entrega | Leitura | Reação 🚀 | Status |
|---|---|---|---|---|---|---|
| Onboarding | Utility | 5.2k | 98% ✅ | 78% ✅ | — | ✅ |
| Lembrete A1 | Utility | 5.1k | 97% ✅ | 71% ✅ | — | ✅ |
| Áudio noite A1 | Marketing | 4.9k | 95% ✅ | 68% 🟡 | 42% ✅ | ✅ |
| ... | ... | ... | ... | ... | ... | ... |

#### Bloco 3 — Funil de mensageria
Disparado → Entregue → Lido → Reagiu → Clicou (link) → Comprou

---

## 6️⃣ Tsunami — 4 janelas em tempo real

> **Quando aparece:** rota `/tsunami`
> **Pico de uso:** **Dom 20h até Seg 23h59** (carrinho aberto)
> **Polling:** 5s (real-time)

### O que mostra

#### Header fixo com countdown

```
🌊 CARRINHO ABERTO · 04:32:18 restantes pra próxima janela fechar
[Janela 1: 6h50–7h00 Ficha]  ✅ Encerrada · 47 vendas
[Janela 2: 7h00–8h00 1h]      🔴 ATIVA AGORA · 32 vendas em 18min
[Janela 3: 7h00–10h00 3h]     ⏳ Encerra em 02h
[Janela 4: 7h00–23h59 1day]   ⏳ Encerra em 16h
```

#### Métricas por janela

| Janela | Início | Fim | Vendas | Receita | Ticket médio | % do total |
|---|---|---|---|---|---|---|
| Ficha (10min) | 06:50 | 07:00 | 47 | R$ 587.500 | R$ 12.500 | 24% |
| 1 hora | 07:00 | 08:00 | 32 | R$ 480.000 | R$ 15.000 | 17% |
| 3 horas | 07:00 | 10:00 | — | — | — | — |
| 1 dia | 07:00 | 23:59 | — | — | — | — |
| **Total dia 1** | — | — | **79** | **R$ 1.067.500** | **R$ 13.512** | **41%** |

#### Gráfico de pico (real-time)
Linha com vendas por minuto · destaque dos picos das janelas

#### Tabela "vendas ao vivo"
Última venda há 12s · próxima esperada em ~30s
```
[12:34:45] Cliente João Silva — R$ 12.500 (Janela 10min)
[12:34:31] Cliente Maria Costa — R$ 12.500 (Janela 10min)
[12:34:18] Cliente ...
```

---

## 7️⃣ Recuperação — D+1 a D+7 · closer humano

> **Quando aparece:** rota `/recuperacao`
> **Pico de uso:** 2x/dia entre D+1 e D+7 do carrinho

### O que mostra

#### KPIs de recuperação
- Carrinhos abandonados · resgatados · % recuperação
- Vendas adicionais · receita adicional
- SLA médio do closer (alvo ≤ 5min)

#### Tabela de leads em recuperação (kanban)

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ Abandonou   │ Mensagem    │ Conversa    │ Vendido     │
│ (novo)      │ enviada     │ ativa       │             │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ 47 leads    │ 32 leads    │ 18 leads    │ 12 leads    │
│             │             │             │             │
│ João S.     │ Maria C.    │ Pedro L.    │ Ana B.      │
│ R$ 12.500   │ R$ 15.000   │ R$ 17.500   │ R$ 25.000   │
│ há 2h       │ há 1h       │ há 30min    │ ✅ R$ 25k    │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

#### Gráfico de recuperação por dia

```
D+1: 6 vendas (R$ 75k)
D+2: 4 vendas (R$ 50k)
D+3: 3 vendas (R$ 37k)
...
D+7: 1 venda
Total recuperação: 14 vendas (R$ 187k) · 12% adicional ✅
```

---

## 8️⃣ Operação — kanban + timeline

> **Quando aparece:** rota `/operacao`
> **Pico de uso:** 2x/dia · todos os dias

### O que mostra

#### Kanban de tarefas operacionais

```
┌────────────────┬────────────────┬────────────────┬────────────────┐
│ Backlog        │ Em andamento   │ Bloqueado      │ Concluído      │
├────────────────┼────────────────┼────────────────┼────────────────┤
│ Editar A4      │ Configurar     │ Aprovação      │ Aulas A1-A3    │
│ (Editor · qui) │ páginas        │ Meta (WABA)    │ ✅ no ar         │
│                │ (Dev · agora)  │                │                │
│ Subir A5 YT    │                │                │ Mensageria     │
│ (Social · sex) │                │                │ ✅ aprovada      │
└────────────────┴────────────────┴────────────────┴────────────────┘
```

#### Timeline do evento

Gantt simplificado com:
- Captação (10 dias antes)
- Aulas (seg–sex)
- Pitch (dom)
- Carrinho (seg-sex)
- Recuperação (D+1 a D+7)
- Pós-mortem (D+10)

#### Alertas operacionais
- Tarefa atrasada (passou da deadline)
- Bloqueio sem responsável
- Time sem atividade há > 24h

---

## 9️⃣ Estratégico — comparação histórica

> **Quando aparece:** rota `/estrategico`
> **Pico de uso:** **pós-mortem** · pré-lançamento (planejamento)

### O que mostra

#### Comparativo edição atual vs últimas 3 edições

| Métrica | LPS 01/26 (atual) | LPS 03/25 | LPS 02/25 | LPS 01/25 | Tendência |
|---|---|---|---|---|---|
| Inscritos | 847 | 1024 | 932 | 781 | 📈 |
| ROAS captação | 1.32 | 1.18 | 1.45 | 1.05 | 📈 |
| Conv. pitch | — | 8.4% | 7.2% | 6.1% | 📈 |
| Faturamento | em curso | R$ 2.1M | R$ 1.6M | R$ 1.2M | 📈 |
| CAC | R$ 47 | R$ 53 | R$ 41 | R$ 62 | 📉 (bom) |
| Recuperação % | — | 12% | 9% | 7% | 📈 |

#### Gráficos de tendência (12 meses)
- Inscritos por edição
- Faturamento por edição
- ROAS por edição
- Ticket médio por edição

#### Análise de criativos vencedores (histórico)
"Top 3 criativos de todas as edições":
- LPS_120125_PRI_003 — ROAS 1.84 · 12 edições
- LPS_180325_PRI_007 — ROAS 1.71 · 8 edições
- ...

#### Insights automáticos
```
🟢 ROAS acima da média histórica (+12%)
🟡 Inscritos abaixo de LPS 03/25 (-17%)
🔴 Conv. página V3 em 4.6% (abaixo do mínimo histórico de 5.2%)
```

---

## 🔟 Sugestões de Otimização — engine de análise automatizado

> **Fonte de verdade:**
> - Regras (D-XX, C-XX, S-XX): `trafego/template/07-analise-automatica.md`
> - Workflows n8n: `automacoes/template/09-trafego-analise-meta.md`
> - Pipeline Meta API: `trafego/template/08-meta-ads-pipeline.md`

### O que mostra

Sugestões geradas automaticamente pelos 3 workflows de análise (diária · 2 dias · semanal). **Engine sugere · humano aplica.** Cada linha = 1 decisão pendente.

```
┌────────────────────────────────────────────────────────────────────┐
│  Sugestões pendentes · ordenadas por severidade · prioridade       │
├────────────────────────────────────────────────────────────────────┤
│  🔴 ALTA      D-04   Vol zerado   ontem   [DETALHES] [APLICAR]     │
│  🔴 ALTA      S-02   Descer 50%   semana  [DETALHES] [APLICAR]     │
│  🟡 MÉDIA     C-01   Hook ruim    48h     [DETALHES] [APLICAR]     │
│  🟢 INFO      D-02   ROAS subiu   ontem   [DETALHES] [IGNORAR]     │
└────────────────────────────────────────────────────────────────────┘
```

### KPIs em destaque (cards)

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ PENDENTES    │  │ APLICADAS 7d │  │ TAXA DE      │  │ ÚLTIMA       │
│   12         │  │   8 / 11     │  │ ACEITE       │  │ ANÁLISE      │
│ 3🔴 5🟡 4🟢 │  │ (73%)        │  │   68%        │  │   há 12 min  │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

| KPI | O que indica |
|---|---|
| **Pendentes** | Sugestões aguardando decisão · com breakdown por severidade |
| **Aplicadas em 7 dias** | N aplicadas / N geradas (acompanha aderência da equipe) |
| **Taxa de aceite** | Aplicadas / (aplicadas + ignoradas) · meta ≥ 50% |
| **Última análise** | Quanto tempo desde última execução (não deve passar 24h pra diária) |

### Tabela principal · Sugestões pendentes

| Coluna | Origem | Display |
|---|---|---|
| Severidade | aba `Recomendações` col E | Badge 🔴/🟡/🟢 |
| Cadência | col C | Pill "diária" / "2d" / "semanal" |
| Regra | col D | Código + nome curto (ex: `D-03 · CPM disparou`) |
| Métrica | col J + L + M | "CPM: R$ 52 (vs R$ 38 baseline · +37%)" |
| Campanha/Criativo | col P + R | Nome curto |
| Ação sugerida | col S | Texto · até 80 chars |
| Idade | col B | "há 3h" · "há 2d" |
| Botões | — | `[Ver detalhes]` `[Aplicar]` `[Ignorar]` |

### Painéis secundários

#### a) Histórico de aplicação (gráfico de barras 7 dias)

```
Aplicadas       ████████████  8
Ignoradas       ██  2
Obsoletas       █  1
```

#### b) Qualidade das regras (top 10 acionadas)

```
Regra       Acionou   Aplicada   Taxa Aceite
D-03 CPM     12        9          75% ✅
S-01 Subir    6        6         100% ✅
C-04 Top3     4        1          25% ⚠️ (revisar threshold)
D-05 Freq     3        0           0% 🚨 (regra ruim · arquivar)
```

#### c) Próxima execução (timer)

```
Diária:    ⏱  daqui 19h
2 dias:    ⏱  daqui 38h
Semanal:   ⏱  daqui 4d 12h
```

### Ações sugeridas (botões)

```
[ ▶ Forçar análise diária agora ]    → POST /trafego-analise-diaria/run-now
[ ▶ Forçar análise 2 dias agora  ]    → POST /trafego-analise-2dias/run-now
[ ▶ Forçar análise semanal agora ]    → POST /trafego-analise-semanal/run-now
[ 📊 Relatório mensal das regras ]    → /relatorio/regras-trafego/{ANO_MES}
```

### Fluxo de aplicação

```
[Sugestão pendente aparece no dashboard]
          ↓
[Usuário clica "Ver detalhes"]
          ↓
[Modal mostra: contexto · valor observado vs baseline · ação sugerida]
          ↓
   ┌──────┴──────┐
   ↓             ↓
[Aplicar]    [Ignorar]
   ↓             ↓
[Botão dispara webhook que atualiza Sheets]
   - status = aplicada | ignorada
   - aplicada_em = NOW
   - aplicada_por = email do usuário logado
   - notas = (opcional) campo de texto
   ↓
[Sugestão sai da lista pendente]
   ↓
[Auditoria fica no histórico forever]
```

> **Nota importante:** o dashboard **não chama Meta Ads API** pra "aplicar" — quem aplica fisicamente é o gestor de tráfego no Ads Manager. O dashboard só registra a decisão.

### Filtros do módulo

```yaml
FILTROS:
  cadencia:        [todas | diaria | 2dias | semanal]
  severidade:      [todas | alta | media | informativo]
  status:          [pendente | aplicada | ignorada | todas]
  regra:           [autocomplete · D-XX, C-XX, S-XX]
  campanha:        [autocomplete · campanhas ativas]
  janela:          [última 24h | 7d | 30d | tudo]
```

### Schema da fonte (aba Recomendações)

> Ver schema completo em `trafego/template/07-analise-automatica.md` (24 colunas).

### Refresh policy

```yaml
REFRESH_INTERVAL:           60s              # via SWR
REFRESH_ON_FOCUS:           true
REFRESH_ON_RECONNECT:       true
TRIGGER_REFRESH_AFTER_APLY: true             # botão Aplicar dispara revalidação
```

---

## 1️⃣1️⃣ Ficha — qualificação de leads + conversão por tier

> **Fonte:**
> - Estrutura: `paginas/template/08-ficha-interesse.md`
> - Aba Sheets: `Fichas` (23 colunas · ver `automacoes/template/02-fluxos-de-captacao.md`)
> - Disparo de mensagens por tier: `mensageria/template/mensageria-template.md` (FASE 4-B)

### O que mostra

A ficha de interesse é o **filtro pré-pitch** do funil. Este módulo expõe **3 visões**: volume bruto, distribuição por tier e conversão real do tier HOT em compra do produto principal.

```
┌─────────────────────────────────────────────────────────────┐
│  Ficha de Interesse · {EDIÇÃO}                              │
├─────────────────────────────────────────────────────────────┤
│  [KPIs] [Distribuição tier] [Funil ingresso→ficha→compra]  │
│  [Top respostas Q10/Q11] [Fila SDR] [Heatmap tempo submit]  │
└─────────────────────────────────────────────────────────────┘
```

### KPIs em destaque (cards)

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ SUBMETIDAS   │  │ CONV.        │  │ TIER HOT     │  │ HOT → COMPRA │
│   1.247      │  │ INGR→FICHA   │  │              │  │              │
│ +18% vs LPS  │  │   45%        │  │  108 (8.7%)  │  │  32% (35)    │
│ 02/26        │  │ alvo: 40%+   │  │ alvo: 8-12%  │  │ alvo: 25-40% │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

| KPI | Cálculo | Alvo |
|---|---|---|
| **Submetidas** | count(`Fichas.status_submit = 'completo'`) | depende da edição |
| **Conv. Ingresso → Ficha** | submetidas / inscritos | ≥ 40% (mín) · ≥ 50% (ideal) |
| **% Tier HOT** | hot / submetidas | 8-12% (sweet spot) |
| **HOT → Compra** | comprou_acelerador / hot | 25-40% |

> 🚨 **Alertas automáticos:**
> - Se HOT < 5% → killer question (Q9) tá com promessa fraca OU tráfego desqualificado
> - Se HOT > 20% → killer question fraca demais (todo mundo concorda) · revisar
> - Se Conv. Ingresso → Ficha < 30% → comunicação na Aula 4 falhou OU mensageria de reforço fraca

### Tabela principal · Distribuição por tier

```
┌──────┬──────┬─────┬─────────────┬──────────────┬─────────────┐
│ Tier │  N   │  %  │ Faturamento │ Trafego/mês  │ Q9 Resposta │
│      │      │     │ médio       │ médio        │             │
├──────┼──────┼─────┼─────────────┼──────────────┼─────────────┤
│ 🔴HOT│ 108  │ 8.7%│ R$ 78k      │ R$ 32k       │ Com certeza │
│ 🟡WAR│ 412  │33.0%│ R$ 22k      │ R$ 8k        │ Tenho dúv.  │
│ ⚪COL│ 727  │58.3%│ R$ 4k       │ R$ 1k        │ Não/Vazio   │
└──────┴──────┴─────┴─────────────┴──────────────┴─────────────┘
```

### Painéis secundários

#### a) Funil consolidado (4 etapas)

```
[10.000 inscritos ingresso]
       ↓ 45%
[ 4.500 acessaram página ficha]
       ↓ 28%
[ 1.247 submeteram ficha]
       ↓  9% (HOT)
[   108 tier HOT]
       ↓ 32%
[    35 compraram Acelerador]
```

> Cada salto é uma **alavanca específica**: ingresso→ficha = comunicação Aula 4 · ficha→tier-HOT = qualidade do tráfego · HOT→compra = closer/SDR + oferta.

#### b) Heatmap de submissão (hora × dia)

Mostra quando os leads preenchem ficha (típico LPSG):

```
        Qui    Sex    Sáb    Dom    Seg
07:00  ░░░░░░ ░░░░░░ ▒▒▒▒▒▒ ░░░░░░ ░░░░░░
12:00  ▒▒▒▒▒▒ ▒▒▒▒▒▒ ████▓▓ ▓▓▒▒▒▒ ▒▒░░░░
18:00  ▓▓▓▓▓▓ ████▓▓ ████▓▓ ████▓▓ ▒▒▒▒░░
21:00  ████▓▓ ████▓▓ ▓▓▒▒░░ ████▓▓ ▓▓▒▒░░
```

> **Insight tático:** maior pico Sáb 12h-18h (reforço sábado funciona) · 2º pico Dom pré-pitch.

#### c) Top 10 respostas Q10 (história/desafio)

Lista textarea-Q10 ordenada por tier HOT primeiro, com keywords destacadas.

```
🔴 HOT  · "Vendo curso de Excel há 5 anos · queimo 30k/mês em CPL · queria
          escalar pra R$ 1M sem mais equipe"           [LIGAR]

🔴 HOT  · "Travei em R$ 80k/mês · não consigo sair · acho que problema
          é falta de método estruturado de tráfego"   [LIGAR]

🟡 WARM · "Faturamento estável em R$ 30k mas quero 2x"  [GRUPO VIP]
```

#### d) Fila SDR (kanban mini)

```
┌────────────┬────────────┬────────────┬────────────┐
│ NOVO HOT   │ TENTATIVA  │ AGENDADO   │ FECHADO    │
│   12       │     8      │     5      │   3 hoje   │
└────────────┴────────────┴────────────┴────────────┘
```

> Linka pra `operacao-lpsg/papel-sdr.md` (SLA: ligar em ≤ 24h).

#### e) Distribuição por outras dimensões (filtros)

Drill-down por:
- **Faturamento** (Q7) → quem fatura mais converte mais?
- **Tempo no digital** (Q2) → 2+ anos converte mais que < 6m?
- **Estágio operacional** (Q3) → travado-na-escala é o sweet spot?
- **Funil que roda hoje** (Q4) → quem JÁ roda lançamento pago é mais HOT?

### Ações sugeridas (botões)

```
[📊 Exportar lista HOT como CSV]            → download lista pra closer
[📞 Adicionar tag SDR-prioridade]           → ManyChat custom field
[📨 Disparar reforço pra WARM]              → fluxo nutrição 7d
[📈 Comparar vs edição anterior]            → splitscreen de funil
[🔄 Forçar re-cálculo do tier]              → POST /ficha/recalc-all
```

### Filtros do módulo

```yaml
FILTROS:
  edicao:                [edição atual | anterior | comparar]
  tier:                  [todos | hot | warm | cold]
  status_atendimento:    [pendente | em_atendimento | comprou | descartou]
  janela_submit:         [hoje | últimas 24h | 7d | tudo desde abertura]
  faturamento:           [drill-down nas 5 faixas]
  tempo_digital:         [drill-down nas 4 faixas]
```

### Schema da fonte (aba Fichas)

> Schema completo (23 colunas A-W) em `automacoes/template/02-fluxos-de-captacao.md` (Fluxo 4).
> Adapter: `dashboard/template/03-fonte-de-dados.md` (Modo 8).

### Refresh policy

```yaml
REFRESH_INTERVAL:           60s              # via SWR
REFRESH_ON_FOCUS:           true
TRIGGER_REFRESH_AFTER_TIER: true             # webhook ficha → revalida
```

### Comportamento por fase do evento

| Fase | O que mostrar com prioridade |
|---|---|
| **Antes da Aula 4** (ficha fechada) | Módulo oculto OU "ficha abre quinta · Aula 4" |
| **Quinta-Sexta** (ficha aberta · pré-pitch) | KPIs ao vivo · meta diária de submissões |
| **Sábado** (tira-dúvidas) | Top respostas Q10/Q11 → input pro Leo no live |
| **Domingo** (pitch) | Foco fila HOT pro closer (modo "presencial" no pitch) |
| **Segunda+** (carrinho aberto) | Conversão HOT/WARM/COLD → compra · fila SDR ativa |
| **Pós-fechamento** | Análise consolidada · ICP refinado pra próxima edição |

---

## 🧱 Padrão visual de cada módulo

Todos os módulos seguem o mesmo layout:

```
┌────────────────────────────────────────┐
│  HEADER (título + filtros)             │
├────────────────────────────────────────┤
│  KPI cards (3-5 métricas-chave)        │
├────────────────────────────────────────┤
│  Tabela principal OU gráfico principal │
├────────────────────────────────────────┤
│  Painéis secundários (gráficos · cards)│
├────────────────────────────────────────┤
│  Ações sugeridas (botões)              │
└────────────────────────────────────────┘
```

### Componentes reutilizáveis

| Componente | Onde aparece |
|---|---|
| `KpiCard` | Todos os módulos · cards de métricas |
| `StatusBadge` | Tabelas · indica verde/amarelo/vermelho |
| `LaunchSelector` | Header global · troca lançamento ativo |
| `AlertsList` | Visão Geral + módulos com regras ativas |
| `FunilVisual` | Visão Geral · mensageria |
| `CountdownTimer` | Tsunami · operação |
| `KanbanBoard` | Recuperação · operação |
| `LiveFeed` | Tsunami (vendas ao vivo) |
| `ComparisonTable` | Estratégico (vs histórico) |

---

## 🔄 Estado de cada módulo (load progressivo)

```yaml
ALWAYS_LOADED:        # carrega no boot
  - visao-geral

LAZY_LOADED:          # carrega quando aba ativa
  - trafego
  - paginas
  - aulas
  - mensageria
  - recuperacao
  - operacao
  - estrategico
  - sugestoes          # módulo 10 · engine de análise
  - ficha              # módulo 11 · fila de leads HOT/WARM/COLD

REAL_TIME:            # polling 5s · só quando ativo
  - tsunami            # apenas dom 20h até sex 23h59
```

> Se um módulo falhar (API down · planilha vazia), o resto do dashboard continua funcionando.

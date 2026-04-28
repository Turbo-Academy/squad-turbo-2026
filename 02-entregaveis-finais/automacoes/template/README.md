# Template Automações LPSG

> Como usar o template para automatizar todo o ciclo do lançamento pago semanal.

---

## 📋 Os 9 arquivos

```
template/
├── README.md                              ← você está aqui
├── 00-variaveis-globais.md                Tokens · webhooks · timezones · SLAs · tags
├── 01-arquitetura.md                      3 camadas · n8n + ManyChat + Sheets
├── 02-fluxos-de-captacao.md               Pixel/CAPI · Hotmart · onboarding
├── 03-fluxos-do-evento.md                 Lembretes · áudios · ficha · pico ao vivo
├── 04-fluxos-do-tsunami.md                Aquecimento · 4 janelas · SLA closer
├── 05-fluxos-de-recuperacao.md            D+1 a D+7 · 80/20 bot/humano
├── 06-integracoes.md                      Hotmart · WABA · CAPI · Sheets · YT · ManyChat
├── 07-monitoramento.md                    Health check · alertas · disaster recovery
└── 08-sistema-de-tags-e-fases.md          Tag por semana ISO · 4 fases (passado/presente/futuro/ex-aluno)
```

---

## 🚀 Como usar

### Etapa 1 — Preencher `00-variaveis-globais.md`

Tokens · datas-chave · stack escolhida (n8n cloud ou self-hosted · ManyChat ou WATI).

### Etapa 2 — Setup das integrações

`06-integracoes.md` traz checklist passo a passo de:
- Hotmart (webhooks + API)
- Meta WABA (templates + envio)
- Meta CAPI (eventos server-side)
- Google Sheets (Service Account)
- YouTube Live API
- ManyChat (API + External Request)

### Etapa 3 — Importar workflows n8n

Os JSONs em `n8n-workflows/` (gerados pela skill) são importáveis no n8n via UI ou API.

### Etapa 4 — Health check

Ativar o `99-health-check` antes de qualquer outro workflow.

---

## 🎯 Para quem é cada arquivo

| Arquivo | Quem lê |
|---|---|
| `00-variaveis-globais.md` | DevOps · gestor (preenche) |
| `01-arquitetura.md` | Arquiteto · DevOps |
| `02-fluxos-de-captacao.md` | Time de tráfego · DevOps |
| `03-fluxos-do-evento.md` | Time de produção · social |
| `04-fluxos-do-tsunami.md` | Closer · operação |
| `05-fluxos-de-recuperacao.md` | Closer · DevOps |
| `06-integracoes.md` | DevOps (executa setup) |
| `07-monitoramento.md` | Operação · DevOps |

---

## 🧭 Skills relacionadas

- `automacoes-lpsg` — esta skill (constrói automações)
- `mensageria-lpsg` — define os textos (templates Utility/Marketing)
- `oferta-lpsg` — define horários do tsunami que viram crons
- `dashboard-lpsg` — consome dados gravados pelas automações
- `criativos-lpsg` — UTM dos criativos vai pro Sheets via CAPI

---

## 📦 Output esperado

```
automacoes-lpsg/
├── n8n-workflows/                     13 workflows JSON
├── manychat-flows/                    Backups exportados
├── docs/                              7 .md (este template)
├── scripts/                           deploy · backup · health
├── .env.example
├── docker-compose.yml                 (se self-hosted)
└── README.md
```

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Validado em 12 meses de operação multi-nicho.

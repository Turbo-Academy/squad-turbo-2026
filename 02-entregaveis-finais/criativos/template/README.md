# Template Criativos LPSG

> Como usar o template para gerar bateladas de criativos (5+5+5) para qualquer LPSG.

---

## 📋 Os 7 arquivos

```
template/
├── README.md                          ← você está aqui
├── 00-variaveis-globais.md            Expert · paleta · briefing · variáveis
├── 01-estrutura-do-criativo.md        Hook · Body · CTA (3 partes universais)
├── 02-batelada-15-criativos.md        Liberação por vez · 5+5+5 · nomenclatura
├── 03-criativo-estatico.md            5 estáticos · com foto do expert
├── 04-carrossel.md                    5 carrosséis · 8-10 cards · último vídeo 4-5s
├── 05-roteiro-video.md                5 roteiros prontos pra gravar · 30-45s (ads pagos)
├── 06-prompts-ia-design.md            Prompts Claude Designer / Nano Banana / GPT / MJ
├── 07-modos-de-output.md              Modo A (pronto pra subir) · Modo B (brief IA)
└── 08-videos-longos-60-360s.md        Vídeos longos · storytelling · curiosidade · hook rate
```

---

## 🚀 Como usar (passo a passo)

### Etapa 1 — Preencher `00-variaveis-globais.md`

Substitui `{NOME}` pelos dados do projeto:
- `{EXPERT_NOME}`, `{EXPERT_FOTO_PRINCIPAL}`
- `{PALETA_PRIMARIA}`, `{FONTE_HEADLINE}`
- `{NOME_EVENTO}`, `{SIGLA}`, `{TICKET_INGRESSO}`
- `{AVATAR_DOR_PRINCIPAL}`, `{AVATAR_OBJECAO_*}`

### Etapa 2 — Definir batelada

Decide a data da batelada e os ângulos (5 hooks · 5 dores · 3 tons). Ver `02-batelada-15-criativos.md`.

### Etapa 3 — Escolher modo de output

Pergunta-se:
- **Modo A** — pronto pra subir (Claude Designer / HTML)
- **Modo B** — brief pra IA (Nano Banana · GPT Image · MJ · Veo)
- **Híbrido** — mistura (recomendado)

### Etapa 4 — Gerar

Chamar a skill `criativos-lpsg`:

```
"Gera a batelada do dia 12/05/26 no MODO HÍBRIDO:
 - 3 estáticos em A (Claude Designer)
 - 2 estáticos em B (Nano Banana)
 - Carrosséis: cards 1-9 em A · card 10 brief pro Veo
 - Vídeos: roteiros completos pra gravação humana"
```

### Etapa 5 — Subir

1. Renomear os arquivos com nomenclatura `{SIGLA}_{DDMMYY}_{TIPO}_{NUMERO}`
2. Subir na Meta Ads (campanha do `trafego-lpsg`)
3. Acompanhar performance no `dashboard-lpsg` (`/trafego`)

---

## 🎯 Para quem é cada arquivo

| Arquivo | Quem lê |
|---|---|
| `00-variaveis-globais.md` | Gestor (preenche) · designer (consulta) |
| `01-estrutura-do-criativo.md` | Copywriter · designer · gravação |
| `02-batelada-15-criativos.md` | Gestor de tráfego · gestor de produção |
| `03-criativo-estatico.md` | Designer (executa) |
| `04-carrossel.md` | Designer (cards) + editor (vídeo card 10) |
| `05-roteiro-video.md` | Expert (lê o roteiro) · editor de vídeo |
| `06-prompts-ia-design.md` | Quem opera as IAs |
| `07-modos-de-output.md` | Decisão estratégica antes de produzir |

---

## 📊 Métricas que validam

Os criativos sobem na campanha ASC do `trafego-lpsg` e são monitorados no `dashboard-lpsg`:

```yaml
HOOK_RATE:    ≥ 20% (mín) · ≥ 30% (ideal)
HOLD_RATE:    ≥ 5%  · ≥ 10%
BODY_RATE:    ≥ 2%  · ≥ 5%
ROAS:         ≥ 1.0 · ≥ 1.25
CPM:          ≤ R$ 40
```

---

## 🧭 Skills relacionadas

- `criativos-lpsg` — esta skill (gera bateladas)
- `trafego-lpsg` — onde os criativos sobem (Meta ASC · 15 criativos)
- `paginas-lpsg` — destino dos criativos (URL_PAGINA_INGRESSO)
- `oferta-lpsg` — origem da copy do CTA (ticket · tsunami · garantia)
- `mensageria-lpsg` — variações de hook ecoam nas mensagens
- `dashboard-lpsg` — onde performance é monitorada (`/trafego`)

---

## 📦 Output esperado por batelada

```
batelada-{DDMMYY}/
├── README-batelada.md             ← visão geral · briefs centrais
├── estaticos/                     ← 5 estáticos
├── carrosseis/                    ← 5 carrosséis
└── videos/                        ← 5 roteiros de vídeo

Total: 15 criativos · prontos pra subir OU briefs pra IA
```

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Validado em 12 meses de operação multi-nicho.

# Dashboard — LPSG v2

> Dashboard operacional do Lançamento Pago Semanal Gravado.
> Skill: **`dashboard-lpsg`**.

---

## 🎯 O método em 3 frases

1. **9 módulos · cada um responde uma pergunta operacional** — visão geral · tráfego · páginas · aulas · mensageria · tsunami · recuperação · operação · estratégico.
2. **6 fontes de dados com adapters** — XLSX · Sheets · Meta API · Hotmart · GA4 · YouTube. Schema único interno.
3. **2 modos de output** — Web app (Vercel · sync ao vivo) ou HTML standalone (offline · 250 KB · funciona em qualquer máquina).

---

## 📁 Estrutura

```
dashboard/
├── README.md                          ← você está aqui
│
├── template/                          Template genérico (reutilizável)
│   ├── README.md
│   ├── 00-variaveis-globais.md
│   ├── 01-arquitetura.md
│   ├── 02-modulos-do-dashboard.md
│   ├── 03-fonte-de-dados.md
│   ├── 04-alertas-e-diagnostico.md
│   └── 05-deploy-e-modos-de-output.md
│
├── exemplo-lpsg/                      Exemplo preenchido (LPSG do Leo)
│   └── 00-variaveis-preenchidas.md
│
└── referencia-v1/                     Dashboard v1 (referência histórica)
    ├── dashboard-lpsg.html            HTML standalone v1 · 156 KB
    ├── Como-Usar-Dashboard-LPSG.docx
    └── Planilha-LPSG-v1.xlsx
```

---

## 🚦 v1 vs v2 (comparativo)

| | v1 (referência) | v2 (atual) |
|---|---|---|
| **Stack** | HTML/JS standalone + JSON embed | Next.js 14 + TypeScript + Tailwind |
| **Atualização** | Importa XLSX manual | Sync ao vivo (Sheets · APIs) |
| **Módulos** | 4 (métricas · estratégico · kanban · docs) | 9 (granular · 1 pergunta cada) |
| **Alertas** | Cores manuais | Motor de regras automático |
| **Modos** | 1 (HTML) | 2 (Web app + standalone) |
| **Histórico** | 3 lançamentos hardcoded | N lançamentos via Sheets |
| **Tsunami** | Sem real-time | Real-time (polling 5s) |
| **Compatibilidade** | — | **Mantém XLSX format da v1** |

> **Migração:** quem já tem planilha v1 só duplo-clica no novo .html standalone — funciona igual.

---

## 🧭 Skills relacionadas

- `dashboard-lpsg` — esta skill (template do dashboard)
- `paginas-lpsg` — mesma stack (Next.js + Tailwind + Vercel)
- `trafego-lpsg` — alimenta `/trafego` (Hook/Hold/Body Rate · 4 ações)
- `mensageria-lpsg` — alimenta `/mensageria` (Utility vs Marketing · entrega)
- `oferta-lpsg` — alimenta `/tsunami` (4 janelas · 6h50/7h00/10h/23h59)
- `estrutura-aulas-lpsg` — alimenta `/aulas` (pico ao vivo · retenção)

---

## 📊 Métricas-alvo (consolidadas)

```yaml
# Tráfego
ROAS_INGRESSO: ≥ 1.0 (mín) · ≥ 1.25 (ideal)
HOOK_RATE:     ≥ 20%   ·    ≥ 30%
HOLD_RATE:     ≥ 5%    ·    ≥ 10%
BODY_RATE:     ≥ 2%    ·    ≥ 5%
CPM:           ≤ R$ 40

# Páginas
CONVERSAO:     ≥ 5%    ·    ≥ 7%
LCP:           < 1.5s
LIGHTHOUSE:    ≥ 95
PESO:          < 1 MB

# Aulas
COMPARECIMENTO_A1: ≥ 30% dos inscritos
RETENCAO_A2:       ≥ 70% do pico A1
RETENCAO_A3-A5:    ≥ 85% da anterior
PITCH_BOOST_A6:    ≥ 130% do pico A5

# Conversão
PREENCHIMENTO_FICHA:  ≥ 25% (mín) · ≥ 40% (ideal)
CONVERSAO_PITCH:      ≥ 7% · ≥ 10%
PERCENT_VENDAS_DIA1:  ≥ 70%
RECUPERACAO_D1_D7:    5–15% adicional

# Oferta
ANCORAGEM_STACK:  ≥ 1.5x · ≥ 2x
DEVOLUCAO_INCONDICIONAL: ≤ 3%
DEVOLUCAO_CONDICIONAL:   ≤ 1%

# Mensageria
PERCENT_UTILITY:  ≥ 80%
TAXA_ENTREGA:     ≥ 95%
TAXA_LEITURA:     ≥ 70%
CTA_REACAO_EMOJI: ≥ 40%

# Operação
SLA_CLOSER:           ≤ 5 min
TAXA_RESPOSTA_WPP:    ≥ 30%
CONVERSAO_RESPOSTA:   ≥ 10%
```

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Estrutura validada em 12 meses de operação multi-nicho.

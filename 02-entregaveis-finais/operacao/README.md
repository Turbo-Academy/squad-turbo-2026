# Operação e Equipe — LPSG

> Estrutura de time · papéis · cronograma · rituais · SOPs · contratação.
> Skill: **`operacao-lpsg`**.

---

## 🎯 O método em 4 frases

1. **LPSG é PERPÉTUO · semanal · sempre rodando** — toda segunda começa novo ciclo (aulas) + abre carrinho do anterior · captação não para 24/7.
2. **3 tiers de time · 3 patamares de receita** — Tier 1 (2 pessoas: Expert + Estrategista) faz até 6 dígitos/mês · Tier 2 (4 pessoas) faz 6-7 dígitos/mês · Tier 3 (7+) faz +7 dígitos/mês.
3. **1 papel = 1 dor resolvida · 1 DRI por entregável** — sem ambiguidade · sem Expert virando gerente · Estrategista é a peça-chave do Tier 1 (faz tudo o que Expert não faz).
4. **Reunião sem output = reunião que não devia existir** — Weekly Planning quarta · Weekly Retro sexta · Monthly Review 1ª quarta do mês · Daily seg-sex durante evento · pós-mortem mensal (não por edição · porque é semanal).

---

## 📁 Estrutura

```
operacao/
├── README.md                              ← você está aqui
│
├── template/                              Template genérico (reutilizável)
│   ├── README.md
│   ├── 00-variaveis-globais.md            Papéis · SLAs · ferramentas
│   ├── 01-papeis-e-raci.md                9 papéis · matriz RACI por tier
│   ├── 02-time-minimo-2-pessoas.md        Plano 2 → 4 → 7+
│   ├── 03-cronograma-da-semana.md         Cronograma 4 semanas
│   ├── 04-rituais-e-reunioes.md           6 rituais regulares
│   ├── 05-kanban-e-ferramentas.md         Notion · 4 colunas · 3 swimlanes
│   ├── 06-sops-padroes-operacionais.md    12 SOPs prontas
│   └── 07-contratacao-e-onboarding.md     Perfis · 30/60/90
│
└── exemplo-lpsg/                          Exemplo preenchido (LPSG do Leo)
    └── 00-variaveis-preenchidas.md
```

---

## 👥 Os 9 papéis (por tier)

| Papel | Tipo | Tier 1 (2p) | Tier 2 (4p) | Tier 3 (7+p) |
|---|---|---|---|---|
| Expert | Sócio | ✅ | ✅ | ✅ |
| Estrategista (faz tudo) | CLT/PJ | ✅ | ✅ (foca coord+closer) | → vira Head of Ops |
| Gestor de Tráfego | CLT/PJ | absorvido | ✅ | ✅ |
| Gestor de Automações | CLT/PJ | absorvido | ✅ | ✅ |
| Designer | PJ | absorvido (IA) | absorvido (IA) | ✅ |
| Closer Humano | PJ + comissão | absorvido | absorvido | ✅ (×2) |
| Editor de Vídeo | PJ | absorvido | absorvido | ✅ |
| Social Media | PJ | Expert | parcial | ✅ |
| Customer Success | PJ | absorvido | absorvido | ✅ |

---

## 🎯 SLAs principais

```yaml
SLA_CLOSER_CHECKOUT:      5 min        # resposta a checkout iniciado
SLA_BOAS_VINDAS:          10 min       # após compra de ingresso
SLA_FICHA_RECEBIDA:       2 min        # confirmação Typeform
SLA_DUVIDA_ALUNO:         2 horas      # úteis · resposta no grupo
SLA_RESPOSTA_INTERNO:     4 horas      # úteis · Slack/Telegram
SLA_DECISAO_LEO:          24 horas     # estratégicas que escalonam
SLA_FALHA_AUTOMACAO:      5 min        # alerta resolvido OU escalado
```

---

## 📅 Ritmo semanal

```yaml
WEEKLY_PLANNING:          "Quarta 10h · 60min"
WEEKLY_RETRO:             "Sexta 10h · 60min (com Expert · foco conteúdo+criativos)"
MONTHLY_REVIEW:           "1ª quarta do mês · 10h · 60min"
DAILY:                    "Apenas durante evento (W) e carrinho (W+1)"
1:1 EXPERT ↔ DRI:         "Mensal · 15-30min cada"
POS_MORTEM:               "Sex W+2 · 2-3h por edição"
```

---

## 🛠️ Stack

```yaml
NOTION:                   "Kanban + Docs + SOPs + Decision Log"
SLACK:                    "Comunicação · alertas · canais por área"
GOOGLE_WORKSPACE:         "Drive · Calendar · Meet · Sheets"
LOOM:                     "Vídeo assíncrono · substitui reunião"
```

---

## 🧭 Skills relacionadas

- `operacao-lpsg` — esta skill
- `mensageria-lpsg` — define textos que Operação executa
- `criativos-lpsg` — Designer entrega bateladas
- `dashboard-lpsg` — métricas que Operação acompanha
- `automacoes-lpsg` — Operação coordena · Dev configura
- `estrutura-aulas-lpsg` — Expert grava · Operação coordena

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Validado em 12 meses de operação multi-nicho.

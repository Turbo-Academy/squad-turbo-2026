# Automações — LPSG

> Automação de todo o ciclo do lançamento pago semanal · n8n + ManyChat + integrações.
> Skill: **`automacoes-lpsg`**.

---

## 🎯 O método em 5 frases

1. **LPSG é PERPÉTUO** — semanal · sempre rodando · 2 ciclos em paralelo (aulas + carrinho) · captação 24/7. Automações nunca pausam.
2. **3 camadas independentes** — n8n (lógica) · ManyChat (UX nativa de WPP/Insta) · Sheets (storage).
3. **Cada fluxo tem 1 trigger e 1 estado final** — webhook chega → enrich → grava no Sheets → dispara ação. Sem fluxos amontoados.
4. **80% Utility / 20% Marketing nos disparos WhatsApp** — economia de R$ 65k/mês em mensageria + reputação preservada.
5. **Tag por semana ISO + 4 fases** — `LPSG-W{NN}` é a identidade · `PASSADO/PRESENTE/FUTURO/EX-ALUNO` é a fase · transição automática toda segunda 00:00.

---

## 📁 Estrutura

```
automacoes/
├── README.md                              ← você está aqui
│
├── template/                              Template genérico (reutilizável)
│   ├── README.md
│   ├── 00-variaveis-globais.md            Tokens · webhooks · SLAs
│   ├── 01-arquitetura.md                  3 camadas · stack
│   ├── 02-fluxos-de-captacao.md           Anúncio → checkout → onboarding
│   ├── 03-fluxos-do-evento.md             Lembretes · áudios · ficha · pico ao vivo
│   ├── 04-fluxos-do-tsunami.md            Pitch · 4 janelas · SLA closer ≤5min
│   ├── 05-fluxos-de-recuperacao.md        D+1 a D+7 · híbrido bot/humano
│   ├── 06-integracoes.md                  Hotmart · WABA · CAPI · Sheets · YT · ManyChat
│   ├── 07-monitoramento.md                Health check · alertas · disaster recovery
│   └── 08-sistema-de-tags-e-fases.md      Tag por semana ISO · 4 fases (passado/presente/futuro/ex-aluno)
│
└── exemplo-lpsg/                          Exemplo preenchido (LPSG do Leo)
    └── 00-variaveis-preenchidas.md
```

---

## 🛠️ Stack canônica

```yaml
ORQUESTRADOR:             "n8n (cloud · Pro plan)"
CHATBOT_WHATSAPP:         "ManyChat (Pro)"
STORAGE:                  "Google Sheets (Service Account)"
INTEGRACOES:
  - "Hotmart (webhooks + API)"
  - "Meta WABA (Cloud API)"
  - "Meta CAPI (server-side events)"
  - "YouTube Data API v3"
HOSPEDAGEM:               "n8n.cloud OU self-hosted (Docker · VPS R$30/mês)"
```

---

## 🌊 Os 13 workflows base

```
01 · Captação anúncio→página           (Pixel + CAPI)
02 · Compra de ingresso                (Hotmart webhook)
03 · Onboarding pós-compra             (10min após · ManyChat)
04 · Lembretes pré-aula                (5 crons · 06:45 seg-sex)
05 · Áudios noturnos                   (5 crons · 20h seg-sex)
06 · Ficha de interesse                (Aula 4 · Typeform)
07 · Aquecimento pré-pitch             (4 disparos · sáb-dom)
08 · Tsunami · 4 janelas               (06:50 · 07:00 · 08:00 · 10:00 · 23:00)
09 · Checkout iniciado · SLA closer    (≤5min · Slack/Telegram)
10 · Compra do produto                 (Hotmart webhook)
11 · Recuperação D+1 a D+7             (80/20 bot/humano)
12 · Pico ao vivo (YT API)             (cron 5min durante lives)
13 · Vendas ao vivo (Hotmart)          (cron 30s durante carrinho)
+ 99 · Health check                    (cron 5min · monitora tudo)
```

---

## 💰 Custo estimado

```yaml
n8n.cloud (Pro):          R$ 100/mês
ManyChat (Pro · 1k):      R$ 130/mês
WABA (200k disparos):     R$ 14.800/mês     # 80% Utility · 20% Marketing
Sheets (gratuito):        R$ 0
Hospedagem alternativa:   R$ 30/mês          # VPS self-hosted

TOTAL operacional:        ~R$ 15.000/mês
```

> Comparado com 100% Marketing: **economia de R$ 65k/mês** só em mensageria.

---

## 🚦 SLAs

```yaml
SLA_CLOSER_CHECKOUT:      5 min        # resposta a checkout iniciado
SLA_BOAS_VINDAS:          10 min       # após compra de ingresso
SLA_FICHA_RECEBIDA:       2 min        # confirmação Typeform
SLA_FALHA_AUTOMACAO:      5 min        # alerta no Slack
TEMPO_ALERTA:             ≤ 5 min      # detecção até notificação
TEMPO_RECUPERACAO:        ≤ 30 min     # alerta até resolução
```

---

## 🧭 Skills relacionadas

- `automacoes-lpsg` — esta skill
- `mensageria-lpsg` — define textos das mensagens (Utility/Marketing)
- `oferta-lpsg` — define horários do tsunami (viram crons)
- `dashboard-lpsg` — consome dados gravados pelas automações
- `criativos-lpsg` — UTM dos criativos passa via CAPI
- `paginas-lpsg` — disparam Pixel + CAPI

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Validado em 12 meses de operação multi-nicho.

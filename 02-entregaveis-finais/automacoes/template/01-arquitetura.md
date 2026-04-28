# 01 · Arquitetura — Automações LPSG

> 3 camadas · 1 fonte da verdade · zero acoplamento.

---

## 🎯 Princípio: 3 camadas independentes

```
┌─────────────────────────────────────────────────────┐
│  CAMADA 1 — ORQUESTRADOR (n8n)                       │
│  Lógica · estado · enrich · roteamento                │
└─────────────────────────────────────────────────────┘
                       ↕
┌─────────────────────────────────────────────────────┐
│  CAMADA 2 — CHATBOTS (ManyChat · WATI)               │
│  UX nativa de WhatsApp / Instagram / Telegram         │
└─────────────────────────────────────────────────────┘
                       ↕
┌─────────────────────────────────────────────────────┐
│  CAMADA 3 — INTEGRAÇÕES (Hotmart · Meta · YouTube)   │
│  APIs externas · webhooks · CAPI                      │
└─────────────────────────────────────────────────────┘
                       ↕
┌─────────────────────────────────────────────────────┐
│  STORAGE — Google Sheets (fonte da verdade)          │
│  Estado do lead · histórico · alimentação dashboard   │
└─────────────────────────────────────────────────────┘
```

> **Por que separado?** Se ManyChat cair, n8n continua. Se n8n cair, ManyChat continua. Se Hotmart mudar API, só uma integração quebra. Zero single-point-of-failure.

---

## 🔄 Fluxo macro (do anúncio à recuperação)

```
[Meta Ad]
    ↓ click
[Página de ingresso] ────→ [Pixel + CAPI envia 'Lead' pra Meta]
    ↓ checkout
[Hotmart]
    ↓ webhook compra
[n8n] ─→ enrich (telefone limpo · email validado)
    ↓
[Sheets] grava status: INSCRITO_INGRESSO
    ↓ trigger
[ManyChat] envia boas-vindas (10 min após compra)
    ↓ link do grupo
[Lead entra no grupo WhatsApp]
    ↓
[Cron diário 07:00] ─→ [n8n] ─→ [ManyChat] envia lembrete da aula
    ↓
[Reação 🚀 no áudio] ─→ [ManyChat webhook] ─→ [n8n] grava engajamento
    ↓ ... pré-pitch
[Aula 4] ─→ [ManyChat] envia ficha Typeform
    ↓ resposta
[Typeform webhook] ─→ [n8n] ─→ [Sheets] FICHA_PREENCHIDA
    ↓ ... pitch
[Aula 6 acaba] ─→ [n8n] dispara série de mensagens (D-1, D-12h, D-1h da abertura)
    ↓
[Carrinho abre 06:50] ─→ [ManyChat] dispara link da janela 10min
    ↓ checkout
[Hotmart webhook checkout iniciado] ─→ [n8n] ─→ [Slack/Telegram closer]
    ↓ <5min
[Closer humano envia mensagem 1:1]
    ↓ comprou
[Hotmart webhook compra] ─→ [n8n] ─→ remove de recuperação · adiciona ao curso
    ↓ não comprou em 24h
[n8n] ─→ [Sheets] EM_RECUPERACAO_D1
    ↓ D+1 a D+7
[Closer humano + automação híbrida]
```

---

## 🏗️ Estrutura de pastas (n8n + repositório)

```
automacoes-lpsg/
│
├── n8n-workflows/                       Exportados em JSON (versionar no git)
│   ├── 01-captacao-anuncio-pagina.json
│   ├── 02-onboarding-pos-compra.json
│   ├── 03-pre-evento-aquecimento.json
│   ├── 04-evento-lembretes-aulas.json
│   ├── 05-ficha-interesse-aula-4.json
│   ├── 06-pitch-disparos-aula-6.json
│   ├── 07-tsunami-janelas-carrinho.json
│   ├── 08-checkout-iniciado-sla-closer.json
│   ├── 09-recuperacao-D1-D7.json
│   ├── 10-pos-venda-onboarding-aluno.json
│   ├── 11-meta-capi-eventos.json
│   ├── 12-sheets-sync-dashboard.json
│   └── 99-health-check.json
│
├── manychat-flows/                      Backups exportados
│   ├── boas-vindas.json
│   ├── lembrete-aula.json
│   ├── audio-noturno.json
│   ├── ficha-interesse.json
│   └── pitch-tsunami.json
│
├── docs/
│   ├── 00-variaveis-globais.md
│   ├── 01-arquitetura.md (este)
│   ├── 02-fluxos-de-captacao.md
│   ├── 03-fluxos-do-evento.md
│   ├── 04-fluxos-do-tsunami.md
│   ├── 05-fluxos-de-recuperacao.md
│   ├── 06-integracoes.md
│   └── 07-monitoramento.md
│
├── scripts/
│   ├── deploy-n8n-workflows.sh          Sobe JSONs no n8n via API
│   ├── backup-sheets.py                 Snapshot diário
│   └── health-check.sh                  Cron · valida endpoints
│
├── .env.example
├── docker-compose.yml                   n8n self-hosted (opcional)
└── README.md
```

---

## ⚙️ n8n — config recomendada

```yaml
HOSPEDAGEM:               "n8n.cloud (free tier 5k execs/mês ou Pro)"
ALTERNATIVA_SELF_HOSTED:  "Docker · VPS R$ 30/mês (Hetzner · DigitalOcean)"

VERSAO:                   "1.x (App Router de workflows · subworkflow nativo)"

DATABASE:                 "PostgreSQL (cloud · gerenciado pela n8n.cloud)"
                          # ou SQLite se self-hosted leve

WEBHOOK_TIMEOUT:          120         # segundos · default 30 não basta pra Hotmart
QUEUE_MODE:               true        # se >5k execs/dia · queue separada
EXECUTION_TIMEOUT:        300         # segundos
WORKFLOW_TIMEOUT:         600         # segundos (jobs grandes · sync planilha)

LOG_LEVEL:                "info"
ERROR_TRIGGER:            "habilitado em TODOS os workflows"
                          # n8n tem nó "Error Trigger" que centraliza falhas
```

### Padrão de workflow (template universal n8n)

```
[Trigger]                            ← Webhook · Schedule · Hotmart · ManyChat
    ↓
[Validate input]                     ← IF node · valida fields obrigatórios
    ↓
[Enrich data]                        ← limpar telefone · validar email
    ↓
[Update state in Sheets]             ← grava status atual do lead
    ↓
[Branch logic]                       ← Switch · qual caminho seguir
    ↓
[Action node]                        ← envia ManyChat · WhatsApp · Email
    ↓
[Log success]                        ← grava log · timestamp
    ↓
[Catch errors]                       ← Error Trigger · alerta Slack/Telegram
```

---

## 💬 ManyChat — config recomendada

```yaml
PLATAFORMAS:              ["WhatsApp", "Instagram"]
PLANO_RECOMENDADO:        "Pro ($25/mês para até 1k contatos)"
                          # acima de 1k contatos · custos escalam · revisar

INTEGRACAO_N8N:           "via External Request (HTTP request do ManyChat pra n8n)"
                          # OU via Zapier/Make como ponte

USO_RECOMENDADO:
  - "Coletar opt-in (lead magnet)"
  - "Enviar fluxo conversacional (boas-vindas · onboarding)"
  - "Capturar reações (🚀) e disparar webhooks pro n8n"
  - "Enviar templates utility da WABA"

NAO_USAR_PRA:
  - "Lógica complexa (use n8n)"
  - "Estado persistente (use Sheets)"
  - "Disparos em massa pesados (use Meta API direta no n8n)"
```

---

## 🔌 Como n8n e ManyChat conversam

### ManyChat → n8n (eventos)

```javascript
// No ManyChat · External Request node
POST https://n8n.dominio.com/webhook/manychat-evento
Headers:
  Content-Type: application/json
  X-Secret: {SECRET_HEADER}            // valida no n8n
Body:
  {
    "event": "reagiu_emoji",
    "user_id": "{{user.id}}",
    "phone": "{{user.phone}}",
    "emoji": "🚀",
    "context": "audio_noturno_aula_2"
  }
```

### n8n → ManyChat (envio)

```javascript
// No n8n · HTTP Request node
POST https://api.manychat.com/fb/sending/sendFlow
Headers:
  Authorization: Bearer {MANYCHAT_API_KEY}
Body:
  {
    "subscriber_id": "{{user_id}}",
    "flow_ns": "content20240412141213_{flow_id}"
  }
```

---

## 📊 Sheets como fonte da verdade

```yaml
ABA_LEADS:                "Leads"
COLUNAS:
  - "phone (chave única · com DDI · sem formatação)"
  - "email"
  - "nome"
  - "fonte (qual anúncio · UTM)"
  - "data_inscricao"
  - "estado_atual (do enum em 00-variaveis-globais.md)"
  - "ultima_atualizacao (timestamp)"
  - "ficha_preenchida (sim/não)"
  - "comprou (sim/não)"
  - "valor_compra"
  - "janela_compra (ficha · 1h · 3h · 1day · D+N)"
  - "em_recuperacao (sim/não)"
  - "responsavel_closer (nome)"

ABA_LOGS:                 "Logs"        # toda execução de workflow grava aqui
ABA_FALHAS:               "Falhas"      # erros pra revisar
```

> **Por que Sheets e não banco?** Time não-técnico edita e visualiza fácil. Backup automático Google. Integração nativa com dashboard. Suficiente até 50k linhas.

---

## ⚡ Performance · escala

```yaml
LIMITES_HOTMART_API:      "300 req/min · cuidado em horas de pico"
LIMITES_WABA_API:         "varia por nivel · começa em 250 mensagens/24h"
                          # Tier 1: 1k · Tier 2: 10k · Tier 3: 100k · Tier 4: ilimitado
LIMITES_MANYCHAT:         "500 mensagens/segundo (Pro)"
LIMITES_GOOGLE_SHEETS:    "100 req/min por user · 500 req/min por projeto"

ESTRATEGIAS:
  - "Batch updates no Sheets (não 1 req por linha)"
  - "Throttle de mensagens (filas no n8n · queue mode)"
  - "Retry com backoff exponencial em falhas"
  - "Cache de tokens (Hotmart token expira em 1h)"
```

---

## 🔐 Segurança

```yaml
WEBHOOKS:
  - "Validar HOTTOK do Hotmart em TODO webhook"
  - "Validar X-Hub-Signature do Meta WABA"
  - "Header secret próprio entre ManyChat e n8n"

TOKENS:
  - ".env nunca no git"
  - "Tokens long-lived rotacionados a cada 60 dias"
  - "n8n credentials store usado (não hardcode em workflow)"

ACESSO_N8N:
  - "Basic Auth + 2FA"
  - "IP allowlist se possível"

ACESSO_SHEETS:
  - "Service Account com permissão MÍNIMA (só a planilha do projeto)"
```

---

## 📈 Custo estimado (LPSG médio · 1k inscritos · 200k mensagens)

| Item | Custo/mês |
|---|---|
| n8n.cloud (Pro) | ~R$ 100 |
| ManyChat (Pro · até 1k contatos) | ~R$ 130 |
| Meta WABA (80% Utility · 200k disparos) | ~R$ 14.800 |
| Google Sheets (gratuito) | R$ 0 |
| Hotmart (taxa por venda · não fixo) | ~9.99% sobre vendas |
| Hospedagem n8n self-hosted (alternativa) | ~R$ 30 (VPS) |
| **TOTAL operacional (sem Hotmart)** | **~R$ 15.000/mês** |

> Comparado com 100% Marketing nas mensagens: **economia de R$ 65k/mês** só na mensageria Utility.

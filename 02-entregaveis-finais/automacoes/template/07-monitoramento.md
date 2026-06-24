# 07 · Monitoramento — health check · alertas · disaster recovery

> Se um workflow cair, você sabe em ≤5min. Se 3 caírem juntos, alarme.

---

## 🎯 Princípio: falha silenciosa = perda de venda

```
1 webhook caído por 1h = 50 leads sem onboarding
1 cron caído por 24h = sequência de recuperação inteira perdida
1 disparo de janela errado = R$ 80k em vendas evaporadas
```

**Monitoramento NÃO é opcional.** É infraestrutura crítica.

---

## 📊 4 níveis de monitoramento

```
NÍVEL 1 · Logs estruturados      (toda execução grava)
NÍVEL 2 · Health check ativo     (cron 5min testa endpoints)
NÍVEL 3 · Alertas em tempo real  (Slack/Telegram quando falha)
NÍVEL 4 · Dashboard de saúde     (UI · histórico · trends)
```

---

## 1️⃣ Logs estruturados · todo workflow grava

### Padrão de log (todo workflow n8n)

```javascript
// No final de cada workflow · adicionar nó "Set" + "Sheets append"

const logEntry = {
  timestamp: new Date().toISOString(),
  workflow_name: "hotmart-compra",
  trigger: "webhook",
  qtd_processada: 1,
  status: "ok",                          // ok | erro | warning
  duracao_ms: Date.now() - startTime,
  input_resumo: `phone=${phone}, valor=${valor}`,
  output: "Lead inserido · ManyChat disparado",
  erro: null
};

await sheets.append({
  range: "Logs!A:H",
  values: [Object.values(logEntry)]
});
```

### O que NÃO logar

```yaml
EVITAR_LOGAR:
  - "Senha · token completo · CPF (LGPD)"
  - "Conteúdo da mensagem (privacidade)"
  - "Body completo do webhook (peso)"

LOGAR_SO:
  - "Identificadores hashados (phone hash · email hash)"
  - "Status · timestamp · workflow"
  - "Resumo da operação"
  - "Erro completo (se houver)"
```

---

## 2️⃣ Health check ativo · cron 5min

### Workflow `99-health-check.json`

```javascript
// Cron · a cada 5 minutos
schedule.cron("*/5 * * * *", async () => {

  const checks = [];

  // 1. n8n self-check
  checks.push({
    name: "n8n",
    status: "ok",  // se este workflow rodou · n8n tá ok
    timestamp: Date.now()
  });

  // 2. Sheets write/read
  try {
    await sheets.append({
      range: "HealthCheck!A:B",
      values: [[Date.now(), "test"]]
    });
    checks.push({ name: "google_sheets", status: "ok" });
  } catch (e) {
    checks.push({ name: "google_sheets", status: "erro", error: e.message });
  }

  // 3. Hotmart API (token refresh)
  try {
    await getHotmartToken();
    checks.push({ name: "hotmart_api", status: "ok" });
  } catch (e) {
    checks.push({ name: "hotmart_api", status: "erro", error: e.message });
  }

  // 4. WABA · ping (envia mensagem pra número de teste)
  try {
    await waba.sendTextMessage({
      to: process.env.PHONE_TEST_INTERNAL,
      message: `health-check ${new Date().toISOString()}`
    });
    checks.push({ name: "waba", status: "ok" });
  } catch (e) {
    checks.push({ name: "waba", status: "erro", error: e.message });
  }

  // 5. ManyChat API
  try {
    await manychat.ping();
    checks.push({ name: "manychat", status: "ok" });
  } catch (e) {
    checks.push({ name: "manychat", status: "erro", error: e.message });
  }

  // 6. Meta CAPI (test event)
  try {
    await metaCAPI.sendTestEvent();
    checks.push({ name: "meta_capi", status: "ok" });
  } catch (e) {
    checks.push({ name: "meta_capi", status: "erro", error: e.message });
  }

  // Salvar estado
  await sheets.update({
    range: "Health!A1:G2",
    values: [
      ["Service", "Status", "Last Check", "Error"],
      ...checks.map(c => [c.name, c.status, c.timestamp, c.error || ""])
    ]
  });

  // Disparar alerta se algo falhou
  const failed = checks.filter(c => c.status === "erro");
  if (failed.length > 0) {
    await sendAlert({
      level: "critical",
      title: `${failed.length} serviço(s) caído(s)`,
      services: failed.map(f => `${f.name}: ${f.error}`).join("\n")
    });
  }
});
```

---

## 3️⃣ Alertas em tempo real

### Canais de alerta

```yaml
SLACK:
  canais:
    "#alertas-lpsg":     "Alertas operacionais (warnings · ok-after-fail)"
    "#alertas-criticos":  "Críticos (workflow caído · token expirando)"
    "#health-check":     "Health check 5min (silent · só falhas)"

TELEGRAM:
  bot:                   "@lpsg_alertas_bot"
  group:                 "LPSG Operação · alertas"

EMAIL:
  destinatarios:         ["voce@seudominio.com.br", "ops@seudominio.com.br"]
  uso:                   "Resumo diário · pós-mortem"

SMS_OU_WHATSAPP:
  pra:                   "Críticos extremos · workflow do tsunami caído na hora do disparo"
```

### Workflow de envio de alerta

```javascript
async function sendAlert({ level, title, message, workflow, ...meta }) {

  const emoji = {
    info: "ℹ️",
    warning: "⚠️",
    error: "❌",
    critical: "🚨"
  }[level];

  const slackChannel = level === "critical"
    ? "#alertas-criticos"
    : "#alertas-lpsg";

  // Slack
  await slack.postMessage({
    channel: slackChannel,
    text: `${emoji} ${title}`,
    blocks: [
      { type: "header", text: { type: "plain_text", text: `${emoji} ${title}` }},
      { type: "section", text: { type: "mrkdwn", text: message }},
      { type: "context", elements: [
        { type: "mrkdwn", text: `Workflow: \`${workflow}\` · ${new Date().toISOString()}` }
      ]}
    ]
  });

  // Telegram (crítico)
  if (level === "critical") {
    await telegram.sendMessage({
      chat_id: process.env.TELEGRAM_GROUP_ID,
      text: `🚨 *${title}*\n\n${message}\n\nWorkflow: ${workflow}`,
      parse_mode: "Markdown"
    });
  }

  // SMS (crítico extremo · só horário do tsunami)
  const isTsunamiHour = isTsunamiActive();
  if (level === "critical" && isTsunamiHour) {
    await twilio.sendSMS({
      to: process.env.PHONE_LEO,
      body: `🚨 LPSG · ${title} · check Slack`
    });
  }

  // Log
  await sheets.append({
    range: "Alertas!A:F",
    values: [[
      Date.now(),
      level,
      title,
      message,
      workflow,
      JSON.stringify(meta)
    ]]
  });
}
```

### Regras de alerta · quando disparar

```yaml
CRITICO (alerta imediato):
  - "Workflow do tsunami falhou (06:50 · 07:00 · 08:00 · 10:00 · 23:00)"
  - "Hotmart webhook 5xx por > 5min"
  - "WABA quality rating cai pra GREEN→YELLOW"
  - "Token WABA expira em < 24h"
  - "Sheets write falha 3x consecutivas"
  - "Mais de 10 falhas em 5min"

ERROR (alerta em 5min):
  - "Cron diário não executou no horário"
  - "ManyChat API retornou 5xx"
  - "n8n queue > 100 jobs pendentes"
  - "Falha individual em workflow não-crítico"

WARNING (resume diário):
  - "WABA disparou mais Marketing que Utility (alvo 80%)"
  - "Taxa de entrega < 95% num dia"
  - "Lead com checkout iniciado há 30min sem closer"
  - "Sheets > 80% do limite (50k linhas)"

INFO (silent · só log):
  - "Health check ok"
  - "Cron rodou normalmente"
```

---

## 4️⃣ Dashboard de saúde

### Onde aparece

`/dashboard-lpsg-turbo` → módulo `/operacao` → seção "Saúde das Automações"

### O que mostra

```
┌────────────────────────────────────────────────────────┐
│  AUTOMAÇÕES · Saúde                                     │
├────────────────────────────────────────────────────────┤
│  n8n               🟢 OK · 142 execs hoje · 0 erros     │
│  Hotmart API       🟢 OK · last check 2min ago          │
│  WABA              🟡 ATENÇÃO · quality 87% (alvo ≥95%) │
│  ManyChat          🟢 OK                                 │
│  Meta CAPI         🟢 OK · match quality 8.4            │
│  YouTube API       🟢 OK · 487/10000 quota used         │
│  Sheets            🟢 OK · 3.847/50000 linhas           │
└────────────────────────────────────────────────────────┘

ÚLTIMAS FALHAS (24h)
  10:34 · workflow "ficha-interesse" · TypeError ...
  08:22 · workflow "lembrete-aula-2" · timeout ...
```

---

## 🔄 Disaster recovery

### Cenário 1 · n8n cai antes da abertura do carrinho

```yaml
DETECCAO:                "Health check 5min nota n8n caído"
ALERTA:                  "Crítico · Slack + Telegram + SMS"

ACAO_AUTOMATICA:
  - "n8n.cloud restart automático (se cloud)"
  - "Self-hosted: docker-compose up -d em < 2min via script"

ACAO_MANUAL:
  - "Caso n8n não suba · disparo manual via Hotmart Push (alternativa)"
  - "Closer humano avisado · começa contato 1:1 imediato"
  - "Mensagem manual no grupo: 'tem instabilidade técnica · estamos resolvendo'"

PLANO_B_TSUNAMI:         "Pré-redigir mensagens das janelas · ter ManyChat com flow manual"
```

### Cenário 2 · WABA bloqueia número

```yaml
DETECCAO:                "WABA API retorna 'phone number blocked'"
PROBABILIDADE:           "Baixa se mensageria bem feita · Alta se Marketing > 30%"
ALERTA:                  "Crítico · imediato"

ACAO:
  - "Verificar quality rating no Meta Business Manager"
  - "Se quality LOW · pausar disparos Marketing por 48h"
  - "Solicitar revisão manual à Meta (se bloqueio total)"
  - "Plano B: trocar pra número secundário (ter sempre 2 WABAs)"

PREVENCAO:
  - "Seguir 80% Utility / 20% Marketing"
  - "Janela 9h-21h · timezone do lead"
  - "Opt-out funcional · respeitar"
```

### Cenário 3 · Hotmart webhook cai

```yaml
DETECCAO:                "Health check + cron 'sync-hotmart-fallback'"
ALERTA:                  "Error · 5min"

ACAO_AUTOMATICA:
  - "Cron de fallback: a cada 5min · pulla vendas via API"
  - "Compara com Sheets · grava as faltantes"
  - "Continua workflows normalmente"

ACAO_MANUAL:
  - "Verificar status no painel Hotmart"
  - "Re-configurar webhook se URL mudou"
```

### Cenário 4 · Sheets atinge limite (5M células ou 50k linhas)

```yaml
DETECCAO:                "Health check · linhas > 80% do limite"
ALERTA:                  "Warning · resume diário"

ACAO:
  - "Arquivar leads de edições antigas em outra planilha"
  - "Migrar pra BigQuery se volume continua crescendo"
  - "Ou particionar por edição (Sheets-LPS-01-26 · Sheets-LPS-02-26)"
```

---

## 📊 Métricas de saúde · alvos

```yaml
UPTIME_N8N:              "≥ 99.5% (24h sem cair)"
LATENCIA_WEBHOOK:        "< 2s (P95)"
TAXA_FALHA_WORKFLOW:     "< 0.5% (5 em cada 1000 execuções)"
TEMPO_ALERTA:            "< 5 min (detecção até alerta)"
TEMPO_RECUPERACAO:       "< 30 min (alerta até resolução)"

QUALITY_RATING_WABA:     "≥ 90% (alvo · GREEN)"
TAXA_ENTREGA:            "≥ 95%"
MATCH_QUALITY_CAPI:      "≥ 7.0 (Meta · 0-10 escala)"
QUOTA_YOUTUBE:           "< 50% do limite diário"
```

---

## 🛠️ Ferramentas auxiliares

```yaml
UPTIMEROBOT:             "Monitora endpoints público (free 50 monitors · 5min)"
                          # Configurar pra monitorar n8n.dominio.com/healthz

BETTERSTACK:             "Status page · incident management ($)"
                          # Útil pra time grande · histórico

PINGDOM:                 "Alternativa premium · alertas SMS"

SENTRY:                  "Captura erros JS no n8n self-hosted"

GRAFANA + PROMETHEUS:    "Stack open-source · métricas avançadas"
                          # Overkill pra LPSG · só se time técnico
```

---

## ✅ Checklist de monitoramento

```
[ ] Workflow `99-health-check` rodando a cada 5min
[ ] Aba "Logs" no Sheets · todo workflow grava
[ ] Aba "Falhas" pra erros
[ ] Aba "Alertas" pra histórico
[ ] Aba "Health" pra status atual
[ ] Slack workspace configurado · 3 canais (alertas-lpsg, alertas-criticos, health-check)
[ ] Telegram bot · grupo de operação
[ ] SMS Twilio · pra críticos extremos do tsunami
[ ] Email diário · resumo às 8h
[ ] Dashboard /operacao mostrando status de cada serviço
[ ] Plano B de tsunami documentado (manual)
[ ] WABA secundário configurado (failover)
[ ] Token WABA com alerta 7 dias antes de expirar
[ ] Health check de fallback Hotmart (cron 5min puxa via API se webhook cair)
[ ] UptimeRobot monitorando n8n.dominio.com/healthz
```

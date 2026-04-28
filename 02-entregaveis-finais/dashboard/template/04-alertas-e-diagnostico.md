# 04 · Alertas e diagnóstico — Dashboard LPSG v2

> Motor de regras que vira métrica em ação. Verde = ok · Amarelo = atenção · Vermelho = agir agora.

---

## 🎯 Princípio: alerta = métrica + regra + ação sugerida

Toda regra do dashboard é declarativa: define uma condição, um nível de severidade e uma ação.

```typescript
{
  id: 'hook-rate-baixo',
  modulo: 'trafego',
  metrica: 'hookRate',
  condicao: 'menor que 20%',
  severidade: 'vermelho',
  mensagem: 'Hook Rate abaixo do mínimo (20%)',
  acaoSugerida: 'Cortar criativos com Hook < 15% por 3 dias',
  prioridade: 1,
}
```

---

## 🚦 3 níveis de severidade

| Nível | Cor | Quando | Comportamento |
|---|---|---|---|
| 🔴 Vermelho | `--danger` | Métrica < mínimo | Mostra no topo · pisca · notifica |
| 🟡 Amarelo | `--warning` | Mínimo ≤ métrica < ideal | Lista no painel · sem destaque |
| 🟢 Verde | `--success` | Métrica ≥ ideal | Não mostra (assume saúde) |

> **Regra:** o dashboard só mostra alertas que requerem **ação** ou **atenção**. Não polui com info redundante.

---

## 📋 Catálogo de regras (motor)

### Tráfego

```typescript
// data/alerts-rules.ts (extrato)
{
  id: 'roas-baixo',
  modulo: 'trafego',
  metrica: 'roas',
  condicao: { operador: '<', valor: 1.0 },
  severidade: 'vermelho',
  mensagem: 'ROAS abaixo do mínimo (1.0)',
  acaoSugerida: 'Pausar campanhas perdedoras · revisar criativos',
  link: '/trafego#tabela-criativos',
},
{
  id: 'hook-rate-amarelo',
  modulo: 'trafego',
  metrica: 'hookRate',
  condicao: { operador: 'entre', min: 0.20, max: 0.30 },
  severidade: 'amarelo',
  mensagem: 'Hook Rate em zona de atenção (20-30%)',
  acaoSugerida: 'Testar 3 novos criativos com hook mais forte',
  link: '/trafego#testes',
},
{
  id: 'cpm-alto',
  modulo: 'trafego',
  metrica: 'cpm',
  condicao: { operador: '>', valor: 40 },
  severidade: 'amarelo',
  mensagem: 'CPM acima de R$ 40',
  acaoSugerida: 'Renovar criativos · público pode estar saturado',
},
{
  id: 'budget-criativo-baixo',
  modulo: 'trafego',
  metrica: 'budgetCriativo',
  condicao: { operador: '<', valor: 50 },
  severidade: 'vermelho',
  mensagem: 'Criativo com budget abaixo de R$ 50/dia',
  acaoSugerida: 'Subir budget pra mínimo R$ 50 ou pausar',
}
```

### Páginas

```typescript
{
  id: 'conversao-pagina-baixa',
  modulo: 'paginas',
  metrica: 'conversao',
  condicao: { operador: '<', valor: 0.05 },
  severidade: 'vermelho',
  mensagem: 'Página convertendo abaixo de 5%',
  acaoSugerida: 'Pausar essa variação · revisar promessa do hero',
},
{
  id: 'lcp-lento',
  modulo: 'paginas',
  metrica: 'lcp',
  condicao: { operador: '>', valor: 1.5 },
  severidade: 'amarelo',
  mensagem: 'LCP acima de 1.5s',
  acaoSugerida: 'Otimizar imagem hero · verificar CDN',
},
{
  id: 'lighthouse-baixo',
  modulo: 'paginas',
  metrica: 'lighthouseMobile',
  condicao: { operador: '<', valor: 95 },
  severidade: 'amarelo',
  mensagem: 'Lighthouse Mobile abaixo de 95',
  acaoSugerida: 'Rodar audit Chrome DevTools · revisar Critical CSS',
}
```

### Aulas

```typescript
{
  id: 'comparecimento-a1-baixo',
  modulo: 'aulas',
  metrica: 'comparecimentoA1',
  condicao: { operador: '<', valor: 0.30 },
  severidade: 'vermelho',
  mensagem: 'Comparecimento Aula 1 abaixo de 30%',
  acaoSugerida: 'Reforçar mensageria de lembrete · verificar Utility',
},
{
  id: 'retencao-a2-baixa',
  modulo: 'aulas',
  metrica: 'retencao.a2',
  condicao: { operador: '<', valor: 0.70 },
  severidade: 'vermelho',
  mensagem: 'Retenção A2 abaixo de 70% do pico A1',
  acaoSugerida: 'Refazer áudio noturno · gancho mais forte na A2',
},
{
  id: 'pitch-boost-baixo',
  modulo: 'aulas',
  metrica: 'retencao.a6',
  condicao: { operador: '<', valor: 1.30 },
  severidade: 'amarelo',
  mensagem: 'Pitch (A6) com boost abaixo de 130% do pico A5',
  acaoSugerida: 'Reforçar mensageria de convite · usar urgência',
}
```

### Mensageria

```typescript
{
  id: 'utility-pct-baixo',
  modulo: 'mensageria',
  metrica: 'pctUtility',
  condicao: { operador: '<', valor: 0.80 },
  severidade: 'amarelo',
  mensagem: 'Distribuição Utility abaixo de 80%',
  acaoSugerida: 'Migrar mensagens classificáveis pra Utility (economia ~80%)',
  link: '/mensageria#templates',
},
{
  id: 'taxa-entrega-baixa',
  modulo: 'mensageria',
  metrica: 'taxaEntrega',
  condicao: { operador: '<', valor: 0.95 },
  severidade: 'vermelho',
  mensagem: 'Taxa de entrega abaixo de 95%',
  acaoSugerida: 'Verificar quality rating Meta · revisar templates flagged',
},
{
  id: 'taxa-leitura-baixa',
  modulo: 'mensageria',
  metrica: 'taxaLeitura',
  condicao: { operador: '<', valor: 0.70 },
  severidade: 'amarelo',
  mensagem: 'Taxa de leitura abaixo de 70%',
  acaoSugerida: 'Revisar copy do header · testar horários de envio',
}
```

### Tsunami / Vendas

```typescript
{
  id: 'vendas-dia1-baixa',
  modulo: 'tsunami',
  metrica: 'pctVendasDia1',
  condicao: { operador: '<', valor: 0.70 },
  severidade: 'vermelho',
  mensagem: 'Menos de 70% das vendas no dia 1',
  acaoSugerida: 'Revisar oferta · ancoragem fraca · garantia confusa',
},
{
  id: 'janela-ficha-vazia',
  modulo: 'tsunami',
  metrica: 'janelas.ficha.vendas',
  condicao: { operador: '<', valor: 5 },
  severidade: 'vermelho',
  mensagem: 'Janela ficha (10min) com menos de 5 vendas',
  acaoSugerida: 'Verificar mensagem 6h45 · link com erro?',
}
```

### Recuperação

```typescript
{
  id: 'sla-closer-alto',
  modulo: 'recuperacao',
  metrica: 'slaCloser',
  condicao: { operador: '>', valor: 5 },
  severidade: 'vermelho',
  mensagem: 'SLA do closer acima de 5 minutos',
  acaoSugerida: 'Closer com fila · adicionar pessoa OU automação primeira mensagem',
},
{
  id: 'recuperacao-baixa',
  modulo: 'recuperacao',
  metrica: 'pctRecuperacao',
  condicao: { operador: '<', valor: 0.05 },
  severidade: 'amarelo',
  mensagem: 'Recuperação abaixo de 5% (faixa esperada: 5–15%)',
  acaoSugerida: 'Revisar script · reforçar urgência D+1 a D+3',
}
```

---

## ⚙️ Engine de avaliação

```typescript
// lib/alerts-engine.ts

export function evaluate(launch: Launch, rules: Rule[]): Alert[] {
  const alerts: Alert[] = [];

  for (const rule of rules) {
    const value = getNestedValue(launch.resultados, rule.metrica);
    if (matches(value, rule.condicao)) {
      alerts.push({
        id: `${rule.id}-${Date.now()}`,
        ruleId: rule.id,
        severidade: rule.severidade,
        mensagem: rule.mensagem,
        acaoSugerida: rule.acaoSugerida,
        link: rule.link,
        valorAtual: value,
        timestamp: new Date(),
      });
    }
  }

  return alerts.sort(byPriority);
}

function matches(value: number, condicao: Condicao): boolean {
  switch (condicao.operador) {
    case '<':     return value < condicao.valor!;
    case '<=':    return value <= condicao.valor!;
    case '>':     return value > condicao.valor!;
    case '>=':    return value >= condicao.valor!;
    case '=':     return value === condicao.valor!;
    case 'entre': return value >= condicao.min! && value < condicao.max!;
  }
}
```

> Avaliado em **toda revalidação** de dados (a cada 30s no modo Web · sob demanda no standalone).

---

## 🔔 Notificações (opcional)

### Onde aparece

| Local | Quando |
|---|---|
| Header (badge) | Sempre que houver ≥ 1 alerta vermelho |
| Painel /visao-geral | Top 5 alertas (priorizados) |
| Toast (canto inferior) | Novo alerta vermelho aparece em runtime |
| Email (opcional) | Resumo diário 9h |
| WhatsApp (opcional) | Crítico em real-time durante carrinho |

### Configuração

```typescript
// .env.local (opcional)
NEXT_PUBLIC_ALERT_EMAIL=voce@seudominio.com.br
NEXT_PUBLIC_ALERT_WHATSAPP=+5511999999999
NEXT_PUBLIC_ALERT_LEVEL=vermelho                # vermelho | amarelo | todos
```

---

## 📊 Painel de saúde do lançamento

Dashboard `/visao-geral` mostra um **score de saúde** consolidado:

```
┌──────────────────────────────────────────────────┐
│  SAÚDE DO LANÇAMENTO          84/100  🟢          │
├──────────────────────────────────────────────────┤
│  Tráfego        92/100  🟢                        │
│  Páginas        78/100  🟡                        │
│  Aulas          91/100  🟢                        │
│  Mensageria     88/100  🟢                        │
│  Recuperação    71/100  🟡                        │
└──────────────────────────────────────────────────┘
```

### Cálculo do score

```typescript
function calcScore(modulo: string, alerts: Alert[]): number {
  const moduleAlerts = alerts.filter(a => a.modulo === modulo);
  const vermelhos = moduleAlerts.filter(a => a.severidade === 'vermelho').length;
  const amarelos  = moduleAlerts.filter(a => a.severidade === 'amarelo').length;

  // Cada vermelho tira 15 pontos · cada amarelo tira 5
  return Math.max(0, 100 - (vermelhos * 15) - (amarelos * 5));
}

const totalScore = average(scores).round();
```

---

## 🎯 Diagnóstico automático (insights)

Além de alertas pontuais, o dashboard gera **insights** comparando métricas entre si:

```typescript
// Insights auto-gerados na /estrategico

if (roas > 1.3 && hookRate < 0.25) {
  → "ROAS bom apesar de Hook Rate fraco — público qualificado ·
     escalar agressivo nos top 3 criativos."
}

if (conversaoPagina < 0.05 && retencaoA1 > 0.40) {
  → "Audiência tá vindo · página tá bloqueando. Revisar promessa do hero."
}

if (utilityPct < 0.80 && custoMensageria > orcamentoMensageria) {
  → "Migrar 5 mensagens chave pra Utility economiza R$ X (calculado)."
}

if (vendasDia1 < 0.70 && stackVsPreco < 1.5) {
  → "Stack ancorando 1.2x. Subir pra 1.5–2x acelera vendas dia 1."
}
```

> Esses insights aparecem na seção **"Recomendações estratégicas"** da `/estrategico`.

---

## 📜 Histórico de alertas

Cada alerta dispara é salvo (localStorage ou banco) pra:
- Aprendizado (quais alertas mais aparecem em LPSGs?)
- Pós-mortem (o que falhou nesse lançamento?)
- Tendência (melhorias entre lançamentos)

```typescript
// Schema de log
{
  launchId: 'LPS-01-26',
  alertId: 'hook-rate-baixo',
  severidade: 'vermelho',
  timestamp: '2026-04-24T14:30:00Z',
  resolvedAt: '2026-04-24T18:45:00Z',  // quando voltou pro verde
  acaoTomada: 'Cortou 3 criativos · subiu budget dos 5 top',
}
```

---

## 🔧 Customizar regras

Editar `data/alerts-rules.ts` · adicionar nova regra:

```typescript
{
  id: 'minha-nova-regra',
  modulo: 'trafego',          // ou: paginas, aulas, mensageria, tsunami, recuperacao
  metrica: 'caminho.aninhado.metrica',
  condicao: { operador: '<', valor: 0.50 },
  severidade: 'amarelo',
  mensagem: 'Texto curto que aparece no card',
  acaoSugerida: 'O que o gestor deve fazer agora',
  link: '/modulo#secao',       // opcional · onde clicar pra agir
}
```

> Recompilar (modo Web) ou rebuild standalone. Próximo refresh aplica regras novas.

# 06 · KPIs e Dashboard CS

> Como medir saúde do programa de acompanhamento. Liga direto com o **Módulo 12 — CS** do dashboard (a ser criado em `dashboard-lpsg`).

---

## 🎯 Os 7 KPIs de saúde do CS

> Se 1 desses cair, **interrompe tudo e investiga**.

| # | KPI | Cálculo | Mín | Ideal |
|---|---|---|---|---|
| 1 | **Taxa de ativação D7** | acessou plataforma + grupo até D7 / compras | 80% | 95% |
| 2 | **Retenção D30** | ativos no D30 / compras | 90% | 95%+ |
| 3 | **Retenção D90 (conclusão)** | concluíram D90 / compras | 75% | 85%+ |
| 4 | **NPS parcial D30** | promotores - detratores (escala -100 a +100) | 50 | 70+ |
| 5 | **NPS final D90** | mesmo cálculo no D90 | 60 | 80+ |
| 6 | **Taxa de prova social** | entregaram pelo menos 1 prova / concluintes | 50% | 70%+ |
| 7 | **Taxa de ascensão** | compraram próximo nível / concluintes | 10% | 20%+ |

---

## 📊 Cálculo do NPS

```
NPS = % promotores (9-10) − % detratores (0-6)

Onde:
- Promotores: respondeu 9 ou 10
- Neutros:    respondeu 7 ou 8 (não conta)
- Detratores: respondeu 0 a 6

Exemplos:
- 80% promotores, 5% detratores → NPS = 75 (ótimo)
- 50% promotores, 30% detratores → NPS = 20 (alerta)
- 30% promotores, 40% detratores → NPS = -10 (crise)
```

### Resposta automática no formulário NPS

| Faixa | Tag aplicada | Ação |
|---|---|---|
| 9-10 (promotor) | `nps-promotor` | Solicitar depoimento + indicação |
| 7-8 (neutro) | `nps-neutro` | Pedir feedback do "que falta pra ser 10" |
| 0-6 (detrator) | `nps-detrator` | 🚨 Head CS liga em ≤ 24h |

---

## 📈 Métricas secundárias (úteis · não críticas)

| Métrica | Como medir | Por quê |
|---|---|---|
| **Tempo até primeira vitória** | dias entre D0 e primeira venda do produto | < 30 dias é o ideal |
| **% que vai pra Office Hours** | comparece / ativos | 30%+ é boa adesão |
| **% que posta no grupo** | postou ≥ 1x na semana | 50%+ saudável |
| **Tickets de suporte/aluno** | abertos / aluno / mês | < 2/mês é ideal |
| **SLA médio resposta CS** | tempo médio resposta CS Oficial | ≤ 4h horário comercial |
| **Custo CS por aluno** | salário CS / alunos atendidos | < 10% do ticket |

---

## 🚨 Alertas automatizados

### Daily (cron 8h)
```yaml
ALERTA_RETENCAO_D7:
  trigger: aluno comprou há 7d e não fez login
  ação: notifica CS Oficial · marca tag `risco-onboard`

ALERTA_RETENCAO_D30:
  trigger: aluno em D28-D30 sem atividade na plataforma há 7d
  ação: notifica CS Oficial · agenda call

ALERTA_NPS_DETRATOR:
  trigger: NPS respondido com 0-6
  ação: notifica HEAD CS · agenda call em 24h
```

### Weekly (cron Seg 7h)
```yaml
ALERTA_GRUPO_QUIETO:
  trigger: < 30 mensagens nos últimos 3 dias
  ação: notifica Community Manager · sugere quebra-gelo

ALERTA_LIVE_BAIXA:
  trigger: < 30% comparecimento na live coletiva
  ação: notifica HEAD CS · revisar tema

ALERTA_PROVA_SOCIAL_BAIXA:
  trigger: < 5 posts de vitória na semana
  ação: notifica CS Oficial · provoca alunos individualmente
```

---

## 🖥️ Módulo 12 — CS no dashboard

> Adicionar em `dashboard/template/02-modulos-do-dashboard.md` quando este projeto for ativado.

### O que mostra

```
┌─────────────────────────────────────────────────────────────┐
│  CS · Customer Success                                      │
├─────────────────────────────────────────────────────────────┤
│  [KPIs] [Funil retenção] [NPS dist] [Top depoimentos]       │
│  [Fila de risco] [Próximas calls] [Heatmap atividade]       │
└─────────────────────────────────────────────────────────────┘
```

### KPIs cards (7 principais)

```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ ATIVAÇÃO D7 │ │ RETENÇÃO    │ │ NPS PARCIAL │ │ ASCENSÃO    │
│   92%       │ │ D30 · 94%   │ │   72        │ │   18%       │
│ alvo: 80%+  │ │ alvo: 90%+  │ │ alvo: 50+   │ │ alvo: 10%+  │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

### Painéis

#### a) Funil de retenção (4 pontos)

```
[100 alunos compraram]
    ↓ 92%
[ 92 ativaram D7]
    ↓ 96%
[ 88 ativos D30]
    ↓ 90%
[ 79 concluíram D90]
    ↓ 18%
[ 14 ascenderam pro próximo]
```

#### b) Fila de risco (kanban)

```
┌──────────────┬──────────────┬──────────────┐
│ ONBOARD      │ ATIVIDADE    │ NPS BAIXO    │
│ atrasado     │ atrasada     │              │
│ [3 alunos]   │ [5 alunos]   │ [2 alunos]   │
└──────────────┴──────────────┴──────────────┘
```

#### c) Próximas calls (lista)

```
🟢 [Aluno A] · D14 · CS Oficial · qua 14h
🟡 [Aluno B] · risco-onboard · Head CS · qua 16h
🔴 [Aluno C] · NPS detrator · Head CS · qui 11h
```

#### d) Heatmap de atividade na plataforma (7 dias × 24h)

Mostra horários de pico (geralmente noite + fins de semana). Insight pra agendar lives e disparos.

#### e) Top 10 depoimentos (último mês)

Lista cards dos melhores depoimentos coletados, com link pra mídia.

### Schema da fonte (aba `Alunos` no Sheets)

> Schema completo em `00-variaveis-globais.md` (18 colunas A-R).

### Adapter

```typescript
// lib/adapters/cs-adapter.ts
export interface Aluno {
  email: string;
  nome: string;
  whatsapp: string;
  edicao_lpsg: string;
  data_compra: string;
  data_acesso: string | null;
  status: 'ativo' | 'atrasado' | 'inativo' | 'concluiu' | 'cancelou';
  nps_d30: number | null;
  nps_d90: number | null;
  depoimento_coletado: boolean;
  ascensao: boolean;
  cs_responsavel: string;
}

export function calcularKPIs(alunos: Aluno[]) {
  const total = alunos.length;
  const ativados = alunos.filter(a => a.data_acesso !== null).length;
  const ativosD30 = alunos.filter(a => isAtivoD30(a)).length;
  const concluiu = alunos.filter(a => a.status === 'concluiu').length;
  const ascendeu = alunos.filter(a => a.ascensao).length;

  return {
    ativacaoD7:  (ativados / total) * 100,
    retencaoD30: (ativosD30 / total) * 100,
    retencaoD90: (concluiu / total) * 100,
    npsParcial:  calcularNPS(alunos.map(a => a.nps_d30)),
    npsFinal:    calcularNPS(alunos.map(a => a.nps_d90)),
    ascensao:    (ascendeu / concluiu) * 100,
  };
}

function calcularNPS(notas: (number | null)[]): number {
  const validos = notas.filter(n => n !== null) as number[];
  if (validos.length === 0) return 0;
  const promotores = validos.filter(n => n >= 9).length;
  const detratores = validos.filter(n => n <= 6).length;
  return ((promotores - detratores) / validos.length) * 100;
}
```

---

## 🔄 Refresh + alertas

```yaml
DASHBOARD_CS:
  refresh_interval:     300s            # 5 min · não precisa real-time
  alertas_visiveis:     true            # exibe alertas ativos no topo
  filtro_padrao:        "edicao = atual"
  comparacao:           "edicao anterior" # toggle no header
```

---

## 🔗 Conecta com

| Estrutura | Como |
|---|---|
| `dashboard-lpsg` | Módulo 12 (CS) consome aba Alunos |
| `automacoes-lpsg` | n8n alimenta aba Alunos · dispara alertas |
| `mensageria-lpsg` | NPS dispara mensagens de tier (promotor/neutro/detrator) |
| `operacao-lpsg` | Papéis CS no RACI |

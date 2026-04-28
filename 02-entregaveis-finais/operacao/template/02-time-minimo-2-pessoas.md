# 02 · Time mínimo viável — 2 pessoas pra rodar LPSG

> 3 níveis de time · 3 patamares de receita. Comece com 2 (Expert + Estrategista). Escale só com gatilho.

---

## 🎯 Princípio: comece magro · escale com receita

```
Time grande sem receita      = queima de caixa
Time pequeno sem processo    = queima de saúde mental
Time pequeno COM processo    = receita escalando previsível
```

**Regra:** só contrate o próximo papel quando o atual estiver gerando ROI claro · não 'quando der'.

---

## 🪜 Os 3 tiers de time LPSG

| Tier | Tamanho | Faturamento esperado | Papéis adicionados |
|---|---|---|---|
| **Tier 1 · Mínimo** | **2 pessoas** | até 6 dígitos/mês (≤ R$ 999k/mês) | Expert + Estrategista |
| **Tier 2 · Escala** | **4 pessoas** | 6-7 dígitos/mês (R$ 1-9M/mês) | + Tráfego + Automações |
| **Tier 3 · Operação** | **7+ pessoas** | 7+ dígitos/mês (≥ R$ 10M/mês) | + Designer + Closer + Editor + Social + CS |

---

## 🥉 TIER 1 — 2 pessoas (mínimo viável)

```
┌───────────────────────────────────────────────┐
│  EXPERT (sócio)                                │
│  Conteúdo · pitch · decisões                   │
└──────────────────┬────────────────────────────┘
                   │
              ┌────▼─────────────────────────┐
              │  ESTRATEGISTA                 │
              │                               │
              │  FAZ TUDO O RESTO:            │
              │  - Tráfego (campanhas Meta)   │
              │  - Automações (n8n / ManyChat)│
              │  - Design (Claude Designer)   │
              │  - Mensageria + agendamento   │
              │  - Closer (recuperação)       │
              │  - Páginas (template Next.js) │
              │  - Edição básica (CapCut)     │
              │  - Suporte do grupo           │
              │  - CS / onboarding aluno      │
              └───────────────────────────────┘
```

### Quem faz o quê (2 pessoas)

```yaml
EXPERT:
  - "Grava 6 aulas (5 + pitch)"
  - "Aparece nos criativos (rosto · áudios noturnos)"
  - "Decisões estratégicas (oferta · preço · garantia)"
  - "Aparece ao vivo: tira-dúvidas + pitch"
  - "Closer dos 5 leads VIP (top tier)"
  - "Onboarding alunos premium (mentorias)"

ESTRATEGISTA:
  - "Campanhas Meta ASC + 15 criativos por batelada"
  - "ROAS · cortes · escala (regra +5%/dia · -50%/dia)"
  - "Briefa criativos + executa via Claude Designer / Nano Banana"
  - "Páginas (template Next.js + Tailwind · só preenche variáveis)"
  - "n8n + ManyChat · todos os 13 workflows"
  - "Mensageria escrita + agendada"
  - "Closer humano (SLA ≤5min · 90% das conversas)"
  - "Edição leve no CapCut · sem perfeccionismo"
  - "Suporte do grupo (≤2h SLA)"
  - "Customer Success do aluno premium"
```

> **Sem o papel de Estrategista, o Expert vira o gerente.** Esse papel é INVIOLÁVEL no Tier 1.

### Stack técnica (Tier 1)

```yaml
N8N:                      "Cloud Pro (R$ 100/mês)"
MANYCHAT:                 "Pro · até 1k contatos (R$ 130/mês)"
DESIGNER:                 "Claude Designer + Nano Banana (sem designer humano)"
EDICAO:                   "CapCut Pro (R$ 50/mês)"
DASHBOARD:                "Modo standalone HTML · sem servidor"
SUPORTE:                  "ManyChat live chat"
PAGINAS:                  "Template Next.js · deploy Vercel"

TOTAL_FERRAMENTAS:        "~R$ 400/mês"
```

### Resultado esperado (Tier 1 · 2 pessoas)

```yaml
INSCRITOS_EVENTO:         200-500
CONVERSAO_PITCH:          5-7%
VENDAS_PRODUTO:           10-30 por edição
TICKET_MEDIO:             R$ 12-18k
FATURAMENTO_BRUTO:        R$ 120-540k por edição
FATURAMENTO_LIQUIDO:      R$ 90-400k por edição

EDICOES_POR_MES:          1
FATURAMENTO_ANUAL_LIQ:    R$ 1.1-4.8M

DEMANDA_DO_EXPERT:        "20-30h/semana"
DEMANDA_ESTRATEGISTA:     "40-50h/semana (puxado)"

PERFIL_DO_ESTRATEGISTA:   "Sênior · multidisciplinar · sem ego em executar"
                          # ex-marketer · ex-PM · empreendedor digital
                          # NÃO vai funcionar com pessoa júnior em 1 área
```

### Custo do time (Tier 1)

```yaml
EXPERT:                   "—"                            # sócio · % do líquido
ESTRATEGISTA:             "R$ 10-15k/mês + bônus 1-2% líquido"
                          # senioridade alta · faz tudo · merece bem pago

TOTAL_FOLHA_BASE:         "R$ 12k/mês"
TOTAL_COM_BONUS_MEDIO:    "R$ 18k/mês"
% DO LIQUIDO:             "5-10%"
```

> **Atenção ao perfil:** Estrategista precisa ser sênior multidisciplinar. Tentar substituir por 2 juniors (1 design + 1 ops) não funciona · falta visão integrada.

---

## 🥈 TIER 2 — 4 pessoas (escala · 6-7 dígitos/mês)

```
                    EXPERT (sócio)
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ESTRATEGISTA    ┌─────▼──────┐  ┌─────▼──────────┐
   (Operação +    │ TRÁFEGO     │  │ AUTOMAÇÕES     │
    Coord +       │             │  │                │
    Mensageria +  │ Campanhas   │  │ n8n + ManyChat │
    Closer)       │ Criativos   │  │ Integrações    │
                  │ ROAS        │  │ Health · DR    │
                  └─────────────┘  └────────────────┘
```

### O que muda em relação ao Tier 1

```yaml
ADICIONA_GESTOR_TRAFEGO:
  motivo:                 "Estrategista não consegue manter ROAS competitivo + tudo o resto"
  impacto:                "ROAS sobe 30-50% · ASC otimiza com cabeça dedicada"
  quando_contratar:       "2 edições com R$ 600k+ líquido"

ADICIONA_GESTOR_AUTOMACOES:
  motivo:                 "Volume de mensageria + integrações cresce · Estrategista vira gargalo"
  impacto:                "Automação confiável · health check · disaster recovery"
                          "SLA closer ≤5min cumprido sem travamento técnico"
  quando_contratar:       "Quando workflow do tsunami já tá rodando · qq quebra dói muito"

ESTRATEGISTA_FOCA:
  - "Coordenação geral · cronograma"
  - "Mensageria (escreve + agenda)"
  - "Closer humano (mantém o papel · ainda 90% das conversas)"
  - "Suporte do grupo + CS"
  (deixa tráfego pra quem é tráfego · automações pra quem é dev)
```

### Por que NÃO contratar Designer ou Closer dedicado nesse tier ainda

```yaml
DESIGNER:
  - "IA design (Claude Designer · Nano Banana · GPT Image) já cobre 80%"
  - "Estrategista briefa + IA executa · qualidade boa o suficiente até 7 dígitos/mês"
  - "Contratar designer humano antes do Tier 3 é prematuro"

CLOSER_DEDICADO:
  - "Estrategista ainda atende SLA ≤5min · volume é gerenciável"
  - "Quando volume passa de 100 conversas paralelas no carrinho · aí contrata"
  - "Antes disso · custo do closer não compensa"
```

### Resultado esperado (Tier 2 · 4 pessoas)

```yaml
INSCRITOS_EVENTO:         800-2.000
CONVERSAO_PITCH:          7-9%
VENDAS_PRODUTO:           50-180 por edição
TICKET_MEDIO:             R$ 14-20k
FATURAMENTO_BRUTO:        R$ 700k-3.6M por edição
FATURAMENTO_LIQUIDO:      R$ 525k-2.7M por edição

EDICOES_POR_MES:          1 (ou 2 se time escalar)
FATURAMENTO_MENSAL_LIQ:   R$ 525k-2.7M
                          # = 6-7 dígitos/mês ✓

DEMANDA_DO_EXPERT:        "15-25h/semana"
```

### Custo do time (Tier 2)

```yaml
EXPERT:                   "—"
ESTRATEGISTA:             "R$ 12-15k + bônus"
GESTOR_TRAFEGO:           "R$ 8-12k + bônus ROAS"
GESTOR_AUTOMACOES:        "R$ 8-12k + bônus uptime"

TOTAL_FOLHA_BASE:         "R$ 30k/mês"
TOTAL_COM_BONUS_MEDIO:    "R$ 45k/mês"
% DO LIQUIDO:             "3-7%"
```

---

## 🥇 TIER 3 — 7+ pessoas (operação · +7 dígitos/mês)

```
                    EXPERT (sócio · 30% tempo)
                          │
       ┌──────────────────┴──────────────────────┐
       │                                          │
  HEAD OF OPS                              COMERCIAL HEAD
  (ex-Estrategista)                        (vendas + CS)
       │                                          │
   ┌───┼───┬─────┬────┬────┬────┐         ┌──────┴──────┐
   │   │   │     │    │    │    │         │             │
TRÁF AUT DES  EDI  SOC                   CLOSER₁    CLOSER₂
                                          + CS
```

### O que muda em relação ao Tier 2

```yaml
ESTRATEGISTA_VIRA_HEAD_OF_OPS:
  - "Sai da execução · vai pra gestão"
  - "1:1 com cada DRI semanal"
  - "Pós-mortem · processo · contratação"
  - "Mantém visão integrada (era a força no Tier 1)"

ADICIONA_DESIGNER_DEDICADO:
  motivo:                 "IA design não dá conta da escala · qualidade vira gargalo de ROAS"
  quando:                 "3 edições com R$ 1.2M+ líquido"

ADICIONA_CLOSER_DEDICADO:
  motivo:                 "Volume passa de 100 conversas paralelas no carrinho"
  quando:                 "Quando Estrategista atende ≥ 80h/semana SLA closer"

ADICIONA_EDITOR:
  motivo:                 "Aulas + criativos + reels · operação trava sem editor"
  quando:                 "Time já tem closer dedicado · próximo gargalo é vídeo"

ADICIONA_SOCIAL_MEDIA:
  motivo:                 "Orgânico vira fonte de leads · não só tráfego pago"
  quando:                 "Captação paga atinge limite de saturação"

ADICIONA_CS_DEDICADO:
  motivo:                 "Volume de alunos premium passa de 200 ativos"
  quando:                 "Suporte do grupo já consome 1+ pessoa em tempo integral"

ADICIONA_2_CLOSER:
  motivo:                 "Carrinho com volume alto · 1 closer não dá conta"
  quando:                 "Top closer já entrega 100% comissão · precisa redundância"
```

### Resultado esperado (Tier 3 · 7+ pessoas)

```yaml
INSCRITOS_EVENTO:         3.000-10.000
VENDAS_PRODUTO:           200-500 por edição
FATURAMENTO_LIQUIDO:      R$ 3-10M por edição
EDICOES_POR_MES:          2-4 (semanal · multi-canal)
FATURAMENTO_MENSAL_LIQ:   R$ 10M+
                          # = +7 dígitos/mês ✓

DEMANDA_DO_EXPERT:        "10-15h/semana · quase passivo"
```

### Custo do time (Tier 3)

```yaml
EXPERT:                   "—"
HEAD_OF_OPS:              "R$ 15-25k + bônus"
GESTOR_TRAFEGO:           "R$ 12-18k + bônus"
GESTOR_AUTOMACOES:        "R$ 12-18k"
DESIGNER:                 "R$ 6-10k"
EDITOR:                   "R$ 5-8k"
SOCIAL_MEDIA:             "R$ 5-8k"
CS:                       "R$ 4-6k"
CLOSER_1:                 "R$ 3k base + 5-10% comissão (R$ 15-40k)"
CLOSER_2:                 "R$ 3k base + 5-10% comissão (R$ 10-25k)"

TOTAL_FOLHA_BASE:         "R$ 65-100k/mês"
TOTAL_COM_BONUS_MEDIO:    "R$ 100-180k/mês"
% DO LIQUIDO:             "3-6%"
```

---

## 🚀 Plano de escala consolidado

```
┌─────────────────────────────────────────────────────────────────┐
│  TIER 1 · 2 PESSOAS                                              │
│  Expert + Estrategista (faz tudo)                                │
│  Faturamento: até 6 dígitos/mês (≤ R$ 999k/mês)                   │
│  Gatilho próximo: 2 edições com R$ 600k+ líquido                  │
└──────────────────┬──────────────────────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│  TIER 2 · 4 PESSOAS                                              │
│  + Gestor de Tráfego + Gestor de Automações                      │
│  Faturamento: 6-7 dígitos/mês (R$ 1-9M/mês)                       │
│  Gatilho próximo: 3 edições com R$ 1.2M+ líquido                  │
└──────────────────┬──────────────────────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│  TIER 3 · 7+ PESSOAS                                             │
│  + Designer + Closer + Editor + Social + CS + 2º Closer           │
│  Faturamento: +7 dígitos/mês (≥ R$ 10M/mês)                       │
└─────────────────────────────────────────────────────────────────┘
```

### Ordem específica de contratação

```yaml
DE_2_PARA_4 (Tier 1 → Tier 2):
  1º:  GESTOR_TRAFEGO       # ROAS limitando · prioridade absoluta
  2º:  GESTOR_AUTOMACOES    # técnico · qualquer falha custa caro

DE_4_PARA_7 (Tier 2 → Tier 3):
  1º:  DESIGNER             # qualidade visual limitando ROAS
  2º:  CLOSER_DEDICADO      # SLA do Estrategista no limite
  3º:  HEAD_OF_OPS          # Estrategista promovido · sai da execução
  4º:  CS                   # alunos premium pedindo mais atenção
  5º:  EDITOR               # vídeo trava operação
  6º:  SOCIAL_MEDIA         # captação paga saturada · orgânico abre canal novo
  7º:  2º_CLOSER            # redundância no carrinho
```

---

## 🔍 Sinais de que precisa contratar JÁ

```yaml
NO_TIER_1 (2 pessoas):
  - "Expert respondendo dúvida operacional no Slack"
    → Estrategista virou gargalo · contratar Tráfego
  - "ROAS oscilando muito · não consegue corrigir"
    → Tráfego dedicado · contratar
  - "Workflow falhou no carrinho · perdeu R$ 50k+"
    → Automações dedicado · contratar urgente

NO_TIER_2 (4 pessoas):
  - "Criativo subindo no dia D mesmo · sem revisão de qualidade"
    → Designer · contratar
  - "Closer com 100+ conversas paralelas · qualidade caindo"
    → 2º closer ou closer dedicado · contratar
  - "Aulas saem 5 dias depois · perdendo timing"
    → Editor · contratar

EM_QUALQUER_TIER:
  - "Time fica até 22h em semana de carrinho"
  - "Alguém pediu férias e ninguém sabe substituir (bus factor 1)"
  - "Cliente VIP perdido por timing"
  - "3 entregas atrasadas em 1 mês"
```

---

## 💸 ROI por contratação (referência)

```yaml
GESTOR_TRAFEGO_DEDICADO:        "ROAS sobe 30-50% · paga em 1 edição"
GESTOR_AUTOMACOES_DEDICADO:     "0 falha em carrinho · paga em 1 edição grande"
DESIGNER_DEDICADO:              "ROAS sobe +20% adicional · paga em 1-2 edições"
CLOSER_DEDICADO:                "Recuperação sobe 5% → 12% · paga em 1 edição"
HEAD_OF_OPS:                    "Expert ganha 10h/semana · paga em 3 meses"
EDITOR_DEDICADO:                "Velocidade 2x · paga em 2 edições"
CS_DEDICADO:                    "NPS sobe 20pts · alunos retornam · paga em 6 meses"
SOCIAL_DEDICADO:                "20-40% leads orgânicos · paga em 6 meses"
```

---

## ⚠️ Erros comuns no dimensionamento

```yaml
EVITAR:
  - "Substituir Estrategista por 2 juniors no Tier 1"
    → falta visão integrada · ninguém pega bola que cai entre os 2

  - "Pular Tier 1 com 'já contrato 5'"
    → custo alto antes de provar método · queima caixa

  - "Travar no Tier 2 quando Tier 3 é necessário"
    → Estrategista vira herói cansado · qualidade despenca

  - "Contratar designer antes de tráfego"
    → ordem errada · ROAS é o gargalo primeiro

  - "Pular Gestor de Automações"
    → workflow do tsunami quebra · perde R$ 80k em 1 dia
```

---

## ✅ Checklist do dimensionamento

```
[ ] Tier atual identificado (1 · 2 · 3)
[ ] Faturamento líquido das últimas 3 edições documentado
[ ] Gatilhos do próximo tier monitorados
[ ] Estrategista (se Tier 1) é sênior multidisciplinar de verdade
[ ] Plano de contratação dos próximos 6 meses (perfil · ordem · canal)
[ ] Caixa pra 3 meses do salário do próximo hire
[ ] Pipeline de candidatos sempre ativo (LinkedIn · indicação)
[ ] Onboarding documentado (≤ 7 dias produtivo)
[ ] Pós-mortem revisita o dimensionamento
```

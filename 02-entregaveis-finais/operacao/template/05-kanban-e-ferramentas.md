# 05 · Kanban e ferramentas — fluxo visual de trabalho

> Notion como kanban default. 4 colunas + 3 swimlanes. 1 DRI por card.

---

## 🎯 Princípio: o quadro é a fonte da verdade

```
Se não está no Kanban · não existe.
Se está em "Em andamento" há > 3 dias · está bloqueado.
Se ninguém é DRI · ninguém vai entregar.
```

---

## 🛠️ Ferramenta default: Notion

### Por que Notion (e não Trello / Linear / Jira)

```yaml
PROS:
  - "Time não-técnico edita fácil"
  - "Combina kanban + docs + database (não precisa de 3 ferramentas)"
  - "Free pra times pequenos"
  - "Templates LPSG existem (importa direto)"

CONTRAS:
  - "Pesado pra times >20 pessoas"
  - "Notificações fracas (compensar com Slack)"

QUANDO_TROCAR:
  - "Time > 15 pessoas · considerar Linear (devs) ou ClickUp (geral)"
  - "Equipe técnica forte · Linear é melhor pra issues/bugs"
```

---

## 📋 Estrutura do Kanban (template Notion)

### 4 colunas

```yaml
BACKLOG:                  "Aprovado pra fazer · ainda não começou"
EM_ANDAMENTO:             "Alguém está executando AGORA"
BLOQUEADO:                "Parou · aguarda algo · ação requerida"
CONCLUIDO:                "Entregue · aprovado · arquivado em 7 dias"
```

### 3 swimlanes (por área do funil)

```yaml
CAPTACAO:                 "Anúncios · página · onboarding"
CONTEUDO:                 "Aulas · mensageria · social"
CONVERSAO:                "Pitch · carrinho · recuperação · CS"
```

### Visual

```
              CAPTAÇÃO            CONTEÚDO            CONVERSÃO
        ┌──────────────────┬──────────────────┬──────────────────┐
BACKLOG │                  │                  │                  │
        │                  │                  │                  │
        ├──────────────────┼──────────────────┼──────────────────┤
ANDAM.  │                  │                  │                  │
        │                  │                  │                  │
        ├──────────────────┼──────────────────┼──────────────────┤
BLOQ.   │                  │                  │                  │
        │                  │                  │                  │
        ├──────────────────┼──────────────────┼──────────────────┤
DONE    │                  │                  │                  │
        │                  │                  │                  │
        └──────────────────┴──────────────────┴──────────────────┘
```

---

## 🃏 Anatomia de um card

### Campos obrigatórios

```yaml
TITULO:                   "Verbo + objeto + contexto"
                          # ex: "Subir batelada LPS_120526_EST_001 a 005"

DRI:                      "Direct Responsible Individual (1 pessoa · sempre)"
                          # NUNCA múltiplos · 1 dono final

PRAZO:                    "Data + hora · não 'essa semana'"
                          # ex: "16/05/2026 18:00"

PRIORIDADE:               "P0 (bloqueante) · P1 (alta) · P2 (média) · P3 (baixa)"

SWIMLANE:                 "Captação · Conteúdo · Conversão"

STATUS:                   "Backlog · Em andamento · Bloqueado · Concluído"
```

### Campos opcionais (mas valiosos)

```yaml
DEPENDENCIAS:             "Cards que precisam fechar antes deste"
LINK_ENTREGAVEL:          "Drive · Figma · Notion · GitHub"
ESTIMATIVA:               "1h · 4h · 1d · 3d (pra capacity planning)"
EDICAO_LPSG:              "LPS-01-26 · pra filtrar"
TAGS:                     "Critico · Recorrente · Experimental"
```

### Exemplo de card preenchido

```markdown
# Subir batelada LPS_120526 (EST 001-005)

**DRI:** Maria (Designer)
**Prazo:** 16/05/2026 18:00
**Prioridade:** P0
**Swimlane:** Captação
**Status:** Em andamento
**Edição:** LPS-01-26

## Dependências
- ☑️ Brief aprovado (LPS-01-26-brief-batelada-12)
- ☑️ Foto do expert disponível

## Entregáveis
- [ ] 5 PNGs finais (1080×1350)
- [ ] 5 versões 9:16 stories
- [ ] Copy do anúncio Meta
- [ ] Pasta no Drive: /LPS-01-26/criativos/batelada-12

## Notas
Foco em hook polêmico (Mito 1: equipe enxuta vs grande)
```

---

## 🚦 Regras do Kanban (WIP limits · status semáforo)

### WIP limits (Work In Progress · evita sobrecarga)

```yaml
EM_ANDAMENTO_POR_PESSOA:
  Designer:               "≤ 3 cards"
  Editor:                 "≤ 2 cards"
  Gestor_Trafego:         "≤ 4 cards"
  Gestor_Operacao:        "≤ 5 cards"
  Closer:                 "ilimitado durante carrinho · ≤ 10 conversas paralelas"
```

### Status semáforo

```yaml
🟢 SAUDAVEL:
  - "Card em 'Em andamento' há ≤ 2 dias úteis"
  - "DRI ativo · com plano claro"

🟡 ATENÇÃO:
  - "Card em 'Em andamento' há 3-5 dias úteis"
  - "DRI sem update há 24h"
  - "Bloqueio sem owner"

🔴 CRÍTICO:
  - "Card em 'Em andamento' há > 5 dias úteis"
  - "Card 'Bloqueado' há > 48h sem ação"
  - "Card P0 sem início · com prazo < 24h"
```

### Auto-arquivamento

```yaml
CONCLUIDOS_ANTIGOS:       "Arquivar automaticamente após 7 dias"
                          # mantém quadro limpo · histórico fica em DB

AUTOMATION_NOTION:        "Database filter: status = Concluído AND completed_at < 7 dias atrás"
```

---

## 🔄 Workflow padrão de um card

```
[CRIAR]                Qualquer um cria · status = Backlog · sem DRI
    ↓
[BRIEFING]             Se complexo · briefing 15min · DRI define entregáveis
    ↓
[ATRIBUIR]             Operação atribui DRI + prazo · status = Backlog
    ↓
[INICIAR]              DRI move pra Em andamento · WIP limit checa
    ↓
[EXECUTAR]             DRI atualiza progresso (não-status updates · só notas)
    ↓
   ┌─────────────────┐
   │ Bloqueado?      │
   └─┬───────────────┘
   ┌─┴─┐
   │SIM│  → Em Bloqueado · descreve bloqueio · operação tira em ≤ 24h
   │NÃO│  → continua
   └───┘
    ↓
[CONCLUIR]             DRI move pra Concluído · marca timestamp
    ↓
[REVISAO]              Se aplicável · aprovador valida · senão volta pra Em andamento
    ↓
[ARQUIVAR]             7 dias depois · auto-arquiva
```

---

## 📊 Templates de Notion (importáveis)

### Template 1: Kanban LPSG completo

```yaml
URL_TEMPLATE:             "{a fornecer · template público}"
INCLUI:
  - "4 colunas · 3 swimlanes"
  - "Database backed · filtros prontos"
  - "Views: por DRI · por prazo · por edição"
  - "Cards de exemplo preenchidos"
```

### Template 2: Brief de batelada de criativos

```markdown
# Brief Batelada {SIGLA}_{DDMMYY}

**Data:** {data}
**Tipo:** {EST | CAR | VID}
**Quantidade:** 5

## Foco
- Tipo de hook predominante: {QUEBRA_PADRAO | etc}
- Dor atacada: {FINANCEIRA | etc}
- Tom: {SERIO | LEVE | POLEMICO}

## Variação obrigatória
- [ ] 5 hooks diferentes (1 cada tipo)
- [ ] 5 dores diferentes
- [ ] 3 tons (sério · leve · polêmico)

## Foto do expert
- Tipo: {HEADSHOT | RINDO | etc}
- Disponível em: {link Drive}

## Entregáveis esperados
- [ ] 5 PNGs 1080×1350
- [ ] 5 versões 9:16 (stories)
- [ ] Copy do anúncio Meta (1 por criativo)

## Aprovação
- DRI Designer: {nome}
- Aprovador: {Expert | Operação}
- Prazo: {data + hora}
```

### Template 3: Decision Log

```markdown
# Decisão · {data}

**Tema:** {assunto curto}
**Quem decidiu:** {Expert · DRI · Comitê}
**Contexto:** {1-2 frases · por que tinha que decidir agora}
**Opções consideradas:**
- A) {opção · prós · contras}
- B) {opção · prós · contras}

**Decisão:** {escolhida}
**Justificativa:** {por que A e não B}
**Próximas ações:**
- [ ] {ação · DRI · prazo}

**Revisar em:** {data · pra ver se decisão funcionou}
```

---

## 🔌 Integrações úteis (Notion + Slack + n8n)

### Notion → Slack

```yaml
TRIGGER:                  "Card vira Bloqueado"
ACAO:                     "Posta no #ops com link · @DRI · descreve bloqueio"

TRIGGER:                  "Card P0 vira Em andamento"
ACAO:                     "Posta no #ops · status check 24h"

TRIGGER:                  "Card P0 prazo < 12h e ainda em Em andamento"
ACAO:                     "Alerta @ Expert + DRI"
```

### Slack → Notion

```yaml
TRIGGER:                  "Mensagem com hashtag #task no #ops"
ACAO:                     "Cria card no Backlog · sem DRI"

TRIGGER:                  "Mensagem com hashtag #decision no #ops"
ACAO:                     "Cria entry no Decision Log"
```

### n8n integra dashboard

```yaml
TRIGGER:                  "Diário 8h"
ACAO:                     "Puxa cards 🔴 + 🟡 do Notion → posta resumo no #ops"

TRIGGER:                  "Card vira Concluído com tag 'criativo'"
ACAO:                     "Notifica gestor de tráfego · pode subir"
```

---

## 📈 Métricas do Kanban

```yaml
LEAD_TIME_MEDIO:
  alvo:                   "≤ 3 dias úteis (do Backlog ao Concluído)"
  metrica:                "Cycle time"

WIP_AVERAGE:
  alvo:                   "≤ 3 cards Em andamento por DRI"

TAREFAS_BLOQUEADAS:
  alvo:                   "≤ 2 simultâneas no quadro"
  acao_se_excedido:       "War-room imediato"

TASKS_NO_PRAZO:
  alvo:                   "≥ 85%"
  metrica:                "Completed_at <= due_date"

CARDS_SEM_DRI:
  alvo:                   "0 (zero · sempre)"
```

---

## 🧰 Ferramentas complementares ao Kanban

```yaml
SLACK:                    "Comunicação · alertas · canais por área"
GOOGLE_DRIVE:             "Arquivos finais · brand assets · contratos"
GOOGLE_CALENDAR:          "Eventos do time · 1:1 · daily"
GOOGLE_SHEETS:            "Storage de leads (do automacoes-lpsg)"
NOTION:                   "Kanban · docs · SOPs · Decision Log"
LOOM:                     "Vídeo assíncrono (substitui reunião)"
TOGGL:                    "Timer de reuniões e tasks (opcional)"
LINEAR:                   "Quando time > 15 · issues técnicas"
```

---

## ✅ Checklist do Kanban

```
[ ] Notion workspace criado · time tem acesso"
[ ] Template Kanban LPSG instalado"
[ ] 4 colunas · 3 swimlanes configuradas"
[ ] Cada card tem DRI + prazo + prioridade"
[ ] WIP limits configurados por DRI"
[ ] Status semáforo (🟢🟡🔴) automático"
[ ] Auto-arquivamento de Concluídos > 7 dias"
[ ] Slack channels integrados (#ops · #criativos · #closer)"
[ ] Decision Log criado e ativo"
[ ] Templates de brief salvos"
[ ] Métricas de Lead Time monitoradas mensalmente"
```

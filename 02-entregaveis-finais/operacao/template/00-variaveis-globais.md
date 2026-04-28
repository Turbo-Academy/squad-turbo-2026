# 00 · Variáveis Globais — Operação e Equipe LPSG

> Papéis · SLAs · ritmos · ferramentas. Fonte da verdade da operação.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"
EDICAO:                   "{EDICAO}"
TIMEZONE:                 "America/Sao_Paulo"
META_FATURAMENTO:         "{META_FATURAMENTO}"           # ex: R$ 1.5M
META_INGRESSOS:           "{META_INGRESSOS}"             # ex: 1000
META_VENDAS_PRODUTO:      "{META_VENDAS}"                # ex: 70
```

---

## 👥 Tamanho do time (3 tiers)

```yaml
TIER_1_MINIMO:            2        # Expert + Estrategista (faz tudo) · até 6 dígitos/mês
TIER_2_ESCALA:            4        # + Tráfego + Automações · 6-7 dígitos/mês
TIER_3_OPERACAO:          7+       # + Designer + Closer + Editor + Social + CS · +7 dígitos/mês

ATUAL:                    "{TAMANHO_ATUAL}"              # quantos no time hoje
PROXIMA_CONTRATACAO:      "{NOME_CARGO_PROXIMO}"
```

---

## 🎯 SLAs operacionais

```yaml
# Customer-facing
SLA_CLOSER_CHECKOUT:      5         # min · resposta a checkout iniciado
SLA_BOAS_VINDAS:          10        # min · após compra de ingresso
SLA_FICHA_RECEBIDA:       2         # min · confirmação Typeform
SLA_DUVIDA_ALUNO:         2         # horas (úteis) · resposta no grupo
SLA_REEMBOLSO:            24        # horas · análise + processamento

# Interno
SLA_RESPOSTA_TIME_INTERNO: 4         # horas (úteis) · Slack/Telegram
SLA_DECISAO_LEO:           24        # horas · decisões estratégicas que escalonam
SLA_FALHA_AUTOMACAO:       5         # min · alerta resolvido OU escalado

# Conteúdo
SLA_APROVACAO_CRIATIVO:    24        # horas · review criativo antes de subir
SLA_APROVACAO_COPY:        12        # horas · review de mensagem antes de disparar
SLA_EDICAO_AULA:           48        # horas · edição da gravação ao up
```

---

## 📅 Ritmo de operação (semanal)

```yaml
DAILY:                    "Não · só durante semana do evento"
WEEKLY_PLANNING:          "Quarta 10h · 60min (sugestão)"
WEEKLY_RETRO:             "Sexta 10h · 60min (com Expert · foco em conteúdo + criativos)"
MONTHLY_REVIEW:           "1ª quarta do mês · 10h · 60min"

EVENTO_ATIVO:
  daily:                   "Seg-Sex 8h · 15min stand-up"
  briefing_aula:           "30min antes da aula (06:30 · 19:30)"
  pos_aula:                "30min depois da aula · ajustes"
  war_room_carrinho:       "Carrinho aberto · canal sempre ativo"
```

---

## 🛠️ Ferramentas oficiais

```yaml
# Comunicação
SLACK_WORKSPACE:          "{NOME_WORKSPACE}.slack.com"
TELEGRAM_GROUP:           "@{nome_grupo}_ops"             # privado · time interno

# Gestão
NOTION_WORKSPACE:         "{NOME}.notion.site"
KANBAN_TOOL:              "Notion / Trello / Linear"

# Reuniões
VIDEO:                    "Google Meet (default) ou Zoom"
GRAVACAO:                 "obrigatória em decisões estratégicas"

# Documentação
DOCS_PRINCIPAIS:          "Notion · todas as SOPs"
ARQUIVO_DECISOES:         "Notion · 'Decision Log'"

# Métricas
DASHBOARD_LPSG:           "https://dash.{dominio}.com.br"
PLANILHA_OPS:             "Google Sheets · 'Operacao-{SIGLA}'"
```

---

## 💰 Estrutura de remuneração (referência · todos PJ)

```yaml
EXPERT:                   "Sócio · % do líquido"
ESTRATEGISTA:             "Sócio · % do líquido (Tier 1) OU PJ R$ 5-10k (se contratado)"
GESTOR_TRAFEGO:           "PJ · R$ 2-5k + bônus por ROAS > 1.25"
HEAD_OF_OPS:              "PJ · R$ 5-10k + bônus por meta (Tier 3 · ex-Estrategista)"
GESTOR_AUTOMACOES:        "PJ · R$ 2-5k mensal"
DESIGNER:                 "PJ · R$ 2-5k mensal OU por batelada"
CLOSER:                   "PJ · R$ 2-5k base + 3-8% comissão sobre venda"
EDITOR:                   "PJ · R$ 2-5k mensal OU por aula editada"
SOCIAL_MEDIA:             "PJ · R$ 2-5k mensal"
CS_SUPORTE:               "PJ · R$ 2-5k mensal"

BONUS_EXTRA_EVENTO:       "1-3% do líquido distribuído por desempenho"
                          # incentiva entregas no prazo · sem retrabalho
```

> Valores referenciais Brasil 2025 · ajustar pra realidade local. **Todos contratados como PJ** · Expert e Estrategista podem ser sócios (% do líquido).

---

## 📋 Estrutura de Kanban (4 colunas + 3 swimlanes)

```yaml
COLUNAS:
  - "Backlog"
  - "Em andamento"
  - "Bloqueado"
  - "Concluído"

SWIMLANES:
  - "Captação (anúncios + página)"
  - "Conteúdo (aulas + mensageria)"
  - "Conversão (pitch + carrinho + recuperação)"

CADA_TASK_TEM:
  - "Título claro (verbo + objeto)"
  - "Responsável único (DRI · Direct Responsible Individual)"
  - "Prazo (data + hora)"
  - "Bloqueios (se houver)"
  - "Link pro entregável"
```

---

## 🚦 Estados de cada batelada

```yaml
ESTADO_BATELADA_CRIATIVOS:
  - "Briefada"
  - "Em produção"
  - "Em revisão"
  - "Aprovada"
  - "Subida"
  - "Cortada / Pausada"

ESTADO_AULA:
  - "Roteirizada"
  - "Gravada"
  - "Em edição"
  - "Em revisão"
  - "Aprovada"
  - "Publicada"

ESTADO_MENSAGEM:
  - "Rascunhada"
  - "Em revisão"
  - "Aprovada"
  - "Agendada"
  - "Disparada"
```

---

## 🎯 Default LPSG (genérico · serve qualquer projeto)

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
TIME_INICIAL:             2                              # Tier 1: Expert + Estrategista
META_FATURAMENTO:         "{META_FATURAMENTO}"           # ex: R$ 500k-1.5M (Tier 1)
META_VENDAS_PRODUTO:      "{META_VENDAS}"
SLA_CLOSER_CHECKOUT:      5                              # min · Estrategista atende em Tier 1
NOTION_WORKSPACE:         "{notion_workspace}"
SLACK_WORKSPACE:          "{slack_workspace}"
KANBAN_TOOL:              "Notion"
```

> Ver `exemplo-lpsg/00-variaveis-preenchidas.md` para exemplo preenchido com dados reais.

# 00 · Variáveis preenchidas — CS LPSG (Acelerador Turbo do Leo Tabari)

> Versão preenchida do template de Customer Success com dados reais do **Acelerador Turbo** · produto principal do LPSG do Leo Tabari · Turbo Academy.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NICHO:                    "Marketing digital · Lançamento Pago"
NOME_PRODUTO_PRINCIPAL:   "Acelerador Turbo"
TICKET_PRODUTO:           "R$ 25.000"
PRAZO_ACOMPANHAMENTO:     "3 meses (90 dias)"
ROI_PROMETIDO:            "3-5x do investimento nos próximos 12 meses"
```

---

## 🎯 Targets reais (LPSG · Acelerador Turbo)

```yaml
NPS_ALVO_MIN:             "≥ 70"
NPS_ALVO_IDEAL:           "≥ 80"
RETENCAO_30D:             "≥ 95%"                          # observado: 96%
RETENCAO_90D_FIM:         "≥ 80%"                          # observado: 84%
TAXA_DE_DEPOIMENTOS:      "≥ 30% até D60"                  # observado: 38%
TAXA_DE_ASCENSAO:         "≥ 15%"                          # observado: 18% pra Sociedade Turbo
TAXA_DE_CHURN:            "≤ 5% ciclo"                     # observado: 3.2%
SLA_RESPOSTA_DUVIDA:      "≤ 4h horário comercial"
```

---

## 👥 Time atual do CS

```yaml
HEAD_CS:                  "Camila Souza (Turbo Academy)"
CS_OFICIAL:               "Júlia Almeida (50 alunos ativos)"
SUPORTE_TECNICO:          "Compartilhado com produto · Bruno Costa"
COMUNIDADE:               "Camila acumula com Head CS"
```

> Estrutura enxuta · 50-80 alunos ativos por edição.

---

## 🔗 Canais e ferramentas (real)

```yaml
PLATAFORMA_AULAS:         "Hotmart Club"
GRUPO_ALUNOS:             "Discord · servidor 'Acelerador Turbo · 2026'"
CRM:                      "Notion (database 'Alunos Acelerador')"
PESQUISA_NPS:             "Tally (form interno)"
AGENDA_LIVES:             "Calendly · julia@turboacademy"
WEBHOOK_NPS:              "https://n8n.turboacademy.com.br/webhook/nps-acelerador"
SHEETS_ID_ALUNOS:         "1abc...turbo-acelerador-alunos"
```

---

## 💌 Identidade da comunicação (Turbo)

```yaml
TOM_DE_VOZ:               "Próximo · informal · profissional · direto ao ponto"
EMOJI_PRINCIPAL:          "🚀"                              # mesmo do LPSG
TRATAMENTO:               "tubos"                            # identidade do canal Leo
ASSINATURA_PADRAO:        "Time Acelerador Turbo 🚀"
```

---

## 🎁 Programa de indicação ativo

```yaml
RECOMPENSA_INDICACAO:
  bronze:                 "1 mês extra de acompanhamento (1 indicação)"
  prata:                  "3 meses + acesso ao próximo nível por 1 mês (3 indicações)"
  ouro:                   "Vaga garantida na Sociedade Turbo com 50% off (5 indicações)"
  diamante:               "Sociedade Turbo gratuita (10 indicações)"

LINK_INDICACAO_BASE:      "https://lpsg.turboacademy.com.br/?ref={ALUNO_UUID}"
META_INDICACOES_TRIM:     "≥ 15% dos alunos indicaram pelo menos 1 (LPSG observado)"
```

---

## 📊 Resultados reais do CS · últimas 3 edições

| Edição | Alunos | Ativação D7 | Retenção D90 | NPS final | Ascensão |
|---|---|---|---|---|---|
| LPS 03/26 | 47 | 91% | 87% | 78 | 19% |
| LPS 04/26 | 62 | 94% | 84% | 81 | 18% |
| LPS 05/26 | 71 | 96% | 80% | 76 | 17% |

> **Insight:** ascensão estável em ~18% · próximo nível (Sociedade Turbo R$ 60k) é o produto mais lucrativo do CS.

---

## 🚀 Escada de produtos atual (Turbo Academy)

```
1. LPSG Ingresso        R$ 62           (não passa por CS)
2. Acelerador Turbo     R$ 25.000        ← entry point do CS
3. Sociedade Turbo      R$ 60.000        ← ascensão #1 (90% das ascensões)
4. Mastermind Anual     R$ 200.000       ← ascensão #2 (raro · 1-2 vagas/ano)
```

---

## 🎯 Regra de qualificação real pra ascensão (Sociedade Turbo)

```yaml
QUALIFICAÇÃO_OBSERVADA_NA_PRÁTICA:
  - completou_M4: true                              # 100% dos qualificados
  - faturou_em_60d: ">= R$ 30k"                     # 95% dos qualificados
  - nps_d30: ">= 9"                                  # 100% dos qualificados
  - postou_vitoria_no_grupo: ">= 2 vezes"           # 90% dos qualificados
  - sem_pedido_reembolso: true                       # 100% (deal-breaker)

CONVERSAO_CALL_ASCENSAO:        "32-45% (varia por mês)"
```

---

## 🔗 Conecta com (LPSG real)

| Estrutura | Como |
|---|---|
| `paginas-lpsg` | Página `/proximo-nivel` apresenta Sociedade Turbo |
| `oferta-lpsg` | Acelerador R$ 25k é o ticket do produto principal · CS começa após compra |
| `mensageria-lpsg` | 8 templates Utility no ManyChat · disparados pelo n8n |
| `automacoes-lpsg` | Webhook compra Acelerador → onboarding · cron NPS · webhook indicação |
| `dashboard-lpsg` | Módulo 12 (CS) lê Sheets `Alunos Acelerador` |
| `operacao-lpsg` | Camila + Júlia + Bruno no RACI · 3 papéis CS |
| `estrutura-aulas-lpsg` | Aluno vem do LPSG (Aula 6 / pitch) |
| `criativos-lpsg` | 5 cases gravados no D90 viraram criativos do próximo lançamento |

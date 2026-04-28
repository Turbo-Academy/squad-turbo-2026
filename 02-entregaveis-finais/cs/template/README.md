# Template — Customer Success LPSG

> **Estrutura de pós-venda** do produto principal vendido no Lançamento Pago Semanal Gravado (LPSG).
> Foco: retenção · ativação · prova social · ascensão · indicação · recuperação.
>
> Stack fixo: **Sheets (CRM mestre) + n8n (automações) + ManyChat (mensageria)**.

---

## 🎯 Princípio em 5 frases

1. **Aluno não-ativado D7 = futuro reembolso.** Onboarding agressivo nos 7 primeiros dias.
2. **Comunidade morre sem rituais.** 4 rituais semanais não-negociáveis.
3. **Toda compra entrega prova social.** Não é favor — é parte do contrato implícito.
4. **CS gera receita** (ascensão + indicação) — não só retém.
5. **Churn sistêmico ≠ churn individual.** Se > 25%, problema é no produto, não no CS.

---

## 📁 Arquivos

```
template/
├── README.md                       ← você está aqui
├── 00-variaveis-globais.md         ← preencha primeiro · CRM mestre · papéis
├── 01-onboarding-d0-d7.md          ← 7 mensagens · vídeo de boas-vindas · sinais de risco
├── 02-cronograma-90-dias.md        ← 6 marcos · 12 semanas · funil de retenção
├── 03-rituais-e-comunidade.md      ← 4 rituais · regras de convivência · gamificação
├── 04-mensagens.md                 ← templates de mensagens (Utility Meta) por momento
├── 05-prova-social.md              ← 6 tipos de prova social · coleta sistemática
├── 06-kpis-e-dashboard.md          ← 7 KPIs · alertas · Módulo 12 do dashboard
├── 07-ascensao-e-indicacao.md      ← upsell pra premium + member-get-member
└── 08-churn-e-recuperacao.md       ← 3 janelas de churn · política de reembolso
```

---

## 🔄 Fluxo de uso

1. **Preenche `00-variaveis-globais.md`** — fonte da verdade
2. **Configura aba `Alunos` no Sheets** com 18 colunas (schema no 00)
3. **Aprova templates Utility na Meta API** seguindo `04-mensagens.md` (8 templates iniciais)
4. **Implementa onboarding D0-D7** com `01-onboarding-d0-d7.md` + automacoes-lpsg
5. **Configura rituais semanais** com `03-rituais-e-comunidade.md`
6. **Define escada de produtos** com `07-ascensao-e-indicacao.md`
7. **Adiciona Módulo 12 (CS) ao dashboard** com `06-kpis-e-dashboard.md`
8. **Roda primeira turma** · ajusta · documenta padrões

---

## ⚙️ Princípios não-negociáveis

| # | Princípio | Por quê |
|---|---|---|
| 1 | **Onboarding D0-D7 obrigatório** | Aluno não-ativado em 7d = reembolso provável |
| 2 | **CS Oficial humano (não bot)** | Bot resolve dúvida · não cria relacionamento |
| 3 | **4 rituais semanais não-negociáveis** | Sem ritual, comunidade morre |
| 4 | **6 marcos · 6 entregas de prova social** | Aluno entrega sempre · sem favor |
| 5 | **NPS em 2 momentos (D30 + D90)** | NPS pontual mente · 2 medidas dá tendência |
| 6 | **Política de reembolso pública** | Transparência reduz fricção e queima |
| 7 | **Ascensão só pra qualificados** | Convidar errado queima oferta |
| 8 | **Indicação com recompensa em valor** | Cash gera fraude · acesso a mais valor não |

---

## 🎯 Targets consolidados

### Ativação e retenção
| Indicador | Mínimo | Ideal |
|---|---|---|
| Ativação D7 | 80% | 95%+ |
| Retenção D30 | 90% | 95%+ |
| Retenção D90 (concluiu) | 75% | 85%+ |

### NPS
| Indicador | Mínimo | Ideal |
|---|---|---|
| NPS parcial D30 | 50 | 70+ |
| NPS final D90 | 60 | 80+ |

### Receita do CS
| Indicador | Mínimo | Ideal |
|---|---|---|
| Taxa de prova social entregue | 50% | 70%+ |
| Taxa de ascensão | 10% | 20%+ |
| % alunos que indicaram ≥ 1 | 10% | 25%+ |

### Churn
| Indicador | Máximo | Ideal |
|---|---|---|
| Churn total D90 | 25% | < 15% |
| Reembolso D0-D7 | 5% | < 2% |

---

## 🚫 O que NÃO fazer

- ❌ Onboarding 100% automático (sem CS humano no D3)
- ❌ Live coletiva sem o {NOME_ESPECIALISTA} (perde valor)
- ❌ Vender ascensão em mensagem (precisa call)
- ❌ Recompensa de indicação em cash (fraude)
- ❌ Reembolso silencioso sem entender motivo (perde aprendizado)
- ❌ Ignorar NPS detrator (cria detrator público)
- ❌ Postar prova social sem permissão por escrito do aluno

---

## 💼 Equipe mínima recomendada

```yaml
TURMA_ATÉ_50_ALUNOS:
  HEAD_CS:           "1 pessoa (50% do tempo)"
  CS_OFICIAL:        "1 pessoa dedicada"
  SUPORTE_TECNICO:   "compartilhado com produto"
  COMMUNITY_MANAGER: "compartilhado com Head CS"

TURMA_50-200_ALUNOS:
  HEAD_CS:           "1 pessoa dedicada"
  CS_OFICIAL:        "2-3 pessoas (1 a cada 50 alunos)"
  SUPORTE_TECNICO:   "1 pessoa dedicada"
  COMMUNITY_MANAGER: "1 pessoa dedicada"

TURMA_200+_ALUNOS:
  HEAD_CS:           "1 pessoa + assistente"
  CS_OFICIAL:        "1 a cada 40 alunos"
  Demais:            "estrutura completa · ver operacao-lpsg"
```

> Detalhes em `operacao-lpsg/template/02-time-minimo-2-pessoas.md`.

---

## 🔗 Como liga com as outras 9 estruturas LPSG

| Estrutura | Como |
|---|---|
| `paginas-lpsg` | Página de venda promete o que CS entrega · expectativa alinhada |
| `oferta-lpsg` | Garantia da oferta = base da política de reembolso |
| `mensageria-lpsg` | Templates Utility usados nas mensagens automáticas do CS |
| `estrutura-aulas-lpsg` | Aluno vem da turma do LPSG → entra no CS no D0 |
| `automacoes-lpsg` | Workflows de onboarding · NPS · alertas · ascensão |
| `dashboard-lpsg` | Módulo 12 (CS) consome aba `Alunos` |
| `operacao-lpsg` | Papéis CS no RACI · cronograma · rituais |
| `criativos-lpsg` | Cases de sucesso viram criativos da próxima edição |
| `trafego-lpsg` | Receita do CS reduz CAC dependência (indicações orgânicas) |

---

**Fonte:** método LPSG do Leo Tabari · Turbo Academy.

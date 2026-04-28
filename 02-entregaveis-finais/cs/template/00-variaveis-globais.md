# 00 · Variáveis Globais — Customer Success

> Fonte da verdade do projeto de pós-venda. Preencha aqui primeiro — todos os outros arquivos referenciam estas variáveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"
NOME_PRODUTO_PRINCIPAL:   "{NOME_PRODUTO_PRINCIPAL}"        # Ex: Acelerador Turbo
TICKET_PRODUTO:           "{TICKET_PRODUTO}"                # Ex: R$ 25 mil
PRAZO_ACOMPANHAMENTO:     "{PRAZO_ACOMPANHAMENTO}"          # Ex: 3 meses (90 dias)
ROI_PROMETIDO:            "{ROI_PROMETIDO}"                 # Ex: 3-5x em 12 meses
```

---

## 🎯 Targets de CS (não-negociáveis)

```yaml
NPS_ALVO_MIN:             "≥ 70 (zona de promotores)"
NPS_ALVO_IDEAL:           "≥ 80"
RETENCAO_30D:             "≥ 95% (alunos que continuam ativos no D30)"
RETENCAO_90D_FIM:         "≥ 80% (concluem o programa)"
TAXA_DE_DEPOIMENTOS:      "≥ 30% dos alunos colhidos até D60"
TAXA_DE_ASCENSAO:         "≥ 15% dos formandos compram um próximo nível"
TAXA_DE_CHURN:            "≤ 5% no ciclo (cancelamento + reembolso)"
SLA_RESPOSTA_DUVIDA:      "≤ 4h em horário comercial"
```

---

## ⏱️ Cronograma do programa de acompanhamento

```yaml
D0:                       "Compra confirmada · disparo onboarding"
D1:                       "Boas-vindas em vídeo + acesso à plataforma"
D3:                       "Check-in 1 — 'já entrou?'"
D7:                       "Live de kick-off (semanal recorrente)"
D14:                      "Check-in 2 — 'tá rodando?'"
D30:                      "Pesquisa de momento + NPS parcial"
D45:                      "Live tira-dúvidas individual (opt-in)"
D60:                      "Coleta de depoimento + caso de sucesso"
D75:                      "Convite ao próximo nível (ascensão)"
D90:                      "Fechamento + NPS final + plano de continuidade"
```

---

## 👥 Papéis no CS (ver também `operacao-lpsg`)

```yaml
HEAD_CS:                  "{HEAD_CS}"                       # 1 pessoa · responsável geral · 50-100 alunos/mês
CS_OFICIAL:               "{CS_OFICIAL_1..N}"               # 1 pessoa por 25-40 alunos ativos
SUPORTE_TECNICO:          "{SUPORTE}"                       # plataforma, login, vídeo
COMUNIDADE:               "{COMMUNITY_MANAGER}"             # rege grupo do programa (Discord/WhatsApp)
```

---

## 🔗 Canais e ferramentas

```yaml
PLATAFORMA_AULAS:         "{PLATAFORMA}"                    # Hotmart Club / Members.com / próprio
GRUPO_ALUNOS:             "{LINK_GRUPO_ALUNOS}"             # Discord ou WhatsApp
CRM:                      "{CRM}"                           # Notion · HubSpot · Pipedrive
PESQUISA_NPS:             "{LINK_PESQUISA}"                 # Tally · Typeform
AGENDA_LIVES:             "{LINK_AGENDA}"                   # Calendly · pública
WEBHOOK_NPS:              "{WEBHOOK_NPS_RESULTADOS}"        # n8n recebe respostas
SHEETS_ID_ALUNOS:         "{SHEETS_ID}"                     # mestre dos alunos
```

---

## 📊 Schema da aba `Alunos` (mestre)

```
Coluna A: timestamp_compra
Coluna B: email
Coluna C: whatsapp
Coluna D: nome
Coluna E: edicao_lpsg                    LPS-AAMM
Coluna F: ticket_pago                    R$
Coluna G: data_acesso                    primeiro login plataforma
Coluna H: ultima_aula_assistida          % ou número
Coluna I: status                         ativo | atrasado | inativo | concluiu | cancelou
Coluna J: nps_d30                        0-10
Coluna K: nps_d90                        0-10
Coluna L: depoimento_coletado            sim | não
Coluna M: tipo_depoimento                texto | print | video
Coluna N: link_depoimento                URL/storage
Coluna O: ascensao                       comprou próximo produto?
Coluna P: data_conclusao
Coluna Q: cs_responsavel                 nome do CS Oficial
Coluna R: notas_internas                 livre
```

---

## 💌 Identidade da comunicação

```yaml
TOM_DE_VOZ:               "{TOM}"                           # Ex: próximo · informal · profissional
EMOJI_PRINCIPAL:          "{EMOJI}"                         # Ex: 🚀 (mesmo do evento)
TRATAMENTO:               "{TRATAMENTO}"                    # Ex: tubos, pessoa, [primeiro nome]
ASSINATURA_PADRAO:        "Time {NOME_PRODUTO_PRINCIPAL} {EMOJI}"
```

---

## 🎁 Programa de indicação (refer-a-friend)

```yaml
RECOMPENSA_INDICACAO:     "{RECOMPENSA}"                    # Ex: 1 mês extra de acompanhamento
LINK_INDICACAO:           "{LINK}"                          # rastreável por aluno
META_INDICACOES_TRIM:     "≥ 10% dos alunos indicam ≥ 1 amigo"
```

# 03 · Ações humanas · checklist consolidado

> **Tudo que SÓ você (humano) pode fazer** durante o projeto.
> Claude executa todo o resto. Mas estes pontos exigem **decisão · acesso · gravação · ou validação humana.**

---

## 🎯 Use este arquivo assim

- **Antes de começar uma fase** · lê a seção correspondente · confirma se tem o que precisa
- **Durante o projeto** · marca cada item conforme conclui
- **Depois da 1ª edição** · revisa pra próximas edições

---

## 🟢 Ações 1x · não repetem

> Faz uma vez no início do projeto.

### Pré-requisitos (antes do Dia 1)

| # | Ação | Skill onde detalha | Tempo |
|---|---|---|---|
| 1 | Comprar domínio próprio (registro.br ou Cloudflare) | `00-pre-requisitos.md` | 15 min |
| 2 | Configurar Cloudflare DNS | `00-pre-requisitos.md` | 15 min + propagação |
| 3 | Criar conta Meta Business Manager | `00-pre-requisitos.md` | 30 min + verificação 7d |
| 4 | Criar Ad Account · adicionar pagamento | `00-pre-requisitos.md` | 15 min |
| 5 | Criar Pixel Meta · anotar ID | `00-pre-requisitos.md` | 5 min |
| 6 | Gerar System User Token (CAPI long-lived) | `00-pre-requisitos.md` | 15 min |
| 7 | Configurar WABA · número dedicado | `00-pre-requisitos.md` | 1-2h |
| 8 | Criar conta Hotmart · subir pra Pro | `00-pre-requisitos.md` | 30 min + aprovação |
| 9 | Cadastrar 2 produtos Hotmart (ingresso + premium) | `00-pre-requisitos.md` | 40 min |
| 10 | Criar Vercel · conectar domínio | `00-pre-requisitos.md` | 20 min |
| 11 | Subir n8n (cloud ou self-hosted) | `00-pre-requisitos.md` | 5-60 min |
| 12 | Criar ManyChat · conectar WABA · criar tags | `00-pre-requisitos.md` | 30 min |
| 13 | Criar Service Account Google · baixar JSON | `00-pre-requisitos.md` | 20 min |
| 14 | Configurar Hotmart Club (plataforma de aulas) | `00-pre-requisitos.md` | 30 min |
| 15 | Criar servidor Discord (ou grupo WhatsApp) | `00-pre-requisitos.md` | 30 min |
| 16 | Preencher intake completo | `01-intake.md` | 30-60 min |

**Total estimado · 6-12h** dependendo do que já tinha.

---

### Identidade visual (Dia 0-1)

| # | Ação | Detalhe | Tempo |
|---|---|---|---|
| 17 | Foto profissional do expert | mín 1200px · cenário neutro | depende (sessão de fotos: 1-3h) |
| 18 | Logo/marca do projeto | SVG preferencial | designer 2-4h |
| 19 | Definir paleta de cores | 1 destaque + 1 secundária | 30 min |
| 20 | Coletar 6+ depoimentos de alunos antigos | texto + foto/print | 2-4h pra organizar |
| 21 | Coletar 3-6 prints de resultados | autorização escrita | 1-2h |

---

### Gravações (Dias 1-5)

> Ordem reflete a nova sequência das fases (criativos antes das aulas).

| # | Ação | Tempo | Quando | Skill que ajuda |
|---|---|---|---|---|
| 22 | Gravar 5 vídeos de criativo (30s cada) | 3-4h | Dia 1-2 (Fase 2) | `criativos-lpsg` |
| 23 | Gravar áudio Msg 7 (boas-vindas · 30s) | 15 min | Dia 2-3 (Fase 5) | `mensageria-lpsg` |
| 24 | Gravar áudio "Hoje é o dia" (Dom 10h · 45s) | 15 min | Dia 2-3 | — |
| 25 | Gravar áudio convite tira-dúvidas (Sáb · 30s) | 15 min | Dia 2-3 | — |
| 26 | Gravar áudio "bônus dos 10 min" (Seg 6h45 · 60s) | 15 min | Dia 2-3 | — |
| 27 | Gravar slides premium em PPTX | aplicar skill | Dia 5 | `gerador-slides-turbo` |
| 28 | Gravar 6 aulas do LPSG | 1 dia maratona (8h) | Dia 5 (Fase 3) | `estrutura-aulas-lpsg` |
| 29 | Gravar vídeo de boas-vindas do CS (90s) | 30 min · só se abrir CS | Pós 1ª edição | `cs-lpsg` |

---

## 🟡 Ações por edição · repetem semanalmente

> A cada nova semana ISO (LPSG é perpétuo).

### Pré-edição · sexta antes da Aula 1

- [ ] Confirmar páginas no ar com Lighthouse ≥ 95
- [ ] Confirmar campanha rodando há ≥ 3 dias
- [ ] Confirmar 100+ inscritos (ou meta da edição)
- [ ] Templates Utility da Meta aprovados
- [ ] Grupo do evento criado e bot rodando
- [ ] YouTube ao vivo configurado (privado · agenda)
- [ ] Time alinhado · cada um sabe sua função do dia

### Durante a edição (Seg-Dom)

- [ ] Apresentar Aulas 1-5 ao vivo (Seg-Sex 7h)
- [ ] Conduzir tira-dúvidas Sábado 10h
- [ ] Apresentar pitch Domingo 20h
- [ ] Acompanhar dashboard ao vivo (módulos Aulas + Tsunami + Sugestões)

### Pós-edição · sexta após carrinho fechar

- [ ] Documentar números reais
- [ ] Revisar sugestões da skill `trafego-lpsg` (engine análise)
- [ ] Aplicar 1 ação semanal (subir/descer/renovar/duplicar)
- [ ] Gravar/coletar depoimentos novos da edição

---

## 🔴 Ações em momentos críticos

### Quando aprovar templates Utility na Meta

> Acontece **1 vez no início** + **sempre que adicionar template novo**.

- [ ] `business.facebook.com/wa/manage/message-templates/`
- [ ] Submete cada template com categoria correta (Utility ≠ Marketing)
- [ ] Aguarda 1-3 dias úteis
- [ ] Se rejeitado · ajusta texto · ressubmete
- [ ] Se aprovado · ativa no ManyChat

### Quando renovar System User Token (long-lived)

> Token "long-lived" oficialmente expira em **60 dias** (mas system user é mais estável).

- [ ] **Mensalmente** · verifica em `business.facebook.com` se token está ativo
- [ ] Se expirou · gera novo · atualiza variável de ambiente em todos os lugares (n8n · dashboard · workflows)
- [ ] Não esquece de revogar o antigo

### Quando alguém pede reembolso

> CS atende · não automatizar.

- [ ] CS Oficial responde em ≤ 4h horário comercial
- [ ] Marca call de 30 min com o aluno
- [ ] Entende motivo · oferece soluções alternativas (ver `cs-lpsg/08-churn`)
- [ ] Se mantém reembolso · processa com agilidade · sem fricção
- [ ] Pesquisa pós-reembolso (1 pergunta) · alimenta dashboard

### Quando lead HOT entra na ficha (top tier)

> Não pode esperar mais de 24h.

- [ ] SDR/Closer recebe alerta no Notion/Trello
- [ ] Liga ou manda WhatsApp em ≤ 24h
- [ ] Agenda call de 45 min
- [ ] Conduz call seguindo `cs-lpsg/07-ascensao` ou roteiro de venda direta

### Quando criativo morre (fadiga)

> Engine de análise sugere · você decide.

- [ ] Verifica sugestão na aba `Recomendações` do dashboard
- [ ] Se concorda → marca como "aplicada" · renova criativo no Meta Ads
- [ ] **Renova 1/3 do lote por vez** (5 criativos · não os 15)

---

## ⚙️ Ações de configuração de ferramenta

> Estas ficam quando o Claude estrutura algo · você precisa **clicar** numa interface pra ativar.

### Vercel
- [ ] Conectar projeto Git ao Vercel
- [ ] Configurar variáveis de ambiente (todas as APIs)
- [ ] Conectar domínio customizado
- [ ] Adicionar SPF/DKIM se for usar email transacional

### Meta Ads Manager
- [ ] Subir os 15 criativos no campaign Ads (UI manual ou via API)
- [ ] Conectar catálogo Hotmart
- [ ] Ativar campanha
- [ ] Aprovar ou pausar criativos rejeitados pela revisão

### Hotmart
- [ ] Atualizar webhook URL pro n8n quando `ativar
- [ ] Aprovar checkout customizado (se for usar layout próprio)
- [ ] Configurar página de obrigado

### n8n
- [ ] Importar JSONs dos 14 workflows
- [ ] Configurar credentials (Meta · Hotmart · Sheets · ManyChat)
- [ ] Ativar crons (após testar manualmente)

### ManyChat
- [ ] Conectar WABA
- [ ] Importar tags (lista do `automacoes-lpsg/08-sistema-de-tags`)
- [ ] Aprovar templates Utility (após Meta aprovar)
- [ ] Configurar fluxos automáticos por tag

### Google Sheets
- [ ] Criar planilha mestre · compartilhar com Service Account
- [ ] Criar abas: `Leads` · `Fichas` · `Alunos` · `Recomendações` · `MetaAds_Daily` · `MetaAds_Normalized` · `Vendas`
- [ ] Aplicar schemas (definidos nas skills)

---

## 📋 Decisões estratégicas (irreversíveis · pensa bem)

> Decisões que mudam tudo a partir do momento que toma.

### Decisão · Ticket do produto principal

- **R$ 5-15k** → público mais amplo · conversão maior · CS mais leve
- **R$ 15-30k** → sweet spot LPSG (Acelerador R$ 25k é a referência)
- **R$ 30-100k** → público restrito · conversão menor · CS premium

> ⚠️ Mudar ticket após 1ª edição = **refaz tudo** (página · oferta · garantia · CS).

### Decisão · Modelo de garantia

- **7 dias incondicional** · padrão LPSG · alta conversão · alguns reembolsos
- **30 dias incondicional** · Hotmart sugere · conversão um pouco maior · mais reembolsos
- **Dupla (7 incondicional + 30 condicional)** · padrão LPSG · equilíbrio

### Decisão · Promessa de ROI

- "3-5x em 12 meses" · padrão LPSG · cobre maioria dos casos
- "Recuperar investimento em 90 dias" · agressivo · gera mais churn se não cumpre
- "Sem promessa específica" · seguro mas conversão menor

> **Regra:** o que prometer, **CS tem que entregar**. Não prometa o que oferta não entrega.

### Decisão · Abrir CS ou não

- **SIM** · com 5+ alunos do produto · ≥ 50% melhor retenção e ascensão
- **NÃO ainda** · com 1-4 alunos · atende manualmente · vira CS depois

---

## 🚨 Sinais que requerem PARAR e pensar

> Não ignora · mesmo que dashboard mostre verde em outras métricas.

| Sinal | O que pode ser | Ação |
|---|---|---|
| ROAS < 0.5 por 5+ dias | Avatar errado · oferta cara · página fraca | Pausa campanha · diagnóstico (`lpsg-master/03`) |
| 0 vendas premium em 1ª edição | Aulas não amarram com oferta · pitch fraco · ticket errado | Re-grava Aula 6 ou ajusta oferta |
| 3+ reclamações públicas no grupo | Expectativa não alinhada na venda | Trata pessoalmente · ajusta página |
| Reembolsos > 8% nos 7 primeiros dias | Página vendendo coisa diferente do que produto entrega | Auditoria de copy + retomada com calls |
| Churn > 25% no D90 | Produto não entrega · CS fraco · avatar errado | Retreat estratégico · pode estar errado de nicho |
| NPS médio < 50 | Detrator iminente público | Head CS liga 1:1 com cada · ajusta entrega |

---

## 🎯 Cadência de revisão · você no comando

| Frequência | O quê |
|---|---|
| **Diária (15 min)** | Verificar dashboard · ver alertas críticos |
| **Semanal (1h · seg 8h)** | Revisar sugestões da engine · aplicar 1 ação · planejar semana |
| **Quinzenal (2h)** | Revisar criativos · planejar batelada nova · NPS check |
| **Mensal (3h)** | Auditoria completa (`lpsg-master/05` checklist) · calibrar targets · planejar próximas 4 edições |
| **Trimestral (1 dia)** | Revisão estratégica · funil completo · escalada (duplicar campanha · contratar) |

---

## 📞 Como comunicar com o time

### Time pequeno (até 5 pessoas)
- Slack ou Telegram · 1 canal `#lpsg-{nome-projeto}`
- Stand-up diário 5 min (segundas)
- Revisão semanal 1h (sextas)

### Time médio (5-15 pessoas)
- Slack com canais por área (`#trafego` · `#cs` · `#design` · `#geral`)
- Stand-up diário 10 min · 1h sextas
- Notion ou ClickUp pra OKRs

### Time grande (15+)
- Estrutura corporativa · gerentes intermediários
- Pode ser sinal de que tá escalando demais (LPSG roda enxuto)

---

## ✅ Resumo · ações humanas em 1 linha

```
SETUP (1x):     contas + intake + gravações + identidade visual
EDIÇÃO (semanal): apresentar + acompanhar dashboard + revisar sugestões
CRÍTICAS:       reembolso + lead HOT + sinal de problema
DECISÕES:       ticket + garantia + promessa + abrir CS
```

> Tudo que **NÃO está aqui** · Claude faz. Não tenta fazer manualmente o que pode automatizar.

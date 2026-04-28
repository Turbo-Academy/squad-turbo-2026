# 01 · Papéis e RACI — quem faz o quê no LPSG

> 8 papéis · matriz RACI por entregável. 1 DRI por tarefa · sem ambiguidade.

---

## 🎯 Princípio: 1 papel = 1 dor resolvida

```
Cada papel existe pra resolver UMA dor operacional do LPSG.
Se 2 papéis fazem a mesma coisa → fundir.
Se 1 papel faz coisa demais → quebrar.
Se ninguém é dono → o expert acumula (gargalo).
```

---

## 👥 Os 9 papéis (por tier)

| # | Papel | Dor que resolve | Tipo | Tier |
|---|---|---|---|---|
| 1 | **Expert** | Conteúdo · autoridade · pitch | Sócio | 1+ |
| 2 | **Estrategista** | Faz TUDO operacional · multidisciplinar (vira Head of Ops em Tier 3) | CLT/PJ | 1+ |
| 3 | **Gestor de Tráfego** | Captação · ROAS · escala | CLT/PJ | 2+ |
| 4 | **Gestor de Automações** | n8n · ManyChat · integrações · health · DR | CLT/PJ | 2+ |
| 5 | **Designer** | Criativos · slides · páginas · brand | PJ | 3+ |
| 6 | **Closer Humano** | Recuperação · checkout · 1:1 com lead quente | PJ + comissão | 3+ |
| 7 | **Editor de Vídeo** | Aulas editadas · cortes · vídeos curtos | PJ | 3+ |
| 8 | **Social Media** | Orgânico · Reels · stories · prova social | PJ | 3+ |
| 9 | **Customer Success** | Onboarding aluno · suporte · NPS · retenção | PJ | 3+ |

> **Bônus:** Copywriter freelancer (briefs específicos · pontual em qualquer tier).

---

## 🎭 Detalhamento de cada papel

### 1️⃣ Expert (sócio)

```yaml
RESPONSABILIDADES:
  - "Gravar as 6 aulas (5 + pitch)"
  - "Aparecer ao vivo (sábado tira-dúvidas + pitch domingo)"
  - "Aparecer em criativos (rosto · áudios noturnos · convites)"
  - "Decisões estratégicas (oferta · preço · garantia · stack)"
  - "Onboarding alunos premium (mentorias se aplicável)"

NAO_FAZ:
  - "Editar as próprias aulas"
  - "Subir criativo na Meta"
  - "Responder dúvida operacional do time"
  - "Responder DM 1:1 de aluno (closer faz)"

TEMPO_DEDICADO_LPSG:      "20-30h/semana durante evento ativo · 5h/semana fora"
```

### 2️⃣ Estrategista (peça-chave do Tier 1 · 2 pessoas)

```yaml
RESPONSABILIDADES:
  - "Coordenar TODO o cronograma do lançamento (briefings · entregas · prazos)"
  - "Mensageria escrita + agendada (n8n · ManyChat)"
  - "Tráfego (no Tier 1) — campanhas Meta ASC + corte/escala"
  - "Automações (no Tier 1) — workflows n8n · health check"
  - "Design (no Tier 1) — briefa criativos + executa via Claude Designer/Nano Banana"
  - "Closer humano (SLA ≤5min · 90% das conversas até Tier 2)"
  - "Páginas (preenche template Next.js · deploy Vercel)"
  - "Suporte do grupo + CS"
  - "Daily stand-up · tirar bloqueios · interface com Expert"
  - "Atualizar Kanban · status de cada peça"

EVOLUCAO_POR_TIER:
  TIER_1: "Faz tudo (operação + tráfego + automação + design + closer)"
  TIER_2: "Foca em coord + mensageria + closer (delega tráfego e automação)"
  TIER_3: "Vira HEAD OF OPS · sai da execução · vai pra gestão"

KPIs:
  - "0 entregas atrasadas durante o evento"
  - "Time entregando sem o Expert precisar coordenar"
  - "Tempo de resposta interno < 4h"
  - "(Tier 1) ROAS captação ≥ 1.0 · CPM ≤ R$ 40"
  - "(Tier 1) Workflow tsunami sem falha"

ENTREGA:
  - "Daily 8h durante semana de evento"
  - "Status semanal pro Expert (Weekly Planning quarta + Weekly Retro sexta)"

PERFIL:
  - "Sênior multidisciplinar (NÃO funciona com júnior)"
  - "Já operou lançamento (não primeiro)"
  - "Conforto técnico (n8n · Meta Ads · IA design)"
  - "Forte em comunicação · diplomacia"
  - "Ex-PM digital · ex-marketer pleno · empreendedor digital são perfis ideais"
  - "Sem ego de executar (mete a mão · não delega tudo)"

> **Sem este papel, o Expert vira o gerente.** Estrategista é INVIOLÁVEL no Tier 1.
```

### 3️⃣ Gestor de Tráfego (Tier 2+)

```yaml
RESPONSABILIDADES:
  - "Estruturar campanhas Meta ASC (15 criativos · 4 ações)"
  - "Subir bateladas de criativos com nomenclatura correta"
  - "Monitorar Hook/Hold/Body Rate diário"
  - "Decidir cortes/escala (regra +5%/dia · -50%/dia · mín R$ 50/campanha)"
  - "CAPI server-side (Meta Conversions API)"
  - "Reporte semanal de ROAS · CPM · CPC"

KPIs:
  - "ROAS captação ≥ 1.0 (mín) · ≥ 1.25 (ideal)"
  - "CPM ≤ R$ 40"
  - "Hook Rate ≥ 20%"

ENTREGA:
  - "Diário: status no Slack #trafego (1 mensagem)"
  - "Semanal: relatório no Notion"

PERFIL:
  - "Já gerenciou ≥ R$ 100k/mês em ads"
  - "Domina Events Manager + CAPI"
  - "Conforto com diagnóstico (ler dashboard, decidir, agir)"

QUANDO_CONTRATAR:         "2 edições com R$ 600k+ líquido"
                          # 1ª contratação no Tier 1 → Tier 2
```

### 4️⃣ Gestor de Automações (Tier 2+)

```yaml
RESPONSABILIDADES:
  - "n8n: 13 workflows do template (captação · evento · tsunami · recuperação)"
  - "ManyChat: fluxos · tags · sincronização com n8n"
  - "Integrações: Hotmart · Meta WABA · Meta CAPI · Sheets · YouTube"
  - "Health check: workflow 99 · alertas Slack/Telegram"
  - "Disaster recovery: plano B do tsunami · WABA secundário"
  - "Dashboard alimentado em real-time durante carrinho"
  - "Sistema de tags por semana ISO + 4 fases (PASSADO/PRESENTE/FUTURO/EX-ALUNO)"

KPIs:
  - "Uptime n8n ≥ 99.5%"
  - "Latência webhook < 2s (P95)"
  - "Taxa de falha de workflow < 0.5%"
  - "WABA quality rating ≥ 90%"
  - "Match quality CAPI ≥ 7.0"

ENTREGA:
  - "Diário (durante carrinho): status do health check"
  - "Semanal: relatório de execuções · falhas · ações"

PERFIL:
  - "Conforto com n8n (ou Make/Zapier · migrar pra n8n)"
  - "Conforto com APIs REST · webhooks · OAuth"
  - "Conforto com JS básico (transformar payloads)"
  - "Conforto com Sheets API · Service Accounts"
  - "Inglês técnico (docs Meta · Hotmart em inglês)"
  - "Mindset DevOps: monitorar · alertar · resolver"

QUANDO_CONTRATAR:         "2ª contratação no Tier 1 → Tier 2"
                          "Quando workflow do tsunami já tá rodando · qq quebra dói muito"
```

### 5️⃣ Designer (Tier 3+)

```yaml
RESPONSABILIDADES:
  - "Bateladas de criativos (5 estáticos + 5 carrosséis · cards do carrossel)"
  - "Slides das aulas (com expert + paleta + brandbook)"
  - "Páginas (Next.js + Tailwind ou brief pra dev)"
  - "Capas YT · thumbs · banners stories"
  - "Brand consistency (paleta · fonte · iconografia)"

KPIs:
  - "Tempo médio de produção de uma batelada · alvo ≤ 3 dias"
  - "Lighthouse Mobile da página ≥ 95"
  - "Aprovação na 1ª revisão ≥ 70%"

PERFIL:
  - "Direção de arte forte · não só execução"
  - "Conforto com Claude Designer / Figma / Photoshop"
  - "Conforto com IA design (Nano Banana · GPT Image)"

ENTREGA:
  - "Briefs aprovados · pastas no Drive com nomenclatura LPSG"
```

### 6️⃣ Closer Humano (Tier 3+)

```yaml
RESPONSABILIDADES:
  - "Atender alertas Slack #closer-tsunami (SLA ≤5min)"
  - "Conversa 1:1 no WhatsApp pessoal OU ManyChat live chat"
  - "Recuperação D+1 a D+7 (40-50 leads em paralelo)"
  - "Dúvidas sobre o produto (preço · garantia · acesso)"
  - "Fechamento (pedir o sim · enviar o link · confirmar)"

KPIs:
  - "SLA médio ≤ 5min durante carrinho"
  - "Taxa de conversão das conversas que abriu ≥ 25%"
  - "Recuperação total ≥ 10% dos abandonos"

REMUNERACAO:
  - "Base R$ 2-4k + 5-10% comissão sobre venda fechada"

PERFIL:
  - "Já vendeu high ticket"
  - "Calma · empatia · firmeza"
  - "Domina objeções clássicas (preço · tempo · skill · timing)"
```

### 7️⃣ Editor de Vídeo (Tier 3+)

```yaml
RESPONSABILIDADES:
  - "Editar 6 aulas (5 + pitch) · cortes · legendas queimadas · transições"
  - "Editar VIDs da batelada (5 vídeos curtos pros ads)"
  - "Card 10 do carrossel (vídeo 4-5s)"
  - "Reels orgânicos (acompanha social media)"
  - "Cortes de pitch pra recuperação (depoimento)"

KPIs:
  - "Aula editada em ≤ 48h após gravação"
  - "Vídeo de criativo em ≤ 24h após brief"

ENTREGA:
  - "MP4 final + versões 9:16 e 1:1 quando aplicável"
  - "Legenda queimada · 100% do vídeo · sem corte abrupto no loop"
```

### 8️⃣ Social Media (Tier 3+)

```yaml
RESPONSABILIDADES:
  - "Calendário orgânico (3-5 posts/semana · 5-7 stories/dia)"
  - "Roteiros de Reels (semente do evento · prova · depoimentos)"
  - "Engajar nos comentários do feed"
  - "Capturar prova social (prints · áudios · vídeos)"
  - "Espelhar aquecimento do evento no orgânico"

KPIs:
  - "Crescimento do perfil + 10-20% durante captação"
  - "Engajamento médio ≥ 5% nos posts"
  - "Cobertura mínima diária no story durante evento"

PERFIL:
  - "Roteirista de conteúdo curto · não só designer"
  - "Conhece a voz do expert"
  - "Conforto com Reels · CapCut · trending"
```

### 9️⃣ Customer Success / Suporte (Tier 3+)

```yaml
RESPONSABILIDADES:
  - "Onboarding aluno premium (acesso ao curso · grupo · mentorias)"
  - "Responder dúvidas do grupo do evento (≤2h SLA)"
  - "NPS pós-evento (D+30 do produto)"
  - "Coletar depoimentos · prova social pra próxima edição"
  - "Reativação de alunos antigos"

KPIs:
  - "NPS ≥ 50 (excelente: ≥ 70)"
  - "Tempo médio de resposta no grupo ≤ 2h úteis"
  - "Taxa de conclusão do curso ≥ 40%"

ENTREGA:
  - "Resumo semanal: NPS · churn · depoimentos coletados"
```

---

## 🔠 Matriz RACI · entregáveis por tier

```
R = Responsible (executa)
A = Accountable (responde por · aprova final · 1 só)
C = Consulted (input antes de fazer)
I = Informed (recebe resultado)
—  = Não envolvido / não existe ainda nesse tier
```

> No Tier 1, o Estrategista absorve Tráfego · Automações · Designer · Closer (faz tudo). À medida que o tier avança, esses papéis viram dedicados.

| Entregável | Expert | Estrategista | Tráfego | Automações | Designer | Closer | Editor | Social | CS |
|---|---|---|---|---|---|---|---|---|---|
| **Briefing das aulas** | A · R | C | — | — | I | — | I | I | I |
| **Gravação das aulas** | A · R | C | — | — | I | — | C | I | I |
| **Edição das aulas** | C | A | — | — | I | — | R | I | I |
| **Bateladas de criativos** | C | A · R<sup>T1</sup> | A<sup>T2+</sup> | C | R<sup>T3</sup> | I | C | I | I |
| **Subida de campanhas** | I | A · R<sup>T1</sup> | A · R<sup>T2+</sup> | C | I | I | I | I | I |
| **Mensageria do evento** | C | A · R | I | C · R<sup>técnico</sup> | I | I | I | C | C |
| **Páginas (criação · otim.)** | C | A · R<sup>T1</sup> | C | C | A · R<sup>T3</sup> | I | I | I | I |
| **Tsunami / 4 janelas** | I | A | C | C · R | I | C | I | I | I |
| **SLA closer ≤5min** | I | A · R<sup>T1-T2</sup> | I | I | I | A · R<sup>T3</sup> | I | I | I |
| **Recuperação D+1 a D+7** | I | A · R<sup>T1-T2</sup> | I | I | I | A · R<sup>T3</sup> | I | I | I |
| **Automações n8n + workflows** | I | A · R<sup>T1</sup> | I | A · R<sup>T2+</sup> | I | I | I | I | I |
| **Health check automações** | I | A · R<sup>T1</sup> | I | A · R<sup>T2+</sup> | I | I | I | I | I |
| **Conteúdo orgânico** | C | C | I | I | C | I | C | A · R<sup>T3</sup> | I |
| **Onboarding aluno premium** | I | A · R<sup>T1-T2</sup> | I | I | I | I | I | I | A · R<sup>T3</sup> |
| **Dashboard semanal** | I · A | R | C | C | I | I | I | I | I |
| **Decisão de oferta/preço** | A · R | C | I | I | I | C | I | I | I |
| **Pós-mortem da edição** | A | R | C | C | C | C | C | C | C |

> Notação `<sup>T1</sup>` indica em qual tier o papel responde por aquela função. Quando o time evolui de tier, o ownership migra do Estrategista pro DRI dedicado.

---

## 🎯 DRIs (Direct Responsible Individual) por área

> Pra cada área crítica · 1 nome único · sem dúvida. DRI muda conforme o tier evolui.

```yaml
# TIER 1 (2 pessoas) — Estrategista absorve quase tudo
CAPTACAO:                 "{nome_estrategista}"             # Tier 1
CONTEUDO_AULAS:           "{nome_expert}"
EDICAO_AULAS:             "{nome_estrategista}"              # Tier 1 · CapCut leve
CRIATIVOS:                "{nome_estrategista}"              # Tier 1 · IA design
PAGINAS:                  "{nome_estrategista}"              # Tier 1 · template Next.js
MENSAGERIA:               "{nome_estrategista}"
TSUNAMI_CARRINHO:         "{nome_estrategista}"
CLOSER_VENDAS:            "{nome_estrategista}"              # Tier 1-2
RECUPERACAO:              "{nome_estrategista}"              # Tier 1-2
SUPORTE_GRUPO:            "{nome_estrategista}"              # Tier 1-2
SOCIAL_ORGANICO:          "{nome_expert}"                    # Tier 1 · Expert apresenta
AUTOMACOES_TECNICAS:      "{nome_estrategista}"              # Tier 1

# TIER 2 (4 pessoas) — Tráfego e Automações dedicados
CAPTACAO:                 "{nome_gestor_trafego}"            # Tier 2+
AUTOMACOES_TECNICAS:      "{nome_gestor_automacoes}"         # Tier 2+
# ... resto continua com Estrategista

# TIER 3 (7+ pessoas) — Estrategista vira Head of Ops
EDICAO_AULAS:             "{nome_editor}"                    # Tier 3+
CRIATIVOS:                "{nome_designer}"                  # Tier 3+
PAGINAS:                  "{nome_designer}"                  # Tier 3+
CLOSER_VENDAS:            "{nome_closer}"                    # Tier 3+
RECUPERACAO:              "{nome_closer}"                    # Tier 3+
SUPORTE_GRUPO:            "{nome_cs}"                        # Tier 3+
SOCIAL_ORGANICO:          "{nome_social}"                    # Tier 3+
COORDENACAO_GERAL:        "{nome_head_of_ops_ex_estrategista}"  # Tier 3+
```

> Todo bloqueio escala primeiro pro DRI. Só vai pro Expert se DRI explicitamente pedir.

---

## 🚨 Escalation path (quando algo dá errado)

```
1. Tarefa atrasada      →  Estrategista (Tier 1-2) ou Head of Ops (Tier 3) tira bloqueio
2. Bloqueio técnico     →  Estrategista (Tier 1) ou Gestor de Automações (Tier 2+)
3. Decisão estratégica  →  Estrategista leva pro Expert (com proposta)
4. Crise (carrinho)     →  Todos no canal #war-room-{evento}
5. Lead VIP perdido     →  Closer (ou Estrategista no Tier 1) escala pro Expert
```

---

## ✅ Checklist de definição de papéis

```
[ ] Expert tem clareza do que NÃO faz
[ ] Gestor de Operação está contratado (peça-chave)
[ ] Cada papel tem 1 DRI nominal (nome do membro)
[ ] Matriz RACI revisada e aprovada por todos
[ ] Documentado no Notion · acessível ao time
[ ] Onboarding de novos membros começa lendo este arquivo
[ ] Reuniões 1:1 mensais Expert ↔ cada DRI (15min)
```

# 02 · Passo-a-passo · execução em 1 semana

> **7 dias intensivos** pra sair do zero até a 1ª edição rodando.
>
> ⚡ **Atalho:** se preferir, use o **MODO EXECUTOR** — cole 1 comando no Claude e o orquestrador `@lpsg-master` faz tudo. Detalhes no fim deste arquivo.

---

## ⚡ MODO EXECUTOR (recomendado · 1 comando)

Já tem o cadastro preenchido? Cola isso no Claude:

```
@lpsg-master crie meu LPSG.

Aqui está meu cadastro do projeto:

[YAML gerado no manual interativo]

Quero que você:
1. Valide o cadastro · me avise se algo crítico está em branco
2. Execute as 10 estruturas na ordem correta (Fase 1 → Fase 10)
3. Acione subagentes especialistas quando preciso
4. Reporte progresso ao final de cada fase

Comece pela Fase 1 (paginas-lpsg).
```

A skill `lpsg-master` valida · executa · reporta · pede aprovação humana em pontos críticos.

> Se preferir executar manualmente fase por fase · siga o roteiro abaixo.

---

## 📅 Visão geral · 1 semana

```
DIA 0   (sex/sab/dom prévios)  ── Pré-requisitos + cadastro preenchido
DIA 1   (Segunda)              ── Fases 1-2 (páginas + criativos)
DIA 2   (Terça)                ── Fases 3-4 (aulas + oferta)
DIA 3   (Quarta)               ── Fases 5-6 (mensageria + tráfego)
DIA 4   (Quinta)               ── Fases 7-8 (automações + dashboard)
DIA 5   (Sexta)                ── Fase 9 (operação) + gravação aulas
DIA 6-7 (Sábado-Domingo)       ── Aprovações Meta + pré-edição

SEMANA SEGUINTE                ── 1ª EDIÇÃO RODA
PÓS PRIMEIRAS VENDAS           ── Fase 10 (cs-lpsg)
```

---

## 🎯 As 10 fases na ordem correta

| # | Skill | Foco | Subagentes |
|---|---|---|---|
| **1** | `paginas-lpsg` | Páginas de venda + ficha de interesse | `@designer-senior` · `@copywriter` |
| **2** | `criativos-lpsg` | 15 criativos (5 vídeos + 5 estáticos + 5 carrosseis) | `@copywriter` · `@designer-senior` |
| **3** | `estrutura-aulas-lpsg` | 6 aulas (5+1) · 7 dias de evento · 5 técnicas (seg-sex) + tira-dúvidas (sáb · sem replay) + pitch (dom) · formato é decisão interna | `@copywriter` · `gerador-slides-turbo` |
| **4** | `oferta-lpsg` | Stack de valor + tsunami + garantia | `@copywriter` |
| **5** | `mensageria-lpsg` | 8 fases · ~30 mensagens · templates Utility | `@copywriter` |
| **6** | `trafego-lpsg` | Campanha Meta ASC + análise auto | — |
| **7** | `automacoes-lpsg` | 14 workflows n8n + ManyChat | — |
| **8** | `dashboard-lpsg` | 11 módulos · 8 fontes de dados | `@designer-senior` |
| **9** | `operacao-lpsg` | RACI · 12 SOPs · 6 rituais | — |
| **10** | `cs-lpsg` | Pós-venda 90 dias · NPS · ascensão | (após 1ª venda) |

> ⚠️ **Pontos de aprovação humana obrigatória:** Fase 4 (oferta) · Fase 6 (tráfego) · Fase 7 (automações) · Fase 10 (CS)

---

# 📍 DIA 0 · Preparação (já feito)

- [x] Pré-requisitos criados (`00-pre-requisitos.md`)
- [x] Cadastro preenchido (`01-intake.md` · ou aba "Cadastro" do manual.html)

---

# 🌐 FASE 1 · paginas-lpsg

### ⏱️ 4h · 🚨 + 🤖 + ⚙️

### 🤖 Pedido pro Claude
> *"Use a skill `paginas-lpsg`. Cria as 5 variações de página (`/v1` a `/v5`) + ficha de interesse 11 etapas. Stack: Next.js 14 + Tailwind + Vercel. Use Bloco A · B · D · H do cadastro. Já com Pixel + GTM + GA4 instalados."*

### O que Claude faz
- Projeto Next.js completo
- 5 variações com 9 blocos (TopBar · Hero · Pain · NotYourFault · Authority · Promises · Lessons · Testimonials · FinalCTA)
- Página `/ficha-de-interesse` com 11 etapas
- API `/api/ficha-interesse` calcula tier (HOT/WARM/COLD)
- Tracking instalado · Lighthouse mobile ≥ 95

### 🚨 AÇÃO HUMANA · upload de assets (1h)
- [ ] Foto profissional do expert (mín 1200px)
- [ ] 6 prints de resultados reais + autorização
- [ ] 6 depoimentos (texto + foto)
- [ ] Logo do projeto (SVG)

### ⚙️ Configuração Vercel
- [ ] Conectar `lp.{dominio}` ao projeto
- [ ] Variáveis de ambiente (Pixel · GTM · CAPI Token)
- [ ] Auto-deploy ativado

### ✅ Checkpoint
5 URLs no ar · Lighthouse mobile ≥ 95 · ficha funcionando

---

# 🎬 FASE 2 · criativos-lpsg

### ⏱️ 5h · 🚨 humano-intensivo

### 🤖 Pedido pro Claude
> *"Use a skill `criativos-lpsg`. Estrutura batelada de 15 criativos: 5 vídeos · 5 estáticos · 5 carrosseis. Hooks variados (5 tipos). Use Bloco H do cadastro (cor · estilo · referências)."*

### O que Claude faz
- Roteiros de 5 vídeos (30s cada · Hook + Hold + Body)
- Layout de 5 estáticos
- Estrutura de 5 carrosseis (5 cards cada)
- Nomenclatura `{SIGLA}_{FORMATO}_{HOOK}_v{N}`

### 🚨 AÇÃO HUMANA · GRAVAR vídeos (3-4h)
- [ ] Setup: celular bom · ring light · microfone lapela
- [ ] Filma 5 vídeos seguindo roteiros
- [ ] Vertical 9:16 + 1:1
- [ ] Sem logo nos primeiros 3s
- [ ] Legenda embutida (80% consome no mute)

### 🚨 AÇÃO HUMANA · designer (paralelo)
- [ ] 5 estáticos (1:1 + 9:16 + 1.91:1)
- [ ] 5 carrosseis (5 cards · 1:1 · último é CTA)
- [ ] Cores do cadastro (Bloco H)

### ✅ Checkpoint
15 criativos aprovados · arquivos prontos pra upload

---

# 🎯 FASE 3 · estrutura-aulas-lpsg

### ⏱️ 1h Claude + dias de gravação · 🤖 + 🚨

### 🤖 Pedido pro Claude
> *"Use a skill `estrutura-aulas-lpsg`. Estrutura as 6 aulas (5+1) baseado no Bloco C do cadastro. Pra cada uma: tema central · gancho de abertura · tarefa pro aluno · transição. 7 dias de evento · 5 técnicas (seg-sex) + tira-dúvidas (sáb · única sem replay) + pitch (dom). Formato (ao vivo OU gravado) é decisão interna do expert · NÃO se comunica formato pro público. Use também `gerador-slides-turbo` pros PPTX premium das aulas que forem pré-gravadas."*

### O que Claude faz
- 6 aulas com função estratégica (escada de crenças) — 7 dias de evento · sábado tira-dúvidas é a única sem replay disponível · formato (ao vivo/gravado) de cada aula é decisão interna do expert · não comunicado pro público
- Slides PPTX prontos
- Cronograma de gravação sugerido

### 🚨 AÇÃO HUMANA · revisar e gravar
- [ ] Expert revisa cada aula
- [ ] **Maratona de gravação · Dia 5** (8h · grava as aulas que serão pré-gravadas · ajuste de duração depende de quantas o expert quer ao vivo · padrão: gravar todas exceto sábado tira-dúvidas)

### ✅ Checkpoint
6 aulas estruturadas (5 técnicas + tira-dúvidas + pitch) · slides finalizados das aulas pré-gravadas

---

# 💎 FASE 4 · oferta-lpsg

### ⚠️ PONTO DE APROVAÇÃO HUMANA OBRIGATÓRIA

### ⏱️ 1h · 🤖 + 🚨

### 🤖 Pedido pro Claude
> *"Use a skill `oferta-lpsg`. Estrutura oferta completa: stack de valor · 3 ondas tsunami · garantia dupla · plano de recuperação. Use Bloco B do cadastro."*

### O que Claude faz
- Stack de valor com 6+ itens · ≥ 1.5x o ticket
- Cronograma do tsunami (Seg 7h-7h10 · 7h10-8h00 · 8h-23h59)
- Texto da garantia incondicional + condicional
- Plano de recuperação D+1 a D+7

### 🚨 AÇÃO HUMANA · revisar oferta
- [ ] Stack de valor totaliza ≥ 1.5x o ticket?
- [ ] Bônus do tsunami são REAIS e entregáveis?
- [ ] Garantia clara · cliente entende?
- [ ] **Aprovar antes de prosseguir pra Fase 5**

### ✅ Checkpoint
Oferta documentada e aprovada pelo expert

---

# 📨 FASE 5 · mensageria-lpsg

### ⏱️ 2h Claude + 1-3 dias aprovação Meta

### 🤖 Pedido pro Claude
> *"Use a skill `mensageria-lpsg`. Estrutura as 8 fases · escreve copy · gera 8 templates Utility no formato Meta API. Use Bloco I do cadastro (tom de voz)."*

### O que Claude faz
- 8 fases (Onboard · Antecipação · Evento · Ficha · Sábado · Pitch · Carrinho · Pós-ficha por tier)
- ~30 mensagens por inscrito
- 8 templates Utility com variáveis Meta

### 🚨 AÇÃO HUMANA · submeter na Meta (30 min)
- [ ] business.facebook.com/wa/manage/message-templates/
- [ ] Submete cada template (categoria correta = aprovação rápida)
- [ ] Aguarda 1-3 dias úteis

### 🚨 AÇÃO HUMANA · gravar áudios (1h)
- [ ] Áudio Msg 7 (boas-vindas dos 3 passos · 30s)
- [ ] Áudio "Hoje é o dia" (Dom 10h · 45s)
- [ ] Áudio convite tira-dúvidas (Sáb · 30s)
- [ ] Áudio "bônus dos 10 min" (Seg 6h45 · 60s)

### ✅ Checkpoint
8 templates submetidos · 4 áudios gravados · ManyChat configurado

---

# 🚀 FASE 6 · trafego-lpsg

### ⚠️ PONTO DE APROVAÇÃO HUMANA OBRIGATÓRIA

### ⏱️ 30 min Claude + 2h gestor

### 🤖 Pedido pro Claude
> *"Use a skill `trafego-lpsg`. Estrutura campanha Advantage+ Shopping (ASC): 1 campanha · 1 conjunto · 15 criativos · público aberto · R$ 100/dia. Use Bloco E e H do cadastro."*

### O que Claude faz
- Estrutura completa da campanha
- Pipeline Meta API (pull diário)
- Engine de análise (3 cadências · 20 regras)
- Briefing de configuração no Ads Manager

### ⚙️ Configuração Meta Ads Manager (gestor · 2h)
- [ ] Cria campanha Vendas (Advantage+ Shopping)
- [ ] Conecta catálogo Hotmart
- [ ] Sobe os 15 criativos
- [ ] Define orçamento R$ 100/dia
- [ ] **NÃO publica ainda** · revisa tudo

### 🚨 AÇÃO HUMANA · ativar
- [ ] Pixel disparando? (events.facebook.com)
- [ ] CAPI deduplicando?
- [ ] Criativos aprovados pela Meta?
- [ ] **Aprovar e ativar campanha** ⚡

### ✅ Checkpoint
Campanha rodando · primeiros eventos no Pixel

---

# ⚙️ FASE 7 · automacoes-lpsg

### ⚠️ PONTO DE APROVAÇÃO HUMANA OBRIGATÓRIA

### ⏱️ 2h Claude + 1h importação

### 🤖 Pedido pro Claude
> *"Use a skill `automacoes-lpsg`. Cria os 14 workflows n8n: captação (4) · evento (3) · tsunami (2) · recuperação (3) · análise tráfego (4 · ver `trafego-lpsg/09`). Use Bloco E."*

### O que Claude faz
- JSONs dos 14 workflows (importáveis)
- Configurações de credentials
- Sistema de tags ManyChat
- Webhook Hotmart configurado

### ⚙️ Importar no n8n (1h)
- [ ] Cada workflow · importa JSON
- [ ] Configura credentials (Meta · Hotmart · Sheets · ManyChat)
- [ ] Testa cada um manualmente

### 🚨 AÇÃO HUMANA · ativar webhook + aprovar
- [ ] Hotmart → Webhooks → atualiza URL pro n8n
- [ ] Eventos: PURCHASE_APPROVED · PURCHASE_CANCELED · PURCHASE_REFUNDED
- [ ] Testa com compra de R$ 1 (cupom 99%)
- [ ] **Aprovar antes de ativar**

### ✅ Checkpoint
14 workflows ativos · webhook testado · 1 compra de teste no Sheets

---

# 📊 FASE 8 · dashboard-lpsg

### ⏱️ 3h Claude + 30min Vercel

### 🤖 Pedido pro Claude
> *"Use a skill `dashboard-lpsg`. Cria o dashboard com 11 módulos: visão geral · tráfego · páginas · aulas · mensageria · tsunami · recuperação · operação · estratégico · sugestões · ficha. Subdomínio `dashboard.{dominio}`."*

### O que Claude faz
- Projeto Next.js separado
- 11 módulos
- 8 adapters (XLSX · Sheets · Meta · Hotmart · GA4 · YouTube · Recomendações · Fichas)
- Auth básico

### ⚙️ Configuração Vercel
- [ ] Conecta `dashboard.{dominio}`
- [ ] Variáveis de ambiente
- [ ] Auth configurado

### 🚨 AÇÃO HUMANA · validar
- [ ] Cada módulo lê fonte correta?
- [ ] Números batem com Meta/Hotmart?
- [ ] Compartilha acesso com time

### ✅ Checkpoint
Dashboard no ar · 11 módulos exibindo dados reais

---

# 👥 FASE 9 · operacao-lpsg

### ⏱️ 30min Claude + 1h time

### 🤖 Pedido pro Claude
> *"Use a skill `operacao-lpsg`. Estrutura RACI do time (Bloco F) · cronograma da semana perpétua · 12 SOPs · 6 rituais."*

### O que Claude faz
- RACI completo (R/A/C/I)
- 9 papéis com responsabilidades
- Cronograma perpétuo
- 12 SOPs operacionais

### 🚨 AÇÃO HUMANA · alinhar com time (1h)
- [ ] Reúne o time · apresenta o RACI
- [ ] Cada um concorda com seus papéis?
- [ ] Acessos às ferramentas distribuídos
- [ ] Slack/Telegram criado pra comunicação

### ✅ Checkpoint
Time alinhado · RACI assinado · ferramentas distribuídas

---

# 🤝 FASE 10 · cs-lpsg

### ⚠️ SÓ EXECUTAR APÓS PRIMEIRAS VENDAS

> CS só faz sentido após você ter ≥ 5 alunos do produto principal. Antes, atende manualmente.

### 🤖 Pedido pro Claude
> *"Tenho {N} alunos ativos do {NOME_PRODUTO}. Use a skill `cs-lpsg` pra estruturar o programa de pós-venda completo: onboarding D0-D7 · cronograma 90 dias · 4 rituais · 8 templates · prova social · ascensão · indicação · churn."*

### O que Claude faz
- Estrutura aba `Alunos` no Sheets (18 colunas)
- 8 templates Utility novos (CS)
- 6 marcos do programa
- Configura Módulo 12 do dashboard

### 🚨 AÇÃO HUMANA
- [ ] CS Oficial alocado (pessoa do Bloco F)
- [ ] Treinamento sobre os 6 marcos
- [ ] Live coletiva semanal agendada (Quartas 19h)
- [ ] Office Hours agendado (Sextas 14h)
- [ ] Vídeo de boas-vindas gravado (90s · vertical)

### ✅ Checkpoint
Aluno faz primeiro login · entra no grupo · CS Oficial faz check-in D3 · NPS D30 disparando

---

# 🎬 SEMANA SEGUINTE · 1ª Edição roda

A partir desta segunda · LPSG vira **modelo perpétuo**.

### Cronograma da edição

| Dia | Evento | Quem conduz | Você (humano) faz |
|---|---|---|---|
| **Seg 7h** | Aula 1 ao vivo | Expert | Apresenta · responde dúvidas |
| **Ter 7h** | Aula 2 | Expert | Apresenta |
| **Qua 7h** | Aula 3 (Marco 1) | Expert | Apresenta |
| **Qui 7h** | Aula 4 + abre ficha | Expert | Apresenta + cita ficha |
| **Sex 7h** | Aula 5 (Marco 2) | Expert | Apresenta |
| **Sáb 10h** | Tira-dúvidas ao vivo | Expert | Conduz live (1-1.5h) |
| **Dom 20h** | Pitch ao vivo | Expert | Apresenta a oferta |
| **Seg 7h** | Carrinho abre | Mensageria | Acompanha tsunami |
| **Sex 23h59** | Carrinho fecha | Sistema | Documenta números |

### 🚨 AÇÃO HUMANA · dashboard ao vivo
- [ ] Aba "Tsunami" durante carrinho aberto
- [ ] Sugestões da skill `trafego-lpsg` no módulo 10
- [ ] Aplica (manual) as sugestões aprovadas

---

# 🔄 Operação perpétua

LPSG é **perpétuo**. Toda semana ISO há nova edição:

```
TODA SEMANA:
   - Seg 7h: nova edição começa (Aula 1)
   - Ter-Sex: aulas + ficha + tira-dúvidas
   - Dom 20h: pitch
   - Seg seguinte: carrinho abre
   - Sex seguinte: carrinho fecha + documenta

SIMULTANEAMENTE:
   - Captação rodando 24/7 (sem parar)
   - CS atendendo alunos das edições anteriores
   - Engine de análise gerando sugestões diárias

MENSALMENTE:
   - Auditoria com checklist do `lpsg-master/05-checklists.md`
   - Renovação de criativos (1/3 do lote)
   - Calibração de targets se nicho ≠ marketing digital
```

---

## 🎯 Próximos passos

- ✅ Manual lido até aqui? Vai pro `03-acoes-humanas.md` ver checklist consolidado
- ❓ Trava em algo específico? `04-troubleshooting.md`
- 🚀 Pronto pra começar? Volta no `01-intake.md` e preenche

---

**Lembre-se:** este é um trilho intensivo · executa em paralelo · expande pra 2 semanas se time é pequeno (1-2 pessoas).

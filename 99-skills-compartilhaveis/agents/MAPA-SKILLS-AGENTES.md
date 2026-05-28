# Mapa de Skills · Squad Turbo LPSG 5.0-V1

> **Como ler:** cada agente carrega `protocolo-conversa-turbo` primeiro (transversal · 8 padrões + anti-bajulação + travas universais), depois as skills do domínio dele. A coluna "QUANDO USAR" diz em que momento da jornada o agente aciona cada skill.

> **Convenção:** `@agente` é como o estrategista invoca · "primária" = pão-de-cada-dia · "complementar" = ferramenta auxiliar.

> **Cobertura total (2026-05-28):** todas as **54 skills instaladas** no ambiente estão atribuídas a pelo menos um agente. Skills proprietárias (turbo/lpsg) são empacotadas em `99-skills-compartilhaveis/`. Skills externas (Anthropic · Vercel) são instaladas via plugin/npx e referenciadas na seção "Skills externas" deste mapa.

---

## 📦 Skills distribuídas em 2026-05-28 (cobertura total)

| Skill | Tipo | Agentes que receberam | Função |
|---|---|---|---|
| `canvas-design` | Anthropic | designer · diretor-criativo | Arte estática (poster · PDF · canvas) |
| `web-artifacts-builder` | Anthropic | designer · diretor-criativo | Artifacts web claude.ai (React + Tailwind + shadcn) |
| `webapp-testing` | Anthropic | designer · trafego · picasso | Teste de webapp ao vivo no browser |
| `skill-creator` | Anthropic | estrategista | Criar novas skills do squad |
| `skill-development` | Anthropic | estrategista | Boas práticas de estrutura de skill |
| `deploy-to-vercel` | Vercel | designer · diretor-criativo · trafego · automacao | Deploy de páginas/serviços |
| `vercel-cli-with-tokens` | Vercel | designer · automacao | Deploy via token (CI) |
| `vercel-composition-patterns` | Vercel | designer | Padrões de composição React |
| `vercel-react-best-practices` | Vercel | designer | Performance React/Next |
| `vercel-react-view-transitions` | Vercel | designer | Transições de página |
| `vercel-react-native-skills` | Vercel | — (sob demanda) | RN/Expo · NÃO carregada (LPSG é web) · disponível em `~/.claude/skills/` se surgir projeto mobile |
| `instagram-analise-estrategica` | Turbo | social · pesquisador-mercado | Análise/relatório de perfil IG |
| `meta-ads-cli-setup` | Turbo | trafego · automacao | Setup inicial da Meta Ads CLI |
| `operacao-lpsg` | LPSG | estrategista | Operação e equipe (RACI · time mínimo) |

---

## 🚀 @estrategista-turbo · Tier 0 · ORQUESTRADOR

> Entry point de todo lançamento. Diagnostica · orquestra · delega. Não executa nada que pertence a outro agente.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre · 1ª coisa a carregar |
| `lpsg-master` | Primária | Quando o Léo digitar `@lpsg-master crie meu LPSG` com YAML · executor automático das 10 fases |
| `lancamento-pago-semanal` | Primária | Método-base · referência conceitual constante |
| `estruturador-evento-turbo` | Primária | Diagnóstico inicial · escolher entre 5+1 e Workshop |
| `briefing-aprovacao-turbo` | Primária | Gate de aprovação antes de qualquer fase rodar |
| `manual-final-lpsg` | Primária | No final do projeto · gera manual HTML personalizado |
| `honor` | Complementar | Quando o projeto exige estratégia de marca antes do funil |
| `criador-paginas-low-ticket` | Complementar | Pra orientar copywriter no caminho de página low-ticket |
| `dash-lancamento-turbo` | Complementar | Quando precisar acompanhar lançamento ao vivo |
| `find-skills` | Utilitário | Quando faltar capacidade no squad |

**Auto-checklist embutido (7 erros comuns):** já no `agent_rules` · roda antes de aprovar qualquer briefing.

---

## ✍️ @copywriter-turbo · Tier 1 · COPY ESPECIALISTA

> Toda peça de copy do funil. Recebe diagnóstico do estrategista · entrega copy validada.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `lancamento-pago-semanal` | Primária | Referência de método |
| `estruturador-evento-turbo` | Primária | Quando montar escada de crenças do evento |
| `estrutura-aulas-lpsg` | Primária | Roteirizar Aulas 1-6 do 5+1 |
| `briefing-aprovacao-turbo` | Primária | Antes de escrever qualquer copy · consome 00-fundacao + 02-mercado |
| `paginas-lpsg` | Primária | Páginas premium (V1-V5) · usar `references/10-anatomia-14-blocos.md` pra operacional |
| `criador-paginas-low-ticket` | Primária | Páginas low-ticket · `references/estudo-de-caso-narrativo.md` obrigatório pra prova social |
| `oferta-lpsg` | Primária | Stack de valor · ancoragem · bônus tsunami · pitch |
| `criativos-lpsg` | Primária | Briefing de criativos · usar `references/12-6-pilares-criativos.md` + `13-8-ctas-avulsas.md` |
| `criador-criativos` | Primária | Anatomia hook+body+CTA · ângulos avançados |
| `criador-reels` | Complementar | Quando o pedido for roteiro orgânico de Reel |
| `mensageria-lpsg` | Primária | Toda copy de WhatsApp/grupo/email do evento |

**Regras críticas:** anti-bajulação · promessa = número+prazo+mecanismo · depoimento → estudo de caso narrativo · coreografia pitch 5+1 (quinta pré-pitch · sexta repitch parcial · domingo pitch completo).

---

## 🎨 @diretor-criativo-turbo · Tier 1 · AUTORIDADE VISUAL

> Define direção visual · não executa. Recebe copy aprovada do copywriter · delega execução pro designer.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `brand` · `design` · `design-system` · `design-tokens-turbo` | Primária | Brandbook · identidade · tokens |
| `ui-ux-pro-max` · `web-design-guidelines` | Primária | Heurísticas e princípios de UI |
| `frontend-design` · `impeccable` · `design-motion-principles` | Primária | Stack Picasso anti-IA visual |
| `paginas-lpsg` | Primária | Páginas premium V1-V5 · arquétipos visuais |
| `designer-senior` · `lovable-style-turbo` · `ui-styling` | Primária | Stacks de execução pra briefar designer |
| `page-optimizer` | Complementar | Após aprovação · Core Web Vitals |
| `criativos-lpsg` | Primária | Direção de criativos · 6 pilares de mensagem |
| `banner-design` · `gerador-instagram` | Primária | Quando precisa direção de banner ou story/carrossel |
| `gerador-slides-turbo` · `slides-uipm` | Primária | Direção de slides de aula |

**Princípio:** define paleta · tipografia · composição · referências visuais. NÃO toca em código.

---

## 🖥️ @designer-turbo · Tier 2 · EXECUTOR VISUAL

> Recebe brief pronto do diretor criativo · entrega arquivo final.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `designer-senior` · `frontend-design` · `lovable-style-turbo` · `ui-styling` | Primária | Execução de páginas HTML/React |
| `brand` · `design` · `design-system` · `design-tokens-turbo` | Primária | Aplicar tokens do diretor |
| `ui-ux-pro-max` | Primária | Componentes prontos |
| `banner-design` · `gerador-instagram` | Primária | Execução de criativos estáticos |
| `gerador-slides-turbo` · `slides-uipm` · `pptx` | Primária | Execução de slides |

**Princípio:** NÃO define direção · NÃO lê `00-fundacao/`. Recebe brief com paleta · tipografia · composição · copy e executa.

---

## 📈 @trafego-turbo · Tier 1 · MÍDIA PAGA

> Meta Ads + Google Ads. ROAS 1 na captação · escalonamento no produto principal.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `trafego-lpsg` | Primária | Estrutura de campanha · ASC · análise |
| `lancamento-pago-semanal` | Primária | Método-base |
| `meta-ads-cli-setup` | Primária | Onboarding seguro da Ads CLI · zero → 1ª chamada funcional · pré-requisito da turbo |
| `meta-ads-cli-turbo` | Primária | Automação shell + cron · batelada · stop-loss · só após setup concluído |
| `criativos-lpsg` | Primária | Entender o que sobe na ASC · usar 6 pilares |
| `criador-criativos` | Primária | Diagnóstico de criativo (hook rate · body rate) |
| `paginas-lpsg` | Primária | Destino dos ads · LCP < 1.5s |
| `page-optimizer` | Primária | Quando página tá lenta |
| `dashboard-lpsg` · `dash-lancamento-turbo` | Primária | Acompanhamento ao vivo |

---

## 🎬 @social-turbo · Tier 1 · ORGÂNICO

> Conteúdo orgânico que aquece audiência pro lançamento pago.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `criador-reels` | Primária | Roteiros de Reels/TikTok/Shorts |
| `criador-criativos` | Primária | Hooks orgânicos · ângulos |
| `criativos-lpsg` | Complementar | Aplicar **6 pilares** ao orgânico (desejo · promessa · problema · descoberta · objeção · urgência adaptada pro orgânico) |
| `gerador-instagram` | Primária | Posts estáticos · carrosséis · stories |
| `transcrever-youtube` | Complementar | Pesquisar lives/podcasts dos concorrentes |
| `mensageria-lpsg` | Complementar | DM ManyChat · WhatsApp orgânico |

---

## 🤖 @automacao-turbo · Tier 2 · BACKEND DE AUTOMAÇÕES

> n8n + ManyChat + WhatsApp Business API + Google Sheets + alertas. Mensageria executada via API.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `automacoes-lpsg` | Primária | 14 workflows n8n base · webhook Hotmart · CAPI server-side |
| `meta-ads-cli-setup` | Primária | Onboarding seguro da Ads CLI · pré-req antes de qualquer script/cron de Meta Ads |
| `meta-ads-cli-turbo` | Primária | Automação Meta Ads via shell + cron · só após setup concluído |
| `mensageria-lpsg` | Primária | Templates Utility · estrutura cap 4+4 · onboarding 4 msgs |
| `dashboard-lpsg` · `dash-lancamento-turbo` | Primária | Dados em tempo real que alimentam automações |

---

## 🎯 @cs-turbo · Tier 2 · PÓS-VENDA

> Cliente satisfeito = prova social real pro próximo lançamento.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `cs-lpsg` | Primária | Onboarding 90d · NPS · ascensão · retenção · churn |
| `lancamento-pago-semanal` | Primária | Método-base |
| `mensageria-lpsg` | Primária | Boas-vindas · NPS · recuperação · indicação |
| `automacoes-lpsg` | Primária | Fluxos automatizados de retenção/ascensão |
| `criador-paginas-low-ticket` | Complementar | **`references/estudo-de-caso-narrativo.md`** · transformar depoimento bruto em prova social estruturada |

**Princípio:** captura depoimento bruto → transforma em estudo de caso narrativo → envia pro `@copywriter-turbo` usar em página/criativo/pitch.

---

## 🔬 @pesquisador-turbo · Tier 0 · CAMADA FUNDACIONAL (INTERNA)

> Ponto de entrada obrigatório quando 00-fundacao/ está ausente. Orquestra extração de material bruto · consolida em 6 dossiês.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `lancamento-pago-semanal` | Primária | Saber que 6 dossiês importam |
| `transcrever-youtube` | Primária | Extrair material bruto de aulas/lives/podcasts do Léo |
| `briefing-aprovacao-turbo` | Primária | Após consolidação · ajuda a gerar briefing |
| `find-skills` | Utilitário | Quando faltar capacidade |

**Autoridade exclusiva sobre `00-fundacao/`.** NÃO escreve copy. NÃO cria visual.

---

## 🌍 @pesquisador-mercado-turbo · Tier 0 · INTELIGÊNCIA EXTERNA

> Quando faltar contexto EXTERNO. Concorrência · benchmarks · objeções de mercado · gaps. Autoridade sobre `02-mercado/`.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `criador-criativos` | Primária | Analisar criativos da concorrência (Meta Ad Library) |
| `criativos-lpsg` | Primária | Saber **6 pilares** · catalogar criativo do concorrente por pilar |
| `transcrever-youtube` | Primária | Lives, podcasts, YouTube dos concorrentes |
| `paginas-lpsg` | Complementar | Saber **anatomia 14 blocos** · catalogar página do concorrente bloco a bloco |
| `mensageria-lpsg` | Complementar | Mapear cadência da concorrência |
| `estrutura-aulas-lpsg` | Complementar | Quando o concorrente roda evento · catalogar a estrutura dele |
| `oferta-lpsg` | Complementar | Catalogar stack de valor da concorrência |
| `trafego-lpsg` | Complementar | Estimar volume e abordagem de mídia da concorrência |
| `briefing-aprovacao-turbo` | Primária | Consolidar pesquisa em briefing pra aprovação do expert |
| `find-skills` | Utilitário | Quando faltar capacidade |

**NÃO escreve em `00-fundacao/` (isso é do `@pesquisador-turbo`).**

---

## 🎭 @picasso-auditor-lpsg · Tier 0 · AUDITOR VISUAL ANTI-IA

> Entra em ação AUTOMATICAMENTE após qualquer criação ou alteração de páginas, componentes, criativos ou interfaces.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `frontend-design` · `impeccable` · `design-motion-principles` | Primária | Stack Picasso completa · 3 skills do núcleo |
| `web-design-guidelines` · `ui-ux-pro-max` | Primária | Heurísticas pra auditoria |

**Tools restritos:** Read, Write, Edit, Glob, Grep, Bash. Sem acesso a outras ferramentas pra ficar focado em auditoria.

---

## Matriz de fluxo · quem entrega pra quem

```
@pesquisador-turbo (00-fundacao)
       │
@pesquisador-mercado-turbo (02-mercado)
       │
       ▼
@estrategista-turbo (orquestra · auto-checklist 7 erros)
       │
       ├──▶ briefing-aprovacao-turbo (gate · expert aprova)
       │
       ▼
@copywriter-turbo (copy)
       │
       ├──▶ @diretor-criativo-turbo (direção visual)
       │           │
       │           ▼
       │     @designer-turbo (execução)
       │           │
       │           ▼
       │     @picasso-auditor-lpsg (auditoria automática)
       │
       ├──▶ @trafego-turbo (campanhas)
       │
       ├──▶ @social-turbo (orgânico)
       │
       ▼
@automacao-turbo (workflows · mensageria conectada)
       │
       ▼
[EVENTO ROLA]
       │
       ▼
@cs-turbo (pós-venda · captura depoimento → estudo de caso)
       │
       └──▶ retorna pro @copywriter-turbo via prova social
```

---

## Como o squad opera no dia-a-dia

### 1 · Novo projeto (do zero)
```
1. @estrategista-turbo recebe pedido + diagnóstico inicial
2. @pesquisador-turbo extrai material bruto → 00-fundacao/
3. @pesquisador-mercado-turbo investiga concorrência → 02-mercado/
4. @estrategista-turbo + briefing-aprovacao-turbo → gate de aprovação
5. Expert aprova → execução das 10 fases na ordem
```

### 2 · Diagnóstico de lançamento existente
```
1. @estrategista-turbo roda o auto-checklist 7 erros comuns
2. Identifica qual erro afeta o resultado
3. Delega correção pro agente especialista (copy → @copywriter · página → @diretor-criativo · etc)
```

### 3 · Mensageria do evento
```
1. @copywriter-turbo escreve copy pra cada peça (cap 4+4)
2. Aplica filtro 4 objetivos (consciência · conexão · autoridade · objeção)
3. Coreografia pitch: quinta pré-pitch · sexta repitch parcial · domingo pitch completo
4. @automacao-turbo monta Templates Utility na Meta API
5. @automacao-turbo conecta no n8n + ManyChat
```

### 4 · Criativos de tráfego
```
1. @copywriter-turbo lidera (Big Idea · ângulo · hooks · body · CTA)
2. Distribui 15 criativos nos 6 pilares (criativos-lpsg/references/12)
3. Adiciona 8 CTAs avulsas (criativos-lpsg/references/13)
4. @diretor-criativo-turbo briefa direção visual
5. @designer-turbo executa
6. @trafego-turbo sobe na ASC
```

### 5 · Página de vendas
```
1. @copywriter-turbo escolhe: 14 blocos operacionais OU V1-V5 premium
2. Aplica regra "depoimento → estudo de caso narrativo"
3. @diretor-criativo-turbo briefa direção visual
4. @designer-turbo executa
5. @picasso-auditor-lpsg audita automaticamente
6. @trafego-turbo aponta criativos pra página
```

---

## Travas universais (validas pra TODOS os agentes)

Detalhe completo em `~/.claude/skills/protocolo-conversa-turbo/references/travas-universais.md`.

| # | Regra | Aplicação |
|---|---|---|
| 1 | NUNCA "link da bio" → SEMPRE "toque em saiba mais" | Criativos · scripts · stories |
| 2 | NUNCA "começa amanhã" → SEMPRE "começa segunda" | Criativos · mensageria · stories |
| 3 | NUNCA bônus inventado pra urgência | Oferta · pitch · criativos |
| 4 | NUNCA informar duração do vídeo no script | Criativos · roteiros |
| 5 | Urgência só temporal real | Toda fase |
| 6 | Promessa = NÚMERO + PRAZO + MECANISMO | Toda copy persuasiva |
| 7 | Depoimento solto NUNCA → SEMPRE estudo de caso narrativo | Páginas · pitch · criativos · aulas |
| 8 | Linguagem literal do público · não tradução técnica do expert | Toda copy |
| 9 | Expert depois do preço em tráfego frio | Páginas low-ticket |
| 10 | Anti-bajulação ("ótima pergunta" banido) | Toda interação |

---

**Versão:** 1.0 · 2026-05-21 · alinhado com `protocolo-conversa-turbo` v1.0.

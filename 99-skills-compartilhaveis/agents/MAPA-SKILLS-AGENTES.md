# Mapa de Skills · Squad Turbo LPSG 6.1

> **Como ler:** cada agente carrega `protocolo-conversa-turbo` primeiro (transversal · 8 padrões + anti-bajulação + travas universais), depois as skills do domínio dele. A coluna "QUANDO USAR" diz em que momento da jornada o agente aciona cada skill.

> **Convenção:** `@agente` é como o estrategista invoca · "primária" = pão-de-cada-dia · "complementar" = ferramenta auxiliar.

> **Cobertura total (2026-05-28):** todas as **54 skills instaladas** no ambiente estão atribuídas a pelo menos um agente. Skills proprietárias (turbo/lpsg) são empacotadas em `99-skills-compartilhaveis/`. Skills externas (Anthropic · Vercel) são instaladas via plugin/npx e referenciadas na seção "Skills externas" deste mapa.

---

## 📦 Skills distribuídas (2026-05-28 · atualizado 2026-07-02)

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
| `instagram-analise-estrategica-turbo` | Turbo | social · pesquisador-mercado | Análise/relatório de perfil IG |
| `meta-ads-cli-setup-turbo` | Turbo | trafego · automacao | Setup inicial da Meta Ads CLI |
| `operacao-lpsg-turbo` | LPSG | estrategista | Operação e equipe (RACI · time mínimo) |
| `distribuicao-turbo` | Turbo ⭐ 2026-07-02 | social · trafego | Funil de consciência C0-C3 · orgânico + impulsionamento |
| `turbo-express` | Turbo ⭐ 2026-07-02 | copywriter · automacao | Ciclo de venda recorrente 14 dias em grupo WhatsApp |
| `funil-8-turbo` | Turbo ⭐ 2026-07-02 | copywriter · trafego | Produto de entrada low ticket · campanha ASC · order bumps |

---

## 🚀 @estrategista-turbo · Tier 0 · ORQUESTRADOR

> Entry point de todo lançamento. Diagnostica · orquestra · delega. Não executa nada que pertence a outro agente.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre · 1ª coisa a carregar |
| `lpsg-master-turbo` | Primária | Quando o Léo digitar `@lpsg-master-turbo crie meu LPSG` com YAML · executor automático das 10 fases |
| `lancamento-pago-semanal-turbo` | Primária | Método-base · referência conceitual constante |
| `estrutura-aulas-lpsg-turbo` | Primária | Diagnóstico inicial · escolher entre 5+1 e Workshop (absorveu o antigo estruturador-evento) |
| `briefing-aprovacao-turbo` | Primária | Gate de aprovação antes de qualquer fase rodar |
| `manual-final-lpsg-turbo` | Primária | No final do projeto · gera manual HTML personalizado |
| `honor-turbo` | Complementar | Quando o projeto exige estratégia de marca antes do funil |
| `criador-paginas-low-ticket-turbo` | Complementar | Pra orientar copywriter no caminho de página low-ticket |
| `dash-lancamento-turbo` | Complementar | Quando precisar acompanhar lançamento ao vivo |
| `find-skills` | Utilitário | Quando faltar capacidade no squad |

**Roteia também (sem carregar):** `funil-8-turbo` (copy → @copywriter · campanha ASC → @trafego) · `distribuicao-turbo` (conteúdo → @social · impulsionamento → @trafego) · `turbo-express` (script 3 dias → @copywriter · fluxo de grupo → @automacao).

**Auto-checklist embutido (7 erros comuns):** já no `agent_rules` · roda antes de aprovar qualquer briefing.

---

## ✍️ @copywriter-turbo · Tier 1 · COPY ESPECIALISTA

> Toda peça de copy do funil. Recebe diagnóstico do estrategista · entrega copy validada.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `lancamento-pago-semanal-turbo` | Primária | Referência de método |
| `estrutura-aulas-lpsg-turbo` | Primária | Escada de crenças + roteirizar Aulas 1-6 do 5+1 (e Workshop · absorveu o antigo estruturador-evento) |
| `briefing-aprovacao-turbo` | Primária | Antes de escrever qualquer copy · consome 00-fundacao + 02-mercado |
| `paginas-lpsg-turbo` | Primária | Páginas premium (V1-V5) · usar `references/10-anatomia-14-blocos.md` pra operacional |
| `criador-paginas-low-ticket-turbo` | Primária | Páginas low-ticket · `references/estudo-de-caso-narrativo.md` obrigatório pra prova social |
| `oferta-lpsg-turbo` | Primária | Stack de valor · ancoragem · bônus tsunami · pitch |
| `criativos-lpsg-turbo` | Primária | Briefing de criativos · usar `references/12-6-pilares-criativos.md` + `13-8-ctas-avulsas.md` |
| `criador-criativos-turbo` | Primária | Anatomia hook+body+CTA · ângulos avançados |
| `criador-vsl-turbo` | Primária | Roteiro de VSL (carta de vendas em vídeo) · RMBC · mecanismo único · 11 blocos · compliance Meta · fluxo de entrega (gate @revisor-copy-turbo → .docx de trabalho + .docx teleprompter) |
| `criador-reels-turbo` | Complementar | Quando o pedido for roteiro orgânico de Reel |
| `funil-8-turbo` | Primária | Copy do produto de entrada (nome · 4 peças · 8 aulas · página) |
| `turbo-express` | Primária | Script dos 3 dias de grupo (terça/quarta/quinta) + oferta |
| `mensageria-lpsg-turbo` | Primária | Toda copy de WhatsApp/grupo/email do evento |

**Regras críticas:** anti-bajulação · promessa = número+prazo+mecanismo · depoimento → estudo de caso narrativo · coreografia pitch 5+1 (quinta = pré-pitch único 100% produto · sexta = conclusão técnica + lembrete da ficha, NÃO é repitch · domingo = pitch completo).

---

## 🎨 @diretor-criativo-turbo · Tier 1 · AUTORIDADE VISUAL

> Define direção visual · não executa. Recebe copy aprovada do copywriter · delega execução pro designer.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `brand` · `design` · `design-system` · `design-tokens-turbo` | Primária | Brandbook · identidade · tokens |
| `ui-ux-pro-max` · `web-design-guidelines` | Primária | Heurísticas e princípios de UI |
| `frontend-design` · `impeccable` · `design-motion-principles` | Primária | Stack Picasso anti-IA visual |
| `paginas-lpsg-turbo` | Primária | Páginas premium V1-V5 · arquétipos visuais |
| `designer-senior-turbo` · `lovable-style-turbo` · `ui-styling` | Primária | Stacks de execução pra briefar designer |
| `page-optimizer-turbo` | Complementar | Após aprovação · Core Web Vitals |
| `criativos-lpsg-turbo` | Primária | Direção de criativos · 6 pilares de mensagem |
| `banner-design` · `gerador-instagram-turbo` | Primária | Quando precisa direção de banner ou story/carrossel |
| `gerador-slides-turbo` · `slides-uipm-turbo` | Primária | Direção de slides de aula |

**Princípio:** define paleta · tipografia · composição · referências visuais. NÃO toca em código.

---

## 🖥️ @designer-turbo · Tier 2 · EXECUTOR VISUAL

> Recebe brief pronto do diretor criativo · entrega arquivo final.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `designer-senior-turbo` · `frontend-design` · `lovable-style-turbo` · `ui-styling` | Primária | Execução de páginas HTML/React |
| `brand` · `design` · `design-system` · `design-tokens-turbo` | Primária | Aplicar tokens do diretor |
| `ui-ux-pro-max` | Primária | Componentes prontos |
| `banner-design` · `gerador-instagram-turbo` | Primária | Execução de criativos estáticos |
| `gerador-slides-turbo` · `slides-uipm-turbo` · `pptx` | Primária | Execução de slides |

**Princípio:** NÃO define direção · NÃO lê `00-fundacao/`. Recebe brief com paleta · tipografia · composição · copy e executa.

---

## 📈 @trafego-turbo · Tier 1 · MÍDIA PAGA

> Meta Ads + Google Ads. ROAS 1 na captação · escalonamento no produto principal.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `trafego-lpsg-turbo` | Primária | Estrutura de campanha · ASC · análise |
| `lancamento-pago-semanal-turbo` | Primária | Método-base |
| `meta-ads-cli-setup-turbo` | Primária | Onboarding seguro da Ads CLI · zero → 1ª chamada funcional · pré-requisito da turbo |
| `meta-ads-cli-turbo` | Primária | Automação shell + cron · batelada · stop-loss · só após setup concluído |
| `criativos-lpsg-turbo` | Primária | Entender o que sobe na ASC · usar 6 pilares |
| `criador-criativos-turbo` | Primária | Diagnóstico de criativo (hook rate · body rate) |
| `paginas-lpsg-turbo` | Primária | Destino dos ads · LCP < 1.5s |
| `page-optimizer-turbo` | Primária | Quando página tá lenta |
| `dashboard-lpsg-turbo` · `dash-lancamento-turbo` | Primária | Acompanhamento ao vivo |
| `funil-8-turbo` | Primária | Campanha ASC do Funil 8 · otimização 3 frentes (criativo · checkout · ROAS) |
| `distribuicao-turbo` | Primária | Campanhas de impulsionamento C1-C3 · Ativador Turbo |

---

## 🎬 @social-turbo · Tier 1 · ORGÂNICO

> Conteúdo orgânico que aquece audiência pro lançamento pago.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `criador-reels-turbo` | Primária | Roteiros de Reels/TikTok/Shorts |
| `criador-criativos-turbo` | Primária | Hooks orgânicos · ângulos |
| `criativos-lpsg-turbo` | Complementar | Aplicar **6 pilares** ao orgânico (desejo · promessa · problema · descoberta · objeção · urgência adaptada pro orgânico) |
| `gerador-instagram-turbo` | Primária | Posts estáticos · carrosséis · stories |
| `transcrever-youtube-turbo` | Complementar | Pesquisar lives/podcasts dos concorrentes |
| `mensageria-lpsg-turbo` | Complementar | DM ManyChat · WhatsApp orgânico |
| `distribuicao-turbo` | Primária | Funil de consciência C0-C3 · qual camada de conteúdo criar e especificações |

---

## 🤖 @automacao-turbo · Tier 2 · BACKEND DE AUTOMAÇÕES

> n8n + ManyChat + WhatsApp Business API + Google Sheets + alertas. Mensageria executada via API.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `automacoes-lpsg-turbo` | Primária | 14 workflows n8n base · webhook Hotmart · CAPI server-side |
| `meta-ads-cli-setup-turbo` | Primária | Onboarding seguro da Ads CLI · pré-req antes de qualquer script/cron de Meta Ads |
| `meta-ads-cli-turbo` | Primária | Automação Meta Ads via shell + cron · só após setup concluído |
| `mensageria-lpsg-turbo` | Primária | Templates Utility · estrutura cap 4+4 · onboarding 4 msgs |
| `dashboard-lpsg-turbo` · `dash-lancamento-turbo` | Primária | Dados em tempo real que alimentam automações |
| `turbo-express` | Primária | Fluxo do grupo WhatsApp do ciclo de 14 dias · roteamento · recuperação |

---

## 🎯 @cs-turbo · Tier 2 · PÓS-VENDA

> Cliente satisfeito = prova social real pro próximo lançamento.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `cs-lpsg-turbo` | Primária | Onboarding 90d · NPS · ascensão · retenção · churn |
| `lancamento-pago-semanal-turbo` | Primária | Método-base |
| `mensageria-lpsg-turbo` | Primária | Boas-vindas · NPS · recuperação · indicação |
| `automacoes-lpsg-turbo` | Primária | Fluxos automatizados de retenção/ascensão |
| `criador-paginas-low-ticket-turbo` | Complementar | **`references/estudo-de-caso-narrativo.md`** · transformar depoimento bruto em prova social estruturada |

**Princípio:** captura depoimento bruto → transforma em estudo de caso narrativo → envia pro `@copywriter-turbo` usar em página/criativo/pitch.

---

## 🔬 @pesquisador-turbo · Tier 0 · CAMADA FUNDACIONAL (INTERNA)

> Ponto de entrada obrigatório quando 00-fundacao/ está ausente. Orquestra extração de material bruto · consolida em 6 dossiês.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `lancamento-pago-semanal-turbo` | Primária | Saber que 6 dossiês importam |
| `transcrever-youtube-turbo` | Primária | Extrair material bruto de aulas/lives/podcasts do Léo |
| `briefing-aprovacao-turbo` | Primária | Após consolidação · ajuda a gerar briefing |
| `find-skills` | Utilitário | Quando faltar capacidade |

**Autoridade exclusiva sobre `00-fundacao/`.** NÃO escreve copy. NÃO cria visual.

---

## 🌍 @pesquisador-mercado-turbo · Tier 0 · INTELIGÊNCIA EXTERNA

> Quando faltar contexto EXTERNO. Concorrência · benchmarks · objeções de mercado · gaps. Autoridade sobre `02-mercado/`.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `criador-criativos-turbo` | Primária | Analisar criativos da concorrência (Meta Ad Library) |
| `criativos-lpsg-turbo` | Primária | Saber **6 pilares** · catalogar criativo do concorrente por pilar |
| `transcrever-youtube-turbo` | Primária | Lives, podcasts, YouTube dos concorrentes |
| `paginas-lpsg-turbo` | Complementar | Saber **anatomia 14 blocos** · catalogar página do concorrente bloco a bloco |
| `mensageria-lpsg-turbo` | Complementar | Mapear cadência da concorrência |
| `estrutura-aulas-lpsg-turbo` | Complementar | Quando o concorrente roda evento · catalogar a estrutura dele |
| `oferta-lpsg-turbo` | Complementar | Catalogar stack de valor da concorrência |
| `trafego-lpsg-turbo` | Complementar | Estimar volume e abordagem de mídia da concorrência |
| `briefing-aprovacao-turbo` | Primária | Consolidar pesquisa em briefing pra aprovação do expert |
| `find-skills` | Utilitário | Quando faltar capacidade |

**NÃO escreve em `00-fundacao/` (isso é do `@pesquisador-turbo`).**

---

## 🎭 @picasso-auditor-turbo · Tier 0 · AUDITOR VISUAL ANTI-IA

> Gate visual: invocado (pelo @estrategista-turbo ou usuário) após qualquer criação/alteração de páginas, componentes, criativos ou interfaces. NÃO auto-dispara — quem cria a peça encadeia a auditoria antes de entregar.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `frontend-design` · `impeccable` · `design-motion-principles` | Primária | Stack Picasso completa · 3 skills do núcleo |
| `web-design-guidelines` · `ui-ux-pro-max` | Primária | Heurísticas pra auditoria |

**Tools restritos:** Read, Write, Edit, Glob, Grep, Bash. Sem acesso a outras ferramentas pra ficar focado em auditoria.

---

## 🛡️ @revisor-copy-turbo · Tier 0 · GUARDIÃO ANTI-IA TEXTUAL

> Par textual do picasso. Último filtro antes de qualquer copy chegar no expert/cliente. NÃO escreve do zero — audita texto pronto e devolve feedback cirúrgico + versão corrigida.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL + núcleo | Rubrica de auditoria (checklist-anti-ia-universal + travas-universais + feedback-cirurgico) |
| `mensageria-lpsg-turbo` | Primária | Checklist anti-IA de mensageria + formatação SendFlow + cap 4+4 |
| `criador-paginas-low-ticket-turbo` | Primária | Regras de copy persuasiva (estudo de caso narrativo · promessa = número+prazo+mecanismo · expert depois do preço) |

**Saída padrão:** veredito (passa/não passa) + cirurgias numeradas + versão corrigida pronta pra colar.

**Quando acionar:** antes de entregar qualquer página · mensageria · criativo · pitch · email · briefing · roteiro. Recebe de `@copywriter-turbo` (e qualquer agente que produza texto); devolve pro copywriter se precisar reescrita estrutural.

---

## 💰 @closer-turbo · Tier 1 · VENDAS 1:1 & RECUPERAÇÃO (13º agente · 2026-06)

> Dono da janela do carrinho (segunda 6h50 → sexta 23h59). Como D2-D7 = ZERO mensagem em massa, TODA recuperação é 1:1 humana — e é dele. Não escreve copy de massa · não cuida de quem já comprou.

| Skill | Categoria | Quando usar |
|---|---|---|
| `protocolo-conversa-turbo` | TRANSVERSAL | Sempre |
| `oferta-lpsg-turbo` | Primária | Recuperação D+1-D+7 · tsunami · dupla garantia (fonte primária) |
| `mensageria-lpsg-turbo` | Primária | Saber o que o lead recebeu em massa (cap 4+4 · D1) |
| `automacoes-lpsg-turbo` | Primária | SLA de checkout iniciado · alertas · fila automatizada |
| `paginas-lpsg-turbo` | Complementar | Ficha de interesse · lead score · tier HOT/WARM/COLD |

**Entregáveis:** fila priorizada (P1 checkout iniciado · SLA 30 min → P5) · scripts 1:1 por tier · sequência D+1-D+7 · matriz de objeções · relatório de fechamento.

**Handoffs:** recebe fila do `@automacao-turbo` · scripts passam pelo `@revisor-copy-turbo` · entrega compradores pro `@cs-turbo` e objeções recorrentes pro `*debrief` do `@estrategista-turbo` (viram Aula 4/criativos da próxima edição).

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
       │     @picasso-auditor-turbo (gate visual · invocado após criar)
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
2. Distribui 15 criativos nos 6 pilares (criativos-lpsg-turbo/references/12)
3. Adiciona 8 CTAs avulsas (criativos-lpsg-turbo/references/13)
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
5. @picasso-auditor-turbo audita automaticamente
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

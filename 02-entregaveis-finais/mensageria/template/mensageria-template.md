# Mensageria — Template reutilizável para lançamento pago semanal

> Template genérico. Substitua as variáveis entre chaves `{ }` pelo contexto do projeto. A estrutura segue o padrão do LPSG (5+1 aulas) e serve pra qualquer nicho.

> **⚠️ REGRA INEGOCIÁVEL (atualizada 2026-04-30) — sobrescreve qualquer estrutura abaixo:**
>
> 1. **Cap diário fixo:** **máx. 4 mensagens na API oficial + máx. 4 mensagens no grupo, todos os dias, segunda a domingo.**
> 2. **4 horários canônicos seg → sex** (aulas técnicas às 7h):
>    - **06:50** · `lpsg_aviso_aula` (10 min antes da aula)
>    - **07:00** · `lpsg_link_aula` (link da aula)
>    - **12:00** · `lpsg_replay_aula` (replay disponível)
>    - **19:00** · `lpsg_resumo_chamada` (resumo da manhã + chamada da próxima aula)
> 3. **Sem repescagem.** Sem mensagem 10/15/20 min depois da aula.
> 4. **Sem reforço.** Sem "última hora" / "tô entrando no ar".
> 5. **Sem troca de nome de grupo.** Mantém o nome ORIGINAL durante todos os 7 dias.
> 6. **Sem renomear mensagens existentes** (mantém nomes canônicos acima).
> 7. **SEM mensageria de sábado pré-evento no grupo** (removida 2026-04-30). O grupo só dispara a partir da SEGUNDA da Aula 1.
> 8. **Onboarding (pré-evento) é triggered por compra do ingresso** · 4 mensagens via API oficial entre compra e início da Aula 1 (boas-vindas · link grupo · pesquisa de matrícula · antecipação D-1). NÃO conta no cap 4+4. Detalhe em `~/.claude/skills/mensageria-lpsg/references/onboarding.md`.
> 9. **Carrinho aberto: SÓ no D1** (segunda seguinte) com 5 horários: **06:50 · 07:00 · 08:00 · 10:00 · 19:00**. **D2 → D7: ZERO mensagem de carrinho.**
>
> Detalhamento completo em `~/.claude/skills/mensageria-lpsg/references/template-dia-de-aula.md`.
>
> Tudo abaixo é histórico/contexto · só aplica se passar pelas regras acima.

---

## 📋 Variáveis do template

Antes de começar, preencha essa lista — todas as mensagens puxam daqui:

```yaml
PROJETO:
  nome_especialista: "{NOME_ESPECIALISTA}"        # Ex: Léo Tabari
  tratamento_plural: "{TRATAMENTO_PLURAL}"         # Ex: tubos, guerreiros, trader
  nome_evento: "{NOME_EVENTO}"                     # Ex: Desafio LPSG
  nicho: "{NICHO}"                                 # Ex: lançamento pago
  promessa_principal: "{PROMESSA_PRINCIPAL}"       # Ex: construir seu lançamento em 7 dias

DATAS:
  dia_aula_1: "{DIA_AULA_1}"                       # Ex: segunda, 12/05
  horario_aulas: "{HORARIO_AULAS}"                 # Ex: 7h da manhã
  horario_pitch: "{HORARIO_PITCH}"                 # Ex: 20h

AULAS:
  tema_aula_1: "{TEMA_AULA_1}"                     # Fundamentos
  tema_aula_2: "{TEMA_AULA_2}"
  tema_aula_3: "{TEMA_AULA_3}"
  tema_aula_4: "{TEMA_AULA_4}"
  tema_aula_5: "{TEMA_AULA_5}"

EMOJI_REAÇÃO: "{EMOJI}"                            # Ex: 🚀 (identidade do evento)

LINKS:
  youtube_aulas: "{LINK_YOUTUBE}"
  playlist: "{LINK_PLAYLIST}"
  ficha_inscricao: "{LINK_FICHA_INSCRICAO}"
  grupo_whatsapp: "{LINK_GRUPO}"
  ficha_interesse: "{LINK_FICHA_INTERESSE}"
  checkout: "{LINK_CHECKOUT}"
  tiradúvidas_sabado: "{LINK_TIRADUVIDAS}"

PREÇOS:
  valor_base: "{VALOR_BASE}"                       # Ex: R$17.500
  valor_final: "{VALOR_FINAL}"                     # Ex: R$25.000
```

---

## FASE 1 — Onboarding (logo após a compra)

### 🟢 Msg 1 — Confirmação de e-mail

> Oi! Aqui é o **{NOME_ESPECIALISTA}** 👋
>
> Acabou de chegar sua compra do **{NOME_EVENTO}**. Já te coloquei na nossa lista.
>
> Antes de continuar, me confirma uma coisa rapidinho: você comprou com o e-mail **{{email}}**, tá certo?
>
> [ ✅ Sim, é esse ]   [ ❌ Não, é outro ]

---

### 🟢 Msg 2 — Boas-vindas + cronograma

> Perfeito. Então bora alinhar tudo.
>
> O evento começa **{DIA_AULA_1}, às {HORARIO_AULAS}** (sim, cedo — mas é importante começar logo cedo pra você render o dia inteiro depois).
>
> 📅 **Seg a Sex** → {HORARIO_AULAS}
> 🎯 **Domingo** → {HORARIO_PITCH} (aula do pitch)
>
> Agora eu preciso que você faça **3 coisas rápidas** pra garantir que nada se perca no caminho. Vou te mandar uma de cada vez.

---

### 🟢 Msg 3 — Passo 1: Ficha de inscrição *(30s depois)*

> **1️⃣ Primeiro passo: sua ficha de inscrição**
>
> 👉 {LINK_FICHA_INSCRICAO}
>
> São 2 minutinhos. É por ela que eu sei quem você é e te mando as coisas certas na hora certa. Sem ficha, nada anda.

---

### 🟢 Msg 4 — Passo 2: Grupo *(2-3 min depois)*

> **2️⃣ Segundo passo: entra no grupo do WhatsApp**
>
> 👉 {LINK_GRUPO}
>
> Esse grupo é o **backup oficial** do evento. Se o WhatsApp resolver bloquear meu número aqui (acontece), eu mando tudo lá. Você não pode ficar de fora.

---

### 🟢 Msg 5 — Passo 3: Pacto do "OK" *(2-3 min depois)*

> **3️⃣ Terceiro passo — combinado importante**
>
> Toda vez que eu te mandar mensagem aqui, me responde só com um **"OK"**.
>
> Parece bobagem, mas é assim que o WhatsApp entende que você quer receber e não me bloqueia. Sem isso, metade das pessoas perde metade das aulas.
>
> E se a qualquer momento você quiser parar de receber, manda **"SAIR"** que eu paro na mesma hora. Sem drama.

---

### 🟢 Msg 6 — Fechamento do onboard

> Prontinho ✅
>
> Qualquer dúvida até {DIA_AULA_1}, é só me chamar aqui. Domingo à noite eu te mando um áudio com o último lembrete antes da gente começar.
>
> Tamo junto. {EMOJI}

---

## FASE 2 — Véspera do evento

### 🟡 Msg 7 — Áudio da véspera *(Domingo, 19h — áudio de ~1:30min)*

**Roteiro com lacunas:**

> "Opa, **{TRATAMENTO_PLURAL}**. **{NOME_ESPECIALISTA}** aqui.
>
> Gravei esse áudio rapidinho só pra te lembrar: **amanhã a gente começa**. **{DIA_AULA_1}**, **{HORARIO_AULAS}**, Aula 1 do **{NOME_EVENTO}**, ao vivo.
>
> E eu quero muito que você esteja com a gente **ao vivo**. Por quê? Porque amanhã eu vou te entregar **{FUNDAMENTO_CENTRAL_DO_EVENTO}** *(ex: o conceito que sustenta tudo / o fundamento do método / a base da estratégia)*. Sem isso, tudo que a gente vê nos outros dias vira peça solta — você não consegue adaptar pro seu **{CONTEXTO_DO_AVATAR}** *(ex: negócio / operação / trader / clínica)*.
>
> Na Aula 1 a gente vai passar por:
> - **{PONTO_1_DA_AULA_1}**
> - **{PONTO_2_DA_AULA_1}**
> - **{PONTO_3_DA_AULA_1}**
>
> Se você ficar até o final, sai de lá com **{ENTREGA_CONCRETA_DA_AULA_1}** *(ex: clareza sobre qual modelo usar / uma decisão que você vinha adiando / o primeiro passo pronto pra executar)*.
>
> Então faz o seguinte: hoje você dorme cedo, deixa o celular carregando perto da cama, liga o despertador pra **{HORARIO_DESPERTADOR}** *(ex: 6h30)* e me encontra aqui amanhã.
>
> O link eu mando 10 minutos antes, tá? Fica tranquilo, você não vai perder.
>
> Ah, e se você escutou esse áudio até aqui, me manda um **{EMOJI}** pra eu saber que tá junto. Assim eu vejo quem é que tá comprometido de verdade — porque **{TRATAMENTO_PLURAL}** comprometido é **{TRATAMENTO_PLURAL}** que chega lá.
>
> Até amanhã. Bom descanso."

---

## FASE 3 — Durante o evento (Seg a Sex)

### 🟡 Msg A diária — "Tá chegando" *(10 min antes da aula)*

**Template:**

> Bom dia! ☕
>
> Em **10 minutos** a gente começa a **Aula {N}: {TEMA_AULA_N}**.
>
> 👉 {LINK_YOUTUBE}
>
> **{TEASER_DO_DIA}**

**Banco de teasers com lacunas** *(um por dia — escolha ou adapte)*:

```
SEG (Aula 1):  "Hoje é o dia dos fundamentos. Sem isso, nada depois faz sentido."
TER (Aula 2):  "Hoje a gente mete a mão na massa com {FERRAMENTA_OU_MÉTODO_CHAVE}."
QUA (Aula 3):  "Hoje eu te mostro como {PROMESSA_DO_DIA_3}."
QUI (Aula 4):  "Hoje é a aula que muda o jogo — {TEMA_CENTRAL_DA_AULA_4}."
SEX (Aula 5):  "Hoje é {TEMA_DA_AULA_5}. A aula que fecha o ciclo."
```

**Exemplos de teaser curto (padrão de construção):**
- *"Hoje tem **{O_QUE_VAI_FAZER}**. Leva caderno."*
- *"Hoje eu abro **{O_QUE_VAI_MOSTRAR}** que ninguém mostra."*
- *"Hoje você sai com **{ENTREGA_CONCRETA}** na mão."*

---

### 🟡 Msg B diária — "Começou" *(no horário da aula)*

> Começou! Entra agora 👉 {LINK_YOUTUBE}

*Mantém exatamente assim, em todos os dias. Simples e rápida.*

---

### 🟡 Msg C diária — Replay do meio-dia *(12h)*

**Template:**

> Se você não conseguiu ver de manhã, **agora é a hora**.
>
> Senta **{DURACAO_APROXIMADA}** *(ex: 40 min)* no almoço e assiste pelo replay 👇
>
> 👉 {LINK_PLAYLIST}
>
> **{GANCHO_CONTINUIDADE}**

**Banco de ganchos de continuidade:**

```
SEG → "Amanhã tem mais, mas sem hoje, amanhã não faz sentido."
TER → "Amanhã a gente eleva o nível. Não chega atrasado."
QUA → "Amanhã é a virada. Você precisa ter assistido o de hoje."
QUI → "Amanhã é sexta — última aula antes do pitch. Se prepara."
SEX → "Domingo é o pitch. Todo mundo precisa ter visto todas as aulas."
```

---

### 🟡 Msg D diária — Áudio da noite *(20h-21h · áudio de ~1:30min)*

**Roteiro com lacunas:**

> "Oi, **{TRATAMENTO_PLURAL}**.
>
> Se você esteve com a gente hoje, primeiro: parabéns. Você tá na minoria que **{COMPORTAMENTO_DE_COMPROMISSO}** *(ex: acorda cedo / larga o celular / tira tempo pra estudar)* pra construir algo de verdade.
>
> Hoje a gente viu **{RESUMO_AULA_N_EM_1_FRASE}**. Se você aplicar só isso, já **{BENEFICIO_DE_APLICAR}** *(ex: muda o jogo / recupera 3 meses de trabalho / economiza R$X em erro)*.
>
> Mas amanhã é que a coisa esquenta. Amanhã eu vou te mostrar **{GANCHO_AULA_PROXIMA}**. Essa é a peça que **{POR_QUE_É_IMPORTANTE}** *(ex: encaixa tudo / multiplica o resultado / transforma teoria em execução)*.
>
> **{HORARIO_AULAS}**, mesmo canal.
>
> E se você assistiu o áudio todo, reage aqui com um **{EMOJI}** pra mim. Bora?"

---

### 📦 Referência rápida: tabela de preenchimento por aula

Preencha essa tabela uma vez e você tem toda a mensageria diária pronta:

| Dia | Aula | Tema | Teaser (6h50) | Gancho continuidade (12h) | Resumo áudio (20h) | Gancho próxima aula |
|---|---|---|---|---|---|---|
| Seg | 1 | {TEMA_1} | | | | |
| Ter | 2 | {TEMA_2} | | | | |
| Qua | 3 | {TEMA_3} | | | | |
| Qui | 4 | {TEMA_4} | | | | |
| Sex | 5 | {TEMA_5} | | | | |

---

## FASE 4 — Quinta-feira (ficha de interesse)

### 🟠 Msg extra — Reforço da ficha *(Qui, 21h — depois do áudio normal)*

**Template:**

> Ah, e quem esteve na aula hoje já viu: abri a **ficha de interesse** pra galera que quer dar o próximo passo e entrar no **{NOME_PRODUTO_PRINCIPAL}**.
>
> Se você ainda não preencheu, preenche agora 👇
>
> 👉 {LINK_FICHA_INTERESSE}
>
> Quem preenche até sábado garante **bônus exclusivos na abertura** — bônus que quem não preencheu **não vai ter acesso**, mesmo comprando depois.
>
> Não é ameaça, é regra do jogo. Preenche lá.

---

## FASE 4-B — Pós-submissão da ficha (segmentação por tier)

> Disparada **15 minutos após o submit** da ficha de interesse. O webhook do n8n calcula o tier (HOT · WARM · COLD) e roteia a mensagem certa.
>
> **Estrutura da ficha:** ver `paginas/template/08-ficha-interesse.md`. **Roteamento técnico:** ver `automacoes/template/02-fluxos-de-captacao.md` (Fluxo 4).

### 🔴 Msg HOT — quem disse "Com certeza" + tem capacidade

> Cara, vi sua ficha aqui agora. Você tá no perfil exato pro **{NOME_PRODUTO_PRINCIPAL}**.
>
> Antes do pitch de domingo, eu queria te dar **prioridade na fila**. Em até 24h alguém da minha equipe entra em contato no seu WhatsApp pra entender melhor o seu cenário e te explicar como funciona o acompanhamento.
>
> Não é venda. É conversa pra ver se faz sentido pros dois lados.
>
> Se quiser adiantar, me responde aqui: **qual horário é melhor pra você falar nessa quinta ou sexta?**
>
> Vejo você no domingo no pitch. {EMOJI}

> **Tag aplicada no ManyChat:** `tier-hot` · `ficha-submetida-hot`
> **Ação operacional:** lead entra na fila do SDR · CAPI dispara `LeadQualified`

---

### 🟡 Msg WARM — "Tenho que pensar" OU intenção alta sem capacidade plena

> Recebi sua ficha aqui. Anotei direitinho.
>
> Você tá no caminho certo, mas talvez ainda esteja avaliando se o **{NOME_PRODUTO_PRINCIPAL}** é pra agora. Faz sentido pensar mesmo — não é uma decisão pequena.
>
> Por isso eu fiz uma coisa: **te coloquei num grupo VIP** com gente no seu perfil que ainda tá decidindo. Lá eu mando bastidores, casos reais e respondo dúvidas que não cabem no grupão.
>
> 👉 {LINK_GRUPO_VIP}
>
> Domingo no pitch eu vou abrir tudo. Lá você decide.

> **Tag aplicada:** `tier-warm` · `ficha-submetida-warm` · `grupo-vip`
> **Ação operacional:** lead vai pro grupo VIP · sequência de nutrição 7 dias

---

### ⚪ Msg COLD — "No momento não" OU sem capacidade declarada

> Recebi sua ficha. Obrigado por ser honesto.
>
> Pelo que você marcou, esse não é o momento certo pro **{NOME_PRODUTO_PRINCIPAL}** — e tá tudo bem. Eu prefiro que você espere o momento certo do que entre forçado.
>
> Mas o evento continua valendo: **vem assistir as aulas até domingo**, aplica o que dá pra aplicar agora, e quando o momento for, a gente conversa.
>
> Continua aqui no grupo. {EMOJI}

> **Tag aplicada:** `tier-cold` · `ficha-submetida-cold` · `nutricao-perpetua`
> **Ação operacional:** lead fica na lista perpétua · entra no próximo evento da semana ISO seguinte

---

### 📊 Targets de conversão por tier (referência LPSG)

| Tier | % típico das fichas | Conversão → compra |
|---|---|---|
| HOT | 8-12% | 25-40% |
| WARM | 30-40% | 5-10% |
| COLD | 50-60% | < 1% |

> Se HOT < 5% das fichas → killer question (Et. 9) tá com promessa fraca ou tráfego desqualificado.
> Se HOT > 20% → killer question tá fraca demais (todo mundo concorda) · revisar.

---

## FASE 5 — Sábado (tira-dúvidas)

### 🟠 Msg A — Convite *(Sáb, 9h30)*

> Bom dia!
>
> Hoje às **{HORARIO_TIRADUVIDAS}** *(ex: 10h)* eu abro meu {FORMATO} *(Zoom / YouTube)* pra **tirar dúvidas de verdade**. Se você mandou pergunta na ficha, pode cair a sua.
>
> 👉 {LINK_TIRADUVIDAS}
>
> **{DURACAO_TIRADUVIDAS}** *(ex: 1h a 1h30)* de tira-dúvidas. Vai valer.

---

### 🟠 Msg B — Replay sábado *(12h)*

> Se perdeu o tira-dúvidas de hoje cedo, tá gravado aqui 👇
>
> 👉 {LINK_PLAYLIST}
>
> Amanhã é o pitch. **Não perde.**

---

## FASE 6 — Domingo (pitch)

### 🔴 Msg A — "Hoje é o dia" *(Dom, 10h — áudio curto ~45s)*

**Roteiro com lacunas:**

> "Oi, **{TRATAMENTO_PLURAL}**. **{NOME_ESPECIALISTA}** aqui.
>
> Hoje, **{HORARIO_PITCH}**, eu abro meu jogo. Vou te mostrar **exatamente** como **{PROVA_OU_PROMESSA_MAIOR}** *(ex: a gente roda essa máquina por dentro / eu faço R$X todo mês / eu transformei Y em Z)*.
>
> Separa **{DURACAO_ESTIMADA}** *(ex: 1h30)* na sua agenda. Não assiste no celular distraído. Senta na frente do computador, caderno do lado, e vem com foco.
>
> Quem fizer o que eu vou explicar hoje, sai daqui **{PROMESSA_DO_PITCH}** *(ex: com um lançamento rodando na segunda / com o primeiro cliente fechado / com o setup pronto pra operar)*. De verdade.
>
> **{HORARIO_PITCH}**. Aqui mesmo."

---

### 🔴 Msg B — "Começa em 1h" *(Dom, 19h)*

> Em **1 hora** a gente começa.
>
> Hoje é diferente. Hoje eu te entrego tudo.
>
> 👉 {LINK_YOUTUBE}

---

### 🔴 Msg C — "Começou" *(Dom, {HORARIO_PITCH})*

> Tá no ar. {EMOJI}
>
> 👉 {LINK_YOUTUBE}

---

## FASE 7 — Segunda (abertura do carrinho)

### 🟣 Msg A — Bônus dos 10 min *(Seg, 6h45 — só pra quem preencheu a ficha)*

> Bom dia!
>
> Como combinado, quem preencheu a ficha tem acesso antecipado. O carrinho abre agora pra você, com **bônus exclusivos dos 10 primeiros minutos** (incluindo **{BONUS_PREMIUM}** *(ex: call 1:1 / acesso vitalício / mentoria extra)*).
>
> 👉 {LINK_CHECKOUT}
>
> Às {HORARIO_AULAS} em ponto abre pro resto. Você tem **15 minutos de vantagem**. Aproveita.

---

### 🟣 Msg B — Abertura geral *(Seg, {HORARIO_AULAS})*

> Tá aberto pra todo mundo. 🔥
>
> Bônus de primeira hora rodando agora 👇
>
> 👉 {LINK_CHECKOUT}

---

### 🟣 Msg C — 3 horas *(Seg, 3h após abertura)*

> Bônus de **3 horas** acabando daqui a pouco. Quem entrar até **{HORARIO_LIMITE_3H}** leva **{BONUS_3H}** junto.
>
> 👉 {LINK_CHECKOUT}

---

### 🟣 Msg D — Primeiro dia acabando *(Seg, 20h)*

> Em **4 horas** o bônus de primeiro dia encerra.
>
> Depois disso o valor sobe de **{VALOR_BASE}** pra **{VALOR_FINAL}**. A diferença **{COMPARAÇÃO_CONCRETA}** *(ex: paga uma viagem / paga 6 meses de gestor / paga o custo anual de ferramentas)*.
>
> Se faz sentido pra você, é agora.
>
> 👉 {LINK_CHECKOUT}

---

## 🎯 Regras do template (não violar)

| Regra | Por quê |
|---|---|
| **1 CTA por mensagem** | Link único vence link competindo |
| **Áudio > texto pra peças longas** | Texto longo ninguém lê |
| **Reação `{EMOJI}` no fim do áudio** | Prova social visual dentro da API |
| **"SAIR" sempre visível no onboard** | Reduz denúncia, protege o número |
| **Sem ALL CAPS, sem múltiplos `!!!`** | Parece spam, reduz deliverability |
| **Nunca prometer o que não entrega** | Queima a marca e a lista |
| **Gancho da próxima aula no fim do áudio da noite** | Retém pro dia seguinte |

---

## 📐 Como usar esse template

1. **Preencha a seção "Variáveis do template"** no topo — essa é sua fonte da verdade
2. **Preencha a tabela de referência rápida** da Fase 3 — com isso, as 5 mensagens diárias saem prontas
3. **Grave os áudios** das Msgs 7, D-diária, Fase 6-A — sempre com CTA de reação no fim
4. **Configure os disparos** no WhatsApp/ManyChat seguindo os horários dos títulos de cada mensagem
5. **Teste o onboard** com 1 número seu antes de rodar — valida link, validação de e-mail, botões

---

**Fonte:** extraído da mentoria Léo Tabari com o mentorado (exemplo) (24/04/2026). Estrutura LPSG — Lançamento Pago Semanal Gravado.

# 04 · Mensageria CS — templates por momento

> Mensagens reutilizáveis pro CS. Variáveis em `{ }`. Aprovar templates Utility na Meta API antes de disparar.

---

## 📨 Onboarding D0-D7

### 🟢 Msg 1 · Boas-vindas (D0 +10min)

> Oi {NOME_ALUNO}! 👋
>
> Aqui é o **{NOME_ESPECIALISTA}** falando direto com você.
>
> Acabei de receber sua compra do **{NOME_PRODUTO_PRINCIPAL}** — bem-vindo ao programa.
>
> Vou te mandar **3 coisas curtas** nos próximos minutos. É importante você ler todas.
>
> Bora? {EMOJI}

> **Categoria Meta:** Utility
> **Template name:** `cs_onboarding_msg1_v1`
> **Variáveis:** {{1}}=nome aluno, {{2}}=nome especialista, {{3}}=nome produto, {{4}}=emoji

---

### 🟢 Msg 2 · Acesso à plataforma (D0 +12min)

> Aqui está seu acesso à plataforma:
>
> 👉 {LINK_PLATAFORMA}
>
> Login: **{EMAIL_ALUNO}**
> Senha: te enviei por email (verifica também a caixa de SPAM, ok?)
>
> Quando entrar, **assiste a Aula 1 ainda hoje ou amanhã**. É a aula que posiciona TUDO que vem depois.

> **Template name:** `cs_onboarding_msg2_v1`

---

### 🟢 Msg 3 · Grupo (D0 +30min)

> Última coisa importante: te coloquei no nosso grupo de alunos.
>
> 👉 {LINK_GRUPO_ALUNOS}
>
> No grupo você vai:
> - Falar com outros {TRATAMENTO_PLURAL} que estão no mesmo nível que você
> - Receber as **lives semanais** (toda quarta 19h)
> - Postar suas vitórias e ver as dos outros
>
> **Entra agora** — esse grupo é onde acontece o aprendizado real.

> **Template name:** `cs_onboarding_msg3_v1`

---

### 🟢 Msg 4 · Check-in CS (D3 manhã · 1:1 do CS Oficial)

> Oi {NOME_ALUNO}! Aqui é a {NOME_CS}, sou seu CS Oficial no {NOME_PRODUTO_PRINCIPAL}.
>
> Já passou 3 dias desde sua compra. Antes de seguir, queria saber:
>
> 1. Você fez o primeiro login na plataforma?
> 2. Conseguiu assistir a Aula 1?
> 3. Tem alguma dúvida que tá te travando?
>
> Se quiser, podemos marcar uma call rápida de **15 minutos** essa semana — só pra alinhar seu plano. Posso te mandar 2-3 horários pra escolher?

> Mensagem **conversacional**, sem template Utility (é proativo · iniciado pelo CS humano).

---

### 🟢 Msg 5 · Dica D5 (email)

> Assunto: Uma dica que vai te economizar 1 mês
>
> Oi {NOME_ALUNO},
>
> 90% dos alunos que travam na semana 4 tinham **um padrão em comum**: tentaram fazer tudo ao mesmo tempo na primeira semana.
>
> Não cai nessa.
>
> Foco da semana 1: **assistir Aula 1 + Aula 2 + entrar no grupo**. Ponto.
>
> Aula 3 só vem na semana 2. Cada coisa no seu tempo.
>
> Bora?
>
> {NOME_ESPECIALISTA}

---

### 🟢 Msg 6 · Convite Kick-off (D7 manhã)

> Hoje às 19h é o **Kick-off ao Vivo** do {NOME_PRODUTO_PRINCIPAL}.
>
> Vou apresentar:
> ✅ O passo-a-passo dos 90 dias
> ✅ Como rodar seu primeiro lançamento na semana 2
> ✅ Tira-dúvidas dos {TRATAMENTO_PLURAL} novos
>
> 👉 {LINK_LIVE}
>
> Se não puder ao vivo, o replay fica disponível por 7 dias só. Mas vem ao vivo se conseguir — é onde a galera tira mais valor.

---

## 📊 Check-ins regulares

### 🔵 Check-in M2 · D14 (CS Oficial)

> Oi {NOME_ALUNO}, beleza?
>
> Tô passando aqui pra ver como tá indo. Algumas perguntas rápidas:
>
> 1. Você já estruturou seu primeiro Lançamento Pago Semanal?
> 2. Tem alguma página/criativo travando?
> 3. Quer agendar uma call de 30 min pra revisar com você?
>
> Tô aqui na próxima sexta no Office Hours das 14h se preferir live. {EMOJI}

---

### 🔵 Check-in M3 · D38 (após pitch)

> Oi {NOME_ALUNO}!
>
> Se você seguiu o cronograma, fez o pitch domingo passado. Como foi?
>
> ✅ Quantas vendas?
> ✅ Algum print pra dividir com a galera?
>
> Manda aqui que eu posto no grupo (com seu OK, claro). Vitórias inspiram outros {TRATAMENTO_PLURAL}.

---

### 🔵 Check-in M4 · D52 (revisão de números)

> Oi {NOME_ALUNO},
>
> Marco 4 do programa — momento de revisar os números do seu LPSG.
>
> Me manda print:
> 1. ROAS médio dos últimos 14 dias
> 2. Conv. da página
> 3. Comparecimento Aula 1
>
> Eu reviso e te mando feedback até amanhã. Se preferir call de 30 min, manda aí.

---

## 📝 Coleta de prova social

### 🟣 Pedido de depoimento texto · D60

> Oi {NOME_ALUNO}!
>
> Você completou o **Marco 4** do programa — ROAS estável + receita crescendo. Parabéns!
>
> Pra fechar esse marco, queria te pedir um favor:
>
> Me manda **um depoimento curto em texto** (5-10 linhas) sobre:
> 1. Onde você estava antes do {NOME_PRODUTO_PRINCIPAL}
> 2. O que mudou nesses ~60 dias
> 3. O que você diria pra alguém na fase em que você estava
>
> Se topar, manda **1-2 prints** do dashboard junto.
>
> Esse depoimento vai pra próxima edição da venda — ajuda a galera nova a ver que é possível.

---

### 🟣 Pedido de depoimento vídeo · D85

> Oi {NOME_ALUNO}!
>
> Tô preparando o material da próxima edição e queria muito te ter no vídeo de prova social.
>
> Pediria **90 segundos em vídeo** (gravar no celular mesmo · vertical 9:16) respondendo:
>
> 1. **Onde você estava** antes (dor concreta)
> 2. **O que você fez** (decidiu entrar no programa)
> 3. **Resultado** (números reais · pode usar dashboard de fundo)
> 4. **Recomendação** (pra quem é · pra quem não é)
>
> Se topar, manda hoje ou amanhã. Em troca, **1 mês extra de acompanhamento + 1 call individual comigo**.

---

## 📈 NPS

### 🟡 NPS parcial · D30

> {NOME_ALUNO}, 1 pergunta rápida:
>
> **De 0 a 10, quanto você indicaria o {NOME_PRODUTO_PRINCIPAL} pra um amigo na mesma fase que você estava?**
>
> Responde aqui o número. {EMOJI}

> Se respondeu 9-10 → resposta automática "Que máximo! Conta pra mim o que tá funcionando melhor pra você?"
> Se respondeu 7-8 → "Anotado. Posso entender o que falta pra ser 10?"
> Se respondeu 0-6 → 🔴 ALERTA · Head CS liga em ≤ 24h

---

### 🟡 NPS final · D90

> {NOME_ALUNO}, completou os 90 dias do {NOME_PRODUTO_PRINCIPAL}! 🎉
>
> Pra fechar com chave de ouro, **3 perguntas rápidas** (te toma 90 segundos):
>
> 👉 {LINK_PESQUISA_NPS_FINAL}
>
> Suas respostas vão direto pra mim. Vou ler todas e responder pessoalmente.

---

## 🚨 Risco / Reembolso

### 🔴 Sinal de risco · D7 (sem login)

> Oi {NOME_ALUNO}, é a {NOME_CS}.
>
> Vi aqui que você ainda não fez o primeiro login na plataforma — já fazem 7 dias da compra.
>
> Aconteceu alguma coisa? **Posso te ajudar com algo?**
>
> Se for senha, dúvida na plataforma, dificuldade com a Aula 1 — me fala. Resolvo em ≤ 30 min.

---

### 🔴 Tentativa de reembolso

> Oi {NOME_ALUNO},
>
> Vi aqui que você abriu solicitação de reembolso.
>
> Antes da gente seguir com isso, posso te pedir 10 minutos de call?
>
> Não é pra te convencer a desistir — é pra entender o que não funcionou pra mim aprender pra próxima edição. E se for o caso, eu mesmo agilizo o reembolso depois da call.
>
> Manda 2-3 horários que tô disponível.

---

## 🎓 Conclusão

### 🟢 Cerimônia de conclusão · D90

> Parabéns, {NOME_ALUNO}.
>
> Você terminou os **{PRAZO_ACOMPANHAMENTO}** do {NOME_PRODUTO_PRINCIPAL}. Faz parte agora do **time de concluintes**.
>
> Os próximos passos:
>
> 1. **Continua no grupo** — vira aluno-mentor (ajuda os novos)
> 2. **NPS final** — manda hoje · suas respostas pautam a próxima edição
> 3. **Próximo nível** — eu vou te chamar 1:1 pra falar de continuidade
>
> Foi muito bom ter você aqui. {EMOJI}
>
> {NOME_ESPECIALISTA}

---

## 📋 Templates Meta a aprovar (Utility)

| Nome | Conteúdo |
|---|---|
| `cs_onboarding_msg1_v1` | Boas-vindas D0 |
| `cs_onboarding_msg2_v1` | Acesso plataforma D0 |
| `cs_onboarding_msg3_v1` | Grupo D0 |
| `cs_kickoff_invite_v1` | Convite Kick-off D7 |
| `cs_checkin_d14_v1` | Check-in M2 |
| `cs_checkin_d38_v1` | Check-in pós-pitch |
| `cs_nps_d30_v1` | NPS parcial |
| `cs_nps_d90_v1` | NPS final |

> Estrutura técnica dos templates Utility: `mensageria-lpsg/whatsapp-templates-meta.md`.

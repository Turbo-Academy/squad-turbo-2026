# 06 · SOPs · Padrões operacionais (checklists prontas)

> Checklists pra cada situação. Time novo executa sem precisar perguntar.

---

## 🎯 Princípio: SOP existe pra liberar o cérebro

```
Sem SOP:  cada execução vira reinventar a roda · expert vira gargalo
Com SOP:  novato faz na 1ª · sênior pula etapas que já internalizou · processo escala
```

---

## 📋 Os 12 SOPs do LPSG

| # | SOP | Quem usa |
|---|---|---|
| 1 | **Pré-evento checklist** | Operação · Expert |
| 2 | **Lançar batelada de criativos** | Designer + Tráfego |
| 3 | **Subir campanha Meta ASC** | Tráfego |
| 4 | **Gravar uma aula** | Expert + Operação |
| 5 | **Editar uma aula** | Editor |
| 6 | **Aprovar mensageria** | Operação · Expert |
| 7 | **Disparar mensagem WhatsApp** | Operação |
| 8 | **Atender checkout iniciado (≤5min)** | Closer |
| 9 | **Conduzir conversa de recuperação** | Closer |
| 10 | **Lançar nova edição (re-uso de assets)** | Operação |
| 11 | **Onboarding de novo membro** | Operação |
| 12 | **Pós-mortem da edição** | Todos · facilita Operação |

---

## SOP 1 · Pré-evento checklist (T-7 dias)

```
✅ Aulas
[ ] 5 aulas roteirizadas (Expert)
[ ] Equipamento de gravação testado (mic · câmera · luz)
[ ] Setup de gravação reservado (estúdio · home office)
[ ] Pitch (Aula 6) ensaiado pelo menos 2x

✅ Criativos
[ ] 3 bateladas de criativos rodando (D-14 · D-7 · D-3)
[ ] Página de ingresso publicada (Vercel · LCP < 1.5s)
[ ] Pixel + CAPI testados (test event no Meta)

✅ Mensageria
[ ] Templates Utility aprovados pela Meta (lembrete · áudio · ficha · janelas)
[ ] Mensagens da semana de evento agendadas no n8n
[ ] Grupo do evento criado · link funcionando

✅ Automação
[ ] Health check rodando há 7+ dias
[ ] Webhook Hotmart testado (test event)
[ ] WABA quality rating ≥ 90%

✅ Time
[ ] Daily agendado seg-sex 8h durante evento
[ ] War-room channel criado (#war-room-{evento})
[ ] Closer alocado (turno definido)
[ ] Backup do closer (caso de doença)

✅ Pré-flight 24h antes
[ ] Smoke test mensageria (1 lead teste · recebe sequência inteira)
[ ] Smoke test webhook Hotmart (1 compra teste)
[ ] Smoke test disparo das 06:50 (cron rodou 1x ontem 06:50)
```

---

## SOP 2 · Lançar batelada de criativos (do brief ao subir)

```
✅ Briefing (Operação · 30min)
[ ] Tipo da batelada definido (D-14 · evento · carrinho · recuperação)
[ ] Mix de hooks · dores · tons mapeado
[ ] Ângulo principal da semana definido
[ ] Card no Notion criado · DRI Designer · prazo

✅ Produção (Designer · 2-3 dias)
[ ] 5 estáticos com foto do expert
[ ] 5 carrosséis 8-10 cards · último é vídeo 4-5s
[ ] 5 roteiros de vídeo prontos pra gravar
[ ] Nomenclatura LPSG aplicada (SIGLA_DDMMYY_TIPO_NUMERO)

✅ Aprovação (Expert · 30min)
[ ] Todos têm foto do expert visível
[ ] Hooks são variados (não 5 iguais)
[ ] Copy do Meta escrita
[ ] Link de destino testado

✅ Subir (Tráfego · 1h)
[ ] Upload com nomenclatura preservada
[ ] Adicionados na campanha ASC ativa
[ ] CAPI eventos passando (test event verifica)
[ ] Status semáforo no Notion: 🟢
```

---

## SOP 3 · Subir campanha Meta ASC

```
✅ Pré-requisitos
[ ] Pixel + CAPI configurados
[ ] WABA aprovado (se usar lead ad com WhatsApp)
[ ] Página de destino com Pixel instalado
[ ] Cupom Hotmart criado (se aplicável)

✅ Estrutura ASC
[ ] Campaign: 1 ASC por edição (ex: ASC_LPSG_01_26)
[ ] Budget: começa em R$ {ORC_DIA} · escala +5%/dia se ROAS bom
[ ] 15 criativos no mesmo ad set (ASC otimiza · não fragmenta)
[ ] Eventos: Purchase + InitiateCheckout (objetivo Sales)

✅ Configuração
[ ] Pixel + CAPI ambos selecionados (deduplicação)
[ ] País + idioma do avatar
[ ] Idade + gênero (se justificado · senão amplo)
[ ] Sem interesse específico (Advantage+ otimiza sozinho)

✅ Pós-subida
[ ] Test event verifica que está disparando
[ ] Monitor diário do Hook/Hold/Body Rate
[ ] Regra de corte: criativo com Hook < 15% por 3 dias → cortar
[ ] Regra de escala: criativo com ROAS > 1.5 + budget < limite → +5%/dia
```

---

## SOP 4 · Gravar uma aula

```
✅ Pré-gravação (Expert · 1h antes)
[ ] Roteiro lido 2x
[ ] Slides revisados
[ ] Vestuário neutro (sem estampa · sem logo grande)
[ ] Equipamento testado (mic · câmera · iluminação)
[ ] Garrafa d'água por perto

✅ Gravação (Expert · 1h)
[ ] Início: hook nos primeiros 30s
[ ] Mid: marco de resultado claro
[ ] Fim: gancho pra próxima aula
[ ] Tarefa pra casa anunciada

✅ Pós-gravação (Operação · 30min)
[ ] Arquivo salvo no Drive: /LPS-01-26/aulas/A{N}-raw.mp4
[ ] Notas pro editor (cortes · trechos brilhantes · trechos pra cortar)
[ ] Editor notificado no Slack (#editor)
[ ] Card "Editar A{N}" criado no Notion · prazo 48h
```

---

## SOP 5 · Editar uma aula

```
✅ Receber (Editor · 0-2h)
[ ] Confirma recebimento do raw no #editor
[ ] Lê notas do Operação
[ ] Estima tempo de edição (8-12h pra aula de 1h)

✅ Editar (Editor · 1-2 dias)
[ ] Cortes "ah · uh · então" (não exagerar · soa robótico)
[ ] Inserir slides nos pontos certos
[ ] Legendas queimadas (auto-gerar + revisar)
[ ] Música baixa (-30dB) opcional · sem competir com voz
[ ] Cor consistente (LUT · brand)

✅ Entregar (Editor · 30min)
[ ] MP4 final: A{N}-edited-v1.mp4 no Drive
[ ] Versão 9:16 (cortes pro stories) · 3-4 trechos de 30-60s
[ ] Notifica Operação no #editor
[ ] Card "Editar A{N}" → Concluído

✅ Aprovação (Expert · 15min)
[ ] Assiste 5 trechos aleatórios
[ ] Aprova OU pede 1 ronda de revisão
[ ] Operação publica (YouTube · cronograma)
```

---

## SOP 6 · Aprovar mensageria

```
✅ Rascunho (Operação · 30-60min)
[ ] Mensagem escrita conforme template (mensageria-lpsg)
[ ] Tom condizente com a fase (PASSADO · PRESENTE · FUTURO)
[ ] CTA claro · 1 só
[ ] Variáveis preenchidas ({{nome}}, {{link}}, etc)

✅ Classificação (Operação · 5min)
[ ] Marketing OU Utility (decisão de custo · segue mensageria-lpsg)
[ ] Se Utility · template aprovado pela Meta?
[ ] Se Marketing · respeitando 80/20?

✅ Aprovação (Expert · 5min)
[ ] Lê 1x · aprova tom + conteúdo
[ ] Sugere ajuste se necessário (1 round máximo)

✅ Agendar (Operação · 15min)
[ ] Cadastra no n8n com cron correto
[ ] Smoke test (1 lead teste · 5min antes)
[ ] Card "Disparo {nome}" → Agendado
```

---

## SOP 7 · Disparar mensagem WhatsApp

```
✅ Pré-disparo (5min antes)
[ ] WABA quality rating ≥ 90%
[ ] Token WABA não expirou
[ ] Filtro de leads aplicado (tag correta · fase correta)
[ ] Throttle ativo (50ms entre mensagens · não estourar limite)

✅ Disparo
[ ] Botão "RUN" no n8n
[ ] Monitor primeiros 30s · taxa de entrega ≥ 95%
[ ] Se taxa < 95% · pause + investigue (token? template? número?)

✅ Pós-disparo
[ ] Log no Sheets · qtd disparada · entregue · falha
[ ] Status semáforo verde se entrega ≥ 95%
[ ] Card "Disparo {nome}" → Concluído
```

---

## SOP 8 · Atender checkout iniciado (≤5min)

```
✅ Alerta chegou (Closer · 0-30s)
[ ] Lê alerta no #closer-tsunami
[ ] Identifica: nome · phone · janela · valor

✅ Primeira mensagem (Closer · 1-3min)
[ ] WhatsApp pessoal OU ManyChat live chat (decisão prévia · consistência)
[ ] Saudação personalizada (usa primeiro nome)
[ ] Reconhece o checkout · sem pressão
[ ] Pergunta aberta (qual a dúvida?)

✅ Conversa (Closer · 5-30min)
[ ] Escuta dúvida real (preço · garantia · acesso · timing)
[ ] Responde com framework: Reconhece · Reformula · Resolve
[ ] Não enrola · não promete o que não pode cumprir
[ ] Fecha com: "vou te mandar o link · garante a sua?"

✅ Resultado (Closer · 1min)
[ ] Comprou → marca COMPROU + comissão
[ ] Não comprou agora → agenda follow-up D+1
[ ] Não tem interesse → marca REJEITOU · respeita · não insiste
```

---

## SOP 9 · Conduzir conversa de recuperação

```
✅ Setup (Closer · 5min)
[ ] Lê histórico do lead (ficha · janela · valor)
[ ] Identifica fase de recuperação (D+1 · D+3 · D+7)
[ ] Personaliza primeira mensagem

✅ D+1 (amigável)
[ ] Tom: empático · sem pressão
[ ] Pergunta: "tudo bem? deu algum imprevisto?"
[ ] Sem CTA forte · só abre conversa

✅ D+3 (caso real)
[ ] Compartilha depoimento de aluno em situação similar
[ ] Pergunta: "isso ressoa com seu momento?"

✅ D+7 (urgência real)
[ ] Lembra: carrinho fecha em X horas
[ ] CTA forte · link direto
[ ] Sem manipulação · só verdade

✅ Sinais de calor
[ ] Lead respondeu? → escala pra conversa 1:1 ativa
[ ] Lead clicou no link mas não comprou? → mensagem 30min depois
[ ] Lead pediu detalhe específico? → resposta + CTA
```

---

## SOP 10 · Lançar nova edição (re-uso de assets)

```
✅ Inventário (Operação · 30min)
[ ] Aulas anteriores: usar de novo OU re-gravar?
[ ] Páginas: copiar template · trocar variáveis
[ ] Mensageria: copiar templates · adaptar datas
[ ] Criativos: revisar quais funcionaram (top 5)
[ ] Tags ManyChat: configurar nova edição (LPSG-W{NN})

✅ Setup (Operação · 1 dia)
[ ] Variáveis globais atualizadas (datas · sigla · edição)
[ ] Cupons Hotmart criados (FICHA10 · 1H · 3H · 1DAY)
[ ] Nova edição como Sheets nova OU mesma com filtro
[ ] Workflows n8n duplicados ou parametrizados (data do evento)
[ ] Página de ingresso clonada · /lpsg-w{NN}

✅ Briefing time (1h)
[ ] Diferenças vs edição anterior
[ ] Pós-mortem · 3 mudanças aplicadas
[ ] Cronograma novo distribuído
```

---

## SOP 11 · Onboarding de novo membro

```
✅ D-1 (antes da entrada)
[ ] Acessos preparados (Slack · Notion · Drive · Hotmart)
[ ] Email de welcome com tour links
[ ] Buddy designado (alguém de área parecida)

✅ D0 (primeiro dia · 4h máximo)
[ ] Tour Notion (15min) · onde está cada coisa
[ ] Apresentação ao time (Slack #general)
[ ] Leitura: papéis (01-papeis-e-raci.md) · cronograma (03)
[ ] 1:1 com Expert (15min) · alinha expectativa
[ ] 1:1 com DRI direto (30min) · expectativa de entrega

✅ Semana 1
[ ] Shadow do DRI direto · acompanha · não executa
[ ] Lê SOPs da área
[ ] Faz 1 entrega pequena supervisionada

✅ Mês 1
[ ] 1 entrega autônoma por semana
[ ] Daily ativo (se em evento)
[ ] Avaliação D+30: sente confiante? gargalo? feedback bidirecional

✅ Mês 3
[ ] Plenamente autônomo
[ ] Tem opinião sobre processo
[ ] Promovido OU expectativa de promoção clara
```

---

## SOP 12 · Pós-mortem da edição

```
✅ Pré-trabalho (Operação · 1 semana antes)
[ ] Coletar métricas finais (faturamento · ROAS · NPS · etc)
[ ] Comparar com edição anterior
[ ] Anomalias mapeadas (o que foi fora do esperado?)
[ ] Cada DRI traz 1 vitória · 1 mancada (escrito antes)

✅ Pós-mortem (3h · sex W+2)
[ ] Hora 1: dados · comparativo · anomalias
[ ] Hora 2: cada DRI compartilha vitória + mancada
[ ] Hora 3: 3 mudanças pra próxima edição (votação)
[ ] Distribuição de bônus / reconhecimento

✅ Pós-pós-mortem (Operação · 1 dia)
[ ] Documento "Pós-mortem · {SIGLA} {EDICAO}" no Notion
[ ] 3 mudanças com DRI + prazo
[ ] Briefing próxima edição agendado
[ ] Time reconhecido publicamente (Slack)
```

---

## 🛠️ Como criar uma SOP nova

```
1. Identifica processo recorrente (acontece > 3x · alguém pergunta)
2. Pessoa que mais executa escreve a 1ª versão
3. Outra pessoa testa seguindo a SOP literal · vê o que falta
4. Refina · publica no Notion
5. Revisão a cada 6 meses (cresce · simplifica · atualiza)

ESTRUTURA_SOP:
  - Quando usar (gatilho)
  - Pré-requisitos (ferramentas · acessos · contexto)
  - Passos numerados (verbos · curtos)
  - Output esperado
  - O que fazer se der errado
```

---

## ✅ Checklist das SOPs

```
[ ] Todas 12 SOPs publicadas no Notion
[ ] Time onboardou lendo SOPs · sem treinamento 1:1
[ ] SOPs revisadas a cada 6 meses
[ ] Novas SOPs criadas quando processo se repete > 3x
[ ] SOPs apontam pra outras (referências cruzadas)
[ ] Métricas: # SOPs ativas · # acessadas · # criadas/mês
```

# Lições de operação — Automações, integrações e canais

Itens: 19

Lições 103 a 121 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 103. Cache de agregador escolhe candidato, a plataforma dá o veredito

**Quando acontece:** uma decisão lê um intermediário que sincroniza (o cache de um agregador, um catálogo público, o último relatório) em vez da fonte. O atraso mente nos dois sentidos: diz que existe o que já foi apagado e que não existe o que foi criado por fora. Uma trava contra duplicata que compara com o cache bloqueia o legítimo e deixa passar a duplicata real.

**O que fazer:** use o cache para achar candidatos e decida lendo a própria plataforma. Essa leitura precisa de controle positivo, porque "sumiu", "nunca existiu" e "leitura recusada" dão o mesmo sinal; se o controle falhar, o desfecho é "não consegui medir". Índice de busca também é cache: depois de corrigir um texto, reindexe na hora.

**Como conferir:** apague um item e crie outro direto na plataforma, depois rode a decisão: ela tem que enxergar as duas mudanças na hora. Depois de reindexar, a busca devolve a versão nova e nenhum trecho da velha.

### 104. Falhas simultâneas apontam para o caminho comum, não para o outro lado

**Quando acontece:** depois de uma rajada de requisições, credenciais independentes passam a devolver `invalid_grant` e documentos diferentes voltam 403, tudo ao mesmo tempo. Parece conta bloqueada, e o alarme sai. Minutos depois tudo volta sem ninguém mexer: o provedor estava limitando o endereço de origem.

**O que fazer:** diante de falha ampla e simultânea, pergunte primeiro o que as chamadas têm em comum: endereço de origem, rede, credencial compartilhada, relógio. Teste por outro caminho ou espere alguns minutos, e nunca anuncie queda sem um segundo ponto de observação. Em lote grande contra serviço de terceiro, imponha ritmo e teto por minuto e trate 429 ou 403 no meio dele como espera. Sintomas diferentes nas mesmas entradas pedem olhar para quem produziu essas entradas.

**Como conferir:** repita a mesma chamada de outra máquina ou rede: se funcionar lá, o problema está no caminho comum. Para defeitos distintos, compare os conjuntos de entradas afetadas; interseção grande aponta para uma causa só.

### 105. Configuração ausente tem que recusar, não cair na produção

**Quando acontece:** um script que alcança pessoas, dinheiro ou estado real tem valores padrão apontando para produção: destino de alertas, banco, caixa de saída de mensagens. Todo teste, canário ou script avulso que importa a configuração nasce mirando o real: alerta falso para quem opera, registro de teste no log de produção, item de teste numa fila que um remetente vivo envia.

**O que fazer:** leia a variável que arma o caminho perigoso só do ambiente do processo, nunca do arquivo de configuração que os testes importam. Sem ela, recuse antes de qualquer efeito, resolva caminhos para um diretório temporário e aceite só identificadores claramente sintéticos. Para não calar a produção, ponha a variável no ambiente dela, confira no processo vivo e só então mude o padrão.

**Como conferir:** rode o teste sem a variável e confirme a recusa sem nenhum efeito. Em produção, confirme que um alerta real ainda chega; sem esse lado positivo, o alarme falso virou alarme mudo.

### 106. Regra que confia no canal autentica o contêiner, não a pessoa

**Quando acontece:** uma regra diz que mensagem vinda de tal chat vale como ordem do responsável, inclusive para mudar configuração ou identidade do agente. Isso autentica o contêiner (chat, grupo, pasta, endereço de rede), não quem escreveu. Quando o chat vira grupo, qualquer participante ganha o controle mais valioso do agente sem invadir nada.

**O que fazer:** diante de cada regra desse tipo, pergunte se a origem é uma pessoa ou um contêiner. Se for contêiner, amarre a regra no identificador do remetente, que os transportes costumam entregar ao lado do identificador do chat. Se o transporte não expõe o remetente, escreva junto da regra que ela vale só enquanto o chat tiver uma pessoa. Sem lista de permitidos, o padrão tem que recusar, nunca cair no lado permissivo.

**Como conferir:** mande uma ordem pelo mesmo chat a partir de uma segunda conta de teste e confirme a recusa. Depois esvazie a lista de permitidos e confirme que o agente recusa todo mundo.

### 107. Mensagem injetada no terminal some com código de saída zero

**Quando acontece:** um bot entrega mensagens a uma sessão de terminal pelo comando send-keys do tmux e registra "entregue" quando o comando devolve zero, o que acontece nos três desfechos: submeteu, grudou ou sumiu. Texto acima de algumas dezenas de caracteres vira colagem, onde o retorno de carro é quebra de linha e não envio; com o foco num painel secundário, a tecla pode ser engolida.

**O que fazer:** confirme a entrega pela transcrição da sessão, nunca pelo código de saída. Mande o texto como colagem delimitada (set-buffer e paste-buffer com a opção -p) e a tecla de envio numa chamada separada, depois de ler o rodapé para recusar painel em foco ou resíduo no campo. Ao trocar o transporte, liste cada tratamento feito para o antigo (escape de aspas, truncagem) e pergunte quem interpreta aquilo agora: o que sobra corrompe o texto em silêncio.

**Como conferir:** envie uma mensagem longa com um marcador único e procure o marcador na transcrição em poucos segundos.

### 108. Marca de já feito gravada na tentativa trava a recuperação

**Quando acontece:** uma automação grava uma marca anti-repetição (uma ação por episódio) no momento em que dispara a ação. Se a ação morre no meio, a marca faz o ciclo seguinte acreditar que já agiu e não tentar mais. A proteção contra repetição vira a trava que impede a recuperação, e o log diz que deu certo.

**O que fazer:** grave a marca só depois de medir o efeito do lado de fora (o estado novo relido), nunca porque o comando voltou zero. Emissão sem confirmação é um terceiro estado, com código próprio, que permite nova tentativa. Mensagem de sucesso segue a mesma regra: sai depois da releitura e cita o que foi observado, como a contagem antes e depois.

**Como conferir:** num ambiente de teste, derrube a ação logo depois do disparo e confirme que o ciclo seguinte tenta de novo. Em qualquer dedupe, responda: se a ação falhar depois da marca, o que faz a próxima tentativa acontecer?

### 109. Existir, estar ligado e apontar para o lugar certo são três perguntas

**Quando acontece:** você procura um gatilho ou uma regra de automação, acha o item na lista do painel e dá por pronto. Só que ele pode estar desligado ou apontar para o destino errado: tem cara de pronto e nunca dispara.

**O que fazer:** responda às três perguntas para cada item: existe, está ligado, aponta para onde. Depois de alterar, recarregue a página e releia o estado salvo, não a tela logo após o clique. Item desligado pode ser intencional: avise o responsável em vez de ligar. Em ferramenta que fica dias de pé, pergunte se o processo vivo tem a versão nova: `--version` lê o disco, e no Linux o executável de processo com binário trocado aparece como `(deleted)`.

**Como conferir:** inclua na busca um item sabidamente ligado (controle positivo) e confirme que ele aparece ativo depois de recarregar. Antes de contar com recurso novo, confira o executável do processo em execução, não o instalado.

### 110. Fiação certa não prova que alguém passa pelo fluxo

**Quando acontece:** você publica um fluxo de automação, confere a estrutura (ramos, destinos, cabeçalhos, campos) e marca como verificado. Dias depois o fluxo não produziu nada e o log está limpo, porque a regra nunca casou ou a pergunta nunca foi entregue.

**O que fazer:** trate a estrutura como metade da verificação; a outra metade é o contador de trânsito por etapa e por ramo, que plataformas como o ManyChat mostram. Um ramo com zero contatos enquanto o padrão leva todos é a assinatura de regra que nunca casa. Sem tráfego no dia da publicação, agende uma reconferência em vez de encerrar. Dois defeitos que só o trânsito revela: condição sensível a maiúsculas ("Sim" não casa com "sim") e tempo esgotado de pergunta que pula a condição.

**Como conferir:** com tráfego real, abra o contador por ramo: cada ramo esperado recebeu gente e o padrão não leva a totalidade. Sem tráfego observado, o status é "inferido", não "verificado".

### 111. Detector de intervenção humana que confunde a própria automação cala o bot

**Quando acontece:** um bot de conversa se cala quando detecta que alguém da equipe entrou. Se o sinal é "saiu mensagem pela conta da empresa", outra automação da mesma conta dispara a trava. Silêncio não gera erro nem log, e ninguém vê as conversas presas.

**O que fazer:** descubra de onde vem o sinal e se ele separa automação de humano: sair pela conta não prova que alguém digitou. Conte as conversas paradas em espera, que é a métrica do silêncio. Se o detector soma pesos de frases, veja se um só casamento alcança o limiar e se ele relê o histórico inteiro: aí um falso positivo antigo cala o bot para sempre, e falta janela ou reversão.

**Como conferir:** teste as duas pontas: frases reais da automação seguem acionando a trava (controle positivo) e uma frase humana comum, como "você viu o material?", não pesa (controle negativo). Depois do conserto, as conversas em espera diminuem.

### 112. Ramo padrão apontado para um ramo real esconde o que o roteador não entendeu

**Quando acontece:** uma condição de texto livre tem ramos "sim" e "não", e o padrão aponta para o destino de um deles. Tudo que ela não entendeu vira resposta errada com cara de certeza, e o erro fica invisível. Com casamento por trecho piora: "não quero" contém "quero" e cai no sim se esse ramo é avaliado primeiro.

**O que fazer:** audite em três perguntas: para onde vai o padrão (se for um ramo real, dê a ele destino próprio de "não entendi"), a regra casa a frase inteira ou um pedaço, e qual ramo é avaliado primeiro. Em casamento por trecho, a ordem dos ramos decide o resultado.

**Como conferir:** monte frases com a palavra do ramo oposto ("não quero") e uma que não casa com nada: cada uma tem que cair no ramo certo ou no "não entendi". Compare também respostas reais com o destino delas: o contador do painel mostra quantos passaram por ramo, não quantos acertaram.

### 113. Envio proativo pela API do ManyChat recusado com a janela aberta

**Quando acontece:** você manda mensagem proativa no Instagram pelo endpoint sendContent da API do ManyChat, com o contato dentro da janela de 24 horas, e a recusa diz que a janela passou: o registro de última interação do contato está vazio ou atrasado. Tags de mensagem de outro canal da Meta devolvem sucesso no Instagram e não entregam nada.

**O que fazer:** compare a última interação registrada com a conversa real antes de concluir que a janela fechou. Para envio proativo manual, use um caminho que fale direto com a API da Meta, com mensagem padrão sem tag. E delimite a lição: a recusa é da sua chamada de API, e o envio que a plataforma dispara por gatilho próprio (comentário, palavra-chave) atravessa a janela, então pergunte primeiro quem enviou.

**Como conferir:** depois de enviar, ache a mensagem de saída na conversa pela leitura da API, com o identificador devolvido; sucesso só na resposta não é entrega.

### 114. Mensagem proativa fora da janela de 24 horas não é entregue

**Quando acontece:** você desenha um fluxo de mensagens diretas no Instagram com follow-up de 48 ou 72 horas, ou tenta reativar um contato que sumiu. A Meta só aceita mensagem proativa até 24 horas depois da última mensagem da pessoa; fora disso recusa, e o follow-up nunca chega.

**O que fazer:** desenhe todo envio automático dentro da janela, contando da última mensagem do contato, não da sua. A tag de agente humano, que estende a janela, exige permissão aprovada na revisão de apps da Meta; sem ela, não conte com isso. Fora da janela só o contato reabre a conversa, então reativar contato frio depende de um gatilho que ele aciona (palavra-chave, comentário), não de envio seu.

**Como conferir:** confirme que nenhuma espera do fluxo passa de 24 horas desde a última mensagem do contato. Um envio de teste para conta de teste com a janela vencida volta recusado; com a janela aberta, chega.

### 115. Acesso negado que cita o destinatário é sandbox, não senha errada

**Quando acontece:** você configura um serviço de envio de e-mail, como o SES da AWS, e o primeiro teste volta com 554 de acesso negado. Parece credencial errada, e a tentação é mexer no que estava certo. Se o erro cita o endereço do destinatário, é o sandbox: conta nova só entrega para endereços verificados.

**O que fazer:** leia qual identidade o erro nomeia antes de trocar qualquer senha. Se é o destinatário, verifique o endereço de teste ou peça a saída do sandbox, sem tocar na credencial. Em política de permissão mínima que lista identidades, o destinatário verificado também entra nela enquanto durar o sandbox; ao liberar a conta, tire-o e revise o que o chamado de suporte diz sobre ele.

**Como conferir:** com a mesma credencial, envie para um endereço verificado e para um não verificado: o primeiro entrega e o segundo recebe o 554 citando o destinatário. Se os dois falham, a causa é outra.

### 116. Publicação automática a partir da main desfaz o que ficou fora dela

**Quando acontece:** um job agendado reconstrói e publica o site a partir do ramo principal. Você corrige algo num ramo de trabalho ou direto no servidor, confere no ar e encerra. Na rodada seguinte o job publica a main, a correção some sem erro e alguém avisa que "a versão antiga voltou".

**O que fazer:** antes de mexer num site, descubra se há publicação automática, quando roda e de qual ramo lê. Mudança que precisa ficar no ar entra na main, por merge ou cherry-pick. Se alguém disser que o conteúdo antigo voltou, meça antes de restaurar: sendo cache no aparelho de quem olhou, restaurar desfaz a versão certa.

**Como conferir:** compare o hash do arquivo que a origem serve, sem cache, com o da main e com o esperado. Igual ao esperado: é cache no aparelho. Igual à main e diferente do esperado: a mudança não entrou na main e o job a desfez.

### 117. Envio que vira rotina precisa de rota gravada e caminho único

**Quando acontece:** um envio feito à mão para um contato dá certo e quem aprova decide que aquilo vira padrão. Se só os passos ficam registrados, cada caso seguinte redescobre credencial, sessão de origem e destino, gasta rodadas e produz afirmação falsa, como tomar uma função desligada pelo canal inteiro fora do ar.

**O que fazer:** grave a rota medida junto com o padrão: a credencial de menor privilégio que envia, a origem certa e como confirmar o destino. Empacote o envio numa ferramenta de dois passos: o seco confere tudo e devolve o hash do texto, e o envio real só aceita esse hash. A trava contra duplicata só conhece o que passou por ela, então mensagem mandada por outro caminho precisa ser registrada à mão, senão a ferramenta envia de novo.

**Como conferir:** o envio real com hash diferente do seco é recusado. Registre um envio feito por fora, tente repeti-lo pela ferramenta e veja a recusa.

### 118. Robô de vendas não pode prometer retorno que não sabe cumprir

**Quando acontece:** o próprio fluxo convida o contato para algo (um evento ao vivo, um link, uma condição) e ele pergunta o detalhe: dia, horário, onde entrar. Se o fato não está no prompt, o robô responde que vai verificar e avisa depois. Nenhum processo volta a essa conversa, e ela morre ali, com o contato interessado esperando.

**O que fazer:** liste as perguntas que o próprio fluxo provoca e ponha as respostas no prompt, com a fonte de cada fato. Proíba a promessa de retorno quando não houver caminho real para cumpri-la, como uma fila de atendimento humano com alerta. Revise também os textos fixos do fluxo: um convite que cita o horário sem o dia provoca a mesma pergunta.

**Como conferir:** numa conversa de teste, pergunte cada detalhe que o fluxo menciona e confira que a resposta vem na hora, com o fato certo e sem promessa de verificar depois. Repita o teste a cada mudança no prompt.

### 119. Com o app em modo de teste, o token do Google vence em sete dias

**Quando acontece:** você cria credenciais OAuth no console do Google para o agente usar a conta de alguém, faz o consentimento e tudo funciona. Com a tela de consentimento em tipo de usuário externo, status de publicação testing e escopos além do perfil básico, o refresh token vence em sete dias: a renovação passa a devolver invalid_grant e todos os scripts que dependem dele param juntos.

**O que fazer:** mude o status de publicação para produção antes do consentimento (ou use o tipo interno, se a conta for de uma organização) e só então gere o token. Dê a cada máquina ou agente o seu próprio consentimento: o mesmo refresh token copiado em dois lugares faz uma revogação derrubar os dois, e a auditoria não distingue quem fez o quê.

**Como conferir:** um verificador diário renova o token e registra o resultado, e continua passando depois do oitavo dia. No console, o status de publicação aparece como produção.

### 120. Resposta 201 de uma API de WhatsApp não prova entrega

**Quando acontece:** você envia mensagens por uma API não oficial que automatiza a versão web do WhatsApp num navegador. O envio devolve 201 até para número que não tem WhatsApp, então tratar o 201 como entregue gera relatório falso. E um destino montado a partir do telefone pode cair num caminho de erro com reenvio automático, que duplica a mensagem.

**O que fazer:** antes de enviar, consulte se o número existe e use o identificador que essa consulta devolve. Depois, leia o estado da mensagem pelo id retornado (pendente, enviada, entregue): entregue só aparece quando o aparelho do destinatário confirma. Não rode operação pesada, como listar todos os contatos página por página, em paralelo com envios: o navegador por trás cai e derruba todas as sessões ligadas a ele.

**Como conferir:** um envio para número inexistente é barrado na consulta de existência. Um envio válido só conta como feito quando a releitura do estado mostra entregue.

### 121. Acesso por conector se prova com chamada, não com credencial no ambiente

**Quando acontece:** o agente procura credencial nas variáveis de ambiente, não acha e afirma que não tem acesso a um canal, como as mensagens diretas de uma rede social. O acesso pode vir de um conector já autenticado, e muitos servidores de ferramentas deixam as operações menos usadas fora da lista curta, alcançáveis só por uma busca e uma chamada genérica. A capacidade também muda por plataforma e por operação: ler não é enviar, e uma rede não é a outra.

**O que fazer:** antes de afirmar que falta acesso, liste os conectores e use a busca de ferramentas de cada servidor. Monte o mapa por plataforma e por operação, marcando o que foi provado e o que é suposição. Operação que escreve em conversa real com cliente só roda com aprovação.

**Como conferir:** cada linha marcada como provada no mapa tem uma chamada real registrada: leitura que devolveu dados ou envio lido de volta na própria conversa.

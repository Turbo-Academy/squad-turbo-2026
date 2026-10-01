# Lições de operação — Agentes, sessões e orquestração

Itens: 26

Lições 52 a 77 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 52. Skill de terceiro pode ensinar o agente a burlar sua proteção

**Quando acontece:** você instala uma skill ou plugin de terceiro e revisa só o código. As referências podem mandar o agente criar conta sozinho num serviço externo em nome do usuário, ou guardar token em arquivo temporário para escapar da redação de segredos: evasão de controle que um checklist clássico de segurança aprova.

**O que fazer:** antes de copiar, leia arquivo principal, referências e scripts procurando criação automática de conta ou credencial, instrução para esconder ou contornar redação e log, instalação direto de endereço remoto e hooks que disparam sozinhos. O que casar fica em quarentena até revisão humana, que lê cada linha no contexto. Quando o produto do pacote é instrução (regras, persona, prompt injetado), classifique cada regra como conflitante, complementar ou neutra frente às suas.

**Como conferir:** passe pelo hook uma entrada de cada tipo de agente e leia o texto injetado. Nada que conflite com suas regras pode chegar a um agente que o escopo declarado diz excluir.

### 53. Escopo fechado por endereço deixa o defeito gêmeo vivo ao lado

**Quando acontece:** você delega um conserto a um agente com escopo fechado, dizendo onde está o defeito e mandando não mexer no resto. Ele obedece, e o defeito idêntico sobrevive ao lado, às vezes no mesmo arquivo: outra chamada de rede sem prazo, outro bloco que grava sem conferir o resultado. A instrução funcionou; o defeito passou a ser a sua lista.

**O que fazer:** descreva cada item como classe mais o lugar onde ela aparece hoje, por exemplo: toda chamada de rede que roda antes da limpeza precisa de prazo, hoje aparece aqui, procure as irmãs. Mantenha a trava do escopo: o agente não conserta o que quiser, mas varre a classe antes de parar e lista as irmãs que encontrou e não tocou.

**Como conferir:** o relatório do agente traz as ocorrências da classe, separando consertadas e deixadas. Uma busca sua pelo mesmo padrão no código entregue não pode achar ocorrência que falte nessa lista.

### 54. Autorização por mensagem não muda a trava técnica

**Quando acontece:** quem aprova responde "pode rodar", o agente repassa que o caminho está livre e o comando é barrado de novo. A frase muda o que é permitido fazer, não o que o sistema deixa fazer. Se o agente tenta criar a regra que o libera, a trava tem que barrar outra vez: sessão que se autoriza sozinha anula a própria proteção.

**O que fazer:** antes de prometer execução, descubra onde mora a trava (regra de permissões da ferramenta, sudoers, classificador da sessão, escopo da chave, política do contêiner) e quem pode mudá-la. Trava de sessão muda pela pessoa responsável, no aparelho dela, não por mensagem. Ao levar a decisão, diga o alcance real da regra (um curinga que libera qualquer comando num servidor libera tudo ali) e como removê-la depois.

**Como conferir:** depois da mudança, rode o comando que foi barrado e observe que ele passa sem pedido de confirmação. Até lá, o estado correto é "autorizado, ainda bloqueado", nunca "liberado".

### 55. Ordem nova no meio da tarefa vai com âncora verificável

**Quando acontece:** no meio de uma tarefa, você manda ao agente uma reversão de escopo. Para ele, o texto chega sem origem verificável e pede o que uma injeção de prompt pediria (parar uma proteção, publicar, restaurar o que saiu). O agente disciplinado recusa, e está certo.

**O que fazer:** junto da ordem, mande o caminho de um artefato que o agente pode abrir sozinho, como a linha bruta do registro de auditoria onde a instrução chegou, e diga que a recusa estava certa se o arquivo não confirmar. Diante de uma recusa, não repita a ordem com mais ênfase: autoridade repetida é indistinguível de injeção insistente. Identificador citado numa âncora se lê do disco, nunca de cabeça: número aproximado parece verificável e manda o outro lado procurar no lugar errado.

**Como conferir:** mande uma ordem falsa sem âncora e confirme que o agente recusa e avisa; depois mande a legítima com o caminho e confirme que ele abre o arquivo antes de agir.

### 56. Prompt com premissa errada gera resposta certa à pergunta errada

**Quando acontece:** você revisa com rigor a resposta de cada agente, mas não a pergunta que escreveu. Frases do prompt que descrevem a própria operação (o que a equipe faz, tem e já pratica) parecem dispensar conferência e envelhecem sem ninguém notar. O agente trabalha certo sobre a premissa errada e devolve um veredito limpo e inútil, sem erro visível.

**O que fazer:** antes de despachar, releia essas frases e confira as verificáveis contra a fonte: uma busca no código, uma contagem de linhas, o arquivo citado aberto. Trate o prompt como afirmação sujeita a revisão, igual ao relatório que volta. Diante de um veredito estranho, pergunte que eixo o prompt mandou olhar e qual deixou de fora: revisão proibida de olhar um lugar não falha ali, só não vai até lá.

**Como conferir:** ao lado de cada frase descritiva do prompt, anote o comando ou o arquivo que a comprova. Frase sem prova ao lado sai do prompt ou vira pergunta para o agente.

### 57. Fork e agente retomado pagam a conversa inteira de novo

**Quando acontece:** um fork herda a conversa inteira de quem o disparou, e um agente retomado por mensagem relê todo o histórico acumulado a cada volta. Numa revisão de várias rodadas com o mesmo agente retomado, cada rodada custa mais que a anterior, e quase todo o contexto pago fica sem uso. O custo só aparece depois, no medidor de cota.

**O que fazer:** tarefa nova vai para agente novo com um brief escrito, nunca para um fork. Revisão em rodadas usa um agente novo por rodada, levando em arquivo um resumo dos achados anteriores: isso preserva a memória de regressão sem pagar a transcrição inteira. Retomar agente fica para continuação curta do mesmo trabalho.

**Como conferir:** compare o consumo de tokens por rodada no medidor. Com agente novo e resumo em arquivo, o custo por rodada fica estável; com agente retomado, ele cresce a cada volta.

### 58. Pasta de rascunho comum faz agentes paralelos se atropelarem

**Quando acontece:** agentes em paralelo gravam arquivos intermediários num diretório de rascunho comum. Cada um escolhe um nome genérico (process, dados, out), e o segundo a gravar sobrescreve o primeiro sem aviso, deixando um resultado corrompido que parece bom. Na limpeza, `mkdir -p` não falha quando a pasta já existe, então não distingue criar de encontrar, e o agente, achando que criou, apaga como seu o trabalho de outro.

**O que fazer:** no brief de todo agente que gera arquivo intermediário, exija subdiretório por tarefa com nome único e mande o entregável para uma pasta do projeto. Quem vai apagar olha antes o que há dentro e manda para a lixeira. Como regra que depende de lembrar falha no fim da tarefa, ponha uma trava real, como um gancho que recusa `rm -rf`.

**Como conferir:** rode dois agentes de teste em paralelo com o mesmo nome de arquivo e confirme por hash que cada saída chega íntegra ao fim.

### 59. Comando que abre diálogo na própria sessão prende toda a entrada

**Quando acontece:** um agente injeta na própria sessão um comando de barra (trocar de modelo, por exemplo) que abre um diálogo de confirmação. A tecla que confirmaria é barrada, e o diálogo segura toda a entrada seguinte: mensagens de pessoas, avisos de outros agentes, tarefas agendadas. O processo segue vivo, e um vigia que mede resposta pendente na transcrição não acusa nada, porque a mensagem nunca chegou a entrar.

**O que fazer:** não injete comando de barra nem tecla na própria sessão; troca de modelo fica para o próximo início ou para uma pessoa diante da tela. No vigia, compare o que o transporte recebeu com o que entrou na transcrição. Mensagem recebida que não aparece na transcrição dentro de um prazo curto é alarme, mesmo com o processo vivo.

**Como conferir:** numa sessão de teste, deixe um diálogo de confirmação aberto e envie uma mensagem pelo transporte. O vigia tem que acusar "entrada não chegou" dentro do prazo.

### 60. Texto cinza no campo de entrada é sugestão, não mensagem

**Quando acontece:** a interface do Claude Code desenha no campo de entrada vazio uma sugestão de próxima mensagem, em cinza. Quem lê a tela de outra sessão por captura vê uma frase plausível, no assunto e no jeito de quem costuma escrever, e conclui que é mensagem com o envio perdido. Confirmar o envio ali manda uma frase inventada em nome de alguém.

**O que fazer:** texto visto em campo de entrada não é mensagem de ninguém. A fonte do que uma pessoa disse é o registro do transporte gravado na chegada, não a tela. Antes de agir sobre uma ordem, e principalmente antes de repassá-la a outro agente, confirme que o identificador e o texto existem nesse registro. Nunca confirme envio em campo de sessão alheia.

**Como conferir:** capture a tela de uma sessão ociosa e procure o trecho no registro de mensagens recebidas: se não está lá, não foi dito. Na captura com cores, a sugestão aparece com brilho reduzido.

### 61. Conteúdo sinalizado na conversa trava todos os turnos seguintes

**Quando acontece:** um subagente de revisão de segurança devolve o relatório inteiro à conversa principal. O texto, escrito com vocabulário de ataque para descrever defesas, dispara a proteção do modelo contra uso indevido. Como o conteúdo sinalizado fica na conversa e vai junto em cada turno, toda mensagem nova passa a ser sinalizada, inclusive um simples "está aí?", e a sessão inteira trava.

**O que fazer:** relatório longo de revisão de segurança fica em arquivo; o subagente devolve à conversa principal só o veredito e a lista curta do que corrigir, e quem precisa do detalhe lê o arquivo num subagente. Se travar, volte a um ponto anterior ao primeiro aviso, quando a interface permitir. Se não permitir, abra uma conversa nova levando um resumo do estado, porque mensagem nova na mesma conversa não destrava.

**Como conferir:** depois de uma revisão de segurança, a conversa principal guarda só o resumo e o caminho do arquivo, e a mensagem comum seguinte recebe resposta normal.

### 62. Reinício externo da sessão mata os subagentes em voo

**Quando acontece:** outro operador ou uma rotina de manutenção (atualização, troca de conta, reinício do servidor) reinicia a sessão do agente sem ver o que ela tem em andamento. Cada reinício mata os subagentes em voo, e o trabalho some sem notificação, com cara de defeito do agente.

**O que fazer:** combine uma trava de ocupado: um arquivo que a sessão principal cria antes de despachar qualquer subagente que não pode perder, mesmo um levantamento curto, e apaga só depois da notificação final. Quem reinicia espera enquanto o arquivo existir, com prazo de validade para trava esquecida. Só a sessão principal mexe nessa trava, e o prompt de todo subagente longo diz isso. Peça parciais cedo e, se a transcrição do subagente persiste, retome-o antes de recriar do zero.

**Como conferir:** quando um subagente sumir, compare a hora de início do processo da sessão com a do despacho: sessão mais nova significa reinício. Com a trava presente, um reinício simulado tem que esperar.

### 63. Subagente sem campo description não carrega e some do catálogo

**Quando acontece:** as instruções do projeto mandam delegar certa tarefa a um subagente que não está no catálogo carregado, e a delegação falha com "tipo de agente não encontrado". No Claude Code, a causa comum é o arquivo do agente sem o campo description no cabeçalho, ou sem cabeçalho nenhum (três hífens no meio do corpo não contam). Sem esse campo o agente não carrega, e não há aviso.

**O que fazer:** todo arquivo de agente precisa de cabeçalho válido com name e description; description com dois-pontos vai entre aspas, porque um leitor estrito de yaml reclama mesmo quando a ferramenta tolera. Mantenha o mapa de delegação das instruções em acordo com o catálogo real: agente citado que não carrega é rota quebrada.

**Como conferir:** liste os agentes carregados e compare, nome a nome, com os do mapa de delegação. Cada nome tem que aparecer, e um despacho trivial de teste para cada um tem que rodar sem erro de tipo não encontrado.

### 64. Modelo do subagente se escolhe pelo custo do erro silencioso

**Quando acontece:** todo subagente sai no modelo mais caro, inclusive varredura de arquivo e leitura de log. Quase todo o consumo vem de leitura repetida de contexto por agentes longos, e a cota acaba no meio do dia, derrubando agentes em voo. E quando a cota do modelo padrão esgota, subagente despachado sem modelo explícito herda o padrão e cai no mesmo limite.

**O que fazer:** trabalho mecânico, pesquisa e verificação vão no modelo mais barato; diagnóstico, especificação e texto, no intermediário. O mais caro fica para quando existe uma resposta certa que seria errada de um jeito caro e silencioso (segurança, dinheiro, dado irreversível). Volume não é complexidade. Passe o modelo explicitamente em cada despacho e não troque de modelo com tarefa em voo.

**Como conferir:** no fim do dia, some o consumo por modelo no medidor. Se o caro concentra quase tudo e a maioria das tarefas foi mecânica, a regra não foi aplicada.

### 65. Agendamento feito dentro da sessão do agente morre sem aviso

**Quando acontece:** você usa o agendador de sessão do Claude Code para lembretes e rotinas. Ele não é o cron do sistema: pode sumir num reinício do processo, o recorrente expira sozinho num prazo fixo (sete dias, segundo o contrato da ferramenta) e só dispara com a sessão ociosa. Ocupada, o disparo atrasa ou se perde, sem erro nem log.

**O que fazer:** use esse agendador só para conveniência da própria sessão. Compromisso recorrente vai para o cron do sistema ou para um timer do systemd, que sobrevivem a reinício, e compromisso com prazo fica também num arquivo de pendências, com data e ação. Depois de um reinício, liste os agendamentos antes de recriar, porque recriar às cegas duplica. E confira o fuso: a expressão é lida no fuso local do processo, que pode ser UTC.

**Como conferir:** passado o horário, liste os agendamentos e confirme na transcrição que o disparo aconteceu. Rode `date` e `date -u` na mesma saída para saber o fuso do processo.

### 66. Arquivo que cresce pelo fim lido pelo começo entrega o passado

**Quando acontece:** um arquivo de pendências ou de registro cresce por acréscimo, e o gancho de início de sessão injeta só os primeiros caracteres dele no contexto do agente. O corte pela cabeça entrega a fatia mais velha como estado atual. É pior que não ter registro: a sessão acorda achando que está atualizada e nada dá erro.

**O que fazer:** corte pela ponta onde o arquivo cresce e dê à função um nome que diga qual ponta ela pega. Separe estado de histórico: o estado (o que está aberto agora) é reescrito e tem teto; o histórico é datado, só recebe acréscimo e entra no contexto pela cauda. Faça o gancho avisar alto quando o estado passar do teto.

**Como conferir:** rode o gancho de verdade e procure na saída dele a informação mais nova do arquivo; ela tem que aparecer. Ler o código do gancho não prova nada.

### 67. Memória vetorial com fonte órfã serve regra velha ao agente

**Quando acontece:** o banco de memória do agente guarda trechos de arquivos que não existem mais, ou de uma instalação anterior. A busca semântica continua trazendo essas regras antigas para o contexto, competindo com as instruções atuais, e nada dá erro.

**O que fazer:** inventarie os trechos por arquivo de origem e separe os que não têm fonte viva. Antes de apagar, copie as linhas para uma tabela de backup e remova numa transação que confere a contagem esperada; confirme por uma segunda conexão independente. Liste todas as tabelas que alimentam o contexto, não só a de trechos. Se o indexador reinsere a partir do arquivo, apagar a linha não adianta: corrija ou retire a fonte e reindexe.

**Como conferir:** repita as buscas que traziam a regra velha; ela não pode aparecer, e a regra atual tem que continuar vindo. A tabela de backup tem o mesmo número de linhas que saíram.

### 68. Rascunho aprovado não é o que sai se o envio chama o modelo de novo

**Quando acontece:** um agente gera um rascunho em modo de ensaio, alguém aprova, e o comando de envio real chama o modelo outra vez. Mesmo código e mesmo prompt produzem outro texto, e o destinatário recebe uma versão que ninguém conferiu, plausível a ponto de ninguém notar.

**O que fazer:** antes de aprovar, pergunte se o caminho de envio reusa aquele artefato ou gera outro. Se gera, crie um modo que enfileira exatamente o rascunho aprovado, sem chamar o modelo e sem pular guarda nenhuma. Confira também se o rascunho carrega marca de ensaio: enviado com ela, o envio fecha como teste, ninguém recebe nada e o log parece sucesso.

**Como conferir:** o hash do texto aprovado tem que ser igual ao do texto registrado como enviado. Confirme a chegada no destinatário, não pelo log de quem enviou, e que o artefato enviado não tem mais a marca de ensaio.

### 69. Dois editores automáticos no mesmo fluxo publicado desfazem o trabalho um do outro

**Quando acontece:** um agente e um monitor automático editam o mesmo fluxo publicado sem trava nem registro compartilhado. Cada um corrige o que vê, e um deles faz rollback para um snapshot antigo que ainda tinha o defeito já consertado pelo outro. O defeito volta sem que nenhum dos dois tenha errado sozinho.

**O que fazer:** defina um escritor único; os demais só detectam e avisam. Mantenha trava de edição, orçamento diário de edições e registro de mudanças num lugar que todos leem, de preferência na própria plataforma. Os snapshots ficam onde o escritor alcança, e o rollback consulta o registro para nunca restaurar um defeito já corrigido. No editor do ManyChat, salvar não é publicar: só conte a mudança como aplicada depois de publicada.

**Como conferir:** tente editar com a trava tomada por outro e confirme que a edição é recusada. Depois de cada rollback, rode o teste do defeito antigo: ele tem que continuar corrigido.

### 70. Agente intermediário reescreve o prompt de imagem antes de gerar

**Quando acontece:** você pede imagem a um agente de código, como o Codex, que chama por dentro uma ferramenta de geração. Ele não repassa o seu prompt: reescreve, e pode enfiar justo as palavras que você proibiu ("photorealistic" num rosto, por exemplo). A regra existe no seu arquivo e nunca chega ao gerador.

**O que fazer:** instrua o agente a passar o prompt verbatim e confira no log da sessão que o hash do argumento enviado à ferramenta e o do prompt revisado que o backend devolve batem com o do arquivo. Sem hash batendo, a imagem não sai. Antes de rodar em lote, feche também a leitura: um sandbox que limita escrita e rede ainda pode deixar o agente ler o disco inteiro, segredos incluídos.

**Como conferir:** leia o log da sessão criada depois do comando (filtrando por horário), nunca o mais recente da pasta, que pode ser de outro teste. Um prompt alterado de propósito tem que ser barrado.

### 71. Não abra uma segunda rota para um passo que já está em curso

**Quando acontece:** Alguém avisa que um passo não anda e você monta um caminho alternativo sem perguntar ao agente que já o executava, e que às vezes já tinha contornado o risco que você quer evitar. O responsável fica com duas rotas vivas para o mesmo objetivo e tende a tentar justamente a pior.

**O que fazer:** Antes de criar rota alternativa, mande uma linha ao outro agente perguntando o estado do passo: meio minuto de pergunta custa menos que duas rotas disputando. Se a rota paralela já saiu, cancele-a de forma explícita com o responsável, em vez de deixar as duas vivas. Vale o simétrico: quando você estiver executando, avise o outro agente antes que ele abra frente própria.

**Como conferir:** Liste as instruções pendentes com o responsável: cada objetivo aparece uma única vez, com o agente que o executa. Objetivo que aparece com duas rotas precisa de um cancelamento explícito já enviado para uma delas.

### 72. Dois agentes conferindo um ao outro, com a mesma regra para os dois

**Quando acontece:** Um agente executa e ele mesmo declara pronto, deixando escapar o que fica fora do ponto de vista dele: um caminho suposto que está vazio, uma permissão lida no código que nunca rodou. E quando um segundo agente passa a conferir, a regra que ele cobra do primeiro nem sempre vale para ele.

**O que fazer:** Separe quem executa de quem aprova: o segundo agente confere contra o artefato real (a pasta, o log do banco, a permissão efetiva), nunca contra o relatório. Aplique as regras nos dois sentidos, e quem exige prova de uma autorização também a apresenta quando alega uma. Antes da próxima medição, registre o que espera ver, para o dado servir de teste e não de confirmação.

**Como conferir:** Numa amostra de itens fechados, cada um mostra duas leituras independentes e iguais: o relatório de quem fez e a leitura direta de quem conferiu. Item com uma leitura só volta a aberto.

### 73. Número de mensagem sem o canal aponta para o texto errado

**Quando acontece:** Dois agentes falam com o responsável por bots diferentes, e cada bot numera as próprias mensagens na mesma faixa. Uma ordem citada só pelo número parece âncora verificável; quem confere acha uma mensagem real de outro assunto e conclui que a ordem não existe, ou que diz outra coisa.

**O que fazer:** Toda âncora de ordem carrega o canal junto do número: qual bot, qual conversa ou o caminho do registro onde ela está guardada. Ao receber de outro agente uma referência só com número, assuma que é do canal dele até provar o contrário e peça o trecho citado. Vale para qualquer contador local (chamado, pedido, linha de planilha): sem espaço de nome, dois sistemas colidem em silêncio.

**Como conferir:** Abra as últimas referências a ordens nos seus registros: cada uma tem canal e trecho do texto, e o endereço indicado mostra exatamente aquele trecho. Referência que abre texto diferente do citado é colisão, não ordem inexistente.

### 74. Revisor externo precisa do material inteiro e de categorias explícitas

**Quando acontece:** Você manda código para outro agente revisar, mas ele não enxerga o seu disco e não executa nada. Com pedido vago, resposta curta pode significar ausência de defeito ou que aquilo nem foi olhado, e os achados dele são caminhos deduzidos, não falhas observadas.

**O que fazer:** Mande o material pelo canal, no corpo do pedido ou anexado, nunca um caminho que o revisor não alcança. Peça a postura de derrubar e não de aprovar, liste as categorias em ordem de gravidade e exija "nada encontrado" escrito em cada categoria vazia. Com várias revisões em voo, case a resposta pelo identificador do pedido, nunca pela mais recente, e só leia quando o texto parar de mudar.

**Como conferir:** Cada categoria da resposta traz um achado com a linha citada ou a frase "nada encontrado"; categoria sem nenhum dos dois volta como revisão incompleta. Achado só sobe de nível depois de um teste que reproduz o caminho descrito.

### 75. Canal entre sessões que só entrega num sentido

**Quando acontece:** Duas sessões de agente trocam mensagens por arquivos, mas só um lado acorda quando chega mensagem; o outro só lê quando alguém digita nele. Mandar passa a significar escrito, não entregue, e uma sessão parada fica surda sem acusar erro.

**O que fazer:** Não prometa entrega por esse canal: diga que está escrito e aguardando leitura até vir resposta. Marque o estado no cabeçalho (lido ao abrir, respondido ao tratar), porque a pasta do arquivo não separa não chegou, na fila e tratado. Se vai executar algo irreversível sem esperar, avise que está fazendo agora: perguntar se pode abortar com o agente já rodando é aviso disfarçado de pergunta, e a proteção real é um teste técnico dentro do próprio agente.

**Como conferir:** Liste as mensagens com mais de meia hora sem marca de leitura: cada uma aponta uma sessão surda, que precisa ser acordada, não receber reenvio. Nenhum registro diz entregue sem resposta correspondente do outro lado.

### 76. Tela de login tem três leituras antes de virar tarefa

**Quando acontece:** um agente volta de uma tarefa num painel web dizendo que caiu na tela de login. A leitura apressada escolhe entre estado (está deslogado) e capacidade (não consegue entrar), mas existe uma terceira: política (não faz). Um agente com navegador pode ter a regra de nunca digitar credencial, passar por verificação em duas etapas ou aceitar termos, mesmo com senha salva e mesmo quando alguém garante que basta entrar.

**O que fazer:** antes de despachar, leia os limites declarados do agente executor e não mande tarefa cujo primeiro passo é autenticar: esse passo fica com o responsável humano. Não peça exceção por conveniência. Aberta uma vez, ela vira permanente e acaba a garantia de que o agente nunca viu a senha.

**Como conferir:** nenhuma tarefa da fila despachada começa por login. Quando uma tarefa bater numa tela de login, o relatório diz qual das três leituras vale e mostra a evidência que separa uma da outra.

### 77. Pacote de skills de terceiros se instala provando que só acrescentou

**Quando acontece:** você instala no ambiente do agente um pacote pronto de skills e subagentes. Um arquivo do pacote com o mesmo nome de um seu pode sobrescrevê-lo sem aviso, o instalador pode mexer nas configurações ou registrar um servidor de ferramentas novo, e os opcionais baixam gigabytes. Logo depois, "agente não encontrado" costuma significar que ele não carregou na sessão atual, não que o arquivo falte.

**O que fazer:** antes de instalar, copie as pastas de skills e de agentes e o arquivo de configurações para um backup datado, que também é o caminho de reversão. Instale só o núcleo e deixe os opcionais pesados para quando forem pedidos. Depois compare com o backup e abra uma sessão nova antes de concluir que algo faltou.

**Como conferir:** a comparação lista só arquivos novos: zero apagados, zero modificados, hash das configurações idêntico e nenhum servidor novo registrado. Numa sessão nova, invoque ao menos um agente do pacote e declare no relatório quantos foram testados de quantos.

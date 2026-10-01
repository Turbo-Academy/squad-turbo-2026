# Lições de operação — Servidor, scripts e serviços

Itens: 25

Lições 78 a 102 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 78. Dois defeitos que se anulam parecem sistema saudável

**Quando acontece:** uma guarda de idempotência ("isto já rodou hoje?") procura um arquivo que deixou de ser gerado, então diria "não rodou" todo dia e duplicaria a execução. Ela nunca age porque o agendamento que a chama também está parado. Juntos, os dois defeitos medem igual a um sistema correto em teste de ponta a ponta, e quem religar o agendamento com boa intenção ativa o outro.

**O que fazer:** antes de reanimar um cron, fila, vigia ou integração parada, leia a peça que ele aciona e responda: "se isto voltar a funcionar hoje, o que acontece?". Código que não roda apodrece junto com o formato dos arquivos que lê. Semanas sem queixa não autorizam religar. Para saber se algo falhou, meça a promessa (a entrega saiu?), não só o mecanismo.

**Como conferir:** rode à mão a peça acionada, em ambiente de teste e com os dados atuais, e confirme que ela decide certo nos dois casos: já feito e ainda por fazer.

### 79. Leitura que falha não pode parecer leitura vazia

**Quando acontece:** um script lê um estado (a lista de tarefas agendadas, um arquivo), altera e grava de volta. Se a leitura falha, a saída vem vazia como a de um estado vazio de verdade, e o script grava a base vazia com a mudança, apagando o que existia. Pior: a mensagem de sucesso sai da mesma função que destruiu.

**O que fazer:** diante de qualquer retorno, pergunte que outro estado produziria a mesma saída. Decida pelo código de saída, nunca pelo conteúdo, e aborte no erro. Antes de uma ação destrutiva, exija três desfechos (deu certo, deu errado, não consegui medir) e só aja com a medição bem-sucedida. Audite cada `|| true` seguido de mensagem de ok.

**Como conferir:** force a leitura a falhar (tire a permissão ou aponte para um recurso inexistente) e rode o script. Ele tem que sair com código diferente de zero, dizer que não conseguiu medir e deixar o alvo com o mesmo hash de antes.

### 80. Usuário fixo no contêiner não ganha grupo suplementar

**Quando acontece:** o diretório compartilhado dá leitura a um grupo, o grupo existe, e mesmo assim o processo dentro do contêiner não lê nada. A chave `user` do compose, com uid e gid numéricos, define só o grupo primário, sem grupo suplementar. Se o vigia dessa pasta silencia a saída de erro, "permissão negada" vira "nada encontrado" e o problema se esconde atrás de um heartbeat vivo.

**O que fazer:** declare o grupo extra com `group_add` e confira os grupos reais rodando `id` dentro do contêiner, em vez de deduzir pela permissão do diretório. Em script de vigia, silencie a saída de erro só para um erro esperado e nomeado. Erro de leitura real fica visível e encerra o script com código diferente de zero.

**Como conferir:** a saída de `id` dentro do contêiner lista o grupo, e ler lá dentro um arquivo desse grupo funciona. Depois, tire a permissão: o vigia tem que acusar erro de leitura, nunca "nada encontrado".

### 81. Campo de erro preenchido pelo transporte não diz a causa

**Quando acontece:** um serviço que chama uma ferramenta de linha de comando falha com um motivo de parada de nome plausível, e a investigação persegue o que o nome descreve. Só que o valor é uma constante que a ferramenta carimba em todo erro sintético. A causa pode ser outra, como um teto de tokens de saída gasto inteiro pelo raciocínio do modelo.

**O que fazer:** antes de perseguir um campo de erro, descubra quem escreve aquele campo. Procure o literal no código da biblioteca ou no binário: constante é rótulo, não diagnóstico. Reproduza em ambiente controlado com a saída bruta e verbosa, que mostra o que o modo resumido descarta. Booleano de estado interno com inicialização preguiçosa (armado, inicializado) fala do ciclo de vida do objeto, não da capacidade do recurso.

**Como conferir:** a causa proposta tem que reproduzir o sintoma com a mesma assinatura na saída bruta e, depois de corrigida, fazer o sintoma sumir na mesma reprodução.

### 82. Editar por temporário e mover afrouxa a permissão do arquivo

**Quando acontece:** você edita um arquivo restrito (modo 600) escrevendo num temporário e movendo por cima. O mv troca o inode: fica o temporário, com a permissão da umask (644 sob umask 022), o dono do processo e sem as listas de controle de acesso do original, sem erro nem diferença no conteúdo.

**O que fazer:** reescreva por dentro, redirecionando o temporário para o alvo com cat (preserva o inode), ou aplique chmod explícito logo depois da troca. Mordem igual o install sem opção de modo, a cópia que preserva modo de origem frouxa e o redirecionamento que cria arquivo novo. Arquivo que chega por rename carrega o modo de quem o criou, e só chmod na chegada cobre esse caminho.

**Como conferir:** rode stat antes e depois da edição num alvo descartável 600, sob a umask do serviço: o modo tem que continuar 600. Para achar onde já mordeu, conte os modos por diretório: modos misturados indicam vários escritores sem dono.

### 83. Alvo escolhido por nome parcial pega o processo errado

**Quando acontece:** no tmux, o alvo de `-t` casa por prefixo quando não há nome exato, então um nome curto acha uma sessão de teste que só começa igual. Com `pgrep -f`, a busca por trecho da linha de comando devolve um processo vizinho com o mesmo texto. Nos dois casos o comando responde sucesso e age sobre o alvo errado.

**O que fazer:** use o alvo exato, com `=` antes e dois-pontos depois (`-t =nome:`), em todo comando que mata, confere existência ou envia teclas. Nome de caixa de areia nunca começa com o de uma sessão real, e ela roda num servidor separado (opção `-L`). Processo se escolhe pela relação (o filho direto de quem), não pelo nome.

**Como conferir:** crie uma sessão de teste cujo nome começa com o da real e confirme que o alvo exato não a encontra. Ao ler algo de um processo, inclua uma variável de controle: controle vazio junto com a medida quer dizer "não consegui medir", nunca o negativo.

### 84. Processo destacado com setsid morre com a unidade do systemd

**Quando acontece:** uma unidade oneshot do systemd dispara um processo "destacado" com setsid, nohup ou `&` para agir depois dela. Quando a unidade termina, o systemd, com a opção KillMode no padrão, mata todo processo do cgroup, destacado ou não, e registra sucesso. Nada vai para o log.

**O que fazer:** dispare o trabalho que precisa sobreviver ao fim da unidade por systemd-run (com `--user` no systemd do usuário), que cria uma unidade transitória própria. O setsid cria sessão nova, mas não muda o cgroup, e numa unidade quem decide é o cgroup, não a árvore de processos. Teste o caminho automático no mesmo cgroup em que ele roda: teste pelo caminho manual prova só o manual.

**Como conferir:** numa unidade de teste com as mesmas propriedades da real, dispare as duas versões com uma pausa seguida da gravação de um arquivo-marca: com setsid o arquivo nunca aparece, com systemd-run aparece. Em shell comum ele aparece nas duas: teste fora da unidade não prova nada.

### 85. Argumento no sudoers precisa de escape e validação antes de instalar

**Quando acontece:** você escreve linhas de sudoers com argumento fixo e parte delas reprova na validação. No sudoers a vírgula separa itens de uma lista, os dois-pontos separam especificações e o igual atribui, então argumentos comuns quebram a sintaxe. Um arquivo de inclusão quebrado pode fazer o sudo recusar a configuração inteira da máquina.

**O que fazer:** dentro do argumento, escreva `\,`, `\:` e `\=`; na execução o comando real não leva barra, e o argv tem que casar byte a byte com a linha. Rode `visudo -c -f` no arquivo antes de instalar, nunca depois. Para contar execuções no journal, case no campo COMMAND e no binário, nunca no argumento, que o sudo grava entre aspas quando tem espaço; zero onde deveria haver registro é medição quebrada.

**Como conferir:** como o usuário, cada linha roda com `sudo -n` sem pedir senha, um comando fora da lista é recusado e `sudo -n -l` seguido do comando exato confirma a permissão sem executar nada.

### 86. Espera com read -t lendo do dispositivo nulo volta na hora

**Quando acontece:** o ambiente bloqueia o sleep em primeiro plano e você improvisa a pausa de um laço de espera com `read -t 3` e a entrada redirecionada do dispositivo nulo. Sem nada para ler, o read recebe fim de arquivo e retorna na hora. O laço roda todas as voltas em milissegundos e declara "pendente" sobre algo que nem teve tempo de acontecer.

**O que fazer:** use uma pausa que bloqueia de verdade, como `python3 -c "import time; time.sleep(4)"` ou `timeout 4 tail -f` sobre o dispositivo nulo. O `read -t` só espera quando a entrada fica aberta e sem dados. Faça o laço decidir pela condição real (o arquivo apareceu, o endpoint de saúde respondeu), com prazo medido no relógio, nunca pela contagem de voltas.

**Como conferir:** imprima o horário em segundos antes e depois do laço. Dez voltas de três segundos têm que levar perto de trinta segundos; se terminam em menos de um, a espera não está esperando.

### 87. Heredoc sem aspas executa as crases do texto

**Quando acontece:** você grava um arquivo ou uma mensagem com heredoc no Bash, delimitador sem aspas, e o conteúdo tem crases, cifrão ou `$(...)`. O shell expande tudo antes de gravar: cada trecho entre crases vira comando, gera "command not found" e é trocado por vazio. O arquivo sai sem os termos técnicos e parece íntegro para quem não compara.

**O que fazer:** sempre que o conteúdo tiver crase, cifrão ou parênteses de comando, use o delimitador entre aspas simples (`<<'EOF'`), que desliga toda expansão. Quando precisar interpolar um valor, grave com um marcador fixo e troque depois com sed, sem abrir mão das aspas. Vale para mensagens entre agentes, notas de memória e documentação.

**Como conferir:** depois de gravar, procure no arquivo um termo que estava entre crases e um cifrão literal; os dois têm que estar lá. A saída de erro da gravação tem que vir vazia, sem nenhum "command not found".

### 88. Regra de apagar pela lixeira cita comando que não está instalado

**Quando acontece:** as instruções do agente mandam trocar o rm por trash, para que apagar seja recuperável, mas o comando nunca foi instalado naquela máquina. Quem obedece à risca recebe "command not found" e tende a voltar ao rm.

**O que fazer:** antes de escrever regra que cita ferramenta, confirme com `command -v` em cada ambiente onde ela vale (terminal, cron, serviço). Em muitas distribuições Linux, `gio trash` manda para a lixeira do usuário e, nas versões recentes, `gio trash --restore` desfaz; se falhar numa tarefa agendada, mova para uma pasta de arquivo. Para segredo vale o oposto, porque recuperável é o risco: use `shred -u` e rotacione a credencial, já que em disco de estado sólido o shred não garante a destruição.

**Como conferir:** apague um arquivo descartável pelo comando da regra e confira que ele aparece em `gio trash --list` e volta com o restore. `command -v` tem que devolver um caminho em cada ambiente onde a regra vale.

### 89. Usuário do agente no grupo do Docker, na prática, é root

**Quando acontece:** o usuário que roda o agente, para facilitar diagnóstico, entra no grupo do Docker. Quem fala com o daemon monta a raiz da máquina num contêiner, então é root. Se o agente lê conteúdo de fora (e-mail, web, mensagens), um comando induzido por ele alcança todos os serviços e bancos da máquina.

**O que fazer:** tire o usuário do grupo e libere pelo sudoers só linhas com argumento fixo, como reiniciar um contêiner específico ou ler o log de outro. O resto vira pedido a quem administra, com o comando exato. Quando a linha certa não existe, não contorne: a pressa de resolver é o que a restrição existe para impedir.

**Como conferir:** os grupos do processo do agente em execução, e não só os de um shell novo, não podem incluir o do Docker: processo antigo mantém o grupo até reiniciar. O comando cru do Docker, sem sudo, tem que dar "permission denied", e uma linha liberada com outro argumento é recusada.

### 90. Reiniciar um serviço sem root pela política de restart do systemd

**Quando acontece:** você mudou o código de um serviço de sistema cujo processo roda com o seu usuário. Sem sudo, o reinício pelo systemctl, que exige autenticação interativa, falha. O processo é seu e pode ser encerrado; a dúvida é se ele volta.

**O que fazer:** antes de tudo, leia a propriedade Restart da unidade com o subcomando show do systemctl, que não exige root. Só siga se o valor for always: sem isso, encerrar o processo derruba o serviço. Faça backup do arquivo e checagem de sintaxe, pegue o PID pela propriedade MainPID (busca por nome pode achar um vizinho) e mande SIGTERM; o systemd sobe o serviço de novo, já com o código novo. Tenha o rollback pronto: se não voltar em alguns segundos, restaure o backup e encerre de novo.

**Como conferir:** o PID principal mudou, o estado da unidade é active, o log mostra a linha de início depois do horário do encerramento e nenhum traceback aparece.

### 91. Serviço subido à mão não volta depois do reboot

**Quando acontece:** um contêiner nasce de um comando run avulso do Docker, sem política de restart. Funciona até o primeiro reboot: aí some, e não há arquivo nenhum para recriá-lo igual.

**O que fazer:** todo serviço nasce de um arquivo de compose na pasta do próprio projeto, com restart unless-stopped e versão de imagem fixada, nunca latest. Registre o serviço numa tabela central de projetos na hora de subir. Porta publicada fica presa ao loopback, a menos que o serviço precise de domínio público; aí ele entra na rede do proxy reverso sem publicar porta, e banco de dados nunca entra nessa rede. Ao delegar a subida a outro agente, mande a convenção junto.

**Como conferir:** cada contêiner em execução tem arquivo de compose correspondente e política de restart diferente de "no" (o subcomando inspect do Docker, com formato, mostra as duas coisas). Nenhuma imagem usa latest, e num reboot combinado todos voltam sozinhos.

### 92. Retentativa igual à primeira tentativa repete a mesma falha

**Quando acontece:** um script de subida tenta iniciar um processo e, se ele morre, tenta de novo com os mesmos argumentos. Há condição, segunda tentativa e log, e quem revisa dá por coberto. É a mesma falha duas vezes e, sem teto, vira laço quente que ninguém vê.

**O que fazer:** faça cada degrau mudar algo no ato: outra opção, outro caminho, estado limpo; se só o relógio muda, não é degrau. Ponha teto de tentativas numa camada que o fluxo alcança: a opção StartLimitBurst do systemd nunca conta se o supervisor é um laço infinito que não sai. Depois de algumas mortes rápidas, espere com backoff e avise alguém de fora. Mande o stderr para arquivo antes de consertar, senão o erro evapora no terminal.

**Como conferir:** numa cópia, force a falha do primeiro degrau: o segundo tem que rodar com argumentos diferentes e, com falhas seguidas, o teto tem que disparar o aviso. Com estado são, o fluxo para no primeiro degrau.

### 93. O sandbox do Codex falha onde o kernel restringe user namespace

**Quando acontece:** toda chamada de ferramenta do Codex falha dentro do sandbox, em qualquer modo, com erro do bubblewrap ao configurar o loopback. Em versões recentes do Ubuntu, o parâmetro de kernel apparmor_restrict_unprivileged_userns vem ligado e impede o bubblewrap de criar user namespace. O diagnóstico embutido não detecta, e prompt sem ferramenta funciona, o que engana.

**O que fazer:** com root, crie um perfil do AppArmor só para o binário do bubblewrap que o Codex usa, liberando userns, e recarregue os perfis. Nunca desligue o parâmetro global, que abre a brecha para a máquina inteira, nem use a opção que desliga sandbox e aprovações de uma vez. Sem root, mande o conteúdo dos arquivos pela entrada padrão e diga no prompt que não há ferramentas.

**Como conferir:** rode um exec em sandbox somente leitura pedindo a contagem de linhas de um arquivo; ele tem que executar a ferramenta e voltar com código zero. O parâmetro global tem que continuar ligado.

### 94. MCP do Playwright procura o Chrome do sistema e ignora o Chromium baixado

**Quando acontece:** o servidor MCP do Playwright usa por padrão o canal chrome, num caminho fixo do sistema. Num servidor sem Chrome instalado ele falha ao abrir o navegador, mesmo com o Chromium que o Playwright baixou no cache do usuário.

**O que fazer:** sem root, passe `--executable-path` apontando para esse Chromium; a pasta dele leva o número de build, que muda a cada atualização, então resolva por glob. Mudança na configuração do MCP não vale para o servidor que já está rodando: reinicie a sessão do agente. Se o Chromium então morrer por falta de bibliotecas compartilhadas (libnspr4, libnss3 e outras), instalar as dependências do sistema com o install-deps do Playwright exige root.

**Como conferir:** rode ldd no binário do Chromium e confirme que nenhuma biblioteca aparece como "not found". Depois do reinício, peça ao MCP que abra uma página e tire um snapshot; o erro de canal não pode voltar.

### 95. Firewall externo que ninguém conferiu pode não existir

**Quando acontece:** notas antigas dizem que o provedor de hospedagem tem um firewall externo na frente do servidor, e as decisões de exposição contam com ele. Na conta atual não há firewall nenhum, ou há e não está vinculado à máquina. O ufw sobra como única camada, e o Docker, ao publicar porta de contêiner, grava regras próprias no iptables que passam por cima dele.

**O que fazer:** confirme pela API ou pelo painel do provedor que existe firewall vinculado à máquina e sincronizado. Até lá, porta de serviço fica presa ao loopback ou à rede interna dos contêineres. Ao ativar o firewall externo, mantenha uma segunda sessão SSH aberta para não se trancar fora. Depois, porta pública nova vira regra no firewall do provedor, não só no ufw.

**Como conferir:** de uma máquina de fora, varra as portas do servidor com nmap e compare com a lista permitida; porta extra aberta reprova. No servidor, `ss -tlnp` mostra o que escuta em todas as interfaces.

### 96. Chave de exemplo passa por configurada numa instalação nova

**Quando acontece:** uma instalação nova sobe com o arquivo de ambiente copiado do modelo, e alguma chave ainda é o texto de exemplo. Variável preenchida parece configurada; a falha só aparece na primeira chamada real, como erro 401, às vezes num recurso secundário como a transcrição de áudio. A documentação herdada também promete rotinas agendadas que a instalação nova não trouxe.

**O que fazer:** depois de instalar, teste cada chave com uma chamada autenticada mínima ao provedor dela e procure no arquivo marcadores de exemplo (palavras como "pendente", sinais de menor e maior, chaves duplas). Preenchido não é válido: só a resposta do provedor prova a chave. Compare, item a item, os timers e crons da documentação com os que existem de fato.

**Como conferir:** cada chave responde com sucesso a uma chamada de leitura, a busca por marcadores de exemplo volta vazia e a lista de timers e crons ativos bate com a documentada.

### 97. Webhook com 200 logo após publicar não prova o código novo

**Quando acontece:** você importa e publica um workflow do n8n pela linha de comando, e o webhook responde 200. Em versões com rascunho e versão publicada, importar desativa o workflow, publicar pode não reativá-lo, e o 200 vem da versão em memória até o primeiro pedido real virar 404. Reiniciar após editar só o rascunho também engana: roda o snapshot publicado.

**O que fazer:** siga a sequência completa: importar, publicar a versão nova pelo identificador dela e reiniciar o serviço (o comando de publicação avisa). Se a API do n8n estiver disponível, prefira editar por ela, que costuma dispensar o reinício. Teste com o cabeçalho de autenticação certo: atalho de credencial inválida que devolve texto de espera com 200 parece sucesso.

**Como conferir:** após o reinício, confirme o workflow ativo na versão nova e abra os dados de uma execução real: o nó executado tem o código novo e a resposta vem do nó que trabalha, não de texto de reserva.

### 98. Botão de teste verde com o consumidor da fila na configuração velha

**Quando acontece:** você troca o servidor de envio de e-mail numa plataforma que envia por fila, como o Mautic. O botão de teste funciona porque roda no processo web, que relê a configuração; os envios reais passam pelo consumidor da fila, que carregou a antiga ao subir, falham em silêncio e acabam descartados, enquanto as estatísticas marcam enviado já ao enfileirar.

**O que fazer:** ao mudar a configuração de envio, reinicie os consumidores pelo comando da própria plataforma, sem contar com limpeza de cache. Diante de "o e-mail não chegou", olhe primeiro os processos de fundo (consumidor e agendador). No DNS, ao somar um provedor, edite o registro SPF existente: dois registros SPF no mesmo nome invalidam os dois.

**Como conferir:** o início dos consumidores tem que ser posterior à última modificação da configuração, e o log deles mostra o servidor novo. Teste pelo caminho real, como um formulário, e confirme a chegada na caixa de destino.

### 99. Arquivo único montado no contêiner fica preso na versão antiga

**Quando acontece:** você monta um arquivo de configuração sozinho (não a pasta) num contêiner, edita no host e manda o serviço recarregar (`nginx -s reload`, por exemplo). O comando responde sem erro e nada muda: a montagem de arquivo único prende o inode do momento em que o contêiner subiu, e muitos editores, `git`, `sed -i` e o padrão "grava temporário e renomeia" criam um arquivo novo, que o contêiner não enxerga.

**O que fazer:** depois de editar um arquivo montado sozinho, recrie o contêiner (no compose, `up -d --force-recreate`) em vez de só recarregar. Melhor: monte a pasta que contém o arquivo, porque a montagem de pasta enxerga a troca. Recarga bem-sucedida não prova que a configuração nova foi lida.

**Como conferir:** depois de salvar, calcule o hash do arquivo no host e de dentro do contêiner: têm que ser iguais. Se o inode mostrado pelo `stat` mudou com a edição, o contêiner que já estava de pé não viu a mudança.

### 100. Deploy bloqueado pelo autor do commit parece cache eterno

**Quando acontece:** você faz push num repositório ligado à Vercel e a página não muda. Não há log de build, porque o build nem rodou: se o autor do commit não tem conta ou assento no time, o deployment fica com `readyState` BLOCKED e o alias não muda. De fora parece cache preso: `etag` e `last-modified` iguais e `age` crescendo, mesmo com query anti-cache.

**O que fazer:** commite com a identidade que o time reconhece (`git -c user.name=... -c user.email=...`), escrita no guia que o agente lê antes de commitar. Se o commit já saiu com outro autor, não reescreva o histórico: um `git commit --allow-empty` com a identidade autorizada dispara deployment novo do mesmo conteúdo, sem `--amend` nem force-push.

**Como conferir:** com a página parada depois do push, confirme que o commit está no ramo remoto e liste os deployments: o bloqueado mostra o motivo ligado ao autor. O seguinte tem que chegar ao estado READY, com o alias mudando.

### 101. Conector sem a operação não prova que a credencial não pode

**Quando acontece:** o conector MCP de um provedor não tem a ferramenta que você precisa, como editar registros DNS, e o agente conclui que "não dá". A credencial que autentica esse conector pode ter o escopo, e a API REST do provedor faz o que o conector omite.

**O que fazer:** confira o escopo real com uma chamada de leitura na API, passando o token por configuração lida do stdin (no curl, `-K -`), nunca em argumento de comando nem em log. Na API crua não há proteção de conector: antes de mexer no SPF, ache o TXT `v=spf1` que já existe e edite esse com PATCH, porque dois registros de SPF no mesmo domínio invalidam os dois e o e-mail passa a cair em spam.

**Como conferir:** a chamada de leitura volta 200 no recurso. Depois da mudança, a contagem de registros da zona sobe só pelo número de registros novos, e a busca por `v=spf1` devolve exatamente um.

### 102. Redundância com a mesma credencial não é redundância

**Quando acontece:** Você dá acesso total a dois agentes numa plataforma (anúncios, pagamentos, nuvem) para que um continue se o outro cair. Se os dois usam a mesma chave, revogar a credencial ou desativar o usuário de sistema derruba os dois juntos, que é o cenário que a redundância devia cobrir. Junto costuma aparecer uma restrição escrita só em comentário no arquivo de configuração, nunca aplicada na plataforma.

**O que fazer:** Para redundância real, dê a cada agente uma credencial própria, de preferência com usuários de sistema distintos, e registre quem mudou o quê. Não confie em restrição descrita em comentário: leia a permissão efetiva na plataforma, conta por conta. Enquanto houver chave única, trate a redundância como inexistente no plano de continuidade.

**Como conferir:** Num ambiente de teste, revogue a credencial de um agente e confirme que o outro segue operando. Consulte na plataforma as tarefas permitidas de cada usuário em cada conta e compare com o comentário: diferença é restrição que nunca existiu.

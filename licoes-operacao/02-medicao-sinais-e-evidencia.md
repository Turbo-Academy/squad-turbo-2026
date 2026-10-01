# Lições de operação — Medição, sinais e evidência

Itens: 21

Lições 16 a 36 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 16. Medição de permissão sem caso negativo só confirma a expectativa

**Quando acontece:** você mede se várias contas têm certa permissão e todas respondem que sim. Sem um caso que responda não pela mesma rota, a contagem não separa "tem permissão" de "o provedor diz sim para todo mundo". E campo vazio ou código de falha de conexão acabam lidos como "não tem", quando significam "não calculado" ou "a conexão nem chegou".

**O que fazer:** antes de afirmar, procure na mesma rota um caso que devolva o oposto; se não houver, a medição não discrimina. Trate campo vazio como pergunta, nunca como resposta. Exercite todo comparador nos dois sentidos: em `cmd < arquivo` rodado dentro de um contêiner (via exec do Docker) ou por ssh, o redirecionamento é resolvido pelo shell de fora, e os dois lados da comparação leem o mesmo arquivo.

**Como conferir:** o resultado traz ao menos um negativo conhecido, obtido pela mesma consulta. Para o comparador, monte uma divergência de propósito e confirme que ele a acusa.

### 17. Bancada sem trava de produção tem viés de sinal conhecido

**Quando acontece:** você compara duas versões de um prompt numa bancada de replay. A candidata corta instruções que em produção uma trava no código já garante, mas o replay não executa essa trava. Ela luta sem a proteção que teria no ar e sempre apanha, então o placar dela é piso, não teto.

**O que fazer:** antes de ler o placar, liste as travas de produção que o caminho de teste não executa e para que lado cada ausência empurra. Publique o sinal do viés junto com o número: resultado apertado a favor da mudança vale mais do que parece, resultado contra vale menos. Meça também a grandeza que a mudança deveria mover: cortar texto do prompt pode não encurtar a resposta.

**Como conferir:** o relatório traz as travas ausentes com o sinal do viés de cada uma e a medida direta da grandeza alvo (por exemplo, o comprimento mediano da resposta) nas duas versões.

### 18. Não achei só vale junto com a identidade e o alcance da busca

**Quando acontece:** uma consulta volta vazia e o relatório diz que o objeto não existe. A ferramenta dá a mesma resposta para causas opostas: o diretório existe e o seu usuário não pode listar, o recurso é privado e devolve o mesmo 404 de um id inventado, a unidade vive no escopo de usuário e a consulta olhou o de sistema, ou o texto está lá com outra grafia.

**O que fazer:** ao afirmar ausência, diga com que identidade, permissão, escopo e forma de busca você olhou: "não achei rodando como usuário comum" é verdadeiro, "não existe" não é. Procure o conceito em várias grafias antes de concluir. Ausência relatada por outro agente só segue adiante com esse qualificador.

**Como conferir:** rode a mesma consulta, com a mesma identidade, contra algo que você sabe que existe. Se o controle não aparecer, o zero significa falta de alcance; repita com identidade privilegiada ou no outro escopo.

### 19. Falha de coleta não pode virar igualdade entre amostras

**Quando acontece:** um vigia compara duas amostras (tela, hash, contador) e age quando elas saem idênticas. Se a coleta falha e devolve texto vazio, o hash do vazio é sempre o mesmo, e duas falhas seguidas viram "nada mudou": a proteção derruba o serviço saudável. Um comentário pedindo cuidado não segura esse caminho.

**O que fazer:** pergunte qual conclusão seria catastrófica se tirada por engano e qual valor de falha a produziria sozinho: zero, vazio, nulo, lista vazia, hash do vazio. Dê à falha um tipo próprio que nunca compara como igual, como uma sentinela cuja igualdade devolve sempre falso, e nenhum caminho do código conclui "igual" a partir de duas falhas. Separe histórico vazio (resposta legítima) de histórico ilegível (sentinela) e exija que uma ausência sobreviva a duas rodadas antes de agir.

**Como conferir:** quebre o coletor para devolver vazio e deixe todos os outros sinais apontando para "agir". O veredito tem que sair "diagnóstico indisponível", sem nenhuma ação tomada.

### 20. Concordância entre rotas que leem a mesma origem não confirma nada

**Quando acontece:** você afirma algo apoiado em duas rotas que parecem independentes, como um conector e uma página pública, e as duas concordam. Só que as duas leem o mesmo catálogo, que atrasa em relação ao painel de quem publica. A concordância apenas repete uma leitura e ainda passa por verificação dupla.

**O que fazer:** antes de chamar uma verificação de dupla, siga cada rota até a origem dos dados. Rota independente tem origem diferente, não só interface diferente: painel do criador contra catálogo público, banco contra interface de programação, medição externa contra log interno. Catálogo público é cache com atraso e nunca prova que algo deixou de ser feito.

**Como conferir:** desenhe a cadeia de cada rota até o sistema de onde ela lê; se as duas terminam no mesmo lugar, conte uma. Faça uma mudança conhecida na fonte primária: se as duas rotas atrasam juntas, elas leem o mesmo cache.

### 21. Antes de julgar o número, nomeie para que a coisa existe

**Quando acontece:** um relatório condena uma campanha de captação pelo retorno em vendas, quando o trabalho dela é trazer contatos a um custo aceitável. O dado está certo, a régua está errada, e o número dá cara de rigor à conclusão. Um teste de saúde que mede se a interface do fornecedor responde, enquanto o trabalho real falha, tem a mesma forma.

**O que fazer:** antes do veredito, escreva o propósito declarado do que está sendo medido (captação, aquecimento, remarketing, venda) e só então escolha a métrica. Se o propósito não estiver claro, pergunte em vez de assumir o mais comum. Confirme o que cada campo significa antes de somá-lo. Quando um teste passar, pergunte se ele teria acusado o defeito que você teme.

**Como conferir:** rode a métrica escolhida contra um caso conhecido que falha no propósito: ela tem que acusar esse caso. Se continuar verde, ela mede o vizinho do alvo.

### 22. Contagem sobre autocompletar mede a lista de sementes

**Quando acontece:** um ranking de temas é montado contando termos nas sugestões do autocompletar de um buscador, a partir de uma lista de sementes. A primeira sugestão de uma semente costuma ser ela mesma, e toda completação contém o texto dela. O tema com mais sementes sobe no ranking só por isso: o relatório parece medir demanda e mede a entrada.

**O que fazer:** conte sinal de demanda só nas sementes neutras (o termo genérico, o termo seguido de cada letra, os prefixos de pergunta) e descarte o eco da semente. Para volume de busca, use uma ferramenta de planejamento de palavras-chave. Relatório de outro agente que cita posição e número de sementes se confere por amostra no dado bruto.

**Como conferir:** conte quantas sementes cada tema do topo recebeu: se a ordem do ranking acompanha essa contagem, o ranking mede a lista. Refaça só com sementes neutras, sem o eco, e compare três itens do topo com o dado bruto.

### 23. Dólar estimado numa assinatura mede cota, não fatura

**Quando acontece:** a linha de comando do agente devolve um custo em dólar calculado como se o uso fosse cobrado por token. Em plano de assinatura, nada disso vira fatura. O número mede certo e nomeia errado: apresentado como dinheiro, leva quem decide a escolher sobre uma conta que não existe.

**O que fazer:** ao falar de gasto com quem decide, use percentual da janela de cota e hora de renovação; o dólar entra só como grandeza relativa de consumo. Antes de montar uma decisão sobre custo, confira se ela é sobre dinheiro ou sobre cota, porque as opções mudam. Descubra também quais serviços de produção comem da mesma cota: gastar até acabar na sessão de trabalho pode calar um atendimento automático da mesma conta.

**Como conferir:** o relatório de consumo mostra percentual e hora de renovação, sem cifra de moeda. A lista de serviços que dividem a conta existe por escrito, cada um com plano para quando a cota acabar.

### 24. Medidor calibrado com leitura de outra conta erra em silêncio

**Quando acontece:** um estimador local de consumo é calibrado contra a leitura oficial de outra conta, sem ninguém notar. O teto fica com numerador de uma fonte e denominador de outra, e a data de renovação sai errada. Resultado: número plausível sobre a janela errada e um alarme que nunca cruza o limiar, indistinguível de "está tudo bem".

**O que fazer:** calibre só com leitura da mesma conta e do mesmo escopo que o estimador soma. Quando dois medidores discordam, não desempate pelo mais razoável: procure qual usa a janela errada, porque quem erra a renovação erra tudo que se calcula sobre ela. Consertar só a data, sem recalibrar o teto, mantém o erro.

**Como conferir:** compare no mesmo instante o estimador, a leitura oficial e uma terceira fonte; as três têm que concordar no percentual e na data de renovação. Se o consumo já passava do limiar, a primeira leitura depois do conserto tem que disparar o alarme antes mudo.

### 25. Criado, enviado ou concedido ainda não é aplicado

**Quando acontece:** você envia um convite, concede um acesso ou troca uma configuração, e a chamada responde sucesso. Mas quem deveria usar não enxerga ou a troca não persistiu: um `success: true` diz que o pedido foi aceito, não aplicado.

**O que fazer:** meça do lado de quem recebe, nunca de quem concedeu: aparece na lista do destinatário, abre, com quais permissões? Prefira reler o objeto ao retorno da chamada e, quando der, faça a prova sair da própria tarefa (aceitar um convite só funciona na conta certa, e o aceite vira a prova). Campo que descreve permissão é alegação: o de um repositório pode mostrar o papel da conta, não o recorte de um token de escopo fino.

**Como conferir:** releia o objeto e compare com o valor pedido. Para permissão, tente a operação real e, na mesma rota, rode uma credencial que pode com corpo inválido de propósito: ela devolve 422, então o seu 403 é recusa de permissão, não pedido malformado.

### 26. Monitor desligado deixa um retrato velho com cara de presente

**Quando acontece:** alguém desliga um monitor que vigiava fluxos ou serviços, ele para de avisar e ninguém nota que o alarme sumiu. Os arquivos de estado dele continuam no disco com a última foto, e quem os lê depois diagnostica o presente com dados velhos.

**O que fazer:** ao desligar, registre quando e marque no próprio estado que ele parou, para que toda leitura posterior conte como histórico. Ponha no lugar um sensor barato tirado de um dado que o sistema já grava, como a proporção de mensagens recebidas sem conteúdo contra as com conteúdo, que sobe quando a entrega falha mas o sistema segue sendo acionado.

**Como conferir:** antes de usar um arquivo de estado, compare a hora da última escrita com o intervalo do monitor: mais velho que um ciclo é retrato velho. O sensor substituto é uma consulta de segundos com a proporção por dia, que tem que virar depois de um conserto.

### 27. Conversa de conta de teste lida como se fosse de cliente real

**Quando acontece:** a equipe testa um fluxo de mensagens com uma conta secundária própria e manda respostas erráticas de propósito. Quem faz o diagnóstico lê as conversas, trata aquela conta como público real e propõe mudanças para um comportamento que só o teste produziu.

**O que fazer:** mantenha uma lista das contas de teste da equipe e tire essas contas de toda amostra de diagnóstico e de toda métrica. Diante de uma conversa estranha, pergunte primeiro se o remetente é de teste. Use a conta de teste onde ela serve: como alvo do teste de ponta a ponta, com alguém da equipe conferindo a entrega nela.

**Como conferir:** cruze os remetentes da amostra de diagnóstico com a lista de contas de teste: a interseção tem que ser vazia. Nos painéis de conversão, compare o número com e sem essas contas; se muda, falta o filtro.

### 28. Visitar link de rastreio para conferir conta clique e suja a métrica

**Quando acontece:** você, ou um subagente, abre um link curto, de indicação ou de campanha para ver se funciona. Cada visita conta clique, e o número que mede interesse sobe com tráfego da própria equipe, sem sinal disso. Alguns encurtadores também respondem 200 e redirecionam em link expirado, então visitar nem prova que ele está vivo.

**O que fazer:** confira link que conta acesso pela API de listagem do serviço, nunca visitando, e diga isso a quem mandar testar de fora um link de compra ou de indicação. Ao classificar um comando como só leitura, pergunte se ele muda estado que outra pessoa observa (contador, visto por último, marcado como lido): se muda, é escrita e leva a mesma trava das escritas.

**Como conferir:** leia o contador pela API antes e depois da conferência: ele fica igual. Se o link está ativo, quem diz é o status de expiração na listagem, não a resposta HTTP.

### 29. Verificador de tag que aceita qualquer contêiner aprova a instalação errada

**Quando acontece:** você instala um contêiner do gerenciador de tags num site que já tinha outro, de uma agência antiga, e confere procurando o trecho genérico do snippet. O verificador passa pelo contêiner velho, ou a raiz do domínio responde 301 sem corpo e a checagem mede outra página. E a extensão de rede do navegador pode acusar erro falso na coleta.

**O que fazer:** exija o ID exato do contêiner nas duas partes do snippet (o script no head e o noscript no body) e faça o verificador acusar ID diferente, em vez de ignorar. Não siga redirecionamento: meça uma URL que responde 200. Mantenha o contêiner antigo ao lado até saber se conversões de anúncio dependem dele.

**Como conferir:** rode o verificador numa página que só tem o contêiner antigo: tem que reprovar. A prova de que o dado chega é o seu evento aparecendo na própria ferramenta de análise, não o painel de rede.

### 30. Evento de teste vindo de navegador automatizado é aceito e descartado

**Quando acontece:** você prova uma ferramenta de análise web com Playwright ou Chromium headless. A requisição do evento volta 202 e nada é contado: o script tem guarda contra robô (`navigator.webdriver`) e o servidor aceita o evento de user agent headless e o descarta, avisando só num cabeçalho de resposta (no Plausible, `x-plausible-dropped`). O painel em tempo real também engana, porque pode depender de uma aba visível.

**O que fazer:** para o teste contar, use user agent de navegador real e tire a marca de automação (no Chromium, `--disable-blink-features=AutomationControlled`). Leia os cabeçalhos da resposta, não só o status, e marque cada teste com um caminho único que não existe no tráfego real.

**Como conferir:** consulte a contagem desse caminho na base de eventos da ferramenta antes e depois do teste: vazia antes, um evento depois. Se o cabeçalho de descarte aparecer, o teste não provou nada.

### 31. Registro de verificação no DNS não diz de quem é a propriedade

**Quando acontece:** você herda um domínio, vê um TXT `google-site-verification` e conclui que o console de pesquisa do Google já está configurado. O registro só prova que alguma conta verificou o domínio: pode ser de uma agência ou de uma conta antiga, enquanto a conta que precisa do acesso não tem propriedade nenhuma.

**O que fazer:** entre no console com a conta que vai usar os dados e veja se a propriedade existe ali. Se não existir, crie uma propriedade de domínio e verifique com um registro TXT novo, sem apagar o antigo, anotando no comentário do registro de quem ele é e como desfazer. O TXT antigo só sai depois que se souber a quem pertence, porque apagá-lo pode cortar o acesso de quem ainda depende dele.

**Como conferir:** a propriedade aparece como verificada na lista da conta certa, e os dois registros continuam respondendo numa consulta de DNS feita de fora.

### 32. Alvo composto conferido num eixo só parece cumprido

**Quando acontece:** o alvo vem empacotado num valor só (uma cor em hex, taxa com janela, latência com percentil, faixa com piso e teto) e a verificação mede uma componente. Esse eixo melhora de verdade a cada rodada e o defeito fica no eixo que ninguém mede. Pior: uma invariante exigida como garantia, como preservar o brilho, pode ser justamente o que impede a correção.

**O que fazer:** decomponha o alvo em eixos e escreva cada um como critério separado antes de começar. Meça todos antes e depois, na mesma saída, com o alvo ao lado. Pergunte se as componentes concordam entre si e se alguma propriedade exigida fecha o caminho do conserto. Ao corrigir o eixo que faltava, prove que os outros continuam passando.

**Como conferir:** o relatório lista cada eixo com valor medido, alvo e veredito, sem eixo faltando. Se um eixo ficou parado por várias rodadas enquanto outro melhorava, revise as invariantes antes de apertar de novo.

### 33. Corrigir um fato é outra afirmação e também precisa de medida

**Quando acontece:** Você dá ao responsável uma informação certa, vê um dado parecido vindo de outra conta ou de outro agente e corrige a sua resposta com ele. Os casos não eram o mesmo (contas diferentes, prazos diferentes), e a correção troca o certo pelo errado.

**O que fazer:** Antes de corrigir número ou data, meça na fonte da sua própria conta; dado de outra conta vale só para ela. Sem medida, diga que não mediu em vez de trocar a resposta, e depois de corrigir varra os registros onde o erro ficou. Ao delegar um conserto, acrescente que, se a medida depois não mudar, o agente volta e diz, porque a prova é o sintoma sumir e não o diff bater com o pedido.

**Como conferir:** Toda correção enviada cita a medida que a sustenta, com fonte e horário. Numa tarefa delegada, o relatório traz o sintoma medido antes e depois; se os dois são iguais, a tarefa não está feita, mesmo com a instrução cumprida à risca.

### 34. Qual conta está logada em qual máquina se lê na configuração

**Quando acontece:** Alguém comenta de passagem que a sua conta está logada em certa máquina e você registra como fato. Em cima disso você monta um alerta de risco com o alvo trocado: a conta daquela máquina era outra, usada por outro agente.

**O que fazer:** Afirmação sobre qual conta ou credencial está em qual máquina se mede no arquivo de configuração ou no cofre de credenciais daquela máquina, nunca se deduz de uma frase. Antes de emitir um alerta, confirme quem corre o risco: qual conta seria afetada e se a ferramenta perigosa está instalada ali. Quando outro agente trouxer uma premissa assim, devolva a pergunta sobre ser a mesma conta ou outra, em vez de construir em cima.

**Como conferir:** Para cada máquina onde agentes rodam existe um registro da conta autenticada, lido da configuração ou do cofre local, com a data da leitura. Alerta de credencial só sai citando essa leitura; sem ela, volta como hipótese.

### 35. Registro de que algo não funciona precisa de prazo de validade

**Quando acontece:** Você mede que uma integração não aparece no ambiente do agente e registra que ela não funciona ali. A medida estava certa naquele dia, mas a conclusão fica permanente e, dias depois, vira recomendação errada quando a capacidade já existe.

**O que fazer:** Todo registro que afirma ausência de capacidade leva a data da medida e é medido de novo antes de virar resposta. Prove a capacidade chamando de verdade (uma busca que devolve dado real), não pela presença na lista de ferramentas. Se a rota nova autentica com a conta de uma pessoa e não com conta de serviço, o erro do agente sai com o nome dela: use lixeira em vez de apagar e avise antes de qualquer operação em lote.

**Como conferir:** Antes de responder que algo não está disponível, rode a chamada mais simples da integração e anexe o resultado à resposta. Nenhum registro de ausência sem data é citado como fato.

### 36. Avaliar um substituto começa pelo que roda de verdade

**Quando acontece:** pedem para avaliar uma ferramenta que substituiria um componente, como o motor de voz de um bot. A documentação diz qual é o componente atual, mas o código pode chamar outro, e o reserva pode ser uma função vazia ou código morto depois de um return: quando o primário falha, o sistema degrada (a voz vira texto) sem aviso. E o candidato que o repositório apresenta como viável pode ser lento demais no seu processador sem GPU.

**O que fazer:** antes de comparar, confirme no código e no log qual provedor atende cada pedido e force o primário a falhar para ver o reserva agir. Depois rode o candidato no seu hardware medindo a grandeza que decide, como segundos de processamento por segundo de áudio, com o serviço frio e aquecido.

**Como conferir:** com o primário bloqueado, a saída vem do reserva e não degrada. A decisão cita a medida feita na sua máquina, não a promessa do repositório.

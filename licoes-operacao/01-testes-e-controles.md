# Lições de operação — Testes e controles

Itens: 15

Lições 1 a 15 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 1. Teste de conserto só vale depois de reprovar o defeito

**Quando acontece:** você conserta um defeito, escreve o teste e ele passa. Esse verde não distingue "o conserto funciona" de "o teste nem olha para o defeito". Quando duas proteções cobrem o mesmo ponto, uma pode esconder a ausência da outra, e o teste passa pela proteção errada.

**O que fazer:** reintroduza cada defeito numa cópia real do código e exija que o teste falhe; se ele passar, o suspeito é o teste, não o conserto. Para proteções sobrepostas, escreva um caso que só a primeira pega e outro que só a segunda pega. No rodador de mutação, conte como detectado apenas o mutante derrubado por uma asserção: erro de importação também sai com código diferente de zero e não prova nada.

**Como conferir:** o relatório de mutação lista, para cada defeito reintroduzido, quais testes ficaram verdes com ele. Monte de propósito um mutante que quebra na importação: o rodador tem que classificá-lo como erro, nunca como detectado.

### 2. Asserção copiada da saída observada protege o defeito

**Quando acontece:** a expectativa do teste nasce de observar o sistema rodando, e o sistema já tinha o defeito. O sintoma vira contrato sem ninguém decidir, o teste fica verde e passa a trabalhar contra o conserto: quem arruma o código vê a suíte quebrar e conclui que estragou algo.

**O que fazer:** para cada asserção, pergunte se ela descreve o que o sistema faz ou o que deve fazer, e confirme na fonte de verdade (a regra escrita, o caso real). Lista de frases obrigatórias também nasce da especificação, nunca da peça pronta. Ao consertar, procure antes quem já depende do defeito e registre o motivo ao lado de cada expectativa trocada. A correção que uma trava sugere passa pela própria trava.

**Como conferir:** aplique o conserto e justifique cada teste que ficar vermelho apontando para a regra, não para a saída antiga. Rode a sugestão automática da ferramenta contra a mesma ferramenta: ela tem que passar.

### 3. Rode o conserto contra o caso conhecido antes de instalar

**Quando acontece:** uma correção de filtro, métrica ou alerta é aprovada e vai direto para a implementação, porque o que já foi decidido ninguém testa. Se o filtro esconde justamente o caso real que deveria mostrar, o painel fica mais limpo, que era a promessa: o sucesso aparente é o próprio sintoma.

**O que fazer:** antes de implementar, rode a mudança contra o caso conhecido que ela precisa pegar e responda: "que caso real esta mudança deixaria de mostrar?". Sem caso conhecido, esse é o primeiro problema; e filtro que nunca esconde nada também não filtra nada. A aprovação não transfere a obrigação de testar. Ao comparar produzido e esperado, confira de onde veio o esperado: se foi gerado ou ajustado durante o trabalho, é cópia, não referência.

**Como conferir:** o caso conhecido aparece na saída da versão nova, com o registro da rodada anexado à mudança. A referência vem de fonte anterior ao trabalho, com hash tirado antes de qualquer edição.

### 4. Dado que entra por outra porta testa a função, não o caminho

**Quando acontece:** o sintoma é ausência (zero atribuído, fila vazia) e o código tem mesmo um defeito. Você busca dados por fora, a função consertada acerta, mas o dado real nunca chegava por ali. "O código não lê" e "não chega nada" dão o mesmo zero, e o conserto que funciona ainda confirma a hipótese errada.

**O que fazer:** diante de ausência, pergunte primeiro se o dado chegou e só depois se o código o lê: olhe a tabela de entrada antes da de saída. Dado buscado direto no provedor, semente de banco, payload colado à mão e chamada direta de módulo provam só a função. Prova de caminho é um registro que entrou sozinho, pela rota de produção, e apareceu do outro lado.

**Como conferir:** conte os registros que chegaram pela rota real no período; com zero, a conclusão vira "não medido", não "não funciona". Depois acompanhe um evento real até o fim do fluxo.

### 5. Teste que quebra uma proteção tem que deixá-la inteira no fim

**Quando acontece:** para provar que um alarme dispara, o teste coloca a proteção em estado de falha, por exemplo com um arquivo que cega o canário de uma trava de segredos. A tarefa termina e o arquivo fica. Se a trava deixa tudo passar quando está cega, o teste provou o alarme e desligou a proteção no mesmo ato.

**O que fazer:** monte o desfazer junto com o fazer, no mesmo bloco (try com finally, trap no shell), nunca como passo posterior, e termine declarando o estado medido do sistema. Se a cópia quebrada precisa ficar como controle de uma medição, marque-a por dentro apontando para a versão boa, porque quem abre um arquivo não lê o nome da pasta.

**Como conferir:** depois do teste, rode a proteção contra uma entrada que ela deve barrar e veja o bloqueio acontecer. Liste os artefatos que o teste criou e confirme que cada um foi removido ou está marcado como controle.

### 6. Teste com remetente igual ao destinatário não vê erro de endereço

**Quando acontece:** um canal com vários participantes (ponte entre agentes, fila, webhook) é testado de ponta a ponta com a mesma identidade dos dois lados e passa. Com um terceiro, a resposta sai assinada pelo remetente errado e aponta para o identificador errado: no laço fechado o campo errado coincide com o certo.

**O que fazer:** antes de dar o canal como fechado, faça uma rodada com um remetente real diferente de quem recebe e confira assinatura, destino e referência da resposta. Meça também durante o processamento, não só antes e depois, porque é ali que um sinal de vida pode congelar. Instrução que precisa ser literal vai escrita campo a campo: "mesmo cabeçalho" pode virar "copie o recebido".

**Como conferir:** envie de uma terceira identidade e confira que a resposta traz quem respondeu como remetente e o identificador da mensagem original como referência. Leia o sinal de vida no meio de um processamento longo: ele tem que avançar.

### 7. Controle positivo precisa ter a forma da entrada real

**Quando acontece:** um detector de nomes exige inicial maiúscula, a entrada vem toda em minúscula e o controle positivo também foi escrito com maiúscula. O controle passa, o detector nunca dispara e "zero encontrados" fica igual a "zero existem". Ao lado, uma régua que conta o que devia permanecer responde se as restaurações sobreviveram, não se algo escapou.

**O que fazer:** plante o controle positivo na forma da entrada real: minúscula se ela é minúscula, com acento se tem acento, no meio do texto, num subdiretório profundo se a busca precisa descer. Escreva literalmente a pergunta que cada régua responde; "preservou o que devia" não substitui "não deixou passar nada". Se a comparação normaliza caixa ou acento, aplique a mesma transformação aos dois lados.

**Como conferir:** rode o detector sobre um trecho real da entrada com um alvo plantado na forma dela e veja o acerto. Repita com um nome acentuado passado como termo extra: ele tem que ser encontrado.

### 8. Vermelho logo após uma trava nova pode ser a trava acertando

**Quando acontece:** alguém instala uma trava de modo de teste, que impede a suíte de chamar serviços reais, e um teste passa a falhar. O diagnóstico fácil é contaminação entre testes, e o conserto remove a linha que armava a proteção, desligando o alarme certo com justificativa escrita. Se a trava arma só num modo de execução, a suíte fica verde do jeito que todo mundo roda.

**O que fazer:** investigue o vermelho como acerto da trava antes de tratá-lo como defeito do teste. Arme a trava no processo, num módulo que as próprias proteções importam, não no arquivo de inicialização do pacote, que só alguns modos alcançam. Rode a matriz de modos do unittest do Python: descoberta automática, módulo pelo nome e arquivo executado direto.

**Como conferir:** nos três modos a trava aparece armada e nenhuma requisição real é montada. Numa cópia, desarme a trava de propósito e confirme que a requisição real passa a ser montada.

### 9. Rodador próprio pode derrubar a trava que protege a suíte

**Quando acontece:** a trava que impede a suíte de tocar serviços reais arma por inferência sobre o processo principal: só liga se quem roda for o executor de testes esperado. Um gatilho, vigia ou coletor próprio que dirige a suíte por fora escapa dessa inferência, e a proteção cai sem uma linha de erro. Se nada de ruim aconteceu, pode ter sido acaso.

**O que fazer:** faça o rodador perguntar ao processo se a contenção está armada e recusar quando não estiver ou quando não souber. Recusar é obrigatório porque os custos são assimétricos: não rodar custa nada, rodar solto escreve em conta real. Variável de ambiente escrita pelo rodador não substitui essa pergunta. Se o dano possível cai em algo fotografável (arquivo, campo, contador, listagem), registre o alvo antes e depois.

**Como conferir:** numa cópia com a trava desarmada, o rodador se recusa a começar. A foto do alvo (data de modificação, tamanho, hash) antes e depois da rodada sai idêntica.

### 10. Bytecode em cache pode rodar o código que você já restaurou

**Quando acontece:** num teste de mutação, você troca uma palavra por outra de mesmo comprimento, roda a suíte e restaura o arquivo; hash e diff dizem idêntico, mas a suíte continua falhando. O Python aceita o cache compilado quando tamanho e data de modificação do fonte batem com os registrados, sem olhar o conteúdo. Se a cópia preserva a data, ou tudo cabe no mesmo segundo, o bytecode sabotado segue em uso.

**O que fazer:** depois de restaurar ou trocar código Python numa bancada, apague as pastas `__pycache__` antes de rodar de novo, ou rode desde uma árvore limpa com `PYTHONDONTWRITEBYTECODE=1`. Se o hash do fonte bate e o comportamento não, suspeite do cache antes do teste.

**Como conferir:** gere um mutante de mesmo tamanho e mesma data do original, rode, restaure mantendo a data e rode de novo. Sem limpar o cache a suíte segue o código sabotado; limpando, volta ao verde.

### 11. Conferência escrita no procedimento que nunca chega a rodar

**Quando acontece:** o passo baixa um arquivo e confere o hash, mas o endereço está errado e o passo falha antes da conferência. O hash escrito é o certo, e isso convence quem revisa, porque se lê a conferência, não o caminho até ela. O mesmo vale para controle positivo que não pode passar por construção e para lista branca que nenhuma linha consulta.

**O que fazer:** para cada passo que confere algo, pergunte se a conferência já rodou e como você saberia se ela não rodasse. Monte o endereço com a mesma variável que fixa a versão, para que endereço e hash não divirjam. Trava declarada precisa de um teste que falhe quando ela é removida.

**Como conferir:** entregue ao passo uma entrada que só aquela conferência pega (o arquivo certo com um byte trocado) e veja a recusa sair da própria conferência, não de um erro anterior. Para uma lista branca, remova a lista: algum teste tem que ficar vermelho.

### 12. Cobertura do índice não prova que a busca devolve o documento

**Quando acontece:** você corrige a ingestão de uma base de conhecimento e a cobertura sobe para quase tudo, mas esse número mede o que entrou no índice, não o que sai na consulta. Se o mesmo ensinamento já existe em outros documentos indexados, eles ganham por margem pequena e o documento novo nunca aparece entre os primeiros. Indexar mais do mesmo só cria concorrentes.

**O que fazer:** inclua no aceite uma consulta de resposta conhecida para cada documento novo e verifique se aquele documento volta, não se volta algo relevante. Cobertura, contagem de pedaços e similaridade média não substituem essa consulta. Quando o documento não voltar, investigue primeiro quem ganhou dele. Leia também alguns pedaços: corte no meio de frase não aparece em número.

**Como conferir:** para cada documento novo, rode a pergunta que só ele responde e confirme que ele aparece entre os três primeiros resultados. Se não aparecer, a lista dos vencedores mostra quem tomou o lugar dele.

### 13. Isolamento de teste que perde a condição cai na produção

**Quando acontece:** uma caixa de areia se isola por uma condição externa, como a variável `TMUX_TMPDIR` apontando para um diretório de soquete próprio. Se o diretório some antes da hora, a ferramenta ignora a variável sem avisar e usa o servidor padrão, o da produção. A limpeza que mata o servidor "do teste" derruba então a sessão real.

**O que fazer:** prefira isolamento que não tem para onde cair, como um servidor próprio do tmux, nomeado pela opção `-L`. Na limpeza, mate primeiro os processos, pelo grupo e conferindo que morreram, e só depois remova o diretório do soquete. Antes de rodar testes de outra pessoa, procure chamadas reais ao crontab, ao systemctl, ao tmux e ao docker: salve o estado real antes e compare depois.

**Como conferir:** numa caixa descartável, apague o diretório de isolamento e rode um comando inofensivo de listagem: ele não pode enxergar as sessões reais. Depois dos testes, o estado salvo e o atual têm que ser idênticos.

### 14. Leitura de post público só vale com o par real e inventado

**Quando acontece:** um script lê um post público do Instagram pelo embed ou pelo permalink e recebe 200 com uma página grande. Com user-agent de navegador de desktop, post real e código inventado devolvem a mesma casca deslogada, às vezes idêntica byte a byte: qualquer conclusão dali é invenção.

**O que fazer:** rode toda leitura em par, o post real e um código inventado, na mesma rota e com o mesmo user-agent. Se os dois voltam parecidos, troque o user-agent antes de trocar a rota: sem o de navegador, ou com o de um robô de pré-visualização de links, a resposta costuma discriminar. Use como marcador algo que o inventado não tem, como frases da legenda ou a contagem de metatags.

**Como conferir:** o real traz as frases e as metatags, o inventado traz zero. Rode o par toda vez: a plataforma muda sem aviso, e o marcador que discriminava ontem pode sumir dos dois hoje.

### 15. Bloco já provado em outro alvo entra sem ser conferido

**Quando acontece:** você reaproveita um pedaço que funcionou em outro lugar (prompt, spec, template, filtro, configuração) porque "já foi provado". A prova valia para o alvo antigo; transplantado, o bloco carrega afirmações sobre ele que viram mentira sobre o novo, e ninguém relê o que tem pedigree. O sintoma típico é o artefato se contradizer.

**O que fazer:** releia linha a linha perguntando "isto é verdade sobre o alvo novo?"; o que descreve o antigo é reescrito ou sai. Guarde o original marcado como contaminado, em vez de apagar, para explicar o defeito se ele voltar. Ao copiar a pasta de trabalho anterior, caminho fixo e trava específica vêm junto: derive o caminho do próprio script e pergunte de cada trava qual defeito da peça atual ela pega.

**Como conferir:** antes de rodar, leia o artefato procurando duas instruções que se contradizem: tem que dar zero. Uma busca pelo nome da pasta de origem nos scripts copiados tem que voltar vazia.

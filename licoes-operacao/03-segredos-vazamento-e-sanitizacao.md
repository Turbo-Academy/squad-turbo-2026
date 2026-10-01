# Lições de operação — Segredos, vazamento e sanitização

Itens: 15

Lições 37 a 51 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 37. Régua escrita a partir do conserto só prova que ele rodou

**Quando acontece:** um mapa de substituição troca um nome antes de entregar um pacote, mas a troca diferencia maiúsculas e o mapa só tem a forma com inicial maiúscula. Essa forma casa centenas de vezes e some; minúsculas e caixa alta ficam. A segunda régua, criada para pegar o que escapasse, procura a mesma forma que o mapa já limpou e declara zero.

**O que fazer:** escreva a régua a partir do dano, não do conserto: o que não pode existir na saída, em todas as formas em que pode aparecer (caixa, acento, plural, abreviação, dentro de identificador). Contagem alta de acertos prova que uma forma foi coberta, não que as outras sumiram. Duas defesas que falham pelo mesmo motivo contam como uma só.

**Como conferir:** plante o alvo em cada forma possível num arquivo de teste e confirme que a régua acusa todas. No pacote final, uma busca que ignora caixa e acento tem que dar zero.

### 38. Audite o pacote que sai, não o sistema que fica

**Quando acontece:** você quer distribuir algo (um kit, um instalador, um export) e aponta a auditoria para a operação viva. O artefato que vai sair fica fora da varredura, e muitas vezes ele já existe, montado meses antes, numa pasta cujo nome promete limpeza, com segredo vivo e dados de terceiros de uma instalação anterior.

**O que fazer:** antes de medir, pergunte onde está o objeto que sai e se ele já existe; procure por kit, template, semente e pacote de instalação. Audite esse objeto, com a operação só como fonte secundária, e trate nome de pasta como promessa, não procedência. Prove que cada arquivo gerado que embarca saiu da fonte aprovada: um arquivo renderizado antes do conserto passa em tudo se ninguém compara datas.

**Como conferir:** o relatório cita o pacote medido e a contagem de arquivos dele, igual à do pacote final. Atualize a data de uma fonte sem regenerar o derivado: a checagem de procedência tem que recusar o pacote.

### 39. Backup criado pelo conserto embarca o texto que você removeu

**Quando acontece:** você limpa um pacote antes de distribuir e o próprio processo de edição deixa cópias de segurança dentro da árvore que sai, junto com lixo de sincronização e caches. O texto removido sobrevive justamente nessas cópias, e a comparação entre duas cópias da árvore volta vazia quando as duas carregam o mesmo lixo: prova igualdade, não correção.

**O que fazer:** guarde backup fora da árvore que embarca. No aceite, pergunte também o que ali dentro não deveria embarcar: backups, arquivos de troca do editor, metadados do sistema operacional, caches de bytecode, pastas de dependência, arquivos de ambiente. Some ao aceite um número que mede presença indevida, não só ausência do texto proibido, e pergunte se o instrumento consegue, em princípio, enxergar o defeito procurado.

**Como conferir:** uma busca por nome na árvore final (padrões de backup, de metadados e de cache) tem que voltar vazia. Plante um backup numa cópia de teste e confirme que a mesma busca o encontra.

### 40. Procure o segredo pelo valor, nunca pelo nome do campo

**Quando acontece:** você limpa uma credencial de arquivos buscando pelo nome do header, da variável ou do campo, e a varredura dá zero. O mesmo valor circula com outro nome, num nó vizinho ou noutra grafia, e continua cru: buscar pelo nome que você supõe devolve zero, e o zero vira "está limpo".

**O que fazer:** carregue o valor numa variável de shell sem imprimir, confira só o comprimento e varra com grep de texto fixo que lista apenas caminhos. Rode sempre dois controles: uma string inventada do mesmo comprimento, que tem que dar zero, e um caso que sabidamente existe, que tem que aparecer. Meça antes e depois. Ao fechar uma classe inteira (nome de cofre, host interno, caminho interno), varra pelo que a coisa é, não pelo formato em que ela apareceu da primeira vez.

**Como conferir:** o relatório traz as ocorrências antes e depois e o resultado dos dois controles. Zero sem controle positivo encontrado não conta como limpo.

### 41. O segredo escapa pelo campo que você tratou como nome

**Quando acontece:** um laço lê arquivos de credencial, separa cada linha em nome e valor pelo sinal de igual e imprime só o nome para dizer qual chave falhou. Um dos arquivos é JSON, sem sinal de igual, e a separação devolve a linha inteira: o nome impresso é o próprio segredo.

**O que fazer:** de arquivo de credencial, imprima só caminho e contagem; para identificar a credencial, use um rótulo fixo escrito no código. Antes do laço, liste os formatos da pasta e faça o laço recusar o que não reconhece sem mostrar o que não entendeu (log, exceção e mensagem de erro também imprimem). Ao filtrar saída de ferramenta, extraia o campo: busca por palavra devolve a linha inteira, com os campos vizinhos.

**Como conferir:** numa pasta de teste, ponha um arquivo de cada formato com um valor falso conhecido, rode o laço e procure esse valor na saída e nos logs: o esperado é zero.

### 42. Resposta de endpoint de credencial nunca aparece na tela

**Quando acontece:** o agente chama um endpoint que devolve credencial (OAuth, renovação de acesso, chave de integração) e imprime a resposta para ver o formato ou para redigir na hora. O trecho fica na transcrição, que não se edita, e o agente mandado limpar vaza mais: o filtro improvisado não cobre outra codificação do mesmo valor, como percent-encoding.

**O que fazer:** grave a resposta direto num arquivo restrito, extraindo o campo com jq, e imprima só comprimento ou hash. Use a credencial por variável de ambiente, nunca por argumento de linha de comando, e compare valores por hash. Com token de vida curta, esperar expirar pode ser melhor que regenerar o segredo, que quebra a integração e nem sempre invalida o que já foi emitido.

**Como conferir:** ao fim do fluxo, procure o valor (numa variável, sem imprimir) nas transcrições e logs com busca que lista só nomes de arquivo. O esperado é zero arquivos, com controle positivo provando que a busca enxerga.

### 43. Ferramenta que mascara a classe auditada devolve limpo falso

**Quando acontece:** você audita se sobrou dado pessoal num texto com uma ferramenta de inspeção que mascara nomes ou tokens na tela. Ela mostra marcadores anônimos onde estão os nomes reais, exatamente o que uma limpeza bem feita mostraria. E o controle positivo feito com os padrões que a limpeza já removeu só prova que você encontra o que já encontrou.

**O que fazer:** ao auditar uma classe, desligue o mascaramento dela na ferramenta e declare no relatório qual proteção foi desligada e onde. Se não der para desligar, o desfecho é "não consegui medir". Monte o controle positivo com uma cópia em que o dado volta de propósito, nas formas que costumam sobrar (primeiro nome solto, usuário em minúscula sem arroba), e olhe também os campos que a limpeza promete preservar, como cabeçalhos.

**Como conferir:** na cópia de controle, cada dado reintroduzido tem que aparecer por extenso na leitura da auditoria; se algum aparece mascarado ou some, a leitura não serve como prova.

### 44. Segredo mandado pelo chat só se resolve com rotação

**Quando acontece:** alguém manda uma senha ou chave pelo chat que conversa com o agente. A cópia vai para a caixa de entrada e o log do bot, o journal do systemd, respostas gravadas que repetem a mensagem original, o histórico do terminal, a transcrição, o histórico de prompts, o banco de memória e o celular; apagar depois não alcança todas.

**O que fazer:** antes de aceitar segredo por esse canal, combine a rotação: a nova credencial entra pela entrada padrão no servidor e a vazada é revogada. Redija as cópias que puder no lugar, sem trocar o inode de arquivo que um processo mantém aberto. Código de uso único é outra classe: se o segundo uso dispara alarme já provado, o canal sujo serve; sem isso, é segredo durável.

**Como conferir:** depois da rotação, uma chamada com a credencial antiga tem que ser recusada pelo provedor. A busca pelo valor antigo em logs, banco e transcrições fica registrada com controle positivo.

### 45. Snapshot do navegador automatizado grava o valor digitado

**Quando acontece:** o agente controla um navegador por um servidor MCP (como o do Playwright) e passa por login, cadastro ou pagamento. O snapshot de acessibilidade traz o valor digitado em campo de senha e de cartão, até em iframe de outro domínio, e o modo padrão grava cada página em arquivo na pasta do projeto. O endereço devolvido depois da navegação pode trazer token na query.

**O que fazer:** em tela com senha, cartão ou dado pessoal, não faça nenhuma chamada de ferramenta do navegador: a pessoa digita e o agente retoma em outra página. Para ler formulário, use uma sonda fixa que devolve só rótulo, tipo e preenchido sim ou não. Aponte a pasta de saída para fora do projeto e de qualquer pacote; desligar o modo de snapshot não protege a transcrição.

**Como conferir:** digite um valor falso conhecido num formulário de teste e procure esse valor nos arquivos de saída do navegador e na transcrição: o esperado é zero ocorrências.

### 46. Trocar o nome dentro de uma alegação cria uma alegação falsa

**Quando acontece:** você adapta material de um negócio para outro dono (um bot de atendimento, um fluxo de mensagens) com um mapa de nomes. Uma frase que afirma fato do negócio antigo, como "fulano responde em até uma hora", vira promessa falsa do novo dono, e a régua de nomes fica muda: o nome está certo.

**O que fazer:** separe as menções pela função na frase. Menção que identifica quem fala ("aqui é da equipe de fulano") se traduz; menção que afirma fato (evento, preço, garantia, horário, prazo) sai, e o fato vem de um perfil que o novo dono preenche. Com o campo vazio, a mensagem que depende dele não sai (falha fechada) e o motivo aparece. Para cada casamento do mapa, pergunte se a frase continua verdade para quem recebe.

**Como conferir:** com o perfil vazio, gere as mensagens e confirme que nenhuma afirma evento, preço, horário ou prazo. Preenchido o perfil, o fato aparece com o valor informado.

### 47. Pseudonimizar transcrição deixa o sobrenome colado ao rótulo

**Quando acontece:** você troca nomes por rótulos genéricos em transcrições que um agente vai citar. Os piores resíduos ficam onde a troca não olha (o sobrenome logo depois do rótulo, o título herdado do arquivo original, o nome ao lado de dinheiro), enquanto a contagem de nomes conhecidos dá zero.

**O que fazer:** torne obrigatória uma triagem com dois cortes, trechos curtos com dinheiro perto de pessoa e palavra capitalizada encostada no rótulo, e confira sempre a primeira linha. O que sobrar é risco residual aceito e contado no relatório, nunca cobertura presumida. Antes de trocar a versão do sanitizador, compare contagens da antiga e da nova na mesma amostra real, sem imprimir nomes: mais testes passando não impedem regressão.

**Como conferir:** numa cópia de teste, cole um nome completo logo depois de um rótulo e outro ao lado de um valor: a triagem tem que acusar os dois. Na amostra real, a versão nova encontra pelo menos o que a antiga encontrava.

### 48. Cofre de segredos documentado não prova cofre funcionando

**Quando acontece:** o arquivo de instruções do agente afirma que todas as credenciais vivem num cofre e que não há segredo em texto puro. O binário do cofre existe e responde, mas nenhuma conta foi configurada. O agente lê isso, assume que a postura de segredo está resolvida e orienta alguém a guardar credencial num lugar que não funciona.

**O que fazer:** antes de propor o cofre como destino, rode um teste de escrita ponta a ponta com a identidade que o serviço vai usar: criar um item descartável, ler de volta e apagar. Enquanto o teste não passar, registre onde os segredos estão de fato e corrija as frases da documentação que afirmam o contrário. Binário instalado e comando que responde não provam conta configurada.

**Como conferir:** as três etapas do teste saem com código zero e o valor lido bate com o escrito, comparados por hash. Se alguma falha, a documentação diz "não configurado" até alguém repetir o teste com sucesso.

### 49. Ferramenta de terceiro lê o arquivo de ambiente da pasta atual

**Quando acontece:** você roda uma ferramenta de terceiro a partir da pasta do seu projeto, e ela carrega sozinha o `.env` do diretório atual, comportamento comum em ferramentas feitas com dotenv. Ela só lê, mas os segredos do projeto entram no processo dela. A opção que parece desligar isso pode cobrir outro arquivo, como o do próprio pacote.

**O que fazer:** rode ferramenta de terceiro a partir de uma pasta neutra, sem arquivo de ambiente, com o diretório de dados definido de forma explícita. O padrão de fábrica pode vir aberto (escuta em todas as interfaces, sem chave, senha do exemplo público), e uma atualização pode restaurá-lo: reaplique e audite o endurecimento depois de cada uma.

**Como conferir:** numa pasta de teste, crie um arquivo de ambiente com uma variável isca de valor inofensivo e rode a ferramenta dali; se a isca aparecer na saída ou no ambiente do processo, ela lê a pasta atual. Da pasta neutra, a isca não pode aparecer.

### 50. Provedor alternativo de modelo enxerga tudo que recebe

**Quando acontece:** para economizar cota, você instala um roteador que desvia as chamadas para outro provedor de modelo quando o principal chega ao limite. Ligado de forma global, ele manda também conversas com dados pessoais de clientes para um terceiro que lê o conteúdo, e a troca costuma ser acionada por impressão, não por medida.

**O que fazer:** classifique os fluxos antes de ligar o roteador: o que carrega dado pessoal fica fixo no provedor principal mesmo em déficit, porque quem atende a chamada vê o conteúdo. Só trabalho sem dado de pessoa pode seguir para o alternativo. Amarre o gatilho da troca a um medidor de uso, não à sensação de que a cota está no fim.

**Como conferir:** com o roteador ligado, envie uma chamada de teste marcada como dado pessoal e confira no log dele que ela não saiu para o alternativo. Cada troca registrada cita a leitura do medidor que a disparou.

### 51. Credencial de API sem seletor de escopo vale a conta inteira

**Quando acontece:** alguns provedores, como a Hotmart, não deixam escolher escopo ao criar a credencial de API: ela lê e altera tudo na conta, mesmo que o agente só precise consultar vendas. E o painel costuma entregar o valor já com o prefixo do esquema de autenticação (a palavra Basic antes do código), o que quebra o carregamento do arquivo de ambiente pelo shell.

**O que fazer:** trate a credencial como chave-mestra: nome inconfundível no painel para revogar por ele, arquivo com permissão 600 fora de qualquer repositório, código que só chama endpoints de leitura e token de acesso em cache pelo prazo que o provedor devolve. Guarde só o valor, sem o prefixo, e monte o cabeçalho no código.

**Como conferir:** carregar o arquivo de ambiente num shell limpo não dá erro, a troca pelo token devolve 200 com o prazo de validade e uma consulta real paginada devolve 200. Uma busca no código não encontra chamada de escrita.

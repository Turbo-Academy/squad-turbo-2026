# Lições de operação — Processo, comunicação e decisão

Itens: 14

Lições 131 a 144 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 131. Toda regra nova precisa de um comando que a verifique

**Quando acontece:** uma regra é escrita ("não faça isso", "confira aquilo") e a proteção passa a depender de alguém lembrar dela no instante exato em que se aplica, justo quando a atenção está noutro problema. O erro passa mesmo com atenção máxima, inclusive pelas mãos de quem acabou de escrever a regra.

**O que fazer:** junto com cada regra, escreva o comando de uma linha que a verifica: um grep, um md5sum contra o conjunto congelado, uma segunda implementação da mesma medida, abrir o arquivo. Prefira o comando barato e feio ao princípio bonito. Ao criar um limiar, crie também o comando que diz se ele se aplica. Lição cara vai escrita dentro do artefato, ao lado do campo ou da função que protege, e não no topo do documento.

**Como conferir:** cada regra da lista tem um comando registrado ao lado, e ele reprova um exemplo que viola a regra. Regra sem comando fica marcada como pendente.

### 132. Explicação verdadeira que não é a causa encerra a investigação cedo

**Quando acontece:** um contador de execuções cai a zero e alguém explica com um fato verdadeiro, como "o fluxo está pausado de propósito". A explicação encaixa no dado, não contradiz nada e fecha a investigação, mesmo sem ser a causa. Informação falsa acaba batendo em algum fato; a verdadeira e irrelevante não gera contradição nenhuma.

**O que fazer:** ao aceitar uma explicação que encaixa, pergunte que outra causa produziria o mesmo resultado e qual medição barata separa as duas, como olhar o destino real de uma chamada ou resolver o nome de um domínio. Se nenhuma medição discrimina, escreva "compatível", não "provado". Desconfie mais da explicação que veio de alguém de confiança, porque ela chega com autoridade emprestada.

**Como conferir:** o registro da investigação traz a causa aceita, a causa rival e a medição executada que separou as duas, com o resultado. Sem essa medição, o status fica "compatível, não provado".

### 133. Nome do dia escrito de cabeça esconde o erro ao lado da data certa

**Quando acontece:** o dia é chamado pelo nome errado a manhã inteira e nada reclama, porque as decisões que dependem dele usam a data numérica, que está certa. Número e rótulo convivem na mesma frase sem conflito, e a parte certa sustenta a errada. Outros agentes copiam o rótulo, porque tratam o texto recebido como confiável.

**O que fazer:** sempre que o dia da semana entrar numa decisão ou mensagem, derive o nome da data com o comando `date`, nunca de cabeça. Cruze o rótulo com o número da mesma frase: "faltam dois dias para terça" e "hoje é sábado" não podem coexistir. Vale para qualquer rótulo derivado ("ontem", "semana passada") ao lado de um valor apurado.

**Como conferir:** para cada nome de dia num texto, rode `date` com a data correspondente e o formato de dia da semana: o nome tem que bater. Toda contagem de dias na mesma frase tem que fechar com os dois extremos.

### 134. Lista de execução tem que concordar com ela mesma

**Quando acontece:** você deriva uma lista de ação (apagar, mover, enviar) de uma planilha de triagem e congela os ids para o executor não reinterpretar. A lista nova herda a coluna de decisão antiga: manda agir em todas as linhas, e a própria coluna diz reter em muitas. Id congelado impede acrescentar, não impede lista errada.

**O que fazer:** faça o artefato de execução reescrever o campo de decisão com a decisão nova, nunca a herdada. Antes de despachar, confira se o total marcado para agir bate com o total que você manda agir. No pedido ao executor, deixe escrito: se a lista parecer errada, pare e avise em vez de corrigir por conta. Para comparar duas leituras de uma estrutura, case itens por chave estável, nunca por posição.

**Como conferir:** a contagem por valor da coluna de decisão mostra todas as linhas no valor de agir e nenhuma no de reter. Um diff por chave entre duas leituras sem mudança volta zero diferenças.

### 135. Item pronto esperando janela pode nunca ter sido escrito

**Quando acontece:** você lista mudanças como prontas e represadas, à espera de uma janela de reinício, e uma delas nunca foi escrita. "Esperando janela" parece estado saudável: tem motivo e tem data, então ninguém audita. Represado e nunca escrito produzem o mesmo estado observável (não está em vigor), e o bloqueador plausível encerra a investigação.

**O que fazer:** antes de rotular um item como pronto e aguardando, olhe o artefato: data de modificação do arquivo, assinatura da função, comportamento. Se você não consegue apontar o que mudou no disco, o item está pendente, e o rótulo tem que dizer isso. Ao despachar um agente para aplicar o que já está pronto, mande-o medir o estado antes, em vez de aceitar a sua lista.

**Como conferir:** para cada item marcado como pronto, exija uma evidência no disco: um diff, um hash ou um teste que falha sem a mudança e passa com ela. Item sem evidência volta para pendente antes da janela, não depois.

### 136. Trocar de provedor de e-mail para fugir do portão não resolve

**Quando acontece:** um provedor de e-mail parece travado (sandbox, aprovação pendente) e surge a ideia de trocar por um sem portão. Todo provedor sério tem algum: limite para conta nova até verificação manual, análise de conformidade ou conteúdo proibido. E muitas vezes o portão nem foi recusado, só previsto.

**O que fazer:** pergunte se houve recusa por escrito ou se o pedido nunca foi feito. Consulte o DNS: registros DKIM já publicados mostram provedores onde o domínio já foi autenticado, e reaproveitar uma dessas contas costuma ser o caminho curto. Leia a política de uso de cada candidato contra o seu conteúdo. E não deduza comportamento da configuração: campo vazio de cabeçalhos extras não significa que o cabeçalho automático de descadastro deixa de sair.

**Como conferir:** liste os registros DKIM do domínio e veja de quais provedores são. Para cabeçalho, leia o bruto de uma mensagem entregue de verdade: ele se prova ali, não na configuração.

### 137. Duas fontes legítimas sem recorte declarado geram peça incoerente

**Quando acontece:** há duas fontes boas na mesa, como uma referência visual e uma peça já aprovada, e ninguém escreveu qual manda em quê. Cada rodada puxa de uma por acaso, o conjunto fica incoerente e quem aprova reprova sem conseguir dizer por quê, sem informação para a rodada seguinte.

**O que fazer:** antes de produzir, escreva uma linha por aspecto: qual fonte manda (a referência no acabamento e a peça aprovada na forma, por exemplo) e qual ganha no conflito. Peça aprovada vira autoridade sobre o que mostra: regra deduzida de outra fonte que a contradiz cai, e a reversão é dita em voz alta. Ao tirar a forma da peça aprovada, não importe junto o acabamento dela.

**Como conferir:** toda regra ativa aponta a fonte que manda nela; regra sem fonte declarada é reprovada. No aspecto disputado, meça as duas fontes, porque descrição verbal costuma errar o eixo, e trave por faixa com piso e teto.

### 138. Aprovação ampla vira precedente para o que não foi aprovado

**Quando acontece:** quem aprova libera algo com uma frase curta, como "pode falar em primeira pessoa", depois de ler um exemplo concreto. Semanas depois, alguém cita essa liberação para justificar o que ela não cobria: afirmação de fato, promessa ou opinião sobre terceiros na boca de uma pessoa real. A diferença entre o que foi visto e o que foi generalizado some na citação.

**O que fazer:** registre a aprovação junto com o texto literal aprovado e com o limite escrito na hora: o que está coberto e o que continua voltando para quem aprova. Peça aprovação sobre as palavras, não sobre uma descrição delas. Ponha o limite na régua da revisão, que é onde ele é cobrado.

**Como conferir:** pegue uma peça nova que se apoia na liberação e compare cada trecho com a classe registrada. Trecho com alegação ou promessa fora dela tem que voltar para aprovação, e a revisão registra que voltou.

### 139. Cada lado supõe que o outro tem o acesso

**Quando acontece:** O incidente já tem diagnóstico completo, mas o conserto exige um acesso específico (um painel, uma conta, uma permissão). Cada parte supõe que a outra alcança esse acesso, e o incidente fica dias parado parecendo estar com alguém quando está com ninguém. Repassar a tarefa dá o mesmo sinal quando quem recebe pode agir e quando não pode.

**O que fazer:** Pergunte quem tem aquele acesso exato e confirme com quem vai executar, nunca com quem está repassando. Desconfie de acessos parecidos no mesmo provedor: mexer no servidor ou na cobrança não garante alcançar o painel de sites. Se duas partes afirmam coisas diferentes sobre quem tem o acesso, ponha as duas afirmações lado a lado para ambas, sem arbitrar.

**Como conferir:** Liste os incidentes abertos: cada um tem um responsável pelo próximo passo que confirmou por escrito, ele mesmo, ter o acesso. Incidente parado há mais de um dia sem motivo técnico e sem essa confirmação é passo sem responsável, e a primeira ação é obtê-la.

### 140. Combinado entre pessoas não desliga quem lê a saída automaticamente

**Quando acontece:** Um verificador tem defeito na saída (aprova demais, ou diz medido quando não mediu) e a equipe decide deixar assim porque combinou não usar aquela saída como prova. Só que outro script consome esse resultado sozinho, e o status do verificador vira o status final do processo. O código que lê a saída nunca participou do combinado.

**O que fazer:** Antes de aceitar um defeito porque ninguém usa aquilo, procure quem lê: busque no código pelo nome do arquivo, da variável e pelo código de saída. Se existir consumidor automático, o defeito é real, e aviso no cabeçalho não desliga consumo programático. O conserto mais barato costuma ser cortar o consumo: sem propagação, a saída volta a ser leitura humana, e aí um combinado cobre.

**Como conferir:** A busca pelo nome da saída no repositório e nos agendadores não acha leitor automático, ou cada leitor achado foi removido. Force a saída do verificador para o pior valor e confirme que o status final do processo não muda.

### 141. Resposta curta a uma decisão pede confirmação na hora

**Quando acontece:** Você manda uma pergunta com opções codificadas e o responsável responde só com o código, às vezes digitado errado. Você interpreta, começa a executar e não confirma nada, para poupar a atenção dele. Sem retorno, ele não sabe se a decisão pegou e reenvia, e o reenvio passa pelo mesmo canal que pode falhar.

**O que fazer:** Responda toda decisão codificada com uma linha imediata dizendo como você leu e o que já está andando, por exemplo "recebido, pergunta três, segunda opção: trocar o fornecedor". Se o código veio ambíguo ou com erro de digitação, a confirmação explicita a leitura escolhida, para o responsável corrigir antes de o trabalho avançar. A confirmação fecha a decisão; o relatório, que vem depois, fecha o trabalho.

**Como conferir:** Cada resposta codificada recebida tem, logo em seguida, uma confirmação enviada com a leitura por extenso. Decisão repetida pelo responsável pouco depois da primeira indica confirmação que faltou.

### 142. Resposta comprimida guarda o assunto só na pergunta

**Quando acontece:** Um protocolo de perguntas numeradas deixa as respostas curtas ("dois, feito"), o que é rápido para quem decide. Só que a resposta não contém o assunto: buscar a decisão por palavra-chave nas respostas volta vazio, e o vazio tem a cara exata de "não aconteceu".

**O que fazer:** Para achar uma decisão, busque primeiro nas perguntas que você enviou e só então case com a resposta pelo número. Ao registrar a resposta, escreva o item por extenso ao lado do código ("dois: trocar o modelo do atendimento"), nunca só o código. Antes de afirmar que algo não tem registro, veja se o instrumento teria como enxergar: busca vazia num lugar que não guarda o assunto quer dizer "não dá para ver daqui", não "não existe".

**Como conferir:** Procure uma decisão conhecida pelo assunto dela nos seus registros: ela aparece com o código e o texto por extenso na mesma linha. Se a busca pelo assunto só acha a pergunta, o registro da resposta ainda está comprimido.

### 143. Pedidos a quem aprova vão um por vez, com o padrão declarado

**Quando acontece:** Você depende do responsável para várias ações (liberar um acesso, conferir um dado, clicar num botão) e manda todos os pedidos numa lista só. Ele lê no meio de outras tarefas, responde parte ou nada, e você fica sem saber o que foi resolvido e o que ficou órfão.

**O que fazer:** Mantenha do seu lado uma fila do que depende do responsável e envie só o primeiro pedido, completo em si: o que é, por que você precisa e o padrão que vai seguir se não houver resposta. O próximo sai quando ele responder ou executar. Agrupe por assunto, sem picotar o mesmo item em várias mensagens, e continue no que não depende dele. A regra vale para pedido; relatório de resultado pode levar várias coisas juntas.

**Como conferir:** A fila com o responsável tem no máximo um pedido aberto por vez, e cada pedido enviado traz o padrão escrito. Vencido o prazo combinado, todo item tem resposta ou o padrão aplicado.

### 144. Projeto construído por outro agente entra em produção por estágios

**Quando acontece:** outro agente constrói um serviço que vai rodar no seu servidor e pede para subir. Aprovar de uma vez, lendo só o resumo, deixa passar porta exposta, segredo em texto puro, dado pessoal guardado sem prazo e um primeiro envio real indo para quem não devia.

**O que fazer:** revise com uma lista fixa (portas, segredos, privacidade, contrato de chamada, retomada sem duplicar, convivência com o que já roda, reversão em um comando) e libere em estágios: ensaio num canal de teste, modo seco que só registra o que faria, modo real. Cada liberação exige provas coladas: suíte verde, teste ponta a ponta, log do ensaio. Inclua o relatório vazio na lista: "nada a reportar" em uma linha parece defeito, então ele deve mostrar que o serviço está vivo e o que viu.

**Como conferir:** cada estágio tem prova registrada antes da liberação seguinte. No modo seco, o registro mostra o que teria sido feito e nada executado, e o relatório vazio traz contagens do período.

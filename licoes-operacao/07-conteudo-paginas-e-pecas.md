# Lições de operação — Conteúdo, páginas e peças

Itens: 9

Lições 122 a 130 de 152 (a numeração é única nos 9 arquivos desta pasta: "lição N" cita uma coisa só).
Cada lição traz só o mecanismo, em três partes: quando acontece, o que fazer e como conferir. Os exemplos são
genéricos de propósito. "Como conferir" é o teste que prova que a lição foi aplicada: sem ele, a lição vira intenção.

### 122. Rótulo ao lado de número certo também precisa de revisão

**Quando acontece:** uma peça com números (card, painel, relatório) passa pela conferência da aritmética, e ninguém revisa as palavras que nomeiam os números. Dois valores certos com o mesmo nome, ou um valor com rótulo que diz outra coisa, fazem a peça não fechar, e o leitor não sabe qual lado errou. O rótulo é uma afirmação sobre o número e pode ser falso.

**O que fazer:** faça uma passada só nos rótulos, separada da dos números: cada um é verdadeiro sobre aquele valor, no mesmo sentido em que o resto da peça usa a palavra? Duas grandezas nunca dividem um nome; batize cada limiar com o lugar onde é medido. Ao desfazer um nome ambíguo, corrija também onde ele é pedido (prompt, especificação, briefing), não só onde é medido.

**Como conferir:** monte uma tabela com cada rótulo, o valor que ele nomeia e a definição de origem. Nenhum rótulo aponta para dois valores e nenhum valor tem dois rótulos.

### 123. Página sem arquivos de descoberta nasce invisível

**Quando acontece:** a página abre bonita e é dada como pronta, mas não tem robots.txt, sitemap.xml, llms.txt, link canônico, meta description nem tags og. Nasce invisível para buscador e para IA, e o link colado num aplicativo de mensagem aparece sem título nem imagem. No sentido oposto, o preview aberto deixa o robô indexar o rascunho.

**O que fazer:** trate esse pacote como parte do "pronto". São duas camadas com objetivos opostos: no preview, tudo fechado (robots.txt negando tudo e cabeçalho `x-robots-tag` com `noindex`); em produção, tudo liberado, com a URL canônica confirmada antes de subir. Em teste A/B, só a canônica entra no sitemap e a variante leva `noindex`, senão as duas competem no buscador.

**Como conferir:** peça de fora, sem cache, os três arquivos e os cabeçalhos de cada camada: `noindex` em todas as rotas do preview, ausente na canônica e presente na variante. Cole o link numa conversa de teste: título e imagem têm que aparecer.

### 124. Paleta tirada de foto pega a cor de outra linha da marca

**Quando acontece:** o agente precisa das cores de uma marca e as deduz de uma foto (camiseta, evento, material impresso) ou de um documento antigo que fez isso. A foto mostrava o logotipo de uma linha de produto vizinha, com outra cor, e a cor errada se espalha por prompts, peças e guias com cara de oficial.

**O que fazer:** tire a paleta do arquivo oficial do logotipo (o SVG publicado no site, o favicon em alta resolução) e só grave os valores quando duas ou três fontes independentes baterem. Registre também quais cores pertencem a outras linhas, para ninguém importá-las. Se as imagens geradas precisam de correção de cor, ponha esse passo dentro do pipeline: quem gerar de novo sem ele recebe a cor desviada.

**Como conferir:** amostre os pixels das áreas chapadas do arquivo oficial e compare com os valores registrados. Uma busca pelo hex da cor intrusa nos prompts e guias tem que voltar vazia.

### 125. Rodízio de formatos sem trava deriva para o mais fácil

**Quando acontece:** um agente publica conteúdo todo dia com liberdade para escolher o formato, e a instrução manda variar. Em poucos dias tudo sai no mesmo registro, o que brota mais fácil do material disponível (o didático, por exemplo), porque o caminho fácil vence cada escolha isolada: a instrução estava escrita, faltava mecanismo. E "rodízio de formatos" costuma ser lido como lista de assuntos, quando é lista de registros.

**O que fazer:** faça o roteiro declarar o registro na primeira linha, antes de escrever. Proíba repetir o registro do dia anterior com uma checagem que recusa, não com lembrete. No relatório periódico, mostre a distribuição por tipo ao lado do engajamento, para a deriva ficar visível.

**Como conferir:** conte os registros declarados nas últimas publicações. Nenhum par de dias seguidos pode repetir, e todos os tipos da lista têm que aparecer dentro do período do relatório.

### 126. Revisão de peça pública precisa ler o que aparece na tela

**Quando acontece:** um vídeo gravado para uso interno, uma apresentação ou um PDF vira público, e a revisão confere só título, descrição e capa. No meio do conteúdo aparece uma tela com oferta antiga, preço, promessa de resultado ou nome de cliente, que fica pública e indexável junto com o resto.

**O que fazer:** aplique ao conteúdo visual as mesmas regras dos metadados. Em vídeo longo, extraia quadros em intervalo fixo (a cada quinze segundos, por exemplo) e leia as telas de oferta, preço e prova; em PDF e slides, página por página. O que não passa sai por corte ou desfoque antes de publicar, ou vai para quem decide.

**Como conferir:** a revisão entrega a lista de quadros lidos, com o momento de cada tela sensível e a decisão tomada. Se a lista não cobre o vídeo inteiro no intervalo combinado, a revisão não terminou.

### 127. Número grande traduzido do inglês precisa mudar de unidade

**Quando acontece:** a fonte em inglês traz um valor de quatro algarismos em million e a tradução mantém a unidade: sai o padrão europeu de mil milhões (quatro algarismos seguidos de "milhões"), que o leitor brasileiro lê errado. A conferência não pega porque pergunta se o valor bate com a fonte (e bate), não se a unidade comunica em português.

**O que fazer:** acima de mil milhões, converta para bilhões com vírgula decimal, preferindo precisão a arredondamento. Transforme a correção em trava mecânica (uma régua que reprova número acima de 999 seguido de "milhões"), porque correção que depende de memória volta. E número se copia da fonte, nunca se digita: unidade certa dá cara de conferido a um valor inventado.

**Como conferir:** rode a régua com controle positivo (quatro algarismos antes de "milhões" reprova) e negativos (três algarismos antes de "milhões" e um decimal antes de "bilhões" passam). Antes de enviar, cada número do texto tem que ser achado na fonte por busca.

### 128. Paráfrase que tira o qualificador troca a afirmação

**Quando acontece:** ao resumir número de terceiro, uma palavra some e a frase passa a dizer outra coisa: "o crescimento do volume dobrou" vira "o volume dobrou", e a nova afirmação muitas vezes nem pode ser demonstrada com os dados do documento. Parentes do mesmo erro: "3x" traduzido como "três vezes mais" (que é quatro vezes o original) e efeito de um pacote de causas atribuído a uma só.

**O que fazer:** pare no verbo e no sujeito, não só no algarismo. Confira se o qualificador da fonte sobreviveu, se a causa continua a mesma e se a afirmação é demonstrável com números que existem no documento. Quem apurou escreve na peça a lista dos qualificadores que não podem cair, para o próximo editor ler antes de cortar.

**Como conferir:** leia cada manchete isolada, como quem só passa o dedo, e compare com a fonte. A checagem mecânica da peça tem que falhar quando uma frase da lista de qualificadores some.

### 129. Página de links intermediária apodrece sem ninguém ver

**Quando acontece:** peças e mensagens mandam as pessoas para uma página de links, o link da bio, e dali para os destinos finais. Um domínio expira, um botão passa a apontar para lugar nenhum, e ninguém nota porque ninguém clica até o fim. A peça continua no ar e perde o interessado no último passo.

**O que fazer:** inventarie cada link das peças, das mensagens automáticas e da página de links, e teste o destino final de todos, seguindo os redirecionamentos. Prefira mandar direto para a página própria ou para uma palavra-chave no direct, sem intermediário. Ao aposentar um intermediário, lembre que parar de usar não é apagar a conta: a página velha fica até alguém decidir.

**Como conferir:** para cada link, o destino final responde 200 e o domínio resolve em duas fontes de DNS diferentes, com um domínio sabidamente vivo como controle positivo. Nenhuma peça nova pode apontar para o intermediário aposentado.

### 130. Entrega só existe quando o destinatário consegue abrir

**Quando acontece:** Você publica o material num link que só abre logado na sua conta (uma página privada de ferramenta, um documento restrito) e dá a tarefa por entregue. O destinatário não consegue abrir, desiste em silêncio, e o material nunca é lido. Publicar não é entregar.

**O que fazer:** Entregue no formato que o destinatário abre do jeito que ele usa: página pública no domínio dele, documento compartilhado sem login ou arquivo enviado pelo canal de conversa. Ao republicar uma página com cache longo, mande o link com um parâmetro de versão novo, senão ele vê a versão velha e conclui que nada mudou. Confira de fora, com o aparelho e o estado de login que ele terá.

**Como conferir:** Abra o link sem sessão logada e com user-agent de celular: a resposta é 200, com o título certo e o conteúdo novo. Para documento compartilhado, abra numa janela anônima; se pedir login, não foi entregue.

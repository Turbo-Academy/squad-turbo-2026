# Lições de operação — Portabilidade e ferramentas que mentem

Itens: 8

Lições 145 a 152 (continua a numeração dos arquivos 01 a 08). Mesmo formato: quando acontece, o que fazer e como conferir.

### 145. Script testado só no Mac quebra no Linux e no Windows (WSL)

**Quando acontece:** a bancada roda num Mac, então tudo o que só existe no Mac passa verde: `script -q arquivo comando` (sintaxe BSD; o `script` do Linux quer `script -q -c "comando" arquivo`), `pbcopy`/`pbpaste`, `open`, `osascript`, instrução de "aperte Cmd-C". O primeiro usuário de Windows (Ubuntu no WSL) trava exatamente no passo mais humano, que costuma ser o login.

**O que fazer:** antes de publicar, varra os scripts que rodam na máquina do usuário com `grep -nE 'pbcopy|pbpaste|script -q|osascript|Cmd-[CV]|\bopen '`. Cada achado vai atrás de `[ "$(uname -s)" = Darwin ]`, com um ramo Linux de verdade.

**Como conferir:** rode o script com um `uname` falso que responde `Linux` (um executável na frente do `PATH`) e veja o ramo Linux executar até o fim. Ramo que nunca rodou não existe.

### 146. `git grep -E '\bnome\b'` no macOS devolve zero sem erro

**Quando acontece:** uma régua de privacidade conta nomes com borda de palavra usando `git grep -E`. No macOS o `\b` é ignorado em silêncio e a contagem dá 0 — que tem a mesma cara de "está limpo".

**O que fazer:** contagem com borda de palavra usa `grep -E`/`grep -w` ou `git grep -P`. Toda régua roda com controle positivo: um nome que sabidamente aparece tem que ser achado antes de aceitar qualquer zero.

**Como conferir:** a mesma régua, com a mesma ferramenta, acha o controle positivo plantado numa cópia.

### 147. Trocar um nome com `sed` pega pedaço de outra palavra

**Quando acontece:** para gerar um modelo a partir do texto de alguém, você troca o nome por um marcador (`s/ana/{nome}/g`). "semana" vira "sem{nome}" e "humana", "hum{nome}". A conferência "sobrou o nome?" dá zero e o estrago só aparece quando alguém lê.

**O que fazer:** antes de trocar, liste toda palavra que contém o nome: `grep -o -i -E '\w*nome\w*' arquivo | sort | uniq -c` — qualquer palavra maior que o nome é colisão. Troque com fronteira (`perl -pe 's/\bNome\b/{NOME}/g'`) e confira as colisões intactas depois.

**Como conferir:** a lista de colisões antes e depois da troca é idêntica, e o nome em si some.

### 148. Dependência sem trava de versão quebra a instalação nova da noite pro dia

**Quando acontece:** o instalador faz `pip install pacote` sem versão. Uma dependência indireta lança versão nova incompatível (exemplo real: o PyAV 19 quebrou a leitura de áudio do `faster-whisper`), e toda instalação feita depois daquela hora falha — enquanto a sua máquina, instalada antes, continua funcionando.

**O que fazer:** trave a dependência que quebrou no mesmo `pip install` (`'av<19'`). O teste de "já instalado" passa a exigir a versão boa, para que rodar o instalador de novo conserte quem já pegou a ruim.

**Como conferir:** instale do zero num diretório isolado e rode o caso real (transcrever um áudio de verdade). Depois, numa cópia com a versão ruim instalada à mão, rode o instalador e veja ele trocar a versão.

### 149. O bash do macOS é o 3.2

**Quando acontece:** o script usa `declare -A`, `${var,,}`, `mapfile` ou `readarray`. No Linux funciona; no macOS sai `invalid option` — e, se o erro for engolido, segue com variável vazia.

**O que fazer:** escreva para bash 3.2 (arquivo temporário ou `case` no lugar de array associativo, `tr` no lugar de `${,,}`), ou exija um bash novo explicitamente e falhe com mensagem clara se ele não estiver lá.

**Como conferir:** `/bin/bash script.sh` no Mac, que é o 3.2, roda até o fim.

### 150. `comando | grep -q` com `pipefail` dá falso negativo

**Quando acontece:** com `set -o pipefail`, o `grep -q` sai no primeiro acerto, o comando da esquerda recebe SIGPIPE ao continuar escrevendo e termina com 141. O pipeline inteiro devolve 141 e o `if` conclui "não achei" justamente quando achou.

**O que fazer:** capture a saída antes (`saida=$(comando); grep -q x <<<"$saida"`) ou use `grep -c`/`grep >/dev/null`, que leem tudo.

**Como conferir:** um caso com saída grande que sabidamente contém o padrão tem que dar verdadeiro sob `pipefail`.

### 151. Pasta sincronizada pela nuvem esvazia arquivo e o erro não diz isso

**Quando acontece:** a pasta de trabalho está numa nuvem com "otimizar armazenamento" (iCloud Drive em Documentos/Mesa, por exemplo). Com o disco apertado, a nuvem tira o conteúdo local dos arquivos. O `git` responde "not a git repository" com a pasta `.git` ali; leitura falha com "Resource deadlock avoided"; e um `sed -i` num arquivo nesse estado pode gravar o arquivo vazio.

**O que fazer:** `ls -lO` mostra `dataless` no arquivo esvaziado; `find . -flags +dataless -type f` conta todos. Baixe de volta (`brctl download <arquivo>`) e espere a contagem chegar a zero antes de ler ou editar. Trabalho que regrava muitos arquivos vai para uma pasta fora da sincronização, com manifesto de hash, e só depois volta.

**Como conferir:** a contagem de `dataless` é zero, `git status` responde, e todo arquivo editado tem `wc -c` maior que zero depois da edição.

### 152. O disco do Mac não diferencia maiúscula de minúscula

**Quando acontece:** um teste confere se `~/.AWS/credentials` existe e passa, porque no APFS padrão ele é o mesmo arquivo que `~/.aws/credentials`. No Linux o mesmo teste dá o resultado oposto.

**O que fazer:** em teste de caminho, compare o nome exato que o diretório devolve (`ls` do pai e casamento literal), não só `test -e`. Não use duas grafias do mesmo nome como se fossem arquivos diferentes.

**Como conferir:** o teste dá o mesmo resultado no Mac e num Linux.

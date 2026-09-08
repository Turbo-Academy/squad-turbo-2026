# Operação — como rodar um squad de IA sem se enganar

> Este documento não é sobre lançamento. É sobre **o squad em si**: como saber que o que o
> agente disse que fez foi de fato feito, o que fazer quando duas sessões brigam pela mesma
> tarefa, e por que "deployou" não prova nada.
>
> Tudo aqui saiu de operação real, e cada item existe porque **custou caro uma vez**. Nada foi
> escrito por precaução: se está listado, aconteceu.

---

## 1. O contrato de verificação

A regra mais barata deste documento, e a que resolve mais problema. **Toda afirmação sobre
trabalho feito sai marcada:**

| Marca | Significa |
|---|---|
| ✅ **VERIFICADO** | Testei de fato, e a prova está colada |
| 🔸 **FEITO, NÃO TESTADO** | Subiu, compila, publicou — sem observar o resultado em execução |
| ⚪ **INFERIDO** | Li e parece certo, sem observar o resultado real |

**"Concluído" é palavra reservada.** Só sai quando tudo está em ✅. Se um por cento ficou em 🔸 ou
⚪, diga o que está verificado e o que está pendente — nunca empacote os três como pronto.

**Verificar ≠ a ação que fez a mudança.** Editar o código não é verificar. Ler a configuração não é
verificar. "Compila" e "deployou" não provam nada. Verificação é observar o resultado real **de
fora**.

**Prova aceitável, em ordem de preferência:**

1. saída de comando colada **junto com o comando que a produziu**
2. id devolvido pelo sistema que recebeu
3. releitura por outra rota (outro usuário, outra máquina, aba anônima)
4. contador antes/depois, relido depois de haver tráfego
5. `mtime` e hash antes/depois quando alguém afirma que nada foi tocado
6. cruzamento de duas fontes quando o número importa

**Antes de caçar bug, reproduza o caminho real.** Boa parte do que parece bug é a ferramenta de
diagnóstico enganando quem diagnostica (veja §3).

**Agente que volta com tudo ✅ e nenhuma saída colada é recusado, não corrigido.** Se você aceitar
uma vez, aceita sempre.

---

## 2. Falhar alto — vazio por falha tem a mesma cara de vazio por ausência

O erro mais caro de operação não é o script que quebra. É o script que **não quebra e devolve
zero**.

Um leitor de cota lia campos que a API tinha renomeado. Ele imprimiu `0%` para tudo, com código de
saída 0, num momento em que o consumo real era 74%. Quem lesse aquilo liberaria trabalho caro
achando que a cota estava zerada.

**A regra:** todo script de diagnóstico precisa de um estado explícito de *indisponível*, distinto de
*zero*. Na prática:

- código de saída ≠ 0 quando não conseguiu medir
- mensagem em `stderr` com um prefixo reconhecível (`DIAGNOSTICO_INDISPONIVEL:`, `COTA_INDISPONIVEL:`)
- **nunca** um número neutro como fallback

E o teste que fecha a regra: **rode o script com o comando sabotado** (uma variável de ambiente
errada, um `PATH` inexistente, uma credencial removida) e confirme que ele grita. Um fail-safe que
nunca foi testado falhando é um fail-safe presumido.

---

## 3. A ferramenta de diagnóstico mente — catálogo curto

Cada linha é um caso real em que o sintoma apontava para o lugar errado.

| Sintoma | Causa real | Como pegar |
|---|---|---|
| "O site não registra visita" | Automação de navegador roda em **aba de fundo**; alguns rastreadores adiam o evento enquanto `document.visibilityState` é `hidden` | Cheque `visibilityState` na aba antes de concluir; dispare o evento manualmente e confirme no painel de destino |
| "O POST falhou, status 5xx" | O leitor de rede da extensão reporta status errado para requisições de *beacon* | Confirme com `fetch(...).then(r => r.status)` na própria página, ou no painel do destino |
| "A pasta está vazia" | `ls` sem `-a` não vê arquivo oculto | `ls -la`, sempre |
| "O backup rodou" | O comando de backup falhou em silêncio e o passo destrutivo seguinte rodou assim mesmo | Encadeie com `&&`, confira tamanho/hash do backup **antes** do passo destrutivo |
| "Copiei tudo, `exit 0`" | `exit 0` prova que o comando terminou, não que entregou | Releia o destino: contagem de arquivos + hash |
| "O container está verde" | Healthcheck do container não observa o agendador interno, que morreu | Verifique o efeito (o job rodou?), não a saúde do processo |
| "A tabela mostra entrega" | A tabela grava no enfileiramento, não na entrega | Encontre a fonte que só muda quando o destinatário recebeu |
| "Testei logado e funcionou" | Sessão logada tem permissão que o visitante não tem | Teste em aba anônima, deslogado, de outra rede |
| "Está na documentação" | A documentação da própria casa também precisa de verificação | Trate doc interna como hipótese, não como prova |
| "Cliquei e não aconteceu nada" | Overlay invisível de outro app na frente do alvo | Screenshot antes do clique; confira que o alvo recebeu foco |
| "O agente disse que o arquivo estava lá" | Nome parecido, item diferente numa lista curada | Case por id exato, nunca por posição ou por nome parecido |

---

## 4. Uma tarefa, uma dona — trabalho duplicado é falha de estado, não de atenção

Duas sessões do mesmo squad, abertas em terminais diferentes, pegam a mesma tarefa e a fazem duas
vezes. Ninguém errou; o estado é que não existia fora da cabeça de cada sessão.

**O teste:** *se esta sessão for reiniciada agora, alguém lendo o disco sabe o que está aberto, de
quem é e o que prova?*

O mínimo que resolve:

- **Um arquivo por tarefa**, com `estado`, `dono`, `prazo`, `prova_exigida` e `proximo_passo` no
  cabeçalho. Fechar é mover para uma pasta `fechadas/` **com a prova colada no corpo** — nunca com
  a palavra "feito".
- **Lease com dono nomeado.** Pasta nunca foi trava. O cabeçalho ganha `sessao:` e `lease_ate:`, e o
  acesso passa por um comando que retorna 0 (é sua) ou 1 (recusado). A lease **vence sozinha**, para
  que uma sessão que morreu não tranque a tarefa para sempre.
- **Recusou, não é sua.** Fale com a outra sessão em vez de trabalhar por cima.

Um detalhe que parece burocrático e não é: **o nome da sessão no lease tem que ser o mesmo endereço
que se usa para falar com ela.** Quem for barrado precisa saber exatamente com quem negociar.

---

## 5. O que roda quando nenhuma sessão está viva

Cron agendado dentro de uma sessão morre com ela. Se algo tem hora marcada, ou vai para o
agendador do sistema (`launchd` no macOS, `systemd` no Linux), ou vira tarefa com prazo no
cabeçalho — **nunca uma promessa que só se cumpre se a sessão por acaso estiver de pé.**

Duas armadilhas do macOS que custam uma tarde cada:

1. **Processo lançado pelo `launchd` não enxerga `~/Documents`, `~/Desktop` nem `~/Downloads`.** É
   o TCC (a proteção de privacidade do sistema), e vale inclusive para **leitura**. A saída é a
   inversão: *quem enxerga consolida, quem não enxerga lê o espelho.* A sessão interativa escreve um
   espelho do estado num diretório fora dessas pastas; o serviço lê o espelho.
2. **Espelho ausente ≠ fila vazia.** Se o espelho sumir, o serviço tem que dizer "estou cego" — não
   "não há nada pendente". É o §2 de novo.

---

## 6. Sessão viva ≠ sessão funcionando

Uma sessão pode travar **de pé**: processo existe, CPU em zero, tela congelada no mesmo quadro,
conexões abertas mas paradas. Para o `ps`, está tudo bem. Nenhuma checagem de processo pega isso.

O que pega são **dois sinais independentes**, exigidos juntos:

1. **Dívida de resposta** — a última entrada é de entrada e passou de N minutos sem nenhuma saída
   depois dela.
2. **Imobilidade** — o hash da tela **e** o tempo de CPU idênticos numa janela de ~20 s. Numa
   sessão viva os dois mudam a cada segundo; numa travada ficam byte a byte iguais.

Só com os **dois** o vigia reinicia — uma sessão ocupada num trabalho longo passa no segundo teste e
não pode ser derrubada.

E a parte que sempre falta na recuperação: **matar a sessão não mata o processo travado**, que vira
órfão ainda segurando o arquivo de PID — e aí o guard recusa erguer a substituta. Em processo
travado, `SIGTERM` não pega: a escalada para `SIGKILL` e a limpeza do PID órfão são obrigatórias,
nessa ordem.

---

## 7. Configuração inválida é bomba-relógio

Uma regra de permissão escrita com a sintaxe errada não dá erro na hora de salvar. Ela fica
dormindo até o **próximo restart** — e aí a ferramenta para num diálogo de confirmação antes de
carregar qualquer coisa, sem stacktrace, sem linha em log nenhum. Passou 27 h latente num caso real
e detonou numa troca de modelo que nada tinha a ver.

Três consequências práticas:

- **Toda edição em arquivo de configuração pede um teste de partida a frio**, não só "salvou sem
  erro".
- **Vigia de processo não distingue "travado num diálogo" de "sem serviço registrado".** Se o seu
  reinicia sozinho, ele vai reiniciar em loop, sempre no mesmo diálogo, marcando "em cooldown" e
  parecendo saudável.
- **Guarde backup datado antes de mexer.** É o que permite reverter sem adivinhar o que estava lá.

---

## 8. Caminho com espaço, e retomada que pega a conversa errada

Duas armadilhas pequenas com efeito grande:

- **Caminho com espaço em hook ou script sem aspas.** `/bin/sh` quebra o argumento no espaço, o
  comando falha e — dependendo de como o hook é chamado — **falha em silêncio**. O hook simplesmente
  nunca roda, e ninguém percebe porque não há erro. Aspas em toda variável de caminho, sempre.
- **Retomar "a última conversa" retoma a última conversa da pasta**, que pode não ser a que você
  quer: uma sessão aberta em outro terminal, no mesmo diretório, é mais recente. Grave o
  identificador da sessão que importa num arquivo e retome **por id**, com validação de formato e
  queda para o comportamento padrão (com log) se o id estiver corrompido.

---

## 9. Cota e escolha de modelo

Plano pago tem teto por janela, e o teto do modelo mais caro costuma acabar antes do teto geral.
O que funciona:

- **A sessão principal (longa, cheia de leitura de arquivo e conversa) fica no modelo intermediário.**
  Volume não é complexidade.
- **O modelo mais caro entra como subagente**, em tarefa fechada, e só quando existe uma resposta
  certa que erraria de um jeito caro e silencioso: revisão adversarial de segurança/dado/dinheiro,
  depuração cuja causa já resistiu a uma tentativa, decisão de arquitetura irreversível.
- **Teto diário não é percentual fixo.** É `(100 − consumo_atual) / dias_até_o_reset`, recalculado a
  cada leitura. Gastou menos hoje, amanhã sobe sozinho.
- **Leia o consumo por um endpoint, não por estimativa** — e aplique o §2 ao leitor.
- **Não troque de modelo no meio de uma tarefa em voo.** Termine, depois troque: trocar no meio
  deixa a tarefa sem dono.

---

## 10. Duas máquinas conversando (avançado)

Quando o squad passa a viver em dois lugares — uma máquina local e um servidor — a comunicação
entre eles vira fila de arquivos. O que evita mensagem perdida:

- **Estado mora no cabeçalho da mensagem, nunca na pasta.** `visto:` ao ler, `responde:` ao tratar.
  Mover o arquivo é faxina, não é declaração de estado.
- **Classifique a ação em quatro valores, não três:** `pedido` (exige ação, inclui ordem de parar) ·
  `nenhuma` (informe curto) · `informe` (documento longo) · `irreversivel` (fiz, ou vou fazer, algo
  que não desfaz). Classificar ordem de parada como "nenhuma" já custou caro.
- **"Mandei" não é "chegou".** Enquanto o outro lado não abre a sessão, a mensagem foi *escrita*,
  não *entregue*. Diga sempre qual dos dois.
- **Um arquivo "estou ocupada"** com `desde` / `fazendo` / `regra`, criado **antes** de despachar o
  trabalho pesado, nunca depois. Quem for reiniciar testa a existência dele antes. Espelho
  desatualizado é pior que espelho nenhum: quem cria, apaga.

---

## Como acrescentar a este documento

Um item entra aqui quando **custou tempo de verdade** e a causa não era óbvia pelo sintoma. Escreva
os três campos: o que parecia, o que era, e o que teria pegado mais cedo. Item sem o terceiro campo
é desabafo, não catálogo.

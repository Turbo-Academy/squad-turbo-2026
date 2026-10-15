# Instalar o Squad Turbo 9.0.2

> Versão em texto do manual de instalação. A versão com botões de copiar e abas Mac/Windows está em [ta.turboacademy.com.br/squadturbo](https://ta.turboacademy.com.br/squadturbo/) e em [turbo-academy.github.io/squad-turbo-2026/instalacao-do-zero.html](https://turbo-academy.github.io/squad-turbo-2026/instalacao-do-zero.html).

49 skills e 13 agentes de marketing digital no seu Claude Code. **Você cola uma mensagem, o Claude instala e você só aprova.** Nada de passo a passo no Terminal: a única exceção é uma linha que pede a senha do computador, que o Claude mostra e você roda.

## O que você precisa

- Assinatura do Claude que inclua o Claude Code (Pro ou Max).
- Um Mac, ou um Windows 10/11 com o Ubuntu por dentro (WSL2).
- Uns 2 GB livres para o básico.

## Mac (3 passos)

1. Abra o app do Claude ([claude.ai/download](https://claude.ai/download)), entre na conta, clique em **Code**, comece uma sessão nova e escolha a sua pasta pessoal.
2. Cole a mensagem abaixo, inteira, e aprove o que o Claude pedir.
3. Com o `SQUAD OK` na tela, feche o app (Cmd + Q), abra de novo e mande `@estrategista-turbo, o que você faz e por onde eu começo?`.

## Windows (5 passos)

1. PowerShell **como administrador**: `wsl --install -d Ubuntu`, reinicie se pedir, e confira com `wsl -l -v` (Ubuntu, versão 2).
2. Abra o Ubuntu pelo menu Iniciar, crie usuário e senha. Prova: `echo $HOME` mostra `/home/<seu nome>`.
3. No Ubuntu (pede a senha), uma linha de cada vez:

   ```bash
   sudo apt-get update && sudo apt-get install -y git curl unzip xz-utils python3 python3-venv pipx ffmpeg
   ```

   e as duas linhas do Node 22 e do Claude Code que estão no manual em HTML, passo 3 do Windows (`node -v` começa com v22; `claude --version` responde).
4. `claude`, depois `/login`, entre na conta, `/exit`. Prova: `claude -p "responda só OK"` responde OK. Então `cd ~ && claude` e cole a mensagem abaixo.
5. Com o `SQUAD OK`, `/exit`, `claude` de novo e mande `@estrategista-turbo, o que você faz e por onde eu começo?`.

## A mensagem pro Claude (Mac e Windows)

É uma mensagem só. Copie tudo e cole de uma vez.

```text
Oi, Claude. Quero instalar o Squad Turbo neste computador. É um pacote de agentes e skills de marketing digital pro Claude Code, da Turbo Academy, gratuito para alunos do Funil 8 e da Estratégia: https://github.com/Turbo-Academy/squad-turbo-2026

Eu não uso o Terminal. Você faz tudo, me explica cada passo em português simples antes de rodar, e eu só aprovo. Regras:
- Nunca me peça senha, token ou código pelo chat. Se um comando precisar da senha do computador (sudo, ou o instalador da Homebrew no Mac), não rode: me mostre a linha, eu rodo no Terminal (no Mac) ou numa segunda janela do Ubuntu (no Windows) e te aviso.
- Não apague nada que já exista. Se uma pasta já existir e precisar sair do caminho, renomeie com a data no fim e me diga.
- Não compre nada, não crie conta e não conecte serviço pago sem me perguntar.

1. Conferir o computador. Rode `uname -sm` e `git --version` e me diga o que achou. No Mac, se o git não existir, aparece uma janela pedindo as "ferramentas de linha de comando": eu clico em Instalar e te aviso quando terminar. No Ubuntu, se faltar git, unzip ou python3, me mostre a linha do apt pra eu rodar.

2. Baixar o squad. Se a pasta ~/squad-turbo-2026 não existir, rode:
   git clone --depth 1 https://github.com/Turbo-Academy/squad-turbo-2026.git ~/squad-turbo-2026
   Se ela já existir, rode `git -C ~/squad-turbo-2026 pull --ff-only`. Se o pull falhar, renomeie a pasta antiga pra ~/squad-turbo-2026.antigo-AAAAMMDD e clone de novo.

3. Instalar o básico (skills, agentes e modelos). Rode:
   bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh < /dev/null
   Sem terminal interativo ele instala o básico e pula os opcionais com aviso: é o esperado. Me mostre o resumo do fim.
   Se eu já tinha o squad e editei algum arquivo dele, o instalador guarda o meu numa pasta nova em ~/.claude/squad-turbo-backups/ antes de trocar (linha "guardados em"): me diga quais e onde.
   Se aparecer "INSTALAÇÃO INCOMPLETA" ou "FALHOU", pare e me mostre a linha: não siga como se tivesse dado certo.

4. Programas de vídeo (ffmpeg e yt-dlp), que as skills de vídeo e de cortes usam. Confira com `command -v ffmpeg yt-dlp brew`.
   - Mac com `brew`: `brew install ffmpeg yt-dlp`.
   - Mac sem `brew`: me mostre a linha oficial da Homebrew pra eu rodar no Terminal (ela pede a senha do Mac): /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)". Se o `uname -sm` disse x86_64 (Mac Intel), me mande a linha da seção E2 do manual de instalação no lugar dessa. Depois rode as linhas do "Next steps" que ela imprimir e o `brew install ffmpeg yt-dlp`.
   - Ubuntu (Windows): se faltar o ffmpeg, me mostre `sudo apt-get install -y ffmpeg pipx` pra eu rodar; o yt-dlp você instala sem sudo com `pipx install yt-dlp && pipx ensurepath`.

5. Opcionais. Me pergunte um por vez, dizendo pra que serve e quanto ocupa, e só instale com o meu sim:
   a) transcrição de vídeo local, sem chave de API (~220 MB agora + ~3,5 GB do modelo no primeiro uso): bash ~/.claude/skills/watch/whisper-local/instalar.sh
   b) Scrapling, pro Claude ler qualquer página da web (~1,5 GB): bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-scrapling.sh
   c) stack Picasso, auditoria visual anti-IA (3 skills de terceiros, precisa de Node): os 3 comandos `npx skills add` do bloco "11/11 · Opcionais" do instalar-squad.sh.
   WhatsApp (OpenWA), e-mail marketing (Mautic) e automação (n8n) rodam num servidor (VPS), não neste computador: não instale agora, só me diga que existem e que o passo a passo está no README do repositório.

6. Conferir. Rode `bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir`. Tem que terminar em "SQUAD OK" (se aparecer "SQUAD OK (com N diferença(s) do pacote)", me mostre as linhas "~": é presença conferida, não prova de que nada mudou). Me mostre a saída inteira.

7. Fechar e abrir. Me diga pra fechar o Claude e abrir de novo: skills e agentes só carregam numa sessão nova. Na sessão nova eu vou mandar "@estrategista-turbo, o que você faz e por onde eu começo?".
```

## Conferir

```bash
bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir
```

Tem que terminar em `SQUAD OK: 49 skills · 13 agentes · squad-core` (ou `SQUAD OK (com N diferença(s) do pacote)` se algum arquivo diferir: presença conferida, sem garantia de integridade integral).

## Atualizar pra versão nova

```text
Oi, Claude. Atualize o Squad Turbo deste computador pra versão mais nova, sem apagar nada meu. Me explique cada passo antes de rodar.

1. Rode `bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh --conferir`. Linhas com "~ difere do pacote" são arquivos que não são iguais ao do pacote: pode ser edição minha, outra versão ou arquivo corrompido, então me diga quais são e não presuma a causa. A atualização troca esses arquivos pela versão do pacote, mas o instalador guarda antes o que estava instalado, numa pasta nova em ~/.claude/squad-turbo-backups/.
2. Rode `git -C ~/squad-turbo-2026 pull --ff-only`. Se falhar, renomeie a pasta pra ~/squad-turbo-2026.antigo-AAAAMMDD e clone de novo: git clone --depth 1 https://github.com/Turbo-Academy/squad-turbo-2026.git ~/squad-turbo-2026
3. Rode `bash ~/squad-turbo-2026/99-skills-compartilhaveis/instalar-squad.sh < /dev/null` e me mostre o resumo. Se ele disser que guardou arquivos que diferiam do pacote, me diga a pasta e quais são. Se aparecer "INSTALAÇÃO INCOMPLETA" ou "FALHOU", pare e me mostre.
4. Rode o `--conferir` de novo. Tem que dizer "SQUAD OK" (se sobrar linha "~ difere do pacote", vai aparecer "SQUAD OK (com N diferença(s) do pacote)": me mostre as linhas).
5. Me mostre o que mudou (o topo do ~/squad-turbo-2026/CHANGELOG.md, em português simples) e me diga pra fechar e abrir o Claude.
```

## Quando trava

- Agente não responde depois de instalar: feche o Claude e abra numa sessão nova.
- `git pull` falhou com erro de histórico: a pasta é de antes de 01/10/2026; o Claude renomeia e clona de novo.
- `SQUAD INCOMPLETO`: rode o instalador de novo. O `--conferir` compara cada arquivo byte a byte: `✗ incompleto` = falta ou vazio; `~ difere do pacote` = existe mas não é igual (personalização sua, outra versão ou arquivo corrompido: revise; não reprova, e a última linha vira `SQUAD OK (com N diferença(s) do pacote)`).
- Arquivo que difere do pacote: o instalador guarda uma cópia em `~/.claude/squad-turbo-backups/<data-hora>/` antes de trocar; pra voltar, copie de lá.
- `INSTALAÇÃO INCOMPLETA` / `FALHOU — etapa N`: a linha diz o que falhou; baixe de novo e rode o instalador. Ele termina com erro (código diferente de zero) enquanto houver falha.
- Mac Intel sem Homebrew: a linha oficial não instala mais; use `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/f4aa1b1ca5/install.sh)"` no Terminal.
- Nunca mande senha, token ou código pelo chat do Claude.

## Remover

```text
Oi, Claude. Quero tirar o Squad Turbo deste computador. Não apague nada ainda.

1. Monte a lista do que o pacote instalou: as skills com o mesmo nome dos .zip de ~/squad-turbo-2026/99-skills-compartilhaveis (fora squad-turbo-completo e squad-core-turbo) dentro de ~/.claude/skills, os agentes de ~/squad-turbo-2026/99-skills-compartilhaveis/agents/*-turbo.md dentro de ~/.claude/agents, a pasta ~/.claude/squads/squad-turbo e a própria ~/squad-turbo-2026.
2. Me mostre a lista e o tamanho de cada item. Só apague depois que eu disser "pode apagar", e apague só o que está na lista.
3. No fim, rode `ls ~/.claude/skills ~/.claude/agents` e me mostre o que sobrou.
```

# 🚀 Instalação do zero — do GitHub ao squad rodando no Claude

> **Para quem nunca usou o Claude Code.** Nunca abriu um terminal? Este manual foi escrito pra você.
>
> Em **~20 minutos** você sai do zero com: Claude Code instalado · sua conta conectada · o Squad Turbo completo (42 skills + 13 agentes) dentro dele.
>
> Já tem o Claude Code funcionando? Pula direto pra **Etapa 4**.

---

## ✅ O que você precisa antes de começar

- [ ] Um computador **Mac** ou **Linux** (Windows funciona também — veja a caixa no fim)
- [ ] Uma **conta Claude paga** (plano Pro ou Max) — crie em [claude.ai](https://claude.ai)
- [ ] **~1 GB de espaço livre** (+ ~4 GB opcionais, só se quiser a transcrição local de vídeo)
- [ ] 20 minutos sem interrupção

---

## Etapa 1 · Abrir o Terminal (2 min)

O Terminal é onde você vai colar os comandos deste manual. Não precisa entender ele — só colar e apertar Enter.

**No Mac:**
1. Aperte `Cmd + Espaço` (abre a busca Spotlight)
2. Digite `Terminal` e aperte `Enter`
3. Abre uma janela com texto e um cursor piscando — é aqui que tudo acontece

> 💡 **Como usar:** copie o comando do manual, clique na janela do Terminal, cole (`Cmd + V`) e aperte `Enter`. Espere terminar (o cursor volta a piscar numa linha nova) antes do próximo.

✅ **Checkpoint:** janela do Terminal aberta com o cursor piscando.

---

## Etapa 2 · Instalar o Claude Code (5 min)

Cole no Terminal e aperte Enter:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Quando terminar, **feche o Terminal e abra de novo** (Etapa 1). Aí confira:

```bash
claude --version
```

✅ **Checkpoint:** aparece um número de versão (tipo `2.1.x`). Se aparecer `command not found`, veja o "Deu errado?" no fim.

---

## Etapa 3 · Conectar sua conta Claude (3 min)

No Terminal, digite:

```bash
claude
```

Na primeira vez, o Claude Code:
1. Pergunta o tema (claro/escuro) — escolha com as setas e `Enter`
2. **Abre o navegador** pra você entrar na sua conta claude.ai
3. Faça o login na conta **paga** (Pro ou Max) e autorize
4. Volte pro Terminal — vai estar conectado

Pra sair do Claude por enquanto, digite `/exit` e aperte `Enter` (ou `Ctrl + C` duas vezes).

✅ **Checkpoint:** o Claude respondeu alguma coisa no Terminal antes de você sair.

---

## Etapa 4 · Baixar o squad do GitHub (3 min)

**Jeito A — sem instalar nada (recomendado pra primeira vez):**

1. Abra no navegador: **[github.com/Turbo-Academy/squad-turbo-lpsg-7.0](https://github.com/Turbo-Academy/squad-turbo-lpsg-7.0)**
2. Clique no botão verde **`<> Code`** → **`Download ZIP`**
3. O arquivo cai na pasta **Downloads**
4. Dê **dois cliques** no ZIP — o Mac descompacta e cria a pasta `squad-turbo-lpsg-7.0-main`

**Jeito B — com git (se já usa):**

```bash
git clone https://github.com/Turbo-Academy/squad-turbo-lpsg-7.0.git
```

✅ **Checkpoint:** existe uma pasta `squad-turbo-lpsg-7.0-main` (ou `squad-turbo-lpsg-7.0`) no seu computador.

---

## Etapa 5 · Rodar o instalador guiado (5-10 min)

O squad tem um instalador que faz **tudo sozinho, etapa por etapa**: skills, agentes, dependências de vídeo, transcrição local. Ele mostra ✓ no que está ok, pergunta antes de instalar qualquer coisa opcional e diz exatamente o que fazer se algo faltar.

Cole no Terminal (ajuste o caminho se descompactou em outro lugar):

```bash
cd ~/Downloads/squad-turbo-lpsg-7.0-main
```

```bash
bash 99-skills-compartilhaveis/instalar-squad.sh
```

Durante a execução:

- **`[S/n]`** = pergunta. `Enter` responde **sim**; digite `n` + `Enter` pra pular.
- **Pedir senha** (na instalação do Homebrew/ffmpeg): é a senha do seu computador. **Ela não aparece enquanto digita** — é normal, digite e aperte `Enter`.
- **Transcrição local de vídeo**: opcional. Responda sim se quiser que a skill de vídeo funcione sem chave de API (baixa ~220 MB agora + ~3,5 GB no primeiro uso real).

Pode rodar o instalador de novo quantas vezes quiser — ele só completa o que faltou.

✅ **Checkpoint:** a última linha diz `✅ Tudo instalado.` (ou lista as pendências com a instrução de cada uma).

---

## Etapa 6 · Conferir se funcionou (2 min)

1. **Feche e abra o Terminal** (o Claude Code precisa reiniciar pra enxergar as skills)
2. Entre na pasta do squad e abra o Claude:

```bash
cd ~/Downloads/squad-turbo-lpsg-7.0-main
```

```bash
claude
```

3. Digite `/skills` e aperte `Enter` → a lista deve mostrar as skills do squad (`lpsg-master-turbo`, `oferta-lpsg-turbo`, `watch`…)
4. Teste um agente — digite:

```
@estrategista-turbo se apresenta em 2 linhas
```

✅ **Checkpoint final:** o estrategista respondeu. **O squad está instalado e funcionando.** 🎉

---

## 😵 Deu errado?

| Sintoma | Causa provável | Solução |
|---|---|---|
| `claude: command not found` | Terminal aberto antes da instalação | Feche e abra o Terminal de novo |
| `curl: command not found` | Muito raro no Mac | Instale o Claude pelo app: [claude.ai/download](https://claude.ai/download) |
| Instalador diz `Claude Code não encontrado` | Etapa 2 pulada | Volte pra Etapa 2, depois rode o instalador de novo |
| Senha "não digita" no Terminal | Comportamento normal | A senha fica invisível — digite e aperte Enter |
| `/skills` não mostra as skills do squad | Claude aberto durante a instalação | Feche o Terminal, abra de novo, `claude` de novo |
| Skill de vídeo reclama de ffmpeg | Etapa 5 do instalador foi pulada | Rode o instalador de novo e responda sim |

Travou em outra coisa? Abra o Claude na pasta do squad e cole: `acabei de instalar o squad seguindo o INSTALACAO-DO-ZERO.md e travei nesta etapa: [descreva]`. Ele mesmo te destrava.

---

## 🪟 E no Windows?

O instalador guiado é feito pra Mac/Linux. No Windows, o caminho é o **WSL** (um Linux dentro do Windows, oficial da Microsoft):

1. Abra o **PowerShell como administrador** e rode: `wsl --install`
2. Reinicie o computador e abra o app **Ubuntu**
3. A partir daí, siga este manual da Etapa 2 em diante — dentro do Ubuntu, tudo funciona igual ao Linux

---

## 👉 Próximos passos

O squad está instalado — agora é colocar um lançamento no ar:

1. **[04-manual-de-uso/00-pre-requisitos.md](04-manual-de-uso/00-pre-requisitos.md)** — as contas que o LPSG precisa (Meta, Hotmart, domínio…)
2. **[04-manual-de-uso/manual.html](04-manual-de-uso/manual.html)** — o manual completo de execução, interativo (abra no navegador)
3. Quer conectar ferramentas (Drive, NotebookLM, n8n…)? **[99-skills-compartilhaveis/GUIA-MCPS.md](99-skills-compartilhaveis/GUIA-MCPS.md)** — nenhuma é obrigatória

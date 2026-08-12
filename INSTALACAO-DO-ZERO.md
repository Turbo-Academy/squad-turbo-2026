# 🚀 Instalação do zero — do GitHub ao squad rodando no Claude

> **Para quem nunca usou o Claude Code.** Tudo pelo **app Claude Desktop** — você não precisa abrir o Terminal: quem digita os comandos é o próprio Claude.
>
> Em **~20 minutos** você sai do zero com: app instalado · sua conta conectada · o Squad Turbo completo (42 skills + 13 agentes) respondendo.
>
> Prefere fazer pelo Terminal (CLI)? O caminho equivalente está no [README](README.md#instalar-em-outra-máquina), seção "Instalar em outra máquina".

---

## ✅ O que você precisa antes de começar

- [ ] Um computador **Mac** (Windows funciona também — veja a caixa no fim)
- [ ] Uma **conta Claude paga** (plano Pro ou Max) — crie em [claude.ai](https://claude.ai)
- [ ] **~1 GB de espaço livre** (+ ~4 GB opcionais, só se quiser a transcrição local de vídeo)
- [ ] 20 minutos sem interrupção

---

## Etapa 1 · Instalar o app Claude Desktop (5 min)

1. Baixe o app em **[claude.ai/download](https://claude.ai/download)**
2. Abra o arquivo baixado e **arraste o Claude pra pasta Aplicativos**
3. Abra o Claude (Cmd + Espaço → digite `Claude` → Enter)
4. **Entre na sua conta** claude.ai — a conta **paga** (Pro ou Max)

✅ **Checkpoint:** o app abre e mostra o chat do Claude com seu nome/conta.

---

## Etapa 2 · Baixar o squad do GitHub (3 min)

1. Abra no navegador: **[github.com/Turbo-Academy/squad-turbo-lpsg-7.0](https://github.com/Turbo-Academy/squad-turbo-lpsg-7.0)**
2. Clique no botão verde **`<> Code`** → **`Download ZIP`**
3. O arquivo cai na pasta **Downloads**
4. Dê **dois cliques** no ZIP — cria a pasta `squad-turbo-lpsg-7.0-main`

> 💡 Se quiser, arraste a pasta pra um lugar definitivo (ex.: Documentos). O manual segue como se ela estivesse em Downloads.

✅ **Checkpoint:** existe uma pasta `squad-turbo-lpsg-7.0-main` no seu computador.

---

## Etapa 3 · Abrir a pasta no Code do app (2 min)

O Claude Desktop tem uma área chamada **Code** — é o Claude com mãos: ele lê arquivos e executa comandos dentro de uma pasta que você escolher.

1. No app Claude, clique em **Code** (na barra lateral)
2. Crie uma **nova sessão** e, quando ele pedir a pasta do projeto, **escolha a pasta `squad-turbo-lpsg-7.0-main`** que você baixou
3. Abre um chat normal — a diferença é que esse chat enxerga a pasta do squad

✅ **Checkpoint:** a sessão aberta mostra o nome da pasta `squad-turbo-lpsg-7.0-main`.

---

## Etapa 4 · Mandar o Claude instalar tudo (5-10 min)

Agora é a mágica: **copie o bloco abaixo inteiro e cole no chat** da sessão que você abriu:

```
Instala o Squad Turbo nesta máquina:

1. Rode: bash 99-skills-compartilhaveis/instalar-squad.sh
2. O instalador pula as perguntas quando é você que roda — então complete
   você mesmo as pendências que ele listar com ✗ (ffmpeg, yt-dlp, venv do
   whisper-local), me avisando antes de qualquer download grande.
3. A transcrição local de vídeo eu QUERO (mesmo sabendo dos ~220 MB agora
   e ~3,5 GB no primeiro uso).
4. No fim, rode o instalador de novo e me mostre que ficou tudo ✓.
```

O que vai acontecer:

- **O app pede permissão** antes de cada comando (botão *Permitir/Allow*). É o comportamento normal — leia e autorize.
- O Claude executa o instalador, vê o que faltou e **resolve as pendências sozinho**, te contando o que está fazendo.
- **Único caso em que o Terminal pode aparecer na história:** se o seu Mac não tiver o Homebrew (o "instalador de programas" do Mac), a instalação dele pede a **sua senha** — e senha é uma coisa que o Claude não pode digitar por você. Nesse caso ele te entrega o comando exato pra você colar no Terminal, e depois continua de onde parou.

✅ **Checkpoint:** o Claude te mostra a saída final do instalador com tudo ✓ (ou explica exatamente o que ficou pendente e por quê).

---

## Etapa 5 · Conferir se funcionou (2 min)

As skills carregam quando uma sessão nova abre. Então:

1. **Feche a sessão e abra uma nova** na mesma pasta (Code → nova sessão → `squad-turbo-lpsg-7.0-main`)
2. Digite `/skills` → a lista deve mostrar as skills do squad (`lpsg-master-turbo`, `oferta-lpsg-turbo`, `watch`…)
3. Teste um agente — digite:

```
@estrategista-turbo se apresenta em 2 linhas
```

✅ **Checkpoint final:** o estrategista respondeu. **O squad está instalado e funcionando.** 🎉

---

## 😵 Deu errado?

| Sintoma | Causa provável | Solução |
|---|---|---|
| Não acho o Code no app | Versão antiga do app | Atualize o Claude Desktop ([claude.ai/download](https://claude.ai/download)) |
| O Claude diz que não pode rodar comandos | Sessão aberta no chat comum, não no Code | Refaça a Etapa 3 — tem que ser uma sessão do **Code**, com pasta escolhida |
| Pediu permissão e eu neguei sem querer | — | Peça: `tenta de novo o último comando` e autorize |
| `/skills` não mostra as skills do squad | Sessão aberta antes do fim da instalação | Feche e abra uma sessão nova (Etapa 5) |
| Instalador falou de Homebrew/senha | Mac sem Homebrew | Siga o comando que o Claude te der pro Terminal — é o único passo fora do app |
| Travou em qualquer outra coisa | — | Cole no chat: `estou seguindo o INSTALACAO-DO-ZERO.md e travei nesta etapa: [descreva]` — ele mesmo te destrava |

---

## 🪟 E no Windows?

O app Claude Desktop também existe pra Windows — Etapas 1 a 3 são iguais. No Windows, o Claude Code pode pedir o **Git for Windows** na primeira execução (ele avisa e aponta o download; instale com as opções padrão). Se algo do instalador reclamar de `bash`, cole no chat: `estou no Windows — adapte a instalação pro meu sistema` e deixe o Claude resolver com os equivalentes.

---

## 👉 Próximos passos

O squad está instalado — agora é colocar um lançamento no ar:

1. **[04-manual-de-uso/00-pre-requisitos.md](04-manual-de-uso/00-pre-requisitos.md)** — as contas que o LPSG precisa (Meta, Hotmart, domínio…)
2. **[04-manual-de-uso/manual.html](04-manual-de-uso/manual.html)** — o manual completo de execução, interativo (abra no navegador)
3. Quer conectar ferramentas (Drive, NotebookLM, n8n…)? **[99-skills-compartilhaveis/GUIA-MCPS.md](99-skills-compartilhaveis/GUIA-MCPS.md)** — nenhuma é obrigatória

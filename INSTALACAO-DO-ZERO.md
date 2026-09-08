# 🚀 Instalação do zero — do Mac recém-tirado da caixa ao squad respondendo

> 🌐 **Versão bonita deste manual:** [ta.turboacademy.com.br/squadturbo](https://ta.turboacademy.com.br/squadturbo/) — com botão de copiar em cada comando. (Offline: abra [`instalacao-do-zero.html`](instalacao-do-zero.html) do repo.)

> **Para quem nunca usou o Claude Code.** São **duas partes**: primeiro você prepara o Mac no Terminal (uma vez na vida, ~12 min), depois cola **um comando** no app do Claude e ele instala o squad inteiro.
>
> Total: **~25 minutos**. No fim: Mac preparado · app instalado · Squad Turbo completo respondendo.
>
> Prefere fazer tudo pelo Terminal (CLI)? O caminho equivalente está no [README](README.md#instalar-em-outra-máquina), seção "Instalar em outra máquina".

---

## ✅ O que você precisa antes de começar

- [ ] Um computador **Mac** (Windows funciona também — veja a caixa no fim)
- [ ] Uma **conta Claude paga** (plano Pro ou Max) — crie em [claude.ai](https://claude.ai)
- [ ] **A senha do seu Mac** — vai ser pedida uma vez, na Etapa 2
- [ ] **~2 GB de espaço livre** para o básico (os opcionais pesados vêm depois, e são escolha sua)
- [ ] 25 minutos sem interrupção

---

## 🧭 O mapa: tudo que existe, em que ordem, e o que é obrigatório

Leia esta tabela antes de começar. É o manual inteiro em 12 linhas — o resto do documento é o passo a passo de cada uma.

| # | O quê | Onde | Obrigatório? | Tempo |
|---|---|---|---|---|
| 1 | **Ferramentas de linha de comando da Apple** (Xcode CLT) | Terminal | ✅ base | 3-5 min |
| 2 | **Homebrew** — o instalador de programas do Mac | Terminal | ✅ base | 3-5 min |
| 3 | **git · node · python · ffmpeg · yt-dlp** | Terminal (`brew`) | ✅ base | 4 min |
| 4 | **App Claude Desktop** + login | Site + app | ✅ base | 5 min |
| 5 | **Squad Turbo** — skills, agentes e templates | Chat do Claude | ✅ base | 5-10 min |
| 6 | **Transcrição local de vídeo** (faster-whisper, sem chave de API) | Instalador pergunta | ⬜ opcional · ~4 GB | 10 min |
| 7 | **Scrapling** — o Claude lê qualquer página da web | Instalador pergunta | ⬜ opcional · ~1,5 GB | 10 min |
| 8 | **OpenWA** — WhatsApp dentro do chat | Instalador pergunta | ⬜ opcional · **precisa de VPS** | — |
| 9 | **Mautic** — e-mail marketing próprio | Instalador pergunta | ⬜ opcional · **precisa de VPS** | — |
| 10 | **n8n** — automação dos 14 workflows | Instalador pergunta | ⬜ opcional · **precisa de VPS** | — |
| 11 | **MCPs** (Drive, NotebookLM, Meta Ads…) | Depois, quando quiser | ⬜ opcional | — |

**Os 5 primeiros são o básico e não têm decisão a tomar** — instale todos. Do 6 em diante o instalador **pergunta um a um**, e "não" nunca é a resposta errada: dá pra instalar qualquer um depois, rodando o instalador de novo. Os itens 8, 9 e 10 rodam num servidor (VPS), não no seu Mac — **e cabem os três no mesmo servidor**; se você não tiver um, o instalador te indica.

---

# Parte 1 · Preparar o Mac (Terminal, ~12 min)

> **Por que isto vem primeiro, e por que é no Terminal.** O Homebrew pede **a senha do seu Mac** — e senha é a única coisa que o Claude não digita por você, nunca. Se você pular esta parte, a instalação do squad anda até a metade e trava exatamente aqui. Fazendo agora, o resto corre sem interrupção.
>
> **É uma vez na vida.** Máquina já preparada? Pule pra Parte 2 — mas rode antes o comando de conferência do fim da Etapa 3.

**Abra o Terminal:** `Cmd + Espaço` → digite `Terminal` → Enter. Abre uma janela com texto e um cursor piscando. É aí que vão os comandos abaixo — um de cada vez, Enter depois de cada um, esperando o anterior terminar.

---

## Etapa 1 · Ferramentas de linha de comando da Apple (3-5 min)

```
xcode-select --install
```

Abre uma janelinha do sistema pedindo confirmação → clique em **Instalar** e aceite os termos.

> Se responder `command line tools are already installed`, ótimo: já estava lá, siga em frente.
> Isso **não** é o Xcode inteiro (aqueles 12 GB) — são só as ferramentas de compilação, algumas centenas de MB. O Homebrew não vive sem elas.

✅ **Checkpoint:** `xcode-select -p` responde com um caminho, tipo `/Library/Developer/CommandLineTools`.

---

## Etapa 2 · Homebrew — o instalador de programas do Mac (3-5 min)

O Homebrew é o que deixa você instalar programas com um comando só. Praticamente tudo que vem depois passa por ele.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Vai pedir a senha do seu Mac.** Digite e dê Enter — **o Terminal não mostra nada enquanto você digita**, nem asterisco, nem bolinha. É assim mesmo; não está travado.

Quando terminar, o próprio Homebrew imprime um bloco chamado **"Next steps"** com dois ou três comandos. **Rode todos** — são eles que ensinam o Mac a achar o Homebrew. Em Mac com chip Apple (M1/M2/M3/M4) são estes:

```
echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

> **Mac Intel** (mais antigo): o caminho é `/usr/local/bin/brew`, não `/opt/homebrew/bin/brew`. Use o que o **seu** "Next steps" mostrou — ele já sabe qual é o seu caso. Na dúvida, copie de lá, não daqui.

✅ **Checkpoint:** `brew --version` responde `Homebrew 4.x`. Se responder `command not found`, os comandos do "Next steps" não foram rodados — volte e rode.

---

## Etapa 3 · O básico: git, node, python, ffmpeg e yt-dlp (4 min)

Um comando instala os cinco:

```
brew install git node python ffmpeg yt-dlp
```

O que cada um faz, pra você saber o que está pondo na máquina:

| Programa | Pra quê o squad usa |
|---|---|
| **git** | baixar e atualizar o squad (e qualquer repositório) |
| **node** | rodar o Claude Code e as ferramentas conectadas (MCPs) |
| **python** | os scripts do squad — geradores de slide, carrossel, análise |
| **ffmpeg** | cortar, converter e extrair quadros de vídeo |
| **yt-dlp** | baixar vídeo do YouTube pro squad assistir de verdade |

✅ **Checkpoint — cole tudo de uma vez e confira que os seis respondem com uma versão:**

```
brew --version && git --version && node --version && python3 --version && ffmpeg -version | head -1 && yt-dlp --version
```

Se **algum** responder `command not found`, rode `brew install <o que faltou>` e confira de novo. Não siga em frente com pendência aqui — é exatamente isso que trava a Parte 2.

---

# Parte 2 · Instalar o squad (app do Claude, ~15 min)

## Etapa 4 · Instalar o app Claude Desktop (5 min)

1. Baixe o app em **[claude.ai/download](https://claude.ai/download)**
2. Abra o arquivo baixado e **arraste o Claude pra pasta Aplicativos**
3. Abra o Claude (`Cmd + Espaço` → digite `Claude` → Enter)
4. **Entre na sua conta** claude.ai — a conta **paga** (Pro ou Max)

✅ **Checkpoint:** o app abre e mostra o chat do Claude com seu nome/conta.

---

## Etapa 5 · Abrir uma sessão no Code (2 min)

O **Code** é a área do app em que o Claude tem mãos: lê arquivos e executa comandos numa pasta que você escolher.

1. No app Claude, clique em **Code** (na barra lateral)
2. Crie uma **nova sessão** e, quando ele pedir a pasta, escolha onde o squad vai morar — **Documentos** serve perfeitamente
3. Abre um chat normal — a diferença é que esse chat trabalha dentro da pasta escolhida

✅ **Checkpoint:** sessão aberta mostrando o nome da pasta (ex.: `Documentos`).

---

## Etapa 6 · Colar o comando de instalação (5-10 min)

Cole isto no chat e aperte Enter:

```
instale o squad github.com/Turbo-Academy/squad-turbo-2026
```

Só isso. O Claude baixa o repositório pra pasta, lê as instruções que estão nele e roda o **instalador guiado** (`instalar-squad.sh`), que instala as skills, os agentes e os templates mostrando ✓ etapa por etapa.

> 💡 **Se o Claude pedir mais direção** (ou você quiser controle fino), cole este complemento:
>
> ```
> Baixe o repositório pra esta pasta e rode
> bash 99-skills-compartilhaveis/instalar-squad.sh
> e complete as pendências que ele marcar com ✗.
> Já preparei o Mac: Homebrew, git, node, python, ffmpeg e yt-dlp estão instalados.
> No fim, rode o instalador de novo e me mostre tudo ✓.
> ```

O que esperar durante a execução:

- **O app pede permissão** antes de cada comando (botão *Permitir/Allow*). É o comportamento normal — leia e autorize.
- **Nada vai travar pedindo senha**, porque você já fez a Parte 1. Era esse o ponto dela.
- **Os opcionais vão aparecer um a um** — é a Etapa 7, logo abaixo. Leia antes de responder.

✅ **Checkpoint:** o Claude mostra a saída final do instalador com o básico todo ✓.

---

## Etapa 7 · Os opcionais — o instalador pergunta, você decide

Aqui o instalador para e pergunta, um de cada vez. Nenhum é obrigatório e **nenhum é definitivo**: para instalar depois, rode `bash 99-skills-compartilhaveis/instalar-squad.sh` de novo — ele é idempotente e só faz o que estiver faltando.

| Opcional | O que você ganha | O que custa | Dá pra instalar depois? |
|---|---|---|---|
| **Transcrição local de vídeo** | transcrever aula, VSL e Reels **na sua máquina**, sem chave de API e sem o áudio sair do Mac | ~220 MB agora + ~3,5 GB no primeiro uso | sim |
| **Scrapling** | o Claude lê qualquer página da web — inclusive landing de concorrente com JavaScript ou bloqueio | ~1,5 GB | sim |
| **OpenWA** | WhatsApp dentro do chat: ler e responder 1:1, grupos e etiquetas | precisa de **VPS** com Docker | sim |
| **Mautic** | e-mail marketing próprio: nutrição, landing, formulário e rastreamento **sem custo por lead** | precisa de **VPS** | sim |
| **n8n** | os 14 workflows rodando sozinhos: webhook da Hotmart, lembrete de aula, tsunami, recuperação D+1-D+7 | precisa de **VPS** | sim |

**Recomendação honesta pra primeira instalação:** **sim** para a transcrição local e o Scrapling — são os dois que mudam o dia a dia. **Não** para os três de servidor: volte neles quando tiver um VPS e um lançamento de verdade no ar, e aí instale os três no mesmo servidor.

> 📦 **Skills de terceiro.** No fim, o instalador cita uma lista de skills úteis escritas por
> **outras pessoas** — reescrita anti-IA, posts de LinkedIn, thumbnail, pesquisa de nicho. O squad
> **não redistribui** essas: sem licença do autor, republicar não é nosso direito. A lista, com
> autor, licença e origem de cada uma, está em
> [`99-skills-compartilhaveis/SKILLS-DE-TERCEIRO.md`](99-skills-compartilhaveis/SKILLS-DE-TERCEIRO.md).
> Instalar é opcional e vem da fonte do autor, com a licença do autor.

✅ **Checkpoint:** o instalador terminou e listou o que ficou ✓ e o que você escolheu pular.

---

## Etapa 8 · Conferir se funcionou (2 min)

**Tudo que acabou de ser instalado — skills, agentes e conexões (MCPs) — só carrega quando uma sessão nova abre.** A sessão da instalação não enxerga o que ela mesma instalou. Então:

1. **Feche a sessão e abra uma nova** — desta vez escolhendo a pasta do squad que o Claude criou (`squad-turbo-2026`, dentro de Documentos)
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
| `brew: command not found` depois de instalar o Homebrew | Os comandos do "Next steps" não foram rodados | Volte à Etapa 2 e rode todos — sem eles o Mac não acha o Homebrew |
| Digitei a senha e não apareceu nada na tela | Comportamento normal do Terminal | Continue digitando e dê Enter — senha nunca aparece, nem como asterisco |
| `brew install` falha com erro de compilação | Xcode CLT faltando | Refaça a Etapa 1 (`xcode-select --install`) e tente de novo |
| Não acho o Code no app | Versão antiga do app | Atualize o Claude Desktop ([claude.ai/download](https://claude.ai/download)) |
| O Claude diz que não pode rodar comandos | Sessão aberta no chat comum, não no Code | Refaça a Etapa 5 — tem que ser uma sessão do **Code**, com pasta escolhida |
| O Claude não conseguiu baixar o repositório | Rede bloqueou o git | Cole: `baixe o ZIP do branch main desse repositório com curl e descompacte` |
| Pediu permissão e eu neguei sem querer | — | Peça: `tenta de novo o último comando` e autorize |
| `/skills` não mostra as skills · agente não responde ao `@nome` · Scrapling não lê páginas | Sessão aberta antes do fim da instalação — nada recém-instalado carrega nela | Feche e abra uma sessão nova (Etapa 8) |
| A instalação parou pedindo senha | Parte 1 pulada | Faça a Parte 1 no Terminal e peça no chat: `continue de onde parou` |
| Mudei de ideia num opcional | — | Rode `bash 99-skills-compartilhaveis/instalar-squad.sh` de novo — ele só faz o que falta |
| Travou em qualquer outra coisa | — | Cole no chat: `estou seguindo o INSTALACAO-DO-ZERO.md e travei nesta etapa: [descreva]` — ele mesmo te destrava |

---

## 🪟 E no Windows?

O app Claude Desktop também existe pra Windows — as Etapas 4 a 8 são iguais. **A Parte 1 muda:** no lugar do Homebrew, o equivalente é o **winget**, que já vem no Windows 11. Abra o **PowerShell** e rode:

```
winget install Git.Git OpenJS.NodeJS Python.Python.3.12 Gyan.FFmpeg yt-dlp.yt-dlp
```

Depois **feche e reabra o PowerShell** (é o equivalente ao "Next steps" do Homebrew: sem reabrir, o Windows ainda não achou os programas novos) e confira com `git --version` e `node --version`. Em seguida cole o comando da Etapa 6 acrescentando: `estou no Windows — adapte a instalação pro meu sistema`.

---

## 💪 O que o squad é capaz de fazer

Tudo se pede **em português, no chat**. O que você acabou de instalar:

### O lançamento inteiro, com um comando

O `@lpsg-master-turbo` roda as 10 fases do método LPSG de ponta a ponta: pesquisa e briefing **pra você aprovar** → estrutura das 6 aulas (5+1) → oferta (stack de valor, bônus tsunami, dupla garantia) → páginas de venda com ficha de qualificação → 15 criativos → campanha de Meta Ads → mensageria do evento → 14 automações (n8n + ManyChat) → dashboard → operação e pós-venda. Ele executa; você aprova nos pontos críticos.

### 13 especialistas de plantão (chame por `@nome`)

| Quem | Faz o quê |
|---|---|
| `@estrategista-turbo` | Orquestra o squad, diagnostica campanha e lançamento |
| `@pesquisador-turbo` | Fundação do projeto: voz, avatar, oferta, briefing |
| `@pesquisador-mercado-turbo` | Concorrência, benchmarks, objeções de mercado |
| `@copywriter-turbo` | Toda copy: páginas, aulas, pitch, emails, mensageria |
| `@diretor-criativo-turbo` + `@designer-turbo` | Direção visual e execução: landing pages, criativos, slides |
| `@trafego-turbo` | Meta Ads e Google Ads: estruturar, otimizar, diagnosticar |
| `@social-turbo` | Reels, stories e calendário de conteúdo orgânico |
| `@automacao-turbo` | Fluxos n8n, ManyChat e mensageria do evento |
| `@closer-turbo` | Vendas 1:1: scripts por tier, recuperação de carrinho D+1-D+7 |
| `@cs-turbo` | Pós-venda: onboarding, NPS, depoimentos, retenção |
| `@picasso-auditor-turbo` | Gate visual: elimina cara de design feito por IA |
| `@revisor-copy-turbo` | Gate textual: caça clichê de IA e protege a conta de ads |

### Outros motores de negócio prontos

**Funil 8** (produto de entrada de R$ 35-98 com order bumps e campanha de cost cap) · **Turbo Express** (ciclo de venda de 14 dias em grupo fechado de WhatsApp) · **Distribuição Turbo** (funil de consciência C0-C3 no orgânico) · **aula de aquecimento perpétua** entre edições · e um **CRM próprio** (Next.js + Supabase) que aposenta as planilhas do closer e do CS.

### Ferramentas do dia a dia

- **Assistir vídeo de verdade** — frames + transcrição: engenharia reversa de VSL, Reels e anúncio de concorrente (e transcrição local, sem chave de API)
- **Ler qualquer página da web** — landing de concorrente, mesmo com JavaScript ou bloqueio, direto no chat
- **VSL completa** via RMBC, com versão pronta pra teleprompter em `.docx`
- **Slides premium de aula**, carrosséis e stories de Instagram, ebooks e manuais em HTML
- **Análise estratégica de Instagram** (seu perfil ou concorrente) e **Meta Ads pela CLI oficial** (batelada, stop-loss, escala)
- **WhatsApp no chat** (opcional, com seu servidor OpenWA): ler e responder mensagens 1:1, grupos e etiquetas — a recuperação do closer sem sair do Claude
- **E-mail marketing próprio** (opcional, Mautic no seu VPS): nutrição por e-mail, landing pages, formulários e rastreamento — **sem custo por lead**, você paga só o servidor
- **Automação dos 14 workflows** (opcional, n8n no seu VPS): webhook da Hotmart, ficha de interesse, lembretes das aulas, tsunami e recuperação D+1-D+7 rodando sozinhos

### Experimente agora (cola no chat)

```
@pesquisador-mercado-turbo analisa a página deste concorrente: [URL]
```

```
@copywriter-turbo escreve 5 headlines pra página de ingresso de um evento sobre [seu tema]
```

E quando estiver pronto pro lançamento completo: `@lpsg-master-turbo crie meu LPSG`.

---

## 👉 Próximos passos

O squad está instalado — agora é colocar um lançamento no ar:

1. **[04-manual-de-uso/00-pre-requisitos.md](04-manual-de-uso/00-pre-requisitos.md)** — as contas que o LPSG precisa (Meta, Hotmart, domínio…)
2. **[04-manual-de-uso/manual.html](04-manual-de-uso/manual.html)** — o manual completo de execução, interativo (abra no navegador)
3. Quer conectar ferramentas (Drive, NotebookLM, n8n…)? **[99-skills-compartilhaveis/GUIA-MCPS.md](99-skills-compartilhaveis/GUIA-MCPS.md)** — nenhuma é obrigatória

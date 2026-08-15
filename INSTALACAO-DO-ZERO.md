# 🚀 Instalação do zero — um comando no Claude e o squad instalado

> 🌐 **Versão bonita deste manual:** abra [`instalacao-do-zero.html`](instalacao-do-zero.html) no navegador (funciona offline, com botões de copiar em cada comando). O conteúdo é o mesmo.

> **Para quem nunca usou o Claude Code.** Tudo pelo **app Claude Desktop**: você cola **um comando com o link do GitHub** e o próprio Claude baixa o squad e instala tudo. Sem Terminal, sem ZIP, sem git.
>
> Em **~15 minutos**: app instalado · conta conectada · Squad Turbo completo (43 skills + 13 agentes) respondendo.
>
> Prefere fazer pelo Terminal (CLI)? O caminho equivalente está no [README](README.md#instalar-em-outra-máquina), seção "Instalar em outra máquina".

---

## ✅ O que você precisa antes de começar

- [ ] Um computador **Mac** (Windows funciona também — veja a caixa no fim)
- [ ] Uma **conta Claude paga** (plano Pro ou Max) — crie em [claude.ai](https://claude.ai)
- [ ] **~1 GB de espaço livre** (+ opcionais: ~4 GB da transcrição local de vídeo · ~1,5 GB do Scrapling, que deixa o Claude ler páginas da web)
- [ ] 15 minutos sem interrupção

---

## Etapa 1 · Instalar o app Claude Desktop (5 min)

1. Baixe o app em **[claude.ai/download](https://claude.ai/download)**
2. Abra o arquivo baixado e **arraste o Claude pra pasta Aplicativos**
3. Abra o Claude (Cmd + Espaço → digite `Claude` → Enter)
4. **Entre na sua conta** claude.ai — a conta **paga** (Pro ou Max)

✅ **Checkpoint:** o app abre e mostra o chat do Claude com seu nome/conta.

---

## Etapa 2 · Abrir uma sessão no Code (2 min)

O **Code** é a área do app em que o Claude tem mãos: lê arquivos e executa comandos numa pasta que você escolher.

1. No app Claude, clique em **Code** (na barra lateral)
2. Crie uma **nova sessão** e, quando ele pedir a pasta, escolha onde o squad vai morar — **Documentos** serve perfeitamente
3. Abre um chat normal — a diferença é que esse chat trabalha dentro da pasta escolhida

✅ **Checkpoint:** sessão aberta mostrando o nome da pasta (ex.: `Documentos`).

---

## Etapa 3 · Colar o comando de instalação (5-10 min)

Cole isto no chat e aperte Enter:

```
instale o squad github.com/Turbo-Academy/squad-turbo-lpsg-7.0
```

Só isso. O Claude vai baixar o repositório pra pasta, ler as instruções que estão nele e rodar o **instalador guiado** (`instalar-squad.sh`), que instala as 43 skills, os 13 agentes e as dependências, mostrando ✓ etapa por etapa.

> 💡 **Se o Claude pedir mais direção** (ou você quiser controle fino), cole este complemento:
>
> ```
> Baixe o repositório pra esta pasta (sem git no sistema, use o ZIP do
> branch main via curl — NÃO instale o Xcode), rode
> bash 99-skills-compartilhaveis/instalar-squad.sh
> e complete as pendências que ele marcar com ✗.
> Quero a transcrição local de vídeo (sei dos ~220 MB agora + ~3,5 GB no 1º uso)
> e quero o Scrapling (leitura de páginas web, sei dos ~1,5 GB).
> No fim, rode o instalador de novo e me mostre tudo ✓.
> ```

O que esperar durante a execução:

- **Não precisa ter git instalado.** Mac novo não vem com git — e tudo bem: o Claude baixa o repositório direto (o repo é público e o Mac já vem com as ferramentas de download). As instruções pra isso estão dentro do próprio repositório.
- **Dois opcionais vão ser oferecidos** durante a instalação: a **transcrição local de vídeo** (~4 GB) e o **Scrapling** (~1,5 GB — o Claude passa a ler páginas da web, útil pra pesquisa de concorrência). Responda sim ou não; qualquer um dá pra instalar depois.
- **O app pede permissão** antes de cada comando (botão *Permitir/Allow*). É o comportamento normal — leia e autorize.
- **Único caso que sai do app:** se o seu Mac não tiver o Homebrew (o "instalador de programas" do Mac), a instalação dele pede a **sua senha** — e senha é algo que o Claude não pode digitar por você. Ele te entrega o comando exato pra colar no Terminal e continua de onde parou.

✅ **Checkpoint:** o Claude mostra a saída final do instalador com tudo ✓ (ou explica o que ficou pendente e por quê).

---

## Etapa 4 · Conferir se funcionou (2 min)

**Tudo que acabou de ser instalado — skills, agentes e conexões (MCPs) — só carrega quando uma sessão nova abre.** A sessão da instalação não enxerga o que ela mesma instalou. Então:

1. **Feche a sessão e abra uma nova** — desta vez escolhendo a pasta do squad que o Claude criou (`squad-turbo-lpsg-7.0`, dentro de Documentos)
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
| O Claude diz que não pode rodar comandos | Sessão aberta no chat comum, não no Code | Refaça a Etapa 2 — tem que ser uma sessão do **Code**, com pasta escolhida |
| O Claude não conseguiu baixar o repositório | Sem git ou rede bloqueou | Cole: `baixe o ZIP do branch main desse repositório com curl e descompacte` |
| Pediu permissão e eu neguei sem querer | — | Peça: `tenta de novo o último comando` e autorize |
| `/skills` não mostra as skills · agente não responde ao `@nome` · Scrapling não lê páginas | Sessão aberta antes do fim da instalação — nada recém-instalado carrega nela | Feche e abra uma sessão nova (Etapa 4) |
| Instalador falou de Homebrew/senha | Mac sem Homebrew | Siga o comando que o Claude te der pro Terminal — é o único passo fora do app |
| Travou em qualquer outra coisa | — | Cole no chat: `estou seguindo o INSTALACAO-DO-ZERO.md e travei nesta etapa: [descreva]` — ele mesmo te destrava |

---

## 🪟 E no Windows?

O app Claude Desktop também existe pra Windows — Etapas 1 e 2 são iguais. No Windows, o Claude Code pode pedir o **Git for Windows** na primeira execução (ele avisa e aponta o download; instale com as opções padrão). Depois cole o mesmo comando da Etapa 3 acrescentando: `estou no Windows — adapte a instalação pro meu sistema`.

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

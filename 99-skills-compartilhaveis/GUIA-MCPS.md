# Guia de conexão de MCPs · Squad Turbo

> **O que é MCP:** o "cabo" que liga o Claude direto às suas ferramentas. Sem ele, o Claude te
> guia clique a clique. Com ele, o Claude **executa** — cria a tabela, publica o workflow, lê a
> métrica. É a diferença entre um assistente que explica e um que faz.
>
> **Nada aqui é obrigatório pra usar o squad.** As skills e agentes funcionam sem MCP nenhum —
> eles só degradam pro modo "te ensino a fazer". Conecte o que fizer sentido pro seu momento.

---

## Como conectar (as 3 formas)

### 1 · Servidor local (stdio) — a mais comum

```bash
claude mcp add --scope user <nome> -- npx -y <pacote-npm>
```

Com variável de ambiente (token, config):

```bash
claude mcp add --scope user <nome> -e CHAVE=valor -- npx -y <pacote-npm>
```

### 2 · Servidor remoto (HTTP)

```bash
claude mcp add --scope user --transport http <nome> https://url-do-servidor/mcp
```

Com cabeçalho de autenticação:

```bash
claude mcp add --scope user --transport http <nome> https://url/mcp --header "Authorization: Bearer SEU_TOKEN"
```

### 3 · Conectores da interface (Google, Slack, Notion, Figma, Canva…)

Não são instalados por linha de comando: ative em **claude.ai → Configurações → Conectores**,
ou no app do Claude. Eles pedem login OAuth na hora (você autoriza na sua conta).

### Escolhendo o escopo (`--scope`)

| Escopo | Onde vale | Quando usar |
|---|---|---|
| `user` | **todos os seus projetos** (global) | padrão pra ferramenta que você usa sempre |
| `local` | só o projeto atual, só pra você | teste, ou credencial de um cliente específico |
| `project` | o projeto, compartilhado no repo (`.mcp.json`) | quando o time inteiro precisa do mesmo servidor |

### Conferir se funcionou

```bash
claude mcp list       # lista todos + status de conexão (✔ Connected)
claude mcp get <nome> # detalhe de um servidor
claude mcp remove --scope user <nome>
```

> ⚠️ **As ferramentas do MCP novo só aparecem na PRÓXIMA sessão** do Claude Code. Registrou? Reinicie.

---

## Os MCPs do Squad Turbo

Nenhum é obrigatório. A coluna "sem ele" diz o que acontece se você não conectar.

| MCP | Pra que serve no squad | Quem usa | Sem ele |
|---|---|---|---|
| **Google Drive** | Sobe o briefing de aprovação em `.docx`/Doc pro cliente revisar | `briefing-aprovacao-turbo` | O `.docx` é gerado local e você sobe à mão |
| **Windsor.ai** | Puxa métricas de Instagram pra análise de perfil | `instagram-analise-estrategica-turbo` | Você cola os números manualmente no prompt |
| **Vercel** | Deploy das páginas e do dashboard, logs de build e runtime | `deploy-to-vercel`, designer, tráfego | Deploy pelo `vercel` CLI ou pelo painel |
| **Playwright** | Teste E2E das páginas (ficha, checkout) | `playwright-skill`, `webapp-testing` | Você testa no navegador na mão |
| **NotebookLM** | Pergunta a notebooks de pesquisa com citação, gera Audio Overview | pesquisa | Pesquisa direto no site |
| **Google Sheets** | Backup de respostas de pesquisa/ficha e espelho de métricas | dashboards, automações | Planilha na mão ou via n8n |
| **Scrapling** ⭐ | Lê página de concorrente, landing e anúncio (HTTP, navegador ou stealth) e devolve markdown/texto; tira print | `pesquisador-mercado-turbo`, `criador-paginas-low-ticket-turbo` (engenharia reversa de página) | O Claude lê só o que o WebFetch alcança; página com JS ou bloqueio fica de fora |
| **OpenWA** ⭐ | WhatsApp no chat: ler e enviar mensagem 1:1, grupos, etiquetas — no SEU servidor self-hosted | closer (recuperação 1:1), CS, automação | Closer e CS operam pelo wa.me + celular, como sempre |

> **OpenWA instala junto com o squad** — é o passo 8 do `instalar-squad.sh` (opcional), ou avulso:
> `bash 99-skills-compartilhaveis/instalar-openwa.sh`. **Requer servidor próprio**: o OpenWA
> (github.com/rmyndharis/OpenWA) roda na SUA infraestrutura (VPS + Docker + número pareado) —
> o script não instala o servidor, ele registra a conexão (MCP http, escopo user) com a URL e a
> `x-api-key` que VOCÊ informa. Rode o script no Terminal: ele pergunta a chave **sem ecoar** —
> chave não passa por chat, repo nem print. **Juízo no uso:** o WhatsApp bane número que dispara
> em massa; o método é 1:1 (closer, CS, operação) — lista de transmissão não passa por aqui.

> **Scrapling instala junto com o squad** — é o passo 7 do `instalar-squad.sh` (opcional, ~1,5 GB),
> ou avulso: `bash 99-skills-compartilhaveis/instalar-scrapling.sh`. Ele já registra o MCP no escopo
> `user`. Ferramentas: `get` · `fetch` · `stealthy_fetch` (+ versões `bulk_*`) · `screenshot` ·
> `open_session`/`close_session`/`list_sessions`. Manual em [`scrapling-COMO-USAR.md`](./scrapling-COMO-USAR.md).
> **A doutrina de uso está na skill `leitura-web-turbo`** — a escada (WebFetch → `get` → `fetch` →
> `stealthy_fetch`), o seletor CSS pra não queimar contexto, as receitas do squad e os limites.
> Os 3 agentes donos já a carregam; você não precisa fazer nada além de instalar.
> **Use com juízo:** robots.txt, termos do site e LGPD — nada de dado pessoal de terceiros.

### Meta Ads NÃO é MCP (leia isto antes de procurar)

O squad opera Meta Ads pela **CLI oficial + Graph API**, não por MCP. Quem cuida disso é a dupla
`meta-ads-cli-setup-turbo` (conectar do zero: token de System User, permissões, 1ª chamada) e
`meta-ads-cli-turbo` (operação: batelada, stop-loss, escala). Não procure "MCP do Meta" —
siga a skill de setup.

---

## Os MCPs do LPSG Guiado (infra do lançamento recorrente)

A skill `lpsg-guiado` monta o encanamento (banco → WhatsApp → n8n → painel). Ela **tenta o MCP
primeiro** e só cai no manual quando não existe. Estes são os que destravam trabalho:

| Ferramenta | Tem MCP? | O que o Claude passa a fazer sozinho |
|---|---|---|
| **n8n** | Sim | Criar, editar, testar e publicar os 4 workflows (CADASTROS · INFRA · REGISTROS · PAINEL API) |
| **PostgreSQL** | Sim (ou pelos nós do próprio n8n) | Criar schema e tabelas, rodar as consultas, conferir os dados |
| **DataCrazy** | Sim | Ler campos e tags, apoiar onboarding e segmentação por turma |
| **Sendflow** | Sim | Gerir grupos e campanhas, variáveis de link, conferir disparos por fase |
| **Google Sheets** | Sim | Backup das respostas e espelho de métricas |
| **Plataforma de vendas** (Guru, Hotmart, Kiwify, Eduzz) | Às vezes | Se houver conector, o Claude sugere; senão, guia o webhook manual |
| **ManyChat / Unnichat** | Normalmente não | Configuração por token/API dentro do workflow |
| **Switchy** (link curto) | Não — é por API | Criação e troca do link curto dentro dos workflows |

> **Não sabe se uma ferramenta tem MCP?** Peça: *"procure um conector para X"*. O Claude busca no
> registro e sugere instalar quando existir.

---

## Exemplo completo (com uma armadilha real)

O NotebookLM, instalado neste ambiente, serve de modelo do fluxo inteiro:

```bash
# 1. registrar (global, com variável de ambiente)
claude mcp add --scope user notebooklm -e BROWSER_CHANNEL=chromium -- npx -y notebooklm-mcp@latest

# 2. conferir
claude mcp list        # notebooklm: ✔ Connected

# 3. reiniciar o Claude Code (as ferramentas só carregam na próxima sessão)
```

O `-e BROWSER_CHANNEL=chromium` existe por um motivo concreto: **no macOS 26 (Tahoe) o Chrome do
sistema quebra ao abrir com perfil persistente**, e sem essa variável a autenticação falha em um
segundo com uma mensagem genérica. É o tipo de detalhe que vive no `docs/troubleshooting.md` do
projeto do MCP — **leia o do seu** antes de concluir que "não funciona".

---

## Quando algo não conecta

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| Registrei e a entrada some do `~/.claude.json` | O app do Claude Code aberto reescreve o arquivo a partir da memória dele | Feche o app → rode o `claude mcp add` → reabra. Ou adicione pela interface |
| `claude mcp list` diz Connected, mas o Claude não vê as ferramentas | Servidor registrado depois do início da sessão | Reinicie o Claude Code |
| Servidor conecta e as ferramentas falham na 1ª chamada | Falta autenticação (token ou login OAuth do próprio serviço) | Rode a ferramenta de setup/auth do MCP e faça o login você mesmo |
| Precisa de login numa conta sua | Normal | **Quem digita senha é você.** O Claude abre a janela; credencial não passa por ele |

---

## Regra de segurança (vale pra todos)

- **Token e senha nunca no chat, nunca no repo.** Passe por `-e VAR=valor` no registro do MCP, ou
  por variável de ambiente/`.env` fora do git.
- Conectou um MCP com acesso de escrita (banco, n8n, ads)? Ele pode **mudar coisa de verdade**.
  Os agentes do squad pedem confirmação antes, mas a regra da casa continua: **o que gasta dinheiro
  ou vai pro público nasce pausado e quem ativa é humano**.
- Ao compartilhar o repo, confira que nenhum `.mcp.json` de escopo `project` levou credencial junto.

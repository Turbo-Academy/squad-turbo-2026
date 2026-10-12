# Changelog · Squad Turbo LPSG

## 9.0.1 — 12/10/2026

**Instalador: o que você personalizou não se perde mais**

- `instalar-squad.sh` guarda, antes de trocar, todo arquivo de skill, agente ou squad-core que esteja diferente do pacote
  (você editou). A cópia vai pra uma pasta nova e única, `~/.claude/squad-turbo-backups/<data-hora>-<sufixo>/`, com o mesmo
  caminho de dentro do `~/.claude`; rodar de novo cria outra pasta e nunca sobrescreve a anterior. Se a cópia não puder ser
  feita (ou não bater byte a byte), o instalador para **antes** de mexer em qualquer coisa (código de saída 3).
- Falha nas etapas obrigatórias (2 skills, 3 agentes, 4 squad-core) agora aparece como `✗ FALHOU — etapa N (...)`, com o
  arquivo, nunca com "ok"; o resumo diz `INSTALAÇÃO INCOMPLETA` e o código de saída é 2. Zip corrompido é detectado antes
  de extrair.
- `--conferir` passa a comparar cada arquivo do pacote, byte a byte, com o instalado (o próprio zip é o manifesto). Separa
  `✗ incompleto` (arquivo que falta ou ficou vazio: rc 1) de `~ personalizado` (arquivo que você editou: não é erro). Nunca
  escreve nada.
- Mensagens de instalar e atualizar do manual dizem ao Claude onde ficam as cópias e que deve parar se aparecer `FALHOU`.

**Hospedagem: Cloudflare Pages no lugar da Vercel**

- Skills, agentes, modelos e manual passam a publicar páginas e dashboard no **Cloudflare Pages**: Next.js em export estático
  (`output: "export"` → `out/`), `npx wrangler pages project create` uma vez e `npx wrangler pages deploy out --project-name
  <projeto>` a cada publicação; preview por `--branch`; domínio pelo Custom domains do projeto (associar antes do CNAME);
  Cloudflare Web Analytics no lugar do Vercel Analytics. No dashboard, as chamadas server-only (Meta, Hotmart) viram Pages
  Functions em `functions/api/`, com segredo via `wrangler pages secret put`.
- `05-performance-vercel.md` virou `05-performance-e-deploy.md`. Os agentes deixam de carregar `deploy-to-vercel` e
  `vercel-cli-with-tokens`. A Vercel continua citada só como referência de estilo visual e nas versões antigas deste changelog.

## 9.0 — 12/10/2026

**Instalação nova: você cola uma mensagem, o Claude instala**

- Manual de instalação reescrito no padrão do kit Head Turbo ([instalacao-do-zero.html](instalacao-do-zero.html), também em
  ta.turboacademy.com.br/squadturbo): no Mac são 3 passos, todos no app do Claude (abrir a aba Code, colar a mensagem, reabrir);
  no Windows o squad passa a rodar no Ubuntu do WSL, com o Claude Code dentro dele. O Claude faz o resto e a pessoa só aprova.
  Seções numeradas (Entender, Instalar, Usar, Tirar, Quando trava, Ajuda), abas Mac/Windows, botão de copiar e tema claro/escuro.
  O HTML e o `INSTALACAO-DO-ZERO.md` saem do mesmo gerador (`04-manual-de-uso/instalacao/gerar.py`), chamado pelo `build-manual.sh`.
- `instalar-squad.sh --conferir`: só confere, sem instalar. Termina em `SQUAD OK: 49 skills · 13 agentes · squad-core` ou lista o
  que falta (e avisa agente editado à mão, "diferente do pacote"). No Ubuntu sem Homebrew, a dica de ffmpeg/yt-dlp passa a ser `apt`/`pipx`.
- Mensagens prontas no manual pra **atualizar** (guarda antes os agentes que você editou) e pra **remover** (lista antes, apaga só com o seu sim).

**Skills novas (47 → 49)**

- `visual-cortes-turbo` — direção de arte do corte vertical 1080x1920: split-screen, legenda e karaokê, card do topo, caixa do
  gancho, punch-in, áreas seguras medidas (interface do Instagram e anúncio da Meta), gancho no 1º segundo com meta de skip rate,
  chamada para seguir e o **cartão final "Me segue"**: `scripts/cartao-seguir.py` emenda 5 s de motion com som gerado no próprio
  script (sem amostra de terceiro, sem voz), 1 LU abaixo da fala medida do corte. Donos: `@social-turbo`, `@designer-turbo`,
  `@diretor-criativo-turbo`.
- `motion-opcoes-turbo` — motion graphic curto no HyperFrames: 5 direções lado a lado, recomenda uma e para até a escolha; depois
  check com quadros, aprovação e render (MP4 pro Reels, WebM/MOV com transparência pra overlay). Telemetria do HyperFrames desligada
  e CLI fixada. Donos: `@designer-turbo`, `@diretor-criativo-turbo`.

**Correções**

- `build-manual.sh`: a troca de versão casava só "X.Y" e deixava o resto ("8.1.2" virava "9.0.2"); agora casa a versão inteira.
- `MATRIZ-SKILLS.md` regenerada: estava sem `pagina-design-premium` e `fechar-sessao` desde a 8.1.
- Ebook (PDF) regenerado com a versão 9.0.
- Privacidade: saíram três caminhos absolutos de uma máquina (`scrapling-COMO-USAR.md` e dois README de exemplo de
  página) e a referência a uma pasta interna no `funil-8-turbo`.

## 8.1.2 — 02/10/2026

- `cortes-tiktok-turbo`: o `SKILL.md` agora manda rodar tudo com `./.venv/bin/python` (o `python` do sistema não tem
  `faster-whisper`, `cv2` nem `mediapipe`), dá o `cd` na pasta de trabalho antes dos scripts, mostra como gerar o
  `audio.wav` (`ffmpeg -i <video> -vn -ac 1 -ar 16000 audio.wav`) e avisa que a primeira transcrição baixa cerca de
  1,4 GB e leva alguns minutos. Só texto; nenhum script mudou. Achado no teste de ponta a ponta da 8.1.1.

## 8.1.1 — 01/10/2026

- Privacidade: os exemplos de automação deixam de apontar para um servidor n8n da casa e passam a usar o marcador
  explícito `https://SEU-N8N.exemplo.com/webhook/...` (o caminho final continua igual, pra o template seguir didático).
- O histórico do repositório foi reescrito para tirar de todas as versões antigas os nomes reais, ids, e-mails e
  endereços que já tinham saído do conteúdo na 8.1. **Quem tem um clone antigo: apague e clone de novo** (um `git pull`
  num clone antigo não funciona depois da reescrita). As tags v6.0 a v7.3 foram reescritas junto.

## 8.1 — 01/10/2026

**Skills novas (43 → 47)**

- `cortes-tiktok-turbo` — gravação longa (aula, live, call) vira corte vertical: gancho remontado no segundo zero,
  grade de cor por trecho, legenda queimada lida antes de queimar, bipe de nome de cliente e fluxo de publicação.
  Dona: `@social-turbo`. Requer ffmpeg e python3; o `scripts/preparar-pasta.sh` monta o venv.
- `pagina-design-premium` — direção de arte + landing em HTML de arquivo único, sem cara de IA; deriva paleta,
  tipografia e motivo do nicho. Donos: `@designer-turbo` e `@diretor-criativo-turbo`.
- `instalar-skill-no-squad` — instala uma skill de terceiro e amarra no agente dono. Dono: `@estrategista-turbo`
  (já era citada pelo agente; agora vem no pacote).
- `fechar-sessao` — `/fechar-sessao` salva o diário da sessão em `_private/sessoes/` com índice consultável.
  Dono: `@estrategista-turbo`.

**Skills atualizadas**

- `designer-senior-turbo` — portão de SEO antes de publicar (`references/seo-checklist.md`): título e descrição
  únicos, um `<h1>`, canônica, imagem de compartilhamento, dados estruturados, decisão consciente sobre rastreadores
  de IA, e as seis conferências feitas de fora.
- `watch` — o instalador do Whisper local trava `av<19`. O PyAV 19 (29/09/2026) quebrou a leitura de áudio do
  `faster-whisper` em toda instalação nova. Quem instalou depois disso conserta rodando de novo
  `bash ~/.claude/skills/watch/whisper-local/instalar.sh`.
- Privacidade: exemplos que citavam pessoas e contas reais passaram a ser genéricos (`criador-reels-turbo`,
  `automacoes-lpsg-turbo`, `dashboard-lpsg-turbo`, `paginas-lpsg-turbo`, `instagram-analise-estrategica-turbo`,
  `briefing-aprovacao-turbo`, `dash-lancamento-turbo`, `aula-consciencia-turbo`, `distribuicao-turbo`,
  `funil-8-turbo`, `turbo-express`) e os templates de `02-entregaveis-finais/` correspondentes.

**Aprendizados**

- [`licoes-operacao/`](licoes-operacao/README.md) — 152 lições de operação, cada uma com quando acontece, o que fazer
  e como conferir. O [OPERACAO.md](OPERACAO.md) continua como resumo de bolso e aponta pra elas.

**Terceiros**

- `avoid-ai-writing` (Conor Bronsdon, MIT) entrou no [SKILLS-DE-TERCEIRO.md](99-skills-compartilhaveis/SKILLS-DE-TERCEIRO.md)
  com a origem conferida. Ela é o motor anti-IA que o `@copywriter-turbo` e o `@revisor-copy-turbo` chamam, e
  continua instalada da fonte, não pelo pacote.

## 8.0 — 08/09/2026

- Instalação começa pelo Homebrew (`INSTALACAO-DO-ZERO.md` e `instalacao-do-zero.html`).
- `OPERACAO.md`: contrato de verificação, falhas silenciosas, lease, cota.
- `SKILLS-DE-TERCEIRO.md`: skills de outros autores como opcionais, instaladas da fonte.

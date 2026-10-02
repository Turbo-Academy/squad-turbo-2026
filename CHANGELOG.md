# Changelog · Squad Turbo LPSG

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

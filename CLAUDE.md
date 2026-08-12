# Squad Turbo LPSG — instruções pro Claude

## Se te pediram pra INSTALAR o squad nesta máquina

Rode o instalador guiado (idempotente — pode rodar quantas vezes precisar):

```bash
bash 99-skills-compartilhaveis/instalar-squad.sh
```

- Quando é você (Claude) que roda, não há terminal interativo: o script **pula as perguntas opcionais** e marca com ✗ o que ficou pendente. Complete essas pendências você mesmo (ffmpeg e yt-dlp via brew; venv da transcrição local via `bash ~/.claude/skills/watch/whisper-local/instalar.sh`), avisando o usuário antes de downloads grandes (~220 MB do venv; o modelo baixa ~3,5 GB no primeiro uso real).
- Se faltar o Homebrew, a instalação dele pede a senha do usuário — você não pode digitá-la: entregue o comando pronto pra pessoa colar no Terminal e continue depois.
- No fim, rode o instalador de novo e mostre ao usuário a saída com tudo ✓. Lembre que as skills só carregam em **sessão nova** do Claude Code.

O manual humano dessa instalação é o [INSTALACAO-DO-ZERO.md](INSTALACAO-DO-ZERO.md).

## Sobre este repositório

- Método **LPSG** (Lançamento Pago Semanal Gravado) da Turbo Academy: 42 skills + 13 agentes pro Claude Code. Comece pelo [README](README.md).
- **Mantenedores**: antes de editar skills/agentes, leia [99-skills-compartilhaveis/COMO-MANTER.md](99-skills-compartilhaveis/COMO-MANTER.md) — a fonte canônica é `~/.claude/`, as cópias do repo são geradas por scripts de sync. O repo é público: nunca commitar dados de clientes/leads (o hook de pre-push audita).

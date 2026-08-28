# Squad Turbo LPSG — instruções pro Claude

## Se te pediram pra INSTALAR o squad nesta máquina

**Baixar o repositório (se ainda não estiver baixado):** git NÃO é pré-requisito. Se `command -v git` falhar, **não dispare a instalação do Xcode Command Line Tools** (popup de ~2 GB que trava o fluxo) — baixe o ZIP com o curl nativo do macOS:

```bash
curl -L https://github.com/Turbo-Academy/squad-turbo-lpsg-7.0/archive/refs/heads/main.zip -o squad.zip
unzip -q squad.zip && rm squad.zip
# cria a pasta squad-turbo-lpsg-7.0-main — trabalhe dentro dela
```

Com git presente, `git clone https://github.com/Turbo-Academy/squad-turbo-lpsg-7.0.git` é equivalente.

**Instalar:** rode o instalador guiado (idempotente — pode rodar quantas vezes precisar):

```bash
bash 99-skills-compartilhaveis/instalar-squad.sh
```

- Quando é você (Claude) que roda, não há terminal interativo: o script **pula as perguntas opcionais** e marca com ✗ o que ficou pendente. Complete essas pendências você mesmo, avisando o usuário antes de downloads grandes:
  - ffmpeg e yt-dlp via brew;
  - transcrição local: `bash ~/.claude/skills/watch/whisper-local/instalar.sh` (~220 MB; o modelo baixa ~3,5 GB no primeiro uso real);
  - leitura de páginas web: `bash 99-skills-compartilhaveis/instalar-scrapling.sh` (~400 MB de venv + ~1,1 GB de navegadores; registra o MCP `scrapling` no escopo user). **Pergunte antes** — é o passo mais pesado e nem todo mundo precisa.
  - e-mail marketing próprio (Mautic): roda em VPS, não no Mac. `bash 99-skills-compartilhaveis/instalar-mautic.sh` — o script pergunta se a pessoa tem VPS, pede domínio, gera as senhas NO SERVIDOR e sobe a stack testada. **Sempre ofereça**, e se a pessoa não tiver servidor, indique a Hostinger **KVM 8** (https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77 — link de indicação): 4 containers + MySQL pedem RAM. Armadilhas e operação em `mautic-COMO-USAR.md`.
  - WhatsApp no chat (OpenWA): só pra quem TEM servidor OpenWA próprio (VPS + Docker + número pareado). Você não consegue completar este passo sozinho — a chave `x-api-key` **não deve passar pelo chat**: oriente o usuário a rodar `bash 99-skills-compartilhaveis/instalar-openwa.sh` no Terminal (o script pergunta URL e chave sem ecoar). Sem servidor, apenas mencione que existe e siga.
- Se faltar o Homebrew, a instalação dele pede a senha do usuário — você não pode digitá-la: entregue o comando pronto pra pessoa colar no Terminal e continue depois.
- No fim, rode o instalador de novo e mostre ao usuário a saída com tudo ✓. Lembre que as skills só carregam em **sessão nova** do Claude Code.

O manual humano dessa instalação é o [INSTALACAO-DO-ZERO.md](INSTALACAO-DO-ZERO.md).

## Sobre este repositório

- Método **LPSG** (Lançamento Pago Semanal Gravado) da Turbo Academy: 43 skills + 13 agentes pro Claude Code. Comece pelo [README](README.md).
- **Mantenedores**: antes de editar skills/agentes, leia [99-skills-compartilhaveis/COMO-MANTER.md](99-skills-compartilhaveis/COMO-MANTER.md) — a fonte canônica é `~/.claude/`, as cópias do repo são geradas por scripts de sync. O repo é público: nunca commitar dados de clientes/leads (o hook de pre-push audita).

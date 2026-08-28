#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# instalar-squad.sh · instalação GUIADA do Squad Turbo LPSG
#
# Um comando instala tudo que o squad precisa, etapa por etapa:
#   1. Claude Code (verifica · orienta se faltar)
#   2. Skills proprietárias (todos os zips desta pasta)
#   3. Os 13 agentes
#   4. Squad-core (templates · checklists · frameworks)
#   5. Dependências de vídeo (Homebrew · ffmpeg · yt-dlp)
#   6. Transcrição local sem chave (venv do faster-whisper da skill watch)
#   7. Scrapling — o Claude lê páginas da web (opcional, pesado)
#   8. OpenWA — WhatsApp no chat (opcional, requer servidor próprio)
#   9. Mautic — e-mail marketing próprio (opcional, roda em VPS)
#  10. Opcionais (stack Picasso anti-IA · MCPs)
#
# Rode de dentro do repo clonado:
#   bash 99-skills-compartilhaveis/instalar-squad.sh
#
# Idempotente: pode rodar de novo à vontade — só faz o que estiver faltando.
# Sem terminal interativo, as etapas opcionais são puladas com aviso.
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_DST="$HOME/.claude/skills"
AGENTS_DST="$HOME/.claude/agents"
SQUADS_DST="$HOME/.claude/squads"
avisos=0

titulo()   { printf '\n━━ %s\n' "$1"; }
ok()       { printf '  ✓ %s\n' "$1"; }
pendente() { printf '  ✗ %s\n' "$1"; avisos=$((avisos+1)); }

perguntar() {  # perguntar "Instalar X?" → 0 = sim · Enter = sim
  local resp
  if [[ ! -t 0 ]]; then
    printf '  (sem terminal interativo — pulando: %s)\n' "$1"
    return 1
  fi
  read -r -p "  $1 [S/n] " resp
  [[ -z "$resp" || "$resp" =~ ^[SsYy] ]]
}

echo "▶ Instalação guiada do Squad Turbo LPSG"
echo "  Fonte: $DIR"

# ── 1/7 · Claude Code ────────────────────────────────────────────────────────
titulo "1/10 · Claude Code"
if command -v claude >/dev/null 2>&1; then
  ok "Claude Code instalado ($(claude --version 2>/dev/null | head -1))"
else
  pendente "Claude Code não encontrado"
  echo "     → instale primeiro:  npm install -g @anthropic-ai/claude-code"
  echo "       (precisa de Node 18+ · https://nodejs.org)"
  echo "     Depois rode este script de novo."
fi

# ── 2/7 · Skills ─────────────────────────────────────────────────────────────
titulo "2/10 · Skills proprietárias → $SKILLS_DST"
mkdir -p "$SKILLS_DST"
n_skills=0
for z in "$DIR"/*.zip; do
  case "$(basename "$z")" in
    squad-turbo-completo.zip|squad-core-turbo.zip) continue ;;
  esac
  unzip -oq "$z" -d "$SKILLS_DST" && n_skills=$((n_skills+1))
done
ok "$n_skills skills instaladas/atualizadas (todos os zips da pasta — lista canônica no sync-skills.sh)"

# ── 3/7 · Agentes ────────────────────────────────────────────────────────────
titulo "3/10 · Agentes → $AGENTS_DST"
mkdir -p "$AGENTS_DST"
n_ag=0
for a in "$DIR"/agents/*-turbo.md; do
  cp "$a" "$AGENTS_DST/" && n_ag=$((n_ag+1))
done
ok "$n_ag agentes copiados (invocáveis com @nome-do-agente)"

# ── 4/7 · Squad-core ─────────────────────────────────────────────────────────
titulo "4/10 · Squad-core → $SQUADS_DST"
mkdir -p "$SQUADS_DST"
if [[ -f "$DIR/squad-core-turbo.zip" ]]; then
  unzip -oq "$DIR/squad-core-turbo.zip" -d "$SQUADS_DST"
  ok "templates · checklists · frameworks (usados pelo @pesquisador-turbo)"
else
  pendente "squad-core-turbo.zip não encontrado na pasta"
fi

# ── 5/7 · Dependências de vídeo (skill watch) ────────────────────────────────
titulo "5/10 · Dependências de vídeo — ffmpeg + yt-dlp (skill watch)"
BREW_OK=false
if command -v brew >/dev/null 2>&1; then BREW_OK=true; fi

for dep in ffmpeg yt-dlp; do
  if command -v "$dep" >/dev/null 2>&1; then
    ok "$dep"
  elif $BREW_OK; then
    if perguntar "Instalar $dep via Homebrew agora?"; then
      brew install "$dep" && ok "$dep instalado" || pendente "$dep — brew falhou (rode: brew install $dep)"
    else
      pendente "$dep — instalar depois: brew install $dep"
    fi
  else
    pendente "$dep ausente e sem Homebrew"
    echo "     → instale o Homebrew primeiro (precisa da sua senha, é rápido):"
    echo '       /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
    echo "     Depois: brew install ffmpeg yt-dlp"
  fi
done

# ── 6/7 · Transcrição local sem chave (whisper-local) ────────────────────────
titulo "6/10 · Transcrição local sem chave de API (faster-whisper)"
WL="$SKILLS_DST/watch/whisper-local"
if [[ -x "$WL/venv/bin/python" ]] && "$WL/venv/bin/python" -c "import faster_whisper" 2>/dev/null; then
  ok "venv do whisper-local já pronto"
elif [[ -f "$WL/instalar.sh" ]]; then
  echo "  A skill watch transcreve vídeo SEM chave de API, localmente."
  echo "  O venv ocupa ~220 MB; o modelo (medium) baixa no 1º uso (~3,5 GB em ~/.cache)."
  if perguntar "Montar o venv agora?"; then
    bash "$WL/instalar.sh" && ok "whisper-local pronto" || pendente "whisper-local — falhou (rode: bash $WL/instalar.sh)"
  else
    pendente "whisper-local — montar depois: bash $WL/instalar.sh"
  fi
else
  pendente "watch/whisper-local não encontrado (a etapa 2 rodou?)"
fi

# ── 7/8 · Scrapling — o Claude lê páginas da web ─────────────────────────────
titulo "7/10 · Scrapling — o Claude lê páginas da web (opcional)"
SCR="$HOME/.claude/tools/scrapling"
if [[ -x "$SCR/venv/bin/scrapling" ]] && "$SCR/venv/bin/python" -c "import mcp" 2>/dev/null; then
  ok "$("$SCR/venv/bin/scrapling" --version 2>/dev/null | tail -1) — já instalado"
else
  echo "  Deixa o @pesquisador-mercado-turbo LER página de concorrente, landing e"
  echo "  anúncio direto — você pede em português, sem escrever script."
  echo "  Ocupa ~400 MB (venv) + ~1,1 GB (navegadores) e registra um MCP."
  if perguntar "Instalar o Scrapling agora?"; then
    bash "$DIR/instalar-scrapling.sh" || pendente "Scrapling — falhou (rode: bash $DIR/instalar-scrapling.sh)"
  else
    pendente "Scrapling — instalar depois: bash $DIR/instalar-scrapling.sh"
  fi
fi

# ── 8/9 · OpenWA — WhatsApp no chat ──────────────────────────────────────────
titulo "8/10 · WhatsApp no chat — OpenWA (opcional · requer servidor próprio)"
if claude mcp get openwa >/dev/null 2>&1; then
  ok "MCP 'openwa' já registrado"
else
  echo "  Com um servidor OpenWA seu (github.com/rmyndharis/OpenWA · VPS + Docker"
  echo "  + número pareado), o Claude lê e envia WhatsApp direto do chat — a"
  echo "  ferramenta do closer (1:1) e do CS."
  echo "  Tem um? Rode no Terminal: bash $DIR/instalar-openwa.sh"
  echo "  (pergunta URL e chave sem ecoar — a chave não deve passar pelo chat)"
  echo "  · pulado — opcional, não conta como pendência"
fi

# ── 9/10 · Mautic — e-mail marketing próprio ─────────────────────────────────
titulo "9/10 · E-mail marketing próprio — Mautic (opcional · roda em VPS)"
echo "  Nutrição por e-mail, landing pages, formulários e rastreamento, SEM custo"
echo "  por lead — você paga só o servidor. No LPSG cobre o e-mail do evento."
echo "  Não roda no seu Mac: precisa de VPS 24/7 + domínio."
if perguntar "Quer instalar o Mautic agora?"; then
  bash "$DIR/instalar-mautic.sh" || pendente "Mautic — falhou (rode: bash $DIR/instalar-mautic.sh)"
else
  echo "  · pulado — quando quiser: bash $DIR/instalar-mautic.sh"
  echo "    Sem VPS? A indicação é a Hostinger KVM 8 (4 containers + MySQL pedem RAM):"
  echo "    https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77  (link de indicação)"
fi

# ── 10/10 · Opcionais ────────────────────────────────────────────────────────
titulo "10/10 · Opcionais"
if [[ -d "$SKILLS_DST/frontend-design" && -d "$SKILLS_DST/impeccable" ]]; then
  ok "stack Picasso (auditoria visual anti-IA) já instalada"
elif command -v npx >/dev/null 2>&1; then
  if perguntar "Instalar stack Picasso (auditoria visual anti-IA · 3 skills via npx)?"; then
    npx skills add https://github.com/anthropics/skills --skill frontend-design --yes
    npx skills add pbakaus/impeccable --yes
    npx skills add https://github.com/kylezantos/design-motion-principles --skill design-motion-principles --yes
    ok "stack Picasso instalada"
  else
    echo "  · pulada — comandos no README quando quiser"
  fi
else
  echo "  · stack Picasso precisa de Node/npx — comandos no README"
fi
echo "  · MCPs (Drive · Windsor · NotebookLM · n8n…): nenhum é obrigatório."
echo "    Quando precisar, o passo a passo de conexão está em GUIA-MCPS.md"

# ── resumo ───────────────────────────────────────────────────────────────────
echo ""
if (( avisos > 0 )); then
  echo "⚠️  Instalação concluída com $avisos pendência(s) — veja os ✗ acima."
else
  echo "✅ Tudo instalado."
fi
echo "   Último passo: REINICIE o Claude Code (feche a sessão e abra outra)."
echo "   Skills, agentes e MCPs só carregam em sessão NOVA — a sessão desta"
echo "   instalação não enxerga o que ela mesma instalou."
echo "   Confira: /skills lista as skills · @estrategista-turbo responde."

#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# sync-squad.sh · Fonte única → cópias do repo
#
# RESOLVE A DERIVA DE AGENTES. Existem 3 cópias dos agentes:
#   1. ~/.claude/agents/                     ← FONTE CANÔNICA (onde se edita)
#   2. <repo>/.claude/agents/                ← project-scoped (ativo neste projeto)
#   3. <repo>/99-skills-compartilhaveis/agents/  ← distribuível (quem clona instala)
# + squad-turbo-completo.zip                 ← empacotamento dos 11 agentes
#
# Edite SEMPRE em ~/.claude/agents/. Depois rode este script ANTES de commitar.
# Ele propaga a fonte canônica pras 2 cópias e regenera o zip.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

SRC="$HOME/.claude/agents"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROJ_AGENTS="$REPO_ROOT/.claude/agents"
DIST_AGENTS="$REPO_ROOT/99-skills-compartilhaveis/agents"
ZIP="$REPO_ROOT/99-skills-compartilhaveis/squad-turbo-completo.zip"

AGENTS=(
  automacao-turbo copywriter-turbo cs-turbo designer-turbo diretor-criativo-turbo
  estrategista-turbo pesquisador-mercado-turbo pesquisador-turbo
  picasso-auditor-lpsg social-turbo trafego-turbo
)

echo "→ Fonte: $SRC"
mkdir -p "$PROJ_AGENTS" "$DIST_AGENTS"

for a in "${AGENTS[@]}"; do
  if [[ ! -f "$SRC/$a.md" ]]; then
    echo "  ✗ FALTA na fonte: $a.md" >&2; exit 1
  fi
  cp "$SRC/$a.md" "$PROJ_AGENTS/$a.md"
  cp "$SRC/$a.md" "$DIST_AGENTS/$a.md"
  echo "  ✓ $a"
done

# Regenera o zip só com os 11 agentes (sem docs de apoio)
rm -f "$ZIP"
( cd "$DIST_AGENTS" && zip -q "$ZIP" "${AGENTS[@]/%/.md}" )
echo "→ squad-turbo-completo.zip regenerado ($(du -h "$ZIP" | cut -f1))"

echo "✅ Sync concluído. 11 agentes propagados pras 2 cópias + zip."
echo "   Agora: git add -A && git commit"

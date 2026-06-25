#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# sync-matriz.sh · Gera MATRIZ-SKILLS.md a partir dos frontmatters dos agentes.
# Fonte da verdade = ~/.claude/agents/*-turbo.md (campo skills:).
# Resolve a deriva: o doc deixa de ser mantido à mão.
# Rodar após mexer em qualquer agente. Saída: agents/MATRIZ-SKILLS.md
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail
SRC="$HOME/.claude/agents"
OUT="$(cd "$(dirname "$0")" && pwd)/agents/MATRIZ-SKILLS.md"

agents=$(ls "$SRC"/*-turbo.md 2>/dev/null | xargs -n1 basename | sed 's/\.md$//' | sort)
n_agents=$(echo "$agents" | grep -c . || true)

# extrai skills (- nome) do bloco skills: de um agente, ignorando comentários
skills_of() {
  awk '/^skills:/{f=1;next} /^[^[:space:]#]/{f=0} f&&/^[[:space:]]*-[[:space:]]/{gsub(/^[[:space:]]*-[[:space:]]*/,"");gsub(/[[:space:]]+#.*/,"");gsub(/[[:space:]]*$/,"");print}' "$SRC/$1.md"
}

tmp=$(mktemp)
for a in $agents; do for s in $(skills_of "$a"); do echo "$s|$a"; done; done > "$tmp"
n_pairs=$(wc -l < "$tmp" | tr -d ' ')
n_skills_distintas=$(cut -d'|' -f1 "$tmp" | sort -u | grep -c . || true)

{
  echo "# Matriz Skills × Agents · Squad Turbo LPSG"
  echo
  echo "> **GERADO POR SCRIPT** (\`sync-matriz.sh\`) a partir do campo \`skills:\` dos frontmatters em \`~/.claude/agents/\`. NÃO editar à mão — rode o script após mexer em agente."
  echo
  echo "**Agentes:** $n_agents · **Skills distintas referenciadas:** $n_skills_distintas · **Atribuições (skill×agent):** $n_pairs"
  echo
  echo "## Por agente"
  echo
  for a in $agents; do
    echo "### @$a"
    skills_of "$a" | sed 's/^/- /'
    echo
  done
  echo "## Índice reverso (skill → agentes)"
  echo
  echo "| Skill | Agentes |"
  echo "|---|---|"
  cut -d'|' -f1 "$tmp" | sort -u | while read s; do
    ags=$(grep "^$s|" "$tmp" | cut -d'|' -f2 | sort -u | paste -sd' ' -)
    echo "| \`$s\` | $ags |"
  done
} > "$OUT"
rm -f "$tmp"
echo "✅ MATRIZ-SKILLS.md gerada · $n_agents agentes · $n_skills_distintas skills distintas · $n_pairs atribuições"

#!/bin/bash
# audit-privacy.sh — guard-rail de privacidade do repo compartilhável
#
# O repo é público/distribuído: NUNCA pode conter nome de cliente, lead ou
# terceiro real. Buscar só nomes conhecidos já falhou 3x — este script extrai
# TODOS os pares "Nome Sobrenome" dos arquivos trackeados (texto E dentro de
# zips/docx) e compara contra a baseline aprovada.
#
# Uso:
#   ./audit-privacy.sh                     # checa · exit 1 se houver par novo
#   ./audit-privacy.sh --update-baseline   # aceita o estado atual como aprovado
#
# Fluxo: rodar ANTES de todo push. Par novo legítimo (persona fictícia,
# referência pública)? Revisar manualmente e rodar --update-baseline.
# Par novo que é pessoa real? Genericizar/mover pra _private/ primeiro.
set -euo pipefail
cd "$(dirname "$0")/.."

BASELINE="99-skills-compartilhaveis/privacy-baseline.txt"
TMP=$(mktemp)
trap 'rm -f "$TMP" "$TMP.sorted"' EXIT

# pares "Nome Sobrenome": inicial maiúscula + 2+ minúsculas, com acentos
extract() {
  iconv -f UTF-8 -t UTF-8 -c 2>/dev/null \
    | perl -CSD -ne 'while (/\b(\p{Lu}\p{Ll}{2,} \p{Lu}\p{Ll}{2,})\b/g) { print "$1\n" }' 2>/dev/null
}

# --cached --others --exclude-standard: pega trackeados E novos ainda não commitados
# (sem isso, um zip recém-gerado passa batido e só é flagrado DEPOIS do push — já aconteceu)
# 1. arquivos de texto
git ls-files --cached --others --exclude-standard '*.md' '*.html' '*.json' '*.txt' '*.sh' '*.yaml' '*.yml' \
  | while IFS= read -r f; do cat "$f"; done | extract >> "$TMP"

# 2. conteúdo dos binários (zips de skills, docx)
git ls-files --cached --others --exclude-standard '*.zip' '*.docx' \
  | while IFS= read -r f; do unzip -p "$f" 2>/dev/null || true; done | extract >> "$TMP"

sort -u "$TMP" > "$TMP.sorted"

if [ "${1:-}" = "--update-baseline" ]; then
  cp "$TMP.sorted" "$BASELINE"
  echo "✅ baseline atualizada: $(wc -l < "$BASELINE" | tr -d ' ') pares aprovados"
  exit 0
fi

if [ ! -f "$BASELINE" ]; then
  echo "❌ baseline ausente ($BASELINE). Rode --update-baseline após revisar o repo."
  exit 1
fi

NEW=$(comm -13 "$BASELINE" "$TMP.sorted")
if [ -n "$NEW" ]; then
  echo "⚠️  Pares de Nome Sobrenome NOVOS (não estão na baseline aprovada):"
  echo ""
  echo "$NEW" | sed 's/^/   /'
  echo ""
  echo "Pessoa real? → genericizar ou mover pra _private/ antes de commitar."
  echo "Legítimo (ficção/referência pública)? → revisar e rodar: ./audit-privacy.sh --update-baseline"
  exit 1
fi
echo "✅ privacidade OK — nenhum nome novo vs baseline ($(wc -l < "$BASELINE" | tr -d ' ') pares)"

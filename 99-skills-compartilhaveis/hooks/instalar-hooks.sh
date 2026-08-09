#!/usr/bin/env bash
# Instala os hooks do squad no .git/hooks deste clone.
# Hooks não são versionados pelo git — cada clone precisa rodar isto uma vez.
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
ORIGEM="$ROOT/99-skills-compartilhaveis/hooks"
DESTINO="$(git rev-parse --git-path hooks)"

mkdir -p "$DESTINO"
for h in pre-push; do
  cp "$ORIGEM/$h" "$DESTINO/$h"
  chmod +x "$DESTINO/$h"
  echo "  ✓ $h instalado em $DESTINO"
done

echo ""
echo "Pronto. Antes de cada push o squad checa privacidade, skills órfãs e contagens."
echo "Pra pular numa emergência: git push --no-verify"

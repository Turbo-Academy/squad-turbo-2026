#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# build-ebook.sh · regenera o PDF do ebook a partir do ebook.html
#
# POR QUE EXISTE: o ebook.html recebe a versão automaticamente (marcador
# <!--F:versao--> via build-manual.sh), mas o PDF — que é o arquivo realmente
# distribuído — só muda se alguém regenerar. Na auditoria de 2026-08-09 ele
# estava 2 versões atrás (dizia "V5.1" e citava um agente já renomeado) sem
# ninguém notar. Este script fecha esse buraco.
#
# ORDEM CORRETA:
#   1. 04-manual-de-uso/build-manual.sh   (atualiza a versão dentro do HTML)
#   2. este script                         (rende o HTML no PDF)
#
# Requisito: Google Chrome instalado (headless). O CSS de impressão (@page A4,
# page-breaks) já vive dentro do próprio ebook.html.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HTML="ebook.html"
PDF="Ebook-LPSG-Turbo-Academy.pdf"

[[ -f "$HTML" ]] || { echo "✗ $HTML não encontrado" >&2; exit 1; }
[[ -x "$CHROME" ]] || { echo "✗ Chrome não encontrado em $CHROME" >&2; exit 1; }

versao_html=$(grep -oE 'v[0-9]+\.[0-9]+' "$HTML" | head -1)
echo "▶ renderizando $HTML (${versao_html:-versão não detectada}) → $PDF"

TMPDIR_BUILD=$(mktemp -d)
trap 'rm -rf "$TMPDIR_BUILD"' EXIT
TMP="$TMPDIR_BUILD/ebook.pdf"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$TMP" "file://$(pwd)/$HTML" 2>/dev/null

[[ -s "$TMP" ]] || { echo "✗ o Chrome não gerou o PDF" >&2; exit 1; }

mv "$TMP" "$PDF"

# confere que a versão do PDF bate com a do HTML (pega render de cache/stale)
# NB: o texto é capturado ANTES do grep de propósito — com `set -o pipefail`,
# `pdftotext | grep -q` falha mesmo quando casa (o grep fecha o pipe, o
# pdftotext leva SIGPIPE e derruba a pipeline inteira).
if command -v pdftotext >/dev/null 2>&1 && [[ -n "$versao_html" ]]; then
  alvo=$(echo "$versao_html" | tr '[:lower:]' '[:upper:]')
  texto_pdf=$(pdftotext "$PDF" - 2>/dev/null || true)
  if grep -qi "$alvo" <<<"$texto_pdf"; then
    echo "  ✓ versão $alvo confirmada dentro do PDF"
  else
    echo "  ⚠️  não achei $alvo no texto do PDF — confira a capa antes de distribuir" >&2
  fi
fi

paginas=$(pdfinfo "$PDF" 2>/dev/null | awk '/^Pages:/{print $2}')
echo "✅ $PDF gerado${paginas:+ · $paginas páginas} ($(du -h "$PDF" | cut -f1))"

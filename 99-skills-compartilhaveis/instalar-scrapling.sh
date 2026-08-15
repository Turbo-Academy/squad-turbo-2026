#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# instalar-scrapling.sh · o Claude passa a LER páginas da web
#
# Scrapling (BSD-3 · github.com/D4Vinci/Scrapling) em venv isolado + servidor
# MCP registrado. Serve pro @pesquisador-mercado-turbo ler página de
# concorrente, landing, anúncio — sem você escrever script.
#
# Chamado pelo instalar-squad.sh, mas roda sozinho também:
#   bash 99-skills-compartilhaveis/instalar-scrapling.sh [--sem-mcp]
#
# Idempotente. Custo de disco: ~400 MB (venv) + ~1,1 GB (navegadores, cache
# compartilhado com qualquer outra ferramenta Playwright da máquina).
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

AQUI="$(cd "$(dirname "$0")" && pwd)"
DEST="${SCRAPLING_DIR:-$HOME/.claude/tools/scrapling}"
COM_MCP=true
[[ "${1:-}" == "--sem-mcp" ]] && COM_MCP=false

ok()    { printf '  ✓ %s\n' "$1"; }
falha() { printf '  ✗ %s\n' "$1"; }

# ── já está pronto? ──────────────────────────────────────────────────────────
if [[ -x "$DEST/venv/bin/scrapling" ]] && "$DEST/venv/bin/python" -c "import mcp" 2>/dev/null; then
  ok "$("$DEST/venv/bin/scrapling" --version 2>/dev/null | tail -1) — já instalado"
else
  # ── uv (gerencia o Python certo; o do sistema costuma ser velho ou novo demais)
  if ! command -v uv >/dev/null 2>&1; then
    echo "  → instalando o uv (gerenciador de Python, não pede senha)"
    curl -LsSf https://astral.sh/uv/install.sh | sh >/dev/null 2>&1
    export PATH="$HOME/.local/bin:$PATH"
  fi
  if ! command -v uv >/dev/null 2>&1; then
    falha "uv não instalou — instale com: brew install uv · depois rode este script de novo"
    exit 1
  fi

  # ── venv com Python 3.12 (3.13/3.14 ainda quebram dependências) ─────────────
  mkdir -p "$DEST"
  echo "  → criando venv (Python 3.12)"
  uv venv --python 3.12 "$DEST/venv" >/dev/null 2>&1 || { falha "falhou ao criar o venv"; exit 1; }

  echo "  → instalando scrapling[fetchers,shell,ai]  (~400 MB, alguns minutos)"
  VIRTUAL_ENV="$DEST/venv" uv pip install "scrapling[fetchers,shell,ai]" >/dev/null 2>&1 \
    || { falha "falhou ao instalar o scrapling"; exit 1; }

  echo "  → baixando navegadores (~1,1 GB na primeira vez)"
  "$DEST/venv/bin/scrapling" install >/dev/null 2>&1
  # O 'scrapling install' traz o Chromium do Playwright, mas o StealthyFetcher
  # usa patchright, que pede OUTRO build. Sem esta linha o stealth quebra com
  # "Executable doesn't exist at .../chromium-<build>".
  "$DEST/venv/bin/patchright" install chromium >/dev/null 2>&1

  [[ -x "$DEST/venv/bin/scrapling" ]] && ok "$("$DEST/venv/bin/scrapling" --version 2>/dev/null | tail -1) instalado" \
    || { falha "instalação não completou"; exit 1; }
fi

# ── manual junto da ferramenta ───────────────────────────────────────────────
[[ -f "$AQUI/scrapling-COMO-USAR.md" ]] && cp "$AQUI/scrapling-COMO-USAR.md" "$DEST/COMO-USAR.md"

# ── CLI no PATH ──────────────────────────────────────────────────────────────
mkdir -p "$HOME/.local/bin"
ln -sf "$DEST/venv/bin/scrapling" "$HOME/.local/bin/scrapling"
if [[ ":$PATH:" == *":$HOME/.local/bin:"* ]]; then
  ok "CLI 'scrapling' no PATH"
else
  ok "CLI em ~/.local/bin/scrapling (adicione ao PATH pra chamar só 'scrapling')"
fi

# ── teste de verdade: os 2 caminhos que costumam quebrar ─────────────────────
echo "  → testando (HTTP e navegador stealth)"
"$DEST/venv/bin/python" - <<'PY'
from scrapling.fetchers import Fetcher, StealthyFetcher
for nome, fn in (("HTTP", lambda: Fetcher.get("https://example.com", timeout=30)),
                 ("stealth", lambda: StealthyFetcher.fetch("https://example.com", headless=True))):
    try:
        print(f"  {'✓' if fn().status == 200 else '✗'} fetcher {nome}")
    except Exception as e:
        print(f"  ✗ fetcher {nome}: {type(e).__name__}: {str(e)[:110]}")
PY

# ── MCP ──────────────────────────────────────────────────────────────────────
if ! $COM_MCP; then
  echo "  · MCP não registrado (--sem-mcp)"
elif ! command -v claude >/dev/null 2>&1; then
  falha "Claude Code não encontrado — registre depois com: claude mcp add scrapling --scope user -- $DEST/venv/bin/scrapling mcp"
elif claude mcp list 2>/dev/null | grep -q '^scrapling'; then
  ok "MCP 'scrapling' já registrado"
else
  if claude mcp add scrapling --scope user -- "$DEST/venv/bin/scrapling" mcp >/dev/null 2>&1; then
    ok "MCP 'scrapling' registrado (escopo user) — vale em SESSÃO NOVA"
  else
    falha "não registrou o MCP — rode: claude mcp add scrapling --scope user -- $DEST/venv/bin/scrapling mcp"
  fi
fi

echo ""
echo "  Como usar: peça em português — \"lê a página [url] e me diz a estrutura das dobras\"."
echo "  Manual: $DEST/COMO-USAR.md · remover o MCP: claude mcp remove scrapling --scope user"
echo "  Respeite robots.txt, os termos do site e a LGPD: nada de dado pessoal de terceiros."

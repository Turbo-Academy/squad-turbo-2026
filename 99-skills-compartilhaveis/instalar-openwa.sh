#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# instalar-openwa.sh · conecta o Claude ao SEU servidor OpenWA (WhatsApp)
#
# O OpenWA (github.com/rmyndharis/OpenWA) é um gateway de WhatsApp
# self-hosted: rodando no SEU servidor, o Claude passa a ler e enviar
# mensagens, gerenciar grupos e etiquetas — direto do chat. É a ferramenta
# do closer (recuperação 1:1) e do CS.
#
# Este script NÃO instala o servidor — isso é infraestrutura sua (um VPS com
# Docker e o número pareado; veja o repo do OpenWA). Ele REGISTRA a conexão
# (MCP, escopo user) apontando pro servidor que você já tem.
#
# Uso:
#   bash instalar-openwa.sh                     # pergunta URL e chave
#   bash instalar-openwa.sh --url <url-do-mcp>  # pergunta só a chave
#   flags: --url · --key · --basic usuario:senha (se houver basic auth na frente)
#
# SEGURANÇA: a chave nunca deve entrar em repositório, chat ou captura de
# tela. Aqui ela vai só pro ~/.claude.json DESTA máquina. Pra trocar depois:
#   claude mcp remove openwa --scope user  →  rode este script de novo
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

URL=""; KEY=""; BASIC=""
while [[ $# -gt 0 ]]; do case "$1" in
  --url)   URL="$2";   shift 2 ;;
  --key)   KEY="$2";   shift 2 ;;
  --basic) BASIC="$2"; shift 2 ;;
  *) echo "opção desconhecida: $1 (use --url · --key · --basic)"; exit 1 ;;
esac; done

if ! command -v claude >/dev/null 2>&1; then
  echo "  ✗ Claude Code não encontrado — instale primeiro e rode de novo."
  exit 1
fi

# já registrado? não sobrescreve em silêncio
if claude mcp get openwa >/dev/null 2>&1; then
  echo "  ✓ MCP 'openwa' já registrado."
  echo "    Pra trocar servidor/chave: claude mcp remove openwa --scope user · e rode de novo."
  exit 0
fi

# perguntas (só com terminal; a chave é lida SEM ecoar)
if [[ -z "$URL" ]]; then
  if [[ -t 0 ]]; then
    read -r -p "  URL do MCP do seu OpenWA (ex.: https://wa.seudominio.com/mcp): " URL
  else
    echo "  ✗ sem terminal interativo e sem --url."
    echo "    Rode no Terminal: bash 99-skills-compartilhaveis/instalar-openwa.sh"
    exit 1
  fi
fi
if [[ -z "$KEY" ]]; then
  if [[ -t 0 ]]; then
    read -r -s -p "  x-api-key do servidor (não aparece ao digitar): " KEY; echo ""
  else
    echo "  ✗ sem terminal interativo e sem --key. Rode no Terminal."
    exit 1
  fi
fi
[[ -z "$URL" || -z "$KEY" ]] && { echo "  ✗ URL e chave são obrigatórias."; exit 1; }

# teste de alcance (não valida a chave a fundo — só evita registrar servidor morto)
args=(-H "x-api-key: $KEY")
[[ -n "$BASIC" ]] && args+=(-H "Authorization: Basic $(printf %s "$BASIC" | base64)")
code=$(curl -s -o /dev/null -m 15 -w '%{http_code}' "${args[@]}" "$URL" || echo 000)
case "$code" in
  000) echo "  ✗ servidor não respondeu em $URL — confira a URL (e se o VPS está no ar)."; exit 1 ;;
  401|403) echo "  ⚠️ servidor no ar, mas recusou a credencial ($code) — registrando mesmo assim; confira a chave se falhar na sessão nova." ;;
  *) echo "  ✓ servidor respondeu ($code)" ;;
esac

# registra no escopo user (vale em todos os projetos DESTA máquina)
extra=()
[[ -n "$BASIC" ]] && extra+=(--header "Authorization: Basic $(printf %s "$BASIC" | base64)")
if claude mcp add --transport http openwa "$URL" --header "x-api-key: $KEY" "${extra[@]}" --scope user >/dev/null 2>&1; then
  echo "  ✓ MCP 'openwa' registrado (escopo user)."
else
  echo "  ✗ o registro falhou — rode na mão pra ver o erro:"
  echo "    claude mcp add --transport http openwa \"$URL\" --header \"x-api-key: SUA_CHAVE\" --scope user"
  exit 1
fi

echo ""
echo "  Vale em SESSÃO NOVA do Claude Code (feche e abra outra)."
echo "  Teste: \"lista as sessões do meu WhatsApp\" — deve responder com a sessão pareada."
echo "  Juízo no uso: o WhatsApp bane número que dispara em massa. O método é 1:1 —"
echo "  recuperação do closer, CS, operação. Nada de lista de transmissão por aqui."

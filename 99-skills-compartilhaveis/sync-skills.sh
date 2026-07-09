#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# sync-skills.sh · Skills proprietárias → zips distribuíveis
#
# Par do sync-squad.sh, mas para SKILLS. A lista SKILLS abaixo é a definição
# canônica de "o que é skill proprietária do squad" (lpsg/turbo + criador-*
# + ferramentas próprias). Skills externas (Anthropic · Vercel · design
# genéricas) NÃO são empacotadas — instalam via plugin/npx.
#
# Comportamento:
#   - falha se uma skill da lista não existir em ~/.claude/skills/
#   - regenera só os zips STALE (fonte mais nova que o zip) ou AUSENTES
#   - relatório: N novos · N regenerados · N em dia
#
# Fluxo: edite a skill em ~/.claude/skills/<skill>/ → rode este script →
# git add + commit. Rode também o sync-squad.sh se mexeu em agente.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

SRC="$HOME/.claude/skills"
DST="$(cd "$(dirname "$0")" && pwd)"

SKILLS=(
  # 10 fases LPSG
  estrutura-aulas-lpsg-turbo mensageria-lpsg-turbo oferta-lpsg-turbo criativos-lpsg-turbo paginas-lpsg-turbo
  trafego-lpsg-turbo automacoes-lpsg-turbo dashboard-lpsg-turbo operacao-lpsg-turbo cs-lpsg-turbo
  # orquestração · gates · transversal
  lpsg-master-turbo briefing-aprovacao-turbo protocolo-conversa-turbo manual-final-lpsg-turbo
  # Meta Ads
  meta-ads-cli-setup-turbo meta-ads-cli-turbo
  # motores de copy/conteúdo
  criador-criativos-turbo criador-paginas-low-ticket-turbo criador-reels-turbo criador-vsl-turbo
  # produção A/B de VSL (teleprompter · mapa de takes · roteiro de edição)
  vsl-ab-turbo
  # recuperação 1:1 (closer)
  closer-lpsg-turbo
  # visual / build próprios
  designer-senior-turbo design-tokens-turbo lovable-style-turbo gerador-instagram-turbo
  gerador-slides-turbo slides-uipm-turbo page-optimizer-turbo
  # dados / utilitários próprios
  dash-lancamento-turbo instagram-analise-estrategica-turbo transcrever-youtube-turbo honor-turbo
  # conteúdo recorrente (aquecimento perpétuo)
  aula-consciencia-turbo
  # motores de negócio próprios Turbo (orgânico em camadas · ciclo 14 dias · low ticket ASC)
  distribuicao-turbo turbo-express funil-8-turbo
  # método (visão geral) + redirect
  lancamento-pago-semanal-turbo estruturador-evento-turbo
)

novos=0; regen=0; emdia=0
for s in "${SKILLS[@]}"; do
  if [[ ! -d "$SRC/$s" ]]; then
    echo "  ✗ FALTA na fonte: $s" >&2; exit 1
  fi
  zipf="$DST/$s.zip"
  if [[ ! -f "$zipf" ]]; then
    ( cd "$SRC" && zip -rq "$zipf" "$s/" -x "*.DS_Store" )
    echo "  + $s (novo)"; novos=$((novos+1))
  elif [[ -n "$(find "$SRC/$s" -newer "$zipf" -type f 2>/dev/null | head -1)" ]]; then
    rm -f "$zipf"
    ( cd "$SRC" && zip -rq "$zipf" "$s/" -x "*.DS_Store" )
    echo "  ↻ $s (regenerado)"; regen=$((regen+1))
  else
    emdia=$((emdia+1))
  fi
done

echo ""
echo "✅ sync-skills: ${#SKILLS[@]} skills · $novos novos · $regen regenerados · $emdia em dia."

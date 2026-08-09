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
  # criativos de tráfego "assistir VSL" (padrão Megafone Digital)
  gerador-criativos-vsl
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

# ─────────────────────────────────────────────────────────────────────────────
# Grava as contagens REAIS na fonte única (manual-dados.json).
# Sem isto, os números dos docs viram digitação manual e derivam — foi o que a
# auditoria de 2026-08-09 encontrou (docs diziam 38/39 com 40 skills no disco).
# Depois disto, rode build-manual.sh pra propagar pros .md/.html.
# ─────────────────────────────────────────────────────────────────────────────
DADOS="$DST/../04-manual-de-uso/manual-dados.json"
N_TEMPLATES=$(ls "$DST"/templates-entregaveis-legado/*.zip 2>/dev/null | wc -l | tr -d ' ')
N_INSTALADAS=$(ls -d "$SRC"/*/ 2>/dev/null | wc -l | tr -d ' ')
# total de zips = skills + squad-turbo-completo + squad-core-turbo + templates legado
N_ZIPS=$(( ${#SKILLS[@]} + 2 + N_TEMPLATES ))

if [[ -f "$DADOS" ]]; then
  python3 - "$DADOS" "${#SKILLS[@]}" "$N_ZIPS" "$N_INSTALADAS" <<'PY'
import json, sys, pathlib
p = pathlib.Path(sys.argv[1])
d = json.loads(p.read_text(encoding="utf-8"))
novos = {"n_skills": sys.argv[2], "n_zips_total": sys.argv[3], "n_skills_instaladas": sys.argv[4]}
mudou = [k for k, v in novos.items() if d.get(k) != v]
d.update(novos)
p.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"   contagens gravadas em manual-dados.json ({', '.join(mudou)+' atualizado(s)' if mudou else 'já em dia'})")
print("   → rode 04-manual-de-uso/build-manual.sh pra propagar pros docs")
PY
fi

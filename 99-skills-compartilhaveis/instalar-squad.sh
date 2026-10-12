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
#  10. n8n — automação dos 14 workflows (opcional, roda em VPS)
#  11. Opcionais (stack Picasso anti-IA · MCPs)
#
# Rode de dentro do repo clonado:
#   bash 99-skills-compartilhaveis/instalar-squad.sh
#   bash 99-skills-compartilhaveis/instalar-squad.sh --conferir   (só confere, não instala)
#
# Idempotente: pode rodar de novo à vontade.
# Sem terminal interativo, as etapas opcionais são puladas com aviso.
#
# Personalização nunca se perde: antes de trocar qualquer arquivo de skill,
# agente ou squad-core que esteja DIFERENTE do pacote (você editou), o
# instalador guarda uma cópia numa pasta nova e única em
#   ~/.claude/squad-turbo-backups/<data-hora>-<sufixo>/
# Se não conseguir guardar, para ANTES de tocar em qualquer coisa (rc 3).
# Etapa obrigatória (2, 3 ou 4) que falha termina com rc 2, nunca com "ok".
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_DST="$HOME/.claude/skills"
AGENTS_DST="$HOME/.claude/agents"
SQUADS_DST="$HOME/.claude/squads"
BKP_RAIZ="$HOME/.claude/squad-turbo-backups"
avisos=0
pulados=0
falhas=0   # etapas obrigatórias (2 skills · 3 agentes · 4 squad-core) que falharam

titulo()   { printf '\n━━ %s\n' "$1"; }
ok()       { printf '  ✓ %s\n' "$1"; }
pendente() { printf '  ✗ %s\n' "$1"; avisos=$((avisos+1)); }
# Opcional que o usuario RECUSOU nao e falha. Antes isso chamava pendente() e a
# instalacao boa terminava com "⚠️ concluida com N pendencia(s)" — quem instalava
# pela primeira vez achava que tinha quebrado. Falha continua em pendente().
pulado()   { printf '  · %s\n' "$1"; pulados=$((pulados+1)); }
falhou()   { printf '  ✗ FALHOU — %s\n' "$1"; falhas=$((falhas+1)); avisos=$((avisos+1)); }

# diverge <zip> <pasta-destino>: compara cada arquivo do zip com o instalado,
# byte a byte, e imprime "falta|vazio|diferente<TAB>caminho" do que não bate.
# O zip É o manifesto: lista + conteúdo do pacote, sem arquivo à parte pra derivar.
# Sai 1 se o zip não abre.
# ponytail: nome de arquivo com [ * ? viraria curinga no unzip -p; hoje o pacote não tem nenhum.
diverge() {
  local z="$1" d="$2" f lista
  lista="$(unzip -Z1 "$z" 2>/dev/null)" || return 1
  while IFS= read -r f; do
    [[ -z "$f" || "$f" == */ ]] && continue
    if [[ ! -e "$d/$f" ]]; then printf 'falta\t%s\n' "$f"
    elif [[ ! -s "$d/$f" ]] && (( $(unzip -p "$z" "$f" | head -c1 | wc -c) > 0 )); then printf 'vazio\t%s\n' "$f"
    elif ! unzip -p "$z" "$f" | cmp -s - "$d/$f"; then printf 'diferente\t%s\n' "$f"
    fi
  done <<< "$lista"
}

perguntar() {  # perguntar "Instalar X?" → 0 = sim · Enter = sim
  local resp
  if [[ ! -t 0 ]]; then
    printf '  (sem terminal interativo — pulando: %s)\n' "$1"
    return 1
  fi
  read -r -p "  $1 [S/n] " resp
  [[ -z "$resp" || "$resp" =~ ^[SsYy] ]]
}

# --conferir: não instala nada. Sai 0 com "SQUAD OK" ou 1 listando o que falta.
if [[ "${1:-}" == "--conferir" ]]; then
  # Confere INTEGRIDADE, não só presença: cada arquivo de cada zip é comparado
  # byte a byte com o instalado. Dois resultados diferentes:
  #   ✗ incompleto   — arquivo do pacote ausente ou vazio (quebra a skill) → rc 1
  #   ~ personalizado — arquivo existe mas difere do pacote (você editou, ou
  #                     está numa versão de pacote diferente). Não é erro e o
  #                     --conferir nunca escreve nada; o instalador, se rodar,
  #                     guarda cópia antes de trocar.
  falta=0; pers=0; n=0; na=0
  confere() {  # confere <rótulo> <zip> <destino>
    local r st f
    if ! r="$(diverge "$2" "$3")"; then echo "  ✗ incompleto: $1 — zip ilegível no pacote ($(basename "$2"))"; falta=$((falta+1)); return; fi
    while IFS=$'\t' read -r st f; do
      [[ -z "$st" ]] && continue
      case "$st" in
        falta)     echo "  ✗ incompleto: $1 — falta $f"; falta=$((falta+1)) ;;
        vazio)     echo "  ✗ incompleto: $1 — vazio $f"; falta=$((falta+1)) ;;
        diferente) echo "  ~ personalizado: $1 — $f difere do pacote"; pers=$((pers+1)) ;;
      esac
    done <<< "$r"
  }
  for z in "$DIR"/*.zip; do
    s="$(basename "$z" .zip)"
    case "$s" in squad-turbo-completo|squad-core-turbo) continue ;; esac
    n=$((n+1))
    confere "skill $s" "$z" "$SKILLS_DST"
  done
  for a in "$DIR"/agents/*-turbo.md; do
    na=$((na+1)); b="$(basename "$a")"
    if [[ ! -s "$AGENTS_DST/$b" ]]; then echo "  ✗ incompleto: agente ${b%.md} ausente ou vazio"; falta=$((falta+1))
    elif ! cmp -s "$a" "$AGENTS_DST/$b"; then echo "  ~ personalizado: agente ${b%.md} difere do pacote"; pers=$((pers+1)); fi
  done
  confere "squad-core" "$DIR/squad-core-turbo.zip" "$SQUADS_DST"
  for b in git python3 node ffmpeg yt-dlp; do
    command -v "$b" >/dev/null 2>&1 || echo "  · sem $b (não bloqueia skills e agentes; algumas skills de vídeo e scripts precisam)"
  done
  echo "  (conferência byte a byte de cada arquivo do pacote: ✗ = incompleto, ~ = personalizado)"
  if (( falta == 0 )); then
    echo "SQUAD OK: $n skills · $na agentes · squad-core"
    (( pers > 0 )) && echo "  $pers arquivo(s) personalizado(s) (~): seus. O instalador guarda cópia em $BKP_RAIZ antes de trocar."
    exit 0
  fi
  echo "SQUAD INCOMPLETO: $falta arquivo(s) faltando ou vazio(s). Rode o instalador de novo."; exit 1
fi

echo "▶ Instalação guiada do Squad Turbo LPSG"
echo "  Fonte: $DIR"

# ── 0 · Cópia de segurança do que você personalizou ─────────────────────────
# Antes de escrever qualquer coisa: lista os arquivos que as etapas 2-4 vão
# TROCAR e que hoje estão diferentes do pacote, e copia cada um, com o caminho,
# para uma pasta NOVA (mktemp: nome único, nunca reaproveita a de uma execução
# anterior). Se a cópia falhar ou não bater byte a byte, para aqui (rc 3).
titulo "0/11 · Cópia de segurança do que você personalizou"
ZIPS_RUINS=" "   # zips que nem abrem: a etapa 2 não extrai e conta como falha
salvar=()        # "origem<TAB>caminho-no-backup"
for z in "$DIR"/*.zip; do
  s="$(basename "$z" .zip)"
  case "$s" in squad-turbo-completo) continue ;; squad-core-turbo) dst="$SQUADS_DST"; pre=squads ;; *) dst="$SKILLS_DST"; pre=skills ;; esac
  if ! r="$(diverge "$z" "$dst")"; then ZIPS_RUINS+="$s "; continue; fi
  while IFS=$'\t' read -r st f; do
    [[ "$st" == diferente || "$st" == vazio ]] && salvar+=("$dst/$f"$'\t'"$pre/$f")
  done <<< "$r"
done
for a in "$DIR"/agents/*-turbo.md; do
  b="$(basename "$a")"
  [[ -e "$AGENTS_DST/$b" ]] && ! cmp -s "$a" "$AGENTS_DST/$b" && salvar+=("$AGENTS_DST/$b"$'\t'"agents/$b")
done
if (( ${#salvar[@]} == 0 )); then
  ok "nada personalizado a guardar (nenhum arquivo do pacote difere do instalado)"
else
  BKP=""
  mkdir -p "$BKP_RAIZ" 2>/dev/null && BKP="$(mktemp -d "$BKP_RAIZ/$(date +%Y%m%d-%H%M%S)-XXXXXX" 2>/dev/null)"
  if [[ -z "$BKP" ]]; then
    echo "  ✗ FALHOU — não consegui criar a pasta de cópia em $BKP_RAIZ"
    echo "  Nada foi instalado nem trocado. Libere a escrita nessa pasta e rode de novo."
    exit 3
  fi
  for item in "${salvar[@]}"; do
    o="${item%%$'\t'*}"; c="$BKP/${item#*$'\t'}"
    if ! { mkdir -p "$(dirname "$c")" && cp -p "$o" "$c" && cmp -s "$o" "$c"; }; then
      echo "  ✗ FALHOU — cópia de $o não confere"
      echo "  Nada foi instalado nem trocado. A cópia parcial ficou em $BKP."
      exit 3
    fi
  done
  printf 'Cópia feita pelo instalar-squad.sh em %s, antes de trocar estes arquivos pela versão do pacote.\nPra voltar um arquivo: copie daqui pro mesmo caminho dentro de ~/.claude/ (skills/, agents/, squads/).\n' "$(date '+%d/%m/%Y %H:%M')" > "$BKP/LEIA-ME.txt" || { echo "  ✗ FALHOU — não consegui escrever em $BKP"; exit 3; }
  ok "${#salvar[@]} arquivo(s) seus guardados em $BKP"
  echo "     (o pacote vai trocar esses arquivos; os seus ficam lá, intactos)"
fi

# ── 1/7 · Claude Code ────────────────────────────────────────────────────────
titulo "1/11 · Claude Code"
if command -v claude >/dev/null 2>&1; then
  ok "Claude Code instalado ($(claude --version 2>/dev/null | head -1))"
else
  pendente "Claude Code não encontrado"
  echo "     → instale primeiro:  npm install -g @anthropic-ai/claude-code"
  echo "       (precisa de Node 18+ · https://nodejs.org)"
  echo "     Depois rode este script de novo."
fi

# ── 2/7 · Skills ─────────────────────────────────────────────────────────────
titulo "2/11 · Skills proprietárias → $SKILLS_DST"
n_skills=0; f2=$falhas
if mkdir -p "$SKILLS_DST"; then
  for z in "$DIR"/*.zip; do
    s="$(basename "$z" .zip)"
    case "$s" in squad-turbo-completo|squad-core-turbo) continue ;; esac
    if [[ "$ZIPS_RUINS" == *" $s "* ]]; then falhou "etapa 2 (skills): $s.zip não abre (zip corrompido?)"; continue; fi
    if unzip -oq "$z" -d "$SKILLS_DST"; then n_skills=$((n_skills+1)); else falhou "etapa 2 (skills): não consegui extrair $s.zip em $SKILLS_DST"; fi
  done
else
  falhou "etapa 2 (skills): não consegui criar $SKILLS_DST"
fi
(( falhas == f2 )) && ok "$n_skills skills instaladas/atualizadas (todos os zips da pasta — lista canônica no sync-skills.sh)"

# ── 3/7 · Agentes ────────────────────────────────────────────────────────────
titulo "3/11 · Agentes → $AGENTS_DST"
n_ag=0; f3=$falhas
if mkdir -p "$AGENTS_DST"; then
  for a in "$DIR"/agents/*-turbo.md; do
    if cp "$a" "$AGENTS_DST/"; then n_ag=$((n_ag+1)); else falhou "etapa 3 (agentes): não consegui copiar $(basename "$a") pra $AGENTS_DST"; fi
  done
else
  falhou "etapa 3 (agentes): não consegui criar $AGENTS_DST"
fi
(( falhas == f3 )) && ok "$n_ag agentes copiados (invocáveis com @nome-do-agente)"

# ── 4/7 · Squad-core ─────────────────────────────────────────────────────────
titulo "4/11 · Squad-core → $SQUADS_DST"
if [[ ! -f "$DIR/squad-core-turbo.zip" ]]; then
  falhou "etapa 4 (squad-core): squad-core-turbo.zip não encontrado na pasta"
elif [[ "$ZIPS_RUINS" == *" squad-core-turbo "* ]]; then
  falhou "etapa 4 (squad-core): squad-core-turbo.zip não abre (zip corrompido?)"
elif ! mkdir -p "$SQUADS_DST"; then
  falhou "etapa 4 (squad-core): não consegui criar $SQUADS_DST"
elif unzip -oq "$DIR/squad-core-turbo.zip" -d "$SQUADS_DST"; then
  ok "templates · checklists · frameworks (usados pelo @pesquisador-turbo)"
else
  falhou "etapa 4 (squad-core): não consegui extrair squad-core-turbo.zip em $SQUADS_DST"
fi

# ── 5/7 · Dependências de vídeo (skill watch) ────────────────────────────────
titulo "5/11 · Dependências de vídeo — ffmpeg + yt-dlp (skill watch)"
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
  elif [[ "$(uname -s)" == Linux ]]; then
    pendente "$dep ausente"
    echo "     → Ubuntu/WSL (pede a sua senha do Ubuntu):  sudo apt-get install -y ffmpeg pipx"
    echo "       e depois, sem sudo:  pipx install yt-dlp && pipx ensurepath"
  else
    pendente "$dep ausente e sem Homebrew"
    echo "     → instale o Homebrew primeiro (precisa da sua senha, é rápido):"
    echo '       /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
    echo "     Depois: brew install ffmpeg yt-dlp"
  fi
done

# ── 6/7 · Transcrição local sem chave (whisper-local) ────────────────────────
titulo "6/11 · Transcrição local sem chave de API (faster-whisper)"
WL="$SKILLS_DST/watch/whisper-local"
if [[ -x "$WL/venv/bin/python" ]] && "$WL/venv/bin/python" -c "import faster_whisper" 2>/dev/null; then
  ok "venv do whisper-local já pronto"
elif [[ -f "$WL/instalar.sh" ]]; then
  echo "  A skill watch transcreve vídeo SEM chave de API, localmente."
  echo "  O venv ocupa ~220 MB; o modelo (medium) baixa no 1º uso (~3,5 GB em ~/.cache)."
  if perguntar "Montar o venv agora?"; then
    bash "$WL/instalar.sh" && ok "whisper-local pronto" || pendente "whisper-local — falhou (rode: bash $WL/instalar.sh)"
  else
    pulado "whisper-local — quando quiser: bash $WL/instalar.sh"
  fi
else
  pendente "watch/whisper-local não encontrado (a etapa 2 rodou?)"
fi

# ── 7/8 · Scrapling — o Claude lê páginas da web ─────────────────────────────
titulo "7/11 · Scrapling — o Claude lê páginas da web (opcional)"
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
    pulado "Scrapling — quando quiser: bash $DIR/instalar-scrapling.sh"
  fi
fi

# ── 8/9 · OpenWA — WhatsApp no chat ──────────────────────────────────────────
titulo "8/11 · WhatsApp no chat — OpenWA (opcional · requer servidor próprio)"
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
titulo "9/11 · E-mail marketing próprio — Mautic (opcional · roda em VPS)"
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

# ── 10/11 · n8n — automação dos workflows ────────────────────────────────────
titulo "10/11 · Automação dos workflows — n8n (opcional · roda em VPS)"
echo "  Onde os 14 workflows do LPSG rodam: webhook da Hotmart, ficha, lembretes"
echo "  das aulas, tsunami, recuperação D+1-D+7. A skill automacoes-lpsg-turbo"
echo "  desenha os fluxos; o n8n executa. Precisa de VPS (webhook exige endereço"
echo "  público) — pode ser o MESMO do Mautic e do OpenWA."
if perguntar "Quer instalar o n8n agora?"; then
  bash "$DIR/instalar-n8n.sh" || pendente "n8n — falhou (rode: bash $DIR/instalar-n8n.sh)"
else
  echo "  · pulado — quando quiser: bash $DIR/instalar-n8n.sh"
fi

# ── Recado sobre o servidor ──────────────────────────────────────────────────
echo ""
echo "  💡 Mautic, n8n e OpenWA rodam TODOS no mesmo VPS, cada um no seu"
echo "     subdomínio, atrás do mesmo proxy — é assim que a Turbo opera."
echo "     Não tem servidor? A indicação é a Hostinger KVM 8:"
echo "     https://www.hostinger.com/br?REFERRALCODE=K6QJULIANH77  (link de indicação)"

# ── 11/11 · Opcionais ────────────────────────────────────────────────────────
titulo "11/11 · Opcionais"
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
echo ""
echo "  📦 Skills de TERCEIRO (opcionais, não vêm no pacote)"
echo "     Existem skills úteis escritas por outras pessoas — reescrita anti-IA,"
echo "     posts de LinkedIn, thumbnail de YouTube, pesquisa de nicho. O squad NÃO"
echo "     as redistribui: sem licença do autor, republicar não é nosso direito."
echo "     A lista, com autor, licença e origem de cada uma, está em:"
echo "     99-skills-compartilhaveis/SKILLS-DE-TERCEIRO.md"
echo "     São 19: 17 do pacote social-media-skills (Charlie Hills, MIT) mais a"
echo "     humanizer (Siqi Chen, MIT) e a remotion. Instala-se da fonte, não daqui:"
echo "       npx skills add charlie947/social-media-skills --skill <nome> --yes"
echo "     Aviso: skill de terceiro vem com a licença do autor, não com a do squad,"
echo "     e várias chegaram até nós SEM licença nenhuma — nesse caso o padrão legal"
echo "     é todos os direitos reservados: use na sua máquina, não redistribua."
echo ""
echo "  · MCPs (Drive · Windsor · NotebookLM · n8n…): nenhum é obrigatório."
echo "    Quando precisar, o passo a passo de conexão está em GUIA-MCPS.md"

# ── resumo ───────────────────────────────────────────────────────────────────
echo ""
if (( falhas > 0 )); then
  echo "❌ INSTALAÇÃO INCOMPLETA: $falhas falha(s) em etapa obrigatória — veja as linhas \"✗ FALHOU\" acima."
  echo "   O squad NÃO está pronto. Corrija o que a linha diz e rode este instalador de novo."
  exit 2
elif (( avisos > 0 )); then
  echo "⚠️  Instalação concluída com $avisos PROBLEMA(s) — veja os ✗ acima."
elif (( pulados > 0 )); then
  echo "✅ Tudo que é obrigatório está instalado."
  echo "   $pulados opcional(is) você escolheu pular (·) — dá pra instalar depois,"
  echo "   é só rodar este instalador de novo. Não é erro."
else
  echo "✅ Tudo instalado."
fi
echo "   Último passo: REINICIE o Claude Code (feche a sessão e abra outra)."
echo "   Skills, agentes e MCPs só carregam em sessão NOVA — a sessão desta"
echo "   instalação não enxerga o que ela mesma instalou."
echo "   Confira: bash $DIR/instalar-squad.sh --conferir  (tem que dizer SQUAD OK)"
echo "            /skills lista as skills · @estrategista-turbo responde."

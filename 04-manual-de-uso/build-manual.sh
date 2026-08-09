#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# build-manual.sh · Propaga os FATOS canônicos do manual pros .md e manual.html
#
# PROBLEMA QUE RESOLVE: a mesma informação (versão, contagens, descrição da
# mensageria, função da Aula 4...) aparecia nos .md E no manual.html, e derivava.
#
# COMO FUNCIONA: fonte única em manual-dados.json. Cada fato tem um par de
# marcadores nos arquivos:  <!--F:chave-->conteúdo<!--/F-->
# Este script troca o "conteúdo" entre os marcadores pelo valor do JSON.
# Idempotente · preserva 100% do HTML interativo (formulário, JS, CSS, cards) —
# só mexe no que está entre marcadores.
#
# FLUXO: edite manual-dados.json → rode este script → commit.
# Pra marcar um trecho novo: envolva com <!--F:chave--> ... <!--/F--> e
# adicione a chave no JSON.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail
cd "$(dirname "$0")"

python3 - "$@" << 'PY'
import json, re, sys, pathlib

data = json.loads(pathlib.Path("manual-dados.json").read_text(encoding="utf-8"))
facts = {k: v for k, v in data.items() if not k.startswith("_")}

targets = ["00-pre-requisitos.md", "01-intake.md", "02-passo-a-passo.md",
           "03-acoes-humanas.md", "04-troubleshooting.md", "README.md", "manual.html",
           "../README.md", "../99-skills-compartilhaveis/README.md"]

total_changes = 0
missing_keys = set()

for fname in targets:
    p = pathlib.Path(fname)
    if not p.exists():
        continue
    txt = p.read_text(encoding="utf-8")
    orig = txt
    # encontra todos os marcadores presentes no arquivo
    for key in re.findall(r"<!--F:([a-z0-9_]+)-->", txt):
        if key not in facts:
            missing_keys.add(key)
            continue
        # troca o miolo entre <!--F:key--> e <!--/F--> pelo valor canônico
        pat = re.compile(r"(<!--F:%s-->).*?(<!--/F-->)" % re.escape(key), re.DOTALL)
        txt = pat.sub(lambda m: m.group(1) + facts[key] + m.group(2), txt)
    if txt != orig:
        p.write_text(txt, encoding="utf-8")
        n = len(re.findall(r"<!--F:", orig))
        print(f"  ✓ {fname} · {n} marcador(es) atualizado(s)")
        total_changes += 1
    else:
        n = len(re.findall(r"<!--F:", orig))
        if n:
            print(f"  · {fname} · {n} marcador(es) · já em dia")

if missing_keys:
    print(f"\n⚠️  marcadores sem chave no JSON: {', '.join(sorted(missing_keys))}", file=sys.stderr)
    sys.exit(1)

# ─────────────────────────────────────────────────────────────────────────────
# DERIVADOS · lugares onde um marcador HTML não pode viver (dentro da URL de um
# badge, no meio de uma frase de total). Aqui a substituição é por regex, mas o
# VALOR continua vindo do mesmo manual-dados.json — fonte única preservada.
# Motivo: a auditoria de 2026-08-09 achou 5 contagens divergentes justamente
# nestes pontos, que ficavam de fora do sistema de marcadores.
# ─────────────────────────────────────────────────────────────────────────────
derivados = []
if "n_skills" in facts:
    derivados += [
        (r"badge/skills-\d+-orange", f"badge/skills-{facts['n_skills']}-orange"),
        (r"\[!\[Skills: \d+\]", f"[![Skills: {facts['n_skills']}]"),
    ]
if "n_agentes" in facts:
    derivados += [
        (r"badge/agents-\d+-purple", f"badge/agents-{facts['n_agentes']}-purple"),
        (r"\[!\[Agents: \d+\]", f"[![Agents: {facts['n_agentes']}]"),
    ]
if "n_zips_total" in facts and "n_skills" in facts:
    z, s = facts["n_zips_total"], facts["n_skills"]
    derivados += [
        (r"\*\*Total: \d+ zips\*\* \(\d+ skills", f"**Total: {z} zips** ({s} skills"),
        (r"✅ \d+ zips compartilháveis \(\d+ skills", f"✅ {z} zips compartilháveis ({s} skills"),
    ]
if "n_skills_instaladas" in facts:
    derivados.append((r"as \d+ skills instaladas", f"as {facts['n_skills_instaladas']} skills instaladas"))

n_deriv = 0
for fname in targets:
    p = pathlib.Path(fname)
    if not p.exists():
        continue
    txt = p.read_text(encoding="utf-8")
    orig = txt
    for pat, rep in derivados:
        txt = re.sub(pat, rep, txt)
    if txt != orig:
        p.write_text(txt, encoding="utf-8")
        print(f"  ✓ {fname} · contagem derivada atualizada")
        n_deriv += 1

print(f"\n✅ build-manual concluído. {len(facts)} fatos canônicos · {len(derivados)} derivados · arquivos sincronizados.")
PY

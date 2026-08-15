# Como manter o Squad Turbo (fonte única · sem deriva)

> Leitura obrigatória antes de editar qualquer agente ou skill. Resolve o problema de "3 cópias dessincronizadas".

---

## Mapa das cópias (e qual é a verdade)

### Agentes (`*.md`)

| Local | Papel | Edita aqui? |
|---|---|---|
| `~/.claude/agents/` | **FONTE CANÔNICA** | ✅ **SIM** |
| `<repo>/.claude/agents/` | project-scoped (ativo ao abrir este projeto no Claude Code) | ❌ gerado por script |
| `<repo>/99-skills-compartilhaveis/agents/` | distribuível (quem clona o repo instala daqui) | ❌ gerado por script |
| `<repo>/99-skills-compartilhaveis/squad-turbo-completo.zip` | empacotamento dos 11 | ❌ gerado por script |

**Regra de ouro:** edite SEMPRE em `~/.claude/agents/`. Nunca edite as cópias à mão — elas são derivadas.

### Skills (`SKILL.md` + `references/`)

| Local | Papel | Edita aqui? |
|---|---|---|
| `~/.claude/skills/<skill>/` | **FONTE CANÔNICA** | ✅ **SIM** |
| `<repo>/99-skills-compartilhaveis/<skill>.zip` | distribuível | ❌ gerado por `zip` |

**Regra de ouro:** edite a skill em `~/.claude/skills/<skill>/`, depois regenere o zip.

> ⚠️ **Localização canônica das skills = `~/.claude/skills/`.** NÃO use `~/.claude/squads/squad-turbo/skills/` — esse era um diretório paralelo com cópias antigas (resolvido em 2026-05). Todos os agentes apontam pro canônico. O diretório `~/.claude/squads/squad-turbo/` é mantido APENAS por seus assets squad-level únicos: `core/` (constitution · templates · checklists · frameworks). Esses NÃO têm equivalente em `skills/` e são legitimamente referenciados (ex: `@pesquisador-turbo` usa `core/templates/`).

> 📦 **`core/` É distribuível** (era a lacuna apontada na auditoria): empacotado em `squad-core-turbo.zip`. Quem clona o repo precisa instalar pra o `@pesquisador-turbo` não quebrar:
> ```bash
> # instalar
> unzip squad-core-turbo.zip -d ~/.claude/squads/
> # regenerar o zip depois de editar core/
> cd ~/.claude/squads && zip -rq "<repo>/99-skills-compartilhaveis/squad-core-turbo.zip" squad-turbo/core -x "*.DS_Store"
> ```

---

## Fluxo de manutenção

### Mudou um AGENTE
```bash
# 1. edite em ~/.claude/agents/<agente>.md
# 2. propague pras cópias + regenere o zip:
bash 99-skills-compartilhaveis/sync-squad.sh
# 3. commit
git add -A && git commit -m "..."
```

### Mudou uma SKILL
```bash
# 1. edite em ~/.claude/skills/<skill>/...
# 2. regenere o zip da skill:
cd ~/.claude/skills && zip -rq "<repo>/99-skills-compartilhaveis/<skill>.zip" <skill>/ -x "*.DS_Store"
# 3. commit
```

> Para skills LPSG/Turbo proprietárias o zip vive no repo. Skills externas (Anthropic · Vercel) NÃO são empacotadas — são instaladas via plugin/npx.

---

## O que NÃO versionar

Já coberto pelo `.gitignore`:
- `.claude/settings.local.json` — permissões da máquina (por-máquina)
- `.claude/launch.json` — config local
- `_private/` — material bruto/sensível: briefings, revisões `.docx`, entregáveis de cliente, dados de leads
- `.DS_Store`

---

## Guard-rail de privacidade (`audit-privacy.sh`)

O repo é distribuído — **nenhum nome de cliente, lead ou terceiro real pode entrar**. Buscar só nomes conhecidos já falhou 3 vezes; o `audit-privacy.sh` extrai TODOS os pares "Nome Sobrenome" dos arquivos trackeados (texto e DENTRO dos zips/docx) e compara contra `privacy-baseline.txt` (pares já revisados e aprovados).

```bash
./audit-privacy.sh                     # rodar ANTES de todo push · exit 1 se houver par novo
./audit-privacy.sh --update-baseline   # aceita o estado atual (só após revisar os pares novos!)
```

Par novo detectado:
- **Pessoa real** (cliente, lead, aluno) → genericizar ou mover pra `_private/` ANTES de commitar
- **Fictício/referência pública** (persona de exemplo, figura pública citada em copy) → revisar e rodar `--update-baseline`

---

## Portão automático (instale uma vez por clone)

```bash
bash 99-skills-compartilhaveis/hooks/instalar-hooks.sh
```

Instala o `pre-push`, que **bloqueia o push** se encontrar: nome de pessoa fora da baseline
de privacidade, skill empacotada sem agente dono, ou contagem de docs divergindo do disco.
São exatamente os três erros que a auditoria de 2026-08-09 achou já commitados. Emergência:
`git push --no-verify`.

---

## Contagens: nunca digite um número à mão

O fluxo é fechado, não confie em memória:

1. `sync-skills.sh` conta as skills reais e **grava** `n_skills`, `n_zips_total` e
   `n_skills_instaladas` no `manual-dados.json`
2. `build-manual.sh` propaga: pelos marcadores `<!--F:chave-->` **e** pelos *derivados*
   (badge do README, "Total: N zips", "as N skills instaladas" — lugares onde um comentário
   HTML quebraria a sintaxe)

Mudou o número de skills? Rode os dois, nessa ordem. Não edite badge nem total no braço.

---

## Ebook: o PDF não se atualiza sozinho

O `ebook.html` recebe a versão pelo marcador, mas o **PDF distribuído** só muda se você rodar:

```bash
bash 04-manual-de-uso/build-manual.sh                          # 1. versão no HTML
bash 02-entregaveis-finais/passo-a-passo-aluno/build-ebook.sh  # 2. HTML → PDF
```

O script confere se a versão aparece dentro do PDF gerado e avisa se não bater.

---

## Checklist antes de commitar mudança no squad

```
[ ] Editei na FONTE (~/.claude/agents ou ~/.claude/skills)?
[ ] Rodei sync-squad.sh (se mexi em agente)?
[ ] Rodei sync-skills.sh (se mexi em skill) + build-manual.sh (contagens)?
[ ] Toda skill nova tem um agente dono no bloco skills:?
[ ] As 3 cópias de agente batem? (sync-squad.sh garante)
[ ] Nenhum segredo / path pessoal entrou em arquivo versionado?
[ ] Rodei ./audit-privacy.sh e passou? (o pre-push checa de novo)
[ ] Mexi no ebook.html? Rodei build-ebook.sh?
[ ] Commit com mensagem descritiva?
```

---

## Convenção de skills (relembrete)

| Padrão | Tipo | Destino |
|---|---|---|
| `nome-lpsg.zip` | skill LPSG proprietária | `~/.claude/skills/` |
| `nome-turbo.zip` | skill Turbo proprietária | `~/.claude/skills/` |
| `Nome-LPSG-Template.zip` | entregável completo (legado/consulta) | referência |
| `squad-turbo-completo.zip` | 13 agentes | `~/.claude/agents/` |
| `watch.zip` | skill externa ADOTADA (claude-video, MIT) — exceção consciente ao sufixo `-turbo` (nome original preservado, é como os agentes a chamam) | `~/.claude/skills/` + rodar `whisper-local/instalar.sh` |

Skills externas referenciadas pelos agentes (não empacotadas): ver `README.md` → seção "Skills externas".

**Instalação em máquina nova:** `instalar-squad.sh` (guiado, idempotente). Ele instala TODOS os zips da pasta sem lista própria — skill nova empacotada entra sozinha no instalador, nada a manter.

**Ferramentas de terceiros (não são skills, não entram em zip):** vivem em `~/.claude/tools/` e têm script próprio chamado pelo instalador — hoje só o `instalar-scrapling.sh` (Scrapling, BSD-3, leitura de páginas web + MCP). Padrão pra adicionar outra: script `instalar-<nome>.sh` idempotente + manual `<nome>-COMO-USAR.md` copiado pro destino + um passo opt-in no `instalar-squad.sh` + linha no `GUIA-MCPS.md` se expuser MCP. Nunca commitar o venv nem binário de terceiro.

---

## Protocolo transversal nos agentes

Todo agente do squad carrega `protocolo-conversa-turbo` como **primeira skill** do frontmatter:

```yaml
skills:
  - protocolo-conversa-turbo   # ← SEMPRE primeira
  - [skills do domínio]
```

Assim a IA opera com os 8 padrões + anti-bajulação + travas universais antes de qualquer skill de fase. Ao criar agente novo, esta é a primeira linha do bloco skills.

---

## Auto-compact em 50% da janela de contexto

`/compact` é comando do **harness** (Claude Code) — nenhuma skill ou agente consegue invocá-lo. A automação certa é a configuração nativa, em `~/.claude/settings.json` (por máquina · replicar em cada instalação):

```json
{
  "autoCompactEnabled": true,
  "autoCompactWindow": 500000
}
```

- `autoCompactEnabled: true` — compacta automaticamente quando o contexto enche
- `autoCompactWindow: 500000` — trata a janela efetiva como 500k tokens. No modelo de 1M (fable-5[1m]), isso dispara o auto-compact em ~50% da janela real
- Se usar um modelo de 200k, ajustar pra `100000` (50% de 200k · mínimo aceito pelo schema)
- `/compact` manual continua disponível a qualquer momento

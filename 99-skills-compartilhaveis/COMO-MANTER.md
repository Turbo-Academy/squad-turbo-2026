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
- `_private/` — material bruto/sensível
- `.DS_Store`

---

## Checklist antes de commitar mudança no squad

```
[ ] Editei na FONTE (~/.claude/agents ou ~/.claude/skills)?
[ ] Rodei sync-squad.sh (se mexi em agente)?
[ ] Regenerei o zip (se mexi em skill)?
[ ] As 3 cópias de agente batem? (sync-squad.sh garante)
[ ] Nenhum segredo / path pessoal entrou em arquivo versionado?
[ ] Commit com mensagem descritiva?
```

---

## Convenção de skills (relembrete)

| Padrão | Tipo | Destino |
|---|---|---|
| `nome-lpsg.zip` | skill LPSG proprietária | `~/.claude/skills/` |
| `nome-turbo.zip` | skill Turbo proprietária | `~/.claude/skills/` |
| `Nome-LPSG-Template.zip` | entregável completo (legado/consulta) | referência |
| `squad-turbo-completo.zip` | 11 agentes | `~/.claude/agents/` |

Skills externas referenciadas pelos agentes (não empacotadas): ver `README.md` → seção "Skills externas".

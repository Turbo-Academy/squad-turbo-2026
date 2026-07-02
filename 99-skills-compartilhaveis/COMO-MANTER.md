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

## Checklist antes de commitar mudança no squad

```
[ ] Editei na FONTE (~/.claude/agents ou ~/.claude/skills)?
[ ] Rodei sync-squad.sh (se mexi em agente)?
[ ] Regenerei o zip (se mexi em skill)?
[ ] As 3 cópias de agente batem? (sync-squad.sh garante)
[ ] Nenhum segredo / path pessoal entrou em arquivo versionado?
[ ] Rodei ./audit-privacy.sh e passou?
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

Skills externas referenciadas pelos agentes (não empacotadas): ver `README.md` → seção "Skills externas".

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

# 99-skills-compartilhaveis

> ZIPs para instalar skills LPSG e o Squad Turbo em qualquer maquina.

## Convencao de nomes

| Padrao | Tipo | Destino | Exemplo |
|---|---|---|---|
| `nome-lpsg.zip` | **Skill do Claude** | `~/.claude/skills/nome-lpsg/` | `trafego-lpsg.zip` |
| `Nome-LPSG-Template.zip` | **Entregavel completo** (template + exemplo) | Referencia / consulta | `Trafego-LPSG-Template.zip` |
| `lpsg-master.zip` | **Orquestrador** | `~/.claude/skills/lpsg-master/` | — |
| `squad-turbo-completo.zip` | **10 agentes do Squad** | `~/.claude/agents/` | — |

## Contagem

- **11 skills LPSG** (lowercase): instalar em `~/.claude/skills/`
- **10 Templates** (PascalCase): empacotamento dos entregaveis de `02-entregaveis-finais/`
- **1 squad completo**: todos os 10 agentes Turbo

**Total: 22 zips**

## Como instalar

```bash
# Skills LPSG (11)
mkdir -p ~/.claude/skills
for z in *-lpsg.zip lpsg-master.zip; do
  unzip -o "$z" -d ~/.claude/skills/
done

# Squad Turbo (10 agentes)
mkdir -p ~/.claude/agents
cp agents/*.md ~/.claude/agents/
```

## Skills customizadas referenciadas pelos agentes

Os agentes referenciam skills que **nao estao empacotadas aqui** e precisam ser instaladas separadamente. Estas skills residem em `~/.claude/skills/` ou `~/.claude/squads/squad-turbo/skills/` na maquina local:

| Skill | Usada por |
|---|---|
| `mensageria-lancamento` | automacao, copywriter, cs, social |
| `criador-paginas-low-ticket` | copywriter, estrategista |
| `estruturador-evento-turbo` | copywriter, estrategista |
| `criador-criativos` | copywriter, pesquisador-mercado, trafego |
| `dash-lancamento-turbo` | estrategista |
| `designer-senior` | designer, diretor-criativo |
| `gerador-slides-turbo` | designer |
| `banner-design` | designer, diretor-criativo |
| `gerador-instagram` | designer, diretor-criativo, social |
| `ui-ux-pro-max` | designer, diretor-criativo |
| `design` | designer, diretor-criativo |
| `design-system` | designer, diretor-criativo |
| `brand` | designer, diretor-criativo |
| `ui-styling` | designer, diretor-criativo |
| `slides-uipm` | designer, diretor-criativo |
| `design-tokens-turbo` | designer, diretor-criativo |
| `lovable-style-turbo` | designer, diretor-criativo |
| `page-optimizer` | diretor-criativo |
| `criador-reels` | social |

> Se um agente falhar ao tentar usar uma skill, verifique se ela esta instalada em `~/.claude/skills/`.

## agents/

Pasta com os 10 agentes `.md` do Squad Turbo. Ver `agents/README.md` para detalhes.

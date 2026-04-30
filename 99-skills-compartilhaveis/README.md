# 99-skills-compartilhaveis

> ZIPs para instalar skills LPSG e o Squad Turbo em qualquer máquina.

## Convenção de nomes

| Padrão | Tipo | Destino | Exemplo |
|---|---|---|---|
| `nome-lpsg.zip` | **Skill do Claude** | `~/.claude/skills/nome-lpsg/` | `trafego-lpsg.zip` |
| `nome-turbo.zip` | **Skill do Claude** (não-LPSG) | `~/.claude/skills/nome-turbo/` | `meta-ads-cli-turbo.zip` |
| `Nome-LPSG-Template.zip` | **Entregável completo** (template + exemplo) | Referência / consulta | `Trafego-LPSG-Template.zip` |
| `lpsg-master.zip` | **Orquestrador** | `~/.claude/skills/lpsg-master/` | — |
| `squad-turbo-completo.zip` | **11 agentes** (Squad + Picasso) | `~/.claude/agents/` | — |

## Contagem (atualizada 2026-04-30)

- **13 skills do Claude** (lowercase): instalar em `~/.claude/skills/`
  - 10 skills LPSG core (estrutura-aulas, oferta, paginas, trafego, criativos, mensageria, automacoes, dashboard, operacao, cs)
  - 1 orquestrador (lpsg-master)
  - 1 manual final (manual-final-lpsg)
  - 1 execução Meta Ads (meta-ads-cli-turbo) ⭐ adicionada após lançamento da Meta Ads CLI oficial em 29/04/2026
- **10 Templates** (PascalCase): empacotamento dos entregáveis de `02-entregaveis-finais/`
- **1 squad completo**: 11 agentes (Squad Turbo + Picasso Auditor)

**Total: 24 zips**

## Como instalar

```bash
# 1. Skills LPSG (13 ao todo)
mkdir -p ~/.claude/skills
for z in *-lpsg.zip lpsg-master.zip meta-ads-cli-turbo.zip; do
  unzip -o "$z" -d ~/.claude/skills/
done

# 2. Squad Turbo (11 agentes · inclui Picasso Auditor)
mkdir -p ~/.claude/agents
cp agents/*.md ~/.claude/agents/

# 3. (Opcional) Stack Picasso · auditoria visual anti-IA
npx skills add https://github.com/anthropics/skills --skill frontend-design --yes
npx skills add pbakaus/impeccable --yes
npx skills add https://github.com/kylezantos/design-motion-principles --skill design-motion-principles --yes

# 4. Reiniciar Claude Code
```

## Skills externas referenciadas pelos agentes

Os agentes referenciam skills que **não estão empacotadas aqui** e precisam ser instaladas separadamente. Estas skills residem em `~/.claude/skills/` (Claude Plugins, npx skills add, ou squad-turbo standalone):

### Stack Picasso (auditoria visual)
| Skill | Usada por | Origem |
|---|---|---|
| `frontend-design` | designer, diretor-criativo, picasso | Anthropic plugin |
| `impeccable` | diretor-criativo, picasso | `npx skills add pbakaus/impeccable` |
| `design-motion-principles` | diretor-criativo, picasso | `npx skills add kylezantos/design-motion-principles` |
| `web-design-guidelines` | diretor-criativo, picasso | npx skills |

### Squad Turbo (executores)
| Skill | Usada por |
|---|---|
| `mensageria-lpsg` | automacao, copywriter, cs, social |
| `criador-paginas-low-ticket` | copywriter, estrategista |
| `estruturador-evento-turbo` | copywriter, estrategista |
| `criador-criativos` | copywriter, pesquisador-mercado, trafego, social |
| `criador-reels` | copywriter, social |
| `dash-lancamento-turbo` | estrategista, trafego, automacao |
| `designer-senior` | designer, diretor-criativo |
| `gerador-slides-turbo` | designer, diretor-criativo |
| `banner-design` | designer, diretor-criativo |
| `gerador-instagram` | designer, diretor-criativo, social |
| `ui-ux-pro-max` | designer, diretor-criativo, picasso |
| `design` | designer, diretor-criativo |
| `design-system` | designer, diretor-criativo |
| `brand` | designer, diretor-criativo |
| `ui-styling` | designer, diretor-criativo |
| `slides-uipm` | designer, diretor-criativo |
| `design-tokens-turbo` | designer, diretor-criativo |
| `lovable-style-turbo` | designer, diretor-criativo |
| `page-optimizer` | diretor-criativo, trafego |
| `transcrever-youtube` | pesquisador, pesquisador-mercado, social |
| `lancamento-pago-semanal` | estrategista, pesquisador, copywriter, trafego, cs |
| `find-skills` | estrategista, pesquisador, pesquisador-mercado |
| `honor` | estrategista |
| `pptx` | designer |

> Se um agente falhar ao tentar usar uma skill, verifique se ela está instalada em `~/.claude/skills/`. Mapeamento completo em [`agents/MATRIZ-SKILLS.md`](agents/MATRIZ-SKILLS.md).

## agents/

Pasta com os 11 agentes `.md`:
- 10 do Squad Turbo (estrategista, pesquisador, pesquisador-mercado, copywriter, diretor-criativo, designer, trafego, social, automacao, cs)
- 1 do Picasso Auditor (auditor de design anti-IA)

Detalhes em [`agents/README.md`](agents/README.md) e mapeamento skills × agents em [`agents/MATRIZ-SKILLS.md`](agents/MATRIZ-SKILLS.md).

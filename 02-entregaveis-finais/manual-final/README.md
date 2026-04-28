# Manual Final LPSG · Gerador de manual personalizado

Pasta destino do entregável final do projeto: um **manual de execução HTML standalone** (estilo site, com sidebar navegável) personalizado pra cada cliente.

## Como é gerado

Não há template estático aqui. O manual é gerado dinamicamente pela skill `manual-final-lpsg` na **Fase 11** do orquestrador (`@lpsg-master`), consolidando os 10 entregáveis anteriores (estrutura-aulas · oferta · paginas · trafego · criativos · mensageria · automacoes · dashboard · operacao · cs).

## Estrutura do output esperado

Quando rodado, a skill gera:

```
manual-execucao.html       ← arquivo único · auto-contido · abre no browser
```

6 páginas em SPA (Single Page App via JS vanilla):

1. **Início** — boas-vindas + visão geral do projeto
2. **Entregáveis** — cards por entregável com 📁 onde está · 🎯 o que é · ✅ o que fazer · 🚨 pendências · 🔗 links · 📊 métricas
3. **Cronograma** — timeline visual da semana (D-7 a D+7)
4. **Time** — RACI + papéis · quem faz o quê
5. **Checklist** — checklist interativo (localStorage)
6. **Recursos** — links externos (Hotmart, Meta, n8n, ManyChat, etc)

## Como rodar manualmente

```
@manual-final-lpsg gerar manual final do projeto {NOME_DO_PROJETO}
```

Ou via orquestrador:

```
@lpsg-master execute Fase 11 do projeto {NOME_DO_PROJETO}
```

## Personalização

Variáveis puxadas automaticamente do cadastro YAML do projeto (Bloco A · I) — nome do expert, datas, ticket, paleta, contas, etc.

Detalhes em `~/.claude/skills/manual-final-lpsg/SKILL.md`.

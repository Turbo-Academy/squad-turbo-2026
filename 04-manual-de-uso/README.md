# Manual de Utilização · LPSG 4.0

> Manual passo-a-passo pra rodar um projeto LPSG completo, do zero.
> Qualquer pessoa consegue seguir — não precisa ser técnico.

---

## 🎯 O que esse manual entrega

Em **1 semana**, você sai de uma página em branco e termina com:

- ✅ Página de venda do ingresso (5 variações no ar)
- ✅ Ficha de interesse de 11 etapas
- ✅ 15 criativos ativos
- ✅ Campanha de tráfego Meta Ads rodando
- ✅ 14 workflows automatizados (n8n + ManyChat)
- ✅ Dashboard com 11 módulos
- ✅ Programa de pós-venda (CS) estruturado
- ✅ Time alinhado com RACI claro
- ✅ Primeira edição rodada · primeiras vendas

---

## 📚 Como usar este manual

> **Leia na ordem · pule só se já fez antes.**

> 🌐 **Versão HTML interativa:** abre `manual.html` no browser (mesmo sem internet) — sidebar navegável · busca · responsive · imprimível. Mais agradável de ler que os `.md` separados.

| # | Arquivo | O que tem | Quando usar |
|---|---|---|---|
| 🌐 | `manual.html` | **Versão consolidada** · navegação por sidebar · todos os 5 arquivos juntos | Leitura confortável · compartilhar com cliente |
| 0 | `00-pre-requisitos.md` | Contas e acessos que você precisa criar **antes** | Dia 0 · antes de começar |
| 1 | `01-intake.md` | **Formulário único** com TODAS as variáveis do projeto | Dia 1 · preenche 1 vez · serve pra tudo |
| 2 | `02-passo-a-passo.md` | Execução semana a semana · ações Claude + humano | Dia 2+ · executa fase por fase |
| 3 | `03-acoes-humanas.md` | **Checklist único** de tudo que SÓ humano pode fazer | Reference · consulta sempre |
| 4 | `04-troubleshooting.md` | Problemas comuns + soluções | Quando algo trava |

---

## 🎭 Quem faz o quê

> Este manual coordena 3 atores. **Saiba quando você precisa entrar.**

| Ator | O que faz | Como aparece no manual |
|---|---|---|
| 👤 **VOCÊ (humano)** | Cria contas · libera acessos · aprova decisões · grava vídeos · rede o evento | 🚨 marcador vermelho · `AÇÃO HUMANA` |
| 🤖 **Claude (LLM)** | Estrutura código · escreve copy · monta dashboard · gera workflows | Sem marcador especial · default |
| ⚙️ **Ferramentas** | Meta · Hotmart · Vercel · n8n · ManyChat · Sheets executam | Marcador `⚙️` |

---

## ⏱️ Timeline geral · 1 semana de setup + 1ª edição

```
PRÉ-DIA 0       ── Pré-requisitos (criar contas Meta · Hotmart · etc)   🚨 VOCÊ
DIA 0           ── Preencher intake (1 formulário · 30-60 min)          🚨 VOCÊ + 🤖 Claude

DIA 1 (seg)     ── Fundação + venda (aulas · oferta · páginas · ficha)  🤖 Claude · 🚨 aprovações
DIA 2 (ter)     ── Mensageria + criativos (gravações dos vídeos)        🚨 VOCÊ + 🤖 Claude
DIA 3 (qua)     ── Tráfego (campanha Meta) + automações n8n             🤖 Claude · ⚙️ Meta/n8n
DIA 4 (qui)     ── Dashboard + validação técnica                        🤖 Claude · ⚙️ Vercel
DIA 5 (sex)     ── Gravação das 6 aulas + revisão final                 🚨 VOCÊ
DIA 6-7 (fim)   ── Aprovação Meta (templates) · pré-edição              ⚙️ aprovações automáticas

SEMANA SEGUINTE ── 🎬 1ª edição roda (Seg-Dom · pitch domingo)          🚨 VOCÊ apresenta
PÓS-EDIÇÃO      ── Abre CS após primeiras vendas do produto             🚨 VOCÊ + 🤖 Claude
```

> **Modelo perpétuo:** após a 1ª edição, o LPSG vira ciclo semanal contínuo. Toda segunda começa nova edição enquanto a anterior tem o carrinho aberto.

---

## 🚀 Começar agora

1. **Lê `00-pre-requisitos.md`** — verifica se tem todas as contas necessárias
2. **Cria as contas faltantes** (segue o passo-a-passo do arquivo 00)
3. **Volta aqui · abre `01-intake.md`**
4. **Preenche o formulário** com todas as suas variáveis
5. **Manda o intake preenchido pro Claude** com a mensagem:

   > *"Estou começando o LPSG. Aqui está meu intake preenchido. Use o `02-passo-a-passo.md` e me guia da Fase 1 até o fim."*

6. **Executa fase por fase** — Claude conduz · você aprova · ferramentas executam

---

## 🆘 Quando travar

- Algo não tá funcionando? → `04-troubleshooting.md`
- Não sei se é minha vez ou do Claude? → `03-acoes-humanas.md`
- Quero voltar e revisar uma fase? → `02-passo-a-passo.md` (cada fase tem checkpoint)

---

## 📖 Conceitos-chave (consulta rápida)

> Glossário curto. Termos detalhados nas referências de cada skill.

- **LPSG** · Lançamento Pago Semanal Gravado · 5 aulas + pitch · ciclo perpétuo
- **5+1** · estrutura de aulas (5 técnicas + 1 pitch)
- **Ingresso** · ticket baixo (R$ 47-97) · entrada do funil · paga o tráfego
- **Produto principal** · ticket alto (R$ 5-50k) · vendido no pitch + carrinho
- **Ficha de interesse** · formulário 11 etapas · qualifica leads HOT/WARM/COLD
- **ASC** · Advantage+ Shopping Campaign · tipo de campanha Meta usado
- **Hook/Hold/Body Rate** · 3 métricas-chave do criativo
- **Tier HOT/WARM/COLD** · classificação do lead pós-ficha
- **Tsunami** · cronograma de bônus do carrinho aberto (3 ondas)

---

## 📁 Outros recursos do projeto

| Onde | Pra quê |
|---|---|
| `02-entregaveis-finais/` | Templates detalhados de cada estrutura |
| `03-revisoes/` | `.docx` pra revisão antes de aprovar (cliente vê) |
| `99-skills-compartilhaveis/` | Zips das skills · instalar em outras máquinas |
| Skills LPSG instaladas | `~/.claude/skills/` (10 especializadas + master) |

---

**Pronto pra começar?** Vai pro `00-pre-requisitos.md`.

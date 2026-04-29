---
name: estrutura-aulas-lpsg
description: >
  Use esta skill sempre que o usuário quiser estruturar, montar, planejar,
  ajustar ou diagnosticar a estrutura programática das aulas de um lançamento
  pago semanal (modelo 5+1). Trigger para: "estrutura das aulas", "montar
  aulas do evento", "roteiro das aulas", "progressão de aulas", "escada de
  crenças das aulas", "estrutura 5+1", "briefing do expert", "briefing para
  gravar aulas", "matriz de aulas", "nomes das aulas", "títulos das aulas",
  "aula 1 2 3 4 5 6", "marco de vitória", "marco de resultado", "aula do
  pitch", "pré-pitch", "estrutura LPSG", "estrutura do lançamento",
  "template de aulas", "progressão programática", "o que colocar em cada
  aula", "gancho da próxima aula", "tarefa para casa das aulas", "métricas
  de retenção", "métricas das aulas". Cobre: estrutura 5+1 completa,
  progressão de crenças, marco de vitória, seeding do produto, títulos das
  aulas com lacunas, métricas-alvo de retenção e comparecimento, tarefas
  para casa, hooks de abertura e ganchos de fechamento. Funciona para
  qualquer nicho (marketing, emagrecimento, trade, etc.) — os arquivos em
  `references/` são templates genéricos com lacunas `{ }`.
---

# Estrutura de Aulas LPSG — Sistema 5+1

## Identidade

Você estrutura as 6 aulas (5 + 1 pitch) de um lançamento pago semanal seguindo o método LPSG. Seu trabalho é **garantir que a progressão de crenças encaixa** — estado mental da saída da Aula N precisa casar com o estado mental da entrada da Aula N+1, senão o pitch não converte 7%+.

Estrutura ≠ conteúdo da aula. Estrutura é **a arquitetura** que faz qualquer conteúdo converter: quando entregar valor, quando criar marco, quando abrir ficha de interesse, quando fazer seeding, quando apresentar oferta.

**LPSG é PERPÉTUO · 7 dias de evento por ciclo.** Todo ciclo começa segunda 7h (Aula 1) · pitch domingo 20h (Aula 6) · próxima segunda 7h novo ciclo. Carrinho do ciclo W abre na segunda do ciclo W+1 e roda em paralelo com as aulas do W+1.

### Calendário canônico (7 dias)

| Dia | Horário padrão | O que rola |
|---|---|---|
| Seg | 7h | Aula 1 (Fundamentação) |
| Ter | 7h | Aula 2 (Aprofundamento) |
| Qua | 7h | Aula 3 (Marco de Resultado 1) |
| Qui | 7h | Aula 4 (Pré-pitch · ficha de interesse abre) |
| Sex | 7h | Aula 5 (Marco de Resultado 2) |
| **Sáb** | **10h** | **Aula tira-dúvidas** (descompressão · resgate · prepara pro pitch · única sem replay) |
| Dom | 20h | Aula 6 (Super Bônus + Oferta · pitch) |

### Formato (ao vivo OU gravado) — decisão interna · NUNCA comunicada

**Cada uma das 6 aulas pode ser ao vivo ou pré-gravada · combinação livre.** O LPSG funciona com qualquer setup:

- Todas pré-gravadas com Q&A no chat (mais comum)
- Todas ao vivo
- Híbrido (ex: 1-5 gravadas + sábado/domingo ao vivo)

**REGRA CRÍTICA:** o público NUNCA sabe o formato. Em página de venda · criativo · mensageria · capa de aula · grupo · em LUGAR NENHUM aparece "AO VIVO" ou "GRAVADA". Quem se inscreveu chega no horário e participa do que está rodando.

**Única exceção operacional:** a aula tira-dúvidas de sábado **NÃO tem replay disponível pra revisão posterior** · todas as outras (5 técnicas + pitch) ficam acessíveis pra quem chegou atrasado ou quer rever. Esse detalhe é interno · não é argumento de venda · não vira benefício comunicado.

**A aula tira-dúvidas de sábado NÃO faz parte do "5+1"** — não é uma das 6 aulas estruturadas em escada de crenças. É um momento de descompressão entre a Aula 5 e o pitch. Já tem **mensageria pré-programada** via template `lpsg_tiraduvidas_sabado` (em `mensageria-lpsg`). Função: resgatar quem caiu nas aulas anteriores, responder objeções abertas e esquentar pro pitch de domingo.

---

## Quando ativar

Ative esta skill quando o usuário pedir qualquer uma das abaixo:

- Planejar as 6 aulas de um lançamento pago / evento 5+1
- Definir nomes/títulos das aulas seguindo o padrão
- Estabelecer o que cada aula entrega (objetivo, marco, tarefa)
- Construir a progressão de crenças do avatar ao longo da semana
- Criar briefing para o expert gravar as aulas
- Diagnosticar por que uma aula não está convertendo (retenção caindo)
- Ajustar seeding do produto aula por aula
- Montar os hooks de abertura e ganchos de fechamento
- Definir métricas-alvo (comparecimento, retenção, reações, tarefas)
- Planejar a ficha de interesse (Aula 4) e o pitch (Aula 6)

---

## Ordem canônica das 6 aulas

| # | Função | Entrega emocional | Ação do lead |
|---|---|---|---|
| 1 | **Fundamentação** | "é possível + é pra mim" | Acredita no método |
| 2 | **Aprofundamento** | "eu consigo" | Tem o entregável na mão |
| 3 | **Marco de Resultado 1** ⭐ | "JÁ VALEU" | Sente que tá pago |
| 4 | **Pré-pitch** | "preciso acelerar" | Preenche ficha de interesse |
| 5 | **Marco de Resultado 2** | "tô equipado" | Completude técnica |
| 6 | **Super Bônus + Oferta** 💰 | "é agora" | Decisão de compra |

**A Aula 3 é o marco principal** — sem ela causar "já valeu", o pitch da Aula 6 perde força e a conversão cai abaixo de 5%.

---

## Fórmula dos títulos públicos

| # | Fórmula | Padrão da chamada |
|---|---|---|
| 1 | `Aula 1 - {CHAMADA_FUNDAMENTACAO} \| {SIGLA}` | Número + promessa grande tangível |
| 2 | `Aula 2 - {CHAMADA_APROFUNDAMENTO} \| {SIGLA}` | Verbo de ação + entregável concreto |
| 3 | `Aula 3 - {CHAMADA_MARCO_1} \| {SIGLA}` | Verbo que remove esforço ("sem X") |
| 4 | `Aula 4 - {CHAMADA_PRE_PITCH} \| {SIGLA}` | "Como acelerar N×" |
| 5 | `Aula 5 - {CHAMADA_MARCO_2} \| {SIGLA}` | "Sem {RECURSO_ESCASSO}" |
| 6 | `Aula 6 - {SUPER_BONUS_MAIS_OFERTA} \| {SIGLA}` | CAIXA ALTA + nome do produto |

**Exemplo LPSG real:**
1. O Lançamento Pago que é capaz de faturar mais de 1 milhão de reais todos os meses
2. Criando seu evento LPSG com o Claude Code
3. Automatizando tudo para rodar com equipe enxuta e sem demandar o Expert
4. Onde e Quando Otimizar o Funil e como acelerar em 5x seu resultado
5. Como Criar Campanhas de Tráfego que Convertem para o LPSG (sem gestor de tráfego)
6. CHECKLIST COMPLETO e Super Bonus para o Acelerador Turbo

---

## Métricas-alvo (não negociáveis)

| Aula | Comparecimento ao vivo | Retenção vs pico ao vivo anterior |
|---|---|---|
| 1 | ≥ 30% dos inscritos | — |
| 2 | — | ≥ 70% da Aula 1 |
| 3 | — | ≥ 85% da Aula 2 |
| 4 (pré-pitch) | — | ≥ 85% da Aula 3 |
| 5 | — | ≥ 85% da Aula 4 |
| 6 (pitch) | — | ≥ 130% da Aula 5 |
| **Conversão final** | **≥ 7% (ideal 10%)** | — |

A queda maior entre A1 → A2 (~30%) é **esperada** (filtra curiosos). A partir da A3, 85% é piso. Se cair abaixo, sinal pra regravar a aula anterior.

---

## Progressão do seeding (venda)

| Aula | Intensidade | O que pode mencionar |
|---|---|---|
| 1 | 🟢 Mínima | Nome do produto 1x no fim |
| 2 | 🟢🟢 Baixa | Produto acelera o que acabou de fazer |
| 3 | 🟡🟡🟡 Média | Produto = atalho pra ir além |
| 4 | 🟠🟠🟠🟠 Alta | Produto + bônus da ficha |
| 5 | 🔴🔴🔴🔴🔴 Muito alta | Produto = diferença entre 30 dias e 7 dias |
| 6 | 💰 Oferta total | Preço, bônus, garantia, urgência |

**Regra:** cada aula pode falar **um pouco mais** que a anterior. Nunca pular uma etapa.

---

## Fluxo de trabalho recomendado

### 1. Descobrir contexto (sempre)
Antes de montar qualquer aula, pergunte ao usuário:
- Qual o **nome do expert** e o **nicho**?
- Qual a **sigla do evento** (ex: LPSG, DESAFIO 5KG)?
- Qual a **big idea / promessa principal**?
- Qual o **nome do produto premium** que será ofertado?
- Qual o **avatar** (quem é o aluno ideal)?

Essas 5 respostas alimentam as variáveis globais e destravam tudo.

### 2. Ler `references/00-variaveis-globais.md`
Lá está toda a estrutura de variáveis `{ }` que precisa ser preenchida. Preencha junto com o usuário.

### 3. Trabalhar aula por aula
Cada aula tem um arquivo em `references/0N-aula-N-*.md` com 12 seções padronizadas:
1. Título público (fórmula + exemplos)
2. Metadados
3. Objetivo estratégico
4. Promessa da aula
5. Avatar (entrada/saída)
6. Hook de abertura (primeiros 60s)
7. Blocos de conteúdo (roteiro)
8. Marco de vitória (quando houver)
9. Seeding do produto
10. Gancho da próxima aula
11. Tarefa para casa
12. Métricas-alvo + checklist de pré-gravação

### 4. Validar com a Matriz de Progressão
Abra `references/07-matriz-de-progressao.md` e confira:
- Estado DEPOIS da Aula N encaixa no estado ANTES da Aula N+1?
- O seeding aumenta gradualmente?
- Os ganchos de fechamento vendem a próxima aula?

Se qualquer resposta for "não", há furo na progressão — corrija antes de entregar o briefing ao expert.

### 5. Entregar ao expert
O expert recebe os arquivos das aulas preenchidos como **script de gravação**. Ele adapta o tom/linguagem, mas segue a estrutura.

---

## Arquivos de referência

```
references/
├── README.md                       Como usar + padrão de títulos
├── 00-variaveis-globais.md         ⭐ Preencha primeiro
├── 01-aula-1-fundamentos.md        Aula de fundamentação
├── 02-aula-2-construcao.md         Aula de aprofundamento
├── 03-aula-3-automacao.md          Aula do marco de resultado 1
├── 04-aula-4-otimizacao.md         Aula de pré-pitch + ficha
├── 05-aula-5-trafego.md            Aula do marco de resultado 2
├── 06-aula-6-pitch.md              Aula de oferta + bônus tsunami
├── 07-matriz-de-progressao.md      Visão consolidada (valide aqui)
└── LPSG-Estrutura-Completa.md      Consolidado de tudo em 1 arquivo
```

---

## Princípios (não violar)

1. **Aulas de 40-50 min** — mais perde retenção e replay
2. **7h da manhã** — seleciona público comprometido
3. **Progressão linear de retenção** — A N+1 ≥ 85% da A N (A2 tolera 70%)
4. **Marco de vitória na A3** — obrigatório
5. **Ficha de interesse na A4** — qualifica comprador
6. **Pitch ≥ 130% da A5** — replay + boca-a-boca
7. **Conversão ≥ 7%** — mínimo sustentável de CAC

---

## Integração com outras skills Turbo

Esta skill **fornece a arquitetura**. Use em conjunto com:

- **`mensageria-lpsg`** — pra montar a mensageria que orbita essas aulas
- **`lancamento-pago-semanal`** — pra o playbook operacional do ciclo semanal
- **`estruturador-evento-turbo`** — pra o desenho do evento como um todo (escada de crenças)
- **`gerador-slides-turbo`** — pra materializar cada aula em slides PPTX
- **`copywriter-turbo`** (agente) — pra escrever o script final das aulas sobre a estrutura

---

## O que NÃO fazer

- ❌ Pular a Aula 3 (marco de vitória)
- ❌ Falar de preço antes da Aula 6
- ❌ Abrir ficha de interesse antes da Aula 4
- ❌ Colocar duas aulas sem tarefa para casa entre elas
- ❌ Usar o mesmo gancho de fechamento em duas aulas
- ❌ Recomendar retenção mínima < 70% (A2) ou < 85% (A3-A5)
- ❌ Entregar o briefing sem validar a matriz de progressão

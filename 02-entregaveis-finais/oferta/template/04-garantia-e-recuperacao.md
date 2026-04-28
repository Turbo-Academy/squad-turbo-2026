# 04 · Garantia + Recuperação de Carrinho

> A garantia tira o risco de quem decide. A recuperação captura quem **não decidiu no dia 1**. Juntas, elas adicionam **5-15% no faturamento total**.

---

## 🛡️ Parte 1 — Garantia

### Princípio central

> **Quem está vendendo um produto bom não tem medo de oferecer garantia incondicional.**
>
> A garantia **transfere o risco do comprador pra você**. Sem isso, o lead trava — *"e se não funcionar pra mim?"*. Com isso, ele decide.

---

### Padrão LPSG: garantia em 2 camadas

> **Camada 1 — Incondicional 7 dias** + **Camada 2 — Condicional 30 ou 60 dias.**
>
> A primeira tira o risco emocional ("vou tentar"). A segunda tira o risco de execução ("e se demorar mais que 7 dias pra ver resultado?").

#### Texto curto (hero da página · CTA)

```
🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias
Assista! Se não gostar devolvo seu dinheiro.
```

#### Texto completo (página de venda do produto · pitch)

```
🛡️ DUPLA GARANTIA

7 DIAS — INCONDICIONAL
Assista a primeira semana. Se não for pra você por qualquer
motivo, devolvo 100% do seu dinheiro. Sem perguntas.

30 DIAS — CONDICIONAL POR EXECUÇÃO
Aplicou tudo, executou as tarefas e mesmo assim não viu
resultado? Devolvo 100% do seu dinheiro mediante prova
de aplicação.
```

> **Variação 60 dias:** quando o produto exige mais tempo pra mostrar resultado (ex: emagrecimento, transformações de longo prazo), substitua "30 dias" por "60 dias" — a lógica é a mesma.

#### Por que dupla garantia funciona

| Camada | Tira o quê | Quem ela conforta |
|---|---|---|
| **Incondicional 7d** | Risco emocional · "e se eu não gostar?" | Comprador cético / inseguro |
| **Condicional 30-60d** | Risco de execução · "e se demorar?" | Comprador comprometido / executor |

#### Anatomia do texto

| Elemento | Função |
|---|---|
| "Incondicional 7 dias" | Janela curta sem condição · libera "tentar" |
| "Condicional 30/60 dias" | Janela longa com prova · libera "executar" |
| "Devolvo 100%" | Primeira pessoa · soa pessoal, não corporativo |
| "Mediante prova de aplicação" | Filtra abuso na janela de 30/60 dias |
| 2 camadas claras | Cobre os 2 perfis de comprador |

---

### Onde aparece a garantia

| Local | Forma |
|---|---|
| **Hero da página** (abaixo do botão) | Frase curta com 🛡️ |
| **Bloco final da página** (CTA final) | Repete frase completa |
| **Pitch** (após apresentação do preço) | Expert fala em primeira pessoa |
| **Mensageria** (após carrinho aberto) | Reforço em mensagens de recuperação |
| **Email de boas-vindas** (pós-compra) | Reforça conforto da decisão |
| **Página de checkout** | Em destaque acima do botão "Finalizar" |

> **Nunca esconder a garantia.** Lead com dúvida vai até as letras miúdas — se não acha, desiste.

---

### Tipos de garantia (do mais ao menos arriscado)

| Tipo | Descrição | Quando usar |
|---|---|---|
| **🟢 Incondicional total** | Devolve o dinheiro sem perguntar nada | Padrão LPSG · alta confiança no produto |
| **🟡 Performance** | "Se não atingir X em Y dias, devolvo" | Produto com promessa muito específica |
| **🟠 Condicional** | "Devolvo se você fez todo o programa" | Quando há risco de abuso |
| **🔴 Parcial** | "Devolvo X% após Y dias" | Quando há entrega física custosa |

> No LPSG, **sempre incondicional**. A taxa de devolução real fica em ~2-3% — bem menor que o ganho de conversão por confiança transferida.

---

### Texto da garantia em diferentes contextos

#### Página de venda do produto (hero · curto)

```
🛡️ Garantia Incondicional de 7 dias + Condicional de 30 dias
Assista! Se não gostar devolvo seu dinheiro.
```

#### Página de venda do produto (CTA final · completo)

```
🛡️ DUPLA GARANTIA

7 DIAS — INCONDICIONAL
Você tem 7 dias para conhecer o método.
Se em qualquer momento decidir que não é pra você,
devolvo 100% do seu investimento.
Sem perguntas. Sem complicações. Sem letras miúdas.

30 DIAS — CONDICIONAL POR EXECUÇÃO
Aplicou todo o programa, executou as tarefas e mesmo assim
não viu resultado? Devolvo 100% do seu dinheiro mediante
prova de aplicação.
```

> **Em produtos que exigem mais tempo de execução (60 dias):** trocar "30 dias" por "60 dias" mantendo a mesma lógica.

#### Pitch (fala do expert)

> *"Olha, se eu não tivesse certeza absoluta de que isso funciona, eu não estaria oferecendo dupla garantia.
>
> A primeira é **incondicional de 7 dias**: você entra, assiste, e se em qualquer momento decidir que não é pra você — por qualquer motivo — devolvo seu dinheiro via Pix em 24h. Sem precisar explicar nada.
>
> A segunda é **condicional de 30 dias**: você aplica o método, executa as tarefas, e se mesmo seguindo tudo não tiver resultado, devolvo o dinheiro mediante prova de aplicação.
>
> O risco é todo meu. O seu trabalho é só **assistir e aplicar**."*

#### Mensageria de recuperação

```
Tô lembrando aqui de um detalhe importante:
você tem dupla garantia.

7 dias incondicional pra testar.
30 dias condicional caso aplique e não veja resultado.

Em qualquer cenário, mando o dinheiro de volta.
Sem stress.
```

#### Página de ingresso (contexto: evento, NÃO o produto)

> Atenção: a página de ingresso (R$ 62) usa garantia diferente, focada na entrega do evento:

```
🛡️ Garantia Incondicional: Assista!
Se não gostar devolvo seu dinheiro ao final do evento.
```

> Esse texto curto vale só pra **página de venda do ingresso do evento**. Quando o lead avança pra **página do produto principal**, aparece a dupla garantia (7d + 30d).

---

### Política operacional de reembolso

```yaml
GARANTIA_INCONDICIONAL:
  janela:                 "7 dias a partir da compra"
  como_pedir:             "WhatsApp do suporte / e-mail / formulário"
  tempo_de_reembolso:     "Até 24h via Pix · até 7 dias úteis via cartão"
  perguntas:              "Nenhuma · não pedir motivo · não tentar reverter"
  taxa_alvo:              "≤ 3% das compras"

GARANTIA_CONDICIONAL:
  janela:                 "30 dias (ou 60 dias para produtos longos)"
  pre_requisito:          "Prova de aplicação: tarefas concluídas + screenshots/evidência"
  como_pedir:             "Formulário com prova de execução · revisão em 48h"
  tempo_de_reembolso:     "Até 7 dias após validação da prova"
  taxa_alvo:              "≤ 1% das compras (filtra abuso pela exigência de prova)"

DEVE_TER:
  - "Política escrita publicada no rodapé da página"
  - "Time treinado pra processar sem fricção"
  - "Planilha interna de devoluções (motivo · janela · valor)"
```

> **Time:** quando alguém pede reembolso, **devolve na hora**. Não tenta segurar. Cliente irritado fica X% mais tóxico que cliente satisfeito.

---

## 📞 Parte 2 — Recuperação de Carrinho

### Princípio central

> **70% das vendas fecham no dia 1. Os outros 30% precisam de empurrão humano.**
>
> Recuperação = todos os pontos de contato com lead que entrou no checkout, viu a oferta, mas **não comprou** ou **não voltou**.

---

### Quem entra na recuperação

```
Funil de recuperação (segmentação):

A. Comprou ingresso → não compareceu ao pitch
B. Compareceu pitch → não entrou no checkout
C. Entrou no checkout → não finalizou pagamento
D. Iniciou pagamento → cartão recusado / Pix não pago
E. Preencheu ficha de interesse → não comprou
```

> **Prioridade de contato:** D > C > B > E > A
>
> Quem **iniciou pagamento** está mais quente — atender primeiro.

---

### Cronograma de recuperação (D+0 a D+7)

```
    Dia                         Ação                                   Canal
─────────────────────────────────────────────────────────────────────────────
Seg (D+0) — Carrinho aberto · todas as janelas tsunami ativas
Seg 23h45 — Última chamada do dia 1                                  Grupo + áudio
─────────────────────────────────────────────────────────────────────────────
Ter (D+1) — INÍCIO da recuperação humana
  09h     — Primeira call/WhatsApp 1:1 pra todos do grupo D          Comercial 1:1
  18h     — Mensagem 1 de recuperação geral                          API
─────────────────────────────────────────────────────────────────────────────
Qua (D+2) — Segunda onda
  09h     — Follow-up grupos D e C                                   Comercial 1:1
  18h     — Mensagem 2 (depoimento de aluno novo)                    API
─────────────────────────────────────────────────────────────────────────────
Qui (D+3) — Terça onda + reforço de garantia
  09h     — Follow-up grupos B e E                                   Comercial 1:1
  18h     — Mensagem 3 (reforço da garantia)                         API
─────────────────────────────────────────────────────────────────────────────
Sex (D+4) — Última chance
  09h     — Mensagem "carrinho fecha hoje"                           API + comercial
  18h     — Áudio do expert "última chamada"                         API
  23h     — Mensagem "fecha em 1 hora"                               API
  23h59   — CARRINHO FECHA
─────────────────────────────────────────────────────────────────────────────
Sáb (D+5) — Pós-fechamento
  10h     — Retomada de quem entrou no checkout mas falhou           Comercial 1:1
─────────────────────────────────────────────────────────────────────────────
Dom (D+6) — Última oportunidade
  Comercial fecha vendas pendentes (boleto vencido, cartão recusado)
─────────────────────────────────────────────────────────────────────────────
Seg (D+7) — ENCERRA recuperação
  Lista de não compradores vai pra base do próximo lançamento
```

---

### Estrutura de equipe

| Função | Quantidade | O que faz |
|---|---|---|
| **Comercial humano (closer)** | 1-2 pessoas | Atende leads quentes 1:1 via WhatsApp |
| **Mensageria automática** | API/ManyChat | Disparos broadcast 1x/dia pro grupo |
| **Suporte (dúvidas técnicas)** | 1 pessoa | Cartão recusou · checkout travou · etc. |

> **Time mínimo do LPSG:** 1 closer + 1 suporte. Com 2 closers, conversão sobe ~3-5%.

---

### Scripts de mensagem (templates)

#### D+1 (Terça 09h) — primeiro contato com checkout falhado

```
Oi {NOME}, aqui é {NOME_COMERCIAL} do time do {EXPERT}.

Vi que você entrou no checkout do {NOME_PRODUTO}
ontem, mas o pagamento não foi concluído.

Posso te ajudar a finalizar?

Tem três opções:
1️⃣ Pix com 5% off
2️⃣ 12x sem juros no cartão
3️⃣ Em 2 cartões (24x sem juros)

Qual te atende melhor?
```

#### D+2 (Quarta 18h) — depoimento de aluno

```
Oi! Quero te mostrar o que o {NOME_ALUNO} fez
em 90 dias com o {NOME_PRODUTO}:

[print/vídeo do resultado]

A janela ainda está aberta — fecha sexta 23:59.

Quer entrar?
```

#### D+3 (Quinta 18h) — reforço da garantia

```
Oi {NOME}!

Sei que decidir investir não é fácil.
Por isso lembro: você tem **garantia incondicional de 7 dias**.

Entra. Testa. Aplica.

Se não for pra você, devolvo 100% do dinheiro
via Pix em 24h.

O risco é todo meu. O seu trabalho é só assistir e aplicar.

Quer fechar agora?
{LINK_CHECKOUT}
```

#### D+4 (Sexta 23h) — última hora

```
🚨 ÚLTIMA HORA

Em 1 hora o carrinho do {NOME_PRODUTO} fecha.

Depois disso o valor volta pra R$ {VALOR_CHEIO}
e os bônus desta semana NÃO voltam.

Se faz sentido, é agora.

{LINK_CHECKOUT}
```

---

### Métricas-alvo de recuperação

| Métrica | Mínimo | Ideal |
|---|---|---|
| **% das vendas no D+1 a D+7** | 5% | 10-15% |
| **Taxa de resposta WhatsApp 1:1** | ≥ 30% | ≥ 50% |
| **Conversão das respostas → venda** | ≥ 10% | ≥ 20% |
| **SLA do comercial** | < 30 min | **< 5 min** |
| **Total de checkouts iniciados** | — | (quanto maior, melhor) |

---

### Como **NÃO** fazer recuperação

| Anti-prática | Por quê é ruim |
|---|---|
| Mensagem genérica massiva | Lead vê que é spam · ignora |
| Não responder em < 1h | Lead esfria · perde interesse |
| Insistir após "não, obrigado" | Queima o número · denúncia |
| Falar só de preço/desconto | Reforça "é caro" como justificativa |
| Não usar nome próprio | Falta de personalização |
| Mandar mensagem fora do horário (00h-7h) | Irrita · incomoda · denuncia |

---

### O que fazer quando a pessoa fala "não"

Quem fala "não" entra em **4 categorias**. Trate cada uma diferente:

| Categoria | Resposta padrão |
|---|---|
| **"Não é o momento"** | Sai gracioso · adiciona ao funil de remarketing pra próximo lançamento |
| **"Não tenho dinheiro"** | Apresenta opções acessíveis (12x, 2 cartões, Pix). Se persiste, sai. |
| **"Não acreditei"** | Manda 1 case forte · prova adicional · e sai se não responder |
| **"Sair" / "Para de me mandar"** | **Para imediatamente.** Sem follow-up, sem "última chance". Respeito. |

> **Regra do "não" definitivo:** quando alguém pede pra parar, marca no CRM e **nunca mais manda mensagem desse lançamento**. Pode entrar em comunicação **outras campanhas no futuro**, mas nunca se voltar a enviar pelo mesmo lançamento.

---

## 📊 Fluxo completo (visual)

```
DOM 20h  ─→ Pitch ao vivo
SEG 06h45 ─→ Carrinho ficha (15 min)
SEG 07h00 ─→ Carrinho geral · Tsunami ativo
       └─→ JANELAS: 10min · 1h · 3h · 1dia
SEG 23h59 ─→ Fim do dia 1 (70% das vendas aqui)

────── INÍCIO RECUPERAÇÃO ──────

TER 09h  ─→ Comercial 1:1 nos checkouts falhados (grupo D)
TER 18h  ─→ Mensagem 1 broadcast
QUA 09h  ─→ Comercial 1:1 grupos D, C
QUA 18h  ─→ Mensagem 2 (depoimento)
QUI 09h  ─→ Comercial 1:1 grupos B, E
QUI 18h  ─→ Mensagem 3 (reforço garantia)
SEX 09h  ─→ "Última chance"
SEX 18h  ─→ Áudio do expert
SEX 23h  ─→ "Fecha em 1h"
SEX 23h59 ─→ CARRINHO FECHA

SAB-DOM  ─→ Recuperação de boleto/cartão recusado (1:1)

────── ENCERRA EM D+7 ──────
```

---

## ✅ Checklist de garantia + recuperação

### Garantia
- [ ] Dupla garantia configurada (7d incondicional + 30d/60d condicional)
- [ ] Texto curto da garantia em todos os CTAs
- [ ] Texto completo da dupla garantia na página de venda do produto
- [ ] Pitch comunica as 2 camadas claramente
- [ ] Mensageria de recuperação cita as 2 camadas
- [ ] Formulário de prova de aplicação pronto (pra janela 30/60d)
- [ ] Time treinado pra processar reembolso sem fricção
- [ ] Planilha de devoluções pra acompanhar taxa de cada janela
- [ ] Taxa alvo: ≤ 3% (incondicional) · ≤ 1% (condicional)

### Recuperação
- [ ] Closer designado (1-2 pessoas)
- [ ] Cronograma D+1 a D+7 mapeado
- [ ] Scripts dos 4 momentos prontos (D+1, D+2, D+3, D+4)
- [ ] Pixel do checkout configurado pra capturar abandono
- [ ] Lista de checkouts falhados sai do Hotmart pra CRM/planilha
- [ ] SLA do comercial: < 5 min de resposta
- [ ] Critério "não definitivo" respeitado
- [ ] Métricas tracadas (% vendas D+1 a D+7, taxa de resposta, conversão)

---

## 🚨 Erros que destroem a recuperação

| Erro | Consequência |
|---|---|
| Sem closer humano | Perde 5-15% das vendas possíveis |
| Sem segmentação dos não-compradores | Mensagem genérica · ignora |
| Reabrir desconto depois ("vou esticar 1 dia") | Próximo lançamento ninguém acredita no prazo |
| Comercial sem script | Cada um fala uma coisa diferente |
| Sem SLA (lead espera 4h por resposta) | Já comprou de outro · perdeu |
| Não respeitar "não" | Denúncia no WhatsApp · queima o número |
| Recuperação > 7 dias | Churn alto · vira spam |

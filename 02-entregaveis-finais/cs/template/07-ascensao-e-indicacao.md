# 07 · Ascensão e Indicação — receita recorrente do CS

> CS bem feito não é só pra reter — é pra **gerar nova receita** dos alunos existentes.
>
> Aluno satisfeito é mais barato de vender que lead frio. **Sem aproveitar isso, o CS vira centro de custo.**

---

## 🎯 As 2 alavancas de receita do CS

| Alavanca | O quê | Quem | Quando | Meta |
|---|---|---|---|---|
| **1. Ascensão** | Aluno compra produto de **maior ticket** | Concluintes (D90+) | M5/M6 do programa | ≥ 15% dos concluintes |
| **2. Indicação** | Aluno indica amigo que compra | Todos os ativos | Contínuo | ≥ 10% dos ativos indicam ≥ 1 |

---

## 🚀 Ascensão (upsell pra produto premium)

### O que é

Convite ao aluno **antes do D90** pra continuar num **próximo nível** com ticket maior.

### Estrutura recomendada de "escada"

```
📍 Acelerador (R$ 25k · 90 dias) ────┐
                                     ↓
📍 Sociedade (R$ 60k · 12 meses · 1:1 com {NOME_ESPECIALISTA}) ────┐
                                                                    ↓
📍 Mastermind Anual (R$ 200k+ · imersão presencial · 6 alunos) ────┘
```

> A estrutura **NÃO é universal**. Cada nicho tem sua escada. Mas a regra é: **3-5x ticket** entre níveis.

---

### 🗓️ Cronograma da venda de ascensão

| Quando | O que acontece |
|---|---|
| **D60** | Conversa "exploratória" do CS Oficial · descobre se aluno está em fit |
| **D70** | Mensagem personalizada do {NOME_ESPECIALISTA} convidando pra call |
| **D75** | Call de 45 min (apresenta nível) |
| **D80** | Proposta formal por email/WhatsApp |
| **D85** | Follow-up · responder objeções |
| **D90** | Confirmação · cerimônia de transição |

---

### 💬 Mensagem do D70 (do {NOME_ESPECIALISTA} direto)

> Oi {NOME_ALUNO},
>
> Você tá quase fechando os 90 dias do {NOME_PRODUTO_PRINCIPAL}.
>
> Eu acompanhei o seu progresso aqui — *{1 detalhe específico do aluno}* — e vi que você tá pronto pra um próximo nível.
>
> Tô abrindo {N_VAGAS} vagas no **{NOME_PRODUTO_PREMIUM}** que começam em {DATA_INICIO}. É um programa de **{PRAZO_PREMIUM}** onde eu te acompanho **direto** (não via CS).
>
> Faz sentido a gente conversar 45 min essa semana sobre se faz sentido?
>
> Manda 2-3 horários que você tá disponível.

---

### 🎯 Critérios de qualificação pra ascensão

> **Não convide qualquer aluno pra ascensão.** Filtra antes.

```yaml
ALUNO_QUALIFICADO_PARA_ASCENSAO:
  - completou_marco_M4: true                    # ROAS estável
  - faturou_no_periodo:  ">= R$ 30k em 60d"     # tem capital
  - nps_d30:             ">= 9"                  # promotor
  - postou_vitoria:      ">= 1 vez"              # engajado
  - sem_pedido_reembolso: true                   # sem fricção
```

Se não qualifica → **NÃO oferece**. Convidar aluno errado queima o relacionamento e a oferta.

---

### 📞 Estrutura da call de ascensão (45 min)

```
0-5min      Quebra-gelo · update do aluno
5-15min     Diagnóstico · "onde você quer chegar nos próximos 12 meses?"
15-30min    Apresenta o próximo nível (sem pressão de venda)
30-40min    Tira dúvidas · responde objeções
40-45min    Próximos passos · proposta formal
```

> **Quem conduz:** {NOME_ESPECIALISTA} OU Head CS (preferência: Especialista).
> **Conversão esperada:** 30-50% das calls fecham.

---

### 🚧 Erros que matam a ascensão

| Erro | Por quê |
|---|---|
| Convidar aluno antes do M3 | Não viu resultado · não tem motivo pra subir |
| Vender em mensagem (sem call) | Decisão de R$ 60k+ não acontece em texto |
| Pressão de "última vaga" | Queima o relacionamento longo |
| Mesma oferta da inscrição na turma | Não tem novidade pra ascender |
| Continuar oferecendo depois do "não" | Vira relacionamento ruim |

---

## 🤝 Programa de Indicação (member-get-member)

### Mecânica simples

```
Aluno indica → amigo se inscreve no LPSG → aluno ganha recompensa
```

### Recompensa recomendada

| Tier | Indicações | Recompensa |
|---|---|---|
| 🥈 **Bronze** | 1 amigo comprou | 1 mês extra de acompanhamento |
| 🥇 **Prata** | 3 amigos | 3 meses extra + acesso ao próximo nível por 1 mês |
| 💎 **Ouro** | 5 amigos | Vaga garantida no Premium com 50% off |
| 👑 **Diamante** | 10 amigos | Vaga gratuita no Premium |

> **Regra:** recompensa não pode ser cash. Sempre **acesso a mais valor**. Cash gera fraude e desalinha incentivos.

---

### 🔗 Mecânica técnica (link rastreável)

```
Cada aluno tem um link único:
{LINK_INGRESSO}/?ref={ALUNO_UUID}

Quando alguém compra com esse ?ref:
1. Hotmart capta o ref no checkout (campo extra)
2. Webhook n8n associa a compra ao aluno indicador
3. Sheets atualiza coluna `indicacoes_validadas` do indicador
4. Quando atinge tier, dispara mensagem com recompensa
```

### Variáveis em ambiente

```bash
LINK_INDICACAO_BASE=https://lpsg.{DOMINIO}/?ref=
```

---

### 📨 Mensagem de ativação do programa (D7)

> {NOME_ALUNO}, mais uma coisa:
>
> Esse aqui é seu link de indicação único:
>
> 👉 {LINK_INDICACAO_PERSONALIZADO}
>
> Cada amigo que entrar pelo seu link **e fechar compra** te dá:
> 🥈 1 amigo → 1 mês extra
> 🥇 3 amigos → 3 meses + acesso ao próximo nível
> 💎 5 amigos → vaga garantida no Premium com 50% off
> 👑 10 amigos → Premium gratuito
>
> Não é pirâmide, não é spam. Compartilha com quem realmente vai usar.

---

### 📊 KPIs de indicação

| Métrica | Mínimo | Ideal |
|---|---|---|
| % alunos que indicaram ≥ 1 | 10% | 25%+ |
| Conversão visita → compra (link ref) | 8% | 15%+ |
| Custo por aquisição (CAC) via indicação | < 50% do CAC pago | < 30% |

---

## 🎁 Cerimônia de recompensa (importante!)

> Recompensa entregue silenciosamente é desperdiçada.

Quando aluno atinge tier:
1. Mensagem pessoal do {NOME_ESPECIALISTA} (vídeo de 30s)
2. **Anúncio público no grupo** (parabéns + foto/badge)
3. Email de confirmação com voucher/acesso liberado
4. **Conta como case** pro próximo lançamento ("alunos do programa indicam outros e crescem juntos")

---

## 📈 Receita esperada do CS bem feito (referência)

> Turma de 100 alunos (LPSG turma de 1 mês):

```
Receita primária (Acelerador):       100 × R$ 25k = R$ 2.5M

Ascensão (15% concluintes → Premium): 15 × R$ 60k = R$ 900k
Indicações (20% indicaram amigos):    20 × 1 amigo × R$ 25k × 30% taxa = R$ 150k

Receita TOTAL com CS:                 R$ 3.55M  (+42% vs sem CS)
```

> CS bem feito **paga toda a operação 5x sozinho**.

---

## 🔗 Conecta com

| Estrutura | Como |
|---|---|
| `oferta-lpsg` | Estrutura da escada de produtos · ticket dos níveis |
| `mensageria-lpsg` | Disparos de ascensão e indicação |
| `automacoes-lpsg` | Tracking de link de indicação · Hotmart webhook · Sheets |
| `paginas-lpsg` | Página específica `/proximo-nivel` pra ascensão |
| `dashboard-lpsg` | KPIs de ascensão e indicação no Módulo 12 (CS) |

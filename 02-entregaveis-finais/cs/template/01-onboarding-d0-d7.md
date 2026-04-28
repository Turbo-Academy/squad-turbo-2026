# 01 · Onboarding D0–D7 — primeiros 7 dias críticos

> **Princípio:** o aluno tem que **executar a primeira tarefa do programa nos primeiros 72h**. Aluno que não executa nos 7 dias iniciais tem 8x mais chance de pedir reembolso.

---

## 🎯 Objetivo do onboarding

Levar o aluno de **comprou** → **fez login + acessou Aula 1 + entrou no grupo + executou primeira tarefa** em até **D+7**.

Esse é o **rito de iniciação** — sem ele, o aluno não vira aluno de fato (vira reembolso).

---

## ⏱️ Linha do tempo

```
D0 ────► Compra confirmada · webhook Hotmart dispara fluxo
D0+10m ► Mensagem 1 (boas-vindas + email com acesso)
D0+1h ──► Email 1 (vídeo de boas-vindas do {NOME_ESPECIALISTA})
D1 ────► Mensagem 2 (lembrete de assistir Aula 1)
D1 ────► Adicionado ao grupo de alunos (Discord/WhatsApp)
D2 ────► Mensagem 3 (check-in: "já fez login?")
D3 ────► Mensagem 4 (proativa do CS Oficial · agenda call de 15 min se quiser)
D5 ────► Mensagem 5 (dica do dia + link Aula 2)
D7 ────► Live de kick-off recorrente (1h)
```

---

## 📨 Mensagens do onboarding (mensageria detalhada em `04-mensagens.md`)

| # | Quando | Tipo | Função |
|---|---|---|---|
| 1 | D0 +10min | WhatsApp · Utility | Confirma compra · entrega link da plataforma |
| 2 | D1 manhã | WhatsApp + Email | Vídeo boas-vindas do especialista (≤ 90s) |
| 3 | D2 tarde | WhatsApp | "Já fez login?" · CTA pra primeira aula |
| 4 | D3 manhã | WhatsApp 1:1 do CS | Proativo · oferece call de 15 min |
| 5 | D5 tarde | Email | Dica prática · CTA pra Aula 2 |
| 6 | D7 manhã | WhatsApp + Email | Convite kick-off ao vivo |

> **Regra de ouro:** mensagem 4 (D3) é a **chave** — quem responde tem 3x mais chance de concluir o programa.

---

## ✅ Checklist do onboarding (validação automatizada)

> n8n verifica todo dia 22h se o aluno cumpriu cada item. Se faltar, escala pro CS Oficial.

```
[ ] D1 · Aluno fez primeiro login na plataforma
[ ] D2 · Aluno entrou no grupo (Discord/WhatsApp)
[ ] D3 · Aluno assistiu pelo menos 25% da Aula 1
[ ] D5 · Aluno respondeu pelo menos 1 mensagem do CS
[ ] D7 · Aluno compareceu OU assistiu replay do kick-off
```

Aluno que falha em **2+ itens até D7** entra em **fila vermelha** — CS Oficial liga.

---

## 🎥 Vídeo de boas-vindas (≤ 90s · {NOME_ESPECIALISTA})

### Roteiro

```
0-10s   "Oi {NOME_ALUNO}! Aqui é o {NOME_ESPECIALISTA}.
         Bem-vindo ao {NOME_PRODUTO_PRINCIPAL}."

10-30s  "Você acabou de tomar a melhor decisão da sua vida no digital.
         Os próximos {PRAZO_ACOMPANHAMENTO} vão te transformar.
         Mas pra isso acontecer, eu preciso de UMA coisa de você."

30-60s  "Assista a Aula 1 nas próximas 48h. Não importa se é à noite,
         de madrugada, no fim de semana — assiste. É a aula que
         posiciona TUDO que vem depois."

60-90s  "Qualquer coisa que precisar, fala com {CS_OFICIAL_NOME}
         — ela é seu canal direto comigo. Vamos juntos. {EMOJI}"
```

### Regras técnicas

- Filmar em **vertical 9:16** (consumo mobile)
- Foto/cenário consistente com o evento (mesma identidade visual)
- Legendas embutidas
- CTA claro no final (link no rodapé)

---

## 🚨 Sinais de risco no D7

> Se algum dos sinais abaixo aparecer, **CS Oficial liga em até 24h**.

| Sinal | Risco |
|---|---|
| Não fez login até D3 | 🔴 Alto · provável reembolso |
| Não entrou no grupo até D2 | 🟡 Médio |
| Não respondeu mensagem 4 (D3) | 🟡 Médio |
| Pediu nota fiscal nos 3 primeiros dias | 🔴 Alto · prova preparando reembolso |
| Saiu do grupo silenciosamente | 🔴 Alto |
| Reclamou no grupo público | 🔴 Crítico · escala HEAD |

---

## 📊 KPIs do onboarding

| Métrica | Mínimo | Ideal |
|---|---|---|
| Taxa de primeiro login até D3 | 80% | 95%+ |
| Taxa de entrada no grupo até D2 | 75% | 90%+ |
| Comparecimento kick-off ao vivo | 40% | 60%+ |
| Reembolso na primeira semana | < 3% | < 1% |

---

## 🔗 Conecta com

| Estrutura | Como |
|---|---|
| `mensageria-lpsg` | Templates Utility da Meta usados nas mensagens 1, 2, 3, 6 |
| `automacoes-lpsg` | Webhook Hotmart compra Acelerador → dispara onboarding |
| `operacao-lpsg` | Papel "CS Oficial" definido no RACI |
| `dashboard-lpsg` | Módulo CS (ver `06-kpis-e-dashboard.md`) |

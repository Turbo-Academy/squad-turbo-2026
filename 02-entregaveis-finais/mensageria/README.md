# Mensageria — LPSG

> Sequência completa de mensagens do evento (onboarding, lembretes, áudios, recuperação) + templates Utility para Meta API oficial.

---

## 🎯 O método em 4 frases

1. **LPSG é PERPÉTUO · semanal** — toda semana há aulas + carrinho rodando em paralelo. Mensageria roda contínua, não "1x por edição".
2. **Cada mensagem tem UMA função** — onboarding, lembrete, áudio resumo, ficha, carrinho, recuperação. Sem misturar.
3. **80% dos disparos são Utility** na Meta API → custo ~10% do Marketing (economia de R$60-80k/mês em escala).
4. **Áudio > texto pra peças longas** — texto a galera não lê. CTA de reação 🚀 no fim de cada áudio.

---

## 📁 Estrutura

```
mensageria/
├── README.md                              ← você está aqui
│
└── template/
    ├── mensageria-template.md             ← Template genérico (lacunas { })
    │                                        Onboarding · pré-evento · dia de aula ·
    │                                        ficha de interesse · sábado · pitch ·
    │                                        carrinho aberto · recuperação D+1 a D+7
    │
    └── whatsapp-templates-meta.md         ← Templates Utility prontos pra Meta API
                                              15 templates aprováveis (UTILITY)
                                              + regras de aprovação Meta
                                              + comparativo de custo
                                              + curl de submissão
```

---

## 🔄 2 Modos de output

A skill `mensageria-lpsg` suporta os 2 modos:

| Modo | Quando usar | Output |
|---|---|---|
| **Texto livre conversacional** | SendFlow / ManyChat / WhatsApp pessoal | `mensageria-template.md` (mensagens com tom de conversa, saudação rotativa) |
| **Templates Utility** | Meta API oficial · Cloud API · BSPs (Twilio, 360dialog, Wati, AiSensy) | `whatsapp-templates-meta.md` (15 templates com `{{1}}`, `{{2}}` + botões) |

> Skill **pergunta antes** de gerar qual modo usar.

---

## 💰 Por que Utility importa

| Cenário · 5k inscritos · 200k disparos/lançamento | Custo |
|---|---|
| 100% Marketing | R$ 80.000 ❌ |
| 50% Marketing + 50% Utility | R$ 41.500 |
| **80% Utility + 20% Marketing** *(padrão LPSG)* | **R$ 14.800** ✅ |

**Economia ao migrar pro padrão Utility: ~R$ 65.000/lançamento.**

---

## 🔗 Fontes oficiais e referências

A `whatsapp-templates-meta.md` tem links pras docs oficiais Meta + casos validados. Atualizado em abril/2026.

---

## 🧭 Skills relacionadas

- `mensageria-lpsg` — esta skill (sequência de mensagens)
- `oferta-lpsg` — define os horários do tsunami que disparam parte da mensageria (ex: 6h50, 7h00)
- `estrutura-aulas-lpsg` — define os ganchos das aulas que aparecem nos áudios noturnos

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Estrutura validada em 12 meses de operação multi-nicho.

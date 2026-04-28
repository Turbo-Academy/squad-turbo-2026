# Criativos — LPSG

> Bateladas de criativos para Meta Ads. 5 estáticos + 5 carrosséis + 5 vídeos liberados juntos. Skill: **`criativos-lpsg`**.

---

## 🎯 O método em 3 frases

1. **Sempre 15 por batelada** — 5 estáticos + 5 carrosséis + 5 vídeos. Meta ASC otimiza melhor com 15 do que com 30 ou 5.
2. **Foto do expert é inviolável** — todo estático e todo carrossel TEM que ter o rosto do expert. Sem isso, vira anúncio genérico.
3. **Carrossel é o ROAS rei** — 8-10 cards, último é vídeo 4-5s. Engajamento (swipe) é o melhor sinal pro algoritmo.

---

## 📁 Estrutura

```
criativos/
├── README.md                              ← você está aqui
│
├── template/                              Template genérico (reutilizável)
│   ├── README.md
│   ├── 00-variaveis-globais.md            Expert · paleta · briefing
│   ├── 01-estrutura-do-criativo.md        Hook · Body · CTA (3 partes)
│   ├── 02-batelada-15-criativos.md        Liberação · 5+5+5 · nomenclatura
│   ├── 03-criativo-estatico.md            5 estáticos · com foto do expert
│   ├── 04-carrossel.md                    5 carrosséis · 8-10 cards · vídeo no card 10
│   ├── 05-roteiro-video.md                5 roteiros prontos pra gravar
│   ├── 06-prompts-ia-design.md            Claude Designer · Nano Banana · GPT · MJ
│   └── 07-modos-de-output.md              Modo A (pronto) · Modo B (brief IA)
│
└── exemplo-lpsg/                          Exemplo preenchido (LPSG do Leo)
    └── 00-variaveis-preenchidas.md
```

---

## 🔄 2 Modos de output

A skill `criativos-lpsg` suporta os 2 modos:

| Modo | Quando usar | Output |
|---|---|---|
| **A · Pronto pra subir** | Tem designer humano OU usa Claude Designer | PNG/MP4 final + copy + nomenclatura |
| **B · Brief pra IA design** | Vai usar Nano Banana · GPT · MJ · Veo | Prompt estruturado de 5 camadas + foto referência |

> Skill **pergunta antes** qual modo usar. Híbrido também é válido (e recomendado).

---

## 📦 Composição da batelada

```
1 batelada = 15 criativos · sempre liberados juntos

5 ESTÁTICOS  (1080×1350 · com foto do expert)
   EST_001 a EST_005

5 CARROSSÉIS (8-10 cards · último é vídeo 4-5s)
   CAR_001 a CAR_005

5 VÍDEOS     (30-45s · roteiro pronto pra gravar)
   VID_001 a VID_005
```

### Nomenclatura

```
{SIGLA}_{DDMMYY}_{TIPO}_{NUMERO}

Exemplo: LPS_120526_EST_001 · LPS_120526_CAR_003 · LPS_120526_VID_002
```

---

## 🌡️ Frequência de batelada (modelo perpétuo)

> LPSG é semanal e contínuo. Bateladas rodam o ano inteiro · não por "edição".

```
RITMO_CANONICO:
  - 1 batelada nova A CADA SEMANA (15 criativos)
  - Criativos vencedores ficam rodando ciclos seguidos (não morrem com a edição)
  - Captação 24/7 · ASC otimizando o tempo todo

DIA_DE_LIBERAR_BATELADA:
  - Recomendado: quarta-feira (após Weekly Planning)
  - Alternativa: quinta · pra rodar com lead atual ainda quente
```

> Volume típico/mês: **~4 batelas = 60 criativos novos**. Acumulado: 50-100 criativos rodando em ASC simultâneo.

---

## 📊 Métricas-alvo (do trafego-lpsg)

```yaml
HOOK_RATE:    ≥ 20% (mín) · ≥ 30% (ideal)
HOLD_RATE:    ≥ 5%  · ≥ 10%
BODY_RATE:    ≥ 2%  · ≥ 5%
ROAS:         ≥ 1.0 · ≥ 1.25
CPM:          ≤ R$ 40
```

---

## 🧭 Skills relacionadas

- `criativos-lpsg` — esta skill (gera bateladas)
- `trafego-lpsg` — onde os criativos sobem (Meta ASC · 15 criativos)
- `paginas-lpsg` — destino dos criativos (URL da página de ingresso)
- `oferta-lpsg` — origem da copy do CTA (ticket · tsunami · garantia)
- `dashboard-lpsg` — performance dos criativos em `/trafego` (Hook/Hold/Body Rate)

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Validado em 12 meses de operação multi-nicho.

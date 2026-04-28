# 02 · Batelada de 15 criativos — liberação por vez

> 5 estáticos + 5 carrosséis + 5 vídeos · sempre juntos · sempre variados.

---

## 🎯 Por que liberar 15 de uma vez

```
1 criativo só     →  algoritmo Meta não tem opção · não otimiza
3 criativos       →  pouca variação · risco alto se nenhum performar
15 criativos      →  variação ideal · ASC otimiza pra quem performa
30+ criativos     →  fragmenta budget · cada um recebe pouco · ninguém aprende
```

**15 = sweet spot.** Não vire 30 numa esperança de "mais é melhor". Não fique em 5 pra "economizar". Vire 15 e deixe o algoritmo trabalhar.

---

## 📦 Composição da batelada

```
┌─────────────────────────────────────────────────────┐
│              BATELADA = 15 criativos                 │
├─────────────────────────────────────────────────────┤
│                                                      │
│  5 ESTÁTICOS (com foto do expert)                    │
│    EST_001 · EST_002 · EST_003 · EST_004 · EST_005   │
│                                                      │
│  5 CARROSSÉIS (8-10 cards · último = vídeo 4-5s)     │
│    CAR_001 · CAR_002 · CAR_003 · CAR_004 · CAR_005   │
│                                                      │
│  5 VÍDEOS (roteiros prontos pra gravar)              │
│    VID_001 · VID_002 · VID_003 · VID_004 · VID_005   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 🏷️ Nomenclatura

```
{SIGLA}_{DDMMYY}_{TIPO}_{NUMERO}

SIGLA       3 letras MAIÚSCULAS do evento (LPS · DDP · BOL...)
DDMMYY      data da batelada (não da publicação)
TIPO        EST (estático) · CAR (carrossel) · VID (vídeo)
NUMERO      001 a 005 (zero-padded · 3 dígitos)
```

### Exemplos

```
LPS_120526_EST_001    ← estático 1 da batelada do dia 12/05/26
LPS_120526_CAR_003    ← carrossel 3
LPS_120526_VID_002    ← vídeo 2
```

> A nomenclatura é a **ponte com o dashboard** (`/trafego`) e o `trafego-lpsg`. Não pula etapa.

---

## 🌡️ Frequência de batelada (modelo perpétuo)

> LPSG é semanal · sempre rodando. Bateladas são lançadas em ritmo contínuo · não em janelas pré-evento.

```yaml
RITMO_CANONICO_SEMANAL:
  - "1 batelada nova POR SEMANA (15 criativos)"
  - "Dia recomendado: quarta-feira (após Weekly Planning)"
  - "Criativos vencedores continuam rodando · não 'morrem' no fim do ciclo"

ACELERACAO (escala · Tier 2+):
  - "2 batelas por semana (quarta + sábado)"
  - "Quando ROAS está acima de 1.5 e tem caixa pra escalar"

CAPTACAO_E_PERPETUA:
  - "ASC roda 24/7 com 50-100 criativos simultâneos"
  - "Algoritmo otimiza · vencedores escalam · perdedores cortam"
  - "Lead que entra hoje → vai pro próximo ciclo da semana ISO"

POS_LANCAMENTO:
  - "Batelada de recuperação D+1 a D+7 (mais agressiva · urgência real)"
```

---

## 🎭 Mix obrigatório de variação (anti-fragmentação)

Pra ASC otimizar bem, os 15 NÃO podem ser cópias um do outro. Tem que ter:

### Por hook (5 tipos · 1 cada)

| # | Tipo de hook | Onde aparece |
|---|---|---|
| 1 | Quebra de padrão | EST_001 + CAR_001 + VID_001 |
| 2 | Promessa específica | EST_002 + CAR_002 + VID_002 |
| 3 | Pergunta direta | EST_003 + CAR_003 + VID_003 |
| 4 | Confissão | EST_004 + CAR_004 + VID_004 |
| 5 | Polarização | EST_005 + CAR_005 + VID_005 |

### Por dor do avatar (5 ângulos)

| Ângulo | Foco |
|---|---|
| Dor financeira | "Tô estagnado · não passo de R$ X/mês" |
| Dor de tempo | "Trabalho 14h e não vejo resultado" |
| Dor de identidade | "Outros tão crescendo e eu não" |
| Dor técnica | "Tento, mas não dá certo · tá errado em algum lugar" |
| Dor de método | "Tem cursos demais · não sei qual seguir" |

> **Cada criativo da batelada ataca um ângulo diferente.** Os 15 cobrem todas as dores.

### Por tom

```
5 sérios/autoridade  →  prova social pesada · números · "eu fiz X"
5 leves/conversacionais  →  como conversa de mesa · "aí eu pensei..."
5 polêmicos/provocativos  →  toma um lado · "guru de marketing é golpe"
```

---

## 🎨 Mix por tipo de fundo (visual)

```yaml
FUNDO_DARK:               6 criativos    # alto contraste · profissional
FUNDO_CLARO:              4 criativos    # respiro · contraste invertido
FUNDO_FOTO_EXPERT:        3 criativos    # foto cinematográfica como bg
FUNDO_GRADIENTE:          2 criativos    # cor primária da paleta
```

---

## 📊 Performance por tipo (histórico LPSG)

| Formato | Hook Rate | Hold Rate | Body Rate | ROAS médio |
|---|---|---|---|---|
| Estático | 22-28% | — (não aplica) | 3-5% | 1.1-1.4 |
| Carrossel | 18-25% | 8-15% (swipe) | 4-7% | 1.2-1.6 |
| Vídeo | 25-35% | 6-12% | 2-4% | 1.0-1.3 |

> **Carrossel costuma ter o melhor ROAS** (mais engajamento · mais tempo na peça). Mas vídeo escala melhor (CPM mais barato em ASC).

---

## ⚙️ Workflow de produção da batelada

```
1. BRIEFING (Claude)
   ↓
   Define os 15 ângulos · tom · foto do expert · paleta · copy

2. GERAÇÃO PARALELA
   ↓
   Estáticos (5)   Carrosséis (5)   Vídeos (5 roteiros)
   - foto + copy   - 8-10 cards     - texto pra gravar
   - prompts IA    - prompts IA     - direção de cena
                   - vídeo final 4-5s

3. APROVAÇÃO
   ↓
   Brief vai pro designer (humano OU IA)

4. EXECUÇÃO
   ↓
   - Modo A: pronto pra subir (PNG/MP4 final)
   - Modo B: brief detalhado pra Claude Designer / Nano Banana / GPT Image

5. UPLOAD COM NOMENCLATURA
   ↓
   Sobe na Meta com {SIGLA}_{DDMMYY}_{TIPO}_{NUMERO}

6. MONITORAR (dashboard /trafego)
   ↓
   Hook · Hold · Body Rate · ROAS · cor verde/amarelo/vermelho

7. AÇÃO 24-48h depois
   ↓
   Cortar · escalar · duplicar · testar
   (regras em trafego-lpsg)
```

---

## 🎯 Output esperado da batelada

Quando o template é executado, você recebe **3 documentos**:

```
batelada-{DDMMYY}/
├── README-batelada.md           ← visão geral · nomenclatura · brief central
├── estaticos/
│   ├── EST_001/
│   │   ├── copy.md              (headline · subtítulo · CTA)
│   │   ├── prompt-ia.md         (Claude Designer/Nano Banana/GPT Image)
│   │   └── final.png            (se modo A · pronto pra subir)
│   ├── EST_002/...
│   └── EST_005/
├── carrosseis/
│   ├── CAR_001/
│   │   ├── cards-1-a-10.md      (texto de cada card)
│   │   ├── prompt-ia-cards.md   (1 prompt por card)
│   │   ├── prompt-ia-video.md   (vídeo do card 10 · 4-5s)
│   │   └── final/               (10 PNGs + 1 MP4 se modo A)
│   └── CAR_005/
└── videos/
    ├── VID_001/
    │   ├── roteiro.md           (texto pra gravar · com tempo de cena)
    │   ├── shotlist.md          (cenas · ângulos · cortes)
    │   ├── direcao-cena.md      (vestuário · setup · captura)
    │   └── final.mp4            (se modo A · pronto pra subir)
    └── VID_005/
```

> Cada criativo é **autossuficiente** — pode ser produzido em paralelo por times diferentes.

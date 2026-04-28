# 07 · Modos de output — Pronto pra subir vs Brief pra IA

> Skill **pergunta antes** qual modo gerar. Os 2 são compatíveis e podem ser usados juntos.

---

## 🎯 Os 2 modos

| | Modo A · Pronto pra subir | Modo B · Brief pra IA design |
|---|---|---|
| **Quando usar** | Tem designer humano OU usa Claude Designer · quer arquivo final | Vai usar Nano Banana · GPT Image · Midjourney · ou outro |
| **Output** | PNG/MP4 final + copy + nomenclatura | Brief estruturado de 5 camadas + foto referência |
| **Tempo** | Maior (precisa execução) | Menor (só estrutura) |
| **Iteração** | Difícil (arquivo fechado) | Fácil (edita prompt · regera) |

> **Não é binário.** Você pode pedir os 2 modos pra mesma batelada — Modo A pros estáticos simples (HTML/Claude Designer) e Modo B pra carrosséis/vídeos que exigem foto-realismo.

---

## 🅰️ Modo A — Pronto pra subir

### Fluxo

```
Briefing (skill)  →  HTML/CSS gerado pelo Claude Designer  →  PNG renderizado
                                                                ↓
                                                         Pronto pra Meta Ads
```

### Output

```
batelada-{DDMMYY}/
├── estaticos/
│   ├── EST_001/
│   │   ├── final.png            ← arquivo pronto · 1080×1350
│   │   ├── final-quadrado.png   ← versão 1080×1080 (opcional)
│   │   ├── final-stories.png    ← versão 1080×1920 (opcional)
│   │   ├── copy-meta.md         ← copy do anúncio na Meta
│   │   └── nomenclatura.txt     ← {SIGLA}_{DDMMYY}_EST_001
│   ├── EST_002/...
│   └── EST_005/
├── carrosseis/
│   ├── CAR_001/
│   │   ├── card-01.png a card-09.png    ← 9 cards estáticos
│   │   ├── card-10.mp4                  ← vídeo 4-5s do card 10
│   │   ├── copy-meta.md
│   │   └── nomenclatura.txt
│   └── CAR_005/
└── videos/
    ├── VID_001/
    │   ├── final.mp4                    ← vídeo final · 1080×1350
    │   ├── final-9-16.mp4               ← versão stories
    │   ├── final-1-1.mp4                ← versão quadrada
    │   ├── roteiro.md                   ← roteiro detalhado (referência)
    │   ├── copy-meta.md
    │   └── nomenclatura.txt
    └── VID_005/
```

### Quando usar Modo A

```yaml
BOA_ESCOLHA_QUANDO:
  - "Estático com texto pesado · pouca foto-cena"
  - "Tem foto pronta do expert · só precisa montar"
  - "Brand book já consolidado · paleta/fontes definidas"
  - "Velocidade > customização"
  - "Quer iterar 3 versões da mesma copy · trocar headline rápido"

EVITAR_QUANDO:
  - "Precisa de foto cinematográfica do expert num cenário específico"
  - "Não tem foto do expert pronta"
  - "Precisa de composição complexa (b-roll · split-screen elaborado)"
```

### Stack técnico

```yaml
ESTATICO:
  ferramenta:   "Claude Designer (HTML/CSS)"
  alternativa:  "Canva · Figma · Photoshop"
  tempo:        "5-15 min por estático"

CARROSSEL:
  cards_1-9:    "Claude Designer (HTML/CSS · 1 template · 9 variações)"
  card_10:      "Runway · Veo · CapCut (vídeo 4-5s)"
  alternativa:  "Figma + After Effects"
  tempo:        "30-60 min por carrossel completo"

VIDEO:
  gravacao:     "Câmera + roteiro do expert (humano)"
  edicao:       "CapCut · Premiere · DaVinci"
  alternativa:  "Sora / Veo (gera vídeo do zero · qualidade ainda limitada)"
  tempo:        "1-3h por vídeo (incluindo gravação)"
```

---

## 🅱️ Modo B — Brief pra IA design

### Fluxo

```
Briefing (skill)  →  Prompt estruturado de 5 camadas  →  Você cola na ferramenta
                                                              ↓
                                                       Claude Designer · Nano Banana
                                                       GPT Image · Midjourney · Veo
```

### Output

```
batelada-{DDMMYY}/
├── estaticos/
│   ├── EST_001/
│   │   ├── prompt-claude-designer.md       ← prompt p/ HTML
│   │   ├── prompt-nano-banana.md           ← prompt p/ foto-realismo
│   │   ├── prompt-gpt-image.md             ← prompt p/ DALL-E
│   │   ├── prompt-midjourney.md            ← prompt p/ MJ v7
│   │   ├── foto-referencia-do-expert.jpg   ← anexar/referenciar
│   │   ├── moodboard.md                    ← refs visuais
│   │   ├── copy-meta.md
│   │   └── nomenclatura.txt
│   └── EST_005/
├── carrosseis/
│   ├── CAR_001/
│   │   ├── prompt-cards-1-a-9.md           ← 9 prompts (1 por card)
│   │   ├── prompt-video-card-10.md         ← prompt p/ Runway/Veo
│   │   ├── moodboard.md
│   │   ├── copy-meta.md
│   │   └── nomenclatura.txt
│   └── CAR_005/
└── videos/
    ├── VID_001/
    │   ├── roteiro.md                      ← texto do expert
    │   ├── shotlist.md                     ← cenas/ângulos
    │   ├── direcao-cena.md                 ← setup técnico
    │   ├── prompt-broll-ia.md              ← prompts p/ b-roll IA (opcional)
    │   ├── copy-meta.md
    │   └── nomenclatura.txt
    └── VID_005/
```

### Quando usar Modo B

```yaml
BOA_ESCOLHA_QUANDO:
  - "Quer foto cinematográfica do expert (Nano Banana / Flux com LoRA)"
  - "Vai iterar muito · precisa editar prompt rápido"
  - "Tem ferramenta IA preferida · só precisa de brief estruturado"
  - "Compor algo complexo (split · cenário fictício · edição não-linear)"

EVITAR_QUANDO:
  - "Quer arquivo pronto pra subir hoje"
  - "Não quer ter trabalho de iterar prompts"
  - "Texto na imagem é crítico (IA imagem ainda erra letras)"
```

### Stack recomendado por tipo de criativo

```yaml
ESTATICO:
  primario:     "Claude Designer (HTML)"
  fallback:     "Nano Banana (foto · sem texto) + Photoshop (texto depois)"

CARROSSEL_CARDS_1_A_9:
  primario:     "Claude Designer (1 template HTML · 9 variações)"
  fallback:     "Figma + plugin Anima/Locofy"

CARROSSEL_CARD_10:
  primario:     "Runway Gen-3 · Veo 3 · Luma Dream Machine"
  alternativa:  "Gravação humana + edição CapCut"

VIDEO_PRINCIPAL:
  primario:     "Gravação humana (expert) + edição"
  alternativa:  "Sora 2 / Veo 3 (vídeo IA · qualidade ainda limitada · usar só pra b-roll)"
```

---

## 🔀 Modo híbrido (recomendado)

Em LPSGs reais, o melhor é **misturar**:

```yaml
ESTATICOS_EST_001_a_EST_003:
  modo:         "A (Modo A · Claude Designer · HTML)"
  motivo:       "Texto pesado · paleta brand · resolve rápido"

ESTATICOS_EST_004_e_EST_005:
  modo:         "B (Modo B · Nano Banana)"
  motivo:       "Foto cinematográfica do expert · cenário específico"

CARROSSEIS_CAR_001_a_CAR_005:
  cards_1-9:    "A (Claude Designer · 1 template · 9 variações)"
  card_10:      "B (Veo / Runway · vídeo IA)"
  motivo:       "Cards com texto = HTML · vídeo IA pra movimento"

VIDEOS_VID_001_a_VID_005:
  modo:         "Gravação humana com roteiro Modo A"
  motivo:       "Vídeo de tráfego com expert humano > vídeo IA (autenticidade)"
```

---

## 🤝 Compatibilidade entre os modos

```
Modo B → Modo A:  Use o brief Modo B · gere com IA · finalize no Photoshop/Canva
                  → vira "Modo A" com IA no meio do caminho

Modo A → Modo B:  Tem o final.png do Modo A · quer iterar · pede o brief Modo B
                  → reaplica em outra IA · novas variações
```

> Os modos não são exclusivos. **Use o que serve no momento.**

---

## ✍️ Como pedir cada modo

### Pedir Modo A

```
"Gera a batelada do dia DDMMYY no MODO A · pronto pra subir.
 Use Claude Designer pra HTML · me dá os PNGs finais."
```

### Pedir Modo B

```
"Gera a batelada do dia DDMMYY no MODO B · brief pra IA.
 Quero prompts pra Claude Designer (estáticos) e Nano Banana (fotos do expert).
 Cards do carrossel em HTML · vídeo do card 10 prompt pro Veo."
```

### Pedir híbrido

```
"Gera a batelada DDMMYY no MODO HÍBRIDO:
 - 3 estáticos em A (Claude Designer)
 - 2 estáticos em B (Nano Banana · me dá prompt + foto referência)
 - Carrosséis: cards 1-9 em A · card 10 brief pro Veo
 - Vídeos: roteiros completos pra gravação humana"
```

---

## ✅ Checklist do output

### Modo A

```
[ ] Todos os arquivos finais (PNG/MP4) gerados
[ ] Resolução correta · paleta correta · expert visível
[ ] Copy do anúncio escrita
[ ] Nomenclatura correta (SIGLA_DDMMYY_TIPO_NUMERO)
[ ] Versões extras (9:16 stories · 1:1 quadrado) se solicitado
[ ] Pronto pra upload Meta Ads
```

### Modo B

```
[ ] 5 camadas no prompt (intenção · sujeito · estilo · texto · especs)
[ ] Foto referência do expert anexada/linkada
[ ] Moodboard com 3+ refs visuais
[ ] Especificações técnicas (dimensões · paleta · fontes)
[ ] Copy do anúncio escrita (separada · não no prompt da IA)
[ ] Indicação clara de qual IA usar (Claude · Nano · GPT · Midjourney · Veo)
```

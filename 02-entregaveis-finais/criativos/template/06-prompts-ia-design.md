# 06 · Prompts pra IA de design — Claude Designer · Nano Banana · GPT Image · Midjourney

> Brief estruturado pra IA gerar versão final do criativo. Usado quando você não tem designer humano disponível.

---

## 🎯 Princípio: prompt ≠ comando solto

IA de design pra criativo de tráfego precisa de **5 camadas no prompt**:

```
1. INTENÇÃO       o que esse criativo precisa fazer (vender LPSG)
2. SUJEITO        o que aparece (expert · objeto · cenário)
3. ESTILO         estética (editorial · bold · minimalista)
4. TEXTO          headline e CTA literais (pra IA renderizar)
5. ESPECS         dimensões · paleta · tipografia · referência
```

> Sem as 5 camadas, a IA vira slot machine. Com as 5, vira ferramenta.

---

## 🤖 Ferramentas suportadas

| Ferramenta | Forte em | Limitação | Quando usar |
|---|---|---|---|
| **Claude Designer** (claude.ai) | HTML/CSS de criativo · texto preciso · controle total | Não gera foto-realismo | Estático com texto pesado · brandbook |
| **Nano Banana** (Gemini Imagen) | Foto-realismo · expert renderizado · cenas | Texto na imagem ainda erra letras | Foto + cenário · estático com pouco texto |
| **GPT Image** (Sora/DALL-E) | Composições complexas · estilo · vídeo curto | Caro · roda lento | Estático premium · composições difíceis |
| **Midjourney v7** | Estética cinematográfica · arte direção forte | Sem texto · controle limitado | Background · imagem hero · referência |
| **Recraft** | Vetor · ícones · mockup | Sem foto-realismo | Iconografia · brandbook |
| **Flux** (replicate) | Foto-realismo open-source · LoRA do expert | Setup técnico | Quando expert tem LoRA treinado |

---

## 🧩 Template universal de prompt (5 camadas)

```markdown
# PROMPT — {TIPO_CRIATIVO} · {SIGLA}_{DDMMYY}_{TIPO}_{NUMERO}

## 1. INTENÇÃO
Criativo de tráfego pago para Meta Ads · evento "{NOME_EVENTO}" do
especialista {EXPERT_NOME} ({NICHO}). Objetivo: gerar inscrição no evento
ao preço de R$ {TICKET_INGRESSO}. Avatar: {DESCRICAO_AVATAR}. Dor atacada:
{DOR}. Hook tipo: {TIPO_HOOK}.

## 2. SUJEITO
{DESCRICAO_DO_QUE_APARECE}

Pessoa principal: {EXPERT_NOME}
- Aparência: {DESCRICAO_FISICA_BREVE}
- Expressão: {SERIO | SORRINDO | PENSATIVO | INTENSO}
- Pose: {DESCRICAO}
- Vestuário: {DESCRICAO}
- Foto de referência: [anexar/colar URL]

Cenário: {DESCRICAO_BACKGROUND}

## 3. ESTILO
- Estética: {EDITORIAL | BOLD | MINIMALISTA | CINEMATOGRAFICA}
- Iluminação: {SOFT | DRAMATICA | NATURAL | NEON}
- Profundidade de campo: {RASA | MÉDIA | TUDO_EM_FOCO}
- Mood: {INTENSIDADE_BAIXA | MEDIA | ALTA}
- Referências: {LISTAR_3_REFS_VISUAIS}

## 4. TEXTO (renderizar literal na imagem)
Headline: "{HEADLINE_8_PALAVRAS_MAX}"
Subtítulo: "{SUBTITULO_12_PALAVRAS_MAX}"
CTA: "{TEXTO_BOTAO_3_PALAVRAS}"
Detalhes (rodapé): "{DATA_EVENTO} · {TICKET}"

> ATENÇÃO: o texto DEVE aparecer literalmente · sem palavras inventadas pela IA.

## 5. ESPECS TÉCNICAS
Dimensões: {1080×1350 | 1080×1080 | 1080×1920}
Paleta:
  - Primária: {HEX} ({USO})
  - Secundária: {HEX} ({USO})
  - Destaque: {HEX} ({USO})
Tipografia:
  - Headline: {FONTE_NOME} {PESO}
  - Corpo: {FONTE_NOME}
Composição:
  - Regra dos terços
  - Expert ocupa: {%_DA_AREA}
  - Texto ocupa: {%_DA_AREA}
  - Logo: {POSICAO} · {%_AREA}

## OUTPUT ESPERADO
- Arquivo: PNG ou JPG
- Resolução: {RESOLUCAO}
- Versão sem texto: SIM (pra reuso)
- Variações: 3 (mesmo conceito · pequenas variações de pose/composição)
```

---

## 🎨 Prompt para Claude Designer (HTML/CSS)

> **Forte em:** texto preciso · controle de paleta · responsividade

```markdown
Crie um criativo estático para Meta Ads em HTML/CSS puro.

## Especificações
- Dimensões: 1080×1350px (4:5)
- Output: arquivo HTML único · screenshot em PNG ao final
- Sem JavaScript · CSS embarcado

## Conteúdo
- Foto do expert: [URL ou descrição da foto]
  - Posição: à direita · ocupando 50% da largura · altura total
  - Tratamento: fundo removido · sombra suave atrás
- Headline: "{HEADLINE}"
  - Posição: à esquerda · centralizada vertical
  - Fonte: {FONTE_HEADLINE} bold
  - Tamanho: 120pt
  - Cor: branca
- Subtítulo: "{SUBTITULO}"
  - Posição: abaixo da headline
  - Fonte: {FONTE_CORPO}
  - Tamanho: 36pt
  - Cor: cinza claro
- Botão CTA: "{TEXTO_CTA}"
  - Posição: abaixo do subtítulo
  - Bg: {COR_DESTAQUE}
  - Cor texto: preto
  - Padding: 24px 48px
  - Border radius: 12px
- Logo: canto superior esquerdo · 80px
- Detalhes: "{DATA} · {TICKET}" · canto inferior direito · 24pt

## Paleta
- bg: {COR_FUNDO} (gradient sutil opcional)
- texto: branco / {COR_DESTAQUE} pra acento

## Estilo
{DESCRICAO_ESTILO_E_REFERENCIAS}

Gere o HTML · me mostre o resultado renderizado.
```

> Claude Designer (claude.ai) renderiza HTML em SVG/PNG e dá download direto.

---

## 🍌 Prompt para Nano Banana (Gemini Imagen 3)

> **Forte em:** foto-realismo · expert em cenário · iluminação cinematográfica

```markdown
Photorealistic editorial portrait of {EXPERT_NOME} for a digital marketing
campaign. Reference photo of subject: [upload].

Setting: {DESCRICAO_CENA_DETALHADA}.
Lighting: {TIPO_ILUMINACAO} with dramatic shadows on the right side of the
face, key light from upper-left at 45°, fill light at 30% intensity.
Camera: 85mm lens, f/2.8, shallow depth of field, eye-level shot.
Mood: {MOOD}. Style: {REFERENCIA_DE_ESTILO}.
Color grading: {DESCRICAO_COR}, similar to {FILME_OU_FOTOGRAFO_REF}.

Aspect ratio: 4:5 (1080×1350).
Negative: cartoon style, illustrations, text overlays, watermarks,
distorted face, asymmetric eyes.

Generate 4 variations.
```

> **Nano Banana erra texto na imagem.** Use SEM texto · adicione texto depois no Photoshop/Canva.

---

## 🤖 Prompt para GPT Image (DALL-E 3 / Sora)

> **Forte em:** composições complexas · estilo definido · prompt em linguagem natural

```markdown
Create a Meta Ads creative for "{NOME_EVENTO}".

Style: editorial photography meets graphic design poster. Bold typography
overlaying a cinematic photo. Color palette: dark background ({COR_FUNDO})
with {COR_PRIMARIA} accent color and {COR_DESTAQUE} for the call-to-action.

Subject: {EXPERT_NOME}, photographed in a {DESCRICAO_CENA}, with
{EXPRESSAO_FACIAL}. The photo occupies the right 60% of the canvas.

Typography (left side):
- Headline (in {FONTE_HEADLINE}): "{HEADLINE}"
- Subhead: "{SUBTITULO}"
- CTA button (bottom): "{CTA_TEXT}" in {COR_DESTAQUE}

Aspect ratio: 4:5 (1080×1350px).
Composition: rule of thirds, asymmetric balance, white space on the left
to ground the typography.
Mood: {MOOD}.

Reference style: think {FILMMAKER_REF} cinematography crossed with
{DESIGNER_REF} layout work.
```

---

## 🎭 Prompt para Midjourney v7

> **Forte em:** estética · arte direção · imagem hero (não tem texto preciso)

```markdown
/imagine prompt: editorial portrait of {EXPERT_DESCRIPTION}, dramatic
lighting from upper left, dark moody background ({COR_FUNDO}),
{EXPRESSAO}, looking directly at camera, 85mm lens shot, shallow depth of
field, professional headshot quality, cinematic color grading,
{REFERENCIA_FOTOGRAFO} style --ar 4:5 --style raw --v 7
```

> Use Midjourney só pra **gerar a foto base** · adicione texto/CTA em outra ferramenta.

---

## 🎬 Prompt para vídeo (Runway · Sora · Luma · Veo)

> Pra gerar o card 10 do carrossel (vídeo 4-5s) ou compor b-roll de vídeo

```markdown
Generate a 5-second video for a Meta Ads creative.

Subject: {EXPERT_NOME} on screen, [breve descrição]. Camera slowly pushes
in. After 2 seconds, large bold text appears: "{CTA_TEXT_3_WORDS}" in
{COR_DESTAQUE} typography. The text should be steady (not animated). After
4 seconds, a subtle URL or instruction fades in: "{URL_OR_INSTRUCTION}".

Style: cinematic, editorial. Lighting: {ILUMINACAO}. Color palette: dark
background ({COR_FUNDO}) with {COR_DESTAQUE} accent.

Duration: 5 seconds. Aspect ratio: 1:1 (1080×1080) for carousel last card.
Loop: yes (subtle, no harsh cuts).

Audio: optional voiceover by {EXPERT_NOME} saying "{FRASE_CTA_4_SEGUNDOS}".
If no voice, use ambient music at low volume (-30dB).
```

---

## 🧠 Padrões que funcionam (LPSG)

### Foto do expert que sempre converte

```yaml
HEADSHOT_AUTORIDADE:
  expressao:               "Sério · olhar direto · neutro"
  fundo:                   "Dark · sólido ou gradiente sutil"
  iluminacao:              "Dramática · 1 ponto · sombra à direita"
  enquadramento:           "Cabeça e ombros · 80% do frame"
  vestuario:               "Camisa lisa · cor neutra · sem logo"
  uso:                     "Hook · provas · headlines fortes"

GESTICULANDO_AUTORIDADE:
  expressao:               "Engajado · falando · sorriso leve"
  fundo:                   "Estúdio · luz suave"
  iluminacao:              "Soft · 2 pontos"
  enquadramento:           "Tronco · gestos visíveis"
  uso:                     "Body · explicação · solução"

SORRISO_EMPATICO:
  expressao:               "Sorriso franco · olhar direto"
  fundo:                   "Claro · respiro"
  iluminacao:              "Natural · janela"
  enquadramento:           "Cabeça e ombros"
  uso:                     "CTA · convite · proximidade"
```

### Composições que convertem em estático

```yaml
SPLIT_HORIZONTAL_50_50:    "Texto à esquerda · expert à direita"
TEXTO_SOBREPOSTO:          "Texto na parte inferior · expert ao fundo"
GRID_3X3:                  "Headline ocupa 6 quadrantes · CTA isolado"
DIAGONAL:                  "Texto diagonal · expert centralizado"
```

---

## ⚠️ O que NÃO pedir pra IA

```yaml
PROIBIDO:
  - "Faça um anúncio incrível"               # vago demais
  - "No estilo da Apple"                     # ambíguo · cada IA interpreta diferente
  - "Coloque texto motivacional"             # IA inventa palavra
  - "Faça parecer profissional"              # subjetivo
  - "Sem fundo ruim"                         # nega · IA não entende
  - "Adicione 5 elementos"                   # contagem precisa erra

CERTO:
  - "Editorial · grafia bold · linha de fotografia Annie Leibovitz"
  - "Texto literal: '{HEADLINE}'"
  - "Composição em rule of thirds com expert no terço direito"
  - "Sem outros elementos · só foto + texto + CTA"
```

---

## 🔄 Workflow recomendado

```
1. Claude Designer        →  HTML/CSS rápido com texto preciso (estático simples)
2. Nano Banana / GPT      →  Foto cinematográfica do expert (sem texto)
3. Photoshop / Canva      →  Adiciona texto sobre a foto (controle total)
4. Runway / Veo           →  Vídeo 4-5s do card 10 do carrossel
5. CapCut / Premiere      →  Edita vídeo principal · adiciona legenda queimada
```

> Em LPSGs, **70% do trabalho** sai bem com Claude Designer (HTML→PNG). Reserve IA de imagem pra o que precisa de foto-realismo.

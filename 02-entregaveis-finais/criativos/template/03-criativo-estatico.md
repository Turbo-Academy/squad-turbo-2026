# 03 · Criativo estático — 5 por batelada · com foto do expert

> Imagem única (1080×1350 ou 1080×1080) · headline forte · foto do expert obrigatória.

---

## 🎯 Por que estático ainda funciona

```
✅ Custa 0 (vs vídeo · custo de produção)
✅ Hook visual instantâneo (não precisa esperar 3s)
✅ Funciona em conexão lenta (sem buffering)
✅ Performance no feed Insta + FB feed igual
✅ Editar é trivial (trocar copy · trocar foto · subir)
```

> Estático **NÃO é o formato fraco** da batelada. Em LPSGs, estático costuma ter ROAS competitivo com vídeo.

---

## 📐 Especificações

```yaml
FORMATO_PRINCIPAL:        "1080×1350 (4:5 · feed prioridade)"
FORMATOS_EXTRA:
  - "1080×1080 (1:1 · feed quadrado)"
  - "1080×1920 (9:16 · stories/reels estático)"
PESO_MAX:                 "30 MB"
TIPO_ARQUIVO:             "PNG (recomendado · transparência) ou JPG"
RESOLUCAO_MIN:            "1080×1350 (não enviar menor)"
TEXTO_NA_IMAGEM:          "≤ 20% da área (regra Meta legacy · ainda pesa em CPM)"
```

---

## 🧱 Anatomia de um estático LPSG

```
┌──────────────────────────────────────┐
│                                       │
│   [LOGO PEQUENO TOPO ESQUERDO]        │  ← branding sutil (opcional)
│                                       │
│   ┌─────────────────────────────┐     │
│   │                              │     │
│   │   FOTO DO EXPERT              │     │  ← ocupa 40-60% da área
│   │   (recorte · fundo limpo)     │     │     SEMPRE PRESENTE
│   │                              │     │
│   └─────────────────────────────┘     │
│                                       │
│   HEADLINE GIGANTE                    │  ← 6-8 palavras · alta hierarquia
│   subtítulo aqui em uma linha         │  ← 8-12 palavras · contexto
│                                       │
│   [BOTÃO/CTA visual]                  │  ← cor de destaque · texto curto
│                                       │
│   ╳ data · valor · prova social ╳     │  ← rodapé · informação contextual
└──────────────────────────────────────┘
```

### Hierarquia visual (regra de ouro)

```
1. FOTO DO EXPERT (50% atenção)
2. HEADLINE        (30% atenção)
3. CTA / VALOR     (15% atenção)
4. DETALHES        (5% atenção)
```

> Se você inverteu (texto gigante · foto pequena) o criativo morre. O **rosto vende**.

---

## 🎭 Os 5 estáticos da batelada (estrutura padrão)

### EST_001 — Quebra de padrão

```yaml
HOOK:                "Frase contraintuitiva ou polêmica"
EXEMPLO_LPSG:        "Demitir 80% da equipe me fez faturar 10x"
FOTO:                "Expert sério · olhar direto · fundo dark"
PALETA:              "Dark + cor primária no botão"
TEXTO_TOTAL:         "≤ 30 palavras"
DOR_QUE_ATACA:       "Identidade (sou pequeno demais)"
```

### EST_002 — Promessa específica com número

```yaml
HOOK:                "Resultado mensurável + prazo"
EXEMPLO_LPSG:        "R$ 1M em 5 dias · 3 pessoas · 0 ads novos"
FOTO:                "Expert sorrindo · mão apontando · fundo claro"
PALETA:              "Claro + destaque no número"
TEXTO_TOTAL:         "≤ 20 palavras (números fazem o trabalho)"
DOR_QUE_ATACA:       "Financeira (estagnado em X)"
```

### EST_003 — Pergunta direta + foto reflexiva

```yaml
HOOK:                "Pergunta que ativa o problema"
EXEMPLO_LPSG:        "Você roda tráfego há 1 ano e ainda não passa de R$ 100k?"
FOTO:                "Expert pensativo · olhar lateral · contemplativo"
PALETA:              "Cinza + acento na pergunta em cor primária"
TEXTO_TOTAL:         "Pergunta + 1 frase de identificação + CTA"
DOR_QUE_ATACA:       "Técnica (tô fazendo errado · me ajuda)"
```

### EST_004 — Antes/depois (split visual)

```yaml
HOOK:                "Transformação clara · 2 fotos lado a lado"
EXEMPLO_LPSG:        "Antes: 1 pessoa fazendo 7 funções · Depois: 3 pessoas e 3 milhões"
FOTO:                "2 fotos do expert (1 antes/depois OU split com aluno)"
PALETA:              "Alto contraste entre lados (cinza vs cor)"
TEXTO_TOTAL:         "Headline + 2 labels + 1 CTA"
DOR_QUE_ATACA:       "Tempo + identidade (eu também posso)"
```

### EST_005 — Prova social com depoimento real

```yaml
HOOK:                "Citação direta + nome do aluno"
EXEMPLO_LPSG:        "'Em 3 meses fiz mais que em 3 anos' — João, aluno LPSG"
FOTO:                "Expert + foto do aluno (montagem) OU expert apresentando print"
PALETA:              "Confiança · azul/verde · serif (autoridade)"
TEXTO_TOTAL:         "Citação + atribuição + CTA"
DOR_QUE_ATACA:       "Ceticismo (será que funciona pra mim?)"
```

---

## ✍️ Copy de cada estático (template)

```markdown
# EST_{NUMERO}

## Headline (na imagem)
"{HEADLINE_8_PALAVRAS_MAX}"

## Subtítulo (na imagem)
"{SUBTITULO_12_PALAVRAS_MAX}"

## CTA (na imagem)
[{TEXTO_BOTAO_3_PALAVRAS}]

## Copy do anúncio (no Meta)
{HOOK_FRASE_CHOQUE}

{BODY_2_LINHAS_DESENVOLVIMENTO}

{PROVA_SOCIAL_OU_QUEBRA_OBJECAO}

👇 Garante a sua vaga no link da bio · {DATA_EVENTO} · {TICKET_INGRESSO}

## Hashtags (Meta autopreenche · não usar)
—

## Foto do expert
Tipo: {HEADSHOT | RINDO | PALCO | MAOS}
Recorte: {SIM | NAO}
Fundo: {DARK | CLARO | GRADIENTE | FOTO_CINEMATIC}

## Variáveis preenchidas
SIGLA: {SIGLA}
DATA_BATELADA: {DDMMYY}
NOME_ARQUIVO: {SIGLA}_{DDMMYY}_EST_{NUMERO}.png
```

---

## 🎨 Diretrizes de design

### Tipografia

```yaml
HEADLINE:
  fonte:        "{FONTE_HEADLINE}"             # ex: Space Grotesk Bold
  tamanho:      "120-160pt"                    # gigante · legível em thumbnail
  peso:         "Bold ou Black"
  alinhamento:  "esquerda (preferencial) ou centro"

SUBTITULO:
  fonte:        "{FONTE_CORPO}"                # ex: Inter Regular
  tamanho:      "32-44pt"
  cor:          "{COR_FUNDO} contrastante"

CTA_BOTAO:
  fonte:        "{FONTE_CORPO} Bold"
  tamanho:      "36-48pt"
  bg_color:     "{PALETA_DESTAQUE}"
  cor_texto:    "preto ou branco (dependendo do fundo)"
```

### Composição

```yaml
GRID:                     "rule of thirds (regra dos terços)"
EXPERT_POSICAO:           "à direita ou centro · NUNCA atrás do texto"
TEXTO_AREA:               "à esquerda · 40-50% da imagem"
RESPIRO:                  "20% margens · não sufocar"
LOGO_TAMANHO:             "10% da área (canto · sutil)"
```

### Cores

```yaml
DARK_THEME:
  bg:                     "{COR_SECUNDARIA}"             # ex: #0F0F0F
  headline:               "branco"
  destaque:               "{COR_PRIMARIA}"               # ex: #FF6B35
  cta:                    "{COR_DESTAQUE}"               # ex: #FFD700

LIGHT_THEME:
  bg:                     "off-white (#F8F8F8)"
  headline:               "{COR_SECUNDARIA}"             # ex: #0F0F0F
  destaque:               "{COR_PRIMARIA}"
  cta:                    "{COR_PRIMARIA}"               # botão laranja
```

---

## ✅ Checklist antes de subir

```
[ ] Foto do expert presente e em frame (rosto visível)
[ ] Headline ≤ 8 palavras
[ ] Subtítulo ≤ 12 palavras
[ ] CTA com comando de ação (não "saiba mais")
[ ] Texto na imagem ≤ 20% da área
[ ] Resolução 1080×1350 ou 1080×1080
[ ] Versão extra 1080×1920 (stories/reels)
[ ] Nomenclatura: SIGLA_DDMMYY_EST_NUMERO
[ ] Cor da paleta correta
[ ] Logo presente (canto superior · 10% área)
[ ] Tipografia respeita guidelines
[ ] Copy do anúncio (no Meta) escrita
[ ] Link de destino testado
```

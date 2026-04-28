# 00 · Variáveis Globais — Criativos LPSG

> Fonte da verdade dos criativos. Expert · paleta · briefing · variáveis preenchíveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"
SUB_NICHO:                "{SUB_NICHO}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"                  # 3 letras MAIÚSCULAS
EDICAO:                   "{EDICAO}"                 # ex: 01/26
DATA_INICIO_EVENTO:       "{DATA_EVENTO}"            # seg às 7h
DATA_PITCH:               "{DATA_PITCH}"             # dom às 20h
TICKET_INGRESSO:          "{TICKET_INGRESSO}"        # ex: R$ 62
URL_PAGINA_INGRESSO:      "{URL_PAGINA_INGRESSO}"
```

---

## 🧑‍🦱 Expert (obrigatório nos estáticos e carrosséis)

```yaml
EXPERT_NOME:              "{EXPERT_NOME}"            # Leo Tabari
EXPERT_FOTO_PRINCIPAL:    "{PATH_FOTO_HEADSHOT}"     # arquivo .jpg/.png/.webp
EXPERT_FOTOS_VARIADAS:    [
  "{PATH_FOTO_HEADSHOT}",                            # neutra · fundo claro
  "{PATH_FOTO_RINDO}",                               # rindo / expressiva
  "{PATH_FOTO_PALCO}",                               # apresentação / palco
  "{PATH_FOTO_MAOS}",                                # gesticulando
  "{PATH_FOTO_NOTEBOOK}",                            # com notebook (autoridade)
]
EXPERT_RECORTE:           "{TEM_RECORTE_PNG}"         # true/false (usar bg removido)
EXPERT_BRAND_OFICIAL:     "{LOGO_DO_EXPERT}"         # logo .svg/.png transparente
EXPERT_FALAS_CHAVE:       "{LISTA_5_FALAS}"          # frases que ele costuma dizer
```

> **REGRA INVIOLÁVEL:** todo criativo estático e todo carrossel TEM que ter foto do expert. Sem exceção. O rosto do expert é o que diferencia de campanhas genéricas.

---

## 🎨 Identidade visual

```yaml
PALETA_PRIMARIA:          "{COR_PRIMARIA_HEX}"       # ex: #FF6B35 (laranja)
PALETA_SECUNDARIA:        "{COR_SECUNDARIA_HEX}"     # ex: #1A1A1A (preto)
PALETA_DESTAQUE:          "{COR_DESTAQUE_HEX}"       # ex: #FFD700 (amarelo CTA)
PALETA_FUNDO:             "{COR_FUNDO_HEX}"          # ex: #0F0F0F (dark)

FONTE_HEADLINE:           "{FONTE_HEADLINE}"         # ex: Space Grotesk Bold
FONTE_CORPO:              "{FONTE_CORPO}"            # ex: Inter Regular
FONTE_DESTAQUE:           "{FONTE_DESTAQUE}"         # ex: Inter Black

ICONOGRAFIA:              "{ESTILO_ICONES}"          # outline · filled · duotone
ESTILO_GERAL:             "{ESTILO}"                 # minimalista · editorial · bold
```

---

## 📐 Especificações técnicas (Meta Ads)

```yaml
# Estático
ESTATICO_FORMATO:         "1080×1350 (4:5 · feed prioridade)"
ESTATICO_FORMATOS_EXTRA:  ["1080×1080 (1:1)", "1080×1920 (9:16 stories/reels)"]
ESTATICO_PESO_MAX:        "30 MB"
ESTATICO_TIPO_ARQUIVO:    "PNG ou JPG"
ESTATICO_TEXT_OVERLAY:    "≤ 20% da área (regra Meta legacy · ainda pesa em CPM)"

# Carrossel
CARROSSEL_FORMATO:        "1080×1080 (1:1) · TODOS os cards"
CARROSSEL_NUM_CARDS:      "8 a 10 cards"
CARROSSEL_ULTIMO_CARD:    "VÍDEO de 4 a 5 segundos (autoplay loop)"
CARROSSEL_PESO_MAX_CARD:  "30 MB"
CARROSSEL_VIDEO_FORMATO:  "1080×1080 · MP4 H.264 · 4-5s · loop suave"

# Vídeo
VIDEO_FORMATO_PRINCIPAL:  "1080×1350 (4:5 · feed)"
VIDEO_FORMATOS_EXTRA:     ["1080×1920 (9:16 stories/reels)", "1080×1080 (1:1)"]
VIDEO_DURACAO:            "15 a 60 segundos"
VIDEO_DURACAO_IDEAL:      "30 a 45 segundos"
VIDEO_HOOK_OBRIGATORIO:   "primeiros 3 segundos"
VIDEO_LEGENDA_QUEIMADA:   "OBRIGATÓRIO (85% assiste sem áudio)"
VIDEO_PESO_MAX:           "4 GB"
VIDEO_FPS:                "30 (mín)"
VIDEO_CODEC:              "H.264"
```

---

## 📦 Batelada (sempre 15 por vez)

```yaml
BATELADA_PADRAO:          "5 estáticos + 5 carrosséis + 5 vídeos"
BATELADA_FREQUENCIA:      "1x por semana antes do evento (até 3 batelas no aquecimento)"
BATELADA_FREQUENCIA_EVENTO: "1 batelada por dia durante o evento"
BATELADA_NOMENCLATURA:    "{SIGLA}_{DDMMYY}_{TIPO}_{NUMERO}"
                           # ex: LPS_120526_EST_001 (estático 1 da batelada do dia 12/05/26)
                           # ex: LPS_120526_CAR_003 (carrossel 3)
                           # ex: LPS_120526_VID_002 (vídeo 2)
```

> **Por que 5+5+5?** Meta ASC funciona melhor com **15 criativos diversos** rodando juntos. O algoritmo otimiza pra quem performa. 5 de cada formato dá variação suficiente sem fragmentar budget.

---

## 🎯 Métricas-alvo (do trafego-lpsg)

```yaml
HOOK_RATE:                # Views 3s / Impressões (vídeo) · CTR engajamento (estático/carrossel)
  minimo: 20              # %
  ideal: 30
HOLD_RATE:                # ThruPlay 75% / Views 3s (vídeo) · % swipe completo (carrossel)
  minimo: 5               # %
  ideal: 10
BODY_RATE:                # Comprou ingresso / ThruPlay 75% (ou clique no link)
  minimo: 2               # %
  ideal: 5

ROAS_INGRESSO:
  minimo: 1.0
  ideal: 1.25

CPM_MAX:                  40              # R$
```

---

## 🧠 Avatar e dores (vem de paginas-lpsg + briefing)

```yaml
AVATAR_PROFISSAO:         "{PROFISSAO_AVATAR}"
AVATAR_FAIXA_ETARIA:      "{FAIXA_ETARIA}"
AVATAR_DOR_PRINCIPAL:     "{DOR_PRINCIPAL}"
AVATAR_DOR_SECUNDARIA_1:  "{DOR_SEC_1}"
AVATAR_DOR_SECUNDARIA_2:  "{DOR_SEC_2}"
AVATAR_DESEJO_PRINCIPAL:  "{DESEJO}"
AVATAR_OBJECAO_1:         "{OBJ_TEMPO}"              # "não tenho tempo"
AVATAR_OBJECAO_2:         "{OBJ_GRANA}"              # "não tenho dinheiro"
AVATAR_OBJECAO_3:         "{OBJ_SKILL}"              # "não sei tecnologia"
AVATAR_OBJECAO_4:         "{OBJ_NICHO}"              # "no meu nicho não funciona"
```

---

## 🔌 Outputs esperados

```yaml
OUTPUT_MODO_A:            "Pronto pra subir (PNG/MP4 final + copy + nomenclatura)"
OUTPUT_MODO_B:            "Brief pra IA design (prompt + paleta + foto + copy)"
                          # Compatível com: Claude Designer · Nano Banana · GPT Image · Midjourney v7
```

> Skill **pergunta antes** qual modo usar.

---

## 🎯 Default LPSG (Leo Tabari)

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"
TICKET_INGRESSO:          62                          # R$
PALETA_PRIMARIA:          "#FF6B35"                   # laranja Turbo
PALETA_SECUNDARIA:        "#0F0F0F"                   # dark
PALETA_DESTAQUE:          "#FFD700"                   # amarelo CTA
FONTE_HEADLINE:           "Space Grotesk Bold"
FONTE_CORPO:              "Inter"
ESTILO_GERAL:             "editorial bold · alto contraste"
EXPERT_FOTO_PRINCIPAL:    "01-aulas-gravadas/leo-headshot.png"
EXPERT_RECORTE:           true
EXPERT_FALAS_CHAVE:       [
  "Lançamento pago é um cassino que tem regra",
  "Quem tem método ganha de quem tem talento",
  "Você não precisa de criatividade, precisa de processo",
  "O criativo ganhador é o que sobrou depois de 100 testes",
  "Eu rodo 1 milhão por mês com 3 pessoas",
]
```

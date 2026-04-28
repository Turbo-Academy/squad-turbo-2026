# 04 · Carrossel — 5 por batelada · 8 a 10 cards · último é vídeo 4-5s

> Formato com **maior ROAS médio** em LPSGs. Engajamento (swipe) ensina o algoritmo.

---

## 🎯 Por que carrossel converte tanto

```
✅ Cada swipe = sinal pro algoritmo (engagement)
✅ Tempo médio na peça > vídeo (3-15s)
✅ Espaço pra desenvolver argumento (8-10 cards)
✅ Hook visual no card 1 (igual estático)
✅ Body parcelado (1 ideia por card)
✅ CTA dedicado no card final (vídeo 4-5s)
✅ Funciona com áudio off (95% dos casos)
```

> **Carrossel é o estático que vira vídeo.** O melhor dos dois mundos.

---

## 📐 Especificações

```yaml
FORMATO:                  "1080×1080 (1:1) · TODOS os cards"
NUMERO_CARDS:             "8 a 10 cards (nunca menos · nunca mais)"
ULTIMO_CARD:              "VÍDEO 4-5 segundos · 1080×1080 · MP4 H.264 · loop"
PESO_MAX_POR_CARD:        "30 MB"
TIPO_ARQUIVO_IMG:         "PNG ou JPG"
TIPO_ARQUIVO_VIDEO:       "MP4 H.264 · 30fps · loop suave"
TEXTO_NA_IMAGEM:          "≤ 20% da área (regra Meta)"
ORDEM_FIXA:               "Card 1 hook · Cards 2-9 body · Card 10 CTA vídeo"
```

> **Sempre carrega 10.** Mesmo se a estrutura for de 8 (carrossel mais curto), use 10 com 2 cards extras de prova social ou bônus.

---

## 🧱 Anatomia do carrossel LPSG

```
┌────────┬────────┬────────┬────────┬────────┐
│ CARD 1 │ CARD 2 │ CARD 3 │ CARD 4 │ CARD 5 │
│  HOOK  │  AGITA │  PROVA │ MITO 1 │ MITO 2 │
│ + foto │ + foto │ +screen│ + foto │ + foto │
└────────┴────────┴────────┴────────┴────────┘
┌────────┬────────┬────────┬────────┬────────┐
│ CARD 6 │ CARD 7 │ CARD 8 │ CARD 9 │CARD 10 │
│SOLUCAO │ ANTES/ │  HOW   │ EXTRA  │  CTA   │
│ + foto │ DEPOIS │ + lista│ urgênc.│ VÍDEO  │
└────────┴────────┴────────┴────────┴────────┘
                                       4-5s
```

---

## 🎴 Os 10 cards (estrutura padrão)

### CARD 1 — HOOK (parar o scroll)

```yaml
FUNCAO:                "Parar o scroll em 0,5s"
ELEMENTOS:
  - foto:              "Expert · olhar direto · expressão forte"
  - headline:          "≤ 8 palavras · TUDO MAIÚSCULO ou destacado"
  - texto_pergunta:    "{HOOK_FRASE_CHOQUE}"
  - swipe_indicator:   "Seta sutil → ou texto 'arrasta →'"
PALAVRAS:              "≤ 12 totais"
EXEMPLO_LPSG:
  hook: "VOCÊ NÃO PRECISA DE UM EXÉRCITO DE TRÁFEGO"
  foto: "Leo dark · olhar direto · seriedade"
```

### CARD 2 — AGITA O PROBLEMA

```yaml
FUNCAO:                "Confirmar que o avatar tem o problema"
ELEMENTOS:
  - foto:              "Expert · expressão de empatia ou compreensão"
  - texto:             "Identificação · 1 frase · 2-3 linhas"
PALAVRAS:              "≤ 30"
EXEMPLO_LPSG:
  texto: "Você roda tráfego há meses. Equipe inchada. ROAS quebrado.
          Eu também passei por isso — e a saída não é o que você imagina."
```

### CARD 3 — PROVA SOCIAL / DADO

```yaml
FUNCAO:                "Dar credibilidade pra continuar"
ELEMENTOS:
  - foto:              "Expert + screenshot de prova OU printo de faturamento"
  - dado_grande:       "{NUMERO_CHOQUE}"
  - explicacao:        "Como o número foi atingido"
PALAVRAS:              "≤ 25"
EXEMPLO_LPSG:
  dado: "R$ 1.347.892"
  explicacao: "Faturado nos últimos 30 dias com 3 pessoas operando."
```

### CARD 4 — MITO 1 (quebra crença)

```yaml
FUNCAO:                "Atacar a primeira crença que bloqueia"
ELEMENTOS:
  - badge:             "MITO ❌"
  - texto_mito:        "O que o avatar acredita (errado)"
  - badge_2:           "VERDADE ✅"
  - texto_verdade:     "O que realmente é"
PALAVRAS:              "≤ 25 totais"
EXEMPLO_LPSG:
  mito: "Precisa de 10 pessoas pra escalar tráfego"
  verdade: "3 pessoas + processo certo > 10 pessoas + caos"
```

### CARD 5 — MITO 2 (quebra crença)

```yaml
FUNCAO:                "Atacar a segunda crença"
ELEMENTOS:              "(mesmo formato do CARD 4)"
EXEMPLO_LPSG:
  mito: "Tem que produzir 20 criativos por semana"
  verdade: "5 criativos certos batem 50 medianos"
```

### CARD 6 — SOLUÇÃO APRESENTADA

```yaml
FUNCAO:                "Mostrar o método/sistema sem entregar"
ELEMENTOS:
  - foto:              "Expert ensinando · gesto explicativo · whiteboard ou tablet"
  - titulo:            "{NOME_DO_METODO} ou {ESTRUTURA_BASICA}"
  - 3_pilares:         "3 bullets do método"
PALAVRAS:              "≤ 35"
EXEMPLO_LPSG:
  titulo: "O método 5+1"
  bullets:
    - "5 aulas que entregam (sem prender)"
    - "1 pitch que vende sem ser cringe"
    - "Tudo gravado · roda no automático"
```

### CARD 7 — ANTES / DEPOIS

```yaml
FUNCAO:                "Visualizar transformação"
ELEMENTOS:
  - split_visual:      "Lado esquerdo (antes) · lado direito (depois)"
  - texto_antes:       "Estado atual do avatar (frustração)"
  - texto_depois:      "Estado pós-método (alívio)"
PALAVRAS:              "≤ 30"
EXEMPLO_LPSG:
  antes: "14h/dia · 1 pessoa · resultados em queda"
  depois: "6h/dia · 3 pessoas · 1M/mês"
```

### CARD 8 — COMO FUNCIONA (lista numerada)

```yaml
FUNCAO:                "Detalhar 1 nível abaixo · sem entregar tudo"
ELEMENTOS:
  - foto:              "Expert (pequena · canto)"
  - lista_numerada:    "3 a 5 passos do processo"
PALAVRAS:              "≤ 50"
EXEMPLO_LPSG:
  passos:
    - "1. Captação semanal · ASC + 15 criativos"
    - "2. Aulas gravadas · Sub e domingo"
    - "3. Pitch + tsunami · 4 janelas"
    - "4. Recuperação D+1 a D+7 · closer humano"
```

### CARD 9 — URGÊNCIA / BÔNUS / EXTRA

```yaml
FUNCAO:                "Adicionar incentivo · empurrar pro último card"
ELEMENTOS:
  - destaque_urgencia: "{LIMITE_OU_BONUS}"
  - explicacao:        "Por que vale agir agora"
PALAVRAS:              "≤ 25"
EXEMPLO_LPSG:
  urgencia: "1.000 vagas · próxima edição só em 30 dias"
  bonus: "Acesso ao grupo · suporte direto comigo na captação"
```

### CARD 10 — CTA · VÍDEO 4-5 segundos

```yaml
FUNCAO:                "Ação clara + lembrança final"
FORMATO:               "VÍDEO 1080×1080 · 4-5 segundos · loop suave"
ELEMENTOS:
  - 0-2s:              "Expert falando o CTA · áudio + legenda queimada"
  - 2-4s:              "Texto gigante: comando de ação · paleta de destaque"
  - 4-5s:              "Logo + URL/instrução final · ex: 'link na bio'"
ÁUDIO:                 "Voz do expert (curta · 1 frase · 4 segundos)"
LEGENDA:               "QUEIMADA · gigante · 100% legível mudo"
LOOP:                  "Suave · sem corte abrupto"
EXEMPLO_LPSG:
  texto_cta: "GARANTE A SUA VAGA"
  texto_destino: "Link na bio · R$ 62 · começa segunda"
  voz_expert: "Vou te esperar dentro · clica no link"
```

> **Card 10 NÃO é estático.** É vídeo. Sem exceção. O movimento captura quem chegou até ali.

---

## ✍️ Copy do carrossel (template)

```markdown
# CAR_{NUMERO}

## Variação
Tipo de hook: {QUEBRA_PADRAO | PROMESSA | PERGUNTA | CONFISSAO | POLARIZACAO}
Dor atacada: {FINANCEIRA | TEMPO | IDENTIDADE | TECNICA | METODO}
Tom: {SERIO | LEVE | POLEMICO}

## Cards (texto)

### Card 1 — Hook
- Foto: {DESCRICAO_FOTO_EXPERT}
- Texto: "{HOOK_8_PALAVRAS}"

### Card 2 — Agita
- Foto: {DESCRICAO_FOTO}
- Texto: "{AGITA_30_PALAVRAS}"

### Card 3 — Prova social
- Foto: {DESCRICAO}
- Dado: {NUMERO_CHOQUE}
- Explicação: "{COMO_O_NUMERO_FOI_ATINGIDO}"

### Card 4 — Mito 1
- Mito: "{CRENCA_ERRADA}"
- Verdade: "{CRENCA_CERTA}"

### Card 5 — Mito 2
- Mito: "{CRENCA_ERRADA_2}"
- Verdade: "{CRENCA_CERTA_2}"

### Card 6 — Solução
- Foto: {DESCRICAO}
- Título: "{NOME_METODO}"
- Pilares:
  - "{PILAR_1}"
  - "{PILAR_2}"
  - "{PILAR_3}"

### Card 7 — Antes/depois
- Antes: "{ESTADO_ATUAL}"
- Depois: "{ESTADO_FUTURO}"

### Card 8 — Como funciona
- Lista:
  - "1. {PASSO_1}"
  - "2. {PASSO_2}"
  - "3. {PASSO_3}"

### Card 9 — Urgência
- Texto: "{LIMITE_OU_BONUS}"

### Card 10 — VÍDEO CTA
- Texto na tela: "{COMANDO_3_PALAVRAS}"
- Voz do expert: "{FALA_4_SEGUNDOS}"
- Destino: "{URL_OU_INSTRUCAO}"

## Copy do anúncio (descrição na Meta)
{HOOK_FRASE_CHOQUE}

{BODY_2_LINHAS}

👇 Arrasta pro lado · método completo nos cards · link na bio
```

---

## 🎨 Consistência visual entre os 10 cards

```yaml
PALETA:                "MESMA nos 10 cards (sem variar bg cor entre cards)"
TIPOGRAFIA:            "MESMA família (variar peso · não a fonte)"
EXPERT_PRESENCA:       "≥ 7 dos 10 cards com foto do expert visível"
TRANSITION_VISUAL:     "Cada card tem indício de continuidade (seta · número)"
NUMERAÇÃO:             "CARD X / 10 · canto inferior pequeno"
LOGO:                  "Card 1 e Card 10 · 10% área · sutil"
```

> Cards com paletas diferentes parecem 10 anúncios separados. **A unidade visual mantém o swipe.**

---

## ✅ Checklist antes de subir

```
[ ] 10 cards exatos (nem 8 nem 11)
[ ] Card 1 = hook visual com foto do expert
[ ] Cards 2-9 = body com expert em ≥ 7 deles
[ ] Card 10 = VÍDEO 4-5s (não estático)
[ ] Resolução 1080×1080 em todos
[ ] Numeração visual (X/10) presente
[ ] Paleta consistente entre os 10
[ ] Texto na imagem ≤ 20% por card
[ ] Vídeo do card 10 com legenda queimada
[ ] Vídeo do card 10 em loop suave
[ ] Nomenclatura: SIGLA_DDMMYY_CAR_NUMERO
[ ] Copy do anúncio escrita pra subir na Meta
[ ] Link de destino testado
```

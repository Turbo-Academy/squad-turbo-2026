# 09 · Paletas diferenciadas — cada criativo da batelada com identidade própria

> **Princípio anti-clone:** os 15 criativos da batelada NÃO podem parecer 15 versões da mesma arte com headline trocada. Cada um precisa parar o scroll por motivos diferentes — paleta, contraste, peso visual e tom.

---

## 🎯 Por que diversificar paleta dentro da mesma batelada

```
✅ Algoritmo da Meta otimiza por DIFERENÇA · não por similaridade
✅ Audience fatigue cai · cada feed vê visual novo a cada impressão
✅ Cada criativo é "candidato" próprio — Meta testa qual paleta vence
✅ Avatar com perfil estético diferente engaja com cor diferente
✅ 1 criativo SEMPRE precisa "se destacar" (visual outlier)
```

> Bateladas onde os 15 usam mesma paleta perdem ~30% de Hook Rate em ASC. Avaliado em 8 bateladas (Q1 2026).

---

## 🎨 Regra de diferenciação por batelada

```yaml
PALETA_GLOBAL_DA_BATELADA:
  - Há UMA paleta-mãe (cor primária da marca · cor secundária · cor de fundo)
  - Mas cada criativo recebe uma INTERPRETAÇÃO diferente da paleta-mãe
  - Variações: dark vs light · saturado vs sombrio · monocromático vs colorido
  - Sempre mantém pelo menos 1 cor da paleta-mãe presente (continuidade de marca)

DIFERENCIAÇÃO_OBRIGATÓRIA:
  - dos 15 · pelo menos 5 paletas distintas (uma por estático)
  - 1 deles precisa ser o OUTLIER VISUAL (cor inesperada · pattern interrupt)
  - 1 deles precisa ser o EDITORIAL HIGH-END (premium · editorial · sofisticado)
  - 1 deles precisa ser o RAW/HONEST (textura · sem tratamento · documental)
  - 1 deles precisa ser o BOLD/POP (alto contraste · cor neon · tipografia gigante)
  - 1 deles precisa ser o DARK/MOODY (intensidade · drama · cinema)
```

---

## 🎭 5 paletas-base — uma por estático/carrossel/vídeo

> Ajuste os hex para a paleta-mãe do projeto. Mantenha proporção: cada paleta tem 1 cor dominante (60%) · 1 secundária (30%) · 1 destaque (10%).

### PALETA 1 — Editorial Premium (EST_001 / CAR_001 / VID_001)

```yaml
ESTILO:                "Editorial high-end · revista de negócios"
DOMINANTE_60:          "#0A0A0A — preto profundo · fundo"
SECUNDARIA_30:         "#F4F1EA — off-white aquecido · texto"
DESTAQUE_10:           "#D4AF37 — dourado champagne · número/CTA"
TIPOGRAFIA:            "Serif editorial (Instrument Serif · Playfair) na headline"
TEXTURA:               "Grão sutil · papel · sem ruído digital"
QUANDO_USAR:           "Hook de autoridade · número grande · prova social"
REFERENCIA:            "The Economist · Monocle · Aesop"
DIFERENCIAL_VISUAL:    "Hierarquia tipográfica · respiro generoso · serifa"
```

### PALETA 2 — Bold Pop (EST_002 / CAR_002 / VID_002)

```yaml
ESTILO:                "Pop · alto contraste · pattern interrupt"
DOMINANTE_60:          "{COR_PRIMARIA_SATURADA}"      # ex: #FF5C00 saturado
SECUNDARIA_30:         "#FFFFFF — branco puro"
DESTAQUE_10:           "#0F0F10 — preto · texto crítico"
TIPOGRAFIA:            "Sans-serif extra-bold (Space Grotesk · Druk · Migra)"
TEXTURA:               "Flat · sem ruído · vetor limpo"
QUANDO_USAR:           "Hook polarizador · promessa numérica · choque"
REFERENCIA:            "Vercel · Linear · IKEA editorial"
DIFERENCIAL_VISUAL:    "Cor sólida ocupa 60% · zero gradiente · headline tomando o frame"
```

### PALETA 3 — Raw / Honest (EST_003 / CAR_003 / VID_003)

```yaml
ESTILO:                "Documental · UGC-feel · honesto · sem photoshop"
DOMINANTE_60:          "#FBFAF7 — bege quase branco (papel reciclado)"
SECUNDARIA_30:         "#3A3A3A — grafite suave"
DESTAQUE_10:           "{COR_PRIMARIA} 70% saturação"     # versão menos viva
TIPOGRAFIA:            "Mono (JetBrains Mono · IBM Plex Mono) ou Inter Light"
TEXTURA:               "Grão visível · iluminação natural · fotografia crua"
QUANDO_USAR:           "Confissão · vulnerabilidade · pergunta direta · ângulo identidade"
REFERENCIA:            "Notion blog · Stripe Press · Substack"
DIFERENCIAL_VISUAL:    "Foto sem retoque · expert sem maquiagem · cenário cotidiano"
```

### PALETA 4 — Dark Cinema (EST_004 / CAR_004 / VID_004)

```yaml
ESTILO:                "Cinemático · dramático · profundidade"
DOMINANTE_60:          "#0F1115 — preto azulado profundo"
SECUNDARIA_30:         "#1F2937 — cinza-azul · sombra"
DESTAQUE_10:           "{COR_PRIMARIA} brilhante (glow)"   # ex: #FF7A1A com bloom
TIPOGRAFIA:            "Display moderno (Migra · Söhne · Druk)"
TEXTURA:               "Vinheta · profundidade de campo rasa · luz lateral"
QUANDO_USAR:           "Hook de autoridade · before/after · transformação · método"
REFERENCIA:            "Apple keynote · Tesla launch · Christopher Nolan stills"
DIFERENCIAL_VISUAL:    "Iluminação rim light · expert cortado pela sombra · foco no rosto"
```

### PALETA 5 — Outlier Visual (EST_005 / CAR_005 / VID_005)

> Este é o criativo que **se destaca dos outros 14**. Cor inesperada. Composição que quebra a unidade. Pra forçar pattern interrupt no feed.

```yaml
ESTILO:                "Pattern interrupt · cor não-óbvia · risco controlado"
DOMINANTE_60:          "Escolher cor INESPERADA pro nicho:"
                       "  - Negócios → rosa pink (#FF2E93)"
                       "  - Saúde → laranja acid (#FF6B00)"
                       "  - Educação → roxo elétrico (#7C3AED)"
                       "  - Beleza → verde neon (#00D67D)"
                       "  - Tecnologia → amarelo Pantone (#FFD500)"
SECUNDARIA_30:         "#0A0A0A — preto · âncora visual"
DESTAQUE_10:           "Branco puro #FFFFFF — pra o CTA respirar"
TIPOGRAFIA:            "Display experimental (Söhne Breit · Larsseit · Migra Italic)"
TEXTURA:               "Cor chapada · zero textura · risco de saturação no ALGO Meta"
QUANDO_USAR:           "Polarização · provocação · 'guru de marketing é golpe'"
REFERENCIA:            "Glossier · Liquid Death · Oatly"
DIFERENCIAL_VISUAL:    "Cor que NÃO existe nos outros 14 · destaque no feed garantido"
```

---

## 📊 Mapa de variação visual da batelada

```
┌─────────────────────────────────────────────────────────────────┐
│                    BATELADA · 15 CRIATIVOS                       │
│                                                                   │
│   ESTÁTICO 1     CARROSSEL 1      VÍDEO 1                         │
│   PALETA 1       PALETA 1         PALETA 1                        │
│   Editorial      Editorial        Editorial                       │
│                                                                   │
│   ESTÁTICO 2     CARROSSEL 2      VÍDEO 2                         │
│   PALETA 2       PALETA 2         PALETA 2                        │
│   Bold Pop       Bold Pop         Bold Pop                        │
│                                                                   │
│   ESTÁTICO 3     CARROSSEL 3      VÍDEO 3                         │
│   PALETA 3       PALETA 3         PALETA 3                        │
│   Raw            Raw              Raw                             │
│                                                                   │
│   ESTÁTICO 4     CARROSSEL 4      VÍDEO 4                         │
│   PALETA 4       PALETA 4         PALETA 4                        │
│   Dark Cinema    Dark Cinema      Dark Cinema                     │
│                                                                   │
│   ESTÁTICO 5     CARROSSEL 5      VÍDEO 5  ← OUTLIER (destaque)   │
│   PALETA 5       PALETA 5         PALETA 5                        │
│   Outlier        Outlier          Outlier                         │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

Os 3 criativos da MESMA paleta (EST_001 + CAR_001 + VID_001) compartilham linha visual.
Mas cada PALETA é DIFERENTE das outras 4.
```

---

## 🎯 Profundidade de copy — por paleta

> Paleta visual e copy andam juntos. Cada uma exige um registro de texto diferente. Texto raso quebra o tom. Texto profundo casa.

### Copy de PALETA 1 — Editorial Premium

```yaml
TOM:                   "Sóbrio · sofisticado · número como argumento"
ESTRUTURA_HEADLINE:    "Frase com PAUSA dramática · vírgula ou travessão"
EXEMPLO_HEADLINE:      "Demitir 80% da equipe — e crescer 10x. Não é narrativa de motivação. É contabilidade."
CORPO_2_LINHAS:        "Contexto · número · consequência. 1 frase por linha."
PROFUNDIDADE:          "Dado real + reflexão estrutural. Não 'transformação'. Estatística."
EXEMPLO_BODY:
  linha_1: "Em 18 meses cortei a operação para 3 pessoas. Faturamento subiu 11x."
  linha_2: "A diferença não foi 'método'. Foi parar de contratar pra parecer ocupado."
CTA_TOM:               "Convite editorial · não comando comercial"
EXEMPLO_CTA:           "Estudo de caso completo na próxima sessão"
```

### Copy de PALETA 2 — Bold Pop

```yaml
TOM:                   "Direto · 1 ideia · zero ornamento"
ESTRUTURA_HEADLINE:    "Promessa numérica chocante · sem floreio"
EXEMPLO_HEADLINE:      "R$ 1M em 5 dias. 3 pessoas. 0 ads novos."
CORPO_2_LINHAS:        "1 frase de prova · 1 frase de oferta"
PROFUNDIDADE:          "Choque de número · sem qualificação"
EXEMPLO_BODY:
  linha_1: "Resultado real. Print abaixo. Auditoria disponível sob pedido."
  linha_2: "Próxima edição segunda. R$ 62 a vaga. Vão 50."
CTA_TOM:               "Rodapé pequeno · informativo · NUNCA imperativo de venda"
EXEMPLO_CTA:           "Aula 1 segunda · 7h · link bio"
```

### Copy de PALETA 3 — Raw / Honest

```yaml
TOM:                   "Confissão · primeira pessoa · vulnerável"
ESTRUTURA_HEADLINE:    "Frase incompleta · pergunta pessoal · pausa antes do gancho"
EXEMPLO_HEADLINE:      "Trabalhei 14h por dia durante 3 anos. Por que ninguém falou que eu tava errado?"
CORPO_2_LINHAS:        "Contexto íntimo · admissão · convite suave"
PROFUNDIDADE:          "Texto que poderia ser SMS pro melhor amigo · não copywriting"
EXEMPLO_BODY:
  linha_1: "Eu achava que mais horas = mais resultado. Era só ego, na verdade."
  linha_2: "Se você reconhece isso, talvez essa próxima conversa importe pra você."
CTA_TOM:               "Convite humano · sem pressão · empático"
EXEMPLO_CTA:           "Bora conversar"
```

### Copy de PALETA 4 — Dark Cinema

```yaml
TOM:                   "Promessa de transformação · narrativa em 3 atos"
ESTRUTURA_HEADLINE:    "Antes / Depois · ou pergunta retórica densa"
EXEMPLO_HEADLINE:      "O que você faz com 14 horas livres por dia, todos os dias, pelo resto da vida?"
CORPO_2_LINHAS:        "Pergunta provocadora · resposta com método"
PROFUNDIDADE:          "Filme · jornada do herói em 2 frases"
EXEMPLO_BODY:
  linha_1: "Eu construí algo que não me obriga a estar dentro pra rodar. 6h/dia · 1M/mês."
  linha_2: "Vou te mostrar o desenho exato dessa engrenagem na próxima semana."
CTA_TOM:               "Frase grave de fechamento · zero comando · zero botão"
EXEMPLO_CTA:           "Próxima aula. Quem reconhece, encontra o caminho."
```

### Copy de PALETA 5 — Outlier (provocação)

```yaml
TOM:                   "Polêmico · toma um lado · pode ofender · faz pensar"
ESTRUTURA_HEADLINE:    "Frase que nega o senso comum · ataque ao guru padrão"
EXEMPLO_HEADLINE:      "Guru de marketing que vende lançamento e nunca fez um é o novo MLM."
CORPO_2_LINHAS:        "Posicionamento · prova de pertencimento · contraste"
PROFUNDIDADE:          "Texto que gera DM 'mas e se...' — não convite, é argumento"
EXEMPLO_BODY:
  linha_1: "Eu rodei 47 lançamentos pagos em 12 meses. Sei o que falo. Eles não."
  linha_2: "Se você tá cansado de promessa vazia · talvez valha 5 minutos do seu tempo."
CTA_TOM:               "Filtro pessoal · zero comando · texto rodapé"
EXEMPLO_CTA:           "Pra quem leva isso a sério. Os demais ficam pra próxima."
```

---

## 🎨 Quebra de regra controlada — destaque do outlier

> O criativo da PALETA 5 (outlier) DEVE quebrar pelo menos 2 das regras visuais dos outros 4. Não é bug, é design.

```yaml
QUEBRAS_PERMITIDAS_NO_OUTLIER:
  - Cor que ninguém mais usou na batelada
  - Tipografia 1 nível mais experimental
  - Composição centralizada (se outros 4 usam regra dos terços)
  - Texto pode ocupar até 30% (em vez do limite Meta 20% — risco controlado)
  - Foto do expert pode ser MENOR (40% em vez de 50-60%)
  - Pode usar emoji ou símbolo gigante como elemento gráfico (raro nos outros 4)

OBJETIVO:
  - Ser o criativo que o avatar SCREENSHOTA e manda pro amigo
  - Ser o que gera comentário "amei" ou "que ódio"
  - Polarização controlada · ASC capta o engagement extremo e escala
```

---

## 🚦 Checklist anti-clone

Antes de aprovar a batelada, valide visualmente:

```
[ ] As 5 paletas-base estão presentes (Editorial · Pop · Raw · Cinema · Outlier)
[ ] O outlier (paleta 5) tem cor que NÃO aparece em nenhum dos outros 14
[ ] Cada paleta tem tipografia distinta (não 5 sans-serif iguais)
[ ] Cada paleta tem TOM de copy distinto (não 5 hooks no mesmo registro)
[ ] Quem olha a batelada inteira percebe 5 ESTÉTICAS — não 5 versões da mesma
[ ] Pelo menos 1 criativo poderia ser SCREENSHOT por destaque visual
[ ] Logo da marca presente em todos (continuidade) · paleta varia (diversidade)
[ ] Foto do expert variada (ângulo · iluminação · expressão · roupa)
[ ] Nenhum criativo é a "versão escura" de outro · cada um é original
```

---

## 📊 Como medir se a diversificação funcionou

Depois de 5 dias rodando a batelada na ASC:

```yaml
SUCESSO_VISUAL:
  - Hook Rate dos 15 tem variação ≥ 8 pontos percentuais entre o melhor e o pior
  - Pelo menos 3 dos 15 estão acima de 25% Hook Rate
  - O OUTLIER (paleta 5) está entre os 3 melhores OU os 3 piores (extremos)
  - Hook Rate médio da batelada > 22%

FALHA_DE_DIVERSIFICACAO:
  - Os 15 tem Hook Rate todos entre 18-22% (curva achatada · ASC não tem outlier)
  - Mesmo criativo vence em todos os públicos (sinal de pouca variação real)
  - CPM médio acima de R$ 45 (Meta penalizando repetição visual)
```

> Se a curva ficar achatada, **a próxima batelada precisa de paletas ainda mais distantes entre si.**

---

**Princípio final:** uma batelada bem feita parece **5 marcas diferentes anunciando o mesmo evento**, não 1 marca anunciando 5 vezes o mesmo. A unidade vem do logo e do nome. A variação vem de tudo o resto.

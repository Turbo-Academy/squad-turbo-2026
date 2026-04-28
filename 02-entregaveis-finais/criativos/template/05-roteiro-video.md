# 05 · Roteiro de vídeo — 5 textos por batelada · prontos pra gravar

> Texto pronto pra o expert ler · cenas · cortes · direção. Tempo total: 30-45s ideal.

---

## 🎯 Princípio: roteiro ≠ texto solto

Roteiro pra Meta Ads tem 4 camadas:

```
1. TEXTO       o que o expert FALA (palavra por palavra)
2. CENA        onde está · ângulo · setup
3. CORTE       quando muda visualmente (a cada 3-5s)
4. LEGENDA     o que aparece queimado na tela
```

> Gravar sem as 4 camadas = vídeo amador · CPM alto · ROAS baixo.

---

## 📐 Especificações

```yaml
FORMATO_PRINCIPAL:        "1080×1350 (4:5 · feed prioridade)"
FORMATOS_EXTRA:
  - "1080×1920 (9:16 · stories/reels)"
  - "1080×1080 (1:1 · feed quadrado)"
DURACAO_IDEAL:            "30 a 45 segundos"
DURACAO_MIN:              "15 segundos"
DURACAO_MAX:              "60 segundos (cuidado · perde retenção)"
HOOK_OBRIGATORIO:         "primeiros 3 segundos"
LEGENDA:                  "QUEIMADA · 100% do vídeo · gigante"
PESO_MAX:                 "4 GB"
FPS:                      "30 (mín) · 60 ideal"
CODEC:                    "H.264"
AUDIO:                    "Voz do expert + sem música ou música super baixa"
RESOLUCAO_MIN:            "1080×1350 (não enviar 720p)"
```

---

## 🧱 Estrutura padrão (30-45 segundos)

```
┌─────────────────────────────────────────────────────┐
│ 0-3s      HOOK · cara do expert · frase forte       │
├─────────────────────────────────────────────────────┤
│ 3-8s      AGITA · problema do avatar                │
├─────────────────────────────────────────────────────┤
│ 8-18s     PROVA · número/screenshot/caso real       │
├─────────────────────────────────────────────────────┤
│ 18-28s    SOLUÇÃO · método/processo (sem entregar)  │
├─────────────────────────────────────────────────────┤
│ 28-38s    QUEBRA OBJEÇÃO · "mas não vou conseguir"  │
├─────────────────────────────────────────────────────┤
│ 38-45s    CTA · ação clara + urgência               │
└─────────────────────────────────────────────────────┘
```

> Vídeo de 30s = mesma estrutura, blocos mais curtos. Vídeo de 60s = mais espaço pra prova.

---

## 🎬 Os 5 vídeos da batelada

### VID_001 — Quebra de padrão (30s)

```yaml
TIPO_HOOK:               "Quebra de padrão / polarização"
DOR:                     "Identidade (sou pequeno demais)"
TOM:                     "Polêmico · provocativo"
ESTILO_GRAVACAO:         "Selfie · móvel · falando direto pra câmera"
DURACAO_ALVO:            "25-30s"
EXEMPLO_HOOK:            "Demitir 80% da equipe me fez faturar 10x"
```

### VID_002 — Promessa específica + tutorial mini (45s)

```yaml
TIPO_HOOK:               "Promessa específica com número"
DOR:                     "Financeira"
TOM:                     "Sério · autoridade"
ESTILO_GRAVACAO:         "Setup pro · luz · fundo limpo · mic lapela"
DURACAO_ALVO:            "40-45s"
EXEMPLO_HOOK:            "R$ 1M em 5 dias com 3 pessoas — método em 45s"
```

### VID_003 — Pergunta direta + caso real (35s)

```yaml
TIPO_HOOK:               "Pergunta que ativa o problema"
DOR:                     "Técnica (tô fazendo errado)"
TOM:                     "Conversacional · empático"
ESTILO_GRAVACAO:         "Selfie · descontraído · ambiente"
DURACAO_ALVO:            "30-35s"
EXEMPLO_HOOK:            "Vc roda tráfego há 1 ano e não passa de R$ 100k? Eu sei por quê."
```

### VID_004 — Confissão + lição (40s)

```yaml
TIPO_HOOK:               "Confissão / vulnerabilidade controlada"
DOR:                     "Identidade + tempo"
TOM:                     "Vulnerável · autêntico"
ESTILO_GRAVACAO:         "Setup pro · close · iluminação dramática"
DURACAO_ALVO:            "35-40s"
EXEMPLO_HOOK:            "Quase quebrei minha empresa em 2023. Aqui o que eu errei."
```

### VID_005 — Mito vs verdade (30s · ritmo rápido)

```yaml
TIPO_HOOK:               "Polarização · contraponto"
DOR:                     "Método (tem cursos demais · não sei qual)"
TOM:                     "Direto · cortes rápidos"
ESTILO_GRAVACAO:         "Múltiplos ângulos · vários cortes · b-roll"
DURACAO_ALVO:            "25-30s"
EXEMPLO_HOOK:            "Tudo que falaram pra você sobre lançamento tá errado. Os 5 mitos:"
```

---

## ✍️ Roteiro completo (template)

```markdown
# VID_{NUMERO}

## Briefing
Tipo de hook: {TIPO}
Dor atacada: {DOR}
Tom: {TOM}
Estilo de gravação: {SELFIE | SETUP_PRO | MULTIPLOS_ANGULOS}
Duração alvo: {DURACAO}s

---

## Roteiro detalhado

### 0:00 — 0:03 · HOOK
**TEXTO (expert fala):**
"{HOOK_FRASE_CURTA_E_FORTE}"

**CENA:**
Expert {ONDE_ESTA} · {ANGULO} · {EXPRESSAO_FACIAL}

**CORTE:**
Início · close no rosto · sem trasnsição

**LEGENDA QUEIMADA:**
"{HOOK_FRASE_CURTA_E_FORTE}"
[Tamanho: gigante · cor: contraste · posição: meio-baixo]

---

### 0:03 — 0:08 · AGITA
**TEXTO:**
"{AGITA_PROBLEMA_DO_AVATAR_15_PALAVRAS}"

**CENA:**
{MUDA_DE_ANGULO_OU_LOCAL}

**CORTE:**
Hard cut · novo enquadramento

**LEGENDA QUEIMADA:**
"{TEXTO_CONDENSADO_8_PALAVRAS}"

---

### 0:08 — 0:18 · PROVA
**TEXTO:**
"{PROVA_COM_NUMERO_OU_CASO_25_PALAVRAS}"

**CENA:**
B-roll: print · screenshot · imagem do número grande aparece na tela

**CORTE:**
Inserto · split-screen · texto + voz

**LEGENDA QUEIMADA:**
"{NUMERO_GIGANTE}"

---

### 0:18 — 0:28 · SOLUÇÃO
**TEXTO:**
"{APRESENTA_METODO_NOME_E_3_PILARES_30_PALAVRAS}"

**CENA:**
Expert · gestos amplos · whiteboard ou tablet (opcional)

**CORTE:**
Volta no rosto + insertos com 3 bullets

**LEGENDA QUEIMADA:**
"{NOME_METODO}: {3_PILARES_LISTADOS}"

---

### 0:28 — 0:38 · QUEBRA OBJEÇÃO
**TEXTO:**
"{ANTECIPA_OBJECAO_E_QUEBRA_25_PALAVRAS}"

**CENA:**
Expert · close · olhar direto

**CORTE:**
Slow zoom-in (intensidade)

**LEGENDA QUEIMADA:**
"{OBJECAO_E_QUEBRA_CONDENSADA}"

---

### 0:38 — 0:45 · CTA
**TEXTO:**
"{COMANDO_+_DESTINO_+_URGENCIA_15_PALAVRAS}"

**CENA:**
Expert + URL/instrução aparece na tela

**CORTE:**
Texto gigante surge · expert aponta

**LEGENDA QUEIMADA:**
"GARANTE A SUA VAGA · {URL_OU_INSTRUCAO} · {URGENCIA}"

---

## Direção de cena

### Setup
- Local: {ESTUDIO | ESCRITORIO | HOME_OFFICE | PALCO}
- Iluminação: {NATURAL | RING_LIGHT | 2_PONTOS | DRAMATICA}
- Áudio: {LAPELA | DIRECIONAL | CELULAR}
- Câmera: {CELULAR | DSLR | WEBCAM}
- Estabilização: {TRIPÉ | GIMBAL | MAO_LIVRE}

### Vestuário
- {DESCRICAO_OUTFIT}                         # ex: "camisa preta · sem logo grande"
- Evitar: {O_QUE_NAO_USAR}                  # ex: "estampas · cores que conflitam com paleta"

### Comportamento na câmera
- Olhar: {DIRETO | ALTERNAR}
- Mãos: {VISIVEIS | GESTICULAR | NEUTRAS}
- Tom de voz: {ENERGICO | CALMO | PROVOCATIVO}
- Ritmo: {RAPIDO | MEDIO | LENTO}

### B-roll (se necessário)
- {DESCRICAO_BROLL_1}                        # ex: "print do dashboard com R$ 1M"
- {DESCRICAO_BROLL_2}                        # ex: "tela do Hotmart com vendas"

---

## Edição

### Cortes
- 1 corte a cada 3-5s (manter ritmo)
- Hard cuts (sem transição animada)
- Insertos pra dado/número (1-2s)

### Legenda
- Queimada · gigante · contraste alto
- Não cobre o rosto
- Aparece em sync com a fala (legenda automática + revisão manual)

### Música
- Opcional · BPM 90-110 (não compete com voz)
- Volume MUITO baixo (-30dB · só atmosfera)
- OU sem música (recomendado pra vídeos com expert falando)

### Som
- Voz limpa · sem ruído · normalizada (-12 a -16 LUFS)
- Sem efeitos sonoros (não é tiktok)

---

## Output esperado

Arquivo: {SIGLA}_{DDMMYY}_VID_{NUMERO}.mp4
Resolução: 1080×1350 (4:5)
Duração: {DURACAO}s
Versões extras: 1080×1920 (9:16) · 1080×1080 (1:1)
Peso: ≤ 30 MB

---

## Copy do anúncio (descrição no Meta)
{HOOK_FRASE_CHOQUE}

{BODY_2_LINHAS_DESENVOLVIMENTO}

👇 Garante a sua vaga no link · {DATA} · {TICKET}
```

---

## 🎤 Dicas de gravação

```yaml
ANTES_DA_GRAVACAO:
  - "Lê o roteiro 3x · não decora · entende"
  - "Grava ensaio (sem soltar) · ouve · ajusta"
  - "Verifica iluminação no rosto (sem sombra)"
  - "Verifica áudio (mic perto · sem eco)"

DURANTE:
  - "Grava 3 takes seguidos · escolhe o melhor depois"
  - "Erra? Pausa · respira · refaz a frase (não toda a tomada)"
  - "Olhar na câmera · não no preview"
  - "Pausa 2s no fim · pra editor cortar"

DEPOIS:
  - "Não deleta tomadas · pode usar pedaços"
  - "Anota qual frase saiu melhor de cada take"
  - "Envia pra editor com referência do roteiro"
```

---

## ✅ Checklist antes de subir

```
[ ] Duração entre 15s e 60s (ideal 30-45s)
[ ] Hook nos primeiros 3s · rosto do expert
[ ] Legenda QUEIMADA · 100% do vídeo · gigante
[ ] Resolução 1080×1350 (4:5 · feed)
[ ] Versões extras 9:16 (stories) e 1:1 (feed quadrado)
[ ] Cortes a cada 3-5s (ritmo)
[ ] CTA claro nos últimos 5-10s
[ ] Áudio limpo · normalizado
[ ] Sem música ou música super baixa
[ ] Nomenclatura: SIGLA_DDMMYY_VID_NUMERO
[ ] Copy do anúncio escrita
[ ] Link de destino testado
```

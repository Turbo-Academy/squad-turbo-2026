# 00 · Variáveis Globais — Tráfego

> Fonte da verdade do projeto de tráfego do LPSG. Preencha aqui primeiro — todos os outros arquivos referenciam estas variáveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"                       # Ex: marketing, emagrecimento, trade
SUB_NICHO:                "{SUB_NICHO}"                   # Ex: lançamento pago, jejum intermitente
NOME_EVENTO:              "{NOME_EVENTO}"                 # Ex: Desafio LPSG
SIGLA_EVENTO:             "{SIGLA}"                       # Ex: LPSG
AVATAR:                   "{AVATAR}"                      # Ex: expert digital 30-50, fatura R$5-50k/mês
BIG_IDEA:                 "{BIG_IDEA}"                    # Ex: pague o tráfego antes do evento começar
PLATAFORMA:               "Meta Ads"                      # FIXO: Meta (Facebook + Instagram)
TIPO_CAMPANHA:            "Advantage+ Shopping (ASC)"     # FIXO no LPSG
```

---

## 💰 Economia da campanha

```yaml
TICKET_INGRESSO:          "{TICKET_INGRESSO}"             # Ex: R$ 62
ROAS_ALVO_INGRESSO:       "{ROAS_ALVO_INGRESSO}"          # Ex: 1.0 (mínimo) / 1.25 (ideal)
VALOR_PRODUTO:            "{VALOR_PRODUTO}"               # Ex: R$ 25.000 (referência, não rodamos campanha pra ele)
CONVERSAO_EVENTO_ALVO:    "{CONVERSAO_EVENTO}"            # Ex: ≥7% (ideal 10%)
```

> **Nota:** no LPSG **só rodamos campanha de venda de ingresso**. O produto é vendido via evento + carrinho aberto + mensageria. Não há tráfego pra pitch nem retargeting.

---

## 📊 Métricas-alvo

### Campanha
```yaml
ROAS_ALVO_INGRESSO:       "≥ 1.0 (mínimo) · 1.25 (ideal)"
CPM_MAX:                  "≤ R$ 40"
```

### Criativo (3 métricas-chave)
```yaml
HOOK_RATE_MIN:            "≥ 20%"           # (visualizações 3s / impressões)
HOOK_RATE_IDEAL:          "≥ 30%"
HOLD_RATE_MIN:            "≥ 5%"            # (assistiu 75% do vídeo / visualizações 3s)
HOLD_RATE_IDEAL:          "≥ 10%"
BODY_RATE_MIN:            "≥ 2%"            # (comprou ingresso / assistiu 75% do vídeo)
BODY_RATE_IDEAL:          "≥ 5%"
```

### Página
```yaml
CONVERSAO_PAGINA_MIN:     "≥ 5%"            # Alvo do LPSG (não aceita menos)
CONVERSAO_PAGINA_IDEAL:   "≥ 7%"
```

---

## 🏗️ Estrutura da campanha (FIXA)

```yaml
QUANTIDADE_CAMPANHAS:     "1"                             # FIXO
QUANTIDADE_CONJUNTOS:     "1"                             # FIXO
PUBLICO:                  "Advantage+ Audience (aberto)"  # FIXO
QUANTIDADE_CRIATIVOS:     "15"                            # FIXO
COMPOSICAO_CRIATIVOS:
  videos:                 "5"                             # FIXO
  estaticos:              "5"                             # FIXO
  carrosseis:             "5"                             # FIXO
LOCALIZACAO:              "{LOCALIZACAO}"                 # Ex: Brasil
FAIXA_IDADE:              "{FAIXA_IDADE}"                 # Ex: 25-65
IDIOMA:                   "{IDIOMA}"                      # Ex: Português
```

---

## 💸 Orçamento

```yaml
ORCAMENTO_INICIAL:        "R$ 100/dia"                    # FIXO: sempre começa em R$100/dia
INCREMENTO_VERBA:         "Até +5% ao dia · após 3 dias estáveis com ROAS ≥ alvo"
DECREMENTO_VERBA:         "Até -50% no dia · após 3 dias com ROAS abaixo do alvo"
LIMIAR_DUPLICACAO:        "{LIMIAR_DUPLICACAO}"           # Ex: ROAS estável ≥ 1.0 por 5+ dias com verba ≥ R$300
ORCAMENTO_TESTE_MINIMO:   "R$ 50/dia por campanha de teste"      # Mínimo absoluto · abaixo, sem dados estatísticos
LIMITE_TESTES_TOTAL:      "≤ 20% do orçamento total"             # Soma de TODAS as campanhas de teste
```

---

## 🎬 Criativos

```yaml
DURACAO_VIDEO:            "30s (ideal 20-25s)"
FORMATOS_VIDEO:           "9:16 (Reels/Stories) + 1:1 (Feed)"
FORMATOS_ESTATICO:        "1:1 + 9:16 + 1.91:1"
FORMATOS_CARROSSEL:       "1:1 · 5-10 cards · último é CTA"
RENOVACAO_CRIATIVOS:      "5 por vez (1/3 do lote) · cada 30 dias"
PADRAO_NOMENCLATURA:      "{NICHO}_{FORMATO}_{HOOK_KEYWORD}_v{N}"
```

---

## 🏷️ Nomenclatura padronizada (ver `06-nomenclatura.md`)

```yaml
SIGLA_PROJETO:            "{XYZ}"                     # 3 letras maiúsculas — ex: LPS, EMG, TRD
PADRAO_CAMPANHA:          "{XYZ}_{DDMMYY}_{TIPO}_{NUMERO}"
PADRAO_CONJUNTO:          "aberto"                    # Padrão LPSG (ou variação justificada)
PADRAO_CRIATIVO:          "{XYZ}_{FORMATO}_{HOOK_KEYWORD}_v{N}"

TIPOS_CAMPANHA:
  PRI:                    "Principal — a que sempre roda"
  ESC:                    "Escala — duplicada da principal"
  TES-CRI:                "Teste de criativo"
  TES-PAG:                "Teste de página (com criativos validados)"
  TES-OFE:                "Teste de oferta"

CODIGOS_FORMATO:
  vid:                    "Vídeo"
  est:                    "Estático"
  car:                    "Carrossel"
```

---

## 🔗 Tracking e ferramentas

```yaml
PIXEL:                    "Meta Pixel + Conversions API (CAPI)"
EVENTOS_MAPEADOS:         "ViewContent · InitiateCheckout · Purchase"
JANELA_ATRIBUICAO:        "7 dias clique · 1 dia visualização"
UTMS_PADRAO:              "utm_source=meta&utm_medium=paid&utm_campaign={NOME_CAMPANHA}&utm_content={CRIATIVO_ID}"
CATALOGO:                 "{CATALOGO}"                    # Necessário pra ASC
DASHBOARD:                "{DASHBOARD}"                   # Onde acompanha as métricas
```

---

## 📋 Composição do time mínimo

```yaml
GESTOR_TRAFEGO:           "{GESTOR}"                      # 1 pessoa cuida da campanha
DESIGNER_CRIATIVOS:       "{DESIGNER}"                    # Produz vídeos/estáticos/carrosseis
COPYWRITER:               "{COPYWRITER}"                  # Escreve hooks e copy dos criativos
ROTINA_REUNIAO:           "Semanal (segunda) · 30 min · revisar métricas e decidir ações"
```

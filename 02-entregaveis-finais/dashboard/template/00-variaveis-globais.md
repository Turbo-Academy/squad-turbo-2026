# 00 · Variáveis Globais — Dashboard

> Fonte da verdade do dashboard. Todas as métricas, alvos e fontes de dados ficam aqui.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"                       # 3 letras MAIÚSCULAS
EDICAO:                   "{EDICAO}"                      # ex: 01/26
DATA_INICIO_CAPTACAO:     "{DATA_CAPT_INICIO}"
DATA_FIM_CAPTACAO:        "{DATA_CAPT_FIM}"
DATA_INICIO_EVENTO:       "{DATA_EVENTO_INICIO}"
DATA_PITCH:               "{DATA_PITCH}"
DATA_ABERTURA_FICHA:      "{DATA_ABERTURA_FICHA}"         # Seg 6h50
DATA_ABERTURA_GERAL:      "{DATA_ABERTURA_GERAL}"         # Seg 7h00
DATA_FECHAMENTO_CARRINHO: "{DATA_FECHAMENTO}"             # Sex 23h59
```

---

## 📊 Métricas-alvo (consolidado de todas as estruturas LPSG)

### 🚦 Cores de status (regras de alerta)

```yaml
VERDE:    "Métrica >= alvo ideal"
AMARELO:  "Métrica entre mínimo e ideal"
VERMELHO: "Métrica < mínimo"
```

### Tráfego (campanha de ingresso)

```yaml
ROAS_INGRESSO:
  minimo: 1.0
  ideal: 1.25

CPM_MAX: 40                    # R$

CTR_MIN: 1.5                   # % (legacy · pode usar ou ir direto pro Hook Rate)

# 3 métricas-chave do criativo (LPSG novo)
HOOK_RATE:                     # Views 3s / Impressões
  minimo: 20                   # %
  ideal: 30
HOLD_RATE:                     # Assistiu 75% / Views 3s
  minimo: 5
  ideal: 10
BODY_RATE:                     # Comprou ingresso / Assistiu 75%
  minimo: 2
  ideal: 5
```

### Página de ingresso

```yaml
CONVERSAO_PAGINA:
  minimo: 5                    # %
  ideal: 7

LCP_MAX: 1.5                   # segundos
LIGHTHOUSE_MOBILE_MIN: 95
PESO_MAX_MB: 1
```

### Aulas (comparecimento e retenção)

```yaml
COMPARECIMENTO_A1_INSCRITOS_MIN: 30   # % dos inscritos comparecem ao vivo
RETENCAO_A2_VS_A1_MIN: 70             # % do pico ao vivo
RETENCAO_A3_VS_A2_MIN: 85
RETENCAO_A4_VS_A3_MIN: 85
RETENCAO_A5_VS_A4_MIN: 85
COMPARECIMENTO_A6_VS_A5_MIN: 130      # pitch infla pelo replay
```

### Conversão de evento

```yaml
PREENCHIMENTO_FICHA:
  minimo: 25                   # % dos compradores
  ideal: 40
CONVERSAO_PITCH_VENDAS:
  minimo: 7                    # %
  ideal: 10
PERCENT_VENDAS_DIA1: 70        # 70%+ no dia 1 = oferta saudável
RECUPERACAO_D1_D7: 10          # 5-15% adicional via closer humano
```

### Oferta

```yaml
ANCORAGEM_STACK_VS_PRECO:
  minimo: 1.5                  # x sobre preço final
  ideal: 2

TAXA_DEVOLUCAO_INCONDICIONAL_MAX: 3   # %
TAXA_DEVOLUCAO_CONDICIONAL_MAX: 1
```

### Mensageria (Meta API)

```yaml
PERCENT_UTILITY_MIN: 80        # 80%+ dos disparos como Utility
TAXA_ENTREGA_MIN: 95           # %
TAXA_LEITURA_MIN: 70           # %
CTA_REACAO_AUDIO_MIN: 40       # % reage com {EMOJI}
```

### Operação (closer humano)

```yaml
SLA_CLOSER_MAX_MIN: 5          # min · resposta a checkout iniciado
TAXA_RESPOSTA_WPP_1A1_MIN: 30  # %
CONVERSAO_RESPOSTA_VENDA_MIN: 10
```

---

## 💰 Economia esperada (preencher com dados do projeto)

```yaml
TICKET_INGRESSO:          "{TICKET_INGRESSO}"             # R$ 62
VALOR_PRODUTO_CHEIO:      "{VALOR_PRODUTO}"               # R$ 25.000
VALOR_PRODUTO_10MIN:      "{VALOR_10MIN}"                 # R$ 12.500 (50% off janela 10min)
VALOR_PRODUTO_3H:         "{VALOR_3H}"                    # R$ 15.000 (40% off)
VALOR_PRODUTO_1DIA:       "{VALOR_1DIA}"                  # R$ 17.500 (30% off)
META_VENDAS:              "{META_VENDAS}"                 # ex: 70 vendas
META_FATURAMENTO:         "{META_FATURAMENTO}"            # ex: R$ 1.000.000
META_INGRESSOS:           "{META_INGRESSOS}"              # ex: 1000
ORCAMENTO_TRAFEGO_MES:    "{ORC_TRAFEGO}"                 # ex: R$ 50.000
```

---

## 🔌 Fontes de dados (modos de input)

```yaml
MODOS_INPUT:
  1_PLANILHA_OFICIAL:
    descricao: "Planilha XLSX padrão Turbo · importação manual ou Sheets ao vivo"
    arquivo: "planilha-lpsg-padrao.xlsx (template em referencia-v1/)"

  2_GOOGLE_SHEETS_AO_VIVO:
    descricao: "Sync automática com Google Sheets · requer servidor local OU deploy"
    requisito: "Planilha publicada como leitor / link de compartilhamento"

  3_API_META_ADS:
    descricao: "Pull direto da Meta Ads API (campanha · criativo · métricas)"
    requisito: "Token de longa duração + WABA configurada"
    metricas_puxadas:
      - ROAS · CPM · CTR · CPC
      - Hook Rate (Views 3s / Impressões)
      - Hold Rate (ThruPlay 75% / Views 3s)
      - Body Rate (Purchase / ThruPlay 75%)
      - Spend · Conversões
      - Custo por janela (Utility · Marketing)

  4_API_HOTMART:
    descricao: "Vendas + carrinho aberto + recuperação"
    metricas_puxadas:
      - Compras (timestamp · cupom · janela)
      - Iniciados sem finalizar (recuperação)
      - Reembolsos
      - Ticket médio

  5_GA4_BIGQUERY:
    descricao: "Conversão da página · scroll · tempo médio"
    metricas_puxadas:
      - Conversão por variação (v1, v2, v3, v4, v5)
      - LCP / INP / CLS
      - Bounce rate

  6_YOUTUBE_LIVE_API:
    descricao: "Pico ao vivo + retenção das aulas"
    metricas_puxadas:
      - Pico simultâneo por aula
      - Espectadores únicos
      - Retenção média
```

> **Default LPSG:** modo 1 (planilha) + modo 6 (YouTube). Modos 3, 4, 5 são opcionais (avançado · requer credenciais).

---

## 🚀 Stack do dashboard (LPSG v2)

```yaml
FRAMEWORK:        "Next.js 14 (App Router)"               # FIXO
LINGUAGEM:        "TypeScript"                            # FIXO
CSS:              "Tailwind CSS 4"                        # FIXO
GRAFICOS:         "Recharts (defaults dark)"
TABELAS:          "TanStack Table v8"
ICONES:           "lucide-react"
DATA_FETCH:       "SWR (cache + revalidação)"
HOSPEDAGEM:       "Vercel"
NODE_VERSION:     "20.x"
PACKAGE_MANAGER:  "pnpm"

# Compatibilidade com v1
HTML_STANDALONE:  "Sim (build script gera HTML único, sem servidor)"
```

---

## 📐 Layout responsivo

```yaml
BREAKPOINTS:
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px

GRID_DESKTOP: "12 cols"
GRID_TABLET:  "6 cols"
GRID_MOBILE:  "1 col"

DARK_MODE:        "default"                                # padrão LPSG
LIGHT_MODE:       "opcional · toggle no header"
```

---

## 🔗 Tracking e integrações

```yaml
META_ADS_TOKEN:           "{META_ADS_TOKEN}"               # secret
META_AD_ACCOUNT_ID:       "{META_AD_ACCOUNT_ID}"
HOTMART_API_TOKEN:        "{HOTMART_API_TOKEN}"
GOOGLE_SHEETS_ID:         "{SHEETS_ID}"                    # compartilhado público
GA4_PROPERTY_ID:          "{GA4_PROPERTY_ID}"
YOUTUBE_LIVE_VIDEO_IDS:   "[A1, A2, A3, A4, A5, A6]"
WABA_BUSINESS_ID:         "{WABA_ID}"                      # WhatsApp Business API
```

---

## 🎯 Default do projeto LPSG (Leo Tabari)

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"
TICKET_INGRESSO:          62              # R$
VALOR_PRODUTO_CHEIO:      25000           # R$
META_INGRESSOS:           1000
META_VENDAS:              70              # 7% de conversão
ORCAMENTO_TRAFEGO_MES:    50000
```

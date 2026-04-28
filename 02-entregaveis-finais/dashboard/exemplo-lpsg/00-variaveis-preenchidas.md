# 00 · Variáveis preenchidas — Exemplo LPSG (Leo Tabari)

> Exemplo do template `00-variaveis-globais.md` preenchido com dados reais do LPSG.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NICHO:                    "Lançamento Pago / Negócios Digitais"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"
EDICAO:                   "01/26"
DATA_INICIO_CAPTACAO:     "2026-05-02"
DATA_FIM_CAPTACAO:        "2026-05-11"
DATA_INICIO_EVENTO:       "2026-05-12"
DATA_PITCH:               "2026-05-18T20:00"
DATA_ABERTURA_FICHA:      "2026-05-19T06:50"
DATA_ABERTURA_GERAL:      "2026-05-19T07:00"
DATA_FECHAMENTO_CARRINHO: "2026-05-23T23:59"
```

---

## 💰 Economia

```yaml
TICKET_INGRESSO:          62              # R$
VALOR_PRODUTO_CHEIO:      25000           # R$ (Acelerador Turbo)
VALOR_PRODUTO_10MIN:      12500           # 50% off (janela ficha 6h50–7h00)
VALOR_PRODUTO_3H:         15000           # 40% off (janela 7h00–10h00)
VALOR_PRODUTO_1DIA:       17500           # 30% off (janela 7h00–23h59)
META_VENDAS:              70              # vendas no carrinho
META_FATURAMENTO:         1500000         # R$ 1.5M
META_INGRESSOS:           1000            # inscritos no evento
ORCAMENTO_TRAFEGO_MES:    50000           # R$ 50k
```

---

## 📊 Métricas-alvo (uso default)

> Usa todos os defaults do `00-variaveis-globais.md` sem alterações.

---

## 🔌 Fontes de dados ativas

```yaml
MODO_PRINCIPAL:           "Google Sheets ao vivo"
MODOS_ATIVOS:
  1_PLANILHA_OFICIAL:     true
  2_GOOGLE_SHEETS_AO_VIVO: true
  3_API_META_ADS:          true            # token configurado
  4_API_HOTMART:           true            # vendas em real-time
  5_GA4_BIGQUERY:          false           # avançado · não usado
  6_YOUTUBE_LIVE_API:      true            # pico ao vivo das aulas
```

---

## 🚀 Stack confirmada

```yaml
FRAMEWORK:                "Next.js 14 (App Router)"
HOSPEDAGEM:               "Vercel · dash.turbo.academy"
DOMINIO:                  "dash.turbo.academy"
HTML_STANDALONE:          true            # gerado pra distribuição aos alunos
```

---

## 🔗 Tracking configurado

```yaml
META_AD_ACCOUNT_ID:       "act_7777777777"
HOTMART_PRODUCT_ID:       "L99999999W"
GOOGLE_SHEETS_ID:         "1abc...xyz"     # Sheets do Leo
YOUTUBE_LIVE_VIDEO_IDS:   "[abc123, def456, ghi789, jkl012, mno345, pqr678]"
WABA_BUSINESS_ID:         "111222333444555"
```

---

## 🎯 Resultado esperado (pós-lançamento)

```yaml
INSCRITOS_ESPERADOS:      ~850            # 85% da meta
ROAS_CAPTACAO_ESPERADO:   ~1.30
COMPARECIMENTO_A1:        ~32%
RETENCAO_MEDIA:           ~85%
VENDAS_DIA1:              ~50             # 70% da meta
VENDAS_TOTAL:             ~70             # 100% da meta
RECUPERACAO_D1_D7:        ~10             # 14% adicional
FATURAMENTO_TOTAL:        ~1.5M           # 100% da meta
```

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Configuração padrão LPSG 01/26.

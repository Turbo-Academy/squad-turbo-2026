# 00 · Variáveis Globais — Páginas

> Fonte da verdade pro projeto de páginas. Preencha aqui primeiro — todos os outros arquivos referenciam estas variáveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"
NICHO:                    "{NICHO}"
SUB_NICHO:                "{SUB_NICHO}"
NOME_EVENTO:              "{NOME_EVENTO}"
SIGLA_EVENTO:             "{SIGLA}"                       # 3 letras MAIÚSCULAS
AVATAR:                   "{AVATAR}"
```

---

## 📅 Datas e horários do evento

```yaml
DATA_INICIO:              "{DATA_INICIO}"                 # Ex: 12/05
DATA_FIM:                 "{DATA_FIM}"                    # Ex: 18/05
HORARIO_AULAS:            "{HORARIO_AULAS}"               # Ex: 7h da manhã
HORARIO_PITCH:            "{HORARIO_PITCH}"               # Ex: 20h (domingo)
TEXTO_DATA_HERO:          "De {DATA_INICIO} a {DATA_FIM} · Sempre às {HORARIO_AULAS}"
```

---

## 💰 Oferta

```yaml
TICKET_INGRESSO:          "{TICKET_INGRESSO}"             # Ex: R$ 62
TEXTO_GARANTIA_HERO:      "Garantia Incondicional: Assista! Se não gostar devolvo seu dinheiro ao final do evento."
```

---

## 🚀 Stack e deploy

```yaml
FRAMEWORK:                "Next.js 14 (App Router)"       # FIXO
LINGUAGEM:                "TypeScript"                    # FIXO
CSS:                      "Tailwind CSS 4"                # FIXO
FONTES:                   "Inter (Google Fonts) + Manrope" # Padrão LPSG
HOSPEDAGEM:               "Vercel"                        # FIXO
NODE_VERSION:             "20.x"
PACKAGE_MANAGER:          "pnpm"                          # ou npm/yarn
```

---

## 📐 Variações (5 mínimas)

```yaml
QUANTIDADE_VARIACOES:     "5 (mínimo) · obrigatório"
ROTAS:
  - "/v1"
  - "/v2"
  - "/v3"
  - "/v4"
  - "/v5"
EIXOS_VARIACAO:
  HEADLINE:
    v1: "Pergunta polêmica"
    v2: "Prova em números"
    v3: "Declaração contra-intuitiva"
    v4: "Antes vs depois"
    v5: "Confissão / vulnerabilidade"
  ESTRUTURA_DOR:
    v1: "Lista de R$ perdidos"
    v2: "Lista de R$ perdidos"
    v3: "6 cards de afirmações"
    v4: "6 cards de afirmações"
    v5: "Lista de R$ perdidos"
  COR_DESTAQUE:
    v1: "Laranja (#FF6B00)"
    v2: "Vermelho (#E53935)"
    v3: "Ciano (#00B4D8)"
    v4: "Amarelo (#FFB300)"
    v5: "Roxo (#7C3AED)"
  COPY_CTA:
    v1: "QUERO ME INSCREVER POR {TICKET_INGRESSO}"
    v2: "QUERO {RESULTADO_PRINCIPAL}"
    v3: "GARANTIR MINHA VAGA AGORA"
    v4: "QUERO TER {TRANSFORMACAO}"
    v5: "BORA TRANSFORMAR ISSO"
```

---

## 📊 Métricas-alvo (todas as variações)

```yaml
CONVERSAO_PAGINA_MIN:     "≥ 5%"
CONVERSAO_PAGINA_IDEAL:   "≥ 7%"
LCP_MAX:                  "< 1.5s"                        # mais rigoroso que padrão (≤2s)
INP_MAX:                  "< 200ms"
CLS_MAX:                  "< 0.05"                        # mais rigoroso que padrão (<0.1)
PESO_TOTAL_MAX:           "< 1 MB (mobile)"
PESO_HERO_IMG_MAX:        "< 150 KB (WebP/AVIF)"
LIGHTHOUSE_MIN:           "≥ 95 (mobile)"
```

---

## 📱 Mobile-first

```yaml
PRIORIDADE:               "Mobile sempre · desktop depois"
BREAKPOINT_BASE:          "375px (iPhone SE / mínimo)"
BREAKPOINTS:
  sm:                     "640px"
  md:                     "768px"
  lg:                     "1024px"
  xl:                     "1280px"
TAMANHO_FONTE_BASE:       "16px (não usar < 14px em nenhum lugar)"
ALTURA_BOTAO_MOBILE:      "≥ 56px (touch target Apple HIG)"
ESPACAMENTO_TOQUES:       "≥ 8px entre alvos clicáveis"
```

---

## 🔗 Tracking obrigatório

```yaml
META_PIXEL_ID:            "{META_PIXEL_ID}"
META_CAPI_TOKEN:          "{META_CAPI_TOKEN}"
GOOGLE_TAG_MANAGER:       "{GTM_ID}"
GOOGLE_ANALYTICS:         "{GA4_ID}"
EVENTOS_PADRAO:           "PageView · ViewContent · InitiateCheckout · Purchase"
UTMS_PROPAGADAS:          "Sim · todas as UTMs entram no checkout"
```

---

## 🌐 Domínio e estrutura de URL

```yaml
DOMINIO:                  "{SUBDOMINIO}.{DOMINIO_RAIZ}"   # Ex: lp.dominio.com.br
PADRAO_URL:               "{DOMINIO}/v{N}"                # Ex: lp.dominio.com.br/v3
HOMEPAGE_REDIRECT:        "redireciona / → /v{ATUAL}"     # Variação principal padrão
```

---

## 📝 Ficha de Interesse (etapas 11 do funil de consciência)

> Variáveis usadas em `08-ficha-interesse.md`. Preencha conforme produto principal.

```yaml
# === Identidade do produto principal ===
NOME_PRODUTO_PRINCIPAL:    "{NOME_PRODUTO_PRINCIPAL}"        # Ex: Acelerador Turbo
TICKET_PRODUTO:            "{TICKET_PRODUTO}"                # Ex: R$ 25 mil
PRAZO_ACOMPANHAMENTO:      "{PRAZO_ACOMPANHAMENTO}"          # Ex: 3 meses
ROI_MULTIPLO_MIN:          "{ROI_MIN}"                       # Ex: 3
ROI_MULTIPLO_MAX:          "{ROI_MAX}"                       # Ex: 5
PRAZO_ROI:                 "{PRAZO_ROI}"                     # Ex: próximos meses
METODO:                    "{METODO}"                        # Ex: Lançamento Pago Semanal

# === Posicionamento ===
TEMPO_LEITURA:             "{TEMPO_LEITURA}"                 # Ex: menos de 3 minutos
NOME_PROCESSO_SELECAO:     "{NOME_PROCESSO}"                 # Ex: seleção, candidatura
DIA_RITUAL_AO_VIVO:        "{DIA_RITUAL}"                    # Ex: sábado
RITUAL_AO_VIVO:            "{RITUAL}"                        # Ex: tira-dúvidas

# === Faixas (preenchidas conforme nicho) ===
FAIXAS_TEMPO_MERCADO:
  - "Ainda não comecei ou menos de 6 meses"
  - "De 6 meses a 1 ano"
  - "De 1 a 2 anos"
  - "Mais de 2 anos"

FAIXAS_INVESTIMENTO_EDU:
  - "Menos de R$ 1 mil"
  - "De R$ 1 mil a R$ 5 mil"
  - "De R$ 5 mil a R$ 15 mil"
  - "Acima de R$ 15 mil"

FAIXAS_INVESTIMENTO_MIDIA:
  - "Não invisto em tráfego pago"
  - "Até R$ 3 mil/mês"
  - "De R$ 3 mil a R$ 10 mil/mês"
  - "De R$ 10 mil a R$ 30 mil/mês"
  - "De R$ 30 mil a R$ 50 mil/mês"
  - "Acima de R$ 50 mil/mês"

FAIXAS_FATURAMENTO:
  - "Ainda não tenho faturamento relevante"
  - "Até R$ 5 mil/mês"
  - "De R$ 5 mil a R$ 20 mil/mês"
  - "De R$ 20 mil a R$ 50 mil/mês"
  - "Acima de R$ 50 mil/mês"

# === Listas dependentes do nicho ===
ESTAGIOS_OPERACIONAIS:    # 4 estágios em ordem crescente de maturidade
  - "{ESTAGIO_1_INICIANTE}"
  - "{ESTAGIO_2_INCONSISTENTE}"
  - "{ESTAGIO_3_TRAVADO_NA_ESCALA}"
  - "{ESTAGIO_4_PRECISA_METODO}"

FUNIS_DO_NICHO:           # checkbox multi · sempre incluir "Não rodo nenhum"
  - "{FUNIL_1}"
  - "{FUNIL_2}"
  - "{FUNIL_3_NOSSO_METODO}"
  - "{FUNIL_4}"
  - "{FUNIL_N}"
  - "Não rodo nenhum funil ainda"

# === Tracking ficha ===
PIXEL_VENDAS:              "{PIXEL_VENDAS_ID}"               # Ex: AbCdEfGh1234567890Xy (VK Digital)
WEBHOOK_FICHA:             "{WEBHOOK_FICHA_ENVIADA}"         # n8n endpoint POST /ficha-interesse
EVENTO_CAPI_QUALIFIED:     "LeadQualified"                   # custom event quando tier = HOT
URL_OBRIGADO:              "/ficha-de-interesse/obrigado"
```

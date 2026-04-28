# 00 · Variáveis preenchidas — Páginas LPSG Leo Tabari

> Versão preenchida com dados reais do LPSG do Leo Tabari / Turbo Academy. Use como referência pra preencher seu próprio template.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NICHO:                    "Marketing digital"
SUB_NICHO:                "Lançamento pago para infoprodutores"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPS"                           # 3 letras MAIÚSCULAS
AVATAR:                   "Infoprodutor 30-50 que já fatura R$5-50k/mês com lançamento gratuito ou perpétuo, mas trava na escala e queima dinheiro em CPL."
```

---

## 📅 Datas e horários do evento

```yaml
DATA_INICIO:              "12/05"
DATA_FIM:                 "18/05"
HORARIO_AULAS:            "7h da manhã"
HORARIO_PITCH:            "20h (domingo)"
TEXTO_DATA_HERO:          "De 12/05 a 18/05 · Sempre às 7h da manhã"
```

---

## 💰 Oferta

```yaml
TICKET_INGRESSO:          "R$ 62"
TEXTO_GARANTIA_HERO:      "Garantia Incondicional: Assista! Se não gostar devolvo seu dinheiro ao final do evento."
```

---

## 🚀 Stack e deploy

```yaml
FRAMEWORK:                "Next.js 14 (App Router)"
LINGUAGEM:                "TypeScript"
CSS:                      "Tailwind CSS 4"
FONTES:                   "Inter (Google Fonts) + Manrope"
HOSPEDAGEM:               "Vercel"
NODE_VERSION:             "20.x"
PACKAGE_MANAGER:          "pnpm"
DOMINIO:                  "lp.leotabari.com.br"           # exemplo
```

---

## 📐 Matriz das 5 variações (LPSG)

```yaml
QUANTIDADE_VARIACOES:     "5 (mínimo)"

ROTAS:
  - "lp.leotabari.com.br/v1"
  - "lp.leotabari.com.br/v2"
  - "lp.leotabari.com.br/v3"
  - "lp.leotabari.com.br/v4"
  - "lp.leotabari.com.br/v5"

VARIACOES:

  v1:
    HEADLINE_TIPO:        "Pergunta polêmica"
    HEADLINE:             "Por que CPL gratuito está te falindo (e ninguém te conta)?"
    SUBHEAD:              "O lançamento pago semanal gravado é a evolução natural do mercado. Vou te mostrar como aplicar no seu negócio."
    DOR:                  "Lista R$ perdidos"
    COR_DESTAQUE:         "Laranja (#FF6B00)"
    COR_OKLCH:            "oklch(70% 0.20 50)"
    CTA_PRIMARIO:         "QUERO ME INSCREVER POR R$ 62"
    TOPBAR:               "🔥 VAGAS SE ESGOTANDO"

  v2:
    HEADLINE_TIPO:        "Prova em números"
    HEADLINE:             "5.165 leads pagaram pelo meu tráfego mês passado. Zero CPL queimado."
    SUBHEAD:              "Como faço mais de R$1 milhão todos os meses com lançamento pago — e como você pode replicar."
    DOR:                  "Lista R$ perdidos"
    COR_DESTAQUE:         "Vermelho (#E53935)"
    COR_OKLCH:            "oklch(60% 0.22 25)"
    CTA_PRIMARIO:         "QUERO FATURAR R$ 100K POR MÊS"
    TOPBAR:               "🔥 71% PREENCHIDO"

  v3:
    HEADLINE_TIPO:        "Declaração contra-intuitiva"
    HEADLINE:             "Todo mundo fala que lançamento gratuito escala. Tá errado."
    SUBHEAD:              "Existe um modelo que paga o próprio tráfego e gera margem maior. Vou te mostrar em 7 dias."
    DOR:                  "6 cards de afirmações"
    COR_DESTAQUE:         "Ciano (#00B4D8)"
    COR_OKLCH:            "oklch(70% 0.15 220)"
    CTA_PRIMARIO:         "GARANTIR MINHA VAGA AGORA"
    TOPBAR:               "🔥 ÚLTIMOS DIAS"

  v4:
    HEADLINE_TIPO:        "Antes vs depois"
    HEADLINE:             "De R$ 8k pra R$ 1.5M/mês — sem aumentar a equipe."
    SUBHEAD:              "O passo-a-passo que aplicamos com 10 especialistas. Você pode replicar no seu nicho."
    DOR:                  "6 cards de afirmações"
    COR_DESTAQUE:         "Amarelo (#FFB300)"
    COR_OKLCH:            "oklch(80% 0.18 90)"
    CTA_PRIMARIO:         "QUERO TER A LIBERDADE FINANCEIRA"
    TOPBAR:               "🔥 INSCRIÇÕES ABERTAS"

  v5:
    HEADLINE_TIPO:        "Confissão"
    HEADLINE:             "Quase fechei minha empresa por causa disso. Hoje uso a favor."
    SUBHEAD:              "A virada que tirou minha empresa do prejuízo e levou pra R$1M/mês — e como você evita o mesmo erro."
    DOR:                  "Lista R$ perdidos"
    COR_DESTAQUE:         "Roxo (#7C3AED)"
    COR_OKLCH:            "oklch(60% 0.20 290)"
    CTA_PRIMARIO:         "BORA TRANSFORMAR ISSO"
    TOPBAR:               "🔥 TURMA NOVA"
```

---

## 📊 Métricas-alvo

```yaml
CONVERSAO_PAGINA_MIN:     "≥ 5%"
CONVERSAO_PAGINA_IDEAL:   "≥ 7%"
LCP_MAX:                  "< 1.5s"
INP_MAX:                  "< 200ms"
CLS_MAX:                  "< 0.05"
PESO_TOTAL_MAX:           "< 1 MB (mobile)"
PESO_HERO_IMG_MAX:        "< 150 KB (WebP/AVIF)"
LIGHTHOUSE_MIN:           "≥ 95 (mobile)"
```

---

## 🔗 Tracking real do projeto

```yaml
META_PIXEL_ID:            "{a definir antes do go-live}"
META_CAPI_TOKEN:          "{em variável de ambiente — secret}"
GOOGLE_TAG_MANAGER:       "GTM-XXXXXXX"
GOOGLE_ANALYTICS:         "G-XXXXXXXXXX"
EVENTOS_PADRAO:           "PageView · ViewContent · InitiateCheckout · Purchase"
UTMS_PROPAGADAS:          "utm_source · utm_medium · utm_campaign · utm_content · xcod"
CHECKOUT_URL:             "https://pay.hotmart.com/{...}"
```

---

## 📋 Banco de dores (LPSG)

### Lista R$ perdidos (v1, v2, v5)

```
VOCÊ NÃO TEM IDEIA DO PESADELO!

❌ Lançamento gratuito sem captação paga       → R$ 30.000 / mês em CPL queimado
❌ Pago mensal com mesmo trabalho do gratuito  → R$ 50.000 / lançamento de prejuízo
❌ Sem otimização semanal por métrica          → R$ 25.000 / mês em criativo ruim
❌ Página convertendo abaixo de 3%             → R$ 18.000 / mês em escala perdida
─────────────────────────────────────────────────────────────────────────────
TOTAL                                           + R$ 123.000 / mês
```

### 6 cards de afirmações (v3, v4)

```
Infoprodutor, alguma das afirmações abaixo te incomoda?

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Faturamento      │  │ Dependência do   │  │ Equipe inflada   │
│ estagnado        │  │ Expert 24/7      │  │ pra escalar      │
└──────────────────┘  └──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ ROAS travado     │  │ Mensageria sem   │  │ Conversão de     │
│ em 1.5           │  │ mensageria       │  │ produto < 5%     │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

---

## 🏆 Banco de promessas (todas as variações)

```
O QUE MUDA QUANDO VOCÊ DOMINA O LPSG:

✓ Tráfego pago com ROAS ≥ 1.0 (lead paga seu tráfego)
✓ Evento que converte 7-10% sem depender do expert 24/7
✓ Equipe enxuta de 4 pessoas tocando 10 lançamentos/semana
✓ Otimização semanal por métrica (não tentativa-e-erro)
✓ Estrutura replicável em qualquer nicho
✓ Sem reinventar a roda toda mês
```

---

## 🎓 As 6 aulas (lessons)

```yaml
LESSONS:
  - n: 1
    titulo: "Aula 1 - O Lançamento Pago que é capaz de faturar mais de 1 milhão de reais todos os meses"
    desc: "Os fundamentos do método - é possível, é pra mim"

  - n: 2
    titulo: "Aula 2 - Criando seu evento LPSG com o Claude Code"
    desc: "Construção prática do seu primeiro lançamento"

  - n: 3
    titulo: "Aula 3 - Automatizando tudo para rodar com equipe enxuta"
    desc: "Marco de Resultado 1 - se parar aqui, já valeu"

  - n: 4
    titulo: "Aula 4 - Onde e Quando Otimizar o Funil e como acelerar 5x"
    desc: "Pré-pitch + abertura da ficha de interesse"

  - n: 5
    titulo: "Aula 5 - Como Criar Campanhas de Tráfego que Convertem (sem gestor)"
    desc: "Marco de Resultado 2 - kit completo nas mãos"

  - n: 6
    titulo: "Aula 6 - CHECKLIST COMPLETO e Super Bônus para o Acelerador Turbo"
    desc: "Pitch + bônus tsunami + abertura do carrinho"
```

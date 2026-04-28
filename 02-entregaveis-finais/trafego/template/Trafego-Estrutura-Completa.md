# Template — Tráfego do LPSG

> Template genérico de tráfego do **Lançamento Pago Semanal Gravado (LPSG)**. Substitua as variáveis entre chaves `{ }` pelo contexto do projeto.

---

## 🎯 Filosofia em 3 frases

1. **Tráfego pago no LPSG só vende ingresso pro evento.** Não tem campanha de produto, retargeting ou recuperação por anúncio.
2. **Estrutura é radicalmente simples:** 1 campanha · 1 conjunto · 15 criativos (5 vídeo + 5 estático + 5 carrossel) · público aberto (Advantage+ Audience).
3. **Otimização é uma alavanca só:** sobe ou desce o orçamento diário. Escala = duplica a campanha. Teste = campanha separada.

---

## 📁 Arquivos

```
template/
├── README.md                       ← você está aqui
├── 00-variaveis-globais.md         ← preencha primeiro
├── 01-modelo-mental.md             ← por que só tráfego de ingresso
├── 02-estrutura-campanha.md        ← ASC + 1 conjunto + 15 criativos
├── 03-criativo-ganhador.md         ← 3 partes: Hook · Hold · Body
├── 04-pagina-ingresso.md           ← 10 blocos · conv. mínima 5% · teste com criativos validados
├── 05-otimizacao-diagnostico.md    ← sobe/desce verba · duplica · diagnóstico em 3 perguntas
└── 06-nomenclatura.md              ← padrão de nomes (campanhas, conjuntos, criativos)
```

---

## 🔄 Fluxo de uso

1. **Preencha `00-variaveis-globais.md`** — fonte da verdade
2. **Leia `01-modelo-mental.md`** — entende por que a estrutura é simples
3. **Configure a campanha por `02-estrutura-campanha.md`** — ASC, R$100/dia, 15 criativos
4. **Produza os 15 criativos por `03-criativo-ganhador.md`** — 5 vídeo + 5 estático + 5 carrossel
5. **Suba a página por `04-pagina-ingresso.md`** — 10 blocos obrigatórios
6. **Otimize semanalmente por `05-otimizacao-diagnostico.md`** — 1 ação por semana

---

## ⚙️ Princípios não-negociáveis

| # | Princípio | Por quê |
|---|---|---|
| 1 | **Só tráfego pra ingresso** | Pitch e produto convertem via evento + mensageria |
| 2 | **Advantage+ Shopping** | Aprende mais rápido com sinal único |
| 3 | **Público aberto sempre** | ASC otimiza melhor sem segmentação manual |
| 4 | **15 criativos: 5+5+5** | Variedade de formato sem diluir aprendizado |
| 5 | **R$ 100/dia inicial** | Permite Advantage+ aprender sem queimar |
| 6 | **Otimização = sobe/desce verba** | A única alavanca que não destrói aprendizado |
| 7 | **Escala = duplicar campanha** | Não inflar a original (reset garantido) |
| 8 | **Teste = campanha separada** | Página testada com criativos JÁ VALIDADOS |
| 9 | **3 perguntas pra diagnóstico** | ROAS ruim? Hook/Hold/Body ruim? Conversão página ruim? |

---

## 🎯 Métricas-alvo consolidadas

### Campanha
| Indicador | Mínimo | Ideal |
|---|---|---|
| ROAS de ingresso | 1.0 | 1.25+ |
| CPM | — | ≤ R$ 40 |

### Criativo (3 métricas-chave)
| Indicador | Mínimo | Ideal | Como calcular |
|---|---|---|---|
| **Hook Rate** | 20% | 30%+ | Views 3s / Impressões |
| **Hold Rate** | 5% | 10%+ | Assistiu 75% do vídeo / Views 3s |
| **Body Rate** | 2% | 5%+ | Comprou ingresso / Assistiu 75% |

### Página
| Indicador | Mínimo | Ideal |
|---|---|---|
| Conversão | **5%** (não aceita menos) | 7%+ |

### Evento (não é tráfego)
| Indicador | Mínimo | Ideal |
|---|---|---|
| Conversão pitch → compra | 7% | 10% |

---

## 🚫 O que NÃO existe no LPSG

- ❌ Campanha de retargeting
- ❌ Campanha de produto
- ❌ Campanha de recuperação
- ❌ Lookalike de comprador
- ❌ Públicos manuais segmentados
- ❌ CBO entre conjuntos
- ❌ Múltiplos conjuntos no mesmo objetivo
- ❌ Escalar verba dentro da campanha original (use duplicação)

> A simplicidade é a chave. Quanto mais "estratégico" alguém faz a estrutura, mais quebra o aprendizado do Advantage+.

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Estrutura validada em 10+ nichos no último ano.
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
# 01 · Modelo Mental — Tráfego do LPSG

> A filosofia. Ler com calma — quem entende isso aqui, não cai nos erros mais comuns.

---

## 🎯 Princípio central

**Tráfego pago no LPSG existe para uma única coisa: vender ingresso pro evento.**

Não tem campanha de produto. Não tem retargeting. Não tem lookalike. Não tem recuperação por anúncio. **Só captação de ingresso.**

O resto do funil — pitch, recuperação, conversão do produto — é resolvido **pelo evento e pela mensageria**, não por mais tráfego.

---

## 🪜 Por que só ingresso?

### A grande sacada do LPSG

> *"Se o lead paga o ingresso, ele paga seu tráfego."*

Isso muda **tudo**:

- ✅ Você **não queima dinheiro** esperando o pitch
- ✅ Cada R$ investido **retorna na semana** (ROAS de ingresso ≥ 1.0)
- ✅ A oferta do produto vira **margem pura** (sem CAC pra recuperar)
- ✅ O algoritmo aprende com **leads que pagaram** — não com lead barato

### Por que não rodar campanha de produto também?

| Argumento | Por que é falso no LPSG |
|---|---|
| "Mais campanha = mais venda" | Quebra o aprendizado da campanha de ingresso |
| "Retargeting converte mais" | O retargeting já existe — é a mensageria do evento |
| "Lookalike de comprador acelera" | Volume baixo de comprador (R$25k) = LAL inútil |
| "Recuperação dá uns 5% extra" | Comercial humano + WhatsApp resolvem com mais qualidade |

**Regra de ouro:** complexidade é inimiga da escala. Uma campanha rodando bem > 5 campanhas medíocres.

---

## 🧱 A estrutura é radicalmente simples

```
1 CAMPANHA (Advantage+ Shopping)
   └── 1 CONJUNTO DE ANÚNCIOS (público aberto)
        └── 15 CRIATIVOS (5 vídeos + 5 estáticos + 5 carrosséis)
```

**Por que não complica?**
- Advantage+ aprende mais rápido com sinal único
- Público aberto deixa o algoritmo encontrar quem compra
- 15 criativos dão variedade sem diluir a aprendizagem

---

## ⚙️ Como otimização e escala funcionam

| Ação | Como se faz no LPSG |
|---|---|
| **Otimizar** | Sobe ou desce a verba diária da campanha |
| **Testar criativo novo** | Coloca dentro da própria campanha |
| **Escalar** | **Duplica** a campanha trocando os criativos |
| **Testar página** | Campanha **de teste separada** com criativos **já validados** |

**Não se faz no LPSG:**
- ❌ CBO entre conjuntos
- ❌ Públicos segmentados manualmente
- ❌ Lookalike específico
- ❌ Retargeting de página
- ❌ Escalar verba acima de +5%/dia (escala = duplicar campanha, não inflar a antiga)

---

## 🎯 A única métrica que importa

**ROAS de ingresso ≥ 1.0**

Se a campanha está com ROAS ≥ 1.0:
- Sobe a verba
- Duplica e expande criativo

Se está com ROAS < 1.0:
- Desce a verba
- Pausa criativos com CTR < 1.5%
- Renova criativos

**Tudo que não é isso é distração.**

---

## 📉 Quando NÃO mexer no tráfego

| Sintoma | Por quê **não** é problema de tráfego |
|---|---|
| Conversão do evento baixa | Problema do evento (aulas) — arruma lá |
| Pitch não vende | Problema do pitch (oferta/stack) — arruma lá |
| Carrinho aberto sem conversão | Problema da oferta/bônus — arruma lá |
| Comparecimento ao vivo baixo | Problema da mensageria — arruma lá |

> O tráfego **só** entrega ingressos vendidos. Tudo depois disso é responsabilidade de outra peça do funil.

---

## 🔄 Como o tráfego conversa com o ciclo semanal

```
SEG ──── TER ──── QUA ──── QUI ──── SEX ──── SÁB ──── DOM ──── SEG (próximo ciclo)
 ┃                                                     ┃
 ▼                                                     ▼
 Tráfego rodando 24/7 ────────────────────────────────► (mantém rodando)
 (campanha de ingresso, sem pausar)

                                                  PITCH 20h
                                                  (sem campanha nova,
                                                   mensageria + comercial assumem)
```

**Tráfego não pausa nunca.** A campanha de ingresso roda **perpétua, 7 dias por semana**, alimentando os eventos da próxima semana e da seguinte.
# 02 · Estrutura de Campanha

> Uma campanha. Um conjunto. 15 criativos. Simples assim.

---

## 🏗️ A estrutura única do LPSG

```
📦 CAMPANHA: Advantage+ Shopping (ASC)
│   Orçamento inicial: R$ {ORCAMENTO_INICIAL}/dia
│
└── 📁 1 CONJUNTO DE ANÚNCIOS
    │   Público: ABERTO (Advantage+ Audience)
    │
    └── 🎬 15 CRIATIVOS
        ├── 🎥 5 vídeos
        ├── 🖼️ 5 estáticos
        └── 🎠 5 carrosséis
```

**É isso. Não tem mais nada.**

---

## ⚙️ Configurações exatas (Meta Ads)

### Campanha

| Campo | Valor |
|---|---|
| **Tipo** | Advantage+ Shopping (ASC) |
| **Objetivo** | Vendas |
| **Evento de otimização** | Compra |
| **Orçamento** | Diário · começa em **R$ {ORCAMENTO_INICIAL}/dia** |
| **Estratégia de lance** | Custo mais baixo (sem teto) |
| **Categoria de anúncios especiais** | Nenhuma |

### Conjunto único

| Campo | Valor |
|---|---|
| **Público** | **Advantage+ Audience** (público aberto) |
| **Localização** | {LOCALIZACAO} |
| **Idade** | {FAIXA_IDADE} (ex: 25-65) |
| **Idioma** | {IDIOMA} |
| **Posicionamentos** | Advantage+ placements (todos automáticos) |
| **Janela de atribuição** | 7 dias clique · 1 dia visualização |
| **Otimização de entrega** | Compra |

> **Regra de ouro do público:** Advantage+ Audience com ZERO segmentação manual. Sem interesses, sem comportamento, sem exclusão complexa. Deixe o algoritmo decidir.

---

## 🎬 Os 15 criativos (composição obrigatória)

### Distribuição por formato

| Formato | Quantidade | Função |
|---|---|---|
| 🎥 **Vídeo** | 5 | Capta atenção e converte com narrativa |
| 🖼️ **Estático** | 5 | Mensagem direta + identidade visual |
| 🎠 **Carrossel** | 5 | Storytelling em sequência ou prova acumulada |

### Por que essa proporção?

- **Vídeo** ainda é o que mais escala em conversão
- **Estático** entra onde o vídeo não cabe (placements diversos)
- **Carrossel** é o mais barato em CPM e funciona bem em retenção

**Os 3 formatos juntos** dão ao Advantage+ liberdade pra encontrar o melhor combo por público que ele identifica.

### Como nomear os criativos

```
{NICHO}_{FORMATO}_{HOOK_KEYWORD}_v{NUMERO}

Exemplos:
LPSG_video_milhao_v1
LPSG_estatico_pague_v3
LPSG_carrossel_3etapas_v2
```

Padronização ajuda o time a saber o que está rodando sem entrar no Ads Manager.

---

## 💰 Orçamento e ramp-up

### Início

> **Sempre começa em R$ {ORCAMENTO_INICIAL}/dia.**
> Não importa o tamanho do projeto, não importa a meta — começa em R$100/dia (referência LPSG).

### Por que R$100/dia?

- Permite Advantage+ aprender em 3-5 dias
- Não queima orçamento se a oferta estiver errada
- Garante volume mínimo de impressões nos 15 criativos
- Dá pra avaliar dados estatísticos sem investimento alto

### Quando subir / descer

| Sinal | Ação |
|---|---|
| ROAS ≥ {ROAS_ALVO_INGRESSO} por **3 dias seguidos** | **Sobe verba** — até **+5% ao dia** |
| ROAS < {ROAS_ALVO_INGRESSO} por **3 dias seguidos** | **Desce verba** — até **-50% ao dia** |
| ROAS travado em ~1.0 por 7+ dias | **Renova criativos** (mantém verba) |
| ROAS subindo + verba já em patamar alto | **Duplica a campanha** (escala lateral) |

> **Regra das duas pontas:**
> - **Subir é lento** (até 5%/dia) — preserva o aprendizado do Advantage+
> - **Descer é rápido** (até 50%/dia) — corta prejuízo sem destruir histórico

---

## 📈 Como escalar (a regra do "duplicar")

A escala no LPSG **não é via aumento de verba** dentro da campanha existente. É via **duplicação**.

### Quando duplicar?

- Campanha original com ROAS estável ≥ {ROAS_ALVO_INGRESSO} por **5+ dias**
- Verba já em pelo menos R$ 300-500/dia
- Há criativos novos validados pra entrar

### Como duplicar

1. **Duplica** a campanha inteira (mantém estrutura)
2. **Troca todos os criativos** pra um novo lote de 15 (vídeo/estático/carrossel)
3. Coloca a duplicada com R$ 100/dia também
4. Roda em paralelo com a original
5. Quando a duplicada validar (3-5 dias com ROAS bom), começa a subir verba dela
6. Repetir conforme escala

### Por que duplicar e não inflar?

- Mantém aprendizado original intacto
- Evita reset de fase de aprendizado
- Permite comparar criativos antigos vs novos
- Cria redundância (se uma travar, a outra mantém vendas)

---

## 🧪 Campanha de teste (separada)

Para **testes** — seja de criativos novos ou de páginas — cria-se uma **campanha separada**, não se mexe na principal.

### Quando usar campanha de teste?

| Cenário | Como usar |
|---|---|
| **Testar criativos novos** | Campanha de teste com **R$ 50/dia mínimo**, criativos novos, mesma estrutura ASC |
| **Testar página nova** | Campanha de teste com **R$ 50/dia mínimo** + **criativos já validados**, apontando pra página nova |
| **Testar nova oferta** | Campanha de teste com **R$ 50/dia mínimo**, criativos novos da oferta, página da oferta |

### Regras de orçamento das campanhas de teste

1. **Mínimo de R$ 50/dia por campanha de teste** — abaixo disso, dados estatísticos não fecham
2. **Soma de todas as campanhas de teste ≤ 20% do orçamento total** — testes não podem comer a verba da principal
3. Se o teto de 20% estourar, **desativa o teste menos prioritário** antes de subir um novo

> **Exemplo prático:** se a campanha principal está em R$ 1.000/dia, todas as campanhas de teste somadas não podem passar de **R$ 200/dia** (até 4 testes a R$ 50/dia, ou 2 testes a R$ 100/dia).

### Por que separar?

> Misturar teste com campanha principal **destrói o aprendizado** e contamina os dados. Em campanha de teste, você isola a variável que está testando.

### Regra do teste de página

> Use **criativos já validados** (CTR ≥ {CTR_IDEAL}) na campanha de teste de página.
> Assim, qualquer queda na conversão final é **culpa da página**, não do criativo.

---

## 📋 Checklist de setup

- [ ] Pixel Meta + CAPI instalados e validados
- [ ] Eventos de conversão mapeados (ViewContent, InitiateCheckout, Purchase)
- [ ] Conta de anúncios sem restrições
- [ ] 15 criativos prontos (5 vídeo + 5 estático + 5 carrossel)
- [ ] Página de ingresso publicada e estável (LCP < 2s)
- [ ] UTMs padronizadas em todos os links
- [ ] Catálogo de produtos configurado (necessário pra ASC)
- [ ] Advantage+ Shopping selecionado na criação
- [ ] Advantage+ Audience ativo no conjunto
- [ ] Orçamento R$ 100/dia configurado
- [ ] Janela de atribuição: 7 dias clique / 1 dia visualização

---

## 🚨 Erros que mata o método

| Erro | Por quê é fatal |
|---|---|
| Criar 3 conjuntos (frio + RT + LAL) | Quebra o aprendizado do ASC |
| Segmentar público manualmente | Limita o algoritmo |
| Misturar 30 criativos no mesmo conjunto | Sinal se dilui |
| Mexer no público existente | ASC reseta a fase de aprendizado |
| Pausar a campanha pra "ajustar" | Algoritmo perde histórico |
| Subir verba acima de 5% num único dia | Reset total + desempenho ruim |
| Inflar a campanha original em vez de duplicar | Desperdício de oportunidade de teste |
| Testar página na campanha principal | Contamina dados |
# 03 · Criativo Ganhador

> 15 criativos no LPSG: 5 vídeos + 5 estáticos + 5 carrosséis. Toda a anatomia se reduz a **3 partes** medidas por **3 métricas-chave**.

---

## 🎬 Anatomia em 3 partes

| Parte | Função | Métrica que mede |
|---|---|---|
| **1. Hook** | Parar o scroll nos primeiros segundos | **Hook Rate** (≥ {HOOK_RATE_MIN} · ideal ≥ {HOOK_RATE_IDEAL}) |
| **2. Hold** | Segurar atenção após o hook | **Hold Rate** (≥ {HOLD_RATE_MIN} · ideal ≥ {HOLD_RATE_IDEAL}) |
| **3. Body** | Levar pra ação (clique → compra) | **Body Rate** (≥ {BODY_RATE_MIN} · ideal ≥ {BODY_RATE_IDEAL}) |

> **Por que só 3 partes?** Porque cada parte tem **uma métrica única e clara** que diz se ela funciona ou não. Anatomia simples = diagnóstico simples = correção rápida.

---

## 1️⃣ HOOK — O Gancho

**O que é:** os primeiros segundos do criativo (vídeo: 0-3s · estático: primeiro impacto visual · carrossel: card 1).

**Função:** **parar o scroll**. Se o hook falha, o resto não importa.

### Métrica: Hook Rate

```
Hook Rate = (Visualizações de 3s) / (Impressões) × 100
```

| Faixa | Avaliação | Ação |
|---|---|---|
| < {HOOK_RATE_MIN} | ❌ Ruim | Pausar criativo · refazer hook |
| {HOOK_RATE_MIN}-{HOOK_RATE_IDEAL} | ⚠️ Aceitável | Manter · testar variação |
| ≥ {HOOK_RATE_IDEAL} | ✅ Ótimo | Manter · usar de referência |

> **Alvo LPSG:** mínimo **{HOOK_RATE_MIN}** (20%) · ideal acima de **{HOOK_RATE_IDEAL}** (30%).

### 5 tipos de hook validados

| # | Tipo | Estrutura | Quando usar |
|---|---|---|---|
| 1 | **Pergunta polêmica** | "Por que {CRENCA_COMUM} é mentira?" | Avatar com objeção forte |
| 2 | **Prova em números** | "{NUMERO_ESPECIFICO} — e aqui está o que ninguém te contou" | Avatar cético |
| 3 | **Declaração contra-intuitiva** | "Todo mundo fala que {X}. Tá errado." | Avatar saturado de conteúdo igual |
| 4 | **Antes vs depois** | Visual da transformação | Avatar visual / quer prova rápida |
| 5 | **Confissão / vulnerabilidade** | "Eu errei muito antes de descobrir isso." | Avatar emocional / quer conexão |

### Banco de hooks (preencha pro seu nicho)

```
"Por que {CRENCA_COMUM} é mentira?"
"{NUMERO_ESPECIFICO} — e aqui está como cheguei nele."
"Todo mundo fala que {X}. Tá errado."
"Olha o que aconteceu quando eu parei de {COMPORTAMENTO_COMUM}."
"Eu errei muito antes de descobrir isso."
"Se você ainda {ACAO_COMUM_DO_AVATAR} em {ANO_ATUAL}, presta atenção."
"Isso é o que ninguém te conta sobre {TEMA_CENTRAL}."
"Descobri esse truque por acaso e fez {RESULTADO_ESPECIFICO}."
```

### Regras técnicas do hook

- **Vídeo:** rosto na tela + movimento + gancho falado nos primeiros 3s
- **Vídeo:** SEM logo/intro (derruba retenção)
- **Vídeo:** legenda embutida (80% consome no mute)
- **Estático:** headline grande + alto contraste + 1 mensagem
- **Carrossel:** card 1 com headline + visual forte (vai aparecer sozinho no feed)

---

## 2️⃣ HOLD — A Sustentação

**O que é:** o miolo do criativo, depois do hook (vídeo: 3-25s · estático: corpo do texto · carrossel: cards 2 a N-1).

**Função:** **segurar a atenção** até o CTA. Quem chegou aqui tem interesse — agora precisa não desistir.

### Métrica: Hold Rate

```
Hold Rate = (Quem assistiu 75% do vídeo) / (Quem viu 3s) × 100
```

> **Lê assim:** dentre as pessoas que passaram do hook (3s), quantas chegaram aos 75% do vídeo? Esse é o número que mede se o corpo realmente segura atenção.

| Faixa | Avaliação | Ação |
|---|---|---|
| < {HOLD_RATE_MIN} | ❌ Ruim | Refazer corpo · prova fraca ou narrativa lenta |
| {HOLD_RATE_MIN}-{HOLD_RATE_IDEAL} | ⚠️ Aceitável | Manter · testar variação no body |
| ≥ {HOLD_RATE_IDEAL} | ✅ Ótimo | Manter · narrativa forte |

> **Alvo LPSG:** mínimo **{HOLD_RATE_MIN}** (5%) · ideal acima de **{HOLD_RATE_IDEAL}** (10%).

### O que vai dentro do Hold

- **Contexto:** quem é você + pra quem fala
- **Promessa:** o que a pessoa ganha
- **Prova:** print de resultado · número específico · depoimento
- **Tensão narrativa:** cria expectativa pelo CTA

### Padrão recomendado (vídeo 30s)

```
0-3s   ────► HOOK
3-8s   ────► CONTEXTO ("se você é {AVATAR}, presta atenção")
8-15s  ────► PROMESSA ("vou te mostrar como {RESULTADO} em {TEMPO}")
15-25s ────► PROVA (print, número, depoimento)
25-30s ────► CTA (Body)
```

### Padrão recomendado (carrossel 5 cards)

```
Card 1 ────► HOOK
Card 2 ────► CONTEXTO + PROMESSA
Card 3 ────► PROVA (1)
Card 4 ────► PROVA (2) ou exemplo prático
Card 5 ────► CTA (Body)
```

### Padrão recomendado (estático)

```
TOPO    ────► HOOK (headline grande)
CENTRO  ────► HOLD (sub + prova/depoimento)
BASE    ────► BODY (CTA visual + botão)
```

---

## 3️⃣ BODY — A Conversão

**O que é:** a chamada à ação final (vídeo: 25-30s + texto da publicação · estático: botão + texto · carrossel: card final).

**Função:** **transformar atenção em compra**. Sem CTA forte, todo o trabalho vai pro lixo.

### Métrica: Body Rate

```
Body Rate = (Quem comprou o ingresso) / (Quem assistiu 75% do vídeo) × 100
```

> **Lê assim:** dentre as pessoas que ficaram até o final (75%+), quantas efetivamente compraram o ingresso? É a taxa de conversão real do criativo — não confundir com CTR.

| Faixa | Avaliação | Ação |
|---|---|---|
| < {BODY_RATE_MIN} | ❌ Ruim | CTA fraco · sem urgência · sem clareza · ou página segura conversão |
| {BODY_RATE_MIN}-{BODY_RATE_IDEAL} | ⚠️ Aceitável | Manter · testar nova copy de CTA |
| ≥ {BODY_RATE_IDEAL} | ✅ Ótimo | Manter · padrão de CTA validado |

> **Alvo LPSG:** mínimo **{BODY_RATE_MIN}** (2%) · ideal acima de **{BODY_RATE_IDEAL}** (5%).

### Estrutura do CTA

> "{VERBO_DE_ACAO} {AONDE} e {O_QUE_ACONTECE_DEPOIS}."

### Variações que funcionam

- *"Clica aqui embaixo e garante sua vaga antes de fechar"*
- *"Link aí embaixo — se inscreve agora que tem desconto"*
- *"Corre que tem vaga limitada — link na descrição"*

### Erros que matam o Body Rate

| Erro | Por quê |
|---|---|
| "Saiba mais" | Sem ação real |
| "Entre em contato" | Alto atrito |
| CTA sem urgência | Falta razão pra clicar **agora** |
| 2 CTAs no mesmo criativo | Confunde |
| CTA só no botão (sem narrar) | 80% no mute não vê |

---

## 📊 Tabela-resumo das 3 métricas

| Métrica | Mínimo | Ideal | Como calcula |
|---|---|---|---|
| **Hook Rate** | {HOOK_RATE_MIN} | {HOOK_RATE_IDEAL} | (Views 3s) / (Impressões) |
| **Hold Rate** | {HOLD_RATE_MIN} | {HOLD_RATE_IDEAL} | (Assistiu 75% do vídeo) / (Views 3s) |
| **Body Rate** | {BODY_RATE_MIN} | {BODY_RATE_IDEAL} | (Comprou ingresso) / (Assistiu 75%) |

---

## 🩺 Diagnóstico do criativo (em 3 perguntas)

Quando um criativo não performa, faz **estas 3 perguntas em ordem**:

### 1. O Hook Rate está dentro do alvo?

- ❌ **Não** → refazer **só o hook** (não mexer no resto)
- ✅ **Sim** → vai pra pergunta 2

### 2. O Hold Rate está dentro do alvo?

- ❌ **Não** → refazer **o miolo** (prova fraca · narrativa lenta · falta tensão)
- ✅ **Sim** → vai pra pergunta 3

### 3. O Body Rate está dentro do alvo?

- ❌ **Não** → refazer **o CTA** (verbo fraco · sem urgência · texto da publicação fraco)
- ✅ **Sim** → criativo tá ótimo. Se não vende, problema é página.

> **Nunca refaça mais de uma parte por vez.** Você não vai saber qual mudança fez efeito.

---

## 🎥 5 VÍDEOS — variações obrigatórias

Cada um com **30 segundos**, formato **9:16 (Reels/Stories)** + **1:1 (Feed)**.

| # | Tipo | Hook predominante |
|---|---|---|
| 1 | Pergunta polêmica | "Por que {X}?" |
| 2 | Prova em números | "{NUMERO}..." |
| 3 | Contra-intuitivo | "Todo mundo fala {X}. Tá errado." |
| 4 | Antes vs depois | Visual da transformação |
| 5 | Confissão | "Eu errei muito até descobrir..." |

---

## 🖼️ 5 ESTÁTICOS — variações obrigatórias

Imagem única, formato **1:1 (Feed)** + **9:16 (Stories)** + **1.91:1 (Open Graph)**.

| # | Tipo | Hierarquia visual |
|---|---|---|
| 1 | Headline + autor | Título + foto do expert |
| 2 | Print de resultado | Screenshot real + headline curta |
| 3 | Antes vs depois | Split screen + descrição da mudança |
| 4 | Lista (3-5 bullets) | "3 erros que você comete em {X}" |
| 5 | Pergunta + CTA | Pergunta provocativa + botão visual |

### Hierarquia visual no estático

```
┌─────────────────────────────┐
│ HEADLINE GRANDE             │ ← HOOK · 60% da atenção
│ (1 linha · alto contraste)  │
├─────────────────────────────┤
│ Sub-headline + prova        │ ← HOLD · 25%
├─────────────────────────────┤
│ CTA visual + botão          │ ← BODY · 15%
└─────────────────────────────┘
```

---

## 🎠 5 CARROSSEIS — variações obrigatórias

5 a 10 cards, formato **1:1**. Cada card tem **1 ideia única** e leva pro próximo.

| # | Tipo | Estrutura |
|---|---|---|
| 1 | 3 etapas | Card 1: Problema · Cards 2-4: Etapas · Card 5: CTA |
| 2 | Antes/durante/depois | Card 1: Antes · Cards 2-3: Durante · Card 4: Depois · Card 5: CTA |
| 3 | Lista de erros | Card 1: Hook ("5 erros") · Cards 2-5: 1 erro/card · Card 6: CTA |
| 4 | Comparação | Card 1: Hook · Cards 2-4: Antigo vs Novo · Card 5: CTA |
| 5 | História + lição | Card 1: Hook · Cards 2-3: História · Cards 4-5: Lição + CTA |

---

## 🔄 Quando trocar criativo

| Sinal | Ação |
|---|---|
| **Hook Rate < {HOOK_RATE_MIN}** após R$ 100 gastos | Pausar · refazer **só** o hook |
| **Hold Rate < {HOLD_RATE_MIN}** | Pausar · refazer **só** o miolo |
| **Body Rate < {BODY_RATE_MIN}** | Pausar · refazer **só** o CTA |
| Top 3 criativos concentram 80% das vendas | Renovar **só os 12 perdedores** |
| Campanha rodando há 30+ dias | Renovar **5 criativos** (1/3 do lote) |

### Regra de renovação

> A cada 30 dias, **renova 5 criativos** (1/3 do lote). Mantém o aprendizado e evita fadiga total ao mesmo tempo.

---

## 📋 Checklist por criativo

- [ ] Formato correto (9:16 + 1:1 ou 1:1 + 1.91:1)
- [ ] **Hook** testado (3 pessoas leigas entendem em 3s?)
- [ ] **Hold** com prova concreta (número, print, depoimento)
- [ ] **Body** explícito com verbo de ação
- [ ] Nome segue padrão de nomenclatura (ver `06-nomenclatura.md`)
- [ ] Áudio claro (vídeo) ou texto legível (estático/carrossel)
- [ ] UTM padronizada no link
- [ ] Sem logo/intro nos primeiros 3 segundos (vídeo)
- [ ] Texto na imagem ≤ 20% (estático)
- [ ] 5-10 cards, último é CTA (carrossel)

---

## 🚨 Erros mais comuns

| Erro | Consequência |
|---|---|
| Subir 1 criativo só | Sinal insuficiente pro Advantage+ |
| Misturar nichos no mesmo criativo | Algoritmo se confunde |
| Hook genérico ("Olá, você quer ganhar dinheiro?") | Hook Rate < 10% — queima dinheiro |
| Vídeo > 60s | Cai a retenção, sobe o CPM |
| Estático com 5 mensagens | Hook indefinido |
| Carrossel sem CTA no último card | Body Rate baixo |
| Não testar mute (vídeo) | 80% do tráfego perdido |
| Trocar 3 partes do criativo de uma vez | Não dá pra isolar o que funcionou |
| Trocar todos os 15 criativos de uma vez | Perde aprendizado da campanha |
# 04 · Página de Ingresso (referência cruzada)

> **Esta seção foi consolidada na estrutura `paginas-lpsg`.**
>
> A página de ingresso é responsabilidade da skill **`paginas-lpsg`** — lá está a estrutura completa de 9 blocos, 5 variações, stack Next.js + Tailwind + Vercel, performance LCP < 1.5s, e os dois modos de output (implementa aqui ou brief para Claude Design).

---

## 🔗 Onde encontrar

```
02-entregaveis-finais/paginas/
├── README.md                       ← visão geral
└── template/
    ├── 00-variaveis-globais.md
    ├── 01-stack-e-deploy.md
    ├── 02-arquitetura-projeto.md
    ├── 03-componentes-mobile-first.md
    ├── 04-matriz-variacoes.md
    ├── 05-performance-vercel.md
    ├── 06-modos-de-output.md
    └── 07-brief-claude-design.md
```

Ou pela skill: `~/.claude/skills/paginas-lpsg/`

---

## 🔁 Quando o tráfego encontra a página

Esta skill (`trafego-lpsg`) **roda criativos que apontam pra página de ingresso** que vive em `paginas-lpsg`. A integração entre as duas:

| Etapa | Skill responsável |
|---|---|
| Criativo (vídeo/estático/carrossel) | `trafego` (este arquivo `03-criativo-ganhador.md`) |
| URL de destino do criativo | Variação aprovada da `paginas-lpsg` (`/v1`, `/v2`...) |
| Conversão da página | `paginas-lpsg` · alvo ≥ 5% |
| Teste de variação de página | `trafego` · campanha `TES-PAG_*` (este `02-estrutura-campanha.md`) com **criativos validados** |

---

## 📊 Métricas-alvo (resumo · detalhes em `paginas-lpsg`)

| Métrica | Mínimo | Ideal |
|---|---|---|
| Conversão página → compra | 5% | 7%+ |
| LCP | < 2.0s | < 1.5s |
| Lighthouse Mobile | ≥ 90 | ≥ 95 |

---

## 🚨 Decisão crítica: quando reescrever página vs criativo

Se a campanha estiver com **Body Rate baixo**:

```
Hook Rate ok + Hold Rate ok + Body Rate < 2%
```

A culpa pode ser do **CTA do criativo** OU da **página de ingresso**. Pra isolar:

1. Roda **campanha de teste** (`TES-PAG_*`) com criativos VALIDADOS apontando pra página atual
2. Se Body Rate continua baixo → problema é **página** (vai pra `paginas-lpsg`)
3. Se Body Rate sobe → problema era o **CTA do criativo**

---

## 📎 Referências

- **Skill principal:** [`paginas-lpsg`](~/.claude/skills/paginas-lpsg/) ou pasta `02-entregaveis-finais/paginas/`
- **Página de ingresso (estrutura completa):** `paginas/template/03-componentes-mobile-first.md`
- **Variações e teste A/B:** `paginas/template/04-matriz-variacoes.md`
- **Campanhas de teste de página:** `trafego/template/02-estrutura-campanha.md` (regras de orçamento + nomenclatura)
# 05 · Otimização & Diagnóstico

> No LPSG, otimização é radicalmente simples: **sobe ou desce a verba**. Escala = duplica. Teste = campanha separada.

---

## 🎯 Princípio único

> **A única alavanca de otimização é o orçamento diário da campanha.**
>
> Não se mexe em público. Não se mexe em estratégia de lance. Não se mexe em janela de atribuição. **Sobe verba quando vai bem. Desce verba quando vai mal.**

Se não der pra resolver com verba ou com criativo novo, o problema **não é tráfego** — é página, oferta, evento, ou mensageria. Vai resolver lá.

---

## 🔧 As 4 ações possíveis

| Ação | Quando |
|---|---|
| **1. Subir verba** | ROAS ≥ {ROAS_ALVO_INGRESSO} por 3+ dias |
| **2. Descer verba** | ROAS < {ROAS_ALVO_INGRESSO} por 3+ dias |
| **3. Renovar criativos** | Pausar criativos com Hook/Hold/Body baixo + adicionar novos |
| **4. Duplicar campanha** | Quando a original já estabilizou em verba alta |

**Não tem ação 5.** Nada de retargeting novo, nada de CBO, nada de público novo.

---

## ⬆️ Subir verba — como fazer

### Sinal de subida

- ROAS ≥ {ROAS_ALVO_INGRESSO} por **3 dias seguidos**
- Volume de compras estável ou crescendo
- CPM controlado (não disparando)
- Top criativos com **Hook Rate ≥ {HOOK_RATE_IDEAL}** e **Body Rate ≥ {BODY_RATE_IDEAL}**

### Regra do incremento

| Faixa | Incremento máximo por dia | Frequência |
|---|---|---|
| Qualquer verba | **+5% ao dia** | A cada 3 dias estáveis com ROAS ≥ {ROAS_ALVO_INGRESSO} |
| Acima de R$ 1.000/dia | **DUPLICAR** (não inflar) | Conforme aprendizado |

> **Subir é lento.** Limite de **+5%/dia** preserva a fase de aprendizagem do Advantage+. Subir mais rápido reseta o algoritmo e o desempenho cai.

---

## ⬇️ Descer verba — como fazer

### Sinal de descida

- ROAS < {ROAS_ALVO_INGRESSO} por **3 dias seguidos**
- Volume de compras caindo sem causa externa
- CPM disparando (acima de {CPM_MAX})

### Regra do decremento

- **Desce até -50% no dia** (sem dó)
- Reavalia em 3 dias
- Se não recuperar → **renovar criativos** antes de descer mais

> **Descer é rápido.** Diferente da subida, descer 50% num único dia **não destrói o aprendizado** — só corta o prejuízo. Quanto mais rápido cortar, menos queima.

### Quando NÃO descer verba

| Cenário | O que fazer em vez |
|---|---|
| Apenas 1 dia ruim | Aguardar — pode ser ruído |
| ROAS bom mas conversão página baixa | Arrumar **página**, não tráfego |
| ROAS bom mas evento converte mal | Arrumar **evento**, não tráfego |
| ROAS bom mas você "achou que poderia ser melhor" | **Não mexer.** Funcionando, deixa funcionar. |

---

## 🔁 Renovar criativos — quando e como

### Quando renovar

- 1+ criativo com **Hook Rate < {HOOK_RATE_MIN}** após R$ 100 gastos → refazer hook
- 1+ criativo com **Hold Rate < {HOLD_RATE_MIN}** → refazer corpo
- 1+ criativo com **Body Rate < {BODY_RATE_MIN}** → refazer CTA
- Top 3 criativos concentram > 80% das vendas (resto não funciona)
- Campanha rodando há 30+ dias com criativos repetidos
- Sinais de fadiga (CPM subindo, métricas caindo gradativamente)

### Como renovar

1. **Pausa** os criativos com métricas ruins (não pause a campanha)
2. **Adiciona** criativos novos (mesma proporção: 5 vídeo + 5 estático + 5 carrossel)
3. Aguarda **3-5 dias** com R$ 50/dia mínimo no novo
4. Compara as 3 métricas (Hook · Hold · Body) dos novos vs antigos
5. Mantém os vencedores

### Regra do volume

> Renove **5 criativos por vez** (1/3 do lote). Renovar todos os 15 de uma vez = perde aprendizagem.

---

## 📈 Duplicar campanha — escala lateral

A escala "real" do LPSG não é via aumento de verba dentro da campanha original. É via **duplicação**.

### Quando duplicar

- Campanha original com **ROAS ≥ {ROAS_ALVO_INGRESSO}** estável por **5+ dias**
- Verba já em pelo menos **R$ 300-500/dia**
- Há **15 criativos novos** prontos pra entrar

### Como duplicar

1. **Duplicar** campanha inteira no Ads Manager (mesma estrutura)
2. Renomear seguindo padrão: `{XYZ}_{DDMMYY}_ESC_{NUMERO}` (ver `06-nomenclatura.md`)
3. **Trocar** os 15 criativos por um lote novo (5 vídeo + 5 estático + 5 carrossel)
4. Iniciar a duplicada com **R$ 100/dia**
5. Rodar **em paralelo** com a original
6. Validar a duplicada por 3-5 dias (mesmo critério da original)
7. Quando validar, começar a subir verba dela também

### Resultado esperado

- 2 campanhas rodando em paralelo, somando vendas
- Original mantém aprendizado
- Duplicada testa novos criativos sem comprometer a primeira
- Em meses, pode haver 3-4 campanhas duplicadas rodando

### Por que não inflar a original?

- Inflar acima de 30% / dia **reseta o aprendizado**
- Limite natural de saturação por público (mesmo com ASC)
- Duplicar permite **testar criativos novos** sem destruir o que funciona

---

## 🧪 Campanha de teste — para validar

### Quando criar uma campanha de teste

| Cenário | Como configurar | Nome |
|---|---|---|
| **Validar criativos novos antes de entrar na principal** | **R$ 50/dia mínimo** · criativos novos · mesma estrutura ASC | `{XYZ}_{DDMMYY}_TES-CRI_{N}` |
| **Testar página nova** | **R$ 50/dia mínimo** · **criativos já validados** · página nova | `{XYZ}_{DDMMYY}_TES-PAG_{N}` |
| **Testar oferta nova** | **R$ 50/dia mínimo** · criativos novos da oferta · página da oferta | `{XYZ}_{DDMMYY}_TES-OFE_{N}` |

### Regras de orçamento das campanhas de teste

| Regra | Valor |
|---|---|
| **Mínimo por campanha de teste** | R$ 50/dia |
| **Limite total das campanhas de teste somadas** | **≤ 20% do orçamento total** |
| **Comportamento ao estourar o teto** | Pausar o teste menos prioritário antes de subir um novo |

**Exemplo:** principal em R$ 1.000/dia → todas as campanhas de teste somadas ≤ R$ 200/dia.

### Outras regras

- **Sempre separada** da campanha principal
- **Variável isolada** — testa 1 coisa por vez
- **Critério de sucesso definido antes** (ex: "se ROAS ≥ 1.0 em 5 dias, sobe pra principal")

### Regra do teste de página

> **Use criativos JÁ VALIDADOS** (Hook ≥ {HOOK_RATE_IDEAL}, Body ≥ {BODY_RATE_IDEAL}) na campanha de teste de página.
>
> Assim você isola a variável: se a conversão cair, é culpa da página, não do criativo.

---

## 📊 As métricas que importam

### Hierarquia de monitoramento

```
Métrica nº 1: ROAS de ingresso
   ↓ se ROAS ok mas vende pouco:
Métrica nº 2: Volume de compras
   ↓ se volume baixo, investiga as 3 métricas do criativo:
Métrica nº 3a: Hook Rate (criativo prende?)
Métrica nº 3b: Hold Rate (criativo segura?)
Métrica nº 3c: Body Rate (criativo converte clique?)
   ↓ se criativo ok, investiga:
Métrica nº 4: Conversão da página
   ↓ se tudo ok no tráfego mas evento converte mal:
Métrica nº 5: Conversão do evento (não é problema de tráfego)
```

### Painel mínimo viável

| Métrica | Frequência | Alvo mínimo | Alvo ideal | Cálculo |
|---|---|---|---|---|
| ROAS campanha | Diário | {ROAS_ALVO_INGRESSO} | 1.25+ | Receita / Investimento |
| Volume de compras / dia | Diário | Estável | Crescendo | — |
| **Hook Rate** | Por criativo, semanal | {HOOK_RATE_MIN} | {HOOK_RATE_IDEAL} | Views 3s / Impressões |
| **Hold Rate** | Por criativo, semanal | {HOLD_RATE_MIN} | {HOLD_RATE_IDEAL} | Assistiu 75% / Views 3s |
| **Body Rate** | Por criativo, semanal | {BODY_RATE_MIN} | {BODY_RATE_IDEAL} | Comprou / Assistiu 75% |
| CPM | Semanal | — | ≤ {CPM_MAX} | — |
| Conversão da página | Semanal | {CONVERSAO_PAGINA_MIN} | {CONVERSAO_PAGINA_IDEAL} | Compras / Visitas |
| Top 3 criativos por venda | Semanal | Mantidos | — | — |

---

## 🩺 Diagnóstico em 3 perguntas

Quando algo está ruim, faz **estas 3 perguntas em ordem**:

### 1. O ROAS está ruim?

- ✅ **Sim** → vai pra pergunta 2
- ❌ **Não** → não mexa em nada, deixa rodar

### 2. Qual das 3 métricas do criativo está ruim?

| Métrica ruim | Problema | Ação |
|---|---|---|
| **Hook Rate < {HOOK_RATE_MIN}** | Gancho não prende | Refazer **só** o hook |
| **Hold Rate < {HOLD_RATE_MIN}** | Corpo não segura | Refazer **só** o miolo (prova/narrativa) |
| **Body Rate < {BODY_RATE_MIN}** | CTA não converte clique | Refazer **só** o CTA |

### 3. A conversão da página está ruim?

- ✅ **Sim, < {CONVERSAO_PAGINA_MIN}** → problema é **página** (arrume a página)
- ❌ **Não, página ok** → problema é **fora do tráfego** (evento, oferta, mensageria)

> **Se as 3 respostas levam pra "fora do tráfego", não toque na campanha.**
> Vai resolver na peça certa do funil.

---

## 📅 Rito semanal de revisão

### Segunda
- Compila ROAS, volume, Hook/Hold/Body Rate, CPM da semana anterior
- Identifica criativos com qualquer das 3 métricas abaixo do mínimo
- Decide: subir/descer/renovar/duplicar

### Quarta
- Verifica se mudança da segunda gerou efeito
- Se piorou → reverte rápido
- Se igual → aguarda 2 dias

### Domingo
- Análise final da semana
- Documenta (planilha): o que funcionou, ROAS médio, decisões da semana
- Prepara plano da próxima segunda

---

## 🚫 O que NÃO fazer (lista negra)

| Erro | Por quê |
|---|---|
| Mexer no público | Quebra ASC, reseta aprendizado |
| Mudar estratégia de lance | Perde meses de otimização do algoritmo |
| Pausar a campanha "pra ajustar" | Algoritmo perde histórico |
| Subir verba acima de +5% num único dia | Reset do aprendizado garantido |
| Trocar todos os 15 criativos de uma vez | Perde aprendizagem |
| Refazer 2+ partes do criativo (Hook + Hold + Body) ao mesmo tempo | Não dá pra isolar o que funcionou |
| Criar 2ª campanha pra retargeting | Não existe no LPSG |
| Criar campanha de produto | Não existe no LPSG |
| Otimizar conversão de evento via tráfego | Errar de peça |
| Adicionar interesse/comportamento | Limita o algoritmo |
| Excluir públicos manualmente | Cria canibalismo |

---

## ✅ Checklist de revisão semanal

- [ ] ROAS está dentro do alvo {ROAS_ALVO_INGRESSO}?
- [ ] Volume de compras está estável ou crescendo?
- [ ] **Hook Rate** dos 15 criativos está em {HOOK_RATE_MIN}+?
- [ ] **Hold Rate** dos 15 criativos está em {HOLD_RATE_MIN}+?
- [ ] **Body Rate** dos 15 criativos está em {BODY_RATE_MIN}+?
- [ ] CPM está ≤ {CPM_MAX}?
- [ ] Conversão da página está ≥ {CONVERSAO_PAGINA_MIN}?
- [ ] Identifiquei criativos com métricas baixas pra refazer (1 parte por vez)?
- [ ] Decidi UMA ação pra essa semana (subir/descer/renovar/duplicar)?
- [ ] Documentei a decisão na planilha?
# 06 · Nomenclatura — Campanhas, Conjuntos e Criativos

> Padrão de nomeação obrigatório no LPSG. Sem isso, o time se perde no Ads Manager e o histórico vira caos.

---

## 🎯 Por que padronizar?

- ✅ Rapidez pra encontrar campanha/criativo no Ads Manager
- ✅ Filtros nativos do Meta funcionam (busca por prefixo de projeto)
- ✅ Time inteiro entende sem entrar no painel
- ✅ Relatórios automatizados (planilha lê o nome e decompõe)
- ✅ Histórico organizado quando a operação cresce

---

## 1️⃣ NOMENCLATURA DE CAMPANHA

### Padrão

```
{XYZ}_{DDMMYY}_{TIPO}_{NUMERO}
```

### Componentes

| Componente | O que é | Formato | Exemplo |
|---|---|---|---|
| **XYZ** | 3 letras do projeto | UPPERCASE · sem números · sem acento | `LPS`, `EMG`, `TRD` |
| **DDMMYY** | Data de ativação | 6 dígitos · sem separador | `120526` (12/05/2026) |
| **TIPO** | Função da campanha | Códigos fixos abaixo | `TES-PAG`, `ESC` |
| **NUMERO** | ID único sequencial | 3 dígitos · zero à esquerda | `001`, `042`, `127` |

### Tipos de campanha (códigos fixos)

| Código | Significado | Quando usar |
|---|---|---|
| **PRI** | Principal | A campanha que sempre roda — a "mãe" do projeto |
| **ESC** | Escala | Duplicada da principal pra escalar com criativos novos |
| **TES-CRI** | Teste de criativo | Validar criativos novos antes de subir pra principal/escala |
| **TES-PAG** | Teste de página | Validar página nova com criativos JÁ validados |
| **TES-OFE** | Teste de oferta | Validar oferta nova (preço, bônus, garantia) |

### Exemplos completos

```
LPS_120526_PRI_001        ← Principal do LPSG, ativada em 12/05/2026, ID 001
LPS_180526_ESC_002        ← Primeira escala, duplicada em 18/05
LPS_200526_TES-CRI_003    ← Teste de criativos novos
LPS_220526_TES-PAG_004    ← Teste de página nova com criativos validados
LPS_250526_ESC_005        ← Segunda escala
EMG_010626_PRI_001        ← Principal do projeto Emagrecimento (EMG), 01/06/2026
TRD_150526_TES-OFE_001    ← Teste de oferta nova no projeto Trade (TRD)
```

### Tabela de projetos comuns (sigla XYZ)

> Defina no início do projeto e **nunca mude**. Adicione abaixo:

| Sigla | Projeto |
|---|---|
| `LPS` | LPSG (Leo Tabari) |
| `{SIGLA}` | {NOME_PROJETO} |
| `{SIGLA}` | {NOME_PROJETO} |

---

## 2️⃣ NOMENCLATURA DE CONJUNTO DE ANÚNCIOS

> No LPSG só existe **1 conjunto por campanha**. O nome pode ser direto e simples.

### Padrão

```
{TIPO_DE_PUBLICO}
```

### Valores válidos

| Nome do conjunto | Quando usar |
|---|---|
| `aberto` | Padrão LPSG — Advantage+ Audience aberto, sem segmentação |
| `aberto-{REGIAO}` | Quando precisa restringir geografia (raro) — ex: `aberto-SP` |
| `aberto-{IDADE}` | Quando precisa testar faixa etária específica — ex: `aberto-25-45` |

### Exemplo dentro de uma campanha

```
LPS_120526_PRI_001
└── aberto                 ← nome do conjunto
    └── 15 criativos
```

> **Não complica.** "aberto" basta na maioria dos casos.

---

## 3️⃣ NOMENCLATURA DE CRIATIVOS

### Padrão (a ser informado pelo cliente)

```
{XYZ}_{FORMATO}_{HOOK_KEYWORD}_v{NUMERO}
```

### Componentes (sugestão inicial — confirmar)

| Componente | O que é | Exemplo |
|---|---|---|
| **XYZ** | Sigla do projeto | `LPS` |
| **FORMATO** | Tipo de criativo | `vid` · `est` · `car` |
| **HOOK_KEYWORD** | 1 palavra-chave do hook | `milhao` · `pague` · `3etapas` |
| **NUMERO** | Versão / variação | `v1` · `v2` · `v3` |

### Exemplos

```
LPS_vid_milhao_v1         ← LPSG · vídeo · hook "milhão" · versão 1
LPS_est_pague_v3          ← LPSG · estático · hook "pague" · versão 3
LPS_car_3etapas_v2        ← LPSG · carrossel · hook "3 etapas" · versão 2
LPS_vid_confissao_v5      ← LPSG · vídeo · hook "confissão" · versão 5
```

### Códigos de FORMATO

| Código | Tipo |
|---|---|
| `vid` | Vídeo |
| `est` | Estático (imagem única) |
| `car` | Carrossel |

### Códigos de HOOK_KEYWORD (sugeridos)

| Keyword | Tipo de hook |
|---|---|
| `polemica` | Pergunta polêmica |
| `numero` ou `{NUM_ESPECIFICO}` | Prova em números |
| `errado` | Declaração contra-intuitiva |
| `transformacao` | Antes vs depois |
| `confissao` | Confissão / vulnerabilidade |
| `{PALAVRA_CHAVE}` | Palavra-chave do hook específico |

> ⚠️ **A nomenclatura final dos criativos será definida pelo cliente.** Use a sugestão acima como base — ajuste a tabela quando o padrão definitivo chegar.

---

## 📋 Tabela-resumo

| Camada | Padrão | Exemplo |
|---|---|---|
| **Campanha** | `{XYZ}_{DDMMYY}_{TIPO}_{NUMERO}` | `LPS_120526_PRI_001` |
| **Conjunto** | `{TIPO_DE_PUBLICO}` | `aberto` |
| **Criativo** | `{XYZ}_{FORMATO}_{HOOK_KEYWORD}_v{NUMERO}` | `LPS_vid_milhao_v1` |

---

## 🗂️ Como o time usa isso na prática

### No Ads Manager

- **Filtro por projeto:** busca por `LPS` → vê tudo do LPSG
- **Filtro por tipo:** busca por `_PRI_` → vê todas as principais
- **Filtro por data:** busca por `_120526_` → vê tudo ativado naquela data
- **Filtro por escala:** busca por `_ESC_` → vê todas as escalas

### Em planilha (acompanhamento)

```
| Campanha                  | Tipo | Data ativação | Verba | ROAS | Status |
|---------------------------|------|---------------|-------|------|--------|
| LPS_120526_PRI_001        | PRI  | 12/05/2026    | R$300 | 1.4  | Ativa  |
| LPS_180526_ESC_002        | ESC  | 18/05/2026    | R$200 | 1.1  | Ativa  |
| LPS_200526_TES-CRI_003    | TES  | 20/05/2026    | R$50  | 0.8  | Teste  |
```

### Em reuniões

> *"O LPS_120526_PRI_001 tá com ROAS 1.4, vamos subir a verba. O TES-CRI_003 tá ruim, vamos pausar."*

Time entende sem precisar abrir o Ads Manager.

---

## 🚫 Erros que destroem a padronização

| Erro | Consequência |
|---|---|
| Usar caracteres especiais (acento, espaço) | Quebra filtros do Meta + planilha |
| Mudar a sigla XYZ depois de definida | Histórico se perde |
| Esquecer de zerar à esquerda do NUMERO (`1` em vez de `001`) | Ordenação alfabética bagunça |
| Inventar tipo novo de campanha sem documentar | Confunde o time |
| Renomear campanha em produção | Quebra atribuição em planilhas externas |
| Não documentar a tabela de projetos | Time novo não entende as siglas |

---

## ✅ Checklist antes de criar campanha

- [ ] Sigla XYZ do projeto definida e documentada?
- [ ] Tipo de campanha (PRI, ESC, TES-CRI, TES-PAG, TES-OFE) definido?
- [ ] Próximo número sequencial conferido (sem repetir)?
- [ ] Data de ativação no formato DDMMYY?
- [ ] Nomenclatura toda em UPPERCASE para sigla e tipo?
- [ ] Conjunto nomeado como `aberto` (ou variação justificada)?
- [ ] Criativos nomeados seguindo o padrão `{XYZ}_{FORMATO}_{HOOK}_v{N}`?

---

## 📐 Template prático pra copiar

```
# Campanha
{XYZ}_{DDMMYY}_PRI_001

# Conjunto único
aberto

# Criativos (15 total)
{XYZ}_vid_polemica_v1
{XYZ}_vid_numero_v1
{XYZ}_vid_errado_v1
{XYZ}_vid_transformacao_v1
{XYZ}_vid_confissao_v1
{XYZ}_est_polemica_v1
{XYZ}_est_numero_v1
{XYZ}_est_errado_v1
{XYZ}_est_transformacao_v1
{XYZ}_est_confissao_v1
{XYZ}_car_polemica_v1
{XYZ}_car_numero_v1
{XYZ}_car_errado_v1
{XYZ}_car_transformacao_v1
{XYZ}_car_confissao_v1
```

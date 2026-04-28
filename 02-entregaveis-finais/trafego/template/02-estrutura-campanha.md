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

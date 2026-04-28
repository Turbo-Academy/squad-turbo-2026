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

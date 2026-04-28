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

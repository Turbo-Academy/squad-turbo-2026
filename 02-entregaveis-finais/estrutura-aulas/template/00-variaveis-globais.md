# 00 · Variáveis Globais

> Fonte da verdade do projeto. Preencha aqui primeiro — todos os outros arquivos referenciam estas variáveis.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "{NOME_ESPECIALISTA}"           # Ex: João Silva
TRATAMENTO_PLURAL:        "{TRATAMENTO_PLURAL}"           # Ex: tubos, traders, guerreiros
NICHO:                    "{NICHO}"                       # Ex: emagrecimento, marketing, finanças
SUB_NICHO:                "{SUB_NICHO}"                   # Ex: jejum intermitente, lançamento pago
AVATAR_RESUMIDO:          "{AVATAR_RESUMIDO}"             # Ex: mulher 30-45, sedentária, já tentou várias dietas
```

---

## 🎪 Evento

```yaml
NOME_EVENTO:              "{NOME_EVENTO}"                 # Ex: Desafio LPSG
SIGLA_EVENTO:             "{SIGLA}"                       # Ex: LPSG
PROMESSA_PRINCIPAL:       "{PROMESSA_PRINCIPAL}"          # Ex: Construa seu lançamento pago em 7 dias
BIG_IDEA:                 "{BIG_IDEA}"                    # Ex: E se o lead pagasse seu tráfego antes de entrar no seu evento?
MODELO:                   "{MODELO}"                      # Workshop · Desafio · Híbrido
ESCADA_DE_CRENCAS:        "{ESCADA_PRINCIPAL}"            # Ex: é possível → é pra mim → eu consigo → é agora
```

---

## 🏷️ Títulos públicos das aulas

> Esses são os títulos que aparecem no YouTube, na página de ingresso, no grupo do WhatsApp e nas mensagens. **Cada aula tem uma função específica na escada de crenças** — o título precisa refletir essa função.

### 📐 Fórmula dos títulos

| Aula | Fórmula | Função |
|---|---|---|
| **1** | `Aula 1 - {CHAMADA_FORTE_PARA_FUNDAMENTACAO} \| {SIGLA}` | Gancho de autoridade + promessa maior do método |
| **2** | `Aula 2 - {CHAMADA_PARA_APROFUNDAMENTO} \| {SIGLA}` | "Como construir" — entra na execução |
| **3** | `Aula 3 - {CHAMADA_PARA_MARCO_DE_RESULTADO_1} \| {SIGLA}` | Marco de vitória 1 — "já valeu" |
| **4** | `Aula 4 - {CHAMADA_LIGANDO_AO_PRE_PITCH_COM_GANHO_PROXIMO_PASSO} \| {SIGLA}` | Pré-pitch — mostra o salto que vem |
| **5** | `Aula 5 - {CONCLUSAO_COM_MARCO_DE_RESULTADO_2} \| {SIGLA}` | Marco de vitória 2 — fecha o ciclo técnico |
| **6** | `Aula 6 - {SUPER_BONUS_MAIS_OFERTA} \| {SIGLA}` | Pitch — oferta + bônus tsunami |

### ✅ Exemplo preenchido (LPSG do Leo Tabari)

```
Aula 1 - O Lançamento Pago que é capaz de faturar mais de 1 milhão de reais todos os meses | LPSG
Aula 2 - Criando seu evento LPSG com o Claude Code | LPSG
Aula 3 - Automatizando tudo para rodar com equipe enxuta e sem demandar o Expert | LPSG
Aula 4 - Onde e Quando Otimizar o Funil e como acelerar em 5x seu resultado | LPSG
Aula 5 - Como Criar Campanhas de Tráfego que Convertem para o LPSG (sem gestor de tráfego) | LPSG
Aula 6 - CHECKLIST COMPLETO e Super Bonus para o Acelerador Turbo | LPSG
```

### 🧠 Boas práticas por aula

- **Aula 1:** use número grande, promessa tangível (R$, %, tempo). Cria "é possível".
- **Aula 2:** use verbo de ação + nome do entregável concreto. Cria "é pra mim".
- **Aula 3:** use verbo que remova esforço (*automatizando, eliminando, simplificando*). Cria "já valeu".
- **Aula 4:** use "como acelerar / multiplicar / otimizar **N vezes**". Cria desejo do próximo salto.
- **Aula 5:** use "sem {RECURSO_ESCASSO}" — remove uma última barreira percebida.
- **Aula 6:** use CAIXA ALTA em 1-2 palavras + menção ao nome do produto. Sinaliza oferta.

### 🎯 Variáveis de título (preencha aqui)

```yaml
TITULO_AULA_1: "Aula 1 - {CHAMADA_FUNDAMENTACAO} | {SIGLA}"
TITULO_AULA_2: "Aula 2 - {CHAMADA_APROFUNDAMENTO} | {SIGLA}"
TITULO_AULA_3: "Aula 3 - {CHAMADA_MARCO_1} | {SIGLA}"
TITULO_AULA_4: "Aula 4 - {CHAMADA_PRE_PITCH} | {SIGLA}"
TITULO_AULA_5: "Aula 5 - {CHAMADA_MARCO_2} | {SIGLA}"
TITULO_AULA_6: "Aula 6 - {CHAMADA_PITCH_BONUS} | {SIGLA}"
```

---

## 📅 Cronograma

```yaml
DATA_AULA_1:              "{DATA_AULA_1}"                 # Ex: Seg, 12/05
HORARIO_AULAS_SEMANA:     "{HORARIO_AULAS}"               # Ex: 7h (ao vivo gravado)
HORARIO_SABADO:           "{HORARIO_SABADO}"              # Ex: 10h (tira-dúvidas)
DATA_PITCH:               "{DATA_PITCH}"                  # Ex: Dom, 18/05
HORARIO_PITCH:            "{HORARIO_PITCH}"               # Ex: 20h
DATA_ABERTURA_CARRINHO:   "{DATA_CARRINHO}"               # Ex: Seg, 19/05 - 6h50 (ficha) / 7h (geral)
DATA_FECHAMENTO:          "{DATA_FECHAMENTO}"             # Ex: Sex, 23/05 - 23h59
```

---

## 💰 Produto e oferta

```yaml
NOME_PRODUTO:             "{NOME_PRODUTO}"                # Ex: Acelerador Turbo
VALOR_CHEIO:              "{VALOR_CHEIO}"                 # Ex: R$ 25.000
VALOR_PARCELADO:          "{VALOR_PARCELADO}"             # Ex: 12x R$ 2.083
VALOR_A_VISTA:            "{VALOR_A_VISTA}"               # Ex: R$ 17.500 (30% off)

TICKET_INGRESSO:          "{TICKET_INGRESSO}"             # Ex: R$ 62
ROAS_ALVO_INGRESSO:       "{ROAS_INGRESSO}"               # Ex: 0.8 – 1.0
ROAS_ALVO_PRODUTO:        "{ROAS_PRODUTO}"                # Ex: 2.0+
CONVERSAO_ALVO:           "{CONVERSAO_ALVO}"              # Ex: 10% (mínimo 7%)

BONUS_TSUNAMI:
  10_MINUTOS:             "{BONUS_10MIN}"                 # Ex: 50% off + call 1:1
  1_HORA:                 "{BONUS_1H}"                    # Ex: Estratégia Turbo
  3_HORAS:                "{BONUS_3H}"                    # Ex: 40% off
  1_DIA:                  "{BONUS_1DIA}"                  # Ex: 30% off
```

---

## 🔗 Links e canais

```yaml
LINK_INGRESSO:            "{LINK_INGRESSO}"
LINK_YOUTUBE:             "{LINK_YOUTUBE}"                # Canal das aulas
LINK_PLAYLIST:            "{LINK_PLAYLIST}"
LINK_FICHA_INSCRICAO:     "{LINK_FICHA_INSCRICAO}"        # Onboard pós-compra
LINK_FICHA_INTERESSE:     "{LINK_FICHA_INTERESSE}"        # Abre na Aula 4
LINK_GRUPO_WHATSAPP:      "{LINK_GRUPO}"
LINK_CHECKOUT:            "{LINK_CHECKOUT}"
LINK_SABADO:              "{LINK_SABADO}"                 # Zoom ou YT
EMOJI_REACAO:             "{EMOJI}"                       # Ex: 🚀
```

---

## 📊 Métricas-alvo consolidadas

| Indicador | Alvo mínimo | Alvo ideal |
|---|---|---|
| Comparecimento Aula 1 (ao vivo) | 30% dos inscritos | 40%+ |
| Retenção Aula 2 (vs Aula 1) | ≥ 70% da Aula 1 | 80%+ |
| Retenção Aulas 3, 4 e 5 (vs anterior) | ≥ 85% da aula anterior | 90%+ |
| Comparecimento Aula 6 / pitch (vs Aula 5) | ≥ 130% da Aula 5 | 150%+ |
| Conversão de produto | 7% | 10% |
| ROAS venda de ingresso | 1.0 | 1.25+ |
| ROAS venda de produto | 2.0 | 3.0+ |
| Preenchimento ficha interesse | 25% dos compradores | 40%+ |
| CTR criativos (tráfego) | 1.5%+ | 2.0%+ |
| Conversão da página de ingresso | 5% | 7%+ |

> **Nota:** retenção é calculada em relação ao **pico ao vivo** da aula anterior (maior número de espectadores simultâneos), não sobre o total de inscritos. A queda maior entre Aula 1 → Aula 2 (~30%) é esperada: filtra curiosos e mantém só quem vai de fato executar.

---

## 🗂️ Equipe mínima (referência operacional)

- **Expert** → grava aulas, aparece nos tira-dúvidas
- **Estrategista** → acompanha métricas, decide otimizações
- **Tráfego** → campanhas de venda de ingresso e produto
- **Customer Success / Mensageria** → roda WhatsApp/API, responde dúvidas
- *(Opcional)* **Designer/Copywriter** → criativos e páginas

> Com **2 pessoas** roda aceitável. Com **4** roda perfeito.

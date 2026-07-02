# 00 · Variáveis preenchidas — LPSG Leo Tabari

> Versão preenchida com dados reais do LPSG do Leo Tabari / Turbo Academy. Use como referência ao preencher seu próprio template.

---

## 🎭 Projeto

```yaml
NOME_ESPECIALISTA:        "Leo Tabari"
NICHO:                    "Marketing digital"
SUB_NICHO:                "Lançamento pago para infoprodutores"
NOME_EVENTO:              "Desafio LPSG"
SIGLA_EVENTO:             "LPSG"
AVATAR:                   "Infoprodutor 30-50 que já fatura entre R$5k-50k/mês com lançamento gratuito ou perpétuo, mas trava na escala e queima dinheiro em CPL."
BIG_IDEA:                 "E se o lead pagasse seu tráfego antes do evento começar?"
PLATAFORMA:               "Meta Ads"
TIPO_CAMPANHA:            "Advantage+ Shopping (ASC)"
```

---

## 💰 Economia da campanha

```yaml
TICKET_INGRESSO:          "R$ 62"
ROAS_ALVO_INGRESSO:       "1.0 (mínimo) · 1.25 (ideal)"
VALOR_PRODUTO:            "R$ 25.000 (Acelerador Turbo — vendido via evento, NÃO via campanha)"
CONVERSAO_EVENTO_ALVO:    "≥ 7% (ideal 10%)"
```

> No LPSG do Leo, o **Acelerador Turbo (R$25k)** é vendido apenas pelo pitch da Aula 6 + carrinho aberto na segunda. **Não há campanha de tráfego pra esse produto.** Recuperação é via WhatsApp/comercial.

---

## 📊 Métricas-alvo (validadas em produção)

### Campanha
```yaml
ROAS_ALVO_INGRESSO:       "≥ 1.0 (mínimo) · 1.25 (ideal)"
CPM_MAX:                  "≤ R$ 40"
```

### Criativo (3 métricas-chave)
```yaml
HOOK_RATE_MIN:            "≥ 20%"           # views 3s / impressões
HOOK_RATE_IDEAL:          "≥ 30%"
HOLD_RATE_MIN:            "≥ 5%"            # assistiu 75% / views 3s
HOLD_RATE_IDEAL:          "≥ 10%"
BODY_RATE_MIN:            "≥ 2%"            # comprou ingresso / assistiu 75%
BODY_RATE_IDEAL:          "≥ 5%"
```

### Página
```yaml
CONVERSAO_PAGINA_MIN:     "≥ 5% (não aceita menos no LPSG)"
CONVERSAO_PAGINA_IDEAL:   "≥ 7%"
```

---

## 🏗️ Estrutura da campanha (FIXA do LPSG)

```yaml
QUANTIDADE_CAMPANHAS:     "1"
QUANTIDADE_CONJUNTOS:     "1"
PUBLICO:                  "Advantage+ Audience (aberto, sem segmentação)"
QUANTIDADE_CRIATIVOS:     "15"
COMPOSICAO_CRIATIVOS:
  videos:                 "5"
  estaticos:              "5"
  carrosseis:             "5"
LOCALIZACAO:              "Brasil"
FAIXA_IDADE:              "25-65"
IDIOMA:                   "Português"
```

---

## 💸 Orçamento

```yaml
ORCAMENTO_INICIAL:        "R$ 100/dia (sempre)"
INCREMENTO_VERBA:         "Até +5% ao dia · após 3 dias com ROAS ≥ 1.0"
DECREMENTO_VERBA:         "Até -50% no dia · após 3 dias com ROAS < 1.0"
LIMIAR_DUPLICACAO:        "ROAS estável ≥ 1.0 por 5+ dias com verba ≥ R$ 300"
ORCAMENTO_TESTE_MINIMO:   "R$ 50/dia por campanha de teste (mínimo absoluto)"
LIMITE_TESTES_TOTAL:      "≤ 20% do orçamento total da operação"
EXEMPLO_LIMITE:           "Principal a R$1.000/dia → todos os testes somados ≤ R$200/dia"
```

---

## 🎬 Criativos

```yaml
DURACAO_VIDEO:            "30s (ideal 20-25s)"
FORMATOS_VIDEO:           "9:16 (Reels/Stories) + 1:1 (Feed)"
FORMATOS_ESTATICO:        "1:1 (Feed) + 9:16 (Stories) + 1.91:1 (Open Graph)"
FORMATOS_CARROSSEL:       "1:1 · 5-10 cards · último é CTA"
RENOVACAO_CRIATIVOS:      "5 por vez (1/3 do lote) · cada 30 dias"
```

---

## 🏷️ Nomenclatura padronizada (LPSG)

```yaml
SIGLA_PROJETO:            "LPS"                        # 3 letras pra projeto LPSG

PADRAO_CAMPANHA:          "LPS_{DDMMYY}_{TIPO}_{NUMERO}"
EXEMPLOS_CAMPANHA:
  - "LPS_120526_PRI_001"        # Principal (a que sempre roda)
  - "LPS_180526_ESC_002"        # Escala (duplicada da principal)
  - "LPS_200526_TES-CRI_003"    # Teste de criativo
  - "LPS_220526_TES-PAG_004"    # Teste de página com criativos validados
  - "LPS_250526_TES-OFE_005"    # Teste de oferta nova

PADRAO_CONJUNTO:          "aberto"                     # Padrão LPSG: Advantage+ Audience aberto

PADRAO_CRIATIVO:          "LPS_{FORMATO}_{HOOK_KEYWORD}_v{N}"
EXEMPLOS_CRIATIVO:
  - "LPS_vid_milhao_v1"         # vídeo · hook "milhão" · versão 1
  - "LPS_est_pague_v3"          # estático · hook "pague" · versão 3
  - "LPS_car_3etapas_v2"        # carrossel · hook "3 etapas" · versão 2

# Sequência final dos 15 criativos a ser definida pelo cliente
```

---

## 🔗 Tracking e ferramentas

```yaml
PIXEL:                    "Meta Pixel + Conversions API (CAPI)"
EVENTOS_MAPEADOS:         "ViewContent · InitiateCheckout · Purchase"
JANELA_ATRIBUICAO:        "7 dias clique · 1 dia visualização"
UTMS_PADRAO:              "utm_source=meta&utm_medium=paid&utm_campaign=lpsg_ingresso&utm_content={CRIATIVO_ID}"
DASHBOARD:                "dashboard-lpsg-turbo.html (Aula 4) + planilha Turbo"
```

---

## 📋 Time mínimo do tráfego LPSG

```yaml
GESTOR_TRAFEGO:           "1 pessoa cuida da campanha"
DESIGNER_CRIATIVOS:       "Produz vídeos/estáticos/carrosseis (5 + 5 + 5)"
COPYWRITER:               "Escreve hooks e copy dos criativos"
ROTINA_REUNIAO:           "Semanal (segunda) · 30 min · revisar métricas e decidir 1 ação"
```

> No LPSG do Leo, o squad inteiro do tráfego cabe em **1 pessoa de gestão** + **1 designer** + **1 copy** (3 pessoas). Pode até ser concentrado em 2 pessoas, com gestor que sabe escrever copy.

---

## 📈 Benchmarks reais por nicho (do Leo Tabari)

> Dados extraídos da call de mentoria 24/04/2026 entre Leo Tabari e o mentorado (exemplo) + Aulas 4 e 5 do LPSG.

| Nicho | Conversão evento | ROAS ingresso | Comportamento |
|---|---|---|---|
| Expert A (exemplo · escalado) | 6% | 1.0 | Faturando R$ 1.5M/mês com 5 criativos escalados (300 testados) |
| Aluno do Matheus (em ajuste) | 2% | 0-1 | Travado — diagnóstico: arrumar evento, não escalar tráfego |
| Casos com 9% (passado) | 9% | 1.25+ | Pico — agora reproduzindo |

### Padrões de decisão observados

| Situação | Decisão do Leo |
|---|---|
| Volume < 100 ingressos/semana | Não migrar pra modelo semanal ainda |
| Conversão evento < 7% | **Não escalar tráfego** — arrumar evento primeiro |
| ROAS ingresso "0 a 0" (sem imposto) | Aceitável temporariamente, alvo é 1.25 |
| CPM > R$ 40 | Sinal de fadiga — renovar criativo |
| CTR < 1.5% | Pausar criativo após R$ 100 gastos |
| Conversão página < 3% | Otimizar página antes de mexer no criativo |
| Campanha estável + R$ 300/dia + ROAS 1.0+ | **Duplicar** com novos criativos |

---

## 🎯 Bônus tsunami (referência da oferta — não da campanha)

> Não é tráfego, mas afeta o ROAS de produto pós-evento.

```yaml
BONUS_10MIN:              "50% off (R$ 12.500) + call individual com Leo"
BONUS_1H:                 "Estratégia Turbo (sessão coletiva)"
BONUS_3H:                 "40% off (R$ 15.000)"
BONUS_1DIA:               "30% off (R$ 17.500)"
DIA2_EM_DIANTE:           "R$ 25.000 (preço cheio)"
```

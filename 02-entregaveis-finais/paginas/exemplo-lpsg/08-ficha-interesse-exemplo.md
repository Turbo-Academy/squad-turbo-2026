# 08 · Ficha de Interesse — Exemplo LPSG (Acelerador Turbo)

> Versão preenchida do template `paginas/template/08-ficha-interesse.md` para o LPSG do Leo Tabari (Turbo Academy).
> Real, em produção em `lpsg.turboacademy.com.br/ficha-de-interesse`.

---

## 📋 Variáveis preenchidas

```yaml
# Identidade do produto principal
NOME_PRODUTO_PRINCIPAL:    "Acelerador Turbo"
TICKET_PRODUTO:            "R$ 25 mil"
PRAZO_ACOMPANHAMENTO:      "3 meses"
ROI_MULTIPLO_MIN:          "3"
ROI_MULTIPLO_MAX:          "5"
PRAZO_ROI:                 "nos próximos meses"
METODO:                    "Lançamento Pago Semanal"

# Posicionamento
TEMPO_LEITURA:             "menos de 3 minutos"
NOME_PROCESSO_SELECAO:     "seleção"
DIA_RITUAL_AO_VIVO:        "sábado"
RITUAL_AO_VIVO:            "tira-dúvidas"

# Tracking
PIXEL_VENDAS:              "AbCdEfGh1234567890Xy"           # VK Digital (cluster Hotmart)
GTM_ID:                    "GTM-P6273C6P"
WEBHOOK_FICHA:             "https://n8n.turboacademy.com.br/webhook/ficha-interesse"
URL_OBRIGADO:              "/ficha-de-interesse/obrigado"
```

---

## 🗺️ As 11 etapas (texto exato em produção)

### Header global

```
// FICHA DE INTERESSE
Acelerador de Lançamento Pago Semanal
Responda em menos de 3 minutos para participar da seleção.
```

### Etapa 1 · Identidade

```
Pergunta:  Antes de começar, me conta quem é você:
Tipo:      4 inputs
Campos:
  - Nome completo*       → placeholder "Seu nome completo"
  - E-mail*              → placeholder "seu@email.com"
  - WhatsApp com DDD*    → placeholder "(11) 99999-9999" · máscara automática
  - Instagram*           → placeholder "@seuusuario"
```

### Etapa 2 · Tempo de mercado

```
Pergunta:  Há quanto tempo você atua no digital?
Tipo:      radio (4)
Opções:
  ○ Ainda não comecei ou menos de 6 meses
  ○ De 6 meses a 1 ano
  ○ De 1 a 2 anos
  ○ Mais de 2 anos
```

### Etapa 3 · Estágio operacional (LPSG)

```
Pergunta:  Como está sua operação hoje?
Tipo:      radio (4)
Opções:
  ○ Ainda criando meu primeiro produto
  ○ Tenho produto, mas vendo de forma inconsistente
  ○ Vendo todo dia, mas trava na hora de escalar
  ○ Tenho estrutura e equipe, preciso escalar com método
```

### Etapa 4 · Funis do nicho (LPSG)

```
Pergunta:  Qual funil você roda hoje?
Sub:       (pode marcar mais de um)
Tipo:      checkbox multi (7)
Opções:
  □ Lançamento Gratuito
  □ Low-ticket
  □ Lançamento Pago                    ← funil-alvo do produto
  □ Perpétuo
  □ Mentoria
  □ Pós-graduação ou certificação
  □ Não rodo nenhum funil ainda
```

### Etapa 5 · Investimento educacional

```
Pergunta:  Quanto você já investiu em mentorias ou cursos nos últimos 12 meses?
Tipo:      radio (4)
Opções:
  ○ Menos de R$ 1 mil
  ○ De R$ 1 mil a R$ 5 mil
  ○ De R$ 5 mil a R$ 15 mil
  ○ Acima de R$ 15 mil
```

### Etapa 6 · Investimento em tráfego

```
Pergunta:  Quanto você investe em tráfego pago por mês?
Tipo:      radio (6)
Opções:
  ○ Não invisto em tráfego pago
  ○ Até R$ 3 mil/mês
  ○ De R$ 3 mil a R$ 10 mil/mês
  ○ De R$ 10 mil a R$ 30 mil/mês
  ○ De R$ 30 mil a R$ 50 mil/mês
  ○ Acima de R$ 50 mil/mês
```

### Etapa 7 · Faturamento

```
Pergunta:  Qual é o seu faturamento mensal hoje (digital + outras fontes)?
Tipo:      radio (5)
Opções:
  ○ Ainda não tenho faturamento relevante
  ○ Até R$ 5 mil/mês
  ○ De R$ 5 mil a R$ 20 mil/mês
  ○ De R$ 20 mil a R$ 50 mil/mês
  ○ Acima de R$ 50 mil/mês
```

### Etapa 8 · Equipe

```
Pergunta:  Você tem equipe no seu negócio digital?
Tipo:      radio (3)
Opções:
  ○ Não, faço tudo sozinho
  ○ Sim, 1 a 2 pessoas me ajudam
  ○ Sim, tenho equipe de 3 ou mais pessoas
```

### Etapa 9 · 🔥 Killer question

```
Pergunta:
  Se eu te acompanhar de perto por 3 meses dentro do ACELERADOR DO LPSG,
  e te garantir que você vai ter de 3 a 5 vezes o retorno do investimento
  nos próximos meses, você estaria disposto a investir aproximadamente
  R$ 25 mil nesse acompanhamento?

Tipo:      radio (3)
Opções:
  ○ Com certeza            ← peso 10 (HOT)
  ○ Tenho que pensar mais  ← peso 4 (WARM)
  ○ No momento não         ← peso 0 (COLD)
```

### Etapa 10 · História

```
Pergunta:
  Agora me conta um pouco da sua história no digital.
  Qual é o produto ou oferta que você vende hoje?
  Qual o seu maior desafio atualmente para escalar com Lançamento Pago Semanal?
  E como você acha que um acompanhamento próximo pode te ajudar a destravar
  esse próximo nível?

Tipo:      textarea
Placeholder: "Escreva aqui sua resposta..."
```

### Etapa 11 · Engajamento (tira-dúvidas de sábado)

```
Pergunta:
  No próximo sábado eu vou fazer um tira-dúvidas ao vivo e quero responder
  as suas dúvidas. Manda sua pergunta aberta aqui embaixo

Tipo:      textarea
Placeholder: "Escreva sua dúvida aqui..."
Botão:     Enviar
```

---

## 📊 Lead Score real (LPSG)

| Tier | Critério (real do projeto) | Volume típico | Rota |
|---|---|---|---|
| 🔴 **HOT** | Q9 = "Com certeza" + Q7 ≥ R$ 20k/mês + Q5 ≥ R$ 5k educação | ~8% das fichas | SDR liga em ≤ 24h |
| 🟡 **WARM** | Q9 = "Tenho que pensar" OU (Com certeza + Q7 < R$ 20k) | ~35% | Grupo VIP + nutrição 7 dias |
| ⚪ **COLD** | Q9 = "No momento não" OU Q7 = "sem faturamento" | ~57% | Nutrição perpétua (próximo LPSG) |

> **Calibração:** ajustada após 6 lançamentos. Targets de fechamento: HOT 25-40% · WARM 5-10% · COLD < 1%.

---

## 🔗 Como liga com o resto do projeto

| Estrutura | Conexão |
|---|---|
| `mensageria-lpsg` | FASE 3 dispara mensagens diferentes por tier após submit |
| `automacoes-lpsg` | n8n recebe webhook · escreve em Sheets · adiciona tag no ManyChat · dispara CAPI custom event |
| `oferta-lpsg` | R$ 25 mil bate com ticket do Acelerador · oferta valida ROI prometido |
| `dashboard-lpsg` | Módulo "Ficha" mostra: total submetidas · distribuição por tier · taxa de conversão Q9 → compra |
| `operacao-lpsg` | SDR/Closer recebem fila HOT priorizada |

---

## 🎯 Resultado em produção

- Conversão **ingresso → ficha submetida**: ~45% (target ≥ 40%)
- Conversão **ficha submetida → pitch**: ~75% dos HOT/WARM comparecem
- Conversão **HOT → compra Acelerador**: 32% (último lançamento)
- Tempo médio de preenchimento: 2min 40s (target < 3min ✅)

# 03 · Cronograma da semana — modelo perpétuo

> LPSG é semanal e contínuo. Toda segunda começa um novo ciclo de aulas + abre carrinho do ciclo anterior. Captação nunca para.

---

## 🔄 Princípio: 2 ciclos em paralelo · sempre

```
SEMANA W (atual)            SEMANA W+1 (próxima)
────────────────            ──────────────────
Aulas seg-sex 7h            Captação acontecendo agora
Pitch dom 20h               Leads entrando · viram tag PASSADO

SEMANA W-1 (carrinho)
────────────────
Carrinho aberto seg-sex
Recuperação D+1 a D+7 (sáb-sex+1)
```

**Toda semana o time orquestra 3 estados ao mesmo tempo:**
- **PRESENTE** — aulas + pitch do ciclo da semana
- **FUTURO** — carrinho aberto do ciclo da semana anterior
- **PASSADO** — captação trazendo leads pro ciclo da próxima semana

---

## 📅 Visão macro · ciclo de vida de 1 ciclo (3 semanas)

```
W-1   CAPTAÇÃO (perpétua)        ← lead entra na semana ISO X · vira PASSADO de Cycle-X
W     EVENTO ATIVO                ← aulas + pitch · vira PRESENTE
W+1   CARRINHO + RECUPERAÇÃO     ← carrinho seg-sex · recuperação até D+7
                                   depois EX-ALUNO · pausa de 14d antes de re-engagement
```

> **Captação** não é "fase" · é estado contínuo. Sempre há ads rodando · sempre chegando lead pro próximo ciclo.

---

## 📅 Uma semana típica · seg-dom (operação completa)

### SEGUNDA — D-DAY

```yaml
05:00:                  "Time desperta · canal #ops aberto"

06:00:                  "Café · checagem técnica final"
                        # Confirma:
                        # - Aula 1 vai ao ar (W)
                        # - Carrinho do ciclo anterior abre (W-1)
                        # - Captação rodando normalmente

06:30:                  "Smoke test do disparo das 06:50"
                        "Confirma cron ativo"

06:45:                  "Disparo 'lembrete A1' (W) + lembrete carrinho ficha (W-1)"
                        # 2 disparos coordenados na mesma janela

06:50:                  "ABRE CARRINHO FICHA do ciclo W-1 (10min)"
                        "Mensageria dispara · cupom FICHA10"
                        "Closer atento ao SLA ≤5min"

07:00:                  "ABRE CARRINHO GERAL do ciclo W-1"
                        "Aula 1 do ciclo W começa (formato interno: ao vivo OU pré-gravado · decisão do expert)"
                        "Expert apresenta ou monitora chat · time acompanha"

08:00:
  EVENTO_W:             "Pós-aula A1 · review (15min)"
  CARRINHO_W-1:         "Fecha janela 1h · dispara 'janela 3h'"

10:00:
  CARRINHO_W-1:         "Fecha 3h · dispara 'janela 1day' (preço cheio)"

12:00-14:00:            "Almoço escalonado (closer NUNCA fica fora)"

14:00-22:00:
  EVENTO_W:             "Edição A1 começa · social cobre"
  CARRINHO_W-1:         "Closer atendendo · disparos urgência (12h · 16h · 20h)"
  CAPTACAO:             "Tráfego monitora ROAS · ajustes leves"

20:00:                  "ÁUDIO NOTURNO A1 dispara (ciclo W)"

23:00:
  CARRINHO_W-1:         "Last call dia 1 do carrinho"

23:59:
  CARRINHO_W-1:         "Fecha janela 1day"

00:00:                  "Status: vendas dia 1 do W-1"
```

### TERÇA — Aula 2 + carrinho W-1 dia 2

```yaml
06:30:                  "Time online"
06:45:                  "Lembrete A2 (W) + lembrete carrinho dia 2 (W-1)"
07:00:                  "Aula 2 ao vivo"
08:00:                  "Daily 15min"
08:30:                  "Disparo manhã carrinho (W-1)"
12:00:                  "Disparo almoço (depoimento · prova)"
14:00:                  "Closer · checkout iniciado nas últimas 24h"
20:00:                  "Áudio noturno A2 (W) + disparo noite carrinho (W-1)"
22:00:                  "Resumo do dia"
```

### QUARTA — Weekly Planning + Aula 3

```yaml
06:30 - 08:00:          "Mesma rotina seg/ter (lembrete · A3 · carrinho)"
08:30:                  "Disparo manhã carrinho"
10:00:                  "WEEKLY PLANNING (60min)"
                        "Pauta: status W · status W-1 · próximas decisões"
12:00:                  "Disparo almoço carrinho"
20:00:                  "Áudio noturno A3 + disparo carrinho"
```

### QUINTA — Aula 4 (pré-pitch) + ficha de interesse

```yaml
06:30 - 08:00:          "Lembrete A4 + lembrete carrinho"
07:00:                  "Aula 4 ao vivo"
08:30:                  "Disparo manhã carrinho"
11:00:                  "DISPARO FICHA DE INTERESSE (ciclo W)"
                        # Lead que assistiu A4 recebe Typeform
12:00:                  "Disparo almoço carrinho"
20:00:                  "Áudio noturno A4 + disparo carrinho"
```

### SEXTA — Aula 5 + LAST DAY do carrinho W-1

```yaml
06:30 - 08:00:          "Lembrete A5 + lembrete LAST DAY"
07:00:                  "Aula 5 ao vivo"
08:30:                  "Disparo LAST DAY carrinho W-1"
10:00:                  "WEEKLY RETRO (60min · com Expert)"
                        "Foco: conteúdo + criativos da próxima semana"
12:00:                  "Disparo 12h pra fechar"
16:00:                  "Disparo 8h pra fechar"
18:00:                  "Disparo 6h pra fechar"
20:00:                  "Disparo 4h pra fechar + áudio noturno A5"
22:00:                  "Disparo 2h pra fechar"
23:00:                  "Disparo 1h pra fechar"
23:30:                  "Último disparo · 30min"
23:59:                  "CARRINHO W-1 FECHA"
00:00:                  "Confraternização · independente do resultado"
```

### SÁBADO — Tira-dúvidas + recuperação começa

```yaml
09:00:                  "Daily quick"
09:30:                  "Captura de perguntas no ManyChat (ciclo W)"
10:00-12:00:            "Tira-dúvidas LIVE do ciclo W (Expert + Operação modera)"
14:00:                  "Recuperação D+1 do W-1 começa (closer)"
                        # Quem abandonou checkout volta no radar
14:00-18:00:            "Preparação do pitch domingo (W)"
18:00:                  "Expert · foco mental"
20:00:                  "Convite final pro pitch (mensageria)"
```

### DOMINGO — Pitch (Aula 6)

```yaml
12:00:                  "Disparo D-8h pitch"
14:00:                  "Recuperação D+2 do W-1 (closer)"
18:00:                  "Disparo D-2h pitch"
19:00:                  "Time online · canal #pitch ativo"
19:50:                  "Disparo 'aula começa em 10min · te vejo lá'"
20:00-22:00:            "Pitch (Aula 6 · 2h · formato interno: ao vivo OU pré-gravado com Q&A · decisão do expert)"
22:00:                  "Briefing pós-pitch (15min)"
                        "Closer mapeia top 20 leads quentes pra DM segunda"
23:59:                  "Encerra ciclo W · vira EX-ALUNO até segunda"
                        "Time prepara pra W+1 que começa amanhã"
```

---

## 🔁 Continuidade · captação não para

Enquanto o time toca aulas + carrinho, o **tráfego pago roda em paralelo · 24/7**:

```yaml
TRAFEGO_PERPETUO:
  - "Campanha ASC ativa o tempo todo"
  - "Bateladas de 15 criativos rodando · novas a cada 7-14 dias"
  - "ROAS monitorado diariamente"
  - "Lead que entra na seg → vira tag PASSADO do ciclo W+1 (próxima semana)"

NOMENCLATURA_DE_CRIATIVO:
  - "Não usa data do evento (porque é semanal)"
  - "Usa data da batelada · ex: LPS_120526_EST_001"
  - "Criativo que performa bem fica rodando ciclos seguidos · não 'morre' no fim do ciclo"
```

---

## 📊 Distribuição da carga semanal por papel (Tier 1 · 2 pessoas)

| Dia | Expert | Estrategista |
|---|---|---|
| Seg | 7-8h aula A1 · 18-19h grava áudio noturno | 5h-00h: tudo · carrinho · aula · captação · automação |
| Ter | 7-8h A2 · 18-19h áudio noturno | Carrinho + aula + edição leve |
| Qua | 7-8h A3 · 18-19h áudio noturno · 10h Weekly Planning | Mesmo + planning |
| Qui | 7-8h A4 · 18-19h áudio noturno · 11h ficha | Mesmo + ficha + closer ativo |
| Sex | 7-8h A5 · 10h Weekly Retro · 18-19h áudio | LAST DAY · disparos cada 2h · closer pico |
| Sáb | 10-12h tira-dúvidas · 14-16h ensaio pitch | Modera live · recuperação D+1 · prep pitch |
| Dom | 18-22h pitch | Suporte pitch · captura sinais · prep próxima semana |

> **Tier 1 (2 pessoas) é puxado.** Por isso Estrategista precisa ser SÊNIOR e o gatilho de Tier 2 (R$ 600k+ líquido) é fundamental pra não queimar.

---

## ⏰ Visão consolidada · 1 página

```
┌────────────────────────────────────────────────────────────────────┐
│  TODA SEGUNDA · DAY 1                                                │
│  - 06:50 abre carrinho ficha (ciclo W-1)                            │
│  - 07:00 abre carrinho geral (W-1) + Aula 1 (W)                     │
│  - Smoke tests 06:30 · áudio noturno A1 às 20h                      │
├────────────────────────────────────────────────────────────────────┤
│  TER-QUI                                                              │
│  - 7h aula A2/A3/A4 (W) · qui 11h ficha                             │
│  - Disparos carrinho 8h/12h/20h (W-1)                               │
│  - Áudio noturno 20h (W)                                             │
│  - Quarta 10h Weekly Planning                                        │
├────────────────────────────────────────────────────────────────────┤
│  SEXTA                                                                │
│  - 7h Aula 5 (W) · 10h Weekly Retro                                 │
│  - LAST DAY carrinho (W-1) · disparos cada 2h tarde/noite           │
│  - 23:59 fecha carrinho (W-1)                                        │
├────────────────────────────────────────────────────────────────────┤
│  SÁBADO                                                               │
│  - 10h tira-dúvidas (W) · prep pitch                                │
│  - Recuperação D+1 carrinho que fechou (W-1)                         │
├────────────────────────────────────────────────────────────────────┤
│  DOMINGO                                                              │
│  - 20h pitch ao vivo (W)                                             │
│  - 23:59 ciclo W fecha · vira W-1 amanhã                            │
├────────────────────────────────────────────────────────────────────┤
│  🔁 CAPTAÇÃO 24/7 PERPÉTUA · TRÁFEGO NUNCA PARA                      │
│  Lead que entra hoje → ciclo da próxima semana ISO disponível       │
└────────────────────────────────────────────────────────────────────┘
```

---

## ✅ Checklist do cronograma perpétuo

```
[ ] Time entendeu modelo: 2 ciclos em paralelo TODA semana
[ ] Captação configurada como contínua (não 'liga em D-X')
[ ] Smoke test 06:30 toda segunda virou rotina
[ ] Closer escalonado pra cobertura seg 5h - sex 00h
[ ] Weekly Planning quarta 10h com pauta dos 2 ciclos
[ ] Weekly Retro sexta 10h foca próxima semana (W+1 já vindo)
[ ] Recuperação D+1 a D+7 do carrinho que fechou agendada
[ ] Métricas separadas por ciclo (W vs W-1)
[ ] Bateladas de criativos liberadas a cada 7-14 dias (não por edição)
[ ] Time sabe que NÃO TEM 'semana off' · só semanas mais leves
```

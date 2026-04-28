# 08 · Sistema de tags e fases — semana ISO + ciclo de vida

> Cada lead carrega a tag da semana do evento + a fase atual do funil. 4 fases · transição automática.
> **LPSG é PERPÉTUO.** Toda semana há transição automática · novos ciclos começando · captação contínua.

---

## 🎯 Princípio: 1 tag de identidade + 1 tag de fase

```
Tag de identidade:   LPSG-W{NN}                        # nunca muda · grava a edição
Tag de fase:         LPSG-W{NN}-{FASE}                 # muda automático (4 fases)
```

**Por que 2 tags?**
- Identidade preserva histórico (mesmo lead pode passar por várias edições)
- Fase determina qual mensageria/automação dispara

---

## 📅 Tag de identidade · número da semana ISO

### Cálculo

A tag base usa o **número da semana ISO** do ano em que o evento (5 aulas) acontece.

```yaml
FORMATO:                  "LPSG-W{NN}"
                          # NN = ISO week number do ANO DO EVENTO

EXEMPLOS:
  Evento 12-18 maio 2026: "LPSG-W20"     # semana 20 de 2026
  Evento 25-31 ago 2026:  "LPSG-W35"     # semana 35 de 2026
  Evento 11-17 jan 2027:  "LPSG-W02"     # semana 2 de 2027
```

> Sempre usar **ISO 8601 week numbering** (segunda como primeiro dia · semanas 01 a 53). Não confundir com numeração americana ou brasileira.

### Função utilitária (n8n · JS)

```javascript
function getISOWeek(date) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

function getEventTag(eventStartDate) {
  const isoWeek = getISOWeek(eventStartDate);
  const weekNum = isoWeek.split('-W')[1];
  return `LPSG-W${weekNum}`;
}

// Uso
getEventTag("2026-05-12") // → "LPSG-W20"
```

---

## 🌊 As 4 fases do ciclo de vida (modelo perpétuo)

```
PASSADO (W-1)           PRESENTE (W0)           FUTURO (W+1)        EX-ALUNO (W+2+)
─────────────           ─────────────           ─────────────       ───────────────
Semana ANTERIOR         Semana DO evento        Semana do           Pós-fechamento
ao evento               (segunda a domingo)     carrinho aberto     do carrinho
                                                (seg-sex)
captação                aulas + pitch           vendas              próximo ciclo
aquecimento             5 aulas + pitch dom     4 janelas tsunami   re-engagement
qualificação            engajamento             SLA closer          recuperação tardia
```

> **LPSG é perpétuo.** Toda semana ISO há leads em TODAS as fases simultaneamente:
> - Leads em PASSADO (captados nessa semana · vão pitch semana que vem)
> - Leads em PRESENTE (assistindo aulas · pitch domingo)
> - Leads em FUTURO (carrinho aberto · ciclo da semana anterior)
> - Leads em EX-ALUNO (recuperação de carrinhos antigos)
>
> A transição entre fases acontece **toda segunda 00:00** (cron 23:50 do domingo move PRESENTE→FUTURO · captação contínua alimenta PASSADO).

### Calendário de UM ciclo (exemplo: ciclo LPSG-W20 · 2026)

> Lembrete: ciclos rodam em PARALELO. Enquanto LPSG-W20 está em PRESENTE (semana 20), o ciclo LPSG-W19 está em FUTURO (carrinho aberto) e LPSG-W21 está em PASSADO (sendo captado).

```yaml
SEMANA_19 (5-11 maio 2026):
  fase:                   "PASSADO"
  tag_lead:               "LPSG-W20-PASSADO"
  acoes:
    - Anúncios rodando (captação)
    - Onboarding pós-compra do ingresso
    - Aquecimento pré-evento
    - Mensagens "preparação · falta X dias"

SEMANA_20 (12-18 maio 2026):
  fase:                   "PRESENTE"
  tag_lead:               "LPSG-W20-PRESENTE"
  acoes:
    - Aulas seg-sex 7h
    - Áudios noturnos
    - Ficha de interesse (qui)
    - Tira-dúvidas (sáb 10h)
    - Pitch (dom 20h)

SEMANA_21 (19-23 maio 2026):
  fase:                   "FUTURO"
  tag_lead:               "LPSG-W20-FUTURO"
  acoes:
    - Carrinho ABRE seg 06:50 (ficha) e 07:00 (geral)
    - 4 janelas do tsunami
    - SLA closer ≤5min
    - Carrinho FECHA sex 23:59
    - Disparos de urgência

SEMANA_22+ (24 maio em diante):
  fase:                   "EX-ALUNO-LPSG"
  tag_lead:               "LPSG-W20-EX-ALUNO" + tag global "EX-ALUNO-LPSG"
  acoes:
    - Recuperação tardia D+1 a D+7 (até final de W22)
    - Re-engagement pra próxima edição
    - Conteúdo orgânico · sem Marketing
    - Pulando direto pra LPSG-W{próxima}-PASSADO quando virar
```

---

## 🏷️ Taxonomia completa de tags

### Tags primárias (nunca mudam · grava histórico)

```yaml
LPSG-W{NN}:                       "Edição que o lead participou"
                                  # ex: LPSG-W20 · LPSG-W35

LPSG-EDICAO-{NN/AA}:              "Alias humano-amigável"
                                  # ex: LPSG-01-26 · LPSG-02-26

EX-ALUNO-LPSG:                    "Tag global · participou de pelo menos 1 edição"
                                  # nunca remove · acumula histórico
```

### Tags de fase (mudam automático)

```yaml
LPSG-W{NN}-PASSADO:               "Em captação · semana antes do evento"
LPSG-W{NN}-PRESENTE:              "Durante o evento · 5 aulas + pitch"
LPSG-W{NN}-FUTURO:                "Carrinho aberto · semana das vendas"
LPSG-W{NN}-EX-ALUNO:              "Carrinho fechado · em recuperação ou retido"
```

### Tags de comportamento (acumulam · não substituem)

```yaml
LPSG-W{NN}-INSCRITO_INGRESSO:     "Comprou ingresso (R$ 62)"
LPSG-W{NN}-PRESENTE-AULA-1:       "Apareceu na Aula 1"
LPSG-W{NN}-PRESENTE-AULA-2:       "Apareceu na Aula 2"
LPSG-W{NN}-PRESENTE-AULA-3:       "Apareceu na Aula 3"
LPSG-W{NN}-PRESENTE-AULA-4:       "Apareceu na Aula 4"
LPSG-W{NN}-PRESENTE-AULA-5:       "Apareceu na Aula 5"
LPSG-W{NN}-PRESENTE-AULA-6:       "Assistiu pitch (Aula 6 · domingo)"
LPSG-W{NN}-FICHA-PREENCHIDA:      "Preencheu ficha de interesse"
LPSG-W{NN}-FUTURO-CHECKOUT:       "Iniciou checkout no carrinho"
LPSG-W{NN}-FUTURO-COMPROU:        "Comprou produto (Acelerador)"
LPSG-W{NN}-FUTURO-RECUPERADO:     "Comprou na recuperação D+1 a D+7"
LPSG-W{NN}-FUTURO-REJEITOU:       "Disse explicitamente que não quer"
```

### Tags globais (cross-edição)

```yaml
ALUNO-ATIVO-ACELERADOR:           "Pagou produto · aluno ativo"
EX-ALUNO-LPSG:                    "Já participou de qualquer LPSG"
COMPRADOR-MULTI-EDICAO:           "Comprou em ≥ 2 edições"
PROMOTER-NPS:                     "Deu NPS ≥ 9"
```

---

## 🔄 Transição automática entre fases

### Workflow `transicao-fase-automatica` (n8n cron diário 23:50)

```javascript
// Roda todo dia 23:50 · transiciona leads de fase quando entra em nova semana
schedule.cron("50 23 * * *", async () => {

  const today = new Date();
  const eventTag = "LPSG-W20"; // pega da config do projeto · uma por edição ativa
  const eventStart = new Date("2026-05-12"); // segunda da semana W20

  const eventWeekISO = getISOWeek(eventStart);
  const todayWeekISO = getISOWeek(today);

  let novaFase;

  // Lógica de transição
  if (todayWeekISO === getWeekBefore(eventWeekISO)) {
    novaFase = "PASSADO";
  } else if (todayWeekISO === eventWeekISO) {
    novaFase = "PRESENTE";
  } else if (todayWeekISO === getWeekAfter(eventWeekISO)) {
    novaFase = "FUTURO";
  } else if (todayWeekISO > getWeekAfter(eventWeekISO)) {
    novaFase = "EX-ALUNO";
  } else {
    return; // ainda nem entrou em PASSADO · não mexe
  }

  // Buscar todos leads com tag base LPSG-W20
  const leads = await sheets.get({
    range: "Leads!A:Z",
    filter: { tags: { contains: eventTag } }
  });

  for (const lead of leads) {
    // Detectar fase atual do lead
    const faseAtual = lead.tags
      .split(",")
      .find(t => t.startsWith(`${eventTag}-`) &&
                 ["PASSADO","PRESENTE","FUTURO","EX-ALUNO"].some(f => t.endsWith(f)));

    if (faseAtual?.endsWith(novaFase)) continue; // já está na fase certa

    // Remover tag de fase antiga · adicionar nova
    const tagsLimpas = lead.tags
      .split(",")
      .filter(t => !t.startsWith(`${eventTag}-`) ||
                   !["PASSADO","PRESENTE","FUTURO","EX-ALUNO"].some(f => t.endsWith(f)));

    tagsLimpas.push(`${eventTag}-${novaFase}`);

    // Adicionar tag global EX-ALUNO-LPSG quando entra em fase EX-ALUNO
    if (novaFase === "EX-ALUNO" && !tagsLimpas.includes("EX-ALUNO-LPSG")) {
      tagsLimpas.push("EX-ALUNO-LPSG");
    }

    // Atualizar Sheets
    await sheets.update({
      range: `Leads!{row}:Z`,
      values: { tags: tagsLimpas.join(",") }
    });

    // Sincronizar com ManyChat
    await manychat.removeTags({
      subscriber_id: lead.manychat_id,
      tags: lead.tags.split(",").filter(t => t.includes(eventTag))
    });
    await manychat.addTags({
      subscriber_id: lead.manychat_id,
      tags: tagsLimpas.filter(t => t.includes(eventTag) || t === "EX-ALUNO-LPSG")
    });
  }

  console.log(`[${todayWeekISO}] Transição → ${novaFase} · ${leads.length} leads`);
});
```

---

## 💬 Mensageria por fase (mapeamento · de mensageria-lpsg)

### Fase PASSADO (semana W-1)

```yaml
DURACAO:                  "Domingo (W-2 dia 7) → domingo (W-1 dia 7)"
OBJETIVO:                 "Captação · qualificação · aquecimento"
TIPO_MENSAGEM:            "70% Utility (confirmações) / 30% Marketing (aquecimento)"

CRONOGRAMA_BASE:
  - "Imediato pós-compra:  boas-vindas (Utility)"
  - "D-7 antes A1:         lembrete + cronograma do evento"
  - "D-3 antes A1:         preparação (Marketing · valor)"
  - "D-1 antes A1:         véspera · clima"
  - "D-12h antes A1:       last call entrar no grupo"
  - "D-2h antes A1:        20 min antes começar"

TRIGGER_n8n:               "Workflow 03-onboarding + cron pre-evento"
```

### Fase PRESENTE (semana W0 · evento)

```yaml
DURACAO:                  "Segunda 0h → domingo 23:59 (W0)"
OBJETIVO:                 "Comparecimento + retenção + ficha + pitch"
TIPO_MENSAGEM:            "85% Utility (lembretes de aula) / 15% Marketing (áudios)"

CRONOGRAMA_BASE:
  SEGUNDA: "06:45 lembrete A1 · 20:00 áudio noturno A1"
  TERCA:   "06:45 lembrete A2 · 20:00 áudio noturno A2"
  QUARTA:  "06:45 lembrete A3 · 20:00 áudio noturno A3"
  QUINTA:  "06:45 lembrete A4 · 11:00 ficha · 20:00 áudio A4"
  SEXTA:   "06:45 lembrete A5 · 20:00 áudio A5 · 21:00 convite pitch"
  SABADO:  "09:00 tira-dúvidas · 20:00 convite pitch"
  DOMINGO: "12:00 D-8h pitch · 18:00 D-2h · 19:50 'tô entrando'"

TRIGGER_n8n:               "Workflow 04 (lembretes) + 05 (áudios) + 06 (ficha) + 07 (aquecimento pitch)"
```

### Fase FUTURO (semana W+1 · carrinho)

```yaml
DURACAO:                  "Segunda 0h → sexta 23:59 (W+1)"
OBJETIVO:                 "Vendas no carrinho aberto · 4 janelas + recuperação"
TIPO_MENSAGEM:            "60% Utility (janelas confirmadas) / 40% Marketing (urgência)"

CRONOGRAMA_BASE:
  SEGUNDA:
    - "06:45 lembrete abertura"
    - "06:50 ABRE FICHA · janela 10min"
    - "07:00 ABRE GERAL · janela 1h"
    - "08:00 fecha 1h · janela 3h"
    - "10:00 fecha 3h · janela 1day (cheio)"
    - "23:00 last call dia 1"
  TERCA:    "08h · 12h · 20h (3 disparos)"
  QUARTA:   "08h · 12h · 20h"
  QUINTA:   "08h · 12h · 20h"
  SEXTA:    "08h LAST DAY · 12h · 18h · 22h · 23:30 · 23:59 FECHA"

TRIGGER_n8n:               "Workflow 08 (tsunami) + 09 (checkout SLA) + 10 (compra)"
```

### Fase EX-ALUNO (W+2 e depois)

```yaml
DURACAO:                  "Sábado da W+1 → próxima edição (∞)"
OBJETIVO:                 "Recuperação tardia · re-engagement · conteúdo"
TIPO_MENSAGEM:            "100% Utility ou orgânico · ZERO Marketing pesado"

DOIS_GRUPOS:
  COMPRADORES (LPSG-W{NN}-FUTURO-COMPROU):
    - "Onboarding aluno (Utility)"
    - "Acesso ao curso · suporte"
    - "NPS depois de 30d"
    - "Promotor → indicação próxima edição"

  NAO_COMPRADORES (LPSG-W{NN}-EX-ALUNO sem -COMPROU):
    - "D+1 a D+7 recuperação tardia (último impulso)"
    - "Pausa de 14 dias (descansa o número)"
    - "Re-engagement orgânico (conteúdo · sem oferta)"
    - "Quando próxima edição abrir → tag PASSADO de LPSG-W{próxima}"

TRIGGER_n8n:               "Workflow 11 (recuperação) + scheduled jobs de re-engagement"
```

---

## 📊 Sheets · estrutura com tags

### Coluna `tags` na aba Leads

```yaml
TIPO:                     "Texto separado por vírgula"
EXEMPLO:                  "LPSG-W20,LPSG-W20-FUTURO,LPSG-W20-INSCRITO_INGRESSO,LPSG-W20-PRESENTE-AULA-1,LPSG-W20-PRESENTE-AULA-2,LPSG-W20-PRESENTE-AULA-4,LPSG-W20-FICHA-PREENCHIDA,EX-ALUNO-LPSG"

REGRAS:
  - "Sempre lowercase a parte da tag (LPSG já é maiúscula)"
  - "Sempre separadas por vírgula sem espaço"
  - "Sem duplicatas"
  - "Ordenadas por tipo: identidade primeiro · fase no meio · comportamento depois"
```

### Aba `Tags-Historico` (auditoria)

```yaml
COLUNAS:
  - "timestamp"
  - "phone (lead)"
  - "acao (added | removed)"
  - "tag"
  - "workflow_origem"
  - "fase_atual_no_momento"

USO:                      "Debug · entender por que lead tá em fase X"
                          # 50k linhas/mês esperado · particionar por edição
```

---

## 🪝 Webhooks afetados pelas tags

| Webhook | Adiciona tag |
|---|---|
| `/hotmart-compra` | `LPSG-W{NN}` + `LPSG-W{NN}-INSCRITO_INGRESSO` + `LPSG-W{NN}-PASSADO` (se ainda na W-1) |
| `/youtube-presence-aula` | `LPSG-W{NN}-PRESENTE-AULA-{N}` |
| `/ficha-interesse` | `LPSG-W{NN}-FICHA-PREENCHIDA` |
| `/hotmart-checkout-iniciado` | `LPSG-W{NN}-FUTURO-CHECKOUT` |
| `/hotmart-compra` (produto) | `LPSG-W{NN}-FUTURO-COMPROU` + `ALUNO-ATIVO-ACELERADOR` |
| `/lead-respondeu` (calor) | `LPSG-W{NN}-EM-RECUPERACAO-HUMANO` |

---

## 🎯 Como segmentar disparos pela tag

### Exemplo: lembrete da Aula 3 só pra quem assistiu A1 ou A2

```javascript
const leads = await sheets.get({
  range: "Leads!A:Z",
  filter: {
    tags: {
      contains_any: ["LPSG-W20-PRESENTE-AULA-1", "LPSG-W20-PRESENTE-AULA-2"],
      not_contains: "LPSG-W20-FUTURO-COMPROU"  // já comprou · não enche o saco
    }
  }
});
```

### Exemplo: recuperação só pra quem iniciou checkout e não comprou

```javascript
const leads = await sheets.get({
  range: "Leads!A:Z",
  filter: {
    tags: {
      contains: "LPSG-W20-FUTURO-CHECKOUT",
      not_contains: "LPSG-W20-FUTURO-COMPROU"
    }
  }
});
```

### Exemplo: convite pra próxima edição (LPSG-W35)

```javascript
const leads = await sheets.get({
  range: "Leads!A:Z",
  filter: {
    tags: {
      contains: "EX-ALUNO-LPSG",
      not_contains: ["LPSG-W35", "ALUNO-ATIVO-ACELERADOR"]  // exceto quem já comprou produto
    }
  }
});
```

---

## ⚠️ Regras de ouro

```yaml
NAO_FAZER:
  - "NUNCA remover tag de identidade (LPSG-W{NN})"
  - "NUNCA acumular múltiplas tags de fase (PASSADO + PRESENTE)"
  - "NUNCA disparar Marketing pra lead em fase EX-ALUNO sem cooldown de 14 dias"
  - "NUNCA misturar leads de edições diferentes na mesma campanha (segmentação ruim)"

SEMPRE_FAZER:
  - "Sincronizar tags entre Sheets ↔ ManyChat (toda mudança)"
  - "Logar transição em Tags-Historico"
  - "Validar fase antes de disparar (se está em FUTURO mas a campanha é PRESENTE · ignorar)"
  - "Adicionar EX-ALUNO-LPSG na primeira vez que lead transita pra fase EX-ALUNO"
```

---

## ✅ Checklist de implementação

```
[ ] Função getEventTag() implementada (ISO week)
[ ] Workflow `transicao-fase-automatica` (cron 23:50 daily) ativo
[ ] Coluna `tags` na aba Leads · padrão CSV
[ ] Aba `Tags-Historico` criada
[ ] ManyChat com mesmas tags sincronizadas
[ ] Webhooks adicionando tags corretas (compra · ficha · checkout · etc.)
[ ] Cooldown de 14 dias antes de disparar Marketing pra EX-ALUNO
[ ] Filtros por tag testados nos workflows de disparo
[ ] Tag global EX-ALUNO-LPSG adicionada na transição pra fase EX-ALUNO
[ ] Documentação no time: "leads carregam tag da semana ISO + fase atual"
```

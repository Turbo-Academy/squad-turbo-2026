# 00 · Variáveis preenchidas — Mensageria LPSG (Leo Tabari)

> Versão preenchida do template de mensageria com dados reais do **LPSG do Leo Tabari** · Turbo Academy.
> Use junto com `template/mensageria-template.md` pra ver as mensagens completas com substituições aplicadas.

---

## 📋 Variáveis principais

```yaml
PROJETO:
  nome_especialista:        "Leo Tabari"
  tratamento_plural:        "tubos"                              # identidade do canal
  nome_evento:              "Desafio LPSG"
  nicho:                    "Lançamento pago semanal"
  promessa_principal:       "Construa seu Lançamento Pago Semanal Gravado em 7 dias"

DATAS:
  dia_aula_1:               "Segunda · 12/05"                    # exemplo de uma edição
  horario_aulas:            "07:00"
  horario_pitch:            "20:00 (domingo)"
  horario_tiraduvidas:      "10:00 (sábado)"

AULAS:
  tema_aula_1:              "Fundamentação · O LPSG que fatura R$ 1M/mês"
  tema_aula_2:              "Construção · Criando seu evento com Claude Code"
  tema_aula_3:              "Automação · Equipe enxuta sem demandar o Expert"
  tema_aula_4:              "Pré-pitch · Otimização do funil + abertura da ficha"
  tema_aula_5:              "Tráfego · Campanhas Meta sem gestor especialista"
  tema_aula_6:              "Pitch · CHECKLIST + Super Bônus do Acelerador Turbo"

EMOJI_REAÇÃO:               "🚀"                                 # identidade visual do evento

LINKS:
  youtube_aulas:            "youtube.com/@leotabari"
  playlist:                 "(criada por edição · vai por mensagem)"
  ficha_inscricao:          "lpsg.turboacademy.com.br/ficha-inscricao"
  ficha_interesse:          "lpsg.turboacademy.com.br/ficha-de-interesse"
  grupo_whatsapp:           "(WhatsApp dinâmico por edição)"
  checkout:                 "pay.hotmart.com/{...}"
  tiradúvidas_sabado:       "(link do Zoom/YouTube por edição)"

PREÇOS:
  valor_base:               "R$ 17.500"                          # ancoragem inicial
  valor_final:              "R$ 25.000"                          # preço cheio do Acelerador

PRODUTO_PRINCIPAL:
  nome:                     "Acelerador Turbo"
  duracao_acompanhamento:   "3 meses"
  promessa_roi:             "3x a 5x do investimento nos próximos meses"
  bonus_premium_dia1:       "Call 1:1 com Leo + acesso vitalício a versões futuras"
```

---

## 🎯 Mapa de fases (LPSG real)

| Fase | Quando | Tipo de mensagem |
|---|---|---|
| **1 · Onboarding** | Logo após compra do ingresso | Boas-vindas + 3 passos (ficha, grupo, pacto OK) |
| **2 · Antecipação** | Dias antes da Aula 1 | Aquecimento · próximo da segunda |
| **3 · Durante o evento** | Seg a Sex (5 aulas) | Pré-aula · pós-aula · áudio noturno · gancho próximo dia |
| **4 · Quinta** | Após Aula 4 (pré-pitch) | Reforço da ficha de interesse |
| **4-B · Pós-ficha (NOVO)** | 15 min após submit | **Mensagem por tier (HOT/WARM/COLD)** |
| **5 · Sábado** | Tira-dúvidas ao vivo | Convite + replay |
| **6 · Domingo** | Pitch | Hoje é o dia · começa em 1h · começou |
| **7 · Carrinho** | Segunda 7h | Bônus 10 min · 1ª hora · 3h · 1 dia |

---

## 💬 Tags ManyChat (sistema completo)

```yaml
TAGS_INSCRICAO:
  - "inscrito-ingresso"                # após compra
  - "grupo-entrou"                     # bot detectou no WhatsApp

TAGS_ENGAJAMENTO_AULAS:
  - "presente-aula-1" ... "presente-aula-6"
  - "respondeu-OK-aula-N"

TAGS_FICHA:
  - "ficha-iniciada"                   # começou a preencher
  - "ficha-submetida"                  # finalizou
  - "tier-hot"                         # killer question = "Com certeza" + alta capacidade
  - "tier-warm"                        # intenção média OU capacidade média
  - "tier-cold"                        # baixa intenção/capacidade

TAGS_VENDA:
  - "comprou-acelerador"
  - "abandonou-checkout"
  - "recuperado-D1" ... "recuperado-D7"

TAGS_PERPÉTUO:
  - "edicao-LPS-AAMM"                  # qual edição entrou
  - "fase-evento" | "fase-carrinho"    # onde está no funil
```

---

## 📊 Volume típico de mensagens (LPSG real · 1 edição)

```
Onboarding (Fase 1):              5 msgs por inscrito
Antecipação (Fase 2):             2 msgs por inscrito
Evento (Fase 3 · 5 dias):         15 msgs por inscrito (3/dia)
Pós-ficha (Fase 4-B):             1 msg por tier
Sábado (Fase 5):                  2 msgs
Domingo · pitch (Fase 6):         3 msgs
Carrinho (Fase 7):                4-6 msgs (apenas pra quem preencheu ficha)

TOTAL por inscrito:               ~30-35 mensagens em 9 dias
80% Utility · 20% Marketing
Custo Meta API:                   ~R$ 0,07 por inscrito
```

---

## 🔗 Como liga com outras estruturas

| Estrutura | Conexão |
|---|---|
| `paginas-lpsg` | Ficha de interesse alimenta tags HOT/WARM/COLD |
| `automacoes-lpsg` | n8n/ManyChat dispara cada mensagem · webhook ficha calcula tier |
| `oferta-lpsg` | Mensagens do tsunami no carrinho aberto |
| `operacao-lpsg` | SDR atende fila HOT após ficha |
| `dashboard-lpsg` | Módulo Mensageria mostra Utility vs Marketing · entrega · reação |

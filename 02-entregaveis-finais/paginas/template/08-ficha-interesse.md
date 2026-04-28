# 08 · Ficha de Interesse — Template Genérico

> **A ficha de interesse não é um questionário. É um funil de consciência em 11 etapas que entrega ao closer um lead já vendido.**
>
> Quem aplica está, na cabeça do lead, **se candidatando** ao produto principal. Não está só "se inscrevendo numa lista".

---

## 🎯 Função estratégica

A ficha é disparada na **Aula 4** do LPSG (pré-pitch), entra na mensageria como meta da semana e fica aberta até o pitch (domingo). Ela cumpre **5 funções simultâneas**:

| Função | Como cumpre |
|---|---|
| 1. **Subir consciência** | Cada pergunta força o lead a se posicionar no estágio onde está e admitir o que NÃO faz |
| 2. **Qualificar capacidade** | Filtra por poder de compra, capacidade operacional e equipe |
| 3. **Ancorar preço** | Pergunta-chave (etapa 9) declara o ticket do produto principal antes do pitch |
| 4. **Auto-comprometimento** | Lead que responde "Com certeza" se comprometeu psicologicamente — reduz objeção no fechamento |
| 5. **Aquecer pra próxima conversão** | Última pergunta engaja no tira-dúvidas/pitch ao vivo (compromisso futuro) |

> **Resultado prático:** SDR/closer que recebe um lead que disse "Com certeza" pra R$ {TICKET_PRODUTO} já passou da metade do trabalho.

---

## 🧠 Lógica de subir consciência (3 blocos)

A ordem das etapas **não é aleatória**. Cada bloco tem função pedagógica:

```
┌──── BLOCO A · IDENTIDADE & ESTÁGIO (Et. 1-4) ────────────────┐
│  Faz o lead se posicionar:                                  │
│  "Eu sou X, atuo há Y, estou no estágio Z, NÃO uso método." │
│  → Cria gap entre o que ele faz e o que poderia fazer       │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──── BLOCO B · CAPACIDADE OPERACIONAL (Et. 5-8) ──────────────┐
│  Faz o lead declarar capacidade:                            │
│  "Eu invisto X em educação, Y em tráfego, faturo Z, equipe."│
│  → Confirma pra ele mesmo que tem condição de comprar       │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──── BLOCO C · INTENÇÃO & ENGAJAMENTO (Et. 9-11) ─────────────┐
│  Killer question (preço + ROI) → história → próximo evento. │
│  → Comprometimento + personalização + gancho.               │
└──────────────────────────────────────────────────────────────┘
```

**Por que essa ordem importa:** se a etapa 9 (preço de R$ {TICKET_PRODUTO}) viesse antes do bloco B, o lead reage por reflexo ("não tenho dinheiro"). Depois de declarar que **investe R$ {INVESTIMENTO_TRAFEGO_TIPICO} em tráfego** e que **fatura R$ {FATURAMENTO_TIPICO_TIER_HOT}**, o reflexo muda: "ué, eu já gasto isso".

---

## 📋 Variáveis da ficha (preencha no `00-variaveis-globais.md`)

```yaml
# === Identidade do produto principal ===
NOME_PRODUTO_PRINCIPAL:    "{NOME_PRODUTO_PRINCIPAL}"        # Ex: "Acelerador Turbo", "Mentoria X"
TICKET_PRODUTO:            "{TICKET_PRODUTO}"                # Ex: "R$ 25 mil", "R$ 12 mil"
PRAZO_ACOMPANHAMENTO:      "{PRAZO_ACOMPANHAMENTO}"          # Ex: "3 meses", "6 meses"
ROI_MULTIPLO_MIN:          "{ROI_MIN}"                       # Ex: "3"
ROI_MULTIPLO_MAX:          "{ROI_MAX}"                       # Ex: "5"
PRAZO_ROI:                 "{PRAZO_ROI}"                     # Ex: "próximos meses", "12 meses"

# === Posicionamento ===
TEMPO_LEITURA:             "{TEMPO_LEITURA}"                 # Ex: "menos de 3 minutos"
NOME_PROCESSO_SELECAO:     "{NOME_PROCESSO}"                 # Ex: "seleção", "candidatura", "vetting"
RITUAL_AO_VIVO:            "{RITUAL}"                        # Ex: "tira-dúvidas de sábado"

# === Faixas (preenchidas conforme nicho) ===
FAIXAS_TEMPO_MERCADO:      ["< 6 meses", "6m-1a", "1-2a", "2a+"]
FAIXAS_INVESTIMENTO_EDU:   ["< R$ 1k", "R$ 1-5k", "R$ 5-15k", "R$ 15k+"]
FAIXAS_INVESTIMENTO_MIDIA: ["Não invisto", "Até R$ 3k", "R$ 3-10k", "R$ 10-30k", "R$ 30-50k", "R$ 50k+"]
FAIXAS_FATURAMENTO:        ["Sem faturamento relevante", "Até R$ 5k", "R$ 5-20k", "R$ 20-50k", "R$ 50k+"]

# === Listas dependentes do nicho ===
ESTAGIOS_OPERACIONAIS:    # 4 estágios — ordem de maturidade ↑
  - "{ESTAGIO_1_INICIANTE}"               # Ex: "Ainda criando meu primeiro produto"
  - "{ESTAGIO_2_INCONSISTENTE}"           # Ex: "Tenho produto, mas vendo de forma inconsistente"
  - "{ESTAGIO_3_TRAVADO_NA_ESCALA}"       # Ex: "Vendo todo dia, mas trava na hora de escalar"
  - "{ESTAGIO_4_PRECISA_METODO}"          # Ex: "Tenho estrutura e equipe, preciso escalar com método"

FUNIS_DO_NICHO:           # 6-8 opções multi-select
  - "{FUNIL_1}"                           # Ex: "Lançamento Gratuito"
  - "{FUNIL_2}"                           # Ex: "Low-ticket"
  - "{FUNIL_3_NOSSO_METODO}"              # Ex: "Lançamento Pago" ← o do produto
  - "{FUNIL_4}" ... "{FUNIL_N}"
  - "Não rodo nenhum funil ainda"         # ← sempre presente

# === Tracking ===
PIXEL_VENDAS:              "{PIXEL_VENDAS_ID}"               # Ex: VK Digital, Hotmart, etc.
WEBHOOK_FICHA:             "{WEBHOOK_FICHA_ENVIADA}"         # n8n endpoint quando ficha submetida
```

---

## 🗺️ Estrutura genérica das 11 etapas

> Headlines fixas em todas as etapas (header):
> - Selo: `// FICHA DE INTERESSE`
> - Título: `{NOME_PRODUTO_PRINCIPAL}` (1 linha)
> - Sub: `Responda em {TEMPO_LEITURA} para participar da {NOME_PROCESSO_SELECAO}.`
> - Footer: `// Suas respostas são confidenciais`

---

### Etapa 1 · Identidade — captura

| | |
|---|---|
| **Pergunta** | `Antes de começar, me conta quem é você:` |
| **Tipo** | 4 inputs (todos required) |
| **Função** | Captura de contato |
| **Campos** | Nome completo · E-mail · WhatsApp com DDD · Instagram |
| **Validação** | Email regex · WhatsApp ≥ 10 dígitos numéricos · Instagram opcional sem `@` |

> **Não pedir CPF, endereço ou empresa.** Atrito desnecessário pra essa etapa do funil. Se necessário, pede no checkout.

---

### Etapa 2 · Tempo de mercado — posicionamento

| | |
|---|---|
| **Pergunta** | `Há quanto tempo você atua no {NICHO}?` |
| **Tipo** | radio (4 opções fixas) |
| **Função** | Posicionar o lead na maturidade de mercado |
| **Opções** | `{FAIXAS_TEMPO_MERCADO}` |
| **Score** | < 6 meses = 0 · 6m-1a = 1 · 1-2a = 2 · 2a+ = 3 |

> A pergunta força o lead a admitir tempo real (e não inflar). Quem está há 2+ anos sem resultado já entende internamente que precisa de método.

---

### Etapa 3 · Estágio operacional — admissão de gap

| | |
|---|---|
| **Pergunta** | `Como está sua operação hoje?` |
| **Tipo** | radio (4 opções, em ordem crescente de maturidade) |
| **Função** | **Crítica** — lead admite onde trava |
| **Opções** | `{ESTAGIOS_OPERACIONAIS}` (do mais inicial ao mais maduro) |
| **Score** | índice 0-3 (mesma ordem das opções) |

> **Regra de ouro:** as 4 opções precisam cobrir 90%+ dos leads do nicho. Se um lead não se encaixar em nenhuma, perdeu o filtro.

---

### Etapa 4 · Repertório de funil — sinaliza método

| | |
|---|---|
| **Pergunta** | `Qual funil você roda hoje? (pode marcar mais de um)` |
| **Tipo** | **checkbox multi** (única etapa multi-select) |
| **Função** | Detectar se o lead já roda o método do produto OU se é completamente novo |
| **Opções** | `{FUNIS_DO_NICHO}` + sempre `"Não rodo nenhum funil ainda"` no fim |
| **Score** | +2 se marcou `{FUNIL_3_NOSSO_METODO}` · +1 se marcou ≥ 2 funis · 0 se marcou só "Não rodo" |

> Quem JÁ roda o método é tier HOT (entende o jogo). Quem NÃO roda mas tem repertório é WARM. Quem marca só "Não rodo nenhum" tende a ser COLD (mas pode ser HOT futuro).

---

### Etapa 5 · Investimento educacional — capacidade prévia

| | |
|---|---|
| **Pergunta** | `Quanto você já investiu em mentorias ou cursos nos últimos 12 meses?` |
| **Tipo** | radio (4 opções) |
| **Função** | Filtrar por hábito de comprar educação (proxy mais forte que faturamento) |
| **Opções** | `{FAIXAS_INVESTIMENTO_EDU}` |
| **Score** | índice 0-3 |

> Quem nunca pagou por educação raramente paga R$ {TICKET_PRODUTO}. Esse é o filtro mais subestimado da ficha.

---

### Etapa 6 · Investimento em mídia/tráfego — capacidade operacional

| | |
|---|---|
| **Pergunta** | `Quanto você investe em tráfego pago por mês?` |
| **Tipo** | radio (6 opções) |
| **Função** | Capacidade operacional + escala |
| **Opções** | `{FAIXAS_INVESTIMENTO_MIDIA}` |
| **Score** | índice 0-5 |

> Quem investe ≥ R$ 10k/mês em tráfego é executor (não estudante). Mais peso na pontuação total.

---

### Etapa 7 · Faturamento — poder de compra

| | |
|---|---|
| **Pergunta** | `Qual é o seu faturamento mensal hoje (digital + outras fontes)?` |
| **Tipo** | radio (5 opções) |
| **Função** | Poder de compra direto |
| **Opções** | `{FAIXAS_FATURAMENTO}` |
| **Score** | índice 0-4 |

> Inclua "outras fontes" (sem digital + offline) — captura empresários offline migrando pro digital, perfil HOT comum.

---

### Etapa 8 · Equipe — capacidade de execução

| | |
|---|---|
| **Pergunta** | `Você tem equipe no seu negócio digital?` |
| **Tipo** | radio (3 opções fixas) |
| **Função** | Filtra por capacidade de implementar com agilidade |
| **Opções** | `Não, faço tudo sozinho` · `Sim, 1 a 2 pessoas me ajudam` · `Sim, tenho equipe de 3 ou mais pessoas` |
| **Score** | índice 0-2 |

> Solo founder com alto faturamento = HOT (precisa do método). Solo founder sem faturamento = COLD. Equipe de 3+ = HOT independente do resto.

---

### Etapa 9 · 🔥 Killer question — ancoragem + intenção

| | |
|---|---|
| **Pergunta** | `Se eu te acompanhar de perto por {PRAZO_ACOMPANHAMENTO} dentro do {NOME_PRODUTO_PRINCIPAL}, e te garantir que você vai ter de {ROI_MULTIPLO_MIN} a {ROI_MULTIPLO_MAX} vezes o retorno do investimento {PRAZO_ROI}, você estaria disposto a investir aproximadamente {TICKET_PRODUTO} nesse acompanhamento?` |
| **Tipo** | radio (3 opções fixas) |
| **Função** | **A pergunta mais importante da ficha.** Ancora preço, promete ROI, segmenta intenção. |
| **Opções** | `Com certeza` · `Tenho que pensar mais` · `No momento não` |
| **Score** | Com certeza = 10 (peso alto) · Tenho que pensar = 4 · No momento não = 0 |

> **Por que funciona:**
> 1. Ancora R$ {TICKET_PRODUTO} antes do pitch — quando o lead vê o preço no domingo, **não é surpresa**, é confirmação
> 2. Garantia explícita de ROI dá segurança psicológica
> 3. Lead que responde "Com certeza" se auto-comprometeu — reduz a objeção no fechamento em ~40%
> 4. Lead que responde "No momento não" sai do funil de venda direta e vai pra nutrição perpétua

---

### Etapa 10 · História — personalização

| | |
|---|---|
| **Pergunta** | `Agora me conta um pouco da sua história no {NICHO}. Qual é o produto ou oferta que você vende hoje? Qual o seu maior desafio atualmente para escalar com {METODO}? E como você acha que um acompanhamento próximo pode te ajudar a destravar esse próximo nível?` |
| **Tipo** | textarea (livre · sugerir 3-5 linhas) |
| **Função** | Material qualitativo pra closer · personalização |
| **Análise** | Tagging automático: produto · desafio · expectativa |

> Esse texto **vai pro CRM** e o closer/SDR lê antes da ligação. Não dá pra automatizar inteiramente — humano lê.

---

### Etapa 11 · Pergunta pro próximo ritual — engajamento

| | |
|---|---|
| **Pergunta** | `No próximo {DIA_RITUAL_AO_VIVO} eu vou fazer um {RITUAL_AO_VIVO} ao vivo e quero responder as suas dúvidas. Manda sua pergunta aberta aqui embaixo` |
| **Tipo** | textarea |
| **Função** | Aquecer pro próximo evento ao vivo (compromisso futuro) |
| **Botão** | `Enviar` (única etapa onde botão muda de "Continuar") |

> Quem manda dúvida sente obrigação implícita de aparecer. **Subir comparecimento do tira-dúvidas em 30%+** vs leads que não preencheram ficha.

---

## 📊 Lead Score consolidado (algoritmo)

Após o submit, calcular:

```typescript
type Tier = 'HOT' | 'WARM' | 'COLD';

interface FichaLead {
  scoreCapacidade: number;   // soma das etapas 5-7 (0-12)
  scoreOperacional: number;  // soma das etapas 2-4-8 (0-7)
  scoreIntencao: number;     // etapa 9 (0-10)
  scoreTotal: number;        // soma (0-29)
  tier: Tier;
  rotaPosFicha: 'closer' | 'grupo-vip' | 'nutricao';
}

function calcularTier(s: FichaLead): Tier {
  // HOT: intenção alta + capacidade de comprar
  if (s.scoreIntencao === 10 && s.scoreCapacidade >= 7) return 'HOT';

  // COLD: zero intenção OU capacidade muito baixa
  if (s.scoreIntencao === 0 || s.scoreCapacidade <= 2) return 'COLD';

  // WARM: o resto
  return 'WARM';
}

function rotear(t: Tier) {
  return {
    HOT:   'closer',     // SDR liga em 24h · entra na fila prioritária
    WARM:  'grupo-vip',  // grupo VIP do evento + nutrição 7 dias
    COLD:  'nutricao'    // nutrição perpétua · próximos eventos
  }[t];
}
```

> Esse score **não é mostrado pro lead**. É só pra roteamento interno.

---

## 🧱 Componente React (esqueleto)

```tsx
// app/ficha-de-interesse/page.tsx
'use client';

import { useState } from 'react';
import { etapas } from '@/data/ficha-etapas';   // array dos 11 steps
import { Progress } from '@/components/Progress';
import { StepRenderer } from '@/components/StepRenderer';

export default function FichaInteresse() {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, unknown>>({});

  const total = etapas.length;
  const pct = Math.round(((etapa + 1) / total) * 100);

  async function handleSubmit() {
    await fetch('/api/ficha-interesse', {
      method: 'POST',
      body: JSON.stringify({ respostas, xcod: getXcod() })
    });
    window.location.href = '/ficha-de-interesse/obrigado';
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Progress current={etapa + 1} total={total} pct={pct} />
      <Header />
      <StepRenderer
        etapa={etapas[etapa]}
        respostas={respostas}
        onChange={(r) => setRespostas({ ...respostas, ...r })}
        onBack={() => setEtapa(Math.max(0, etapa - 1))}
        onNext={() => etapa < total - 1 ? setEtapa(etapa + 1) : handleSubmit()}
      />
      <footer>// Suas respostas são confidenciais</footer>
    </main>
  );
}
```

> **Stack:** mesma do template de páginas (Next.js + Tailwind + Vercel). Reusa `Progress`, `Button`, `Input`, `RadioCard`, `CheckboxCard`, `Textarea` de `03-componentes-mobile-first.md`.

---

## 🎨 Visual (regras fixas)

| Elemento | Regra |
|---|---|
| **Layout** | 1 pergunta por tela · centralizada · max-width 720px |
| **Progress bar** | Topo · `// ETAPA N / 11` esquerda · `XX%` direita · barra na cor `{COR_DESTAQUE}` |
| **Número da etapa** | Círculo preenchido cor `{COR_DESTAQUE}` no topo do card |
| **Card** | Borda sutil · padding generoso · sombra suave |
| **Tipografia** | Mesma do template de páginas (Inter/Manrope/Onest) |
| **Botões** | `Voltar` (outline) à esquerda · `Continuar` (preenchido) à direita · ambos altura ≥ 56px |
| **Mobile** | Mesmas regras do template de páginas (16px+ font · 56px+ touch) |
| **Acessibilidade** | Cada radio/checkbox = `<button>` com `role="radio"` ou `role="checkbox"` · navegação por teclado |

---

## 🔌 Integrações obrigatórias

### 1. Webhook na submissão (envia pra n8n)

```typescript
// app/api/ficha-interesse/route.ts
export async function POST(req: Request) {
  const { respostas, xcod } = await req.json();

  // 1. Calcula score + tier
  const lead = calcularLeadScore(respostas);

  // 2. Dispara webhook pro n8n
  await fetch(process.env.WEBHOOK_FICHA_INTERESSE!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...respostas, ...lead, xcod, timestamp: Date.now() })
  });

  // 3. Dispara CAPI pra Meta (evento Lead qualificado)
  await disparaCAPILeadQualificado(respostas, lead.tier);

  return Response.json({ ok: true, tier: lead.tier });
}
```

> O n8n pega esse webhook e roteia. Ver `automacoes/template/02-fluxos-de-captacao.md` (fluxo 4 — ficha de interesse).

### 2. Tracking pixels obrigatórios

| Evento | Pixel | Quando |
|---|---|---|
| `ViewFichaInteresse` | Meta | Pageview da página de ficha |
| `StartFicha` | Meta + GA4 | Submit da etapa 1 (lead começou) |
| `SubmitFicha` | Meta + GA4 + CAPI | Submit final (etapa 11) |
| `LeadQualified` (custom) | Meta CAPI | Quando tier = HOT |

> Eventos custom pesados (`LeadQualified`) viram coluna em otimização do ASC se forem disparados ≥ 50 vezes/semana.

---

## 🔗 Referências cruzadas

| O quê | Onde mora oficialmente |
|---|---|
| **Mensageria por tier após submit** | `mensageria/template/mensageria-template.md` (FASE 3 — Pré-pitch · seção "Pós-ficha por tier") |
| **Webhook /ficha-interesse + roteamento** | `automacoes/template/02-fluxos-de-captacao.md` (Fluxo 4) |
| **Tag de tier no ManyChat** | `automacoes/template/08-sistema-de-tags-e-fases.md` |
| **CAPI evento `LeadQualified`** | `automacoes/template/02-fluxos-de-captacao.md` (Fluxo 1 — extensão) |
| **SDR/Closer pega lead HOT em até 24h** | `operacao/template/` (papel SDR + cronograma) |
| **Módulo dashboard "Ficha"** | `dashboard/template/02-modulos-do-dashboard.md` (módulo a adicionar) |

---

## ✅ Checklist de validação antes do go-live

- [ ] As 11 etapas estão preenchidas com perguntas adaptadas ao nicho
- [ ] Todas as `{VARIAVEIS}` foram substituídas
- [ ] Etapa 9 tem o ticket exato do produto principal e o ROI promete o que a oferta entrega
- [ ] Webhook `/api/ficha-interesse` testado em staging (payload chega no n8n)
- [ ] Pixel + CAPI disparam `SubmitFicha` (testar com Meta Events Manager)
- [ ] Lead score calcula corretamente (testar 3 cenários: HOT · WARM · COLD)
- [ ] Mensageria tem 3 fluxos pós-submit (1 por tier) configurados
- [ ] Página `/ficha-de-interesse/obrigado` existe e tem CTA pro próximo ritual
- [ ] Mobile: navegação fluida · todos campos visíveis · sem scroll horizontal
- [ ] Lighthouse mobile ≥ 95
- [ ] Tagging no CRM: ficha-iniciada · ficha-concluida · tier-X
- [ ] Closer testou abrir ficha de um lead real e ler etapa 10

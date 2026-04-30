# LPSG 4.0 · Squad Turbo

> **Coloque seu lançamento pago semanal no ar em menos de 1 semana.**
>
> Método completo · 13 skills do Claude · 11 agents (Squad Turbo + Picasso Auditor) · stack Picasso anti-IA · Meta Ads CLI integrada · manual interativo HTML com 5 seções passo-a-passo.

[![License: Dual](https://img.shields.io/badge/license-MIT_+_CC--BY--NC--SA-blue.svg)](LICENSE)
[![Status: Production](https://img.shields.io/badge/status-production_ready-success.svg)]()
[![Skills: 13](https://img.shields.io/badge/skills-13-orange.svg)](#skills)
[![Agents: 11](https://img.shields.io/badge/agents-11-purple.svg)](#agents)

---

## 🎯 O que é o LPSG

**LPSG** = **L**ançamento **P**ago **S**emanal **G**ravado.

Um método de lançamentos digitais perpétuos, em que:

- O ingresso (R$ 47-97) **paga o tráfego** antes do evento começar
- 7 dias de evento · 5 aulas técnicas (seg-sex) + tira-dúvidas (sáb) + pitch (dom) · cadência semanal contínua. Cada aula pode ser ao vivo ou gravada · decisão interna do expert · NÃO se comunica formato pro público. Única exceção: tira-dúvidas de sábado não tem replay disponível.
- Carrinho aberto na semana seguinte · com tsunami de bônus
- Ficha de interesse qualifica leads HOT/WARM/COLD pra closer
- 14 workflows automatizados (n8n + ManyChat)
- Dashboard com 11 módulos lendo de 8 fontes

**Resultado típico:** R$ 50k-1M de faturamento mensal por edição perpétua, com time enxuto de 4-5 pessoas.

---

## ⚡ Como funciona em 3 passos

```
1. SETUP        Crie 16 contas e tokens (Meta · Hotmart · Vercel · etc)   ~6-12h
2. CADASTRO     Preencha 1 formulário de 10 blocos                       ~30-60min
3. EXECUÇÃO     Cole 1 comando no Claude · @lpsg-master faz o resto      6-7 dias
```

Cole isso no Claude · ele orquestra tudo:

```
@lpsg-master crie meu LPSG.

Aqui está meu cadastro: [YAML gerado no manual]
```

---

## 🚀 Comece agora

### Opção A · Manual interativo (recomendado)

```bash
git clone https://github.com/SEU_USUARIO/lpsg-method.git
cd lpsg-method
open 04-manual-de-uso/manual.html
```

Abre num browser · sidebar navegável · checklist interativo · formulário com auto-save · gera YAML pronto pro Claude.

### Opção B · Markdown direto

Lê `04-manual-de-uso/README.md` e segue os 5 arquivos numerados (00-04).

---

## 📦 O que tem aqui

```
lpsg-method/
│
├── 04-manual-de-uso/              📘 MANUAL INTERATIVO (comece aqui)
│   ├── README.md                  ← entrada · sumário
│   ├── manual.html                ← versão HTML interativa
│   ├── 00-pre-requisitos.md       ← contas e tokens
│   ├── 01-intake.md               ← formulário mestre
│   ├── 02-passo-a-passo.md        ← execução em 7 dias
│   ├── 03-acoes-humanas.md        ← checklist do que SÓ humano faz
│   └── 04-troubleshooting.md      ← problemas comuns
│
├── 02-entregaveis-finais/         🧱 TEMPLATES (10 estruturas)
│   ├── estrutura-aulas/           ← modelo 5+1 aulas
│   ├── oferta/                    ← stack + tsunami + garantia
│   ├── paginas/                   ← Next.js + 5 arquétipos premium + V1 Editorial executado
│   ├── trafego/                   ← Meta Ads ASC + análise auto
│   ├── criativos/                 ← 15 criativos (5+5+5) · 5 paletas · cara de conteúdo
│   ├── mensageria/                ← templates Utility Meta
│   ├── automacoes/                ← 14 workflows n8n
│   ├── dashboard/                 ← 11 módulos
│   ├── operacao/                  ← RACI + 12 SOPs
│   ├── cs/                        ← pós-venda 90 dias
│   └── manual-final/              ← gerador de manual personalizado HTML (final do projeto)
│
├── 03-revisoes/                   📄 .docx pra aprovação (10 estruturas)
│
├── PRODUCT.md                     📐 estratégia de marca · register · personality · anti-references
├── DESIGN.md                      🎨 visual system · 5 paletas · tipografia · motion · anti-patterns
│
├── 99-skills-compartilhaveis/     🔧 SKILLS + AGENTS (zips)
│   ├── lpsg-master.zip            ← orquestrador LPSG (instala primeiro)
│   ├── estrutura-aulas-lpsg.zip
│   ├── oferta-lpsg.zip
│   ├── ...                        ← 11 skills LPSG no total
│   ├── squad-turbo-completo.zip   ← 10 agentes Turbo (squad inteiro)
│   └── agents/                    ← 10 agentes Squad Turbo
│       ├── estrategista-turbo.md            (orquestrador estratégico)
│       ├── pesquisador-turbo.md             (fundação · interno)
│       ├── pesquisador-mercado-turbo.md     (inteligência competitiva)
│       ├── copywriter-turbo.md              (toda copy)
│       ├── diretor-criativo-turbo.md        (autoridade visual)
│       ├── designer-turbo.md                (executor visual)
│       ├── trafego-turbo.md                 (Meta · Google Ads)
│       ├── social-turbo.md                  (orgânico · Reels)
│       ├── automacao-turbo.md               (n8n · ManyChat)
│       └── cs-turbo.md                      (pós-venda · NPS)
│
├── 00-briefing-e-dados/           📋 briefing estratégico (público)
└── README.md                      ← você está aqui
```

---

## 🤖 Skills do Claude

12 skills especializadas. Instale em `~/.claude/skills/`:

| Skill | Função |
|---|---|
| **`lpsg-master`** | Orquestrador · diagnóstico multi-camada · benchmarks por nicho |
| `estrutura-aulas-lpsg` | 6 aulas (5+1) com função estratégica |
| `oferta-lpsg` | Stack de valor + tsunami + dupla garantia |
| `paginas-lpsg` | Páginas Next.js + 5 arquétipos premium + ficha 11 etapas |
| `trafego-lpsg` | Meta Ads ASC + engine de análise (3 cadências) |
| `criativos-lpsg` | 15 criativos (5+5+5) · 5 paletas · cara de conteúdo · histórias e lições |
| `mensageria-lpsg` | 8 fases · templates Utility Meta |
| `automacoes-lpsg` | 14 workflows n8n + ManyChat |
| `dashboard-lpsg` | 11 módulos · 8 fontes de dados |
| `operacao-lpsg` | 9 papéis · RACI · 12 SOPs |
| `cs-lpsg` | Pós-venda 90 dias · NPS · ascensão |
| `manual-final-lpsg` | ⭐ Gerador de manual de execução HTML personalizado (entregável final) |
| **`meta-ads-cli-turbo`** | ⭐ **Camada de execução Meta Ads (CLI oficial 29/04/2026)** · 5 scripts shell pra batelada de criativos · 5 testes de página · stop-loss · relatórios · escalonamento |

### Instalar em outra máquina

```bash
# macOS / Linux

# 1. Skills LPSG (13 ao todo)
mkdir -p ~/.claude/skills
for z in 99-skills-compartilhaveis/*-lpsg.zip 99-skills-compartilhaveis/lpsg-master.zip; do
  unzip -o "$z" -d ~/.claude/skills/
done

# 2. Squad Turbo · 10 agentes + Picasso Auditor
mkdir -p ~/.claude/agents
cp 99-skills-compartilhaveis/agents/*.md ~/.claude/agents/

# 3. (Opcional) Stack Picasso · auditoria anti-IA de design
npx skills add https://github.com/anthropics/skills --skill frontend-design --yes
npx skills add pbakaus/impeccable --yes
npx skills add https://github.com/kylezantos/design-motion-principles --skill design-motion-principles --yes

# 4. Reinicia o Claude Code
#    Skills aparecem em /skills
#    Agentes invocáveis com @nome-do-agente
```

### 🤝 Squad Turbo · 10 agentes complementares + Picasso Auditor

Além das 12 skills LPSG, o projeto inclui **11 agentes especialistas**:

| Agente | Função |
|---|---|
| **`@estrategista-turbo`** | Orquestrador estratégico · entry point de qualquer projeto |
| **`@pesquisador-turbo`** | Camada fundacional · 6 dossiês internos do expert |
| **`@pesquisador-mercado-turbo`** | Inteligência competitiva externa · 8 frentes |
| **`@copywriter-turbo`** | Toda peça de copy · páginas · scripts · emails · headlines |
| **`@diretor-criativo-turbo`** | Autoridade visual · brandbook · UX de conversão |
| **`@designer-turbo`** | Executor visual · ads · slides · banners |
| **`@trafego-turbo`** | Meta Ads + Google Ads · estrutura · otimização |
| **`@social-turbo`** | Conteúdo orgânico · Reels · stories · calendário |
| **`@automacao-turbo`** | n8n · ManyChat · mensageria · chatbots DM |
| **`@cs-turbo`** | Pós-venda · onboarding · NPS · depoimentos |
| **`@picasso-auditor-lpsg`** | ⭐ Auditor de design obsessivo · stack Picasso (frontend-design + impeccable + design-motion-principles) · elimina "AI slop" de páginas/criativos |

> Skills entregam estrutura · agentes entregam expertise. Detalhes em [`99-skills-compartilhaveis/agents/README.md`](99-skills-compartilhaveis/agents/README.md).

### 🎨 Stack Picasso · auditoria anti-IA (NOVO)

Stack de 3 skills externas integrada ao agente `picasso-auditor-lpsg`:

- **`frontend-design`** (Anthropic) — pensar como designer antes de codar
- **`impeccable`** (Paul Bakaus) — 18 comandos `/audit`, `/polish`, `/typeset`, `/colorize`, `/bolder`, `/critique` etc + detector de anti-patterns + contexto persistente
- **`design-motion-principles`** (Kyle Zantos) — auditar motion via 3 lentes (Emil Kowalski · Jakub Krehel · Jhey Tompkins)

Fundação documentada em `PRODUCT.md` (estratégia, anti-references, design principles) e `DESIGN.md` (paletas, tipografia, motion energy, anti-patterns) — gerados via `/teach-impeccable`.

---

## 📚 Documentos relacionados

| Arquivo | Pra quê |
|---|---|
| [QUICKSTART.md](QUICKSTART.md) | 5 minutos · começar agora |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir com o projeto |
| [SECURITY.md](SECURITY.md) | Tokens · LGPD · boas práticas |
| [LICENSE](LICENSE) | MIT (código) + CC-BY-NC-SA (conteúdo) |

---

## 📊 Status do projeto

```
✅ 13 skills LPSG instaladas e testadas (+ meta-ads-cli-turbo · 30/04/2026)
✅ 11 agents (10 Squad Turbo + Picasso Auditor)
✅ 10 estruturas com template + exemplo preenchido
✅ 10 revisões .docx pra aprovação
✅ 24 zips compartilháveis
✅ Manual interativo HTML · 5 seções interativas (setup, cadastro, execução, ações humanas, troubleshooting)
✅ Stack Picasso anti-IA integrada (frontend-design + impeccable + design-motion-principles)
✅ PRODUCT.md + DESIGN.md (fundação de marca + visual system)
✅ V1 Editorial Longform exemplo executado em Next.js (Marina Costa · cadastro fictício)
✅ ~36.000+ linhas de markdown documentando o método
```

---

## 🛠️ Stack técnico

- **Frontend:** Next.js 14 · Tailwind CSS · Vercel
- **Tracking:** Meta Pixel + CAPI · Google Tag Manager · GA4
- **Pagamentos:** Hotmart Pro
- **Mensageria:** WhatsApp Business API + ManyChat
- **Automação:** n8n (cloud ou self-hosted)
- **CRM:** Google Sheets (master) · opcional Notion/HubSpot
- **Plataforma de aulas:** Hotmart Club

---

## 🌐 Demo do manual

> O manual interativo abre direto no browser · sem servidor · sem instalação.

```bash
open 04-manual-de-uso/manual.html
```

Funciona offline · localStorage · responsivo · imprimível.

---

## 👥 Quem mantém

**Leo Tabari · Turbo Academy** · método validado em 12+ meses · multi-nicho.

- 🌐 [turboacademy.com.br](https://turboacademy.com.br)
- 📱 [@leotabari](https://instagram.com/leotabari)

---

## ⚖️ Licença

Licença dual conforme o tipo de arquivo · ver [LICENSE](LICENSE):

| Tipo | Licença |
|---|---|
| **Código** (HTML · JS · CSS · Python · YAML · JSON) | MIT — pode usar, modificar, redistribuir |
| **Conteúdo** (método · estrutura · texto educacional) | CC-BY-NC-SA 4.0 — atribuição · não-comercial · compartilha-igual |

**Resumo prático:**
- ✅ Use no SEU próprio negócio (sem custo)
- ✅ Estude · adapte · ensina pra equipe interna
- ✅ Cita o Leo Tabari como fonte
- ❌ Vender o método como produto seu (é comercial · precisa licença)
- ❌ Branding como se fosse seu (precisa atribuir)

Pra licenciamento comercial: `contato@turboacademy.com.br`

---

<p align="center">
  <strong>🚀 Bora rodar seu primeiro LPSG?</strong><br>
  <a href="QUICKSTART.md">→ QUICKSTART · 5 min</a>
</p>

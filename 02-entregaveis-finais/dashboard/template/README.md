# Template Dashboard LPSG v2

> Como usar o template para construir o dashboard de qualquer LPSG.

---

## 📋 Os 6 arquivos

```
template/
├── README.md                          ← você está aqui
├── 00-variaveis-globais.md            Variáveis · alvos · fontes de dados
├── 01-arquitetura.md                  Stack · estrutura de pastas · 2 modos
├── 02-modulos-do-dashboard.md         9 módulos detalhados
├── 03-fonte-de-dados.md               6 modos de input · adapters · schema
├── 04-alertas-e-diagnostico.md        Motor de regras · score · insights
└── 05-deploy-e-modos-de-output.md     Vercel · standalone · checklist
```

---

## 🚀 Como usar (passo a passo)

### Etapa 1 — Preencher `00-variaveis-globais.md`

Substituir todas as variáveis `{NOME}` pelos dados do seu projeto:
- `{NOME_ESPECIALISTA}` → "João Silva"
- `{NICHO}` → "Marketing digital"
- `{SIGLA}` → "MDP"
- `{TICKET_INGRESSO}` → 47
- ...

### Etapa 2 — Definir as fontes de dados

Em `03-fonte-de-dados.md`, escolher os modos:
- ✅ Modo 1 (XLSX) — sempre habilitado (default)
- ⏳ Modo 2 (Sheets) — se time edita ao vivo
- ⏳ Modo 3-6 (APIs) — se quer automação completa

### Etapa 3 — Customizar as regras

Em `04-alertas-e-diagnostico.md`, ajustar regras se seu projeto tem alvos diferentes (ROAS, conversão, etc.).

### Etapa 4 — Construir

```bash
# Clonar template
gh repo clone turbo-academy/dashboard-lpsg-template my-dash
cd my-dash
pnpm install

# Configurar
cp .env.local.example .env.local
# (editar com seus dados)

# Rodar
pnpm dev                # Modo A · Web app local
pnpm build:standalone   # Modo B · gera HTML único
```

---

## 🎯 Para quem é cada arquivo

| Arquivo | Quem lê |
|---|---|
| `00-variaveis-globais.md` | Gestor (preenche) · designer (consulta) · dev (consulta) |
| `01-arquitetura.md` | Dev (implementa) · arquiteto (revisa) |
| `02-modulos-do-dashboard.md` | Designer (faz mockups) · dev (implementa) · gestor (valida) |
| `03-fonte-de-dados.md` | Dev (cria adapters) · gestor (configura tokens) |
| `04-alertas-e-diagnostico.md` | Gestor (define alvos) · dev (codifica regras) |
| `05-deploy-e-modos-de-output.md` | Dev (deploy) · gestor (decide modo A vs B) |

---

## 🧭 Skills relacionadas

- `dashboard-lpsg` — esta skill (template do dashboard)
- `paginas-lpsg` — usa mesma stack (Next.js + Tailwind + Vercel)
- `trafego-lpsg` — fonte de dados de tráfego (alimenta /trafego)
- `mensageria-lpsg` — fonte de dados de mensageria (alimenta /mensageria)
- `oferta-lpsg` — fonte de dados do tsunami (alimenta /tsunami)
- `estrutura-aulas-lpsg` — fonte de dados das aulas (alimenta /aulas)

---

## 📦 Output esperado

Depois de seguir o template, você terá:

1. **Dashboard Web** rodando em `https://dash.{seu-dominio}.com`
2. **HTML standalone** distribuível (`dashboard-lpsg.html` · ~250 KB)
3. **9 módulos** funcionais (visão geral · tráfego · páginas · aulas · mensageria · tsunami · recuperação · operação · estratégico)
4. **Alertas automáticos** verde/amarelo/vermelho por métrica
5. **Histórico** de lançamentos pra comparação

---

**Fonte:** método LPSG do Leo Tabari (Turbo Academy). Template validado em 12 meses de operação multi-nicho.

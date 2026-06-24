# 06 · Modos de Output (Implementa Aqui · Brief para Claude Design)

> A skill `paginas-lpsg-turbo` suporta **2 modos de saída**. Pergunte ao usuário qual usar antes de gerar.

---

## 🎯 Quando usar cada modo

| Modo | Quando usar |
|---|---|
| **🟢 Modo A — Implementa Aqui** | Você quer o projeto React pronto, com Claude Preview rodando + Vercel deploy direto. Zero atrito. |
| **🟡 Modo B — Brief para Claude Design** | Você prefere usar o Claude Design (claude.ai web) pro código visual. Quer copiar/colar e voltar. |

> Se o usuário não especificar, **pergunte** antes de gerar.

---

## 🟢 Modo A — Implementa Aqui

### Fluxo

```
1. paginas-lpsg-turbo coleta contexto (variáveis preenchidas)
2. paginas-lpsg-turbo invoca designer-senior-turbo OU frontend-design OU lovable-style-turbo
3. Code do projeto Next.js + Tailwind é gerado nos 9 blocos
4. Claude Preview (mcp__Claude_Preview__) roda dev server localmente
5. preview_screenshot mostra resultado em tempo real
6. Iterar até aprovação
7. Vercel deploy via deploy-to-vercel ou vercel-cli-with-tokens
```

### Skills auxiliares acionadas

| Necessidade | Skill |
|---|---|
| Identidade visual + design system | `designer-senior-turbo` |
| Frontend production-grade evitando estética genérica | `frontend-design` |
| Stack Vite + React + Tailwind + shadcn (alternativa) | `lovable-style-turbo` |
| Tokens de cor / tipografia / espaço | `design-tokens-turbo` |
| Diretrizes de UI Web | `web-design-guidelines` |
| Preview local + screenshots | `mcp__Claude_Preview__*` |
| Deploy Vercel | `deploy-to-vercel` ou `vercel-cli-with-tokens` |

### Comando interno (passo a passo)

```
1. Ler 00-variaveis-globais.md (preenchido pelo usuário)
2. Ler 02-arquitetura-projeto.md
3. Ler 03-componentes-mobile-first.md
4. Para CADA bloco (TopBar, Hero, Pain, NotYourFault, Authority,
   Promises, Lessons, Testimonials, FinalCTA):
   - Invocar designer-senior-turbo OU frontend-design com:
     - Variáveis da variação atual (cor, headline, sub, dor, CTA)
     - Estrutura do bloco
     - Tokens (cores, fontes, breakpoints)
   - Receber componente React
   - Salvar em src/components/blocks/{Bloco}.tsx
5. Para CADA variação (v1-v5):
   - Criar src/app/(variations)/v{N}/page.tsx
   - Importar blocos e passar prop variation
6. Configurar tracking (Pixel + GTM + GA4)
7. Iniciar Claude Preview (preview_start)
8. Screenshot mobile (375x812) e desktop (1280x800)
9. Iterar com feedback do usuário
10. Deploy quando aprovado
```

### Vantagens

- ✅ Zero copy/paste entre janelas
- ✅ Iteração rápida (Claude Preview screenshot em segundos)
- ✅ Variáveis e dados sincronizados automaticamente
- ✅ Mantém histórico de decisões na sessão
- ✅ Deploy 1-click no fim

### Quando NÃO usar

- ❌ Se o usuário tem preferência forte pelo estilo do Claude Design
- ❌ Se o time interno trabalha primariamente no claude.ai web
- ❌ Se o cliente final só aceita design feito num determinado fluxo

---

## 🟡 Modo B — Brief para Claude Design

### Fluxo

```
1. paginas-lpsg-turbo coleta contexto (variáveis preenchidas)
2. paginas-lpsg-turbo gera UM brief estruturado pronto pra colar
3. Usuário cola no Claude Design (claude.ai web)
4. Claude Design produz o código React/HTML
5. Usuário traz o código de volta pra Claude Code
6. paginas-lpsg-turbo ajusta:
   - Variáveis dinâmicas (data/checkout/UTMs)
   - Conexão com data/variations.ts
   - Tracking (Pixel/GTM/GA4)
   - SEO + Open Graph
7. Deploy Vercel
```

### O que entra no brief

Ver `07-brief-claude-design.md` — template completo.

### Vantagens

- ✅ Aproveita o estilo visual do Claude Design (se você gostou)
- ✅ Permite que outras pessoas do time gerem o design (não precisam ter Claude Code)
- ✅ Brief é portátil — funciona também no v0.dev, Lovable, Bolt, etc.

### Desvantagens

- ❌ Copy/paste 2x (ida e volta)
- ❌ Variáveis preenchidas precisam ser revisadas no retorno
- ❌ Iteração mais lenta (cada ajuste = nova rodada de copy/paste)
- ❌ Tracking precisa ser religado manualmente

---

## 🔄 Fluxo de decisão (use como guia)

```
                                    ┌──────────────────────────┐
                                    │ Usuário pediu páginas    │
                                    │ do LPSG?                 │
                                    └────────────┬─────────────┘
                                                 │
                                                 ▼
                              ┌─────────────────────────────────┐
                              │ Pergunta: qual modo?            │
                              │ A) Implementa aqui              │
                              │ B) Brief pra Claude Design      │
                              └────┬────────────────────┬───────┘
                                   │                    │
                                   ▼                    ▼
                          ┌─────────────────┐  ┌─────────────────────┐
                          │ MODO A          │  │ MODO B              │
                          │ Invoca:         │  │ Gera:               │
                          │ - designer-sr   │  │ - Brief estruturado │
                          │ - frontend-dsg  │  │ - Variações listadas│
                          │ - claude-prev   │  │ - Tokens visuais    │
                          │ - vercel-deploy │  │                     │
                          │                 │  │ Usuário cola em     │
                          │ Resultado:      │  │ Claude Design,      │
                          │ projeto pronto  │  │ traz código de volta│
                          │                 │  │                     │
                          │                 │  │ paginas-lpsg-turbo ajusta │
                          │                 │  │ + faz deploy        │
                          └─────────────────┘  └─────────────────────┘
```

---

## 🚦 Sinalização clara para o usuário

**No início da sessão, sempre pergunte:**

> "Qual modo de output você quer pra essa página?
>
> 🟢 **A — Implementa aqui:** eu chamo as skills de design (`designer-senior-turbo`/`frontend-design`/`lovable-style-turbo`), gero o projeto Next.js completo, rodo o Claude Preview pra você ver, e fazemos deploy no Vercel. Zero atrito.
>
> 🟡 **B — Brief pra Claude Design:** eu gero um prompt estruturado pronto pra colar no Claude Design. Você gera o design lá, traz o código de volta, e eu finalizo aqui (variáveis dinâmicas, tracking, deploy).
>
> Qual?"

> Se o usuário disser "tanto faz" ou "o melhor", **default = Modo A**.

---

## 📋 Checklist por modo

### Modo A — Implementa Aqui
- [ ] Variáveis globais preenchidas
- [ ] Pelo menos 1 imagem do expert no `public/images/`
- [ ] Skills disponíveis: `designer-senior-turbo` ou `frontend-design`
- [ ] Claude Preview habilitado (`mcp__Claude_Preview__`)
- [ ] Tracking IDs prontos (Pixel + GTM)
- [ ] Domínio + Vercel configurados (ou em config)

### Modo B — Brief pra Claude Design
- [ ] Variáveis globais preenchidas
- [ ] `07-brief-claude-design.md` lido pra entender o template
- [ ] Claude Design ou v0.dev ou Lovable acessível pelo usuário
- [ ] Plano: gerar brief → colar → trazer código → continuar aqui
- [ ] Tracking IDs guardados pra religar no retorno

---

## 🚨 Erros comuns

| Erro | Como evitar |
|---|---|
| Misturar os 2 modos no meio | Decidir antes de começar · não trocar no meio do caminho |
| Esquecer de religar tracking no retorno do Modo B | Checklist específico de retorno (ver `07-brief-claude-design.md`) |
| Usar Modo B quando o time não tem acesso ao Claude Design | Cair pro Modo A direto |
| Iterar 5x no Modo B | Se está iterando muito, mudar pro Modo A na próxima rodada |

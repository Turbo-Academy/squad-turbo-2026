# 07 · Brief para Claude Design (Modo B)

> Template do prompt único pra colar no Claude Design (claude.ai web), v0.dev, Lovable ou similares.

---

## 🎯 Como usar

1. Preencha `00-variaveis-globais.md` com os dados do projeto
2. Substitua `{VARIÁVEIS}` neste template pelos valores reais
3. Copie o template inteiro
4. Cole no Claude Design / v0.dev / Lovable / Bolt
5. Receba o código React + Tailwind
6. Volte aqui no Claude Code com o código pra:
   - Conectar `data/variations.ts`
   - Religar tracking (Pixel + GTM + GA4)
   - Configurar SEO + Open Graph
   - Deploy Vercel

---

## 📋 TEMPLATE DO BRIEF (copiar tudo abaixo)

```
═══════════════════════════════════════════════════════════
BRIEF — Página de Venda de Ingresso · {NOME_EVENTO}
═══════════════════════════════════════════════════════════

# CONTEXTO

Crie uma página de venda de ingresso para o {NOME_EVENTO},
um evento online no formato de Lançamento Pago Semanal Gravado
(LPSG) com 5+1 aulas. O ingresso custa {TICKET_INGRESSO} e o
evento é vendido pra {AVATAR_RESUMIDO}.

A página tem um único objetivo: converter visitantes em
compradores de ingresso. Conversão alvo: ≥ 5%.

# STACK OBRIGATÓRIA

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 4
- Mobile-first (375px → 1280px)
- Imagens em next/image (WebP/AVIF)
- Fontes: Inter + Manrope (next/font)

# IDENTIDADE VISUAL

- **Tema:** dark mode (fundo #0A0A0A · cards #141414)
- **Cor principal de destaque:** {COR_DESTAQUE} (use OKLCH se possível)
- **Texto principal:** branco/cinza-claro
- **Tipografia:**
  - Headlines: Manrope ExtraBold/Black (font-display)
  - Corpo: Inter Regular (font-sans)
- **Tom:** direto, sem rebuscamento, mobile-first

# OS 9 BLOCOS (em ordem fixa)

## 1. TopBar (sticky)
Texto curto + cor de destaque alta:
"{TOPBAR_TEXTO}" (ex: "🔥 VAGAS SE ESGOTANDO")

## 2. Hero (primeira dobra)
Componentes obrigatórios em ordem:

1. **Headline:** "{HEADLINE}"
2. **Sub-headline:** "{SUBHEADLINE}"
3. **📅 Data do evento (OBRIGATÓRIO):** "{DATA_TEXTO}"
   (ex: "De 12/05 a 18/05 · Sempre às 7h da manhã")
   Aparece em destaque visual abaixo do sub.
4. **Foto do expert:** {URL_FOTO_EXPERT}
   (rosto principal · à direita no desktop · abaixo no mobile)
5. **Botão CTA primário:** "{CTA_PRIMARIO}"
   Min altura 56px no mobile · cor de destaque · arredondado.
6. **🛡️ Garantia (OBRIGATÓRIO abaixo do botão):**
   "🛡️ Garantia Incondicional: Assista!
    Se não gostar devolvo seu dinheiro ao final do evento."
   (fonte 14-16px, cinza claro, centralizado, ícone à esquerda)
7. **Linha de prova:** "+{N_ALUNOS} alunos transformados"

## 3. Pain — Amplificação da dor
Estilo: {ESTILO_DOR} (escolha "Lista de R$ perdidos" OU "6 cards de afirmações")

Headline: "{HEADLINE_DOR}"

{SE LISTA DE R$:}
Lista vertical com 4-6 itens:
- {DOR_1}                     + R$ {VALOR_1}
- {DOR_2}                     + R$ {VALOR_2}
- {DOR_3}                     + R$ {VALOR_3}
- {DOR_4}                     + R$ {VALOR_4}

Total destacado no fim.

{SE 6 CARDS:}
Grid 2x3 (mobile 1 col) com 6 cards.
Cada card: ícone X + título 2-3 palavras + descrição 1 linha.

## 4. NotYourFault — "A culpa não é sua"
Centralizado · headline grande · texto curto:

"A culpa não é sua.
Sabe por quê? Porque {EXPLICACAO_SISTEMA}.
{DETALHE_PROBLEMA_MAIOR}."

## 5. Authority — Origem do expert
Layout 2 colunas (mobile 1 col):
- Esquerda (1/3): foto profissional do expert
- Direita (2/3):
  - Headline: "Eu errei MUITO pra você acertar 100%"
  - 2 parágrafos de história
  - 4 bullets de credenciais (✓ {CREDENCIAL_1} · ✓ {CREDENCIAL_2}...)

## 6. Promises — O que muda quando aplica
Headline: "O QUE MUDA QUANDO VOCÊ DOMINA O MÉTODO:"

Grid 2x3 com 4-6 promessas:
- ✓ {TRANSFORMACAO_1}
- ✓ {TRANSFORMACAO_2}
- ✓ {TRANSFORMACAO_3}
- ✓ {TRANSFORMACAO_4}
- ✓ {TRANSFORMACAO_5}
- ✓ {TRANSFORMACAO_6}

## 7. Lessons — As 5+1 aulas
Headline: "O QUE VOCÊ VAI APRENDER"

Lista vertical numerada com:
- Aula 1 — {TITULO_AULA_1}
  {1 LINHA DESCRITIVA}
- Aula 2 — {TITULO_AULA_2}
- ... (até Aula 6)

## 8. Testimonials — Prova social massiva
Headline: "É IMPOSSÍVEL NEGAR OS RESULTADOS"

Grid 3 colunas (2 no tablet, 1 no mobile) com mínimo 6 depoimentos.
Mistura: vídeos curtos (9:16) + prints + texto.

Cada card: foto/vídeo · headline em CAIXA ALTA · 1 linha de
transformação · nome + cidade/profissão.

## 9. FinalCTA — Última chamada
Centralizado · gradiente sutil:

- "ÚLTIMA CHAMADA" (label)
- Headline grande: "{HEADLINE_FINAL_CTA}"
- Data do evento repetida
- Botão CTA grande (mesma cor de destaque)
- Garantia repetida (mesmo texto do hero)
- 3-4 bullets de reforço

# REQUISITOS DE PERFORMANCE

- LCP < 1.5s (mais rigoroso que padrão)
- INP < 200ms
- CLS < 0.05
- Peso total < 1 MB no mobile
- Lighthouse Mobile ≥ 95
- Imagem do hero com `priority` no next/image
- Outras imagens com `loading="lazy"`

# REQUISITOS DE ACESSIBILIDADE

- Fonte mínima 16px no body
- Botão CTA min 56px de altura no mobile
- Contraste de texto ≥ 4.5:1
- Sem hover-only · todo estado acessível por toque
- aria-label em ícones

# CTAs

- **Hero:** "{CTA_PRIMARIO}"
- **Final:** "{CTA_FINAL}"
- Ambos linkam pra: {URL_CHECKOUT}

# DADOS A NÃO ESQUECER

- Data do evento: "{DATA_TEXTO}"
- Texto exato da garantia (palavra por palavra)
- Foto do expert (sem stock photos)
- Mínimo 6 depoimentos (mistura de formatos)
- 1 cor de destaque consistente em toda a página
- Tema escuro

# ENTREGÁVEL ESPERADO

Código completo de uma página Next.js 14 + Tailwind CSS:
- Arquivo único OU separado em componentes (preferência: separado em src/components/blocks/)
- TypeScript com tipos bem definidos
- Tailwind classes (sem CSS extra exceto se necessário)
- next/image em todas as imagens
- next/font pra Inter + Manrope
- Metadata API pra SEO (title, description, openGraph)

═══════════════════════════════════════════════════════════
FIM DO BRIEF
═══════════════════════════════════════════════════════════
```

---

## 🔁 Quando voltar com o código (checklist de retorno)

Depois que o Claude Design (ou v0.dev/Lovable) gerar o código, traga aqui pra Claude Code finalizar:

### 1. Estrutura de pastas
- [ ] Mover componentes pra `src/components/blocks/`
- [ ] Criar `src/data/variations.ts` (source of truth das 5 variações)
- [ ] Criar `src/data/lessons.ts`, `testimonials.ts`, `pains.ts`, `promises.ts`
- [ ] Criar 5 rotas em `src/app/(variations)/v{1-5}/page.tsx`
- [ ] Refatorar componentes pra receber prop `variation`

### 2. Substituições de variável
- [ ] Trocar valores hardcoded por leitura de `data/variations.ts`
- [ ] Cor de destaque via CSS variable `--accent` (definida por variação)
- [ ] Datas do evento puxadas do arquivo de variáveis
- [ ] CTA primary/secondary vindos da variação atual

### 3. Tracking
- [ ] Instalar Pixel Meta + CAPI (`src/components/tracking/MetaPixel.tsx`)
- [ ] Instalar GTM (`src/components/tracking/GTM.tsx`)
- [ ] Instalar GA4
- [ ] Configurar `next/script` com `strategy="afterInteractive"`
- [ ] Adicionar Vercel Analytics + Speed Insights

### 4. SEO + sharing
- [ ] Metadata API por variação (`title`, `description`, `openGraph`)
- [ ] Imagem Open Graph (1200x630) no `public/images/og-image.jpg`
- [ ] `robots.txt` permitindo indexação
- [ ] `sitemap.xml` listando as 5 variações

### 5. Performance
- [ ] `next/image` em todas as imagens
- [ ] `priority` no hero
- [ ] `loading="lazy"` no resto
- [ ] Otimizar pra LCP < 1.5s
- [ ] Rodar Lighthouse Mobile ≥ 95

### 6. Variações
- [ ] Implementar as 5 variações via switch de cor + headline + dor + CTA
- [ ] Cor por variação:
  - v1 Laranja `oklch(70% 0.20 50)`
  - v2 Vermelho `oklch(60% 0.22 25)`
  - v3 Ciano `oklch(70% 0.15 220)`
  - v4 Amarelo `oklch(80% 0.18 90)`
  - v5 Roxo `oklch(60% 0.20 290)`

### 7. Deploy
- [ ] Variáveis de ambiente no Vercel
- [ ] Domínio customizado apontado
- [ ] Preview branch testado
- [ ] Lighthouse rodado nas 5 variações antes do tráfego

---

## 💡 Dicas pra o brief funcionar melhor

| Dica | Por quê |
|---|---|
| **Não corte o brief pela metade** — copie tudo | O design depende dos 9 blocos completos |
| **Sempre forneça URL real da foto do expert** | Pra evitar stock photo |
| **Especifique a cor em OKLCH** | Resultado mais consistente que hex |
| **Insista em "Tema escuro"** | Default da maioria dos LLMs é claro |
| **Repita "mobile-first"** | Sem isso, vem desktop-only |
| **Liste cada bloco numerado** | Sem hierarquia clara, blocos somem |

---

## 🚨 O que sair do Claude Design **não vai trazer**

| Item | Você adiciona aqui no Claude Code |
|---|---|
| `data/variations.ts` | sim |
| Tracking (Pixel/GTM/GA4) | sim |
| Open Graph image | sim |
| Sitemap.xml | sim |
| Configuração de Vercel | sim |
| Otimização final de LCP | sim |
| Switch automático de variação | sim |

---

## 🔄 Fluxo completo Modo B (visual)

```
┌─────────────────────────────────────────────────────────────┐
│ AQUI no Claude Code                                         │
│                                                             │
│ paginas-lpsg coleta variáveis                               │
│           │                                                 │
│           ▼                                                 │
│ paginas-lpsg gera BRIEF estruturado (este arquivo)          │
│           │                                                 │
│           ▼                                                 │
│ Você COPIA o brief                                          │
└──────┬──────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│ NO Claude Design (claude.ai web) ou v0.dev / Lovable        │
│                                                             │
│ Você COLA o brief                                           │
│           │                                                 │
│           ▼                                                 │
│ Claude Design GERA código React + Tailwind                  │
│           │                                                 │
│           ▼                                                 │
│ Você ITERA até ficar bom                                    │
│           │                                                 │
│           ▼                                                 │
│ Você COPIA o código final                                   │
└──────┬──────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│ DE VOLTA no Claude Code                                     │
│                                                             │
│ paginas-lpsg recebe código                                  │
│           │                                                 │
│           ▼                                                 │
│ Roda checklist de retorno (acima)                           │
│           │                                                 │
│           ▼                                                 │
│ Cria 5 variações, religa tracking, configura SEO            │
│           │                                                 │
│           ▼                                                 │
│ Claude Preview pra revisar                                  │
│           │                                                 │
│           ▼                                                 │
│ Vercel deploy → produção                                    │
└─────────────────────────────────────────────────────────────┘
```

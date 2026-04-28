# 04 · Página de Ingresso (referência cruzada)

> **Esta seção foi consolidada na estrutura `paginas-lpsg`.**
>
> A página de ingresso é responsabilidade da skill **`paginas-lpsg`** — lá está a estrutura completa de 9 blocos, 5 variações, stack Next.js + Tailwind + Vercel, performance LCP < 1.5s, e os dois modos de output (implementa aqui ou brief para Claude Design).

---

## 🔗 Onde encontrar

```
02-entregaveis-finais/paginas/
├── README.md                       ← visão geral
└── template/
    ├── 00-variaveis-globais.md
    ├── 01-stack-e-deploy.md
    ├── 02-arquitetura-projeto.md
    ├── 03-componentes-mobile-first.md
    ├── 04-matriz-variacoes.md
    ├── 05-performance-vercel.md
    ├── 06-modos-de-output.md
    └── 07-brief-claude-design.md
```

Ou pela skill: `~/.claude/skills/paginas-lpsg/`

---

## 🔁 Quando o tráfego encontra a página

Esta skill (`trafego-lpsg`) **roda criativos que apontam pra página de ingresso** que vive em `paginas-lpsg`. A integração entre as duas:

| Etapa | Skill responsável |
|---|---|
| Criativo (vídeo/estático/carrossel) | `trafego` (este arquivo `03-criativo-ganhador.md`) |
| URL de destino do criativo | Variação aprovada da `paginas-lpsg` (`/v1`, `/v2`...) |
| Conversão da página | `paginas-lpsg` · alvo ≥ 5% |
| Teste de variação de página | `trafego` · campanha `TES-PAG_*` (este `02-estrutura-campanha.md`) com **criativos validados** |

---

## 📊 Métricas-alvo (resumo · detalhes em `paginas-lpsg`)

| Métrica | Mínimo | Ideal |
|---|---|---|
| Conversão página → compra | 5% | 7%+ |
| LCP | < 2.0s | < 1.5s |
| Lighthouse Mobile | ≥ 90 | ≥ 95 |

---

## 🚨 Decisão crítica: quando reescrever página vs criativo

Se a campanha estiver com **Body Rate baixo**:

```
Hook Rate ok + Hold Rate ok + Body Rate < 2%
```

A culpa pode ser do **CTA do criativo** OU da **página de ingresso**. Pra isolar:

1. Roda **campanha de teste** (`TES-PAG_*`) com criativos VALIDADOS apontando pra página atual
2. Se Body Rate continua baixo → problema é **página** (vai pra `paginas-lpsg`)
3. Se Body Rate sobe → problema era o **CTA do criativo**

---

## 📎 Referências

- **Skill principal:** [`paginas-lpsg`](~/.claude/skills/paginas-lpsg/) ou pasta `02-entregaveis-finais/paginas/`
- **Página de ingresso (estrutura completa):** `paginas/template/03-componentes-mobile-first.md`
- **Variações e teste A/B:** `paginas/template/04-matriz-variacoes.md`
- **Campanhas de teste de página:** `trafego/template/02-estrutura-campanha.md` (regras de orçamento + nomenclatura)

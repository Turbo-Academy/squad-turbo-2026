# Turbo UI — Editorial Premium

Biblioteca de componentes da **Turbo Academy** (Leo Tabari). React + Tailwind, marca Editorial Premium. Existe pra ser consumida pelo **Claude Design** via `/design-sync`: depois de sincronizada, todo design que o agente montar sai com os componentes e a identidade reais da Turbo.

## Identidade (Editorial Premium)

- **Preto** `#0A0A0A` · **Off-white** `#FBF9F3` · **Dourado champagne** `#C9A227`
- Display em serifa (**Fraunces**), corpo em **Inter**
- Cantos generosos (`rounded-full` em ações, `rounded-2xl` em cards), glow dourado sutil nas faixas

## Como estilizar (a idiom do sistema)

Sistema de **classes utilitárias Tailwind** lendo tokens semânticos via CSS vars. Sempre use os tokens, nunca hex cru:

| Família | Classes reais |
|---|---|
| Fundo | `bg-bg`, `bg-bg-elevated`, `bg-bg-muted`, `bg-bg-inverse` |
| Texto | `text-fg`, `text-fg-muted`, `text-fg-subtle`, `text-fg-inverse` |
| Marca | `text-accent`, `bg-accent`, `bg-brand-50`…`bg-brand-900` |
| Borda | `border-border`, `border-border-strong`, `ring-ring` |
| Fonte | `font-sans`, `font-serif`, `font-display` |
| Faixa de marca | `bg-gradient-glow`, `bg-gradient-brand` |

**Tema:** o tema vive em `:root`/`[data-theme="dark"]` (em `turbo-theme.css`). Light = paper editorial (default); `data-theme="dark"` = preto premium. Sem o CSS importado, os tokens não resolvem e o componente sai sem cor — sempre importe `@turbo/ui/styles.css` na raiz do app.

## Onde a verdade mora

- Tokens e tema: `src/styles.css` → importa `src/tokens.css` (primitivos) + `src/turbo-theme.css` (paleta da marca)
- Preset Tailwind: `tailwind.preset.js` (mapeia os tokens pras classes acima)

## Componentes (8)

`Button` · `Badge` · `Card` · `Section` · `Hero` · `Pricing` · `Depoimento` · `CTA`

## Exemplo idiomático

```tsx
import { Hero, Button, Section, Card } from '@turbo/ui'
import '@turbo/ui/styles.css'

export default function Landing() {
  return (
    <main data-theme="light">
      <Hero
        eyebrow="Evento ao vivo · grátis"
        title="Sua primeira semana de vendas no digital"
        subtitle="5 aulas práticas. Você sai com a estrutura pronta pra vender."
        actions={<Button size="lg">Garantir minha vaga</Button>}
      />
      <Section eyebrow="O que você leva" title="3 entregas concretas" width="lg">
        <div className="grid gap-6 md:grid-cols-3">
          <Card icon="🎯" title="Método 5+1">A estrutura de evento que converte.</Card>
          <Card icon="📈" title="Tráfego ROAS 1">Captação que se paga no ingresso.</Card>
          <Card icon="✍️" title="Copy pronta">Páginas e mensagens auditadas.</Card>
        </div>
      </Section>
    </main>
  )
}
```

## Build

```bash
npm install
npm run build      # → dist/ (esm + cjs + .d.ts + css)
npm run typecheck
```

## Sincronizar com o Claude Design

Rode na **sessão `claude` do Terminal** (logada com `/login`, escopo de design):

```bash
cd 05-design-system/turbo-ui
# dentro do Claude Code:
/design-sync
```

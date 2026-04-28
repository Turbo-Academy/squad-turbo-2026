# 03 · Componentes Mobile-First · Catálogo de blocos

> **Atualizado 2026-04:** este arquivo deixou de descrever "9 blocos em ordem fixa" e passou a ser **catálogo de componentes** que cada arquétipo (em `09-arquetipos-premium.md`) escolhe e organiza.
>
> **Use este arquivo como biblioteca de blocos React mobile-first prontos pra copiar** — não como receita única. A ordem e a presença de cada bloco depende do arquétipo escolhido pra cada variação.
>
> **Princípios mobile-first abaixo continuam válidos pra todos os arquétipos** (fonte mín 16px · botão 56px · contraste WCAG · LCP < 1.5s · imagens otimizadas).

---

## 📱 Princípios mobile-first

| # | Princípio |
|---|---|
| 1 | **Tamanho de fonte mínimo: 16px** — abaixo disso, mobile faz zoom no input |
| 2 | **Botões com altura ≥ 56px** — touch target Apple HIG |
| 3 | **Espaçamento vertical entre seções: 64-96px** (`py-16` a `py-24`) |
| 4 | **Largura máxima de texto: 65 caracteres** (legibilidade) |
| 5 | **Imagens com `loading="lazy"`** exceto a do hero (`priority`) |
| 6 | **Sem hover-only** — todo estado também acessível por toque |
| 7 | **Contraste de texto ≥ 4.5:1** (WCAG AA) |
| 8 | **`viewport-fit=cover`** no `<meta viewport>` pra notch do iPhone |

---

## 🧱 Os 9 blocos como componentes

### 1️⃣ TopBar — Barra de urgência

```tsx
// src/components/blocks/TopBar.tsx
import { Variation } from "@/data/variations";

export function TopBar({ variation }: { variation: Variation }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-bg-card border-b border-white/10 py-2 px-4">
      <p className="text-center text-sm font-semibold text-accent">
        {variation.topBarText}
      </p>
    </div>
  );
}
```

---

### 2️⃣ Hero — A primeira dobra

```tsx
// src/components/blocks/Hero.tsx
import Image from "next/image";
import { Variation } from "@/data/variations";
import { Button } from "@/components/ui/Button";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";

export function Hero({ variation }: { variation: Variation }) {
  return (
    <section className="relative px-5 py-12 md:py-20">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Coluna texto */}
        <div className="flex-1 order-2 md:order-1">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight">
            {variation.headline}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-fg-muted">
            {variation.subHeadline}
          </p>

          {/* DATA DO EVENTO — obrigatória na primeira dobra */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-base">📅</span>
            <span className="text-sm md:text-base font-semibold text-accent">
              {variation.dateText}
            </span>
          </div>

          {/* CTA */}
          <Button
            href={variation.checkoutUrl}
            size="lg"
            className="mt-6 w-full md:w-auto"
          >
            {variation.ctaPrimary}
          </Button>

          {/* GARANTIA — obrigatória abaixo do botão */}
          <GuaranteeBadge className="mt-4" />

          {/* Linha de prova */}
          <p className="mt-6 text-sm text-fg-muted">
            ⭐ +{"{N_ALUNOS}"} alunos transformados
          </p>
        </div>

        {/* Foto do expert */}
        <div className="flex-1 order-1 md:order-2 w-full">
          <Image
            src={variation.heroImage}
            alt="{NOME_ESPECIALISTA}"
            width={600}
            height={600}
            priority
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

---

### 3️⃣ Pain — Amplificação da dor

Suporta 2 estilos: `money-list` (lista de R$) e `affirmations` (cards de dores).

```tsx
// src/components/blocks/Pain.tsx
import { Variation } from "@/data/variations";
import { moneyPains, affirmationPains } from "@/data/pains";

export function Pain({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24 bg-bg-card">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
          {variation.painHeadline}
        </h2>

        {variation.painType === "money-list" ? (
          <ul className="mt-8 space-y-3">
            {moneyPains.map((p) => (
              <li
                key={p.label}
                className="flex items-baseline justify-between gap-4 py-3 border-b border-white/10"
              >
                <span className="text-base md:text-lg">❌ {p.label}</span>
                <span className="font-mono font-bold text-accent">{p.cost}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {affirmationPains.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-xl bg-bg border border-white/10"
              >
                <p className="text-2xl">{p.icon}</p>
                <h3 className="mt-2 font-bold text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-fg-muted">{p.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

---

### 4️⃣ NotYourFault — "A culpa não é sua"

```tsx
// src/components/blocks/NotYourFault.tsx
export function NotYourFault({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold tracking-widest text-accent uppercase">
          ATENÇÃO
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-black">
          A culpa não é sua.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-fg-muted">
          {/* Substitua pelo texto da variação */}
          Sabe por quê? Porque {"{EXPLICACAO_DO_SISTEMA_QUEBRADO}"}.
          {" "}
          {"{DETALHE_DO_PROBLEMA_MAIOR}"}.
        </p>
      </div>
    </section>
  );
}
```

---

### 5️⃣ Authority — Origem do expert

```tsx
// src/components/blocks/Authority.tsx
import Image from "next/image";

export function Authority({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24 bg-bg-card">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <Image
            src="/images/expert-portrait.webp"
            alt="{NOME_ESPECIALISTA}"
            width={400}
            height={500}
            loading="lazy"
            className="rounded-xl w-full h-auto"
          />
        </div>

        <div className="md:w-2/3">
          <h2 className="font-display text-3xl md:text-4xl font-black">
            Eu errei MUITO pra você acertar 100%
          </h2>
          <div className="mt-4 space-y-3 text-base md:text-lg text-fg-muted">
            <p>{"{HISTORIA_PARAGRAFO_1}"}</p>
            <p>{"{HISTORIA_PARAGRAFO_2}"}</p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li>✓ {"{CREDENCIAL_1}"}</li>
            <li>✓ {"{CREDENCIAL_2}"}</li>
            <li>✓ {"{CREDENCIAL_3}"}</li>
            <li>✓ {"{CREDENCIAL_4}"}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
```

---

### 6️⃣ Promises — Promessas expandidas

```tsx
// src/components/blocks/Promises.tsx
import { promises } from "@/data/promises";

export function Promises() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-center">
          O que muda quando você domina o método:
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {promises.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-white/10"
            >
              <span className="text-2xl text-accent flex-shrink-0">{p.icon}</span>
              <p className="text-base md:text-lg">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 7️⃣ Lessons — O que vai aprender

```tsx
// src/components/blocks/Lessons.tsx
import { lessons } from "@/data/lessons";

export function Lessons() {
  return (
    <section className="px-5 py-16 md:py-24 bg-bg-card">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-center">
          O que você vai aprender
        </h2>

        <ol className="mt-10 space-y-4">
          {lessons.map((l) => (
            <li
              key={l.n}
              className="flex items-start gap-4 p-5 rounded-xl bg-bg border border-white/10"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-black text-xl">
                {l.n}
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  {l.icon} {l.title}
                </h3>
                <p className="mt-1 text-sm md:text-base text-fg-muted">
                  {l.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

---

### 8️⃣ Testimonials — Prova social massiva

```tsx
// src/components/blocks/Testimonials.tsx
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-center">
          É IMPOSSÍVEL NEGAR OS RESULTADOS
        </h2>
        <p className="mt-3 text-center text-fg-muted text-lg">
          Veja o que os alunos estão dizendo:
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="p-5 rounded-2xl bg-bg-card border border-white/10"
            >
              {t.type === "video" && t.videoEmbed && (
                <div className="aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={t.videoEmbed}
                    loading="lazy"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              )}

              {t.type === "screenshot" && t.mediaUrl && (
                <Image
                  src={t.mediaUrl}
                  alt={`Resultado ${t.name}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="rounded-xl w-full h-auto"
                />
              )}

              <h3 className="mt-4 font-black text-sm md:text-base uppercase text-accent">
                {t.result}
              </h3>
              <p className="mt-2 text-base">"{t.emotional}"</p>
              <p className="mt-3 text-sm text-fg-muted">
                — {t.name}, {t.cityOrProfession}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 9️⃣ FinalCTA — Última chamada

```tsx
// src/components/blocks/FinalCTA.tsx
import { Variation } from "@/data/variations";
import { Button } from "@/components/ui/Button";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";

export function FinalCTA({ variation }: { variation: Variation }) {
  return (
    <section className="px-5 py-16 md:py-24 bg-gradient-to-b from-bg to-bg-card">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold tracking-widest text-accent uppercase">
          ÚLTIMA CHAMADA
        </p>

        <h2 className="mt-2 font-display text-3xl md:text-5xl font-black">
          {variation.painHeadline.includes("?") ? "É agora ou nunca" : "Sua escolha"}
        </h2>

        <p className="mt-4 text-lg text-fg-muted">{variation.dateText}</p>

        <Button
          href={variation.checkoutUrl}
          size="lg"
          className="mt-8 w-full md:w-auto"
        >
          {variation.ctaSecondary}
        </Button>

        <GuaranteeBadge className="mt-4" />

        <ul className="mt-8 space-y-2 text-sm text-fg-muted">
          <li>✓ Acesso imediato após confirmação</li>
          <li>✓ Aulas ao vivo + gravadas</li>
          <li>✓ Suporte direto pelo WhatsApp</li>
        </ul>
      </div>
    </section>
  );
}
```

---

## 🎁 Componentes UI auxiliares

### `Button.tsx`

```tsx
// src/components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

export function Button({ href, children, size = "md", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-black uppercase tracking-wide rounded-xl transition-all",
        "bg-accent text-bg hover:scale-[1.02] active:scale-[0.98]",
        size === "lg" ? "min-h-[56px] px-8 text-base md:text-lg" : "min-h-[44px] px-6 text-sm",
        className
      )}
    >
      {children}
    </Link>
  );
}
```

### `GuaranteeBadge.tsx`

```tsx
// src/components/ui/GuaranteeBadge.tsx
import { cn } from "@/lib/utils";

export function GuaranteeBadge({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-start gap-2 text-sm text-fg-muted", className)}>
      <span className="text-base flex-shrink-0">🛡️</span>
      <p className="text-left">
        <strong className="text-fg">Garantia Incondicional: Assista!</strong>
        <br />
        Se não gostar devolvo seu dinheiro ao final do evento.
      </p>
    </div>
  );
}
```

### `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🎨 Tailwind classes-padrão do LPSG

| Elemento | Classe |
|---|---|
| Container | `mx-auto max-w-6xl px-5` |
| Seção padrão | `px-5 py-16 md:py-24` |
| Headline H1 | `font-display text-4xl md:text-6xl font-black leading-tight` |
| Headline H2 | `font-display text-3xl md:text-5xl font-black uppercase` |
| Texto corpo | `text-base md:text-lg leading-relaxed text-fg-muted` |
| Botão CTA | `min-h-[56px] px-8 font-black uppercase rounded-xl bg-accent` |
| Card | `p-5 rounded-xl bg-bg-card border border-white/10` |

---

## 🚫 Erros comuns

| Erro | Consequência mobile |
|---|---|
| Fonte < 14px | Ilegível · Apple zoom em inputs |
| Botão < 44px de altura | Difícil tocar · taxa de erro alta |
| Imagens sem `next/image` | Sem otimização · LCP péssimo |
| Hero sem `priority` | LCP alto · perde mobile |
| Múltiplos H1 | SEO ruim · acessibilidade ruim |
| `<input>` sem `type` correto | Teclado errado · UX ruim |
| `position: fixed` sem cuidado | Quebra com teclado virtual |
| Modal sem `inert` | Foco escapa por trás |
| Animação heavy | INP > 200ms · perde Core Web Vitals |
| Sem `aria-label` em ícones | Screen reader ignora |

---

## 📋 Checklist de componentes

- [ ] 9 blocos criados em `components/blocks/`
- [ ] 2 componentes UI (Button + GuaranteeBadge)
- [ ] `lib/utils.ts` com helper `cn`
- [ ] Todos os componentes recebem prop `variation` quando relevante
- [ ] Hero usa `<Image priority>` (LCP)
- [ ] Outras imagens usam `loading="lazy"`
- [ ] Botões com `min-h-[56px]` no mobile
- [ ] Fonte mínima 16px no body
- [ ] Cores via `bg-accent` / `text-accent` (CSS variable)
- [ ] Espaçamento vertical consistente (`py-16 md:py-24`)
- [ ] Tudo responsivo (testar em 375px de largura)

import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../cn'

export interface PricingProps extends HTMLAttributes<HTMLDivElement> {
  /** Nome do plano/produto. */
  plan: ReactNode
  /** Preço já formatado (ex: "12x R$ 197"). */
  price: ReactNode
  /** Texto auxiliar abaixo do preço (ex: "ou R$ 1.997 à vista"). */
  caption?: ReactNode
  /** Lista de itens inclusos. */
  features?: string[]
  /** Ação de compra (geralmente um <Button>). */
  cta?: ReactNode
  /** Destaca o card como plano recomendado (borda dourada). */
  featured?: boolean
}

/** Card de oferta/preço do LPSG. Use `featured` no plano principal. Sem desconto fabricado — preço é preço. */
export function Pricing({
  plan,
  price,
  caption,
  features = [],
  cta,
  featured = false,
  className,
  ...props
}: PricingProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border p-8',
        featured ? 'border-accent bg-bg-elevated shadow-xl ring-1 ring-accent' : 'border-border bg-bg-elevated shadow-md',
        className,
      )}
      {...props}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">{plan}</p>
      <div className="mt-4 font-display text-4xl font-bold tracking-tight text-fg">{price}</div>
      {caption && <p className="mt-2 text-sm text-fg-muted">{caption}</p>}
      {features.length > 0 && (
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-fg-muted">
              <span className="mt-0.5 text-accent" aria-hidden>
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      {cta && <div className="mt-8">{cta}</div>}
    </div>
  )
}

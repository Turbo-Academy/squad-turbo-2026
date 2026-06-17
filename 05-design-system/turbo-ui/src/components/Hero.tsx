import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../cn'

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Rótulo curto acima do título (badge/eyebrow). */
  eyebrow?: ReactNode
  /** Título principal — a big idea. */
  title: ReactNode
  /** Subtítulo/promessa de apoio. */
  subtitle?: ReactNode
  /** Ações (geralmente um <Button>). */
  actions?: ReactNode
  /** Fundo preto premium com glow dourado. */
  inverse?: boolean
}

/** Dobra de abertura da página: eyebrow + título display + promessa + CTA. Centralizado, com glow de marca. */
export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  inverse = false,
  className,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden px-6 py-28 text-center md:py-36',
        inverse ? 'bg-bg-inverse text-fg-inverse' : 'bg-bg text-fg',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-glow" aria-hidden />
      <div className="relative mx-auto max-w-container-lg">
        {eyebrow && (
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tighter md:text-7xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">{subtitle}</p>
        )}
        {actions && <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{actions}</div>}
      </div>
    </section>
  )
}

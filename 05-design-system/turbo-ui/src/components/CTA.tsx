import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../cn'

export interface CTAProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Chamada final — frase de ação. */
  title: ReactNode
  /** Apoio curto abaixo do título. */
  subtitle?: ReactNode
  /** Botão(ões) de ação. */
  actions?: ReactNode
  /** Faixa em preto premium (default) ou paper. */
  inverse?: boolean
}

/** Faixa de conversão de fechamento. Preto premium + glow dourado por padrão, para fechar a página. */
export function CTA({ title, subtitle, actions, inverse = true, className, ...props }: CTAProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden px-6 py-24 text-center',
        inverse ? 'bg-bg-inverse text-fg-inverse' : 'bg-bg-muted text-fg',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" aria-hidden />
      <div className="relative mx-auto max-w-container-md">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">{subtitle}</p>}
        {actions && <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{actions}</div>}
      </div>
    </section>
  )
}

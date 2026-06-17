import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../cn'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Eleva o card com sombra e fundo. `false` = só contorno. */
  elevated?: boolean
  /** Ícone/elemento no topo (emoji, svg, número). */
  icon?: ReactNode
  /** Título do card. */
  title?: ReactNode
  children?: ReactNode
}

/** Card de conteúdo — benefícios, módulos, features. Compõe bem em grid dentro de Section. */
export function Card({ elevated = true, icon, title, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border p-6 transition-shadow duration-200',
        elevated ? 'bg-bg-elevated shadow-md hover:shadow-lg' : 'bg-transparent',
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl text-brand-700">
          {icon}
        </div>
      )}
      {title && <h3 className="mb-2 text-xl font-semibold tracking-tight text-fg">{title}</h3>}
      {children && <div className="text-base leading-relaxed text-fg-muted">{children}</div>}
    </div>
  )
}

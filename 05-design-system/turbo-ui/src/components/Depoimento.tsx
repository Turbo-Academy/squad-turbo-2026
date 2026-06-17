import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../cn'

export interface DepoimentoProps extends Omit<HTMLAttributes<HTMLElement>, 'role'> {
  /** O depoimento em si (texto do aluno/cliente). */
  quote: ReactNode
  /** Nome de quem deu o depoimento. */
  author: ReactNode
  /** Contexto do autor (cargo, nicho, resultado real). */
  role?: ReactNode
  /** URL da foto do autor. */
  avatar?: string
}

/** Prova social — estudo de caso narrativo, não elogio solto. Resultado real com contexto. */
export function Depoimento({ quote, author, role, avatar, className, ...props }: DepoimentoProps) {
  return (
    <figure
      className={cn('rounded-2xl border border-border bg-bg-elevated p-8 shadow-md', className)}
      {...props}
    >
      <blockquote className="font-display text-xl leading-relaxed text-fg">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        {avatar && (
          <img src={avatar} alt={typeof author === 'string' ? author : ''} className="h-12 w-12 rounded-full object-cover" />
        )}
        <div>
          <div className="font-semibold text-fg">{author}</div>
          {role && <div className="text-sm text-fg-subtle">{role}</div>}
        </div>
      </figcaption>
    </figure>
  )
}

import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../cn'

export type SectionWidth = 'md' | 'lg' | 'xl'
export type SectionTone = 'default' | 'muted' | 'inverse'

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Largura máxima do conteúdo centralizado. */
  width?: SectionWidth
  /** Fundo da seção. `inverse` = preto premium. */
  tone?: SectionTone
  /** Título opcional (eyebrow + heading) renderizado no topo. */
  eyebrow?: ReactNode
  title?: ReactNode
  children?: ReactNode
}

const widths: Record<SectionWidth, string> = {
  md: 'max-w-container-md',
  lg: 'max-w-container-lg',
  xl: 'max-w-container-xl',
}

const tones: Record<SectionTone, string> = {
  default: 'bg-bg text-fg',
  muted: 'bg-bg-muted text-fg',
  inverse: 'bg-bg-inverse text-fg-inverse',
}

/** Faixa de seção com padding vertical generoso e conteúdo centralizado. Base de toda página LPSG. */
export function Section({
  width = 'lg',
  tone = 'default',
  eyebrow,
  title,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('w-full px-6 py-20 md:py-28', tones[tone], className)} {...props}>
      <div className={cn('mx-auto', widths[width])}>
        {(eyebrow || title) && (
          <header className="mb-12 text-center">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

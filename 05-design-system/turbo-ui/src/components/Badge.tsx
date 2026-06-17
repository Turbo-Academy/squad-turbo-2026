import { type HTMLAttributes } from 'react'
import { cn } from '../cn'

export type BadgeTone = 'gold' | 'neutral' | 'success' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Cor/intenção do selo. `gold` = destaque de marca. */
  tone?: BadgeTone
}

const tones: Record<BadgeTone, string> = {
  gold: 'bg-brand-50 text-brand-700 border-brand-200',
  neutral: 'bg-bg-muted text-fg-muted border-border',
  success: 'bg-[color:var(--success)]/10 text-[color:var(--success)] border-[color:var(--success)]/30',
  danger: 'bg-[color:var(--danger)]/10 text-[color:var(--danger)] border-[color:var(--danger)]/30',
}

/** Selo curto para rótulos: "Vagas limitadas", "Turma 2026", status. */
export function Badge({ tone = 'gold', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}

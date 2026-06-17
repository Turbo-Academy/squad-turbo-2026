import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Hierarquia visual. `primary` = dourado Turbo, `secondary` = contorno, `ghost` = sem fundo. */
  variant?: ButtonVariant
  /** Tamanho do botão. */
  size?: ButtonSize
  /** Ocupa 100% da largura do container. */
  fullWidth?: boolean
}

const base =
  'inline-flex items-center justify-center font-semibold tracking-tight rounded-full ' +
  'transition-[transform,background-color,box-shadow] duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover shadow-md',
  secondary: 'bg-transparent text-fg border border-border-strong hover:bg-bg-muted',
  ghost: 'bg-transparent text-fg-muted hover:bg-bg-muted hover:text-fg',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
}

/** Botão de ação primária do Turbo. Use `primary` para o CTA principal de cada seção. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', fullWidth = false, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...props}
    />
  )
})

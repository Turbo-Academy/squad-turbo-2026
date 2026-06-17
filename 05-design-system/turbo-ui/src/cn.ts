import clsx, { type ClassValue } from 'clsx'

/** Junta classes condicionalmente (wrapper fino de clsx). */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}

/**
 * Tailwind preset — Turbo UI (Editorial Premium)
 * Lê os tokens semânticos de turbo-theme.css. Plug-and-play.
 *
 * uso:
 *   import turboPreset from '@turbo/ui/preset'
 *   export default { presets: [turboPreset], content: [...] }
 */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-muted': 'var(--bg-muted)',
        'bg-inverse': 'var(--bg-inverse)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        'fg-inverse': 'var(--fg-inverse)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        ring: 'var(--ring)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-fg': 'var(--accent-fg)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        brand: {
          50: 'var(--brand-50)', 100: 'var(--brand-100)', 200: 'var(--brand-200)',
          300: 'var(--brand-300)', 400: 'var(--brand-400)', 500: 'var(--brand-500)',
          600: 'var(--brand-600)', 700: 'var(--brand-700)', 800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
        display: ['var(--font-display)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)', '2xl': 'var(--radius-2xl)', full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)', '2xl': 'var(--shadow-2xl)',
      },
      maxWidth: {
        'container-md': 'var(--container-md)', 'container-lg': 'var(--container-lg)',
        'container-xl': 'var(--container-xl)', 'container-2xl': 'var(--container-2xl)',
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-glow': 'var(--gradient-glow)',
      },
    },
  },
  plugins: [],
}

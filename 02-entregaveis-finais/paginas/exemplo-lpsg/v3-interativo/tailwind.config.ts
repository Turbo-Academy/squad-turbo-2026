import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Interativo · 60/30/10 · tons frios técnicos
        'graphite': '#0F1115',        // dominante 60% · preto azulado profundo
        'graphite-elev': '#161A22',   // superfície elevada (cards · tabela)
        'graphite-line': '#222733',   // border sutil
        'graphite-hi': '#2B313F',     // border hover · grade comparativo
        'paper': '#FFFFFF',           // secundária 30% · texto principal
        'paper-soft': '#E6E9EF',      // texto regular legível
        'paper-mute': '#9099AB',      // texto secundário · labels
        'paper-faint': '#6E7689',     // dividers · meta · WCAG AA em micro 11-12px
        'cyan': '#00B4D8',            // accent 10% · ciano
        'cyan-hi': '#22D3EE',         // hover accent
        'cyan-soft': 'rgba(0, 180, 216, 0.12)',
        'cyan-line': 'rgba(0, 180, 216, 0.32)',
        'green': '#10B981',           // success · "depois" / live
        'red': '#E53935',             // error · "antes"
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'IBM Plex Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        'tech-tight': '-0.02em',
        'tech-tighter': '-0.03em',
        'tech-eyebrow': '0.16em',
      },
      maxWidth: {
        'reading': '65ch',
        'shell': '1200px',
      },
      fontSize: {
        'micro': ['12px', { lineHeight: '1.4', letterSpacing: '0.16em' }],
      },
      fontVariantNumeric: {
        'tabular': 'tabular-nums',
      },
    },
  },
  plugins: [],
};

export default config;

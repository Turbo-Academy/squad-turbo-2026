import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bold Pop · 60/30/10 · zero gradient · cor SÓLIDA chapada
        orange: '#FF5C00',           // dominante 60% · laranja saturado
        paper: '#FFFFFF',            // secundária 30% · branco puro
        ink: '#0F0F10',              // accent 10% · preto · texto crítico
        'ink-muted': 'rgba(15, 15, 16, 0.62)',
        'paper-muted': 'rgba(255, 255, 255, 0.78)',
        'paper-faint': 'rgba(255, 255, 255, 0.18)',
        'ink-faint': 'rgba(15, 15, 16, 0.12)',
      },
      fontFamily: {
        display: [
          'var(--font-space-grotesk)',
          'Druk Wide',
          'Söhne Breit',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      letterSpacing: {
        'display-tight': '-0.04em',
        'display-snug': '-0.02em',
        'cover-line': '0.18em',
      },
      maxWidth: {
        'reading': '65ch',
        'reading-narrow': '52ch',
      },
      fontSize: {
        'micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
    },
  },
  plugins: [],
};

export default config;

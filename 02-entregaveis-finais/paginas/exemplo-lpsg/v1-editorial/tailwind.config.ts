import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Premium · 60/30/10
        ink: '#0A0A0A',          // dominante 60% · preto profundo
        paper: '#F4F1EA',        // secundária 30% · off-white aquecido
        champagne: '#D4AF37',    // accent 10% · dourado champagne
        'paper-muted': 'rgba(244, 241, 234, 0.62)',
        'paper-faint': 'rgba(244, 241, 234, 0.18)',
        'ink-muted': 'rgba(10, 10, 10, 0.62)',
      },
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'editorial-tight': '-0.04em',
        'ticker': '0.18em',
      },
      maxWidth: {
        'reading': '65ch',
        'reading-wide': '72ch',
        'reading-narrow': '52ch',
      },
      fontSize: {
        'micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.18em' }],
      },
    },
  },
  plugins: [],
};

export default config;

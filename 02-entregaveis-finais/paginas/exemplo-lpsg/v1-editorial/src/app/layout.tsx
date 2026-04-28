import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Marina Costa · Mãe Produtiva · Edição 001',
  description:
    'Produtividade pra mãe empreendedora não é fazer mais — é fazer só o que importa em janelas curtas. Próxima edição em 11 de maio.',
  metadataBase: new URL('https://lp.marinacosta.com.br'),
  openGraph: {
    title: 'Mãe Produtiva · Edição 001 · Marina Costa',
    description:
      'Pomodoro foi feito por homens sem filhos. Mãe de filho pequeno tem 25-40 minutos seguidos, no máximo. Aqui está o método para esse contexto real.',
    type: 'article',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F4F1EA] antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
  // Space Grotesk não fornece 800/900 no Google Fonts.
  // Pra V2 Bold Magazine pesamos no 700 + tracking apertado + uppercase pra obter o impacto display.
});

export const metadata: Metadata = {
  title: 'Mãe Produtiva · Edição 001 · Marina Costa',
  description:
    'R$ 200.000/mês com dois filhos pequenos no colo. Estruture sua rotina e dobre sua receita em 7 dias — sem abrir mão da família. Próxima edição em 11 de maio.',
  metadataBase: new URL('https://lp.marinacosta.com.br'),
  openGraph: {
    title: 'Mãe Produtiva · Edição 001 · Marina Costa',
    description:
      'Capa desta edição: rotina-âncora, janelas curtas e o método que cabe no contexto real de quem tem filho pequeno e empresa pra rodar.',
    type: 'article',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#FF5C00',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-[#FFFFFF] text-[#0F0F10] antialiased">
        {children}
      </body>
    </html>
  );
}

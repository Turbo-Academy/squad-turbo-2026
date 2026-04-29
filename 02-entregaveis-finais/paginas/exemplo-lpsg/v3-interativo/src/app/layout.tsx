import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Mãe Produtiva · Calculadora · Marina Costa',
  description:
    'Quanto você está perdendo por mês não otimizando sua rotina? Descubra com a calculadora — e veja o método que a Marina usou pra subir de R$ 12k pra R$ 45k/mês trabalhando 6h/dia. Próxima edição em 11 de maio.',
  metadataBase: new URL('https://lp.marinacosta.com.br'),
  openGraph: {
    title: 'Mãe Produtiva · Calculadora · Marina Costa',
    description:
      'Em janelas de 25-40min você pode mais que em 4h forçadas. Quanto você perde sem isso? Calcule agora.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0F1115',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-graphite text-paper-soft antialiased">
        {children}
      </body>
    </html>
  );
}

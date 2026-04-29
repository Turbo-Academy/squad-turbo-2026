import HeroTecnico from '@/components/HeroTecnico';
import Calculadora from '@/components/Calculadora';
import ComparativoTabela from '@/components/ComparativoTabela';
import ComoFunciona from '@/components/ComoFunciona';
import StackAulas from '@/components/StackAulas';
import LiveCounter from '@/components/LiveCounter';
import FAQTecnico from '@/components/FAQTecnico';
import PricingCTA from '@/components/PricingCTA';

export default function Page() {
  return (
    <main id="main" className="min-h-screen">
      <HeroTecnico />
      <Calculadora />
      <ComparativoTabela />
      <ComoFunciona />
      <StackAulas />
      <LiveCounter />
      <FAQTecnico />
      <PricingCTA />

      <footer className="border-t border-graphite-line bg-graphite">
        <div className="mx-auto flex w-full max-w-shell flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
            © Marina Costa · Mãe Produtiva · Edição 001 · 2026
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
            marinacosta.com.br · @marinacostaproduz
          </p>
        </div>
      </footer>
    </main>
  );
}

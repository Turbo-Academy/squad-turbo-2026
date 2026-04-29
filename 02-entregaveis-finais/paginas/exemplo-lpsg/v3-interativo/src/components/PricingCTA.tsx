import Link from 'next/link';

export default function PricingCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-line to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tech-eyebrow mb-5 text-cyan-hi">08 · Reserva</p>
          <h2
            id="cta-heading"
            className="font-sans text-[40px] font-semibold leading-[1.05] tracking-tech-tighter text-paper md:text-[64px]"
          >
            Próxima edição{' '}
            <span className="text-paper-mute">começa</span>
            <br />
            <span className="font-mono text-cyan">11 · maio · 7h.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-reading text-base leading-[1.6] text-paper-soft md:text-lg">
            R$ 47 reserva sua entrada. Sem cartão recorrente. Sem upsell
            surpresa. Se mudar de ideia em 7 dias · 1 clique e dinheiro de
            volta.
          </p>
        </div>

        {/* Pricing card · estilo SaaS premium */}
        <div className="mx-auto mt-12 max-w-xl">
          <div className="card-tech relative overflow-hidden p-8 md:p-10">
            {/* tag canto · acento técnico */}
            <div className="absolute right-6 top-6">
              <span className="tech-pill">Edição 001</span>
            </div>

            <p className="tech-eyebrow text-paper-faint">Ingresso</p>
            <h3 className="mt-3 text-xl font-semibold text-paper md:text-2xl">
              Desafio Mãe Produtiva
            </h3>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-mono text-[64px] font-semibold leading-none tracking-tech-tighter text-paper md:text-[80px]">
                R$ 47
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.14em] text-paper-faint">
                pagamento único
              </span>
            </div>

            <ul className="mt-8 space-y-3 border-t border-graphite-line pt-6">
              <Feature text="5 aulas técnicas · seg a sex · 11-15 maio" />
              <Feature text="Tira-dúvidas com a Marina · sábado 16/05" />
              <Feature text="Apresentação do Acelerador · domingo 17/05" />
              <Feature text="Garantia incondicional 7 dias · 100% de volta" />
              <Feature text="Sem cartão recorrente · sem upsell escondido" />
            </ul>

            <div className="mt-8">
              <Link
                href="https://pay.hotmart.com/MPR-INGRESSO-FAKE"
                className="pricing-btn w-full"
              >
                <span className="text-base md:text-lg">Quero aprender agora →</span>
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-graphite">
                  RESERVAR ENTRADA · R$ 47 · SEM CARTÃO AGORA
                </span>
              </Link>

              <p className="mt-4 text-center text-xs leading-[1.6] text-paper-mute">
                Pagamento via Hotmart · Pix · cartão · boleto.{' '}
                <span className="text-paper-faint">Recibo automático.</span>
              </p>
            </div>
          </div>

          {/* Linha técnica · meta inferior */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
            <span>800+ alunas formadas</span>
            <span aria-hidden="true">·</span>
            <span>Auditoria sob pedido</span>
            <span aria-hidden="true">·</span>
            <span>Edição 001 / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-soft text-cyan-hi"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 7.5L5.5 10.5L11.5 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-sm leading-[1.5] text-paper-soft md:text-[15px]">
        {text}
      </span>
    </li>
  );
}

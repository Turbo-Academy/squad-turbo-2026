import Link from 'next/link';

export default function HeroTecnico() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-graphite-line"
    >
      {/* grade técnica de fundo · sutil · não decorativo gratuito */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-shell px-6 pt-12 pb-20 md:px-10 md:pt-20 md:pb-28">
        {/* topo · meta de edição · estilo doc técnico */}
        <div className="mb-12 flex flex-wrap items-center gap-x-5 gap-y-2 md:mb-16">
          <span className="tech-eyebrow">Edição 001 · MPR</span>
          <span className="hidden h-px w-8 bg-graphite-hi md:block" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-paper-faint">
            v3 · interativo
          </span>
        </div>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-12">
          {/* coluna principal · headline + sub + CTA */}
          <div className="md:col-span-7">
            {/* DATA · obrigatória 1ª dobra · badge tipográfico ≥ 40px */}
            <div className="mb-8 inline-flex items-stretch overflow-hidden rounded-md border border-cyan-line bg-cyan-soft">
              <div className="flex flex-col items-center justify-center bg-cyan px-5 py-3 text-graphite">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                  Início
                </span>
                <span className="font-mono text-[44px] font-semibold leading-none tracking-tech-tight">
                  11
                </span>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                  maio
                </span>
              </div>
              <div className="flex flex-col justify-center gap-1 px-5 py-3">
                <span className="tech-eyebrow text-cyan-hi">Segunda · 7h</span>
                <span className="font-mono text-sm text-paper-soft">
                  5 aulas + tira-dúvidas
                </span>
              </div>
            </div>

            {/* HEADLINE · curta · técnica */}
            <h1
              id="hero-heading"
              className="font-sans text-[44px] font-semibold leading-[1.05] tracking-tech-tighter text-paper md:text-[68px]"
            >
              Produtividade pra mãe empreendedora
              <br className="hidden md:block" />{' '}
              <span className="text-paper-mute">não é fazer mais.</span>
              <br className="hidden md:block" />{' '}
              <span className="text-cyan">É fazer só o que importa.</span>
            </h1>

            {/* SUBHEADLINE · 1 dado */}
            <p className="mt-7 max-w-reading text-lg leading-[1.55] text-paper-soft md:text-xl">
              Em janelas de 25-40min você pode mais que em 4h forçadas.{' '}
              <span className="font-mono font-semibold text-paper">
                800+ alunas
              </span>{' '}
              já aplicaram o método · auditoria sob pedido.
            </p>

            {/* CTA · pricing-style · ≥ 56px */}
            <div className="mt-10 flex flex-col items-start gap-3">
              <Link
                href="https://pay.hotmart.com/MPR-INGRESSO-FAKE"
                className="pricing-btn"
              >
                <span className="text-base md:text-lg">Quero aprender agora →</span>
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-graphite">
                  RESERVAR ENTRADA · R$ 47 · SEM CARTÃO AGORA
                </span>
              </Link>

              {/* GARANTIA · obrigatória logo abaixo do CTA */}
              <p className="max-w-[420px] text-sm leading-[1.5] text-paper-mute">
                <span className="font-medium text-paper-soft">
                  Garantia incondicional · 7 dias.
                </span>{' '}
                100% do valor de volta · sem pergunta · 1 clique.
              </p>
            </div>
          </div>

          {/* coluna lateral · stat panel · estilo dashboard */}
          <aside className="md:col-span-5">
            <div className="card-tech p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-graphite-line pb-4">
                <span className="tech-eyebrow">Resultado · método aplicado</span>
                <span className="font-mono text-[11px] text-paper-faint">12 meses</span>
              </div>

              <div className="mt-6 space-y-6">
                <Stat
                  label="Faturamento médio"
                  before="R$ 12k/mês"
                  after="R$ 45k/mês"
                  delta="+275%"
                />
                <Stat
                  label="Horas trabalhadas/dia"
                  before="12-14h"
                  after="6h"
                  delta="−50%"
                />
                <Stat
                  label="Tempo qualidade família"
                  before="0-1h/dia"
                  after="4-6h/dia"
                  delta="+5x"
                />
              </div>

              <p className="mt-7 border-t border-graphite-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                Caso real · Marina · auditoria sob pedido
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  before,
  after,
  delta,
}: {
  label: string;
  before: string;
  after: string;
  delta: string;
}) {
  return (
    <div>
      <p className="tech-eyebrow text-paper-faint">{label}</p>
      <div className="mt-2 flex items-baseline gap-3">
        <span className="font-mono text-sm text-paper-mute line-through">{before}</span>
        <span aria-hidden="true" className="text-paper-faint">→</span>
        <span className="font-mono text-xl font-semibold text-paper">{after}</span>
        <span
          className="ml-auto font-mono text-sm font-medium text-green"
          aria-label={`variação ${delta}`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}

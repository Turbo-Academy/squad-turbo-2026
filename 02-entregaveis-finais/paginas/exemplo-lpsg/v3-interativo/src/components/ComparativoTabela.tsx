type Row = {
  label: string;
  before: string;
  after: string;
  delta?: string;
};

const rows: Row[] = [
  { label: 'Faturamento médio', before: 'R$ 12k/mês', after: 'R$ 45k/mês', delta: '+275%' },
  { label: 'Horas trabalhadas/dia', before: '12-14h', after: '6h', delta: '−50%' },
  { label: 'Tempo qualidade família', before: '0-1h/dia', after: '4-6h/dia', delta: '+5x' },
  { label: 'Taxa de tarefa concluída', before: '~30%', after: '~85%', delta: '+183%' },
  { label: 'Stress score (0-10)', before: '8.4', after: '3.2', delta: '−62%' },
];

export default function ComparativoTabela() {
  return (
    <section
      aria-labelledby="comp-heading"
      className="border-b border-graphite-line bg-graphite-elev/40"
    >
      <div className="mx-auto w-full max-w-shell px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="tech-eyebrow mb-4">03 · Antes vs depois</p>
          <h2
            id="comp-heading"
            className="font-sans text-[34px] font-semibold leading-[1.1] tracking-tech-tighter text-paper md:text-[48px]"
          >
            O comparativo direto.
            <br className="hidden md:block" />{' '}
            <span className="text-paper-mute">Sem maquiagem.</span>
          </h2>
          <p className="mt-5 max-w-reading text-base leading-[1.6] text-paper-soft">
            Métricas reais auditadas da Marina · 12 meses depois de aplicar o
            método. Comparativo disponível pra qualquer aluna sob pedido.
          </p>
        </div>

        {/* Tabela · estilo Stripe pricing comparison */}
        <div className="overflow-hidden rounded-xl border border-graphite-line bg-graphite-elev">
          {/* Header */}
          <div
            className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 border-b border-graphite-line px-5 py-4 md:grid-cols-[2fr_1fr_1fr_0.7fr] md:px-8"
            role="row"
          >
            <span className="tech-eyebrow text-paper-mute">Métrica</span>
            <span className="tech-eyebrow text-paper-mute">Antes</span>
            <span className="tech-eyebrow text-cyan-hi">Depois</span>
            <span className="hidden tech-eyebrow text-right text-paper-mute md:block">
              Delta
            </span>
          </div>

          {/* Rows */}
          <div role="rowgroup">
            {rows.map((r, i) => (
              <div
                key={r.label}
                role="row"
                className={`grid grid-cols-[1.4fr_1fr_1fr] items-center gap-4 px-5 py-5 md:grid-cols-[2fr_1fr_1fr_0.7fr] md:px-8 ${
                  i !== rows.length - 1 ? 'border-b border-graphite-line' : ''
                } transition-colors duration-200 ease-out hover:bg-graphite/40`}
              >
                <span className="text-sm font-medium text-paper md:text-base">
                  {r.label}
                </span>
                <span className="font-mono text-sm text-paper-mute md:text-base">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red mr-2 align-middle" aria-hidden="true" />
                  <span className="line-through decoration-paper-faint">{r.before}</span>
                </span>
                <span className="font-mono text-sm font-semibold text-paper md:text-base">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green mr-2 align-middle" aria-hidden="true" />
                  {r.after}
                </span>
                <span className="hidden text-right font-mono text-sm font-medium text-cyan-hi md:block">
                  {r.delta}
                </span>
              </div>
            ))}
          </div>

          {/* Footer · disclaimer */}
          <div className="border-t border-graphite-line bg-graphite/60 px-5 py-4 md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
              Caso real · Marina Costa · auditoria sob pedido em{' '}
              <span className="text-paper-mute">contato@marinacosta.com.br</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

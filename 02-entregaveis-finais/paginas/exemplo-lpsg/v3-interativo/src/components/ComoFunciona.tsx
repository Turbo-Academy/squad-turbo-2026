type Step = {
  index: string;
  title: string;
  body: string;
  meta: string;
};

const steps: Step[] = [
  {
    index: '01',
    title: 'Mapeia janelas reais',
    body: 'Em vez de fingir que você tem 4h, a gente mapeia as suas janelas honestas de 25-40min. O método começa pela realidade · não pelo template.',
    meta: 'Dia 1-3',
  },
  {
    index: '02',
    title: 'Encaixa tarefa em janela',
    body: 'Cada tipo de tarefa entra na janela certa. Foco profundo nas curtas-vazias · operacional nas curtas-cheias · lazer nas residuais.',
    meta: 'Dia 4-10',
  },
  {
    index: '03',
    title: 'Automatiza o operacional',
    body: 'O que pode ser template · vira template. O que pode ser delegado · vira delegado. Você ganha 10h/semana sem aumentar carga.',
    meta: 'Dia 11-20',
  },
  {
    index: '04',
    title: 'Escala receita sem hora',
    body: 'Com janelas estáveis e operacional cortado, sobra capacidade pra subir ticket e construir oferta · não pra colocar mais hora no calendário.',
    meta: 'Dia 21-30',
  },
];

export default function ComoFunciona() {
  return (
    <section
      aria-labelledby="how-heading"
      className="border-b border-graphite-line"
    >
      <div className="mx-auto w-full max-w-shell px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="tech-eyebrow mb-4">04 · Como funciona</p>
          <h2
            id="how-heading"
            className="font-sans text-[34px] font-semibold leading-[1.1] tracking-tech-tighter text-paper md:text-[48px]"
          >
            Quatro passos.{' '}
            <span className="text-paper-mute">Trinta dias.</span>
          </h2>
          <p className="mt-5 max-w-reading text-base leading-[1.6] text-paper-soft">
            Não é mais um curso de produtividade genérico — é um protocolo
            sequencial. Cada passo destrava o próximo.
          </p>
        </div>

        {/* Timeline horizontal · cards numerados · variação de borda (anti-clone) */}
        <ol className="grid gap-px overflow-hidden rounded-xl border border-graphite-line bg-graphite-line md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.index}
              className="group relative bg-graphite-elev p-7 transition-colors hover:bg-graphite md:p-8"
            >
              {/* trilha técnica conectora · só desktop · entre cards */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-cyan-line to-transparent md:block"
                />
              )}

              {/* Index mono · destaque */}
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-3xl font-semibold tracking-tech-tighter text-cyan">
                  {s.index}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                  {s.meta}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-paper md:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.6] text-paper-soft md:text-[15px]">
                {s.body}
              </p>

              {/* Marker técnico · sutil · só hover */}
              <div className="mt-6 h-px w-full bg-graphite-line transition-colors group-hover:bg-cyan-line" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

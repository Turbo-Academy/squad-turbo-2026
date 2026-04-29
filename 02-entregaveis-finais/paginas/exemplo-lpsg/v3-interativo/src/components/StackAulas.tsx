type Aula = {
  num: string;
  titulo: string;
  promessa: string;
  duracao: string;
};

const aulas: Aula[] = [
  {
    num: 'A1',
    titulo: 'Por que Pomodoro NÃO funciona pra mãe',
    promessa: 'Você entende por que tudo que tentou antes falhou · e vê o método pro seu contexto.',
    duracao: '~70 min',
  },
  {
    num: 'A2',
    titulo: 'Sua rotina-âncora em 4 blocos diários',
    promessa: 'Você sai com a rotina dos próximos 30 dias estruturada · pronta pra rodar segunda.',
    duracao: '~60 min',
  },
  {
    num: 'A3',
    titulo: 'Ganhar 10h/semana automatizando o operacional',
    promessa: 'Você identifica 3 tarefas pra automatizar essa semana · com templates prontos.',
    duracao: '~75 min',
  },
  {
    num: 'A4',
    titulo: 'Dobrar a receita sem dobrar as horas',
    promessa: 'Estratégia de oferta + precificação que aumenta ticket sem aumentar carga.',
    duracao: '~80 min',
  },
  {
    num: 'A5',
    titulo: 'Sistema de delegação progressiva (mesmo solo)',
    promessa: 'Você sai com checklist do que delega na próxima semana · roteiro de contratação.',
    duracao: '~65 min',
  },
  {
    num: 'TQ',
    titulo: 'Tira-dúvidas · sábado',
    promessa: 'Espaço pra encaixar o método na sua rotina específica · com a Marina ao vivo no chat.',
    duracao: '~90 min',
  },
];

export default function StackAulas() {
  return (
    <section
      aria-labelledby="stack-heading"
      className="border-b border-graphite-line bg-graphite-elev/40"
    >
      <div className="mx-auto w-full max-w-shell px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="tech-eyebrow mb-4">05 · Stack de aulas</p>
            <h2
              id="stack-heading"
              className="font-sans text-[32px] font-semibold leading-[1.1] tracking-tech-tighter text-paper md:text-[44px]"
            >
              O que está dentro
              <br />
              <span className="text-paper-mute">do ingresso.</span>
            </h2>
            <p className="mt-5 max-w-reading text-base leading-[1.6] text-paper-soft">
              Cinco aulas técnicas + tira-dúvidas no sábado + apresentação do
              acelerador no domingo. Você decide se entra no programa de 90
              dias depois — ou só fica com as aulas. Sem ginástica.
            </p>
          </div>

          {/* Feature list · checks técnicos · não bullets emoji */}
          <div className="md:col-span-8">
            <ul className="divide-y divide-graphite-line overflow-hidden rounded-xl border border-graphite-line bg-graphite-elev">
              {aulas.map((a) => (
                <li
                  key={a.num}
                  className="flex items-start gap-4 px-5 py-5 transition-colors hover:bg-graphite/40 md:gap-6 md:px-7"
                >
                  {/* Check técnico · ícone SVG inline (não emoji) */}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-line bg-cyan-soft text-cyan-hi"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 7.5L5.5 10.5L11.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-paper-faint">
                        {a.num}
                      </span>
                      <h3 className="text-base font-semibold text-paper md:text-[17px]">
                        {a.titulo}
                      </h3>
                      <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                        {a.duracao}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-[1.6] text-paper-soft">
                      {a.promessa}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
              Apresentação do Acelerador (domingo) · sem custo extra · sem
              obrigação de comprar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * IssueIndex · Bloco 4 · Sumário de revista
 *
 * As 5 aulas como sumário de revista, com paginação editorial.
 * Estilo: tabela tipográfica · número da página em laranja · título bold display.
 *
 * Conteúdo das aulas vem do cadastro Marina Costa (`a1`–`a5`).
 * NÃO usar "AO VIVO" / "GRAVADA" em lugar nenhum (regra do PRODUCT.md).
 */
const SECTIONS = [
  {
    page: '03',
    eyebrow: 'Aula 1',
    title: 'Por que Pomodoro NÃO funciona pra mãe',
    promise:
      'Você entende por que tudo que tentou antes falhou — e vê o método que funciona pro seu contexto.',
  },
  {
    page: '07',
    eyebrow: 'Aula 2',
    title: 'A rotina-âncora em 4 blocos diários',
    promise:
      'Você sai da aula com a rotina dos próximos 30 dias estruturada no papel.',
  },
  {
    page: '13',
    eyebrow: 'Aula 3',
    title: 'Ganhando 10h/semana automatizando o operacional',
    promise:
      'Você identifica 3 tarefas para tirar do seu colo ainda nesta semana.',
  },
  {
    page: '19',
    eyebrow: 'Aula 4',
    title: 'Dobrando a receita sem dobrar as horas',
    promise:
      'Estratégia de oferta + precificação que aumenta ticket sem aumentar carga.',
  },
  {
    page: '25',
    eyebrow: 'Aula 5',
    title: 'O sistema de delegação progressiva (mesmo solo)',
    promise:
      'Você sai com o checklist do que delega já na semana seguinte.',
  },
];

export function IssueIndex() {
  return (
    <section
      className="bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
      aria-labelledby="issue-index-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 sm:py-28 md:px-12 md:py-32 lg:px-16">
        {/* Heading da seção · estilo "Inside this issue" */}
        <div className="grid items-end gap-6 md:grid-cols-[auto_1fr] md:gap-12">
          <p className="cover-line text-[12px] text-[color:var(--color-orange)] sm:text-[13px]">
            Sumário · Edição 001
          </p>
          <h2
            id="issue-index-title"
            className="cover-display text-[40px] text-[color:var(--color-ink)] sm:text-[56px] md:text-[72px]"
          >
            O que cabe nesta edição
          </h2>
        </div>

        {/* Sumário · linhas tipo tabela · número da página + título */}
        <ol className="mt-12 divide-y-2 divide-[color:var(--color-ink)] border-y-2 border-[color:var(--color-ink)] md:mt-16">
          {SECTIONS.map((s) => (
            <li
              key={s.page}
              className="grid grid-cols-[auto_1fr] gap-x-6 py-6 sm:grid-cols-[auto_1fr_auto] sm:gap-x-10 sm:py-8"
            >
              {/* Página */}
              <p
                className="cover-display text-[40px] leading-none text-[color:var(--color-orange)] sm:text-[56px] md:text-[64px]"
                aria-label={`Página ${s.page}`}
              >
                {s.page}
              </p>

              {/* Eyebrow + título */}
              <div className="min-w-0">
                <p className="cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]">
                  {s.eyebrow}
                </p>
                <h3
                  className="mt-2 text-balance text-[20px] leading-[1.15] text-[color:var(--color-ink)] sm:text-[26px] md:text-[32px]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[58ch] text-[14px] text-[color:var(--color-ink-muted)] sm:text-[15px]">
                  {s.promise}
                </p>
              </div>

              {/* Estilo "vai pra página" · sumário visual · só em md+ */}
              <p className="hidden self-end cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:block">
                continua —
              </p>
            </li>
          ))}
        </ol>

        {/* Linha extra · sábado tira-dúvidas + domingo apresentação */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-8">
          <p className="text-[14px] text-[color:var(--color-ink-muted)]">
            <span className="cover-line block text-[11px] text-[color:var(--color-orange)] sm:text-[12px]">
              Bônus desta edição
            </span>
            <span className="mt-2 block text-[16px] font-semibold text-[color:var(--color-ink)] sm:text-[18px]">
              Sábado · sessão de tira-dúvidas com a Marina.
            </span>
            <span className="mt-1 block">
              Recortes do que travou na semana, respondidos em bloco curto.
            </span>
          </p>
          <p className="text-[14px] text-[color:var(--color-ink-muted)]">
            <span className="cover-line block text-[11px] text-[color:var(--color-orange)] sm:text-[12px]">
              Domingo
            </span>
            <span className="mt-2 block text-[16px] font-semibold text-[color:var(--color-ink)] sm:text-[18px]">
              Apresentação do programa Acelerador (livre pra todo mundo).
            </span>
            <span className="mt-1 block">
              Quem quiser dar o próximo passo, esse é o momento.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

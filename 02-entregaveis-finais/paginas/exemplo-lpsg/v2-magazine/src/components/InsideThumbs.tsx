/**
 * InsideThumbs · Bloco 5 · "Inside this issue"
 *
 * 4 cartões de prévia · cada cartão é uma manchete + 1 frase de gancho.
 * Variação obrigatória entre cards (DESIGN.md): paddings e fundos diferentes
 * pra evitar a estética "rounded-2xl shadow-lg border" repetida.
 *
 * Os 4 thumbs cobrem ângulos distintos do conteúdo de Marina:
 *   1. A objeção principal ("Pomodoro não funciona pra mãe")
 *   2. O big idea (janelas curtas · alta conversão de tarefa)
 *   3. O resultado financeiro (R$ 200k · escala enxuta)
 *   4. O ângulo de família (mais tempo com filhos · não menos)
 */
const THUMBS = [
  {
    eyebrow: 'Diagnóstico',
    title: 'Por que o método dos outros não cabe na sua rotina.',
    blurb:
      'Pomodoro, GTD, deep work — escritos por quem tem 4 horas seguidas. Mãe de filho pequeno tem 25 minutos. O método precisa caber aí.',
    bg: 'paper',
  },
  {
    eyebrow: 'Big idea',
    title: 'Janelas curtas + alta conversão de tarefa.',
    blurb:
      'Bloquinhos de 25 a 40 minutos com tarefa única e crítica. Em vez de criar 4 horas que você não tem, extrai impacto desproporcional do tempo real.',
    bg: 'orange',
  },
  {
    eyebrow: 'Operação',
    title: 'R$ 200 mil/mês com 6 horas focadas por dia.',
    blurb:
      'Estrutura enxuta, equipe pequena, oferta certa. Como construir receita escalável quando o tempo de tela é o recurso mais escasso.',
    bg: 'ink',
  },
  {
    eyebrow: 'Família',
    title: 'Mais tempo com os filhos. Não menos.',
    blurb:
      'A medida final do método não é faturamento. É quantas horas de qualidade sobraram pra família depois que a empresa rodou bem.',
    bg: 'paper',
  },
];

export function InsideThumbs() {
  return (
    <section
      className="bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
      aria-labelledby="inside-thumbs-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 md:px-12 md:py-28 lg:px-16">
        <div className="flex items-baseline justify-between gap-6">
          <h2
            id="inside-thumbs-title"
            className="cover-display text-[32px] text-[color:var(--color-ink)] sm:text-[44px] md:text-[56px]"
          >
            Inside this issue
          </h2>
          <p className="cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]">
            4 prévias
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:mt-14 md:gap-8 lg:grid-cols-4">
          {THUMBS.map((t, i) => (
            <ThumbCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThumbCard({
  eyebrow,
  title,
  blurb,
  bg,
  index,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  bg: 'paper' | 'orange' | 'ink';
  index: number;
}) {
  const isOrange = bg === 'orange';
  const isInk = bg === 'ink';
  const isPaper = bg === 'paper';

  // Variação proposital de fundo, padding, e tratamento de borda.
  // Evita a estética "rounded-2xl shadow-lg border" clonada.
  const base = 'flex h-full flex-col p-6 sm:p-8';
  const tone = isOrange
    ? 'bleed-orange'
    : isInk
      ? 'bleed-ink'
      : 'bg-[color:var(--color-paper)] text-[color:var(--color-ink)] border-2 border-[color:var(--color-ink)]';

  // Numbers no canto · estilo capa de revista numerada
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`${base} ${tone}`}
      data-on-orange={isOrange ? 'true' : undefined}
    >
      <header className="flex items-start justify-between gap-4">
        <p
          className={`cover-line text-[11px] sm:text-[12px] ${
            isOrange
              ? 'text-[color:var(--color-paper-muted)]'
              : isInk
                ? 'text-[color:var(--color-paper-muted)]'
                : 'text-[color:var(--color-orange)]'
          }`}
        >
          {eyebrow}
        </p>
        <p
          className={`cover-display text-[28px] leading-none sm:text-[32px] ${
            isOrange
              ? 'text-[color:var(--color-ink)]'
              : isInk
                ? 'text-[color:var(--color-orange)]'
                : 'text-[color:var(--color-orange)]'
          }`}
          aria-hidden="true"
        >
          {num}
        </p>
      </header>

      <h3
        className={`mt-6 text-balance text-[22px] font-bold leading-[1.15] sm:text-[26px] ${
          isPaper ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-paper)]'
        }`}
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
      >
        {title}
      </h3>

      <p
        className={`mt-4 text-[14px] sm:text-[15px] ${
          isPaper
            ? 'text-[color:var(--color-ink-muted)]'
            : 'text-[color:var(--color-paper-muted)]'
        }`}
      >
        {blurb}
      </p>
    </article>
  );
}

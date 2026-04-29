/**
 * PullQuoteBold · Bloco 6 · Pull quotes entre seções
 *
 * Citação grande em display extra-bold · cara de capa de revista (não serif italic).
 * Variantes:
 *   - "ink": citação em preto sobre branco
 *   - "orange": citação em branco sobre laranja chapado (ocupa 60% do frame)
 *
 * Sem aspas ornamentais · texto fala por si · padding generoso (≥ 96px vertical).
 */
interface Props {
  quote: string;
  attribution: string;
  variant?: 'ink' | 'orange';
}

export function PullQuoteBold({ quote, attribution, variant = 'ink' }: Props) {
  const isOrange = variant === 'orange';

  return (
    <section
      className={isOrange ? 'bleed-orange' : 'bg-[color:var(--color-paper)]'}
      data-on-orange={isOrange ? 'true' : undefined}
      aria-label="Citação em destaque"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 sm:py-28 md:px-12 md:py-32 lg:px-16">
        <blockquote
          className={`cover-display-tight max-w-[28ch] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] ${
            isOrange
              ? 'text-[color:var(--color-paper)]'
              : 'text-[color:var(--color-ink)]'
          }`}
        >
          <p>{quote}</p>
        </blockquote>
        <footer
          className={`mt-8 cover-line text-[11px] sm:text-[12px] ${
            isOrange
              ? 'text-[color:var(--color-paper-muted)]'
              : 'text-[color:var(--color-ink-muted)]'
          }`}
        >
          <span aria-hidden="true">— </span>
          {attribution}
        </footer>
      </div>
    </section>
  );
}

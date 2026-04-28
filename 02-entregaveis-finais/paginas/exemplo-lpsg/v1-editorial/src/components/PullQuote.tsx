/**
 * PullQuote · Bloco 3 · Citação destacada
 *
 * - Tipografia 2-3x maior que o corpo · serif italic
 * - Sem aspas ornamentais (texto fala por si)
 * - Padding generoso ≥ 96px vertical (DESIGN.md)
 * - Ocupa seção inteira · respiração máxima
 */
type PullQuoteProps = {
  quote: string;
  attribution?: string;
};

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] px-6 py-32 sm:px-10 md:px-16 md:py-40 lg:px-24 lg:py-48"
      aria-label="Citação destacada"
    >
      <hr className="editorial-rule" aria-hidden="true" />

      <blockquote className="mt-12 md:mt-16">
        <p className="font-serif-display max-w-[24ch] text-[36px] leading-[1.05] text-[color:var(--color-paper)] sm:text-[52px] md:max-w-[22ch] md:text-[72px] lg:text-[96px] lg:max-w-[20ch]">
          {quote}
        </p>
        {attribution ? (
          <footer className="mt-10 text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)] md:mt-14">
            <span aria-hidden="true">— </span>
            {attribution}
          </footer>
        ) : null}
      </blockquote>
    </section>
  );
}

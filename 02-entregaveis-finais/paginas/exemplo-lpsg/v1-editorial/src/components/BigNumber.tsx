/**
 * BigNumber · Bloco 5 · Dado embutido
 *
 * - Número 96-144px · weight 400-600 · cor accent
 * - Acompanhado de 1 frase de contexto (≤ 12 palavras)
 * - Cor accent reservada pro número · não pro contexto
 * - Quebra de simetria: alinhamento deslocado, número estoura coluna
 */
type BigNumberProps = {
  value: string;
  unit?: string;
  context: string;
  footnote?: string;
};

export function BigNumber({ value, unit, context, footnote }: BigNumberProps) {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] border-t border-[color:var(--color-paper-faint)] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24"
      aria-label="Dado em destaque"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]">
        III · Um dado para fixar
      </p>

      <div className="mt-10 grid grid-cols-1 items-baseline gap-x-12 gap-y-8 md:grid-cols-12 md:mt-14">
        <div className="md:col-span-7 md:-ml-[0.06em]">
          <p
            className="font-serif-display flex items-baseline gap-3 text-[88px] leading-[0.85] text-[color:var(--color-champagne)] sm:text-[120px] md:text-[160px] lg:text-[200px]"
            aria-label={`${value} ${unit ?? ''}`}
          >
            <span>{value}</span>
            {unit ? (
              <span className="editorial-eyebrow text-[18px] text-[color:var(--color-paper-muted)] md:text-[20px]">
                {unit}
              </span>
            ) : null}
          </p>
        </div>

        <div className="md:col-span-5">
          <p className="max-w-[28ch] text-[20px] leading-[1.4] text-[color:var(--color-paper)] md:text-[24px]">
            {context}
          </p>
          {footnote ? (
            <p className="mt-6 max-w-[36ch] text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-paper-muted)]">
              {footnote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

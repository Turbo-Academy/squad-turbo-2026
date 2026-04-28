/**
 * Notebook · Bloco 6 · Caderno de campo
 *
 * - Página tipo notebook com anotações (3-5 lições aprendidas)
 * - Escritas como diário · primeira pessoa
 * - Numeração serif italic em dourado · texto em sans
 * - Quebra do fundo preto: bloco vira papel-imprensa (paper) com texto ink
 */
type NotebookEntry = {
  marker: string;
  date: string;
  text: string;
};

type NotebookProps = {
  entries: NotebookEntry[];
};

export function Notebook({ entries }: NotebookProps) {
  return (
    <section
      className="bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
      aria-labelledby="notebook-title"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
          IV · Caderno de campo
        </p>

        <h2
          id="notebook-title"
          className="font-serif-display mt-6 max-w-[20ch] text-[40px] leading-[1.05] text-[color:var(--color-ink)] sm:text-[56px] md:text-[72px]"
        >
          Três anotações que mudaram tudo.
        </h2>

        <ol className="mt-16 flex flex-col gap-y-14 md:mt-20 md:gap-y-20">
          {entries.map((entry) => (
            <li key={entry.marker} className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-12">
              <div className="md:col-span-3">
                <p
                  className="font-serif-display text-[56px] leading-[0.9] text-[color:var(--color-champagne)] md:text-[88px]"
                  aria-hidden="true"
                >
                  {entry.marker}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
                  {entry.date}
                </p>
              </div>

              <p className="max-w-[58ch] text-[18px] leading-[1.6] text-[color:var(--color-ink)] md:col-span-9 md:text-[22px]">
                {entry.text}
              </p>
            </li>
          ))}
        </ol>

        <hr className="editorial-rule mt-20 bg-[color:var(--color-ink)]" aria-hidden="true" />
      </div>
    </section>
  );
}

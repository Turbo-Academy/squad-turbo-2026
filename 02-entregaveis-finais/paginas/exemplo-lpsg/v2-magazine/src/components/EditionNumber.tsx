/**
 * EditionNumber · Bloco 2
 *
 * Imita a página de abertura de uma revista impressa:
 *   - Cover line "EDIÇÃO 001 · MÃE PRODUTIVA"
 *   - Manchete bold curta como subtítulo (1 frase)
 *   - Linha de meta (data + autora)
 *
 * Fundo branco · texto preto · cor laranja na palavra de pivô.
 * Densidade baixa · respiração ≥ 96px vertical.
 */
export function EditionNumber() {
  return (
    <section
      className="bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
      aria-labelledby="edition-headline"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 md:px-12 md:py-28 lg:px-16 lg:py-32">
        {/* Cover line · número da edição em destaque */}
        <div className="grid items-end gap-8 md:grid-cols-[auto_1fr] md:gap-16">
          <p className="cover-line text-[12px] text-[color:var(--color-ink-muted)] sm:text-[13px]">
            <span className="block text-[color:var(--color-orange)]">
              Edição 001
            </span>
            <span className="mt-1 block">Mãe Produtiva</span>
          </p>

          {/* Manchete · bold display · 1 frase */}
          <h2
            id="edition-headline"
            className="cover-display-tight text-[36px] text-[color:var(--color-ink)] sm:text-[48px] md:text-[60px] lg:text-[72px]"
          >
            A capa desta edição é sobre quem trabalha{' '}
            <span className="text-[color:var(--color-orange)]">
              entre uma mamada e a próxima reunião
            </span>{' '}
            — e mesmo assim entrega.
          </h2>
        </div>

        {/* Linha de meta · data + autora */}
        <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-[color:var(--color-ink-faint)] pt-6 md:mt-16">
          <p className="cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]">
            <span aria-hidden="true">— </span>11 de maio · Segunda
          </p>
          <p className="cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]">
            <span aria-hidden="true">— </span>Por Marina Costa
          </p>
          <p className="cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]">
            <span aria-hidden="true">— </span>5 aulas + tira-dúvidas
          </p>
        </div>
      </div>
    </section>
  );
}

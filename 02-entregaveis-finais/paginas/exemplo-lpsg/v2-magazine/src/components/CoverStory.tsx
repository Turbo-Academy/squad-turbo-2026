/**
 * CoverStory · Bloco 3
 *
 * "Big number gigante + 1 frase de manchete" · cara de capa de revista.
 *
 * Fundo: laranja saturado chapado (#FF5C00) ocupando 60% do frame.
 * Tipografia: display GIGANTE em branco · número como argumento.
 *
 * Conteúdo:
 *   - "R$ 200.000 / MÊS" como big number cover story
 *   - 1 frase de manchete (≤ 14 palavras)
 *   - Linha de meta com prova auditável
 */
export function CoverStory() {
  return (
    <section
      className="bleed-orange"
      aria-labelledby="cover-story-headline"
      data-on-orange="true"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 md:px-12 md:py-40 lg:px-16">
        {/* Cover line topo */}
        <p className="cover-line text-[11px] text-[color:var(--color-paper-muted)] sm:text-[12px]">
          <span aria-hidden="true">— </span>Cover Story · A operação enxuta
        </p>

        {/* Big number · cover story · GIGANTE */}
        <p
          className="cover-display mt-8 text-[80px] leading-[0.85] text-[color:var(--color-paper)] sm:mt-10 sm:text-[120px] md:text-[160px] lg:text-[200px]"
          aria-label="duzentos mil reais por mês"
        >
          R$ 200K
          <span className="block text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px]">
            por mês.
          </span>
        </p>

        {/* Manchete · 1 frase · bold */}
        <h2
          id="cover-story-headline"
          className="cover-display-tight mt-10 max-w-[18ch] text-[28px] text-[color:var(--color-paper)] sm:text-[36px] md:text-[44px] lg:text-[56px]"
        >
          Construído com dois filhos pequenos no colo.{' '}
          <span className="text-[color:var(--color-ink)]">
            Em janelas de 25 minutos.
          </span>
        </h2>

        {/* Linha de meta · prova auditável (PRODUCT.md princípio 4) */}
        <div className="mt-12 grid gap-8 border-t-2 border-[color:var(--color-paper)] pt-6 sm:grid-cols-3 sm:pt-8">
          <Stat label="Receita mensal" value="R$ 200k" sub="auditoria sob pedido" />
          <Stat label="Alunas formadas" value="800+" sub="6 anos de método" />
          <Stat label="Janela média" value="6h/dia" sub="trabalho focado real" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div>
      <p className="cover-line text-[10px] text-[color:var(--color-paper-muted)] sm:text-[11px]">
        {label}
      </p>
      <p className="cover-display mt-2 text-[32px] text-[color:var(--color-paper)] sm:text-[40px] md:text-[48px]">
        {value}
      </p>
      <p className="mt-2 text-[12px] text-[color:var(--color-paper-muted)] sm:text-[13px]">
        {sub}
      </p>
    </div>
  );
}

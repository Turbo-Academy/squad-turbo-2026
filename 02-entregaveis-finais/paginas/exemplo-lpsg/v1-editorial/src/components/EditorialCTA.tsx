/**
 * EditorialCTA · Bloco 8 · Convite editorial
 *
 * - Link textual sublinhado dourado champagne (NÃO botão neon)
 * - Tom: convite editorial · "próximo capítulo" · nunca imperativo
 * - Garantia em rodapé sutil reforçada
 * - CTA touch target ≥ 56px (acessibilidade mobile)
 */
type EditorialCTAProps = {
  href: string;
};

export function EditorialCTA({ href }: EditorialCTAProps) {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] border-t border-[color:var(--color-paper-faint)] px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-24"
      aria-labelledby="cta-title"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]">
        VI · Convite
      </p>

      <h2
        id="cta-title"
        className="font-serif-display mt-8 max-w-[22ch] text-[40px] leading-[1.04] text-[color:var(--color-paper)] sm:text-[56px] md:max-w-[20ch] md:text-[80px]"
      >
        O próximo capítulo está na próxima aula. Se ressoou — venha.
      </h2>

      <div className="mt-12 flex flex-col gap-y-8 md:mt-16">
        <a
          href={href}
          className="editorial-link-underline group inline-flex min-h-[56px] w-fit items-baseline gap-3 py-2 text-[color:var(--color-champagne)]"
        >
          <span className="font-serif-display text-[28px] leading-[1.1] sm:text-[36px] md:text-[44px]">
            Inscrever-me na próxima edição
          </span>
          <span
            aria-hidden="true"
            className="text-[20px] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-2 md:text-[28px]"
          >
            →
          </span>
        </a>

        <p className="max-w-[58ch] text-[14px] leading-[1.6] text-[color:var(--color-paper-muted)]">
          Ingresso de R$ 47 · sem cartão agora. Início em 11 de maio · 5
          aulas + sessão de tira-dúvidas · todas gravadas para o seu fuso.
        </p>
      </div>

      {/* Rodapé editorial · garantia + edição · ticker fechando */}
      <footer className="mt-24 flex flex-col gap-y-6 border-t border-[color:var(--color-paper-faint)] pt-8 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)] md:mt-32 md:flex-row md:items-center md:justify-between">
        <p>
          Garantia incondicional · 7 dias · 100% do valor de volta, sem
          pergunta.
        </p>
        <p className="editorial-eyebrow">
          Marina Costa · Edição 001 · 2026
        </p>
      </footer>
    </section>
  );
}

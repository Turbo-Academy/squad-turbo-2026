/**
 * EditorialHero · Bloco 1 · Capa editorial
 *
 * 1ª DOBRA · 3 elementos obrigatórios (regra atualizada 2026-04-28):
 *   1. DATA do evento — destaque editorial (display tipográfico, não ticker fino)
 *   2. CTA "Quero aprender agora" — link editorial ousado (NÃO botão neon)
 *   3. GARANTIA INCONDICIONAL — logo abaixo do CTA
 *
 * Mantém código editorial (Instrument Serif, paleta Editorial Premium, sem CTA neon).
 * Substitui o ticker por display de data; substitui o "↓ Continua" por CTA + garantia.
 */
export function EditorialHero() {
  const ctaHref = 'https://pay.hotmart.com/MPR-INGRESSO-FAKE';

  return (
    <header
      className="relative mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 md:px-16 md:pb-10 md:pt-10 lg:px-24"
      aria-labelledby="hero-frase"
    >
      {/* Linha superior · edição + autora (microcopy editorial) */}
      <div className="editorial-fade-in flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]">
        <p>
          <span aria-hidden="true">—</span> Edição 001 · Mãe Produtiva
        </p>
        <p className="editorial-eyebrow text-[color:var(--color-paper-muted)]">
          Marina Costa
        </p>
      </div>

      {/* Frase serif gigante · sem headline tradicional */}
      <div className="editorial-fade-in editorial-fade-in-delay-1 flex flex-1 items-center py-8 md:py-10">
        <h1
          id="hero-frase"
          className="font-serif-display max-w-[18ch] text-[44px] leading-[0.98] text-[color:var(--color-paper)] sm:text-[60px] md:text-[76px] md:max-w-[14ch] lg:text-[88px] lg:max-w-[14ch]"
        >
          Produtividade pra mãe empreendedora{' '}
          <span className="text-[color:var(--color-champagne)]">
            não é fazer mais
          </span>
          {' — '}
          é fazer só o que importa, em janelas curtas.
        </h1>
      </div>

      {/* DATA EM DESTAQUE · Display tipográfico (não ticker) */}
      <div className="editorial-fade-in editorial-fade-in-delay-2 border-t border-[color:var(--color-paper-faint)] pt-6 md:pt-7">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          {/* Coluna 1 · DATA grande + meta */}
          <div>
            <p className="editorial-eyebrow text-[color:var(--color-paper-muted)]">
              Próxima edição começa
            </p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <time
                dateTime="2026-05-11"
                className="font-serif-display text-[40px] italic leading-[0.95] text-[color:var(--color-paper)] sm:text-[48px] md:text-[56px]"
              >
                <span className="text-[color:var(--color-champagne)]">11</span>{' '}
                de maio
              </time>
              <span className="text-[13px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)] md:text-[14px]">
                Segunda · 7h da manhã
              </span>
            </p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-paper-muted)]">
              5 aulas + sessão de tira-dúvidas · todas gravadas
            </p>
          </div>

          {/* Coluna 2 · CTA + garantia */}
          <div className="flex flex-col items-start gap-3 md:items-end md:text-right">
            <a
              href={ctaHref}
              className="editorial-link-underline group inline-flex min-h-[56px] w-fit items-baseline gap-3 py-2 font-serif-display text-[22px] italic text-[color:var(--color-champagne)] sm:text-[26px] md:text-[28px]"
            >
              Quero aprender agora
              <span
                aria-hidden="true"
                className="inline-block translate-y-[-2px] not-italic transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </a>
            <p className="max-w-[34ch] text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-paper-muted)] md:text-right">
              Garantia incondicional · 7 dias · 100% do valor de volta, sem
              pergunta.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

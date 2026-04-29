/**
 * SubscribeCTA · Bloco 8 · CTA estilo "subscribe to next issue"
 *
 * Última seção · cor laranja chapada (60% do frame).
 * Headline imperativa de aprendizado · não promessa publicitária.
 * CTA fill sólido (preto sobre laranja) · não infoprodutor.
 * Garantia logo abaixo · linha de meta com a próxima edição.
 *
 * NÃO usa "AO VIVO" / "GRAVADA" · NÃO usa countdown · NÃO usa selo OFICIAL.
 */
interface Props {
  ctaHref: string;
}

export function SubscribeCTA({ ctaHref }: Props) {
  return (
    <section className="bleed-orange" data-on-orange="true" aria-labelledby="subscribe-headline">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 md:px-12 md:py-40 lg:px-16">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
          <div className="col-span-1 md:col-span-7">
            <p className="cover-line text-[11px] text-[color:var(--color-paper-muted)] sm:text-[12px]">
              Subscribe · Edição 001
            </p>
            <h2
              id="subscribe-headline"
              className="cover-display mt-6 text-[44px] text-[color:var(--color-paper)] sm:text-[64px] md:text-[80px] lg:text-[96px]"
            >
              Próxima edição:
              <br />
              <span className="text-[color:var(--color-ink)]">11 de maio.</span>
            </h2>

            <p className="mt-6 max-w-[44ch] text-[18px] font-semibold text-[color:var(--color-paper)] sm:text-[20px]">
              Cinco aulas · uma sessão de tira-dúvidas no sábado · pitch do
              programa no domingo. Tudo pelo valor de uma pizza.
            </p>
          </div>

          {/* Card de subscrição · branco sobre laranja */}
          <div className="col-span-1 border-2 border-[color:var(--color-ink)] bg-[color:var(--color-paper)] p-6 text-[color:var(--color-ink)] sm:p-8 md:col-span-5">
            <p className="cover-line text-[11px] text-[color:var(--color-orange)] sm:text-[12px]">
              Reservar entrada
            </p>
            <p
              className="cover-display mt-3 text-[44px] leading-none text-[color:var(--color-ink)] sm:text-[56px]"
              aria-label="Quarenta e sete reais"
            >
              R$ 47
            </p>
            <p className="mt-2 text-[14px] text-[color:var(--color-ink-muted)] sm:text-[15px]">
              Acesso completo à Edição 001 · 5 aulas + tira-dúvidas + pitch.
            </p>

            <a
              href={ctaHref}
              className="btn-bold mt-6 w-full"
              aria-describedby="subscribe-guarantee"
            >
              Quero aprender agora
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </a>

            <p
              id="subscribe-guarantee"
              className="mt-4 cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]"
            >
              Garantia incondicional · 7 dias · 100% do valor de volta, sem
              pergunta.
            </p>
          </div>
        </div>

        {/* Rodapé · linha de meta + assinatura */}
        <footer className="mt-16 flex flex-wrap items-baseline justify-between gap-4 border-t-2 border-[color:var(--color-paper)] pt-6 sm:mt-20">
          <p className="cover-line text-[11px] text-[color:var(--color-paper-muted)] sm:text-[12px]">
            Mãe Produtiva · Edição 001 · 11 de maio
          </p>
          <p className="cover-line text-[11px] text-[color:var(--color-paper-muted)] sm:text-[12px]">
            Marina Costa · @marinacostaproduz
          </p>
        </footer>
      </div>
    </section>
  );
}

import Image from 'next/image';

/**
 * AuthorBio · Bloco 7 · About the Author
 *
 * - Foto preto-e-branco editorial · iluminação Rembrandt
 * - 2 parágrafos breves (estilo "About the Author" de revista)
 * - Foto à esquerda em desktop · acima em mobile
 * - Placeholder pra trocar pela foto real da Marina
 */
export function AuthorBio() {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] border-t border-[color:var(--color-paper-faint)] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24"
      aria-labelledby="author-title"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]">
        V · Sobre quem assina
      </p>

      <div className="mt-12 grid grid-cols-1 gap-y-12 md:mt-16 md:grid-cols-12 md:gap-x-16">
        <figure className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-paper-faint)]">
            <Image
              src="https://placehold.co/1200x1500/0A0A0A/F4F1EA/png?text=Marina+%C2%B7+B%26W"
              alt="Marina Costa em retrato preto-e-branco editorial · iluminação Rembrandt · olhar direto à câmera"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
              priority={false}
            />
          </div>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]">
            Retrato · São Paulo · 2026
          </figcaption>
        </figure>

        <div className="md:col-span-7">
          <h2
            id="author-title"
            className="font-serif-display max-w-[18ch] text-[36px] leading-[1.05] text-[color:var(--color-paper)] md:text-[56px]"
          >
            Marina Costa.
          </h2>

          <div className="mt-8 flex max-w-[58ch] flex-col gap-y-6 text-[17px] leading-[1.7] text-[color:var(--color-paper)] md:text-[19px]">
            <p>
              Empresária e mãe de dois. Construiu um negócio digital que
              fatura R$ 200 mil por mês enquanto criava os filhos —{' '}
              <span className="italic">
                não apesar disso, exatamente por causa disso
              </span>
              . Há seis anos ensina mães empreendedoras a estruturar rotinas
              que conciliam família, trabalho e propósito sem promessa
              mágica de balanço perfeito.
            </p>
            <p>
              Já formou mais de oitocentas alunas — e continua respondendo
              cada DM no Instagram porque{' '}
              <a
                href="https://instagram.com/marinacostaproduz"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link-underline text-[color:var(--color-champagne)]"
              >
                @marinacostaproduz
              </a>{' '}
              é onde ela testa cada hipótese antes de virar método.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

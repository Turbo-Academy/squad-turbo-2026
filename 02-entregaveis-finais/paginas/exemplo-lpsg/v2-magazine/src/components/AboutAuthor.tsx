import Image from 'next/image';

/**
 * AboutAuthor · Bloco 7 · "About"
 *
 * Foto da Marina + 1 parágrafo bold + link Instagram · estilo "About the cover author".
 * Layout: foto à esquerda (4:5) · texto à direita · sem grid clone "3 cards iguais".
 *
 * Cara de revista: a foto é do tipo capa interna · não decoração.
 */
export function AboutAuthor() {
  return (
    <section
      className="bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
      aria-labelledby="about-author-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 md:px-12 md:py-28 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Foto · 4:5 · invade a coluna como capa interna */}
          <div className="relative col-span-1 aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-orange)] md:col-span-5">
            <Image
              src="https://placehold.co/1200x1500/FF5C00/FFFFFF?text=Marina"
              alt="Marina Costa, autora desta edição. Foto vertical em ambiente cotidiano de trabalho em casa."
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <p className="absolute bottom-3 left-3 cover-line text-[10px] text-[color:var(--color-paper)] sm:text-[11px]">
              Marina Costa · Edição 001
            </p>
          </div>

          {/* Texto */}
          <div className="col-span-1 md:col-span-7">
            <p className="cover-line text-[12px] text-[color:var(--color-orange)] sm:text-[13px]">
              About the cover author
            </p>

            <h2
              id="about-author-title"
              className="cover-display mt-4 text-[40px] text-[color:var(--color-ink)] sm:text-[56px] md:text-[64px] lg:text-[72px]"
            >
              Marina Costa
            </h2>

            <p className="mt-6 max-w-[58ch] text-[18px] font-semibold leading-[1.45] text-[color:var(--color-ink)] sm:text-[20px]">
              Empresária, mãe de dois e referência em produtividade aplicada
              ao contexto real de mães que tocam empresa em paralelo. Há seis
              anos ensina o método que usa todo dia — não a teoria que comprou
              de outros gurus.
            </p>

            <p className="mt-5 max-w-[58ch] text-[16px] text-[color:var(--color-ink-muted)] sm:text-[17px]">
              Construiu negócio digital faturando R$ 200 mil/mês trabalhando
              em janelas curtas entre rotinas de família. Já formou mais de
              800 alunas pelo programa Mãe Produtiva. Esta é a primeira vez
              que o método inteiro está sendo destrinchado em uma edição
              aberta — antes só rodava dentro do Acelerador.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="https://instagram.com/marinacostaproduz"
                target="_blank"
                rel="noopener"
                className="link-bold inline-flex min-h-[56px] items-center text-[15px] text-[color:var(--color-ink)] sm:text-[16px]"
              >
                @marinacostaproduz
                <span className="sr-only"> (abre Instagram em nova aba)</span>
              </a>
              <p className="text-[13px] text-[color:var(--color-ink-muted)] sm:text-[14px]">
                Instagram · 6 anos de bastidor real
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="magazine-rule" />
    </section>
  );
}

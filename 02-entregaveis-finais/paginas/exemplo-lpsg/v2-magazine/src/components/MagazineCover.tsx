import Image from 'next/image';

/**
 * MagazineCover · Bloco 1 · Capa de revista contemporânea
 *
 * Layout · 1ª dobra (regra atualizada 2026-04-28):
 *   - Foto full-bleed da expert (enquadramento de capa · 4:5)
 *   - Headline em display extra-bold cobrindo parte da foto · GIGANTE · uppercase
 *   - Cover line topo: "EDIÇÃO 001 · MÃE PRODUTIVA"
 *   - DATA do evento como cover line de revista (não ticker fino)
 *   - CTA principal "Quero aprender agora →" · botão fill sólido laranja · ≥ 56px
 *   - GARANTIA INCONDICIONAL · logo abaixo do CTA · uppercase tracking-wide
 *   - Selo de capa pequeno (canto superior direito) com a garantia em síntese
 *
 * Mobile-first: foto domina o viewport · headline e CTA empilhados embaixo.
 * Desktop: foto à direita · grid editorial à esquerda (texto + CTA).
 */
interface Props {
  ctaHref: string;
}

export function MagazineCover({ ctaHref }: Props) {
  return (
    <header
      className="relative isolate overflow-hidden bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
      aria-labelledby="cover-headline"
    >
      {/* Top bar · masthead estilo magazine */}
      <div className="border-b-4 border-[color:var(--color-ink)]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 md:px-12 lg:px-16">
          <p className="cover-line text-[11px] sm:text-[12px]">
            <span aria-hidden="true">— </span>Mãe Produtiva
            <span className="hidden sm:inline">
              {' · '}Edição 001
            </span>
          </p>
          <p className="cover-line text-[11px] sm:text-[12px]">
            Marina Costa
          </p>
        </div>
      </div>

      {/* Cover · grid 12 col (desktop) · empilhado mobile */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-0 px-0 lg:grid-cols-12 lg:px-0">
        {/* Coluna texto (esquerda · 7/12) */}
        <div className="order-2 col-span-1 flex flex-col justify-between bg-[color:var(--color-paper)] px-6 py-10 sm:px-10 sm:py-14 md:px-12 lg:order-1 lg:col-span-7 lg:px-16 lg:py-20">
          {/* Cover line · DATA destacada (não ticker fino) */}
          <div className="magazine-fade-in">
            <p
              className="cover-line text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]"
              data-coverline="date"
            >
              Próxima edição · Cover Story
            </p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <time
                dateTime="2026-05-11"
                className="cover-display text-[44px] text-[color:var(--color-ink)] sm:text-[56px] md:text-[64px]"
              >
                <span className="text-[color:var(--color-orange)]">11</span>{' '}
                MAI
              </time>
              <span className="cover-line text-[12px] text-[color:var(--color-ink-muted)] sm:text-[13px]">
                Edição 001
              </span>
            </p>
          </div>

          {/* Headline display · ocupa o frame · GIGANTE · uppercase */}
          <h1
            id="cover-headline"
            className="magazine-fade-in magazine-fade-in-d1 cover-display mt-8 text-[44px] text-[color:var(--color-ink)] sm:mt-10 sm:text-[64px] md:text-[80px] lg:mt-12 lg:text-[96px]"
          >
            Mãe que dobra
            <br />
            <span className="text-[color:var(--color-orange)]">a receita</span>
            <br />
            sem dobrar
            <br />
            as horas.
          </h1>

          {/* Subtítulo · 1 linha bold · respira a headline */}
          <p className="magazine-fade-in magazine-fade-in-d2 mt-8 max-w-[42ch] text-[16px] text-[color:var(--color-ink-muted)] sm:text-[18px] md:text-[20px]">
            Capa desta edição · rotina-âncora, janelas curtas e o método que
            cabe em quem tem filho pequeno e empresa pra rodar.
          </p>

          {/* CTA principal + GARANTIA logo abaixo */}
          <div className="magazine-fade-in magazine-fade-in-d3 mt-10 flex flex-col items-start gap-3 sm:mt-12">
            <a
              href={ctaHref}
              className="btn-bold w-full sm:w-auto"
              aria-describedby="cover-guarantee"
            >
              Quero aprender agora
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </a>
            <p
              id="cover-guarantee"
              className="cover-line max-w-[44ch] text-[11px] text-[color:var(--color-ink-muted)] sm:text-[12px]"
            >
              Garantia incondicional · 7 dias · 100% do valor de volta, sem
              pergunta.
            </p>
          </div>
        </div>

        {/* Coluna foto (direita · 5/12) · enquadramento de capa de revista */}
        <div className="relative order-1 col-span-1 aspect-[4/5] w-full bg-[color:var(--color-orange)] lg:order-2 lg:col-span-5 lg:aspect-auto lg:min-h-[720px]">
          {/* Foto · placeholder · prioridade pro LCP */}
          <Image
            src="https://placehold.co/1200x1500/FF5C00/FFFFFF?text=Marina"
            alt="Marina Costa, especialista em produtividade para mães empreendedoras, em pose espontânea no escritório de casa."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />

          {/* Selo de capa · canto superior direito · pequeno · sem brilho */}
          <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
            <span className="cover-seal">
              <span
                aria-hidden="true"
                className="block h-2 w-2 bg-[color:var(--color-orange)]"
              />
              7 dias · garantia 100%
            </span>
          </div>

          {/* Cover line vertical · canto inferior esquerdo · estilo barra preta sobre foto
              pra garantir WCAG AA mesmo com qualquer foto da Marina substituindo o placeholder. */}
          <p
            className="absolute bottom-4 left-4 max-w-[18ch] bg-[color:var(--color-ink)] px-3 py-2 cover-line text-[11px] text-[color:var(--color-paper)] sm:bottom-6 sm:left-6 sm:text-[12px]"
          >
            R$ 200k/mês · 800+ alunas · 6h/dia
          </p>
        </div>
      </div>

      {/* Magazine rule · linha grossa preta · separador da próxima seção */}
      <hr className="magazine-rule" />
    </header>
  );
}

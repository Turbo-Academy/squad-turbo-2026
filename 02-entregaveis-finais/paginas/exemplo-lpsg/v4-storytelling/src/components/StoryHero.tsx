"use client";

/**
 * StoryHero · Bloco 1
 * - 1 frase em serif italic (sem headline tradicional infoprodutor)
 * - DATA destacada · corner top-right · cover line "11 DE MAIO · EDIÇÃO 001"
 * - CTA "Quero aprender agora →" · botão WARM (amarelo accent + texto grafite)
 * - GARANTIA logo abaixo do CTA · serif italic · "incondicional · 7 dias"
 */
export default function StoryHero() {
  return (
    <section
      aria-label="Capítulo zero · como cheguei aqui"
      className="relative min-h-[100svh] w-full overflow-hidden border-b border-[var(--color-rule)]"
    >
      {/* Corner top-right · DATA editorial */}
      <div className="absolute right-6 top-6 z-10 text-right md:right-12 md:top-10">
        <p
          className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]"
        >
          Edição 001 · ano 8
        </p>
        <p className="mt-2 font-serif text-3xl italic leading-none text-[var(--color-ink)] md:text-5xl">
          11 <span className="text-[var(--color-amber-deep)]">de maio</span>
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
          Segunda · 7h da manhã
        </p>
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-[1280px] grid-cols-1 px-6 pb-32 pt-28 md:grid-cols-12 md:gap-12 md:px-12 md:pt-32">
        {/* Coluna principal · narrativa */}
        <div className="md:col-span-8 md:col-start-2 flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
            Por Marina Costa · São Paulo
          </p>

          <h1 className="mt-6 font-serif text-[44px] italic leading-[1.04] text-[var(--color-ink)] md:mt-10 md:text-[88px] md:leading-[0.98]">
            Como cheguei <br />
            <span className="not-italic">aqui</span>
            <span className="text-[var(--color-amber-deep)]">.</span>
          </h1>

          <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.65] text-[var(--color-ink-soft)] md:mt-10 md:text-[20px]">
            Não foi por talento. Não foi por sorte. <br className="hidden md:block" />
            Foi um método construído em 8 anos de tropeço · entre fralda, planilha e exaustão. <br className="hidden md:block" />
            Esse é o registro honesto desse caminho — e o convite pra você fazer o seu.
          </p>

          {/* CTA + GARANTIA · empacotados (1ª dobra obrigatória) */}
          <div className="mt-12 flex flex-col gap-3 md:mt-16">
            <a
              href="#cta"
              className="cta-warm inline-flex h-[60px] w-full max-w-[420px] items-center justify-between rounded-[2px] border-2 border-[var(--color-amber-deep)] bg-[var(--color-amber)] px-7 text-[17px] font-medium text-[var(--color-ink)] md:h-[64px] md:text-[18px]"
            >
              <span>Quero aprender agora</span>
              <span aria-hidden className="text-2xl">→</span>
            </a>
            <p className="text-[14px] text-[var(--color-ink-soft)]">
              <span className="font-mono uppercase tracking-mono">Começa segunda</span>
              <span className="mx-2 opacity-50">·</span>
              <span className="font-serif italic">te espero lá</span>
            </p>
            {/* Garantia · logo abaixo do CTA · mesma coluna */}
            <p className="mt-5 max-w-[52ch] border-l-2 border-[var(--color-amber)] pl-4 font-serif text-[16px] italic leading-snug text-[var(--color-ink)] md:text-[17px]">
              Garantia incondicional · 7 dias · 100% do valor de volta, sem pergunta.
            </p>
          </div>
        </div>

        {/* Coluna secundária · scroll cue (decorativa, escondida no mobile) */}
        <aside
          aria-hidden
          className="hidden md:col-span-3 md:col-start-10 md:flex md:items-end md:justify-end"
        >
          <div className="flex flex-col items-end gap-3 pb-4">
            <span className="h-16 w-px bg-[var(--color-line)]" />
            <span className="font-mono text-[10px] uppercase tracking-mono text-[var(--color-ink-soft)]">
              Role pra ler
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}

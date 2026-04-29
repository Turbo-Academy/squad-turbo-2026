/**
 * 6 · ASSINATURA · foto pequena (~30%) + linha brutalist
 * Pode ser MENOR que nos outros 4 arquétipos · aqui é OK
 */

export function Assinatura() {
  return (
    <section
      aria-labelledby="assinatura-title"
      className="bg-[#FFFFFF] text-[#0A0A0A]"
    >
      <div className="grid items-center gap-8 px-5 py-16 md:grid-cols-12 md:gap-12 md:px-12 md:py-24">
        {/* Foto · pequena (~30%) · borda brutalist · sem retoque */}
        <figure className="md:col-span-4">
          <div
            className="relative inline-block border-[6px] border-[#0A0A0A] bg-[#FF2E93]"
            style={{ transform: "rotate(-2deg)" }}
          >
            <img
              src="https://placehold.co/1200x1500/FF2E93/0A0A0A?text=Marina"
              alt="Marina Costa · empresária e mãe · cenário cotidiano · sem retoque"
              width={400}
              height={500}
              className="block h-auto w-full max-w-[280px]"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute -bottom-3 left-3 inline-block bg-[#0A0A0A] px-2 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#FF2E93]">
              Foto sem filtro
            </figcaption>
          </div>
        </figure>

        {/* Assinatura · 1 linha de prova brutalist */}
        <div className="md:col-span-8">
          <span className="mb-4 inline-block border-2 border-[#0A0A0A] bg-[#0A0A0A] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#FF2E93]">
            Assinado
          </span>
          <h2
            id="assinatura-title"
            className="display-italic [font-size:clamp(2.4rem,7vw,5rem)] [line-height:0.95]"
          >
            Marina Costa.
          </h2>
          <p className="display-caps mt-3 [font-size:clamp(1rem,2.4vw,1.4rem)]">
            800+ alunas · 6 anos no nicho · 2 filhos.
          </p>
          <p className="mt-6 max-w-xl text-base font-bold leading-snug md:text-lg">
            Não escrevi isso pra agradar. Escrevi porque é o que penso depois
            de seis anos vendo mãe boa achar que o problema é{" "}
            <span className="bg-[#FF2E93] px-1">ela</span>.
            Não é.{" "}
            <span className="display-italic text-xl normal-case tracking-normal md:text-2xl">
              É o método errado.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

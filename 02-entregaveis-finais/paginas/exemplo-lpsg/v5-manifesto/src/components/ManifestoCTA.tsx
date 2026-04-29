/**
 * 7 · O CONVITE · filtragem · não sedução
 * "Pra quem leva isso a sério. Os demais ficam pra próxima."
 */

export function ManifestoCTA() {
  return (
    <section
      id="convite"
      aria-labelledby="convite-title"
      className="bg-[#FF2E93] text-[#0A0A0A]"
    >
      <div className="border-y-[6px] border-[#0A0A0A] px-5 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <span className="mb-6 inline-block border-2 border-[#0A0A0A] bg-[#0A0A0A] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#FF2E93]">
            O convite · 11.05 · Segunda · 7h
          </span>

          <h2
            id="convite-title"
            className="display-italic [font-size:clamp(2.6rem,8vw,6rem)] [line-height:0.95]"
          >
            Pra quem leva{" "}
            <span className="display-caps">isso a sério.</span>
            <br />
            Os demais{" "}
            <span className="display-italic underline decoration-[5px] underline-offset-[10px]">
              ficam pra próxima.
            </span>
          </h2>

          {/* CTA · pílula brutalist + link sublinhado · 2 estilos manifesto */}
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <a
              href="https://pay.hotmart.com/MPR-INGRESSO-FAKE"
              className="cta-brutalist"
              aria-label="Tô dentro · garantir presença na próxima edição"
            >
              <span>Tô dentro</span>
              <span aria-hidden className="text-2xl">→</span>
            </a>

            <p className="text-sm font-black uppercase leading-snug tracking-[0.1em] md:text-base">
              R$ 47 · ingresso pago
              <br />
              <span className="display-italic text-base normal-case tracking-normal md:text-xl">
                preço de filtro · não de barreira.
              </span>
            </p>
          </div>

          {/* Garantia · linha direta · sem ornamento */}
          <div className="mt-10 inline-block border-l-[6px] border-[#0A0A0A] pl-4">
            <p className="text-base font-bold leading-snug md:text-lg">
              <span className="display-caps">Garantia incondicional.</span>
              <br />
              7 dias · 100% do valor de volta · sem pergunta.
            </p>
          </div>

          {/* Linha final · manifesto */}
          <p className="display-italic mt-16 [font-size:clamp(1.4rem,4vw,2.4rem)] [line-height:1.15]">
            Se você chegou até aqui ·
            <br />
            <span className="display-caps">você já decidiu.</span>
          </p>
        </div>
      </div>

      {/* Rodapé brutalist · ticker final */}
      <footer className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="inline-flex items-center gap-12">
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                Manifesto · Marina Costa
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                Próxima edição · 11.05 · 7h
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                Garantia 7 dias · 100% de volta
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
            </span>
          ))}
        </div>
      </footer>

      <div className="bg-[#0A0A0A] px-5 py-8 text-[#FF2E93] md:px-12">
        <div className="flex flex-col gap-2 text-xs font-black uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between">
          <span>© 2026 · Marina Costa · marinacosta.com.br</span>
          <span className="text-[#FFFFFF]">@marinacostaproduz</span>
        </div>
      </div>
    </section>
  );
}

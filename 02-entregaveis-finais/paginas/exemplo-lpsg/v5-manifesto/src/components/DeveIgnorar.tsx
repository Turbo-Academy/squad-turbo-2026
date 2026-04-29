/**
 * 4 · QUEM DEVE IGNORAR · filtragem agressiva (negativa)
 */

const ITENS = [
  "Quem ainda acredita que o problema é falta de organização",
  "Quem está procurando fórmula mágica",
  "Quem quer atalho sem reconhecer que precisa de método diferente",
  "Quem se incomoda com posicionamento direto"
];

export function DeveIgnorar() {
  return (
    <section
      aria-labelledby="ignorar-title"
      className="on-dark bg-[#0A0A0A] text-[#FFFFFF]"
    >
      <div className="grid gap-0 md:grid-cols-12">
        {/* Coluna · símbolo gigante */}
        <aside
          aria-hidden
          className="hidden border-r-[4px] border-[#FF2E93] bg-[#FF2E93] text-[#0A0A0A] md:col-span-3 md:flex md:items-center md:justify-center"
        >
          <span
            className="display-caps [font-size:clamp(8rem,18vw,16rem)] [line-height:0.85]"
            style={{ transform: "rotate(-8deg)" }}
          >
            ✕
          </span>
        </aside>

        {/* Conteúdo */}
        <div className="border-b-[4px] border-[#FF2E93] px-5 py-12 md:col-span-9 md:border-b-0 md:px-12 md:py-20">
          <span className="mb-4 inline-block bg-[#FF2E93] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#0A0A0A]">
            Filtragem · negativa
          </span>
          <h2
            id="ignorar-title"
            className="display-italic mb-10 text-[#FFFFFF] [font-size:clamp(2.2rem,6.5vw,5rem)] [line-height:0.95]"
          >
            Quem deve <span className="display-caps text-[#FF2E93]">IGNORAR</span>
            <br />
            esta página:
          </h2>

          <ul className="space-y-4 md:space-y-6" role="list">
            {ITENS.map((item, i) => (
              <li
                key={item}
                className="group flex items-start gap-5 border-b-2 border-[#1A1A1A] pb-5 transition-colors duration-200 hover:border-[#FF2E93]"
              >
                <span
                  aria-hidden
                  className="num-brutalist flex-shrink-0 text-[#FF2E93] group-hover:text-[#FFFFFF] [font-size:clamp(1.5rem,3vw,2.5rem)]"
                >
                  ✕
                </span>
                <p className="display-caps text-[#FFFFFF] [font-size:clamp(1.1rem,3vw,1.75rem)] [line-height:1.15]">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p className="display-italic mt-10 [font-size:clamp(1.4rem,4vw,2.4rem)] [line-height:1.1] text-[#FF2E93]">
            Se for o seu caso · feche essa aba.
            <br />
            <span className="display-caps text-base normal-case tracking-widest text-[#FFFFFF] md:text-lg">
              Sem ressentimento. Sem newsletter.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

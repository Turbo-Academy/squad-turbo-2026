/**
 * 5 · QUEM DEVE FICAR · filtragem positiva · sem sedução
 */

const ITENS = [
  "Mãe empreendedora cansada de cursos genéricos",
  "Quem já tentou 5+ métodos e nenhum funcionou",
  "Quem está disposta a aceitar que a realidade dela é diferente",
  "Quem leva 7 dias a sério pra mudar a estrutura · não pra “aprender mais”"
];

export function DeveFicar() {
  return (
    <section
      aria-labelledby="ficar-title"
      className="bg-[#FF2E93] text-[#0A0A0A]"
    >
      <div className="grid gap-0 md:grid-cols-12">
        {/* Conteúdo */}
        <div className="border-b-[4px] border-[#0A0A0A] px-5 py-12 md:col-span-9 md:border-b-0 md:border-r-[4px] md:px-12 md:py-20">
          <span className="mb-4 inline-block border-2 border-[#0A0A0A] bg-[#FF2E93] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#0A0A0A]">
            Filtragem · positiva
          </span>
          <h2
            id="ficar-title"
            className="display-italic mb-10 text-[#0A0A0A] [font-size:clamp(2.2rem,6.5vw,5rem)] [line-height:0.95]"
          >
            Quem deve <span className="display-caps">FICAR</span>:
          </h2>

          <ul className="space-y-4 md:space-y-6" role="list">
            {ITENS.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-5 border-b-2 border-[#0A0A0A]/30 pb-5"
              >
                <span
                  aria-hidden
                  className="num-brutalist flex-shrink-0 text-[#0A0A0A] [font-size:clamp(1.5rem,3vw,2.5rem)]"
                >
                  →
                </span>
                <p className="display-caps text-[#0A0A0A] [font-size:clamp(1.1rem,3vw,1.75rem)] [line-height:1.15]">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p className="display-italic mt-10 [font-size:clamp(1.4rem,4vw,2.4rem)] [line-height:1.1] text-[#0A0A0A]">
            Se isso descreve você ·
            <br />
            <span className="display-caps">a próxima edição é sua.</span>
          </p>
        </div>

        {/* Coluna · símbolo gigante */}
        <aside
          aria-hidden
          className="hidden bg-[#0A0A0A] text-[#FF2E93] md:col-span-3 md:flex md:items-center md:justify-center"
        >
          <span
            className="display-caps [font-size:clamp(8rem,18vw,16rem)] [line-height:0.85]"
            style={{ transform: "rotate(8deg)" }}
          >
            ✓
          </span>
        </aside>
      </div>
    </section>
  );
}

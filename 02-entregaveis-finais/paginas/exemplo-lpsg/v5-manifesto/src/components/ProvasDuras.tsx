/**
 * 3 · O QUE EU FIZ · provas duras · números secos
 * Sem narrativa · só fato · brutalist
 */

const PROVAS = [
  {
    num: "800+",
    contexto: "alunas formadas",
    detalhe: "6 anos · auditável"
  },
  {
    num: "R$ 200k",
    contexto: "/mês · operação atual",
    detalhe: "2 filhos · 6h/dia"
  },
  {
    num: "0",
    contexto: "rotina militar",
    detalhe: "Sem cold shower · sem pomodoro"
  },
  {
    num: "8",
    contexto: "auditorias Hotmart",
    detalhe: "abertas pra quem pediu prova"
  }
];

export function ProvasDuras() {
  return (
    <section
      aria-labelledby="provas-title"
      className="bg-[#FFFFFF] text-[#0A0A0A]"
    >
      <header className="border-y-[6px] border-[#0A0A0A] bg-[#0A0A0A] px-5 py-6 md:px-12">
        <h2
          id="provas-title"
          className="display-caps flex flex-wrap items-baseline gap-x-4 text-[#FF2E93] [font-size:clamp(2rem,6vw,4.5rem)]"
        >
          <span className="text-[#FFFFFF]">O que eu fiz.</span>
          <span className="display-italic normal-case text-[#FF2E93]">
            sem adjetivo.
          </span>
        </h2>
      </header>

      <div className="grid gap-0 md:grid-cols-2">
        {PROVAS.map((p, i) => (
          <article
            key={p.num}
            className={`relative border-[#0A0A0A] px-5 py-12 md:px-10 md:py-16 ${
              i < 2 ? "border-b-[4px]" : ""
            } ${i % 2 === 0 ? "md:border-r-[4px]" : ""}`}
          >
            <span className="num-brutalist block text-[#FF2E93] [font-size:clamp(5rem,16vw,11rem)] [line-height:0.85]">
              {p.num}
            </span>
            <p className="display-caps mt-4 [font-size:clamp(1.1rem,3vw,1.6rem)]">
              {p.contexto}
            </p>
            <p className="mt-2 text-base font-bold text-[#0A0A0A]/80 md:text-lg">
              {p.detalhe}
            </p>
          </article>
        ))}
      </div>

      {/* Disclaimer brutalist */}
      <div className="border-t-[6px] border-[#0A0A0A] bg-[#FF2E93] px-5 py-6 md:px-12">
        <p className="display-italic [font-size:clamp(1.2rem,3vw,1.75rem)] [line-height:1.2] text-[#0A0A0A]">
          Auditoria Hotmart aberta sob pedido.{" "}
          <span className="display-caps text-base normal-case tracking-normal md:text-lg">
            já fiz pra 8 que pediram.
          </span>
        </p>
      </div>
    </section>
  );
}

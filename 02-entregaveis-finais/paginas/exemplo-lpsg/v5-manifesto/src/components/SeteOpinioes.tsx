/**
 * 2 · AS 7 OPINIÕES
 * Numeração brutalist · cada afirmação em UM bloco grande · sem ornamento
 */

const OPINIOES = [
  {
    n: "01",
    titulo: "Pomodoro NÃO funciona pra mãe.",
    corpo: "Ponto."
  },
  {
    n: "02",
    titulo: "4h ininterruptas de “deep work”",
    corpo: "é privilégio de quem não tem filhos pequenos."
  },
  {
    n: "03",
    titulo: "Cursos de produtividade",
    corpo:
      "que pressupõem 4h ininterruptas custam dinheiro · entregam culpa."
  },
  {
    n: "04",
    titulo: "A culpa de não dar conta",
    corpo: "é estrutural · não pessoal."
  },
  {
    n: "05",
    titulo: "25 minutos por vez · com método",
    corpo: "valem mais que 4h forçadas e fragmentadas."
  },
  {
    n: "06",
    titulo: "Crescimento de receita",
    corpo:
      "não é função das horas trabalhadas. É de desenho de operação."
  },
  {
    n: "07",
    titulo: "Mãe que trabalha menos e fatura mais",
    corpo: "não é mágica. É escolha."
  }
];

export function SeteOpinioes() {
  return (
    <section
      aria-labelledby="opinioes-title"
      className="on-dark bg-[#0A0A0A] text-[#FFFFFF]"
    >
      <header className="border-b-4 border-[#FF2E93] px-5 py-8 md:px-12 md:py-12">
        <span className="mb-3 inline-block border-2 border-[#FF2E93] bg-[#0A0A0A] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#FF2E93]">
          07 opiniões · 0 desculpas
        </span>
        <h2
          id="opinioes-title"
          className="display-italic text-[#FFFFFF] [font-size:clamp(2.4rem,7vw,5.5rem)]"
        >
          Sete coisas que <span className="text-[#FF2E93]">eu acredito</span>
          <br />e <span className="display-caps">não vou pedir desculpa</span>
          <br />
          <span className="display-italic">por acreditar.</span>
        </h2>
      </header>

      <ol className="divide-y-[3px] divide-[#1A1A1A]" role="list">
        {OPINIOES.map((op, i) => (
          <li
            key={op.n}
            className={`group relative px-5 py-10 transition-colors duration-300 hover:bg-[#FF2E93] hover:text-[#0A0A0A] md:px-12 md:py-16 ${
              i % 2 === 0 ? "" : "md:pl-32"
            }`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-12">
              <span
                aria-hidden
                className="num-brutalist block text-[#FF2E93] group-hover:text-[#0A0A0A] [font-size:clamp(4rem,10vw,8rem)] [line-height:0.85] md:flex-shrink-0"
              >
                {op.n}.
              </span>
              <div>
                <h3 className="display-caps mb-2 [font-size:clamp(1.6rem,4.5vw,3rem)]">
                  {op.titulo}
                </h3>
                <p className="display-italic text-[#FFFFFF] group-hover:text-[#0A0A0A] [font-size:clamp(1.4rem,3.5vw,2.4rem)] [line-height:1.15]">
                  {op.corpo}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Pull-frase final · transição brutal */}
      <div className="border-t-4 border-[#FF2E93] bg-[#FF2E93] px-5 py-12 text-[#0A0A0A] md:px-12 md:py-20">
        <p className="display-italic mx-auto max-w-4xl text-center [font-size:clamp(1.8rem,5vw,3.5rem)] [line-height:1.05]">
          Se você concordou com pelo menos{" "}
          <span className="display-caps">5 das 7</span>
          <br />· o resto dessa página é pra você.
        </p>
      </div>
    </section>
  );
}

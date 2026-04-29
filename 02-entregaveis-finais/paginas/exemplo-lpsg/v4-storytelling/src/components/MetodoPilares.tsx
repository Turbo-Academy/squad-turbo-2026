"use client";

/**
 * MetodoPilares · Bloco 4
 * - 3 pilares com ícone + 1 frase cada · descansa o leitor entre capítulos
 * - Amarelo accent USADO COM MODERAÇÃO · só nos ícones (números)
 * - Quebra de simetria: pilar central deslocado verticalmente
 */

type Pilar = {
  numero: string;
  nome: string;
  frase: string;
};

const PILARES: Pilar[] = [
  {
    numero: "01",
    nome: "Reconhecer",
    frase:
      "Sua realidade é diferente. Filhos · janelas curtas · interrupções. Antes de mudar o método, é preciso parar de fingir que não é assim."
  },
  {
    numero: "02",
    nome: "Estruturar",
    frase:
      "Rotina-âncora em blocos de 25 a 40 minutos · não em maratonas de 4 horas. Uma tarefa por bloco · pronta antes da próxima interrupção chegar."
  },
  {
    numero: "03",
    nome: "Multiplicar",
    frase:
      "Automação progressiva e delegação realista. Não é robótica empresarial. É decidir o que sai da sua mesa essa semana — sem trauma de perfeccionismo."
  }
];

export default function MetodoPilares() {
  return (
    <section
      aria-label="O método · três pilares"
      className="border-y border-[var(--color-rule)] bg-[var(--color-paper)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-16 max-w-[58ch] md:mb-24">
          <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
            Intermissão · o método em 3 movimentos
          </p>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.1] text-[var(--color-ink)] md:text-[56px]">
            Não é fazer mais.{" "}
            <span className="italic">É fazer só o que importa</span>{" "}
            em janelas curtas.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {PILARES.map((p, i) => (
            <li
              key={p.numero}
              className={`relative flex flex-col gap-6 ${i === 1 ? "md:mt-16" : ""}`}
            >
              {/* Ícone numérico · serve de glifo · única ocorrência de amarelo nesta seção */}
              <span
                aria-hidden
                className="font-serif text-[80px] italic leading-none text-[var(--color-amber-deep)] md:text-[112px]"
              >
                {p.numero}
              </span>
              <h3 className="font-serif text-[28px] leading-[1.15] text-[var(--color-ink)] md:text-[34px]">
                {p.nome}
                <span className="text-[var(--color-amber-deep)]">.</span>
              </h3>
              <p className="max-w-[34ch] text-[17px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[18px]">
                {p.frase}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

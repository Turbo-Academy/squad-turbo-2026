"use client";

/**
 * ProximoCapitulo · Bloco 5
 * - "O próximo capítulo é com você"
 * - 5 aulas como CONTINUIDADE da timeline (mesma estética narrativa · mesmos pontos)
 * - NÃO usa "AO VIVO" / "GRAVADA" (regra PRODUCT.md)
 * - Sábado tira-dúvidas + domingo pitch como notas finais
 */

type Aula = {
  dia: string;
  data: string;
  titulo: string;
  promessa: string;
};

const AULAS: Aula[] = [
  {
    dia: "Segunda",
    data: "11 mai",
    titulo: "Por que Pomodoro NÃO funciona pra mãe",
    promessa: "Você entende por que tudo que tentou antes falhou — e vê o método que funciona pro seu contexto real."
  },
  {
    dia: "Terça",
    data: "12 mai",
    titulo: "Construindo sua rotina-âncora",
    promessa: "Você sai com a rotina dos próximos 30 dias estruturada · em 4 blocos diários."
  },
  {
    dia: "Quarta",
    data: "13 mai",
    titulo: "Ganhando 10h por semana automatizando",
    promessa: "Você identifica 3 tarefas pra automatizar essa semana · sem custo de software."
  },
  {
    dia: "Quinta",
    data: "14 mai",
    titulo: "Dobrando receita sem dobrar horas",
    promessa: "Estratégia de oferta e precificação que aumenta ticket sem aumentar carga horária."
  },
  {
    dia: "Sexta",
    data: "15 mai",
    titulo: "Sistema de delegação progressiva",
    promessa: "Você sai com checklist do que delega na próxima semana · mesmo trabalhando solo."
  }
];

export default function ProximoCapitulo() {
  return (
    <section
      aria-label="Próximo capítulo · as 5 aulas"
      className="bg-[var(--color-paper-deep)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Cabeçalho · puxa a narrativa */}
        <div className="mb-20 max-w-[60ch] md:mb-28">
          <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
            Capítulo 06 · 11 a 17 de maio
          </p>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.1] text-[var(--color-ink)] md:text-[64px] md:leading-[1.05]">
            O próximo capítulo{" "}
            <span className="italic">é com você</span>
            <span className="text-[var(--color-amber-deep)]">.</span>
          </h2>
          <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.65] text-[var(--color-ink-soft)] md:text-[18px]">
            Cinco aulas técnicas · uma por dia · começando segunda. Cada uma resolve uma camada do
            problema · sem exigir que você vire outra pessoa pra aplicar.
          </p>
        </div>

        {/* Continuidade da timeline · aulas como pontos */}
        <ol className="relative grid grid-cols-1 gap-2 border-t border-[var(--color-rule)]">
          {AULAS.map((a, i) => (
            <li
              key={a.dia}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-[var(--color-rule)] py-8 transition-colors duration-300 hover:bg-[var(--color-paper)] md:gap-8 md:py-10"
            >
              {/* Numeração · mono */}
              <span className="col-span-2 font-mono text-[12px] uppercase tracking-mono text-[var(--color-ink-soft)] md:col-span-1">
                Aula 0{i + 1}
              </span>
              {/* Data · serif italic discreto */}
              <span className="col-span-3 font-serif text-[20px] italic text-[var(--color-ink)] md:col-span-2 md:text-[28px]">
                {a.dia}
                <span className="ml-2 hidden font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)] not-italic md:inline">
                  {a.data}
                </span>
              </span>
              {/* Título e promessa */}
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-serif text-[22px] leading-[1.2] text-[var(--color-ink)] md:text-[30px]">
                  {a.titulo}
                </h3>
                <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[17px]">
                  {a.promessa}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Notas finais · sábado / domingo · sem indicar formato */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <p className="border-l-2 border-[var(--color-amber)] pl-4 text-[15px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[16px]">
            <span className="font-mono uppercase tracking-mono text-[var(--color-ink)]">
              Sábado, 16 mai
            </span>
            <br />
            Tira-dúvidas em grupo. Resgata quem perdeu uma aula · costura tudo antes do domingo.
          </p>
          <p className="border-l-2 border-[var(--color-amber)] pl-4 text-[15px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[16px]">
            <span className="font-mono uppercase tracking-mono text-[var(--color-ink)]">
              Domingo, 17 mai
            </span>
            <br />
            Apresentação do programa de 90 dias · pra quem quiser ir mais fundo. Sem obrigação.
          </p>
        </div>
      </div>
    </section>
  );
}

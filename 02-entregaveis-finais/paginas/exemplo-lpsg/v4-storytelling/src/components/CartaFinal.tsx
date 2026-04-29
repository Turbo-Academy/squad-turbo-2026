"use client";

/**
 * CartaFinal · Bloco 6
 * - Prosa em PRIMEIRA PESSOA · assinada pela Marina
 * - Sem bullets · sem CTA dentro · sem selo
 * - Foto pequena no rodapé · cara de criadora
 */
export default function CartaFinal() {
  return (
    <section
      aria-label="Carta final · Marina"
      className="bg-[var(--color-paper)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <article className="mx-auto max-w-[64ch]">
          <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
            Carta · entre nós
          </p>

          <h2 className="mt-6 font-serif text-[32px] italic leading-[1.15] text-[var(--color-ink)] md:text-[48px]">
            Se você chegou até aqui,
          </h2>

          <div className="mt-10 space-y-6 text-[18px] leading-[1.75] text-[var(--color-ink)] md:text-[19px]">
            <p>
              Provavelmente você já tentou algumas coisas. Talvez tenha comprado um curso de
              produtividade que pressupunha 4 horas seguidas de foco. Talvez tenha desistido no
              meio · não por preguiça, mas porque um filho acordou no terceiro dia.
            </p>
            <p>
              Eu também desisti de muita coisa. Não tô aqui pra te vender disciplina nem promessa
              de virar outra pessoa em 30 dias. Tô aqui pra te mostrar uma estrutura que cabe na
              sua semana real · do jeito que ela é hoje, sem condicional.
            </p>
            <p>
              Se essa edição não for o seu momento · tudo bem. Você não precisa se inscrever pra
              continuar lendo o que escrevo. Mas se algo nessa página fez você sentir um sim
              quieto · então provavelmente é pra você. Eu te espero lá.
            </p>
          </div>

          {/* Assinatura · com foto pequena */}
          <footer className="mt-14 flex items-center gap-5 border-t border-[var(--color-rule)] pt-8">
            <img
              src="https://placehold.co/240x240/F3EFE6/3A3A3A?text=Marina"
              alt="Marina Costa · retrato em iluminação natural · sem retoque"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-serif text-[22px] italic text-[var(--color-ink)] md:text-[26px]">
                Marina Costa
              </span>
              <span className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                Mãe de 2 · 800 alunas formadas · São Paulo, abril de 2026
              </span>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}

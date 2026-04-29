"use client";

/**
 * StoryCTA · Bloco 7
 * - CTA contextualizado no fim da narrativa
 * - "Entrar na próxima edição (começa segunda · 11 de maio)"
 * - Botão WARM · amarelo accent + texto grafite · convite humano · NÃO comando
 * - Garantia visível · ticker de meta no rodapé
 */
export default function StoryCTA() {
  return (
    <section
      id="cta"
      aria-label="Convite final · próxima edição"
      className="relative bg-[var(--color-paper-deep)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Coluna texto */}
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
              Próximo capítulo · você
            </p>
            <h2 className="mt-6 font-serif text-[40px] leading-[1.05] text-[var(--color-ink)] md:text-[80px]">
              Entrar na <span className="italic">próxima edição</span>
              <span className="text-[var(--color-amber-deep)]">.</span>
            </h2>
            <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[19px]">
              Começa segunda · 11 de maio · 7h da manhã. Cinco aulas, uma por dia, durante a
              semana. Sábado tira-dúvidas. Domingo, se você quiser, eu apresento o programa
              completo. Se não quiser, você sai com 5 aulas inteiras na bagagem.
            </p>

            {/* Botão CTA warm */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="https://pay.hotmart.com/MPR-INGRESSO-FAKE"
                className="cta-warm inline-flex h-[64px] w-full max-w-[480px] items-center justify-between rounded-[2px] border-2 border-[var(--color-amber-deep)] bg-[var(--color-amber)] px-8 text-[18px] font-medium text-[var(--color-ink)] md:h-[68px] md:text-[19px]"
              >
                <span>Quero aprender agora</span>
                <span aria-hidden className="text-2xl">→</span>
              </a>
              <p className="text-[14px] text-[var(--color-ink-soft)]">
                <span className="font-mono uppercase tracking-mono">Ingresso único · R$ 47</span>
                <span className="mx-2 opacity-50">·</span>
                <span className="font-serif italic">te espero lá, segunda</span>
              </p>
            </div>

            {/* Garantia · logo abaixo · serif italic */}
            <p className="mt-8 max-w-[52ch] border-l-2 border-[var(--color-amber)] pl-4 font-serif text-[17px] italic leading-snug text-[var(--color-ink)] md:text-[18px]">
              Garantia incondicional · 7 dias · 100% do valor de volta, sem pergunta.
              <br />
              <span className="not-italic font-sans text-[14px] text-[var(--color-ink-soft)]">
                Você entra · assiste · se não fizer sentido, devolvo tudo. Sem formulário, sem
                aborrecimento.
              </span>
            </p>
          </div>

          {/* Coluna lateral · meta · estilo cover de revista */}
          <aside className="md:col-span-5">
            <div className="border-l border-[var(--color-rule)] pl-6 md:pl-10">
              <dl className="grid grid-cols-1 gap-8">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                    Edição
                  </dt>
                  <dd className="mt-2 font-serif text-[40px] leading-none text-[var(--color-ink)] md:text-[56px]">
                    001
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                    Início
                  </dt>
                  <dd className="mt-2 font-serif text-[28px] italic leading-tight text-[var(--color-ink)] md:text-[40px]">
                    11 de maio
                    <br />
                    <span className="not-italic font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                      Segunda · 7h
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                    Janela
                  </dt>
                  <dd className="mt-2 font-serif text-[28px] italic leading-tight text-[var(--color-ink)] md:text-[40px]">
                    7 dias
                    <br />
                    <span className="not-italic font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                      5 aulas + tira-dúvidas + pitch
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Rodapé editorial · linha fina */}
        <footer className="mt-24 border-t border-[var(--color-rule)] pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
              Marina Costa · Mãe Produtiva · Edição 001 · 2026
            </p>
            <p className="font-serif text-[14px] italic text-[var(--color-ink-soft)]">
              Se isso é pra você · você sabe.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

"use client";

/**
 * ChapterPause · Bloco 3
 * - Pull quote ISOLADA entre capítulos
 * - Serif italic gigante · sem aspas ornamentais · texto fala por si
 * - Padding generoso ≥ 96px vertical · respiração editorial
 */
export default function ChapterPause() {
  return (
    <section
      aria-label="Pausa entre capítulos"
      className="bg-[var(--color-paper-deep)] py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mx-auto max-w-[68ch]">
          <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
            Pausa · entre o capítulo 3 e o capítulo 4
          </p>

          <blockquote className="mt-10">
            <p className="font-serif text-[34px] italic leading-[1.18] text-[var(--color-ink)] md:text-[56px] md:leading-[1.12]">
              Quando aceitei que minha realidade era diferente,{" "}
              <span className="text-[var(--color-amber-deep)]">parei de tentar</span>{" "}
              caber em método dos outros{" "}
              <span className="not-italic">·</span>{" "}
              e construí o meu.
            </p>
            <footer className="mt-10 flex items-center gap-3">
              <span className="block h-px w-10 bg-[var(--color-ink-soft)]" />
              <cite className="not-italic font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                Marina Costa · diário, julho de 2022
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

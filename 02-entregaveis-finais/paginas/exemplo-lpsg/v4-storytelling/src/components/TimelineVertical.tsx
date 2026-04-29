"use client";

import { useEffect, useRef, useState } from "react";

/**
 * TimelineVertical · Bloco 2
 * - Linha vertical CONTÍNUA E VISÍVEL com 5 pontos (capítulos)
 * - Linha pinta progressivamente conforme rola (scroll-driven)
 * - Cada ponto: data (mono uppercase) + título (serif) + 2-3 parágrafos narrativos
 * - Foto natural por capítulo · placeholder placehold.co
 * - Respiração ≥ 96px vertical entre capítulos
 */

type Chapter = {
  year: string;
  place: string;
  title: string;
  paragraphs: string[];
  imageAlt: string;
  imageUrl: string;
};

const CHAPTERS: Chapter[] = [
  {
    year: "2018",
    place: "São Paulo",
    title: "A culpa de ser mãe E empreendedora",
    paragraphs: [
      "Eu tinha 31 anos · um filho de 2 anos · um negócio digital recém-aberto. Trabalhava 14 horas por dia. Achava que era questão de organizar mais.",
      "Cada Pomodoro frustrado virava prova de que eu não dava conta. Comprei 3 cursos de produtividade. Nenhum era pra mim — todos pressupunham 4 horas seguidas de foco que eu simplesmente não tinha."
    ],
    imageAlt: "Marina em 2018 · escritório improvisado em casa · mesa cheia de papéis",
    imageUrl: "https://placehold.co/1200x1500/FBFAF7/3A3A3A?text=2018+%C2%B7+Marina"
  },
  {
    year: "2020",
    place: "O burnout",
    title: "A queda que mudou tudo",
    paragraphs: [
      "Em janeiro de 2020 eu acordei e não consegui sair da cama por 3 dias. Não era preguiça · era exaustão acumulada de 4 anos.",
      "Foi nesse momento que entendi: o problema não estava em mim. Estava no método que eu seguia. A indústria de produtividade foi feita por homens sem filhos · pra homens sem filhos."
    ],
    imageAlt: "Marina em 2020 · janela com luz suave · momento de pausa",
    imageUrl: "https://placehold.co/1200x1500/F3EFE6/3A3A3A?text=2020+%C2%B7+Marina"
  },
  {
    year: "2022",
    place: "O experimento",
    title: "25 minutos por vez",
    paragraphs: [
      "Comecei pequeno · 25 minutos por dia em uma única tarefa crítica. Não 8 horas planejadas que viravam 0. Apenas 25 minutos reais, blindados.",
      "3 anos depois, esse experimento simples virou um método aplicável a 800 mães diferentes. Sem dieta de produtividade · sem aplicativo mágico · sem culpa."
    ],
    imageAlt: "Caderno aberto · timer marcando 25 minutos · café ao lado",
    imageUrl: "https://placehold.co/1200x1500/FBFAF7/3A3A3A?text=2022+%C2%B7+25+min"
  },
  {
    year: "2024",
    place: "O método",
    title: "A estrutura nasceu",
    paragraphs: [
      "2 filhos · negócio faturando R$ 200 mil por mês · 6 horas de trabalho por dia. Não foi sorte · foi desenho.",
      "Mãe Produtiva é o desenho exato dessa estrutura · transformado em 5 aulas técnicas e 1 pitch. Não é teoria revendida. É o que eu rodo todos os dias, há 4 anos, sem parar."
    ],
    imageAlt: "Marina em 2024 · escritório organizado · iluminação natural",
    imageUrl: "https://placehold.co/1200x1500/F3EFE6/3A3A3A?text=2024+%C2%B7+M%C3%A9todo"
  },
  {
    year: "2026",
    place: "Próximo capítulo",
    title: "Esse capítulo é com você",
    paragraphs: [
      "Próxima edição começa segunda, 11 de maio · 7h da manhã.",
      "Vou te mostrar o método que mudou minha vida e a de 800 outras mães. Se isso é pra você · você sabe."
    ],
    imageAlt: "Convite editorial · papel reciclado · selo amarelo discreto",
    imageUrl: "https://placehold.co/1200x1500/FBFAF7/FFB300?text=2026+%C2%B7+Voc%C3%AA"
  }
];

export default function TimelineVertical() {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Stagger reveal real (Krehel · IntersectionObserver)
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      itemsRef.current.forEach((el) => el?.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.18 }
    );
    itemsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(100);
      setActiveIndex(CHAPTERS.length - 1);
      return;
    }

    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height;
      // Quando o topo do track entra no viewport, progresso = 0.
      // Quando a base do track passa do viewport - quarter, progresso = 100.
      const start = viewport * 0.85;
      const end = -total + viewport * 0.4;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped * 100);
      // Active index baseado em progresso
      const idx = Math.min(
        CHAPTERS.length - 1,
        Math.floor(clamped * CHAPTERS.length)
      );
      setActiveIndex(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      aria-label="Timeline · 5 capítulos"
      className="bg-[var(--color-paper)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Cabeçalho de seção */}
        <div className="mb-20 max-w-[60ch] md:mb-28">
          <p className="font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
            Capítulos · 2018 → 2026
          </p>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.1] text-[var(--color-ink)] md:text-[56px]">
            Cinco momentos.{" "}
            <span className="italic">Oito anos.</span>{" "}
            Um método.
          </h2>
        </div>

        {/* Grid relativo · linha vertical absoluta · pontos como filhos */}
        <div ref={trackRef} className="relative">
          {/* Linha vertical contínua · pinta com --progress */}
          <div
            aria-hidden
            className="timeline-track absolute left-[15px] top-0 bottom-0 w-[2px] md:left-[33%] md:-translate-x-px"
            style={{ ["--progress" as string]: `${progress}%` }}
          />

          <ol className="m-0 list-none p-0">
            {CHAPTERS.map((c, i) => {
              const isActive = i <= activeIndex;
              return (
                <li
                  key={c.year}
                  ref={(el) => { itemsRef.current[i] = el; }}
                  className="reveal relative grid grid-cols-1 gap-8 pb-24 last:pb-0 md:grid-cols-12 md:gap-10 md:pb-32"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* Ponto da timeline */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-2 md:left-[calc(33%-15px)]"
                  >
                    <span
                      className={`timeline-dot block h-[30px] w-[30px] rounded-full border-[3px] border-[var(--color-paper)] bg-[var(--color-line)] ring-1 ring-[var(--color-rule)] ${isActive ? "is-active" : ""}`}
                    />
                  </div>

                  {/* Coluna esquerda · ano e place (sticky no desktop) */}
                  <div className="ml-12 md:col-span-4 md:ml-0 md:pr-8 md:text-right">
                    <div className="md:sticky md:top-24">
                      <p
                        className={`font-serif text-[56px] leading-none transition-colors duration-700 md:text-[80px] ${isActive ? "text-[var(--color-ink)]" : "text-[var(--color-line)]"}`}
                      >
                        {c.year}
                      </p>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-mono text-[var(--color-ink-soft)]">
                        {c.place}
                      </p>
                    </div>
                  </div>

                  {/* Coluna direita · narrativa */}
                  <div className="ml-12 md:col-span-7 md:col-start-6 md:ml-0">
                    <h3 className="font-serif text-[28px] italic leading-[1.15] text-[var(--color-ink)] md:text-[40px]">
                      {c.title}
                    </h3>

                    {/* Imagem · documentário visual */}
                    <figure className="mt-8 overflow-hidden border border-[var(--color-rule)]">
                      <img
                        src={c.imageUrl}
                        alt={c.imageAlt}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        width={1200}
                        height={1500}
                        className="block aspect-[4/5] w-full object-cover"
                      />
                    </figure>

                    {/* Parágrafos */}
                    <div className="mt-8 space-y-5 text-[17px] leading-[1.65] text-[var(--color-ink-soft)] md:text-[18px]">
                      {c.paragraphs.map((p, idx) => (
                        <p key={idx} className="max-w-[60ch]">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

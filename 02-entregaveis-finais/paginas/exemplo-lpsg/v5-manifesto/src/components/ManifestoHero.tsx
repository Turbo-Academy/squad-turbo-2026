/**
 * 1 · MANIFESTO HERO
 * 100vh · frase manifesto · pink chapado
 * 1ª dobra obrigatória: DATA · CTA · GARANTIA
 */
export function ManifestoHero() {
  return (
    <section
      aria-labelledby="manifesto-hero-title"
      className="relative min-h-screen w-full bg-[#FF2E93] text-[#0A0A0A]"
    >
      {/* Topo · meta brutalist · selo + autora */}
      <header className="flex items-center justify-between border-b-4 border-[#0A0A0A] px-5 py-4 md:px-12">
        <div className="flex items-center gap-3">
          <span aria-hidden className="block h-3 w-3 rounded-full bg-[#0A0A0A] pulse-num" />
          <span className="text-xs font-black uppercase tracking-[0.18em] md:text-sm">
            Manifesto · Edição Maio 2026
          </span>
        </div>
        <span className="hidden text-xs font-black uppercase tracking-[0.18em] md:inline-block">
          Marina Costa · @marinacostaproduz
        </span>
      </header>

      {/* Frase manifesto · ocupa o frame */}
      <div className="px-5 pt-10 pb-6 md:px-12 md:pt-16 md:pb-10">
        <p className="mb-6 inline-flex items-center gap-2 border-l-[6px] border-[#0A0A0A] pl-3 text-xs font-black uppercase tracking-[0.2em] md:text-sm">
          Aviso · isso aqui não é página de venda
        </p>

        <h1
          id="manifesto-hero-title"
          className="display-italic text-[#0A0A0A] [font-size:clamp(2.6rem,9vw,7rem)]"
        >
          Pomodoro foi feito por{" "}
          <span className="display-caps inline-block bg-[#0A0A0A] px-3 py-1 text-[#FF2E93] [font-size:clamp(2.3rem,8vw,6rem)]">
            homens sem filhos.
          </span>
          <br />
          <span className="display-caps [font-size:clamp(2.3rem,8vw,6rem)]">
            Pra homens
          </span>{" "}
          <span className="display-italic">sem filhos.</span>
          <br />
          Mãe de filho pequeno tem{" "}
          <span className="display-caps underline decoration-[6px] underline-offset-[10px] [font-size:clamp(2.3rem,8vw,6rem)]">
            25 minutos seguidos.
          </span>
          <br />
          <span className="display-italic">No máximo.</span>
        </h1>
      </div>

      {/* 1ª DOBRA · DATA + CTA + GARANTIA · todos visíveis juntos */}
      <div className="grid gap-8 px-5 pt-2 pb-12 md:grid-cols-12 md:gap-6 md:px-12 md:pb-16">
        {/* DATA brutalist · gigante · rotação leve */}
        <div className="md:col-span-5">
          <div className="inline-block">
            <span className="pill-data mb-3">
              Próxima edição · Segunda · 7h
            </span>
            <div
              className="relative inline-block border-[6px] border-[#0A0A0A] bg-[#0A0A0A] px-6 py-4 md:px-8 md:py-6"
              style={{ transform: "rotate(-3deg)" }}
            >
              <span className="num-brutalist block text-[#FF2E93] [font-size:clamp(5rem,14vw,10rem)] [line-height:0.9]">
                11.05
              </span>
              <span className="mt-2 block text-center text-xs font-black uppercase tracking-[0.3em] text-[#FF2E93]">
                Início
              </span>
            </div>
          </div>
        </div>

        {/* CTA + GARANTIA · coluna direita */}
        <div className="md:col-span-7 md:flex md:flex-col md:justify-end md:items-end md:text-right">
          <div className="md:max-w-md">
            <p className="mb-4 text-base font-black uppercase tracking-[0.14em] md:text-lg">
              Se ler isso aqui te incomodou{" "}
              <span className="display-italic text-2xl normal-case tracking-normal md:text-3xl">
                · você é a pessoa certa.
              </span>
            </p>

            <a
              href="#convite"
              className="cta-brutalist cta-brutalist-inverse"
              aria-label="Tô dentro · entrar na próxima edição"
            >
              <span>Tô dentro</span>
              <span aria-hidden className="text-2xl">→</span>
            </a>

            <p className="mt-5 max-w-md text-sm font-bold leading-snug md:ml-auto md:text-base">
              <span className="inline-block border-2 border-[#0A0A0A] bg-[#FF2E93] px-2 py-0.5 text-xs font-black uppercase tracking-widest mr-2">
                Garantia
              </span>
              Incondicional · 7 dias · 100% do valor de volta · sem pergunta.
            </p>
          </div>
        </div>
      </div>

      {/* Ticker rodante · garantia + provas · base do viewport */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="inline-flex items-center gap-12">
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                Garantia incondicional · 7 dias · 100% do valor de volta
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                800+ alunas · 6 anos no nicho
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                R$ 200.000/mês · 2 filhos · 6h/dia
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
              <span className="text-base font-black uppercase tracking-[0.1em] text-[#0A0A0A]">
                Auditoria Hotmart aberta sob pedido
              </span>
              <span aria-hidden className="text-2xl text-[#FF2E93]">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

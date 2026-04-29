'use client';

import { useState } from 'react';

type QA = {
  q: string;
  a: string;
};

const items: QA[] = [
  {
    q: 'Tenho filho de 1 ano que não dorme · isso funciona pra mim?',
    a: 'Sim. O método foi desenhado pra esse cenário · não pra ele ser exceção. A premissa de janelas curtas (25-40min) é exatamente o que sobra com filho pequeno · a gente parte daí, não chega lá.',
  },
  {
    q: 'Já tentei agenda · Pomodoro · GTD · nada cola. Por que isso seria diferente?',
    a: 'Porque os outros pressupõem 4h ininterruptas. Esse parte do que você tem de verdade. A diferença não é mais técnica · é o ponto de partida. Mãe sem 4h ininterruptas com método certo > mãe com 4h forçadas em método errado.',
  },
  {
    q: 'Vou conseguir aplicar com a rotina caótica que eu tenho?',
    a: 'A primeira aula te ajuda a mapear sua rotina real · não a rotina ideal. A segunda monta a estrutura em cima do que existe. Você não muda sua vida pra caber no método · o método cabe na sua vida.',
  },
  {
    q: 'O que acontece se eu não puder estar ao vivo no horário?',
    a: 'O conteúdo fica disponível pra revisar no seu tempo. A única exceção é o tira-dúvidas de sábado · que não fica gravado · então recomendo separar esse horário pra encaixar dúvida específica.',
  },
  {
    q: 'E se eu pagar e não gostar?',
    a: '7 dias · 100% de volta · sem pergunta · 1 clique no email. Garantia incondicional. Se o método não fizer clique pra você até a aula 3 · pede o reembolso. Sem ginástica · sem ligar pro suporte · sem justificar.',
  },
];

export default function FAQTecnico() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-b border-graphite-line"
    >
      <div className="mx-auto w-full max-w-shell px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="tech-eyebrow mb-4">07 · FAQ técnico</p>
            <h2
              id="faq-heading"
              className="font-sans text-[32px] font-semibold leading-[1.1] tracking-tech-tighter text-paper md:text-[44px]"
            >
              Perguntas reais.
              <br />
              <span className="text-paper-mute">Respostas diretas.</span>
            </h2>
            <p className="mt-5 max-w-reading text-base leading-[1.6] text-paper-soft">
              As perguntas que mais voltaram nas últimas 4 edições — sem
              rodeio, sem filtragem.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="overflow-hidden rounded-xl border border-graphite-line bg-graphite-elev">
              {items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className={`${i !== items.length - 1 ? 'border-b border-graphite-line' : ''}`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-trigger-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-graphite/40 md:px-7 md:py-6"
                      >
                        <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-cyan-hi">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-base font-medium leading-[1.4] text-paper md:text-[17px]">
                          {item.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-graphite-hi text-paper-mute transition-transform duration-200 ${
                            isOpen ? 'rotate-45 border-cyan-line text-cyan-hi' : ''
                          }`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 1.5V10.5M1.5 6H10.5"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      hidden={!isOpen}
                      className="px-5 pb-6 md:px-7 md:pb-7"
                    >
                      <div className="ml-[28px] max-w-reading text-[15px] leading-[1.65] text-paper-soft md:ml-[32px]">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';

/**
 * Live counter · mock estático mas com micro-jitter visual
 * para parecer ativo. Nunca passa de 50 (limite real da edição).
 * Reduced motion → sem jitter · valor fixo.
 */

const BASE = 23;
const TOTAL = 50;
const UPDATE_TEXT = 'atualizado há 2min';

export default function LiveCounter() {
  const [reservadas, setReservadas] = useState<number>(BASE);
  const [updateText, setUpdateText] = useState<string>(UPDATE_TEXT);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);

    if (mq.matches) {
      // estático
      return;
    }

    // jitter sutil · sobe 1 em 1 raramente · nunca passa do total
    const id = setInterval(() => {
      setReservadas((prev) => {
        if (prev >= TOTAL - 4) return prev;
        if (Math.random() > 0.7) {
          setUpdateText('atualizado agora');
          return prev + 1;
        }
        return prev;
      });
    }, 14000);

    return () => clearInterval(id);
  }, []);

  const pct = Math.min(100, Math.round((reservadas / TOTAL) * 100));
  const restantes = Math.max(0, TOTAL - reservadas);

  return (
    <section
      aria-labelledby="counter-heading"
      className="border-b border-graphite-line"
    >
      <div className="mx-auto w-full max-w-shell px-6 py-20 md:px-10 md:py-24">
        <div className="card-tech overflow-hidden">
          <div className="grid gap-0 md:grid-cols-12">
            {/* Coluna texto */}
            <div className="border-b border-graphite-line p-7 md:col-span-7 md:border-b-0 md:border-r md:p-10">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full bg-green ${reduced ? '' : 'live-pulse'}`}
                />
                <span className="tech-eyebrow text-green">
                  Live counter · {updateText}
                </span>
              </div>

              <h2
                id="counter-heading"
                className="mt-5 font-sans text-[28px] font-semibold leading-[1.1] tracking-tech-tighter text-paper md:text-[40px]"
              >
                {restantes > 0 ? (
                  <>
                    Restam{' '}
                    <span
                      aria-live="polite"
                      key={restantes}
                      className="reactive-fade font-mono text-cyan"
                    >
                      {String(restantes).padStart(2, '0')}
                    </span>{' '}
                    vagas{' '}
                    <span className="text-paper-mute">desta edição.</span>
                  </>
                ) : (
                  <>Edição esgotada.</>
                )}
              </h2>

              <p className="mt-4 max-w-reading text-sm leading-[1.6] text-paper-soft md:text-base">
                Cada edição abre 50 entradas. Não é gatilho falso · é o limite
                real da estrutura de tira-dúvidas no sábado. Quando acaba ·
                acaba.
              </p>
            </div>

            {/* Coluna gauge · estilo dashboard */}
            <div className="p-7 md:col-span-5 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="tech-eyebrow text-paper-faint">Reservadas</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                  Edição 001 · MPR
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span
                  key={reservadas}
                  className="reactive-fade font-mono text-[56px] font-semibold leading-none tracking-tech-tighter text-paper"
                >
                  {String(reservadas).padStart(2, '0')}
                </span>
                <span className="font-mono text-2xl text-paper-mute">
                  / {TOTAL}
                </span>
              </div>

              {/* Barra técnica · com ticks */}
              <div className="mt-6">
                <div
                  role="progressbar"
                  aria-valuenow={reservadas}
                  aria-valuemin={0}
                  aria-valuemax={TOTAL}
                  aria-label={`${reservadas} de ${TOTAL} vagas reservadas`}
                  className="relative h-2 overflow-hidden rounded-full bg-graphite-line"
                >
                  <div
                    className="h-full rounded-full bg-cyan transition-[width] duration-[250ms] ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[11px] text-paper-faint">
                  <span>0</span>
                  <span>{TOTAL}</span>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-graphite-line pt-5">
                <div>
                  <p className="tech-eyebrow text-paper-faint">% preenchido</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-paper">
                    {pct}%
                  </p>
                </div>
                <div>
                  <p className="tech-eyebrow text-paper-faint">Restantes</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-cyan-hi">
                    {String(restantes).padStart(2, '0')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

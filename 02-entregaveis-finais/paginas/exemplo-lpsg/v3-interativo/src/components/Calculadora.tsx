'use client';

import { useId, useMemo, useState } from 'react';

/**
 * CALCULADORA INTERATIVA
 * Premissa: "em janelas de 25-40min você pode mais que em 4h forçadas"
 * Cálculo: receita potencial estimada vs receita atual = quanto se perde
 *
 * Heurística (transparente · não black-box):
 *   horasEfetivas = horasDia * taxaAproveitamentoAtual
 *   horasOtimizadas = horasDia * taxaMetodo (85%)
 *   ratio = horasOtimizadas / horasEfetivas
 *   receitaPotencial = faturamentoAtual * ratio (cap em 5x · realismo)
 *   perdaMensal = receitaPotencial - faturamentoAtual
 */

const formatBRL = (n: number) =>
  n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });

const formatBRLShort = (n: number) => {
  if (n >= 1_000_000) return `R$ ${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `R$ ${Math.round(n / 1_000)}k`;
  return formatBRL(n);
};

export default function Calculadora() {
  const [faturamento, setFaturamento] = useState(15000);
  const [horasDia, setHorasDia] = useState(12);
  const [aproveitamento, setAproveitamento] = useState(30);

  const fatId = useId();
  const horasId = useId();
  const aprovId = useId();

  const calc = useMemo(() => {
    const taxaMetodo = 85;
    const ratio = Math.min(taxaMetodo / Math.max(aproveitamento, 5), 5);
    const receitaPotencial = Math.round(faturamento * ratio);
    const perdaMensal = Math.max(0, receitaPotencial - faturamento);
    const perdaAnual = perdaMensal * 12;
    const horasGanhas = horasDia - 6;
    return {
      ratio,
      receitaPotencial,
      perdaMensal,
      perdaAnual,
      horasGanhas: Math.max(0, horasGanhas),
    };
  }, [faturamento, horasDia, aproveitamento]);

  const fatFill = ((faturamento - 5000) / (100000 - 5000)) * 100;
  const horasFill = ((horasDia - 4) / (16 - 4)) * 100;
  const aprovFill = ((aproveitamento - 10) / (60 - 10)) * 100;

  return (
    <section
      aria-labelledby="calc-heading"
      className="border-b border-graphite-line"
    >
      <div className="mx-auto w-full max-w-shell px-6 py-20 md:px-10 md:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="tech-eyebrow mb-4">02 · Calculadora interativa</p>
          <h2
            id="calc-heading"
            className="font-sans text-[34px] font-semibold leading-[1.1] tracking-tech-tighter text-paper md:text-[52px]"
          >
            Quanto você está perdendo por mês{' '}
            <span className="text-paper-mute">não otimizando sua rotina?</span>
          </h2>
          <p className="mt-5 max-w-reading text-base leading-[1.6] text-paper-soft md:text-lg">
            Mexa nos sliders. O cálculo é transparente — sem black-box, sem
            promessa mágica. Apenas a sua realidade vs a realidade de quem
            estruturou o método.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* INPUTS */}
          <div className="md:col-span-7">
            <div className="card-tech divide-y divide-graphite-line">
              {/* faturamento */}
              <SliderField
                id={fatId}
                label="Faturamento mensal atual"
                value={formatBRL(faturamento)}
                min={5000}
                max={100000}
                step={1000}
                rangeValue={faturamento}
                onChange={setFaturamento}
                fill={fatFill}
                ticks={['R$ 5k', 'R$ 100k']}
              />

              {/* horas/dia */}
              <SliderField
                id={horasId}
                label="Horas trabalhadas por dia"
                value={`${horasDia}h`}
                min={4}
                max={16}
                step={1}
                rangeValue={horasDia}
                onChange={setHorasDia}
                fill={horasFill}
                ticks={['4h', '16h']}
                hint="Considera tempo total dedicado · com filhos perto"
              />

              {/* taxa aproveitamento */}
              <SliderField
                id={aprovId}
                label="Taxa de tarefa concluída por dia"
                value={`${aproveitamento}%`}
                min={10}
                max={60}
                step={5}
                rangeValue={aproveitamento}
                onChange={setAproveitamento}
                fill={aprovFill}
                ticks={['10%', '60%']}
                hint="Quanto da to-do list realmente sai · sem chutar"
              />
            </div>
          </div>

          {/* OUTPUT · ao vivo */}
          <div className="md:col-span-5">
            <div
              className="card-tech-accent p-7 md:p-8"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="tech-eyebrow text-cyan-hi">Resultado em tempo real</p>

              <div className="mt-5">
                <p className="text-sm text-paper-mute">Você perde por mês</p>
                <p
                  key={calc.perdaMensal}
                  className="reactive-fade mt-2 font-mono text-[44px] font-semibold leading-none tracking-tech-tighter text-paper md:text-[60px]"
                >
                  {formatBRL(calc.perdaMensal)}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-paper-faint">
                  ≈ {formatBRLShort(calc.perdaAnual)} por ano
                </p>
              </div>

              <hr className="my-7 border-graphite-line" />

              <dl className="space-y-4">
                <Row
                  label="Faturamento potencial"
                  value={formatBRL(calc.receitaPotencial)}
                />
                <Row
                  label="Multiplicador estimado"
                  value={`${calc.ratio.toFixed(1)}x`}
                />
                <Row
                  label="Horas/dia liberadas"
                  value={`${calc.horasGanhas}h`}
                  positive={calc.horasGanhas > 0}
                />
              </dl>

              <p className="mt-7 border-t border-graphite-line pt-4 text-xs leading-[1.6] text-paper-faint">
                Cálculo simplificado para visualização. O método estabiliza em
                85% de aproveitamento após ~30 dias de aplicação · cap em 5x
                pra realismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-sm text-paper-mute">{label}</dt>
      <dd
        className={`font-mono text-base font-semibold ${
          positive ? 'text-green' : 'text-paper'
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  rangeValue,
  onChange,
  fill,
  ticks,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  rangeValue: number;
  onChange: (n: number) => void;
  fill: number;
  ticks: [string, string];
  hint?: string;
}) {
  return (
    <div className="px-6 py-7 md:px-8">
      <div className="flex items-baseline justify-between gap-4">
        <label
          htmlFor={id}
          className="text-sm font-medium text-paper"
        >
          {label}
        </label>
        <span
          key={value}
          className="reactive-fade font-mono text-xl font-semibold text-cyan-hi"
        >
          {value}
        </span>
      </div>

      {hint && (
        <p className="mt-1 text-xs text-paper-faint">{hint}</p>
      )}

      <input
        id={id}
        type="range"
        className="tech-slider mt-5"
        min={min}
        max={max}
        step={step}
        value={rangeValue}
        aria-valuetext={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ['--fill' as string]: `${fill}%` }}
      />

      <div className="mt-2 flex justify-between font-mono text-[11px] text-paper-faint">
        <span>{ticks[0]}</span>
        <span>{ticks[1]}</span>
      </div>
    </div>
  );
}

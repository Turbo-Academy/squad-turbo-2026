import { EditorialHero } from '@/components/EditorialHero';
import { EditorialLead } from '@/components/EditorialLead';
import { PullQuote } from '@/components/PullQuote';
import { BigNumber } from '@/components/BigNumber';
import { Notebook } from '@/components/Notebook';
import { AuthorBio } from '@/components/AuthorBio';
import { EditorialCTA } from '@/components/EditorialCTA';

/**
 * V1 · ARQUÉTIPO EDITORIAL LONGFORM · Marina Costa · Mãe Produtiva
 *
 * Estrutura (do 09-arquetipos-premium.md · seção V1):
 *   1. Capa editorial      → EditorialHero
 *   2. Lead em prosa       → EditorialLead
 *   3. Pull quote          → PullQuote (1ª)
 *   4. O ensaio            → inline (3 parágrafos longos)
 *   5. Dado embutido       → BigNumber
 *   6. Caderno de campo    → Notebook (3 lições)
 *   7. Author bio          → AuthorBio
 *   8. Convite editorial   → EditorialCTA (link sublinhado dourado)
 *
 * Princípios não-negociáveis aplicados:
 *   - Cara de revista editorial · NÃO de infoprodutor
 *   - Tipografia em serif italic na capa · sem headline tradicional
 *   - Pull quote ocupando seção inteira · respiração ≥ 96px vertical
 *   - CTA nunca botão neon · sempre link sublinhado dourado
 *   - WCAG AA · prefers-reduced-motion respeitado · LCP < 1.5s
 */

const FIELD_NOTEBOOK_ENTRIES = [
  {
    marker: '01',
    date: '2019 · São Paulo',
    text:
      'Em 2019 eu trabalhava 14 horas por dia com um filho de dois anos. Achava que precisava me organizar mais. Não. Eu precisava de um método diferente — um que coubesse na minha vida real, não na vida idealizada de quem escreve livro de produtividade.',
  },
  {
    marker: '02',
    date: '2019–2021 · A pesquisa',
    text:
      'Comprei sete cursos de produtividade em dezoito meses. Todos pressupunham quatro horas ininterruptas de foco profundo. Eu tinha vinte e cinco minutos entre uma mamada e a próxima — e foi nesses vinte e cinco minutos que eu, sem saber, comecei a desenhar o método.',
  },
  {
    marker: '03',
    date: 'Hoje · 800+ alunas',
    text:
      'Quando aceitei que minha realidade era diferente, parei de me culpar e construí o método pra ela. Hoje 800 mães já aplicaram com sucesso — não porque trabalham mais, mas porque pararam de tentar empurrar o sistema dos outros pra dentro do dia delas.',
  },
];

export default function Page() {
  return (
    <main className="relative isolate">
      {/* 1 · Capa editorial */}
      <EditorialHero />

      {/* 2 · Lead em prosa */}
      <EditorialLead />

      {/* 3 · Pull quote (1ª) · separação dramática entre lead e ensaio */}
      <PullQuote
        quote="Pomodoro foi feito por homens sem filhos, pra homens sem filhos. Mãe de filho pequeno tem 25 minutos seguidos, no máximo."
        attribution="Marina Costa"
      />

      {/* 4 · O ensaio · 3 parágrafos longos · prosa, não bullets */}
      <section
        className="mx-auto w-full max-w-[1280px] border-t border-[color:var(--color-paper-faint)] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24"
        aria-labelledby="ensaio-section"
      >
        <p
          id="ensaio-section"
          className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]"
        >
          II · O ensaio
        </p>

        <div className="mt-10 flex max-w-[65ch] flex-col gap-y-8 text-[18px] leading-[1.75] text-[color:var(--color-paper)] md:mt-14 md:gap-y-10 md:text-[20px] md:leading-[1.7]">
          <p>
            A indústria de produtividade foi escrita por uma classe muito
            específica de pessoas — em geral homens, em geral sem filhos
            pequenos, em geral com a possibilidade real de fechar a porta do
            escritório por quatro horas e dizer que estão em{' '}
            <span className="italic">deep work</span>. Os métodos que
            saíram daí são lindos no papel. O problema não é o conteúdo. O
            problema é a premissa de tempo. Quem assume que o leitor tem
            quatro horas, escreve um método que pressupõe quatro horas. E
            quem tem vinte e cinco minutos entre uma mamada e uma reunião —
            ou quarenta minutos enquanto a criança está na escolinha, antes
            do almoço, antes do banho, antes do sono que nunca vem — esse
            leitor sente que falhou no método. Não falhou. O método é que
            falhou com ele.
          </p>

          <p>
            Existe uma versão dessa história em que a mulher se sente
            culpada por não dar conta. Há livros inteiros sobre essa culpa.
            Não é desse texto que estou falando. Estou falando da versão
            anterior — a do diagnóstico técnico. Antes de pedir desculpa
            pelo que não cabe, talvez valha investigar{' '}
            <span className="italic">por que não cabe</span>. E quando você
            faz essa investigação com honestidade, encontra um padrão: o
            problema não está em você, está na arquitetura do método. Que
            foi desenhado pra um corpo que não é o seu, pra uma rotina que
            não é a sua, pra um silêncio que não é o seu.
          </p>

          <p>
            O Mãe Produtiva nasceu de um experimento simples. Eu tinha
            vinte e cinco minutos. Eu tinha duas ou três tarefas críticas
            por semana que, se feitas, moviam o negócio. Tudo o mais era
            ruído. Em vez de tentar criar quatro horas que eu não tinha,
            comecei a desenhar blocos de vinte e cinco a quarenta minutos
            que produziam impacto desproporcional. Bloquinhos curtos. Alta
            conversão de tarefa. Zero culpa pelo que não fosse essencial.
            Em três anos o negócio saiu de seis dígitos pra duzentos mil
            por mês — e o tempo com os filhos aumentou, não diminuiu. É um
            método pra um contexto real. Esse é o convite das próximas
            cinco aulas.
          </p>
        </div>
      </section>

      {/* 5 · Dado embutido · número grande + 1 frase */}
      <BigNumber
        value="800"
        unit="mães formadas"
        context="O método foi testado em campo durante seis anos antes de virar uma aula. Cada lição que você verá nasceu de uma falha resolvida em ciclo curto, com dados reais."
        footnote="Auditoria das aplicações abertas sob pedido."
      />

      {/* 6 · Caderno de campo · 3 lições aprendidas */}
      <Notebook entries={FIELD_NOTEBOOK_ENTRIES} />

      {/* 7 · Author bio · foto B&W + 2 parágrafos */}
      <AuthorBio />

      {/* 8 · Convite editorial · link sublinhado · NÃO botão neon */}
      <EditorialCTA href="https://pay.hotmart.com/MPR-INGRESSO-FAKE" />
    </main>
  );
}

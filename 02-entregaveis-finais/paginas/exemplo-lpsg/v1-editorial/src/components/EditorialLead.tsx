/**
 * EditorialLead · Bloco 2 · Lead em prosa
 *
 * - Parágrafo de abertura como artigo de revista (4-6 linhas)
 * - Sem bullets · sem emoji · sem call-to-action
 * - Drop cap inicial em serif para sinalizar abertura editorial
 */
export function EditorialLead() {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] border-t border-[color:var(--color-paper-faint)] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24"
      aria-labelledby="lead-section"
    >
      <p
        id="lead-section"
        className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]"
      >
        I · O começo da conversa
      </p>

      <div className="mt-8 max-w-[58ch] text-[18px] leading-[1.7] text-[color:var(--color-paper)] md:mt-10 md:text-[22px] md:leading-[1.55]">
        <p className="first-letter:font-serif-display first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[88px] first-letter:leading-[0.85] first-letter:text-[color:var(--color-champagne)] md:first-letter:text-[112px]">
          Em 2019, com um filho de dois anos no colo e um negócio digital que
          ainda mal pagava as contas, eu trabalhava catorze horas por dia.
          Achava que precisava me organizar mais. Que faltava disciplina, ou
          uma planilha melhor, ou aquele aplicativo de produtividade que todo
          mundo recomendava no Instagram. Comprei sete cursos em dezoito meses.
          Todos pressupunham quatro horas seguidas de foco profundo. Eu tinha
          vinte e cinco minutos entre uma mamada e a próxima. O método não
          falhou comigo · ele simplesmente não foi feito pra mim.
        </p>
      </div>
    </section>
  );
}

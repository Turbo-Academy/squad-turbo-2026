import { MagazineCover } from '@/components/MagazineCover';
import { EditionNumber } from '@/components/EditionNumber';
import { CoverStory } from '@/components/CoverStory';
import { IssueIndex } from '@/components/IssueIndex';
import { InsideThumbs } from '@/components/InsideThumbs';
import { PullQuoteBold } from '@/components/PullQuoteBold';
import { AboutAuthor } from '@/components/AboutAuthor';
import { SubscribeCTA } from '@/components/SubscribeCTA';

/**
 * V2 · ARQUÉTIPO BOLD MAGAZINE COVER · Marina Costa · Mãe Produtiva
 *
 * Inspiração: Bloomberg Businessweek · Wired · MIT Tech Review · capa contemporânea.
 *
 * Estrutura (de 09-arquetipos-premium.md · seção V2):
 *   1. CAPA              → MagazineCover (1ª dobra · DATA + CTA + GARANTIA)
 *   2. EDITION NUMBER    → EditionNumber
 *   3. COVER STORY       → CoverStory (big number)
 *   4. SUMÁRIO           → IssueIndex (5 aulas como sumário de revista)
 *   5. INSIDE THIS ISSUE → InsideThumbs (4 prévias)
 *   6. PULL QUOTES       → PullQuoteBold ×2 (entre seções)
 *   7. ABOUT             → AboutAuthor
 *   8. SUBSCRIBE         → SubscribeCTA
 *
 * Princípios não-negociáveis aplicados:
 *   - Cor laranja saturada chapada como protagonista (60% do frame em blocos)
 *   - Display extra-bold ocupando frame · headlines GIGANTES
 *   - Foto da expert em capa full-bleed (enquadramento de capa de revista)
 *   - Zero gradient · zero glow · zero glassmorphism · zero emoji
 *   - NÃO comunica formato (sem "ao vivo" / "gravada") — regra do PRODUCT.md
 *   - Touch target ≥ 56px · WCAG AA contraste ≥ 4.5:1
 *   - Motion: SNAPPY · 150-250ms · ease-out crisp · zero overshoot · prefers-reduced-motion
 */
const CHECKOUT_URL = 'https://pay.hotmart.com/MPR-INGRESSO-FAKE';

export default function Page() {
  return (
    <main className="relative isolate">
      {/* 1 · CAPA · 1ª dobra · foto full-bleed + headline + DATA + CTA + GARANTIA */}
      <MagazineCover ctaHref={CHECKOUT_URL} />

      {/* 2 · EDITION NUMBER · "EDIÇÃO 001 · MÃE PRODUTIVA" + manchete */}
      <EditionNumber />

      {/* 3 · COVER STORY · big number + 1 frase de manchete */}
      <CoverStory />

      {/* 6a · PULL QUOTE · 1ª citação · separador entre cover story e sumário */}
      <PullQuoteBold
        quote="Eu não tinha quatro horas. Tinha vinte e cinco minutos. O método precisava caber aí ou não servia."
        attribution="Marina Costa"
        variant="ink"
      />

      {/* 4 · SUMÁRIO · lista das 5 aulas como sumário de revista */}
      <IssueIndex />

      {/* 5 · INSIDE THIS ISSUE · 4 thumbs preview do conteúdo */}
      <InsideThumbs />

      {/* 6b · PULL QUOTE · 2ª citação · pré-author bio */}
      <PullQuoteBold
        quote="Em três anos o negócio foi de seis dígitos pra duzentos mil por mês. O tempo com os filhos aumentou — não diminuiu."
        attribution="Marina Costa · Edição 001"
        variant="orange"
      />

      {/* 7 · ABOUT · foto da Marina + parágrafo bold + Instagram */}
      <AboutAuthor />

      {/* 8 · SUBSCRIBE · CTA estilo "next issue" */}
      <SubscribeCTA ctaHref={CHECKOUT_URL} />
    </main>
  );
}

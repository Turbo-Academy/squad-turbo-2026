import StoryHero from "@/components/StoryHero";
import TimelineVertical from "@/components/TimelineVertical";
import ChapterPause from "@/components/ChapterPause";
import MetodoPilares from "@/components/MetodoPilares";
import ProximoCapitulo from "@/components/ProximoCapitulo";
import CartaFinal from "@/components/CartaFinal";
import StoryCTA from "@/components/StoryCTA";

export default function Page() {
  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      <StoryHero />
      <TimelineVertical />
      <ChapterPause />
      <MetodoPilares />
      <ProximoCapitulo />
      <CartaFinal />
      <StoryCTA />
    </main>
  );
}

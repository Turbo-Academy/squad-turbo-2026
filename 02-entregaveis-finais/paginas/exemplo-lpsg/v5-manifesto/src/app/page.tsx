import { ManifestoHero } from "@/components/ManifestoHero";
import { SeteOpinioes } from "@/components/SeteOpinioes";
import { ProvasDuras } from "@/components/ProvasDuras";
import { DeveIgnorar } from "@/components/DeveIgnorar";
import { DeveFicar } from "@/components/DeveFicar";
import { Assinatura } from "@/components/Assinatura";
import { ManifestoCTA } from "@/components/ManifestoCTA";

export default function Page() {
  return (
    <main>
      <ManifestoHero />
      <SeteOpinioes />
      <ProvasDuras />
      <DeveIgnorar />
      <DeveFicar />
      <Assinatura />
      <ManifestoCTA />
    </main>
  );
}

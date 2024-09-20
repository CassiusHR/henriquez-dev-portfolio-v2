import { ClipLinks } from "@/components/clipPathLinks/ClipLinks";
import { CaseStudiesLinks } from "@/components/caseStudiesLInks/CaseStudiesLinks";
import { SectionSeparator } from "@/components/sectionSeparator/SectionSeparator";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('@/components/heroSection2/HeroSection'), {
  ssr: false,
});

export default function Home() {

  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <div className="h-screen w-full">
        <HeroSection />
      </div>
      <ClipLinks />
      <SectionSeparator />
      <CaseStudiesLinks />
    </div>
  );
}

import { ClipLinks } from "@/components/clipPathLinks/ClipLinks";
import HeroSection from "@/components/heroSection/HeroSection";
import { CaseStudiesLinks } from "@/components/caseStudiesLInks/CaseStudiesLinks";
import { SectionSeparator } from "@/components/sectionSeparator/SectionSeparator";
export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <ClipLinks />
      <SectionSeparator />
      <CaseStudiesLinks />
    </div>
  );
}

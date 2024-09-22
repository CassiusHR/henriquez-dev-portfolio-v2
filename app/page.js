import { ClipLinks } from "@/components/clipPathLinks/ClipLinks";
import { CaseStudiesLinks } from "@/components/caseStudiesLInks/CaseStudiesLinks";
import { SectionSeparator } from "@/components/sectionSeparator/SectionSeparator";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('@/components/heroSection2/HeroSection'), {
  ssr: false,
});

export const metadata = {
  metadataBase: new URL('https://henriquez.dev'),
  title: "Henriquez.dev",
  description: "Henriquez.dev",
  generator: 'Next.js',
  applicationName: 'Henriquez.dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Carlos Henriquez', url: 'https://henriquez.dev' }],
  creator: 'Carlos Henriquez',
  publisher: 'Carlos Henriquez',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/ogimage.png',
    title: 'Henriquez.dev',
    description: 'Carlos Henriquez - Creative Developer',
    url: 'https://henriquez.dev',
    siteName: 'Henriquez.dev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};
export default function Home() {

  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <div className="h-screen w-full">
        
      </div>
      <ClipLinks />
      <SectionSeparator />
      <CaseStudiesLinks />
    </div>
  );
}

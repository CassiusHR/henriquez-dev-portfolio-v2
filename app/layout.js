import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/NeueMontreal-Light.woff2",
  variable: "--font-montreal",
  weight: "100",
});

export const metadata = {
  metadataBase: new URL('https://acme.com'),
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <div className="relative container mx-auto flex flex-col items-center justify-start mt-2 sm:border-stone-900 sm:border sm:border-solid sm:rounded-3xl overflow-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

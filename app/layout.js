'use client';
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar/Navbar";
import { motion } from "framer-motion";


const geistSans = localFont({
  src: "./fonts/NeueMontreal-Light.woff2",
  variable: "--font-montreal",
  weight: "100",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body
        className={`${geistSans.variable} antialiased scroll-smooth`}
      >
        <motion.div initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="relative container mx-auto flex flex-col items-center justify-start mt-2 sm:border-stone-900 sm:border sm:border-solid sm:rounded-3xl overflow-hidden">
          <Navbar />
          {children}
        </motion.div>
      </body>
    </html>
  );
}

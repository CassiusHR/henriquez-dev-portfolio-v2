'use client';
import Image from "next/image";
import { useInView, motion } from 'framer-motion';
import { useRef } from "react";


const LinkBar = ({ title, description, iconName, companyName, year, index }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={index} className="grid grid-cols-1 divide-x divide-neutral-900 h-32 group">
      <div className="flex flex-row space-between items-center w-full h-full group-hover:bg-neutral-900 transition-colors duration-100 will-change-transform">
        <div className="flex flex-row space-between items-center w-full h-full">
          <div className="px-4 border border-neutral-400 border-y-0 border-l-0 border-r-1">
            <Image src={`/icons/${iconName}.svg`} alt={iconName} width={40} height={40} />
          </div>
          <div className="flex flex-col justify-center items-start w-full h-full px-4">
            <h3 className="text-md sm:text-xl font-bold group-hover:text-white transition-colors duration-100 will-change-transform">
              {title}
            </h3>
            <p className="text-sm sm:text-lg text-gray-800 group-hover:text-slate-100 transition-colors duration-100 will-change-transform">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end w-1/4 sm:w-full h-full px-4">
          <span className="text-sm sm:text-md font-bold text-right group-hover:text-white transition-colors duration-100 will-change-transform">
            {companyName}
          </span>
          <span className="text-sm text-gray-800 group-hover:text-slate-100 transition-colors duration-100 will-change-transform">
            {year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const CaseStudiesLinks = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: false, amount: 0.2 });

  const linkBars = [
    { title: "A/B Testing without the pesky vendors", description: "Corporate environtment? getting upselled on everything? Let's do something different.", iconName: "Icon1", companyName: "Ria Money Transfer", year: "2024" },
    { title: "A/B Testing without the pesky vendors", description: "Corporate environtment? getting upselled on everything? Let's do something different.", iconName: "Icon2", companyName: "Ria Money Transfer", year: "2024" },
    { title: "A/B Testing without the pesky vendors", description: "Corporate environtment? getting upselled on everything? Let's do something different.", iconName: "Icon3", companyName: "Ria Money Transfer", year: "2024" },
    { title: "A/B Testing without the pesky vendors", description: "Corporate environtment? getting upselled on everything? Let's do something different.", iconName: "Icon4", companyName: "Ria Money Transfer", year: "2024" },
    { title: "A/B Testing without the pesky vendors", description: "Corporate environtment? getting upselled on everything? Let's do something different.", iconName: "Icon5", companyName: "Ria Money Transfer", year: "2024" },
    { title: "A/B Testing without the pesky vendors", description: "Corporate environtment? getting upselled on everything? Let's do something different.", iconName: "Icon6", companyName: "Ria Money Transfer", year: "2024" },
    // ... other LinkBar data ...
  ];

  return (
    <motion.div
      ref={container}
      className="border border-neutral-900 divide-y divide-neutral-900 w-full border-l-0 border-r-0 my-0"
    >
      {linkBars.map((linkBar, index) => (
        <LinkBar {...linkBar} index={index} key={index} />
      ))}
    </motion.div>
  );
};

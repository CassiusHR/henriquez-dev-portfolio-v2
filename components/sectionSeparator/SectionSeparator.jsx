'use client';
import Image from "next/image";
import {motion, useTransform, useScroll, useInView} from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import clsx from "clsx/lite";



const images = [
  "/work/ria3.webp",
  "/work/ria5.webp",
  "/work/ria3.webp",
  "/work/xe1.webp",
  "/work/xe2.webp",
  "/work/xe1.webp",
  "/work/wom1.webp",
  "/work/wom2.webp",
  "/work/wom3.webp",
];

const Column = ({images = [], y = 0, offset = 0, isInView = false, hidden = false}) => {
  return (
    <motion.div style={{y}} className={clsx('relative h-full w-1/2 sm:w-1/3 flex flex-col gap-4',hidden && 'hidden')}>

      {
        images.map((image, index) => (
          <div key={index} className={clsx('relative w-full h-full rounded-2xl overflow-hidden my-4 min-h-[200px] max-h-[200px] sm:min-h-[700px] sm:max-h-[300px]', offset == 1 && 'top-[-25%] sm:top-[-45%]', offset == 2 && 'top-[-55%] sm:top-[-95%]', offset == 3 && 'top-[-25%] sm:top-[-45%]')} style={{transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s'}}>
            <Image src={image} alt="image" fill />
          </div>

        ))
      }
    </motion.div>
  );
};



export const SectionSeparator = () => {

  const container = useRef(null);
  const overlay = useRef(null);

  const isInView = useInView(overlay, {once: false});

  const [dimension, setDimension] = useState({width:0, height:0});


  const {scrollYProgress} = useScroll({
    target: container,

    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 800 * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 800 * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 800 * 1.25]);

  return (
    <div ref={container} className="relative w-full h-100vh grid place-items-center overflow-hidden">
      <div className="relative w-full h-[175vh] min-h-[175vh] flex gap-4 p-4 box-sizing-border overflow-hidden">
        <Column images={images.slice(0, 3)} y={y} offset={1} isInView={isInView} hidden={true}/>
        <Column images={images.slice(3, 6)} y={y2} offset={2} isInView={isInView}/> 
        <Column images={images.slice(6, 9)} y={y3} offset={3} isInView={isInView} hidden={true}/>
      </div>
    </div>
  );
};





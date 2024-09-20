'use client';
import { Canvas} from "@react-three/fiber";
import { Environment, Html, useProgress } from '@react-three/drei';
import Model from "./Model";
import {useEffect, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";

const Scene = () => {
  return (

    <Canvas 
      className="bg-[rgb(250,250,250)]" 
      style={{ height: '100vh', width: '100%', touchAction: 'auto !important', pointerEvents: 'none' }}
    >
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]}/>
      <Environment preset="city" /> 
    </Canvas>
  );
};

const texts = [
  `Hola!`,
  `I'm Carlos`,
  `Let's build cool stuff :)`
];

const HeroSection = () => {
  const { progress } = useProgress();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (progress === 100) {
      interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => {
          if (prevIndex < texts.length - 1) {
            return prevIndex + 1;
          }
          clearInterval(interval);
          return prevIndex;
        });
      }, 3000);
    }

    // Cleanup function
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [progress]);


  return (
    <div className="relative h-screen w-full">
      <AnimatePresence mode="wait">
        {progress === 100 && (
          <motion.h2 key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }} className="absolute top-1/2 left-8 z-50 text-black text-4xl font-bold">{texts[currentTextIndex]}</motion.h2>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div key="canvas" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.7}}} style={{ height: '100vh', width: '100%' }}>
          <Scene />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
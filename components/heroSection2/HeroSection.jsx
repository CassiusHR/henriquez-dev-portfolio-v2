'use client';
import { Canvas } from "@react-three/fiber";
import { Environment, useProgress, Lightformer} from '@react-three/drei';
import Model from "./Model";
import {useEffect, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";

const Scene = () => {

  return (
    <Canvas
      gl={{ antialias: false }}
      className="bg-[rgb(250,250,250)]" 
      style={{ height: '100vh', width: '100%', touchAction: 'auto !important', pointerEvents: 'none' }}
    >
      <Model />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Environment preset='city' resolution={512}/>
    </Canvas>
  );
};

const texts = [
  `Hola!`,
  `I'm Carlos`,
  `Let's build cool stuff 😎`
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
            transition={{ duration: 0.5, delay: 0.7 }} className="absolute top-1/2 left-8 z-50 text-black text-4xl font-bold">{texts[currentTextIndex]}</motion.h2>
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
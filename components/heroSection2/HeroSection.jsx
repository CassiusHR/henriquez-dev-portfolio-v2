'use client';
import { Canvas} from "@react-three/fiber";
import { Environment, Html, useProgress } from '@react-three/drei';
import Model from "./Model";
import {useEffect} from "react";
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

const HeroSection = () => {
  const { progress } = useProgress();

  useEffect(() => {
    console.log(progress);
  }, [progress]);


  return (
    <div className="relative h-screen w-full">
      <AnimatePresence mode="wait">
        {progress == 100 && <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.7, delay: 0.5}}} className="absolute top-1/2 left-0 h-[200px] w-[500px] bg-red-500 z-50 py-5 px-10">
          <h2 className="text-white text-4xl font-bold">Hello</h2>
        </motion.div>}
        <motion.div key="canvas" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.7}}} style={{ height: '100vh', width: '100%' }}>
          <Scene />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
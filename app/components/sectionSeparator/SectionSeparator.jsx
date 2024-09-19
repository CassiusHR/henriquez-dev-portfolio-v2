'use client';
import Image from "next/image";
import {motion} from 'framer-motion';

export const SectionSeparator = () => {


    const TextMarquee = () => {
        return (
            <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                {/* <motion.div
                    ref={marqueeRef}
                    style={{ display: "flex" }}
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {[...Array(4)].map((_, index) => (
                        <span key={index} className="text-neutral-900 text-6xl sm:text-9xl font-bold">
                            [ CASE STUDIES ]
                        </span>
                    ))}
                </motion.div> */}
            </div>  
        );
    };
    
    return (
        <div className="relative w-full min-h-96 grid place-items-center" style={{backgroundImage: `url(/sectionbg2.webp)`, backgroundRepeat: 'repeat', backgroundSize: 'auto', backgroundOpacity: 0.1 }}>
            <TextMarquee /> 
        </div>
    );
};





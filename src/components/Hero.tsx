"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { BackgroundGradientDemo } from "./HeroImg";
import { HoverBorderGradientDemo } from "./Btnhover";
import { FloatingDockDemo } from "./SideSocials";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="items-center px-4 grid w-screen gap-20 grid-cols-1 mdl:grid-cols-2 flex-wrap text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <div className="p-4 text-5xl mt-16 md:mt-0 ">
          <span className="font-head">Hii, I am Dhiraj Gogoi</span>
          <br />
          <Highlight className="text-black font-body dark:text-white text-3xl px-4">
           Web & App Developer
          </Highlight>
       
           <HoverBorderGradientDemo buttonText="About me"/> 
   <FloatingDockDemo/>
          
        </div>
        <div className="flex justify-center align-middle order-1 md:order-2">
          <BackgroundGradientDemo />
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

"use client"
import About from "@/components/About";
import { HeroHighlightDemo } from "@/components/Hero";
import { AnimatedTooltipPreview } from "@/components/Skills";

export default function Home() {
  // const toggleTheme = () =>{
  //   document.documentElement.classList.toggle('dark')
  // }
  
  return (
    <div className="">
 
  <HeroHighlightDemo />
  <About/>
  <AnimatedTooltipPreview/>
    </div>
  );
}

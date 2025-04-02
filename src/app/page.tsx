"use client"
import About from "@/components/About";
import { HeroHighlightDemo } from "@/components/Hero";
// import { FocusCardsDemo } from "@/components/MiniProject";
import { AnimatedTooltipPreview } from "@/components/Skills";
import { TimelineDemo } from "@/components/works";

export default function Home() {
  // const toggleTheme = () =>{
  //   document.documentElement.classList.toggle('dark')
  // }
  
  return (
    <div className="">
 
  <HeroHighlightDemo />
  <About/>
  <AnimatedTooltipPreview/>
  <TimelineDemo/>
  {/* <FocusCardsDemo/> */}
    </div>
  );
}

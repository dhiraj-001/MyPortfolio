"use client"
import { HeroHighlightDemo } from "@/components/Hero";
// import { FocusCardsDemo } from "@/components/MiniProject";
import { AnimatedTooltipPreview } from "@/components/Skills";
import Education from "@/components/Education";
import { TimelineDemo } from "@/components/works";
import { BackgroundBeamsDemo } from "@/components/contact";
import FooterSection from "@/components/Footer";
import { HeroParallaxDemo } from "@/components/Certificates";
import { ThreeDCardDemo } from "@/components/AppDev";

export default function Home() {
  // const toggleTheme = () =>{
  //   document.documentElement.classList.toggle('dark')
  // }
  
  return (
    <div className="">
 
  <HeroHighlightDemo />
  <HeroParallaxDemo/>
  <AnimatedTooltipPreview/>
  <TimelineDemo/>
  {/* <ThreeDCardDemo/> */}
  <Education/>
  <BackgroundBeamsDemo/>
  <FooterSection/>

  {/* <FocusCardsDemo/> */}
    </div>
  );
}

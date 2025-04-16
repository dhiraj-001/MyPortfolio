"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import img1 from "../img/me2.jpg"

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] w-[300px] md:w-[330px]  bg-white dark:bg-zinc-900">
   <img src={img1.src} alt="" className="rounded-[22px] "/>
   
      </BackgroundGradient>
    </div>
  );
}


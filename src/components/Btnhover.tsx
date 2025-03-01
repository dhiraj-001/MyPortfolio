"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { HiLogout } from "react-icons/hi";
type HoverBorderGradientDemoProps = {
  buttonText: string;
};

export function HoverBorderGradientDemo({ buttonText }: HoverBorderGradientDemoProps) {
  return (
    <div className="m-10 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-[#23123e] bg-white text-black dark:text-white flex items-center space-x-2"
      >
   
        <span className="text-sm">{buttonText}</span>
        <HiLogout className="text-[20px]"/>
      </HoverBorderGradient>
    </div>
  );
}

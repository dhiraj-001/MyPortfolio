"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards-skills";
import { AnimatedTooltipPreview } from "./Skills";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    element: <AnimatedTooltipPreview />
  },
  {
    element: <AnimatedTooltipPreview />
  },
  {
    element: <AnimatedTooltipPreview />
  },
  {
    element: <AnimatedTooltipPreview />
  },
  {
    element: <AnimatedTooltipPreview />
  },
  {
    element: <AnimatedTooltipPreview />
  },
  {
    element: <AnimatedTooltipPreview />
  },

];

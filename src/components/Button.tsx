"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-700 text-black font-body dark:text-white border-neutral-200 dark:border-slate-800"
      >
       About me
      </Button>
    </div>
  );
}

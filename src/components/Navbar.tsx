"use client";
import React from "react";

import { IconBrain, IconHome, IconMessage } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "skills",
      link: "#skills",
      icon: <IconBrain className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "projects",
      link: "#project",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

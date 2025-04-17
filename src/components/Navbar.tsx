"use client";
import React from "react";

import { IconHome, IconMessage, IconSkiJumping } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "skills",
      link: "/skills",
      icon: <IconSkiJumping className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "projects",
      link: "/projects",
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

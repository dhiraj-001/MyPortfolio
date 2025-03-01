import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:fill-secondarydk" />
      ),
      href: "https://www.linkedin.com/in/dhiraj-gogoi-330008274/",
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:fill-secondarydk" />
      ),
      href: "https://www.instagram.com/dhi_raj__001/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:fill-secondarydk" />
      ),
      href: "https://github.com/dhiraj-001",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:fill-secondarydk" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock items={links} />
    </div>
  );
}

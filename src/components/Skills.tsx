"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import img1 from "../img/c.png";
import img2 from "../img/cpp.png";
import img3 from "../img/nxt.png";
import img4 from "../img/git.png";
import img5 from "../img/github.png";
import img6 from "../img/tail.png";
import img7 from "../img/boot.png";
import img8 from "../img/react.png";
import img9 from "../img/5968292.png";
import img10 from "../img/html.png";
import img11 from "../img/css.png";
import img12 from "../img/node.png";
import img13 from "../img/express.png";

const languages = [
  {
    id: 1,
    name: "JavaScript",
    designation: "Advanced",
    image: img9,
  },
  {
    id: 2,
    name: "C++",
    designation: "Intermediate",
    image: img2,
  },
  {
    id: 9,
    name: "C",
    designation: "Advanced",
    image: img1,
  },
  {
    id: 10,
    name: "HTML",
    designation: "Advanced",
    image: img10,
  },
  {
    id: 12,
    name: "CSS",
    designation: "Intermediate",
    image: img11,
  }
];

const frameworks = [
  {
    id: 3,
    name: "Next.js",
    designation: "Beginner",
    image: img3,
  },
  {
    id: 4,
    name: "Git",
    designation: "Intermediate",
    image: img4,
  },
  {
    id: 5,
    name: "GitHub",
    designation: "Advanced",
    image: img5,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Advanced",
    image: img6,
  },
  {
    id: 7,
    name: "Bootstrap",
    designation: "Intermediate",
    image: img7,
  },
  {
    id: 8,
    name: "React.js",
    designation: "Intermediate",
    image: img8,
  },
  {
    id: 11,
    name: "Node.js",
    designation: "Intermediate",
    image: img12,
  },
  {
    id: 12,
    name: "Express.js",
    designation: "Intermediate",
    image: img13,
  }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="p-4 flex items-center flex-col w-full mt-5">
      <span className="font-head font-bold text-5xl">My Skills</span>
      <div className="flex flex-col sml:flex-row gap-8 sml:gap-24 mt-10">
        <div>
          <h2 className="font-head text-xl font-bold">Languages</h2>
          <div className="flex flex-row items-center justify-center mb-10 mt-4 w-full">
            <AnimatedTooltip items={languages} />
          </div>
        </div>
        <div>
          <h2 className="font-head text-xl font-bold">Frameworks</h2>
          <div className="flex flex-row items-center justify-center mb-10 mt-4 w-full">
            <AnimatedTooltip items={frameworks} />
          </div>
        </div>
      </div>
    </div>
  );
}

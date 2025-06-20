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
import img14 from "../img/mysql.png";
import img15 from "../img/mongo.png";
import img16 from "../img/expo.png";
import img17 from "../img/python.png";
import { motion } from "framer-motion";

// const languages = [
//   {
//     id: 1,
//     name: "JavaScript",
//     designation: "Advanced",
//     image: img9,
//   },
//   {
//     id: 2,
//     name: "C++",
//     designation: "Intermediate",
//     image: img2,
//   },
//   {
//     id: 9,
//     name: "C",
//     designation: "Advanced",
//     image: img1,
//   },
//   {
//     id: 10,
//     name: "HTML",
//     designation: "Advanced",
//     image: img10,
//   },
//   {
//     id: 12,
//     name: "CSS",
//     designation: "Intermediate",
//     image: img11,
//   }
// ];

// const frameworks = [
//   {
//     id: 3,
//     name: "Next.js",
//     designation: "Beginner",
//     image: img3,
//   },
//   {
//     id: 4,
//     name: "Git",
//     designation: "Intermediate",
//     image: img4,
//   },
//   {
//     id: 5,
//     name: "GitHub",
//     designation: "Advanced",
//     image: img5,
//   },
//   {
//     id: 6,
//     name: "Tailwind CSS",
//     designation: "Advanced",
//     image: img6,
//   },
//   {
//     id: 7,
//     name: "Bootstrap",
//     designation: "Intermediate",
//     image: img7,
//   },
//   {
//     id: 8,
//     name: "React.js",
//     designation: "Intermediate",
//     image: img8,
//   },
//   {
//     id: 11,
//     name: "Node.js",
//     designation: "Intermediate",
//     image: img12,
//   },
//   {
//     id: 12,
//     name: "Express.js",
//     designation: "Intermediate",
//     image: img13,
//   }
// ];

const techSkills = [
  {
    category: "Programming Languages",
    skills: [
      { id: 1, name: "C", designation: "Advanced", image: img1 },
      { id: 2, name: "C++", designation: "Intermediate", image: img2 },
      { id: 3, name: "Python", designation: "Intermediate", image: img17 },
      { id: 4, name: "JavaScript", designation: "Advanced", image: img9 }
    ]
  },
  {
    category: "Frontend Technologies",
    skills: [
      { id: 5, name: "HTML", designation: "Advanced", image: img10 },
      { id: 6, name: "CSS", designation: "Intermediate", image: img11 },
      { id: 7, name: "React.js & React Native", designation: "Frontend Framework", image: img8 },
      { id: 8, name: "Next.js", designation: "Frontend Framework", image: img3 },
      { id: 9, name: "Tailwind CSS", designation: "CSS Framework", image: img6 },
      { id: 10, name: "Bootstrap", designation: "CSS Framework", image: img7 },
      { id: 11, name: "Expo", designation: "App Development", image: img16 }
    ]
  },
  {
    category: "Backend Technologies",
    skills: [
      { id: 12, name: "Node.js", designation: "Backend Development", image: img12 },
      { id: 13, name: "Express.js", designation: "Backend Development", image: img13 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { id: 14, name: "MySQL", designation: "Databases", image: img14 },
      { id: 15, name: "MongoDB", designation: "Databases", image: img15 }
    ]
  },
  {
    category: "Version Control",
    skills: [
      { id: 16, name: "Git", designation: "Version Control", image: img4 },
      { id: 17, name: "GitHub", designation: "Collaboration", image: img5 }
    ]
  }
];

export function AnimatedTooltipPreview() {
  return (
    <motion.div
      id="skills"
      className="p-4 flex items-center flex-col w-full mt-5 mb-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: .7, ease: "easeInOut" }}
    >
      <span className="font-head font-bold text-5xl">My Skills</span>
      <div className="grid mdl:grid-cols-3 xlg:grid-flow-col gap-x-[13px] gap-y-0 sml:flex-row gap-5 mdl:gap-8 xl:gap-16 mt-16 ">
        {techSkills.map((skill, index) => (
          <div key={index}>
            <h2 className="font-head text-xl font-bold sml:h-20 h-4">{skill.category}</h2>
            <div className="flex flex-row items-center justify-center mb-10 mt-4 w-full">
              <AnimatedTooltip items={skill.skills} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

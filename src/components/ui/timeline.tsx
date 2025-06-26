"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// Individual timeline item component with animations
const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1,
        ease: "easeOut"
      }}
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.2 + 0.3,
          ease: "easeOut"
        }}
        className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
      >
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
        </div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.5,
            ease: "easeOut"
          }}
          className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 highlight?dark:text-neutral-200 :""`} 
        >
          {item.title}
        </motion.h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2 + 0.4,
          ease: "easeOut"
        }}
        className="relative pl-20 pr-4 md:pl-4 w-full"
      >
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.6,
            ease: "easeOut"
          }}
          className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500"
        >
          {item.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2 + 0.7,
            ease: "easeOut"
          }}
        >
          {item.content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
    id="project"
      className="w-full bg-white dark:bg-secbg font-sans md:px-10"
      ref={containerRef}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-head font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl"
        >
        Projects & Creations
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-700 dark:text-neutral-300 text-sm font-body md:text-base max-w-sm"
        >
        A Glimpse Into My Work
        </motion.p>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

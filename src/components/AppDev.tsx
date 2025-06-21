"use client";


import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import mt1 from "../img/mytasks/3.jpg"
import logo from "../img/mytasks/logo.png"

export function ThreeDCardDemo() {
  return (
    <div className="w-full bg-white dark:bg-secbg font-sans md:px-10 py-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <h2 className="text-4xl font-head font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">
        App Development
      </h2>
<div className="flex flex-row gap-4">
  <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white flex flex-row items-center gap-2"
          >
            <img src={logo.src} alt="logo" className="w-10 h-10 rounded-md shadow-sm shadow-white" />
            My Tasks
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 mb-2 dark:text-neutral-300"
          >
            A React Native application for managing tasks with a beautiful UI and intuitive features.
          </CardItem>
          <CardItem
            translateZ="100"
            className="w-full mt-6"
          >
            <img
              src={mt1.src}
              height="1500"
              width="700"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
           
          
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white flex flex-row items-center gap-2"
          >
            <img src={logo.src} alt="logo" className="w-10 h-10 rounded-md shadow-sm shadow-white" />
            My Tasks
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 mb-2 dark:text-neutral-300"
          >
            A React Native application for managing tasks with a beautiful UI and intuitive features.
          </CardItem>
          <CardItem
            translateZ="100"
            className="w-full mt-6"
          >
            <img
              src={mt1.src}
              height="1500"
              width="700"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
           
          
          </div>
        </CardBody>
      </CardContainer>
</div>
    
    </div>
    </div>
  );
}

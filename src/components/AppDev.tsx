"use client";
import React from "react";
import { motion } from 'framer-motion'
import mt1 from "../img/mytasks/3.jpg"
import mt2 from "../img/mytasks/1.jpg"
import pg1 from "../img/pass-gen/img1.jpg"
import pg2 from "../img/pass-gen/img2.jpg"
import logop from "../img/pass-gen/logo.png"
import logo from "../img/mytasks/logo.png"
import { Tabs } from "./ui/tabs";

export function AppDev() {

  const tabs = [
    {
      title: "My Tasks",
      value: "my-tasks",
      content: (
        <div 
        className="w-full overflow-hidden relative h-full rounded-2xl p-10    border-2 bg-[#1d157a42] border-white  backdrop-blur-2xl">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <div className="flex flex-row gap-3 font-bold items-center text-xl md:text-2xl lg:text-4xl">
                <img src={logo.src} alt="" className="w-12 h-12 rounded-md shadow-sm shadow-slate-300" />
                <h3>My Tasks</h3>
              </div>
              <div className=" p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2"> React Native Task Management App</h3>
                <p className="mb-3 font-body">
                  Developed a cross-platform mobile app using React Native and TypeScript for efficient daily task management and productivity.
                </p>
                <ul className="list-disc font-body list-inside space-y-1 mb-3 text-gray-400">
                  <li>Task creation, editing, and organization with custom TaskCard components</li>
                  <li>Dark mode support and theme switching via Redux</li>
                  <li>Push notifications for task reminders and deadlines</li>
                  <li>Seamless navigation between dashboard, task details, and add task screens</li>
                  <li>Cross-platform compatibility for Android and iOS</li>
                </ul>
                <p className="text-md text-gray-300 font-body">
                  <span className="font-semibold text-lg font-head">Technologies:</span> React Native, TypeScript, Redux, React Context, Async Storage
                </p>
                <a className="" href='https://indusapp.store/fznbkq2e'><img className="mt-6 justify-center h-14" alt='Get it on Indus Appstore' src='https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-full-color-english.png' /></a>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-row gap-3">

              <div className="w-1/2 rounded-md object-cover">
                <img src={mt2.src} alt="" />
              </div>
              <div className="w-1/2 rounded-md object-cover overflow-hidden">
                <img src={mt1.src} alt="" />
              </div>

            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Password Generator",
      value: "password-generator",
      content: (
        <div 
         className="w-full overflow-hidden relative h-full rounded-2xl p-10    border-2 bg-[#1d157a42] border-white  backdrop-blur-2xl">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <div className="flex flex-row gap-3 font-bold items-center text-xl md:text-2xl lg:text-4xl">
                <img src={logop.src} alt="" className="w-12 h-12 rounded-md shadow-sm shadow-slate-300" />
                <h3>Password Generator</h3>
              </div>
              <div className=" p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">React Native Password Generator App</h3>
                <p className="mb-3 font-body">
                  Developed a secure, cross-platform mobile app using React Native and TypeScript for generating strong, customizable passwords.
                </p>
                <ul className="list-disc font-body list-inside space-y-1 mb-3 text-gray-400">
                  <li>Customizable password length and character types (uppercase, lowercase, numbers, symbols)</li>
                  <li>Modern, user-friendly interface with dark and light mode support</li>
                  <li>Easy copy-to-clipboard functionality for generated passwords</li>

                  <li>Cross-platform compatibility for Android and iOS</li>
                </ul>
                <p className="text-md text-gray-300 font-body">
                  <span className="font-semibold text-lg font-head">Technologies:</span> React Native, TypeScript, Formik, Yup, React Native Vector Icons
                </p>
                <a className="" href='https://indusapp.store/xsqqq0kj'><img className="mt-6 justify-center h-14" alt='Get it on Indus Appstore' src='https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-full-color-english.png' /></a>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-row gap-3">

              <div className="w-1/2 rounded-md object-cover">
                <img src={pg1.src} alt="" />
              </div>
              <div className="w-1/2 rounded-md object-cover overflow-hidden">
                <img src={pg2.src} alt="" />
              </div>

            </div>
          </div>
        </div>
      ),
    },

  ];

  return (
    <div className="w-full bg-white dark:bg-secbg font-sans md:px-10 py-10">
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl font-head font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">
          App Development
        </h2>
        <div className="flex flex-row gap-4">
          <motion.div
          initial={{opacity:0, y:200}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:.6, ease:"linear"}}
          className="h-[100vh] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-star mt-20 mb-40">
            <Tabs tabs={tabs} />
          </motion.div>
        </div>

      </div>
    </div>
  );
}


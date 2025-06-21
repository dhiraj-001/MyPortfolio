import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import gem1 from "../img/works/gme1.png"
import gem4 from "../img/works/gem4.png"
import vid1 from "../img/vidtube/img1.png"
import vid2 from "../img/vidtube/img2.png"
import { TailwindcssButtons } from "./LiveLinkBtn";


export function TimelineDemo() {
  const data = [
    {
      title: "VidTube",
      content: (
        <div>
          <p className="text-neutral-800 font-body dark:text-neutral-300 text-md md:text-[17px] font-normal mb-8">
            
            <main>
              <p>
                I am currently building the backend for a unique web application that combines the best features of YouTube and Twitter.
                This platform is designed to deliver a seamless and engaging user experience with the following functionalities:
              </p>
              <ul>
                <li className="mt-2"><strong className="text-mdl md:text-[19px]">Account Creation and Management:</strong> Users can register, log in, and manage their profiles with ease.</li>
                <li className="mt-2"><strong className="text-mdl md:text-[19px]">Video Upload and Interaction:</strong> A feature that allows users to upload videos, like them, and engage in meaningful discussions through comments.</li>
                <li className="mt-2"><strong className="text-mdl md:text-[19px]">Community-Focused Tweet Section:</strong> A dedicated area for tweet-style posts that fosters real-time interaction and builds a strong community.</li>
              </ul>
              <p className="mt-2">
                My focus is on creating a robust and scalable backend infrastructure to ensure the smooth operation of these features.
                This is an exciting challenge, and I look forward to integrating the frontend and delivering a groundbreaking platform that bridges video content and social networking.
              </p>
              </main>
          </p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <Image
              src={vid1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={vid2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />


          </div>

          <TailwindcssButtons 
          link="https://github.com/dhiraj-001/Backend_01"
          text="Github Repository"
          />
            <TailwindcssButtons 
          link="https://vidtube-frontend-gamma.vercel.app/"
          text="Live Preview"
          />

        </div>
      ),
    },
    {
      title: "Geminii",
      content: (
        <div>
          <p className="text-neutral-800 font-body dark:text-neutral-300 text-md md:text-[17px] font-normal mb-8">
            Geminii is a state-of-the-art application designed to replicate the core functionalities of the Gemini platform. This app is built using modern technologies and follows best practices in software development.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <Image
              src={gem1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={gem4}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />


          </div>

          <TailwindcssButtons
          link="https://gemini-clone-nu-rosy.vercel.app/"
          text="Live Preview"
          />

        </div>
      ),
    },
   
    
  ];
  return (
    <div className="w-full">
      
      <Timeline data={data} />


    </div>
  );
}

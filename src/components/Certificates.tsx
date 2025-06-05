"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import frontend from "../img/certificates/frontend-dev.png"
import cyber1 from "../img/certificates/Google-cybersec1.png"
import cyber2 from "../img/certificates/Google cybersec-2.png"
import cberBootCamp from "../img/certificates/cyber-sec-bootcamp.png"
import gem1 from "../img/works/gme1.png"
import gem4 from "../img/works/gem4.png"
import vid1 from "../img/vidtube/img1.png"
import vid2 from "../img/vidtube/img2.png"

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Frontend Development Certificate",
    link: "",
    thumbnail: frontend.src,
  },
  {
    title: "Google Cybersecurity Certificate 1",
    link: "",
    thumbnail: cyber1.src,
  },
  {
    title: "Google Cybersecurity Certificate 2",
    link: "",
    thumbnail: cyber2.src,
  },
  {
    title: "Cybersecurity Bootcamp Certificate",
    link: "",
    thumbnail: cberBootCamp.src,
  },
  {
    title: "Frontend Development Certificate",
    link: "",
    thumbnail: frontend.src,
  },
  {
    title: "Gemini Clone",
    link: "gemini-clone-nu-rosy.vercel.app",
    thumbnail: gem1.src,
  },
  
  {
    title: "Google Cybersecurity Certificate 2",
    link: "https://vidtube-frontend-gamma.vercel.app/",
    thumbnail: vid1.src,
  },
  {
    title: "Gemini Clone",
    link: "gemini-clone-nu-rosy.vercel.app",
    thumbnail: gem4.src,
  },
  {
    title: "Frontend Development Certificate",
    link: "https://vidtube-frontend-gamma.vercel.app/",
    thumbnail: vid2.src,
  },
   {
    title: "Gemini Clone",
    link: "gemini-clone-nu-rosy.vercel.app",
    thumbnail: gem1.src,
  },
];

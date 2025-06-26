"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import frontend from "../img/certificates/frontend-dev.png"
import cyber1 from "../img/certificates/Google-cybersec1.png"
import cyber2 from "../img/certificates/Google cybersec-2.png"
import cberBootCamp from "../img/certificates/cyber-sec-bootcamp.png"
import python from "../img/certificates/python.jpg"
import react30 from "../img/certificates/30daysreact.png"
import typeScript from "../img/certificates/typescript.jpeg"
import mogngoDB from "../img/certificates/MongoDB.png"
import JSBootCamp from "../img/certificates/JSBootcamp.png"

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Frontend Development Certificates",
    link: "",
    thumbnail: frontend.src,
  },
  {
    title: "Google Cybersecurity Certificate 1",
    link: "https://www.coursera.org/account/accomplishments/verify/FDTSURRXVGLS?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    thumbnail: cyber1.src,
  },
  {
    title: "Google Cybersecurity Certificate 2",
    link: "https://www.coursera.org/account/accomplishments/verify/6VHYOJEPWFJC?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    thumbnail: cyber2.src,
  },
  {
    title: "Cybersecurity Bootcamp Certificate",
    link: "",
    thumbnail: cberBootCamp.src,
  },
  {
    title: "Frontend Development Certificate",
    link: "https://olympus.mygreatlearning.com/courses/14651/certificate",
    thumbnail: frontend.src,
  },
 
  {
    title: "MongoDB Certificate",
    link: "",
    thumbnail: mogngoDB.src,
  },
  {
    title: "React 30 Days of Code Certificate",
    link: "https://codedamn.com/certificate/verify/b9126e06661c9ca850cb628b80d3a0b8e2a1d254",
    thumbnail: react30.src,
  },
  {
    title: "TypeScript Certificate",  
    link: "https://coursera.org/verify/ARHFLGXFP10B",
    thumbnail: typeScript.src,
  },
  {
    title: "Python Programming Certificate  ",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-347437e1-591d-44e8-9cbd-c97f1db2a6ff.pdf",
    thumbnail: python.src,
  },
   {
    title: "JavaScript Bootcamp Certificate",
    link: "",
    thumbnail: JSBootCamp.src,
  },
];

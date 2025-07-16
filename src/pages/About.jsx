import React, { useEffect, useState } from "react";
import { aboutPageData } from "../data/portfolioData";
import "animate.css"

import {
  ArrowRight,
  SquareCode,
  Server,
  Wrench,
  GraduationCap,
  Briefcase,
  Camera,
  BookOpen,
} from "lucide-react"

const IconMap = {
  ArrowRight,
  SquareCode,
  Server,
  Wrench,
  GraduationCap,
  Briefcase,
  Camera,
  BookOpen,
};

const About = () => {
  const {  title, briefIntro, skills, journey, interests, finalCta } = aboutPageData;
  return (
    <section className="py-16 md:py-24 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 animate__animated animate__fadeInUp">
          {aboutPageData.title}
        </h2>

        {/* Your story */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate__animated animate__fadeInLeft">
            <img
              src={briefIntro.image}
              alt={briefIntro.alt}
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-105"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />  
          </div>

          <div className="w-full lg:pr-28 lg:w-2/3 text-lg leading-relaxed text-center lg:text-left animate__animated animate__fadeInRight">
            <p className="mb-4">{briefIntro.paragraphs}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react'
import { homePageData } from '../data/portfolioData'
import "animate.css"
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <div className="hero pb-18 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:mr-10 lg:justify-end lg:-translate-y-16">
          <img
            className="pt-10 rounded-2xl shadow-2xl w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-105"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
            src={homePageData.image}
            alt={homePageData.name}
          />
        </div>

        {/* profile */}
        <div className="text-center lg:text-left lg:w-2/3 lg:pr-8 ">
          <h4 className="text-5xl text-primary font-semibold mb-2 animate__animated animate__fadeInDown">
            I'm {homePageData.name}
          </h4>
          <h1 className="text-4xl font-bold text-base-content mb-4">
            {homePageData.title}
          </h1>
          <p className="py-4 text-lg text-base-content leading-relaxed text-justify lg:pr-20">
            {homePageData.description}
          </p>

          <div className="mt-4 mb-6 flex flex-row gap-8 items-center">
            <button
              className="btn btn-md shadow-lg btn-primary hover:shadow-xl transition-all duration-300 "
              onClick={() => navigate("/about")}
            >
              <ArrowRight size={20} />
              <span>ABOUT</span>
            </button>

            <button
              className="btn btn-md shadow-lg btn-primary hover:shadow-xl transition-all duration-300 "
              onClick={() => navigate("/project")}
            >
              <ArrowRight size={20} />
              <span>PROJECT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage

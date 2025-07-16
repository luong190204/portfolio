import React from 'react'
import { homePageData } from '../data/portfolioData'

const Homepage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center mr-10 lg:justify-end lg:mb-40">
          <img
            className="max-w-40 lg:max-w-xs rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
            src={homePageData.image}
            alt={homePageData.name}
          />
        </div>

        {/* profile */}
        <div className="text-center lg:text-left lg:w-2/3 lg:pr-8">
          <h4 className='text-3xl text-primary font-semibold mb-2 '>I'am {homePageData.name}</h4>
          <h1 className="text-5xl font-bold text-base-content mb-4">{homePageData.title}</h1>
          <p className="py-4 text-lg text-base-content leading-relaxed text-justify lg:pr-20">{homePageData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage

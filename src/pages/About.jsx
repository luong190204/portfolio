import React, { useEffect, useState } from "react";
import { aboutPageData } from "../data/portfolioData";
import "animate.css"
import { ArrowDown, BookOpen, Camera, Component, GraduationCap, Square, SquareCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate(); 

  const {  title, briefIntro, skills, journey, interests, finalCta } = aboutPageData;
  return (
    <section className="py-16 md:py-24 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <div className="text-center animate__animated animate__fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-extrabold ">{title}</h2>
        </div>

        {/* Personal Information & Statistic Cards */}
        <div className="flex flex-col lg:flex-row gap-12 my-12">
          {/* Personal Info Section */}
          <div className="w-full lg:w-1/2 bg-base-100 p-8 rounded-box shadow-xl animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-base-content mb-6 border-b-2 border-primary pb-2">
              PERSONAL INFORMATION
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
              {briefIntro.personalInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <span className="font-semibold text-base-content pr-2 flex-shrink-0">
                    {info.label}:
                  </span>
                  {info.isLink ? (
                    <a
                      href={
                        info.label === "Email"
                          ? `mailto:${info.value}`
                          : info.value
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-base hover:underline ml-2 break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-base text-base-content/80 ml-2">
                      {info.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* download cv */}
            {briefIntro.downloadCvButton && (
              <div className="mt-8">
                <a
                  href={briefIntro.downloadCvButton.link}
                  download
                  className="btn btn-info btn-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <ArrowDown size="24" />
                  {briefIntro.downloadCvButton.text}
                </a>
              </div>
            )}
          </div>

          {/* Statistic Cards Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 animate__animated animate__fadeInRight lg:pr-28">
            {briefIntro.statisticCards.map((card) => (
              <div
                key={card.id}
                className="card bg-base-100 shadow-xl p-8 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-6xl font-extrabold text-primary mb-2">
                  {card.value}
                  {card.unit}
                </div>
                <div className="text-xl font-semibold text-base-content">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Core Skills */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <div className="text-3xl text-center font-extrabold lg:text-4xl my-10 animate__animated animate__fadeInUp">
            <h3 className="">{skills.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:pr-28">
              {skills.categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`card bg-base-100 shadow-xl p-8 transform transition-transform duration-300 hover:-translate-y-2 animate__animated
                        ${
                          index === 0
                            ? "animate__fadeInLeft"
                            : index === 1
                            ? "animate__fadeInUp"
                            : "animate__fadeInRight"
                        }
                      `}
                >
                  <h4
                    className={`card-title text-base-content mb-6 text-2xl font-semibold border-b pb-3 border-base-content/20 ${category.colorClass}`}
                  >
                    <SquareCode
                      className={`h-8 w-8 mr-3 ${category.colorClass}`}
                    />
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-3 font-normal ">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className={`badge badge-lg ${item.badgeClass} transform transition-transform duration-300 hover:-translate-y-1`}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Journey & Education */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div className="my-10">
            <div className="text-3xl text-center font-extrabold lg:text-4xl my-10 animate__animated animate__fadeInUp">
              <h3>{journey.title}</h3>
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:pr-28">
              {journey.timelineEvents.map((event, index) => {
                return (
                  <li
                    key={event.id}
                    className={`animate__animated animate__fadeInUp animate__delay-${
                      index * 0.2
                    }s`}
                  >
                    {index > 0 && <hr />}
                    <div className="timeline-middle">
                      <Component className={`h-6 w-6 ${event.colorClass}`} />
                    </div>
                    <div
                      className={`timeline-end timeline-box bg-base-100 shadow-xl p-6 mb-10 ${
                        index % 2 === 0 ? "" : "md:timeline-start md:text-end"
                      }`}
                    >
                      <div
                        className={`font-bold text-xl mb-2 ${event.colorClass}`}
                      >
                        {event.title}
                      </div>
                      <div className="text-sm text-base-content/70 mb-3">
                        {event.date}
                      </div>
                      <p className="text-base-content">{event.description}</p>
                    </div>
                    {index < journey.timelineEvents.length - 1 && <hr />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-3xl lg:text-4xl font-bold text-base-content mb-8">
            {finalCta.title}
          </h3>
          <p className="text-lg text-base-content mb-8">{finalCta.paragraph}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {finalCta.buttons.map((button, index) => {
              return (
                <button
                  key={index}
                  onClick={() => navigate(button.link)}
                  className={`btn ${button.styleClass} btn-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Component className="h-6 w-6 mr-2" />
                  {button.text}
                </button>
              );
            })}

            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;

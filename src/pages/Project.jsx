import React, { useState } from 'react'
import { projectPageData } from '../data/portfolioData'
import { ArrowRightToLine, CodeSquare, X } from 'lucide-react';

const Project = () => {
  const { title, description, project } = projectPageData;
  const [selectedProject, setSelectProject] = useState(null);

  return (
    <div className="py-24 md:py-16 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-6 animate__animated animate__fadeInUp">
          {title}
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 animate__animated animate__fadeInUp animate__delay-0-3s">
          {description}
        </p>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:pr-28">
          {project.map((project, index) => (
            <div
              className="card bg-base-200 shadow-xl image-full transform transition-transform duration-300 hover:scale-105 cursor-pointer animate__animated animate__fadeInUp"
              key={project.id}
              onClick={() => setSelectProject(project)}
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body justify-end">
                <h3 className="card-title text-2xl text-white font-bold pb-24">
                  {project.name}
                </h3>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Chi tiết Project (DaisyUI Modal) */}
        {selectedProject && (
          <dialog
            id="project_modal"
            className="modal modal-open"
            onClick={() => setSelectProject(null)}
          >
            <div
              className="modal-box w-11/12 max-w-6xl h-[90vh] p-0 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10 border border-gray-400"
                onClick={() => setSelectProject(null)} // Đóng modal
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Left */}
                <div className="relative flex flex-col items-center justify-center bg-gray-900 p-4 rounded-tl-lg rounded-bl-lg">
                  {selectedProject.screenshots?.length > 0 ? (
                    <div className="carousel w-full h-full rounded-lg overflow-hidden">
                      {selectedProject.screenshots.map((ss, idx) => {
                        const total = selectedProject.screenshots.length;
                        const prevIdx = (idx - 1 + total) % total;
                        const nextIdx = (idx + 1) % total;
                        const slideId = `slide-${selectedProject.id}-${idx}`;
                        const prevSlideId = `slide-${selectedProject.id}-${prevIdx}`;
                        const nextSlideId = `slide-${selectedProject.id}-${nextIdx}`;

                        return (
                          <div
                            key={idx}
                            id={slideId}
                            className="carousel-item relative w-full h-full"
                          >
                            <img
                              src={ss}
                              alt={`Screenshot ${idx + 1} of ${
                                selectedProject.name
                              }`}
                              className="w-full h-full object-contain rounded-lg"
                            />

                            {/* Navigation Buttons */}
                            <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
                              <a
                                href={`#${prevSlideId}`}
                                className="btn btn-circle bg-opacity-50 hover:bg-opacity-70"
                              >
                                ❮
                              </a>
                              <a
                                href={`#${nextSlideId}`}
                                className="btn btn-circle bg-opacity-50 hover:bg-opacity-70"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  )}
                </div>

                {/* Right */}
                <div className="p-8 flex flex-col overflow-y-auto">
                  {/* Thêm overflow-y-auto để cuộn nếu nội dung dài */}
                  <h3 className="font-bold text-3xl mb-4">
                    {selectedProject.name}
                  </h3>
                  <p className="text-lg text-base-content/80 mb-6">
                    {selectedProject.shortDescription}
                  </p>
                  {/* Long Description */}
                  <h4 className="text-xl font-semibold mb-2">
                    About this project:
                  </h4>
                  <p className="mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  {/* Technologies Used */}
                  {selectedProject.technologies?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="badge badge-lg badge-outline badge-primary"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Key Features */}
                  {selectedProject.features &&
                    selectedProject.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">
                          Key Features:
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="text-base-content/90">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {/* Links Demo & GitHub - Nằm ở cuối cột phải, hoặc dưới cùng modal tùy thiết kế */}
                  <div className="mt-auto pt-6 border-t border-base-content/10 flex lg:flex-wrap justify-end gap-4">
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ArrowRightToLine className="h-5 w-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <CodeSquare className="h-5 w-5 mr-2" />
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
}

export default Project

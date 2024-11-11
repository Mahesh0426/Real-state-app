import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCard, setShowCard] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    // console.log("Next Project Index:", currentIndex); // Debug
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
    // console.log("Previous Project Index:", currentIndex); // Debug
  };

  useEffect(() => {
    const updateCardShow = () => {
      if (window.innerWidth >= 1024) {
        setShowCard(projectsData.length);
      } else {
        setShowCard(1);
      }
    };
    updateCardShow();
    window.addEventListener("resize", updateCardShow);
    return () => window.removeEventListener("resize", updateCardShow);
  }, []);
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-2">
        Projects <span className="text-blue-600">Completed</span>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 mt-3"></div>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Shaping Visions, Creating Communities - Explore Our Work
      </p>

      {/* Slide buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          onClick={previousProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slide container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / showCard}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price}{" "}
                    <span className="px-1">{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

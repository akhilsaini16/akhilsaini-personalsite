"use client"

import React, { useEffect, useRef, useState } from "react";
import SlideUp from "./slide-up"
import { FaExternalLinkAlt } from "react-icons/fa";
// import { useScroll } from "@react-three/drei";
import { useScroll, motion, useViewportScroll, useTransform } from "framer-motion";
import { projects, Project } from "./Project_Data/ProjectData";


export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Disable scrolling when in modal
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden"); // Disable scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
    }
  }, [selectedProject]);
  
  return (
    <section id="Projects" className="flex flex-col items-center px-12 py-12 md:pt-16 mx-auto">

          <h1 id = "Projects_header" className="text-center font-bold md:pb-6 text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full sm:w-auto max-w-6xl">
            {projects.map((project, idx) => (
              <div
              key={idx} 
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md 
              transition-transform transform hover:scale-105 hover:bg-gray-700 cursor-pointer
              "
              onClick={() => openModal(project)}
              >
                <p className="text-sm md:text-base font-semibold text-teal-400">{project.category}</p>
                <p className="text-xs md:text-sm text-gray-400">{project.date}</p>
                <h2 className="text-lg md:text-xl font-semibold">{project.name}</h2>
                <p className="text-sm md:text-base text-gray-300">{project.details}</p>
              </div>
            ))}
          </div>
          
          {/* Modal */}
          {selectedProject && (
            <div 
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
              aria-hidden="true"
              onClick={closeModal} // Close when clicking outside
            >
              <div 
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                <button 
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
                  onClick={closeModal}
                >
                  ✕
                </button>
                <h2 className="text-2xl text-gray-500 font-bold mb-4">{selectedProject.name}</h2>
                <p className="text-gray-500">{selectedProject.date}</p>
                <p className="mt-4 text-gray-500">{selectedProject.description}</p>
              </div>
            </div>
          )}

        </section>
      );
    }
    
    {/* <div className="flex flex-col space-y-8">
      {projects.map((project, idx) => {
        return(
          // <SlideUp offset="-300px 0px -300px 0px">
          // <motion.section
          //   key={idx}
          //   style={{
            //     scale,
            //     opacity,
            //     // scale: scrollYProgress,
            //     // opacity: scrollYProgress,
            //   }}
            // >
            // <div>
            <div key={idx} className="bg-[#d1cece] shadow-xl rounded-lg animate-slideUpCubiBezier animation-delay-2 overflow-hidden">
            <div className="flex flex-col md:flex-row">
            <div className=" md:w-1/3">
            <img
                                    src={project.image}
                                    alt=""
                                    // className="rounded-xl shadow-xl"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-2/3 p-4 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold mb-4 text-neutral-600">{project.name}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                </div>
                                <div>
                                {project.link !== "None" && (
                                  <a
                                    href={project.link}
                                    className="text-blue-500 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FaExternalLinkAlt />
                                  </a>
                                )}
                                </div>
                                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                                {project.skills.map((skill, skillIdx) => {
                                    return (
                                    <p
                                        key={skillIdx}
                                        // style={{
                                        //     backgroundImage: 'radial-gradient(100% 100% at 0% 50%, #020617 50%, #DD335C',
                                        // }}
                                        className="px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold bg-[#06141D]"
                                    >
                                        {skill.skill}
                                    </p>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                </div>
                // </div>
        )})}
    
    </div> */}
    {/* </div> */}
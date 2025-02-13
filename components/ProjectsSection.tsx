"use client"

import React, { useEffect, useRef, useState } from "react";
import SlideUp from "./slide-up"
import { FaExternalLinkAlt } from "react-icons/fa";
// import { useScroll } from "@react-three/drei";
import { useScroll, motion, useViewportScroll, useTransform } from "framer-motion";


type Project = {
  category: string;
  name: string;
  description: string;
  date: string;
  details: string;
  skills: { skill: string }[];
  image: string;
  link: string;
};

const projects: Project[] = [
    {
      category: "Data Analytics",
      name: "Similarity Matrix",
      details: "**need to fill in**",
      description: "**need to fill in**",
      date: "2024 - Current",
      image: "/images/SaferLogo.png",
      link: "",
      skills: [
        {skill: ""},
      ],
    },
    {
      category: "Data Analytics",
      name: "Rapid API",
      details: "**need to fill in**",
      description: "**need to fill in**",
      date: "Sept 2024 - Current",
      image: "",
      link: "",
      skills: [
        {skill: ""},
      ],
    },
    {
      category: "Web Development",
      name: "Python Test Case Generator",
      details: "**need to fill in**",
      description: "Created a website using Flask for users to generate test cases for their python code. Integrated OpenAI APIs to generate test cases.",
      date: "November 2024",
      image: "/images/SaferLogo.png",
      link: "",
      skills: [
        {skill: ""},
      ],
    },
    {
      category: "Data Analytics",
      name: "Data Analysis & Visualization",
      details: "**need to fill in**",
      description: "**need to fill in**",
      date: "June 2024 - Current",
      image: "",
      link: "",
      skills: [
        {skill: ""},
      ],
    },
    {
      category: "Mobile App Dev",
      name: "Storm Tracking Application",
      details: "A weather tracking app deployed on the iOS App Store.",
      description: "Built with Flutter and MySQL, this app provides real-time storm tracking and safety alerts. Continously improved a weather tracking application with a professor at UConn. Deployed the application to the IOS app store.",
      date: "2022-2023",
      image: "/images/SaferLogo.png",
      link: "https://apps.apple.com/fi/app/safer-storm-safety/id1631027712",
      skills: [
        {skill: "Flutter"},
        {skill: "Javascript"},
        {skill: "MySQL"},
      ],
    },
    {
      category: "Mobile App Dev",
      name: "Drug Afforability Application",
      details: "A web app that helps users find cheaper drug alternatives.",
      description:
        "A drug affordability web-application that uses a copay algorithm to allow users to find the cheapest drug alternative.",
      date: "Summer 2023",
      image: "/images/drug1.png",
      link: "None",
      skills: [
        {skill: "Next.js"},
        {skill: "Javascript"},
        {skill: "CSS"},
        {skill: "DynamoDB"},
        {skill: "AWS Cognito & Lambdas"},
      ],
    },
    {
        category: "Mobile App Dev",
        name: "Mobile Health Application",
        details: "A habit-tracking Android app for mental and physical health.",
        description:
          "A habit tracking Android application where users create mental and physical health goals to pursue.",
        date: "Summer 2022",
        image: "/images/health.png",
        link: "None",
        skills: [
          {skill: "Kotlin"},
          {skill: "TypeScript"},
          {skill: "DynamoDB"},
          {skill: "AWS API Gateway"},
        ],
      },
  ]


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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {projects.map((project, idx) => (
              <div
              key={idx} 
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md 
              transition-transform transform hover:scale-105 hover:bg-gray-700 cursor-pointer"
              onClick={() => openModal(project)}
              >
                <p className="text-sm font-semibold text-teal-400">{project.category}</p>
                <p className="text-sm text-gray-400">{project.date}</p>
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-300">{project.details}</p>
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
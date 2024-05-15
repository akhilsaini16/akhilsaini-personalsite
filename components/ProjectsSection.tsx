import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@nextui-org/react";
import SlideUp from "./slide-up";

import ProjectCard from "./ProjectCard";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";

const projects = [
    {
      name: "Drug Afforability Application",
      description:
        "A drug affordability web-application that uses a copay algorithm to allow users to find the cheapest drug alternative.",
      image: "/images/drug.png",
      skills: [
        {skill: "Next.js"},
        {skill: "Javascript"},
        {skill: "CSS"},
        {skill: "DynamoDB"},
        {skill: "AWS Cognito & Lambdas"},
      ],
    },
    {
        name: "Mobile Health Application",
        description:
          "A habit tracking Android application where users create mental and physical health goals to pursue.",
        image: "/images/drug.png",
        skills: [
          {skill: "Kotlin"},
          {skill: "TypeScript"},
          {skill: "DynamoDB"},
          {skill: "AWS API Gateway"},
        ],
      },
  ]


export default function ProjectsSection() {
    return (
        <section id="Projects">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
    
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return(
                        <div className="lg:px-40">
                        {/* <div> */}
                            {/* <Card > */}
                            {/* <SlideUp offset="-300px 0px -300px 0px"> */}
                            <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                <div className=" md:w-1/2">
                                    <Image
                                        src="/images/drug.png"
                                        alt=""
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                {/* <Card> */}
                                <div className="px-10 mt-8 md:w-1/2">
                                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                                    {project.skills.map((item, idx) => {
                                        return (
                                        <p
                                            key={idx}
                                            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                        >
                                            {item.skill}
                                        </p>
                                        )
                                    })}
                                    </div>
                                </div>
                                {/* </Card> */}
                            </div>
                            {/* </SlideUp> */}
                        {/* </Card> */}
                        </div>
                )})}
            
            </div>
            </div>
        </section>
      )
    }

//     return(
//         <div className="place-self-center" id="Projects">
//         <h1 className="text-center text-5xl mb-20 mt-24">My Projects</h1>
//         <Card className="place-self-center bg-slate-400 text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[800px]">
            

//             <CardHeader>
//                 <h1 className="text-2xl mb-10">Drug Affordability Application</h1>
//             </CardHeader>
//             <CardBody>
//                 <p>Built a drug affordability web-application using a copay algorithm to allow users to find the cheapest drug alternative. Used AWS to configure the backend.</p>
//             </CardBody>
//             <CardFooter>
//                 <a className="bg-opacity-20 bg-black">
//                     Skills Coming
//                 </a>
//             </CardFooter>
//         </Card>

//         <Card className="place-self-center bg-slate-400 text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
//             <CardHeader>
//                 <h1 className="text-2xl mb-10">Mobile Health Application</h1>
//             </CardHeader>
//             <CardBody>
//                 <p>Built a habit tracking Android application where users create mental and physical health goals to pursue</p>
//             </CardBody>
//             <CardFooter>
//                 <a className="bg-opacity-20 bg-black">
//                     Skills Coming
//                 </a>
//             </CardFooter>
//         </Card>

//         <Card className="place-self-center bg-slate-400 text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
//             <CardHeader>
//                 <h1 className="text-2xl mb-10">Wordle Application</h1>
//             </CardHeader>
//             <CardBody>
//                 <p>Used React.js to create a web application which simulates a replica of the famous New York Times wordle game.</p>
//             </CardBody>
//             <CardFooter>
//                 <a className="bg-opacity-20 bg-black">
//                     Skills Coming
//                 </a>
//             </CardFooter>
//         </Card>

//         <Card className="place-self-center text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
//             <CardHeader>
//                 <h1 className="text-2xl">Personal Site</h1>
//             </CardHeader>
//             <CardBody>
//                 <p>This website</p>
//             </CardBody>
//             <CardFooter>
//                 <p>Footer</p>
//             </CardFooter>
//         </Card>
//         </div>
//     )

// }
// //     return (
// //         <>
// //             <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
// //                 My Projects
// //             </h2>
// //             <div className="grid gap-8 md:gap-12">
// //                 {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl="/images/background.png" />)}
// //             </div>
// //         </>
// //     );
// //   }
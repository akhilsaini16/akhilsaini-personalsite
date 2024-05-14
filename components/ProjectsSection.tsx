import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Full Stack Developer",
        description: "AWS Cool Project",
        tag: ["Web"],
    },
    {
        id: 2,
        title: "Front Stack Developer",
        description: "AWS bad Project",
        tag: ["Web"],
    }
]


export default function ProjectsSection() {
    return(
        <div className="place-self-center" id="Projects">
        <h1 className="text-center text-5xl mb-20 mt-24">My Projects</h1>
        <Card className="place-self-center bg-slate-400 text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
            <CardHeader>
                <h1 className="text-2xl mb-10">Drug Affordability Application</h1>
            </CardHeader>
            <CardBody>
                <p>Built a drug affordability web-application using a copay algorithm to allow users to find the cheapest drug alternative. Used AWS to configure the backend.</p>
            </CardBody>
            <CardFooter>
                <a className="bg-opacity-20 bg-black">
                    Skills Coming
                </a>
            </CardFooter>
        </Card>

        <Card className="place-self-center bg-slate-400 text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
            <CardHeader>
                <h1 className="text-2xl mb-10">Mobile Health Application</h1>
            </CardHeader>
            <CardBody>
                <p>Built a habit tracking Android application where users create mental and physical health goals to pursue</p>
            </CardBody>
            <CardFooter>
                <a className="bg-opacity-20 bg-black">
                    Skills Coming
                </a>
            </CardFooter>
        </Card>

        <Card className="place-self-center bg-slate-400 text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
            <CardHeader>
                <h1 className="text-2xl mb-10">Wordle Application</h1>
            </CardHeader>
            <CardBody>
                <p>Used React.js to create a web application which simulates a replica of the famous New York Times wordle game.</p>
            </CardBody>
            <CardFooter>
                <a className="bg-opacity-20 bg-black">
                    Skills Coming
                </a>
            </CardFooter>
        </Card>

        <Card className="place-self-center text-center font-bold text-black mt-4 mb-8 md:mb-12 h-[400px] w-[400px]">
            <CardHeader>
                <h1 className="text-2xl">Personal Site</h1>
            </CardHeader>
            <CardBody>
                <p>This website</p>
            </CardBody>
            <CardFooter>
                <p>Footer</p>
            </CardFooter>
        </Card>
        </div>
    )

}
//     return (
//         <>
//             <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//                 My Projects
//             </h2>
//             <div className="grid gap-8 md:gap-12">
//                 {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl="/images/background.png" />)}
//             </div>
//         </>
//     );
//   }
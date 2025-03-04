import Link from "next/link"
import SlideUp from "./slide-up"
import { HiArrowDown, HiDownload } from "react-icons/hi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Languages = [
    {skill: "Python"},
    {skill: "Java"},
    {skill: "R"},
    {skill: "C"},
    {skill: "C++"},
    {skill: "SQL"},
    {skill: "TypeScript"},
    {skill: "JavaScript"},
]
const Development = [
  {skill: "Node.js"},
  {skill: "RestAPI"},
  {skill: "Flutter"},
  {skill: "HTML"},
  {skill: "CSS"},
  {skill: "React"},
  {skill: "Next.js"},
  {skill: "Vercel"},
]

const InfrastructureAndDevOps = [
  {skill: "Docker"},
  {skill: "AWS Cloud Technologies"},
  {skill: "CI/CD"},
  {skill: "Kubernetes"},
  {skill: "Git"},
  {skill: "GitHub"},
  {skill: "GitHub Actions"},
]
// const skills = [
//   {skill: "Python"},
//   {skill: "Java"},
//   {skill: "R"},
//   {skill: "C"},
//   {skill: "C++"},
//   {skill: "Node.js"},
//   {skill: "Docker"},
//   {skill: "AWS Cloud Technologies"},
//   {skill: "RestAPI"},
//   {skill: "Flutter"},
//   {skill: "UI Path"},
//   {skill: "CI/CD"},
//   {skill: "Kubernetes"},
//   {skill: "SQL"},
//   {skill: "HTML"},
//   {skill: "CSS"},
//   {skill: "Git"},
//   {skill: "GitHub"},
//   {skill: "React"},
//   {skill: "Next.js"},
//   {skill: "TypeScript"},
//   {skill: "JavaScript"},
// ]

export default function About() {
    return (
        <section id="About">
          
          <div className="px-12 py-12 md:pt-16 mx-auto">
          <div id="links" className="lg:mt-0 mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pb-12">
                    <a className="group inline-flex gap-1.5 items-center text-lg sm:text-xl rounded-xl px-4 py-3
                    bg-opacity-20 hover:bg-opacity-30 bg-white text-black transition-transform
                    hover:scale-105 active:scale-95"
                        style={{
                            backgroundImage: 'radial-gradient(1000% 100% at 50% 50%, #0077B5, #333333',
                        }}
                    href ="https://www.linkedin.com/in/akhil-saini-cs" target="_blank"
                    >
                        <FaLinkedin />
                        Linkedin
                    </a>

                    <a className="group inline-flex gap-1.5 items-center text-lg sm:text-xl rounded-xl px-4 py-3
                    bg-opacity-20 hover:bg-opacity-30 bg-white text-black transition-transform
                    hover:scale-105 active:scale-95"
                        style={{
                            backgroundImage: 'radial-gradient(100% 100% at 50% 50%, #8B949E, #C9D1D9',
                            // backgroundImage: 'radial-gradient(100% 100% at 0% 50%, #0077B5 50%, #0077B5',
                        }}
                    href ="https://github.com/akhilsaini16" target="_blank"
                    >
                        <FaGithub />
                        Github
                    </a>

                    <a className="group inline-flex gap-1.5 items-center text-lg sm:text-xl rounded-xl px-4 py-3
                    bg-opacity-20 hover:bg-opacity-30 bg-white text-black transition-transform
                    hover:scale-105 active:scale-95"
                    href="/images/Akhil_Resume_(11:21).pdf"
                    download="Akhil_Saini_Resume.pdf"
                    >
                        <HiDownload />
                        Resume
                    </a>
                </div>
            <h1 className="text-center font-bold text-4xl">
              About Me
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
    
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
              <div id="Get to know me" className="md:w-1/2 ">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                  Get to know me!
                </h1>

                <p>
                  Hi, my name is Akhil and I am a{" "}
                  <span className="font-bold">{"highly ambitious"}</span>,
                  <span className="font-bold">{" self-motivated"}</span>, and
                  <span className="font-bold">{" driven"}</span> software engineer.
                </p>
                <br />
                <p>
                  I am a 2024 graduate from the University of Connecicut, with a BS in
                  Computer Science, with a concentration in {" "}
                  <span className="font-bold">{"Computational Data Analytics"}</span>.
                </p>
                <br />
                <p>
                Through my education, work experience, and personal projects, 
                I have discovered a great interest for software engineering, 
                data analytics, AI/ML, and especially cloud computing. 
                I am very well versed with AWS and have 
                utilized many resources from AWS in my experience.
                </p>
                <br />
                <p>
                  I am continously learning new skills, and working on new projects.
                  I have a passion for technology and am excited to see where
                  my career takes me. I am always open to new opportunities.
                </p>

              </div>

              <div id="Skills" className="text-center md:w-1/2 md:text-left">
                <h1 className="text-2xl font-bold mb-6">Skills</h1>
                  <div>
                    <div className="mb-6">
                      <h1 className="text-xl font-bold">Languages</h1>
                      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {Languages.map((item, idx) => {
                          return (
                            <p
                              key={idx}
                              className="bg-gray-800 text-gray-200 px-4 py-2 mr-2 mt-2 rounded-lg"
                            >
                              {item.skill}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h1 className="text-xl font-bold">Development</h1>
                      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {Development.map((item, idx) => {
                          return (
                            <p
                              key={idx}
                              className="bg-gray-800 text-gray-200 px-4 py-2 mr-2 mt-2 rounded-lg"
                            >
                              {item.skill}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h1 className="text-xl font-bold">Infrastructure and DevOps</h1>
                      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {InfrastructureAndDevOps.map((item, idx) => {
                          return (
                            <p
                              key={idx}
                              className="bg-gray-800 text-gray-200 px-4 py-2 mr-2 mt-2 rounded-lg"
                            >
                              {item.skill}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="pb-2 flex flex-row justify-center">
                <Link
                    href={"#Projects"}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
      )
  }

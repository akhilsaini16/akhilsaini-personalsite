"use client"
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Intro() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-20 text:4xl lg:text-6xl">
                        Akhil Saini</h1>
                    <p className="text-[#ADB7BE] text-4xl">
                        I am a University of Connecticut Graduate with a bachelors degree in 
                        Computer Science, concentrated on Data Analytics.
                    </p>
                </div>
            
                <div className="relative col-span-5">
                    <Image 
                        src="/images/SelfPicture.png"
                        alt="intro picture"
                        width={600}
                        height={600}
                    />
                </div>
            
            
                <div className="flex col-span-7">
                    <a className="group inline-flex gap-1.5 items-center text-xl rounded-xl px-4 py-3 bg-opacity-20 hover:bg-opacity-30 mr-4 bg-white text-black transition-transform hover:scale-105"
                    href ="https://www.linkedin.com/in/akhil-saini-cs" target="_blank"
                    >
                        <FaLinkedin />
                        Linkedin
                    </a>

                    <a className="group inline-flex gap-1.5 items-center text-xl rounded-xl px-4 py-3 bg-opacity-20 hover:bg-opacity-30 mr-4 bg-white text-black transition-transform hover:scale-105"
                    href ="https://github.com/akhilsaini16" target="_blank"
                    >
                        <FaGithub />
                        Github
                    </a>

                    <a className="group inline-flex gap-1.5 items-center text-xl rounded-xl px-4 py-3 bg-opacity-20 hover:bg-opacity-30 mr-4 bg-white text-black transition-transform hover:scale-105"
                    href ="https://www.linkedin.com/in/akhil-saini-cs" target="_blank"
                    >
                        <HiDownload />
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
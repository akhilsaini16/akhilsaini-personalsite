"use client"
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
    return (
        <section
            id="Intro"
            // style={{
            //     backgroundImage: 'radial-gradient(100% 100% at 0% 50%, #020617 50%, #DD335C',
            //     // backgroundImage: 'radial-gradient(100% 100% at 50% 50%, #020617 50%, #DD335C',
            //     // height: '85vh'
            // }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-20">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white relative flex mb-20 text:4xl lg:text-6xl">
                        Akhil Saini</h1>
                    <p className="text-[#ADB7BE] text-4xl relative flex">
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
                        className="rounded-xl"
                    />
                </div>
            
            
                <div className="flex col-start-1 col-span-7 md:mt-0 mt-10">
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
            <div className="flex flex-row justify-center">
                <Link
                    href={"#About"}
                    // activeClass="active"
                    // spy={true}
                    // smooth ={true}
                    // offset={-100}
                    // duration ={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>

            </div>
        </section>
    );
}
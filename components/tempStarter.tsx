"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";

export default function MountainView() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return(
        <div
            ref ={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `url(/images/Group1.png)`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: backgroundY,
                }}
            >
            <section id="Intro">
            <div className="flex-col text-center items-center justify-center animate-fadeIn animation-delay-4 py-16 sm:py-32 md:py-44 md:flex-row md:text-left grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 lg:pl-32">
                    <h1 className="text-white text-4xl lg:pb-10 pb-5 font-bold mt-6 md:mt-0 md:text-7xl">
                        Akhil Saini</h1>
                    <p className="text-[#ADB7BE] text-4xl relative flex lg:pb-0 pb-5">
                        Aspiring Software Engineer/Data Engineer
                    </p>
                </div>
                <div className="relative col-span-5">
                    <Image
                        src="/images/SelfPicture.png"
                        alt="intro picture"
                        width={600}
                        height={600}
                        className="rounded-full shadow-2xl"
                    />
                </div>
            
            
                <div className="flex col-start-1 col-span-7 lg:mt-0 mt-10 lg:pl-32">
                    <a className="group inline-flex gap-1.5 items-center text-xl rounded-xl px-4 py-3 bg-opacity-20 hover:bg-opacity-30 mr-4 bg-white text-black transition-transform hover:scale-105"
                        style={{
                            backgroundImage: 'radial-gradient(1000% 100% at 50% 50%, #0077B5, #333333',
                        }}
                    href ="https://www.linkedin.com/in/akhil-saini-cs" target="_blank"
                    >
                        <FaLinkedin />
                        Linkedin
                    </a>

                    <a className="group inline-flex gap-1.5 items-center text-xl rounded-xl px-4 py-3 bg-opacity-20 hover:bg-opacity-30 mr-4 bg-white text-black transition-transform hover:scale-105"
                        style={{
                            backgroundImage: 'radial-gradient(100% 100% at 50% 50%, #8B949E, #C9D1D9',
                            // backgroundImage: 'radial-gradient(100% 100% at 0% 50%, #0077B5 50%, #0077B5',
                        }}
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
            </motion.div>
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/images/Group2.png)`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                }}
            />

        </div>
    )
}
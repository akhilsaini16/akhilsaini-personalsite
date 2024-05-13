import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <section className="place-self-center">
            <h1 className="text-white mb-20 text-6xl text-center">
                Akhil Saini</h1>
            <p className="text-[#ADB7BE] text-4xl mb-10 text-center">
                I am a University of Connecticut Graduate <br></br> with a bachelors degree in 
                Computer Science, <br></br>concentrated on Data Analytics.
            </p>
            
            <div className="flex justify-center gap-4">
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
        </section>
    );
}
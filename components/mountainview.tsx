"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { HiArrowDown } from "react-icons/hi";

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
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-white text-7xl md:text-9xl relative z-10"
            >
                AKHIL SAINI
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `url(/images/Group1.png)`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: backgroundY,
                }}
            />
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
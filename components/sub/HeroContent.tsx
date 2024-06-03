"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 mt-15 w-full z-[20]"
    >
      <div 
      // className="h-full w-full flex flex-col  justify-center m-auto text-start"
      >
        <motion.div
          variants={slideInFromTop}
          // className="Welcome-box "
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          <Image
            src="/feather.png"
            alt="work icons"
            height={150}
            width={250}
            style={{ transform: 'rotate(29deg)'}}
          />
          <motion.a
            variants={slideInFromLeft(0.5)}
            className="py-1 button-primary text-center text-white cursor-pointer mr-[20px] px-[30px] py-[15px] rounded-full text-gray-200 rounded-lg max-w-[700px]"
            href="https://gloriaflavien.netlify.app" 
          >
              Switch to CLI Portfolio
          </motion.a>

        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.2)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey, I&apos;m
              <Image
                src="/logo.png"
                alt="work icons"
                height={150}
                width={250}
              />
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-700">
              {" "}
              Full Stack Developper{" "}
            </span>
            and an<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-700">
              {" "}
               Event Organizer{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.3)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a versatile IT professional comfortable with both front-end and back-end development. My strength lies in efficiently solving problems, as well as being adaptable in project management and design. My passion for technology drives me to constantly seek new ways to innovate and create effective solutions to meet my clients needs.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(0.5)}
          className="py-1 button-primary text-center text-white cursor-pointer mr-[20px] px-[30px] py-[15px] rounded-full text-gray-200 rounded-lg max-w-[700px]"
          href="https://drive.google.com/file/d/1Y0gzoGKeHJkvvSkJY-6nBosmC5Vghhku/view?usp=sharing" 
        >
            Get my CV here 
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        // className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/me.png"
          alt="work icons"
          height={500}
          width={500}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

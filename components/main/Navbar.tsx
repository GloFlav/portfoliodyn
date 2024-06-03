import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#CCA300]/50 bg-[#E5C10017] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={170}
            height={170}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hello world !!!
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#ffffff61] bg-[#0000005e] mr-[20px] px-[30px] py-[15px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#experiences" className="cursor-pointer">
              Experiences
            </a>
          </div>
        </div>

          {Socials.map((social, index) => (
          <div key={index} className="flex flex-row gap-2 py-2 button-primary text-center text-white cursor-pointer mr-[20px] px-[30px] py-[15px] rounded-full text-gray-200 rounded-lg max-w-[200px]">
          <a /*key={social.name} */
              href={social.href} > <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />  </a>
          
        </div>    
          ))}
      </div>
    </div>
  );
};

export default Navbar;

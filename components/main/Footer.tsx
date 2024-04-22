import React from "react";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaGithub />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaFacebook />
                        <span className="text-[15px] ml-[6px]">Facebook</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">rasgloflav@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                 My Portfolio Dynamic [Version 1.0.0] Andry Sambatra Gloria Flavien RANDRIAMBOLOLONA &copy; Not a Corporation.
            </div>
        </div>
    </div>
  )
}

export default Footer
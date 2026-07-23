"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { COLLAB_URL } from "@/constants";

const CV_LINK =
  "https://drive.google.com/file/d/1Y0gzoGKeHJkvvSkJY-6nBosmC5Vghhku/view?usp=sharing";
const CLI_PORTFOLIO = "https://gloriaflavien.netlify.app";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-20 pt-32 md:flex-row md:items-center md:gap-16 md:px-10 md:pt-40"
    >
      {/* Left column — text + CTAs */}
      <div className="flex w-full flex-col gap-6 md:w-3/5">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-3 py-1"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-yellow-300">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.2)}
          className="text-4xl font-bold leading-[1.05] text-white md:text-6xl"
        >
          Hey, I&apos;m <span className="text-white">Flavien</span>.
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            Full-stack developer
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            event organizer
          </span>
          .
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.3)}
          className="max-w-[560px] text-base leading-relaxed text-gray-400 md:text-lg"
        >
          I ship web products end to end — from architecture to pixel-perfect
          front-ends — and design tech events on the side. Comfortable with
          both back and front, and equally at ease shipping code or holding a
          mic on stage.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <a
            href={COLLAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_15px_40px_-15px_rgba(255,212,0,0.6)] transition hover:brightness-110"
          >
            Let&apos;s collaborate
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </a>
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-100 transition hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:text-yellow-200"
          >
            Download CV
          </a>
          <a
            href={CLI_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gray-500 transition hover:text-yellow-300"
          >
            Switch to CLI portfolio →
          </a>
        </motion.div>
      </div>

      {/* Right column — portrait */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="relative flex w-full justify-center md:w-2/5"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
          <div className="mx-auto h-[380px] w-[380px] rounded-full bg-yellow-500/20" />
        </div>
        <Image
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/me.png"
          alt="Flavien portrait"
          width={500}
          height={500}
          priority
          className="h-auto w-full max-w-[440px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

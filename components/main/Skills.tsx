import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

// GH Pages sert le portfolio sous /portfoliodyn — <video> hors <Image>
// n'a pas de basePath auto, on l'ajoute à la main pour la prod.
const basePath =
  process.env.NODE_ENV === "production" ? "/portfoliodyn" : "";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-8 flex w-full flex-col items-center gap-3 text-center md:mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-yellow-400">
          03 / Tooling
        </p>
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          The{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            stack
          </span>{" "}
          behind the work.
        </h2>
      </div>

      <SkillText />

      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="mt-2 flex flex-row flex-wrap items-center justify-center gap-3">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="mt-2 flex flex-row flex-wrap items-center justify-center gap-3">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20">
        <video
          className="h-auto w-full"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
          src={`${basePath}/skills.mp4`}
        />
      </div>
    </section>
  );
};

export default Skills;

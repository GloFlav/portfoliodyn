import React from "react";
import ProjectCard from "../sub/ProjectCard";

const PROJECTS = [
  {
    src: "/apiqa-cover.png",
    title: "APIQA — refonte de site créatif",
    description:
      "Proposition externe de refonte pour APIQA (agence de communication à Antananarivo). Direction éditoriale, glass morphism, animations GSAP.",
    tag: "Web · Refonte",
    year: "2026",
    link: "https://gloflav.github.io/apiqa-refonte-demo/",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/portfolioCli.PNG",
    title: "CLI Portfolio",
    description:
      "Portfolio interactif imitant une ligne de commande : histoire de l'auteur explorée à travers de vraies commandes shell.",
    tag: "Web · Portfolio",
    year: "2024",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/portfolioDyn.PNG",
    title: "Dynamic Web Portfolio",
    description:
      "Portfolio dynamique Next.js — animations Framer Motion, WebGL background, sections About / Projects / Skills.",
    tag: "Web · Next.js",
    year: "2024",
    link: "https://gloflav.github.io/portfoliodyn/",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/tasksheduling.PNG",
    title: "Task Scheduling",
    description:
      "App web démontrant l'ordonnancement optimal de tâches (méthode tableau + graphe). Pondération par durée ou difficulté.",
    tag: "Algo · Web",
    year: "2023",
    link: "https://gloriaflavien.netlify.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-12 flex flex-col gap-3 md:mb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-yellow-400">
          01 / Selected work
        </p>
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Projects that{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            shipped
          </span>
          .
        </h2>
        <p className="max-w-xl text-base text-gray-400">
          Recent builds — real code, real users, real deadlines. Click any card
          to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

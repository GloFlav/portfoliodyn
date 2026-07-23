import React from "react";
import ProjectCard from "../sub/ProjectCard";

const EXPERIENCES = [
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/idea.jpg",
    title: "IDEA Academy Ambassador",
    description:
      "Ambassador for IDEA Academy — connecting students and the academy's programs.",
    year: "2024",
    tag: "Ambassador",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/hotesse.png",
    title: "Founder — ENI Hôtesse",
    description:
      "Founded ENI Hôtesse, a talent management initiative for events at the school.",
    year: "2024",
    tag: "Founder",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/Eni.png",
    title: "ENI Novice Immersion",
    description:
      "Founder & organizer of ENI Novice Immersion — a tech event welcoming new students to the industry.",
    year: "2024",
    tag: "Tech event",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/40eme.png",
    title: "40th anniversary of ENI",
    description:
      "Organizer of the closing ceremony of the 40th anniversary of ENI.",
    year: "2024",
    tag: "Ceremony",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/AEENI.jpg",
    title: "President of ENI Students Association",
    description:
      "Elected president of AEENI — represented students, ran budget, coordinated events.",
    year: "2023 – 2024",
    tag: "Leadership",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/MirayTournament.jpg",
    title: "Miray Tournament",
    description:
      "Founder & organizer of the Miray Tournament — inter-school sport event.",
    year: "2023",
    tag: "Sport event",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/hackIT.jpg",
    title: "Hack-IT Hackathon",
    description:
      "Co-founder & co-organizer of Hack-IT — Madagascar's student hackathon.",
    year: "2023",
    tag: "Hackathon",
    link: "https://gloriaflavien.netlify.app",
  },
  {
    src: "https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/BachelorIT.jpg",
    title: "Bachelor IT",
    description:
      "Founder & organizer of Bachelor IT — tech event and forum for undergraduates.",
    year: "2023",
    tag: "Tech forum",
    link: "https://gloriaflavien.netlify.app",
  },
];

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-12 flex flex-col gap-3 md:mb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-yellow-400">
          02 / Experience
        </p>
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Where I&apos;ve been —{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            what I&apos;ve built
          </span>
          .
        </h2>
        <p className="max-w-xl text-base text-gray-400">
          Beyond code : leadership, tech events, and community building.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCES.map((e) => (
          <ProjectCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;

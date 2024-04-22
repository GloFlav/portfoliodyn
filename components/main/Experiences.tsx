import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Experiences = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="experiences"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-300 py-20">
        Some of my eXperiences
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/AEENI.jpg"
          title="2024"
          description="President of ENI Students Association"
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/idea.jpg"
          title="2024"
          link="gloriaflavien.netlify.app"
          description="IDEA Academy Embassador"
        />
        <ProjectCard
          src="/hotesse.png"
          title="2024"
          description="Founder of ENI Hôtesse "
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/Eni.png"
          title="2024"
          description=" Founder and Organizer of ENI Novice Immersion (Tech Event)"
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/40eme.png"
          title="2024"
          description=" Organizer of the closing ceremony of the 40th anniversary of ENI"
          link="gloriaflavien.netlify.app"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/AEENI.jpg"
          title="2023"
          description="President of ENI Students Association"
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/MirayTournament.jpg"
          title="2023"
          description=" Founder and Organizer of Miray Tournament (sport event)"
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/hackIT.jpg"
          title="2023"
          description=" Cofounder and CO-Organizer of Hack-It Hackathon"
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/BachelorIT.jpg"
          title="2023"
          description=" Founder and Organizer of Bachelor IT (Tech Event and Forum )"
          link="gloriaflavien.netlify.app"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/feather.png"
          title="2022"
          description="Designer and developper at ONN (Intern)"
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="/feather.png"
          title="2022"
          link="gloriaflavien.netlify.app"
          description="Designer and developper at CIDST (Intern) "
        />
        <ProjectCard
          src="/feather.png"
          title="2022"
          link="https://www.gloriaflavien.netlify.app"
          description=" Designer and developper at Maison de la Communication Universitaire (Intern)"
        />
        <ProjectCard
          src="/feather.png"
          title="2022"
          description=" Organizer of 'Salon de l'étudiant et de l'emploi 3rd edition'"
          link="gloriaflavien.netlify.app"
        />
      </div>
    </div>
  );
};

export default Experiences;

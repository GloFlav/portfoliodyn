import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-300 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/PortfolioCli.PNG"
          title="PortFolio Command Line Interface"
          description="A Portfolio CLI form to know about the autor and imitate a command line in our exploitation system."
          link="https://gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/PortfolioDyn.PNG"
          title="Interactive Website Portfolio"
          description="A dynamic portfolio."
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/feather.png"
          title="Task Scheduling"
          description="Litle program to order and schedule task with their weight (duration or difficulty). A Web application demonstrating the best scheduling of tasks using the table and graph method."
          link="gloriaflavien.netlify.app"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/PortfolioCli.png"
          title="ONN Float board"
          description="A web application, focused on GIS, to manage the movements of automobile fleets at ONN (National Office of Nutrition) in Anosy, Antananarivo."
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/feather.png"
          title="ENI Time Table schedule"
          description="A web application to automate the creation of the ENI timetable, considering the availability of teachers and the capacity of classrooms."
          link="gloriaflavien.netlify.app"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/feather.png"
          title="ONN Stock board"
          description="A web application for the logistics management of ONN."
          link="gloriaflavien.netlify.app"
        />
      </div>
    </div>
  );
};

export default Projects;

import React, { useEffect } from "react";
import elecom1 from "../images/projects/elecommHomeDesktop.jpg";
import elecom2 from "../images/projects/elecommLaptopsDesktop.jpg";
import elecom3 from "../images/projects/elecommSingleDesktop.jpg";
import ttt1 from "../images/projects/tttLoginDesktop.jpg";
import ttt2 from "../images/projects/tttMenuDesktop.jpg";
import ttt3 from "../images/projects/tttGameDesktop.jpg";
import saltCity1 from "../images/projects/saltcity-1.png";
import saltCity2 from "../images/projects/saltcity-2.png";
import saltCity3 from "../images/projects/saltcity-3.png";
import saltCity4 from "../images/projects/saltcity-4.png";
import saltCity5 from "../images/projects/saltcity-5.png";
import saltCity6 from "../images/projects/saltcity-6.png";
import Gallery from "./Gallery";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const elecomPhotos = [
  { src: elecom1, alt: "Project photo" },
  { src: elecom2, alt: "Project photo" },
  { src: elecom3, alt: "Project photo" },
];
const superTTTphotos = [
  { src: ttt1, alt: "Project photo" },
  { src: ttt2, alt: "Project photo" },
  { src: ttt3, alt: "Project photo" },
];
const saltCityPhotos = [
  { src: saltCity1, alt: "Project photo" },
  { src: saltCity2, alt: "Project photo" },
  { src: saltCity3, alt: "Project photo" },
  { src: saltCity4, alt: "Project photo" },
  { src: saltCity5, alt: "Project photo" },
  { src: saltCity6, alt: "Project photo" },
];

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Elecom - e-commerce website",
      description:
        "An e-commerce website with login system, cart, wishlist, reviews and filters",
      photos: elecomPhotos,
      sourceUrl: "https://github.com/OmarCorbic/Electronics-E-commerce",
      demoUrl: "#",
    },
    {
      id: 1,
      title: "Super TicTacToe",
      description:
        "An online browser game where you can play normal TicTacToe, or Super one that adds another layer",
      photos: superTTTphotos,
      sourceUrl: "https://github.com/OmarCorbic/Super-TicTacToe-Online-Game",
      demoUrl: "#",
    },
    {
      id: 2,
      title: "Salt City Systems Website",
      description: "A static website for web design & development agency",
      photos: saltCityPhotos,
      sourceUrl: "https://github.com/OmarCorbic/Salt-City-Systems-Website",
      demoUrl: "https://saltcitysystems.com",
    },
  ];
  return (
    <section className="" id="projectsSection">
      <SectionTitle text="MY PROJECTS" />
      <div className="flex flex-col gap-16 lg:px-10 items-center">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

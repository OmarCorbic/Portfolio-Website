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

import newsletter1 from "../images/projects/newsletter-1.png";
import newsletter2 from "../images/projects/newsletter-2.png";
import newsletter3 from "../images/projects/newsletter-3.png";
import newsletter4 from "../images/projects/newsletter-4.png";
import newsletter5 from "../images/projects/newsletter-5.png";

import kartonaza1 from "../images/projects/kartonaza-1.png";
import kartonaza2 from "../images/projects/kartonaza-2.png";
import kartonaza3 from "../images/projects/kartonaza-3.png";
import kartonaza4 from "../images/projects/kartonaza-4.png";
import kartonaza5 from "../images/projects/kartonaza-5.png";
import kartonaza6 from "../images/projects/kartonaza-6.png";
import kartonaza7 from "../images/projects/kartonaza-7.png";
import kartonaza8 from "../images/projects/kartonaza-8.png";

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

const newsletterPhotos = [
  { src: newsletter1, alt: "Project photo" },
  { src: newsletter2, alt: "Project photo" },
  { src: newsletter3, alt: "Project photo" },
  { src: newsletter4, alt: "Project photo" },
  { src: newsletter5, alt: "Project photo" },
];

const kartonazaPhotos = [
  { src: kartonaza1, alt: "Project photo" },
  { src: kartonaza2, alt: "Project photo" },
  { src: kartonaza3, alt: "Project photo" },
  { src: kartonaza4, alt: "Project photo" },
  { src: kartonaza5, alt: "Project photo" },
  { src: kartonaza6, alt: "Project photo" },
  { src: kartonaza7, alt: "Project photo" },
  { src: kartonaza8, alt: "Project photo" },
];

const Projects = () => {
  const projects = [
    {
      title: "Newsletter CMS web application",
      description:
        "Web application for managing newsletter e-email templates and clients and sending newsletter",
      photos: newsletterPhotos,
      sourceUrl: "https://github.com/OmarCorbic/newsletter-cms",
      demoUrl: "#",
    },
    {
      title: "Kartonaza FRIC d.o.o. - Small business website",
      description: "4 page website for a small business",
      photos: kartonazaPhotos,
      sourceUrl: "#",
      demoUrl: "https://kartonaza.ba",
    },
    {
      title: "Elecom - e-commerce website",
      description:
        "An e-commerce website with login system, cart, wishlist, reviews and filters",
      photos: elecomPhotos,
      sourceUrl: "https://github.com/OmarCorbic/Electronics-E-commerce",
      demoUrl: "#",
    },
    {
      title: "Super TicTacToe",
      description:
        "An online browser game where you can play normal TicTacToe, or Super one that adds another layer",
      photos: superTTTphotos,
      sourceUrl: "https://github.com/OmarCorbic/Super-TicTacToe-Online-Game",
      demoUrl: "https://super-tictactoe-online-game.onrender.com",
    },
    {
      title: "Salt City Systems Website",
      description: "A static website for web design & development agency",
      photos: saltCityPhotos,
      sourceUrl: "https://github.com/OmarCorbic/Salt-City-Systems-Website",
      demoUrl: "https://saltcitysystems.com",
    },
  ];
  return (
    <section className="lg:px-[8%]" id="projectsSection">
      <SectionTitle text="MY PROJECTS" />
      <div className="flex flex-col gap-16 lg:px-10 items-center">
        {projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

import qhrsWebStore1 from "../images/projects/qhrsWebStore1.png";
import qhrsWebStore2 from "../images/projects/qhrsWebStore2.png";
import qhrsWebStore3 from "../images/projects/qhrsWebStore3.png";
import qhrsWebStore4 from "../images/projects/qhrsWebStore4.png";
import qhrsWebStore5 from "../images/projects/qhrsWebStore5.png";
import qhrsWebStore6 from "../images/projects/qhrsWebStore6.png";
import qhrsWebStore7 from "../images/projects/qhrsWebStore7.png";
import qhrsWebStore8 from "../images/projects/qhrsWebStore8.png";
import qhrsWebStore9 from "../images/projects/qhrsWebStore9.png";
import qhrsWebStore10 from "../images/projects/qhrsWebStore10.png";

import publicAssociationWebsite1 from "../images/projects/publicAssociationWebsite1.png";
import publicAssociationWebsite2 from "../images/projects/publicAssociationWebsite2.png";
import publicAssociationWebsite3 from "../images/projects/publicAssociationWebsite3.png";
import publicAssociationWebsite4 from "../images/projects/publicAssociationWebsite4.png";
import publicAssociationWebsite5 from "../images/projects/publicAssociationWebsite5.png";

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

const qhrsWebStorePhotos = [
  { src: qhrsWebStore1, alt: "Project photo" },
  { src: qhrsWebStore2, alt: "Project photo" },
  { src: qhrsWebStore3, alt: "Project photo" },
  { src: qhrsWebStore4, alt: "Project photo" },
  { src: qhrsWebStore5, alt: "Project photo" },
  { src: qhrsWebStore6, alt: "Project photo" },
  { src: qhrsWebStore7, alt: "Project photo" },
  { src: qhrsWebStore8, alt: "Project photo" },
  { src: qhrsWebStore9, alt: "Project photo" },
  { src: qhrsWebStore10, alt: "Project photo" },
];

const publicAssociationPhotos = [
  { src: publicAssociationWebsite1, alt: "Project photo" },
  { src: publicAssociationWebsite2, alt: "Project photo" },
  { src: publicAssociationWebsite3, alt: "Project photo" },
  { src: publicAssociationWebsite4, alt: "Project photo" },
  { src: publicAssociationWebsite5, alt: "Project photo" },
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
      title: `Website for "Centar za razvoj, kulturu i sport Vozuća"`,
      description:
        "Public association website for promoting local culture, sports and development",
      photos: publicAssociationPhotos,
      demoUrl: "https://ceraks.ba",
      technologies: [
        "Next.js",
        "Directus",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Docker",
      ],
    },
    {
      title: `Web store for "QHRS - Quantholreg Serbia"`,
      description:
        "An e-commerce website with login system, cart, reviews and filters",
      photos: qhrsWebStorePhotos,
      sourceUrl: "https://github.com/OmarCorbic/qhrs-web-store",
      demoUrl: "https://store.omarcorbic.com",
      technologies: [
        "Next.js",
        "Directus",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Docker",
      ],
    },
    {
      title: "Newsletter CMS web application",
      description:
        "Web application for managing newsletter e-email templates and clients and sending newsletter",
      photos: newsletterPhotos,
      sourceUrl: "https://github.com/OmarCorbic/newsletter-cms",
      demoUrl: "#",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    },
    {
      title: "Kartonaza FRIC d.o.o. - Small business website",
      description: "4 page website for a small business",
      photos: kartonazaPhotos,
      sourceUrl: "#",
      demoUrl: "https://kartonaza.ba",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },

    {
      title: "Super TicTacToe",
      description:
        "An online browser game where you can play normal TicTacToe, or Super one that adds another layer",
      photos: superTTTphotos,
      sourceUrl: "https://github.com/OmarCorbic/Super-TicTacToe-Online-Game",
      demoUrl: "https://super-tictactoe-online-game.onrender.com",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Socket.io",
        "Node.js",
        "Vite",
      ],
    },
    {
      title: "Salt City Systems Website",
      description: "A static website for web design & development agency",
      photos: saltCityPhotos,
      sourceUrl: "https://github.com/OmarCorbic/Salt-City-Systems-Website",
      demoUrl: "https://saltcitysystems.com",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    },
  ];
  return (
    <section className="lg:px-[8%] py-12 lg:py-20" id="projectsSection">
      <SectionTitle text="MY PROJECTS" />
      <div className="flex flex-col gap-20 lg:gap-24 lg:px-10 items-center px-4 md:px-8">
        {projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

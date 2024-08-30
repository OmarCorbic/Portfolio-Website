import React from "react";
import Gallery from "./Gallery";

const ProjectCard = ({ project = {} }) => {
  return (
    <article className=" flex flex-col items-center justify-center w-full lg:gap-14 gap-5  md:flex-row">
      <div className=" text-center md:w-1/3 px-5 lg:items-start gap-3 md:text-left flex flex-col items-center justify-between">
        <h4 className="text-[#00FF85] font-bold">{project.title}</h4>
        <p>{project.description}</p>
        <div className="flex justify-center md:justify-start text-xs w-full gap-2">
          <a
            target="_blank"
            className="h-10 font-bold border-slate-900 dark:hover:bg-[#10f5a3] duration-150 w-full flex items-center justify-center border-2 px-4 rounded-xl"
            href={project.sourceUrl}
          >
            Source code
          </a>
          <a
            target="_blank"
            className="h-10 font-bold border-slate-900 dark:hover:bg-[#10f5a3] duration-150 w-full flex items-center justify-center border-2 px-4 rounded-xl"
            href={project.demoUrl}
          >
            View Live
          </a>{" "}
        </div>
      </div>
      <div className="rounded-xl overflow-hidden max-w-[800px] ">
        <Gallery photos={project.photos} />
      </div>
    </article>
  );
};

export default ProjectCard;

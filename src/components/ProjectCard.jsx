import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Technologies from "./Technologies";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ project = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.body.classList.contains("dark");
    setIsDark(isDarkMode);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <article
      className="w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
        {/* Gallery Section */}
        <div className="w-full lg:flex-1 rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] hover:shadow-[0_20px_60px_rgba(0,255,133,0.15)] transition-all duration-300 min-h-[300px] lg:min-h-[400px]">
          <Gallery photos={project.photos} />
        </div>

        {/* Content Section */}
        <div className="w-full lg:flex-1 flex flex-col justify-between gap-6 py-2">
          {/* Title and Description */}
          <div className="space-y-4">
            <div className="inline-block">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF85] to-transparent transition-all duration-500"></div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                  Technologies Used
                </p>
                <Technologies technologies={project.technologies} />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.sourceUrl && project.sourceUrl !== "#" && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.sourceUrl}
                className="flex-1 group/btn flex items-center justify-center gap-2 py-3 px-5 bg-slate-300 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700 border border-slate-400 dark:border-slate-700 hover:border-[#00FF85] dark:hover:border-[#00FF85] rounded-xl transition-all duration-300 font-semibold text-slate-900 dark:text-white hover:text-[#00FF85] dark:hover:text-[#00FF85]"
              >
                <SiGithub className="w-5 h-5" />
                <span>Source</span>
              </a>
            )}
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demoUrl}
                className="flex-1 group/btn flex items-center justify-center gap-2 py-3 px-5 bg-[#00FF85] hover:bg-[#10f5a3] text-slate-900 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-[0_10px_30px_rgba(0,255,133,0.3)]"
              >
                <span>Live Demo</span>
                <HiArrowTopRightOnSquare className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

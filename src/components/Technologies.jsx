import React, { useState, useEffect } from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiVite,
  SiNpm,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiDocker,
  SiGit,
  SiFigma,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiDirectus,
  SiSocketdotio,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const techIcons = {
  React: <SiReact className="w-5 h-5" />,
  JavaScript: <SiJavascript className="w-5 h-5" />,
  TypeScript: <SiTypescript className="w-5 h-5" />,
  Tailwind: <SiTailwindcss className="w-5 h-5" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5" />,
  Node: <SiNodedotjs className="w-5 h-5" />,
  "Node.js": <SiNodedotjs className="w-5 h-5" />,
  PostgreSQL: <SiPostgresql className="w-5 h-5" />,
  MongoDB: <SiMongodb className="w-5 h-5" />,
  Vite: <SiVite className="w-5 h-5" />,
  Express: <SiExpress className="w-5 h-5" />,
  "Express.js": <SiExpress className="w-5 h-5" />,
  Docker: <SiDocker className="w-5 h-5" />,
  Git: <SiGit className="w-5 h-5" />,
  Figma: <SiFigma className="w-5 h-5" />,
  Next: <SiNextdotjs className="w-5 h-5" />,
  "Next.js": <SiNextdotjs className="w-5 h-5" />,
  Python: <SiPython className="w-5 h-5" />,
  HTML: <SiHtml5 className="w-5 h-5" />,
  CSS: <SiCss3 className="w-5 h-5" />,
  MySQL: <GrMysql className="w-5 h-5" />,
  Directus: <SiDirectus className="w-5 h-5" />,
  "Socket.io": <SiSocketdotio className="w-5 h-5" />,
};

const Technologies = ({ technologies = [] }) => {
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

  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 group border border-slate-300 dark:border-slate-600"
          title={tech}
        >
          <span className="text-[#00FF85] dark:text-[#00FF85] group-hover:scale-110 transition-transform duration-200">
            {techIcons[tech] || <span className="w-5 h-5" />}
          </span>
          <span className="text-sm font-medium">{tech}</span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;

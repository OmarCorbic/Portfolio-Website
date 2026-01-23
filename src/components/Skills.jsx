import React, { useState } from "react";
import {
  SiReact,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";

const skills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiHtml5, name: "HTML", color: "#E34C26" },
  { icon: SiCss3, name: "CSS", color: "#1572B6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#000000" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  { icon: SiMongodb, name: "MongoDB", color: "#13AA52" },
  { icon: SiMysql, name: "MySQL", color: "#005C84" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      className="relative flex flex-col md:min-h-96 items-center md:pb-10 lg:px-[10%]"
      id="skillsSection"
    >
      <SectionTitle text="TECHNOLOGIES I HAVE WORKED WITH" />

      <div
        className={`flex md:hidden flex-wrap items-center justify-center gap-5 md:gap-10`}
      >
        {skills?.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-3 border-slate-400 dark:border-slate-700 border w-20 h-20 md:w-32 md:h-32 justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 shadow-md dark:shadow-lg"
            >
              <IconComponent
                className="w-10 h-10 lg:w-16 lg:h-16"
                style={{ color: skill.color }}
              />
              <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>

      <div
        className={`hidden md:flex md:gap-8 h-full flex-wrap items-center justify-center`}
      >
        {skills?.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-4 border-2 border-slate-300 dark:border-slate-700 w-28 h-28 lg:w-40 lg:h-40 justify-center rounded-lg bg-slate-50 dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSkill(i)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                borderColor: hoveredSkill === i ? skill.color : undefined,
                boxShadow:
                  hoveredSkill === i
                    ? `0 0 20px ${skill.color}33, 0 0 40px ${skill.color}22`
                    : "none",
              }}
            >
              <IconComponent
                className="w-12 h-12 lg:w-24 lg:h-24 transition-transform duration-300"
                style={{
                  color: skill.color,
                  transform: hoveredSkill === i ? "scale(1.1)" : "scale(1)",
                  filter:
                    hoveredSkill === i
                      ? "drop-shadow(0 0 10px rgba(0,0,0,0.2))"
                      : "none",
                }}
              />
              <p className="text-sm lg:text-base font-bold text-slate-900 dark:text-slate-100">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

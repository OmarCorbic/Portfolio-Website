import React, { useState } from "react";
import react from "../images/react.png";
import css from "../images/css.png";
import html from "../images/html.png";
import javscript from "../images/javascript.png";
import mysql from "../images/mysql.png";
import nodejs from "../images/nodejs.png";
import redux from "../images/redux.png";
import mongodb from "../images/mongodb.png";
import express from "../images/express.png";
import RotatingCube from "./Cube/RotatingCube";
import SectionTitle from "./SectionTitle";

const skills = [
  { logo: react, name: "React" },
  { logo: express, name: "Express" },
  { logo: css, name: "CSS" },
  { logo: html, name: "HTML" },
  { logo: javscript, name: "Javascript" },
  { logo: nodejs, name: "NodeJS" },
  { logo: redux, name: "Redux" },
  { logo: mongodb, name: "MongoDB" },
  { logo: mysql, name: "MySQL" },
];

const Skills = () => {
  const [isAnimated, setIsAnimated] = useState(true);
  return (
    <section
      className="relative flex flex-col md:min-h-96 items-center md:pb-10 md:px-[10%]"
      id="skillsSection"
    >
      <SectionTitle text="MY SKILLS" />

      <div
        className={`flex md:hidden  flex-wrap  items-center justify-center gap-5 md:gap-10`}
      >
        {skills?.map((skill, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-3 border-slate-400 dark:border-slate-900 border w-20 h-20 md:w-32 md:h-32 justify-center rounded-md bg-slate-200 dark:bg-[#01000c]"
            >
              <img
                className="w-10 h-10 lg:w-20 lg:h-20 "
                src={skill.logo}
                alt="Logo"
              />
              <p className="text-sm font-bold">{skill.name}</p>
            </div>
          );
        })}
      </div>

      <div
        className={`hidden md:flex md:gap-10 h-full  flex-wrap  items-center justify-center`}
      >
        {skills?.map((skill, i) => {
          if (isAnimated) {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-6 border-slate-400 dark:border-slate-900 border w-20 h-20 md:w-32 md:h-32 justify-center rounded-md bg-slate-200 dark:bg-[#01000c]"
              >
                <RotatingCube key={i} image={skill.logo} />
                <p className="text-lg font-bold">{skill.name}</p>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-3 border-slate-400 dark:border-slate-900 border w-20 h-20 md:w-32 md:h-32 justify-center rounded-md bg-slate-200 dark:bg-[#01000c]"
              >
                <img
                  className="w-10 h-10 lg:w-20 lg:h-20 "
                  src={skill.logo}
                  alt="Logo"
                />
                <p className="text-sm font-bold">{skill.name}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="hidden  absolute bottom-0 left-0 md:flex flex-col items-center  ">
        <span>Animation</span>
        <button
          onClick={() => setIsAnimated((prev) => !prev)}
          className={`flex w-8 border-2 z-[9999] ${
            isAnimated
              ? "bg-[#00FF85] justify-end"
              : "bg-none justify-start duration-500"
          } rounded-full  items-center  border-[#005AE0]`}
        >
          <div
            className={` w-3 h-3 rounded-full ${
              isAnimated ? "bg-[#020014]" : "bg-slate-400"
            }`}
          ></div>
        </button>
      </div>
    </section>
  );
};

export default Skills;

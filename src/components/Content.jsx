import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

const Content = () => {
  return (
    <main className="flex flex-col justify-start gap-10 sm:gap-16 pb-10 text-slate-600 dark:text-white ">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Content;

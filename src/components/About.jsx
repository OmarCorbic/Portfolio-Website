import React from "react";
import development from "../images/development.png";
import blob from "../images/blob1.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="" id="aboutSection">
      <SectionTitle text="ABOUT ME" />
      <div className="flex items-center">
        <p>
          As a passionate web developer immersed in the world of Information
          Technology, I'm constantly exploring the latest technologies and
          honing my skills, particularly in the{" "}
          <span className="text-[#10F5A3] font-bold">MERN</span> stack.
          <br />
          <br />
          With a keen eye for design and a love for problem-solving, I am
          dedicated to crafting custom static and dynamic{" "}
          <span className="text-[#10F5A3] font-bold">
            ecommerce websites
          </span>,{" "}
          <span className="text-[#10F5A3] font-bold">
            engaging browser games
          </span>
          ,
          <span className="text-[#10F5A3] font-bold">
            {" "}
            sleek portfolio platforms
          </span>
          , and more.
          <br />
          <br />
          Whether it's bringing a client's vision to life or creating innovative
          digital experiences, I thrive on the challenge of turning ideas into
          reality through clean, efficient code and captivating design. Join me
          on this journey as we shape the future of the web together.
        </p>
        <img className="w-1/2 hidden md:block" src={development} alt="" />
      </div>
    </section>
  );
};

export default About;

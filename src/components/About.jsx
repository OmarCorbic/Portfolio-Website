import React from "react";
import development from "../images/development.png";
import SectionTitle from "./SectionTitle";
import blob from "../images/blob-1.png";
const About = () => {
  return (
    <section className="flex flex-col px-5 lg:px-[8%]" id="aboutSection">
      <SectionTitle text="ABOUT ME" />
      <div className="flex items-center">
        <p className="md:w-2/3">
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
        </p>
        <div
          style={{ backgroundImage: `url("${blob}")` }}
          className=" bg-no-repeat w-1/2 bg-center bg-contain hidden md:flex items-center justify-center "
        >
          <img src={development} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;

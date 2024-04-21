import React from "react";
import photo from "../images/omarcropped.jpg";
import StarField from "./StarField";
import frameDark from "../images/frameDark.svg";
import frameLight from "../images/frameLight.svg";

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex flex-col gap-5 md:gap-10  sm:flex-row justify-end pb-10 items-start px-[8%]  sm:justify-center sm:items-center bg-gradient-to-b  from-sky-600 to-sky-400 dark:from-[#01000c] dark:to-[#012f49]">
      <StarField />
      <div
        style={{
          backgroundImage: `url(${frameDark})`,
        }}
        className="absolute -bottom-[10px] left-0 w-full transform scale-x-[-1] h-full bg-cover bg-no-repeat bg-bottom hidden dark:block"
      ></div>
      <div
        style={{
          backgroundImage: `url(${frameLight})`,
        }}
        className="absolute bottom-0 left-0 w-full transform scale-x-[-1] h-full bg-cover bg-no-repeat bg-bottom block dark:hidden"
      ></div>
      <div className="items-left sm:w-1/2 text-left flex flex-col gap-5 sm:items-start">
        <h3 className="text-lg md:text-3xl  font-black  lg:text-4xl">
          Hey, I'm Omar, a full stack{" "}
          <span className="text-white">web developer</span>
        </h3>
        <h4 className="text-sm  lg:text-lg">
          I create tomorrow's digital landscapes, today.
        </h4>
        <button
          className="border-2 max-w-40 p-2 rounded-full border-[#00FF85] "
          onClick={() => {
            const contact = document.getElementById("contactSection");
            contact.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact me
        </button>
      </div>
      <div className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-white shadow-md shadow-cyan-400">
        <img src={photo} alt="Personal photo" />
      </div>
    </div>
  );
};

export default Hero;

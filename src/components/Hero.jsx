import React from "react";
import photo from "../images/omarcropped.jpg";
import StarField from "./StarField";
import frameDark from "../images/frame-dark.png";
import frameLight from "../images/frame-light.png";
import StyledButton from "./StyledButton";

const Hero = () => {
  return (
    <div className="min-h-[90vh] w-full relative flex flex-col gap-5  md:gap-10  sm:flex-row justify-center pb-10 items-start px-[8%]  sm:justify-center sm:items-center bg-gradient-to-b md:bg-gradient-to-br  from-sky-800 via-sky-700 to-sky-300 dark:from-[#01000c] dark:to-[#012f49]">
      <div className="w-full h-full absolute z-10">
        <StarField />
      </div>
      <div
        style={{
          backgroundImage: `url("${frameDark}")`,
        }}
        className="absolute z-20 -bottom-[10px] left-0 w-full transform scale-x-[-1] h-full bg-cover bg-no-repeat bg-bottom hidden dark:block"
      ></div>
      <div
        style={{
          backgroundImage: `url("${frameLight}")`,
        }}
        className="absolute z-20 -bottom-[10px] left-0 w-full transform scale-x-[-1] h-full bg-cover bg-no-repeat bg-bottom block dark:hidden"
      ></div>
      <div className="items-left z-30 sm:w-1/2 text-left flex flex-col gap-5 sm:items-start">
        <h3 className="text-2xl md:text-3xl  font-black  lg:text-4xl">
          Hey, I'm Omar, a full stack{" "}
          <span className="text-white">web developer</span>
        </h3>
        <h4 className="text-base  lg:text-lg">
          I create tomorrow's digital landscapes, today.
        </h4>
        <div className="flex items-center justify-start">
          <StyledButton
            text="Contact me"
            onClick={() => {
              const contact = document.getElementById("contactSection");
              contact.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      <div className="w-24 z-30 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-white shadow-md shadow-cyan-400">
        <img src={photo} alt="Personal photo" />
      </div>
    </div>
  );
};

export default Hero;

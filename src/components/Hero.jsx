import React from "react";
import photo from "../images/omarcropped.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10  sm:flex-row-reverse h-[80vh] justify-center items-center">
      <div className="items-left sm:w-1/2 text-left flex flex-col gap-5 sm:items-start">
        <h3 className="text-xl md:text-3xl  font-bold  lg:text-4xl">
          Hey, I'm Omar, a full stack{" "}
          <span className="text-white">web developer</span>
        </h3>
        <h4 className="text-base  lg:text-xl">
          I create tomorrow's digital landscapes, today.
        </h4>
        <Button
          onClick={() => {
            const contact = document.getElementById("contactSection");
            contact.scrollIntoView({ behavior: "smooth" });
          }}
          text="Contact me"
        />
      </div>
      <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-white shadow-md shadow-cyan-400">
        <img src={photo} alt="Personal photo" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import photo from "../images/omarcropped.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 sm:flex-row-reverse justify-between py-5">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="rounded-full overflow-hidden border-2 border-white shadow-md shadow-cyan-400">
            <img src={photo} width={200} height={200} alt="Personal photo" />
          </div>
          <p
            style={{ textShadow: "cyan 1px 0 10px", letterSpacing: "1px" }}
            className="color-white text-center text-base font-bold "
          >
            corbicomar@gmail.com
          </p>
        </div>
      </div>
      <div className="items-center sm:w-1/2 flex flex-col gap-5 sm:items-start">
        <h3 className="text-2xl text-center font-black items-center justify-center sm:text-left lg:text-4xl">
          Hey, I'm Omar, a full stack{" "}
          <span className="text-[#00FF85]">web developer</span>
        </h3>
        <h4 className="text-base text-center sm:text-left lg:text-2xl">
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
    </div>
  );
};

export default Hero;

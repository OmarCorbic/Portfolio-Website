import React, { useState, useEffect } from "react";
import photo from "../images/omarPhoto.jpg";
import StarField from "./StarField";
import frameDark from "../images/frame-dark.png";
import frameLight from "../images/frame-light.png";
import StyledButton from "./StyledButton";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const personalProjects = "6+";
  const clientProjects = "3";

  return (
    <div className="min-h-screen w-full relative flex flex-col gap-3 md:gap-10 sm:flex-row justify-center py-8 md:py-10 items-start px-[5%] md:px-[8%] sm:justify-center sm:items-center bg-gradient-to-b md:bg-gradient-to-br from-sky-800 via-sky-700 to-sky-300 dark:from-[#01000c] dark:to-[#012f49] overflow-hidden">
      {/* Animated Background Stars */}
      <div className="w-full h-full absolute z-10">
        <StarField />
      </div>

      {/* Animated Satellites */}
      <svg
        className="absolute z-20 w-full h-full top-0 left-0"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <circle id="satellite" r="4" fill="#00FF85" opacity="0.8" />
          <circle id="glow" r="8" fill="#00FF85" opacity="0.2" />
        </defs>

        {/* Orbital paths */}
        <circle
          cx="50%"
          cy="30%"
          r="150"
          fill="none"
          stroke="#00FF85"
          opacity="0.1"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <circle
          cx="80%"
          cy="60%"
          r="120"
          fill="none"
          stroke="#00FF85"
          opacity="0.08"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        {/* Animated Satellites */}
        <g>
          <use href="#glow">
            <animateMotion dur="20s" repeatCount="indefinite">
              <mpath href="#orbit1" />
            </animateMotion>
          </use>
          <use href="#satellite">
            <animateMotion dur="20s" repeatCount="indefinite">
              <mpath href="#orbit1" />
            </animateMotion>
          </use>
        </g>

        <g>
          <use href="#glow">
            <animateMotion dur="25s" repeatCount="indefinite">
              <mpath href="#orbit2" />
            </animateMotion>
          </use>
          <use href="#satellite">
            <animateMotion dur="25s" repeatCount="indefinite">
              <mpath href="#orbit2" />
            </animateMotion>
          </use>
        </g>

        {/* Define orbital paths */}
        <path
          id="orbit1"
          d="M 50% 30% m -150 0 a 150 150 0 1 1 300 0 a 150 150 0 1 1 -300 0"
          fill="none"
          stroke="none"
        />
        <path
          id="orbit2"
          d="M 80% 60% m -120 0 a 120 120 0 1 1 240 0 a 120 120 0 1 1 -240 0"
          fill="none"
          stroke="none"
        />
      </svg>

      {/* Frame decoration */}
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

      {/* Main Content */}
      <div className="items-left z-30 sm:w-1/2 text-left flex flex-col gap-4 sm:gap-6 md:gap-8 sm:items-start">
        {/* Greeting with accent */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <p className="text-[#00FF85] font-semibold text-xs sm:text-sm md:text-base tracking-widest uppercase">
            Welcome to my portfolio
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            Hey, I'm <span className="text-white">Omar</span>
            <br />
            <span className="text-white">Full Stack</span> Web Developer
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-100 max-w-md leading-relaxed">
            I create tomorrow's digital landscapes, today. Crafting responsive,
            scalable web experiences with modern technologies.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-4 sm:gap-6 pt-1 sm:pt-2">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00FF85]">
              {personalProjects}
            </span>
            <span className="text-xs md:text-sm text-slate-200">
              Personal Projects
            </span>
          </div>
          <div className="w-px bg-slate-400 opacity-30"></div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00FF85]">
              {clientProjects}
            </span>
            <span className="text-xs md:text-sm text-slate-200">
              Client Projects
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-start pt-2 sm:pt-4">
          <StyledButton
            text="Contact me"
            onClick={() => {
              const contact = document.getElementById("contactSection");
              contact?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Profile Image with Interactive Glow */}
      <div
        className="z-30 relative flex-shrink-0"
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        }}
      >
        {/* Animated Glow Background */}
        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[#00FF85] via-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

        {/* Rotating Border Effect */}
        <div
          className="absolute -inset-1.5 sm:-inset-3 rounded-full border-2 border-transparent bg-gradient-to-r from-[#00FF85] via-cyan-400 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Profile Image */}
        <div className="w-24 h-24 md:w-36 md:h-36 lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-3 sm:border-4 border-white shadow-2xl shadow-cyan-400 relative z-10 hover:scale-105 transition-transform duration-500">
          <img
            src={photo}
            alt="Personal photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Orbital Ring */}
        <div
          className="absolute -inset-3 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-full border border-[#00FF85] opacity-30 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute -inset-4 sm:-inset-8 md:-inset-12 lg:-inset-16 rounded-full border border-cyan-400 opacity-20 animate-spin"
          style={{ animationDuration: "30s", animationDirection: "reverse" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;

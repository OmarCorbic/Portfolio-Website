import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const toggleDark = useTheme();
  const [showLinks, setShowLinks] = useState(false);
  const handleNavigate = (e) => {
    const element = document.getElementById(e.target.id + "Section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="navbar"
      className="relative flex flex-row items-center justify-between py-5"
    >
      <div>
        <h1 className="text-center text-base">OMAR CORBIC</h1>
        <h2
          style={{ textShadow: "cyan 1px 0 10px" }}
          className="color-white text-center text-base font-bold "
        >
          web design
        </h2>
      </div>
      <button
        onClick={() => setShowLinks((prev) => !prev)}
        className="sm:hidden"
      >
        <FiMenu color="white" size={24} />
      </button>
      <div
        className={`${
          showLinks ? "h-auto px-4 py-2 rounded-md" : "h-0"
        }  gap-2 absolute items-center text-sm bg-[#020014] overflow-hidden  top-[70%] right-0 sm:static flex flex-col sm:flex-row sm:bg-transparent sm:h-auto sm:gap-5`}
      >
        <button
          onClick={handleNavigate}
          id="about"
          className="border-2 duration-200 border-transparent hover:border-b-cyan-200"
        >
          About me
        </button>
        <button
          onClick={handleNavigate}
          id="skills"
          className="border-2 duration-200 border-transparent hover:border-b-cyan-200"
        >
          Skills
        </button>
        <button
          onClick={handleNavigate}
          id="projects"
          className="border-2 duration-200 border-transparent hover:border-b-cyan-200"
        >
          Projects
        </button>
        <button
          onClick={handleNavigate}
          id="contact"
          className="border-2 duration-200 border-transparent hover:border-b-cyan-200"
        >
          Contact
        </button>
        <button
          onClick={toggleDark}
          className={`flex w-10 h-5 border-2  dark:justify-end bg-[#fab24d] dark:bg-black justify-start duration-500
          rounded-full  items-center  border-[#005AE0]`}
        >
          <div className={` w-3 h-3 rounded-full bg-white`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

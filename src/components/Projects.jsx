import React, { useEffect, useState } from "react";
import Button from "./Button";
import elecom1 from "../images/projects/elecommHomeDesktop.jpg";
import elecom2 from "../images/projects/elecommLaptopsDesktop.jpg";
import elecom3 from "../images/projects/elecommSingleDesktop.jpg";
import ttt1 from "../images/projects/tttLoginDesktop.jpg";
import ttt2 from "../images/projects/tttMenuDesktop.jpg";
import ttt3 from "../images/projects/tttGameDesktop.jpg";
import Gallery from "./Gallery";
import SectionTitle from "./SectionTitle";

const ecommerce = [elecom1, elecom2, elecom3];
const game = [ttt1, ttt2, ttt3];

const Projects = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isSmScreen = screenWidth >= 640;
  const isLgScreen = screenWidth >= 1024;
  const photoWidth = isLgScreen ? 600 : isSmScreen ? 500 : 300;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="" id="projectsSection">
      <SectionTitle text="MY PROJECTS" />
      <div className="flex flex-col gap-16 lg:px-10">
        <article className=" flex flex-col items-center lg:justify-end lg:gap-14 gap-5  md:flex-row">
          <div className="text-center md:w-1/3 lg:items-start gap-3 md:text-left flex flex-col items-center justify-between">
            <h4 className="text-[#00FF85] font-bold">Elecom</h4>
            <p>
              An e-commerce website with login system, cart, wishlist, reviews
              and filters
            </p>
            <div className="flex justify-center text-xs w-full gap-2">
              <a
                target="_blank"
                href="https://github.com/OmarCorbic/Electronics-E-commerce"
              >
                <Button className="lg:h-10" text="Source Code" />
              </a>
              <Button className="lg:h-10" text="View Demo" />
            </div>
          </div>
          <Gallery photoWidth={photoWidth} photos={ecommerce} />
        </article>
        <article className=" flex flex-col items-center lg:justify-end lg:gap-14 gap-5  md:flex-row-reverse">
          <div className="text-center md:w-1/3 lg:items-start gap-3 md:text-left flex flex-col items-center justify-between">
            <h4 className="text-[#00FF85] font-bold">Super TicTacToe</h4>
            <p>
              An online browser game where you can play normal TicTacToe, or
              Super one that adds another layer
            </p>
            <div className="flex justify-center text-xs w-full gap-2">
              <a
                target="_blank"
                href="https://github.com/OmarCorbic/Super-TicTacToe-Online-Game"
              >
                <Button className=" lg:h-10" text="Source Code" />
              </a>
              <Button className=" lg:h-10" text="View Demo" />
            </div>
          </div>
          <Gallery photoWidth={photoWidth} photos={game} />
        </article>
      </div>
    </section>
  );
};

export default Projects;

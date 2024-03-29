import { useEffect, useRef } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { FaArrowUp } from "react-icons/fa";
import StarField from "./components/StarField";
import frameDark from "./images/frameDark.png";
import frameLight from "./images/frameLight.png";
import blob from "./images/blob1.svg";

function App() {
  const btnRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        btnRef.current.classList.remove("hidden");
      } else {
        btnRef.current.classList.add("hidden");
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`
       relative px-4 sm:px-16 lg:px-32 flex flex-col gap-10 overflow-clip dark:bg-black bg-cyan-50`}
    >
      <div className="absolute h-screen w-full top-0 left-0 bg-gradient-to-b  from-blue-500 to-cyan-200 dark:from-[#01000c] dark:to-[#012f49] ">
        <div className="hidden dark:block">
          <StarField />
        </div>
        <div
          style={{
            backgroundImage: `url(${frameDark})`,
          }}
          className="absolute bottom-0 left-0 w-full h-full bg-cover bg-no-repeat bg-bottom hidden dark:block"
        ></div>
        <div
          style={{
            backgroundImage: `url(${frameLight})`,
          }}
          className="absolute bottom-0 left-0 w-full h-full bg-cover bg-no-repeat bg-bottom block dark:hidden"
        ></div>
      </div>
      <div className="z-[9999] ">
        <Navbar />
        <Hero />
        <Content />
      </div>
      <button
        ref={btnRef}
        className="flex z-[9999] items-center justify-center fixed m-1 border-2 rounded-full w-6 h-6 border-[#00FF85] bottom-0 right-0"
        onClick={() => {
          const navbar = document.getElementById("navbar");
          navbar.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaArrowUp size={15} />
      </button>
    </div>
  );
}

export default App;

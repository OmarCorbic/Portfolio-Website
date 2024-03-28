import { useEffect, useRef } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { FaArrowUp } from "react-icons/fa";
import StarField from "./components/StarField";

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
    <div className="relative px-2 sm:px-16 lg:px-32 flex flex-col gap-10">
      <div className="fixed w-full top-0 left-0">
        <StarField />
      </div>
      <div className="z-[9999]">
        <Navbar />
        <Hero />
        <Content />
      </div>
      <button
        ref={btnRef}
        className="flex z-[1000] items-center justify-center fixed m-1 border-2 rounded-full w-8 h-8 border-[#00FF85] bottom-0 right-0"
        onClick={() => {
          const navbar = document.getElementById("navbar");
          navbar.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;

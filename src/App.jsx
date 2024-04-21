import { useEffect, useRef } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { FaArrowUp } from "react-icons/fa";

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
       relative flex flex-col  overflow-clip dark:bg-black bg-sky-100`}
    >
      <Navbar />
      <Hero />
      <Content />
      <button
        ref={btnRef}
        className="flex z-[9999] items-center justify-center text-slate-900 dark:text-white fixed m-1 border-2 rounded-full w-6 h-6 border-[#00FF85] bottom-0 right-0"
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

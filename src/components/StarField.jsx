import React, { useRef, useEffect } from "react";

const StarField = () => {
  const stars = Array(20).fill(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const generateStars = () => {
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        stars.forEach(() => {
          const x = Math.random() * containerWidth;
          const y = Math.random() * containerHeight;
          const size = Math.random() * 2 + 1; // Random size between 1px and 3px
          const star = document.createElement("div");
          star.style.left = x + "px";
          star.style.top = y + "px";
          star.style.width = size + "px";
          star.style.height = size + "px";
          star.classList.add("absolute", "bg-[#afbed6]", "rounded-full");
          container.appendChild(star);
        });
      }
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, [containerRef]);

  return <div ref={containerRef} className="relative h-screen w-screen"></div>;
};

export default StarField;

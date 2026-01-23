import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import GalleryModal from "./GalleryModal";

function SlideShow({ photos = [] }) {
  const [isDark, setIsDark] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.body.classList.contains("dark");
    setIsDark(isDarkMode);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <>
      {/* Preview with Blurred Background */}
      <div
        className="relative w-full h-full cursor-pointer overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center group"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsModalOpen(true);
          }
        }}
      >
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${photos[0]?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.4)",
            zIndex: 0,
          }}
        />

        {/* Center Logo/Icon */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4">
          <div className="p-4 lg:p-6 bg-[#00FF85] bg-opacity-20 backdrop-blur-sm rounded-full border-2 border-[#00FF85] group-hover:scale-110 transition-transform duration-300">
            <IoEye className="w-12 h-12 lg:w-16 lg:h-16 text-[#00FF85]" />
          </div>
          <p className="text-white font-semibold text-sm lg:text-base text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view gallery
          </p>
        </div>
      </div>

      {/* Modal Gallery */}
      <GalleryModal
        photos={photos}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default SlideShow;

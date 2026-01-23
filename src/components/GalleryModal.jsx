import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { IoPauseOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function GalleryModal({ photos = [], isOpen = false, onClose = () => {} }) {
  const [autoChange, setAutoChange] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);

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

  // Close modal on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    let interval = null;
    if (autoChange && isOpen) {
      interval = setInterval(() => {
        setPhotoIndex((prevIndex) => {
          if (prevIndex + 1 > photos?.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 3000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoChange, photos?.length, isOpen]);

  const moveLeft = () => {
    if (photoIndex - 1 < 0) {
      setPhotoIndex(photos?.length - 1 || 0);
    } else {
      setPhotoIndex((prev) => prev - 1);
    }
    setAutoChange(false);
  };

  const moveRight = () => {
    if (photoIndex + 1 > photos?.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex((prev) => prev + 1);
    }
    setAutoChange(false);
  };

  const moveToIndex = (i) => {
    if (i > photos?.length - 1 || i < 0) {
      return;
    }
    setAutoChange(false);
    setPhotoIndex(i);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close gallery modal"
          className="absolute top-4 right-4 z-50 p-2 lg:p-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full transition-all duration-200"
          onClick={onClose}
        >
          <IoClose className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>

        {/* Main Carousel */}
        <div className="relative w-full h-full overflow-hidden flex-1">
          <div
            style={{
              transform: `translateX(-${photoIndex * 100}%)`,
            }}
            className="flex w-full h-full transition-transform ease-in-out duration-700"
          >
            {photos?.map((photo, i) => (
              <div
                key={i}
                className="min-w-full h-full flex items-center justify-center overflow-auto bg-slate-200 dark:bg-slate-800"
              >
                <img
                  src={photo.src}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                  alt={photo.alt}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {photos?.length > 1 && (
            <>
              <button
                type="button"
                name="previous-slide-button"
                aria-label="Previous slide button"
                className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 lg:p-3 text-white opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-40 rounded-full transition-all duration-300"
                onClick={moveLeft}
              >
                <GrNext className="w-6 h-6 lg:w-8 lg:h-8 scale-x-[-1]" />
              </button>
              <button
                type="button"
                name="next-slide-button"
                aria-label="Next slide button"
                className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 lg:p-3 text-white opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-40 rounded-full transition-all duration-300"
                onClick={moveRight}
              >
                <GrNext className="w-6 h-6 lg:w-8 lg:h-8" />
              </button>
            </>
          )}

          {/* Play/Pause Controls */}
          {photos?.length > 1 && (
            <div className="absolute top-4 right-16 flex items-center justify-center z-20">
              <button
                type="button"
                name="play-slideshow-button"
                aria-label="Play slideshow button"
                className={`${
                  autoChange ? "hidden" : "flex"
                } items-center justify-center text-white text-lg lg:text-xl p-2 lg:p-3 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all duration-200`}
                onClick={() => setAutoChange(true)}
              >
                <IoPlay />
              </button>
              <button
                type="button"
                name="pause-slideshow-button"
                aria-label="Pause slideshow button"
                className={`${
                  autoChange ? "flex" : "hidden"
                } items-center justify-center text-white text-lg lg:text-xl p-2 lg:p-3 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all duration-200`}
                onClick={() => setAutoChange(false)}
              >
                <IoPauseOutline />
              </button>
            </div>
          )}
        </div>

        {/* Indicators */}
        {photos?.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-3 lg:py-4 px-3 bg-gradient-to-t from-black to-transparent">
            {photos?.map((_, i) => (
              <button
                type="button"
                name="move-to-slide-button"
                aria-label={`Move to slide ${i + 1}`}
                key={i}
                className={`transition-all duration-300 rounded-full ${
                  photoIndex === i
                    ? "bg-[#00FF85] w-3 h-3 lg:w-3 lg:h-3"
                    : "bg-slate-500 hover:bg-slate-400 w-2 h-2 lg:w-2.5 lg:h-2.5"
                }`}
                onClick={() => moveToIndex(i)}
              ></button>
            ))}
          </div>
        )}

        {/* Photo Counter */}
        {photos?.length > 1 && (
          <div className="absolute bottom-20 left-4 px-3 py-1 bg-black bg-opacity-50 rounded-full text-white text-xs lg:text-sm font-medium z-20">
            {photoIndex + 1} / {photos?.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryModal;

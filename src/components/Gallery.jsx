import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { IoPauseOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";

function SlideShow({ photos = [] }) {
  const [autoChange, setAutoChange] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (autoChange) {
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
  }, [autoChange, photos?.length]);

  const moveLeft = () => {
    if (photoIndex - 1 < 0) {
      return;
    }

    setAutoChange(false);
    setPhotoIndex((prev) => prev - 1);
  };

  const moveRight = () => {
    if (photoIndex + 1 > photos?.length - 1) {
      return;
    }

    setAutoChange(false);
    setPhotoIndex((prev) => prev + 1);
  };
  const moveToIndex = (i) => {
    if (i > photos?.length - 1 || i < 0) {
      return;
    }

    setAutoChange(false);
    setPhotoIndex(i);
  };

  return (
    <div className="relative h-full flex justify-center overflow-hidden ">
      <div
        style={{
          transform: `translateX(-${photoIndex * 100}%)`,
        }}
        className={
          "items-center flex-grow  w-full flex transition ease-in-out duration-700 "
        }
      >
        {photos?.map((photo, i) => {
          return (
            <img
              key={i}
              src={photo.src}
              className="h-full flex-grow object-cover object-center"
              alt={photo.alt}
            />
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="absolute top-1 right-1 flex items-center justify-center">
          <button
            type="button"
            name="play-slideshow-button"
            aria-label="Play slideshow button"
            className={`${
              autoChange ? "hidden" : "flex"
            } items-center justify-center text-white text-base hover:bg-black hover:bg-opacity-30 p-3 z-20  md:text-lg rounded-full  bg-opacity-50`}
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
            } items-center justify-center text-white text-base hover:bg-black hover:bg-opacity-30 p-3 z-20 md:text-lg rounded-full  bg-opacity-50`}
            onClick={() => setAutoChange(false)}
          >
            <IoPauseOutline />
          </button>
        </div>
        <button
          type="button"
          name="previous-slide-button"
          aria-label="Previous slide button"
          className="absolute left-1 transform z-10 text-white  scale-x-[-1] bg-opacity-55  w-20 h-[80%]  rounded-full flex items-center justify-end"
          onClick={moveLeft}
        >
          <GrNext />
        </button>
        <button
          type="button"
          name="next-slide-button"
          aria-label="Next slide button"
          className="absolute right-1  bg-opacity-55 z-10 text-white w-20 h-[80%]  rounded-full flex items-center justify-end"
          onClick={moveRight}
        >
          <GrNext />
        </button>
        <div className="flex items-center z-20 mt-auto justify-center w-full gap-3 py-1 md:py-2 bg-black bg-opacity-50">
          {photos?.map((_, i) => {
            return (
              <button
                type="button"
                name="move-to-slide-button"
                aria-label="Move to slide button"
                key={i}
                className={`${
                  photoIndex === i ? "bg-slate-100" : "bg-slate-500"
                }  h-[4px] w-8 rounded-sm`}
                onClick={() => moveToIndex(i)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SlideShow;

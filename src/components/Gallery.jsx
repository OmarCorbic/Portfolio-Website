import React, { useRef } from "react";
import { GoTriangleLeft } from "react-icons/go";

const Gallery = ({ photoWidth, photos = [] }) => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: "-" + photoWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: photoWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        style={{ width: photoWidth + "px" }}
        ref={galleryRef}
        className=" items-center no-scrollbar  flex  bg-[#013380] border-2 border-[#005AE0 ] rounded-xl overflow-x-auto"
      >
        {photos?.map((photo, i) => {
          return <img className="w-full" key={i} src={photo}></img>;
        })}
      </div>
      <div className="absolute w-full top-0 left-0 flex items-center justify-between h-full">
        <button onClick={scrollLeft} className=" text-3xl  text-red-500">
          <GoTriangleLeft />
        </button>
        <button
          onClick={scrollRight}
          className=" rotate-180 text-3xl text-red-500"
        >
          <GoTriangleLeft />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

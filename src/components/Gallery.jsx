import React, { useEffect, useRef, useState } from "react";
import { GoTriangleLeft } from "react-icons/go";

const Gallery = ({ photoWidth, photos = [] }) => {
  const galleryRef = useRef(null);
  const modalGalleryRef = useRef(null);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const handleGalleryClick = () => {
    setShowGalleryModal(true);
  };

  const hideGalleryModal = (e) => {
    if (e.target.id === "modalBg") {
      setShowGalleryModal(false);
    }
  };

  const scrollLeft = () => {
    if (showGalleryModal) {
      if (modalGalleryRef.current) {
        modalGalleryRef.current.scrollBy({
          left: "-" + modalGalleryRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    } else {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({
          left: "-" + galleryRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (showGalleryModal) {
      if (modalGalleryRef.current) {
        modalGalleryRef.current.scrollBy({
          left: +modalGalleryRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    } else {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({
          left: galleryRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="relative">
      {showGalleryModal && (
        <div
          id="modalBg"
          onClick={hideGalleryModal}
          className="bg-black bg-opacity-75 flex items-center justify-center fixed top-0 left-0 h-screen w-screen z-[10000]"
        >
          <div className="relative  w-full md:w-5/6">
            <button
              id="modalBg"
              onClick={hideGalleryModal}
              className=" absolute top-1 right-1 z-[10000] px-2 text-white bg-slate-900 rounded-lg"
            >
              X
            </button>
            <div
              ref={modalGalleryRef}
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
        </div>
      )}
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
          onClick={handleGalleryClick}
          className="w-full h-full "
        ></button>
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

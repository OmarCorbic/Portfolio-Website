import React from "react";

const SectionTitle = ({ text = "TITLE" }) => {
  return (
    <div className="flex items-center gap-3 justify-center py-10">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,245,163,0) 0%,rgba(16,245,163) 70%, #fff 100%)",
        }}
        className="w-16 md:w-20 h-1 rounded-r-full"
      ></div>
      <h2 className=" text-center sm:text-base lg:text-xl font-bold">{text}</h2>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(16,245,163,0) 0%, rgba(16,245,163) 70%, #fff 100%)",
        }}
        className="w-16 md:w-20 h-1 rounded-l-full"
      ></div>
    </div>
  );
};

export default SectionTitle;

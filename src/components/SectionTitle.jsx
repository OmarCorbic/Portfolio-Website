import React from "react";

const SectionTitle = ({ text = "TITLE" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-slate-800 dark:text-white font-dark">
      <h2 className=" text-center sm:text-base lg:text-xl font-bold">{text}</h2>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,245,163,0) 0%, rgba(16,245,163) 30%, #fff 50%,rgba(16,245,163) 70%, rgba(16,245,163,0) 100%",
        }}
        className="w-44 h-[2px] rounded-full"
      ></div>
    </div>
  );
};

export default SectionTitle;

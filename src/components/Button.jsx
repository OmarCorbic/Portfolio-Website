import React from "react";

const Button = ({ type = "button", text = "Click", onClick = () => {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`max-w-[60vw] dark:hover:shadow-md text-white flex items-center justify-center hover:shadow-[#85f598] font-bold dark:border-[#00FF85] bg-indigo-700 dark:bg-transparent border-2 px-3 py-1 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;

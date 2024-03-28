import React from "react";

const Button = ({
  className = "",
  type = "button",
  text = "Click",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseDown={(e) => {
        e.target.style.backgroundColor = "#00FF85";
      }}
      onMouseUp={(e) => {
        e.target.style.backgroundColor = "transparent";
      }}
      className={`${className} hover:shadow-md flex items-center justify-center hover:shadow-[#85f598] font-bold border-[#00FF85] border-2 px-3 py-1 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;

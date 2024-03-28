import React from "react";
const RotatingCube = ({ image = null }, key) => {
  return (
    <div key={key} className="container">
      <div className="cube">
        <div className="side">
          <img src={image} alt="Image" />
        </div>
        <div className="side">
          <img src={image} alt="Image" />
        </div>
        <div className="side">
          <img src={image} alt="Image" />
        </div>
        <div className="side">
          <img src={image} alt="Image" />
        </div>
        <div className="side">
          <img src={image} alt="Image" />
        </div>
        <div className="side">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;

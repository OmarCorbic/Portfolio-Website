import React from "react";
import satellite from "../images/satellite.svg";
const StarField = () => {
  return (
    <div className="absolute h-full w-full hidden dark:block">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 2px #afbed6); }
          50% { filter: drop-shadow(0 0 6px #afbed6); }
        }
        .star-twinkle { animation: twinkle 3s infinite; }
        .star-twinkle-slow { animation: twinkle 5s infinite; }
        .star-glow { animation: glow 4s infinite; }
      `}</style>

      <div className="absolute w-4 h-4 animate-fly top-2/3 -left-1/2 text-red-600 flex gap-2">
        <img src={satellite} alt="" />
      </div>

      {/* Original stars */}
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[5%] left-[10%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[15%] left-[30%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[25%] left-[50%]"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[35%] left-[70%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[45%] left-[90%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[10%] left-[80%]"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[20%] left-[60%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[30%] left-[40%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[40%] left-[20%]"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[50%] left-[5%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[60%] left-[25%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[70%] left-[45%]"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[80%] left-[65%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[90%] left-[85%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[15%] left-[5%]"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[30%] left-[20%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[45%] left-[35%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[60%] left-[50%]"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[75%] left-[65%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[85%] left-[80%]"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#afbed6] rounded-full top-[95%] left-[95%]"></div>

      {/* Additional twinkling stars - top region (enhanced density) */}
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[3%] left-[5%] star-twinkle"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[4%] left-[35%] star-twinkle-slow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[2%] left-[65%] star-twinkle"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[5%] left-[25%] star-twinkle-slow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[3%] left-[82%] star-twinkle"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[8%] left-[15%] star-twinkle"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[6%] left-[55%] star-glow"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[9%] left-[45%] star-twinkle-slow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[7%] left-[75%] star-twinkle"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[4%] left-[92%] star-glow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[12%] left-[8%] star-twinkle"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[11%] left-[48%] star-glow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[13%] left-[72%] star-twinkle"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[10%] left-[35%] star-twinkle-slow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[14%] left-[18%] star-glow"></div>

      {/* Additional stars - middle-upper region */}
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[22%] left-[15%] star-glow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[20%] left-[62%] star-twinkle"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[24%] left-[38%] star-twinkle-slow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[19%] left-[88%] star-glow"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[26%] left-[52%] star-twinkle"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[23%] left-[8%] star-twinkle-slow"></div>

      {/* Additional stars - middle region with glow */}
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[38%] left-[15%] star-glow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[42%] left-[28%] star-twinkle"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[45%] left-[75%] star-glow"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[48%] left-[62%] star-twinkle-slow"></div>

      {/* Bottom region - sparse */}
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[75%] left-[42%] star-twinkle"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[82%] left-[18%] star-twinkle-slow"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[88%] left-[72%] star-glow"></div>

      {/* Edge stars */}
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[11%] left-[1%] star-glow"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[32%] left-[99%] star-twinkle-slow"></div>
      <div className="absolute w-[1.5px] h-[1.5px] bg-[#afbed6] rounded-full top-[6%] left-[0%] star-twinkle"></div>
      <div className="absolute w-[2.5px] h-[2.5px] bg-[#afbed6] rounded-full top-[28%] left-[100%] star-glow"></div>

      {/* Bright accent stars - concentrated in upper regions */}
      <div className="absolute w-[4px] h-[4px] bg-[#c8d8f0] rounded-full top-[9%] left-[28%] star-glow opacity-80"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#d9e6f5] rounded-full top-[7%] left-[68%] star-glow opacity-75"></div>
      <div className="absolute w-[4px] h-[4px] bg-[#c8d8f0] rounded-full top-[16%] left-[45%] star-twinkle-slow opacity-80"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#d9e6f5] rounded-full top-[22%] left-[82%] star-glow opacity-70"></div>
    </div>
  );
};

export default StarField;

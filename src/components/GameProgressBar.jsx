import React from "react";
import "../assets/styles/gameProgressBar.css";
import { Link } from "react-router-dom";
import TreeDisc from "../assets/icons/tree-disc"
export default function GameProgressBar({ levels, currentLevel }) {
  const getSvgPath = (level) => {
    const strokeColor = level.number < currentLevel ? "#37454E" : "#37454E60";

    return (
      <div
        className={` w-fit relative ${
          level.number === 2
            ? "lg:top-[355px] top-[340px] -left-[10px] lg:-left-[30px]"
            : level.number === 3
            ? "lg:top-[790px] top-[700px] -left-[20px] lg:-left-[50px]"
            : level.number === 4 ? "lg:top-[1240px] top-[1050px]  -left-[30px] lg:-left-[70px]": ""
        }`}
        key={level.id}
      >
          <Link to={"/levels"}>
        <TreeDisc active={level.number <= currentLevel} level={level.number} title={level.title} currentLevel={currentLevel === level.number} />
        </Link>
        {level.number === 1 ? (
         <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            
            viewBox="0 0 350 360"
            fill="none"
            className="lg:h-[355px]  lg:block hidden "
          >
            <path
              d="M425 404C370.261 365.097 297.987 358.487 310.8 280.648C322.709 208.302 311.6 180.799 255.944 126.607C193.13 65.4454 139.813 -10.9796 1 6.54964"
              stroke={strokeColor}
              strokeWidth="8"
              strokeDasharray="16 16"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="355" viewBox="0 0 9 355" fill="none" className="lg:hidden">
          <path d="M4 687C4.09726 598.307 4.11378 481.203 4.30838 501.964C4.48924 521.26 4.558 503.26 4.69348 413.082C4.84639 311.305 5.03745 224.917 4.99363 0" stroke={strokeColor} stroke-width="8" stroke-dasharray="16 16"/>
          </svg>
         </>
        ) : level.number === 2 ? (
          <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            viewBox="0 0 98 438"
            fill="none"
            className="lg:block hidden "
          >
            <path
              d="M123.5 450C68.7611 411.097 -2.81332 360.34 9.99991 282.5C21.9088 210.154 27.0006 225 9.99994 161.5C-12.6737 76.8105 49.5001 62 27 1.54959"
              stroke={strokeColor}
              strokeWidth="8"
              strokeDasharray="16 16"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="355" viewBox="0 0 9 355" fill="none" className="lg:hidden">
          <path d="M4 687C4.09726 598.307 4.11378 481.203 4.30838 501.964C4.48924 521.26 4.558 503.26 4.69348 413.082C4.84639 311.305 5.03745 224.917 4.99363 0" stroke={strokeColor} stroke-width="8" stroke-dasharray="16 16"/>
          </svg>
          </>
        ) : level.number === 3 ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            viewBox="0 0 192 462"
            fill="none"
            className="lg:block hidden"
          >
            <path
              d="M207 458C152.261 419.097 -3.75158 360.79 9.06165 282.95C20.9705 210.605 26.0624 225.45 9.06169 161.95C-13.612 77.2609 48.5618 62.4504 26.0618 2.00003"
              stroke={strokeColor}
              strokeWidth="8"
              strokeDasharray="16 16"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="355" viewBox="0 0 9 355" fill="none" className="lg:hidden">
          <path d="M4 687C4.09726 598.307 4.11378 481.203 4.30838 501.964C4.48924 521.26 4.558 503.26 4.69348 413.082C4.84639 311.305 5.03745 224.917 4.99363 0" stroke={strokeColor} stroke-width="8" stroke-dasharray="16 16"/>
          </svg>
        </>
          
          
        ) : (
          ""
        )}
         
      </div>
    );
  };

  return (
    <div className="w-full flex ">
    

      {levels.map((level) => getSvgPath(level))}
    </div>
  );
}

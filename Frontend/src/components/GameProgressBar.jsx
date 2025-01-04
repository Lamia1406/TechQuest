import React, { useState } from "react";
import TreeDisc from "../assets/icons/tree-disc";
import "../assets/styles/gameProgressBar.css";
import { Link } from "react-router-dom";

const ProgressBar = ({ levels, currentLevel }) => {
  const getSvgPath = (levelIndex, level) => {
    const strokeColor = levelIndex < currentLevel ? "#37454E" : "#37454E60";

    return (
      <div className={`relative ${levelIndex + 1 === 1 ? "tree-disc": levelIndex + 1 === 2 ? "left-[408px]" : levelIndex + 1 === 3 ? "left-[510px]": "left-[710px]"} w-fit`} key={level.id}>
        <Link to={"/levels"}>
        <TreeDisc active={levelIndex + 1<= currentLevel} level={levelIndex + 1} title={level.title} currentLevel={levelIndex + 1 === currentLevel} />
        </Link>
     {
      levelIndex + 1 === 1 ?    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="428"
      height="408"
      viewBox="0 0 428 408"
      fill="none"
    >
      <path
        d="M425 404C370.261 365.097 297.987 358.487 310.8 280.648C322.709 208.302 311.6 180.799 255.944 126.607C193.13 65.4454 139.813 -10.9796 1 6.54964"
        stroke={strokeColor}
        strokeWidth="8"
        strokeDasharray="16 16"
      />
    </svg> : levelIndex + 1 === 2 ? <svg
              xmlns="http://www.w3.org/2000/svg"
              width="126"
              height="454"
              viewBox="0 0 126 454"
              fill="none"
            >
              <path
                d="M123.5 450C68.7611 411.097 -2.81332 360.34 9.99991 282.5C21.9088 210.154 27.0006 225 9.99994 161.5C-12.6737 76.8105 49.5001 62 27 1.54959"
                stroke={strokeColor}
                strokeWidth="8"
                strokeDasharray="16 16"
              />
            </svg> : levelIndex + 1 === 3 ? <svg
              xmlns="http://www.w3.org/2000/svg"
              width="210"
              height="462"
              viewBox="0 0 210 462"
              fill="none"
            >
              <path
                d="M207 458C152.261 419.097 -3.75158 360.79 9.06165 282.95C20.9705 210.605 26.0624 225.45 9.06169 161.95C-13.612 77.2609 48.5618 62.4504 26.0618 2.00003"
                stroke={strokeColor}
                strokeWidth="8"
                strokeDasharray="16 16"
              />
            </svg> : ""
     }
      </div>
    );
  };

  return (
    <div>
      {levels.map((level, index) => getSvgPath(index, level))}
    </div>
  );
};

export default function GameProgressBar({ levels, currentLevel }) {

  return (
    <div className="game-progress-bar">
      <ProgressBar levels={levels} currentLevel={currentLevel} />
    </div>
  );
}

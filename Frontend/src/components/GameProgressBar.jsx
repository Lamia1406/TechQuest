import React, { useState } from 'react';
import TreeDisc from '../assets/icons/tree-disc';
import "../assets/styles/gameProgressBar.css"
const ProgressBar = ({ progress }) => {
  const getSvgPath = (level, currentLevel) => {
    const strokeColor = level <= currentLevel ? "#37454E" : "#37454E60";

    switch (level) {
      case 1:
        return (
        <div className='relative tree-disc'>
          <TreeDisc active level={1}/>
          <svg xmlns="http://www.w3.org/2000/svg" width="428" height="408" viewBox="0 0 428 408" fill="none">
            <path d="M425 404C370.261 365.097 297.987 358.487 310.8 280.648C322.709 208.302 311.6 180.799 255.944 126.607C193.13 65.4454 139.813 -10.9796 1 6.54964" stroke={strokeColor} stroke-width="8" stroke-dasharray="16 16"/>
          </svg>
         
        </div>
        );
      case 2:
        return (
          <div className="relative left-[408px]  w-fit">
            <TreeDisc  level={2} active />
          <svg xmlns="http://www.w3.org/2000/svg" width="126" height="454" viewBox="0 0 126 454"  fill="none">
            <path d="M123.5 450C68.7611 411.097 -2.81332 360.34 9.99991 282.5C21.9088 210.154 27.0006 225 9.99994 161.5C-12.6737 76.8105 49.5001 62 27 1.54959" stroke={strokeColor} stroke-width="8" stroke-dasharray="16 16"/>
          </svg>
          </div>
        );
      case 3:
        return (
        <div className='relative left-[510px]'>
           <div className=''>
          <TreeDisc  level={3} active/>
           <svg xmlns="http://www.w3.org/2000/svg" width="210" height="462" viewBox="0 0 210 462"  fill="none">
            <path d="M207 458C152.261 419.097 -3.75158 360.79 9.06165 282.95C20.9705 210.605 26.0624 225.45 9.06169 161.95C-13.612 77.2609 48.5618 62.4504 26.0618 2.00003" stroke={strokeColor} stroke-width="8" stroke-dasharray="16 16"/>
          </svg>
          
         </div>
         <div className='absolute left-[210px] '>
         <TreeDisc  level={4} />
         </div>
        </div>
        );
      default:
        return null;
    }
  };

  // Determine the current level based on the progress
  const currentLevel = Math.min(Math.floor(progress), 4);  // Levels 1 to 4

  return (
    <div >
     
        {getSvgPath(1, currentLevel)}
        {getSvgPath(2, currentLevel)}
        {getSvgPath(3, currentLevel)}
      
    </div>
  );
};

export default function GameProgressBar() {
  const [progress, setProgress] = useState(0);  // Change progress value here

  return (
    <div className='game-progress-bar'>
      
       
      <ProgressBar progress={progress} />
      <input
        type="range"
        min="0"
        max="3"
        value={progress}
        className='hidden'
        onChange={(e) => setProgress(parseInt(e.target.value, 10))}
      />
    </div>
  );
}

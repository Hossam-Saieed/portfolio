import React from 'react';
import Vector from '../assets/Vector.svg';

const MarqueeBar = () => {

  const marqueeMessage = "Available and eager to lend my expertise to groundbreaking development projects";
  const marqueeContent = Array(5).fill(
    <div className="flex items-center mx-2 justify-between whitespace-nowrap">
      <img className="w-4 h-4 mx-2" src={Vector} loading="lazy" alt="icon" />
      <span className='uppercase'>{marqueeMessage}</span>
    </div>
  );

  return (
    <div className="border border-y-[#6E6E6B] bg-[#E6E6E6] overflow-hidden">
      <div className={`flex flex-row items-center`}>
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center w-full animate-marquee">
            {marqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;

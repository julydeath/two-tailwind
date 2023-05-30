import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { GiWitchFlight } from "react-icons/gi";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <GiWitchFlight size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-gray-700">MANOJTOUR</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="text-[var(--primary-dark)] mr-2"
          />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="text-[var(--primary-dark)] mr-2" />
          <p className="text-sm text-gray-700">3541654615</p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default TopBar;

import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Topnav = () => {
  const highlights = [
    "Sunlife Capital Renewal Demat",
    "Sunlife Capital Renewal KYC",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 3000); // Change interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav className="bg-white w-full px-4 py-2 flex justify-between items-center fixed top-0 z-20">
        <div className="flex items-center space-x-4 md:space-x-10 relative">
          <button className="bg-gradient-to-b from-blue-600 to-red-500 absolute text-white font-bold py-1 px-3 md:px-5 rounded-sm text-base md:text-xl">
            Highlights
          </button>

          <div className="marquee absolute top-0 left-24 right-0 bottom-0 overflow-hidden">
            <div className="highlight-item text-lg text-blue-600">
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className={`highlight ${
                    index === currentIndex ? "show" : ""
                  }`}
                >
                  {highlight}
                  <ArrowRightIcon />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hidden section for desktop view */}
        <div className="hidden md:flex items-center space-x-10">
          <span className="text-green-900 text-sm md:text-base">
            SFMF : 11.29 <span className="text-green-300">▲</span> as on
            2024-06-14
          </span>
          <button className="bg-gradient-to-b from-blue-600 to-red-500 text-white px-3 py-1 rounded text-xs md:text-base">
            Sunlife First Mutual Fund
          </button>
          <select className="bg-transparent text-blue-500 border-none text-sm md:text-base">
            <option value="EN">EN</option>
            <option value="NEP">NEP</option>
          </select>
        </div>

        {/* Visible section for mobile view */}
        <div className="flex items-center md:hidden space-x-4 -mt-32">
          <span className="text-green-900 text-sm mt-6 ml-10">
            SFMF : 21.29 <span className="text-green-300">▲</span> as on
            2024-06-14
          </span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs mt-24">
            SunLife First Mutual Fund
          </button>
          <select className="bg-transparent text-orange border-none text-sm">
            <option value="EN">EN</option>
            <option value="NEP">NEP</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;

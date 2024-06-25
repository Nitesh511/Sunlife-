import React from 'react';

const Topnav = () => {
  return (
    <div>
      <nav className="bg-white w-full px-4 py-2 flex justify-between items-center fixed top-0 z-10">
        <div className="flex items-center space-x-4 md:space-x-10 ">
          <button className="bg-orange-500 text-white font-bold py-1 px-3 md:px-5 rounded-sm text-base md:text-xl">
            Highlights
          </button>
          <span className="text-orange-700 text-sm md:text-base">
            Hello jdkjfsdfsdahlfkjsancis
          </span>
        </div>

        {/* Hidden section for desktop view */}
        <div className="hidden md:flex items-center space-x-10">
          <span className="text-green-900 text-sm md:text-base">
            SFMF : 11.29 <span className="text-green-300">▲</span> as on 2024-06-14
          </span>
          <button className="bg-orange-400 text-white px-3 py-1 rounded text-xs md:text-base">
            Sunrise First Mutual Fund
          </button>
          <select className="bg-transparent text-orange border-none text-sm md:text-base">
            <option value="EN">EN</option>
            <option value="NEP">NEP</option>
          </select>
        </div>

        {/* Visible section for mobile view */}
        <div className="flex items-center space-x-4 md:hidden">
          <span className="text-green-900 text-sm md:text-base">
            SFMF : 11.29 <span className="text-green-300">▲</span> as on 2024-06-14
          </span>
          <button className="bg-orange-400 text-white px-3 py-1 rounded text-xs md:text-base">
            Sunrise First Mutual Fund
          </button>
        </div>

        {/* Select element for mobile view */}
        <div className="flex items-center md:hidden">
          <select className="bg-transparent text-orange border-none text-sm md:text-base">
            <option value="EN">EN</option>
            <option value="NEP">NEP</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;

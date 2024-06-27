import React from 'react';
import Link from "react-router-dom";

const OtherServices = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Other Services
      </h2>
      <ul className="list-none space-y-1 space-x-1">
        <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
         <Link to={"/"}><span className="z-10 relative">Merchant Banking </span></Link> 
          <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
          <span className="z-10 relative">Portfolio Management Service </span>
          <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
          <span className="z-10 relative">Depository Participants</span>
          <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
          <span className="z-10 relative">Corporate Advisory</span>
          <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
          <span className="z-10 relative">Sunlife Specialized Investment Fund</span>
          <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </div>
  );
};

export default OtherServices;

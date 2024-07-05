import React from 'react';

const NoticeItem = ({ date, title }) => (
  <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group w-full">
    <div className="relative z-0">
      <p className="text-gray-600 text-sm group-hover:text-white">{date}</p>
      <h3 className="text-lg font-semibold mt-1 group-hover:text-white">{title}</h3>
      <button className="text-orange-500 mt-2 flex items-center group-hover:text-white">
        READ MORE 
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
  </div>
);

const NoticesAndUpdates = () => (
  <div className="flex flex-col lg:flex-row justify-center p-6  ">
    <div className="w-full lg:w-3/4 mt-6 lg:mt-32 lg:mr-96 ">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">
        Notices & Updates
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        <div className="w-full lg:w-auto flex flex-col">
          <NoticeItem date="Jun 11, 2024" title="Sunlife Capital Capital 2081 Maturity Notice" />
        </div>
        <div className="w-full lg:w-auto flex flex-col mt-6 lg:mt-0">
          <NoticeItem date="Jun 02, 2024" title="Demat Renewal and KYC Notice" />
        </div>
      </div>
    </div>
  </div>
);

export default NoticesAndUpdates;

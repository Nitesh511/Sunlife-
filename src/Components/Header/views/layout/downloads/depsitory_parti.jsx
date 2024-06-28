import React from 'react';
import Company from '../../../../../assets/company.jpg';

function DocumentList() {
  const categories = [
    "Mutual Fund Related",
    "Depository Participant Related",
    "PMS related",
    "Events",
    "Notices",
    "Prospectus",
    "Subha Laxmi Kosh Related",
    "RTA related forms",
    "Demat Related"
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left panel */}
      <div className="w-full lg:w-2/3 p-4">
        <div className="bg-white shadow rounded-lg p-4 mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-gray-700">SIP CANCELLATION FORM</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded uppercase text-sm font-bold">
            Download
          </button>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-gray-700">DEMAT& KYC Details</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded uppercase text-sm font-bold">
            Download
          </button>
        </div>
      </div>
      
      {/* Right panel */}
      <div className="w-full lg:w-1/3 bg-white p-4 mt-4 lg:mt-0">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="text-black hover:bg-blue-600 border-l-4 border-blue-500 pl-4 p-2 rounded cursor-pointer text-1xl hover:text-white">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DownloadDepository = () => {
  return (
    <div>
      <div className="relative h-96 bg-gray-300 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${Company})`,
            transform: "scale(1.1)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-32 text-white">
          {/* Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-32 lg:ml-72">
            <h1 className="text-4xl font-bold">Downloads</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Document List */}
        <DocumentList />
      </div>
    </div>
  );
}

export default DownloadDepository;

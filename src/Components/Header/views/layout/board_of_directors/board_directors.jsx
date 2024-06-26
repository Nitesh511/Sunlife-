import React from 'react';
import Company from "../../../../../assets/company.jpg";
import OrgChart from './board_img';

const Board_directors = () => {
  return (
    <div>
       {/* Main content */}
       <div className="relative h-96 bg-gray-300 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${Company})`, // Corrected syntax to use template literals and url()
            transform: "scale(1.1)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-32 text-white">
          {/* Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h1 className="text-4xl font-bold">Board Of Directors</h1>
        </div>
      </div>
      <OrgChart/>
      
    </div>
  )
}

export default Board_directors

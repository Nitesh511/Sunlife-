import React from 'react';
import Company from "../../../../../../assets/company.jpg";
import ChartComponent from './chart_component';
import MoreInfoForm from '../../issue_management/contact_merchant';

const Sunlife_first_mutal = () => {
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
        <div className="relative h-full flex flex-col justify-between p-32 text-white">
          {/* Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h1 className="text-4xl font-bold">Sunlife First Mutual Fund</h1>
        </div>
      </div>
      <ChartComponent/>
      <div className="relative mt-0 lg:mt-60">
          <MoreInfoForm/>
          </div>
        
      
    </div>
  )
}

export default Sunlife_first_mutal

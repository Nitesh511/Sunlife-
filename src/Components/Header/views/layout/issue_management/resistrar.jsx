import React from "react";
import Company from "../../../../../assets/company.jpg";
import Registrar_table from "./registrar_table";

const Registrar = () => {
  return (
    <div>
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
          <h1 className="text-4xl font-bold py-20">Registrar To Share</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600 border-b-4 border-blue-900">
                 Registrar Service
                </span>
              </h1>
        <p className="text-lg">
          Sunlife Capital excels in both pre-issue and post-issue management of
          shares. Alongside these core services, the company fulfills the
          crucial role of Registrar to Share, meticulously maintaining records
          of all shareholders and facilitating seamless verifications and share
          transfers. Moreover, Sunlife Capital handles all logistical
          arrangements for conducting Annual General Meetings (AGMs). With
          specialized expertise in Registrar to Share functions, Sunlife Capital
          currently manages RTS operations for a total of 29 companies. The
          following companies rely on Sunlife Capital for their Registrar to
          Share services:
        </p>
      </div>
      <Registrar_table/>
      
    </div>
  );
};

export default Registrar;

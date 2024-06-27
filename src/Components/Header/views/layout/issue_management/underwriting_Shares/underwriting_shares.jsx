import React from "react";
import Company from ".././../../../../../assets/company.jpg";
import Underwriting_Service_Table from "./underwriting_service_table";

const Underwriting_shares = () => {
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
          <h1 className="text-4xl font-bold">Underwriting Shares</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-600 border-b-4 border-blue-900">
            Underwriting Shares
          </span>
        </h1>

        <div className="text-lg mb-4">
          <p>
            SunLife Capital, adhering to Securities Issue and Allotment
            guidelines, mandates underwriting for companies going public.
            Studying market responses and past performance of similar companies,
            SunLife Capital has established a specialized unit to generate
            benchmark reports crucial for engaging in underwriting securities.
            Renowned for reliability, SunLife Capital is a trusted partner for
            companies entering the public sphere. With a proven track record,
            SunLife Capital has successfully underwritten securities for 53
            companies, solidifying its position in the market.
          </p>
        </div>
      </div>
      <Underwriting_Service_Table/>
    
    </div>
  );
};

export default Underwriting_shares;

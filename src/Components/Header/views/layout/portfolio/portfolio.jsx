import React from "react";
import portfolioImage from "../../../../../assets/portfolio.png";

const PortfolioService = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8">
        {/* Left Side (Image) */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={portfolioImage}
            alt="Portfolio Management"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <div className="bg-white p-8 md:p-32">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Portfolio Management Service
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Portfolio Management Service (PMS) refers to the customized
              investment management service on behalf of the clients which
              offers a professional approach to cater to the specific investment
              objectives of the clients.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioService;

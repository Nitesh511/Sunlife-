import React from "react";
import Company from "../../../../../assets/company.jpg";
import aboutpng from "../../../../../assets/about.png";
import CompanyInfo from "./company_info";
import Topnav from "../../../topnav";
import Navbar from "../../../Navbar";

const CompanyProfileHeader = () => {
  return (
    <>
      <Topnav />
      <Navbar />
      <div className="relative">
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
            <div className="absolute inset-0 flex items-center justify-center py-20">
          <div className="text-center text-white p-8 mt-24  ">
            <h1 className="text-4xl font-bold">Company Profile</h1>
          </div>
        </div>
          </div>
        </div>
        <div className="bg-white min-h-screen flex items-center justify-center lg:-mt-28">
          <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8">
            {/* Left Side (Text Content) */}
            <div className="md:w-1/2">
              <div className="bg-white p-8 md:p-32 ">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  <span className="text-blue-600 border-b-4 border-blue-900">
                    About Us
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SunLife Capital Limited (SLCL) is public limited company
                  registered as per the Companies Act of Nepal with an objective
                  to serve one stop financial service to the individuals and
                  institutional clients. SunLife Capital is a subsidiary company
                  of Sun Nepal Life Insurance Company limited. Along this,
                  SunLife Capital is promoted by expert entrepreneur, renowned
                  industrialists and executives’ professionals from financial
                  sectors. SunLife Capital Limited (SLCL) has obtained license
                  from securities Board of Nepal (SEBON) to be engaged in
                  merchant and investment banking activities in 2023. The
                  company aims to raise the industry standard by incorporating
                  best practices in capital market activities and embrace modern
                  technologies to amplify the products and services offered to
                  it's customers.
                </p>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Right Side (Image) */}
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src={aboutpng}
                alt="Advisory Service"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <CompanyInfo />
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8">
            {/* Left Side (Image) */}
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src={aboutpng} // Replace with actual path to your image
                alt="Company Logo"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Company History
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SunLife Capital Limited (SLCL) is public limited company
                  registered as per the Companies Act of Nepal with an objective
                  to serve one stop financial service to the individuals and
                  institutional clients. SunLife Capital is a subsidiary company
                  of Sun Nepal Life Insurance Company limited. Along this,
                  SunLife Capital is promoted by expert entrepreneur, renowned
                  industrialists and executives’ professionals from financial
                  sectors. SunLife Capital Limited (SLCL) has obtained license
                  from securities Board of Nepal (SEBON) to be engaged in
                  merchant and investment banking activities in 2023. The
                  company aims to raise the industry standard by incorporating
                  best practices in capital market activities and embrace modern
                  technologies to amplify the products and services offered to
                  it's customers.
                </p>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfileHeader;

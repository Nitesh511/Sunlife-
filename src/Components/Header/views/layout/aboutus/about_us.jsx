import React from "react";
import Company from "../../../../../assets/company.jpg";
import aboutpng from "../../../../../assets/about.png"
import CompanyInfo from "./company_info";

const CompanyProfileHeader = () => {
  return (
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h1 className="text-4xl font-bold">Company Profile</h1>
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
                Laxmi Sunrise Capital Limited (LS Capital), a wholly owned
                subsidiary of Laxmi Sunrise Bank Limited, formed from the merger
                of Laxmi Capital and Sunrise Capital, possesses a strong
                foundation in merchant banking. As a licensed merchant banker,
                LS Capital provides a wide range of merchant and investment
                banking activities. These include managing Initial Public
                Offerings (IPOs), underwriting securities, offering Portfolio
                Management Services (PMS), acting as a Registrar for Shares
                (RTA/RTS), providing Corporate Advisory Services, and
                functioning as a Fund Manager for both Specialized Investment
                Fund (PEVC) and Mutual Funds. Of note, the historical
                significance of NIDC Capital Market as Nepal's first capital
                market and the pioneer in launching the first mutual fund (NCM's
                first mutual fund) adds a rich heritage. With over 30 years of
                invaluable experience to the diverse financial services offered
                by the merged entity LS Capital is one of the most prominent
                Merchant Bank in Nepal.
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
      <CompanyInfo/>
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
          Laxmi Capital Market was registered with the Company Registrar's Office on 21st May 2009 and has been providing merchant Banking services as a subsidiary of Laxmi Bank Limited. Since Sunrise Bank Acquired NIDC Capital Markets Limited On 10th February 2017, Sunrise Capital Has Been Providing Merchant Banking Services as A Subsidiary Of Sunrise Bank Limited. Laxmi Capital and Sunrise Capital went to a merger on October 5, 2023, and began their joint transaction on January 8th, 2023.
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
  );
};

export default CompanyProfileHeader;

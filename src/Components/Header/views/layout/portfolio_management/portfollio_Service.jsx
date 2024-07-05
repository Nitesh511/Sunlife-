import React from "react";
import Company from "../../../../../assets/company.jpg";
import MoreInfoForm from "../issue_management/contact_merchant";

const Portfollio_Service = () => {
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
        <div className="absolute inset-0 flex items-center justify-center py-20">
          <div className="text-center text-white p-8 mt-24  ">
            <h1 className="text-4xl font-bold">Portfolio Management Service</h1>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen">
        <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-60 md:mr-12">
          {/* Left Side (Details) */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 md:p-32 lg:mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600 border-b-4 border-blue-900">
                  Portfolio Management Service
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Portfolio Management Service (PMS) at Sunlife Capital entails a
                bespoke investment management solution tailored to meet the
                precise investment objectives of our clients. The increasing
                complexities of investment management have transformed PMS into
                a dedicated professional service, especially for valued
                investors and busy clients who may lack the time and expertise
                needed for effective investment management. Managing numerous
                accounts, evaluating diverse investment strategies, reviewing
                extensive reports, and navigating operational challenges can be
                overwhelming. Each offering within our PMS is meticulously
                crafted through comprehensive market research and analysis of
                investment instruments, aligning with the unique preferences of
                our clients. Our goal is to not only provide exemplary service
                but also to establish enduring partnerships with our clients,
                fostering mutual growth and prosperity.
              </p>
            </div>
          </div>

          {/* Right Side (Services List) */}
          <div className="md:w-1/3">
            <div className="bg-white p-8 md:p-12 lg:p-16 lg:mt-32">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Other Services
              </h2>
              <ul className="list-none space-y-1 space-x-1">
                <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                  <span className="z-10 relative">Merchant Banking </span>
                  <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                  <span className="z-10 relative ">
                    Portfolio Management Service{" "}
                  </span>
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
                  <span className="z-10 relative">
                    Sunlife Specialized Investment Fund
                  </span>
                  <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     

      <div className="relative mt-0 lg:mt-0">
        <MoreInfoForm />
      </div>
    </div>
  );
};

export default Portfollio_Service;

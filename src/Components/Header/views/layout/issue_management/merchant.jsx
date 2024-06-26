import React from "react";
import Company from "../../../../../assets/company.jpg";
import MoreInfoForm from "./contact_merchant";

const Merchant = () => {
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
          <h1 className="text-4xl font-bold">Merchant Banking</h1>
        </div>
      </div>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-96">
          <div className="md:w-2/2">
            <div className="bg-white p-8 md:p-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Merchant Banking
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sunlife Capital, as a leading Merchant Banker, excels in
                channeling the financial surplus of the general public into
                productive investment avenues. We specialize in the management
                of mutual funds, public issues, trusts, securities, and
                international funds. Additionally, we provide expert advice to
                corporate clients on a wide range of issues, including mergers,
                acquisitions, and public issues.
              </p>
            </div>
          </div>

          {/* Right Side (Services List) */}
          <div className="md:w-1/2 mb-4 md:mb-0 mt-24 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Merchant Banking Services
            </h2>
            <ul className="list-none space-y-4">
              <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                <span className="z-10 relative">Issue Management</span>
                <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                <span className="z-10 relative">Registrar To Share</span>
                <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                <span className="z-10 relative">Advisory Service</span>
                <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                <span className="z-10 relative">Underwriting Shares</span>
                <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MoreInfoForm/>
    </div>
  );
};

export default Merchant;

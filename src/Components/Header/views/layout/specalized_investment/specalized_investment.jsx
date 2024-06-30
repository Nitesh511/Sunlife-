import React from "react";
import Company from "../../../../../assets/company.jpg";
import MoreInfoForm from "../issue_management/contact_merchant";

const Specalized_investment = () => {
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
          <h1 className="text-4xl font-bold">Sunlife Specialized Investment Fund</h1>
        </div>
      </div>

      <div className="bg-white min-h-screen">
        <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-60 md:mr-12">
          {/* Left Side (Details) */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 md:p-32 lg:mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600 border-b-4 border-blue-900">
                  Sunlife Specialized Investment Fund
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sunlife Capital is licensed by SEBON to operate Private Equity
                and Venture Capital (PE/VC) funds under the Specialized
                Investment Fund Regulation 2019. As one of the few companies
                with this license, we have successfully registered our inaugural
                fund - Sunlife Sustainable Energy Fund. This fund focuses on
                investments in hydroelectricity, solar, and wind energy, with up
                to 90% allocated to sustainable energy and the remaining 10% to
                other sectors. Additionally, Sunlife Capital is a signatory of
                the Operating Principles for Impact Management, a global
                community aimed at enhancing transparency and credibility in
                impact investing, hosted by the International Finance
                Corporation (IFC). This makes us the first in Nepal and unique
                in the SAARC region to join this initiative.
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

      <div className="relative mt-40">
        <MoreInfoForm />
      </div>
    </div>
  );
};

export default Specalized_investment;

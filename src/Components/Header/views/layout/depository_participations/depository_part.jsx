import React from "react";
import Company from "../../../../../assets/company.jpg";
import MoreInfoForm from "../issue_management/contact_merchant";

const Depository_part = () => {
  return (
    <div>
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
            <h1 className="text-4xl font-bold ">
              Portfolio Management Service
            </h1>
          </div>
        </div>
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-96 md:mr-12">
            <div className="md:w-2/2">
              <div className="bg-white p-8 md:p-32 lg:mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  <span className="text-blue-600 border-b-4 border-blue-900">
                    Depositary Participants
                  </span>
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  As a Depository Participant (DP), Sunlife Capital Limited
                  serves as a crucial intermediary between the depository system
                  (CDS and Clearing Ltd.) and our valued clients. Our DP
                  services establish a vital link, facilitating seamless
                  interaction between the company and its clients through the
                  depository framework. Each of our individual clients enrolled
                  in our DP services receives a dedicated account and is
                  recognized as the beneficial owner of that account. This
                  ensures efficient management and secure handling of securities
                  transactions, enhancing transparency and trust in our services
                  at Sunlife Capital.
                </p>
              </div>
            </div>

            {/* Right Side (Services List) */}
            <div className="md:w-3/4 mb-4 md:mb-0 lg:mt-52 lg:w-94 lg:relative lg:mr-80 ">
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
        <div className="bg-gray-100 py-12 lg:-mt-52">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6 ">
              Depositary Participants Service Details
            </h2>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our DP services help individual clients to maintain their
              securities account balances and perform the following functions:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
              <li>
                Open Beneficiary Owner (BO) account and maintain separate
                accounts in the name of each BO
              </li>
              <li>
                Dematerializationand Re-materialization of Securities by sending
                them to R&TA.
              </li>
              <li>Maintaina record of securities in the electronic form</li>
              <li>
                Settlement trades by transferring/receiving the securities
                from/in BO accounts,
              </li>
              <li>
                Electronic credit of securities allotted by issuers during IPOs,
              </li>
              <li>Facilitating pledging of dematerialized securities.</li>
             
            </ul>

            
          </div>
        </div>
         <div className="relative mt-40">
        <MoreInfoForm/>
      </div> 
      </div>
    </div>
  );
};

export default Depository_part;

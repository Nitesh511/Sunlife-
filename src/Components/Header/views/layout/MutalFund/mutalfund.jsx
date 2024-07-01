import React from "react";
import Company from "../../../../../assets/company.jpg";
import FundList from "./fund_list";
import MoreInfoForm from "../issue_management/contact_merchant";

const Mutual_fund_Service = () => {
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
          <h1 className="text-4xl font-bold">Mutual Fund</h1>
        </div>
      </div>

      <div className="bg-white min-h-screen">
        <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-60 md:mr-12">
          {/* Left Side (Details) */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 md:p-32 lg:mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600 border-b-4 border-blue-900">
                  Mutual Fund
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sunlife Capital manages a mutual fund established through
                collective investments deposited by participants under a
                contractual agreement. The fund aims to deliver efficient
                investment services or related assets, inclusive of additional
                assets managed under the Securities Act, 2007. In Nepal, mutual
                funds are overseen by the Securities Exchange Board of Nepal and
                can only be issued, supervised, and managed by entities or
                individuals meeting the criteria set forth in the Mutual Fund
                Regulation, 2067, and authorized by SEBON. Sunlife Capital
                obtained its Fund Manager and Depositary license on 2076/02/10.
                Presently, Sunlife Capital serves as the fund manager and
                depository for Sunlife Mutual Fund, comprising the Sunrise First
                Mutual Fund and Sunrise Bluechip Fund.
              </p>
            </div>
          </div>

          {/* Right Side (Services List) */}
          <div className="md:w-1/3">
            <div className="bg-white p-8 md:p-12 lg:p-16 lg:mt-40">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Other Services
              </h2>
              <ul className="list-none space-y-4">
                <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                  <span className="z-10 relative">Merchant Banking </span>
                  <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
                  <span className="z-10 relative">Portfolio Management Service </span>
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
                  <span className="z-10 relative">Sunlife Specialized Investment Fund</span>
                  <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 lg:-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Objectives of Mutual Fund
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>To design a collective investment scheme</li>
            <li>To create a highly transparent and regulated sector of investment</li>
            <li>To manage the public fund through professional money managers</li>
            <li>To minimize the risk and maximize the return for the investors</li>
            <li>To diversify the investment in a wide range of securities</li>
            <li>To make service affordable to everyone by proposing minimal initial investment requirements</li>
            <li>To make research-based investments</li>
            <li>To preserve and promote the wealth of investors through ethical, planned, disciplined, and sustainable investments</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
            Closed-End Mutual Fund
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The mutual fund scheme has a stipulated maturity period with a subscription period opened for a specific period only. The investors can invest in the schemes through an initial public offering and later on the unit can be bought and sold through the stock exchange.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Fixed number of shares offered through an initial public offering</li>
            <li>Fixed maturity period</li>
            <li>Units are listed in the stock exchange</li>
            <li>Closed-end funds units are sold either on a premium or discount of the par value</li>
            <li>Fund size is fixed with limited capitalization</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
            Open-End Mutual Fund
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The fund scheme is available for subscription on a daily basis based on their Net Assets Value (NAV). Such fund schemes have a fixed maturity period and the key feature of open-ended schemes is their high liquidity feature.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Open-end fund shares are sold by the investment company directly to the investors</li>
            <li>Open-end mutual fund units are bought and sold at their Net Asset Value</li>
            <li>Do not have a fixed maturity period</li>
            <li>Fund size is flexible with unlimited capitalization</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
            Structure
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Fund Sponsor:</strong> 'SPONSOR' is any person who establishes a Mutual Fund, acting alone or in combination with another body corporate.
            <br />
            <strong>Fund Manager:</strong> The Fund Sponsor appoints the Fund Manager, who manages and invests the assets of the scheme efficiently.
            <br />
            <strong>Depository:</strong> The Fund Manager appoints the depository to maintain the record of units and safekeeping of securities.
            <br />
            <strong>Fund Supervisors:</strong> The Fund Sponsor appoints at least five people as Fund Supervisors to supervise the fund and protect the Unit holder’s interest.
          </p>
        </div>
      </div>

      <div className="relative mt-0 lg:mt-2  ">
        <FundList />
      </div>

      <div className="relative mt-0 lg:mt-60">
        <MoreInfoForm />
      </div>
    </div>
  );
};

export default Mutual_fund_Service;

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
        <div className="relative h-full flex flex-col justify-between p-32 text-white">
          {/* Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h1 className="text-4xl font-bold ">Portfolio Management Service</h1>
        </div>
      </div>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-96 md:mr-12">
          <div className="md:w-2/2">
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
            Portfolio Management Service Details
          </h2>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Required Documents for Portfolio Management Service:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Photo (PP size) of Applicant: 5 copies</li>
            <li>Copy of Citizenship: 1 (verified with original)</li>
            <li>Copy of PAN: 1 (verified with original)</li>
            <li>
              Copy of DEMAT statement: if the client is willing to transfer
              existing shares
            </li>
            <li>Copy of Nominee Citizenship: if the nominee is appointed</li>
            <li>Copy of Photo of Nominee: 2 copies</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Key Activities to Perform/Operational Modality Sunrise Capital
            Portfolio Management Services:
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sunrise Capital Ltd. as Portfolio Manager would be authorized to
            perform all the necessary activities as declared by the PMS
            agreement mutually signed by the client and Portfolio Manager. Once
            the agreement is signed, some of the key activities Sunrise Capital
            PMS will perform are:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>
              Opening of Portfolio Bank Account (only for portfolio purpose,
              obtaining Mandate from the client).
            </li>
            <li>
              Opening of DEMAT Account (only for portfolio purpose, obtaining
              Mandate from the client).
            </li>
            <li>
              BO-BO Transfers (if the client handover his existing shares in the
              portfolio service)
            </li>
            <li>
              Deposit of Cash in Portfolio Bank Account (if the client provides
              cash for investment).
            </li>
            <li>Opening of Broker Account (only for portfolio purposes).</li>
            <li>
              Developing the Plan for Investment as per research recommendation.
            </li>
            <li>Executing the Plan.</li>
            <li>Monitoring the Investment.</li>
            <li>
              Reporting the Portfolio Investment Status online system service or
              via Email.
            </li>
            <li>Annual Revaluation of the Portfolio.</li>
            <li>Other activities on an ad hoc basis.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Operational Modality:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>
              Minimum Investment(NPR): 300,000.00 (In words: Three Lakh Only)
            </li>
            <li>
              Investment Mode: Cash and/or Stocks or (both) not less than
              minimum Investment value of 3 lakhs. Existing stocks of clients
              will be valued at last trading price (LTP) of the date, when the
              stocks are brought into the custody of PMS.
            </li>
            <li>
              Term of Contract/Agreement: 3 years (from the date of starting
              PMS)
            </li>
            <li>Portfolio Revaluation: Annual basis</li>
            <li>Profit Withdrawal: Annual basis</li>
            <li>
              Portfolio Exit: The exit fee will be applicable in case of client
              withdraw the agreement before one year from the date of its
              commencement.
            </li>
            <li>
              Investment Executions: Every Investment shall be done as per the
              research recommendations and as per constructed portfolio plan and
              strategy under the discretionary portfolio.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
            Discretionary PMS Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            LS Capital offers portfolio service where the clients can provide
            rights to the portfolio manager to independently manage the funding
            in accordance with the investment need of the clients. Simply the
            investment decisions are made at the portfolio manager's discretion.
            Our discretionary services help you drift the everyday burden of
            investment and administrative responsibilities. In accordance with
            applicable law, the Client entirely appoints their risk to the
            Portfolio Manager to provide services for and in respect of Assets
            of the Account in accordance with the provisions of the
            discretionary Agreement.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
            Non-Discretionary PMS Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Under this service, LS Capital Ltd. as licensed Portfolio Manager
            acts on the instructions received from the Client with regard to the
            investment of funds of the Client under a contract relating to the
            portfolio. The choice remains within our customers to be in line
            with strategies or develop their own strategies and then we will
            work on their behalf to implement those strategies.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
            Advisory PMS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Under non-discretionary PMS, this service involves the management
            and planning of investment portfolios, usually for a fee. As
            portfolio managers, we will offer investment advice and consulting
            with detailed research-backed reports to clients for making the
            productive investment in various avenues.
          </p>
        </div>
      </div>
      <div className="relative mt-40">
        <MoreInfoForm />
      </div>
    </div>
  );
};

export default Portfollio_Service;

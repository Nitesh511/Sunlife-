import React from 'react'
import Company from "../../../../../assets/company.jpg"
import MoreInfoForm from '../issue_management/contact_merchant'

const Corporate_advisory = () => {
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
          <h1 className="text-4xl font-bold">
            Corporate Advisory Services
          </h1>
        </div>
      </div>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8 md:-mt-96 md:mr-12">
          <div className="md:w-2/2">
            <div className="bg-white p-8 md:p-32 lg:mt-96    relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600 border-b-4 border-blue-900">
                  Corporate Advisory Services
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Advisory services focus on developing corporate growth and success strategies.
                <br /><br />
                <strong>IPO Ahead:</strong> A company typically goes public when it sells securities to the general public for the first time. Under this service, our team of experts will help your company to go public regardless of the size, stage, or industry your company is currently operating in. We access the readiness of your company for going public and assist in fulfilling legal and regulatory requirements for going public. We also perform a valuation of your company shares to determine the appropriate price of your shares (par or premium). Our team will also assist your company in post-IPO services.
                <br /><br />
                <strong>Venture Capital Advisory and Financing:</strong> Venture capital (VC) is a form of private equity that funds startups and early-stage emerging companies with little to no operating history but significant potential for growth. Sunlife Capital will help the young company’s executives make decisions to drive growth. Startup founders have deep expertise in their chosen line of business, but they may lack the skills and knowledge required to cultivate a growing company. We guide these emerging companies to scale up their business by assisting them in various legal, financial, marketing, operation accounting, and tax issues. We will also help companies to raise capital in the right circumstances by matching them with investors (high net-worth clients of Sunlife Capital).
                <br /><br />
                <strong>Valuation Services:</strong> Based on relevant market data and internationally recognized valuation techniques, our business valuation consultant will perform an in-depth analysis to ascertain a fair business valuation report to the requesting stakeholder(s).
                <br /><br />
                <strong>Promoter Share Offloading/Buying:</strong> Sunlife Capital will help you to offload/buy promoter shares by fulfilling all regulatory requirements. We will also ensure that you get the best price for your investment.
                <br /><br />
                <strong>Loan Syndication:</strong> Loan syndication is the process of involving several different lenders in providing various portions of a loan. Loan syndications most often occur in situations where a borrower requires a large sum of capital that may be too much for a single lender to provide or outside the scope of a lender’s risk exposure levels. Thus, multiple lenders work together to provide the borrower with the capital needed. Here, our team of experts will provide loan syndication services at the best interest rates possible.
                <br /><br />
                <strong>Business Planning:</strong> A business plan is a formal statement of business goals, reasons they are attainable, and plans for reaching them. It also contains background information about the organization or team attempting to reach those goals. Business planning is a decision-making tool, by which an expert uses various methods to plan the business framework. Our team of experts will help you in developing a business development plan and set long-term and short-term goals for growth along with a roadmap to achieve them. We also assist companies to review and revise their plan as per necessity.
                <br /><br />
                <strong>Financial Restructuring:</strong> The financial restructuring may take place due to the company’s Board of Directors (BOD) aim to make the company financially sound and efficient. In a lot of cases, it is also chosen to be done when a fall in sales because of adverse economic conditions. Here, the firm may change the equity pattern, cross-holding pattern, debt-servicing schedule, and equity holdings. All this is done to sustain the profitability of the firm and sustain in the market. Our team of financial experts will assist the companies in achieving the optimum financial mix required for their growth and sustainability.
              </p>
            </div>
          </div>

          {/* Right Side (Services List) */}
<div className="md:w-3/4 mb-4 md:mb-0 relative lg:-top-36">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Other Services
  </h2>
  <ul className="list-none space-y-1 space-x-1">
    <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
      <span className="z-10 relative">Merchant Banking</span>
      <span className="absolute left-0 bottom-0 h-full w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group mb-4 text-lg text-gray-700 border p-4 hover:text-white">
      <span className="z-10 relative">Portfolio Management Service</span>
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
      <div className="relative mt-40">
        <MoreInfoForm />
      </div>
    </div>
  )
}

export default Corporate_advisory

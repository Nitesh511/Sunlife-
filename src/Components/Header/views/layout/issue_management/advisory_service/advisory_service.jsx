import React,{useEffect} from "react";
import Company from ".././../../../../../assets/company.jpg";
import MoreInfoForm from "../contact_merchant";



const Advisory_Issue = () => {
  return (
    <div>
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
            <h1 className="text-4xl font-bold">Advisory Services</h1>
          </div>
        </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600 border-b-4 border-blue-900">
                  Advisory Service
                </span>
              </h1>
        <div className="text-lg mb-4">
          <p>
            Sunlife Capital offers customized financial advisory services to
            clients empowering them to achieve their objectives and
            destinations. Some of our advisory services include:
          </p>
        </div>
        <div className="text-lg mb-4 space-y-4">
          <p>
            <strong>1. Consulting Services:</strong>      <br></br>      <br></br> At Sunlife Capital, we excel
            in providing comprehensive consulting services, empowering our
            clients with strategic insights that drive informed decision-making
            and foster sustainable growth.
          </p>
         
          <p>
            <strong>2. Business Planning and Financial Projection:</strong> <br></br><br></br>Our
            expert team collaborates closely with clients to craft robust
            business plans, conduct thorough feasibility analyses, and develop
            precise financial projections, laying a solid foundation for
            long-term success.
          </p>
          <p>
            <strong>3. Loan Syndication and Corporate Financing:</strong>{" "}<br></br><br></br>
            Specializing in loan syndication, Sunlife Capital brings together
            diverse lenders to ensure businesses receive the capital needed for
            ambitious ventures. Our focus is on securing favorable interest
            rates and facilitating corporate financing arrangements.
          </p>
          <p>
            <strong>4. Business Restructuring and Financial Optimization:</strong>{" "}<br></br><br></br>
            Recognizing the dynamic nature of markets, Sunlife Capital guides
            companies through financial restructuring, adapting to economic
            challenges and optimizing equity patterns for sustained
            profitability and market resilience.
          </p>
          <p>
            <strong>5. Valuation Services:</strong> <br></br><br></br>Utilizing internationally
            recognized valuation techniques, Sunlife Capital conducts in-depth
            analyses to provide comprehensive business valuation reports,
            empowering stakeholders with vital information for strategic
            decision-making.
          </p>
          <p>
            <strong>6. Private Equity, Venture Capital, and IPO Services:</strong>{" "}<br></br><br></br>
            Sunlife Capital simplifies the journey to going public, ensuring
            compliance with legal and regulatory requirements. Our venture
            capital advisory services assist startups in accessing funding and
            strategic guidance for sustainable growth.
          </p>
          <p>
            <strong>7. Promoter Share Offloading/Buying:</strong><br></br><br></br> For those
            seeking to offload or acquire promoter shares, Sunlife Capital
            navigates regulatory requirements, securing optimal value for
            investments with precision and expertise.
          </p>
          <p>
            <strong>8. Comprehensive Financial Services:</strong><br></br><br></br> From business
            planning to financial restructuring, Sunlife Capital offers
            end-to-end financial services, covering legal, financial,
            marketing, operational, accounting, and tax considerations. Our
            integrated approach addresses the multifaceted needs of emerging and
            established companies alike.
          </p>
        </div>
      </div>
      <div className="relative mt-0 lg:mt-0"> <MoreInfoForm/> </div>
  
    </div>
  );
};

export default Advisory_Issue;

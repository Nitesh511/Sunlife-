import React from "react";
import dashboard from "../../.././../assets/dashboard.png";
import OurServices from "./services/services";
import MutualFundChart from "./chart/chart";
import PortfolioService from "./portfolio/portfolio";
import AdvisoryService from "./portfolio/advisory_service";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full h-96 sm:h-96 md:h-2/5 lg:h-2/5 xl:h-2/5 flex justify-center items-center overflow-hidden">
        <img
          src={dashboard}
          alt="Dashboard"
          className="w-full h-full object-cover"
        />
      </div>
      <OurServices />
      <MutualFundChart />
      <div className="relative -mt-2">
        <PortfolioService />
      </div>
      <div className="relative lg:-mt-52 -mt-24">
        <AdvisoryService />
      </div>
    </div>
  );
};

export default Dashboard;

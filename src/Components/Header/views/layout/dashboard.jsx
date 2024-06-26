import React from 'react'
import dashboard from "../../.././../assets/dashboard.png";
import OurServices from './services/services';
import MutualFundChart from "./chart/chart";
import PortfolioService from "./portfolio/portfolio";
import AdvisoryService from "./portfolio/advisory_service";

const Dashboard = () => {
  return (
    <div>
     <div className="w-full h-2/5-screen flex justify-center items-center overflow-hidden">
      <img src={dashboard} alt="Dashboard" className="w-full h-full object-cover" />
    </div>
    <OurServices/>
    <MutualFundChart/>
    <PortfolioService/>
    <AdvisoryService/>


    </div>
  )
}

export default Dashboard

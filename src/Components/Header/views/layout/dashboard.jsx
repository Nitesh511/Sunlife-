import React,{ useState, useEffect }  from "react";
import Topnav from "../../topnav";
import Navbar from "../../Navbar";
import OurServices from "./services/services";
import MutualFundChart from "./chart/chart";
import PortfolioService from "./portfolio/portfolio";
import AdvisoryService from "./portfolio/advisory_service";
import mother1 from "../../../../assets/mother1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "./Redux/languageSlice";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const lang = useSelector(selectLanguage);

  
  useEffect(() => {
    if (i18n.isInitialized) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  return (
    <>
      <Topnav />
      <Navbar />
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-8 py-60 md:py-40 relative flex flex-col md:flex-row items-center w-full md:h-2/5 lg:h-2/5 xl:h-2/5 overflow-hidden">
        <div className="md:w-2/5 mb-6 md:mb-0  ml-0 lg:ml-32">
          <h1 className="text-4xl font-bold mb-4">{t("Sunlife Capital")}</h1>
          <p className="mb-6">
            {t("Certainly")}
          </p>
          <button className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
            {t("Learn More →")}
          </button>
        </div>
        <div className="md:w-1/2 bg-none">
          <div className="rounded-lg shadow-lg overflow-hidden h-full">
            <img
              src={mother1}
              alt="Company representation"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div data-aos="flip-left">
      <OurServices />
      </div>
     
     <div data-aos="flip-up">
     <MutualFundChart />

     </div>
    
      <div className="relative -mt-2  " data-aos="slide-left">
        <PortfolioService />
      </div>
      <div className="relative lg:-mt-52 -mt-24" data-aos="slide-right">
        <AdvisoryService />
      </div>
      
    </>
  );
};

export default Dashboard;

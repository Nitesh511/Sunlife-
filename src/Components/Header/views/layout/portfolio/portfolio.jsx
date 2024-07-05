import React,{useEffect} from "react";
import portfolioImage from "../../../../../assets/portfolio.png";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "../Redux/languageSlice";
import { useSelector } from "react-redux";
useSelector

const PortfolioService = () => {
  const { t, i18n } = useTranslation();
  const lang = useSelector(selectLanguage);
  
  useEffect(() => {
    if (i18n.isInitialized) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8">
        {/* Left Side (Image) */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={portfolioImage}
            alt="Portfolio Management"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <div className="bg-white p-8 md:p-32">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              {t("Portfolio")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {t("PortfolioManagementService")}
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioService;

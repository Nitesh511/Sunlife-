import React,{useEffect} from 'react';
import advisoryImage from '../../../../../assets/Advisory.png';
import NoticeItem from "./noticecard.jsx"
import { useSelector } from 'react-redux';
import { selectLanguage } from '../Redux/languageSlice.jsx';
import { useTranslation } from 'react-i18next';




const AdvisoryService = () => {
  const { t, i18n } = useTranslation();
  const lang = useSelector(selectLanguage);

  useEffect(() => {
    if (i18n.isInitialized) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className=''>
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-8xl mx-auto px-4 py-8 md:flex md:items-center md:space-x-8">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2">
          <div className="bg-white p-8 md:p-32 ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t("Advisory")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Advisory Service refers to professional advice provided to clients
              regarding various financial matters, including investment
              strategies, risk management, and financial planning. This service
              aims to guide clients in making informed decisions to achieve
              their financial goals.
            </p>
            <div className='flex justify-center md:justify-center'>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            >
              Read More
            </button>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={advisoryImage}
            alt="Advisory Service"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <div className='relative lg:-mt-36'> <NoticeItem/></div>
   
    </div>
  );
};

export default AdvisoryService;

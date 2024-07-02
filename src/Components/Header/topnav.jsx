import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTranslation } from "react-i18next";
import {
  changeLanguage,
  selectLanguage,
} from "./views/layout/Redux/languageSlice";
import { Provider } from "react-redux";
import store from "./views/layout/Redux/store";
import i18n from "../../i18n";

const Topnav = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectLanguage);
  const { t } = useTranslation();

  const englishHighlights = [
    "Sunlife Capital Renewal Demat",
    "Sunlife Capital Renewal KYC",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (englishHighlights.length || 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [englishHighlights.length]);

  const handleChange = (e) => {
    const newLang = e.target.value;
    dispatch(changeLanguage(newLang));

    if (i18n.isInitialized) {
      i18n.changeLanguage(newLang);
    } else {
      console.error("i18next is not initialized correctly.");
    }
  };

  const highlights =
    englishHighlights && englishHighlights.map((highlight) => t(highlight));

  return (
    <Provider store={store}>
      <nav className="bg-white w-full px-4 py-2 flex flex-col md:flex-row justify-between items-start md:items-center fixed z-30 mt-0">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10 w-full md:w-auto">
          <div className="flex items-center space-x-4 relative -mt-0">
            <button className="bg-gradient-to-b from-blue-600 to-red-500 text-white font-bold py-1 px-3 md:px-5 rounded-sm text-base md:text-xl">
              {t("Highlights")}
            </button>

            <div className="marquee relative overflow-hidden">
              <div className="highlight-item text-lg text-blue-600 relative">
                {highlights &&
                  highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className={`highlight ${
                        index === currentIndex ? "show" : ""
                      }`}
                    >
                      {highlight}
                      <ArrowRightIcon />
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-0 md:space-y-0 md:space-x-0 w-full md:w-auto">
            <span className="text-green-900 text-sm md:text-base">
              {t("SFMF : 11.29 as on 2024-06-14")}{" "}
              <span className="text-green-300">▲</span>
            </span>
            <button className="bg-gradient-to-b from-blue-600 to-red-500 text-white px-3 py-1 rounded text-xs md:text-base">
              {t("Sunlife First Mutual Fund")}
            </button>
            <select
              value={lang}
              onChange={handleChange}
              className="absolute right-10 md:right-60  bg-transparent text-blue-500 border-none text-sm md:text-base"
            >
              <option value="en">English</option>
              <option value="ne">Nepali</option>
            </select>
          </div>  
        </div>
      </nav>
    </Provider>
  );
};

export default Topnav;

import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "@mui/icons-material/Menu";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "./views/layout/Redux/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import i18n from "../../i18n";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [nestedDropdownOpenMutual, setNestedDropdownOpenMutual] =
    useState(null);
  const [nestedDropdownOpenDownload, setNestedDropdownOpenDownload] =
    useState(null);
  const { t, i18n } = useTranslation();
  const lang = useSelector(selectLanguage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (i18n.isInitialized) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const toggleDropdown = (section) => {
    setDropdownOpen(dropdownOpen === section ? null : section);
    if (section !== "merchantBanking") {
      setNestedDropdownOpen(null);
    }
    if (section !== "mutualfund") {
      setNestedDropdownOpenMutual(null);
    }
    if (section !== "download") {
      setNestedDropdownOpenDownload(null);
    }
  };

  const toggleNestedDropdown = (section) => {
    if (section === "merchantBanking") {
      setNestedDropdownOpen(nestedDropdownOpen === section ? null : section);
    } else if (section === "mutualfund") {
      setNestedDropdownOpenMutual(
        nestedDropdownOpenMutual === section ? null : section
      );
    } else if (section === "download") {
      setNestedDropdownOpenDownload(
        nestedDropdownOpenDownload === section ? null : section
      );
    }
  };

  return (
    <>
      <div className="">
        <nav className="bg-gradient-to-b from-blue-600 to-red-500 text-white w-full fixed top-12 z-20 mt-0 lg:mt-0 mt-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to={"/"}>
                  <img src={logo} alt="LS Capital" className="h-20 w-20 mr-3" />
                </Link>
              </div>

              <div className="hidden lg:flex space-x-4">
                <Link
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium"
                  to={"/"}
                >
                  {lang === "en" ? "Home" : t("Homepage")}
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("about")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium flex items-center">
                    {t("AboutUs")}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "about" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <Link
                        className="block px-5 py-2 text-black hover:bg-orange-600 hover:text-white"
                        to={"/company_profile"}
                      >
                        {t("Company Profile")}
                      </Link>
                      <Link
                        className="block px-5 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/board_directors"}
                      >
                        {t("Board")}
                      </Link>
                      <Link
                        className="block px-5 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/management_team"}
                      >
                        {t("Management")}
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("services")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium flex items-center">
                    {t("Services")}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "services" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          toggleNestedDropdown("merchantBanking")
                        }
                        onMouseLeave={() => toggleNestedDropdown(null)}
                      >
                        <Link
                          className="block px-4 py-2 text-black flex justify-between items-center  hover:bg-orange-600 hover:text-white"
                          to={"/services/merchant_banking"}
                        >
                          {t("Merchant")}
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                        {nestedDropdownOpen === "merchantBanking" && (
                          <div className="absolute top-0 left-full bg-white rounded-md shadow-lg w-60">
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/issue_management"}
                            >
                              {t("Issue")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/registrar"}
                            >
                              {t("Register")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/advisory_service"}
                            >
                              {t("Advisory")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              {t("Underwriting")}
                            </Link>
                          </div>
                        )}
                      </div>
                      <div
                        className="relative"
                        onMouseEnter={() => toggleNestedDropdown("mutualfund")}
                        onMouseLeave={() => toggleNestedDropdown(null)}
                      >
                        <Link
                          className="block px-4 py-2 text-black flex justify-between items-center  hover:bg-orange-600 hover:text-white"
                          to={"/services/mutual_fund_service"}
                        >
                          {t("Mutual Fund")}
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                        {nestedDropdownOpenMutual === "mutualfund" && (
                          <div className="absolute -top-10 left-full bg-white rounded-md shadow-lg w-60">
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={
                                "/services/mutual_fund_service/sunlife_first_mutal"
                              }
                            >
                              {t("Sunlife First")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={
                                "/services/mutual_fund_service/sunlife_first_mutal"
                              }
                            >
                              Sunlife Second Mutal Fund
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={
                                "/services/mutual_fund_service/sunlife_first_mutal"
                              }
                            >
                              Sunlife Third Mutal Fund
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={
                                "/services/mutual_fund_service/sunlife_first_mutal"
                              }
                            >
                              Sunlife Fourth Mutal Fund
                            </Link>
                          </div>
                        )}
                      </div>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/portfolio_management"}
                      >
                        {t("Portfolio")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/depository_service"}
                      >
                        {t("Depository")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/specalized_investment"}
                      >
                        {t("Specialized")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/cooperate_advisory"}
                      >
                        {t("Corporate")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/our_services"}
                      >
                        {t("View All")}
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("information")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-white-600 px-3 py-2 rounded-md text-base font-medium flex items-center  hover:bg-orange-600 hover:text-white">
                    {t("Information")}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "information" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <div
                        className="relative"
                        onMouseEnter={() => toggleNestedDropdown("download")}
                        onMouseLeave={() => toggleNestedDropdown(null)}
                      >
                        <Link
                          className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white flex justify-between items-center"
                          to={"/downloads"}
                        >
                          {t("Downloads")}
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                        {nestedDropdownOpenDownload === "download" && (
                          <div className="absolute top-0 left-full bg-white rounded-md shadow-lg w-60">
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/downloads/depository_participants"}
                            >
                              {t("Depository Participant")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/registrar"}
                            >
                              {t("PMS")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/advisory_service"}
                            >
                              {lang === "en" ? "Events" : t("Events")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              {t("Notices")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              {t("Prospectus")}
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              {t("Demat Related")}
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link
                        className="block px-4 py-2 text-black   hover:bg-orange-600 hover:text-white"
                        to={"/downloads/reports"}
                      >
                        {t("Reports")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/downloads/news"}
                      >
                        {t("News")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/downloads/notice_updates"}
                      >
                        {t("Notices")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/downloads/faq"}
                      >
                        {t("FAQ")}
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        {t("Insights")}
                      </a>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/downloads/gallery"}
                      >
                        {t("Gallery")}
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("results")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-orange-600 px-3 py-2  hover:bg-orange-600 hover:text-white rounded-md text-base font-medium flex items-center">
                    {t("Results")}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "results" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/results/ipo_results"}
                      >
                        {t("IPO Result")}
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/results/rights_share_results"}
                      >
                        {t("Right Share Eligibility")}
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        {t("Tax Liability Check")}
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        {t("RightShare")}
                      </a>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("online")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-orange-600 px-3 py-2  hover:bg-orange-600 hover:text-white rounded-md text-base font-medium flex items-center">
                    {t("Online Services")}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "online" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/online_service/pms_form"}
                      >
                        {t("PMS Form")}
                      </Link>
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("Sunlife Kosh")}
                </a>
              </div>
              <div
                className="relative"
                onMouseEnter={() => toggleDropdown("login")}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button className="bg-white text-orange-500 px-4 py-2 rounded-md text-base font-medium hover:bg-orange-100">
                  {t("Login")}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "login" && (
                  <div className="absolute bg-white mt-0 rounded-md shadow-lg w-32  ">
                    <Link
                      className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      to={"/login"}
                    >
                      {t("PMS Login")}
                    </Link>
                    <a
                      className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      href="https://meroshare.cdsc.com.np/#/login"
                    >
                      {t("MeroShare Login")}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center absolute ml-56">
                <button
                  className="lg:hidden lg:ml-4 sm:mr-12 text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  to={"/"}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </Link>

                <button
                  onClick={() => toggleDropdown("about")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "about" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60 ">
                    <Link
                      className="block px-5 py-2 text-black"
                      to={"/company_profile"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Company Profile")}
                    </Link>
                    <Link
                      className="block px-5 py-2 text-black"
                      to={"board_directors"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Board")}
                    </Link>
                    <Link
                      href="#"
                      className="block px-5 py-2 text-black"
                      to={"/management_team"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Management")}
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown("services")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "services" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                    <button
                      onClick={() => toggleNestedDropdown("merchantBanking")}
                      className="block px-4 py-2 text-black w-full text-left flex justify-between items-center"
                    >
                      <Link
                        to={"/services/merchant_banking"}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {t("Merchant")}
                      </Link>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    {nestedDropdownOpen === "merchantBanking" && (
                      <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/issue_management"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {t("Issue")}
                        </Link>
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/registrar"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Registrar To Share
                        </Link>
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/advisory_service"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Advisory Service
                        </Link>
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/underwriting_service"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {t("Underwriting")}
                        </Link>
                      </div>
                    )}
                    <button
                      onClick={() => toggleNestedDropdown("mutualfund")}
                      className="block px-4 py-2 text-black w-full text-left flex justify-between items-center"
                    >
                      <Link
                        to={"/services/mutual_fund_service"}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {t("Mutual Fund")}
                      </Link>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    {nestedDropdownOpenMutual === "mutualfund" && (
                      <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                        <Link
                          className="block px-4 py-2 text-black"
                          to={
                            "/services/mutual_fund_service/sunlife_first_mutal"
                          }
                        >
                          {t("Sunlife First")}
                        </Link>
                        <a href="#" className="block px-4 py-2 text-black">
                          Sunlife Second Mutal Fund
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Sunlife Third Mutal Fund
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Sunlife Fourth Mutal Fund
                        </a>
                      </div>
                    )}
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/portfolio_management"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Portfolio")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/depository_service"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Depository")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/specalized_investment"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Specialized")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/cooperate_advisory"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Corporate")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/our_services"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("View All")}
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown("information")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("Information")}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "information" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                    <button
                      onClick={() => toggleNestedDropdown("download")}
                      className="block px-4 py-2 text-black w-full text-left flex justify-between items-center"
                    >
                      <Link
                        to={"/downloads"}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {t("Downloads")}
                      </Link>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    {nestedDropdownOpenDownload === "download" && (
                      <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/downloads/depository_participants"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {t("Depository")}
                        </Link>
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/registrar"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {t("Registrar")}
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-black"
                          to={"/services/advisory_service"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {t("Advisory")}
                        </Link>
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/underwriting_service"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {t("Underwriting")}
                        </Link>
                      </div>
                    )}

                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/downloads/reports"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Reports")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/downloads/news"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("News")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/downloads/notice_updates"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Notices
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/downloads/faq"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("FAQ")}
                    </Link>
                    <a href="#" className="block px-4 py-2 text-black">
                      {t("Insights")}
                    </a>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/downloads/gallery"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Gallery")}
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown("results")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("Results")}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "results" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/results/ipo_results"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("IPO Result")}
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/results/rights_share_results"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("Right Share Eligibility")}
                    </Link>
                    <a href="#" className="block px-4 py-2 text-black">
                      {t("Tax Liability Check")}
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      {t("RightShare")}
                    </a>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown("online")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("Online Services")}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "online" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/online_service/pms_form"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                        {t("PMS Form")}
                    </Link>
                  </div>
                )}

                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("Sunlife Kosh")}
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

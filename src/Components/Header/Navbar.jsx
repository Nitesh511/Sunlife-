import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from '@mui/icons-material/Menu';
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [nestedDropdownOpenMutual, setNestedDropdownOpenMutual] =
    useState(null);
  const [nestedDropdownOpenDownload, setNestedDropdownOpenDownload] =
    useState(null);

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
    } else if(section==="download"){
      setNestedDropdownOpenDownload(
        nestedDropdownOpenDownload === section ? null : section
      );

    }
  };

  return (
    <>
      <div className="">
        <nav className="bg-gradient-to-b from-blue-600 to-red-500 text-white w-full fixed top-12 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to={"/"}><img src={logo} alt="LS Capital" className="h-20 w-20 mr-3" /></Link>
              </div>

              <div className="hidden lg:flex space-x-4">
                <Link
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium"
                  to={"/"}
                >
                  Home
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("about")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium flex items-center">
                    About Us
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "about" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <Link
                        className="block px-5 py-2 text-black hover:bg-orange-600 hover:text-white"
                        to={"/company_profile"}
                      >
                        Company Profile
                      </Link>
                      <Link
                        className="block px-5 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/board_directors"}
                      >
                        Board of Directors
                      </Link>
                      <Link
                        className="block px-5 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/management_team"}
                      >
                        Management Team
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
                    Services
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
                          Merchant Banking
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                        {nestedDropdownOpen === "merchantBanking" && (
                          <div className="absolute top-0 left-full bg-white rounded-md shadow-lg w-60">
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/issue_management"}
                            >
                              Issue Management
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/registrar"}
                            >
                              Registrar To Share
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/advisory_service"}
                            >
                              Advisory Service
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              Underwriting shares
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
                          Mutual Fund
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
                              Sunlife First Mutal Fund
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
                        Portfolio Management Service
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/depository_service"}
                      >
                        Depository Participants
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/specalized_investment"}
                      >
                        Specialized Investment Fund
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/cooperate_advisory"}
                      >
                        Corporate Advisory Service
                      </Link>
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                        to={"/services/our_services"}
                      >
                        View All
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
                    Information Center
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "information" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
            
                    <div
                        className="relative"
                        onMouseEnter={() =>
                          toggleNestedDropdown("download")
                        }
                        onMouseLeave={() => toggleNestedDropdown(null)}
                      >
                      <Link
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white flex justify-between items-center"
                        to={"/downloads"}
                      >
                        Downloads
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                      {nestedDropdownOpenDownload === "download" && (
                          <div className="absolute top-0 left-full bg-white rounded-md shadow-lg w-60">
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/downloads/depository_participants"}
                            >
                             Depository Participant Related 
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/registrar"}
                            >
                              PMS Related 
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                              to={"/services/advisory_service"}
                            >
                              Events
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              Notices
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              Prospectus
                            </Link>
                            <Link
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white"
                              to={"/services/underwriting_service"}
                            >
                              Demat Related
                            </Link>
                          </div>
                        
                        )}
                        </div>

                      <Link className="block px-4 py-2 text-black   hover:bg-orange-600 hover:text-white" to={"/downloads/reports"}
                      >
                        Reports
                      </Link>
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/downloads/news"}
                      >
                        News
                      </Link>
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/downloads/notice_updates"}
                      >
                        Notices
                      </Link>
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/downloads/faq"}
                      >
                        FAQ
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Insights
                      </a>
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/downloads/gallery"}
                      >
                        Gallery
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
                    Results
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "results" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/results/ipo_results"}
                      >
                        IPO Result
                      </Link>
                      <Link  
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"to={"/results/rights_share_results"}
                      >
                        Right Share Eligibility
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Tax Liability Check
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Right Share Allotment Result
                      </a>
                    </div>
                  )}
                </div>


                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("online")}
                  onMouseLeave={() => toggleDropdown(null)}
                >

                  <button  className="text-white hover:bg-orange-600 px-3 py-2  hover:bg-orange-600 hover:text-white rounded-md text-base font-medium flex items-center">
                  Online Services
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />

                  </button>
                  {dropdownOpen === "online" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-60">
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/online_service/pms_form"}
                      >
                       PMS Form
                      </Link>
                      
                   
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Sunlife Kosh
                </a>
                
              </div>
              <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("login")}
                  onMouseLeave={() => toggleDropdown(null)}
                >

                  <button  className="bg-white text-orange-500 px-4 py-2 rounded-md text-base font-medium hover:bg-orange-100">
                  Login
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />

                  </button>
                  {dropdownOpen === "login" && (
                    <div className="absolute bg-white mt-0 rounded-md shadow-lg w-32  ">
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/login"}
                      >
                       PMS Login
                      </Link>
                      <a className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" href="https://meroshare.cdsc.com.np/#/login" 
                      >
                      MeroShare Login
                      </a>
                      
                   
                    </div>
                  )}
                </div>

              <div className="flex items-center absolute ml-56">
                <button
                  className="lg:hidden lg:ml-4 sm:mr-12 text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon/> 
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
                      Company Profile
                    </Link>
                    <Link
                      className="block px-5 py-2 text-black"
                      to={"board_directors"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Board of Directors
                    </Link>
                    <Link
                      href="#"
                      className="block px-5 py-2 text-black"
                      to={"/management_team"} 
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Management Team
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
                      <Link to={"/services/merchant_banking"}
                       onClick={() => setIsOpen(!isOpen)}>
                        Merchant Banking
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
                          Issue Management
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
                          Underwriting shares
                        </Link>
                      </div>
                    )}
                    <button
                      onClick={() => toggleNestedDropdown("mutualfund")}
                      className="block px-4 py-2 text-black w-full text-left flex justify-between items-center"
                    >
                      <Link to={"/services/mutual_fund_service"}
                       onClick={() => setIsOpen(!isOpen)}>
                        Mutual Fund
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
                          Sunlife First Mutal Fund
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
                      Portfolio Management Service
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/depository_service"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Depository Participants
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/specalized_investment"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Specialized Investment Fund
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/cooperate_advisory"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Corporate Advisory Service
                    </Link>
                    <Link
                      className="block px-4 py-2 text-black"
                      to={"/services/our_services"}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      View All
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown("information")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Information Center
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "information" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">

                   <button
                      onClick={() => toggleNestedDropdown("download")}
                      className="block px-4 py-2 text-black w-full text-left flex justify-between items-center"
                    >
                      <Link to={"/downloads"}  onClick={() => setIsOpen(!isOpen)}>
                        Downloads
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
                          Depository Participants
                        </Link>
                        <Link
                          className="block px-4 py-2 text-black"
                          to={"/services/registrar"}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Registrar To Share
                        </Link>
                        <Link
                          href="#"
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
                          Underwriting shares
                        </Link>
                      </div>
                    )}
                
                    <Link className="block px-4 py-2 text-black" to={"/downloads/reports"}  onClick={() => setIsOpen(!isOpen)}>
                      Reports
                    </Link>
                    <Link className="block px-4 py-2 text-black" to={"/downloads/news"}  onClick={() => setIsOpen(!isOpen)}>
                      News
                    </Link>
                    <Link className="block px-4 py-2 text-black" to={"/downloads/notice_updates"}  onClick={() => setIsOpen(!isOpen)}>
                      Notices
                    </Link>
                    <Link className="block px-4 py-2 text-black" to={"/downloads/faq"}  onClick={() => setIsOpen(!isOpen)}>
                      FAQ
                    </Link>
                    <a href="#" className="block px-4 py-2 text-black">
                      Insights
                    </a>
                    <Link className="block px-4 py-2 text-black" to={"/downloads/gallery"}  onClick={() => setIsOpen(!isOpen)}>
                      Gallery
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown("results")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Results
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "results" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                    <Link className="block px-4 py-2 text-black" to={"/results/ipo_results"}  onClick={() => setIsOpen(!isOpen)}>
                      IPO Result
                    </Link>
                    <Link className="block px-4 py-2 text-black" to={"/results/rights_share_results"}  onClick={() => setIsOpen(!isOpen)}>
                      Right Share Eligibility
                    </Link>
                    <a href="#" className="block px-4 py-2 text-black">
                      Tax Liability Check
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Right Share Allotment Result
                    </a>
                  </div>
                )}

                
                <button
                  onClick={() => toggleDropdown("online")}
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Online Services
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {dropdownOpen === "online" && (
                  <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                    <Link className="block px-4 py-2 text-black" to={"/online_service/pms_form"}  onClick={() => setIsOpen(!isOpen)}>
                      PMS Form
                    </Link>
                   
                  </div>
                )}

               
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sunlife Kosh
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

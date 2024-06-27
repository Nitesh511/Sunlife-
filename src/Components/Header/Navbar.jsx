import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const toggleDropdown = (section) => {
    setDropdownOpen(dropdownOpen === section ? null : section);
    if (section !== "merchantBanking") {
      setNestedDropdownOpen(null);
    }
    if (section !== "mutualfund") {
      setNestedDropdownOpenMutual(null);
    }
  };

  const toggleNestedDropdown = (section) => {
    if (section === "merchantBanking") {
      setNestedDropdownOpen(nestedDropdownOpen === section ? null : section);
    } else if (section === "mutualfund") {
      setNestedDropdownOpenMutual(
        nestedDropdownOpenMutual === section ? null : section
      );
    }
  };

  return (
    <>
      <div className="w-full">
        <nav className="bg-blue-500 w-full fixed top-12 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <img src={logo} alt="LS Capital" className="h-20 w-20 mr-3" />
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
                      <Link className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white" to={"/downloads"}
                      >
                        Downloads
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black   hover:bg-orange-600 hover:text-white"
                      >
                        Reports
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        News
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Notices
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        FAQ
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Insights
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Gallery
                      </a>
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
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        IPO Result
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black  hover:bg-orange-600 hover:text-white"
                      >
                        Right Share Eligibility
                      </a>
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

                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Online Services
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Subha Laxmi Kosh
                </a>
              </div>

              <div className="flex items-center">
                <button className="bg-white text-orange-500 px-4 py-2 rounded-md text-base font-medium hover:bg-orange-100">
                  Login
                </button>
                <button
                  className="lg:hidden ml-4 text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Menu
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
                    <a href="#" className="block px-5 py-2 text-black">
                      Company Profile
                    </a>
                    <a href="#" className="block px-5 py-2 text-black">
                      Board of Directors
                    </a>
                    <a href="#" className="block px-5 py-2 text-black">
                      Management Team
                    </a>
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
                      Merchant Banking
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    {nestedDropdownOpen === "merchantBanking" && (
                      <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                        <a href="#" className="block px-4 py-2 text-black">
                          Issue Management
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Registrar To Share
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Advisory Service
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Underwriting shares
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => toggleNestedDropdown("mutualfund")}
                      className="block px-4 py-2 text-black w-full text-left flex justify-between items-center"
                    >
                      Mutual Fund
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    {nestedDropdownOpenMutual === "mutualfund" && (
                      <div className="relative bg-white mt-2 rounded-md shadow-lg w-60 overflow-y-auto max-h-60">
                        <a href="#" className="block px-4 py-2 text-black">
                          Issue Management
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Registrar To Share
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Advisory Service
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                          Underwriting shares
                        </a>
                      </div>
                    )}
                    <a href="#" className="block px-4 py-2 text-black">
                      Portfolio Management Service
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Depository Participants
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Specialized Investment Fund
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Corporate Advisory Service
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      View All
                    </a>
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
                    <a href="#" className="block px-4 py-2 text-black">
                      Downloads
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Reports
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      News
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Notices
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      FAQ
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Insights
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Gallery
                    </a>
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
                    <a href="#" className="block px-4 py-2 text-black">
                      IPO Result
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Right Share Eligibility
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Tax Liability Check
                    </a>
                    <a href="#" className="block px-4 py-2 text-black">
                      Right Share Allotment Result
                    </a>
                  </div>
                )}

                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Online Services
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Subha Laxmi Kosh
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

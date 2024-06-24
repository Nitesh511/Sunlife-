import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Topnav from "./topnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (section) => {
    setDropdownOpen(dropdownOpen === section ? null : section);
  };

  return (
    <>
      <Topnav />
      <div className="w-full">
        <nav className="bg-orange-500 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img src={logo} alt="LS Capital" className="h-8 w-8 mr-3" />
                <span className="text-white text-lg font-semibold">
                  Sunlife Capital
                </span>
              </div>

              <div className="hidden lg:flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>

                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown("about")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    About Us
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "about" && (
                    <div className="absolute bg-white mt-2 rounded-md shadow-lg w-60">
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
                </div>

                <div className="relative"
                 onMouseEnter={() => toggleDropdown("services")}
                 onMouseLeave={() => toggleDropdown(null)}>
                  <button
                    className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />

                  </button>
                  {dropdownOpen === "services" && (
                    <div className="absolute bg-white-500 mt-2 rounded-md shadow-lg w-60">
                      <a href="#" className="block px-4 py-2 text-black">
                        Merchant Banking
                      </a>
                      <a href="#" className="block px-4 py-2 text-black">
                        Mutual Fund
                      </a>
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
                </div>

                <div className="relative"
                onMouseEnter={() => toggleDropdown("information")}
                onMouseLeave={() => toggleDropdown(null)}
                >
                  <button
                    className="text-white hover:bg-white-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Information Center
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "information" && (
                    <div className="absolute bg-white-500 mt-2 rounded-md shadow-lg w-60">
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
                </div>

                <div className="relative"
                 onMouseEnter={() => toggleDropdown("results")}
                 onMouseLeave={() => toggleDropdown(null)}
                >
                  <button
                    onClick={() => toggleDropdown("results")}
                    className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Results
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "results" && (
                    <div className="absolute bg-white-500 mt-2 rounded-md shadow-lg w-60">
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
                </div>

                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Online Services
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Subha Laxmi Kosh
                </a>
              </div>

              <div className="flex items-center">
                <button className="bg-white text-orange-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-100">
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
              <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
              <button onClick={() => toggleDropdown('about')} className="text-white hover:bg-white-600 px-3 py-2 rounded-md text-sm font-medium">
             
                    About Us
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {dropdownOpen === "about" && (
                    <div className="absolute bg-white mt-2 rounded-md shadow-lg w-60">
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

                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Information Center
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Results
                </a>
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

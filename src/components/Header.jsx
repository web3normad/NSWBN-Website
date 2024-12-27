import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/images/NSWBN_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
      isScrolled
        ? "bg-white shadow-lg"
        : "bg-white"
    }`}
  >
      <div className="flex px-16 py-4 items-center">
        {/* Logo on the left */}

        <div className="flex items-center">
          <Link to="/home-page">
            <div className="flex gap-3 items-center">
              <img src={Logo} alt="NSWBN Logo" className="w-20" />
              <div className="border-l-2 border-primary-100 px-1 text-primary-100">
                <h1 className="font-bold text-nowrap">National Seafarers Welfare</h1>
                <h1 className="font-bold">Board of Nigeria</h1>
              </div>
            </div>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-primary-200 text-2xl">
            {isOpen ? (
              <AiOutlineClose className="text-primary-100 ml-24" />
            ) : (
              <AiOutlineMenu className="text-primary-100 ml-24" />
            )}
          </button>
        </div>

        {/* Navigation in the center for desktop */}
        <div className="hidden md:flex flex-col gap-4 md:flex-row md:flex-1 md:justify-center items-center space-y-4 md:space-y-0 md:space-x-2">
          <nav className="flex flex-col items-center gap-10 md:flex-row space-y-5 md:space-y-0 md:space-x-2 px-4 text-nowrap text-md font-semibold">
          <div className="relative hover:text-primary-100">
              <Link to="/home-page">
              <button
                onClick={() => toggleDropdown('seafarersResources')}
                className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
               Home
                
              </button>
              </Link>
            </div>
            
            {/* About */}
            <div className="relative hover:text-primary-100">
              <button
                onClick={() => toggleDropdown("aboutUs")}
                className="flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
                About
                {openDropdown === "aboutUs" ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </button>
              {openDropdown === "aboutUs" && (
                <div className="absolute bg-primary-100 text-black shadow-lg mt-5 rounded-md w-60">
                  <Link
                    to="/about-us/history"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    History
                  </Link>
                  <Link
                    to="/about-us/mission-vision"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Mission and Vision
                  </Link>
                  <Link
                    to="/about-us/org-structure"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Organizational Structure
                  </Link>
                  <Link
                    to="/about-us/board-members"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Board Members
                  </Link>
                 
                </div>
              )}
            </div>


             {/* How we Help */}
               <div className="relative hover:text-primary-100">
              <button
                onClick={() => toggleDropdown('help')}
                className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
               How We Help
                {openDropdown === 'help' ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown === 'help' && (
                <div className="absolute bg-primary-100 text-black shadow-lg mt-5 rounded-md w-60">
                  <Link to="/services"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                  Services
                  </Link>

               
                    <Link to="/seafarers-resources"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                     Seafarers Resources
                  </Link>
                  <Link
                    to="/seafarers-resources/employment-opportunities"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Employment Opportunities
                  </Link>
                  <Link
                    to="/seafarers-resources/education-training"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Education and Training
                  </Link>
                </div>
              )}
            </div>

            {/* News */}
            <div className="relative hover:text-primary-100">
              <button
                onClick={() => toggleDropdown('newsEvents')}
                className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
                News
                {openDropdown === 'newsEvents'  ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown === 'newsEvents' && (
                <div className="absolute bg-primary-100 text-black shadow-lg mt-5 rounded-md w-60">
                  <Link
                    to="/news-events/latest-news"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Latest News
                  </Link>
                  <Link
                    to="/news-events/upcoming-events"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    to="/news-events/event-calender"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                   Event Calender
                  </Link>
                  <Link
                    to="/news-events/gallery"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                   Gallery
                  </Link>
                </div>
              )}
            </div>

              {/* Get Invovled */}
            <div className="relative hover:text-primary-100">
              <button
                onClick={() => toggleDropdown('partnerships')}
                className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
               Get Involved
                {openDropdown === 'partnerships' ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown === 'partnerships' && (
                <div className="absolute bg-primary-100 text-black shadow-lg mt-5 rounded-md w-60">
                   <Link
                    to="/projects-initiatives/how-to-get-involved"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    How to Get Involved
                  </Link>

                  <Link
                    to="/partnerships/our-partners"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/partnerships/become-a-partner"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Become a Partner
                  </Link>
                  <Link
                    to="/get-involved/volunteer"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Volunteer
                  </Link>
                  <Link
                    to="/get-involved/donate"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Donate
                  </Link>
                  <Link
                    to="/get-involved/advocate"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Advocate
                  </Link>
                </div>
              )}
            </div>

           

            <div className="relative hover:text-primary-100">
              <button
                onClick={() => toggleDropdown('contactUs')}
                className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
                Contact Us
                {openDropdown === 'contactUs' ? <RiArrowUpSLine /> : <RiArrowDownSLine />}{" "}
              </button>
              {openDropdown === 'contactUs'  && (
                <div className="absolute bg-primary-100 text-black shadow-lg mt-5 right-0 rounded-md w-52">
                  <Link
                    to="/contact-us/contact-form"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Contact Form
                  </Link>
                  <Link
                    to="/contact-us/office-locations"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Office Locations
                  </Link>
                  
                  <Link
                    to="/faqs"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            <div className="relative hover:text-primary-100">
              <button
                onClick={() => toggleDropdown('auth')}
                className="bg-primary-100 text-white flex items-center gap-1 px-8 py-2 rounded-sm focus:outline-none "
              >
               Support Us
               
              </button>
            </div>
          </nav>
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-primary-100 text-white z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleSidebar} className="text-2xl p-4">
            <AiOutlineClose />
          </button>
          <nav className="flex flex-col p-4 space-y-6 text-md">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('aboutUs')}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                About Us
                {openDropdown ? <RiArrowUpSLine /> : <RiArrowDownSLine />}{" "}
              </button>
              {openDropdown  && (
                <div className="mt-2 rounded-md">
                  <Link
                    to="/about-us/history"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    History
                  </Link>
                  <Link
                    to="/about-us/mission-vision"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    Mission and Vision
                  </Link>
                  <Link
                    to="/about-us/org-structure"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    Organizational Structure
                  </Link>
                  <Link
                    to="/about-us/board-members"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    Board Members
                  </Link>
                  <Link
                    to="/about-us/contact-info"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    Contact Information
                  </Link>
                </div>
              )}
            </div>
           
            <div className="relative">
              <button
                onClick={() => toggleDropdown('seafarersResources')}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                Seafarers' Resources
                {openDropdown ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown && (
                <div className=" mt-2 rounded-md">
                  <Link
                    to="/seafarers-resources/seafarers-rights"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Seafarers Rights
                  </Link>
                  <Link
                    to="/seafarers-resources/employment-opportunities"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Employment Opportunities
                  </Link>
                  <Link
                    to="/seafarers-resources/education-training"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Education and Training
                  </Link>
                  <Link
                    to="/seafarers-resources/health-safety"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Health and Safety
                  </Link>
                  <Link
                    to="/seafarers-resources/useful-contacts"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Useful Contacts
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('newsEvents')}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                News
                {openDropdown ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown && (
                <div className=" mt-2 rounded-md">
                  <Link
                    to="/news-events/latest-news"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Latest News
                  </Link>
                  <Link
                    to="/news-events/upcoming-events"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    to="/news-events/press-releases"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Press Releases
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('partnerships')}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                Partnerships
                {openDropdown ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown && (
                <div className=" mt-2 rounded-md">
                  <Link
                    to="/partnerships/our-partners"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/partnerships/become-a-partner"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Become a Partner
                  </Link>
                  <Link
                    to="/get-involved/volunteer"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Volunteer
                  </Link>
                  <Link
                    to="/get-involved/donate"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Donate
                  </Link>
                  <Link
                    to="/get-involved/advocate"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Advocate
                  </Link>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('contactUs')}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                Contact Us
                {openDropdown ? <RiArrowUpSLine /> : <RiArrowDownSLine />}{" "}
              </button>
              {openDropdown && (
                <div className=" mt-2 rounded-md">
                  <Link
                    to="/contact-us/contact-form"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Contact Form
                  </Link>
                  <Link
                    to="/contact-us/office-locations"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Office Locations
                  </Link>
                  <Link
                    to="/faqs"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

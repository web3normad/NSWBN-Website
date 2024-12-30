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
    setIsOpen(false);
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

  // Navigation Data
  const navigationItems = {
    news: {
      title: "News",
      links: [
        { to: "/news-events/latest-news", text: "Latest News" },
        { to: "/news-events/gallery", text: "Gallery" }
      ]
    },
    involved: {
      title: "Get Involved",
      links: [
        { to: "/projects-initiatives/how-to-get-involved", text: "How to Get Involved" },
        { to: "/partnerships/our-partners", text: "Our Partners" },
        { to: "/get-involved/volunteer", text: "Volunteer" },
        { to: "/get-involved/donate", text: "Donate" },
      ]
    },
  };

  const DropdownMenu = ({ item, name }) => (
    <div className="relative group">
      <button
        onClick={() => toggleDropdown(name)}
        className="flex items-center gap-1 px-3 py-2 hover:text-primary-100 focus:outline-none"
      >
        {item.title}
        {openDropdown === name ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </button>
      {openDropdown === name && (
        <div className="absolute z-50 w-60 py-2 mt-1 bg-white rounded-md shadow-lg">
          {item.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLinkClick}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const MobileDropdown = ({ item, name }) => (
    <div className="space-y-2">
      <button
        onClick={() => toggleDropdown(name)}
        className="w-full flex justify-between items-center py-2 text-white"
      >
        {item.title}
        {openDropdown === name ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </button>
      {openDropdown === name && (
        <div className="pl-4 space-y-2">
          {item.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 text-white/90 hover:text-white"
              onClick={handleLinkClick}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full pt-5 z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 md:py-4">
        {/* Logo container */}
        <div className="flex items-center">
          <Link to="/home-page">
            <div className="flex gap-2 md:gap-3 items-center">
              <img src={Logo} alt="NSWBN Logo" className="w-12 md:w-16 lg:w-20" />
              <div className="border-l-2 border-primary-100 px-1 text-primary-100">
                <h1 className="font-bold text-sm md:text-base lg:text-lg whitespace-nowrap">
                  National Seafarers Welfare
                </h1>
                <h1 className="font-bold text-sm md:text-base lg:text-lg">
                  Board of Nigeria
                </h1>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          <Link to="/home-page" className="px-3 py-2 hover:text-primary-100">
            Home
          </Link>
          <Link to="/about-us/history" className="px-3 py-2 hover:text-primary-100">
            About Us
          </Link>
          <Link to="/services" className="px-3 py-2 hover:text-primary-100">
            Services
          </Link>
         
          {Object.entries(navigationItems).map(([name, item]) => (
                <DropdownMenu key={name} item={item} name={name} />
              ))}
           <Link 
                to="/research" 
                className="py-2"
                onClick={handleLinkClick}
              >
                Research & Reports
              </Link>
              <Link 
                to="/contact-us/contact-form" 
                className="py-2"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
          {/* <button className="ml-4 px-6 py-2 bg-primary-100 text-white rounded-sm hover:bg-primary-100/90 transition-colors">
            Support Us
          </button> */}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="p-2 text-primary-100">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-primary-100 text-white z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleSidebar} className="p-2">
              <AiOutlineClose size={24} />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-70px)]">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/home-page" className="py-2 text-white" onClick={handleLinkClick}>
                Home
              </Link>
              {Object.entries(navigationItems).map(([name, item]) => (
                <MobileDropdown key={name} item={item} name={name} />
              ))}
              {/* <button
                onClick={handleLinkClick}
                className="w-full py-3 mt-4 bg-white text-primary-100 rounded-sm font-semibold"
              >
                Support Us
              </button> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
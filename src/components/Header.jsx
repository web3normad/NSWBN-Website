import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/images/NSWBN_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = {
    involved: {
      title: "Get Involved",
      links: [
        { to: "/get-involved/volunteer", text: "Volunteer" },
        { to: "/get-involved/donate", text: "Donate" },
        { to: "/partnerships/our-partners", text: "Partners" },
      ],
    },
  };

  const NavigationLink = ({ to, children }) => (
    <Link
      to={to}
      className="relative px-3 py-2 group"
      onMouseEnter={() => setHoveredLink(to)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-100">
        {children}
      </span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-100 transform origin-left transition-transform duration-300 ease-out
          ${hoveredLink === to ? 'scale-x-100' : 'scale-x-0'}`}
      />
    </Link>
  );

  const DropdownMenu = ({ item, name }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 group-hover:text-primary-100 focus:outline-none"
      >
        <span className="relative">
          {item.title}
          {openDropdown === name ? <RiArrowUpSLine className="inline ml-1" /> : <RiArrowDownSLine className="inline ml-1" />}
        </span>
      </button>
      <div 
        className={`absolute z-50 w-60 py-2 mt-1 bg-white rounded-md shadow-lg transition-all duration-300 ${
          openDropdown === name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {item.links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-100 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 md:py-4">
        {/* Logo container */}
        <div className="flex items-center">
          <Link to="/home">
            <div className="flex gap-2 md:gap-3 items-center">
              <img src={Logo} alt="Logo" className="w-12 md:w-16 lg:w-20" />
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
          <NavigationLink to="/home">Home</NavigationLink>
          <NavigationLink to="/about-us">About Us</NavigationLink>
          <NavigationLink to="/services">Services</NavigationLink>
          {/* {Object.entries(navigationItems).map(([name, item]) => (
            <DropdownMenu key={name} item={item} name={name} />
          ))} */}
          <NavigationLink to="/research">Research & Reports</NavigationLink>
          {/* <NavigationLink to="/news-events/gallery">Gallery</NavigationLink> */}
          <NavigationLink to="/contact-us/contact-form">Contact Us</NavigationLink>
        </nav>

        {/* Mobile menu button with animation */}
        <div className="lg:hidden">
          <button 
            onClick={toggleSidebar} 
            className="p-2 text-primary-100 transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar with enhanced animations */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-primary-100 text-white z-50 transform transition-all duration-300 ease-in-out lg:hidden
            ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <h2 className="text-xl font-bold">Menu</h2>
            <button 
              onClick={toggleSidebar}
              className="p-2 transition-transform duration-300 hover:rotate-180"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-70px)]">
            <nav className="flex flex-col p-4 space-y-4">
              {[
                { to: "/home", text: "Home" },
                { to: "/about-us/history", text: "About Us" },
                { to: "/services", text: "Services" },
                // { type: "dropdown", ...navigationItems.involved },
                { to: "/research", text: "Research & Reports" },
                // { to: "/news-events/gallery", text: "Gallery" },
                { to: "/contact-us/contact-form", text: "Contact Us" }
              ].map((item, index) => (
                item.type === "dropdown" ? (
                  <div key={item.title} className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="w-full flex justify-between items-center py-2 text-white group"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {item.title}
                      </span>
                      {openDropdown === item.title ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </button>
                    <div 
                      className={`pl-4 space-y-2 transition-all duration-300 ${
                        openDropdown === item.title ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block py-2 text-white/90 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                          onClick={handleLinkClick}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="py-2 text-white relative overflow-hidden group"
                    onClick={handleLinkClick}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">
                      {item.text}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
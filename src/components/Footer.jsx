import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../assets/images/NSWBN_Logo_two.png";

const Footer = () => {
  return (
    <div className="w-full bg-primary-100 p-4">
      <div className="px-6 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
          <div className="flex gap-2">
            <Link to="/home" className="text-lg sm:text-2xl font-bold text-white mb-2">
              <div className="flex gap-3 items-center">
                <img src={Logo} alt="NSWBN Logo" className="w-20" />
                <div className="border-l-2 border-primary-300 px-2 text-primary-300">
                  <h1 className="font-bold">National Seafarers Welfare</h1>
                  <h1 className="font-bold">Board of Nigeria</h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <a
              href="https://ng.linkedin.com/company/national-seafarers-welfare-board-of-nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/NSWBN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <FaFacebookF className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <FaInstagram className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <FaXTwitter className="text-sm sm:text-xl" />
            </a>
            <a
              href="http://www.youtube.com/@NSWBN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">Quick Links</h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Research & Reports */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">Resources</h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/research" className="hover:text-white transition-colors">
                Research & Reports
              </Link>
            </li>
  
          </ul>
        </div>

        {/* Get Involved */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">Get Involved</h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/contact-us/contact-form" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="sm:col-span-2 lg:col-span-4">
          <div className="text-sm sm:text-base text-primary-300">
            <div className="mb-4">
              <h2 className="font-semibold text-white mb-2">Find Us</h2>
              <p className="mb-1">
                Address: National Seafarers Welfare Board of Nigeria, 3rd Floor,
                15B Awolowo Road, by EFCC, Ikoyi, Lagos, Nigeria.
              </p>
              <p className="mb-1">Email: info@nswbn.org</p>
              <p className="text-nowrap">Operating Hours: Monday to Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between text-sm sm:text-base text-primary-300">
        <p className="mb-4 md:mb-0">
          Copyright © 2024 National Seafarers Welfare Board of Nigeria. All
          Rights Reserved.{" "}
          <Link to="/legal/privacy-cookie-policy" className="underline text-white hover:text-gray-200 transition-colors">
            Privacy & Cookie Policy
          </Link>
        </p>
        <p>Powered by WHISPER TECHNOLOGY</p>
      </div>
    </div>
  );
};

export default Footer;
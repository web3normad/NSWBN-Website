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
            <Link to="/home-page" className="text-lg sm:text-2xl font-bold text-white mb-2">
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
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/NSWBN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaFacebookF className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaInstagram className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaXTwitter className="text-sm sm:text-xl" />
            </a>
            <a
              href="http://www.youtube.com/@NSWBN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>

        {/* About Us */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            About Us
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/about-us/history" className="hover:text-logoColor">About Us</Link>
            </li>
           
          </ul>
        </div>

        {/* Services */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Services
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/services/services" className="hover:text-logoColor">Services</Link>
            </li>
            
          </ul>
        </div>

        {/* News & Events */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            News & Gallery
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/news-events/latest-news" className="hover:text-logoColor">Latest News</Link>
            </li>
            <li>
              <Link to="/news-events/gallery" className="hover:text-logoColor">Gallery</Link>
            </li>
            <li>
              <Link to="/research" className="hover:text-logoColor">Research & Reports</Link>
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Get Involved
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-primary-300">
            <li>
              <Link to="/projects-initiatives/how-to-get-involved" className="hover:text-logoColor">
                How to Get Involved
              </Link>
            </li>
            <li>
              <Link to="/partnerships/our-partners" className="hover:text-logoColor">Our Partners</Link>
            </li>
            <li>
              <Link to="/get-involved/volunteer" className="hover:text-logoColor">Volunteer</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="sm:col-span-2 lg:col-span-4">
          <div className="text-sm sm:text-base text-primary-300">
            <div className="mb-4">
              <h2 className="font-semibold text-white">Contact Us</h2>
              <p>
                Address: National Seafarers Welfare Board of Nigeria, 3rd Floor,
                15B Awolowo Road, by EFCC, Ikoyi, Lagos, Nigeria.
              </p>
              <p>Email: info@nswbn.org</p>
              <p className="text-nowrap">Operating Hours: Monday to Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-7 border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm sm:text-base text-primary-300">
        <p className="mb-4 md:mb-0">
          Copyright © 2024 National Seafarers Welfare Board of Nigeria. All
          Rights Reserved.{" "}
          <Link to="/legal/privacy-cookie-policy" className="underline text-white">
            Privacy & Cookie Policy
          </Link>
        </p>
        <p>Powered by WHISPER TECHNOLOGY</p>
      </div>
    </div>
  );
};

export default Footer;
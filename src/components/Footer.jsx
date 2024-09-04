import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../assets/images/NSWBN_logo_two.png";

const Footer = () => {
  return (
    <div className="w-full bg-primary-200 p-4">
      <div className="px-6 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
          <div className="flex gap-2">
            <Link
              to="/homePage"
              className="text-lg sm:text-2xl font-bold text-white mb-2"
            >
              <div className="flex gap-3 items-center">
                <img src={Logo} alt="NSWBN Logo" className="w-20" />
                <div className="border-l-2 border-primary-100 px-2 text-primary-100">
                  <h1 className="font-bold">National Seafarers</h1>
                  <h1 className="font-bold">Board of Nigeria</h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com"
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
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Organization
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/company/history" className="hover:text-logoColor">History</Link>
            </li>
            <li>
              <Link to="/company/core-values" className="hover:text-logoColor">Core Values</Link>
            </li>
            <li>
              <Link to="/company/social-responsibility" className="hover:text-logoColor">
                Social Responsibility
              </Link>
            </li>
            <li>
              <Link to="/company/blog" className="hover:text-logoColor">Blog</Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            SERVICES
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/services/welfare-services" className="hover:text-logoColor">Welfare Services</Link>
            </li>
            <li>
              <Link to="/services//services/legal-assistance" className="hover:text-logoColor">
                Legal Assistance
              </Link>
            </li>
            <li>
              <Link to="/services/mental-health"
               className="hover:text-logoColor">
                Mental Health
                </Link>
            </li>
            <li>
              <Link to="/services/training-development"
               className="hover:text-logoColor">
                Training and Development
              </Link>
            </li>
            <li>
              <Link to="/services/emergency-assistance"
               className="hover:text-logoColor">
                Emergency Assistance
              </Link>
            </li>
          </ul>
        </div>

        {/* Seafarers Resources */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Seafarers Resources
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link
                to="/seafarers-resources/seafarers-rights"
                className="hover:text-logoColor"
              >
                Seafarers Rights
              </Link>
            </li>
            <li>
              <Link
                to="/seafarers-resources/employment-opportunities"
                 className="hover:text-logoColor"
              >
                Employment Opportunities
              </Link>
            </li>
            <li>
              <Link
                to="/seafarers-resources/education-training"
                 className="hover:text-logoColor"
              >
                Education and Training
              </Link>
            </li>
            <li>
              <Link
                to="/seafarers-resources/health-safety"
               className="hover:text-logoColor"
              >
                Health and Safety
              </Link>
            </li>
            <li>
              <Link
                to="/seafarers-resources/useful-contacts"
                className="hover:text-logoColor"
              >
                Useful Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/* Projects and Initiatives*/}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Projects & Initiatives
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
          <li>
          <Link
                    to="/projects-initiatives/current-projects"
                    className="hover:text-logoColor"
                  >
                    Current Projects
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/projects-initiatives/past-projects"
                    className="hover:text-logoColor"
                  >
                    Past Projects
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/projects-initiatives/success-stories"
                    className="hover:text-logoColor"
                  >
                    Success Stories
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/projects-initiatives/how-to-get-involved"
                    className="hover:text-logoColor"
                  >
                    How to Get Involved
                  </Link>
                  </li>
          </ul>
        </div>
        {/* Partnerships */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Partnerships
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
          <li>
          <Link
                    to="/partnerships/our-partners"
                    className=" hover:text-logoColor"
                  >
                    Our Partners
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/partnerships/become-a-partner"
                    className=" hover:text-logoColor"
                  >
                    Become a Partner
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/get-involved/volunteer"
                    className=" hover:text-logoColor"
                  >
                    Volunteer
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/get-involved/donate"
                    className=" hover:text-logoColor"
                  >
                    Donate
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/get-involved/advocate"
                    className=" hover:text-logoColor"
                  >
                    Advocate
                  </Link>
                  </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            LEGAL
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/legal/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/legal/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/legal/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>
        {/* Sitemap */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Sitemap
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/sitemap" className="hover:text-logoColor">Pages Overview</Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            Contact Us
          </h1>
          <div className="text-sm sm:text-base text-gray-400">
            <div className="mb-4">
              <h2 className="font-semibold text-white">Headquarter</h2>
              <p>
                Address: National Seafarers Welfare Board of Nigeria, 3rd Floor,
                15B Awolowo Road, by EFCC, Ikoyi, Lagos, Nigeria.
              </p>
              <p> Phone: </p>
              <p>Email: info@nswbn.org</p>
              <p className="text-nowrap">Operating Hours: Monday to Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-7 border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm sm:text-base text-gray-400">
        <p className="mb-4 md:mb-0">
          Copyright © 2024 National Seafarers Welfare Board of Nigeria. All
          Rights Reserved.{" "}
          <Link
            to="/legal/privacy-cookie-policy"
            className="underline text-white"
          >
            Privacy & Cookie Policy
          </Link>
        </p>
        <p>Powered by WHISPER TECHNOLOGY</p>
      </div>
    </div>
  );
};

export default Footer;

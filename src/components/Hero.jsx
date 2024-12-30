import React from "react";
import Lottie from 'lottie-react';
import animationData from '../assets/images/ship.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative px-6 lg:px-12 mx-auto flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0 h-screen">
        {/* Content Section */}
        <div className="md:w-1/2 space-y-6 md:pr-12">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-xl  text-primary-100 font-semibold tracking-wide uppercase">
              Welcome to NSWBN
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Supporting Seafarers Across Nigeria
            </h1>
          </div>

          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              The National Seafarers Welfare Board of Nigeria (NSWBN) is a non-profit organization founded in 2003, dedicated to coordinating and supporting shore-based welfare facilities for all seafarers.
            </p>
            <p>
              Our commitment aligns with the Shore-Based Welfare Facilities mandate of Regulation 4.4, Standard A4, under the ILO Maritime Labour Convention, 2006 (MLC, 2006).
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={scrollToContent} className="bg-primary-100 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Learn More
            </button>
          
          </div>
        </div>

        {/* Animation Section */}
        <div className="hidden md:block md:w-1/2">
          <Lottie 
            animationData={animationData} 
            className="w-full h-full object-contain"
            loop={true}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary-100" />
      </button>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {[
            { label: "Years Active", value: "17+" },
            { label: "Ports Covered", value: "6" },
            { label: "Seafarers Supported", value: "10,000+" },
            { label: "Volunteer Members", value: "100+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary-100">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from "react";
import { ChevronDown } from "lucide-react";
import image10 from "../assets/images/media/img-10.jpg";
import image13 from "../assets/images/media/img-13.jpg";
import Lottie from "lottie-react";
import Slider from "react-slick";
import animationData from "../assets/images/ship.json";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const stats = [
    { label: "Years Active", value: "17+" },
    { label: "Ports Covered", value: "6" },
    { label: "Seafarers Supported", value: "10,000+" },
    { label: "Volunteer Members", value: "100+" },
  ];

  return (
    <div className="relative min-h-screen py-20 lg:py-0 bg-gradient-to-br from-blue-50 via-blue-50 to-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className=" lg:mx-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-base sm:text-lg text-primary-100 font-semibold tracking-wide uppercase">
                  Welcome to NSWBN
                </h2>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                  Supporting Seafarers Across Nigeria
                </h1>
              </div>

              {/* Carousel Section */}
              <div className="w-full bg-white rounded-lg overflow-hidden">
                <Slider {...settings} className="h-40 sm:h-64 md:h-80">
                  <div className="h-40 sm:h-64 md:h-80">
                    <img
                      src={image10}
                      alt="Slide 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-40 sm:h-64 md:h-80">
                    <img
                      src={image13}
                      alt="Slide 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Slider>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={scrollToContent}
                  className="bg-primary-100 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Lottie Animation - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2">
              <Lottie
                animationData={animationData}
                className="w-full h-full object-contain"
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce md:bottom-32"
      >
        <ChevronDown className="w-6 h-6 text-primary-100" />
      </button>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 py-4 sm:py-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary-100">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
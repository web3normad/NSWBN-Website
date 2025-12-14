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
              {/* Carousel Section */}
              <div className="w-full pt-10 lg:pt-40 md:w-[850px] overflow-hidden">
                <Slider {...settings} className="h-[600px] md:w-[850px] sm:h-80 md:h-[500px]">
                  <div className="h-[400px] sm:h-80 md:h-[500px]">
                    <img
                      src={image10}
                      alt="Slide 1"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="h-[400px] sm:h-64 md:h-[500px]">
                    <img
                      src={image13}
                      alt="Slide 2"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </Slider>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
              
              </div>
            </div>

            {/* Lottie Animation - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2">
              <Lottie
                animationData={animationData}
                className="absolute -right-[23%] bottom-[20%] w-full h-full object-contain"
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <button
        onClick={scrollToContent}
        className="absolute bottom-64 left-1/2 transform -translate-x-1/2 animate-bounce md:bottom-32"
      >
        <ChevronDown className="w-6 h-6 lg:w-10 lg:h-10 text-primary-100" />
      </button> */}
    </div>
  );
};

export default Hero;
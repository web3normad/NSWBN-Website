import React, { useEffect, useState } from "react";
import Lottie from 'lottie-react';
import animationData from '../assets/images/ship.json';



const Hero = () => {
 


  return (
  
    <div className="flex flex-col md:flex-row items-center justify-between mt-24 w-full h-screen z-auto bg-blue-50 scroll-smooth overflow-y-hidden md:overflow-y-hidden  px-5 hover:overflow-y-none custom-scrollbar">

      {/* Content Section */}
      <div className="flex flex-col justify-center items-start z-2 mt-36 md:mt-0 md:w-1/2">
        <div className="px-4 md:px-12">
          <h1 className="text-2xl sm:text-3xl text-logoColor md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Overview of NSWBN
          </h1>
          <p className="text-base sm:text-lg md:text-lg text-cyan-800 mb-4 sm:mb-6">
            The National Seafarers Welfare Board of Nigeria (NSWBN) is a non-profit organization founded in 2003 and formally registered as incorporated trustees with the Corporate Affairs Commission (CAC) on March 30th, 2007. The NSWBN is dedicated to coordinating and supporting shore-based welfare facilities and services for seafarers, irrespective of nationality, race, ethnicity, religion, or creed. This commitment aligns with the Shore-Based Welfare Facilities mandate of Regulation 4.4, Standard A4, as amended, under the International Labour Organization’s (ILO) Maritime Labour Convention, 2006 (MLC, 2006), ratified by Nigeria on June 18th, 2013, and implemented by the Nigerian Maritime Administration and Safety Agency (NIMASA).
          </p>
          <p className="text-base sm:text-lg md:text-lg text-cyan-800 mb-4 sm:mb-6">
            NSWBN maintains active membership with the International Seafarers Welfare Assistance Network (ISWAN), an esteemed international organization with over two decades of experience in supporting seafarers' welfare globally. The organizational structure of NSWBN is designed for optimal functionality, comprising Trustees, an Executive arm, and Seafarers Port Welfare Committees (SPWCs) at various seaports, terminals, and jetties. Membership in the Board is voluntary, with participants drawn from diverse organizations within the ports, beginning their involvement as volunteers in the Port Welfare Committees.
          </p>
        </div>
      </div>

      {/* Animation Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 h-full mt-5 mb-10 md:mt-0">
        <Lottie animationData={animationData} className="w-full h-full object-contain" loop={true} />
      </div>
    </div>
  );
};

export default Hero;

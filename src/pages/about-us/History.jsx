import React from "react";
import ImageOne from "../../assets/images/media/img-02.jpg"

const History = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-primary-100 text-center">
        History of NSWBN
      </h2>
      
      <div>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The National Seafarers Welfare Board of Nigeria (NSWBN) was established in 2003 with a resolute commitment to advancing the welfare of seafarers operating within Nigerian waters and globally. In recognition of its pivotal role, the NSWBN was formally registered as incorporated trustees with the Corporate Affairs Commission (CAC) on March 30th, 2007. This milestone marked the beginning of a dedicated journey towards ensuring that the welfare needs of seafarers are met in accordance with international standards.
        </p>
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Board's establishment is deeply rooted in the principles enshrined in the International Labour Organization's (ILO) Maritime Labour Convention, 2006 (MLC, 2006), particularly the provisions of Regulation 4.4, Standard A4, as amended. Nigeria's ratification of the MLC, 2006 on June 18th, 2013, and its subsequent implementation by the Nigerian Maritime Administration and Safety Agency (NIMASA) underscores the national commitment to this cause.
        </p>
        
        <div className="flex justify-center">
          <img 
            src={ImageOne} 
            alt="History" 
            className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
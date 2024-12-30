import React from "react";

const OrgStructure = () => {
  return (
    <div className="px-6 py-32 h-screen sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Organizational Structure
      </h2>
      
      <div className=" mx-auto space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The organizational structure of the National Seafarers Welfare Board of Nigeria (NSWBN) is designed to ensure seamless coordination, strategic decision-making, and the efficient delivery of welfare services to seafarers across Nigerian ports and terminals. This structure comprises three key components: the Board of Trustees, the Executive Arm, and the Seafarers Port Welfare Committees (SPWCs).
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Key Components:</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Board of Trustees:</strong> 
              The Trustees are responsible for providing overall governance and strategic direction. They ensure that NSWBN’s activities align with its mission and international standards.
            </li>
            <li>
              <strong>Executive Arm:</strong> 
              This arm oversees daily operations and implements policies, programs, and projects that promote seafarers’ welfare. It ensures coordination among the various committees and stakeholders.
            </li>
            <li>
              <strong>Seafarers Port Welfare Committees (SPWCs):</strong> 
              These committees operate at key ports across Nigeria, including Tin Can Island, Port Harcourt (Onne), Warri, and others. They play a vital role in delivering on-ground welfare services, engaging directly with seafarers, and addressing their needs effectively.
            </li>
          </ol>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          The SPWCs are established in alignment with the International Seafarers Welfare Assistance Network (ISWAN) model, ensuring adherence to global standards. Each committee comprises volunteers and representatives from government maritime organizations, unions, shipping companies, and recruitment agencies, fostering collaboration and inclusivity.
        </p>
        
        <div className="flex justify-center">
          {/* Placeholder for image - you can add the actual image source when available */}
          <div className="w-full max-w-4xl h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgStructure;

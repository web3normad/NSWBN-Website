import React from "react";

const OrgStructure = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-1 lg:px-2">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Organizational Structure
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The organizational structure of NSWBN is designed to ensure the efficient and effective delivery of its mandate. The Board is comprised of Trustees, an Executive arm, and Seafarers Port Welfare Committees (SPWCs) stationed at strategic seaports, terminals, and jetties across Nigeria. This structure facilitates seamless coordination and the provision of shore-based welfare services, ensuring that seafarers receive the necessary support irrespective of their nationality, race, ethnicity, religion, or creed.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Key Components:</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Trustees:</strong> Responsible for the overall governance and strategic direction of NSWBN.
            </li>
            <li>
              <strong>Executive Arm:</strong> Manages the day-to-day operations and implementation of policies and programs.
            </li>
            <li>
              <strong>Seafarers Port Welfare Committees (SPWCs):</strong> Located at various ports, these committees are instrumental in delivering on-ground welfare services and engaging with seafarers directly.
            </li>
          </ol>
        </div>
        
        <div className='flex justify-center'>
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
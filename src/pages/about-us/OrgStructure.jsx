import React from "react";

const OrgStructure = () => {
  return (
    <div className="px-6 py-32 h-full space-y-5 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl pt-6 sm:text-xl text-logoColor md:text-xl lg:text-2xl font-bold leading-tight mb-6">
        Organizational Structure
      </h2>
      <p>
        The organizational structure of NSWBN is designed to ensure the
        efficient and effective delivery of its mandate. The Board is comprised
        of Trustees, an Executive arm, and Seafarers Port Welfare Committees
        (SPWCs) stationed at strategic seaports, terminals, and jetties across
        Nigeria. This structure facilitates seamless coordination and the
        provision of shore-based welfare services, ensuring that seafarers
        receive the necessary support irrespective of their nationality, race,
        ethnicity, religion, or creed.
      </p>
      <div className="space-y-3">
      <h3 className="font-semibold">Key Components:</h3>
      <ol>
        <li><span>&#49;.</span> Trustees: Responsible for the overall governance and strategic direction of NSWBN.</li>
        <li><span>&#50;.</span> Executive Arm: Manages the day-to-day operations and implementation of policies and programs.</li>
        <li><span>&#51;.</span> Seafarers Port Welfare Committees (SPWCs): Located at various ports, these committees are instrumental in delivering on-ground welfare services and engaging with seafarers directly.</li>
      </ol>
      </div>
      <img src="" alt="History" />
    </div>
  );
};

export default OrgStructure;

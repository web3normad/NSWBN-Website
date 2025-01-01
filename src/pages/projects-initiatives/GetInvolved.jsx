import React from "react";

const GetInvolved = () => {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 h-full w-full overflow-hidden">
      <h2 className="text-lg py-5 sm:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        How to Get Involved
      </h2>
      
      <div className=" lg:mx-10 space-y-8 ">
        {/* Volunteer Section */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-base sm:text-lg font-bold text-primary-100 mb-4">Volunteer</h3>
          <div className="text-gray-700 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm justify-center  sm:text-base">
              <strong className="flex-shrink-0">Opportunities:</strong>
              <span>Join our Port Welfare Committees, assist in ship visits, provide psychosocial support, and participate in organizing events that benefit seafarers.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Process:</strong>
              <span>Submit a volunteer application, participate in our training programs, and join our team of dedicated individuals committed to improving seafarers' welfare.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Impact:</strong>
              <span>As a volunteer, you will play a direct role in supporting seafarers and ensuring their well-being, creating a positive impact in their lives.</span>
            </div>
          </div>
        </div>

        {/* Donate Section */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-base sm:text-lg font-bold text-primary-100 mb-4">Donate</h3>
          <div className="text-gray-700 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Options:</strong>
              <span>Support our mission by making one-time or recurring financial contributions to sustain and expand our services.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Account Details:</strong>
              <span>[Provide account details here for ease of donations.]</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Impact:</strong>
              <span>Your donations enable us to provide critical services, such as emergency assistance, recreational facilities, and essential resources for seafarers.</span>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-base sm:text-lg font-bold text-primary-100 mb-4">Partner</h3>
          <div className="text-gray-700 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Collaborations:</strong>
              <span>Partner with NSWBN to implement targeted projects, provide funding, or share expertise to address specific welfare needs.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2  justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Benefits:</strong>
              <span>Partnerships amplify the reach of our initiatives, ensuring seafarers receive comprehensive support and fostering mutual growth.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Current Partners:</strong>
              <span>We collaborate with government agencies, maritime unions, shipping companies, and international organizations to fulfill our mission.</span>
            </div>
          </div>
        </div>

        {/* Advocate Section */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-base sm:text-lg font-bold text-primary-100 mb-4">Advocate</h3>
          <div className="text-gray-700 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Actions:</strong>
              <span>Raise awareness about seafarers’ rights and welfare by engaging in community outreach, participating in campaigns, and promoting policy changes.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center  text-sm sm:text-base">
              <strong className="flex-shrink-0">Effect:</strong>
              <span>Advocacy creates lasting change, driving improvements in policies and practices that protect and support seafarers.</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center text-sm sm:text-base">
              <strong className="flex-shrink-0">How to Start:</strong>
              <span>Join our advocacy campaigns or represent seafarers' concerns during stakeholder meetings and maritime forums.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;

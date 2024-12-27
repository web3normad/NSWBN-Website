import React from "react";

const GetInvolved = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        How to Get Involved
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Volunteer</h3>
          <div className="text-gray-700 space-y-2">
            <div>
              <strong>Opportunities:</strong> Participate in volunteer activities, such as ship visits, organizing events, and providing support services.
            </div>
            <div>
              <strong>Process:</strong> Complete a volunteer application form and attend an orientation session to get started.
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Donate</h3>
          <div className="text-gray-700 space-y-2">
            <div>
              <strong>Options:</strong> Contribute financially to support our projects and initiatives. Donations can be made as one-time contributions or recurring donations. ….Account details……
            </div>
            <div>
              <strong>Impact:</strong> Donations help us provide essential services and resources to seafarers in need.
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Partner</h3>
          <div className="text-gray-700 space-y-2">
            <div>
              <strong>Collaborations:</strong> Partner with NSWBN to support specific projects, share expertise, or provide resources.
            </div>
            <div>
              <strong>Benefits:</strong> Partnerships enhance the reach and impact of our initiatives, creating a collaborative effort to improve seafarers' welfare.
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Advocate</h3>
          <div className="text-gray-700 space-y-2">
            <div>
              <strong>Actions:</strong> Advocate for seafarers' rights and welfare by raising awareness, participating in campaigns, and engaging with policymakers.
            </div>
            <div>
              <strong>Effect:</strong> Advocacy efforts help drive positive changes in policies and practices, ensuring better protection and support for seafarers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
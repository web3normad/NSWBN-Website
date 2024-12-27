import React from 'react';

const OfficeAddresses = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-3xl lg:text-3xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Office Locations
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <p className="text-gray-700 leading-relaxed text-center">
          NSWBN operates from multiple locations across Nigeria to ensure accessible and comprehensive support for seafarers. Below are the details of our main office and regional offices.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Main Office</h3>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-semibold">Address:</span> National Seafarers Welfare Board of Nigeria, 3rd Floor, 15B Awolowo Road, by EFCC, Ikoyi, Lagos, Nigeria.</li>
            <li><span className="font-semibold">Email:</span> info@nswbn.org</li>
            <li><span className="font-semibold">Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Regional Offices</h3>
          <div className="space-y-4">
            {[
              {
                name: "Apapa Office",
                address: "Apapa Port Complex, Dock Road, Apapa, Lagos, Nigeria.",
                email: "apapa@nswbn.org"
              },
              {
                name: "Port Harcourt Office",
                address: "Port Harcourt Port, Wharf Road, Port Harcourt, Nigeria.",
                email: "portharcourt@nswbn.org"
              },
              {
                name: "Onne Office",
                address: "Onne Port, Onne, Rivers State, Nigeria.",
                email: "onne@nswbn.org"
              },
              {
                name: "Warri Office",
                address: "Warri Port, Warri, Delta State, Nigeria.",
                email: "warri@nswbn.org"
              },
              {
                name: "Calabar Office (Upcoming)",
                address: "Calabar Port, Calabar, Cross River State, Nigeria.",
                email: "calabar@nswbn.org"
              }
            ].map((office, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h4 className="text-base font-semibold text-primary-100 mb-2">{office.name}</h4>
                <ul className="space-y-1 text-gray-700">
                  <li><span className="font-semibold">Address:</span> {office.address}</li>
                  <li><span className="font-semibold">Email:</span> {office.email}</li>
                  <li><span className="font-semibold">Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeAddresses;
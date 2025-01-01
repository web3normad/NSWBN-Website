import React from 'react';

const Partnerships = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-4 text-primary-100 text-center">
        Partners and Constituent Members
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="lg:text-lg font-bold text-primary-100 mb-4">International Partners</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-lg  text-gray-700">
            <li>International Transport Workers' Federation (ITF)</li>
            <li>International Seafarers' Welfare and Assistance Network (ISWAN)</li>
            <li>Convention on Business Integrity (CBi) and the Maritime Anti-corruption Network (MACN)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="lg:text-lg font-bold text-primary-100 mb-4">
            Constituent Members (to use only logos of these organizations)
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-lg  text-gray-700">
            <li>Nigerian Merchant Navy and Water Transport Senior Staff Officers Association</li>
            <li>Maritime Workers Union of Nigeria</li>
            <li>Apostleship of the Sea (Stella Maris)</li>
            <li>Mission to Seafarers (MTS)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="lg:text-lg font-bold text-primary-100 mb-4">Government Agencies</h3>
          <ul className="list-disc pl-6 text-sm lg:text-lg space-y-2 text-gray-700">
            <li>Nigerian Maritime Administration and Safety Agency (NIMASA)</li>
            <li>Nigerian Ports Authority (NPA)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
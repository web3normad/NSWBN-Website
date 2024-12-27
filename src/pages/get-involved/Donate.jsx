import React from 'react';

const Donate = () => {
  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      <h1 className="text-primary-100 text-3xl font-bold mb-6 text-center">
        Donation Information
      </h1>
      
      <div className=" p-6 mb-6">
        <p className="text-gray-700 mb-4">
          Financial contributions play a crucial role in enabling NSWBN to deliver essential services and support to seafarers. Donations help fund our projects, expand our reach, and enhance the quality of our services.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Ways to Donate */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-primary-100 text-2xl font-semibold mb-4">
            Ways to Donate
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>One-Time Donations: Make a single contribution to support specific projects or general operations.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>Recurring Donations: Set up a recurring donation to provide ongoing support for our initiatives.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>In-Kind Donations: Contribute goods or services that can directly benefit seafarers.</span>
            </li>
          </ul>
        </div>
        
        {/* Donation Process */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-primary-100 text-2xl font-semibold mb-4">
            Donation Process
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>Online Donations: Secure online donation portal available on our website.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>Bank Transfers: Details for bank transfers are provided for alternative donations.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>Acknowledgment: All donations are acknowledged with a receipt and a letter of thanks.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Donation Button */}
      <div className="text-center mt-8">
        <button 
          className="bg-primary-100 text-white px-6 py-3 rounded-sm hover:bg-primary-200 transition-colors duration-300 text-lg font-semibold"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default Donate;
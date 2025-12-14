import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ImageList from '../../components/image-list/ImageList';
import { ActivitySquare, BookOpen, Shield, Anchor, X } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [showDonateModal, setShowDonateModal] = useState(false);
  const navigate = useNavigate();

  const servicesList = [
    {
      title: "Welfare Facilities and Services",
      icon: <ActivitySquare className="lg:w-8 lg:h-8" />,
      description: "Comprehensive support services for seafarers across multiple ports",
    },
    { 
      title: "Emergency Support",
      icon: <Shield className="lg:w-8 lg:h-8" />,
      description: "24/7 emergency assistance and rapid response services"
    },
    { 
      title: "Advocacy and Legal Support",
      icon: <BookOpen className="lg:w-8 lg:h-8" />,
      description: "Professional legal guidance and advocacy services"
    },
    { 
      title: "Ship Visits Shorebased",
      icon: <Anchor className="lg:w-8 lg:h-8" />,
      description: "Regular vessel visits and on-site support services"
    }
  ];

  const stats = [
    { label: "Years Active", value: "17+" },
    { label: "Ports Covered", value: "7" },
    { label: "Seafarers Supported", value: "10,000+" },
    { label: "Volunteer Members", value: "30+" },
  ];

  const renderServices = () => (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="bg-primary-100 text-white p-3 rounded-lg w-fit mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold text-primary-100 mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl font-bold text-primary-100">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const DonationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={() => setShowDonateModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-primary-100 mb-6">Donation Details</h2>
        
        <div className="space-y-6">
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bank Details</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><span className="font-medium">Bank Name:</span> Access Bank PLC</p>
              <p className="text-gray-700"><span className="font-medium">Account Name:</span> National Seafarers Welfare Board of Nigeria</p>
              <p className="text-gray-700"><span className="font-medium">Account Number:</span> 0123456789</p>
            </div>
          </div> */}

          <div className="flex flex-col gap-2">
            <h3 className="text-lg  font-semibold text-gray-800 mb-2">Contact Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><span className="font-medium">Name:</span> Mike Olanipekun</p>
              <p className="text-gray-700"><span className="font-medium">Phone:</span> +234 806 094 7228</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><span className="font-medium">Name:</span> Aina Aderemi </p>
              <p className="text-gray-700"><span className="font-medium">Phone:</span> +234 806 235 4971</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              For acknowledgment of your donation or any inquiries, please contact us with your transaction details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDonate = () => (
    <div className="container mx-10">
      <div className="p-6 mb-6">
        <p className="text-gray-700 mb-4">
          Contributing to support NSWBN work is crucial to enable us deliver essential services and support to seafarers. Donation help fund our projects, expand our reach and enhance the quality of our services.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-primary-100 text-2xl font-semibold mb-4">Ways to Support</h2>
          <ul className="space-y-3 text-gray-700">
            {["One-Time Donations", "Recurring Donations", "In-Kind Donations"].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-primary-100 text-2xl font-semibold mb-4">Support Process</h2>
          <ul className="space-y-3 text-gray-700">
            {["Online Donations", "Bank Transfers", "Acknowledgment"].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary-100 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <button 
          onClick={() => setShowDonateModal(true)}
          className="bg-primary-100 text-white px-6 py-3 rounded-sm hover:bg-primary-200 transition-colors duration-300 text-lg font-semibold"
        >
          Support Us
        </button>
      </div>

      {showDonateModal && <DonationModal />}
    </div>
  );


  const renderPartnerships = () => (
    <div className="mx-10 space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="lg:text-lg font-bold text-primary-100 mb-4">International Partners</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm lg:text-lg text-gray-700">
          <li>International Seafarers' Welfare and Assistance Network (ISWAN)</li>
          <li>Convention on Business Integrity (CBi) and the Maritime Anti-corruption Network (MACN)</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="lg:text-lg font-bold text-primary-100 mb-4">Constituent Members</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm lg:text-lg text-gray-700">
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

      <div className="text-center mt-8">
        <button 
          onClick={() => navigate('/volunteer')}
          className="bg-primary-100 text-white px-6 py-3 rounded-sm hover:bg-primary-200 transition-colors duration-300 text-lg font-semibold"
        >
          Apply to Volunteer
        </button>
      </div>
    </div>
  );

  const renderTab = () => {
    switch (activeTab) {
      case "services":
        return renderServices();
      case "support us":
        return renderDonate();
      case "partnerships":
        return renderPartnerships();
      case "gallery":
        return (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ImageList />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="px-6 py-36 sm:px-8 md:px-16 lg:px-24 mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["services", "support us", "partnerships", "gallery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-primary-100 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="transition-all duration-300">
          {renderTab()}
        </div>
      </div>
    </div>
  );
};

export default Services;
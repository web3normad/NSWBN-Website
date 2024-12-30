import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const offices = [
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
  ];

  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-3xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Contact Us
      </h2>
      
      <div className="mx-auto space-y-6">
        <p className="text-gray-700 leading-relaxed text-center">
          For enquiries, feedback, and suggestions, please fill out the contact form below.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Enter your message"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-100 text-white py-2.5 rounded-md hover:bg-opacity-90 transition-colors duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 bg-opacity-10 p-3 rounded-md">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  stroke="currentColor" 
                  className="h-6 w-6 text-primary-100"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.054-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.852C6.838 3.351 6.388 3 5.872 3H4.5A2.25 2.25 0 002.25 5.25v1.5z" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-100">Support</h3>
                <p className="text-gray-600">support@nswbn.org</p>
                <p className="text-gray-600">+234 234-567-89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 bg-opacity-10 p-3 rounded-md">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  stroke="currentColor" 
                  className="h-6 w-6 text-primary-100"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-100">Press</h3>
                <p className="text-gray-600">press@nswbn.org</p>
                <p className="text-gray-600">+234 234-567-89</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-xl md:text-3xl lg:text-3xl font-bold leading-tight mb-8 text-primary-100 text-center">
            Office Locations
          </h2>
          
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
              {offices.map((office, index) => (
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
    </div>
  );
};

export default ContactPage;
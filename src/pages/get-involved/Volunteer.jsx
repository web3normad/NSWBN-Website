import React, { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    employmentInfo: {},
    volunteerExperience: "",
    motivation: "",
    skills: [],
    volunteerPreferences: [],
    availability: {},
    references: [
      { name: "", relationship: "", contactNumber: "", email: "" },
      { name: "", relationship: "", contactNumber: "", email: "" },
    ],
    declaration: false,
  });

  const skillsOptions = [
    "Counseling and psycho-social skills",
    "Maritime background/experience",
    "Proficiency in English language",
    "Communication and Interpersonal Skills",
    "Listening Skills",
  ];

  const volunteerPreferencesOptions = [
    "Visiting seafarers in port",
    "Assisting seafarers with communication",
    "Organizing events and activities",
    "Advocacy and awareness-raising",
    "Administrative support",
    "All areas of NSWBN activities",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  return (
    <div className=" min-h-screen py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <section className="py-8 mb-10">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-100 mb-6 text-center">
            Volunteer with NSWBN
          </h1>
          <p className="text-sm lg:text-lg  text-gray-700 mb-4">
            Volunteering with the National Seafarers' Welfare Board (NSWB)
            offers a meaningful opportunity to directly contribute to the
            welfare of seafarers. Our volunteer programs are designed to engage
            community members in supporting our mission.
          </p>

          {/* Volunteer Opportunities */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold lg:text-xl text-primary-100 mb-4">
                Ship Visits
              </h3>
              <p className="text-sm lg:text-lg ">
                Engage in regular visits to ships to provide support and
                services to seafarers.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold lg:text-xl text-primary-100 mb-4">
                Event Organization
              </h3>
              <p className="text-sm lg:text-lg ">
                Assist in planning and executing workshops, seminars, and
                community outreach programs.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold lg:text-xl text-primary-100 mb-4">
                Administrative Support
              </h3>
              <p className="text-sm lg:text-lg ">
                Provide assistance in our offices with data entry,
                correspondence, and project management.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Application Form */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="border-b pb-8">
              <h2 className="lg:text-2xl font-semibold text-primary-q00 mb-6">
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your contact number"
                  />
                </div>
              </div>
            </div>

            {/* Motivation Section */}
            <div className="border-b pb-8">
              <h2 className="text-lg lg:text-2xl font-semibold text-primary-100 mb-6">
                Your Motivation
              </h2>
              <div>
                <label className="block text-md lg:text-lg text-gray-700 font-medium mb-2">
                  Why are you interested in volunteering with NSWB?
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Share your motivation for supporting seafarers' welfare"
                ></textarea>
              </div>
            </div>

            {/* Skills and Preferences */}
            <div className="border-b pb-8">
              <h2 className="text-lg lg:text-2xl font-semibold text-primary-100 mb-6">
                Skills and Preferences
              </h2>
              <div>
                <h3 className="font-medium text-md lg:text-lg text-gray-700 mb-4">
                  Select Your Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skillsOptions.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`skill-${index}`}
                        className="mr-2 text-teal-600 focus:ring-teal-500"
                      />
                      <label
                        htmlFor={`skill-${index}`}
                        className="text-gray-700 text-sm lg:text-lg"
                      >
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-700 mb-4">
                  Volunteer Area Preferences
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {volunteerPreferencesOptions.map((preference, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`preference-${index}`}
                        className="mr-2 text-teal-600 focus:ring-teal-500"
                      />
                      <label
                        htmlFor={`preference-${index}`}
                        className="text-gray-700 text-sm lg:text-lg"
                      >
                        {preference}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* References Section */}
            <div className="border-b pb-8">
              <h2 className="text-lg lg:text-2xl font-semibold text-primary-100 mb-6">
                References
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-4">
                    Reference 1
                  </h3>
                  <div className="space-y-4 text-md lg:text-lg">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="text"
                      placeholder="Relationship"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-4">
                    Reference 2
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="text"
                      placeholder="Relationship"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Declaration Section */}
            <div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="declaration"
                  className="mr-3 text-primary-100 focus:ring-teal-500"
                />
                <label htmlFor="declaration" className="text-gray-700">
                  I declare that the information provided is true and accurate
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-100 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300 ease-in-out"
              >
                Submit Volunteer Application
              </button>
            </div>
          </form>
        </section>

        {/* Contact Information */}
        <section className="mt-10 text-center">
          <p className="text-gray-600">
            For inquiries, please contact us at{" "}
            <a
              href="mailto:nswbnigeria@gmail.com"
              className="text-primary-100 font-bold hover:underline"
            >
              nswbnigeria@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Volunteer;

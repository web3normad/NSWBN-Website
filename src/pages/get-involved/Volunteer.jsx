import React from 'react';

const Volunteer = () => {
  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <div>
        <h1 className="text-3xl font-bold mb-4">Volunteer Opportunities</h1>
        <p className="text-lg mb-6">
          Volunteering with NSWBN offers a fulfilling opportunity to directly contribute to the welfare of seafarers. Our volunteer programs are designed to engage community members and professionals in meaningful activities that support our mission.
        </p>
        
        {/* Volunteer Roles Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Volunteer Roles:</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Ship Visits: Engage in regular visits to ships to provide support and services to seafarers, including health checks, counseling, and recreational activities.</li>
            <li>Event Organization: Assist in the planning and execution of NSWBN events, such as training workshops, seminars, and community outreach programs.</li>
            <li>Administrative Support: Provide administrative assistance in our offices, helping with data entry, correspondence, and project management.</li>
          </ul>
        </div>

        {/* How to Volunteer Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How to Volunteer:</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Application Process: Interested individuals can apply by completing a volunteer application form available here <a href="#" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">[link]</a>.</li>
            <li>Orientation and Training: Volunteers will undergo an orientation session and receive training to prepare them for their roles.</li>
            <li>Commitment: Volunteers are encouraged to commit a certain number of hours per month, depending on their availability and the needs of NSWBN.</li>
          </ul>
        </div>

        <div>
        <h1 className="text-3xl font-bold mb-4">Volunteer Recruitment Form</h1>
        <p className="text-lg mb-6">
          Thank you for your interest in volunteering with the National Seafarers' Welfare Board (NSWB) and its constituent Seafarers' Port Welfare Committees (SPWCs) as Port Welfare Volunteers. Your dedication and commitment to supporting the welfare of seafarers are highly valued. Please complete the following form:
        </p>
        
        {/* Volunteer Application Form */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Volunteer Application Form</h2>
          <form className="space-y-4">

            {/* Personal Information */}
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" placeholder="Full Name" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <input type="text" placeholder="Gender" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <input type="date" placeholder="Date of Birth" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nationality</label>
                <input type="text" placeholder="Nationality" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number(s)</label>
                <input type="text" placeholder="Contact Number" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input type="email" placeholder="Email" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <textarea className="bg-white p-2 border border-gray-300 rounded outline-none w-1/2 h-24 resize-none" placeholder="Your address"></textarea>
              </div>
            </div>

            {/* Employment Information */}
            <h3 className="text-lg font-semibold">Employment Information</h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Current Employer/Organization</label>
                <input type="text" placeholder="Employer/Organization" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full md:w-1/2 mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Job Position</label>
                <input type="text" placeholder="Job Position" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
              </div>
              <div className="w-full mx-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Industry/Field</label>
                <input type="text" placeholder="Industry/Field" className="bg-white p-2 border border-gray-300 rounded outline-none w-1/2" />
              </div>
            </div>

           {/* Volunteer Experience */}
          <h2 className="text-xl font-bold mb-4 text-teal-600">Volunteer Experience</h2>
          <div>
            <label className="block text-sm font-bold mb-1">Have you previously volunteered in any capacity? If yes, please provide details:</label>
            <textarea className="w-full border rounded px-3 py-2"></textarea>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Why are you interested in volunteering with the NSWB and SPWCs? What motivates you to support seafarers' welfare?</label>
            <textarea className="w-full border rounded px-3 py-2"></textarea>
          </div>
            
            {/* Motivation */}
            <h3 className="text-lg font-semibold">Motivation</h3>
            <div className="mx-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Why are you interested in volunteering with the NSWB and SPWCs? What motivates you to support seafarers' welfare?</label>
              <textarea className="bg-white p-2 border border-gray-300 rounded outline-none w-full h-24 resize-none" placeholder="What motivates you?"></textarea>
            </div>

           {/* Skills and Expertise */}
           <h2 className="text-xl font-bold mb-4 text-teal-600">Skills and Expertise</h2>
          <div>
            <label className="block text-sm font-bold mb-1">The following are relevant skills or expertise for this role (tick any you are proficient in):</label>
            <div className="flex flex-wrap gap-4">
              <div>
                <input type="checkbox" /> Counseling and psycho-social skills
              </div>
              <div>
                <input type="checkbox" /> Maritime background/experience
              </div>
              <div>
                <input type="checkbox" /> Proficiency in English language
              </div>
              <div>
                <input type="checkbox" /> Communication and Interpersonal Skills
              </div>
              <div>
                <input type="checkbox" /> Listening Skills
              </div>
            </div>
          </div>

          {/* Volunteer Preferences */}
          <h2 className="text-xl font-bold mb-4 text-teal-600">Volunteer Preferences</h2>
          <div>
            <label className="block text-sm font-bold mb-1">Select areas you are interested in volunteering:</label>
            <div className="flex flex-wrap gap-4">
              <div>
                <input type="checkbox" /> Visiting seafarers in port
              </div>
              <div>
                <input type="checkbox" /> Assisting seafarers with communication
              </div>
              <div>
                <input type="checkbox" /> Organizing events and activities
              </div>
              <div>
                <input type="checkbox" /> Advocacy and awareness-raising
              </div>
              <div>
                <input type="checkbox" /> Administrative support
              </div>
              <div>
                <input type="checkbox" /> All areas of NSWBN activities
              </div>
            </div>
          </div>

            {/* Availability */}
            <h3 className="text-lg font-semibold">Availability</h3>
            <div className="mx-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Will you be able to volunteer for an average of 8 hours (or more) per week?</label>
              <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-1/2" placeholder="Yes/No" />
            </div>
            <div className="mx-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Are you available during weekends or public holidays?</label>
              <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-1/2" placeholder="Yes/No" />
            </div>

            {/* Proximity */}
            <h3 className="text-lg font-semibold">Proximity</h3>
            <div className="mx-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Do you live or work within reasonable distance of seaports in Nigeria?</label>
              <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-1/2" placeholder="Yes/No" />
            </div>

           {/* References */}
<h3 className="text-lg font-semibold">References</h3>
<div className="flex flex-wrap">
  {/* Reference 1 */}
  <div className="w-full space-y-2 md:w-1/2 mx-2 mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Reference Name (1)</label>
    <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Reference Name" />
    <label className="block text-gray-700 text-sm font-bold mb-2">Relationship</label>
    <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Relationship" />
    <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
    <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Contact Number" />
    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
    <input type="email" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Email Address" />
  </div>

 {/* Divider Line */}
 <div className="flex justify-start ml-3 my-4 w-full">
    <div className="w-1/2">
      <hr className="border-t-2 border-gray-500" />
    </div>
  </div>

  {/* Reference 2 */}
  <div className="w-full space-y-2 md:w-1/2 mx-2 mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Reference Name (2)</label>
    <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Reference Name" />
    <label className="block text-gray-700 text-sm font-bold mb-2">Relationship</label>
    <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Relationship" />
    <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
    <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Contact Number" />
    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
    <input type="email" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Email Address" />
  </div>
</div>


            {/* Declaration */}
            <h3 className="text-lg font-semibold">Declaration</h3>
            <div className="mx-2 mb-4">
              <p className="mb-2">
                I hereby declare that all information provided in this form is true and accurate to the best of my knowledge. I understand that any false statement may result in the termination of my volunteer position.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mx-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Signature</label>
                  <input type="text" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" placeholder="Your name" />
                </div>
                <div className="w-full md:w-1/2 mx-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                  <input type="date" className="bg-white p-2 border border-gray-300 rounded outline-none w-full" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex p-2 mt-4">
              <button
                type="submit"
                className="text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-base mt-6">
            Please submit this form to <a href="mailto:nswbnigeria@gmail.com" className="text-teal-700 font-bold">nswbnigeria@gmail.com</a> as soon as possible. We will review your application and get in touch with you regarding the next steps in the volunteer selection process. Thank you for your interest in volunteering with the NSWB and SPWCs. Your support will make a meaningful difference in the lives of seafarers, and we look forward to working with you to promote their welfare.
          </p>
          <p className="text-base">
            For inquiries or further information, please contact us at <a href="mailto:nswbnigeria@gmail.com" className="text-teal-700 font-bold">nswbnigeria@gmail.com</a> or reach out to Dr. Kuje on <span className="text-teal-700 font-bold">08060616034</span>.
          </p>
        </div>
        </div>
      </div>
      </div>
  );
};

export default Volunteer;

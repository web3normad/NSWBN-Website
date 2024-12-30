import React from "react";

const Services = () => {
  return (
    <div className="px-6 py-32 bg-white text-gray-800 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-3xl text-primary-100 font-bold leading-tight mb-8 uppercase tracking-wider text-center pb-4">
        Our Services
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        The National Seafarers Welfare Board of Nigeria (NSWBN) is committed to
        supporting maritime organizations and promoting the welfare and wellbeing of seafarers. Our services adhere to international standards, particularly the Maritime Labour Convention, 2006. Below are the key services we provide:
      </p>

      {[
        {
          title: "Welfare Services",
          description: "Promoting seafarers' welfare and wellbeing through coordinated efforts and facilities.",
          items: [
            "Monitoring the adequacy and availability of welfare facilities in Nigerian seaports.",
            "Providing shore-based services, including recreational facilities and assistance for local and international seafarers.",
            "Fostering a welcoming environment for visiting seafarers, showcasing Nigeria's hospitality."
          ]
        },
        {
          title: "Emergency Support",
          description: "Offering critical assistance during emergencies and unforeseen circumstances.",
          items: [
            "Rapid response to emergencies such as medical crises, piracy incidents, and abandoned seafarers.",
            "Coordinating with stakeholders to ensure timely interventions during emergencies.",
            "Providing transportation and support through initiatives like the ITF Seafarers Trust buses for stranded or abandoned seafarers."
          ]
        },
        {
          title: "Advocacy and Legal Support",
          description: "Upholding seafarers' rights and providing legal assistance when needed.",
          items: [
            "Advocating for the welfare needs of seafarers at the national and international levels.",
            "Offering legal advice and representation to address challenges faced by seafarers.",
            "Facilitating support for seafarers affected by piracy or wrongful detention."
          ]
        },
        {
          title: "Coordination and Collaboration",
          description: "Ensuring effective communication and planning for seafarers' welfare.",
          items: [
            "Establishing and regulating Port Welfare Committees across major Nigerian ports.",
            "Exchanging information between stakeholders to coordinate welfare initiatives.",
            "Providing capacity-building programs for volunteers and welfare organizations."
          ]
        },
        {
          title: "Training and Awareness",
          description: "Empowering seafarers and welfare workers through education and training.",
          items: [
            "Organizing workshops and training sessions to build awareness about seafarers' rights and welfare.",
            "Developing programs to train ship-welfare visitors and support staff.",
            "Promoting best practices for mental health, safety, and hygiene among seafarers."
          ]
        }
      ].map((section, index) => (
        <div key={index} className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl text-primary-100 font-bold mb-4 border-b border-primary-100 pb-2">
            {section.title}
          </h2>
          <p className="text-lg text-gray-700 mb-4 italic">
            {section.description}
          </p>
          <ul className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="text-primary-100 mr-3 text-2xl">&#8227;</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;

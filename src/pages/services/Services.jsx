import React from "react";

const Services = () => {
  return (
    <div className="px-6 py-32 bg-white text-gray-800 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-3xl text-primary-100 font-bold leading-tight mb-8 uppercase tracking-wider text-center pb-4">
        Services
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        The National Seafarers Welfare Board of Nigeria (NSWBN) is dedicated to
        providing a comprehensive array of services designed to enhance the
        wellbeing and professional development of seafarers. Our services are
        meticulously structured to address the diverse needs of seafarers,
        ensuring that they receive the necessary support and resources for a
        fulfilling and secure career at sea. Below are the core services offered
        by NSWBN:
      </p>

      {[
        {
          title: "Welfare Services",
          description: "NSWBN offers a wide range of welfare services aimed at promoting the overall welfare and wellbeing of seafarers.",
          items: [
            "Provision of welfare services to seafarers in need, ensuring stability during times of crisis.",
            "Access to recreational facilities and activities to promote physical fitness and mental relaxation.",
            "Organization of social events and activities to foster community and camaraderie among seafarers."
          ]
        },
        {
          title: "Legal Assistance",
          description: "Seafarers often encounter legal challenges that require expert guidance and support.",
          items: [
            "Access to legal advice and consultations to address various legal issues faced by seafarers.",
            "Provision of legal representation in court or other legal forums to protect seafarers' rights.",
            "Advocacy for the rights of seafarers at both national and international levels."
          ]
        },
        {
          title: "Mental Health and Counseling Services",
          description: "The mental health and psychological wellbeing of seafarers are of paramount importance.",
          items: [
            "Provision of professional counseling services to address mental health issues.",
            "Confidential and supportive environment for discussing personal and professional challenges.",
            "Access to psychosocial support programs designed to help seafarers cope with life at sea.",
            "Group therapy sessions and support groups to promote mental resilience and wellbeing."
          ]
        },
        {
          title: "Training and Development Programs",
          description: "Continuous professional development is essential for the career progression of seafarers.",
          items: [
            "Specialized training programs to enhance skills and competencies.",
            "Access to certifications and qualifications for career advancement.",
            "Educational programs and workshops on safety, health, and operational efficiency.",
            "Collaboration with maritime training institutions to provide accredited courses."
          ]
        },
        {
          title: "Emergency Assistance",
          description: "In times of emergency, NSWBN is committed to providing immediate and effective assistance to seafarers.",
          items: [
            "Rapid response to emergencies, including medical issues and crises at sea.",
            "Coordination with authorities to ensure timely intervention.",
            "Support during natural disasters, piracy, and maritime threats.",
            "Assistance with evacuation, repatriation, and critical services.",
            "Support services for seafarers' families during emergencies."
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
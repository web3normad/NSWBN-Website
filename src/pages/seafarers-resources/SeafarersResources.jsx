import React from "react";

const SeafarersResources = () => {
  return (
    <div className="px-6 py-32 bg-white text-gray-800 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-3xl text-primary-100 font-bold leading-tight mb-8 uppercase tracking-wider text-center border-primary-100 pb-4">
        Seafarers' Rights and Responsibilities
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Understanding one's rights and responsibilities is fundamental to
        ensuring a safe and fair working environment. NSWBN provides detailed
        information on the following:
      </p>

      {[
        {
          title: "Rights",
          items: [
            { 
              title: "Right to Safe Working Conditions", 
              description: "Seafarers are entitled to work in environments that meet established safety standards, free from hazards that could cause harm."
            },
            { 
              title: "Right to Fair Wages", 
              description: "Seafarers have the right to receive fair compensation for their work, as stipulated in their contracts and in accordance with international labor standards."
            },
            { 
              title: "Right to Medical Care", 
              description: "Access to medical treatment and healthcare services both onboard and ashore is a fundamental right for seafarers."
            },
            { 
              title: "Right to Rest and Leave", 
              description: "Seafarers are entitled to adequate rest periods and leave, ensuring their physical and mental wellbeing."
            },
            { 
              title: "Right to Training and Development", 
              description: "Seafarers have the right to access training programs and educational resources to enhance their skills and advance their careers."
            }
          ]
        },
        {
          title: "Responsibilities",
          items: [
            { 
              title: "Adherence to Safety Protocols", 
              description: "Seafarers are responsible for following all safety guidelines and protocols to ensure their own safety and the safety of others."
            },
            { 
              title: "Professional Conduct", 
              description: "Maintaining a high standard of professionalism and ethical behavior is a key responsibility for seafarers."
            },
            { 
              title: "Compliance with Laws and Regulations", 
              description: "Seafarers must comply with all relevant national and international laws and regulations governing maritime operations."
            },
            { 
              title: "Protecting the Environment", 
              description: "Seafarers have a duty to engage in environmentally responsible practices and minimize their impact on the marine environment."
            }
          ]
        },
        {
          title: "Employment Opportunities",
          items: [
            { title: "Job Listings", description: null },
            { title: "Career Counselling", description: null },
            { title: "Networking Opportunities", description: null },
            { title: "Education and Training Resources", description: null },
            { title: "Health and Safety Guidelines", description: null }
          ]
        },
        {
          title: "Useful Contacts and Helplines",
          items: [
            { 
              title: "Emergency Helplines", 
              description: "Contact numbers for immediate assistance in case of emergencies, including medical emergencies, legal issues, and crisis situations."
            },
            { 
              title: "Support Services Contacts", 
              description: "Information on contacting various support services, including mental health counseling, and legal assistance."
            },
            { 
              title: "Industry Organizations", 
              description: "Contact details for key maritime industry organizations, including regulatory bodies, unions, and welfare organizations."
            }
          ]
        }
      ].map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl text-primary-100 font-bold mb-4 border-b border-primary-100 pb-2">
            {section.title}
          </h2>
          <ul className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="text-primary-100 mr-3 text-2xl">&#8227;</span>
                <div>
                  {item.title && (
                    <span className="font-semibold text-gray-900 block mb-1">
                      {item.title}:
                    </span>
                  )}
                  {item.description && (
                    <span className="text-gray-700">
                      {item.description}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SeafarersResources;
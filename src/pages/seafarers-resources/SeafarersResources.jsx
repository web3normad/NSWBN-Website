import React from "react";

const SeafarersResources = () => {
  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-lg sm:text-xl md:text-xl lg:text-3xl font-bold leading-tight mb-6 text-logoColor pt-6">
        Seafarers' Rights and Responsibilities
      </h1>
      <p>
        Understanding one's rights and responsibilities is fundamental to
        ensuring a safe and fair working environment. NSWBN provides detailed
        information on the following:
      </p>
      <div>
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor pt-6">
          Rights:
        </h2>
        <ul>
          <li>
            Right to Safe Working Conditions: Seafarers are entitled to work in
            environments that meet established safety standards, free from
            hazards that could cause harm.
          </li>
          <li>
            Right to Fair Wages: Seafarers have the right to receive fair
            compensation for their work, as stipulated in their contracts and in
            accordance with international labor standards.
          </li>
          <li>
            {" "}
            Right to Medical Care: Access to medical treatment and healthcare
            services both onboard and ashore is a fundamental right for
            seafarers.
          </li>
          <li>
            Right to Rest and Leave: Seafarers are entitled to adequate rest
            periods and leave, ensuring their physical and mental wellbeing.
          </li>
          <li>
            Right to Training and Development: Seafarers have the right to
            access training programs and educational resources to enhance their
            skills and advance their careers.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor pt-6">
          Responsibilities:
        </h2>
        <ul>
          <li>
            Adherence to Safety Protocols: Seafarers are responsible for
            following all safety guidelines and protocols to ensure their own
            safety and the safety of others.
          </li>
          <li>
            Professional Conduct: Maintaining a high standard of professionalism
            and ethical behavior is a key responsibility for seafarers.
          </li>
          <li>
            Compliance with Laws and Regulations: Seafarers must comply with all
            relevant national and international laws and regulations governing
            maritime operations.
          </li>
          <li>
            Protecting the Environment: Seafarers have a duty to engage in
            environmentally responsible practices and minimize their impact on
            the marine environment.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor pt-6">
          Employment Opportunities
        </h2>
        <ul>
          <li>Job listings</li>
          <li>Career Counselling</li>
          <li>Networking Opportunities</li>
          <li>Education and Training Resources</li>
          <li>Health and Safety Guidelines</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor pt-6">
          Useful Contacts and Helplines
        </h2>
        <p>
          Emergency Helplines: Contact numbers for immediate assistance in case
          of emergencies, including medical emergencies, legal issues, and
          crisis situations…………..
        </p>
        <p>
          Support Services Contacts: Information on contacting various support
          services, including mental health counseling, and legal assistance……
        </p>
        <p>
          Industry Organizations: Contact details for key maritime industry
          organizations, including regulatory bodies, unions, and welfare
          organizations……
        </p>
      </div>
    </div>
  );
};

export default SeafarersResources;

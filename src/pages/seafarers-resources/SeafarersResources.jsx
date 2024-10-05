import React from "react";

const SeafarersResources = () => {
  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-2xl text-primary-100 sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 text-logoColor pt-6">
        Seafarers' Rights and Responsibilities
      </h1>
      <p>
        Understanding one's rights and responsibilities is fundamental to
        ensuring a safe and fair working environment. NSWBN provides detailed
        information on the following:
      </p>
      <div className="space-y-2">
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl font-bold leading-tight pt-6">
          Rights:
        </h2>
        <ul>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold">Right to Safe Working Conditions:</span>  Seafarers are entitled to work in
            environments that meet established safety standards, free from
            hazards that could cause harm.
          </li>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold"> Right to Fair Wages:</span>  Seafarers have the right to receive fair
            compensation for their work, as stipulated in their contracts and in
            accordance with international labor standards.
          </li>
          <li>
            {" "}
            <span className="text-xl md:text-2xl">&#8227;</span>  <span className="font-semibold"> Right to Medical Care:</span>  Access to medical treatment and healthcare
            services both onboard and ashore is a fundamental right for
            seafarers.
          </li>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold"> Right to Rest and Leave:</span>  Seafarers are entitled to adequate rest
            periods and leave, ensuring their physical and mental wellbeing.
          </li>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold"> Right to Training and Development:</span>  Seafarers have the right to
            access training programs and educational resources to enhance their
            skills and advance their careers.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold leading-tight pt-6">
          Responsibilities:
        </h2>
        <ul>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold">Adherence to Safety Protocols:</span> Seafarers are responsible for
            following all safety guidelines and protocols to ensure their own
            safety and the safety of others.
          </li>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold">Professional Conduct:</span> Maintaining a high standard of professionalism
            and ethical behavior is a key responsibility for seafarers.
          </li>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold">Compliance with Laws and Regulations:</span> Seafarers must comply with all
            relevant national and international laws and regulations governing
            maritime operations.
          </li>
          <li>
          <span className="text-xl md:text-2xl">&#8227;</span> <span className="font-semibold">Protecting the Environment:</span> Seafarers have a duty to engage in
            environmentally responsible practices and minimize their impact on
            the marine environment.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl font-bold leading-tight pt-6">
          Employment Opportunities
        </h2>
        <ul>
          <li><span className="text-xl md:text-2xl">&#8227;</span>Job listings</li>
          <li><span className="text-xl md:text-2xl">&#8227;</span>Career Counselling</li>
          <li><span className="text-xl md:text-2xl">&#8227;</span>Networking Opportunities</li>
          <li><span className="text-xl md:text-2xl">&#8227;</span>Education and Training Resources</li>
          <li><span className="text-xl md:text-2xl">&#8227;</span>Health and Safety Guidelines</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl font-bold leading-tight pt-6">
          Useful Contacts and Helplines
        </h2>
        <p>
        <span className="text-xl md:text-2xl">&#8227;</span>  <span className="font-semibold">Emergency Helplines:</span> Contact numbers for immediate assistance in case
          of emergencies, including medical emergencies, legal issues, and
          crisis situations…………..
        </p>
        <p>
        <span className="text-xl md:text-2xl">&#8227;</span><span className="font-semibold"> Support Services Contacts:</span> Information on contacting various support
          services, including mental health counseling, and legal assistance……
        </p>
        <p>
        <span className="text-xl md:text-2xl">&#8227;</span><span className="font-semibold"> Industry Organizations:</span> Contact details for key maritime industry
          organizations, including regulatory bodies, unions, and welfare
          organizations……
        </p>
      </div>
    </div>
  );
};

export default SeafarersResources;

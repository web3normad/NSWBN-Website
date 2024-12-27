import React from 'react';

const FAQs = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">Common Questions</h3>
          <ol className="space-y-4 text-gray-700">
            {[
              {
                question: "What is the NSWBN?",
                answer: "The National Seafarers Welfare Board of Nigeria (NSWBN) is a non-profit organization dedicated to enhancing the welfare and wellbeing of seafarers. We provide a range of services, including healthcare, legal assistance, mental health support, and training programs."
              },
              {
                question: "Who can access NSWBN's services?",
                answer: "Our services are available to all seafarers, irrespective of their nationality, race, ethnicity, religion, or creed. We also offer support to the families of seafarers and retired maritime professionals."
              },
              {
                question: "How can I get in touch with NSWBN?",
                answer: "You can contact us via our website's contact form, email, or phone. Detailed contact information is available on our 'Contact Us' page."
              },
              {
                question: "What types of welfare services does NSWBN provide?",
                answer: "NSWBN offers a variety of welfare services, including healthcare, financial aid, legal assistance, mental health counseling, and emergency support. For more detailed information, please visit our 'Services' page."
              },
              {
                question: "How can I volunteer with NSWBN?",
                answer: "To volunteer with NSWBN, please visit our 'Get Involved' page, where you can find detailed information on volunteer opportunities and the application process."
              },
              {
                question: "How can I make a donation to NSWBN?",
                answer: "Donations can be made through our secure online donation portal, via bank transfer, or by providing in-kind contributions. Detailed instructions are available on our 'Get Involved' page under the Donation Information section."
              },
              {
                question: "What is the process for becoming a member of NSWBN?",
                answer: "To become a member, complete the membership application form on our website. Membership categories include individual and organizational memberships. More information can be found on our 'Get Involved' page under Membership Information."
              },
              {
                question: "How can I stay updated on NSWBN's news and events?",
                answer: "You can stay updated by visiting our 'News and Events' page, subscribing to our newsletter, and following us on social media."
              }
            ].map((faq, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0">
                <span className="font-bold block mb-2">
                  {index + 1}. {faq.question}
                </span>
                {faq.answer}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">How to Use Our Services</h3>
          <div className="space-y-6">
            {[
              {
                title: "Legal Assistance",
                steps: [
                  "Contact NSWBN to schedule a consultation with our legal team.",
                  "Provide details of your legal issue and any relevant documents.",
                  "Receive legal advice and representation as needed."
                ]
              },
              {
                title: "Mental Health and Counseling Services",
                steps: [
                  "Contact NSWBN to book a counseling session.",
                  "Complete an initial assessment with one of our mental health professionals.",
                  "Attend regular counseling sessions as recommended."
                ]
              },
              {
                title: "Training and Development Programs",
                steps: [
                  "Visit our 'Services' page to view available training programs.",
                  "Register for your chosen program online or via phone.",
                  "Attend the training sessions as scheduled."
                ]
              }
            ].map((service, index) => (
              <div key={index}>
                <h4 className="text-base font-semibold text-primary-100 mb-2">{service.title}:</h4>
                <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-primary-100 mb-4">General Information</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="text-base font-semibold text-primary-100 mb-2">Operating Hours:</h4>
              <ul className="list-disc pl-6">
                <li>NSWBN offices are open Monday to Friday, from 9:00 AM to 5:00 PM. (Hopefully the secretariat will be opened soon)</li>
                <li>Emergency services are available 24/7 for urgent assistance.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-primary-100 mb-2">Location:</h4>
              <ul className="list-disc pl-6">
                <li>Our main office is located in Lagos, Nigeria. Please refer to the 'Contact Us' page for detailed address and directions.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-primary-100 mb-2">Confidentiality:</h4>
              <ul className="list-disc pl-6">
                <li>NSWBN is committed to maintaining the confidentiality and privacy of all seafarers who use our services. Personal information is handled in accordance with our privacy policy, which is available on our website.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-primary-100 mb-2">Feedback and Complaints:</h4>
              <ul className="list-disc pl-6">
                <li>We value feedback from seafarers and stakeholders to improve our services. You can submit feedback or complaints via our website's feedback form or by contacting us directly.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
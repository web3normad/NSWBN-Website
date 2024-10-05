import React from 'react'

const FAQs = () => {
  return (
    <div className="px-6 py-32 h-full space-y-6 sm:px-8 md:px-16 lg:px-24">
      <div className='space-y-4'>
        <h1 className='text-2xl text-primary-100 font-bold'>Frequently Asked Questions</h1>
        <ol className='space-y-3'>
          <li><span className='font-bold'>1. What is the NSWBN?</span> The National Seafarers Welfare Board of Nigeria (NSWBN) is a non-profit organization dedicated to enhancing the welfare and wellbeing of seafarers. We provide a range of services, including healthcare, legal assistance, mental health support, and training programs.</li>
          <li><span className='font-bold'>2. Who can access NSWBN's services?</span> Our services are available to all seafarers, irrespective of their nationality, race, ethnicity, religion, or creed. We also offer support to the families of seafarers and retired maritime professionals.</li>
          <li><span className='font-bold'>3. How can I get in touch with NSWBN?</span> You can contact us via our website's contact form, email, or phone. Detailed contact information is available on our 'Contact Us' page.</li>
          <li><span className='font-bold'>4. What types of welfare services does NSWBN provide?</span> NSWBN offers a variety of welfare services, including healthcare, financial aid, legal assistance, mental health counseling, and emergency support. For more detailed information, please visit our 'Services' page.</li>
          <li><span className='font-bold'>5. How can I volunteer with NSWBN?</span> To volunteer with NSWBN, please visit our 'Get Involved' page, where you can find detailed information on volunteer opportunities and the application process.</li>
          <li><span className='font-bold'>6. How can I make a donation to NSWBN?</span> Donations can be made through our secure online donation portal, via bank transfer, or by providing in-kind contributions. Detailed instructions are available on our 'Get Involved' page under the Donation Information section.</li>
          <li><span className='font-bold'>7. What is the process for becoming a member of NSWBN?</span> To become a member, complete the membership application form on our website. Membership categories include individual and organizational memberships. More information can be found on our 'Get Involved' page under Membership Information.</li>
          <li><span className='font-bold'>8. How can I stay updated on NSWBN's news and events?</span> You can stay updated by visiting our 'News and Events' page, subscribing to our newsletter, and following us on social media.</li>
        </ol>
      </div>
      <div>
        <h1 className='text-2xl text-primary-100 font-bold'>How to Use Our Services</h1>
        <h2 className='text-xl font-semibold'>Legal Assistance:</h2>
        <ul>
        <li><span className='font-semibold'>Step 1:</span> Contact NSWBN to schedule a consultation with our legal team. </li>
        <li><span className='font-semibold'>Step 2:</span> Provide details of your legal issue and any relevant document </li>
        <li><span className='font-semibold'>Step 3:</span> Receive legal advice and representation as needed.</li>
        </ul>
      </div>
      <div>
        <h2 className='text-xl font-bold'>Mental Health and Counseling Services:</h2>
        <ul>
        <li><span className='font-semibold'>Step 1:</span> Contact NSWBN to book a counseling session.</li>
        <li><span className='font-semibold'>Step 2:</span> Complete an initial assessment with one of our mental health professionals.</li>
        <li><span className='font-semibold'>Step 3:</span> Attend regular counseling sessions as recommended.</li>
        </ul>
      </div>
      <div>
        <h2 className='text-xl font-bold'>Training and Development Programs:</h2>
        <ul>
          <li><span className='font-semibold'>Step 1:</span> Visit our 'Services' page to view available training programs.</li>
          <li><span className='font-semibold'>Step 2:</span> Register for your chosen program online or via phone.</li>
          <li><span className='font-semibold'>Step 3:</span> Attend the training sessions as scheduled.</li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h1 className='text-2xl text-primary-100 font-bold'>General Information</h1>
        <div>
          <h2 className='text-xl font-bold'>Operating Hours:</h2>
          <ul>
            <li><span className='font-semibold'>NSWBN offices are open Monday to Friday,</span> from*** 9:00 AM to 5:00 PM. (Hopefully the secretariat will be opened soon)</li>
            <li>•Emergency services are available 24/7 for urgent assistance.</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Location:</h2>
          <ul>
            <li>•	Our main office is located in Lagos, Nigeria. Please refer to the 'Contact Us' page for detailed address and directions.</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Confidentiality:</h2>
          <ul>
            <li>•	NSWBN is committed to maintaining the confidentiality and privacy of all seafarers who use our services. Personal information is handled in accordance with our privacy policy, which is available on our website.</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Feedback and Complaints:</h2>
          <ul>
            <li>•	We value feedback from seafarers and stakeholders to improve our services. You can submit feedback or complaints via our website’s feedback form or by contacting us directly.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FAQs
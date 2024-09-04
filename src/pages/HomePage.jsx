import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* Seafarers Port Welfare Committees */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor pt-6">
          Currently, the Seafarers Port Welfare Committees (SPWCs) established
          are:
        </h2>
        <ul className="text-base sm:text-lg md:text-lg text-logoColor">
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Apapa Port SPWC,
            established in 2008
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Port Harcourt Port SPWC,
            established in 2018
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Onne Port SPWC,
            established in 2018
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Tin-can Island Port SPWC,
            established in 2018
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Warri Port SPWC,
            established in 2020
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Calabar Port SPWC,
            awaiting inauguration
          </li>
        </ul>
      </div>

      {/* Our Approach */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor">
          Our Approach
        </h2>
        <p className="text-base sm:text-lg md:text-lg font-semibold">
          To achieve our vision and mission, NSWBN endeavors to:
        </p>
        <ul className="text-base sm:text-lg md:text-lg text-logoColor">
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Promote the efforts of our
            members in providing welfare services for seafarers.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Offer welfare services and
            facilities to both local and international seafarers, whether active
            or retired, in Nigeria.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Advocate for the highest
            quality of welfare services for merchant seafarers.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Ensure the genuine welfare
            needs of seafarers are met.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Deploy resources
            effectively.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Facilitate the work of
            constituent members.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Encourage cooperation
            among constituent members.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Uphold and ensure
            adherence to operational standards through the coordination and
            promotion of seafarers' welfare services in ports and terminals.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Support the government in
            developing seafarers' welfare facilities and services.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Lobby the government,
            employers of seafarers, shipping companies, terminal operators, and
            other authorities to maximize support for seafarers' welfare.
          </li>
        </ul>
      </div>

      {/* Primary Functions of the SPWC */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor">
          Primary Functions of the SPWC
        </h2>
        <p className="text-base sm:text-lg md:text-lg font-semibold">
          The SPWC undertakes various essential activities, including:
        </p>
        <ul className="text-base sm:text-lg md:text-lg text-logoColor">
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Conducting ship visits.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Providing psychosocial and
            mental health support.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Visiting prisons to assist
            seafarers who are suspected of criminal activities or those
            abandoned.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Submitting regular reports
            on the committee’s activities.
          </li>
          <li>
            <span className="text-xl md:text-2xl">&#8227;</span> Engaging in other
            welfare-related activities for seafarers or their families as
            approved by the Board.
          </li>
        </ul>
        <h2 className="text-base sm:text-lg md:text-lg pt-3 font-semibold">
          The NSWBN remains steadfast in its commitment to enhancing the welfare
          of seafarers, ensuring that they receive the support and resources
          needed to thrive both personally and professionally.
        </h2>
      </div>

      {/* Mission and Vision */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-6 text-logoColor">
          Mission and Vision
        </h2>
        <div className="pb-4">
          <h3 className="text-logoColor text-base sm:text-lg font-semibold">VISION</h3>
          <p className="text-base">To be the leading Seafarers' Welfare Organization in Africa.</p>
        </div>
        <div>
          <h3 className="text-logoColor text-base sm:text-lg font-semibold">MISSION</h3>
          <p className="text-base">
            To promote, advocate, guide, train and conduct studies to support
            its constituent members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

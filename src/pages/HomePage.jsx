import React from "react";
import Lottie from 'lottie-react';
import animationData from '../assets/images/ship.json';
import Hero from "../components/Hero"
import { ChevronDown, Anchor, Building2, Users2 } from 'lucide-react';

const HomePage = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <Hero />

      {/* Content Sections */}
      <div className="mx-10  py-32 px-6 lg:px-12 space-y-24">
        {/* Port Committees */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Anchor className="w-8 h-8 text-primary-100" />
            <h2 className="text-3xl font-bold text-gray-900">
              Established Port Welfare Committees
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Apapa Port SPWC", year: 2008 },
              { name: "Port Harcourt Port SPWC", year: 2018 },
              { name: "Onne Port SPWC", year: 2018 },
              { name: "Tin-can Island Port SPWC", year: 2018 },
              { name: "Warri Port SPWC", year: 2020 },
              { name: "Calabar Port SPWC", status: "Awaiting inauguration" }
            ].map((committee, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-primary-100">{committee.name}</h3>
                <p className="text-gray-600 mt-2">
                  {committee.status || `Established in ${committee.year}`}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="w-8 h-8 text-primary-100" />
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Promote welfare services for seafarers",
                "Offer comprehensive welfare facilities",
                "Advocate for highest quality services",
                "Meet genuine needs of seafarers",
                "Deploy resources effectively",
                "Facilitate member collaboration",
                "Ensure operational standards",
                "Support government initiatives"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-primary-100 rounded-full" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Functions */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Users2 className="w-8 h-8 text-primary-100" />
            <h2 className="text-3xl font-bold text-gray-900">Primary Functions</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            {[
              "Conducting ship visits",
              "Providing psychosocial support",
              "Assisting imprisoned seafarers",
              "Regular activity reporting",
              "Welfare program coordination"
            ].map((function_, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-primary-100 bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-100 rounded-full" />
                </div>
                <p className="text-gray-700 font-medium">{function_}</p>
              </div>
            ))}

            <div className="mt-8 p-6 bg-primary-100 bg-opacity-5 rounded-xl">
              <p className="text-gray-800 font-medium">
                NSWBN remains committed to enhancing seafarer welfare, providing essential support and resources for their personal and professional growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
import React from "react";
import { ActivitySquare, MapPin, Users2, Building2, Anchor } from "lucide-react";

const AboutPage = () => {
 
  return (
    <div className="min-h-screen">
      <div className="px-6 py-36 sm:px-8 md:px-16  lg:px-24 mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-justify">
          <p className="text-gray-600 md:text-lg mx-10 mb-6">
            The National Seafarers Welfare Board of Nigeria (NSWBN) is a non-profit organization founded in 2003 and formally registered as incorporated trustees with the Corporate Affairs Commission (CAC) on March 30th, 2007. The NSWBN is dedicated to coordinating and supporting shore-based welfare facilities and services for seafarers, irrespective of nationality, race, ethnicity, religion, or creed. This commitment aligns with the Shore-Based Welfare Facilities mandate of Regulation 4.4, Standard A4, as amended, under the International Labour Organization's (ILO) Maritime Labour Convention, 2006 (MLC, 2006), ratified by Nigeria on June 18th, 2013, and implemented by the Nigerian Maritime Administration and Safety Agency (NIMASA).
          </p>
          <p className="text-gray-600 md:text-lg mx-10">
            NSWBN maintains active membership with the International Seafarers Welfare Assistance Network (ISWAN), an esteemed international organization with over two decades of experience in supporting seafarers' welfare globally. The organizational structure of NSWBN is designed for optimal functionality, comprising Trustees, an Executive arm, and Seafarers Port Welfare Committees (SPWCs) at various seaports, terminals, and jetties. Membership in the Board is voluntary, with participants drawn from diverse organizations within the ports, beginning their involvement as volunteers in the Port Welfare Committees.
          </p>
        </div>

        {/* Organization Structure */}
        <section className="mb-24">
          <h2 className="text-xl md:text-3xl font-bold text-primary-100 mb-6 text-center">
            Structure
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Building2 className="lg:w-8 lg:h-8" />,
                title: "Board of Trustees",
                description: "Provides governance and strategic direction, ensuring alignment with international standards"
              },
              {
                icon: <ActivitySquare className="lg:w-8 lg:h-8" />,
                title: "Executive",
                description: "Manages daily operations and implements welfare programs across Nigerian ports"
              },
              {
                icon: <Users2 className="lg:w-8 lg:h-8" />,
                title: "Port Welfare Committees",
                description: "Delivers on-ground services through dedicated teams at key ports nationwide"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 text-white p-3 rounded-lg w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-100 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Functions Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <Users2 className="w-8 h-8 text-primary-100" />
            <h2 className="lg:text-3xl font-bold text-gray-900">Primary Functions</h2>
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

        {/* Port Committees Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Anchor className="w-8 h-8 text-primary-100" />
            <h2 className="lg:text-3xl font-bold text-gray-900">
              Port Welfare Committees
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Apapa Port SPWC", year: 2008 },
              { name: "Port Harcourt Port SPWC", year: 2018 },
              { name: "Onne Port SPWC", year: 2018 },
              { name: "Tin-can Island Port SPWC", year: 2018 },
              { name: "Warri Port SPWC", year: 2020 },
              { name: "Calabar Port SPWC", year: null },
              { name: "Lekki Deepsea Port SPWC", year: null }
            ].map((committee, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="lg:text-xl font-bold text-primary-100">{committee.name}</h3>
                {committee.year && (
                  <p className="text-gray-600 mt-2">
                    Established in {committee.year}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
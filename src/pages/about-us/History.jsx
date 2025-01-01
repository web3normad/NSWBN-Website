import React from "react";
import ImageOne from "../../assets/images/media/img-02.jpg";
import { ActivitySquare, MapPin, Users2, Building2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="px-6 py-36 sm:px-8 md:px-16 lg:px-24  mx-auto">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-100 mb-6">
            About NSWBN
          </h1>
          <div className="w-24 h-1 bg-primary-100 mx-auto mb-6"></div>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            Dedicated to providing shore-based welfare services to seafarers across Nigerian ports since 2007
          </p>
        </div>

        {/* History Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-xl md:text-3xl font-bold text-primary-100">Our History</h2>
              <div className="prose text-gray-600">
                <p>
                  The National Seafarers Welfare Board of Nigeria (NSWBN) emerged from the Joint Maritime Labour Industrial Council (JOMALIC), officially registering with the Corporate Affairs Commission in March 2007.
                </p>
                <p>
                  Our services align with the ILO Maritime Labour Convention (2006), particularly focusing on seafarer welfare under Regulation 4.4 and Standard A4.4. Nigeria's ratification in 2013 strengthened our mandate under NIMASA's oversight.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={ImageOne} 
                alt="NSWBN History" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-4 bg-primary-100 text-white px-3 py-2 rounded-lg">
                <p className="font-bold">Est. 2007</p>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold text-primary-100 mb-6 text-center">
            Organizational Structure
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
                title: "Executive Arm",
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

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-primary-100 mb-6">Port Locations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Tin Can Island",
                "Port Harcourt (Onne)",
                "Warri",
                "Lagos",
                "Calabar",
                "Apapa"
              ].map((port, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary-100" />
                  <span>{port}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
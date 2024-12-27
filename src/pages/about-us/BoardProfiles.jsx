import React from "react";

const BoardProfiles = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Board Members and Staff Profiles
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary-100 mb-3">NSWBN Governing Board</h3>
            <p className="text-gray-700 leading-relaxed">
              The governing body responsible for setting policies, strategies, and overseeing the implementation of welfare initiatives for seafarers in Nigeria. It includes representatives from government agencies, maritime industry stakeholders, and relevant associations.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary-100 mb-3">Executive Chairman</h3>
            <p className="text-gray-700 leading-relaxed">
              The Executive Chairman serves as the head of the NSWBN Governing Board, providing leadership and strategic direction to the organization. Bringing a wealth of experience in maritime welfare and a deep commitment to enhancing seafarers' lives, ……….name……. leads the Board with strategic vision and dedication.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary-100 mb-3">Secretary, Board of Trustees</h3>
            <p className="text-gray-700 leading-relaxed">
              The Secretary, Board of Trustees, …….name…….. serve as a central point of communication between board members, management, and external stakeholders, disseminating information, managing correspondence, and facilitating collaboration. Additionally, the secretary may play a key role in implementing board policies, coordinating board-related activities, and supporting the board in fulfilling its fiduciary duties and strategic objectives.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary-100 mb-3">Legal Adviser</h3>
            <p className="text-gray-700 leading-relaxed">
              …….name……. An expert in maritime law and welfare services, …….name……. oversees the implementation of NSWBN's programs and initiatives, ensuring alignment with international standards.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary-100 mb-3">Constituent Members</h3>
            <p className="text-gray-700 leading-relaxed">
              Organizations or entities that are members of the NSWBN and actively participate in seafarers' welfare initiatives.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-primary-100 text-center">
            Seafarers' Port Welfare Committees (SPWCs) and Chairpersons
          </h3>
          <p className="text-center text-gray-700 leading-relaxed">
            SPWCs are committees established at different ports across Nigeria to address the welfare needs of seafarers.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { port: "Apapa Port", name: "…….name…….", year: 2008, description: "Established in 2008, the Apapa SPWC under …….name's……. leadership has been pivotal in providing comprehensive support services to seafarers." },
              { port: "Port Harcourt Port", name: "…….name…….", year: 2018, description: "Since its inception in 2018, …….name……. has spearheaded numerous welfare initiatives at the Port Harcourt SPWC." },
              { port: "Onne Port", name: "…….name…….", year: 2018, description: "Established in 2018, …….name……. has played a crucial role in enhancing seafarers' welfare at the Onne Port." },
              { port: "Tin-can Island Port", name: "…….name…….", year: 2018, description: "Since 2018, …….name……. has been instrumental in advocating for seafarers' rights and welfare at the Tin-can Island Port." },
              { port: "Warri Port", name: "…….name…….", year: 2020, description: "Under …….name……. 's guidance, the Warri SPWC, established in 2020, has made significant strides in supporting seafarers." },
              { port: "Calabar Port", name: "…….name…….", year: "Forthcoming", description: "Anticipated to lead the Calabar SPWC, …….name……. is preparing for its forthcoming inauguration with a focus on comprehensive welfare service delivery." }
            ].map((committee, index) => (
              <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-semibold text-green-700 mb-2">
                  {committee.port} SPWC Chairman
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {committee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <div className="w-full max-w-4xl h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardProfiles;
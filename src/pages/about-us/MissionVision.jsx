import React from 'react';
import Report from "../../../public/assets/Research_Report_Seafarers_Welfare_Board+pdf.pdf";
import ReportPreview from '../../assets/images/report.png';

const MissionVision = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Mission and Vision
      </h2>

      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h3 className="text-lg font-bold text-primary-100 mb-2">VISION</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading Seafarers' Welfare Organization in Africa.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-primary-100 mb-2">MISSION</h3>
          <p className="text-gray-700 leading-relaxed">
            To promote, advocate, guide, train, and conduct studies to support its constituent members.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Preview of the PDF's first page */}
          <a href={Report} target="_blank" rel="noopener noreferrer">
            <img
              src={ReportPreview}
              alt="Research Report Preview"
              className="w-full max-w-4xl cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

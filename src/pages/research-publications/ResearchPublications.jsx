import React from "react";
import reportPdf from "../../../public/assets/Research_Report_Seafarers_Welfare_Board+pdf.pdf";
import reportImage from "../../assets/images/report.png";

const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="lg:text-2xl font-bold text-primary-100 mb-4">{title}</h2>
    <div className="bg-white text-sm lg:text-lg rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {children}
    </div>
  </div>
);

const ResearchCard = ({ title, description, date }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100">
    <p className="text-sm text-primary-100 mb-2">{date}</p>
    <h3 className="font-semibold text-md lg:text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const DownloadButton = ({ pdfUrl, children }) => (
  <a 
    href={pdfUrl}
    download
    className="text-primary-100 hover:text-green-800 font-medium inline-flex items-center"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  </a>
);

const ResearchPublications = () => {
  const recentReports = [
    {
      title: "Mental Health in Maritime Industry",
      description: "A comprehensive study on mental health challenges faced by seafarers",
      date: "December 2023"
    },
    {
      title: "Safety Standards Review",
      description: "Analysis of current maritime safety standards and recommendations",
      date: "November 2023"
    }
  ];

  const featuredArticles = [
    {
      title: "Future of Maritime Welfare",
      description: "Expert insights on evolving welfare needs in the maritime sector",
      date: "October 2023"
    },
    {
      title: "Digital Solutions in Seafaring",
      description: "Impact of digital transformation on seafarer welfare",
      date: "September 2023"
    }
  ];

  return (
    <div className="min-h-screen lg:mx-10 py-10">
      <div className="mx-2 px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <Section title="Research Reports">
            <p className="text-gray-600 leading-relaxed mb-6">
              NSWBN conducts and commissions extensive research to understand and
              address the various challenges faced by seafarers. Our research
              reports cover a wide range of topics, including mental health,
              occupational safety, legal rights, and more.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-primary-100 mb-4">Recent Research Reports</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {recentReports.map((report, index) => (
                  <ResearchCard key={index} {...report} />
                ))}
              </div>
            </div>
          </Section>

          <Section title="Articles and Publications">
            <p className="text-gray-600 leading-relaxed mb-6">
              NSWBN publishes articles and papers that contribute to the body of
              knowledge on seafarers' welfare. These publications include
              contributions from experts, practitioners, and researchers in the
              maritime industry.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-primary-100 mb-4">Featured Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article, index) => (
                  <ResearchCard key={index} {...article} />
                ))}
              </div>
            </div>
          </Section>

          <Section title="Policy Documents">
            <p className="text-gray-600 leading-relaxed mb-6">
              NSWBN plays a crucial role in shaping policies that affect seafarers'
              welfare. Our policy documents provide insights into our advocacy
              efforts and policy recommendations aimed at improving the lives of
              seafarers.
            </p>
            {/* <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-primary-100 mb-2">Latest Policy Brief</h3>
                <p className="text-gray-600 mb-4">
                  2024 Policy Recommendations for Maritime Labor Standards
                </p>
                <DownloadButton pdfUrl={reportPdf}>
                  Download PDF
                </DownloadButton>
              </div>
            </div> */}
          </Section>

          <Section title="Annual Reports">
            <p className="text-gray-600 leading-relaxed mb-6">
              NSWBN's annual reports provide a detailed account of our activities,
              achievements, and financial performance over the past year. These
              reports offer transparency and accountability, highlighting our
              efforts to enhance seafarers' welfare.
            </p>
            <div className="space-y-4 mb-8">
            <div className="border-l-4 border-primary-100 pl-4">
                <h4 className="font-medium text-gray-900">Annual Report 2024</h4>
                <p className="text-sm text-gray-600">
                  A comprehensive review of NSWBN's projects, initiatives, and financial performance in 2024.
                </p>
                <DownloadButton pdfUrl={reportPdf}>
                  Download Report
                </DownloadButton>
              </div>
              {/* <div className="border-l-4 border-primary-100 pl-4">
                <h4 className="font-medium text-gray-900">Annual Report 2023</h4>
                <p className="text-sm text-gray-600">
                  A comprehensive review of NSWBN's projects, initiatives, and financial performance in 2023.
                </p>
                <DownloadButton pdfUrl={reportPdf}>
                  Download Report
                </DownloadButton>
              </div>
              <div className="border-l-4 border-primary-100 pl-4">
                <h4 className="font-medium text-gray-900">Annual Report 2022</h4>
                <p className="text-sm text-gray-600">
                  An overview of the key achievements and challenges faced by NSWBN in 2022.
                </p>
                <DownloadButton pdfUrl={reportPdf}>
                  Download Report
                </DownloadButton>
              </div> */}
            </div>
            {/* <div className="mt-8">
              <img
                src={reportImage}
                alt="Research Report Preview"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div> */}
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;
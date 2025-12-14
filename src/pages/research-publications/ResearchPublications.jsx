import React from "react";
import reportPdf from "../../../public/assets/Research_Report_Seafarers_Welfare_Board+pdf.pdf";
import NGALegalGuide from "../../../public/assets/NGA_LEGAL-GUIDE_USING-LAWYERS_2012_ENG1_250630_145942.pdf";
import reportImage from "../../assets/images/report.png";

const Section = ({ title, children }) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
    </div>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </div>
);

const ResearchCard = ({ title, description, date }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 group h-full">
    <div className="flex items-center mb-2">
      <div className="bg-blue-100 p-1.5 rounded-full mr-2">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{date}</span>
    </div>
    <h3 className="font-bold text-sm mb-2 text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">{title}</h3>
    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{description}</p>
    <div className="mt-3 pt-2 border-t border-gray-100">
      <button className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center group-hover:translate-x-1 transition-transform">
        Read More
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const LegalGuideCard = ({ title, description, date, pdfUrl, topics }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 group h-full flex flex-col">
    <div className="flex items-center justify-between mb-2">
      <div className="bg-blue-100 p-1.5 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{date}</span>
    </div>
    <h3 className="font-bold text-sm mb-2 text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">{title}</h3>
    <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3 flex-1">{description}</p>
    <div className="mt-auto pt-2 border-t border-gray-100">
      <DownloadButton pdfUrl={pdfUrl}>
        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md text-xs inline-flex items-center w-full justify-center">
          Download Report
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
      </DownloadButton>
    </div>
  </div>
);

// New Webinar Document Card Component
const WebinarDocumentCard = ({ title, description, date, docUrl }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 group h-full flex flex-col">
    <div className="flex items-center justify-between mb-2">
      <div className="bg-blue-100 p-1.5 rounded-full">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{date}</span>
    </div>
    <h3 className="font-bold text-sm mb-2 text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">{title}</h3>
    <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3 flex-1">{description}</p>
    <div className="mt-auto pt-2 border-t border-gray-100">
      <DownloadButton pdfUrl={docUrl}>
        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md text-xs inline-flex items-center w-full justify-center">
          Download Document
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
      </DownloadButton>
    </div>
  </div>
);

// New Annual Report Card Component
const AnnualReportCard = ({ title, description, date, pdfUrl }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 group aspect-square flex flex-col p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-blue-100 p-2 rounded-full">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{date}</span>
    </div>
    <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
    <div className="mt-auto">
      <DownloadButton pdfUrl={pdfUrl}>
        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md text-sm inline-flex items-center w-full justify-center">
          Download Report
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
      </DownloadButton>
    </div>
  </div>
);

const DownloadButton = ({ pdfUrl, children }) => (
  <a 
    href={pdfUrl}
    download
    className="inline-block"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const ResearchPublications = () => {
  const recentReports = [
    // Real reports will be added here as they become available
  ];

  const featuredArticles = [
    // Real articles will be added here as they become available
  ];

  const legalGuides = [
    {
      title: "Using Lawyers in Nigeria",
      description: "Published by Seafarers' Rights International (SRI), this comprehensive guide helps seafarers understand the Nigerian legal profession and provides practical information on selecting, engaging, and working with lawyers in Nigeria.",
      date: "October 2012",
      pdfUrl: NGALegalGuide,
      topics: ["Nigerian Legal System", "Finding Maritime Lawyers", "Legal Fees & Billing"]
    }
  ];

  const webinarDocuments = [
    {
      title: "Webinar Communique",
      description: "Latest webinar proceedings and key discussions on seafarer welfare initiatives, policy updates, and community engagement strategies.",
      date: "June 23, 2025",
      docUrl: "/assets/Webinar-Communique-23062025.docx"
    }
  ];

  const annualReports = [
    {
      title: "Annual Report 2024",
      description: "A comprehensive review of NSWBN's projects, initiatives, and financial performance in 2024.",
      date: "2024",
      pdfUrl: reportPdf
    }
  ];

  return (
    <div className="min-h-screen mx-10 py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Publications</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of research reports, legal guides, and publications 
            dedicated to advancing seafarer welfare and maritime safety standards.
          </p>
        </div>
        <div className="space-y-12">

          {/* NEW: Webinar Documents Section */}
          <Section title="Webinar Documents">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                Access the latest webinar proceedings, communiques, and discussion summaries 
                from our educational sessions and community engagement events.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinarDocuments.map((doc, index) => (
                <WebinarDocumentCard key={index} {...doc} />
              ))}
            </div>
          </Section>

          <Section title="Research Reports">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                NSWBN conducts and commissions extensive research to understand and
                address the various challenges faced by seafarers. Our research
                reports cover a wide range of topics, including mental health,
                occupational safety, legal rights, and more.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">Recent Research Reports</h3>
              {recentReports.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {recentReports.map((report, index) => (
                    <ResearchCard key={index} {...report} />
                  ))}
                </div>
              ) : (
                <div className="bg-blue-50 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Research Reports Coming Soon</h4>
                  <p className="text-gray-600">We're currently working on comprehensive research reports that will be available for download.</p>
                </div>
              )}
            </div>
          </Section>

          <Section title="Legal Guides and Resources">
            <p className="text-gray-600 leading-relaxed mb-6">
              NSWBN provides essential legal guidance and resources to help seafarers 
              understand their rights and navigate legal challenges in Nigerian waters and ports. 
              Our legal guides offer practical advice on working with legal professionals, 
              understanding the Nigerian legal system, and accessing legal aid when needed.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-primary-100 mb-4">Available Legal Guides</h3>
              <div className="grid lg:grid-cols-1 gap-6">
                {legalGuides.map((guide, index) => (
                  <LegalGuideCard key={index} {...guide} />
                ))}
              </div>
            </div>

          </Section>

          <Section title="Articles and Publications">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                NSWBN publishes articles and papers that contribute to the body of
                knowledge on seafarers' welfare. These publications include
                contributions from experts, practitioners, and researchers in the
                maritime industry.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">Featured Articles</h3>
              {featuredArticles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {featuredArticles.map((article, index) => (
                    <ResearchCard key={index} {...article} />
                  ))}
                </div>
              ) : (
                <div className="bg-blue-50 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Articles Coming Soon</h4>
                  <p className="text-gray-600">We're currently working on expert articles and publications that will be available soon.</p>
                </div>
              )}
            </div>
          </Section>

          <Section title="Policy Documents">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                NSWBN plays a crucial role in shaping policies that affect seafarers'
                welfare. Our policy documents provide insights into our advocacy
                efforts and policy recommendations aimed at improving the lives of
                seafarers.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Policy Documents Coming Soon</h4>
              <p className="text-gray-600">We're currently working on comprehensive policy documents that will be available for download.</p>
            </div>
          </Section>

          <Section title="Annual Reports">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                NSWBN's annual reports provide a detailed account of our activities,
                achievements, and financial performance over the past year. These
                reports offer transparency and accountability, highlighting our
                efforts to enhance seafarers' welfare.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {annualReports.map((report, index) => (
                <AnnualReportCard key={index} {...report} />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;
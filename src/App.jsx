import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Import Component
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Import for parent pages
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import Services from "./pages/services/Services.jsx";
import SeafarersResources from "./pages/seafarers-resources/SeafarersResources.jsx";
import ProjectsInitiatives from "./pages/projects-initiatives/ProjectsInitiatives.jsx";
import NewsEvents from "./pages/news-events/NewsEvents.jsx";
import Partnerships from "./pages/partnerships/Partnerships.jsx";
import ResearchPublications from "./pages/research-publications/ResearchPublications.jsx";
import GetInvolved from "./pages/get-involved/GetInvolved.jsx";
import FAQs from "./pages/faqs/FAQs.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import Authentication from "./pages/auth/Authentication.jsx";
import Sitemap from "./pages/Sitemap.jsx";
import PrivacyPolicy from "./pages/PrivacyTerms.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page/*" element={<HomePage />} />

          {/* About Us Section */}
          <Route path="/about-us/*" element={<AboutUs />} />

          {/* Services Section */}
          <Route path="/services/*" element={<Services />} />

          {/* Seafarers' Resources Section */}
          <Route
            path="/seafarers-resources/*"
            element={<SeafarersResources />}
          />

          {/* Projects and Initiatives Section */}
          <Route
            path="/projects-initiatives/*"
            element={<ProjectsInitiatives />}
          />

          {/* News and Events Section */}
          <Route path="/news-events/*" element={<NewsEvents />} />

          {/* Partnerships Section */}
          <Route path="/partnerships/*" element={<Partnerships />} />

          {/* Research and Publications Section */}
          <Route
            path="/research-publications/*"
            element={<ResearchPublications />}
          />

          {/* Get Involved Section */}
          <Route path="/get-involved/*" element={<GetInvolved />} />

          {/* FAQs Section */}
          <Route path="/faqs/*" element={<FAQs />} />

          {/* Contact Us Section */}
          <Route path="/contact-us/*" element={<ContactUs />} />

          {/* Login/Registration Section */}
          <Route path="/auth/*" element={<Authentication/>} />

          {/* Sitemap Section */}
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Privacy Policy and Terms of Service Section */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

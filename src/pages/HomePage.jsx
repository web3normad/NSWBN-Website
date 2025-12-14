import React from "react";
import Lottie from 'lottie-react';
import animationData from '../assets/images/ship.json';
import Hero from "../components/Hero"
import SurveyBanner from "../components/SurveyBanner"
import { ChevronDown, Anchor, Building2, Users2 } from 'lucide-react';

const HomePage = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <Hero />

      {/* Survey Banner */}
      <SurveyBanner />
    </div>
  );
};

export default HomePage;
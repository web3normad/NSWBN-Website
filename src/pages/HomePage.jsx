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
    </div>
  );
};

export default HomePage;
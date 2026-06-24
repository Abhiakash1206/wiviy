import React from "react";
import Navbar from "../components/Navbar";

import Hero from "../components/globalPublicSector/Hero";
import Solutions from "../components/globalPublicSector/Solutions";
import Dashboard from "../components/globalPublicSector/Dashboard";
import Innovation from "../components/globalPublicSector/Innovation";
import HowItWorks from "../components/globalPublicSector/HowItWorks";
import CTASection from "../components/globalPublicSector/CTASection";

const GlobalPublicSector = () => {
  return (
    <div className="bg-white text-[#0F172A]">
      <Navbar darkText />
      <Hero />
      <Solutions />
      <Dashboard />
      <Innovation />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default GlobalPublicSector;
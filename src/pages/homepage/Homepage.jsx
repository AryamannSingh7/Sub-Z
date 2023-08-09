import React from "react";
import Hero from "../../components/Hero";
import FeatureSection from "../../components/FeatureSection";
import About from "../../components/About";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSection />
      <About />
      <Footer />
    </div>
  );
};

export default Homepage;

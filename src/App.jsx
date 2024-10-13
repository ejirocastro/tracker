import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';
import Pricing from './components/Prcing/Pricing';
import FAQ from './components/FAQ/Faq';
import CTA from './components/CTA/Cta';
import './App.css';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


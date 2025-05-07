import React from 'react';
import Footer from './components/Footer';
import AboutSection from './sections/AboutSection';
import EquipmentSection from './sections/EquipmentSection';
import EmployeeSection from './sections/EmployeeSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <EquipmentSection />
      <EmployeeSection />
      <Footer />
    </div>
  );
}

export default App;
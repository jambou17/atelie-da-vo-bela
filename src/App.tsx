import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Catalog from './components/Catalog';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7f4] text-stone-800 selection:bg-sand selection:text-stone-900">
      <Navbar />
      <main className="flex-grow">
        <Header />
        <About />
        <Catalog />
        <HowItWorks />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

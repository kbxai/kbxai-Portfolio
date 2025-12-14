import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-black">
      {/* Interactive elements */}
      <CustomCursor />
      
      {/* Layout */}
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
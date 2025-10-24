import React from "react";

// Components
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Education from "./Components/Education/Education.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Work from "./Components/Work/Work.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// CSS
import "./App.css";

function App() {
  return (
    <div className="bg-[#050414] relative min-h-screen">
      {/* Overlay with grid + radial gradient */}
    <div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
      linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px),
      radial-gradient(ellipse 60% 50% at 0%, #000 70%, transparent 100%)
    `,
    backgroundSize: "20px 20px, 20px 20px, cover",
  }}
></div>

      <div className="relative pt-20 z-10">
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

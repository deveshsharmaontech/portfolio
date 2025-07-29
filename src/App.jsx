import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(Math.min(Math.max(scrolled, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* Scroll progress indicator */}
        <div
          className="fixed top-0 right-0 h-full w-4 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <div
            className="text-white text-sm font-bold transform rotate-180"
            style={{ height: `${scrollPercent}%`, backgroundColor: "#915EFF", transition: "height 0.3s" }}
          >
            {Math.round(scrollPercent)}%
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
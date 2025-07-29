import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // Variants for logo hover animation
  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  // Variants for LinkedIn profile zoom
  const profileVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  // Variants for square moving transition (resume)
  const squareVariants = {
    hidden: { opacity: 0, x: 100, scale: 0 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  };

  // State to toggle between LinkedIn and Resume
  const [showLinkedIn, setShowLinkedIn] = useState(true);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 flex flex-col items-start">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Devesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am web developer, develop user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          {/* Logo container */}
          <div className="flex flex-wrap gap-4 mt-6">
            {["react", "html", "css", "node", "tailwind"].map((tech) => (
              <motion.div
                key={tech}
                className="relative w-16 h-16"
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
                style={{ cursor: "zoom-in" }}
              >
                <img
                  src={`/${tech}-logo.png`}
                  alt={`${tech} logo`}
                  className="w-full h-full object-contain transform-gpu"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(145, 94, 255, 0.5))",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          {/* LinkedIn profile */}
          {showLinkedIn && (
            <motion.a
              href="https://www.linkedin.com/in/devesh-sharma-5b3225366/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 0 }}
              animate={{ x: showLinkedIn ? 0 : -100, opacity: showLinkedIn ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-[60%] h-auto"
              style={{ cursor: "zoom-in" }}
            >
              <motion.div
                variants={profileVariants}
                initial="initial"
                whileHover="hover"
              >
                <img
                  src="/linkedin-profile.png"
                  alt="LinkedIn profile"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; console.error('LinkedIn image failed to load'); }}
                />
              </motion.div>
            </motion.a>
          )}

          {/* Resume photo */}
          {!showLinkedIn && (
            <motion.a
              href="/resume.pdf" // Replace with your resume PDF URL or file path
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              animate="visible"
              variants={squareVariants}
              className="w-[80%] h-auto flex justify-center items-center"
              style={{ cursor: "pointer" }}
            >
              <img
                src="/resume-photo.png"
                alt="Resume"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; console.error('Resume image failed to load'); }}
              />
            </motion.a>
          )}

          {/* Toggle button */}
          <motion.div
            className="absolute bottom-10 right-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowLinkedIn(!showLinkedIn)}
          >
            <div className="w-10 h-10 bg-[#915EFF] rounded-full flex items-center justify-center cursor-pointer">
              <motion.div
                animate={{ rotate: showLinkedIn ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
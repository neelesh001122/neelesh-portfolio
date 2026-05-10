import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Loader from "./components/Loader";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackgroundEffects from "./components/BackgroundEffects";

function App() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Loader */}
      {loading && <Loader />}

      {/* Global Background */}
      <BackgroundEffects />

      {/* Main Content */}
      <div className="relative z-10">

        <Hero />

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <Skills />

        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <Projects />

        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <Experience />

        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <Contact />

        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <Footer />

        </motion.div>

      </div>

    </div>

  );
}

export default App;
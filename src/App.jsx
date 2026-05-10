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

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1200);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* Loader */}
      {loading && <Loader />}

      {/* Background */}
      <BackgroundEffects />

      {/* Main Content */}
      <main className="relative z-10">

        {/* Hero */}
        <Hero />

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Skills />

        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Projects />

        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Experience />

        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Contact />

        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Footer />

        </motion.footer>

      </main>

    </div>

  );
}

export default App;
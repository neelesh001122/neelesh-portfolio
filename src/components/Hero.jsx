import { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Hero() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "skills",
        "projects",
        "experience",
        "contact",
      ];

      const scrollPosition =
        window.scrollY + 200;

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const offsetTop = element.offsetTop;

          const height =
            element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
              offsetTop + height
          ) {

            setActiveSection(section);

          }

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (

    <section
      id="home"
      className="relative h-screen overflow-hidden bg-transparent text-white"
    >

      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-6 md:px-8">

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

        {/* Navbar Content */}
        <div className="relative z-10 flex w-full items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold">
            Neelesh Verma
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden gap-8 text-base md:flex">

            <li>
              <a
                href="#home"
                className={`transition hover:text-blue-400 ${
                  activeSection === "home"
                    ? "text-blue-400"
                    : ""
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={`transition hover:text-blue-400 ${
                  activeSection === "skills"
                    ? "text-blue-400"
                    : ""
                }`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={`transition hover:text-blue-400 ${
                  activeSection === "projects"
                    ? "text-blue-400"
                    : ""
                }`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className={`transition hover:text-blue-400 ${
                  activeSection === "experience"
                    ? "text-blue-400"
                    : ""
                }`}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`transition hover:text-blue-400 ${
                  activeSection === "contact"
                    ? "text-blue-400"
                    : ""
                }`}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 text-2xl md:hidden"
          >

            {menuOpen
              ? <FaTimes />
              : <FaBars />}

          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-black/95 text-2xl transition duration-500 md:hidden ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-24 text-center">

        {/* Badge */}
        <div className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-xl">

          AI • Data • Digital Growth

        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-black leading-none md:text-7xl">

          Building The Future
          <br />

          With{" "}

          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

            AI

          </span>

        </h1>

        {/* Typing Animation */}
        <div className="mt-4 h-15 bg-linear-to-r from-blue-400 via-cyan-300 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent animate-pulse md:text-4xl">

          <TypeAnimation
            sequence={[
              "AI Builder",
              2000,
              "Data Analyst",
              2000,
              "Digital Creator",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* Description */}
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-300">

          I’m Neelesh Verma — a Data Analytics enthusiast exploring AI,
          automation, futuristic interfaces, and digital growth.

        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-5">

          {/* View Projects */}
          <a
            href="#projects"
            className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition duration-300 hover:scale-105"
          >

            View Projects

          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-4 text-base transition duration-300 hover:border-blue-400 hover:text-blue-400"
          >

            Contact Me

          </a>

          {/* Resume */}
          <a
            href="/resume"
            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-8 py-4 text-base text-purple-300 transition duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-500/20"
          >

            Resume

          </a>

        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-8 text-4xl text-gray-300">

          {/* GitHub */}
          <a
            href="https://github.com/neelesh001122"
            target="_blank"
            rel="noreferrer"
          >

            <FaGithub className="transition duration-300 hover:scale-110 hover:text-blue-400" />

          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/neelesh001122"
            target="_blank"
            rel="noreferrer"
          >

            <FaLinkedin className="transition duration-300 hover:scale-110 hover:text-cyan-400" />

          </a>

          {/* Email */}
          <a
            href="mailto:neeleshdxn2u@gmail.com"
          >

            <FaEnvelope className="transition duration-300 hover:scale-110 hover:text-purple-400" />

          </a>

        </div>

        {/* Left Card */}
        <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">

          <p className="text-sm text-gray-400">
            Currently Learning
          </p>

          <h3 className="mt-3 text-2xl font-bold text-blue-400">
            AI Automation
          </h3>

        </div>

        {/* Right Card */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">

          <p className="text-sm text-gray-400">
            Focus Area
          </p>

          <h3 className="mt-3 text-2xl font-bold text-purple-400">
            Digital Growth
          </h3>

        </div>

      </div>

    </section>

  );
}

export default Hero;
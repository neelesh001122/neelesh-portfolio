import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="relative overflow-hidden px-6 pt-0 pb-24 text-white"
    >

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm tracking-[4px] text-blue-400">
            LET'S CONNECT
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">

            Open to opportunities in Data Analytics, AI, Automation,
            and modern digital solutions.

          </p>

        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:neeleshdxn2u@gmail.com"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

              <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

            </div>

            {/* Content */}
            <div className="relative z-10">

              <div className="text-5xl text-blue-400">

                <FaEnvelope />

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                Email

              </h3>

              <p className="mt-4 break-all text-gray-400">

                neeleshdxn2u@gmail.com

              </p>

            </div>

          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/neelesh001122"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

            </div>

            {/* Content */}
            <div className="relative z-10">

              <div className="text-5xl text-cyan-400">

                <FaLinkedin />

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                LinkedIn

              </h3>

              <p className="mt-4 text-gray-400">

                Connect Professionally

              </p>

            </div>

          </a>

          {/* GitHub */}
          <a
            href="https://github.com/neelesh001122"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

              <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />

            </div>

            {/* Content */}
            <div className="relative z-10">

              <div className="text-5xl text-purple-400">

                <FaGithub />

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                GitHub

              </h3>

              <p className="mt-4 text-gray-400">

                Explore My Projects

              </p>

            </div>

          </a>

        </div>

      </div>

    </section>

  );
}

export default Contact;
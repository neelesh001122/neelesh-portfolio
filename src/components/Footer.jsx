import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-black/40 px-6 py-14 text-white backdrop-blur-xl">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />

      <div className="mx-auto max-w-6xl">

        {/* Top Glow Line */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          {/* Left Section */}
          <div className="text-center md:text-left">

            <h2 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent">

              Neelesh Verma

            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-400">

              Building intelligent digital experiences with AI,
              Data Analytics, Automation, and futuristic technologies.

            </p>

          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center gap-8 md:items-end">

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl text-gray-300">

              <a
                href="https://github.com/neelesh001122"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:scale-125 hover:text-cyan-400"
              >

                <FaGithub />

              </a>

              <a
                href="https://linkedin.com/in/neelesh001122"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:scale-125 hover:text-cyan-400"
              >

                <FaLinkedin />

              </a>

              <a
                href="mailto:neeleshdxn2u@gmail.com"
                className="transition duration-300 hover:scale-125 hover:text-cyan-400"
              >

                <FaEnvelope />

              </a>

            </div>

            {/* Back To Top */}
            <a
              href="#home"
              className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:text-cyan-400"
            >

              <FaArrowUp className="transition duration-300 group-hover:-translate-y-1" />

              Back To Top

            </a>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">

          © 2026 Neelesh Verma • Building The Future With AI 🚀

        </div>

      </div>

    </footer>
  );
}

export default Footer;
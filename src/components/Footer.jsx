import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="relative overflow-hidden px-6 pt-0 pb-10 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Top Border */}
        <div className="h-px w-full bg-white/10" />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row">

          {/* Left */}
          <div>

            <h2 className="text-3xl font-bold">
              Neelesh Verma
            </h2>

            <p className="mt-3 max-w-md text-gray-400">

              Building modern AI-driven experiences,
              analytics solutions, and futuristic digital products.

            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-5 md:items-end">

            {/* Social Icons */}
            <div className="flex gap-5 text-3xl text-gray-300">

              <a
                href="https://github.com/neelesh001122"
                target="_blank"
                rel="noreferrer"
              >

                <FaGithub className="transition hover:text-blue-400" />

              </a>

              <a
                href="https://linkedin.com/in/neelesh001122"
                target="_blank"
                rel="noreferrer"
              >

                <FaLinkedin className="transition hover:text-blue-400" />

              </a>

            </div>

            {/* Back To Top */}
            <a
              href="#home"
              className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
            >

              <FaArrowUp />

              Back To Top

            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">

          © 2026 Neelesh Verma. All rights reserved.

        </div>

      </div>

    </footer>

  );
}

export default Footer;
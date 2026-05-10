import { useRef } from "react";

import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_omvdf5o",
      "template_qh1ifv4",
      form.current,
      "BUo15aDWWxftlfdVd"
    )

    .then(() => {

      alert(
        "Message Sent Successfully 🚀"
      );

      form.current.reset();

    })

    .catch((error) => {

      console.log(error);

      alert(
        "Something went wrong ❌"
      );

    });

  };

  return (

    <section
      id="contact"
      className="relative overflow-hidden px-6 pt-0 pb-24 text-white"
    >

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm tracking-[4px] text-blue-400">

            LET'S CONNECT

          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">

            Contact Me

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">

            Have a project, opportunity,
            or collaboration idea?
            Let’s build something amazing 🚀

          </p>

        </div>

        {/* Contact Form */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition duration-300 focus:border-blue-400 focus:bg-black/30"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition duration-300 focus:border-blue-400 focus:bg-black/30"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition duration-300 focus:border-blue-400 focus:bg-black/30"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02]"
            >

              Send Message 🚀

            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;
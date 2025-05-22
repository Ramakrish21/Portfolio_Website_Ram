import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zl0foje", "template_3xmlidi", form.current, "Qte-xW0NsFWOBP-Az")
      .then(
        (result) => {
          console.log("Success:", result.text);
          setMessage(" Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          setMessage(" Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20">
      <div className="max-w-5xl w-full mx-auto p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 rounded-lg"
            >
              Send Message
            </button>

            {message && <p className="text-green-400 text-center">{message}</p>}
          </form>

          {/* Right: Contact Info and Social Links */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            {/* Email and Phone Icons with Text Side by Side */}
            <div className="space-y-4">
              <a
                href="mailto:adlaramakrishna@gmail.com"
                className="flex items-center gap-4 text-gray-200 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span>adlaramakrishna28@gmail.com</span>
              </a>
              <a
                href="tel:+918106609324"
                className="flex items-center gap-4 text-gray-200 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <FaPhone className="text-xl" />
                <span>+91 8106609324</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-4 flex-wrap">
              <a
                href="https://github.com/Ramakrish21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform hover:scale-110"
              >
                <FaGithub className="text-3xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/adlaramakrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-transform hover:scale-110"
              >
                <FaLinkedin className="text-3xl" />
              </a>

              <a
                href="https://www.instagram.com/its_ramakrishna_reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-transform hover:scale-110"
              >
                <FaInstagram className="text-3xl" />
              </a>

              <a
                href="https://leetcode.com/adlaramakrishna28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <SiLeetcode className="text-3xl" />
              </a>

              <a
                href="https://www.hackerrank.com/adlaramakrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-transform hover:scale-110"
              >
                <SiHackerrank className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

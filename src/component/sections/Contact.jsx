import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <div className="max-w-3xl w-full mx-auto p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Contact Us</h2>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-300 mb-1">Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {message && <p className="text-center text-green-400 mt-4">{message}</p>}

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          {/* GitHub */}
          <a
            href="https://github.com/Ramakrish21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform hover:scale-110"
          >
            <FaGithub className="text-3xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adlaramakrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-transform hover:scale-110"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

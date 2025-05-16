import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Ramakrishna Reddy
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Aspiring Software Engineer with practical experience in Java full-stack development, specializing in the Spring Framework. 
              Also proficient in the MERN stack—including React.js, Node.js—as well as Python, SQL, and Java. 
              Eager to leverage my technical expertise to drive innovative full-stack solutions.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              {/* View Resume Button */}
              <a
                href="/AdlaRamaKrishna.pdf"
                download="Ramakrishna_Reddy_Resume.pdf"
                className="bg-gray-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-gray-600 hover:-translate-y-0.5"
              >
                View My Resume
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>

            </div>
          </div>
        </RevealOnScroll>
        <div className="mt-8 md:mt-0 md:ml-8 flex justify-center">
          <img
            src="/Ram1.jpg"
            alt="My Photo"
            className="w-80 h-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

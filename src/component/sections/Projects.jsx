import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Blog Application */}
            <div className="p-6 rounded-xl border border-white/10 bg-gray-800/40 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-white">Blog Application</h3>
              <p className="text-gray-400 mb-4">
                Built a secure, full-stack blog platform with authentication, data protection, and seamless scalability.
              </p>
              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1">
                <li>Implemented robust database security ensuring data integrity and access control.</li>
                <li>Optimized scalability to handle growing traffic while maintaining stability and efficiency.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "PostgreSQL"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Ramakrish21/Blog-application.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Project Management Tool */}
            <div className="p-6 rounded-xl border border-white/10 bg-gray-800/40 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-white">Project Management Tool</h3>
              <p className="text-gray-400 mb-4">
                A full-stack project management tool for team collaboration, task tracking, and workflow automation.
              </p>
              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1">
                <li>Implemented user authentication with JWT for secure access.</li>
                <li>Designed an intuitive UI with task assignment, deadlines, and status updates.</li>
                <li>Integrated real-time updates using WebSockets for improved collaboration.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Ramakrish21/Project-Management-Tool.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* AI-Based Electricity Demand Projection (SIH) */}
            <div className="p-6 rounded-xl border border-white/10 bg-gray-800/40 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-white">AI-Based Electricity Demand Projection (SIH)</h3>
              <p className="text-gray-400 mb-4">
                Developed an AI model for electricity demand forecasting with secure data integration.
              </p>
              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1">
                <li>Improved prediction accuracy using advanced machine learning techniques.</li>
                <li>Ensured efficient processing with secure data handling practices.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Machine Learning", "Python", "TensorFlow"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* "To Be Continued..." Message (Properly Centered) */}
          <div className="flex justify-center mt-10">
            <div className="p-6 rounded-xl border border-white/10 bg-gray-800/40 backdrop-blur-md shadow-lg text-center max-w-md">
              <h3 className="text-lg font-semibold text-gray-300">
                🚀 More projects coming soon... Stay tuned!
              </h3>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

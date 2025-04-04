import { RevealOnScroll } from "../RevealOnScroll";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiMysql, SiMongodb, SiPostman, SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";

const techIcons = {
  // Frontend
  "React.js": <FaReact className="h-8 w-8 text-blue-500" />,
  "HTML": <FaHtml5 className="h-8 w-8 text-orange-500" />,
  "CSS": <FaCss3Alt className="h-8 w-8 text-blue-500" />,
  "JavaScript": <SiJavascript className="h-8 w-8 text-yellow-500" />,
  "Bootstrap": <SiBootstrap className="h-8 w-8 text-purple-500" />,
  "Tailwind CSS": <SiTailwindcss className="h-8 w-8 text-teal-400" />,
  // Backend
  "Node.js": <FaNodeJs className="h-8 w-8 text-green-500" />,
  "Python": <FaPython className="h-8 w-8 text-blue-400" />,
  "Java": <DiJava className="h-8 w-8 text-red-500" />,
  "MySQL": <SiMysql className="h-8 w-8 text-sky-500" />,
  "MongoDB": <SiMongodb className="h-8 w-8 text-green-500" />,
  // Tools
  "Git": <FaGitAlt className="h-8 w-8 text-red-500" />,
  "GitHub": <FaGithub className="h-8 w-8 text-gray-200" />,
  "Postman": <SiPostman className="h-8 w-8 text-orange-500" />,
  "Docker": <FaDocker className="h-8 w-8 text-blue-500" />,
};

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Python", "Java", "MySQL", "MongoDB"];
  const toolsSkills = ["Git", "GitHub", "Postman", "Docker"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-gray-700 hover:-translate-y-1 transition-all duration-300 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 mb-6 text-center">
              Aspiring full-stack developer with hands-on experience in Java Full-Stack and MERN stack development. Skilled in building robust and scalable applications using modern technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 bg-gray-800 bg-opacity-50">
                <h3 className="text-xl font-bold mb-4 text-gray-100">Frontend</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="py-2 px-3 bg-gray-700 bg-opacity-70 rounded-full transition-transform duration-300 hover:scale-110 filter drop-shadow-lg hover:brightness-125"
                    >
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 bg-gray-800 bg-opacity-50">
                <h3 className="text-xl font-bold mb-4 text-gray-100">Backend</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="py-2 px-3 bg-gray-700 bg-opacity-70 rounded-full transition-transform duration-300 hover:scale-110 filter drop-shadow-lg hover:brightness-125"
                    >
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 bg-gray-800 bg-opacity-50">
                <h3 className="text-xl font-bold mb-4 text-gray-100">Tools</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  {toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="py-2 px-3 bg-gray-700 bg-opacity-70 rounded-full transition-transform duration-300 hover:scale-110 filter drop-shadow-lg hover:brightness-125"
                    >
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-gray-700 hover:-translate-y-1 transition-all duration-300 bg-gray-800 bg-opacity-50">
              <h3 className="text-xl font-bold mb-4 text-gray-100">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <span className="font-semibold text-teal-400">
                    B.Tech in Computer Science & Engineering
                  </span>{" "}
                  – Anurag University <span className="text-yellow-500">(Expected 2026)</span>
                </li>
                <li>
                  <span className="font-semibold text-teal-400">Relevant Coursework:</span> DBMS, OOPs, Operating Systems, Computer Networks, DSA
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-gray-700 hover:-translate-y-1 transition-all duration-300 bg-gray-800 bg-opacity-50">
              <h3 className="text-xl font-bold mb-4 text-gray-100">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-teal-400">
                    Full Stack Web Development Intern (AICTE Internship)
                  </h4>
                  <p className="mt-1">
                    <span className="font-bold">Company:</span> EY GDS & Edunet Foundation <span className="text-yellow-500">(Jun 2023 - Jul 2023)</span>
                  </p>
                  <p className="mt-1">
                    <span className="font-bold">Role:</span> Developed a web-based Project Management Tool using <span className="font-semibold">React.js, Node.js, Express.js, MongoDB.</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-400">
                    Project: AI-Based Electricity Demand Forecasting
                  </h4>
                  <p className="mt-1">
                    Built a model for Delhi Power System using <span className="font-semibold">Python, TensorFlow, and Power BI.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Hybrid AI Chatbot",
    desc: "Hybrid AI Chatbot using Retrieval-Augmented Generation and Text-to-SQL ",
    tool: ["ChromaDB,  Python, Langchain , RAG , MYSQL, Ollama "],
    image: "/project_assets/hybrid-ai-banner.jpg",
    github: "https://github.com/RohithRagavender/Hybrid_AI_RAG",
  },
  {
    title: "RAG Chatbot",
    desc: "Personal Chatbot using Retrieval-Augmented Generation",
    tool: ["PDF Loader, ChromaDB, Gemini, Python, LLM, GPU"],
    image: "/project_assets/Rag.png",
    github: "https://github.com/RohithRagavender/SwasthBot",
  },
  {
    title: "Medify",
    desc: "Hospital Management System using MERN Stack",
    tool: ["React, Node.js, Express, MongoDB"],
    image: "/project_assets/Medify.png",
    github: "https://github.com/RohithRagavender/Final-year-project",
  },
  {
    title: "Movie Recommendation System",
    desc: "A web app that recommends movies based on user preferences",
    tool: ["Python, Flask, Scikit-learn, Pandas, NumPy"],
    image: "/project_assets/Movie.png",
    github: "https://github.com/RohithRagavender/Movie_Recommend",
  },
  {
    title: "Coffee Revenue Predictor",
    desc: "Predicts coffee shop revenue using Linear Regression",
    tool: ["Python, Scikit-learn, Pandas, NumPy"],
    image: "/project_assets/coffee.png",
    github: "https://github.com/RohithRagavender/Coffee_Revenue",
  },
  {
    title: "Chat Application",
    desc: "Real-time chat application with user authentication",
    tool: ["React, Socket.io, Node.js, Express, MongoDB"],
    image: "/project_assets/Chat.jpg",
    github: "https://github.com/RohithRagavender/ChatApplications",
  },
  {
    title: "Cleventa",
    desc: "Sample Brand Advertisement Website project for Cleventa",
    tool: ["React, Vite, Tailwind CSS"],
    image: "/project_assets/cleventa.png",
    github: "https://github.com/RohithRagavender/Cleventa",
  },
  {
    title: "Orcuss Portfolio",
    desc: "Client Personal Portfolio Website project ",
    tool: ["React, Vite, Tailwind CSS"],
    image: "/project_assets/image.png",
    github: "https://github.com/RohithRagavender/Orcuss",
  },
];

const Projects = () => {
  return (
      <motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-900 py-20"
        > 
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-indigo-400 mb-12">
        Projects
      </h2>
      <p className="text-gray-400 " >I've worked on a variety of projects, ranging from full-stack web applications to machine learning models.</p>
      <br />
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-xl overflow-hidden
              hover:shadow-[0_0_40px_rgba(99,102,241,0.45)]
              transition
            "
          >
            {/* PROJECT IMAGE */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-400 hover:text-indigo-400
                    transition
                  "
                >
                  <Github size={22} />
                </a>
              </div>

              <p className="text-gray-400 mt-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {project.tool.map((tech, index) => (
                  <div
                    key={index}
                    className="
        relative px-4 py-1.5 rounded-full
        text-md font-medium text-indigo-200
        bg-white/10 backdrop-blur-md
        border border-indigo-400/30
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_0_15px_rgba(99,102,241,0.6)]
        hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_0_25px_rgba(99,102,241,0.9)]
        transition
        overflow-hidden
      "
                  >
                    {/* MIRROR SHINE */}
                    <span
                      className="
          absolute top-0 left-0
          w-full h-1/2
          bg-gradient-to-b
          from-white/40 to-transparent
          pointer-events-none
        "
                    />

                    {tech}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </motion.section>
  );
};

export default Projects;

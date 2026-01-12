import { motion } from "framer-motion";
import { fadeUp } from "../animation";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Reactjs", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["Pandas", "NumPy", "Scikit-learn", "LangChain", "LLMs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "ChromaDB", "MYSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "PowerBi", " Canva", "Google Colab", "VS Code", "Jupyter Notebook"],
  },
];


const Skills = () => {
  return (
    <motion.section
      id="skill"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-[#050b1d] to-[#020617] font-poppins"
    >

      <div className="max-w-6xl mx-auto px-4">
        <h4>Skills</h4>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-cyan-400 mb-12">
          Technical Expertise
        </h2>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="
                bg-white/5 backdrop-blur-xl
                border border-cyan-400/20
                rounded-2xl p-6
                shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >
              <h3 className="text-lg font-medium tracking-wide text-cyan-300 mb-5">
                {category.title}
              </h3>


              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx}
                    className="
    relative px-4 py-1.5 rounded-full
    text-xs font-medium tracking-wide
    text-cyan-200
    bg-white/10 backdrop-blur-md
    border border-cyan-400/30
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_0_15px_rgba(34,211,238,0.5)]
    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_0_25px_rgba(34,211,238,0.9)]
    transition overflow-hidden
  "
                  >

                    {/* Mirror shine */}
                    <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

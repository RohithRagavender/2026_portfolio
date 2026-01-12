import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";

const Hero = () => {
  return (
    <motion.section
      id="skills"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 py-20"
    >

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm{" "}
              <span className="text-indigo-400">Rohith</span>
            </h1>

            <h3 className="mt-3 text-xl md:text-2xl text-gray-300">
              Frontend & Machine Learning Developer
            </h3>

            <p className="mt-5 text-gray-400 leading-relaxed">
              I’m a passionate developer who enjoys building clean, responsive
              user interfaces and exploring intelligent systems using Machine
              Learning. I love turning ideas into real-world applications and
              continuously improving my skills with modern technologies.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="bg-indigo-500 px-6 py-2 rounded
              hover:shadow-[0_0_25px_#6366f1] transition"
              >
                Hire Me
              </a>

              <a
                href="DATA_SCIENCETIST.pdf"
                download
                className="border border-indigo-500 px-6 py-2 rounded
              hover:bg-indigo-500 transition"
              >
                Download Resume
              </a>
            </div>

            {/* DIVIDER */}
            <hr className="my-6 border-gray-700 w-2/3" />

            {/* SOCIALS */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow me:</span>

              <a
                href="https://github.com/RohithRagavender"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/rohith0410"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
      w-72 h-80
      md:w-[420px] md:h-[520px]
      lg:w-[400px] lg:h-[490px]
      rounded-2xl overflow-hidden
      border border-indigo-500/40
      shadow-[0_0_50px_rgba(99,102,241,0.6)]
      bg-black
    "
            >
              <img
                src="Pic.png"
                alt="Rohith"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


        </div>
      </section>
    </motion.section>
  );
};

export default Hero;

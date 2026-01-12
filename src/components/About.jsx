import { motion } from "framer-motion";
import { fadeUp } from "../animation";

const About = () => {
  return (
    <motion.section
      id="skills"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-800 py-20"
    >   
     <section
      id="about"
      className="min-h-screen px-6 py-20 flex justify-center"
    >
      <div className="max-w-6xl w-full " >

        {/* TOP PROFILE */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className="
              w-20 h-20 rounded-full overflow-hidden object-fill
              border-2 border-indigo-500
              shadow-[0_0_20px_rgba(99,102,241,0.6)]
              "
          >
            <img
              src="/Pic2.png"
              alt="Rohith Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-4 text-gray-300 text-sm">
            rohithragavender@gmail.com
          </p>

          <p className="text-indigo-400 font-medium mt-1">
            Data Science Engineer
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="border-l-4 border-indigo-500 pl-6">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <p className="text-gray-400  leading-relaxed mb-5">
              Hi! I'm Rohith , I am a results-driven MCA graduate with a unique dual expertise in
              Data Science and Full-Stack Development (MERN). My technical journey
              is defined by building intelligent, data-backed systems, ranging
              from <span className="text-indigo-400">Medify</span>—a comprehensive
              Hospital Management System—to advanced AI implementations like 
              <span className="text-indigo-400"> Retrieval-Augmented Generation (RAG) </span> and predictive tools such as
              my Coffee Revenue Calculator built using Linear Regression.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              I specialize in bridging the gap between complex back-end logic and
              seamless front-end user experiences. Whether I am fine-tuning a
              Deep Learning model or architecting a scalable web application
              using React, Vite, and Tailwind CSS, my focus is always on
              efficiency, clarity, and strategic design.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My most recent innovation is a Machine Learning–based Job
              Application Automation Tool, designed to streamline the career
              hunt through intelligent automation. I am currently seeking a
              role as a <span className="text-indigo-400">Data Scientist</span> or
              <span className="text-indigo-400"> Full Stack Developer</span> or <span className="text-indigo-400"> FrontEnd Developer</span> where
              I can apply my hybrid skill set to solve real-world problems.
            </p>
          </div>

         {/* RIGHT IMAGE – TAPE STYLE */}
<div className="flex justify-center md:justify-end">
  <div className="relative w-72 h-96 md:w-[420px] md:h-[520px] lg:w-[280px] lg:h-[380px] border-10 rounded-xl">

    {/* TOP LEFT TAPE */}
    <div
      className="
        absolute -top-3 -left-4
        w-20 h-6
        bg-yellow-100/80
        rotate-[-12deg]
        shadow-sm
        z-20
      "
    />

    {/* TOP RIGHT TAPE */}
    <div
      className="
        absolute -top-3 -right-4
        w-20 h-6
        bg-yellow-100/80
        rotate-[10deg]
        shadow-sm
        z-20
      "
    />

    {/* PHOTO FRAME */}
    <div className="
      w-full h-full
      rounded-xl overflow-hidden
      bg-black
      shadow-[0_15px_40px_rgba(0,0,0,0.6)]
      relative
      z-10
    ">
      <img
        src="/Pic2.png"
        alt="Rohith"
        className="w-full h-full object-cover"
      />
    </div>

    {/* BOTTOM LEFT TAPE */}
    <div
      className="
        absolute -bottom-3 -left-3
        w-16 h-5
        bg-yellow-100/70
        rotate-[8deg]
        shadow-sm
        z-20
      "
    />

    {/* BOTTOM RIGHT TAPE */}
    <div
      className="
        absolute -bottom-3 -right-3
        w-16 h-5
        bg-yellow-100/70
        rotate-[-6deg]
        shadow-sm
        z-20
      "
    />
    
  </div>
</div>

        </div>
      </div>
    </section>
    </motion.section>

  );
};

export default About;

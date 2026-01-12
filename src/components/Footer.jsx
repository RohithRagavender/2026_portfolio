import { Github, Linkedin, Download } from "lucide-react";


const Footer = () => {
  return (
    <footer className="border-t border-indigo-500/20 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP CONTENT */}
        <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-6
        ">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">
              Rohith Ragavender
            </h3>
            <p className="text-gray-400 mt-1">
              Front End & Data Science Engineer
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/RohithRagavender"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-400 hover:text-white
                hover:shadow-[0_0_20px_#6366f1]
                transition
              "
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/rohith0410"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-400 hover:text-white
                hover:shadow-[0_0_20px_#6366f1]
                transition
              "
            >
              <Linkedin size={22} />
            </a>

            <a
              href="DATA_SCIENCETIST.pdf"
              download
              title="Download Resume"
              className="
                text-gray-400 hover:text-white
                hover:shadow-[0_0_20px_#6366f1]
                transition
              "
            >
              <Download size={22} />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-indigo-500/20"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-500 mt-4">
          © 2026 Rohith Ragavender — V3.0
        </p>

      </div>
    </footer>
  );
};

export default Footer;

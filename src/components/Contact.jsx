import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";


const Contact = () => {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_fbmzf1u",
      "template_yjh2a6s",
      formRef.current,
      "Ef4XYr2F-GVEf9sBI"
    )
    .then(
      () => {
        toast.success("Message sent successfully 💙");
        formRef.current.reset();
      },
      () => {
        toast.error("Failed to send message 😢");
      }
    );
};


  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#020617] to-[#050b1d] "
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-cyan-400 mb-14 font-poppins"
        >
          Get In Touch
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT – FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl
            border border-cyan-400/20
            shadow-[0_0_40px_rgba(34,211,238,0.25)] font-poppins"
          >
            <div className="mb-6">
              <label className="text-sm text-cyan-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 p-3 rounded-lg bg-black/40
                border border-cyan-400勘
                focus:outline-none focus:border-cyan-400
                text-white"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm text-cyan-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 p-3 rounded-lg bg-black/40
                border border-cyan-400/30
                focus:outline-none focus:border-cyan-400
                text-white"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm text-cyan-300">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                className="w-full mt-2 p-3 rounded-lg bg-black/40
                border border-cyan-400/30
                focus:outline-none focus:border-cyan-400
                text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="
              w-full py-3 rounded-lg font-medium
              text-black bg-cyan-400
              hover:bg-cyan-300 transition
              shadow-[0_0_20px_rgba(34,211,238,0.8)]
              "
            >
              Send Message
            </button>
          </motion.form>

          {/* RIGHT – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 font-poppins"
          >

            <div className="flex items-center gap-4">
              <span className="text-gray-300">
                Let's collaborate! I am always open to discussing exciting projects and new opportunities.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span className="text-gray-300">
                rohithragavender@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
              <span className="text-gray-300">
                +91 6379851657
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span className="text-gray-300">
                Tirunelveli TamilNadu 
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

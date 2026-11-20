import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animation";

export const Section = ({ id, num, kicker, title, full = false, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-5">
    <div className={`rule grid gap-6 md:gap-10 py-14 ${full ? "" : "md:grid-cols-[13rem_1fr]"}`}>
      <div className={full ? "flex gap-3" : "md:sticky md:top-20 self-start"}>
        <p className="mono text-signal">{num}</p>
        <p className="mono mt-1 text-mute">{kicker}</p>
      </div>
      <div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-10">{title}</h2>
        {children}
      </div>
    </div>
  </section>
);

export const Reveal = ({ i = 0, className = "", children }) => (
  <Motion.div
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className={className}
  >
    {children}
  </Motion.div>
);

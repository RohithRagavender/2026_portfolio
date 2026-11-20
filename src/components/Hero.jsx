import { Github, Linkedin, ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animation";
import { profile, stats } from "../data";

const Hero = () => (
  <section id="home" className="max-w-6xl mx-auto px-5 pt-28 pb-16">
    <Motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mono flex items-center gap-2 text-mute">
      <span className="size-2 rounded-full bg-signal animate-pulse" /> Open to AI / data engineering roles · {profile.location}
    </Motion.div>

    <div className="grid lg:grid-cols-[1fr_20rem] gap-12 mt-8">
      <div>
        <Motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.6rem] font-semibold leading-[1.02] tracking-tight">
          Rohith
          <br />
          <em>Ragavender</em> C.
        </Motion.h1>
        <Motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mono mt-8 !text-sm">
          {profile.role}
        </Motion.p>
        <Motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
          {profile.summary}
        </Motion.p>
        <Motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="mt-8 flex flex-wrap items-center gap-4">
          <a href={profile.resume} download className="inline-flex items-center gap-2 bg-signal text-white px-5 py-3 mono hover:brightness-125 transition">
            <ArrowDownToLine size={16} /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-rule px-5 py-3 mono hover:border-signal transition">
            Get in touch <ArrowUpRight size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-signal transition"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-signal transition"><Linkedin size={20} /></a>
        </Motion.div>
      </div>

      <Motion.aside variants={fadeUp} initial="hidden" animate="visible" custom={3} className="panel p-4 self-start">
        <img src="/Pic.png" alt="Rohith Ragavender" className="w-full aspect-[4/5] object-cover rounded-lg grayscale hover:grayscale-0 transition duration-500" />
      </Motion.aside>
    </div>

    <dl className="rule border-b border-rule mt-14 grid grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="py-5 pr-4 [&:not(:first-child)]:pl-4 [&:not(:first-child)]:border-l border-rule">
          <dt className="font-display text-3xl md:text-5xl font-semibold">{s.value}</dt>
          <dd className="mono text-mute mt-1">{s.label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;

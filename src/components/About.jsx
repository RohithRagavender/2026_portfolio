import { Section, Reveal } from "./Section";
import { education, certs } from "../data";

const card = "hover-card panel border-l-4 !border-l-signal p-5 md:p-7 shadow-[0_0_60px_-20px_rgb(79_124_255/0.45)] h-full";

const About = () => (
  <Section id="about" full num="04" kicker="About" title={<>Education & <em>credentials</em></>}>
    <div className="grid md:grid-cols-2 gap-4">
      <Reveal>
        <div className={card}>
          <p className="mono text-mute mb-4">Education</p>
          <div className="space-y-1">
            {education.map((e) => (
              <div key={e.name} className="rounded-lg px-3 py-3 transition hover:bg-signal/10">
                <p className="mono rounded-full bg-signal/15 text-cyan px-3 py-1 inline-block">{e.when}</p>
                <p className="font-display text-lg font-semibold mt-2 leading-tight">{e.name}</p>
                <p className="text-mute">{e.detail}</p>
              </div>
            ))}
          </div>
          <p className="mono text-mute mt-4">Languages: Tamil, English (limited working)</p>
        </div>
      </Reveal>
      <Reveal i={1}>
        <div className={card}>
          <p className="mono text-mute mb-4">Certifications</p>
          <ul className="space-y-1">
            {certs.map((c) => (
              <li key={c} className="rounded-lg px-3 py-3 transition hover:bg-signal/10">{c}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </Section>
);

export default About;

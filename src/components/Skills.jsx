import { Section, Reveal } from "./Section";
import { skills } from "../data";

const card = "hover-card panel border-l-4 !border-l-signal p-5 md:p-6 shadow-[0_0_60px_-20px_rgb(79_124_255/0.45)] h-full";

const Skills = () => (
  <Section id="skills" full num="03" kicker="Skills" title={<>The <em>toolkit</em></>}>
    <div className="grid md:grid-cols-2 gap-4">
      {skills.map(([title, items], i) => (
        <Reveal key={title} i={i % 2}>
          <div className={card}>
            <p className="mono text-signal mb-4">{title}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;

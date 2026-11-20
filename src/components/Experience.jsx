import { Section, Reveal } from "./Section";
import { experience } from "../data";

const Experience = () => (
  <Section id="experience" full num="01" kicker="Experience" title={<>Where I've <em>shipped</em></>}>
    <div className="space-y-12">
      {experience.map((x, i) => (
        <Reveal key={x.company} i={i} className="hover-card panel border-l-4 !border-l-signal p-5 md:p-7 shadow-[0_0_60px_-20px_rgb(79_124_255/0.45)]">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl md:text-2xl font-semibold">{x.company}</h3>
            <p className="mono rounded-full bg-signal/15 text-cyan px-3 py-1">{x.when}</p>
          </div>
          <p className="mono text-mute mt-2">{x.role}</p>
          <ul className="mt-5 space-y-1">
            {x.points.map((p, n) => (
              <li key={p} className="grid grid-cols-[3rem_1fr] gap-2 items-start rounded-lg px-3 py-3 leading-relaxed transition hover:bg-signal/10">
                <span className="mono text-signal pt-1">{String(n + 1).padStart(2, "0")}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;

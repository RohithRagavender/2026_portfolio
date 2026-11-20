import { Section, Reveal } from "./Section";
import { projects } from "../data";

// layout: first project full width, then two per row (1 + 2 + 2)
const Projects = () => (
  <Section id="projects" full num="02" kicker="Projects" title={<>Selected <em>work</em></>}>
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((p, i) => (
        <Reveal key={p.title} i={0} className={i === 0 ? "md:col-span-2" : ""}>
          <article className="proj-row h-full rounded-xl border border-rule p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <p className="mono text-signal">{String(i + 1).padStart(2, "0")}</p>
              <p className="mono text-mute/80 text-right">{p.role}</p>
            </div>
            <h3 className={`font-display font-semibold leading-tight mt-4 ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>{p.title}</h3>
            <p className="proj-sub mono mt-2 text-mute">{p.sub}</p>
            <p className="leading-relaxed mt-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {p.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Projects;

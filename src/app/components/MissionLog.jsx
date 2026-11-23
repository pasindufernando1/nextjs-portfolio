import SectionHead from "./SectionHead";

const ENTRIES = [
  {
    now: true,
    meta: "NOW // CHOREO LABS · WSO2",
    title: "Software Engineer, R&D",
    body: "Building the Ballerina Language Server and VS Code extension: language features, LSP extensions for the Ballerina Integrator, and a hermetic test setup that runs against real locked package dependencies.",
    tags: ["Java", "LSP", "TypeScript", "VS Code API"],
  },
  {
    meta: "RESEARCH // CLOUDNET RESEARCH GROUP, UCSC",
    title: "Full-time Researcher",
    body: "Researched fault tolerance for live migration of virtual machines, using checkpointing on a KVM/QEMU stack.",
    tags: ["KVM", "QEMU", "C", "Cloud computing"],
  },
  {
    meta: "INTERNSHIP // WSO2",
    title: "Software Engineering Intern",
    body: "Built \"Grama Check\", an app that digitises Grama Niladhari certificate requests, with a Ballerina API gateway and services.",
    tags: ["Ballerina", "JavaScript"],
  },
  {
    meta: "EDUCATION // UCSC",
    title: "BSc (Hons) Computer Science",
    body: "Graduated top of the batch with a GPA of 3.98 / 4.00. Director's List in the second and third academic years.",
    tags: ["Distributed systems", "OS", "Middleware"],
  },
];

export default function MissionLog() {
  return (
    <section id="log" className="section">
      <SectionHead idx="02" title="Mission log" />
      <ol className="timeline">
        {ENTRIES.map((e) => (
          <li key={e.title} className="t-item reveal">
            <span className={`t-node${e.now ? " now" : ""}`} />
            <div className="t-card">
              <p className="t-meta">{e.meta}</p>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              <ul className="tags">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

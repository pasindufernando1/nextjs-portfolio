import SectionHead from "./SectionHead";

const ENTRIES = [
  {
    now: true,
    meta: "APR 2025 — NOW // CHOREO LABS (FORMERLY WSO2)",
    title: "Software Engineer — Integration",
    body: "Core engineer on the language server and VS Code extension behind Choreo Integrator, a low-code IDE where developers build integrations visually and in code.",
    points: [
      "Key back-end engineer for the Data Mapper; redesigned its type model to handle complex, real-world data structures.",
      "Improved real-time error reporting so problems surface where the developer is working.",
      "Added XSD, WSDL and EDI support to generate types and service clients from existing specs.",
      "Owned build and test reliability: Java 25 migration, release-independent test suite, code coverage.",
    ],
    tags: ["Java", "LSP", "TypeScript", "VS Code API", "Compiler APIs"],
  },
  {
    meta: "NOV 2024 — APR 2025 // UCSC",
    title: "Teaching Assistant — Foundations of Algorithms",
    body: "Supported undergraduate teaching for the Foundations of Algorithms course.",
    tags: ["Algorithms", "Teaching"],
  },
  {
    meta: "MAY 2024 — MAY 2025 // CLOUDNET RESEARCH GROUP, UCSC",
    title: "Undergraduate Researcher",
    body: "Thesis: Enhancing System Checkpoints for Seamless Fault-Tolerant Live Virtual Machine Migration, supervised by Dr. Dinuni K. Fernando.",
    points: [
      "Designed Mem-Finer, which checkpoints only the bytes that changed inside each memory page.",
      "Cut checkpoint data by 51–69% and shortened recovery time versus Gzip, LZ4 and Zstd baselines, with comparable migration time and downtime.",
    ],
    tags: ["QEMU/KVM", "Virtualization", "Fault tolerance"],
  },
  {
    meta: "NOV 2023 — MAY 2024 // CHOREO LABS (FORMERLY WSO2)",
    title: "Software Engineering Intern — Choreo Platform",
    body: "Designed and built a feature that lets teams develop dependent services in parallel by auto-generating realistic mock responses for services not yet implemented.",
    points: [
      "Designed its Kubernetes-based deployment architecture.",
      "Implemented the back end in Go and Ballerina, using OpenAPI, OpenAI, Faker and Stoplight Prism.",
    ],
    tags: ["Go", "Ballerina", "Kubernetes", "OpenAPI"],
  },
  {
    meta: "2021 — 2025 // UCSC",
    title: "BSc (Hons) Computer Science",
    body: "First Class, GPA 3.98 / 4.00, top of the batch. Two gold medals as the best Computer Science student of 2024 at the University of Colombo.",
    tags: ["First Class", "Top of batch"],
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
              {e.points && (
                <ul className="t-points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              )}
              <ul className="tags">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

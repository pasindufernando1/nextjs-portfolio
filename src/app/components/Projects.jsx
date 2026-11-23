import Image from "next/image";
import SectionHead from "./SectionHead";

const PROJECTS = [
  {
    featured: true,
    kind: "CORE CONTRIBUTOR",
    title: "Ballerina Language Server",
    body: "The LSP server powering Ballerina in every editor, plus extended services for the Ballerina Integrator. 126+ merged PRs.",
    tags: ["Java", "LSP", "Compiler APIs"],
    url: "https://github.com/ballerina-platform/ballerina-language-server",
  },
  {
    kind: "CONTRIBUTOR",
    title: "WSO2 VS Code Extensions",
    body: "The monorepo behind the Ballerina and WSO2 Integrator extensions for VS Code.",
    tags: ["TypeScript", "React"],
    url: "https://github.com/wso2/vscode-extensions",
  },
  {
    kind: "TEAM LEAD · A+",
    title: "VentureVerse",
    body: "Connects Sri Lankan entrepreneurs with investors and mentors: profiles, pitch sessions, matching and secure messaging.",
    tags: ["Spring Boot", "React", "PostgreSQL", "AWS"],
    image: "/images/projects/ventureverse.png",
    url: "https://github.com/pasindufernando1/VentureVerse",
  },
  {
    kind: "TEAM LEAD · A",
    title: "LifeLine",
    body: "Blood bank and donation management system linking blood banks, donors, hospitals and organisations across Sri Lanka.",
    tags: ["PHP", "JavaScript", "MySQL"],
    image: "/images/projects/lifeline.jpg",
    url: "https://github.com/pasindufernando1/LIFELINE-second-year-group-project-CS-Group-38-",
  },
  {
    kind: "MICROSERVICES",
    title: "Sri-Care",
    body: "Customer care platform for a telecom provider: self-service portal, pub/sub live chat and payments behind an API gateway.",
    tags: ["Spring Boot", "React", "AWS"],
    image: "/images/projects/SriTel.png",
    url: "https://github.com/pasindufernando1/Sri-Tel",
  },
  {
    kind: "SYSTEMS",
    title: "Multithreaded Web Server",
    body: "An HTTP server in C serving static files from a pthread worker pool, with graceful shutdown on SIGINT.",
    tags: ["C", "POSIX threads", "Sockets"],
    image: "/images/projects/wb.png",
    url: "https://github.com/pasindufernando1/Multithreaded---Webserver-using-C",
  },
  {
    kind: "MERN",
    title: "Care & Cure",
    body: "Hospital appointment scheduling and staff management for patients, doctors and hospital staff.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/projects/mern.avif",
    url: "https://github.com/pasindufernando1/SCS-2208---RAD-group-project",
  },
  {
    kind: "MOBILE",
    title: "ToDo",
    body: "A Flutter task manager with categories, priorities and reminders, stored locally in SQLite.",
    tags: ["Flutter", "Dart", "SQLite"],
    image: "/images/projects/Logo.jpg",
    url: "https://github.com/HasalaDissanayake/TaskManager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead idx="04" title="Projects" />
      <div className="cards">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            className={`card reveal${p.featured ? " featured" : ""}`}
            href={p.url}
            target="_blank"
            rel="noopener"
          >
            {p.image && (
              <div className="card-media">
                <Image src={p.image} alt="" fill sizes="(max-width: 760px) 100vw, 380px" />
              </div>
            )}
            <span className="card-kind">{p.kind}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <span className="card-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

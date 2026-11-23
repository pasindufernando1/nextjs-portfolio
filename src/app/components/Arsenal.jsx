import SectionHead from "./SectionHead";

const GROUPS = [
  { label: "PRIMARY", primary: true, items: ["Java", "Ballerina", "Go", "C"] },
  { label: "LANGUAGES", items: ["TypeScript", "JavaScript", "Kotlin", "Python", "C++", "PHP", "Dart", "R"] },
  { label: "TOOLING & PROTOCOLS", items: ["Language Server Protocol", "VS Code Extensions", "Gradle", "Maven", "OpenAPI", "Stoplight Prism", "Git", "Linux"] },
  { label: "PLATFORMS & DATA", items: ["Spring Boot", "Node.js", "React", "Flutter", "Docker", "Kubernetes", "AWS", "Azure", "KVM / QEMU", "PostgreSQL", "MySQL", "MongoDB", "Choreo"] },
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="section">
      <SectionHead idx="05" title="Tech arsenal" />
      <div className="arsenal">
        {GROUPS.map((g) => (
          <div key={g.label} className="arsenal-group reveal">
            <p className="group-label">{g.label}</p>
            <ul className={`chips${g.primary ? " primary" : ""}`}>
              {g.items.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

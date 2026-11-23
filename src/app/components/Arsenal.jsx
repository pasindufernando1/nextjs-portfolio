import SectionHead from "./SectionHead";

const GROUPS = [
  { label: "PRIMARY", primary: true, items: ["Java", "Ballerina", "Go", "C"] },
  { label: "LANGUAGES", items: ["TypeScript", "JavaScript", "Kotlin", "Python", "C++", "PHP", "Dart", "R"] },
  { label: "DEVELOPER TOOLS", items: ["Language Server Protocol", "VS Code Extensions", "Compiler APIs", "Static analysis", "Code generation", "OpenAPI", "Stoplight Prism"] },
  { label: "SYSTEMS & CLOUD", items: ["QEMU / KVM", "Virtualization", "Kubernetes", "Docker", "Linux", "Redis", "AWS", "Azure"] },
  { label: "ENGINEERING PRACTICE", items: ["Gradle", "Maven", "GitHub Actions", "Testing & coverage", "Git", "SQL"] },
  { label: "FRAMEWORKS & DATA", items: ["Spring Boot", "Node.js", "React", "Flutter", "PostgreSQL", "MySQL", "MongoDB"] },
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

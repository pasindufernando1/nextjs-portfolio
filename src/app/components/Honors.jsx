import SectionHead from "./SectionHead";

const HONORS = [
  {
    kind: "UNIVERSITY OF COLOMBO",
    title: "Two gold medals",
    body: "Professor Mohan Munasinghe Award and the University of Colombo Award for Academic Excellence in Computer Science — best Computer Science student of 2024.",
  },
  {
    kind: "RESEARCH",
    title: "CMMRS 2025",
    body: "Only participant from Sri Lanka selected for the Cornell–Maryland–Max Planck Pre-doctoral Research School, one of about 90 chosen worldwide.",
  },
  {
    kind: "ACADEMIC",
    title: "Top of the batch",
    body: "BSc (Hons) Computer Science, First Class, GPA 3.98 / 4.00 at UCSC.",
  },
  {
    kind: "ACADEMIC",
    title: "Director's List",
    body: "Named on the Director's List in every semester it was awarded.",
  },
  {
    kind: "HACKATHON",
    title: "MADHACK 2024 finalist",
    body: "All-island inter-university hackathon. Also competed in FreshHack 2.0, the IET Hackathon and ReidExtreme 2022.",
  },
  {
    kind: "SPORT",
    title: "Inter-university tennis champions",
    body: "\"Deuced\" Inter-University Tennis Championship.",
  },
];

export default function Honors() {
  return (
    <section id="honors" className="section">
      <SectionHead idx="03" title="Honors" />
      <div className="honors">
        {HONORS.map((h, i) => (
          <div key={h.title} className="honor reveal" style={{ "--d": i % 3 }}>
            <span className="card-kind">{h.kind}</span>
            <h3>{h.title}</h3>
            <p>{h.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

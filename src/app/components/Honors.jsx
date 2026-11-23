import SectionHead from "./SectionHead";

const HONORS = [
  { kind: "ACADEMIC", title: "Top of the batch", body: "Highest overall GPA in the BSc (Hons) Computer Science batch at UCSC." },
  { kind: "ACADEMIC", title: "Director's List", body: "Awarded in the second and third academic years." },
  { kind: "HACKATHON", title: "MADHACK 2024 finalist", body: "All-island inter-university hackathon. Also competed in FreshHack 2.0, the IET Hackathon and ReidExtreme 2022." },
  { kind: "SPORT", title: "Inter-university tennis champions", body: "\"Deuced\" Inter-University Tennis Championship." },
];

export default function Honors() {
  return (
    <section id="honors" className="section">
      <SectionHead idx="03" title="Honors" />
      <div className="honors">
        {HONORS.map((h, i) => (
          <div key={h.title} className="honor reveal" style={{ "--d": i }}>
            <span className="card-kind">{h.kind}</span>
            <h3>{h.title}</h3>
            <p>{h.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import SectionHead from "./SectionHead";

const STATS = [
  { count: 200, suffix: "+", label: "Merged pull requests" },
  { count: 3.98, decimals: 2, label: "GPA / 4.00 · BSc (Hons) CS" },
  { count: 1, prefix: "#", label: "Rank in batch · UCSC" },
  { count: 10, suffix: "+", label: "Awards & honors" },
];

export default function Identity() {
  return (
    <section id="identity" className="section">
      <SectionHead idx="01" title="Identity" />
      <div className="identity-grid">
        <div className="panel reveal">
          <p className="lead">
            I&apos;m a software engineer who likes the layer <em>under</em> the code: the
            compilers, language servers and runtimes that make other developers fast.
          </p>
          <p>
            By day I work in R&amp;D at Choreo Labs, shipping features for the Ballerina
            Language Server and the WSO2 VS Code extensions: completions, diagnostics, code
            actions and the test infrastructure that keeps them honest.
          </p>
          <p>
            I graduated top of my batch in Computer Science at the University of Colombo
            School of Computing, and worked as a full-time researcher with the Cloudnet
            Research Group, specialising in cloud computing and VM migration.
          </p>
          <p>Off-duty: tennis, carrom, music and volunteering.</p>
        </div>
        <div className="stats">
          {STATS.map((s, i) => (
            <div key={s.label} className="stat reveal" style={{ "--d": i }}>
              <span
                className="stat-num"
                data-count={s.count}
                data-decimals={s.decimals}
                data-prefix={s.prefix}
                data-suffix={s.suffix}
              >
                {(s.prefix || "") + s.count + (s.suffix || "")}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

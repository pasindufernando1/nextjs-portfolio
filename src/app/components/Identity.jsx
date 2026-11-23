import SectionHead from "./SectionHead";

const STATS = [
  { count: 200, suffix: "+", label: "Merged pull requests" },
  { count: 3.98, decimals: 2, label: "GPA / 4.00 · BSc (Hons) CS" },
  { count: 1, prefix: "#", label: "Rank in batch · UCSC" },
  { count: 2, label: "Gold medals · Univ. of Colombo" },
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
            At Choreo Labs (formerly WSO2) I build the developer tools behind Choreo
            Integrator, a low-code IDE where developers design integrations both visually
            and in code. I turn the compiler&apos;s understanding of code into visual editing,
            live error reporting and code generation.
          </p>
          <p>
            I graduated top of the Computer Science batch at the University of Colombo
            School of Computing with two gold medals, and researched how to make cloud
            virtual machines more fault tolerant. I like owning hard problems end to end
            and bringing a research mindset to production engineering.
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

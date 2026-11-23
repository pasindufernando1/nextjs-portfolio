import Image from "next/image";
import Typed from "./Typed";

export default function Hero() {
  return (
    <section className="hero">
      <div className="grid-floor" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-text">
          <p className="chip"><span className="pulse" />SYS.ONLINE // COLOMBO, LK</p>
          <h1 className="glitch" data-text="PASINDU FERNANDO">PASINDU FERNANDO</h1>
          <Typed />
          <p className="hero-sub">
            Software Engineer at <strong>Choreo Labs</strong> (formerly WSO2), building the
            language server and VS Code extension behind Choreo Integrator. Gold-medal CS
            graduate with research in fault-tolerant live VM migration.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="/cv/CV.pdf" className="btn btn-ghost" target="_blank" rel="noopener">Download CV</a>
            <a href="/cv/Transcript.pdf" className="btn btn-ghost" target="_blank" rel="noopener">Transcript</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="holo">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="holo-frame">
              <div className="holo-inner">
                <Image src="/images/mydp.png" alt="Portrait of Pasindu Fernando" fill sizes="400px" priority />
              </div>
              <div className="holo-scan" />
            </div>
            <span className="tag tag-tl">ID // PF-001</span>
            <span className="tag tag-br">STATUS: BUILDING</span>
          </div>
        </div>
      </div>
      <a href="#identity" className="scroll-cue" aria-label="Scroll down"><span /></a>
    </section>
  );
}

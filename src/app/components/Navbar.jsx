"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#identity", idx: "01", title: "Identity" },
  { href: "#log", idx: "02", title: "Mission log" },
  { href: "#honors", idx: "03", title: "Honors" },
  { href: "#projects", idx: "04", title: "Projects" },
  { href: "#arsenal", idx: "05", title: "Arsenal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 20);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="logo" aria-label="Home">
        <span className="logo-mark">PF</span>
        <span className="logo-dot" />
      </a>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span />
      </button>
      <nav className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <i>{l.idx}</i>{l.title}
          </a>
        ))}
        <a href="#uplink" className="nav-cta" onClick={() => setOpen(false)}>Uplink</a>
      </nav>
    </header>
  );
}

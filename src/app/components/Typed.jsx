"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer @ Choreo Labs",
  "Building Choreo Integrator's dev tools",
  "Language servers // VS Code // compilers",
  "Systems researcher: fault-tolerant VMs",
  "CMMRS 2025 · Two gold medals",
];

export default function Typed() {
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let r = 0, c = 0, del = false, timer;
    const tick = () => {
      const word = ROLES[r];
      setText(word.slice(0, c));
      if (!del && c === word.length) { del = true; timer = setTimeout(tick, 1800); return; }
      if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; }
      c += del ? -1 : 1;
      timer = setTimeout(tick, del ? 28 : 55);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="typed-line">
      <span className="prompt">&gt;</span>
      <span>{text}</span>
      <span className="caret">_</span>
    </p>
  );
}

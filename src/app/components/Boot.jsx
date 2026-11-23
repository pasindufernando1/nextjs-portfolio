"use client";
import { useEffect, useState } from "react";

const LINES = [
  "initialising pf.kernel ........",
  "mounting /language-server .....",
  "linking qemu://live-migration .",
  "establishing uplink ...........",
];

export default function Boot() {
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("no-boot")) {
      setDone(true);
      return;
    }
    try { sessionStorage.setItem("pf-booted", "1"); } catch (e) {}
    document.body.classList.add("booting");
    const timers = LINES.map((_, i) => setTimeout(() => setShown(i + 1), 180 * (i + 1)));
    timers.push(setTimeout(() => setDone(true), 180 * (LINES.length + 1) + 350));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (done) document.body.classList.remove("booting");
  }, [done]);

  return (
    <div className={`boot${done ? " done" : ""}`} aria-hidden="true" onClick={() => setDone(true)}>
      <pre className="boot-log">
        {LINES.slice(0, shown).map((l) => (
          <span key={l}>{"> "}{l} <span className="ok">OK</span>{"\n"}</span>
        ))}
        {shown === LINES.length && "> welcome."}
      </pre>
    </div>
  );
}

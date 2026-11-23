"use client";
import { useEffect, useRef } from "react";

// Background canvas, cursor glow, scroll reveals, stat counters and card tilt.
export default function Effects() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, pts = [], raf = 0;
    const mouse = { x: -1e4, y: -1e4 };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = 130 * (canvas.width / innerWidth);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduced) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 120 && d > 0) { p.x += dx / d; p.y += dy / d; }
        }
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < link) {
            ctx.strokeStyle = `rgba(0,240,255,${0.16 * (1 - d / link)})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = p.m ? "rgba(255,43,214,0.8)" : "rgba(0,240,255,0.7)";
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
      }
      if (!reduced && !document.hidden) raf = requestAnimationFrame(draw);
    };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      const n = Math.min(110, Math.floor((innerWidth * innerHeight) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr,
        m: Math.random() < 0.25,
      }));
      if (reduced) draw();
    };
    const onVisible = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) draw();
    };
    const onMove = (e) => {
      const dpr = canvas.width / innerWidth;
      mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr;
      glowRef.current?.style.setProperty("--x", e.clientX + "px");
      glowRef.current?.style.setProperty("--y", e.clientY + "px");
    };
    resize();
    if (!reduced) draw();
    addEventListener("resize", resize);
    addEventListener("pointermove", onMove);
    document.addEventListener("visibilitychange", onVisible);

    const countUp = (el) => {
      const target = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0);
      const pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
      if (reduced) { el.textContent = pre + target.toFixed(dec) + suf; return; }
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - k, 3);
        el.textContent = pre + (target * e).toFixed(dec) + suf;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        const num = en.target.querySelector("[data-count]");
        if (num) countUp(num);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const cards = [...document.querySelectorAll(".card")];
    const onCardMove = (e) => {
      const card = e.currentTarget, r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", x + "px");
      card.style.setProperty("--my", y + "px");
      if (!reduced) {
        card.style.transform = `perspective(800px) rotateX(${((y / r.height) - 0.5) * -6}deg) rotateY(${((x / r.width) - 0.5) * 6}deg)`;
      }
    };
    const onCardLeave = (e) => { e.currentTarget.style.transform = ""; };
    cards.forEach((c) => {
      c.addEventListener("pointermove", onCardMove);
      c.addEventListener("pointerleave", onCardLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisible);
      io.disconnect();
      cards.forEach((c) => {
        c.removeEventListener("pointermove", onCardMove);
        c.removeEventListener("pointerleave", onCardLeave);
      });
    };
  }, []);

  return (
    <>
      <canvas id="field" ref={canvasRef} aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}

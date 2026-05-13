"use client";
import { useEffect } from "react";
import { STATS } from "@/lib/config";

export function Stats() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-count]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        let start = 0;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1800, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#1a2340] border-t border-b border-[--gold]/15 px-[clamp(1.2rem,5vw,4rem)] py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-6">
        {STATS.map((s, i) => (
          <div key={i} className="reveal text-center flex-1 min-w-[100px]" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span
              className="block text-[--gold] font-light leading-none mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.4rem)" }}
              data-count={s.value}
              data-suffix={s.suffix}
            >
              0{s.suffix}
            </span>
            <span className="text-[10px] tracking-[.14em] uppercase text-white/35 font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

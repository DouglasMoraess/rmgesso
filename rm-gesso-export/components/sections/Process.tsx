import { MessageSquare, MapPin, FileText, HardHat, PackageCheck } from "lucide-react";
import { STEPS } from "@/lib/config";

const icons = [MessageSquare, MapPin, FileText, HardHat, PackageCheck];

export function Process() {
  return (
    <section id="processo" className="bg-[#0d1b2a] py-28 px-[clamp(1.2rem,5vw,4rem)] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(107,159,196,.8) 39px,rgba(107,159,196,.8) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(107,159,196,.8) 39px,rgba(107,159,196,.8) 40px)"
        }}
      />
      {/* Connector line */}
      <div className="absolute top-[calc(50%-1px)] left-[clamp(1.2rem,5vw,4rem)] right-[clamp(1.2rem,5vw,4rem)] h-px bg-gradient-to-r from-transparent via-[--gold]/25 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal flex items-center gap-2 mb-3">
          <span className="w-5 h-px bg-[--gold]" />
          <span className="text-[10px] tracking-[.22em] uppercase text-[--gold] font-semibold">Como trabalhamos</span>
        </div>
        <h2
          className="reveal text-white leading-[1.05] mb-14"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.6rem)", fontWeight: 300 }}
        >
          Do contato à <strong style={{ fontWeight: 600, fontStyle: "italic", color: "var(--gold)" }}>entrega</strong>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((s, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`reveal delay-${i + 1} text-center group`}
              >
                <div className="w-14 h-14 rounded-xl border border-[--gold]/30 bg-[--gold]/8 flex items-center justify-center mx-auto mb-5 relative z-10 group-hover:bg-[--gold] group-hover:border-[--gold] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(201,168,76,.3)] transition-all duration-400">
                  <Icon size={22} className="text-[--gold] group-hover:text-[#0d1b2a] transition-colors duration-300" />
                </div>
                <p className="text-[10px] tracking-[.12em] uppercase text-[--gold]/60 font-semibold mb-1">{s.num}</p>
                <h3 className="text-white font-semibold text-base mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {s.title}
                </h3>
                <p className="text-white/35 text-[13px] leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

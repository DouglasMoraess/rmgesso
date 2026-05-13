import Image from "next/image";
import { CheckCircle2, Shield, Timer, Tag } from "lucide-react";
import { CREDENTIALS } from "@/lib/config";

const icons = [CheckCircle2, Shield, Timer, Tag];

export function About() {
  return (
    <section id="sobre" className="bg-white py-28 px-[clamp(1.2rem,5vw,4rem)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Visual */}
        <div className="reveal-left relative flex justify-center">
          {/* Orbit rings */}
          <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4e8f4] anim-orbit pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a8c8e0] anim-orbit-r pointer-events-none" />

          {/* Card */}
          <div className="relative w-[290px] my-12 rounded-2xl overflow-hidden border border-[--gold]/20 shadow-[0_40px_80px_rgba(13,27,42,.15)]"
               style={{ background: "linear-gradient(145deg, #1a2f45, #0d1b2a)" }}>
            <div className="flex items-center justify-center h-56 relative">
              <span className="absolute text-[9rem] text-white/[.07] font-bold select-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>R</span>
              <Image src="/logo.png" alt="RM Gesso" width={80} height={80} className="rounded-full border-2 border-[--gold]/40 relative z-10" />
            </div>
            <div className="px-5 pb-5 text-center">
              <p className="text-white text-base font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>RM Gesso</p>
              <p className="text-white/35 text-[10px] tracking-[.12em] uppercase mt-1">Piracicaba – SP</p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute top-10 right-4 lg:-right-6 anim-float bg-white rounded-xl px-4 py-3 shadow-xl border border-[#d4e8f4]">
            <p className="text-[#1a2340] text-xl font-bold leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>10+</p>
            <p className="text-[#0d1b2a]/40 text-[10px] tracking-[.06em] uppercase mt-0.5">Anos no mercado</p>
          </div>
          <div className="absolute bottom-10 left-4 lg:-left-6 anim-float bg-white rounded-xl px-4 py-3 shadow-xl border border-[#d4e8f4]" style={{ animationDelay: "-2s" }}>
            <p className="text-[#1a2340] text-xl font-bold leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>500+</p>
            <p className="text-[#0d1b2a]/40 text-[10px] tracking-[.06em] uppercase mt-0.5">Obras entregues</p>
          </div>
        </div>

        {/* Text */}
        <div className="reveal-right">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[--steel]" />
            <span className="text-[10px] tracking-[.22em] uppercase text-[--steel] font-semibold">Sobre a empresa</span>
          </div>
          <h2
            className="text-[#0d1b2a] leading-[1.05] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,3.5vw,3.2rem)", fontWeight: 300 }}
          >
            Uma equipe que
            <br />
            <strong style={{ fontWeight: 600, fontStyle: "italic" }}>transforma ambientes</strong>
          </h2>
          <p className="text-[#0d1b2a]/45 leading-relaxed mb-8 font-light">
            A RM Gesso é referência em Piracicaba–SP em serviços de forro, drywall e gesso. Trabalhamos com materiais de primeira linha e mão de obra especializada para garantir o melhor resultado em cada obra.
          </p>

          <div className="space-y-3">
            {CREDENTIALS.map((c, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-[#f5fafd] rounded-xl border-l-2 border-[--steel] hover:bg-[#eaf4fb] hover:translate-x-1 transition-all duration-300 cursor-default"
                >
                  <Icon size={18} className="text-[--steel] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0d1b2a] font-medium text-sm mb-0.5">{c.title}</p>
                    <p className="text-[#0d1b2a]/45 text-[13px] leading-relaxed">{c.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

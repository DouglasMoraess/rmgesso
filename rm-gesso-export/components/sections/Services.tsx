import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/config";

export function Services() {
  return (
    <section id="servicos" className="bg-[#f5fafd] py-28 px-[clamp(1.2rem,5vw,4rem)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-2 mb-3">
          <span className="w-5 h-px bg-[--steel]" />
          <span className="text-[10px] tracking-[.22em] uppercase text-[--steel] font-semibold">O que oferecemos</span>
        </div>
        <h2
          className="reveal text-[#0d1b2a] leading-[1.05] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.6rem)", fontWeight: 300 }}
        >
          Serviços pensados
          <br />
          <strong style={{ fontWeight: 600, fontStyle: "italic" }}>para cada espaço</strong>
        </h2>
        <p className="reveal delay-2 text-[#0d1b2a]/45 text-base leading-relaxed max-w-[500px] mb-14 font-light">
          Cada ambiente tem uma necessidade única. Nossa equipe entrega o melhor material e acabamento em cada projeto.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`reveal group bg-white rounded-2xl border border-[#d4e8f4] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-[--mist] transition-all duration-500 cursor-default delay-${Math.min(i, 4)}`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover brightness-75 saturate-75 group-hover:scale-105 group-hover:brightness-60 transition-all duration-500"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[--steel] to-[--gold] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                {/* Number */}
                <span
                  className="absolute top-3 right-3 text-5xl text-white/10 font-bold leading-none select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {String(s.id).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3
                  className="text-[#0d1b2a] text-lg mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  {s.title}
                </h3>
                <p className="text-[#0d1b2a]/45 text-[13px] leading-relaxed">{s.description}</p>
                <div className="flex items-center gap-1 mt-4 text-[--steel] text-[11px] tracking-[.08em] uppercase font-semibold group-hover:translate-x-1.5 transition-transform duration-300">
                  Saiba mais <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

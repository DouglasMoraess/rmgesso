import { MessageCircle, ChevronDown, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2a]"
      style={{ padding: "8rem clamp(1.2rem,5vw,4rem) 6rem" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-[.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,159,196,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(107,159,196,.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glowing blobs */}
      <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-[--steel] z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-[--gold] z-0" />

      {/* Orbiting rings */}
      <div
        className="absolute top-1/2 right-[8%] anim-orbit z-0 pointer-events-none"
        style={{ width: 380, height: 380, marginTop: -190, border: "1px solid rgba(107,159,196,.12)", borderRadius: "50%" }}
      />
      <div
        className="absolute top-1/2 right-[8%] anim-orbit-r z-0 pointer-events-none"
        style={{ width: 260, height: 260, marginTop: -130, marginRight: 60, border: "1px dashed rgba(107,159,196,.08)", borderRadius: "50%" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-[1fr_420px] gap-12 items-center">
        {/* Left */}
        <div>
          <div className="anim-fadeup d300 flex items-center gap-2 mb-6">
            <span className="w-7 h-px bg-[--gold]" />
            <span className="text-[11px] tracking-[.22em] uppercase text-[--gold] font-semibold">
              Piracicaba – SP · Forro & Drywall
            </span>
          </div>

          <h1
            className="anim-fadeup d500 text-white leading-[.95] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,6vw,6rem)",
              fontWeight: 300,
            }}
          >
            Cuide do seu
            <br />
            <strong style={{ fontWeight: 600, fontStyle: "italic", color: "var(--gold-light)" }}>
              espaço
            </strong>{" "}
            com quem
            <br />
            <em style={{ color: "var(--gold)" }}>entende</em>
          </h1>

          <p className="anim-fadeup d700 text-white/50 text-[clamp(.9rem,1.4vw,1.05rem)] leading-relaxed max-w-[480px] mb-8 font-light">
            Forro drywall, PVC, vinílico, painel ripado, steel frame e gesso liso.
            Qualidade e acabamento que transformam ambientes.
          </p>

          {/* Badges */}
          <div className="anim-fadeup d900 flex flex-wrap gap-2 mb-10">
            {["Visita Técnica Gratuita", "Orçamento sem Compromisso", "Garantia no Serviço"].map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[--gold]/30 bg-[--gold]/8 text-[--gold-light] text-[11px] tracking-[.06em] uppercase font-medium"
              >
                <CheckCircle size={11} />
                {b}
              </span>
            ))}
          </div>

          <div className="anim-fadeup d1100 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${SITE.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[--gold] text-[#0d1b2a] font-semibold text-sm tracking-wide uppercase no-underline hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_6px_25px_rgba(201,168,76,.3)]"
            >
              <MessageCircle size={17} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-[--gold]/35 text-[--gold-light] font-medium text-sm tracking-wide uppercase no-underline hover:bg-[--gold]/10 transition-all duration-300"
            >
              Ver Serviços →
            </a>
          </div>
        </div>

        {/* Right — glass card */}
        <div className="anim-fadeup d700 hidden lg:block">
          <div className="rounded-2xl border border-white/10 p-8 bg-white/[.06] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--gold]/40 to-transparent" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[--gold]/28 bg-[--gold]/12 text-[--gold-light] text-[10px] tracking-[.12em] uppercase font-semibold mb-5">
              <span className="anim-pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
              RM Gesso · Piracicaba–SP
            </div>

            <p className="text-white text-lg font-light leading-snug mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Jenifer Alana Crescencio
            </p>
            <p className="text-white/30 text-[11px] tracking-[.1em] uppercase mb-6">Responsável Técnica</p>

            {/* Services mini list */}
            <div className="space-y-2">
              {[
                { icon: "🏗️", label: "Forro Drywall" },
                { icon: "🪵", label: "Painel Ripado PVC" },
                { icon: "✨", label: "Gesso Liso" },
                { icon: "🔩", label: "Steel Frame" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-white/6 bg-white/[.04] hover:bg-white/[.08] hover:border-[--gold]/30 hover:translate-x-1 transition-all duration-300"
                >
                  <span className="text-sm">{s.icon}</span>
                  <span className="text-white/75 text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${SITE.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold no-underline hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={17} fill="white" />
              Falar com a equipe
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="anim-fadeup d1500 absolute bottom-8 left-[clamp(1.2rem,5vw,4rem)] z-10 flex items-center gap-3">
        <ChevronDown size={14} className="text-white/30" />
        <span className="text-[10px] tracking-[.2em] uppercase text-white/25">Rolar</span>
      </div>
    </section>
  );
}

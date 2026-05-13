import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#060a10] border-t border-white/5 pt-16 pb-8 px-[clamp(1.2rem,5vw,4rem)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="RM Gesso" width={38} height={38} className="rounded-full border border-[--gold]/35" />
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-xl font-semibold">
                RM <em className="text-[--gold] not-italic">Gesso</em>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Especialistas em forro e drywall em Piracicaba–SP. Qualidade, agilidade e preço justo em cada obra.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[.18em] uppercase text-[--gold] font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/35">
              {["Forro Drywall","Painel Ripado PVC","Forro PVC","Gesso Liso","Steel Frame","Forro Vinílico"].map((s) => (
                <li key={s}>
                  <a href="#servicos" className="hover:text-[--gold] transition-colors no-underline">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[.18em] uppercase text-[--gold] font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Phone size={13} className="text-[--gold] shrink-0" />
                <a href={`https://wa.me/${SITE.phone}`} className="hover:text-[--gold] transition-colors no-underline">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <MapPin size={13} className="text-[--gold] shrink-0" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Clock size={13} className="text-[--gold] shrink-0" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[11px] text-white/18">© 2026 RM Gesso · Piracicaba–SP · Todos os direitos reservados</p>
          <p className="text-[11px] text-white/18">Forro & Drywall com qualidade garantida</p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const send = () => {
    const url = buildWhatsAppUrl(
      SITE.phone,
      form,
      "Olá! Vim pelo site da RM Gesso e gostaria de solicitar um orçamento."
    );
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="bg-[#f5fafd] py-28 px-[clamp(1.2rem,5vw,4rem)]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-2 mb-3">
          <span className="w-5 h-px bg-[--steel]" />
          <span className="text-[10px] tracking-[.22em] uppercase text-[--steel] font-semibold">Fale conosco</span>
        </div>
        <h2
          className="reveal text-[#0d1b2a] leading-[1.05] mb-14"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.6rem)", fontWeight: 300 }}
        >
          Solicite seu
          <br />
          <strong style={{ fontWeight: 600, fontStyle: "italic" }}>orçamento gratuito</strong>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          {/* Info */}
          <div className="reveal-left space-y-4">
            {[
              { Icon: MapPin,  label: "Atendimento", value: "Piracicaba–SP e região" },
              { Icon: Phone,   label: "WhatsApp",   value: SITE.phoneDisplay, href: `https://wa.me/${SITE.phone}` },
              { Icon: Clock,   label: "Horário",    value: SITE.hours },
            ].map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#d4e8f4] hover:border-[#a8c8e0] hover:translate-x-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0d1b2a] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[--gold]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[.13em] uppercase text-[--steel] font-semibold mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-[#0d1b2a] text-sm font-medium no-underline hover:text-[--steel] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#0d1b2a] text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal-right bg-white rounded-2xl border border-[#d4e8f4] p-8">
            <h3
              className="text-[#0d1b2a] text-2xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Envie uma mensagem
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { id: "name",  label: "Nome completo",   placeholder: "Seu nome",         type: "text" },
                { id: "phone", label: "Telefone",         placeholder: "(19) 9 0000-0000", type: "tel"  },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-[10px] tracking-[.11em] uppercase text-[#0d1b2a]/40 font-semibold mb-1.5">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#d4e8f4] bg-[#f5fafd] text-[#0d1b2a] text-sm outline-none focus:border-[--steel] focus:shadow-[0_0_0_3px_rgba(74,114,150,.12)] transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label className="block text-[10px] tracking-[.11em] uppercase text-[#0d1b2a]/40 font-semibold mb-1.5">
                Serviço
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#d4e8f4] bg-[#f5fafd] text-[#0d1b2a] text-sm outline-none focus:border-[--steel] focus:shadow-[0_0_0_3px_rgba(74,114,150,.12)] transition-all appearance-none"
              >
                <option value="">Selecione…</option>
                {["Forro Drywall","Painel Ripado PVC","Forro PVC","Gesso Liso","Parede Drywall","Steel Frame","Forro Vinílico","Projeto Personalizado"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] tracking-[.11em] uppercase text-[#0d1b2a]/40 font-semibold mb-1.5">
                Mensagem (opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Descreva seu projeto, metragem aproximada…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#d4e8f4] bg-[#f5fafd] text-[#0d1b2a] text-sm outline-none focus:border-[--steel] focus:shadow-[0_0_0_3px_rgba(74,114,150,.12)] transition-all resize-none"
              />
            </div>

            <button
              onClick={send}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0d1b2a] text-white font-semibold text-sm tracking-wide uppercase hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              <Send size={15} />
              Enviar pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

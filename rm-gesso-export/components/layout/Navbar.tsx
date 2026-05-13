"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = "";
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
    document.body.style.overflow = menuOpen ? "" : "hidden";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#0d1b2a]/94 backdrop-blur-xl border-b border-[--gold]/10 py-3 px-[clamp(1.2rem,5vw,4rem)]"
            : "py-5 px-[clamp(1.2rem,5vw,4rem)]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <Image src="/logo.png" alt="RM Gesso" width={40} height={40} className="rounded-full border border-[--gold]/40" />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-xl font-semibold leading-none">
              RM <em className="text-[--gold] not-italic">Gesso</em>
            </div>
            <div className="text-[10px] tracking-[.18em] uppercase text-[--gold] font-medium mt-0.5">
              Forro & Drywall
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-[11px] tracking-[.1em] uppercase font-medium text-white/50 hover:text-[--gold] transition-colors no-underline relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[--gold] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/${SITE.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-sm border border-[--gold]/40 text-[--gold-light] text-[11px] tracking-[.1em] uppercase font-medium hover:bg-[--gold] hover:text-[#0d1b2a] hover:border-[--gold] transition-all duration-300 no-underline"
        >
          <MessageCircle size={14} />
          Orçamento
        </a>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="lg:hidden text-white p-1" aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d1b2a] flex flex-col items-center justify-center gap-8 transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => handleNav(e, l.href)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              transitionDelay: menuOpen ? `${i * 70}ms` : "0ms",
            }}
            className={`text-[clamp(2rem,7vw,3rem)] text-white font-semibold tracking-wide no-underline hover:text-[--gold] transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {l.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${SITE.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 px-6 py-3 bg-[--gold] text-[#0d1b2a] rounded-sm font-semibold text-sm tracking-wide no-underline"
        >
          <MessageCircle size={16} />
          Pedir Orçamento
        </a>
      </div>
    </>
  );
}

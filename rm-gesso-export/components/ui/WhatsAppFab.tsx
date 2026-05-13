"use client";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export function WhatsAppFab() {
  return (
    <>
      <a
        href={`https://wa.me/${SITE.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,.35)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </a>
      <span className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full border-2 border-[#25D366] anim-fab-ring pointer-events-none" />
    </>
  );
}

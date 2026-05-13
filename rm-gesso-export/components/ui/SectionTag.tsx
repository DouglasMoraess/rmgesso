import { Minus } from "lucide-react";

interface SectionTagProps {
  label: string;
  className?: string;
}

export function SectionTag({ label, className = "" }: SectionTagProps) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${className}`}>
      <Minus size={16} className="text-[--gold]" strokeWidth={3} />
      <span className="text-[11px] font-semibold tracking-[.22em] uppercase text-[--gold]">
        {label}
      </span>
    </div>
  );
}

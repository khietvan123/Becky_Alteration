/*
 * StickyMobileCTA — Artisan Warmth design
 * Visible only on mobile, sticks to bottom
 * Two buttons: Get a Free Quote + Call
 */

import { Phone, ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const handleQuoteClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF6F0]/95 backdrop-blur-sm border-t border-[#E8DDD0] px-4 py-3 flex gap-3 shadow-lg">
      <button
        onClick={handleQuoteClick}
        className="flex-1 flex items-center justify-center gap-2 bg-[#2B1A0F] text-[#FAF6F0] font-['DM_Sans'] font-600 text-sm py-3 rounded-sm"
      >
        Get a Free Quote
        <ArrowRight className="w-4 h-4" />
      </button>
      <a
        href="tel:4164543757"
        className="flex items-center justify-center gap-2 bg-[#C4956A] text-[#2B1A0F] font-['DM_Sans'] font-600 text-sm px-5 py-3 rounded-sm"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>
    </div>
  );
}

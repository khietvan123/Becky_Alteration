/*
 * FinalCTA — Artisan Warmth design
 * Bold espresso background with gold accent CTA
 * Strong conversion-focused copy
 */

import { useRef, useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleQuoteClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#2B1A0F] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/50 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, #C4956A 0%, transparent 60%), radial-gradient(circle at 70% 50%, #C4956A 0%, transparent 60%)`,
        }}
      />

      <div className="container relative z-10">
        <div ref={contentRef} className="reveal text-center max-w-2xl mx-auto">
          {/* Label */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#C4956A]/50" />
              <span className="font-['DM_Sans'] text-xs font-600 tracking-[0.15em] uppercase text-[#C4956A]">
                Ready to Start?
              </span>
              <div className="w-12 h-px bg-[#C4956A]/50" />
            </div>
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-700 text-[#FAF6F0] mb-4">
            Need Your Clothes{" "}
            <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
              Altered Fast?
            </em>
          </h2>

          <p className="font-['DM_Sans'] text-lg text-[#FAF6F0]/60 mb-10">
            Get professional results without the wait. Serving Mississauga with precision,
            care, and a perfect 5-star reputation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center gap-2 bg-[#C4956A] text-[#2B1A0F] font-['DM_Sans'] font-700 text-base px-8 py-4 rounded-sm hover:bg-[#D4A57A] transition-all hover:translate-x-0.5 cta-pulse"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:4164543757"
              className="inline-flex items-center gap-2 bg-transparent text-[#FAF6F0] font-['DM_Sans'] font-600 text-base px-8 py-4 rounded-sm border-2 border-[#FAF6F0]/20 hover:border-[#C4956A]/50 hover:text-[#C4956A] transition-all"
            >
              <Phone className="w-5 h-5" />
              (416) 454-3757
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

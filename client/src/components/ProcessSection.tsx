/*
 * ProcessSection — Artisan Warmth design
 * Dark espresso background with gold accents
 * 3-step horizontal timeline with numbered steps
 */

import { useEffect, useRef } from "react";
import { MessageCircle, Tag, Scissors, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contact Us",
    desc: "Send a request or give us a call. Tell us what you need and we'll get back to you promptly.",
  },
  {
    number: "02",
    icon: Tag,
    title: "Get a Quote",
    desc: "Quick, transparent pricing based on your specific alteration needs. No surprises.",
  },
  {
    number: "03",
    icon: Scissors,
    title: "We Alter Your Clothing",
    desc: "Fast, clean, professional work. Your garment is returned fitting perfectly.",
  },
];

export default function ProcessSection() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allEls = [
      titleRef.current,
      ...stepRefs.current.filter(Boolean),
      ctaRef.current,
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    allEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleQuoteClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="process" className="bg-[#2B1A0F] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #C4956A 0px,
            #C4956A 1px,
            transparent 1px,
            transparent 14px
          )`,
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} data-delay="0" className="reveal text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#C4956A]/50" />
              <span className="font-['DM_Sans'] text-xs font-600 tracking-[0.15em] uppercase text-[#C4956A]">
                Simple Process
              </span>
              <div className="w-12 h-px bg-[#C4956A]/50" />
            </div>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-700 text-[#FAF6F0]">
            How It{" "}
            <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
              Works
            </em>
          </h2>
          <p className="font-['DM_Sans'] text-[#FAF6F0]/50 mt-4 max-w-md mx-auto">
            Getting your clothes altered is simple, fast, and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-14 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[#C4956A]/20" />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              data-delay={String(i * 120)}
              className="reveal relative text-center"
            >
              {/* Number + icon */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-[#C4956A]/30 flex items-center justify-center bg-[#3A2415] mb-2">
                    <step.icon className="w-8 h-8 text-[#C4956A]" />
                  </div>
                  <span className="absolute -top-2 -right-2 font-['Playfair_Display'] font-700 text-xs text-[#C4956A] bg-[#2B1A0F] border border-[#C4956A]/30 rounded-full w-6 h-6 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
              </div>

              <h3 className="font-['Playfair_Display'] font-700 text-xl text-[#FAF6F0] mb-3">
                {step.title}
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#FAF6F0]/55 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} data-delay="400" className="reveal text-center">
          <button
            onClick={handleQuoteClick}
            className="inline-flex items-center gap-2 bg-[#C4956A] text-[#2B1A0F] font-['DM_Sans'] font-700 text-base px-8 py-4 rounded-sm hover:bg-[#D4A57A] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

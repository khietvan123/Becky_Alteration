/*
 * HeroSection — Artisan Warmth design
 * Asymmetric left/right split: headline + CTA left, hero image right
 * Trust indicators below headline
 * Warm ivory background with espresso text and gold accents
 */

import { useEffect, useRef } from "react";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663474058382/6LvJP7z7GSt9xpsdqP5S5W/hero-tailor-Ft2JejaER3FBU2PvTr469S.webp";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, ctaRef.current, trustRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 150);
    });
  }, []);

  const handleQuoteClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#FAF6F0] overflow-hidden flex items-center pt-20">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #2B1A0F 0px,
            #2B1A0F 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="section-divider mb-6">
              <span className="section-label">Mississauga's Trusted Tailor</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-700 text-[#2B1A0F] leading-[1.1] mb-6"
            >
              Perfect Fit,{" "}
              <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
                Every Time
              </em>
              {" — "}
              <span className="block mt-1">Expert Alterations</span>
              <span className="block">in Mississauga</span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subRef}
              className="font-['DM_Sans'] text-lg text-[#2B1A0F]/65 leading-relaxed mb-8 max-w-lg"
            >
              From quick fixes to custom tailoring, Becky Alteration delivers precise,
              affordable, and reliable clothing alterations you can trust.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={handleQuoteClick}
                className="btn-primary cta-pulse flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:4164543757"
                className="btn-outline flex items-center gap-2"
              >
                Call (416) 454-3757
              </a>
            </div>

            {/* Trust indicators */}
            <div ref={trustRef} className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C4956A] text-[#C4956A]" />
                  ))}
                </div>
                <span className="font-['DM_Sans'] text-sm font-600 text-[#2B1A0F]">
                  5.0 Rating
                </span>
                <span className="font-['DM_Sans'] text-sm text-[#2B1A0F]/50">
                  (6 Reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                <span className="font-['DM_Sans'] text-sm text-[#2B1A0F]/70">
                  Local Mississauga Service
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                <span className="font-['DM_Sans'] text-sm text-[#2B1A0F]/70">
                  Fast Turnaround Available
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Expert tailor at work in Mississauga"
                className="w-full h-[420px] lg:h-[560px] object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0F]/30 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-[#FAF6F0] rounded-sm px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C4956A] text-[#C4956A]" />
                    ))}
                  </div>
                  <div>
                    <p className="font-['Playfair_Display'] font-700 text-[#2B1A0F] text-sm leading-none">
                      5.0 / 5.0
                    </p>
                    <p className="font-['DM_Sans'] text-[10px] text-[#2B1A0F]/50 mt-0.5 uppercase tracking-wider">
                      Google Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gold border offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#C4956A]/30 rounded-sm -z-10" />

            {/* Map anchor */}
            <div className="mt-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/iZSE1TXskxK2GbfB7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['DM_Sans'] text-sm text-[#2B1A0F]/60 hover:text-[#C4956A] transition-colors underline underline-offset-2"
              >
                Find us on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 50 960 60 720 40C480 20 240 10 0 30L0 60Z" fill="#F5EDE0" />
        </svg>
      </div>
    </section>
  );
}

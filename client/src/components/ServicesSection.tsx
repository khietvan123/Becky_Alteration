/*
 * ServicesSection — Artisan Warmth design
 * Warm cream background (#F5EDE0), staggered service cards with gold icon accents
 * Services image on the right, service list on the left
 */

import { useEffect, useRef } from "react";
import { Scissors, ArrowUpDown, ZapOff, Heart, Ruler, ArrowRight } from "lucide-react";

const SERVICES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663474058382/6LvJP7z7GSt9xpsdqP5S5W/services-measuring-dRSvENLjKHt6irLC7qJwxH.webp";

const services = [
  {
    icon: Ruler,
    title: "Hemming",
    desc: "Pants, dresses, skirts — precise length adjustments for a clean, tailored finish.",
  },
  {
    icon: ArrowUpDown,
    title: "Clothing Resizing & Adjustments",
    desc: "Taking in or letting out seams to achieve the perfect silhouette for your body.",
  },
  {
    icon: ZapOff,
    title: "Zipper Repair & Replacement",
    desc: "Fast, clean zipper fixes on jackets, dresses, bags, and more.",
  },
  {
    icon: Heart,
    title: "Wedding & Formal Dress Alterations",
    desc: "Delicate, expert alterations for your most important garments.",
  },
  {
    icon: Scissors,
    title: "Custom Tailoring",
    desc: "Bespoke adjustments to make any garment fit you perfectly.",
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useReveal(titleRef as React.RefObject<HTMLElement>, 0);
  useReveal(imageRef as React.RefObject<HTMLElement>, 100);
  useReveal(ctaRef as React.RefObject<HTMLElement>, 200);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), i * 80);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  const handleQuoteClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[#F5EDE0] py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-14">
          <div className="section-divider">
            <span className="section-label">What We Do</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-700 text-[#2B1A0F] max-w-xl">
            Our Alteration{" "}
            <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
              Services
            </em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Service cards */}
          <div className="space-y-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="reveal group bg-[#FAF6F0] border border-[#E8DDD0] rounded-sm p-5 flex gap-4 hover:border-[#C4956A] hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C4956A]/10 flex items-center justify-center group-hover:bg-[#C4956A]/20 transition-colors">
                  <service.icon className="w-5 h-5 text-[#C4956A]" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] font-600 text-[#2B1A0F] text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[#2B1A0F]/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA under services */}
            <div ref={ctaRef} className="reveal pt-4">
              <button
                onClick={handleQuoteClick}
                className="btn-primary flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div ref={imageRef} className="reveal relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl">
              <img
                src={SERVICES_IMAGE}
                alt="Expert tailor measuring a garment for alteration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B1A0F]/20" />
            </div>
            {/* Decorative offset */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C4956A]/20 rounded-sm -z-10" />

            {/* Floating stat */}
            <div className="absolute top-6 right-6 bg-[#2B1A0F] text-[#FAF6F0] rounded-sm px-4 py-3 shadow-lg">
              <p className="font-['Playfair_Display'] font-700 text-2xl text-[#C4956A]">
                5 ★
              </p>
              <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#FAF6F0]/70 mt-0.5">
                Rated Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

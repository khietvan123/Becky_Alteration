/*
 * WhyUsSection — Artisan Warmth design
 * Warm cream background, asymmetric layout with tools image
 * Feature list with gold checkmarks
 */

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const TOOLS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663474058382/6LvJP7z7GSt9xpsdqP5S5W/tailor-tools-2LncTQfCDpHmKoZwmwd7ab.webp";

const reasons = [
  {
    title: "Precision Tailoring for Perfect Fit",
    desc: "Every stitch is placed with care to ensure your garment fits exactly as it should.",
  },
  {
    title: "Affordable Pricing",
    desc: "Quality alterations don't have to break the bank. We offer fair, transparent pricing.",
  },
  {
    title: "Fast Turnaround Options",
    desc: "Need it done quickly? We offer expedited services for last-minute events and emergencies.",
  },
  {
    title: "Friendly, Local Service",
    desc: "A warm, personal experience from a trusted member of the Mississauga community.",
  },
  {
    title: "Trusted by Mississauga Residents",
    desc: "Dozens of satisfied customers and a perfect 5-star Google rating speak for themselves.",
  },
];

export default function WhyUsSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allEls = [
      titleRef.current,
      imageRef.current,
      ...itemRefs.current.filter(Boolean),
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

  return (
    <section id="why-us" className="bg-[#F5EDE0] py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div ref={imageRef} data-delay="0" className="reveal relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden shadow-xl">
              <img
                src={TOOLS_IMAGE}
                alt="Professional tailor's tools — scissors, thread, measuring tape"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2B1A0F]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C4956A]/25 rounded-sm -z-10" />

            {/* Floating badge */}
            <div className="absolute bottom-8 left-6 bg-[#FAF6F0] rounded-sm px-5 py-4 shadow-lg max-w-[200px]">
              <p className="font-['Playfair_Display'] font-700 text-[#2B1A0F] text-base leading-snug">
                "Trusted by the Mississauga community"
              </p>
              <div className="mt-2 h-0.5 w-8 bg-[#C4956A]" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div ref={titleRef} data-delay="0" className="reveal mb-10">
              <div className="section-divider">
                <span className="section-label">Our Advantage</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-700 text-[#2B1A0F]">
                Why Choose{" "}
                <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
                  Us
                </em>
              </h2>
            </div>

            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  data-delay={String(i * 80)}
                  className="reveal flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C4956A]" />
                  </div>
                  <div>
                    <h3 className="font-['DM_Sans'] font-600 text-[#2B1A0F] text-base mb-0.5">
                      {reason.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-sm text-[#2B1A0F]/60 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

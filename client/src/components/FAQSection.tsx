/*
 * FAQSection — Artisan Warmth design
 * Warm ivory background, accordion-style FAQ with gold expand icons
 */

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long do alterations take?",
    a: "Most jobs are completed quickly depending on complexity. Simple hems and minor adjustments can often be done within a day or two. More complex alterations like wedding dress work may take a few days. We'll give you an accurate timeline when you get your quote.",
  },
  {
    q: "Do you offer urgent or same-day services?",
    a: "Yes! Fast turnaround options are available for last-minute events, emergencies, or tight deadlines. Just let us know when you contact us and we'll do our best to accommodate your schedule.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the type and complexity of the alteration. Simple hems start at very affordable rates, while more complex work like wedding dress alterations is priced accordingly. Contact us for a free, no-obligation quote tailored to your specific needs.",
  },
  {
    q: "What types of clothing do you alter?",
    a: "We work with all types of clothing — pants, dresses, skirts, jackets, suits, wedding gowns, formal wear, and more. If you're unsure whether we can help, just reach out and ask!",
  },
  {
    q: "Where are you located?",
    a: "We're located at 5205 Palomar Crescent, Mississauga, ON L5R 2X2. We serve Mississauga and nearby areas. Contact us to arrange a visit.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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

  return (
    <section id="faq" className="bg-[#FAF6F0] py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div>
            <div className="section-divider mb-6">
              <span className="section-label">Common Questions</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-700 text-[#2B1A0F] mb-6">
              Frequently Asked{" "}
              <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
                Questions
              </em>
            </h2>
            <p className="font-['DM_Sans'] text-[#2B1A0F]/60 leading-relaxed mb-8">
              Have more questions? Don't hesitate to reach out — we're happy to help.
            </p>
            <a
              href="tel:4164543757"
              className="btn-outline inline-flex items-center gap-2"
            >
              Call (416) 454-3757
            </a>
          </div>

          {/* Right: Accordion */}
          <div ref={sectionRef} className="reveal space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-[#E8DDD0] rounded-sm overflow-hidden hover:border-[#C4956A]/40 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-['DM_Sans'] font-600 text-[#2B1A0F] text-base">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#C4956A]/30 flex items-center justify-center text-[#C4956A]">
                    {openIndex === i ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 border-t border-[#E8DDD0]">
                    <p className="font-['DM_Sans'] text-sm text-[#2B1A0F]/65 leading-relaxed pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

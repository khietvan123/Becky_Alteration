/*
 * ReviewsSection — Artisan Warmth design
 * Warm ivory background, oversized italic pull-quotes, star ratings
 * Stats row below reviews
 */

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "I've been coming to Becky for 10 years and follow her wherever she goes! I live in Vaughan and would travel to her when she lived in Toronto, and now Mississauga. Becky knows exactly what I want, she has absolutely transformed dresses into a completely new dress (per my request) and I always get my clothes back exactly how I envisioned them. On top of being affordable, she is so talented, friendly and fun. Couldn't recommend her enough!",
    author: "Vanessa Gullo.",
    rating: 5,
  },
  {
    text: "When it comes to clothing alteration, Becky is my go to place. She is talented, has a great eye and style and can give you invaluable advice. She always make sure your clothing look best on you at a reasonable charge and fast turnaround time. From pant hemming to wedding dresses, no job is too small or too big for Becky. Her professionalism shines through her work and she will exceed your expectation. Highly recommended!",
    author: "Thomas799.",
    rating: 5,
  },
  {
    text: "Very friendly and great quality service!  I had my uniform & work clothes repaired/ patched by Becky! :)",
    author: "Devon Fisher.",
    rating: 5,
  },
];

const stats = [
  { value: "5.0", label: "Average Rating", sub: "on Google" },
  { value: "50+", label: "Alterations Done", sub: "and counting" },
  { value: "24h", label: "Open Daily", sub: "available for you" },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const allEls = [
      ...(cardRefs.current.filter(Boolean) as HTMLDivElement[]),
      ...(statRefs.current.filter(Boolean) as HTMLDivElement[]),
    ];

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
    <section id="reviews" className="bg-[#FAF6F0] py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="section-divider justify-center">
              <span className="section-label">Customer Stories</span>
            </div>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-700 text-[#2B1A0F]">
            Loved by{" "}
            <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
              Local Customers
            </em>
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              data-delay={String(i * 100)}
              className="reveal bg-white border border-[#E8DDD0] rounded-sm p-6 relative hover:shadow-lg hover:border-[#C4956A]/40 transition-all duration-200"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#C4956A]/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C4956A] text-[#C4956A]" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-['Playfair_Display'] italic text-[#2B1A0F] text-lg leading-relaxed mb-5">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C4956A]/15 flex items-center justify-center">
                  <span className="font-['Playfair_Display'] font-700 text-[#C4956A] text-sm">
                    {review.author[0]}
                  </span>
                </div>
                <span className="font-['DM_Sans'] font-600 text-[#2B1A0F] text-sm">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 bg-[#2B1A0F] rounded-sm p-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => { statRefs.current[i] = el; }}
              data-delay={String(i * 100)}
              className="reveal text-center"
            >
              <p className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-[#C4956A] mb-1">
                {stat.value}
              </p>
              <p className="font-['DM_Sans'] font-600 text-[#FAF6F0] text-sm md:text-base">
                {stat.label}
              </p>
              <p className="font-['DM_Sans'] text-[#FAF6F0]/40 text-xs mt-0.5">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

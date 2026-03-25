/*
 * LocationSection — Artisan Warmth design
 * Dark espresso background with embedded Google Maps iframe
 * Contact details in a warm card overlay
 */

import { useRef, useEffect } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
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

  return (
    <section id="location" className="bg-[#F5EDE0] py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#C4956A]" />
              <span className="font-['DM_Sans'] text-xs font-600 tracking-[0.15em] uppercase text-[#C4956A]">
                Find Us
              </span>
              <div className="w-12 h-px bg-[#C4956A]" />
            </div>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-700 text-[#2B1A0F]">
            Visit or{" "}
            <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
              Contact Us
            </em>
          </h2>
        </div>

        <div ref={contentRef} className="reveal grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 rounded-sm overflow-hidden shadow-xl border border-[#E8DDD0]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3!2d-79.63500!3d43.62800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47b4e2b3f4a5%3A0xabcdef1234567890!2s5205+Palomar+Crescent%2C+Mississauga%2C+ON+L5R+2X2%2C+Canada!5e0!3m2!1sen!2sca!4v1711300000000!5m2!1sen!2sca"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Becky Alteration location on Google Maps"
            />
          </div>

          {/* Contact card */}
          <div className="bg-[#2B1A0F] rounded-sm p-7 text-[#FAF6F0]">
            <h3 className="font-['Playfair_Display'] font-700 text-xl text-[#C4956A] mb-6">
              Contact Details
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#C4956A]/15 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#C4956A]" />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#FAF6F0]/40 mb-1">
                    Address
                  </p>
                  <p className="font-['DM_Sans'] text-sm text-[#FAF6F0]/85 leading-relaxed">
                    5205 Palomar Crescent<br />
                    Mississauga, ON L5R 2X2
                  </p>
                  <a
                    href="https://maps.app.goo.gl/iZSE1TXskxK2GbfB7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-['DM_Sans'] text-xs text-[#C4956A] hover:underline mt-1"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="h-px bg-[#FAF6F0]/10" />

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#C4956A]/15 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#C4956A]" />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#FAF6F0]/40 mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:4164543757"
                    className="font-['DM_Sans'] font-600 text-[#FAF6F0] hover:text-[#C4956A] transition-colors"
                  >
                    (416) 454-3757
                  </a>
                </div>
              </div>

              <div className="h-px bg-[#FAF6F0]/10" />

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#C4956A]/15 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#C4956A]" />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#FAF6F0]/40 mb-1">
                    Hours
                  </p>
                  <p className="font-['DM_Sans'] font-600 text-[#FAF6F0]">Open 24 Hours</p>
                  <p className="font-['DM_Sans'] text-xs text-[#FAF6F0]/40 mt-0.5">
                    7 days a week
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-[#FAF6F0]/10">
              <a
                href="tel:4164543757"
                className="flex items-center justify-center gap-2 bg-[#C4956A] text-[#2B1A0F] font-['DM_Sans'] font-700 text-sm px-5 py-3 rounded-sm hover:bg-[#D4A57A] transition-colors w-full"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

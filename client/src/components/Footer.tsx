/*
 * Footer — Artisan Warmth design
 * Dark espresso with warm ivory text, gold accents
 * Logo, address, phone, map link, tagline
 */

import { Scissors, MapPin, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A0F08] text-[#FAF6F0]">
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#C4956A]/15 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-[#C4956A]" />
              </div>
              <div>
                <span className="font-['Playfair_Display'] font-700 text-[#FAF6F0] text-lg leading-none block">
                  Becky
                </span>
                <span className="font-['DM_Sans'] text-[10px] font-600 tracking-[0.15em] uppercase text-[#C4956A] leading-none block">
                  Alteration
                </span>
              </div>
            </div>
            <p className="font-['DM_Sans'] text-sm text-[#FAF6F0]/50 leading-relaxed max-w-xs">
              Expert clothing alterations in Mississauga. Precision tailoring, affordable
              pricing, and fast turnaround — every time.
            </p>
            <p className="font-['DM_Sans'] text-xs text-[#C4956A]/70 mt-3 uppercase tracking-wider">
              Serving Mississauga and nearby areas
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['DM_Sans'] text-xs font-600 uppercase tracking-[0.15em] text-[#C4956A] mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-['DM_Sans'] text-sm text-[#FAF6F0]/70">
                    5205 Palomar Crescent<br />
                    Mississauga, ON L5R 2X2
                  </p>
                  <a
                    href="https://maps.app.goo.gl/iZSE1TXskxK2GbfB7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-['DM_Sans'] text-xs text-[#C4956A] hover:underline mt-1"
                  >
                    View on Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                <a
                  href="tel:4164543757"
                  className="font-['DM_Sans'] text-sm text-[#FAF6F0]/70 hover:text-[#C4956A] transition-colors"
                >
                  (416) 454-3757
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-['DM_Sans'] text-xs font-600 uppercase tracking-[0.15em] text-[#C4956A] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "How It Works", href: "#process" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Get a Free Quote", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-['DM_Sans'] text-sm text-[#FAF6F0]/50 hover:text-[#C4956A] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF6F0]/5">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['DM_Sans'] text-xs text-[#FAF6F0]/30">
            © {currentYear} Becky Alteration. All rights reserved.
          </p>
          <p className="font-['DM_Sans'] text-xs text-[#FAF6F0]/30">
            Mississauga, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

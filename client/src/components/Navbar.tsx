/*
 * Navbar — Artisan Warmth design
 * Sticky top nav with warm ivory bg, espresso text, gold accent on scroll
 * Mobile: hamburger menu with slide-down drawer
 */

import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-sm shadow-sm border-b border-[#E8DDD0]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-full bg-[#2B1A0F] flex items-center justify-center flex-shrink-0">
              <Scissors className="w-4 h-4 text-[#C4956A]" />
            </div>
            <div>
              <span className="font-['Playfair_Display'] font-700 text-[#2B1A0F] text-lg leading-none block">
                Becky
              </span>
              <span className="font-['DM_Sans'] text-[10px] font-600 tracking-[0.15em] uppercase text-[#C4956A] leading-none block">
                Alteration
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-['DM_Sans'] text-sm font-500 text-[#2B1A0F]/70 hover:text-[#2B1A0F] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C4956A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Get a Free Quote
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#2B1A0F]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-t border-[#E8DDD0] shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-['DM_Sans'] text-base font-500 text-[#2B1A0F] py-3 border-b border-[#E8DDD0] last:border-0 hover:text-[#C4956A] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="btn-primary mt-3 justify-center"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

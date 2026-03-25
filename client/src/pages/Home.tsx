/*
 * Home — Becky Alteration
 * Assembles all sections in order per PRD
 * Design: Artisan Warmth — warm ivory, espresso, dusty rose-gold
 * Fonts: Playfair Display (display) + DM Sans (body)
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <WhyUsSection />
      <ProcessSection />
      <ContactForm />
      <LocationSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

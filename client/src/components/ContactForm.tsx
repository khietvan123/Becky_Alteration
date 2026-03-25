/*
 * ContactForm — Artisan Warmth design
 * Warm ivory background, elegant form with gold focus rings
 * Wedding dress image on the right
 */

import { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";


const WEDDING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663474058382/6LvJP7z7GSt9xpsdqP5S5W/wedding-dress-RhnJygEAPT33qJuGbwAzUA.webp";

const alterationTypes = [
  "Hemming (pants, dress, skirt)",
  "Clothing resizing / taking in",
  "Clothing resizing / letting out",
  "Zipper repair or replacement",
  "Wedding / formal dress alteration",
  "Custom tailoring",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  alterationType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    alterationType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [formRef.current, imageRef.current].filter(Boolean) as HTMLElement[];
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   // Simulate form submission (static site — would integrate with email service)
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSubmitted(true);
  //   }, 1200);
  // };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  emailjs.
    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        alterationType: formData.alterationType,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSubmitted(true);
    })
    .catch((error) => {
      console.error("Email failed:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    });
};

  const inputClass =
    "w-full font-['DM_Sans'] text-sm text-[#2B1A0F] bg-white border border-[#E8DDD0] rounded-sm px-4 py-3 outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20 transition-all placeholder:text-[#2B1A0F]/30";

  return (
    <section id="contact" className="bg-[#FAF6F0] py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <div ref={formRef} data-delay="0" className="reveal">
            <div className="section-divider mb-6">
              <span className="section-label">Free Quote</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-700 text-[#2B1A0F] mb-3">
              Get Your{" "}
              <em style={{ fontStyle: "italic" }} className="text-[#C4956A]">
                Free Quote
              </em>
            </h2>
            <p className="font-['DM_Sans'] text-[#2B1A0F]/60 mb-8">
              Fill out the form below and we'll get back to you with a quick, no-obligation quote.
            </p>

            {submitted ? (
              <div className="bg-[#F5EDE0] border border-[#C4956A]/30 rounded-sm p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#C4956A] mx-auto mb-4" />
                <h3 className="font-['Playfair_Display'] font-700 text-xl text-[#2B1A0F] mb-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="font-['DM_Sans'] text-[#2B1A0F]/60">
                  We've received your request and will be in touch shortly with your free quote.
                </p>
                <p className="font-['DM_Sans'] text-sm text-[#2B1A0F]/50 mt-3">
                  Or call us directly:{" "}
                  <a href="tel:4164543757" className="text-[#C4956A] font-600">
                    (416) 454-3757
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['DM_Sans'] text-xs font-600 uppercase tracking-wider text-[#2B1A0F]/50 mb-1.5 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-['DM_Sans'] text-xs font-600 uppercase tracking-wider text-[#2B1A0F]/50 mb-1.5 block">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(416) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['DM_Sans'] text-xs font-600 uppercase tracking-wider text-[#2B1A0F]/50 mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-['DM_Sans'] text-xs font-600 uppercase tracking-wider text-[#2B1A0F]/50 mb-1.5 block">
                    Type of Alteration *
                  </label>
                  <select
                    name="alterationType"
                    required
                    value={formData.alterationType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {alterationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-['DM_Sans'] text-xs font-600 uppercase tracking-wider text-[#2B1A0F]/50 mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your alteration needs, timeline, or any questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center flex items-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="font-['DM_Sans'] text-xs text-[#2B1A0F]/40 text-center">
                  Or call us directly:{" "}
                  <a href="tel:4164543757" className="text-[#C4956A] hover:underline">
                    (416) 454-3757
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Right: Wedding dress image + contact info */}
          <div ref={imageRef} data-delay="150" className="reveal relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl mb-6">
              <img
                src={WEDDING_IMAGE}
                alt="Beautiful wedding dress ready for alteration"
                className="w-full h-[380px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B1A0F]/30" />
            </div>
            {/* Contact info card */}
            <div className="bg-[#F5EDE0] border border-[#E8DDD0] rounded-sm p-6">
              <h3 className="font-['Playfair_Display'] font-700 text-[#2B1A0F] text-lg mb-4">
                Prefer to call or visit?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#C4956A] text-lg mt-0.5">📞</span>
                  <div>
                    <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#2B1A0F]/40 mb-0.5">Phone</p>
                    <a href="tel:4164543757" className="font-['DM_Sans'] font-600 text-[#2B1A0F] hover:text-[#C4956A] transition-colors">
                      (416) 454-3757
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C4956A] text-lg mt-0.5">📍</span>
                  <div>
                    <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#2B1A0F]/40 mb-0.5">Address</p>
                    <a
                      href="https://maps.app.goo.gl/iZSE1TXskxK2GbfB7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['DM_Sans'] text-sm text-[#2B1A0F] hover:text-[#C4956A] transition-colors"
                    >
                      5205 Palomar Crescent<br />
                      Mississauga, ON L5R 2X2
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C4956A] text-lg mt-0.5">🕒</span>
                  <div>
                    <p className="font-['DM_Sans'] text-xs uppercase tracking-wider text-[#2B1A0F]/40 mb-0.5">Hours</p>
                    <p className="font-['DM_Sans'] text-sm text-[#2B1A0F]">Open 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

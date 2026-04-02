"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#reviews", label: "Reviews" },
    { href: "#market", label: "Market" },
    { href: "#events", label: "Events" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className={`font-serif text-xl md:text-2xl font-bold transition-colors ${scrolled ? "text-charcoal-800" : "text-white"}`}>
              Lake Roots
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-sage-400 ${scrolled ? "text-charcoal-600" : "text-white/90"}`}>
                {l.label}
              </a>
            ))}
            <a href="tel:8158936240" className="bg-sage-400 hover:bg-sage-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105">
              Call Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-charcoal-800" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-charcoal-800" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-charcoal-800" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-dark animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-white/90 text-lg font-medium py-2 hover:text-sage-300">
                {l.label}
              </a>
            ))}
            <a href="tel:8158936240" className="block bg-sage-400 text-white text-center px-5 py-3 rounded-full font-semibold mt-4">
              Call (815) 893-6240
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

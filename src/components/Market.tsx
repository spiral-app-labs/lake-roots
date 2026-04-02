"use client";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export default function Market() {
  const { ref, isVisible } = useInView();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="market" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80')",
          transform: `translateY(${(offset - 3000) * 0.15}px)`,
        }}
      />
      <div className="absolute inset-0 bg-sage-400/85" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`text-white/70 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Curated Collection
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl text-white font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              The Market
            </h2>
            <p className={`text-white/90 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Browse our hand-picked selection of local goods, artisanal products, specialty foods, and unique gifts.
              From locally sourced honey to premium pantry staples — find something special to take home.
            </p>
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {["Local Goods", "Artisanal Products", "Specialty Foods", "Gifts & More"].map((tag) => (
                <span key={tag} className="glass text-charcoal-800 px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Lake Roots Market"
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-dark text-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium">🛍️ New arrivals weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

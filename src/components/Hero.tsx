"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')",
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-sage-300 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Café • Market • Bar
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 animate-fade-in-up">
          Lake Roots
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Your Neighborhood Place for Everyday Moments
        </p>
        <p className="text-white/60 text-sm md:text-base mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          475 W Virginia Street, Crystal Lake, IL
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a href="#visit" className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            Visit Us
          </a>
          <a href="#menu" className="glass text-charcoal-800 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105">
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

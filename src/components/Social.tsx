"use client";
import { useInView } from "./useInView";

export default function Social() {
  const { ref, isVisible } = useInView();

  const images = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="text-center mb-12">
          <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Follow Along
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            @lakerootsco
          </h2>
          <p className={`text-charcoal-400 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Tag us in your Lake Roots moments
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 stagger-children ${isVisible ? "visible" : ""}`}>
          {images.map((img, i) => (
            <a
              key={i}
              href="http://instagram.com/lakerootsco"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img src={img} alt="Lake Roots Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-sage-400/0 group-hover:bg-sage-400/40 transition-colors flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">📸</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="http://instagram.com/lakerootsco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage-400 hover:text-sage-500 font-semibold transition-colors"
          >
            Follow us on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

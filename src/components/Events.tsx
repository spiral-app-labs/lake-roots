"use client";
import { useInView } from "./useInView";

export default function Events() {
  const { ref, isVisible } = useInView();

  return (
    <section id="events" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Private dining at Lake Roots"
                className="w-full h-80 md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Celebrate With Us
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Events & Private Dining
            </h2>
            <p className={`text-charcoal-500 text-lg leading-relaxed mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              From intimate gatherings to larger celebrations, Lake Roots is the perfect backdrop for your next event.
              Our warm, modern space adapts to your vision.
            </p>
            <ul className={`space-y-3 mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {["Private dining experiences", "Birthday celebrations", "Corporate events & meetings", "Custom catering menus"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal-600">
                  <span className="text-sage-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:events@lakerootscl.com"
              className={`inline-block bg-sage-400 hover:bg-sage-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              Inquire About Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

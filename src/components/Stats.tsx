"use client";
import { useInView } from "./useInView";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 4.8, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 107, suffix: "+", label: "5-Star Reviews", decimals: 0 },
  { value: 3, suffix: "", label: "Experiences in One", decimals: 0 },
  { value: 50, suffix: "+", label: "Menu Items", decimals: 0 },
];

export default function Stats() {
  const { ref, isVisible } = useInView();

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-charcoal-900/75" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="text-white/70 text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

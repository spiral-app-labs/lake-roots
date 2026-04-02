"use client";
import { useInView } from "./useInView";

const experiences = [
  {
    icon: "☕",
    title: "Café",
    description: "Start your day with craft coffee, fresh pastries, and a breakfast menu made with clean ingredients — avocado oil, tallow, all the good stuff.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    icon: "🛍️",
    title: "Market",
    description: "Browse our curated selection of local goods, artisanal products, specialty items, and take-home treats you won't find anywhere else.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80",
  },
  {
    icon: "🍸",
    title: "Bar",
    description: "As the sun sets, we transform into a full-service dinner destination with craft cocktails, wine, and a dinner menu that keeps you coming back.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
  },
];

export default function ThreeExperiences() {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Discover Lake Roots
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Three Experiences, One Roof
          </h2>
          <p className={`text-charcoal-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            From your morning latte to a night out with friends, Lake Roots has you covered every step of the way.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
          {experiences.map((exp) => (
            <div key={exp.title} className="group tilt-card rounded-2xl overflow-hidden shadow-lg bg-white">
              <div className="h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 text-center">
                <span className="text-4xl mb-4 block">{exp.icon}</span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-3">{exp.title}</h3>
                <p className="text-charcoal-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

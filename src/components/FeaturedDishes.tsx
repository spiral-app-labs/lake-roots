"use client";
import { useInView } from "./useInView";

const dishes = [
  {
    name: "Signature Smash Burger",
    price: "$18",
    description: "Two smashed patties, sharp cheddar, caramelized onion, LR sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    tag: "Fan Favorite",
  },
  {
    name: "Braised Short Rib",
    price: "$22",
    description: "Root vegetable purée, lake roots potatoes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tag: "Chef's Pick",
  },
  {
    name: "Cinnamon Roll French Toast",
    price: "$15",
    description: "Cinnamon roll, battered & grilled, cream cheese frosting",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
    tag: "Breakfast Star",
  },
  {
    name: "Charcuterie Board",
    price: "$27",
    description: "Artisanal cured meats, cheeses, fruit, local jams",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&q=80",
    tag: "Perfect to Share",
  },
];

export default function FeaturedDishes() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            From Our Kitchen
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Signature Dishes
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
          {dishes.map((dish) => (
            <div key={dish.name} className="tilt-card group rounded-2xl overflow-hidden shadow-lg bg-cream-50 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-sage-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {dish.tag}
                </span>
                <div className="absolute bottom-4 right-4 glass text-charcoal-800 text-lg font-bold px-3 py-1 rounded-lg">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-2">{dish.name}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useInView } from "./useInView";

const reviews = [
  {
    text: "Absolutely loved this place! It's exactly the kind of spot Crystal Lake has been missing! Great atmosphere, delicious food, and the perfect stop for a coffee, sandwich, or drink after a walk or beach day.",
    rating: 5,
  },
  {
    text: "Lake roots is amazing! Everything we tried was so tasty and light. This place is just what Crystal Lake needed! Our waitress was a gem and was super knowledgeable for it being the first week open.",
    rating: 5,
  },
  {
    text: "What a gem. The decor and design are modern and the dining area has tons of natural light. Service was outstanding. We went for lunch and the food was fresh and delicious. The market area had lots of interesting goodies.",
    rating: 5,
  },
  {
    text: "One of the best places in Crystal Lake for breakfast, lunch and dinner. Parking is not easy, but it's worth the little extra drive around the block.",
    rating: 5,
  },
  {
    text: "This place is awesome! Truly a unique part of CL that is perfect for those looking to grab n go, have a sit down meal, or connect over coffee on comfy chairs.",
    rating: 5,
  },
  {
    text: "One of our new favorite spots in Crystal Lake. We've been here for breakfast, lunch, and dinner, and everything has been excellent. The staff is attentive.",
    rating: 5,
  },
];

export default function Reviews() {
  const { ref, isVisible } = useInView();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            What People Say
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Loved by Our Community
          </h2>
        </div>

        {/* Featured review */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <div className="text-3xl mb-6 star-filled">★★★★★</div>
            <p className="font-serif text-xl md:text-2xl text-charcoal-700 italic leading-relaxed mb-6 transition-all duration-500">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-sage-400 w-8" : "bg-charcoal-200 hover:bg-charcoal-300"}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid of reviews */}
        <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
          {reviews.map((review, i) => (
            <div key={i} className="bg-cream-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="star-filled text-sm mb-3">★★★★★</div>
              <p className="text-charcoal-600 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
              <p className="text-sage-400 text-xs mt-3 font-semibold">— Google Review</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

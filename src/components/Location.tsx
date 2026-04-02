"use client";
import { useInView } from "./useInView";

const hours = [
  { day: "Monday", time: "7:00 AM – 3:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 9:00 PM" },
  { day: "Thursday", time: "7:00 AM – 11:00 PM" },
  { day: "Friday", time: "7:00 AM – 12:00 AM" },
  { day: "Saturday", time: "8:00 AM – 12:00 AM" },
  { day: "Sunday", time: "8:00 AM – 8:00 PM" },
];

export default function Location() {
  const { ref, isVisible } = useInView();
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="visit" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Find Us
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Visit Lake Roots
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className={`rounded-2xl overflow-hidden shadow-xl h-96 md:h-full min-h-[400px] transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.3!2d-88.318!3d42.241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE0JzI3LjYiTiA4OMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lake Roots Location"
            />
          </div>

          {/* Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">📍 Address</h3>
              <p className="text-charcoal-600 text-lg">475 W Virginia Street</p>
              <p className="text-charcoal-600 text-lg">Crystal Lake, IL 60014</p>
              <a href="https://maps.google.com/?q=475+W+Virginia+Street+Crystal+Lake+IL" target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-sage-500 font-medium mt-2 inline-block">
                Get Directions →
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">📞 Phone</h3>
              <a href="tel:8158936240" className="text-charcoal-600 text-lg hover:text-sage-400 transition-colors">
                (815) 893-6240
              </a>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">🕐 Hours</h3>
              <div className="space-y-2">
                {hours.map((h, i) => (
                  <div key={h.day} className={`flex justify-between py-2 px-3 rounded-lg ${i === dayIndex ? "bg-sage-50 font-semibold" : ""}`}>
                    <span className={i === dayIndex ? "text-sage-500" : "text-charcoal-600"}>{h.day}</span>
                    <span className={i === dayIndex ? "text-sage-500" : "text-charcoal-500"}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

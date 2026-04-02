"use client";
import { useInView } from "./useInView";

export default function InfoBar() {
  const { ref, isVisible } = useInView();

  const today = new Date().getDay();
  const hours = [
    "Closed", // shouldn't show
    "7:00 AM – 3:00 PM",
    "7:00 AM – 9:00 PM",
    "7:00 AM – 9:00 PM",
    "7:00 AM – 11:00 PM",
    "7:00 AM – 12:00 AM",
    "8:00 AM – 12:00 AM",
  ];
  const sundayHours = "8:00 AM – 8:00 PM";
  const todayHours = today === 0 ? sundayHours : hours[today] || "7:00 AM – 9:00 PM";

  return (
    <div ref={ref} className={`bg-sage-400 text-white transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>475 W Virginia St, Crystal Lake, IL</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🕐</span>
          <span>Today: {todayHours}</span>
        </div>
        <a href="tel:8158936240" className="flex items-center gap-2 hover:text-cream-100 transition-colors">
          <span>📞</span>
          <span>(815) 893-6240</span>
        </a>
      </div>
    </div>
  );
}

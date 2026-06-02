"use client";

import { useEffect, useRef } from "react";
import { ANON_REVIEWS } from "@/lib/data";

type Review = {
  quote: string;
  source: string;
};

export default function AnonReviewCarousel({ reviews = ANON_REVIEWS }: { reviews?: Review[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hoverPausedRef = useRef(false);
  const pausedUntilRef = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const speed = 60;
    let animationFrame = 0;
    let lastFrame = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - lastFrame) / 1000;
      lastFrame = now;

      if (!hoverPausedRef.current && now > pausedUntilRef.current) {
        scroller.scrollLeft += elapsed * speed;
        const halfWidth = scroller.scrollWidth / 2;
        if (scroller.scrollLeft >= halfWidth) {
          scroller.scrollLeft -= halfWidth;
        }
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const pauseBriefly = () => {
    pausedUntilRef.current = performance.now() + 4000;
  };

  return (
    <div className="relative -mx-4 mt-12 sm:-mx-6 lg:-mx-8">
      <div
        ref={scrollerRef}
        onMouseEnter={() => {
          hoverPausedRef.current = true;
        }}
        onMouseLeave={() => {
          hoverPausedRef.current = false;
        }}
        onPointerDown={pauseBriefly}
        onTouchStart={pauseBriefly}
        onWheel={pauseBriefly}
        className="no-scrollbar flex gap-4 overflow-x-auto px-12 py-2 sm:px-20"
        style={{ scrollbarWidth: "none" }}
        aria-label="Guest review carousel"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <article
            key={`${review.quote}-${index}`}
            className="w-[85vw] shrink-0 rounded-[1.25rem] border border-sage/10 bg-white p-6 shadow-[0_18px_45px_rgba(44,44,44,0.07)] md:w-[440px]"
          >
            <div className="text-sm tracking-[0.24em] text-wood" aria-label="5 star review">
              ★★★★★
            </div>
            <p className="mt-4 font-display text-2xl leading-snug text-charcoal">
              &ldquo;{review.quote}&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.26em] text-charcoal/50">{review.source}</p>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent sm:w-20" />
    </div>
  );
}

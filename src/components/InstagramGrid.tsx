"use client";

import { motion } from "framer-motion";
import { INSTAGRAM_POSTS } from "@/lib/data";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function InstagramGrid() {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Follow Along</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">@lakerootsco</h2>
          <p className="text-charcoal/60 mt-2">3,873 followers · 62 posts</p>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <a
                href="https://instagram.com/lakerootsco"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                >
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-4 text-white text-sm sm:text-base">
                      <span className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { INSTAGRAM_POSTS, LINKS } from "@/lib/data";

export default function InstagramGrid() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Follow Along</p>
          <h2 className="font-display text-4xl text-charcoal md:text-5xl">@lakerootsco</h2>
          <p className="mt-2 text-charcoal/60">Live happenings, menu peeks, market finds, and neighborhood moments from the real business feed.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-charcoal px-6 py-3 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-charcoal-light"
            >
              Open Instagram
            </a>
            <a
              href="https://lakerootscl.com/our-story"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal/15 px-6 py-3 text-sm uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-charcoal/35 hover:bg-white/70"
            >
              Read the story
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <a href={LINKS.instagramProfileCard} target="_blank" rel="noopener noreferrer" className="block">
                <div className="group relative aspect-square overflow-hidden rounded-[1.25rem] bg-charcoal/5">
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">Lake Roots</p>
                    <p className="mt-1 text-sm font-medium">{post.label}</p>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxImage from "@/components/ParallaxImage";

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=900&fit=crop"
          alt="Community"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-cream"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 mt-4 text-lg max-w-xl mx-auto"
          >
            A place built for the neighborhood, by the neighborhood
          </motion.p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-sage/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🌿</span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">From Rod & Janey</h2>
              </div>
              <blockquote className="text-charcoal/70 text-lg sm:text-xl leading-relaxed border-l-4 border-sage pl-6 sm:pl-8 italic">
                &ldquo;We&rsquo;ve always wanted a place like this to walk to, right here in this special corner of Crystal Lake, formerly home to the beloved Mr. A&rsquo;s Italian Beef, and the bridge between Main Beach and Downtown. Everyone involved in Lake Roots is local, and we truly built this for the neighborhood and the community we love.
                <br /><br />
                It&rsquo;s a cafe, market, and bar all in one — a spot for coffee, a meal, or drink with friends that brings fresh energy, great food, and a welcoming atmosphere that feels like home.&rdquo;
              </blockquote>
              <p className="mt-6 text-sage font-display text-xl">— Rod & Janey</p>
              <p className="text-charcoal/50 text-sm mt-1">Founders, Lake Roots Café Market & Bar</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">What We Believe</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏡", title: "Community First", desc: "Every decision we make starts with our neighborhood. We built Lake Roots for Crystal Lake, and it shows in everything from our staff to our sourcing." },
              { icon: "🌱", title: "Fresh & Local", desc: "We partner with local farms and makers to bring the freshest ingredients and products to your table and our market shelves." },
              { icon: "☕", title: "Three in One", desc: "Morning coffee, afternoon lunch, evening cocktails — or just stop by to browse the market. Lake Roots is whatever you need it to be." },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-cream/50 hover:bg-cream transition-colors duration-300">
                  <span className="text-5xl mb-6 block">{value.icon}</span>
                  <h3 className="font-display text-2xl text-charcoal mb-3">{value.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=600&fit=crop"
        alt="Cafe atmosphere"
        className="h-64 sm:h-80"
      >
        <div className="flex items-center justify-center h-64 sm:h-80 text-center px-4">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">The Bridge Between</h2>
            <p className="text-cream/70 text-lg">Main Beach & Downtown Crystal Lake</p>
          </div>
        </div>
      </ParallaxImage>

      {/* Stats */}
      <section className="py-16 bg-sage">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <AnimatedCounter end={4} suffix=".8" className="text-4xl font-display" />
            <p className="text-white/70 text-sm mt-2">★ Google Rating</p>
          </div>
          <div>
            <AnimatedCounter end={107} suffix="+" className="text-4xl font-display" />
            <p className="text-white/70 text-sm mt-2">Happy Reviews</p>
          </div>
          <div>
            <AnimatedCounter end={3873} className="text-4xl font-display" />
            <p className="text-white/70 text-sm mt-2">Instagram Family</p>
          </div>
          <div>
            <AnimatedCounter end={1575} className="text-4xl font-display" />
            <p className="text-white/70 text-sm mt-2">Facebook Likes</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Find Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-8">Come Say Hello</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-sage/10 inline-block">
              <p className="text-charcoal/70 text-lg mb-2">475 W Virginia Street</p>
              <p className="text-charcoal/70 text-lg mb-4">Crystal Lake, IL 60014</p>
              <a href="tel:8158936240" className="text-sage hover:text-sage-dark font-display text-2xl transition-colors block mb-4">
                (815) 893-6240
              </a>
              <div className="flex gap-4 justify-center">
                <a href="https://instagram.com/lakerootsco" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-sage transition-colors">
                  Instagram
                </a>
                <span className="text-charcoal/20">·</span>
                <a href="https://facebook.com/lakeroots" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-sage transition-colors">
                  Facebook
                </a>
                <span className="text-charcoal/20">·</span>
                <a href="mailto:events@lakerootscl.com" className="text-charcoal/40 hover:text-sage transition-colors">
                  Email
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

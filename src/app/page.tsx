"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxImage from "@/components/ParallaxImage";
import InstagramGrid from "@/components/InstagramGrid";
import TiltCard from "@/components/TiltCard";
import { HOURS, EVENTS } from "@/lib/data";

const heroImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop",
];

const experiences = [
  {
    icon: "☕",
    title: "Café",
    desc: "Counter-service breakfast & lunch with specialty coffee, pastries, and fresh-made dishes.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
  },
  {
    icon: "🍽️",
    title: "Dinner & Bar",
    desc: "Full-service dinner with craft cocktails, wine, and an elevated evening menu.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  },
  {
    icon: "🛍️",
    title: "Market",
    desc: "Curated local goods — artisanal sauces, kitchen wares, and everyday essentials.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[0]}
            alt="Lake Roots Café interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sage uppercase tracking-[0.4em] text-sm sm:text-base mb-4">
              Crystal Lake, Illinois
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-cream leading-[0.9] mb-6"
          >
            Lake Roots
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 text-cream/80 tracking-wide">
              Café · Market · Bar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          >
            Three experiences under one roof. Coffee to cocktails, breakfast to dinner, community to market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-sage/30"
            >
              View Menu
            </Link>
            <a
              href="tel:8158936240"
              className="border border-cream/30 hover:border-cream/60 text-cream px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:bg-cream/10"
            >
              Call to Reserve
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cream/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-sage py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <AnimatedCounter end={4} suffix=".8" className="text-3xl sm:text-4xl font-display" />
            <p className="text-sm text-white/70 mt-1">★ Rating</p>
          </div>
          <div>
            <AnimatedCounter end={107} suffix="+" className="text-3xl sm:text-4xl font-display" />
            <p className="text-sm text-white/70 mt-1">Reviews</p>
          </div>
          <div>
            <AnimatedCounter end={50} suffix="+" className="text-3xl sm:text-4xl font-display" />
            <p className="text-sm text-white/70 mt-1">Menu Items</p>
          </div>
          <div>
            <AnimatedCounter end={3873} className="text-3xl sm:text-4xl font-display" />
            <p className="text-sm text-white/70 mt-1">Followers</p>
          </div>
        </div>
      </section>

      {/* Three Experiences */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">What We Are</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Three Experiences, One Roof</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.15}>
                <TiltCard className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-4xl">{exp.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-charcoal mb-2">{exp.title}</h3>
                    <p className="text-charcoal/60 leading-relaxed">{exp.desc}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=600&fit=crop"
        alt="Food plating"
        className="h-64 sm:h-80"
      >
        <div className="flex items-center justify-center h-64 sm:h-80 text-center px-4">
          <div>
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">From Our Kitchen</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">Made with Love, Served with Soul</h2>
          </div>
        </div>
      </ParallaxImage>

      {/* Founder Story */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage/10 rounded-2xl -rotate-3" />
                <Image
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=700&fit=crop"
                  alt="Lake Roots community"
                  width={600}
                  height={700}
                  className="relative rounded-2xl shadow-xl object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <p className="text-sage uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">Built for the Neighborhood</h2>
              <blockquote className="text-charcoal/70 leading-relaxed text-lg border-l-4 border-sage pl-6 italic">
                &ldquo;We&rsquo;ve always wanted a place like this to walk to, right here in this special corner of Crystal Lake, formerly home to the beloved Mr. A&rsquo;s Italian Beef, and the bridge between Main Beach and Downtown. Everyone involved in Lake Roots is local, and we truly built this for the neighborhood and the community we love.&rdquo;
              </blockquote>
              <p className="mt-4 text-sage font-display text-lg">— Rod & Janey</p>
              <Link
                href="/our-story"
                className="inline-block mt-8 bg-sage hover:bg-sage-dark text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300"
              >
                Read Our Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">What&rsquo;s Happening</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Upcoming Events</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.1}>
                <TiltCard className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-500 h-full border border-sage/5">
                  <span className="text-4xl mb-4 block">{event.icon}</span>
                  <p className="text-sage text-sm font-semibold uppercase tracking-wider">{event.date}</p>
                  <h3 className="font-display text-xl text-charcoal mt-2 mb-2">{event.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{event.desc}</p>
                  <p className="text-sage/60 text-xs mt-3">{event.time}</p>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/events"
              className="inline-block border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300"
            >
              All Events
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Hours & Location */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop"
        alt="Restaurant ambiance"
        className="min-h-[500px]"
      >
        <div className="flex items-center justify-center min-h-[500px] px-4 py-16">
          <div className="glass rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-cream mb-8">Visit Us</h2>
            <div className="space-y-2 mb-8">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between text-cream/80 text-sm">
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-cream/20 pt-6">
              <p className="text-cream/80 text-sm">475 W Virginia Street</p>
              <p className="text-cream/80 text-sm">Crystal Lake, IL 60014</p>
              <a href="tel:8158936240" className="text-sage hover:text-sage-light text-lg font-display mt-3 block transition-colors">
                (815) 893-6240
              </a>
            </div>
          </div>
        </div>
      </ParallaxImage>

      {/* Instagram */}
      <InstagramGrid />
    </>
  );
}

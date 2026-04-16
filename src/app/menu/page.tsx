"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MenuCard from "@/components/MenuCard";
import {
  BREAKFAST_MENU, PASTRIES, LUNCH_MENU,
  DINNER_STARTERS, DINNER_BOARDS, DINNER_PINSAS,
  DINNER_BOWLS, DINNER_ENTREES, KIDS_MENU, DESSERTS, IMAGE_ASSETS,
} from "@/lib/data";

export default function MenuPage() {
  const [isDinner, setIsDinner] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGE_ASSETS.tasting}
          alt="Lake Roots dishes on the table"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-cream"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 mt-4 text-lg"
          >
            Fresh, local, made with love
          </motion.p>
        </div>
      </section>

      {/* Day/Night Toggle */}
      <section className="py-6 bg-white sticky top-16 sm:top-20 z-40 border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4">
          <span className={`text-sm uppercase tracking-wider transition-colors ${!isDinner ? "text-sage font-semibold" : "text-charcoal/40"}`}>
            ☀️ Breakfast & Lunch
          </span>
          <button
            onClick={() => setIsDinner(!isDinner)}
            className="relative w-16 h-8 rounded-full bg-sage/20 p-1 transition-colors"
            aria-label="Toggle day/night menu"
          >
            <motion.div
              animate={{ x: isDinner ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-sage shadow-md"
            />
          </button>
          <span className={`text-sm uppercase tracking-wider transition-colors ${isDinner ? "text-sage font-semibold" : "text-charcoal/40"}`}>
            🌙 Dinner
          </span>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!isDinner ? (
          <motion.div
            key="day"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Breakfast */}
            <section className="py-16 sm:py-20 bg-cream">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Until 4:00 PM</p>
                  <h2 className="font-display text-4xl md:text-5xl text-charcoal">Breakfast</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BREAKFAST_MENU.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.05}>
                      <MenuCard {...item} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Pastries */}
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-10">
                  <h2 className="font-display text-3xl md:text-4xl text-charcoal">Pastries</h2>
                  <p className="text-charcoal/60 mt-2">Rotating selection — baked fresh daily</p>
                </AnimatedSection>
                <div className="flex flex-wrap justify-center gap-3">
                  {PASTRIES.map((p, i) => (
                    <AnimatedSection key={p} delay={i * 0.05}>
                      <span className="bg-sage/10 text-charcoal px-4 py-2 rounded-full text-sm hover:bg-sage/20 transition-colors">
                        {p}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Lunch */}
            <section className="py-16 sm:py-20 bg-cream">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Until 4:00 PM</p>
                  <h2 className="font-display text-4xl md:text-5xl text-charcoal">Lunch</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {LUNCH_MENU.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.05}>
                      <MenuCard {...item} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="night"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Starters */}
            <section className="py-16 sm:py-20 bg-charcoal">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Starting at 4:00 PM</p>
                  <h2 className="font-display text-4xl md:text-5xl text-cream">Starters</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DINNER_STARTERS.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.05}>
                      <div className="bg-charcoal-light/50 rounded-xl p-5 border border-cream/10 hover:border-sage/30 transition-colors">
                        <div className="flex justify-between items-start gap-3">
                          <h3 className="font-display text-lg text-cream">{item.name}</h3>
                          <span className="text-sage font-semibold whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-cream/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Boards */}
            <section className="py-16 bg-charcoal/95">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <h2 className="font-display text-4xl md:text-5xl text-cream">Boards</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {DINNER_BOARDS.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.1}>
                      <div className="bg-charcoal-light/50 rounded-xl p-6 border border-cream/10 hover:border-sage/30 transition-colors text-center">
                        <h3 className="font-display text-xl text-cream">{item.name}</h3>
                        <span className="text-sage font-semibold text-lg block mt-2">{item.price}</span>
                        <p className="text-cream/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Pinsas */}
            <section className="py-16 bg-charcoal">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <h2 className="font-display text-4xl md:text-5xl text-cream">Pinsas</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {DINNER_PINSAS.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.1}>
                      <div className="bg-charcoal-light/50 rounded-xl p-5 border border-cream/10 hover:border-sage/30 transition-colors text-center">
                        <h3 className="font-display text-lg text-cream">{item.name}</h3>
                        <span className="text-sage font-semibold block mt-1">{item.price}</span>
                        <p className="text-cream/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Bowls & Salads */}
            <section className="py-16 bg-charcoal/95">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <h2 className="font-display text-4xl md:text-5xl text-cream">Bowls & Salads</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DINNER_BOWLS.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.1}>
                      <div className="bg-charcoal-light/50 rounded-xl p-5 border border-cream/10 hover:border-sage/30 transition-colors">
                        <div className="flex justify-between items-start gap-3">
                          <h3 className="font-display text-lg text-cream">{item.name}</h3>
                          <span className="text-sage font-semibold whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-cream/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Entrées */}
            <section className="py-16 bg-charcoal">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <h2 className="font-display text-4xl md:text-5xl text-cream">Entrées</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DINNER_ENTREES.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.05}>
                      <div className="bg-charcoal-light/50 rounded-xl p-5 border border-cream/10 hover:border-sage/30 transition-colors">
                        <div className="flex justify-between items-start gap-3">
                          <h3 className="font-display text-lg text-cream">{item.name}</h3>
                          <span className="text-sage font-semibold whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-cream/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Kids */}
            <section className="py-16 bg-charcoal/95">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <h2 className="font-display text-3xl md:text-4xl text-cream">🌱 Little Roots</h2>
                  <p className="text-cream/50 mt-2">Kids menu</p>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {KIDS_MENU.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.05}>
                      <div className="bg-charcoal-light/50 rounded-xl p-4 border border-cream/10 text-center">
                        <h3 className="text-cream text-sm">{item.name}</h3>
                        <span className="text-sage font-semibold text-sm">{item.price}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Desserts */}
            <section className="py-16 bg-charcoal">
              <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                  <h2 className="font-display text-3xl md:text-4xl text-cream">Desserts</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {DESSERTS.map((item, i) => (
                    <AnimatedSection key={item.name} delay={i * 0.1}>
                      <div className="bg-charcoal-light/50 rounded-xl p-5 border border-cream/10 text-center">
                        <h3 className="font-display text-lg text-cream">{item.name}</h3>
                        <p className="text-cream/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

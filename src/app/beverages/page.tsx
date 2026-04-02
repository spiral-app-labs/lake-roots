"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MenuCard from "@/components/MenuCard";
import TiltCard from "@/components/TiltCard";
import {
  COFFEE_MENU, ADDONS, TEA_MENU, REVIVERS, SMOOTHIES,
  LUNCH_COCKTAILS, DINNER_COCKTAILS, WINE_WHITE, WINE_ROSE, WINE_RED,
} from "@/lib/data";

export default function BeveragesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=800&fit=crop"
          alt="Coffee"
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
            Beverages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 mt-4 text-lg"
          >
            From espresso to espresso martini
          </motion.p>
        </div>
      </section>

      {/* Coffee */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">☕ Brewed Fresh</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Coffee</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {COFFEE_MENU.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.05}>
                <TiltCard className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow border border-sage/10">
                  <div className="flex justify-between items-center">
                    <h3 className="font-display text-lg text-charcoal">{item.name}</h3>
                    <span className="text-sage font-semibold text-sm">{item.price}</span>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-2xl text-charcoal">Customize Your Drink</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ADDONS.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.05}>
                <div className="flex justify-between items-center bg-sage/5 rounded-lg px-4 py-3">
                  <div>
                    <span className="font-medium text-charcoal">{item.name}</span>
                    {item.desc && <span className="text-charcoal/50 text-sm ml-2">— {item.desc}</span>}
                  </div>
                  <span className="text-sage font-semibold">{item.price}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tea & Non-Coffee */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">🍵 Warm & Iced</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Tea & More</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TEA_MENU.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.05}>
                <MenuCard name={item.name} price={item.price} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Revivers */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">⚡ Energy</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">Revivers</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {REVIVERS.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <TiltCard className="bg-gradient-to-br from-sage/10 to-sage/5 rounded-xl p-6 text-center border border-sage/10">
                  <h3 className="font-display text-xl text-charcoal">{item.name}</h3>
                  <span className="text-sage font-semibold block mt-2">{item.price}</span>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Smoothies */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">🥤 Blended</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">Smoothies</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SMOOTHIES.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <TiltCard className="bg-white rounded-xl p-5 text-center shadow-sm border border-sage/10">
                  <h3 className="font-display text-lg text-charcoal">{item.name}</h3>
                  <span className="text-sage font-semibold block mt-1">{item.price}</span>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cocktails */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">🍸 Handcrafted</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">Cocktails</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h3 className="font-display text-2xl text-cream mb-6 text-center">Lunch</h3>
              <div className="grid grid-cols-2 gap-3">
                {LUNCH_COCKTAILS.map((c, i) => (
                  <div key={c} className="bg-cream/5 rounded-lg p-3 text-center text-cream/80 text-sm hover:bg-cream/10 transition-colors border border-cream/5">
                    {c}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h3 className="font-display text-2xl text-cream mb-6 text-center">Dinner</h3>
              <div className="grid grid-cols-2 gap-3">
                {DINNER_COCKTAILS.map((c, i) => (
                  <div key={c} className="bg-cream/5 rounded-lg p-3 text-center text-cream/80 text-sm hover:bg-cream/10 transition-colors border border-cream/5">
                    {c}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Wine */}
      <section className="py-16 sm:py-20 bg-charcoal/95">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">🍷 Curated</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">Wine & Sparkling</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <h3 className="font-display text-xl text-sage mb-4 text-center">White</h3>
              <div className="space-y-2">
                {WINE_WHITE.map((w) => (
                  <div key={w} className="bg-cream/5 rounded-lg p-3 text-cream/80 text-sm text-center border border-cream/5">{w}</div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="font-display text-xl text-sage mb-4 text-center">Rosé & Sparkling</h3>
              <div className="space-y-2">
                {WINE_ROSE.map((w) => (
                  <div key={w} className="bg-cream/5 rounded-lg p-3 text-cream/80 text-sm text-center border border-cream/5">{w}</div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="font-display text-xl text-sage mb-4 text-center">Red</h3>
              <div className="space-y-2">
                {WINE_RED.map((w) => (
                  <div key={w} className="bg-cream/5 rounded-lg p-3 text-cream/80 text-sm text-center border border-cream/5">{w}</div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

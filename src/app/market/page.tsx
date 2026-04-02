"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";

const marketItems = [
  { name: "Old Arthur's BBQ Sauce", desc: "Authentic, bold BBQ sauce — a local favorite", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=500&fit=crop", category: "Sauces" },
  { name: "Geometry Kitchen Tea Towels", desc: "Beautiful, functional kitchen textiles from a local maker", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop", category: "Kitchen" },
  { name: "Local Jams & Preserves", desc: "Small-batch jams and preserves from Illinois farms", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&h=500&fit=crop", category: "Pantry" },
  { name: "Artisanal Sauces", desc: "Handcrafted sauces and condiments from local makers", img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&h=500&fit=crop", category: "Sauces" },
  { name: "Specialty Coffee Beans", desc: "Freshly roasted beans from our featured roasters", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop", category: "Coffee" },
  { name: "Local Honey", desc: "Pure, raw honey from Crystal Lake area beekeepers", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=500&fit=crop", category: "Pantry" },
];

export default function MarketPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=800&fit=crop"
          alt="Market shelves"
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
            The Market
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 mt-4 text-lg max-w-2xl mx-auto"
          >
            Local goods, community-driven. Supporting Crystal Lake farms and makers.
          </motion.p>
        </div>
      </section>

      {/* Market Intro */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-sage/10">
              <span className="text-5xl mb-6 block">🛍️</span>
              <p className="text-charcoal/70 text-lg leading-relaxed italic font-display">
                &ldquo;At Lake Roots, we keep things fresh, local, and community-driven. Our market brings together some of the best local goods in Crystal Lake. Stock up on everyday essentials or discover something new, all while supporting local farms and makers.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Market Items */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Shop Local</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Featured Products</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketItems.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <TiltCard className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-sage text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-charcoal mb-2">{item.name}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 sm:py-20 bg-sage">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Want Your Product in Our Market?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              We&rsquo;re always looking for new local products to feature. If you&rsquo;re a maker, farmer, or artisan, let&rsquo;s talk.
            </p>
            <a
              href="mailto:events@lakerootscl.com"
              className="inline-block bg-white text-sage px-8 py-3.5 rounded-full text-sm uppercase tracking-wider hover:bg-cream transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

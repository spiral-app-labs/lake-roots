"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import { EVENTS } from "@/lib/data";

const partnerPaths = [
  { icon: "🤝", title: "Community Collaborations", desc: "Partner with us for fundraisers, pop-ups, or community events in our space." },
  { icon: "🎵", title: "Musician, Artist & Author Inquiries", desc: "Perform live music, host an art show, or do a book signing at Lake Roots." },
  { icon: "🛍️", title: "Products in Our Market", desc: "Feature your locally made products on our market shelves." },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=800&fit=crop"
          alt="Events"
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
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 mt-4 text-lg"
          >
            What&rsquo;s happening at Lake Roots
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Mark Your Calendar</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Upcoming Events</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.1}>
                <TiltCard className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl flex-shrink-0">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-sage/10 text-sage text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                            {event.date}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl text-charcoal mb-2">{event.title}</h3>
                        <p className="text-charcoal/60 leading-relaxed mb-3">{event.desc}</p>
                        <p className="text-sage text-sm font-semibold">{event.time}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Host With Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">Private Events & Catering</h2>
            <p className="text-charcoal/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              From intimate dinners to celebration parties, Lake Roots is the perfect venue.
              Let us help you plan an unforgettable event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.toasttab.com/invoice/lead?rx=3477ef2e-ca38-4b67-a8d3-b0ad50fce024&ot=49621c33-4543-4944-bca0-30c0ac6b4c8d"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300"
              >
                Book a Party
              </a>
              <a
                href="https://www.toasttab.com/invoice/lead?rx=3477ef2e-ca38-4b67-a8d3-b0ad50fce024&ot=45774fc6-5674-4347-9ff0-8460700a4161"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300"
              >
                Catering Inquiry
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage uppercase tracking-[0.3em] text-sm mb-2">Collaborate</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Partner With Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerPaths.map((path, i) => (
              <AnimatedSection key={path.title} delay={i * 0.1}>
                <TiltCard className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-500 h-full text-center">
                  <span className="text-5xl block mb-4">{path.icon}</span>
                  <h3 className="font-display text-xl text-charcoal mb-3">{path.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{path.desc}</p>
                  <a
                    href="mailto:events@lakerootscl.com"
                    className="text-sage hover:text-sage-dark text-sm font-semibold uppercase tracking-wider transition-colors"
                  >
                    Inquire →
                  </a>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import InstagramGrid from "@/components/InstagramGrid";
import { CONTACT, HOURS, IMAGE_ASSETS, LINKS, NO_RESERVATIONS_NOTE, PROOF_POINTS } from "@/lib/data";

const serviceMoments = [
  {
    eyebrow: "Morning",
    title: "Coffee, pastries, and breakfast worth walking over for.",
    copy:
      "Start the day with espresso, house favorites, and a counter-service breakfast that feels easy enough for weekdays and special enough for weekends.",
  },
  {
    eyebrow: "Midday",
    title: "Lunch, market shelves, and a neighborhood stop that fits real life.",
    copy:
      "Come through for sandwiches, bowls, pastries to-go, and a market stocked with local goods, pantry finds, and gifts that keep the visit going after the meal.",
  },
  {
    eyebrow: "Evening",
    title: "Dinner and cocktails without losing the local warmth.",
    copy:
      "As the day shifts, Lake Roots turns into a full-service dinner and bar destination with shareable plates, dinner entrees, and cocktails built for lingering.",
  },
];

const trustPoints = [
  "Built by locals for Crystal Lake",
  "Walk-ins always welcome",
  "Breakfast, lunch, dinner, bar, and market under one roof",
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-cream sm:pt-32">
        <Image
          src={IMAGE_ASSETS.hero}
          alt="Lake Roots dining room in Crystal Lake"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,27,27,0.78),rgba(27,27,27,0.52),rgba(27,27,27,0.86))]" />

        <div className="relative mx-auto grid min-h-[82svh] max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8 lg:pb-24">
          <AnimatedSection className="flex max-w-4xl flex-col justify-center py-10">
            <p className="mb-5 text-sm uppercase tracking-[0.38em] text-sage-light">Crystal Lake, Illinois</p>
            <h1 className="font-display text-5xl leading-[0.92] sm:text-7xl lg:text-[5.5rem]">
              Your neighborhood place for everyday moments.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/78 sm:text-xl">
              Lake Roots brings together a cozy cafe, a community-driven market, and a lively dinner-and-cocktail room in the stretch between Main Beach and Downtown Crystal Lake.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/menu"
                className="rounded-full bg-sage px-8 py-3.5 text-center text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-sage-dark"
              >
                Explore Menus
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-cream/30 px-8 py-3.5 text-center text-sm uppercase tracking-[0.22em] text-cream transition-colors hover:border-cream/55 hover:bg-white/10"
              >
                Walk In Today
              </a>
              <a
                href={LINKS.parties}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-transparent bg-white/10 px-8 py-3.5 text-center text-sm uppercase tracking-[0.22em] text-cream transition-colors hover:bg-white/18"
              >
                Host a Party
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cream/78"
                >
                  {point}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="self-end lg:self-center" delay={0.15}>
            <div className="rounded-[2rem] border border-white/14 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.32em] text-sage-light">Plan Your Visit</p>
              <h2 className="mt-3 font-display text-3xl text-cream">No reservations needed.</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/76">{NO_RESERVATIONS_NOTE}</p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {HOURS.map((entry) => (
                  <div key={entry.day} className="flex items-center justify-between text-sm text-cream/78">
                    <span>{entry.day}</span>
                    <span>{entry.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-cream/78">
                <p>{CONTACT.addressLine1}</p>
                <p>{CONTACT.addressLine2}</p>
                <a href={CONTACT.phoneHref} className="mt-3 block text-lg text-sage-light transition-colors hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-sage/10 bg-cream-dark py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-center text-sm uppercase tracking-[0.28em] text-charcoal/70 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <span>Breakfast + lunch by day</span>
          <span>Full-service dinner + cocktails by night</span>
          <span>Local market shelves all week</span>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 max-w-3xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Chosen Archetype: Cuisine</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">A warm, practical site with real neighborhood gravity.</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
              Lake Roots works when the site is easy to navigate, emotionally local, and grounded in how the place actually runs. This pass leans into that instead of generic lifestyle polish.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-3">
            {serviceMoments.map((moment, index) => (
              <AnimatedSection key={moment.eyebrow} delay={index * 0.12}>
                <article className="h-full rounded-[1.75rem] border border-sage/10 bg-white p-7 shadow-[0_20px_50px_rgba(44,44,44,0.06)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-sage">{moment.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl text-charcoal">{moment.title}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/66">{moment.copy}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={IMAGE_ASSETS.founders}
                alt="Rod and Janey at Lake Roots"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col justify-center" delay={0.12}>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Built for Crystal Lake</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">Rod and Janey built the place they wanted to walk to.</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
              Formerly home to Mr. A&apos;s Italian Beef, this corner between Main Beach and Downtown now belongs to a local cafe-market-bar built around neighborly connection, fresh food, and the kinds of rituals that make a place stick.
            </p>
            <blockquote className="mt-6 border-l-4 border-sage pl-6 font-display text-2xl leading-relaxed text-charcoal">
              &ldquo;Everyone involved in Lake Roots is local, and we truly built this for the neighborhood and the community we love.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/our-story"
                className="rounded-full bg-charcoal px-7 py-3 text-center text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-charcoal-light"
              >
                Read Our Story
              </Link>
              <a
                href={LINKS.collaborations}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-charcoal/15 px-7 py-3 text-center text-sm uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-charcoal/35 hover:bg-cream-dark"
              >
                Community Collaborations
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Grounded Proof</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">The strongest sell is what the town can already verify.</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
              Lake Roots does not need inflated counters to feel trusted. The better story is already public: local founders, an opening covered by neighborhood news, and enough demand that the city has had to react to overflow parking.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-3">
            {PROOF_POINTS.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 0.1}>
                <a
                  href={point.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-[1.75rem] border border-sage/10 bg-white p-7 shadow-[0_20px_50px_rgba(44,44,44,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-sage">{point.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl text-charcoal">{point.title}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/66">{point.copy}</p>
                  <p className="mt-8 text-xs uppercase tracking-[0.26em] text-charcoal/48">Source: {point.source}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-24 text-cream">
        <Image
          src={IMAGE_ASSETS.dinner}
          alt="Dinner service at Lake Roots"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/68" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <AnimatedSection>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage-light">Events + Gatherings</p>
            <h2 className="font-display text-4xl md:text-5xl">Use the real paths, not a fake events calendar.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/75">
              Lake Roots already has trusted ways to book catering, host a party, and submit collaboration ideas. This site now sends people straight to those verified routes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={LINKS.parties} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/12 bg-white/10 p-6 transition-colors hover:bg-white/16">
                <p className="text-xs uppercase tracking-[0.24em] text-sage-light">Private Events</p>
                <h3 className="mt-3 font-display text-3xl">Host your party at Lake Roots</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/74">Send guests to the real private-events flow used by the live business.</p>
              </a>
              <a href={LINKS.catering} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/12 bg-white/10 p-6 transition-colors hover:bg-white/16">
                <p className="text-xs uppercase tracking-[0.24em] text-sage-light">Catering</p>
                <h3 className="mt-3 font-display text-3xl">Bring Lake Roots to the table</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/74">Use the verified catering inquiry instead of a generic contact fallback.</p>
              </a>
              <a href={LINKS.artistInquiries} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/12 bg-white/10 p-6 transition-colors hover:bg-white/16">
                <p className="text-xs uppercase tracking-[0.24em] text-sage-light">Artists + Authors</p>
                <h3 className="mt-3 font-display text-3xl">Bring something to the room</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/74">Lake Roots keeps dedicated inquiry paths for musicians, artists, and authors.</p>
              </a>
              <Link href="/events" className="rounded-[1.5rem] border border-white/12 bg-sage/22 p-6 transition-colors hover:bg-sage/30">
                <p className="text-xs uppercase tracking-[0.24em] text-sage-light">See More</p>
                <h3 className="mt-3 font-display text-3xl">Events page</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/78">Browse the current inquiry options and follow Lake Roots for live weekly happenings.</p>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <InstagramGrid />
    </>
  );
}

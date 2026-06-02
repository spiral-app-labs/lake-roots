"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT, IMAGE_ASSETS, LINKS, NO_RESERVATIONS_NOTE } from "@/lib/data";

const collaborationPaths = [
  {
    title: "Community collaborations",
    copy: "Fundraisers, pop-ups, and neighborhood partnerships have a dedicated submission path on the live business site.",
    href: LINKS.collaborations,
    label: "Open collaboration form",
  },
  {
    title: "Musician, artist + author inquiries",
    copy: "Lake Roots already invites live music, author events, and art-driven community moments through its published Google Form.",
    href: LINKS.artistInquiries,
    label: "Open artist inquiry form",
  },
  {
    title: "Products in our market",
    copy: "Local makers can pitch the market directly through the same form the live business uses today.",
    href: LINKS.marketSubmissions,
    label: "Open market submission form",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-cream sm:pt-32">
        <Image
          src={IMAGE_ASSETS.dinner}
          alt="Guests enjoying dinner and drinks at Lake Roots"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/72" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sage-light">Events + Gatherings</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl">Host, collaborate, or follow along.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-cream/76">
              Lake Roots does not need a made-up events calendar to convert. The strongest version of this page is an honest one: send people to the real inquiry flows and point them to Instagram for live weekly happenings.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-[1.75rem] border border-sage/10 bg-white p-8 shadow-[0_20px_50px_rgba(44,44,44,0.06)]">
                <p className="text-sm uppercase tracking-[0.3em] text-sage">Upcoming at Lake Roots</p>
                <h2 className="mt-4 font-display text-4xl text-charcoal">Follow the live channels for current happenings.</h2>
                <p className="mt-4 leading-relaxed text-charcoal/68">
                  Specials, pop-ups, and one-off events move quickly. Rather than leaving stale listings on the site, Lake Roots points guests to the channels that stay fresh.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={LINKS.instagramProfileCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-sage px-7 py-3 text-center text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-sage-dark"
                  >
                    Follow @lakerootsco
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="rounded-full border border-charcoal/15 px-7 py-3 text-center text-sm uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-charcoal/35 hover:bg-cream-dark"
                  >
                    Call This Week
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="h-full rounded-[1.75rem] border border-sage/10 bg-charcoal p-8 text-cream shadow-[0_20px_50px_rgba(44,44,44,0.08)]">
                <p className="text-sm uppercase tracking-[0.3em] text-sage-light">Large Groups</p>
                <h2 className="mt-4 font-display text-4xl">Private events, catering, and walk-in dining.</h2>
                <p className="mt-4 leading-relaxed text-cream/72">
                  {NO_RESERVATIONS_NOTE} For larger groups, parties, or catered gatherings, the business already uses verified inquiry links that guests can trust.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a href={LINKS.parties} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 transition-colors hover:bg-white/14">
                    <p className="text-xs uppercase tracking-[0.24em] text-sage-light">Private Events</p>
                    <p className="mt-3 font-display text-2xl">Book a party</p>
                  </a>
                  <a href={LINKS.catering} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 transition-colors hover:bg-white/14">
                    <p className="text-xs uppercase tracking-[0.24em] text-sage-light">Catering</p>
                    <p className="mt-3 font-display text-2xl">Start a catering inquiry</p>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Host + Collaborate</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">Real inquiry paths for the things owners actually care about.</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/68">
              This page now reflects the live business model: local collaborations, cultural programming, market submissions, and group dining all route to actual forms instead of generic contact forms.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {collaborationPaths.map((path, index) => (
              <AnimatedSection key={path.title} delay={index * 0.1}>
                <a
                  href={path.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-[1.5rem] border border-sage/10 bg-cream p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-sm uppercase tracking-[0.26em] text-sage">Verified Flow</p>
                  <h3 className="mt-4 font-display text-3xl text-charcoal">{path.title}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/66">{path.copy}</p>
                  <p className="mt-8 text-sm uppercase tracking-[0.22em] text-charcoal">{path.label}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

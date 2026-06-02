"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT, IMAGE_ASSETS, LINKS } from "@/lib/data";

const storyPoints = [
  {
    title: "Deep local roots",
    copy: "The founders are explicit about being locals, and that shows up in the tone of the business, the people behind it, and the way the place is positioned in Crystal Lake.",
  },
  {
    title: "A real place in the neighborhood",
    copy: "Lake Roots sits in the bridge between Main Beach and Downtown, giving the story a concrete local anchor instead of generic lifestyle language.",
  },
  {
    title: "Built for everyday rituals",
    copy: "The idea is not just one special dinner. It is coffee runs, lunch stops, dinner plans, market browsing, and a place people can keep returning to throughout the week.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-cream sm:pt-32">
        <Image
          src={IMAGE_ASSETS.founders}
          alt="Rod and Janey at Lake Roots"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/68" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sage-light">Our Story</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl">Built for the neighborhood, by the neighborhood.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-cream/76">
              The strongest version of Lake Roots is not anonymous or over-polished. It is local, founder-led, and tied to the everyday moments people in Crystal Lake actually want a place for.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-sage/10 bg-white p-8 shadow-[0_20px_50px_rgba(44,44,44,0.06)] sm:p-12">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sage">From Rod + Janey</p>
              <blockquote className="font-display text-3xl leading-relaxed text-charcoal md:text-[2.35rem]">
                &ldquo;We&apos;ve always wanted a place like this to walk to, right here in this special corner of Crystal Lake, formerly home to the beloved Mr. A&apos;s Italian Beef, and the bridge between Main Beach and Downtown.&rdquo;
              </blockquote>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/68">
                Everyone involved in Lake Roots is local, and the space was built to feel welcoming enough for coffee, lunch, dinner, drinks, and the kinds of shared moments that keep a neighborhood spot alive.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Why It Lands</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">The story works because it is specific.</h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {storyPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 0.1}>
                <article className="h-full rounded-[1.5rem] border border-sage/10 bg-cream p-7">
                  <p className="text-sm uppercase tracking-[0.26em] text-sage">Neighborhood Signal</p>
                  <h3 className="mt-4 font-display text-3xl text-charcoal">{point.title}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/66">{point.copy}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <AnimatedSection>
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src={IMAGE_ASSETS.hero}
                alt="Lake Roots interior"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col justify-center" delay={0.12}>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Find Us</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">The bridge between Main Beach and Downtown.</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/68">
              That local positioning is one of the reasons the brand sticks. It gives guests a clear mental map and tells owners this redesign understands the real role the business plays in Crystal Lake.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-sage/10 bg-white p-6 text-charcoal">
              <p>{CONTACT.addressLine1}</p>
              <p>{CONTACT.addressLine2}</p>
              <a href={CONTACT.phoneHref} className="mt-3 block font-display text-2xl text-sage transition-colors hover:text-sage-dark">
                {CONTACT.phoneDisplay}
              </a>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-charcoal/70">
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sage">Instagram</a>
                <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sage">Facebook</a>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-sage">Email</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

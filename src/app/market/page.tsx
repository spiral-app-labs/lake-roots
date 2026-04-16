"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { IMAGE_ASSETS, LINKS } from "@/lib/data";

const marketCategories = [
  {
    title: "Pantry + take-home favorites",
    copy: "The shelves are built for the things people actually grab after lunch or on the way home: sauces, pantry staples, and small finds that keep the neighborhood feel going past the meal.",
  },
  {
    title: "Local maker gifts",
    copy: "Lake Roots uses the market to spotlight community-made goods, giftable items, and products that feel tied to Crystal Lake rather than a generic retail add-on.",
  },
  {
    title: "Seasonal market moments",
    copy: "The mix changes with what is new, fresh, and timely, giving regulars a reason to pop in even when they are only stopping through for coffee or a quick browse.",
  },
];

export default function MarketPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-cream sm:pt-32">
        <Image
          src={IMAGE_ASSETS.marketShelves}
          alt="Market shelves at Lake Roots"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sage-light">The Market</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl">A market built around shelves, makers, and neighborhood habits.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-cream/76">
              The market works best when it feels like a real extension of Lake Roots, not a fake e-commerce catalog. This page now sells the experience honestly: browse, discover, take something local home.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <AnimatedSection className="flex flex-col justify-center">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">Why It Matters</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">The market keeps Lake Roots useful between meals.</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/68">
              It gives regulars a reason to stop in on the way home, brings local makers into the brand story, and turns the cafe into a place people return to for more than one reason.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/66">
              Instead of pretending there is a stable boutique catalog, this page points to what is true: locally driven products, a changing shelf, and a simple path for makers who want to be part of it.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src={IMAGE_ASSETS.tasting}
                alt="Table spread at Lake Roots"
                width={1200}
                height={1800}
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage">What You&apos;ll Find</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">More maker-driven, less pseudo-catalog polish.</h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {marketCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <article className="h-full rounded-[1.5rem] border border-sage/10 bg-cream p-7 shadow-[0_18px_50px_rgba(44,44,44,0.05)]">
                  <p className="text-sm uppercase tracking-[0.26em] text-sage">Market Category</p>
                  <h3 className="mt-4 font-display text-3xl text-charcoal">{category.title}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/66">{category.copy}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sage-light">For Local Makers</p>
            <h2 className="font-display text-4xl md:text-5xl">Want your product on the shelves?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cream/74">
              Lake Roots already publishes a dedicated submission form for makers and product partners. This page now sends people there directly instead of downgrading the flow into a generic email link.
            </p>
            <a
              href={LINKS.marketSubmissions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-sage px-8 py-3.5 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-sage-dark"
            >
              Submit a Product
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

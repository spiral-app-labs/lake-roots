"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_ASSETS, LINKS } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/beverages", label: "Beverages" },
  { href: "/market", label: "Market" },
  { href: "/events", label: "Events" },
  { href: "/our-story", label: "Our Story" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-charcoal/78 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group">
            <Image
              src={BRAND_ASSETS.logoLight}
              alt="Lake Roots"
              width={180}
              height={48}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-cream/80 hover:text-sage text-sm uppercase tracking-widest transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href={LINKS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-sage-dark transition-colors"
            >
              Gift Cards
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-cream"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-cream"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-cream"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-dark"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/80 hover:text-sage text-lg tracking-wide transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={LINKS.giftCards}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider text-center hover:bg-sage-dark transition-colors mt-2"
              >
                Gift Cards
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

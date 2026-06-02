"use client";

import Link from "next/link";
import { CONTACT, LINKS } from "@/lib/data";

const actions = [
  { label: "Menu", href: "/menu", internal: true },
  { label: "Call", href: CONTACT.phoneHref },
  { label: "Directions", href: LINKS.directions },
  { label: "Events", href: "/events", internal: true },
];

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-cream/96 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_32px_rgba(44,44,44,0.12)] backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {actions.map((action) =>
          action.internal ? (
            <Link
              key={action.label}
              href={action.href}
              className="flex min-h-[44px] items-center justify-center rounded-full bg-charcoal px-2 py-3 text-center text-[0.68rem] font-semibold uppercase leading-none tracking-[0.12em] text-cream"
            >
              {action.label}
            </Link>
          ) : (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex min-h-[44px] items-center justify-center rounded-full bg-sage px-2 py-3 text-center text-[0.68rem] font-semibold uppercase leading-none tracking-[0.12em] text-white"
            >
              {action.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}

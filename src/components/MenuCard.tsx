"use client";

import TiltCard from "./TiltCard";

interface Props {
  name: string;
  price: string;
  desc?: string;
}

export default function MenuCard({ name, price, desc }: Props) {
  return (
    <TiltCard className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-sage/10">
      <div className="flex justify-between items-start gap-3">
        <h3 className="font-display text-lg text-charcoal">{name}</h3>
        <span className="text-sage font-semibold whitespace-nowrap">{price}</span>
      </div>
      {desc && <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{desc}</p>}
    </TiltCard>
  );
}

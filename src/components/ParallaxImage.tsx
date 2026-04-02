"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.3, overlay = true, children }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      </motion.div>
      {overlay && <div className="absolute inset-0 bg-charcoal/50" />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

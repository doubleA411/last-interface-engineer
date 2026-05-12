"use client";

import { motion } from "framer-motion";

const links = [
  { label: "aakashsuresh62@gmail.com", href: "mailto:aakashsuresh62@gmail.com" },
  { label: "linkedin",  href: "https://www.linkedin.com/in/aakashsuresh62" },
  { label: "github",    href: "https://github.com/doubleA411" },
  { label: "agentflow", href: "https://agent-flow-lime.vercel.app/landing" },
];

export default function ContactSection() {
  return (
    <section className="bg-white py-28 px-8 flex flex-col items-center text-center">
      <motion.h2
        className="font-mondwest text-[#525252] text-[clamp(2rem,4.5vw,4rem)] leading-tight mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        Found Something Interesting?
      </motion.h2>

      <motion.p
        className="font-mondwest text-[#525252] text-[clamp(1.1rem,2vw,2rem)] mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.1 }}
      >
        Let&apos;s build something worth shipping.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-mondwest text-[#525252] text-[clamp(0.85rem,1.4vw,1.75rem)] hover:text-black transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 22, delay: 0.2 + i * 0.07 }}
          >
            [ {l.label} ]
          </motion.a>
        ))}
      </div>
    </section>
  );
}

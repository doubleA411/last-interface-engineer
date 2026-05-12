"use client";

import { motion } from "framer-motion";
import { ASSETS, type Sticker } from "@/lib/assets";

function StickerImg({ s, index }: { s: Sticker; index: number }) {
  const width = s.size ?? s.w ?? 120;
  const height = s.tall ?? s.h ?? s.size ?? 120;
  return (
    <motion.div
      className="absolute hidden lg:block pointer-events-none"
      style={{ top: s.top, left: s.left, right: s.right }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 14,
        delay: 0.1 + index * 0.07,
      }}
    >
      <img
        src={s.src}
        alt=""
        className="drop-shadow-xl"
        style={{
          width,
          height,
          transform: s.rotate ? `rotate(${s.rotate})` : undefined,
          borderRadius: s.round ? "50%" : undefined,
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    /* overflow-visible so stickers at negative offsets clear the hero boundary */
    <section className="relative bg-white py-32" style={{ overflow: "visible" }}>
      {ASSETS.stickers.map((s, i) => (
        <StickerImg key={i} s={s} index={i} />
      ))}

      <div className="max-w-3xl mx-auto px-8 text-center">
        <motion.h2
          className="font-mondwest text-black text-[clamp(2rem,4vw,3rem)] mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          Aakash Suresh
        </motion.h2>

        <motion.p
          className="font-mondwest text-black text-[clamp(1rem,1.6vw,1.5rem)] leading-relaxed mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.15 }}
        >
          Fullstack engineer — React, Node.js, FastAPI — 2 years shipping at
          scale. Now building AI agents, orchestration systems, and the
          interfaces that control them.
        </motion.p>
      </div>
    </section>
  );
}

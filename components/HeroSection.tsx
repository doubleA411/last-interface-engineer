"use client";

import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={ASSETS.heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[10vh]">
        <motion.h1
          className="font-mondwest text-white text-[clamp(1.6rem,5vw,4rem)] text-center leading-tight px-6"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.25 }}
        >
          The Last Interface Engineer
        </motion.h1>
      </div>
    </section>
  );
}

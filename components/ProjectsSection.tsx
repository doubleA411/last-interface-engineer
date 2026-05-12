"use client";

import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

const projects = [
  {
    number: "01",
    name: "AgentFlow",
    description: "Multi-agent orchestration platform",
    offset: "ml-[8%]",
  },
  {
    number: "02",
    name: "Friendly Neighbourhood",
    description: "Hyperlocal mutual-aid app with real-time chat + GPS feed",
    offset: "ml-0",
  },
  {
    number: "03",
    name: "AI Context Sentinel",
    description: "IDE sync CLI for Claude + Cursor",
    offset: "ml-[5%]",
  },
  {
    number: "04",
    name: "wrap-it",
    description: "Spotify Wrapped for your Git year · Published on npm",
    offset: "ml-[2%]",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={ASSETS.projectsBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left — quote */}
        <div className="flex-1 flex flex-col justify-end p-6 sm:p-10 lg:p-16 pb-8 lg:pb-24">
          <motion.p
            className="font-mondwest text-white text-[clamp(1rem,2.2vw,2rem)] leading-snug max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            Every great system starts with someone who refused to accept the
            tools that existed.
          </motion.p>
        </div>

        {/* Right — projects */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-12 lg:py-24 gap-3">
          <motion.p
            className="font-neuebit text-white/75 text-lg sm:text-2xl lg:text-3xl uppercase tracking-widest self-end mb-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            Projects
          </motion.p>

          {projects.map((p, i) => (
            <motion.div
              key={p.number}
              className={`
                ${p.offset}
                rounded-2xl p-4 sm:p-5 cursor-pointer
                bg-white/[0.1] backdrop-blur-2xl
                border border-white/[0.18]
                shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.25)]
                hover:bg-white/[0.18] hover:border-white/30
                transition-colors duration-300
              `}
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.08 + i * 0.1 }}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 20 } }}
            >
              <p className="font-mondwest text-[#525252] text-[clamp(1.1rem,2.2vw,2.6rem)] leading-none">
                {p.number} — {p.name}
              </p>
              <p
                className="font-dm-sans font-normal text-[#525252] text-[clamp(0.75rem,1.2vw,1.25rem)] mt-1 sm:mt-2"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

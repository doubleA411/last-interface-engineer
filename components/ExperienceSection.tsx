"use client";

import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

const bullets = [
  "→ Owned full-stack delivery of the public-review product area across multi-tenant environments",
  "→ Built React dashboards with sentiment analysis, keyword extraction and location-level metrics",
  "→ Shipped email campaign flows end to end — cut edge-case failures by ~40%",
  "→ Led Cursor/Claude initiative grounded on real repo context — raised team engineering velocity",
  "→ Reduced production regression rate by ~30% through hardened API–UI alignment",
];

const stack = [
  { label: "Frontend:", value: "React · Next.js · TypeScript · Node.js" },
  { label: "Backend:", value: "FastAPI · PostgreSQL · TailwindCSS" },
  { label: "LLM/Agents:", value: "Claude API · Multi-agent · Docker · CI/CD" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { type: "spring" as const, stiffness: 200, damping: 25, delay },
  };
}

export default function ExperienceSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left — text */}
      <div className="flex-1 px-10 lg:px-16 py-20 lg:py-24 flex flex-col justify-start">
        <motion.p {...fadeUp(0)} className="font-neuebit text-[#525252]/75 text-3xl uppercase tracking-widest mb-6">
          Experience &amp; Skills
        </motion.p>

        <motion.h2 {...fadeUp(0.08)} className="font-neuebit text-[#525252] text-[clamp(2.5rem,4vw,4rem)] leading-none mb-4">
          Shipped. Scaled. Owned.
        </motion.h2>

        <motion.p {...fadeUp(0.14)} className="font-neuebit text-[#525252] text-2xl mb-8">
          Fullstack Engineer · SurveySparrow · 2024 – Present
        </motion.p>

        <div className="font-mondwest text-[#1e1e1e] text-xl leading-relaxed space-y-4 mb-12 max-w-lg">
          {bullets.map((b, i) => (
            <motion.p key={i} {...fadeUp(0.18 + i * 0.08)}>
              {b}
            </motion.p>
          ))}
        </div>

        <motion.div {...fadeUp(0.6)}>
          <p className="font-neuebit text-[#525252] text-3xl mb-4">Stack</p>
          <div className="font-mondwest text-xl space-y-2">
            {stack.map((s, i) => (
              <motion.p key={i} {...fadeUp(0.65 + i * 0.07)}>
                <span className="text-black">→ {s.label}</span>
                <span className="text-[#525252]"> {s.value}</span>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right — photo */}
      <div className="flex-1 relative min-h-[400px] lg:min-h-0 overflow-hidden">
        <motion.img
          src={ASSETS.experiencePhoto}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

const projects = [
  {
    number: "01",
    name: "AgentFlow",
    type: "AI harness",
    description:
      "Routes one request to parallel specialist agents with memory, scheduling, and four LLM providers.",
    offset: "lg:ml-[8%]",
    links: [
      { label: "Live demo", href: "https://agent-flow-lime.vercel.app/landing" },
      { label: "Source", href: "https://github.com/doubleA411/agent-flow" },
    ],
  },
  {
    number: "02",
    name: "Figma i18n MCP",
    type: "MCP · Figma API",
    description:
      "Extracts visible design copy into structured, translation-ready JSON through Claude Desktop.",
    offset: "lg:ml-[18%]",
    links: [
      { label: "Source", href: "https://github.com/doubleA411/figma-i18n-mcp" },
    ],
  },
  {
    number: "03",
    name: "AI Context Sentinel",
    type: "Agent tooling · Cursor + Claude",
    description:
      "Preserves repository context across Cursor and Claude Code using SQLite workspace state and Git diffs.",
    offset: "lg:ml-[5%]",
    links: [
      { label: "Source", href: "https://github.com/doubleA411/ai-context-sentinal" },
    ],
  },
  {
    number: "04",
    name: "wrap-it",
    type: "Published developer tool",
    description:
      "Turns Git history into a shareable annual engineering report, published as an npm CLI.",
    offset: "lg:ml-[15%]",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@doublea0411/wrap-it" },
      { label: "Source", href: "https://github.com/doubleA411/dev-wrapped" },
    ],
  },
  {
    number: "05",
    name: "Friendly Neighbourhood",
    type: "Mobile · Realtime · Geospatial",
    description:
      "Combines a GPS-driven feed, Socket.IO chat, KYC flows, and PII masking in a neighbourhood social app.",
    offset: "lg:ml-[2%]",
    links: [
      { label: "Mobile", href: "https://github.com/doubleA411/friendly-neighbourhood-mobile" },
      { label: "API", href: "https://github.com/doubleA411/friendly-neighbourhood-api" },
    ],
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
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-12 lg:py-16 gap-3">
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
            <motion.article
              key={p.number}
              className={`
                ${p.offset}
                rounded-2xl p-4 sm:p-5
                bg-white/[0.58] backdrop-blur-2xl
                border border-white/[0.42]
                shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.25)]
                hover:bg-white/[0.68] hover:border-white/60
                transition-colors duration-300
              `}
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.08 + i * 0.1 }}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 20 } }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="font-neuebit text-[#525252] text-base sm:text-lg uppercase tracking-wider">
                    {p.number} · {p.type}
                  </p>
                  <h3 className="font-mondwest text-[#292929] text-[clamp(1.15rem,2.2vw,2.5rem)] leading-none">
                    {p.name}
                  </h3>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  {p.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label} for ${p.name} (opens in a new tab)`}
                      className="inline-flex min-h-11 items-center rounded-full border border-[#525252]/45 bg-white/60 px-3 py-2 font-neuebit text-base uppercase tracking-wide text-[#292929] transition-colors hover:border-[#292929] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {link.label}&nbsp;<span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              <p
                className="font-dm-sans font-normal text-[#3f3f3f] text-[clamp(0.8rem,1.1vw,1.1rem)] mt-3 max-w-2xl leading-relaxed"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

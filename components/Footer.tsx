"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ASSETS } from "@/lib/assets";

function AnimatedCount({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("en-US")
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Footer() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment once per page load, then display the result
    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <footer className="relative overflow-hidden">
      <motion.div
        className="relative h-[500px] lg:h-[700px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <img
          src={ASSETS.footerBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4">
        <p className="font-neuebit text-white/75 text-2xl">COPYRIGHTS 2026</p>

        {count !== null && (
          <motion.p
            className="font-neuebit text-white/60 text-xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.3 }}
          >
            <AnimatedCount value={count} /> VISITORS
          </motion.p>
        )}

        <p className="font-neuebit text-white/75 text-2xl">
          DESIGNED &amp; DEVELOPED BY HUMAN
        </p>
      </div>
    </footer>
  );
}

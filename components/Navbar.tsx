"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
      <p className="hidden sm:block font-neuebit text-white text-sm md:text-base lg:text-2xl tracking-widest uppercase">
        Fullstack / Frontend / AI - Engineer
      </p>
      <div className="flex items-center gap-1 sm:gap-2 font-neuebit text-white text-sm md:text-base lg:text-2xl ml-auto">
        <span>{time}</span>
        <span>|</span>
        <span>CHN, IN</span>
      </div>
    </nav>
  );
}

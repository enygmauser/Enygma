"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Subtle mouse parallax (desktop only feel)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B0D11] w-full pt-28 pb-28 mt-35.8 min-h-[87vh]">
      {/* ================= RADIAL RED BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-10%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-red-600/25 blur-[220px]" />
      </div>

      {/* ================= CENTER RED CLOUD (STABLE) ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="
            absolute
            left-1/2 top-[42%]
            -translate-x-1/2
            h-40
            w-[75%]
            rounded-full
            bg-red-300/14
            blur-[180px]
          "
        />
      </div>

      {/* Floating particles (very subtle) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* ================= MAIN WRAPPER ================= */}
      <div className="relative z-10 mx-auto max-w-none px-6 md:px-12 lg:px-20 pt-50 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p className="mb-3 text-base font-bold tracking-[0.3em] uppercase text-red-300">
              We Turn Attention Into Revenue
            </p>

            {/* Heading */}
            <h1 className="relative whitespace-nowrap text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-none">
              Ignite Your{" "}
              <span className="relative inline-block">
                {/* BACK LIGHT (SOFT, BEHIND TEXT) */}
                <span
                  aria-hidden
                  className="
                    absolute
                    left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    h-[3.2em]
                    w-[240%]
                    rounded-full
                    bg-red-400/20
                    blur-[75px]
                    z-[-1]
                  "
                />
                <span className="relative text-red-200 drop-shadow-[0_0_4px_rgba(239,68,68,0.6)] drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">
                  Digital Growth
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xs sm:whitespace-nowrap text-base sm:text-lg text-gray-300">
              Speed. Clarity. Creative with teeth. We build marketing systems
              that compound.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex items-center gap-6">
              <Button className="h-10 px-5 text-sm">About Us</Button>

              <Button
                variant="outline"
                className="h-10  px-5 text-sm whitespace-nowrap"
              >
                Get a Quote
              </Button>
            </div>

            {/* ================= STATS ================= */}
            <div className="relative mt-14 overflow-hidden w-full">
              <motion.div
                animate={{ x: ["0%", "-70%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="flex gap-10 whitespace-nowrap text-sm text-gray-400 min-w-[140%]"
              >
                <span>214% organic lift</span>
                <span>3.7x ROAS</span>
                <span>98/100 performance</span>
                <span>+120k monthly impressions</span>
                <span>214% organic lift</span>
                <span>3.7x ROAS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT LOGO ================= */}
        <div className="hero-right">
          <motion.div
            animate={{ x: mouse.x, y: mouse.y }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 20,
              mass: 1.2,
            }}
            className="relative hidden md:flex justify-end"
          >
            {/* GLOW WRAPPER (BIGGER THAN LOGO) */}
            <div className="relative mr-12 lg:mr-20">
              {/* RED-300 GLOW */}
              <div className="absolute -inset-2 rounded-full bg-red-400/40 blur-[25px]" />

              {/* LOGO CORE */}
              <div className="relative h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-black flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Enygma logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

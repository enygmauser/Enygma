"use client";

import { motion } from "framer-motion";

type ServicesCardProps = {
  title: string;
  description: string;
  points: string[];
};

export default function ServicesCard({
  title,
  description,
  points,
}: ServicesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group"
    >
      {/* Hover glow ONLY */}
      <div
        className="
          pointer-events-none
          absolute -inset-2 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition duration-300
          bg-red-500/25 blur-[18px]
        "
      />

      {/* Card */}
      <div
        className="
          relative h-full rounded-2xl
          bg-[#0F1115]
          border border-white/10
          p-6 sm:p-7
          text-white
        "
      >
        <h3 className="text-lg font-bold mb-4">{title}</h3>

        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          {description}
        </p>

        <ul className="space-y-2 text-sm text-gray-300">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-red-400">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

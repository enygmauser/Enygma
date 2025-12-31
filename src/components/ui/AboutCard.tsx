"use client";

import { motion } from "framer-motion";

type AboutCardProps = {
  title: string;
  content: React.ReactNode;
  highlight?: boolean;
};

export default function AboutCard({
  title,
  content,
  highlight = false,
}: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group"
    >
      {/* HOVER GLOW (ONLY ON HOVER) */}
      <div
        className={`
          absolute -inset-3 rounded-2xl blur-[36px]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          ${highlight ? "bg-red-500/40" : "bg-red-500/25"}
        `}
      />

      {/* CARD */}
      <div
        className="
          relative h-full rounded-2xl p-8
          bg-[#0F1115]
          border border-white/10
          transition-transform duration-300
          group-hover:-translate-y-1
        "
      >
        <h3 className="text-lg font-bold text-white mb-6">{title}</h3>

        <div className="text-sm text-gray-300 leading-relaxed">{content}</div>
      </div>
    </motion.div>
  );
}

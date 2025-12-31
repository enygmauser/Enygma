"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  tag: string;
  description: string;
  variant?: "dark" | "light";
};

export default function ServiceCard({
  title,
  tag,
  description,
  variant = "dark",
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative transition-all duration-300 hover:-translate-y-1"
    >
      {/* GLOW */}
      <div
        className={`
          absolute -inset-2 rounded-2xl blur-[10px] transition-all duration-300
          ${
            variant === "dark"
              ? "bg-red-500/60 hover:bg-red-400/35"
              : "bg-red-500/60 hover:bg-red-400/30"
          }
        `}
      />

      {/* CARD */}
      <div
        className={`
          relative rounded-2xl p-8 min-h-[180px]
          ${
            variant === "dark"
              ? "bg-[#0F1115] text-white"
              : "bg-white text-black"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3
            className={`
              text-lg font-bold underline underline-offset-4
              ${variant === "dark" ? "text-white" : "text-black"}
            `}
          >
            {title}
          </h3>

          <span
            className={`
              rounded-full px-3 py-1 text-base font-semibold border
              ${
                variant === "dark"
                  ? "border-red-400/40 text-red-300"
                  : "border-red-500/40 text-red-500"
              }
            `}
          >
            {tag}
          </span>
        </div>

        {/* Description */}
        <p
          className={`
            mt-6  leading-relaxed underline underline-offset-4 text-base
            ${variant === "dark" ? "text-gray-300" : "text-gray-600"}
          `}
        >
          {description}
        </p>

        {/* CTA */}
        <span
          className={`
            mt-6 inline-block text-sm font-semibold underline underline-offset-4
            ${variant === "dark" ? "text-white" : "text-black"}
          `}
        >
          Learn More →
        </span>
      </div>
    </motion.div>
  );
}

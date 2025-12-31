"use client";

import { motion } from "framer-motion";

type ClientsCardProps = {
  label: string;
};

export default function ClientsCard({ label }: ClientsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        group
        flex items-center justify-center
        h-20 sm:h-24
        rounded-xl
        bg-[#0F1115]
        border border-white/10
        text-white
        text-sm sm:text-base
        transition-all duration-300
        hover:border-white/20
        hover:-translate-y-[2px]
      "
    >
      {label}
    </motion.div>
  );
}

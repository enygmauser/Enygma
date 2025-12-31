"use client";

import ServiceCard from "@/src/components/ui/ServiceCard";
import Link from "next/link";

export default function Services() {
  return (
    <section className="relative w-full bg-[#0B0D11] pt-24 pb-28">
      {/* Header */}
      <div className="mx-auto max-w-none px-6 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-bold tracking-[0.25em] uppercase text-red-300">
          WHAT WE DO
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Acquire. Convert. Compound.
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-16 mx-auto max-w-none px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link href="/services" className="block">
            <ServiceCard
              title="SEO"
              tag="Compounding"
              description="Technical foundations, content & internal links that stack traffic month over month."
            />
          </Link>

          <Link href="/services" className="block">
            <ServiceCard
              title="PPC"
              tag="ROAS-first"
              description="Google & Meta campaigns with creative testing and budget guardrails."
            />
          </Link>

          <Link href="/services" className="block">
            <ServiceCard
              title="Web"
              tag="Blazing-fast"
              description="Accessible, lightning-fast experiences with clean analytics & tracking."
            />
          </Link>

          <Link href="/services" className="block">
            <ServiceCard
              title="Content"
              tag="Conversion"
              description="Copy and assets built for search intent and funnel progression."
            />
          </Link>

          <Link href="/services" className="block">
            <ServiceCard
              title="Social"
              tag="Systemized"
              description="Editorial ops, UGC workflows, and distribution that scales."
            />
          </Link>

          <Link href="/services" className="block">
            <ServiceCard
              title="Strategy"
              tag="Clarity"
              description="ICP, positioning, measurement plans, and dashboards leaders love."
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import AboutCard from "@/src/components/ui/AboutCard";
import Footer from "@/src/components/Footer";

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full bg-[#0b0b0e] overflow-hidden mt-26">
        {/* BACKGROUND ATMOSPHERE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-[-25%] h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-red-500/15 blur-[260px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-none px-6 md:px-12 lg:px-20 py-32">
          {/* HEADER */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-white">
              We build systems that compound growth
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-300">
              Strategy-first marketing: speed, clarity, and creative that ships.
              Our playbooks scale SEO, paid, content, and web—without the fluff.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
            <AboutCard
              title="Principles"
              highlight
              content={
                <ul className="space-y-3">
                  <li>• Speed over perfection</li>
                  <li>• Measure what matters</li>
                  <li>• Design for accessibility</li>
                  <li>• Compound, don’t chase</li>
                </ul>
              }
            />

            <AboutCard
              title="Capabilities"
              content={
                <p>
                  SEO, PPC, conversion content, systemized social, analytics,
                  and lightning-fast web experiences.
                </p>
              }
            />

            <AboutCard
              title="Engagements"
              content={
                <p>
                  Audits & roadmaps, retainers with sprints, and project-based
                  builds. Clear scopes and outcomes.
                </p>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

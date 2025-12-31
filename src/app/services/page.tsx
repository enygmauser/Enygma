import ServicesCard from "@/src/components/ui/ServicesNavCard";
import Footer from "@/src/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0E] text-white mt-6">
      {/* ================= HEADER ================= */}
      <section className="px-6 sm:px-10 md:px-12 lg:px-20 pt-32 pb-20">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3">Services</h1>
        <p className="text-gray-300">Acquire. Convert. Compound.</p>

        {/* ================= CARDS ================= */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServicesCard
            title="SEO"
            description="Technical foundations, schema, content models, and internal links that compound traffic."
            points={[
              "Core Web Vitals",
              "Content architecture",
              "Internal linking systems",
            ]}
          />

          <ServicesCard
            title="PPC"
            description="ROAS-first campaigns across Google, YouTube, and Meta with creative testing and guardrails."
            points={[
              "Search & PMax",
              "Creative iteration",
              "Budget & bid automation",
            ]}
          />

          <ServicesCard
            title="Social"
            description="Editorial ops, UGC pipelines, and distribution playbooks built to scale."
            points={[
              "Calendars & UGC workflows",
              "Short-form systems",
              "Community growth",
            ]}
          />

          <ServicesCard
            title="Web"
            description="Lightning-fast, accessible websites with clean analytics and tracking."
            points={[
              "Design & UX",
              "Static-first performance",
              "GA4 + server events",
            ]}
          />

          <ServicesCard
            title="Content"
            description="Conversion-ready assets mapped to search intent and funnel stage."
            points={["Landing pages", "Blog & guides", "Case studies"]}
          />

          <ServicesCard
            title="Strategy"
            description="Positioning, ICP, messaging, and measurement that align teams."
            points={["Roadmaps & OKRs", "Dashboards", "Experiment design"]}
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}

import ClientsCard from "@/src/components/ui/ClientCard";
import Footer from "@/src/components/Footer";

export default function ClientsPage() {
  return (
    <main className="overflow-x-hidden bg-[#0B0B0E] text-white mt-34">
      {/* ================= SECTION ================= */}
      <section className="px-6 sm:px-10 md:px-12 lg:px-20 pt-32 pb-24">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-10">
          Who we’ve helped
        </h1>

        {/* Clients grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClientsCard label="Finance" />
          <ClientsCard label="Health" />
          <ClientsCard label="E-Com" />
          <ClientsCard label="Legal" />
          <ClientsCard label="Edu" />
          <ClientsCard label="Non-Profit" />
        </div>

        {/* ================= RESULTS ================= */}
        <div className="mt-20">
          <h2 className="text-lg font-semibold mb-4">Recent results</h2>
          <p className="text-sm text-gray-400">No case studies yet.</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}

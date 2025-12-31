"use client";

import Button from "@/src/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0E] text-white flex items-center mt-20">
      <section className="w-full px-6 sm:px-10 md:px-12 lg:px-20">
        {/* CENTER WRAPPER */}
        <div className="mx-auto max-w-5xl">
          {/* ================= HEADER ================= */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold">Let’s talk</h1>

            <p className="mt-4 text-gray-300">
              Tell us about your goals and timelines—we’ll map the fastest path
              to results.
            </p>
          </div>

          {/* ================= FORM CARD ================= */}
          <div className="relative mt-10 group">
            {/* RED GLOW — HOVER ONLY */}
            <div className="absolute -inset-2 rounded-2xl bg-red-500/40 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* CARD */}
            <div className="relative rounded-2xl bg-[#0F1115] border border-white/10 p-6 sm:p-8">
              <form className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="
                      w-full h-12 rounded-full px-5
                      bg-white/5 text-white text-sm
                      border border-white/10
                      outline-none
                      focus:border-red-400/60
                      transition
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="
                      w-full h-12 rounded-full px-5
                      bg-white/5 text-white text-sm
                      border border-white/10
                      outline-none
                      focus:border-red-400/60
                      transition
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="
                      w-full rounded-xl px-5 py-4
                      bg-white/5 text-white text-sm
                      border border-white/10
                      outline-none resize-none
                      focus:border-red-400/60
                      transition
                    "
                  />
                  <div className="mt-2 text-xs text-gray-500">0 / 8000</div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Button className="h-12 px-8 text-sm">Send</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

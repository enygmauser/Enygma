"use client";

import Image from "next/image";
import Button from "@/src/components/ui/Button";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full bg-[#0B0D11] overflow-hidden py-28">
      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-none px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-xl">
          <h2 className="text-xl font-bold sm:text-4xl lg:text-xl font-extrabold text-white">
            Ready to light it up?
          </h2>

          <p className="mt-4 text-base font-bold sm:text-lg text-gray-300">
            Drop us a line. We’ll map a path from attention to revenue.
          </p>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="h-16 px-8 font-bold min-w-[120px] text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative flex justify-center md:justify-end">
          {/* RED GLOW */}
          <div className="absolute inset-0 rounded-full bg-red-500/60 blur-[40px] scale-81" />

          {/* IMAGE */}
          <Image
            src="/Bubblemask.png"
            alt="CTA visual"
            width={700}
            height={460}
            className="relative z-10 object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Button from "@/src/components/ui/Button";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0B0D11] border-t border-white/10">
      <div className="mx-auto max-w-none px-6 sm:px-8 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
          {/* ================= LEFT: BRAND ================= */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 md:h-9 md:w-9">
                <Image
                  src="/logo.png"
                  alt="Enygma logo"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="font-semibold text-white text-base group-hover:opacity-90 transition">
                Enygma
              </span>
            </Link>

            <p className="text-sm sm:text-base font-medium text-gray-400 max-w-xs sm:max-w-sm">
              Bold growth marketing for teams that want results now—and later.
            </p>
          </div>

          {/* ================= CENTER: EMAIL CTA ================= */}
          <div className="flex justify-center w-full">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md">
              <label className="text-sm text-gray-400 hidden sm:block">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1 h-11 rounded-full px-5
                  bg-white/5 text-sm text-white
                  border border-white/10
                  outline-none
                  placeholder:text-gray-500
                  focus:border-red-400/60
                  transition
                "
              />

              <Button className="h-11 px-6 text-sm whitespace-nowrap">
                Yes, Please →
              </Button>
            </div>
          </div>

          {/* ================= RIGHT: LEGAL ================= */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-400">
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-white underline underline-offset-4"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-white underline underline-offset-4"
              >
                Sitemap
              </a>
            </div>

            <span className="text-xs text-gray-500">
              © {currentYear} Enygma. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

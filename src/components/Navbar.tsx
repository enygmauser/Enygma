"use client";

import { useState, useRef, useEffect } from "react";
import Button from "@/src/components/ui/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) setOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0B0B0E] border-b border-white/10">
      <nav className="w-full">
        <div className="flex h-35 items-center justify-between px-4 md:px-8">
          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="relative h-14 w-14 md:h-24 md:w-24">
              <Image
                src="/logo.png"
                alt="Enygma logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative hidden md:inline-block text-base font-bold text-white">
              <span className="relative z-10">Enygma</span>
              <span className="absolute left-0 bottom-[4px] h-[1px] w-full bg-white -z-10 rounded-sm" />
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-10 text-base font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              {/* SERVICES */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setOpen((p) => !p)}
                  className="flex items-center gap-2 hover:text-white"
                >
                  Services
                  <motion.span animate={{ rotate: open ? -90 : 0 }}>
                    ‹
                  </motion.span>
                </button>

                {open && (
                  <ul className="absolute left-0 top-full mt-3 min-w-[180px] rounded-lg bg-[#161A22] border border-white/10 shadow-lg py-2">
                    {["SEO", "PPC", "Social", "Web", "Content"].map((item) => (
                      <li key={item}>
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-white"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link href="/clients" className="hover:text-white">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  News
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-6 ml-10">
              <Link href="/contact">
                <Button>Contact</Button>
              </Link>
              <Button>✨ AI</Button>
            </div>
          </div>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-72 bg-[#0F1115] border-l border-white/10 z-50 p-6"
          >
            <button
              className="text-white text-2xl mb-8"
              onClick={() => setMobileOpen(false)}
            >
              <FiX />
            </button>

            <ul className="flex flex-col gap-6 text-lg text-gray-300">
              <li>
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMobileOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setMobileOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" onClick={() => setMobileOpen(false)}>
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/news" onClick={() => setMobileOpen(false)}>
                  News
                </Link>
              </li>
            </ul>

            <div className="mt-10 flex flex-col gap-4">
              <Link href="/contact">
                <Button>Contact</Button>
              </Link>
              <Button>✨ AI</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

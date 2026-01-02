import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Enygma-Digital Marketing Reinvented",
    template: "%s | Enygma",
  },
  description:
    "Enygma is a modern, frontend-only website built with Next.js and optimized for performance and SEO.",
  keywords: [
    "Next.js",
    "Frontend Development",
    "SEO",
    "Web Performance",
    "Enygma",
  ],
  authors: [{ name: "Faisal Khan" }],
  creator: "Faisal Khan",
  openGraph: {
    title: "Enygma",
    description: "A modern, SEO-optimized frontend website built with Next.js.",
    siteName: "Enygma",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

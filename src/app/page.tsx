import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Button from "../components/ui/Button";
import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-[#E6E6E6]">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Footer />
    </main>
  );
}

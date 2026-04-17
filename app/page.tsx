"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-100px]"
          style={{ background: "radial-gradient(circle, #6366f120 0%, transparent 70%)" }}
        />
        <div
          className="glow-orb w-[500px] h-[500px] bottom-[10%] right-[-150px]"
          style={{ background: "radial-gradient(circle, #8b5cf618 0%, transparent 70%)" }}
        />
      </div>

      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

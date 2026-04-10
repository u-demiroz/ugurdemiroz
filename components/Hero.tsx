"use client";

import { motion } from "framer-motion";

const SOCIAL = [
  { label: "X", href: "https://x.com/soundofthewinds", icon: "𝕏" },
  { label: "Instagram", href: "https://instagram.com/soundofthewinds", icon: "◈" },
  { label: "LinkedIn", href: "https://linkedin.com/in/udemiroz", icon: "in" },
  { label: "Bluesky", href: "https://bsky.app/profile/soundofthewinds.bsky.social", icon: "☁" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">

        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl sm:text-7xl font-bold leading-none tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Uğur</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl sm:text-2xl text-slate-400 leading-relaxed mb-4 max-w-2xl">
          I build products at the intersection of{" "}
          <span className="text-white font-medium">mobile, web</span> and{" "}
          <span className="text-white font-medium">automation</span>.
        </motion.p>

        <motion.p variants={item} className="text-base text-slate-500 leading-relaxed mb-12 max-w-xl">
          From iOS apps to data-driven platforms — I design, build, and ship end to end.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            See my work
            <span className="text-indigo-300">→</span>
          </a>

          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl border border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200 font-medium text-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}

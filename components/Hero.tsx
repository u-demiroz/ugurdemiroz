"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 w-full"
      >
        {/* Sol: Metin */}
        <div className="flex-1 max-w-2xl">
          <motion.h1 variants={item} className="text-5xl sm:text-7xl font-bold leading-none tracking-tight mb-6">
            Merhaba, ben{" "}
            <span className="gradient-text">Uğur</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl sm:text-2xl text-slate-400 leading-relaxed mb-4">
            <span className="text-white font-medium">Mobil, web</span> ve{" "}
            <span className="text-white font-medium">otomasyon</span> kesişiminde ürünler geliştiriyorum.
          </motion.p>

          <motion.p variants={item} className="text-base text-slate-500 leading-relaxed mb-12">
            iOS uygulamalarından veri odaklı platformlara — tasarlar, kodlar ve yayına alırım.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Projelerimi gör
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
        </div>

        {/* Sağ: Fotoğraf */}
        <motion.div
          variants={item}
          className="flex-shrink-0"
        >
          <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/30">
            <Image
              src="/ugur.jpg"
              alt="Uğur Demiröz"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

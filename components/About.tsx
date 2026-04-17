"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROLES = [
  { icon: "✈️", title: "Kaptan Pilot", sub: "B777 / B787 — Turkish Airlines" },
  { icon: "🔍", title: "Kalite Güvence Denetçisi", sub: "Pilvak" },
  { icon: "👔", title: "Başkan Yardımcısı", sub: "Pilvak" },
  { icon: "💻", title: "Hobi Geliştirici", sub: "iOS · Web · Otomasyon" },
];

const WEB_PLATFORMS = [
  {
    name: "GüçlüF1",
    desc: "Türkçe Formula 1 haber platformu",
    url: "https://gucluf1.com",
    emoji: "🏎️",
    color: "#ef4444",
  },
];

const YOUTUBE = [
  {
    name: "Kaptan'ın Seyri Sefası",
    desc: "Havacılık, seyahat ve cockpit hayatından içerikler.",
    url: "https://www.youtube.com/@KaptannSeyriSefas",
    color: "#ef4444",
  },
  {
    name: "Kaptan Denizde",
    desc: "Deniz, doğa ve keşif içerikleri.",
    url: "https://www.youtube.com/@kaptandenizde2518",
    color: "#0ea5e9",
  },
];

const SOCIAL = [
  { name: "Instagram", handle: "@soundofthewinds", url: "https://instagram.com/soundofthewinds", emoji: "📸", color: "#e1306c" },
  { name: "X / Twitter", handle: "@soundofthewinds", url: "https://x.com/soundofthewinds", emoji: "𝕏", color: "#ffffff" },
  { name: "LinkedIn", handle: "udemiroz", url: "https://linkedin.com/in/udemiroz", emoji: "💼", color: "#0a66c2" },
  { name: "Bluesky", handle: "soundofthewinds.bsky.social", url: "https://bsky.app/profile/soundofthewinds.bsky.social", emoji: "☁️", color: "#0085ff" },
  { name: "Flickr", handle: "ugurdemiroz", url: "https://flickr.com/photos/ugurdemiroz", emoji: "📷", color: "#ff0084" },
];

function LinkCard({ href, emoji, color, title, sub }: { href: string; emoji: string; color: string; title: string; sub: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5
                 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
        style={{ background: `${color}22`, border: `1px solid ${color}44` }}
      >
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white font-semibold text-sm">{title}</div>
        <div className="text-slate-500 text-xs mt-0.5 truncate">{sub}</div>
      </div>
      <span className="text-slate-600 group-hover:text-slate-400 transition-colors text-sm flex-shrink-0">↗</span>
    </a>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ y: 24, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">— Hakkımda</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <span className="text-white">Birkaç rol,</span>{" "}
          <span className="gradient-text">tek insan.</span>
        </h2>
      </motion.div>

      {/* Roller */}
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20"
      >
        {ROLES.map((r) => (
          <div
            key={r.title}
            className="flex items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5"
          >
            <span className="text-3xl">{r.icon}</span>
            <div>
              <div className="text-white font-semibold">{r.title}</div>
              <div className="text-slate-500 text-sm">{r.sub}</div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Web Platformları */}
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-5">Web Platformları</p>
          <div className="flex flex-col gap-3">
            {WEB_PLATFORMS.map((p) => (
              <LinkCard key={p.name} href={p.url} emoji={p.emoji} color={p.color} title={p.name} sub={p.desc} />
            ))}
          </div>
        </motion.div>

        {/* YouTube */}
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-5">YouTube</p>
          <div className="flex flex-col gap-3">
            {YOUTUBE.map((y) => (
              <LinkCard key={y.name} href={y.url} emoji="▶️" color={y.color} title={y.name} sub={y.desc} />
            ))}
          </div>
        </motion.div>

        {/* Sosyal Medya */}
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-5">Sosyal Medya</p>
          <div className="flex flex-col gap-3">
            {SOCIAL.map((s) => (
              <LinkCard key={s.name} href={s.url} emoji={s.emoji} color={s.color} title={s.name} sub={s.handle} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

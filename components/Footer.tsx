"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SOCIAL = [
  { label: "X / Twitter", href: "https://x.com/soundofthewinds", handle: "@soundofthewinds" },
  { label: "Instagram", href: "https://instagram.com/soundofthewinds", handle: "@soundofthewinds" },
  { label: "LinkedIn", href: "https://linkedin.com/in/udemiroz", handle: "udemiroz" },
  { label: "Bluesky", href: "https://bsky.app/profile/soundofthewinds.bsky.social", handle: "soundofthewinds.bsky.social" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer className="relative px-6 py-24 overflow-hidden">
      {/* Top border */}
      <div className="max-w-6xl mx-auto border-t border-slate-800/60 pt-20">

        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
        >
          {/* CTA */}
          <div>
            <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4">
              — Get in touch
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Let&apos;s build<br />
              <span className="gradient-text">something great</span>
            </h3>
            <a
              href="mailto:hello@ugurdemiroz.com"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold
                         px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Say hello →
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-6">
              Find me on
            </p>
            <div className="space-y-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group py-2 border-b border-slate-800/50 hover:border-indigo-500/30 transition-all duration-200"
                >
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors font-medium">
                    {s.label}
                  </span>
                  <span className="text-sm text-slate-600 group-hover:text-indigo-400 transition-colors font-mono">
                    {s.handle} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Uğur Demiröz. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with Next.js & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}

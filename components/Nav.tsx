"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
          UD
        </span>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a
            href="mailto:hello@ugurdemiroz.com"
            className="px-4 py-1.5 rounded-full border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4
                 border-b border-slate-800/40 bg-[#080810]/80 backdrop-blur-xl"
    >
      <span className="text-sm font-bold text-white tracking-tight">uğurdemiroz.com</span>
      <div className="flex items-center gap-6 text-sm text-slate-400">
        <a href="#about" className="hover:text-white transition-colors">Hakkımda</a>
        <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
      </div>
    </motion.nav>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  accent: string;
  emoji: string;
  status?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Roam",
    tagline: "Seyahat & Mekan Keşfi",
    description: "Gittiğin veya gitmek istediğin yerleri kaydet, keşfet ve arkadaşlarınla paylaş. Sosyal akış, listeler ve Instagram paylaşım uzantısı.",
    tags: ["iOS", "React Native", "Supabase", "Haritalar"],
    url: "https://roammap.app",
    accent: "#6366f1",
    emoji: "🗺️",
    status: "Yayında",
  },
  {
    name: "TrivAir",
    tagline: "Havacılık Bilgi Yarışması",
    description: "Havacılık meraklıları için asenkron çok oyunculu bilgi yarışması. Havalimanı kodları, uçak tipleri, havayolu logoları, rotalar — 6 kategori, binlerce soru.",
    tags: ["iOS", "Çok Oyunculu", "Oyun", "Havacılık"],
    url: "https://trivair.app",
    accent: "#0ea5e9",
    emoji: "✈️",
    status: "Yayında",
  },
  {
    name: "HookahMap",
    tagline: "Global Nargile Mekan Haritası",
    description: "Dünya genelinde nargile mekanlarını keşfet. Çoklu kaynak taraması (HERE, Yelp, Google, Foursquare) ile 500+ şehir indekslendi.",
    tags: ["Web", "Scraping", "Haritalar", "Supabase"],
    url: "https://hookahmap.app",
    accent: "#10b981",
    emoji: "🌿",
    status: "Yayında",
  },
  {
    name: "101 Tabela",
    tagline: "101 Puan Takibi",
    description: "Klasik Türk kart oyunu 101 için temiz, karanlık temalı iOS puan takip uygulaması. Hızlı kurulum, çok oyunculu, oyun geçmişi.",
    tags: ["iOS", "Flutter", "Oyun"],
    url: "https://101tabela.app",
    accent: "#f59e0b",
    emoji: "🃏",
    status: "Yayında",
  },
  {
    name: "SonusNotes",
    tagline: "AI Destekli Sesli Günlük",
    description: "Konuş, dinle, anla. Sesini kaydeder, düşüncelerini transkribe eder ve ses tonundaki gizli duyguları analiz ederek kişisel psikolojik içgörüler sunar.",
    tags: ["iOS", "AI", "Health & Fitness", "Ses"],
    url: "https://apps.apple.com/us/app/sonusnotes/id6764329742",
    accent: "#a78bfa",
    emoji: "🎙️",
    status: "Yayında",
  },
  {
    name: "Aftertext",
    tagline: "Fotoğrafına Anlam Kat",
    description: "Fotoğraflarının arkasındaki duygu ve anıyı kısa bir metinle ölümsüzleştir. Minimalist tasarım, maksimum etki.",
    tags: ["iOS", "Fotoğraf", "Minimalist"],
    url: "https://aftertext.app",
    accent: "#f97316",
    emoji: "📸",
    status: "Yakında",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardContent = (
    <div
      className="relative rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-7 h-full
                 hover:border-slate-700/80 transition-all duration-300 overflow-hidden
                 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.accent}12 0%, transparent 60%)` }}
      />
      <div className="relative flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}
        >
          {project.emoji}
        </div>
        <div className="flex items-center gap-2">
          {project.status && (
            <span className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}30` }}>
              {project.status}
            </span>
          )}
          {project.url && (
            <span className="w-8 h-8 rounded-lg border border-slate-700 group-hover:border-slate-600 flex items-center justify-center text-slate-500 group-hover:text-white transition-all duration-200 text-sm">
              ↗
            </span>
          )}
        </div>
      </div>
      <div className="relative">
        <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">{project.tagline}</p>
        <p className="text-sm text-slate-400 leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700/50 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group relative"
    >
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">{cardContent}</a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="px-6 pt-32 pb-24 max-w-6xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ y: 24, opacity: 0 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">— Projeler</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Mobil Uygulamalar</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

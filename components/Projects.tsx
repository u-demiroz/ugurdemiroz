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
    tagline: "Travel & Place Discovery",
    description:
      "iOS app to save, explore, and share places you've been or want to visit. With social feed, lists, and Instagram share extension.",
    tags: ["iOS", "React Native", "Supabase", "Maps"],
    accent: "#6366f1",
    emoji: "🗺️",
    status: "App Store",
  },
  {
    name: "TrivAir",
    tagline: "Aviation Trivia Game",
    description:
      "Async multiplayer trivia game for aviation enthusiasts. Airport codes, aircraft types, airline logos, routes — 6 categories, thousands of questions.",
    tags: ["iOS", "Multiplayer", "Game", "Aviation"],
    url: "https://trivair.app",
    accent: "#0ea5e9",
    emoji: "✈️",
    status: "Live",
  },
  {
    name: "GüçlüF1",
    tagline: "F1 News & Content",
    description:
      "Turkish-language Formula 1 news platform with AI-powered content pipeline, automated publishing, and real-time standings & calendar.",
    tags: ["Web", "WordPress", "AI", "Automation"],
    url: "https://gucluf1.com",
    accent: "#ef4444",
    emoji: "🏎️",
    status: "Live",
  },
  {
    name: "HookahMap",
    tagline: "Global Hookah Venue Map",
    description:
      "Discover hookah spots worldwide. Powered by multi-source scraping (HERE, Yelp, Google, Foursquare) with 500+ cities indexed.",
    tags: ["Web", "Scraping", "Maps", "Supabase"],
    accent: "#10b981",
    emoji: "🌿",
    status: "Live",
  },
  {
    name: "Okey Tabela",
    tagline: "Okey Score Tracker",
    description:
      "Clean, dark-themed iOS scoreboard app for the classic Turkish tile game Okey. Fast setup, multiple players, game history.",
    tags: ["iOS", "Flutter", "Game"],
    accent: "#f59e0b",
    emoji: "🀄",
    status: "App Store",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group relative"
    >
      <div
        className="relative rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-7 h-full
                   hover:border-slate-700/80 transition-all duration-300 overflow-hidden
                   hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1"
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${project.accent}12 0%, transparent 60%)`,
          }}
        />

        {/* Top row */}
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
                style={{
                  background: `${project.accent}18`,
                  color: project.accent,
                  border: `1px solid ${project.accent}30`,
                }}>
                {project.status}
              </span>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-700 hover:border-slate-600 flex items-center justify-center
                           text-slate-500 hover:text-white transition-all duration-200 text-sm"
                aria-label={`Visit ${project.name}`}
              >
                ↗
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">
            {project.tagline}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700/50 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ y: 24, opacity: 0 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">
          — Work
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Things I&apos;ve built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

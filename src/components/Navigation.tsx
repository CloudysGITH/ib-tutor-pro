"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Languages,
  TrendingUp,
  Paintbrush,
  BookOpen,
  Calculator,
  Leaf,
  GraduationCap,
  Home,
} from "lucide-react";
import { subjects } from "@/lib/subjects";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Languages,
  TrendingUp,
  Paintbrush,
  BookOpen,
  Calculator,
  Leaf,
};

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <div className="flex flex-col h-full p-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-8 px-2">
        <GraduationCap className="text-blue-400" size={28} />
        <span className="text-xl font-bold gradient-text">IB Tutor Pro</span>
      </Link>

      {/* Home link */}
      <Link
        href="/"
        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-2 transition-all ${
          pathname === "/"
            ? "bg-white/10 text-white"
            : "text-zinc-400 hover:text-white hover:bg-white/5"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <Home size={18} />
        <span className="text-sm font-medium">Dashboard</span>
      </Link>

      {/* Divider */}
      <div className="border-t border-white/10 my-3" />

      {/* HL Section */}
      <p className="text-[11px] uppercase tracking-wider text-zinc-500 px-3 mb-2 font-semibold">Higher Level</p>
      {subjects.filter(s => s.level === 'HL').map(subject => {
        const Icon = iconMap[subject.icon];
        const isActive = pathname?.startsWith(`/subjects/${subject.slug}`);
        return (
          <Link
            key={subject.id}
            href={`/subjects/${subject.slug}`}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all ${
              isActive
                ? `bg-white/10 text-white ${subject.glowClass}`
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {Icon && <Icon size={18} className={isActive ? subject.colorClass : ""} />}
            <span className="text-sm font-medium flex-1">{subject.name}</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              isActive ? "bg-white/20" : "bg-white/5"
            }`}>HL</span>
          </Link>
        );
      })}

      {/* SL Section */}
      <p className="text-[11px] uppercase tracking-wider text-zinc-500 px-3 mb-2 mt-4 font-semibold">Standard Level</p>
      {subjects.filter(s => s.level === 'SL').map(subject => {
        const Icon = iconMap[subject.icon];
        const isActive = pathname?.startsWith(`/subjects/${subject.slug}`);
        return (
          <Link
            key={subject.id}
            href={`/subjects/${subject.slug}`}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all ${
              isActive
                ? `bg-white/10 text-white ${subject.glowClass}`
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {Icon && <Icon size={18} className={isActive ? subject.colorClass : ""} />}
            <span className="text-sm font-medium flex-1">{subject.name}</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              isActive ? "bg-white/20" : "bg-white/5"
            }`}>SL</span>
          </Link>
        );
      })}

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="text-center">
          <span className="text-[11px] text-zinc-500">IB Diploma Programme 2025</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 glass-strong z-40 flex-col">
        {navContent}
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 glass-strong z-50 flex items-center px-4">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-zinc-300 hover:text-white">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-3 font-bold gradient-text">IB Tutor Pro</span>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed left-0 top-0 h-screen w-64 glass-strong z-50 flex flex-col"
            >
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile spacer */}
      <div className="md:hidden h-14" />
    </>
  );
}

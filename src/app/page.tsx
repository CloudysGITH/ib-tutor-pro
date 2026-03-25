"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Languages,
  TrendingUp,
  Paintbrush,
  BookOpen,
  Calculator,
  Leaf,
  Brain,
  FileText,
  Timer,
  Award,
  Sparkles,
  Zap,
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

const features = [
  { icon: Brain, title: "Interactive Quizzes", desc: "Test your knowledge with IB-style questions", color: "text-blue-400" },
  { icon: Zap, title: "Flashcards", desc: "Effective learning with flashcards", color: "text-yellow-400" },
  { icon: FileText, title: "Past Papers", desc: "Real exams with time tracking", color: "text-purple-400" },
  { icon: Award, title: "Markscheme Grading", desc: "Automated marking based on IB criteria", color: "text-green-400" },
];

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 pt-8"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-yellow-400" size={20} />
          <span className="text-sm text-zinc-400 uppercase tracking-wider font-medium">IB Diploma Programme</span>
          <Sparkles className="text-yellow-400" size={20} />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 gradient-text leading-tight">
          IB Tutor Pro
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
          Your interactive preparation for the IB exams.
          <br className="hidden md:block" />
          Quizzes, Flashcards, Past Papers — all in one place.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-zinc-400"
      >
        {[
          { label: "Subjects", value: "6" },
          { label: "Quiz Questions", value: "500+" },
          { label: "Flashcards", value: "300+" },
          { label: "Past Papers", value: "50+" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">{stat.value}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
        {subjects.map((subject, i) => {
          const Icon = iconMap[subject.icon];
          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Link href={`/subjects/${subject.slug}`}>
                <div className={`glass rounded-xl p-5 card-hover cursor-pointer group hover:${subject.glowClass}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${subject.bgGradient}`}>
                      {Icon && <Icon size={22} className={subject.colorClass} />}
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${
                      subject.level === 'HL'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {subject.level}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-white/90">{subject.name}</h3>
                  <p className="text-xs text-zinc-500 mb-3">{subject.description}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{subject.topics.length} Topics</span>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      Start →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center text-sm uppercase tracking-wider text-zinc-500 mb-6 font-semibold">
          Learning Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feat) => (
            <div key={feat.title} className="glass rounded-lg p-4 text-center">
              <feat.icon size={24} className={`${feat.color} mx-auto mb-2`} />
              <h3 className="text-sm font-medium text-white mb-1">{feat.title}</h3>
              <p className="text-[11px] text-zinc-500">{feat.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer Disclaimer */}
      <div className="mt-16 mb-8 max-w-3xl mx-auto text-center border-t border-white/5 pt-8">
        <p className="text-[11px] text-zinc-600 leading-relaxed">
          IB Tutor Pro is an independent study tool and is not affiliated with, endorsed by, or connected to the
          International Baccalaureate Organization (IBO). &quot;IB&quot; and &quot;International Baccalaureate&quot; are registered
          trademarks of the IBO. All practice materials are original content created for educational purposes.
          For official resources, visit <span className="text-zinc-500">ibo.org</span>.
        </p>
      </div>
    </div>
  );
}

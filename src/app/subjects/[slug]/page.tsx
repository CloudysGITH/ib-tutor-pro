"use client";

import { use } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  Zap,
  FileText,
  FolderOpen,
  Languages,
  TrendingUp,
  Paintbrush,
  Calculator,
  Leaf,
} from "lucide-react";
import { getSubjectBySlug } from "@/lib/subjects";
import SyllabusTab from "@/components/SyllabusTab";
import QuizTab from "@/components/QuizTab";
import FlashcardTab from "@/components/FlashcardTab";
import PastPapersTab from "@/components/PastPapersTab";
import ResourcesTab from "@/components/ResourcesTab";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Languages,
  TrendingUp,
  Paintbrush,
  BookOpen,
  Calculator,
  Leaf,
};

const tabs = [
  { id: "syllabus", label: "Syllabus", icon: BookOpen },
  { id: "quiz", label: "Quiz", icon: Brain },
  { id: "flashcards", label: "Flashcards", icon: Zap },
  { id: "pastpapers", label: "Past Papers", icon: FileText },
  { id: "resources", label: "Resources", icon: FolderOpen },
];

export default function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const subject = getSubjectBySlug(slug);
  const [activeTab, setActiveTab] = useState("syllabus");

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Fach nicht gefunden</h1>
          <p className="text-zinc-400">Dieses Fach existiert nicht.</p>
        </div>
      </div>
    );
  }

  const SubjectIcon = iconMap[subject.icon];

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-2">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.bgGradient}`}>
            {SubjectIcon && <SubjectIcon size={28} className={subject.colorClass} />}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-white">{subject.name}</h1>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                subject.level === 'HL'
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {subject.level}
              </span>
            </div>
            <p className="text-zinc-400 text-sm mt-1">{subject.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? `bg-white/10 text-white ${subject.glowClass}`
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "syllabus" && <SyllabusTab subject={subject} />}
          {activeTab === "quiz" && <QuizTab subject={subject} />}
          {activeTab === "flashcards" && <FlashcardTab subject={subject} />}
          {activeTab === "pastpapers" && <PastPapersTab subject={subject} />}
          {activeTab === "resources" && <ResourcesTab subject={subject} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

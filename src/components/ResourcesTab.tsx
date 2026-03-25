"use client";

import { ExternalLink, Lightbulb, BookMarked } from "lucide-react";
import type { Subject } from "@/lib/subjects";

const studyTips: Record<string, string[]> = {
  deutsch: [
    "Lese jeden Tag mindestens 20 Minuten auf Deutsch",
    "Uebe Textanalyse mit der PEE-Methode (Point, Evidence, Explanation)",
    "Bereite deinen Individual Oral mindestens 4 Wochen im Voraus vor",
    "Sammle Zitate aus deinen Werken fuer die schriftliche Pruefung",
  ],
  business: [
    "Learn key business terminology and definitions by heart",
    "Practice applying theories to real-world case studies",
    "Use SWOT, PEST, and Porter's Five Forces regularly",
    "For Paper 2: always refer back to the case study stimulus",
  ],
  "design-tech": [
    "Keep a design journal with sketches and annotations",
    "Learn material properties and their applications",
    "Practice drawing in isometric and orthographic projection",
    "Study iconic designs and their historical context for HL",
  ],
  "english-ll": [
    "Annotate texts thoroughly — language, structure, tone",
    "Practice timed Paper 1 responses (1 hour 15 min)",
    "Build a vocabulary bank for literary and rhetorical devices",
    "For the IO: choose texts you genuinely find interesting",
  ],
  "math-ai": [
    "Master your GDC (graphing calculator) — it's your best friend in AI",
    "Focus on understanding concepts over memorizing formulas",
    "Practice interpreting real-world data and contexts",
    "Use the formula booklet actively during practice",
  ],
  biology: [
    "Draw and label diagrams regularly — they're worth marks",
    "Learn command terms: compare, discuss, evaluate, explain",
    "Use mnemonics for complex processes (e.g., mitosis stages)",
    "Practice data-based questions from past papers",
  ],
};

export default function ResourcesTab({ subject }: { subject: Subject }) {
  const tips = studyTips[subject.slug] || [];

  return (
    <div className="space-y-6">
      {/* Study Tips */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={20} className="text-yellow-400" />
          <h2 className="text-lg font-semibold text-white">Study Tips</h2>
        </div>
        <ul className="space-y-3">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-xs font-bold mt-0.5 px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">{i + 1}</span>
              <span className="text-sm text-zinc-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Resources */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookMarked size={20} className={subject.colorClass} />
          <h2 className="text-lg font-semibold text-white">Key Resources</h2>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div>
              <p className="text-sm font-medium text-white">IB {subject.name} Syllabus Guide</p>
              <p className="text-xs text-zinc-500">Official IB Syllabus</p>
            </div>
            <ExternalLink size={16} className="text-zinc-500" />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div>
              <p className="text-sm font-medium text-white">Command Terms & Definitions</p>
              <p className="text-xs text-zinc-500">Important exam terminology</p>
            </div>
            <ExternalLink size={16} className="text-zinc-500" />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div>
              <p className="text-sm font-medium text-white">Formula Booklet / Data Booklet</p>
              <p className="text-xs text-zinc-500">Official IB formula booklet</p>
            </div>
            <ExternalLink size={16} className="text-zinc-500" />
          </div>
        </div>
      </div>

      {/* Assessment Overview */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Assessment Overview</h2>
        <div className="text-sm text-zinc-400 space-y-2">
          <p><span className="text-white font-medium">Level:</span> {subject.level} ({subject.level === 'HL' ? 'Higher Level — 240 hours' : 'Standard Level — 150 hours'})</p>
          <p><span className="text-white font-medium">External Assessment:</span> Papers 1 & 2 (written examinations)</p>
          <p><span className="text-white font-medium">Internal Assessment:</span> Project work / Oral (internally assessed)</p>
        </div>
      </div>
    </div>
  );
}

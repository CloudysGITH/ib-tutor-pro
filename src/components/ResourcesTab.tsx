"use client";

import { ExternalLink, Lightbulb, BookMarked } from "lucide-react";
import type { Subject } from "@/lib/subjects";

interface Resource {
  title: string;
  description: string;
  url: string;
}

const subjectResources: Record<string, Resource[]> = {
  deutsch: [
    { title: "IB Deutsch A Syllabus Guide", description: "Official IB Language A syllabus outline", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-and-literature/" },
    { title: "IB Command Terms", description: "Official exam command terms & definitions", url: "https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/" },
    { title: "Literarische Stilmittel", description: "Comprehensive list of literary devices in German", url: "https://wortwuchs.net/stilmittel/" },
  ],
  business: [
    { title: "IB Business Management Syllabus", description: "Official IB BM syllabus outline", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/business-management/" },
    { title: "IB Command Terms", description: "Official exam command terms & definitions", url: "https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/" },
    { title: "Business Case Studies", description: "Real-world case studies for Paper 2 practice", url: "https://www.ibmastery.com/blog/business-management" },
  ],
  "design-tech": [
    { title: "IB Design Technology Syllabus", description: "Official IB DT syllabus outline", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/design-technology/" },
    { title: "IB Command Terms", description: "Official exam command terms & definitions", url: "https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/" },
    { title: "Design Museum Collection", description: "Iconic product designs and their stories", url: "https://designmuseum.org/collections" },
  ],
  "english-ll": [
    { title: "IB English A L&L Syllabus", description: "Official IB Language & Literature syllabus", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-and-literature/" },
    { title: "IB Command Terms", description: "Official exam command terms & definitions", url: "https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/" },
    { title: "Literary & Rhetorical Devices", description: "Comprehensive glossary of literary terms", url: "https://literarydevices.net/" },
  ],
  "math-ai": [
    { title: "IB Math AI Syllabus", description: "Official IB Mathematics AI syllabus outline", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/" },
    { title: "IB Math Formula Booklet", description: "Official formula booklet for exams", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/" },
    { title: "Revision Village — Math AI SL", description: "Video tutorials, practice & past paper solutions", url: "https://www.revisionvillage.com/ib-math-ai-sl/" },
  ],
  biology: [
    { title: "IB Biology Syllabus Guide", description: "Official IB Biology syllabus outline", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/biology/" },
    { title: "IB Command Terms", description: "Official exam command terms & definitions", url: "https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/" },
    { title: "BioNinja", description: "IB Biology revision notes, diagrams & quizzes", url: "https://ib.bioninja.com.au/" },
  ],
};

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
  const resources = subjectResources[subject.slug] || [];

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
          {resources.map((resource, i) => (
            <a
              key={i}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">{resource.title}</p>
                <p className="text-xs text-zinc-500">{resource.description}</p>
              </div>
              <ExternalLink size={16} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </a>
          ))}
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

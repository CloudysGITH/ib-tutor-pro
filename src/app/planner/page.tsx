"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Trophy,
  BookOpen,
  Brain,
  Zap,
  FileText,
  Target,
} from "lucide-react";
import { subjects } from "@/lib/subjects";

// Study leave starts April 4, 2026 — 3 weeks completely free for revision
const STUDY_LEAVE_START = new Date("2026-04-04T00:00:00");

// Official IB May 2026 exam dates per subject
interface ExamDate {
  subject: string;
  slug: string;
  color: string;
  paper: string;
  date: Date;
  session: "AM" | "PM";
  duration: string;
}

const EXAM_DATES: ExamDate[] = [
  // Deutsch A HL — Language A L&L (non-English) April 27-28
  { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b", paper: "Paper 1", date: new Date("2026-04-27"), session: "AM", duration: "2h 15min" },
  { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b", paper: "Paper 2", date: new Date("2026-04-28"), session: "AM", duration: "1h 45min" },
  // Business Management HL — April 29-30
  { subject: "Business Mgmt", slug: "business", color: "#10b981", paper: "Paper 1", date: new Date("2026-04-29"), session: "AM", duration: "1h 30min" },
  { subject: "Business Mgmt", slug: "business", color: "#10b981", paper: "Paper 3 (HL)", date: new Date("2026-04-29"), session: "PM", duration: "1h 15min" },
  { subject: "Business Mgmt", slug: "business", color: "#10b981", paper: "Paper 2", date: new Date("2026-04-30"), session: "AM", duration: "1h 45min" },
  // English A L&L SL — May 7-8
  { subject: "English A L&L", slug: "english-ll", color: "#3b82f6", paper: "Paper 1", date: new Date("2026-05-07"), session: "AM", duration: "1h 15min" },
  { subject: "English A L&L", slug: "english-ll", color: "#3b82f6", paper: "Paper 2", date: new Date("2026-05-08"), session: "AM", duration: "1h 45min" },
  // Biology SL — May 11-12
  { subject: "Biology", slug: "biology", color: "#22c55e", paper: "Paper 1", date: new Date("2026-05-11"), session: "PM", duration: "1h 30min" },
  { subject: "Biology", slug: "biology", color: "#22c55e", paper: "Paper 2", date: new Date("2026-05-12"), session: "AM", duration: "1h 30min" },
  // Math AI SL — May 14-15
  { subject: "Math AI", slug: "math-ai", color: "#ef4444", paper: "Paper 1", date: new Date("2026-05-14"), session: "PM", duration: "1h 30min" },
  { subject: "Math AI", slug: "math-ai", paper: "Paper 2", date: new Date("2026-05-15"), session: "PM", duration: "1h 30min", color: "#ef4444" },
  // Design Technology HL — May 15, 18
  { subject: "Design Tech", slug: "design-tech", color: "#a855f7", paper: "Papers 1 & 2", date: new Date("2026-05-15"), session: "PM", duration: "3h" },
  { subject: "Design Tech", slug: "design-tech", color: "#a855f7", paper: "Paper 3 (HL)", date: new Date("2026-05-18"), session: "AM", duration: "1h 30min" },
];

// First exam = Deutsch A Paper 1 on April 27
const EXAM_START = EXAM_DATES[0].date;

interface WeekPlan {
  week: number;
  dateRange: string;
  focus: string;
  tasks: { subject: string; slug: string; color: string; task: string; type: "study" | "quiz" | "papers" | "review" }[];
}

function getDaysUntil(target: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getWeeksUntil(target: Date): number {
  return Math.max(0, Math.ceil(getDaysUntil(target) / 7));
}

function getWeekDateRange(weeksFromNow: number): string {
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() + (weeksFromNow - 1) * 7);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const fmt = (d: Date) => `${d.getDate()}.${d.getMonth() + 1}`;
  return `${fmt(start)} – ${fmt(end)}`;
}

function generateStudyPlan(): WeekPlan[] {
  const weeksLeft = getWeeksUntil(EXAM_START);
  const plans: WeekPlan[] = [];

  const subjectInfo = subjects.map(s => ({
    name: s.name,
    slug: s.slug,
    color: s.color,
    level: s.level,
    topicCount: s.topics.length,
  }));

  const hl = subjectInfo.filter(s => s.level === "HL");
  const sl = subjectInfo.filter(s => s.level === "SL");

  if (weeksLeft <= 0) return [];

  // Key dates: Study leave starts 04.04 (3 weeks completely free before exams)
  const now = new Date();
  const studyLeaveWeek = Math.max(1, Math.ceil((STUDY_LEAVE_START.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 7)));

  // Phase structure:
  // Before study leave: Evening revision (lighter load, school is still on)
  // Study leave week 1: Intensive content review — HL focus
  // Study leave week 2: Intensive content review — SL focus + HL weak areas
  // Study leave week 3: Past papers + exam practice
  // Exam week: Final review + exams

  for (let w = 1; w <= weeksLeft; w++) {
    const dateRange = getWeekDateRange(w);
    const isBeforeStudyLeave = w < studyLeaveWeek;
    const studyLeaveWeekNum = w - studyLeaveWeek + 1; // 1, 2, 3 during study leave
    const isStudyLeave = studyLeaveWeekNum >= 1 && studyLeaveWeekNum <= 3;
    const isExamWeek = w === weeksLeft;

    if (isExamWeek) {
      // EXAM PERIOD — focus only on upcoming exams
      plans.push({
        week: w,
        dateRange,
        focus: "Prüfungsphase — Nur noch letzte Wiederholung vor jeder Prüfung",
        tasks: [
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "Mo 27.04 Paper 1, Di 28.04 Paper 2 — vorher: nur Flashcards + Stilmittel",
            type: "review" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "Mi 29.04 Paper 1+3, Do 30.04 Paper 2 — vorher: Toolkit + Formeln",
            type: "review" as const },
          { subject: "English A L&L", slug: "english-ll", color: "#3b82f6",
            task: "Do 07.05 Paper 1, Fr 08.05 Paper 2 — vorher: Literary Devices + Exam Tips",
            type: "review" as const },
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Mo 11.05 Paper 1, Di 12.05 Paper 2 — vorher: Definitionen + Diagramme",
            type: "review" as const },
          { subject: "Math AI", slug: "math-ai", color: "#ef4444",
            task: "Do 14.05 Paper 1, Fr 15.05 Paper 2 — vorher: Formeln + GDC üben",
            type: "review" as const },
          { subject: "Design Tech", slug: "design-tech", color: "#a855f7",
            task: "Fr 15.05 Papers 1&2, Mo 18.05 Paper 3 — vorher: Materialien + Sustainability",
            type: "review" as const },
          { subject: "Wellbeing", slug: "", color: "#22c55e",
            task: "8+ Stunden Schlaf, gesund essen, Pausen einlegen — du bist vorbereitet!",
            type: "review" as const },
        ],
      });
    } else if (isStudyLeave && studyLeaveWeekNum === 1) {
      // STUDY LEAVE WEEK 1 (04.04–10.04) — First exams are Deutsch (27.04) + Business (29.04)!
      plans.push({
        week: w,
        dateRange,
        focus: "Study Leave Wk 1 — Deutsch A & Business zuerst! (Prüfung 27.+29.04)",
        tasks: [
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "PRIORITÄT: Alle 12 Topics durcharbeiten — Study Notes + Stilmittel (ganzer Tag)",
            type: "study" as const },
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "Alle Flashcards + Quiz durcharbeiten",
            type: "quiz" as const },
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "Paper 1 Übung: Textanalyse unter Zeitdruck (2h 15min)",
            type: "papers" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "PRIORITÄT: Alle 37 Topics durcharbeiten — Study Notes (ganzer Tag)",
            type: "study" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "Alle Flashcards + Quiz + BM Toolkit-Tools lernen",
            type: "quiz" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "Practice Paper unter Zeitdruck starten",
            type: "papers" as const },
          { subject: "Design Tech", slug: "design-tech", color: "#a855f7",
            task: "Abends: Erste Hälfte der Topics durchgehen (Prüfung erst 15.05)",
            type: "study" as const },
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Abends: Diagram-Übungen (Zellen, Herz, Membran) + Flashcards",
            type: "quiz" as const },
        ],
      });
    } else if (isStudyLeave && studyLeaveWeekNum === 2) {
      // STUDY LEAVE WEEK 2 (11.04–17.04) — Continue HL prep + start SL subjects
      plans.push({
        week: w,
        dateRange,
        focus: "Study Leave Wk 2 — Deutsch/BM vertiefen + English & Bio starten",
        tasks: [
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "Paper 2 Übung: Vergleichender Aufsatz (1h 45min) + IO-Vorbereitung",
            type: "papers" as const },
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "Schwache Topics wiederholen + alle Past Papers abschließen",
            type: "review" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "Alle Practice Papers abschließen + Markschemes studieren",
            type: "papers" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "HL-spezifisch: Effizienz-Kennzahlen, NPV, Lean Production, CPA",
            type: "study" as const },
          { subject: "English A L&L", slug: "english-ll", color: "#3b82f6",
            task: "Alle Topics durcharbeiten — Study Notes + Literary Devices (Prüfung 07.05)",
            type: "study" as const },
          { subject: "English A L&L", slug: "english-ll", color: "#3b82f6",
            task: "Flashcards + Quiz + Paper 1 Übung",
            type: "quiz" as const },
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Alle 34 Topics durcharbeiten — Themes A-D (Prüfung 11.05)",
            type: "study" as const },
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Alle Flashcards + Quiz abschließen",
            type: "quiz" as const },
          { subject: "Math AI", slug: "math-ai", color: "#ef4444",
            task: "Abends: Topics 1-3 durchgehen (Prüfung erst 14.05)",
            type: "study" as const },
        ],
      });
    } else if (isStudyLeave && studyLeaveWeekNum === 3) {
      // STUDY LEAVE WEEK 3 (18.04–24.04) — Final prep, exams start 27.04!
      plans.push({
        week: w,
        dateRange,
        focus: "Study Leave Wk 3 — Letzte Woche! Past Papers + Endspurt",
        tasks: [
          { subject: "Deutsch A", slug: "deutsch", color: "#f59e0b",
            task: "FINAL: Nur noch Flashcards + Definitionen. Prüfung in 3 Tagen!",
            type: "review" as const },
          { subject: "Business Mgmt", slug: "business", color: "#10b981",
            task: "FINAL: Toolkit-Tools, Kennzahlen-Formeln, Command Terms wiederholen",
            type: "review" as const },
          { subject: "English A L&L", slug: "english-ll", color: "#3b82f6",
            task: "Alle Past Papers abschließen + Markschemes studieren",
            type: "papers" as const },
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Alle Past Papers unter Zeitdruck + Diagramme üben",
            type: "papers" as const },
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Schwache Themes wiederholen (wo Quiz < 70%)",
            type: "review" as const },
          { subject: "Math AI", slug: "math-ai", color: "#ef4444",
            task: "Topics 4-5 (Statistik + Kalkül) durcharbeiten + alle Flashcards",
            type: "study" as const },
          { subject: "Math AI", slug: "math-ai", color: "#ef4444",
            task: "Alle Practice Papers unter Zeitdruck — GDC-Übung!",
            type: "papers" as const },
          { subject: "Design Tech", slug: "design-tech", color: "#a855f7",
            task: "Alle Topics abschließen + HL-Extensions (UCD, Sustainability, Production)",
            type: "study" as const },
          { subject: "Design Tech", slug: "design-tech", color: "#a855f7",
            task: "Practice Papers + Material-Diagramme üben",
            type: "papers" as const },
          { subject: "All Subjects", slug: "", color: "#f59e0b",
            task: "Persönliche Zusammenfassungen: Formeln, Definitionen, Command Terms",
            type: "review" as const },
        ],
      });
    } else if (isBeforeStudyLeave) {
      // BEFORE STUDY LEAVE — lighter evening revision (school still on)
      const subjectsThisWeek = w % 2 === 1 ? [...hl, sl[0]] : [...sl, hl[0]];
      const topicsPerSubject = Math.ceil(12 / Math.max(1, studyLeaveWeek - 1));
      plans.push({
        week: w,
        dateRange,
        focus: `Pre-Study Leave — Evening Revision (${w % 2 === 1 ? 'HL Focus' : 'SL Focus'})`,
        tasks: [
          ...subjectsThisWeek.map(s => {
            const start = ((w - 1) * topicsPerSubject) % s.topicCount;
            const end = Math.min(start + topicsPerSubject, s.topicCount);
            return {
              subject: s.name, slug: s.slug, color: s.color,
              task: `Review topics ${start + 1}–${end} (study notes, 45 min)`,
              type: "study" as const,
            };
          }),
          {
            subject: subjectsThisWeek[0].name, slug: subjectsThisWeek[0].slug, color: subjectsThisWeek[0].color,
            task: "Complete flashcards for reviewed topics (20 min)",
            type: "quiz" as const,
          },
          {
            subject: subjectsThisWeek[1]?.name || subjectsThisWeek[0].name,
            slug: subjectsThisWeek[1]?.slug || subjectsThisWeek[0].slug,
            color: subjectsThisWeek[1]?.color || subjectsThisWeek[0].color,
            task: "Complete quiz for reviewed topics (20 min)",
            type: "quiz" as const,
          },
        ],
      });
    }
  }

  return plans;
}

const typeIcons = {
  study: BookOpen,
  quiz: Brain,
  papers: FileText,
  review: Zap,
};

const typeColors = {
  study: "text-blue-400",
  quiz: "text-purple-400",
  papers: "text-amber-400",
  review: "text-emerald-400",
};

export default function PlannerPage() {
  const [plans, setPlans] = useState<WeekPlan[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [daysLeft, setDaysLeft] = useState(0);
  const [weeksLeft, setWeeksLeft] = useState(0);
  const [daysToStudyLeave, setDaysToStudyLeave] = useState(0);

  useEffect(() => {
    setPlans(generateStudyPlan());
    setDaysLeft(getDaysUntil(EXAM_START));
    setWeeksLeft(getWeeksUntil(EXAM_START));
    setDaysToStudyLeave(getDaysUntil(STUDY_LEAVE_START));

    // Load completed tasks from localStorage
    try {
      const saved = localStorage.getItem("ib-tutor-planner");
      if (saved) setCompletedTasks(new Set(JSON.parse(saved)));
    } catch { /* ignore */ }
  }, []);

  const toggleTask = (taskKey: string) => {
    setCompletedTasks(prev => {
      const next = new Set(prev);
      if (next.has(taskKey)) next.delete(taskKey);
      else next.add(taskKey);
      // Save to localStorage
      try { localStorage.setItem("ib-tutor-planner", JSON.stringify([...next])); } catch { /* ignore */ }
      return next;
    });
  };

  const totalTasks = plans.reduce((sum, w) => sum + w.tasks.length, 0);
  const completedCount = completedTasks.size;
  const overallProgress = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors mb-6">
        <ArrowLeft size={16} />
        Dashboard
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Calendar size={24} className="text-emerald-400" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">Study Planner</h1>
        </div>
        <p className="text-zinc-400 text-sm">Your personalized revision plan for the IB exams.</p>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-6 mb-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className={`text-3xl md:text-4xl font-black ${daysLeft <= 14 ? 'text-red-400' : daysLeft <= 30 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {daysLeft}
              </p>
              <p className="text-xs text-zinc-500">Days</p>
            </div>
            <div className="text-center">
              <p className={`text-3xl md:text-4xl font-black ${weeksLeft <= 2 ? 'text-red-400' : weeksLeft <= 4 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {weeksLeft}
              </p>
              <p className="text-xs text-zinc-500">Weeks</p>
            </div>
            {daysToStudyLeave > 0 && (
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-blue-400">{daysToStudyLeave}</p>
                <p className="text-xs text-zinc-500">to Study Leave</p>
              </div>
            )}
            <div className="hidden sm:block">
              <p className="text-sm text-zinc-400">until IB exams begin</p>
              <p className="text-xs text-zinc-600">Study leave: 04.04 – 24.04 (3 weeks free)</p>
            </div>
          </div>

          {daysLeft <= 7 && (
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
              <AlertTriangle size={16} className="text-amber-400" />
              <span className="text-xs text-amber-400 font-medium">Exam week!</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Exam Dates Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="glass rounded-xl p-5 mb-6"
      >
        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Calendar size={16} className="text-amber-400" />
          Your Exam Dates — May 2026
        </h3>
        <div className="space-y-2">
          {EXAM_DATES.map((exam, i) => {
            const examDays = getDaysUntil(exam.date);
            const isPast = examDays === 0 && new Date() > exam.date;
            const isToday = examDays === 0;
            const isSoon = examDays <= 7 && examDays > 0;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 p-2.5 rounded-lg ${
                  isToday ? 'bg-red-500/10 border border-red-500/20' :
                  isSoon ? 'bg-amber-500/5' : 'bg-white/[0.02]'
                }`}
              >
                <div
                  className="w-1.5 h-8 rounded-full shrink-0"
                  style={{ background: exam.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">{exam.subject}</span>
                    <span className="text-[10px] text-zinc-500">{exam.paper}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                    <span>{exam.date.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                    <span>·</span>
                    <span>{exam.session}</span>
                    <span>·</span>
                    <span>{exam.duration}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {isPast ? (
                    <span className="text-[10px] text-zinc-600">Done</span>
                  ) : isToday ? (
                    <span className="text-xs font-bold text-red-400 animate-pulse">TODAY</span>
                  ) : (
                    <span className={`text-xs font-bold ${isSoon ? 'text-amber-400' : 'text-zinc-500'}`}>
                      {examDays}d
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[10px] text-zinc-600 mt-3">
          Zeiten abhängig von der Exam Zone deiner Schule (A, B, oder C). Quelle: IBO May 2026 Examination Schedule.
        </p>
      </motion.div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass rounded-xl p-4 mb-8"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-emerald-400" />
            <span className="text-sm text-zinc-400">Study Plan Progress</span>
          </div>
          <span className="text-sm font-bold text-white">{overallProgress}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-xs text-zinc-600 mt-1.5">{completedCount} of {totalTasks} tasks completed</p>
      </motion.div>

      {/* Weekly Plans */}
      <div className="space-y-4">
        {plans.map((plan, pi) => {
          const weekTasks = plan.tasks;
          const weekCompleted = weekTasks.filter((_, ti) =>
            completedTasks.has(`w${plan.week}-t${ti}`)
          ).length;
          const weekProgress = weekTasks.length > 0 ? Math.round((weekCompleted / weekTasks.length) * 100) : 0;
          const isCurrentWeek = pi === 0;

          return (
            <motion.div
              key={plan.week}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * pi }}
              className={`glass rounded-xl overflow-hidden ${isCurrentWeek ? 'ring-1 ring-emerald-500/30' : ''}`}
            >
              {/* Week Header */}
              <div className="p-4 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      weekProgress === 100 ? 'bg-emerald-500/20 text-emerald-400' :
                      isCurrentWeek ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-zinc-500'
                    }`}>
                      {weekProgress === 100 ? <Trophy size={16} /> : `W${plan.week}`}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {isCurrentWeek && <span className="text-emerald-400">This Week — </span>}
                        {plan.focus}
                      </h3>
                      <p className="text-[11px] text-zinc-600">{plan.dateRange}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    weekProgress === 100 ? 'bg-emerald-500/20 text-emerald-400' :
                    weekProgress > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-zinc-600'
                  }`}>
                    {weekProgress}%
                  </span>
                </div>
              </div>

              {/* Tasks */}
              <div className="p-3 space-y-1">
                {weekTasks.map((task, ti) => {
                  const taskKey = `w${plan.week}-t${ti}`;
                  const done = completedTasks.has(taskKey);
                  const Icon = typeIcons[task.type];

                  return (
                    <div
                      key={ti}
                      onClick={() => toggleTask(taskKey)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group"
                    >
                      <button className="shrink-0 mt-0.5">
                        {done ? (
                          <CheckCircle2 size={16} className="text-emerald-400" />
                        ) : (
                          <Circle size={16} className="text-zinc-700 group-hover:text-zinc-500" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                            style={{ background: task.color + '20', color: task.color }}
                          >
                            {task.subject}
                          </span>
                          <Icon size={12} className={typeColors[task.type]} />
                        </div>
                        <p className={`text-xs ${done ? 'text-zinc-600 line-through' : 'text-zinc-300'}`}>
                          {task.task}
                        </p>
                      </div>
                      {task.slug && (
                        <Link
                          href={`/subjects/${task.slug}`}
                          onClick={e => e.stopPropagation()}
                          className="text-[10px] text-zinc-600 hover:text-white transition-colors shrink-0 mt-1"
                        >
                          Open →
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-xl p-5 mt-8 mb-8"
      >
        <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          <Clock size={16} className="text-amber-400" />
          Study Tips for the Final Weeks
        </h3>
        <ul className="space-y-2 text-xs text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">1.</span>
            <span><strong className="text-white">Active recall:</strong> Test yourself with quizzes and flashcards instead of passively re-reading notes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">2.</span>
            <span><strong className="text-white">Spaced repetition:</strong> Review topics multiple times with increasing intervals between sessions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">3.</span>
            <span><strong className="text-white">Past papers:</strong> Practice under timed conditions and review markschemes thoroughly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">4.</span>
            <span><strong className="text-white">Command terms:</strong> Know exactly what "evaluate", "discuss", "compare" require — this determines your answer structure.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">5.</span>
            <span><strong className="text-white">Sleep & breaks:</strong> 8 hours of sleep consolidates memory. Take a 10-minute break every 45 minutes.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

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

// IB May 2026 exam dates (approximate — exams run May 1-22)
const EXAM_START = new Date("2026-05-01T00:00:00");
// Study leave starts April 4, 2026 — 3 weeks completely free for revision
const STUDY_LEAVE_START = new Date("2026-04-04T00:00:00");

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
      // EXAM WEEK — light review only
      plans.push({
        week: w,
        dateRange,
        focus: "Exam Week — Final Review",
        tasks: [
          ...subjectInfo.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: "Quick flashcard review + key definitions only (30 min max)",
            type: "review" as const,
          })),
          { subject: "All Subjects", slug: "", color: "#f59e0b",
            task: "Review exam tips and command terms for each subject",
            type: "review" as const },
          { subject: "Wellbeing", slug: "", color: "#22c55e",
            task: "Sleep 8+ hours, eat well, stay calm — you've prepared!",
            type: "review" as const },
        ],
      });
    } else if (isStudyLeave && studyLeaveWeekNum === 1) {
      // STUDY LEAVE WEEK 1 — Intensive HL review (full days available!)
      plans.push({
        week: w,
        dateRange,
        focus: "Study Leave Week 1 — Intensive HL Review",
        tasks: [
          ...hl.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Full topic review: study notes for ALL ${s.topicCount} topics (morning sessions)`,
            type: "study" as const,
          })),
          ...hl.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Complete ALL flashcards + quiz (afternoon sessions)`,
            type: "quiz" as const,
          })),
          ...sl.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Review first half of topics + flashcards (1 hour evening)`,
            type: "study" as const,
          })),
          { subject: "Biology", slug: "biology", color: "#22c55e",
            task: "Practice all diagram labelling challenges",
            type: "quiz" as const },
        ],
      });
    } else if (isStudyLeave && studyLeaveWeekNum === 2) {
      // STUDY LEAVE WEEK 2 — SL deep dive + HL weak areas
      plans.push({
        week: w,
        dateRange,
        focus: "Study Leave Week 2 — SL Deep Dive + HL Weak Areas",
        tasks: [
          ...sl.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Full topic review: study notes for ALL ${s.topicCount} topics`,
            type: "study" as const,
          })),
          ...sl.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Complete ALL flashcards + full quiz`,
            type: "quiz" as const,
          })),
          ...hl.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Review weak topics (where quiz scores < 70%)`,
            type: "review" as const,
          })),
          { subject: "All Subjects", slug: "", color: "#9ca3af",
            task: "Start first practice paper for each subject (timed!)",
            type: "papers" as const },
        ],
      });
    } else if (isStudyLeave && studyLeaveWeekNum === 3) {
      // STUDY LEAVE WEEK 3 — Past papers + exam simulation
      plans.push({
        week: w,
        dateRange,
        focus: "Study Leave Week 3 — Exam Practice & Past Papers",
        tasks: [
          ...subjectInfo.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Complete ALL remaining practice papers under timed conditions`,
            type: "papers" as const,
          })),
          ...subjectInfo.map(s => ({
            subject: s.name, slug: s.slug, color: s.color,
            task: `Review markschemes — note patterns and common mistakes`,
            type: "review" as const,
          })),
          { subject: "All Subjects", slug: "", color: "#f59e0b",
            task: "Create personal cheat sheets: key formulas, definitions, command terms",
            type: "review" as const },
          { subject: "All Subjects", slug: "", color: "#9ca3af",
            task: "Re-do quizzes where you scored below 80%",
            type: "quiz" as const },
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

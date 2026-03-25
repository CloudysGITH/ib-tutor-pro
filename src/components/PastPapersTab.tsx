"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, Play, Pause, AlertTriangle, CheckCircle2, Send, RotateCcw, FileText, Clock, Award } from "lucide-react";
import type { Subject } from "@/lib/subjects";
import { getPapersBySubject, type PastPaper, type PastPaperQuestion } from "@/data/pastPaperData";

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function evaluateAnswer(answer: string, markscheme: string[], maxMarks: number): { score: number; feedback: string[] } {
  if (!answer.trim()) return { score: 0, feedback: ["No answer provided."] };

  const answerLower = answer.toLowerCase();
  const feedback: string[] = [];
  let matched = 0;

  markscheme.forEach((criterion) => {
    const keywords = criterion.toLowerCase().split(/[\s,;.—–-]+/).filter(w => w.length > 3);
    const matchCount = keywords.filter(kw => answerLower.includes(kw)).length;
    const matchRatio = keywords.length > 0 ? matchCount / keywords.length : 0;

    if (matchRatio >= 0.3) {
      matched++;
      feedback.push(`✓ ${criterion}`);
    } else {
      feedback.push(`✗ ${criterion}`);
    }
  });

  const ratio = markscheme.length > 0 ? matched / markscheme.length : 0;
  const score = Math.round(ratio * maxMarks);

  return { score, feedback };
}

export default function PastPapersTab({ subject }: { subject: Subject }) {
  const papers = getPapersBySubject(subject.slug);
  const [selectedPaper, setSelectedPaper] = useState<PastPaper | null>(null);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { score: number; feedback: string[] }>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopTimer = useCallback(() => {
    setTimerRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            stopTimer();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRunning, timeLeft, stopTimer]);

  const startExam = (paper: PastPaper) => {
    setSelectedPaper(paper);
    setExamStarted(true);
    setExamFinished(false);
    setTimeLeft(paper.duration * 60);
    setTimerRunning(true);
    setAnswers({});
    setResults({});
  };

  const submitExam = () => {
    if (!selectedPaper) return;
    stopTimer();
    const newResults: Record<string, { score: number; feedback: string[] }> = {};
    selectedPaper.questions.forEach(q => {
      newResults[q.id] = evaluateAnswer(answers[q.id] || "", q.markscheme, q.marks);
    });
    setResults(newResults);
    setExamFinished(true);
  };

  const resetExam = () => {
    stopTimer();
    setSelectedPaper(null);
    setExamStarted(false);
    setExamFinished(false);
    setAnswers({});
    setResults({});
  };

  // Paper selection view
  if (!examStarted) {
    return (
      <div>
        <div className="glass rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <FileText size={20} className={subject.colorClass} />
            Past Papers — Exam Simulation
          </h2>
          <p className="text-sm text-zinc-400">
            Select a practice paper and complete it under real exam conditions with time tracking.
            After submission, your work will be graded against the markscheme.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-xl p-4 mb-6 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <span className="font-semibold text-amber-400">Disclaimer:</span> These practice papers are IB-style exercises created for study purposes.
                They are <span className="font-medium text-white">not official IB past papers</span> and are not affiliated with or endorsed by the International Baccalaureate Organization (IBO).
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                For official past papers, access the <span className="text-zinc-300">IB Questionbank</span> through your school&#39;s credentials
                or visit <span className="text-zinc-300">ibo.org</span>. Additional resources available at <span className="text-zinc-300">Follet IB Store</span> and your school&#39;s IB Coordinator.
              </p>
            </div>
          </div>
        </div>

        {papers.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center text-zinc-400">
            No practice papers available for this subject yet.
          </div>
        ) : (
          <div className="grid gap-4">
            {papers.map(paper => (
              <div key={paper.id} className="glass rounded-xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-white">{paper.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1">{paper.session} {paper.year} · {paper.paper} · <span className="text-amber-400/70">Practice Paper</span></p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    subject.level === 'HL' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>{subject.level}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {paper.duration} min</span>
                  <span className="flex items-center gap-1"><Award size={12} /> {paper.totalMarks} Points</span>
                  <span>{paper.questions.length} Questions</span>
                </div>
                <button
                  onClick={() => startExam(paper)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2 transition-all hover:opacity-90"
                  style={{ background: subject.color }}
                >
                  <Play size={14} />
                  Start Exam
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Results view
  if (examFinished && selectedPaper) {
    const totalScore = Object.values(results).reduce((sum, r) => sum + r.score, 0);
    const totalMax = selectedPaper.questions.reduce((sum, q) => sum + q.marks, 0);
    const pct = Math.round((totalScore / totalMax) * 100);

    let grade = "1";
    if (pct >= 90) grade = "7";
    else if (pct >= 80) grade = "6";
    else if (pct >= 70) grade = "5";
    else if (pct >= 55) grade = "4";
    else if (pct >= 40) grade = "3";
    else if (pct >= 25) grade = "2";

    return (
      <div>
        {/* Score Summary */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-xl p-8 text-center mb-6">
          <Award size={48} className="mx-auto mb-4" style={{ color: subject.color }} />
          <h2 className="text-2xl font-bold text-white mb-2">Exam Complete</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            <div>
              <p className="text-2xl sm:text-3xl font-black" style={{ color: subject.color }}>{totalScore}/{totalMax}</p>
              <p className="text-xs text-zinc-500">Points</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl sm:text-3xl font-black" style={{ color: subject.color }}>{pct}%</p>
              <p className="text-xs text-zinc-500">Percent</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl sm:text-3xl font-black" style={{ color: subject.color }}>Grade {grade}</p>
              <p className="text-xs text-zinc-500">IB Grade</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400">{selectedPaper.title} · {selectedPaper.session} {selectedPaper.year}</p>
        </motion.div>

        {/* Detailed Results */}
        <div className="space-y-4 mb-6">
          {selectedPaper.questions.map(q => {
            const result = results[q.id];
            if (!result) return null;
            return (
              <div key={q.id} className="glass rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-white">Question {q.questionNumber}</h3>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${
                    result.score >= q.marks * 0.7 ? 'bg-green-500/20 text-green-400' :
                    result.score >= q.marks * 0.4 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {result.score}/{q.marks}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 mb-3">{q.text.substring(0, 150)}...</p>

                {/* Your Answer */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-zinc-500 mb-1">Your Answer:</p>
                  <p className="text-sm text-zinc-400 bg-white/5 rounded-lg p-3">
                    {answers[q.id] || <span className="italic text-zinc-600">No answer</span>}
                  </p>
                </div>

                {/* Markscheme Feedback */}
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-2">Markscheme Assessment:</p>
                  <div className="space-y-1">
                    {result.feedback.map((f, i) => (
                      <p key={i} className={`text-xs ${f.startsWith("✓") ? "text-green-400" : "text-red-400"}`}>
                        {f}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={resetExam}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white mx-auto"
          style={{ background: subject.color }}
        >
          <RotateCcw size={14} />
          Back to Overview
        </button>
      </div>
    );
  }

  // Exam in progress
  if (!selectedPaper) return null;

  const timeWarning = timeLeft < selectedPaper.duration * 60 * 0.1;

  return (
    <div>
      {/* Timer Bar */}
      <div className={`glass-strong rounded-xl p-4 mb-6 sticky top-0 z-30 ${timeWarning ? 'border-red-500/50' : ''}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <Timer size={18} className={`shrink-0 ${timeWarning ? 'text-red-400 animate-pulse' : subject.colorClass}`} />
            <span className={`text-lg sm:text-2xl font-mono font-bold ${timeWarning ? 'text-red-400' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="p-2.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white transition-all"
            >
              {timerRunning ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={submitExam}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white"
              style={{ background: subject.color }}
            >
              <Send size={14} />
              <span className="hidden sm:inline">Submit</span>
              <span className="sm:hidden">Done</span>
            </button>
          </div>
        </div>
        {/* Progress */}
        <div className="h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              background: timeWarning ? '#ef4444' : subject.color,
              width: `${(timeLeft / (selectedPaper.duration * 60)) * 100}%`
            }}
          />
        </div>
      </div>

      {timeWarning && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4 flex items-center gap-2 text-sm text-red-400"
        >
          <AlertTriangle size={16} />
          Less than 10% of time remaining!
        </motion.div>
      )}

      {/* Questions */}
      <div className="space-y-6">
        {selectedPaper.questions.map(q => (
          <div key={q.id} className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Question {q.questionNumber}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-zinc-400">{q.commandTerm}</span>
              </div>
              <span className="text-sm text-zinc-400">[{q.marks} marks]</span>
            </div>
            <p className="text-sm text-zinc-300 mb-4 whitespace-pre-line">{q.text}</p>
            <textarea
              value={answers[q.id] || ""}
              onChange={e => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
              placeholder="Enter your answer here..."
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 min-h-[120px] resize-y"
              rows={q.type === 'essay' ? 12 : q.type === 'extended' ? 8 : 4}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[11px] text-zinc-600">
                {(answers[q.id] || "").split(/\s+/).filter(Boolean).length} words
              </span>
              {answers[q.id]?.trim() && (
                <CheckCircle2 size={14} className="text-green-500/50" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center pb-8">
        <button
          onClick={submitExam}
          className="px-8 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 mx-auto transition-all hover:opacity-90"
          style={{ background: subject.color }}
        >
          <Send size={16} />
          Submit Exam
        </button>
        <p className="text-xs text-zinc-600 mt-2">Answers will be automatically graded against the markscheme</p>
      </div>
    </div>
  );
}

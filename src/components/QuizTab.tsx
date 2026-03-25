"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Filter } from "lucide-react";
import type { Subject } from "@/lib/subjects";
import { getQuestionsBySubject } from "@/data/quizData";

export default function QuizTab({ subject }: { subject: Subject }) {
  const allQuestions = useMemo(() => getQuestionsBySubject(subject.slug), [subject.slug]);
  const [topicFilter, setTopicFilter] = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);

  const questions = useMemo(() => {
    return allQuestions.filter(q => {
      if (topicFilter !== "all" && q.topic !== topicFilter) return false;
      if (diffFilter !== "all" && q.difficulty !== diffFilter) return false;
      return true;
    });
  }, [allQuestions, topicFilter, diffFilter]);

  const topics = useMemo(() => [...new Set(allQuestions.map(q => q.topic))], [allQuestions]);

  const startQuiz = () => {
    setStarted(true);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setFinished(false);
  };

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    const isCorrect = optionIndex === questions[currentIndex].correctAnswer;
    if (isCorrect) setScore(s => s + 1);
    setAnswers(prev => [...prev, optionIndex]);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex(i => i + 1);
      setSelected(null);
    }
  };

  if (!started || questions.length === 0) {
    return (
      <div>
        <div className="glass rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Filter size={18} />
            Configure Quiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-zinc-400 mb-1 block">Topic</label>
              <select
                value={topicFilter}
                onChange={e => setTopicFilter(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20"
              >
                <option value="all">All Topics</option>
                {topics.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-1 block">Difficulty</label>
              <select
                value={diffFilter}
                onChange={e => setDiffFilter(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20"
              >
                <option value="all">All</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-zinc-400 mb-4">{questions.length} questions available</div>
          <button
            onClick={startQuiz}
            disabled={questions.length === 0}
            className="px-6 py-2.5 rounded-lg font-medium text-sm text-white transition-all disabled:opacity-50"
            style={{ background: subject.color }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-xl p-8 text-center">
        <Trophy size={48} className="mx-auto mb-4" style={{ color: subject.color }} />
        <h2 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h2>
        <p className="text-4xl font-black mb-2" style={{ color: subject.color }}>{pct}%</p>
        <p className="text-zinc-400 mb-6">{score} of {questions.length} correct</p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                answers[i] === q.correctAnswer ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <button
          onClick={startQuiz}
          className="px-6 py-2.5 rounded-lg font-medium text-sm text-white flex items-center gap-2 mx-auto"
          style={{ background: subject.color }}
        >
          <RotateCcw size={16} />
          Try Again
        </button>
      </motion.div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-zinc-400">Question {currentIndex + 1} of {questions.length}</span>
        <span className="text-sm font-medium" style={{ color: subject.color }}>Score: {score}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: subject.color }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="glass rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              q.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
              q.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>{q.difficulty}</span>
            <span className="text-[11px] text-zinc-500">{q.topic}</span>
          </div>
          <h3 className="text-lg font-medium text-white mb-6">{q.question}</h3>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              let bg = "bg-white/5 hover:bg-white/10 border-white/10";
              if (selected !== null) {
                if (i === q.correctAnswer) bg = "bg-green-500/20 border-green-500/50";
                else if (i === selected) bg = "bg-red-500/20 border-red-500/50";
                else bg = "bg-white/5 border-white/5 opacity-50";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left p-4 rounded-lg border transition-all flex items-center gap-3 ${bg}`}
                >
                  <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-white">{opt}</span>
                  {selected !== null && i === q.correctAnswer && <CheckCircle2 size={18} className="ml-auto text-green-400" />}
                  {selected !== null && i === selected && i !== q.correctAnswer && <XCircle size={18} className="ml-auto text-red-400" />}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
              <div className={`p-3 rounded-lg text-sm ${
                selected === q.correctAnswer ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'
              }`}>
                {q.explanation}
              </div>
              <button
                onClick={nextQuestion}
                className="mt-4 px-5 py-2 rounded-lg text-sm font-medium text-white"
                style={{ background: subject.color }}
              >
                {currentIndex + 1 >= questions.length ? "Show Results" : "Next Question →"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

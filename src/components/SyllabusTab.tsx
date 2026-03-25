"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";
import type { Subject } from "@/lib/subjects";

export default function SyllabusTab({ subject }: { subject: Subject }) {
  const [openTopic, setOpenTopic] = useState<string | null>(subject.topics[0]?.id || null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleComplete = (topicId: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  };

  const progress = subject.topics.length > 0
    ? Math.round((completed.size / subject.topics.length) * 100)
    : 0;

  return (
    <div>
      {/* Progress Bar */}
      <div className="glass rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zinc-400">Syllabus Progress</span>
          <span className="text-sm font-medium text-white">{progress}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: subject.color }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-xs text-zinc-500 mt-2">{completed.size} of {subject.topics.length} topics completed</p>
      </div>

      {/* Topics */}
      <div className="space-y-2">
        {subject.topics.map((topic, i) => (
          <div key={topic.id} className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 transition-colors"
            >
              <button
                onClick={(e) => { e.stopPropagation(); toggleComplete(topic.id); }}
                className="shrink-0"
              >
                {completed.has(topic.id) ? (
                  <CheckCircle2 size={20} style={{ color: subject.color }} />
                ) : (
                  <Circle size={20} className="text-zinc-600" />
                )}
              </button>
              <div className="flex-1">
                <span className="text-xs text-zinc-500 font-medium">Topic {i + 1}</span>
                <h3 className={`font-medium ${completed.has(topic.id) ? 'text-zinc-500 line-through' : 'text-white'}`}>
                  {topic.name}
                </h3>
              </div>
              <ChevronDown
                size={18}
                className={`text-zinc-500 transition-transform ${openTopic === topic.id ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openTopic === topic.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pl-12">
                    <p className="text-sm text-zinc-400">{topic.description}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-[11px] px-2 py-1 rounded bg-white/5 text-zinc-400">
                        Notes
                      </span>
                      <span className="text-[11px] px-2 py-1 rounded bg-white/5 text-zinc-400">
                        Start Quiz
                      </span>
                      <span className="text-[11px] px-2 py-1 rounded bg-white/5 text-zinc-400">
                        Flashcards
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

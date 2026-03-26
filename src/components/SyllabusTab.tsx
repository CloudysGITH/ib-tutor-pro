"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Circle, BookOpen, Lightbulb } from "lucide-react";
import type { Subject } from "@/lib/subjects";
import { getTopicNotes } from "@/data/topicNotes";
import { getDiagramsByTopic } from "@/data/diagramData";
import { useProgress } from "@/lib/useProgress";
import DiagramChallenge from "@/components/DiagramChallenge";

function renderMarkdown(text: string) {
  // Simple bold rendering for **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function SyllabusTab({ subject }: { subject: Subject }) {
  const [openTopic, setOpenTopic] = useState<string | null>(subject.topics[0]?.id || null);
  const { completedTopics: completed, toggleTopic } = useProgress(subject.slug);

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
        {subject.topics.map((topic, i) => {
          const notes = getTopicNotes(topic.id);
          const topicDiagrams = getDiagramsByTopic(topic.id);
          const isOpen = openTopic === topic.id;

          return (
            <div key={topic.id} className="glass rounded-xl overflow-hidden">
              <div
                onClick={() => setOpenTopic(isOpen ? null : topic.id)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 transition-colors cursor-pointer"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); toggleTopic(topic.id); }}
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
                {notes && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium mr-1">
                    Notes
                  </span>
                )}
                <ChevronDown
                  size={18}
                  className={`text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-6 md:pl-12 space-y-4">
                      {/* Description */}
                      <p className="text-sm text-zinc-400">{topic.description}</p>

                      {notes ? (
                        <>
                          {/* Key Concepts */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <BookOpen size={14} style={{ color: subject.color }} />
                              <h4 className="text-xs font-semibold uppercase tracking-wider" style={{ color: subject.color }}>
                                Key Concepts
                              </h4>
                            </div>
                            <ul className="space-y-2">
                              {notes.keyConcepts.map((concept, j) => (
                                <li key={j} className="flex items-start gap-2.5">
                                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 bg-zinc-600" />
                                  <span className="text-sm text-zinc-300 leading-relaxed">
                                    {renderMarkdown(concept)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Definitions */}
                          {notes.definitions && notes.definitions.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                Key Definitions
                              </h4>
                              <div className="grid gap-2">
                                {notes.definitions.map((def, j) => (
                                  <div key={j} className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                                    <span className="text-xs font-semibold text-white">{def.term}</span>
                                    <p className="text-xs text-zinc-400 mt-0.5">{def.definition}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Exam Tip */}
                          {notes.examTip && (
                            <div className="flex items-start gap-2 rounded-lg bg-amber-500/5 border border-amber-500/10 p-3">
                              <Lightbulb size={14} className="text-amber-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Exam Tip</span>
                                <p className="text-xs text-zinc-300 mt-0.5">{notes.examTip}</p>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <p className="text-xs text-zinc-600 italic">Study notes coming soon.</p>
                      )}

                      {/* Interactive Diagrams */}
                      {topicDiagrams.length > 0 && (
                        <div className="space-y-4 pt-2 border-t border-white/5">
                          {topicDiagrams.map(diagram => (
                            <DiagramChallenge
                              key={diagram.id}
                              diagram={diagram}
                              accentColor={subject.color}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from "lucide-react";
import type { Subject } from "@/lib/subjects";
import { getFlashcardsBySubject } from "@/data/flashcardData";

export default function FlashcardTab({ subject }: { subject: Subject }) {
  const allCards = useMemo(() => getFlashcardsBySubject(subject.slug), [subject.slug]);
  const [topicFilter, setTopicFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const cards = useMemo(() => {
    let filtered = topicFilter === "all" ? [...allCards] : allCards.filter(c => c.topic === topicFilter);
    if (shuffled) {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }
    return filtered;
  }, [allCards, topicFilter, shuffled]);

  const topics = useMemo(() => [...new Set(allCards.map(c => c.topic))], [allCards]);

  const goNext = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex(i => (i + 1) % cards.length), 150);
  };

  const goPrev = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex(i => (i - 1 + cards.length) % cards.length), 150);
  };

  const doShuffle = () => {
    setShuffled(s => !s);
    setCurrentIndex(0);
    setFlipped(false);
  };

  if (cards.length === 0) {
    return <div className="glass rounded-xl p-8 text-center text-zinc-400">No flashcards available.</div>;
  }

  const card = cards[currentIndex];

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select
          value={topicFilter}
          onChange={e => { setTopicFilter(e.target.value); setCurrentIndex(0); setFlipped(false); }}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
        >
          <option value="all">All Topics</option>
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button
          onClick={doShuffle}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-all ${
            shuffled ? 'bg-white/10 text-white' : 'bg-white/5 text-zinc-400 hover:text-white'
          }`}
        >
          <Shuffle size={14} />
          Shuffle
        </button>
        <span className="text-sm text-zinc-500 ml-auto">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      {/* Flashcard */}
      <div className="flex justify-center mb-6" style={{ perspective: 1000 }}>
        <motion.div
          onClick={() => setFlipped(!flipped)}
          className="relative w-full max-w-lg cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 25 }}
        >
          {/* Front */}
          <div
            className="glass rounded-2xl p-6 sm:p-8 min-h-[220px] sm:min-h-[280px] flex flex-col justify-center items-center text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-xs text-zinc-500 mb-3 sm:mb-4 uppercase tracking-wider">{card.topic}</span>
            <p className="text-lg sm:text-xl font-medium text-white">{card.front}</p>
            <span className="text-xs text-zinc-600 mt-4 sm:mt-6">Click to flip</span>
          </div>

          {/* Back */}
          <div
            className="glass rounded-2xl p-6 sm:p-8 min-h-[220px] sm:min-h-[280px] flex flex-col justify-center items-center text-center absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderColor: subject.color,
              borderWidth: 1,
            }}
          >
            <span className="text-[11px] uppercase tracking-wider mb-4" style={{ color: subject.color }}>Answer</span>
            <p className="text-lg text-zinc-200 leading-relaxed">{card.back}</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={goPrev}
          className="p-3 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => { setCurrentIndex(0); setFlipped(false); }}
          className="p-3 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={goNext}
          className="p-3 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-6 flex-wrap">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentIndex(i); setFlipped(false); }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? 'scale-125' : 'opacity-40'
            }`}
            style={{ background: i === currentIndex ? subject.color : '#555' }}
          />
        ))}
      </div>
    </div>
  );
}

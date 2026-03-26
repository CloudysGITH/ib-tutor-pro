"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "ib-tutor-progress";

export interface SubjectProgress {
  completedTopics: string[];
  quizScores: Record<string, { score: number; total: number; date: string }>;
  flashcardsSeen: string[];
  pastPaperScores: Record<string, { score: number; total: number; grade: string; date: string }>;
}

export interface Progress {
  subjects: Record<string, SubjectProgress>;
  lastUpdated: string;
}

function getDefaultProgress(): Progress {
  return { subjects: {}, lastUpdated: new Date().toISOString() };
}

function loadProgress(): Progress {
  if (typeof window === "undefined") return getDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    return JSON.parse(raw) as Progress;
  } catch {
    return getDefaultProgress();
  }
}

function saveProgress(progress: Progress) {
  if (typeof window === "undefined") return;
  try {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage full or unavailable
  }
}

function getSubjectProgress(progress: Progress, slug: string): SubjectProgress {
  return progress.subjects[slug] || {
    completedTopics: [],
    quizScores: {},
    flashcardsSeen: [],
    pastPaperScores: {},
  };
}

export function useProgress(subjectSlug: string) {
  const [progress, setProgress] = useState<Progress>(getDefaultProgress);

  // Load from localStorage on mount
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const subjectProgress = getSubjectProgress(progress, subjectSlug);

  const update = useCallback((updater: (sp: SubjectProgress) => SubjectProgress) => {
    setProgress(prev => {
      const current = getSubjectProgress(prev, subjectSlug);
      const updated = updater(current);
      const next: Progress = {
        ...prev,
        subjects: { ...prev.subjects, [subjectSlug]: updated },
      };
      saveProgress(next);
      return next;
    });
  }, [subjectSlug]);

  const toggleTopic = useCallback((topicId: string) => {
    update(sp => {
      const topics = new Set(sp.completedTopics);
      if (topics.has(topicId)) topics.delete(topicId);
      else topics.add(topicId);
      return { ...sp, completedTopics: [...topics] };
    });
  }, [update]);

  const saveQuizScore = useCallback((quizId: string, score: number, total: number) => {
    update(sp => ({
      ...sp,
      quizScores: {
        ...sp.quizScores,
        [quizId]: { score, total, date: new Date().toISOString() },
      },
    }));
  }, [update]);

  const markFlashcardSeen = useCallback((cardId: string) => {
    update(sp => {
      const seen = new Set(sp.flashcardsSeen);
      seen.add(cardId);
      return { ...sp, flashcardsSeen: [...seen] };
    });
  }, [update]);

  const savePastPaperScore = useCallback((paperId: string, score: number, total: number, grade: string) => {
    update(sp => ({
      ...sp,
      pastPaperScores: {
        ...sp.pastPaperScores,
        [paperId]: { score, total, grade, date: new Date().toISOString() },
      },
    }));
  }, [update]);

  return {
    completedTopics: new Set(subjectProgress.completedTopics),
    quizScores: subjectProgress.quizScores,
    flashcardsSeen: new Set(subjectProgress.flashcardsSeen),
    pastPaperScores: subjectProgress.pastPaperScores,
    toggleTopic,
    saveQuizScore,
    markFlashcardSeen,
    savePastPaperScore,
  };
}

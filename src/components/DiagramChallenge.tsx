"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Target } from "lucide-react";
import type { Diagram } from "@/data/diagramData";

interface Props {
  diagram: Diagram;
  accentColor: string;
}

export default function DiagramChallenge({ diagram, accentColor }: Props) {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [draggedLabel, setDraggedLabel] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const allLabels = diagram.zones.map(z => z.correctLabel);
  const shuffledLabels = useState(() => [...allLabels].sort(() => Math.random() - 0.5))[0];

  const placedLabels = new Set(Object.values(placements));
  const availableLabels = shuffledLabels.filter(l => !placedLabels.has(l));

  const handleDrop = useCallback((zoneId: string) => {
    if (!draggedLabel || checked) return;
    // Remove label from any previous zone
    const newPlacements = { ...placements };
    for (const [key, val] of Object.entries(newPlacements)) {
      if (val === draggedLabel) delete newPlacements[key];
    }
    newPlacements[zoneId] = draggedLabel;
    setPlacements(newPlacements);
    setDraggedLabel(null);
  }, [draggedLabel, placements, checked]);

  const removeFromZone = (zoneId: string) => {
    if (checked) return;
    const newPlacements = { ...placements };
    delete newPlacements[zoneId];
    setPlacements(newPlacements);
  };

  const checkAnswers = () => setChecked(true);

  const reset = () => {
    setPlacements({});
    setChecked(false);
    setDraggedLabel(null);
  };

  const correctCount = checked
    ? diagram.zones.filter(z => placements[z.id] === z.correctLabel).length
    : 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target size={16} style={{ color: accentColor }} />
          <h3 className="text-sm font-semibold text-white">{diagram.title}</h3>
        </div>
        {checked && (
          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{
            background: correctCount === diagram.zones.length ? 'rgba(34,197,94,0.2)' : 'rgba(234,179,8,0.2)',
            color: correctCount === diagram.zones.length ? '#4ade80' : '#eab308',
          }}>
            {correctCount}/{diagram.zones.length} correct
          </span>
        )}
      </div>
      <p className="text-xs text-zinc-500">{diagram.description}</p>

      {/* Diagram with drop zones */}
      <div className="relative bg-black/20 rounded-xl border border-white/5 overflow-hidden">
        <svg
          viewBox={diagram.svgViewBox}
          className="w-full h-auto"
          dangerouslySetInnerHTML={{ __html: diagram.svgElements }}
        />

        {/* Drop zones overlay */}
        {diagram.zones.map(zone => {
          const placed = placements[zone.id];
          const isCorrect = checked && placed === zone.correctLabel;
          const isWrong = checked && placed && placed !== zone.correctLabel;
          const isEmpty = !placed;

          return (
            <div
              key={zone.id}
              onClick={() => {
                if (placed && !checked) {
                  removeFromZone(zone.id);
                } else if (draggedLabel) {
                  handleDrop(zone.id);
                }
              }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                isEmpty && draggedLabel ? 'animate-pulse' : ''
              }`}
              style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
            >
              {placed ? (
                <div className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium border ${
                  isCorrect
                    ? 'bg-green-500/20 border-green-500/40 text-green-400'
                    : isWrong
                    ? 'bg-red-500/20 border-red-500/40 text-red-400'
                    : 'bg-white/10 border-white/20 text-white'
                }`}>
                  {isCorrect && <CheckCircle2 size={10} />}
                  {isWrong && <XCircle size={10} />}
                  {placed}
                  {isWrong && checked && (
                    <span className="text-green-400 ml-1">→ {zone.correctLabel}</span>
                  )}
                </div>
              ) : (
                <div className={`w-20 h-6 rounded border-2 border-dashed flex items-center justify-center text-[9px] ${
                  draggedLabel
                    ? 'border-white/40 text-white/40 bg-white/5'
                    : 'border-white/10 text-white/20'
                } ${checked ? 'border-red-500/30' : ''}`}>
                  {checked ? (
                    <span className="text-green-400 text-[9px]">{zone.correctLabel}</span>
                  ) : (
                    '?'
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Available labels */}
      {!checked && (
        <div>
          <p className="text-[10px] text-zinc-600 mb-2 uppercase tracking-wider font-medium">
            {draggedLabel ? `Click a drop zone to place "${draggedLabel}"` : 'Click a label, then click a drop zone'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {availableLabels.map(label => (
              <button
                key={label}
                onClick={() => setDraggedLabel(draggedLabel === label ? null : label)}
                className={`px-2.5 py-1.5 rounded text-[11px] font-medium transition-all ${
                  draggedLabel === label
                    ? 'text-white ring-2 scale-105'
                    : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                }`}
                style={draggedLabel === label ? {
                  background: accentColor + '30',
                  boxShadow: `0 0 0 2px ${accentColor}`,
                } : {}}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        {!checked ? (
          <button
            onClick={checkAnswers}
            disabled={Object.keys(placements).length === 0}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white transition-all disabled:opacity-30"
            style={{ background: accentColor }}
          >
            <CheckCircle2 size={13} />
            Check Answers
          </button>
        ) : null}
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 bg-white/5 hover:bg-white/10 transition-all"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>
    </div>
  );
}

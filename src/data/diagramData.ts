export interface LabelZone {
  id: string;
  correctLabel: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

export interface Diagram {
  id: string;
  subject: string;
  topicId: string;
  title: string;
  description: string;
  svgViewBox: string;
  svgElements: string; // raw SVG markup for the diagram
  zones: LabelZone[];
}

export const diagrams: Diagram[] = [
  // ============================================================
  // BIOLOGY — Animal Cell
  // ============================================================
  {
    id: "bio-animal-cell",
    subject: "biology",
    topicId: "bio-A2.2",
    title: "Animal Cell Structure",
    description: "Label the key organelles of a typical animal cell.",
    svgViewBox: "0 0 400 350",
    svgElements: `
      <!-- Cell membrane -->
      <ellipse cx="200" cy="175" rx="180" ry="155" fill="none" stroke="#4ade80" stroke-width="2.5" opacity="0.7"/>
      <!-- Cytoplasm fill -->
      <ellipse cx="200" cy="175" rx="178" ry="153" fill="#22c55e" opacity="0.05"/>
      <!-- Nucleus -->
      <circle cx="200" cy="165" r="55" fill="#1e3a2e" stroke="#4ade80" stroke-width="2" opacity="0.8"/>
      <!-- Nucleolus -->
      <circle cx="210" cy="155" r="15" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
      <!-- Nuclear pores (dots) -->
      <circle cx="155" cy="140" r="3" fill="#4ade80" opacity="0.6"/>
      <circle cx="245" cy="145" r="3" fill="#4ade80" opacity="0.6"/>
      <circle cx="160" cy="190" r="3" fill="#4ade80" opacity="0.6"/>
      <circle cx="240" cy="195" r="3" fill="#4ade80" opacity="0.6"/>
      <!-- Rough ER -->
      <path d="M 265 140 Q 290 130 310 145 Q 330 160 310 175 Q 290 185 270 175" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0.7"/>
      <path d="M 270 148 Q 295 138 312 150 Q 325 160 308 170 Q 292 178 272 170" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0.7"/>
      <!-- Ribosomes on RER (dots) -->
      <circle cx="268" cy="142" r="2" fill="#60a5fa"/>
      <circle cx="285" cy="134" r="2" fill="#60a5fa"/>
      <circle cx="305" cy="140" r="2" fill="#60a5fa"/>
      <circle cx="320" cy="152" r="2" fill="#60a5fa"/>
      <circle cx="312" cy="170" r="2" fill="#60a5fa"/>
      <circle cx="290" cy="180" r="2" fill="#60a5fa"/>
      <!-- Smooth ER -->
      <path d="M 270 200 Q 300 195 320 210 Q 335 225 315 235 Q 295 240 280 230" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.7"/>
      <path d="M 275 207 Q 300 202 317 215 Q 328 225 312 232 Q 298 236 283 228" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.7"/>
      <!-- Mitochondria -->
      <ellipse cx="110" cy="240" rx="35" ry="18" fill="#1e293b" stroke="#f59e0b" stroke-width="2" opacity="0.8" transform="rotate(-20 110 240)"/>
      <path d="M 85 235 Q 95 225 105 235 Q 115 245 125 235 Q 135 225 140 235" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
      <!-- Mitochondria 2 -->
      <ellipse cx="310" cy="275" rx="28" ry="15" fill="#1e293b" stroke="#f59e0b" stroke-width="2" opacity="0.8" transform="rotate(15 310 275)"/>
      <path d="M 290 270 Q 300 262 310 270 Q 320 278 330 270" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
      <!-- Golgi apparatus -->
      <path d="M 85 120 Q 70 100 85 85" fill="none" stroke="#f472b6" stroke-width="2.5" opacity="0.7"/>
      <path d="M 90 125 Q 73 103 90 88" fill="none" stroke="#f472b6" stroke-width="2" opacity="0.6"/>
      <path d="M 95 128 Q 78 108 95 92" fill="none" stroke="#f472b6" stroke-width="1.5" opacity="0.5"/>
      <!-- Vesicles from Golgi -->
      <circle cx="75" cy="78" r="5" fill="none" stroke="#f472b6" stroke-width="1.5" opacity="0.5"/>
      <circle cx="68" cy="90" r="4" fill="none" stroke="#f472b6" stroke-width="1.5" opacity="0.5"/>
      <!-- Lysosomes -->
      <circle cx="140" cy="280" r="12" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" opacity="0.7"/>
      <circle cx="140" cy="280" r="5" fill="#ef4444" opacity="0.3"/>
      <!-- Centrioles -->
      <rect x="250" cy="80" y="75" width="18" height="8" rx="3" fill="none" stroke="#e2e8f0" stroke-width="1.5" opacity="0.6" transform="rotate(45 259 79)"/>
      <rect x="256" y="82" width="18" height="8" rx="3" fill="none" stroke="#e2e8f0" stroke-width="1.5" opacity="0.6" transform="rotate(-45 265 86)"/>
      <!-- Free ribosomes -->
      <circle cx="155" cy="110" r="3" fill="#60a5fa" opacity="0.5"/>
      <circle cx="340" cy="150" r="3" fill="#60a5fa" opacity="0.5"/>
      <circle cx="165" cy="300" r="3" fill="#60a5fa" opacity="0.5"/>
      <circle cx="230" cy="280" r="3" fill="#60a5fa" opacity="0.5"/>
    `,
    zones: [
      { id: "z1", correctLabel: "Cell membrane", x: 95, y: 50 },
      { id: "z2", correctLabel: "Nucleus", x: 50, y: 47 },
      { id: "z3", correctLabel: "Nucleolus", x: 53, y: 44 },
      { id: "z4", correctLabel: "Rough ER", x: 75, y: 40 },
      { id: "z5", correctLabel: "Smooth ER", x: 78, y: 60 },
      { id: "z6", correctLabel: "Mitochondrion", x: 25, y: 68 },
      { id: "z7", correctLabel: "Golgi apparatus", x: 18, y: 28 },
      { id: "z8", correctLabel: "Ribosome", x: 38, y: 31 },
      { id: "z9", correctLabel: "Lysosome", x: 33, y: 80 },
      { id: "z10", correctLabel: "Centrioles", x: 65, y: 23 },
    ],
  },

  // ============================================================
  // BIOLOGY — Plant Cell
  // ============================================================
  {
    id: "bio-plant-cell",
    subject: "biology",
    topicId: "bio-A2.2",
    title: "Plant Cell Structure",
    description: "Label the key organelles of a typical plant cell.",
    svgViewBox: "0 0 400 380",
    svgElements: `
      <!-- Cell wall -->
      <rect x="10" y="10" width="380" height="360" rx="20" fill="none" stroke="#4ade80" stroke-width="3" opacity="0.6"/>
      <!-- Cell membrane -->
      <rect x="18" y="18" width="364" height="344" rx="16" fill="#22c55e" opacity="0.05" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
      <!-- Large central vacuole -->
      <ellipse cx="200" cy="200" rx="120" ry="110" fill="#1e3a5f" opacity="0.3" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
      <!-- Nucleus -->
      <circle cx="100" cy="100" r="40" fill="#1e3a2e" stroke="#4ade80" stroke-width="2" opacity="0.8"/>
      <!-- Nucleolus -->
      <circle cx="108" cy="93" r="12" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
      <!-- Chloroplasts -->
      <ellipse cx="310" cy="90" rx="30" ry="16" fill="#14532d" stroke="#22c55e" stroke-width="2" opacity="0.8"/>
      <line x1="288" y1="87" x2="332" y2="87" stroke="#22c55e" stroke-width="0.8" opacity="0.4"/>
      <line x1="290" y1="93" x2="330" y2="93" stroke="#22c55e" stroke-width="0.8" opacity="0.4"/>
      <ellipse cx="80" cy="300" rx="28" ry="14" fill="#14532d" stroke="#22c55e" stroke-width="2" opacity="0.8"/>
      <line x1="58" y1="297" x2="102" y2="297" stroke="#22c55e" stroke-width="0.8" opacity="0.4"/>
      <line x1="60" y1="303" x2="100" y2="303" stroke="#22c55e" stroke-width="0.8" opacity="0.4"/>
      <!-- Mitochondria -->
      <ellipse cx="320" cy="310" rx="25" ry="13" fill="#1e293b" stroke="#f59e0b" stroke-width="2" opacity="0.8" transform="rotate(-10 320 310)"/>
      <path d="M 300 307 Q 310 300 320 307 Q 330 314 340 307" fill="none" stroke="#f59e0b" stroke-width="0.8" opacity="0.5"/>
      <!-- Rough ER -->
      <path d="M 150 80 Q 175 65 195 80 Q 210 92 195 102" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0.6"/>
      <path d="M 155 85 Q 177 72 193 85 Q 205 95 192 100" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0.6"/>
      <circle cx="153" cy="82" r="2" fill="#60a5fa"/>
      <circle cx="170" cy="70" r="2" fill="#60a5fa"/>
      <circle cx="190" cy="76" r="2" fill="#60a5fa"/>
      <!-- Golgi -->
      <path d="M 310 170 Q 295 155 310 140" fill="none" stroke="#f472b6" stroke-width="2" opacity="0.6"/>
      <path d="M 315 173 Q 300 158 315 143" fill="none" stroke="#f472b6" stroke-width="1.5" opacity="0.5"/>
      <circle cx="300" cy="135" r="4" fill="none" stroke="#f472b6" stroke-width="1"/>
    `,
    zones: [
      { id: "z1", correctLabel: "Cell wall", x: 95, y: 5 },
      { id: "z2", correctLabel: "Cell membrane", x: 92, y: 12 },
      { id: "z3", correctLabel: "Central vacuole", x: 50, y: 53 },
      { id: "z4", correctLabel: "Nucleus", x: 25, y: 26 },
      { id: "z5", correctLabel: "Chloroplast", x: 78, y: 24 },
      { id: "z6", correctLabel: "Mitochondrion", x: 80, y: 82 },
      { id: "z7", correctLabel: "Rough ER", x: 45, y: 21 },
      { id: "z8", correctLabel: "Golgi apparatus", x: 80, y: 42 },
      { id: "z9", correctLabel: "Nucleolus", x: 27, y: 24 },
    ],
  },

  // ============================================================
  // BIOLOGY — Heart Structure
  // ============================================================
  {
    id: "bio-heart",
    subject: "biology",
    topicId: "bio-B3.2",
    title: "Heart Structure",
    description: "Label the chambers, valves, and blood vessels of the human heart.",
    svgViewBox: "0 0 400 400",
    svgElements: `
      <!-- Heart outline -->
      <path d="M 200 350 Q 50 280 40 180 Q 30 80 120 50 Q 170 30 200 80 Q 230 30 280 50 Q 370 80 360 180 Q 350 280 200 350" fill="#1e1e2e" stroke="#ef4444" stroke-width="2.5" opacity="0.8"/>
      <!-- Septum -->
      <line x1="200" y1="80" x2="200" y2="340" stroke="#ef4444" stroke-width="3" opacity="0.5"/>
      <!-- Right atrium -->
      <rect x="210" y="90" width="130" height="90" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5" opacity="0.6"/>
      <text x="275" y="140" text-anchor="middle" fill="#60a5fa" font-size="11" opacity="0.5">RA</text>
      <!-- Left atrium -->
      <rect x="60" y="90" width="130" height="90" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" opacity="0.6"/>
      <text x="125" y="140" text-anchor="middle" fill="#ef4444" font-size="11" opacity="0.5">LA</text>
      <!-- Right ventricle -->
      <path d="M 210 195 L 340 195 L 340 290 Q 340 330 300 340 L 200 340 Z" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5" opacity="0.6"/>
      <text x="270" y="270" text-anchor="middle" fill="#60a5fa" font-size="11" opacity="0.5">RV</text>
      <!-- Left ventricle (thicker wall) -->
      <path d="M 60 195 L 190 195 L 200 340 L 100 340 Q 60 330 60 290 Z" fill="#1e293b" stroke="#ef4444" stroke-width="3" opacity="0.6"/>
      <text x="130" y="270" text-anchor="middle" fill="#ef4444" font-size="11" opacity="0.5">LV</text>
      <!-- AV valves line -->
      <line x1="60" y1="195" x2="190" y2="195" stroke="#f59e0b" stroke-width="2" opacity="0.6"/>
      <line x1="210" y1="195" x2="340" y2="195" stroke="#f59e0b" stroke-width="2" opacity="0.6"/>
      <!-- Aorta -->
      <path d="M 140 90 Q 140 40 180 30 Q 220 20 260 40 Q 300 60 300 90" fill="none" stroke="#ef4444" stroke-width="3" opacity="0.7"/>
      <!-- Pulmonary artery -->
      <path d="M 250 90 Q 250 55 280 45 Q 320 35 350 55" fill="none" stroke="#60a5fa" stroke-width="2.5" opacity="0.7"/>
      <!-- Vena cava -->
      <rect x="335" y="60" width="25" height="70" rx="8" fill="none" stroke="#60a5fa" stroke-width="2" opacity="0.5"/>
      <!-- Pulmonary veins -->
      <rect x="35" y="60" width="25" height="70" rx="8" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.5"/>
    `,
    zones: [
      { id: "z1", correctLabel: "Left atrium", x: 31, y: 28 },
      { id: "z2", correctLabel: "Right atrium", x: 69, y: 28 },
      { id: "z3", correctLabel: "Left ventricle", x: 31, y: 62 },
      { id: "z4", correctLabel: "Right ventricle", x: 69, y: 62 },
      { id: "z5", correctLabel: "Aorta", x: 45, y: 8 },
      { id: "z6", correctLabel: "Pulmonary artery", x: 72, y: 10 },
      { id: "z7", correctLabel: "Vena cava", x: 90, y: 22 },
      { id: "z8", correctLabel: "Pulmonary vein", x: 10, y: 22 },
      { id: "z9", correctLabel: "Septum", x: 50, y: 55 },
      { id: "z10", correctLabel: "AV valves", x: 50, y: 48 },
    ],
  },

  // ============================================================
  // BIOLOGY — Cell Membrane (Fluid Mosaic Model)
  // ============================================================
  {
    id: "bio-membrane",
    subject: "biology",
    topicId: "bio-B2.1",
    title: "Fluid Mosaic Model",
    description: "Label the components of the cell membrane.",
    svgViewBox: "0 0 400 300",
    svgElements: `
      <!-- Phospholipid bilayer - upper layer -->
      ${Array.from({length: 16}, (_, i) => {
        const x = 20 + i * 24;
        return `<circle cx="${x}" cy="110" r="8" fill="#3b82f6" opacity="0.6"/>
        <line x1="${x}" y1="118" x2="${x-3}" y2="148" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"/>
        <line x1="${x}" y1="118" x2="${x+3}" y2="148" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"/>`;
      }).join('')}
      <!-- Phospholipid bilayer - lower layer -->
      ${Array.from({length: 16}, (_, i) => {
        const x = 20 + i * 24;
        return `<circle cx="${x}" cy="190" r="8" fill="#3b82f6" opacity="0.6"/>
        <line x1="${x}" y1="182" x2="${x-3}" y2="152" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"/>
        <line x1="${x}" y1="182" x2="${x+3}" y2="152" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"/>`;
      }).join('')}
      <!-- Integral protein (channel) -->
      <rect x="90" y="100" width="30" height="100" rx="10" fill="#a855f7" opacity="0.5" stroke="#a855f7" stroke-width="1.5"/>
      <rect x="98" y="105" width="14" height="90" rx="5" fill="#1e1e2e"/>
      <!-- Integral protein (carrier) -->
      <ellipse cx="260" cy="150" rx="22" ry="50" fill="#f472b6" opacity="0.4" stroke="#f472b6" stroke-width="1.5"/>
      <!-- Peripheral protein -->
      <ellipse cx="175" cy="105" rx="18" ry="8" fill="#f59e0b" opacity="0.5" stroke="#f59e0b" stroke-width="1.5"/>
      <!-- Cholesterol -->
      <polygon points="330,130 340,150 330,170 320,150" fill="#22c55e" opacity="0.5" stroke="#22c55e" stroke-width="1.5"/>
      <polygon points="355,130 365,150 355,170 345,150" fill="#22c55e" opacity="0.5" stroke="#22c55e" stroke-width="1.5"/>
      <!-- Glycoprotein (sugar chain on top) -->
      <circle cx="175" cy="85" r="4" fill="#f59e0b" opacity="0.6"/>
      <circle cx="168" cy="78" r="3" fill="#f59e0b" opacity="0.5"/>
      <circle cx="182" cy="78" r="3" fill="#f59e0b" opacity="0.5"/>
      <circle cx="175" cy="72" r="3" fill="#f59e0b" opacity="0.4"/>
      <!-- Glycolipid -->
      <circle cx="55" cy="90" r="4" fill="#ef4444" opacity="0.6"/>
      <circle cx="48" cy="83" r="3" fill="#ef4444" opacity="0.5"/>
      <circle cx="62" cy="83" r="3" fill="#ef4444" opacity="0.5"/>
      <!-- Labels for sides -->
      <text x="10" y="30" fill="#9ca3af" font-size="10" opacity="0.4">EXTRACELLULAR</text>
      <text x="10" y="280" fill="#9ca3af" font-size="10" opacity="0.4">INTRACELLULAR</text>
    `,
    zones: [
      { id: "z1", correctLabel: "Phospholipid bilayer", x: 5, y: 50 },
      { id: "z2", correctLabel: "Channel protein", x: 26, y: 35 },
      { id: "z3", correctLabel: "Carrier protein", x: 65, y: 35 },
      { id: "z4", correctLabel: "Peripheral protein", x: 44, y: 27 },
      { id: "z5", correctLabel: "Cholesterol", x: 83, y: 50 },
      { id: "z6", correctLabel: "Glycoprotein", x: 44, y: 18 },
      { id: "z7", correctLabel: "Hydrophilic head", x: 5, y: 37 },
      { id: "z8", correctLabel: "Hydrophobic tails", x: 5, y: 47 },
    ],
  },

  // ============================================================
  // BIOLOGY — Mitosis Stages
  // ============================================================
  {
    id: "bio-mitosis",
    subject: "biology",
    topicId: "bio-D2.1",
    title: "Stages of Mitosis",
    description: "Label the stages of mitosis in order.",
    svgViewBox: "0 0 500 120",
    svgElements: `
      <!-- Stage 1: Interphase -->
      <circle cx="50" cy="60" r="40" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
      <circle cx="50" cy="60" r="18" fill="none" stroke="#60a5fa" stroke-width="1.5"/>
      <path d="M 35 55 Q 50 45 65 55 Q 55 65 40 60" fill="none" stroke="#60a5fa" stroke-width="0.8" opacity="0.4"/>
      <!-- Stage 2: Prophase -->
      <circle cx="150" cy="60" r="40" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
      <path d="M 135 45 Q 150 50 145 65" stroke="#ef4444" stroke-width="2.5" fill="none"/>
      <path d="M 160 45 Q 145 55 155 70" stroke="#3b82f6" stroke-width="2.5" fill="none"/>
      <path d="M 140 55 Q 155 50 150 68" stroke="#ef4444" stroke-width="2.5" fill="none"/>
      <path d="M 155 48 Q 148 58 160 65" stroke="#3b82f6" stroke-width="2.5" fill="none"/>
      <!-- Stage 3: Metaphase -->
      <circle cx="250" cy="60" r="40" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
      <line x1="250" y1="25" x2="250" y2="95" stroke="#9ca3af" stroke-width="0.5" stroke-dasharray="3 2" opacity="0.4"/>
      <line x1="245" y1="42" x2="255" y2="42" stroke="#ef4444" stroke-width="3"/>
      <line x1="245" y1="52" x2="255" y2="52" stroke="#3b82f6" stroke-width="3"/>
      <line x1="245" y1="62" x2="255" y2="62" stroke="#ef4444" stroke-width="3"/>
      <line x1="245" y1="72" x2="255" y2="72" stroke="#3b82f6" stroke-width="3"/>
      <!-- Spindle fibers -->
      <line x1="250" y1="20" x2="247" y2="42" stroke="#9ca3af" stroke-width="0.5" opacity="0.3"/>
      <line x1="250" y1="100" x2="253" y2="72" stroke="#9ca3af" stroke-width="0.5" opacity="0.3"/>
      <!-- Stage 4: Anaphase -->
      <circle cx="350" cy="60" r="40" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
      <line x1="335" y1="40" x2="335" y2="55" stroke="#ef4444" stroke-width="2.5"/>
      <line x1="335" y1="58" x2="335" y2="73" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="365" y1="40" x2="365" y2="55" stroke="#ef4444" stroke-width="2.5"/>
      <line x1="365" y1="58" x2="365" y2="73" stroke="#3b82f6" stroke-width="2.5"/>
      <!-- Arrows showing movement -->
      <path d="M 340 45 L 335 40" stroke="#9ca3af" stroke-width="0.8" opacity="0.4"/>
      <path d="M 360 75 L 365 80" stroke="#9ca3af" stroke-width="0.8" opacity="0.4"/>
      <!-- Stage 5: Telophase -->
      <ellipse cx="440" cy="42" rx="28" ry="25" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
      <ellipse cx="460" cy="78" rx="28" ry="25" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
      <circle cx="440" cy="42" r="10" fill="none" stroke="#60a5fa" stroke-width="1"/>
      <circle cx="460" cy="78" r="10" fill="none" stroke="#60a5fa" stroke-width="1"/>
      <!-- Arrows between stages -->
      <path d="M 95 60 L 105 60" stroke="#9ca3af" stroke-width="1" marker-end="url(#arrow)" opacity="0.3"/>
      <path d="M 195 60 L 205 60" stroke="#9ca3af" stroke-width="1" opacity="0.3"/>
      <path d="M 295 60 L 305 60" stroke="#9ca3af" stroke-width="1" opacity="0.3"/>
      <path d="M 395 60 L 405 60" stroke="#9ca3af" stroke-width="1" opacity="0.3"/>
    `,
    zones: [
      { id: "z1", correctLabel: "Interphase", x: 10, y: 85 },
      { id: "z2", correctLabel: "Prophase", x: 30, y: 85 },
      { id: "z3", correctLabel: "Metaphase", x: 50, y: 85 },
      { id: "z4", correctLabel: "Anaphase", x: 70, y: 85 },
      { id: "z5", correctLabel: "Telophase & Cytokinesis", x: 90, y: 85 },
    ],
  },

  // ============================================================
  // BIOLOGY — DNA Structure
  // ============================================================
  {
    id: "bio-dna",
    subject: "biology",
    topicId: "bio-A1.2",
    title: "DNA Double Helix Structure",
    description: "Label the components of a DNA molecule.",
    svgViewBox: "0 0 400 300",
    svgElements: `
      <!-- Sugar-phosphate backbone strand 1 -->
      <path d="M 120 20 Q 180 60 120 100 Q 60 140 120 180 Q 180 220 120 260 Q 80 280 100 300" fill="none" stroke="#3b82f6" stroke-width="4" opacity="0.7"/>
      <!-- Sugar-phosphate backbone strand 2 -->
      <path d="M 280 20 Q 220 60 280 100 Q 340 140 280 180 Q 220 220 280 260 Q 320 280 300 300" fill="none" stroke="#ef4444" stroke-width="4" opacity="0.7"/>
      <!-- Base pairs (rungs) -->
      <line x1="145" y1="50" x2="255" y2="50" stroke="#4ade80" stroke-width="3" opacity="0.5"/>
      <text x="175" y="45" fill="#4ade80" font-size="10" opacity="0.7">A</text>
      <text x="220" y="45" fill="#f59e0b" font-size="10" opacity="0.7">T</text>
      <line x1="195" y1="50" x2="205" y2="50" stroke="#9ca3af" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="100" y1="100" x2="300" y2="100" stroke="#a855f7" stroke-width="3" opacity="0.5"/>
      <text x="170" y="95" fill="#a855f7" font-size="10" opacity="0.7">G</text>
      <text x="220" y="95" fill="#f472b6" font-size="10" opacity="0.7">C</text>
      <line x1="190" y1="100" x2="210" y2="100" stroke="#9ca3af" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="100" y1="150" x2="300" y2="150" stroke="#4ade80" stroke-width="3" opacity="0.5"/>
      <text x="170" y="145" fill="#f59e0b" font-size="10" opacity="0.7">T</text>
      <text x="220" y="145" fill="#4ade80" font-size="10" opacity="0.7">A</text>
      <line x1="145" y1="200" x2="255" y2="200" stroke="#a855f7" stroke-width="3" opacity="0.5"/>
      <text x="175" y="195" fill="#f472b6" font-size="10" opacity="0.7">C</text>
      <text x="220" y="195" fill="#a855f7" font-size="10" opacity="0.7">G</text>
      <line x1="100" y1="250" x2="300" y2="250" stroke="#4ade80" stroke-width="3" opacity="0.5"/>
      <!-- Hydrogen bonds (dashes between bases) -->
      <line x1="190" y1="150" x2="210" y2="150" stroke="#9ca3af" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="195" y1="200" x2="205" y2="200" stroke="#9ca3af" stroke-width="1" stroke-dasharray="2 2"/>
      <!-- Direction arrows -->
      <text x="90" y="15" fill="#3b82f6" font-size="9" opacity="0.5">5'</text>
      <text x="85" y="295" fill="#3b82f6" font-size="9" opacity="0.5">3'</text>
      <text x="295" y="15" fill="#ef4444" font-size="9" opacity="0.5">3'</text>
      <text x="305" y="295" fill="#ef4444" font-size="9" opacity="0.5">5'</text>
    `,
    zones: [
      { id: "z1", correctLabel: "Sugar-phosphate backbone", x: 22, y: 20 },
      { id: "z2", correctLabel: "Base pair", x: 50, y: 33 },
      { id: "z3", correctLabel: "Hydrogen bonds", x: 50, y: 50 },
      { id: "z4", correctLabel: "Adenine (A)", x: 38, y: 15 },
      { id: "z5", correctLabel: "Thymine (T)", x: 60, y: 15 },
      { id: "z6", correctLabel: "Guanine (G)", x: 38, y: 30 },
      { id: "z7", correctLabel: "Cytosine (C)", x: 60, y: 30 },
      { id: "z8", correctLabel: "Antiparallel strands", x: 80, y: 50 },
    ],
  },

  // ============================================================
  // BIOLOGY — Photosynthesis Overview
  // ============================================================
  {
    id: "bio-photosynthesis",
    subject: "biology",
    topicId: "bio-C1.3",
    title: "Photosynthesis Overview",
    description: "Label the inputs, outputs, and locations of photosynthesis.",
    svgViewBox: "0 0 400 250",
    svgElements: `
      <!-- Chloroplast outline -->
      <ellipse cx="200" cy="125" rx="170" ry="95" fill="#14532d" opacity="0.2" stroke="#22c55e" stroke-width="2"/>
      <!-- Thylakoid stack (granum) -->
      <rect x="60" y="80" width="90" height="14" rx="7" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
      <rect x="60" y="98" width="90" height="14" rx="7" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
      <rect x="60" y="116" width="90" height="14" rx="7" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
      <rect x="60" y="134" width="90" height="14" rx="7" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
      <!-- Stroma area -->
      <text x="230" y="130" fill="#9ca3af" font-size="10" opacity="0.3">STROMA</text>
      <!-- Arrow: Light → Thylakoid -->
      <path d="M 20 60 L 70 85" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="5" y="50" fill="#f59e0b" font-size="11" font-weight="bold">Light</text>
      <!-- Arrow: H2O input -->
      <path d="M 20 170 L 70 145" stroke="#3b82f6" stroke-width="2"/>
      <text x="5" y="185" fill="#3b82f6" font-size="10">H₂O</text>
      <!-- Arrow: O2 output -->
      <path d="M 70 160 L 20 200" stroke="#22c55e" stroke-width="2"/>
      <text x="5" y="218" fill="#22c55e" font-size="10">O₂ out</text>
      <!-- Arrow: ATP/NADPH from thylakoid to stroma -->
      <path d="M 155 110 L 210 110" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2"/>
      <text x="160" y="102" fill="#f59e0b" font-size="9">ATP + NADPH</text>
      <!-- CO2 input to stroma -->
      <path d="M 380 90 L 310 110" stroke="#9ca3af" stroke-width="2"/>
      <text x="355" y="80" fill="#9ca3af" font-size="10">CO₂</text>
      <!-- Calvin cycle circle in stroma -->
      <circle cx="270" cy="130" r="35" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.5"/>
      <text x="248" y="135" fill="#a855f7" font-size="9" opacity="0.6">Calvin</text>
      <text x="251" y="146" fill="#a855f7" font-size="9" opacity="0.6">Cycle</text>
      <!-- Glucose output -->
      <path d="M 305 140 L 370 170" stroke="#22c55e" stroke-width="2"/>
      <text x="348" y="190" fill="#22c55e" font-size="10">C₆H₁₂O₆</text>
    `,
    zones: [
      { id: "z1", correctLabel: "Thylakoid (granum)", x: 25, y: 40 },
      { id: "z2", correctLabel: "Stroma", x: 60, y: 48 },
      { id: "z3", correctLabel: "Light energy", x: 5, y: 18 },
      { id: "z4", correctLabel: "Water (H₂O)", x: 5, y: 65 },
      { id: "z5", correctLabel: "Oxygen (O₂)", x: 5, y: 82 },
      { id: "z6", correctLabel: "Carbon dioxide (CO₂)", x: 90, y: 28 },
      { id: "z7", correctLabel: "Glucose (C₆H₁₂O₆)", x: 90, y: 72 },
      { id: "z8", correctLabel: "ATP + NADPH", x: 45, y: 35 },
    ],
  },

  // ============================================================
  // DESIGN TECHNOLOGY — Scale of Production
  // ============================================================
  {
    id: "dt-production-scale",
    subject: "design-tech",
    topicId: "dtech-4.3",
    title: "Scales of Production",
    description: "Match each production method to its characteristics.",
    svgViewBox: "0 0 500 200",
    svgElements: `
      <!-- Job Production -->
      <rect x="10" y="30" width="110" height="140" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2" opacity="0.6"/>
      <text x="65" y="60" text-anchor="middle" fill="#a855f7" font-size="11" font-weight="bold">JOB</text>
      <!-- Single unique item -->
      <rect x="40" y="80" width="40" height="40" rx="5" fill="#a855f7" opacity="0.2" stroke="#a855f7" stroke-width="1"/>
      <text x="60" y="105" text-anchor="middle" fill="#a855f7" font-size="8">Custom</text>
      <text x="65" y="150" text-anchor="middle" fill="#9ca3af" font-size="8">One-off</text>
      <!-- Batch Production -->
      <rect x="135" y="30" width="110" height="140" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
      <text x="190" y="60" text-anchor="middle" fill="#3b82f6" font-size="11" font-weight="bold">BATCH</text>
      <!-- Multiple identical items -->
      <rect x="150" y="80" width="25" height="25" rx="3" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="1"/>
      <rect x="180" y="80" width="25" height="25" rx="3" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="1"/>
      <rect x="150" y="110" width="25" height="25" rx="3" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="1"/>
      <rect x="180" y="110" width="25" height="25" rx="3" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="1"/>
      <text x="190" y="150" text-anchor="middle" fill="#9ca3af" font-size="8">Groups</text>
      <!-- Mass Production -->
      <rect x="260" y="30" width="110" height="140" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2" opacity="0.6"/>
      <text x="315" y="60" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">MASS</text>
      <!-- Conveyor belt with items -->
      <line x1="270" y1="105" x2="360" y2="105" stroke="#22c55e" stroke-width="2" opacity="0.4"/>
      <rect x="275" y="85" width="15" height="15" rx="2" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="0.8"/>
      <rect x="295" y="85" width="15" height="15" rx="2" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="0.8"/>
      <rect x="315" y="85" width="15" height="15" rx="2" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="0.8"/>
      <rect x="335" y="85" width="15" height="15" rx="2" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="0.8"/>
      <text x="315" y="150" text-anchor="middle" fill="#9ca3af" font-size="8">Continuous</text>
      <!-- Continuous Production -->
      <rect x="385" y="30" width="110" height="140" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2" opacity="0.6"/>
      <text x="440" y="55" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">CONTINUOUS</text>
      <!-- 24/7 symbol -->
      <text x="440" y="100" text-anchor="middle" fill="#f59e0b" font-size="18" opacity="0.4">24/7</text>
      <text x="440" y="150" text-anchor="middle" fill="#9ca3af" font-size="8">Non-stop</text>
      <!-- Arrow: increasing volume -->
      <line x1="30" y1="190" x2="480" y2="190" stroke="#9ca3af" stroke-width="1" opacity="0.3"/>
      <text x="250" y="200" text-anchor="middle" fill="#9ca3af" font-size="9" opacity="0.4">Volume →</text>
      <text x="30" y="18" fill="#9ca3af" font-size="9" opacity="0.3">High unit cost</text>
      <text x="420" y="18" fill="#9ca3af" font-size="9" opacity="0.3">Low unit cost</text>
    `,
    zones: [
      { id: "z1", correctLabel: "Job production", x: 12, y: 50 },
      { id: "z2", correctLabel: "Batch production", x: 37, y: 50 },
      { id: "z3", correctLabel: "Mass production", x: 63, y: 50 },
      { id: "z4", correctLabel: "Continuous production", x: 88, y: 50 },
      { id: "z5", correctLabel: "Highest unit cost", x: 12, y: 85 },
      { id: "z6", correctLabel: "Lowest unit cost", x: 88, y: 85 },
    ],
  },

  // ============================================================
  // DESIGN TECHNOLOGY — Material Properties
  // ============================================================
  {
    id: "dt-material-types",
    subject: "design-tech",
    topicId: "dtech-4.2",
    title: "Material Categories",
    description: "Label the main material categories and their key examples.",
    svgViewBox: "0 0 500 200",
    svgElements: `
      <!-- Metals -->
      <rect x="10" y="20" width="90" height="160" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2" opacity="0.6"/>
      <text x="55" y="50" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">METALS</text>
      <text x="55" y="80" text-anchor="middle" fill="#9ca3af" font-size="8">Steel</text>
      <text x="55" y="95" text-anchor="middle" fill="#9ca3af" font-size="8">Aluminium</text>
      <text x="55" y="110" text-anchor="middle" fill="#9ca3af" font-size="8">Copper</text>
      <text x="55" y="140" text-anchor="middle" fill="#60a5fa" font-size="7" opacity="0.5">Ferrous &</text>
      <text x="55" y="152" text-anchor="middle" fill="#60a5fa" font-size="7" opacity="0.5">Non-ferrous</text>
      <!-- Polymers -->
      <rect x="110" y="20" width="90" height="160" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2" opacity="0.6"/>
      <text x="155" y="45" text-anchor="middle" fill="#a855f7" font-size="10" font-weight="bold">POLYMERS</text>
      <text x="155" y="80" text-anchor="middle" fill="#9ca3af" font-size="8">ABS, PET</text>
      <text x="155" y="95" text-anchor="middle" fill="#9ca3af" font-size="8">Epoxy</text>
      <text x="155" y="110" text-anchor="middle" fill="#9ca3af" font-size="8">Nylon</text>
      <text x="155" y="140" text-anchor="middle" fill="#a855f7" font-size="7" opacity="0.5">Thermo &</text>
      <text x="155" y="152" text-anchor="middle" fill="#a855f7" font-size="7" opacity="0.5">Thermoset</text>
      <!-- Timber -->
      <rect x="210" y="20" width="90" height="160" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2" opacity="0.6"/>
      <text x="255" y="50" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">TIMBER</text>
      <text x="255" y="80" text-anchor="middle" fill="#9ca3af" font-size="8">Oak</text>
      <text x="255" y="95" text-anchor="middle" fill="#9ca3af" font-size="8">Pine</text>
      <text x="255" y="110" text-anchor="middle" fill="#9ca3af" font-size="8">MDF</text>
      <text x="255" y="140" text-anchor="middle" fill="#f59e0b" font-size="7" opacity="0.5">Hard, Soft,</text>
      <text x="255" y="152" text-anchor="middle" fill="#f59e0b" font-size="7" opacity="0.5">Manufactured</text>
      <!-- Composites -->
      <rect x="310" y="20" width="90" height="160" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2" opacity="0.6"/>
      <text x="355" y="45" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">COMPOSITES</text>
      <text x="355" y="80" text-anchor="middle" fill="#9ca3af" font-size="8">Carbon fibre</text>
      <text x="355" y="95" text-anchor="middle" fill="#9ca3af" font-size="8">GRP</text>
      <text x="355" y="110" text-anchor="middle" fill="#9ca3af" font-size="8">Concrete</text>
      <text x="355" y="140" text-anchor="middle" fill="#22c55e" font-size="7" opacity="0.5">2+ materials</text>
      <text x="355" y="152" text-anchor="middle" fill="#22c55e" font-size="7" opacity="0.5">combined</text>
      <!-- Ceramics -->
      <rect x="410" y="20" width="80" height="160" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
      <text x="450" y="45" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">CERAMICS</text>
      <text x="450" y="80" text-anchor="middle" fill="#9ca3af" font-size="8">Glass</text>
      <text x="450" y="95" text-anchor="middle" fill="#9ca3af" font-size="8">Porcelain</text>
      <text x="450" y="110" text-anchor="middle" fill="#9ca3af" font-size="8">Brick</text>
      <text x="450" y="140" text-anchor="middle" fill="#ef4444" font-size="7" opacity="0.5">Hard, brittle</text>
      <text x="450" y="152" text-anchor="middle" fill="#ef4444" font-size="7" opacity="0.5">heat resistant</text>
    `,
    zones: [
      { id: "z1", correctLabel: "Metals", x: 10, y: 10 },
      { id: "z2", correctLabel: "Polymers (Plastics)", x: 30, y: 10 },
      { id: "z3", correctLabel: "Timber (Wood)", x: 50, y: 10 },
      { id: "z4", correctLabel: "Composites", x: 70, y: 10 },
      { id: "z5", correctLabel: "Ceramics", x: 90, y: 10 },
      { id: "z6", correctLabel: "Thermoplastic", x: 30, y: 90 },
      { id: "z7", correctLabel: "Thermoset", x: 30, y: 97 },
    ],
  },
];

export function getDiagramsBySubject(slug: string): Diagram[] {
  return diagrams.filter(d => d.subject === slug);
}

export function getDiagramsByTopic(topicId: string): Diagram[] {
  return diagrams.filter(d => d.topicId === topicId);
}

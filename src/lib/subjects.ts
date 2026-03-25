export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  level: "HL" | "SL";
  color: string;
  colorClass: string;
  glowClass: string;
  bgGradient: string;
  icon: string;
  description: string;
  topics: Topic[];
}

export const subjects: Subject[] = [
  {
    id: "deutsch",
    name: "Deutsch A",
    slug: "deutsch",
    level: "HL",
    color: "#f59e0b",
    colorClass: "text-amber-400",
    glowClass: "shadow-amber-500/20",
    bgGradient: "from-amber-500/20 to-amber-600/10",
    icon: "Languages",
    description:
      "Text analysis, literature & creative writing",
    topics: [
      {
        id: "dt-1",
        name: "Leser, Autor und Text",
        description:
          "Explore how texts create meaning and how readers and authors interact.",
      },
      {
        id: "dt-2",
        name: "Zeit und Raum",
        description:
          "Analyse how cultural and historical contexts influence text production.",
      },
      {
        id: "dt-3",
        name: "Intertextualitaet",
        description:
          "Explore the connections between texts and how they reference each other.",
      },
      {
        id: "dt-4",
        name: "Kreatives Schreiben",
        description:
          "Develop your own literary texts and reflect on the writing process.",
      },
      {
        id: "dt-5",
        name: "Individual Oral (IO)",
        description:
          "Preparation for the oral exam with text comparison and global issue.",
      },
      {
        id: "dt-6",
        name: "HL Essay",
        description:
          "Write an in-depth analytical essay on a literary work.",
      },
    ],
  },
  {
    id: "business",
    name: "Business Management",
    slug: "business",
    level: "HL",
    color: "#10b981",
    colorClass: "text-emerald-400",
    glowClass: "shadow-emerald-500/20",
    bgGradient: "from-emerald-500/20 to-emerald-600/10",
    icon: "TrendingUp",
    description:
      "Business organisation, HR, finance, marketing and operations management",
    topics: [
      {
        id: "bm-1",
        name: "Introduction to Business Management",
        description:
          "Understand the role of businesses in society, types of organisations, and stakeholders.",
      },
      {
        id: "bm-2",
        name: "Human Resource Management",
        description:
          "Explore leadership, motivation theories, organisational culture and workforce planning.",
      },
      {
        id: "bm-3",
        name: "Finance and Accounts",
        description:
          "Financial statements, ratio analysis, budgeting and investment appraisal.",
      },
      {
        id: "bm-4",
        name: "Marketing",
        description:
          "Marketing mix (4Ps/7Ps), market research, segmentation, and digital marketing.",
      },
      {
        id: "bm-5",
        name: "Operations Management",
        description:
          "Production methods, quality assurance, supply chain management and lean production.",
      },
    ],
  },
  {
    id: "design-tech",
    name: "Design Technology",
    slug: "design-tech",
    level: "HL",
    color: "#a855f7",
    colorClass: "text-purple-400",
    glowClass: "shadow-purple-500/20",
    bgGradient: "from-purple-500/20 to-purple-600/10",
    icon: "Paintbrush",
    description:
      "Human-centred design, materials, sustainability and product development",
    topics: [
      {
        id: "dtech-1",
        name: "Human Factors and Ergonomics",
        description:
          "Design for human use, anthropometrics, psychological and physiological factors.",
      },
      {
        id: "dtech-2",
        name: "Resource Management and Sustainable Production",
        description:
          "Materials, energy, waste management, and sustainable design strategies.",
      },
      {
        id: "dtech-3",
        name: "Modelling",
        description:
          "Prototyping, CAD/CAM, 2D and 3D modelling techniques.",
      },
      {
        id: "dtech-4",
        name: "Raw Materials to Final Product",
        description:
          "Properties and processing of materials: metals, plastics, wood, and composites.",
      },
      {
        id: "dtech-5",
        name: "Innovation and Design",
        description:
          "Design thinking, invention vs innovation, market-pull and technology-push.",
      },
      {
        id: "dtech-6",
        name: "Classic Design (HL)",
        description:
          "Iconic products, design movements, and the evolution of design philosophy.",
      },
    ],
  },
  {
    id: "english-ll",
    name: "English A L&L",
    slug: "english-ll",
    level: "SL",
    color: "#3b82f6",
    colorClass: "text-blue-400",
    glowClass: "shadow-blue-500/20",
    bgGradient: "from-blue-500/20 to-blue-600/10",
    icon: "BookOpen",
    description:
      "Language, literature, textual analysis and comparative study",
    topics: [
      {
        id: "ell-1",
        name: "Readers, Writers and Texts",
        description:
          "Examine how language and style create meaning across text types.",
      },
      {
        id: "ell-2",
        name: "Time and Space",
        description:
          "Explore how cultural context and audience shape texts and their reception.",
      },
      {
        id: "ell-3",
        name: "Intertextuality",
        description:
          "Investigate connections between texts and how they comment on each other.",
      },
      {
        id: "ell-4",
        name: "Individual Oral (IO)",
        description:
          "Preparation for the oral exam comparing a literary and non-literary text.",
      },
    ],
  },
  {
    id: "math-ai",
    name: "Math AI",
    slug: "math-ai",
    level: "SL",
    color: "#ef4444",
    colorClass: "text-red-400",
    glowClass: "shadow-red-500/20",
    bgGradient: "from-red-500/20 to-red-600/10",
    icon: "Calculator",
    description:
      "Statistics, probability, functions, geometry and calculus with GDC",
    topics: [
      {
        id: "mai-1",
        name: "Number and Algebra",
        description:
          "Sequences, series, logarithms, and financial mathematics.",
      },
      {
        id: "mai-2",
        name: "Functions",
        description:
          "Linear, quadratic, exponential, and logarithmic models with GDC.",
      },
      {
        id: "mai-3",
        name: "Geometry and Trigonometry",
        description:
          "Coordinate geometry, trigonometric ratios, and Voronoi diagrams.",
      },
      {
        id: "mai-4",
        name: "Statistics and Probability",
        description:
          "Descriptive statistics, probability distributions, and hypothesis testing.",
      },
      {
        id: "mai-5",
        name: "Calculus",
        description:
          "Differentiation, integration, and their applications in real-world problems.",
      },
    ],
  },
  {
    id: "biology",
    name: "Biology",
    slug: "biology",
    level: "SL",
    color: "#22c55e",
    colorClass: "text-green-400",
    glowClass: "shadow-green-500/20",
    bgGradient: "from-green-500/20 to-green-600/10",
    icon: "Leaf",
    description:
      "Cell biology, genetics, evolution, ecology and human physiology",
    topics: [
      {
        id: "bio-1",
        name: "Cell Biology",
        description:
          "Cell structure, membrane transport, cell division, and cellular respiration.",
      },
      {
        id: "bio-2",
        name: "Molecular Biology",
        description:
          "Water, carbohydrates, lipids, proteins, DNA structure and replication.",
      },
      {
        id: "bio-3",
        name: "Genetics",
        description:
          "Genes, chromosomes, meiosis, inheritance, and genetic modification.",
      },
      {
        id: "bio-4",
        name: "Ecology",
        description:
          "Species, communities, ecosystems, energy flow, and carbon cycling.",
      },
      {
        id: "bio-5",
        name: "Evolution and Biodiversity",
        description:
          "Natural selection, evidence for evolution, and classification of biodiversity.",
      },
      {
        id: "bio-6",
        name: "Human Physiology",
        description:
          "Digestion, circulatory system, gas exchange, neurons, and hormones.",
      },
    ],
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

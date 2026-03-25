export interface QuizQuestion {
  id: string;
  subject: string; // subject slug
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number; // index
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  // DEUTSCH A (HL)
  {
    id: "de1",
    subject: "deutsch",
    topic: "Textanalyse",
    question: "Welche rhetorische Figur liegt vor: 'Das Wasser fließt, die Zeit vergeht, das Leben schwindet.'?",
    options: ["Metapher", "Parallelismus", "Alliteration", "Hyperbel"],
    correctAnswer: 1,
    explanation: "Ein Parallelismus liegt vor, wenn aufeinanderfolgende Sätze oder Satzteile die gleiche syntaktische Struktur aufweisen.",
    difficulty: "medium"
  },
  {
    id: "de2",
    subject: "deutsch",
    topic: "Literarische Gattungen",
    question: "Welches Merkmal gehört NICHT zur Epik?",
    options: ["Erzähler", "Regieanweisungen", "Prosa-Form", "Kapitelstruktur"],
    correctAnswer: 1,
    explanation: "Regieanweisungen sind ein Merkmal der Dramatik, nicht der Epik.",
    difficulty: "easy"
  },
  {
    id: "de3",
    subject: "deutsch",
    topic: "Textanalyse",
    question: "Was beschreibt der Begriff 'Stilebene' in der Textanalyse?",
    options: ["Die Anzahl der Absätze", "Das sprachliche Register eines Textes", "Die Schriftgröße", "Den Rhythmus"],
    correctAnswer: 1,
    explanation: "Die Stilebene beschreibt das sprachliche Register (gehoben, neutral, umgangssprachlich).",
    difficulty: "easy"
  },
  {
    id: "de4",
    subject: "deutsch",
    topic: "Sprache und Identität",
    question: "Was versteht man unter 'Code-Switching'?",
    options: ["Übersetzen eines Textes", "Wechsel zwischen Sprachen oder Sprachvarietäten", "Verschlüsselung von Nachrichten", "Umschreiben von Texten"],
    correctAnswer: 1,
    explanation: "Code-Switching bezeichnet den Wechsel zwischen verschiedenen Sprachen oder Sprachvarietäten innerhalb eines Gesprächs.",
    difficulty: "medium"
  },
  {
    id: "de5",
    subject: "deutsch",
    topic: "Kreatives Schreiben",
    question: "Welches Element ist für eine überzeugende Rede am wichtigsten?",
    options: ["Möglichst viele Fachbegriffe", "Rhetorische Mittel und Publikumsbezug", "Ausschließlich Fakten", "Lange Sätze"],
    correctAnswer: 1,
    explanation: "Eine überzeugende Rede nutzt rhetorische Mittel und stellt Bezug zum Publikum her.",
    difficulty: "medium"
  },
  {
    id: "de6",
    subject: "deutsch",
    topic: "Mündliche Prüfung (IO)",
    question: "Was ist die Kernaufgabe beim IB Individual Oral (IO)?",
    options: ["Ein Gedicht auswendig vortragen", "Einen literarischen und einen nicht-literarischen Text vergleichend analysieren", "Eine Buchzusammenfassung geben", "Einen Dialog vorspielen"],
    correctAnswer: 1,
    explanation: "Beim IO wird eine vergleichende Analyse eines literarischen und eines nicht-literarischen Textes anhand einer globalen Fragestellung präsentiert.",
    difficulty: "hard"
  },
  {
    id: "de7",
    subject: "deutsch",
    topic: "HL Essay",
    question: "Wie lang sollte der HL Essay im Fach Deutsch A sein?",
    options: ["800-1000 Wörter", "1200-1500 Wörter", "2000-2500 Wörter", "500-700 Wörter"],
    correctAnswer: 1,
    explanation: "Der HL Essay ist eine vertiefende Analyse von 1200-1500 Wörtern über ein selbstgewähltes literarisches Thema.",
    difficulty: "easy"
  },
  {
    id: "de8",
    subject: "deutsch",
    topic: "Textanalyse",
    question: "Was ist eine 'Anapher'?",
    options: ["Ein Verweis auf ein späteres Textelement", "Wiederholung eines Wortes am Satzanfang", "Ein Widerspruch in sich", "Eine bildhafte Übertreibung"],
    correctAnswer: 1,
    explanation: "Eine Anapher ist die Wiederholung eines Wortes oder einer Wortgruppe am Anfang aufeinanderfolgender Sätze oder Verse.",
    difficulty: "medium"
  },

  // BUSINESS MANAGEMENT (HL)
  {
    id: "bm1",
    subject: "business",
    topic: "Unit 1: Introduction to Business",
    question: "Which of the following is NOT a type of business organization?",
    options: ["Sole trader", "Partnership", "Cooperative", "SWOT analysis"],
    correctAnswer: 3,
    explanation: "SWOT analysis is a strategic planning tool, not a type of business organization.",
    difficulty: "easy"
  },
  {
    id: "bm2",
    subject: "business",
    topic: "Unit 2: Human Resource Management",
    question: "According to Maslow's hierarchy of needs, which need must be satisfied first?",
    options: ["Self-actualization", "Esteem needs", "Social needs", "Physiological needs"],
    correctAnswer: 3,
    explanation: "Physiological needs (food, water, shelter) are at the base of Maslow's pyramid and must be met first.",
    difficulty: "easy"
  },
  {
    id: "bm3",
    subject: "business",
    topic: "Unit 3: Finance & Accounts",
    question: "What does the current ratio measure?",
    options: ["Profitability", "Short-term liquidity", "Long-term solvency", "Market share"],
    correctAnswer: 1,
    explanation: "The current ratio (current assets / current liabilities) measures a firm's ability to pay short-term obligations.",
    difficulty: "medium"
  },
  {
    id: "bm4",
    subject: "business",
    topic: "Unit 4: Marketing",
    question: "Which element of the marketing mix includes pricing strategies?",
    options: ["Product", "Price", "Place", "Promotion"],
    correctAnswer: 1,
    explanation: "The 'Price' element of the marketing mix covers all pricing strategies and tactics.",
    difficulty: "easy"
  },
  {
    id: "bm5",
    subject: "business",
    topic: "Unit 5: Operations Management",
    question: "What is the main advantage of Just-In-Time (JIT) production?",
    options: ["Higher stock levels", "Reduced holding costs", "More warehouse space needed", "Slower production"],
    correctAnswer: 1,
    explanation: "JIT minimizes inventory holding costs by receiving goods only when needed in production.",
    difficulty: "medium"
  },
  {
    id: "bm6",
    subject: "business",
    topic: "Unit 3: Finance & Accounts",
    question: "What is the break-even point?",
    options: ["When profit is maximized", "When total revenue equals total costs", "When all debts are paid", "When market share reaches 50%"],
    correctAnswer: 1,
    explanation: "Break-even is where TR = TC, meaning the business is neither making a profit nor a loss.",
    difficulty: "easy"
  },
  {
    id: "bm7",
    subject: "business",
    topic: "HL Extension",
    question: "What does Ansoff's Matrix help a business decide?",
    options: ["Employee satisfaction", "Growth strategy direction", "Financial ratios", "Supply chain efficiency"],
    correctAnswer: 1,
    explanation: "Ansoff's Matrix helps businesses choose growth strategies: market penetration, development, product development, or diversification.",
    difficulty: "hard"
  },
  {
    id: "bm8",
    subject: "business",
    topic: "Unit 2: Human Resource Management",
    question: "What is the difference between a democratic and autocratic leadership style?",
    options: ["Democratic leaders make all decisions alone", "Autocratic leaders involve employees in decision-making", "Democratic leaders consult employees; autocratic leaders decide alone", "There is no difference"],
    correctAnswer: 2,
    explanation: "Democratic leadership involves employees in decision-making, while autocratic leaders make decisions without consultation.",
    difficulty: "medium"
  },

  // DESIGN TECHNOLOGY (HL)
  {
    id: "dst1",
    subject: "design-tech",
    topic: "Human Factors & Ergonomics",
    question: "What is the primary goal of ergonomic design?",
    options: ["Aesthetic appeal", "Cost reduction", "User comfort and efficiency", "Mass production"],
    correctAnswer: 2,
    explanation: "Ergonomic design aims to optimize human well-being, comfort, and overall system performance.",
    difficulty: "easy"
  },
  {
    id: "dst2",
    subject: "design-tech",
    topic: "Resource Management & Sustainability",
    question: "What does 'cradle to cradle' design mean?",
    options: ["Products designed to last forever", "Products designed so materials are continuously recycled", "Baby product design", "Traditional manufacturing"],
    correctAnswer: 1,
    explanation: "Cradle-to-cradle means designing products so that at end of life, materials become nutrients for new products.",
    difficulty: "medium"
  },
  {
    id: "dst3",
    subject: "design-tech",
    topic: "Modelling",
    question: "What advantage does CAD have over hand-drawing in the design process?",
    options: ["More artistic", "Easier to modify and share designs", "Cheaper", "No training needed"],
    correctAnswer: 1,
    explanation: "CAD allows easy modification, sharing, 3D visualization, and integration with CAM systems.",
    difficulty: "easy"
  },
  {
    id: "dst4",
    subject: "design-tech",
    topic: "Raw Materials",
    question: "Which material property describes resistance to scratching?",
    options: ["Tensile strength", "Hardness", "Ductility", "Elasticity"],
    correctAnswer: 1,
    explanation: "Hardness is the resistance of a material to surface indentation or scratching.",
    difficulty: "medium"
  },
  {
    id: "dst5",
    subject: "design-tech",
    topic: "Innovation & Design",
    question: "What is the difference between invention and innovation?",
    options: ["They mean the same thing", "Invention is creating something new; innovation is applying it commercially", "Innovation comes first", "Invention is always patented"],
    correctAnswer: 1,
    explanation: "Invention creates something new; innovation successfully brings it to market or applies it in a new way.",
    difficulty: "medium"
  },
  {
    id: "dst6",
    subject: "design-tech",
    topic: "Classic Design",
    question: "Which design movement emphasized 'form follows function'?",
    options: ["Art Nouveau", "Bauhaus", "Art Deco", "Pop Art"],
    correctAnswer: 1,
    explanation: "The Bauhaus movement championed functional, minimalist design where form follows function.",
    difficulty: "hard"
  },
  {
    id: "dst7",
    subject: "design-tech",
    topic: "Human Factors & Ergonomics",
    question: "What are anthropometric data used for in design?",
    options: ["Color selection", "Sizing products based on human body measurements", "Costing", "Marketing"],
    correctAnswer: 1,
    explanation: "Anthropometric data are measurements of the human body used to design products that fit users correctly.",
    difficulty: "medium"
  },
  {
    id: "dst8",
    subject: "design-tech",
    topic: "Resource Management & Sustainability",
    question: "What is planned obsolescence?",
    options: ["Planning for sustainability", "Designing products to have a limited lifespan", "Planning production schedules", "Environmental impact assessment"],
    correctAnswer: 1,
    explanation: "Planned obsolescence is deliberately designing products with a limited useful life to encourage repeat purchases.",
    difficulty: "easy"
  },

  // ENGLISH A L&L (SL)
  {
    id: "en1",
    subject: "english-ll",
    topic: "Readers, Writers & Texts",
    question: "What is the purpose of a rhetorical question in a persuasive text?",
    options: ["To get a direct answer", "To engage the reader and make them think", "To confuse the audience", "To end a paragraph"],
    correctAnswer: 1,
    explanation: "Rhetorical questions engage readers by prompting them to think about the answer, reinforcing the writer's point.",
    difficulty: "easy"
  },
  {
    id: "en2",
    subject: "english-ll",
    topic: "Time and Space",
    question: "What does 'context' refer to in textual analysis?",
    options: ["The font used", "The historical, social, and cultural circumstances around a text", "The page number", "The word count"],
    correctAnswer: 1,
    explanation: "Context includes the historical, social, cultural, and political circumstances that influence how a text is created and received.",
    difficulty: "easy"
  },
  {
    id: "en3",
    subject: "english-ll",
    topic: "Paper 1: Guided Analysis",
    question: "In Paper 1, what should you focus on when analyzing an unseen text?",
    options: ["Only the plot summary", "Language, structure, tone, audience, and purpose", "Personal opinion only", "The author's biography"],
    correctAnswer: 1,
    explanation: "Paper 1 requires analysis of language choices, structural features, tone, intended audience, and purpose.",
    difficulty: "medium"
  },
  {
    id: "en4",
    subject: "english-ll",
    topic: "Paper 2: Comparative Essay",
    question: "What is essential in a Paper 2 comparative essay?",
    options: ["Summarizing both works", "Drawing meaningful connections between at least two literary works", "Only analyzing one text", "Writing a creative response"],
    correctAnswer: 1,
    explanation: "Paper 2 requires comparing and contrasting at least two literary works, exploring connections in themes, techniques, or context.",
    difficulty: "medium"
  },
  {
    id: "en5",
    subject: "english-ll",
    topic: "Readers, Writers & Texts",
    question: "What literary device is 'the wind whispered through the trees'?",
    options: ["Simile", "Personification", "Hyperbole", "Oxymoron"],
    correctAnswer: 1,
    explanation: "Personification gives human qualities (whispering) to a non-human entity (wind).",
    difficulty: "easy"
  },
  {
    id: "en6",
    subject: "english-ll",
    topic: "Intertextuality",
    question: "What is intertextuality?",
    options: ["Writing between the lines", "The relationship between texts and how they reference each other", "Using text messages", "A type of font"],
    correctAnswer: 1,
    explanation: "Intertextuality refers to how texts reference, build upon, or are connected to other texts.",
    difficulty: "medium"
  },
  {
    id: "en7",
    subject: "english-ll",
    topic: "Individual Oral (IO)",
    question: "In the IO, what global issue must be explored?",
    options: ["A local school issue", "A broad transnational topic connecting a literary and non-literary text", "A personal anecdote", "A historical date"],
    correctAnswer: 1,
    explanation: "The IO requires exploring a global issue through the lens of one literary and one non-literary text.",
    difficulty: "hard"
  },
  {
    id: "en8",
    subject: "english-ll",
    topic: "Readers, Writers & Texts",
    question: "What is the effect of using short, abrupt sentences in a text?",
    options: ["Creates a calm, flowing rhythm", "Creates tension, urgency, or emphasis", "Makes the text longer", "Shows the writer is lazy"],
    correctAnswer: 1,
    explanation: "Short sentences create a staccato effect that builds tension, urgency, or draws attention to key points.",
    difficulty: "medium"
  },

  // MATH AI (SL)
  {
    id: "ma1",
    subject: "math-ai",
    topic: "Number & Algebra",
    question: "What is the sum of the geometric series 2 + 6 + 18 + 54 with ratio 3?",
    options: ["80", "72", "60", "90"],
    correctAnswer: 0,
    explanation: "Sum = a(r^n - 1)/(r - 1) = 2(3^4 - 1)/(3 - 1) = 2(80)/2 = 80",
    difficulty: "medium"
  },
  {
    id: "ma2",
    subject: "math-ai",
    topic: "Functions",
    question: "What type of function models exponential growth?",
    options: ["f(x) = mx + b", "f(x) = ax² + bx + c", "f(x) = a · b^x where b > 1", "f(x) = a/x"],
    correctAnswer: 2,
    explanation: "Exponential growth is modeled by f(x) = a · b^x where b > 1 and a > 0.",
    difficulty: "easy"
  },
  {
    id: "ma3",
    subject: "math-ai",
    topic: "Geometry & Trigonometry",
    question: "In a right triangle with angle θ, sin(θ) is defined as:",
    options: ["Adjacent / Hypotenuse", "Opposite / Hypotenuse", "Opposite / Adjacent", "Hypotenuse / Opposite"],
    correctAnswer: 1,
    explanation: "sin(θ) = opposite side / hypotenuse (SOH-CAH-TOA).",
    difficulty: "easy"
  },
  {
    id: "ma4",
    subject: "math-ai",
    topic: "Statistics & Probability",
    question: "What is the probability of rolling a 6 on a fair die?",
    options: ["1/3", "1/6", "1/2", "1/12"],
    correctAnswer: 1,
    explanation: "A fair die has 6 equally likely outcomes, so P(6) = 1/6.",
    difficulty: "easy"
  },
  {
    id: "ma5",
    subject: "math-ai",
    topic: "Calculus",
    question: "What is the derivative of f(x) = 3x²?",
    options: ["3x", "6x", "6x²", "9x"],
    correctAnswer: 1,
    explanation: "Using the power rule: d/dx(3x²) = 3 · 2x = 6x.",
    difficulty: "easy"
  },
  {
    id: "ma6",
    subject: "math-ai",
    topic: "Statistics & Probability",
    question: "What measure of central tendency is most affected by outliers?",
    options: ["Mode", "Median", "Mean", "Range"],
    correctAnswer: 2,
    explanation: "The mean is pulled toward extreme values (outliers), while median and mode are more resistant.",
    difficulty: "medium"
  },
  {
    id: "ma7",
    subject: "math-ai",
    topic: "Number & Algebra",
    question: "What is log₁₀(1000)?",
    options: ["2", "3", "4", "10"],
    correctAnswer: 1,
    explanation: "log₁₀(1000) = 3, because 10³ = 1000.",
    difficulty: "easy"
  },
  {
    id: "ma8",
    subject: "math-ai",
    topic: "Calculus",
    question: "What does the integral ∫f(x)dx represent geometrically?",
    options: ["The slope of f(x)", "The area under the curve of f(x)", "The maximum of f(x)", "The tangent line"],
    correctAnswer: 1,
    explanation: "The definite integral represents the area under the curve of f(x) between two bounds.",
    difficulty: "medium"
  },

  // BIOLOGY (SL)
  {
    id: "bi1",
    subject: "biology",
    topic: "Cell Biology",
    question: "Which organelle is the site of aerobic respiration?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    correctAnswer: 2,
    explanation: "Mitochondria are the 'powerhouses' of the cell where aerobic respiration occurs, producing ATP.",
    difficulty: "easy"
  },
  {
    id: "bi2",
    subject: "biology",
    topic: "Molecular Biology",
    question: "What type of bond holds the two strands of DNA together?",
    options: ["Covalent bonds", "Hydrogen bonds", "Ionic bonds", "Peptide bonds"],
    correctAnswer: 1,
    explanation: "Hydrogen bonds between complementary base pairs (A-T, G-C) hold the two DNA strands together.",
    difficulty: "medium"
  },
  {
    id: "bi3",
    subject: "biology",
    topic: "Genetics",
    question: "What is the result of meiosis?",
    options: ["2 identical diploid cells", "4 genetically unique haploid cells", "1 large cell", "2 haploid cells"],
    correctAnswer: 1,
    explanation: "Meiosis produces 4 genetically unique haploid cells through two divisions with crossing over.",
    difficulty: "medium"
  },
  {
    id: "bi4",
    subject: "biology",
    topic: "Ecology",
    question: "What is a trophic level?",
    options: ["A tropical region", "The position an organism occupies in a food chain", "A type of biome", "A measurement of biodiversity"],
    correctAnswer: 1,
    explanation: "A trophic level is the position an organism occupies in a food chain (producer, primary consumer, etc.).",
    difficulty: "easy"
  },
  {
    id: "bi5",
    subject: "biology",
    topic: "Evolution & Biodiversity",
    question: "What is natural selection?",
    options: ["Humans choosing which animals to breed", "The process where organisms with favorable traits survive and reproduce more", "Random mutation", "Genetic engineering"],
    correctAnswer: 1,
    explanation: "Natural selection is the process where organisms with traits better suited to their environment survive and reproduce more successfully.",
    difficulty: "easy"
  },
  {
    id: "bi6",
    subject: "biology",
    topic: "Human Physiology",
    question: "What is the function of villi in the small intestine?",
    options: ["Producing enzymes", "Increasing surface area for absorption", "Storing bile", "Moving food along"],
    correctAnswer: 1,
    explanation: "Villi increase the surface area of the small intestine for efficient absorption of nutrients.",
    difficulty: "easy"
  },
  {
    id: "bi7",
    subject: "biology",
    topic: "Cell Biology",
    question: "What is the difference between prokaryotic and eukaryotic cells?",
    options: ["Size only", "Prokaryotes lack a membrane-bound nucleus", "Eukaryotes are smaller", "No difference"],
    correctAnswer: 1,
    explanation: "Prokaryotic cells lack a membrane-bound nucleus and other membrane-bound organelles.",
    difficulty: "medium"
  },
  {
    id: "bi8",
    subject: "biology",
    topic: "Molecular Biology",
    question: "Which molecule carries amino acids to the ribosome during translation?",
    options: ["mRNA", "rRNA", "tRNA", "DNA"],
    correctAnswer: 2,
    explanation: "Transfer RNA (tRNA) carries specific amino acids to the ribosome, matching codons on mRNA with anticodons.",
    difficulty: "hard"
  },
];

export function getQuestionsBySubject(slug: string): QuizQuestion[] {
  return quizQuestions.filter(q => q.subject === slug);
}

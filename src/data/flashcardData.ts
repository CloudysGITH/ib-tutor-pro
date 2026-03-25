export interface Flashcard {
  id: string;
  subject: string;
  topic: string;
  front: string;
  back: string;
}

export const flashcards: Flashcard[] = [
  // DEUTSCH A
  { id: "fc-de1", subject: "deutsch", topic: "Textanalyse", front: "Was ist eine Metapher?", back: "Ein sprachliches Bild, bei dem ein Wort in übertragener Bedeutung verwendet wird. Z.B. 'Wüstenschiff' für Kamel." },
  { id: "fc-de2", subject: "deutsch", topic: "Textanalyse", front: "Was ist ein Oxymoron?", back: "Eine Verbindung zweier sich widersprechender Begriffe. Z.B. 'bittersüß', 'alter Knabe', 'offenes Geheimnis'." },
  { id: "fc-de3", subject: "deutsch", topic: "Literarische Gattungen", front: "Nenne die drei literarischen Hauptgattungen.", back: "Epik (erzählende Literatur), Lyrik (Gedichte), Dramatik (Theaterstücke)." },
  { id: "fc-de4", subject: "deutsch", topic: "Textanalyse", front: "Was ist die PEE-Methode?", back: "Point (These aufstellen), Evidence (Textbeleg anführen), Explanation (Wirkung erklären). Grundstruktur der Textanalyse." },
  { id: "fc-de5", subject: "deutsch", topic: "Sprache und Identität", front: "Was ist Sprachvarietät?", back: "Verschiedene Ausprägungen einer Sprache: Dialekt, Soziolekt, Fachsprache, Jugendsprache, Standardsprache." },
  { id: "fc-de6", subject: "deutsch", topic: "Kreatives Schreiben", front: "Welche Textarten gibt es im IB Deutsch?", back: "Blog, Rede, Tagebuch, Brief, Kommentar, Leitartikel, Interview, Broschüre, Flugblatt u.a." },
  { id: "fc-de7", subject: "deutsch", topic: "Mündliche Prüfung (IO)", front: "Aufbau des Individual Oral?", back: "10 Min Präsentation + 5 Min Fragen. Ein literarischer + ein nicht-literarischer Text, verbunden durch eine globale Fragestellung." },
  { id: "fc-de8", subject: "deutsch", topic: "Textanalyse", front: "Was ist Ironie?", back: "Ein Stilmittel, bei dem das Gegenteil des Gesagten gemeint ist. Die wahre Aussage ergibt sich aus dem Kontext." },

  // BUSINESS MANAGEMENT
  { id: "fc-bm1", subject: "business", topic: "Unit 1", front: "What are the four main business objectives?", back: "1. Profit maximization 2. Growth 3. Market share 4. Social/ethical objectives. Many businesses pursue multiple objectives." },
  { id: "fc-bm2", subject: "business", topic: "Unit 2", front: "What is Herzberg's Two-Factor Theory?", back: "Motivators (achievement, recognition, responsibility) lead to satisfaction. Hygiene factors (salary, conditions, policies) prevent dissatisfaction but don't motivate." },
  { id: "fc-bm3", subject: "business", topic: "Unit 3", front: "What is the Gross Profit Margin formula?", back: "Gross Profit Margin = (Gross Profit / Revenue) × 100%. It shows the percentage of revenue remaining after COGS." },
  { id: "fc-bm4", subject: "business", topic: "Unit 4", front: "What are the 4Ps of the Marketing Mix?", back: "Product (what you sell), Price (what you charge), Place (where you sell), Promotion (how you communicate). Extended to 7Ps with People, Process, Physical evidence." },
  { id: "fc-bm5", subject: "business", topic: "Unit 5", front: "What is quality assurance vs quality control?", back: "Quality Assurance: preventing defects through process standards (proactive). Quality Control: detecting defects through inspection (reactive)." },
  { id: "fc-bm6", subject: "business", topic: "HL Extension", front: "What is Porter's Five Forces?", back: "1. Threat of new entrants 2. Bargaining power of suppliers 3. Bargaining power of buyers 4. Threat of substitutes 5. Industry rivalry. Used to analyze industry competitiveness." },
  { id: "fc-bm7", subject: "business", topic: "Unit 3", front: "What is the difference between revenue and profit?", back: "Revenue = total income from sales (price × quantity). Profit = revenue minus costs. Revenue does NOT account for expenses." },
  { id: "fc-bm8", subject: "business", topic: "Unit 1", front: "Stakeholders vs Shareholders?", back: "Shareholders own shares in the company. Stakeholders include anyone affected by the business: employees, customers, suppliers, community, government, shareholders." },

  // DESIGN TECHNOLOGY
  { id: "fc-dt1", subject: "design-tech", topic: "Human Factors", front: "What is the difference between ergonomics and anthropometrics?", back: "Ergonomics: designing for comfort and efficiency. Anthropometrics: using body measurement data to inform design dimensions." },
  { id: "fc-dt2", subject: "design-tech", topic: "Sustainability", front: "What are the 6 Rs of sustainability?", back: "Reduce, Reuse, Recycle, Rethink, Refuse, Repair. A framework for sustainable design and consumption." },
  { id: "fc-dt3", subject: "design-tech", topic: "Materials", front: "Name the main material categories.", back: "Metals (ferrous/non-ferrous), Polymers (thermoplastics/thermosets), Ceramics, Composites, Natural materials (wood, textiles)." },
  { id: "fc-dt4", subject: "design-tech", topic: "Modelling", front: "What is rapid prototyping?", back: "The quick fabrication of a physical model using 3D printing or other additive manufacturing. Allows fast design iteration." },
  { id: "fc-dt5", subject: "design-tech", topic: "Innovation", front: "What are the stages of the Design Cycle?", back: "1. Identify 2. Research 3. Develop 4. Create 5. Evaluate. It is iterative — you can return to any stage." },
  { id: "fc-dt6", subject: "design-tech", topic: "Classic Design", front: "What characterized the Bauhaus movement?", back: "Founded 1919 in Weimar. 'Form follows function.' Minimalism, geometric shapes, industrial materials. United art, craft, and technology." },
  { id: "fc-dt7", subject: "design-tech", topic: "Materials", front: "Thermoplastic vs Thermoset?", back: "Thermoplastics can be reheated and reshaped (e.g., PET, ABS). Thermosets permanently harden and cannot be remelted (e.g., epoxy, melamine)." },
  { id: "fc-dt8", subject: "design-tech", topic: "Human Factors", front: "What is a percentile range in design?", back: "Products typically designed for 5th-95th percentile (90% of users). Using extremes would make products unusable for most people." },

  // ENGLISH A L&L
  { id: "fc-en1", subject: "english-ll", topic: "Readers, Writers & Texts", front: "What is ethos, pathos, logos?", back: "Ethos: credibility/authority. Pathos: emotional appeal. Logos: logical reasoning. The three modes of persuasion (Aristotle)." },
  { id: "fc-en2", subject: "english-ll", topic: "Paper 1", front: "How should you structure a Paper 1 guided analysis?", back: "Introduction (text type, purpose, audience, thesis) → Body paragraphs (language, structure, tone analysis with evidence) → Conclusion (overall effect)." },
  { id: "fc-en3", subject: "english-ll", topic: "Readers, Writers & Texts", front: "What is a motif?", back: "A recurring element (image, symbol, theme, idea) throughout a text that reinforces its central themes or ideas." },
  { id: "fc-en4", subject: "english-ll", topic: "Time and Space", front: "What is a post-colonial reading of a text?", back: "Examining how a text represents, reflects, or challenges the legacy of colonialism, power dynamics, and cultural identity." },
  { id: "fc-en5", subject: "english-ll", topic: "Readers, Writers & Texts", front: "What is juxtaposition?", back: "Placing two contrasting ideas, images, or characters side by side to highlight their differences and create meaning." },
  { id: "fc-en6", subject: "english-ll", topic: "Individual Oral", front: "What are the IO assessment criteria?", back: "Criterion A: Knowledge & understanding (10). B: Analysis & evaluation (10). C: Focus & organization (10). D: Language (10). Total: 40 marks." },
  { id: "fc-en7", subject: "english-ll", topic: "Readers, Writers & Texts", front: "Name 5 common literary devices.", back: "1. Metaphor 2. Simile 3. Alliteration 4. Imagery 5. Symbolism. Also: irony, foreshadowing, personification, hyperbole." },
  { id: "fc-en8", subject: "english-ll", topic: "Paper 2", front: "What makes a strong Paper 2 thesis?", back: "A clear, arguable claim that compares/connects two works through theme, technique, or context. Must go beyond surface-level observation." },

  // MATH AI
  { id: "fc-ma1", subject: "math-ai", topic: "Number & Algebra", front: "What is the quadratic formula?", back: "x = (-b ± √(b²-4ac)) / 2a, where ax² + bx + c = 0. The discriminant b²-4ac determines the number of real solutions." },
  { id: "fc-ma2", subject: "math-ai", topic: "Statistics", front: "What is standard deviation?", back: "A measure of the spread/dispersion of data from the mean. Small σ = data clustered near mean. Large σ = data spread out." },
  { id: "fc-ma3", subject: "math-ai", topic: "Calculus", front: "What is the power rule for differentiation?", back: "If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹. Example: f(x) = x³ → f'(x) = 3x²." },
  { id: "fc-ma4", subject: "math-ai", topic: "Geometry", front: "What is the formula for the volume of a sphere?", back: "V = (4/3)πr³. Given in the formula booklet — know how to apply it to real-world problems." },
  { id: "fc-ma5", subject: "math-ai", topic: "Statistics", front: "What is the difference between correlation and causation?", back: "Correlation: two variables move together. Causation: one variable directly causes the other. Correlation does NOT imply causation!" },
  { id: "fc-ma6", subject: "math-ai", topic: "Functions", front: "What is a linear regression?", back: "A statistical method to find the line of best fit (y = ax + b) for bivariate data. 'a' is the gradient, 'b' is the y-intercept." },
  { id: "fc-ma7", subject: "math-ai", topic: "Number & Algebra", front: "Arithmetic vs Geometric sequence?", back: "Arithmetic: constant difference (d). uₙ = u₁ + (n-1)d. Geometric: constant ratio (r). uₙ = u₁ × rⁿ⁻¹." },
  { id: "fc-ma8", subject: "math-ai", topic: "Calculus", front: "What does a derivative tell you?", back: "The rate of change / slope of the function at a given point. f'(x) > 0: increasing, f'(x) < 0: decreasing, f'(x) = 0: potential max/min." },

  // BIOLOGY
  { id: "fc-bi1", subject: "biology", topic: "Cell Biology", front: "What are the key differences between plant and animal cells?", back: "Plant: cell wall, chloroplasts, large central vacuole, fixed shape. Animal: no cell wall, no chloroplasts, small vacuoles, flexible shape." },
  { id: "fc-bi2", subject: "biology", topic: "Molecular Biology", front: "What is the structure of DNA?", back: "Double helix of two antiparallel strands. Sugar-phosphate backbone. Complementary base pairs: A-T (2 H-bonds), G-C (3 H-bonds)." },
  { id: "fc-bi3", subject: "biology", topic: "Genetics", front: "What is codominance?", back: "Both alleles are fully expressed in the heterozygote. Example: blood type AB — both A and B antigens are expressed." },
  { id: "fc-bi4", subject: "biology", topic: "Ecology", front: "What is the 10% rule in ecology?", back: "Only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through respiration." },
  { id: "fc-bi5", subject: "biology", topic: "Evolution", front: "What evidence supports evolution?", back: "Fossil record, comparative anatomy (homologous structures), DNA/molecular evidence, biogeography, observed natural selection." },
  { id: "fc-bi6", subject: "biology", topic: "Human Physiology", front: "How does the immune system respond to pathogens?", back: "Non-specific: skin, mucus, phagocytes. Specific: B-cells (antibodies), T-cells (cell-mediated). Memory cells provide long-term immunity." },
  { id: "fc-bi7", subject: "biology", topic: "Molecular Biology", front: "What are enzymes?", back: "Biological catalysts (proteins) that speed up reactions. Substrate-specific (lock & key / induced fit). Affected by temperature, pH, concentration." },
  { id: "fc-bi8", subject: "biology", topic: "Cell Biology", front: "What is osmosis?", back: "The net movement of water molecules from a region of lower solute concentration to higher solute concentration through a semi-permeable membrane." },
];

export function getFlashcardsBySubject(slug: string): Flashcard[] {
  return flashcards.filter(f => f.subject === slug);
}

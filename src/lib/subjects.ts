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
      "Textanalyse, Literatur, kreatives Schreiben und mündliche Prüfung",
    topics: [
      // Areas of Exploration
      { id: "dt-aoe1", name: "Leser, Autoren und Texte", description: "Wie und warum Texte Bedeutung erzeugen. Textarten, Stilmittel, Publikum und Zweck." },
      { id: "dt-aoe2", name: "Zeit und Raum", description: "Wie kulturelle und historische Kontexte die Textproduktion und -rezeption beeinflussen." },
      { id: "dt-aoe3", name: "Intertextualität", description: "Verbindungen zwischen Texten — wie sie aufeinander verweisen, sich ergänzen oder widersprechen." },
      // Key Concepts
      { id: "dt-concepts", name: "Schlüsselkonzepte", description: "Identität, Kultur, Kreativität, Kommunikation, Perspektive, Transformation, Repräsentation." },
      // Skills & Analysis
      { id: "dt-stilmittel", name: "Stilmittel & Textanalyse", description: "Rhetorische Figuren, Erzählperspektive, Sprachregister, PEE-Methode, Texttypen." },
      { id: "dt-gattungen", name: "Literarische Gattungen", description: "Epik, Lyrik, Dramatik — Merkmale, Formen und Analyse." },
      { id: "dt-sprache", name: "Sprache und Identität", description: "Sprachvarietäten, Code-Switching, Soziolekt, Dialekt, Jugendsprache, Standardsprache." },
      // Assessment
      { id: "dt-paper1", name: "Paper 1: Textanalyse", description: "Analyse von zwei unbekannten nicht-literarischen Texten (HL). Leitfrage beantworten." },
      { id: "dt-paper2", name: "Paper 2: Vergleichender Aufsatz", description: "Vergleich von mindestens 2 literarischen Werken zu einer von 4 Fragen." },
      { id: "dt-io", name: "Individual Oral (IO)", description: "15 Min: ein literarischer + ein nicht-literarischer Text, verbunden durch eine globale Fragestellung." },
      { id: "dt-hl-essay", name: "HL Essay", description: "1200-1500 Wörter analytischer Essay über ein Werk oder Textkorpus. Eigene Fragestellung." },
      // Text Requirements
      { id: "dt-texte", name: "Textanforderungen HL", description: "6 Werke (mind. 2 in Originalsprache, mind. 2 in Übersetzung), verschiedene Gattungen und Epochen." },
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
      // Unit 1: Introduction to Business Management
      { id: "bm-1.1", name: "1.1 What is a Business?", description: "Nature of business activity, sectors, entrepreneurship, challenges for startups." },
      { id: "bm-1.2", name: "1.2 Types of Business Entities", description: "Sole traders, partnerships, companies, cooperatives, social enterprises, NGOs." },
      { id: "bm-1.3", name: "1.3 Business Objectives", description: "Vision/mission statements, strategic and tactical objectives, CSR, SMART objectives." },
      { id: "bm-1.4", name: "1.4 Stakeholders", description: "Internal/external stakeholders, stakeholder conflicts and resolution." },
      { id: "bm-1.5", name: "1.5 Growth and Evolution", description: "Economies/diseconomies of scale, mergers, acquisitions, joint ventures, franchising." },
      { id: "bm-1.6", name: "1.6 Multinational Companies (MNCs)", description: "Impact of MNCs on host countries, reasons for becoming multinational." },
      // Unit 2: Human Resource Management
      { id: "bm-2.1", name: "2.1 Introduction to HRM", description: "Role of HRM, internal/external factors, resistance to change." },
      { id: "bm-2.2", name: "2.2 Organizational Structure", description: "Flat, tall, matrix structures, delegation, span of control, chain of command." },
      { id: "bm-2.3", name: "2.3 Leadership and Management", description: "Leadership styles: autocratic, paternalistic, democratic, laissez-faire, situational." },
      { id: "bm-2.4", name: "2.4 Motivation and Demotivation", description: "Taylor, Maslow, Herzberg, Adams, Pink. Financial/non-financial rewards, training." },
      { id: "bm-2.5", name: "2.5 Organizational Culture (HL)", description: "Power, role, task, person culture. Cultural clashes, culture change." },
      { id: "bm-2.6", name: "2.6 Communication", description: "Formal/informal communication, barriers, channels and networks." },
      { id: "bm-2.7", name: "2.7 Industrial Relations (HL)", description: "Trade unions, collective bargaining, conflict resolution, conciliation, arbitration." },
      // Unit 3: Finance and Accounts
      { id: "bm-3.1", name: "3.1 Introduction to Finance", description: "Role of finance, capital vs revenue expenditure." },
      { id: "bm-3.2", name: "3.2 Sources of Finance", description: "Internal (retained profit) and external sources (loans, shares, crowdfunding, leasing)." },
      { id: "bm-3.3", name: "3.3 Costs and Revenues", description: "Fixed, variable, semi-variable costs, total revenue, revenue streams." },
      { id: "bm-3.4", name: "3.4 Final Accounts", description: "Profit & loss account, balance sheet, intangible assets, depreciation (HL)." },
      { id: "bm-3.5", name: "3.5 Profitability and Liquidity Ratios", description: "Gross/net profit margin, current ratio, acid test, ROCE." },
      { id: "bm-3.6", name: "3.6 Efficiency Ratios (HL)", description: "Stock turnover, debtor days, creditor days, gearing ratio." },
      { id: "bm-3.7", name: "3.7 Cash Flow", description: "Cash flow forecasts, cash flow vs profit, working capital, liquidity strategies." },
      { id: "bm-3.8", name: "3.8 Investment Appraisal", description: "Payback period, ARR, NPV (HL with discount tables)." },
      { id: "bm-3.9", name: "3.9 Budgets (HL)", description: "Revenue/cost budgets, variance analysis, role of budgets in planning." },
      // Unit 4: Marketing
      { id: "bm-4.1", name: "4.1 Introduction to Marketing", description: "Market vs product orientation, market share, growth, social marketing." },
      { id: "bm-4.2", name: "4.2 Marketing Planning", description: "Segmentation, targeting, positioning, niche vs mass market, USP." },
      { id: "bm-4.3", name: "4.3 Sales Forecasting (HL)", description: "Time series, extrapolation, moving averages, seasonal variation." },
      { id: "bm-4.4", name: "4.4 Market Research", description: "Primary/secondary research, qualitative/quantitative, sampling methods." },
      { id: "bm-4.5", name: "4.5 The Seven Ps", description: "Product (PLC, BCG), Price, Promotion, Place, People, Process, Physical Evidence." },
      { id: "bm-4.6", name: "4.6 International Marketing (HL)", description: "Opportunities/threats, entry methods, localisation vs globalisation." },
      // Unit 5: Operations Management
      { id: "bm-5.1", name: "5.1 Introduction to Operations", description: "Role of operations management, sustainability in operations." },
      { id: "bm-5.2", name: "5.2 Operations Methods", description: "Job, batch, mass/flow production, mass customisation, cellular manufacturing." },
      { id: "bm-5.3", name: "5.3 Lean Production & Quality (HL)", description: "Kaizen, kanban, JIT, cradle-to-cradle, TQM, benchmarking." },
      { id: "bm-5.4", name: "5.4 Location", description: "Location factors, outsourcing, offshoring, reshoring." },
      { id: "bm-5.5", name: "5.5 Break-Even Analysis", description: "Break-even charts, quantity, margin of safety, total contribution." },
      { id: "bm-5.6", name: "5.6 Production Planning (HL)", description: "Supply chain, JIT vs JIC, stock control charts, capacity utilisation." },
      { id: "bm-5.7", name: "5.7 Crisis Management (HL)", description: "Nature of crises, contingency planning, business continuity." },
      { id: "bm-5.8", name: "5.8 Research and Development (HL)", description: "R&D role, innovation vs invention, intellectual property." },
      { id: "bm-5.9", name: "5.9 Management Information Systems (HL)", description: "Data analytics, big data, cybersecurity, AI in business." },
      // Business Management Toolkit
      { id: "bm-toolkit", name: "BM Toolkit", description: "SWOT, Ansoff Matrix, STEEPLE, BCG Matrix, Decision Trees, Porter's (HL), Gantt (HL), CPA (HL)." },
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
      // Core Topics (SL+HL)
      { id: "dtech-1.1", name: "1.1 Ergonomics & Anthropometrics", description: "Body measurements, percentiles, designing for human comfort and use." },
      { id: "dtech-1.2", name: "1.2 Psychological Factors", description: "Perception, mental models, user interaction, Likert/semantic differential scales." },
      { id: "dtech-1.3", name: "1.3 Physiological Factors", description: "Bodily tolerances, fatigue, biomechanics, safety in design." },
      { id: "dtech-2.1", name: "2.1 Resources and Reserves", description: "Renewable/non-renewable resources, availability and depletion." },
      { id: "dtech-2.2", name: "2.2 Waste Mitigation", description: "Reduce, reuse, recycle, waste hierarchy, designed obsolescence vs longevity." },
      { id: "dtech-2.3", name: "2.3 Energy", description: "Energy sources, embodied energy, energy in manufacturing and storage." },
      { id: "dtech-2.4", name: "2.4 Clean Technology", description: "Technologies reducing environmental impact, pollution prevention." },
      { id: "dtech-2.5", name: "2.5 Green Design & Eco-design", description: "Life-cycle thinking, design for disassembly, cradle-to-cradle, LCA." },
      { id: "dtech-3.1", name: "3.1 Conceptual & Graphical Modelling", description: "Sketching, orthographic projection, isometric drawing, rendering." },
      { id: "dtech-3.2", name: "3.2 Physical & Digital Modelling", description: "Mock-ups, scale models, CAD, 3D printing, laser cutting, CNC." },
      { id: "dtech-4.1", name: "4.1 Material Properties", description: "Mechanical, thermal, electrical, optical, aesthetic properties and testing." },
      { id: "dtech-4.2", name: "4.2 Metals, Timber, Plastics, Composites", description: "Ferrous/non-ferrous metals, hardwoods/softwoods, thermoplastics/thermosets, composites, textiles." },
      { id: "dtech-4.3", name: "4.3 Scale of Production", description: "One-off, batch, mass, continuous production; factors affecting choice." },
      { id: "dtech-4.4", name: "4.4 Manufacturing Processes", description: "Casting, moulding, forming, joining, cutting, finishing techniques." },
      { id: "dtech-5.1", name: "5.1 Invention and Innovation", description: "Invention vs innovation, incremental vs disruptive, market-pull vs technology-push." },
      { id: "dtech-5.2", name: "5.2 Strategies for Innovation", description: "Design thinking, SCAMPER, brainstorming, lateral thinking." },
      { id: "dtech-5.3", name: "5.3 Product Life Cycle", description: "Introduction, growth, maturity, decline, planned obsolescence, extension strategies." },
      { id: "dtech-5.4", name: "5.4 Rogers' Diffusion of Innovation", description: "Adopter categories: innovators, early adopters, early/late majority, laggards." },
      { id: "dtech-6.1", name: "6. Classic Design", description: "Iconic products, Bauhaus, Art Deco, Modernism, form follows function." },
      // HL Extension Topics
      { id: "dtech-7", name: "7. User-Centred Design (HL)", description: "UCD principles, usability, user research, inclusive design, designing for emotion." },
      { id: "dtech-8", name: "8. Sustainability (HL)", description: "Sustainable development, triple bottom line, LCA, circular economy, biomimicry." },
      { id: "dtech-9", name: "9. Innovation and Markets (HL)", description: "CSR, market segmentation, marketing mix, branding, market research." },
      { id: "dtech-10", name: "10. Commercial Production (HL)", description: "JIT/JIC, lean production, CIM, TQM, Six Sigma, break-even analysis." },
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
      // Areas of Exploration
      { id: "ell-aoe1", name: "Readers, Writers and Texts", description: "How and why texts create meaning. Text types, stylistic features, audience, purpose." },
      { id: "ell-aoe2", name: "Time and Space", description: "How cultural and historical contexts shape text production and reception." },
      { id: "ell-aoe3", name: "Intertextuality: Connecting Texts", description: "How texts dialogue, reference, complement or contradict each other." },
      // Key Concepts
      { id: "ell-concepts", name: "Seven Key Concepts", description: "Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation." },
      // Skills
      { id: "ell-literary-devices", name: "Literary & Rhetorical Devices", description: "Metaphor, simile, irony, imagery, symbolism, tone, structure, narrative voice." },
      { id: "ell-text-types", name: "Text Types & Conventions", description: "Speeches, articles, blogs, advertisements, letters, editorials — purpose, audience, conventions." },
      { id: "ell-language-analysis", name: "Language Analysis Skills", description: "Tone, register, diction, syntax, rhetoric (ethos/pathos/logos), connotation, denotation." },
      // Assessment
      { id: "ell-paper1", name: "Paper 1: Guided Textual Analysis", description: "Analysis of 1 unseen text (SL). Focus on language, structure, tone, audience, purpose." },
      { id: "ell-paper2", name: "Paper 2: Comparative Essay", description: "Compare 2 literary works studied, responding to one of 4 questions." },
      { id: "ell-io", name: "Individual Oral (IO)", description: "15 min: 1 literary + 1 non-literary text connected through a global issue. 40 marks." },
      // Text Requirements
      { id: "ell-texts", name: "Text Requirements SL", description: "6 works total, at least 2 literary forms, 1 in translation, works from the Prescribed Reading List." },
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
      // Topic 1: Number and Algebra
      { id: "mai-1.1", name: "1.1 Scientific Notation", description: "Operations with numbers in the form a × 10ᵏ." },
      { id: "mai-1.2", name: "1.2 Arithmetic Sequences & Series", description: "uₙ = u₁ + (n-1)d, Sₙ formulas, applications." },
      { id: "mai-1.3", name: "1.3 Geometric Sequences & Series", description: "uₙ = u₁ × rⁿ⁻¹, Sₙ, S∞ for convergent series." },
      { id: "mai-1.4", name: "1.4 Financial Mathematics", description: "Compound interest, depreciation, inflation, loans and annuities." },
      { id: "mai-1.5", name: "1.5 Exponents and Logarithms", description: "Laws of exponents and logarithms, change of base." },
      { id: "mai-1.6", name: "1.6 Approximation and Error", description: "Percentage error, significant figures, decimal approximations." },
      { id: "mai-1.7", name: "1.7 Amortization and Annuities", description: "Using technology for loan repayment and annuity calculations." },
      { id: "mai-1.8", name: "1.8 Systems of Equations", description: "Solving linear and polynomial equations with technology." },
      // Topic 2: Functions
      { id: "mai-2.1", name: "2.1 Function Concepts", description: "Domain, range, function notation, mapping diagrams, graphs." },
      { id: "mai-2.2", name: "2.2 Linear Models", description: "f(x) = mx + c, gradient and y-intercept interpretation." },
      { id: "mai-2.3", name: "2.3 Fitting Models to Data", description: "Linear piecewise models, interpreting and creating models from data." },
      { id: "mai-2.4", name: "2.4 Key Features of Graphs", description: "Maximum, minimum, intercepts, symmetry, vertex." },
      { id: "mai-2.5", name: "2.5 Quadratic Models", description: "f(x) = ax² + bx + c, vertex form, axis of symmetry, zeros." },
      { id: "mai-2.6", name: "2.6 Exponential Models", description: "f(x) = kaˣ + c, growth and decay, horizontal asymptotes." },
      { id: "mai-2.7", name: "2.7 Direct/Inverse Variation & Cubic Models", description: "f(x) = axⁿ for various n, cubic models." },
      { id: "mai-2.8", name: "2.8 Sinusoidal Models", description: "f(x) = a sin(bx) + d, amplitude, period, principal axis." },
      { id: "mai-2.9", name: "2.9 Logistic Models", description: "f(x) = L/(1 + Ce⁻ᵏˣ), carrying capacity, inflection point." },
      { id: "mai-2.10", name: "2.10 Regression", description: "Linear, quadratic, exponential, power, sinusoidal regression, r and R²." },
      // Topic 3: Geometry and Trigonometry
      { id: "mai-3.1", name: "3.1 3D Geometry", description: "Distance, midpoint, volume and surface area of 3D solids." },
      { id: "mai-3.2", name: "3.2 Angles and Bearings", description: "Angles of elevation/depression, bearings." },
      { id: "mai-3.3", name: "3.3 Sine and Cosine Rules", description: "Sine rule, cosine rule, area = ½ab sin C." },
      { id: "mai-3.4", name: "3.4 Arcs and Sectors", description: "Arc length, sector area, radian measure awareness." },
      { id: "mai-3.5", name: "3.5 Voronoi Diagrams", description: "Constructing/interpreting Voronoi diagrams, nearest-neighbour, toxic waste problems." },
      { id: "mai-3.6", name: "3.6 Coordinate Geometry", description: "Equation of a line, parallel and perpendicular lines." },
      // Topic 4: Statistics and Probability
      { id: "mai-4.1", name: "4.1 Sampling and Data Collection", description: "Random, convenience, systematic, stratified sampling, bias." },
      { id: "mai-4.2", name: "4.2 Data Presentation", description: "Histograms, cumulative frequency graphs, box-and-whisker plots." },
      { id: "mai-4.3", name: "4.3 Central Tendency", description: "Mean, median, mode, estimated mean for grouped data." },
      { id: "mai-4.4", name: "4.4 Measures of Dispersion", description: "Range, IQR, standard deviation and variance." },
      { id: "mai-4.5", name: "4.5 Correlation", description: "Scatter diagrams, Pearson's r, line of best fit, interpretation." },
      { id: "mai-4.6", name: "4.6 Spearman's Rank Correlation", description: "Spearman's rank correlation coefficient rₛ." },
      { id: "mai-4.7", name: "4.7 Probability Basics", description: "Probability of events, complementary events, expected outcomes." },
      { id: "mai-4.8", name: "4.8 Probability Diagrams", description: "Venn diagrams, tree diagrams, sample space, conditional probability." },
      { id: "mai-4.9", name: "4.9 Combined Events", description: "P(A∪B), P(A∩B), P(A|B) formulas, independent events." },
      { id: "mai-4.10", name: "4.10 Discrete Random Variables", description: "Expected value E(X) for discrete data." },
      { id: "mai-4.11", name: "4.11 Normal Distribution", description: "Properties, probability calculations, inverse normal using GDC." },
      { id: "mai-4.12", name: "4.12 Binomial Distribution", description: "Mean, variance, binomial probability calculations using GDC." },
      { id: "mai-4.13", name: "4.13 Chi-squared Test for Independence", description: "H₀/H₁, expected frequencies, χ² statistic, degrees of freedom, p-value." },
      { id: "mai-4.14", name: "4.14 Chi-squared Goodness of Fit", description: "Testing observed vs expected frequencies." },
      { id: "mai-4.15", name: "4.15 t-test", description: "One-sample and paired t-tests, p-value interpretation." },
      // Topic 5: Calculus
      { id: "mai-5.1", name: "5.1 Limits and Derivatives", description: "Concept of a limit, derivative as gradient and rate of change." },
      { id: "mai-5.2", name: "5.2 Increasing/Decreasing Functions", description: "Graphical interpretation of f'(x) > 0, = 0, < 0." },
      { id: "mai-5.3", name: "5.3 Differentiation Rules", description: "Derivative of xⁿ, polynomial differentiation." },
      { id: "mai-5.4", name: "5.4 Tangent and Normal Lines", description: "Tangent and normal to a curve at a given point." },
      { id: "mai-5.5", name: "5.5 Optimization", description: "Maximum, minimum, inflection points; optimization problems." },
      { id: "mai-5.6", name: "5.6 Integration Basics", description: "Anti-differentiation, indefinite integrals of xⁿ and polynomials." },
      { id: "mai-5.7", name: "5.7 Definite Integrals and Area", description: "Area under a curve using technology." },
      { id: "mai-5.8", name: "5.8 Trapezoidal Rule", description: "Approximating areas under curves." },
      { id: "mai-5.9", name: "5.9 Optimization with Calculus", description: "Local max/min using calculus, real-world optimization." },
      { id: "mai-5.10", name: "5.10 Rates of Change", description: "Modelling with differentiation in real-life contexts." },
      { id: "mai-5.11", name: "5.11 Kinematics and Integration", description: "Displacement from velocity, total distance travelled." },
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
      "Unity & diversity, form & function, interactions, continuity & change",
    topics: [
      // THEME A: Unity and Diversity
      { id: "bio-A1.1", name: "A1.1 Water", description: "Hydrogen bonds, cohesion, adhesion, solvent properties, thermal properties relevant to life." },
      { id: "bio-A1.2", name: "A1.2 Nucleic Acids", description: "DNA and RNA structure, nucleotide composition, base pairing (A-T, G-C), double helix." },
      { id: "bio-A2.2", name: "A2.2 Cell Structure", description: "Prokaryotic vs eukaryotic cells, organelles and their functions, microscopy techniques." },
      { id: "bio-A3.1", name: "A3.1 Diversity of Organisms", description: "Species concept, binomial nomenclature, biodiversity, karyotypes, genome structure." },
      { id: "bio-A4.1", name: "A4.1 Evolution and Speciation", description: "Evidence for evolution, natural selection, mutation, genetic drift, speciation." },
      { id: "bio-A4.2", name: "A4.2 Conservation of Biodiversity", description: "Biodiversity loss, human-driven extinction, conservation strategies." },
      // THEME B: Form and Function
      { id: "bio-B1.1", name: "B1.1 Carbohydrates and Lipids", description: "Monosaccharides, disaccharides, polysaccharides, triglycerides, phospholipids, condensation and hydrolysis." },
      { id: "bio-B1.2", name: "B1.2 Proteins", description: "Amino acids, peptide bonds, protein structure, denaturation, diversity of protein functions." },
      { id: "bio-B2.1", name: "B2.1 Membranes and Membrane Transport", description: "Fluid mosaic model, diffusion, facilitated diffusion, osmosis, active transport." },
      { id: "bio-B2.2", name: "B2.2 Organelles and Compartmentalization", description: "Mitochondria, chloroplasts, nucleus, ER, Golgi, ribosomes; compartmentalization in eukaryotes." },
      { id: "bio-B2.3", name: "B2.3 Cell Specialization", description: "Differentiation from stem cells, surface area to volume ratio, specialized cell types." },
      { id: "bio-B3.1", name: "B3.1 Gas Exchange", description: "Surface area and gradients, lungs, gills, stomata, transpiration." },
      { id: "bio-B3.2", name: "B3.2 Transport", description: "Arteries, veins, capillaries, heart structure, cardiac cycle." },
      { id: "bio-B4.1", name: "B4.1 Adaptation to Environment", description: "Habitat characteristics, geographical distribution, biomes, coral reef ecosystems." },
      { id: "bio-B4.2", name: "B4.2 Ecological Niches", description: "Fundamental and realized niches, autotrophs, heterotrophs, consumer classifications." },
      // THEME C: Interaction and Interdependence
      { id: "bio-C1.1", name: "C1.1 Enzymes and Metabolism", description: "Metabolic pathways, enzyme structure, active site, substrate specificity, factors affecting activity." },
      { id: "bio-C1.2", name: "C1.2 Cell Respiration", description: "ATP as energy currency, anaerobic respiration (lactic acid, ethanol), aerobic respiration overview." },
      { id: "bio-C1.3", name: "C1.3 Photosynthesis", description: "Photosynthesis equation, pigments, light-dependent reactions, limiting factors." },
      { id: "bio-C2.2", name: "C2.2 Neural Signalling", description: "Neuron structure, resting and action potential, synaptic transmission, neurotransmitters." },
      { id: "bio-C3.1", name: "C3.1 Integration of Body Systems", description: "Cells → tissues → organs → systems, nervous and endocrine systems." },
      { id: "bio-C3.2", name: "C3.2 Defence Against Disease", description: "Pathogens, non-specific defences, specific immunity, antibiotics, vaccination." },
      { id: "bio-C4.1", name: "C4.1 Populations and Communities", description: "Population growth, limiting factors, competition, mutualism, parasitism, predation." },
      { id: "bio-C4.2", name: "C4.2 Transfers of Energy and Matter", description: "Food chains, food webs, trophic levels, energy loss, carbon cycle." },
      // THEME D: Continuity and Change
      { id: "bio-D1.1", name: "D1.1 DNA Replication", description: "Semi-conservative replication, PCR, gel electrophoresis, DNA profiling." },
      { id: "bio-D1.2", name: "D1.2 Protein Synthesis", description: "Transcription, translation, genetic code, codons, degeneracy, universality." },
      { id: "bio-D1.3", name: "D1.3 Mutation and Gene Editing", description: "Base substitution, insertion, deletion, mutagenic agents, effects on proteins." },
      { id: "bio-D2.1", name: "D2.1 Cell and Nuclear Division", description: "Mitosis stages, meiosis I and II, crossing over, independent assortment, genetic variation." },
      { id: "bio-D2.3", name: "D2.3 Water Potential", description: "Osmosis in cells, turgid/flaccid/plasmolysed states, isotonic solutions." },
      { id: "bio-D3.1", name: "D3.1 Reproduction", description: "Sexual reproduction, human reproductive anatomy, fertilization, plant reproduction." },
      { id: "bio-D3.2", name: "D3.2 Inheritance", description: "Mendelian genetics, mono/dihybrid crosses, codominance, sex-linkage, Punnett squares, pedigrees." },
      { id: "bio-D3.3", name: "D3.3 Homeostasis", description: "Negative feedback, thermoregulation, blood glucose regulation (insulin, glucagon)." },
      { id: "bio-D4.1", name: "D4.1 Natural Selection", description: "Variation, natural selection, adaptation to changing environments." },
      { id: "bio-D4.2", name: "D4.2 Stability and Change", description: "Ecosystem equilibrium, deforestation, keystone species, sustainable management." },
      { id: "bio-D4.3", name: "D4.3 Climate Change", description: "Greenhouse effect, evidence for climate change, impact on biodiversity." },
    ],
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export interface PastPaperQuestion {
  id: string;
  questionNumber: string;
  text: string;
  marks: number;
  commandTerm: string;
  markscheme: string[];
  type: 'short' | 'extended' | 'essay' | 'data-response';
}

export interface PastPaper {
  id: string;
  subject: string;
  title: string;
  year: string;
  session: string;
  paper: string;
  duration: number; // minutes
  totalMarks: number;
  questions: PastPaperQuestion[];
}

export const pastPapers: PastPaper[] = [
  // DEUTSCH A HL - Paper 1
  {
    id: "de-p1-2023",
    subject: "deutsch",
    title: "Deutsch A HL — Paper 1: Textanalyse",
    year: "2023",
    session: "May",
    paper: "Paper 1",
    duration: 135,
    totalMarks: 40,
    questions: [
      {
        id: "de-p1-q1",
        questionNumber: "1",
        text: "Analysieren Sie den folgenden Zeitungsartikel. Untersuchen Sie, wie der Autor sprachliche und stilistische Mittel einsetzt, um seine Argumentation zu stützen.\n\n[Stimulus Text]\n\"Die Digitalisierung unserer Schulen — ein Versprechen ohne Einlösung\"\n\nSeit Jahren hören wir die gleichen Versprechungen: Tablets für alle, digitale Tafeln, WLAN in jedem Klassenzimmer. Die Realität sieht anders aus. Während unsere Nachbarländer ihre Schüler fit für die digitale Zukunft machen, kämpfen deutsche Schulen noch immer mit Kreide und Overhead-Projektoren.\n\nDie Ironie könnte nicht größer sein: Ausgerechnet das Land der Ingenieure und Erfinder hinkt bei der Schuldigitalisierung hinterher. Man fragt sich unwillkürlich — warten wir auf die perfekte Lösung, während die Welt an uns vorbeizieht?\n\nSchreiben Sie eine kommentierte Textanalyse (Guided Literary Analysis).",
        marks: 20,
        commandTerm: "Analysieren",
        markscheme: [
          "Identifikation der Textart (Kommentar/Meinungsartikel) und Zweck (Kritik an Bildungspolitik)",
          "Analyse rhetorischer Mittel: rhetorische Frage, Ironie, Kontrast (Versprechen vs. Realität)",
          "Erkennung des kritischen/sarkastischen Tons",
          "Analyse der Argumentation: Vergleich mit Nachbarländern, Widerspruch Land der Ingenieure",
          "Sprachliche Analyse: Alliteration, Bildsprache ('Kreide und Overhead-Projektoren' als Symbol)",
          "Strukturanalyse: Aufbau der Argumentation vom Allgemeinen zum Spezifischen",
          "Bewertung der Effektivität der sprachlichen Mittel",
          "Eigene fundierte Schlussfolgerung mit Textbezug"
        ],
        type: "essay"
      },
      {
        id: "de-p1-q2",
        questionNumber: "2",
        text: "Analysieren Sie das folgende Gedicht. Untersuchen Sie, wie formale und sprachliche Elemente zur Gesamtwirkung des Gedichts beitragen.\n\n[Stimulus: Modernes Gedicht über Identität und Heimat]\n\nSchreiben Sie eine kommentierte Textanalyse.",
        marks: 20,
        commandTerm: "Analysieren",
        markscheme: [
          "Formanalyse: Strophenform, Reimschema, Metrum",
          "Identifikation zentraler Motive und Themen",
          "Analyse bildlicher Sprache (Metaphern, Vergleiche, Symbole)",
          "Untersuchung von Klang und Rhythmus",
          "Analyse des lyrischen Ichs und seiner Perspektive",
          "Verbindung von Form und Inhalt",
          "Kontextualisierung des Gedichts",
          "Fundierte Gesamtdeutung"
        ],
        type: "essay"
      }
    ]
  },

  // BUSINESS MANAGEMENT HL - Paper 1
  {
    id: "bm-p1-2023",
    subject: "business",
    title: "Business Management HL — Paper 1: Case Study",
    year: "2023",
    session: "May",
    paper: "Paper 1",
    duration: 90,
    totalMarks: 40,
    questions: [
      {
        id: "bm-p1-q1a",
        questionNumber: "1a",
        text: "Define the term 'market share'.",
        marks: 2,
        commandTerm: "Define",
        markscheme: [
          "Market share is the percentage of total sales in a market captured by a particular business/brand",
          "Formula: (Company sales / Total market sales) × 100"
        ],
        type: "short"
      },
      {
        id: "bm-p1-q1b",
        questionNumber: "1b",
        text: "Explain two advantages of a strong brand identity for TechCorp.",
        marks: 4,
        commandTerm: "Explain",
        markscheme: [
          "Customer loyalty — repeat purchases, less price sensitive",
          "Premium pricing — customers willing to pay more for trusted brand",
          "Easier product launches — existing brand recognition",
          "Competitive advantage — differentiation from competitors",
          "Award 2 marks per advantage: 1 for identification, 1 for explanation/application"
        ],
        type: "short"
      },
      {
        id: "bm-p1-q1c",
        questionNumber: "1c",
        text: "Analyse the impact of introducing a JIT production system for TechCorp's operations.",
        marks: 6,
        commandTerm: "Analyse",
        markscheme: [
          "Reduced storage/holding costs",
          "Less waste from obsolete inventory",
          "Requires reliable supplier relationships",
          "Risk: production delays if supply chain disrupted",
          "Quality improvements through smaller batch production",
          "Application to TechCorp's specific context required"
        ],
        type: "extended"
      },
      {
        id: "bm-p1-q1d",
        questionNumber: "1d",
        text: "Evaluate whether TechCorp should expand into the Asian market using a joint venture strategy.",
        marks: 10,
        commandTerm: "Evaluate",
        markscheme: [
          "Arguments for: local market knowledge, shared risk, cultural understanding",
          "Arguments against: shared profits, potential conflicts, loss of control",
          "Alternative strategies considered (wholly owned subsidiary, franchising)",
          "Application to TechCorp's resources and objectives",
          "Balanced evaluation with justified conclusion",
          "Use of relevant business tools (e.g., Ansoff's Matrix, SWOT)"
        ],
        type: "essay"
      }
    ]
  },

  // DESIGN TECHNOLOGY HL - Paper 1
  {
    id: "dt-p1-2023",
    subject: "design-tech",
    title: "Design Technology HL — Paper 1",
    year: "2023",
    session: "May",
    paper: "Paper 1",
    duration: 90,
    totalMarks: 40,
    questions: [
      {
        id: "dt-p1-q1",
        questionNumber: "1a",
        text: "Define the term 'ergonomics'.",
        marks: 2,
        commandTerm: "Define",
        markscheme: [
          "The study of designing equipment and systems that fit the human body",
          "Aims to optimize human well-being and system performance"
        ],
        type: "short"
      },
      {
        id: "dt-p1-q2",
        questionNumber: "1b",
        text: "Explain why designers use the 5th to 95th percentile range when designing products.",
        marks: 4,
        commandTerm: "Explain",
        markscheme: [
          "Covers 90% of the target population",
          "Designing for extremes would make products impractical for most users",
          "Cost-effective — cannot design for every body type",
          "Adjustable features can accommodate users outside this range"
        ],
        type: "short"
      },
      {
        id: "dt-p1-q3",
        questionNumber: "2",
        text: "Discuss how sustainable design principles can be applied to the redesign of a household appliance (e.g., a kettle). Consider material selection, manufacturing, use, and end of life.",
        marks: 12,
        commandTerm: "Discuss",
        markscheme: [
          "Material selection: recycled/recyclable materials, reduced material use",
          "Manufacturing: energy-efficient processes, reduced waste, local production",
          "Use phase: energy efficiency, durability, repairability",
          "End of life: design for disassembly, recyclability, biodegradable materials",
          "Reference to cradle-to-cradle or lifecycle analysis",
          "Specific examples and justifications required"
        ],
        type: "essay"
      }
    ]
  },

  // ENGLISH A L&L SL - Paper 1
  {
    id: "en-p1-2023",
    subject: "english-ll",
    title: "English A L&L SL — Paper 1: Guided Textual Analysis",
    year: "2023",
    session: "May",
    paper: "Paper 1",
    duration: 75,
    totalMarks: 20,
    questions: [
      {
        id: "en-p1-q1",
        questionNumber: "1",
        text: "Analyse the following advertisement from a climate change awareness campaign.\n\n[Stimulus Text]\n\"YOUR CARBON FOOTPRINT IS SHOWING\"\n\nEvery flight you take. Every steak you eat. Every fast-fashion purchase. It all adds up.\n\nThe average person generates 4 tons of CO\u2082 per year. But you're not average, are you?\n\nMake the change. Before the change makes you.\n\n\u2014 EarthFirst Campaign, 2023\n\nWrite a guided analysis examining how language and visual elements are used to persuade the target audience.",
        marks: 20,
        commandTerm: "Analyse",
        markscheme: [
          "Identification of text type (advertisement/campaign) and purpose (persuasion/awareness)",
          "Analysis of direct address ('you') \u2014 creates personal accountability",
          "Tricolon / rule of three: flights, steaks, fast fashion",
          "Rhetorical question: 'But you're not average, are you?' \u2014 challenges reader",
          "Short imperative sentences create urgency",
          "Wordplay/ambiguity: 'change makes you' \u2014 environmental change as threat",
          "Tone shift: from accusatory to motivational",
          "Analysis of audience (environmentally conscious consumers)",
          "Overall effectiveness of persuasive strategies"
        ],
        type: "essay"
      }
    ]
  },

  // MATH AI SL - Paper 1
  {
    id: "ma-p1-2023",
    subject: "math-ai",
    title: "Math AI SL — Paper 1 (No Calculator)",
    year: "2023",
    session: "May",
    paper: "Paper 1",
    duration: 90,
    totalMarks: 80,
    questions: [
      {
        id: "ma-p1-q1",
        questionNumber: "1",
        text: "The first three terms of an arithmetic sequence are 5, 11, 17, ...\n\n(a) Write down the common difference.\n(b) Find the 20th term.\n(c) Find the sum of the first 20 terms.",
        marks: 7,
        commandTerm: "Find",
        markscheme: [
          "(a) d = 6 [1 mark]",
          "(b) u\u2082\u2080 = u\u2081 + (n-1)d = 5 + 19(6) = 119 [2 marks]",
          "(c) S\u2082\u2080 = (20/2)(u\u2081 + u\u2082\u2080) = 10(5 + 119) = 1240 [2 marks]",
          "OR S\u2082\u2080 = (20/2)(2(5) + 19(6)) = 10(10 + 114) = 1240"
        ],
        type: "short"
      },
      {
        id: "ma-p1-q2",
        questionNumber: "2",
        text: "A survey of 200 students recorded their heights. The results are summarized:\nMean = 168 cm, Standard deviation = 7.5 cm\n\n(a) How many students would you expect to have heights within one standard deviation of the mean?\n(b) A student has a height of 183 cm. Calculate the z-score for this student.\n(c) State whether this height is unusual. Justify your answer.",
        marks: 7,
        commandTerm: "Calculate",
        markscheme: [
          "(a) Approximately 68% of 200 = 136 students [2 marks]",
          "(b) z = (x - \u03bc)/\u03c3 = (183 - 168)/7.5 = 2.0 [2 marks]",
          "(c) Yes, unusual \u2014 z-score of 2.0 means the height is 2 standard deviations above the mean, which is beyond the 95% range [2 marks]"
        ],
        type: "short"
      },
      {
        id: "ma-p1-q3",
        questionNumber: "3",
        text: "The function f(x) = 2x\u00b3 - 9x\u00b2 + 12x - 4 is defined for x \u2208 \u211d.\n\n(a) Find f'(x).\n(b) Find the coordinates of the local maximum and minimum points.\n(c) Determine the intervals where f is increasing.",
        marks: 10,
        commandTerm: "Find",
        markscheme: [
          "(a) f'(x) = 6x\u00b2 - 18x + 12 [2 marks]",
          "(b) Set f'(x) = 0: 6x\u00b2 - 18x + 12 = 0 \u2192 x\u00b2 - 3x + 2 = 0 \u2192 (x-1)(x-2) = 0",
          "x = 1: f(1) = 2 - 9 + 12 - 4 = 1 \u2192 (1, 1) [2 marks]",
          "x = 2: f(2) = 16 - 36 + 24 - 4 = 0 \u2192 (2, 0) [2 marks]",
          "f''(x) = 12x - 18: f''(1) = -6 < 0 \u2192 max at (1,1); f''(2) = 6 > 0 \u2192 min at (2,0)",
          "(c) f increasing when f'(x) > 0: x < 1 or x > 2 [2 marks]"
        ],
        type: "extended"
      }
    ]
  },

  // BIOLOGY SL - Paper 1
  {
    id: "bi-p1-2023",
    subject: "biology",
    title: "Biology SL — Paper 1 (Multiple Choice) & Paper 2",
    year: "2023",
    session: "May",
    paper: "Paper 2",
    duration: 75,
    totalMarks: 50,
    questions: [
      {
        id: "bi-p2-q1",
        questionNumber: "1a",
        text: "Draw a labelled diagram of a prokaryotic cell.",
        marks: 4,
        commandTerm: "Draw",
        markscheme: [
          "Cell wall shown and labelled",
          "Plasma/cell membrane shown and labelled",
          "Cytoplasm labelled",
          "Ribosomes (70S) shown as small dots and labelled",
          "Nucleoid/naked DNA (circular) shown and labelled",
          "Optional: flagellum, pili, plasmid for additional detail"
        ],
        type: "short"
      },
      {
        id: "bi-p2-q2",
        questionNumber: "2",
        text: "Explain the process of DNA replication.",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "Helicase unwinds and separates the double helix",
          "Hydrogen bonds between base pairs are broken",
          "Each strand acts as a template",
          "DNA polymerase adds complementary nucleotides (A-T, G-C)",
          "New nucleotides added in 5' to 3' direction",
          "Leading strand is continuous, lagging strand in Okazaki fragments",
          "Result: two identical DNA molecules (semi-conservative replication)",
          "Each new molecule has one original and one new strand"
        ],
        type: "extended"
      },
      {
        id: "bi-p2-q3",
        questionNumber: "3",
        text: "Discuss the impact of climate change on biodiversity, with reference to specific examples.",
        marks: 8,
        commandTerm: "Discuss",
        markscheme: [
          "Habitat loss due to rising temperatures and sea levels",
          "Coral bleaching \u2014 loss of symbiotic algae (zooxanthellae)",
          "Species migration \u2014 shifts in geographical ranges",
          "Phenological changes \u2014 mismatch in timing (e.g., flowering and pollinator activity)",
          "Increased extinction rates for specialist species",
          "Ocean acidification affecting marine organisms with calcium carbonate shells",
          "Specific examples required (polar bears, coral reefs, migratory birds)",
          "Both positive and negative aspects for balanced discussion"
        ],
        type: "essay"
      }
    ]
  },

  // BIOLOGY SL - Paper 2 (November 2023)
  {
    id: "bi-p2-n23",
    subject: "biology",
    title: "Biology SL — Paper 2: Data-Based & Extended Response",
    year: "2023",
    session: "November",
    paper: "Paper 2",
    duration: 75,
    totalMarks: 50,
    questions: [
      {
        id: "bi-p2n-q1",
        questionNumber: "1",
        text: "The graph below shows the effect of temperature on the rate of enzyme activity.\n\n[Data shows enzyme activity rising from 10°C to 37°C, then dropping sharply after 45°C]\n\n(a) State the optimum temperature for this enzyme. [1]\n(b) Explain why enzyme activity decreases above the optimum temperature. [3]\n(c) Outline the lock-and-key model of enzyme action. [3]",
        marks: 7,
        commandTerm: "Explain",
        markscheme: [
          "(a) Optimum temperature is approximately 37°C [1 mark]",
          "(b) High temperatures cause denaturation — hydrogen bonds and other weak bonds break",
          "Active site changes shape / loses its specific 3D conformation",
          "Substrate can no longer bind to active site — enzyme-substrate complex cannot form",
          "(c) Enzyme has a specific active site with a particular shape",
          "Substrate is complementary in shape to the active site",
          "Substrate fits into active site like a key into a lock",
          "Enzyme-substrate complex forms, reaction occurs, products released"
        ],
        type: "data-response"
      },
      {
        id: "bi-p2n-q2",
        questionNumber: "2",
        text: "Explain the process of mitosis, including the role of each phase.",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "Interphase: DNA replication occurs, cell prepares for division",
          "Prophase: chromosomes condense/become visible, nuclear membrane breaks down, spindle fibers form",
          "Metaphase: chromosomes line up at the cell equator/metaphase plate",
          "Anaphase: sister chromatids separate and move to opposite poles",
          "Telophase: nuclear membranes reform, chromosomes decondense",
          "Cytokinesis: cytoplasm divides, producing two genetically identical daughter cells",
          "Result: 2 diploid cells identical to parent cell",
          "Importance: growth, repair, asexual reproduction"
        ],
        type: "extended"
      },
      {
        id: "bi-p2n-q3",
        questionNumber: "3",
        text: "The diagram shows a food web in a marine ecosystem.\n\n[Food web: Phytoplankton → Zooplankton → Small fish → Tuna / Seabirds; Phytoplankton → Mussels → Starfish]\n\n(a) Identify one producer and one secondary consumer from the food web. [2]\n(b) Construct a food chain with four trophic levels from this food web. [2]\n(c) Explain why energy decreases at each trophic level. [4]",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "(a) Producer: phytoplankton. Secondary consumer: small fish OR starfish [2 marks]",
          "(b) Phytoplankton → Zooplankton → Small fish → Tuna [2 marks]",
          "(c) Energy is lost as heat through cellular respiration at each level",
          "Not all organisms at one level are eaten by the next level",
          "Some parts of organisms are indigestible (bones, fur, cellulose)",
          "Only about 10-20% of energy is transferred between trophic levels",
          "Energy is used for life processes (movement, metabolism) and lost"
        ],
        type: "data-response"
      },
      {
        id: "bi-p2n-q4",
        questionNumber: "4",
        text: "Outline the differences between aerobic and anaerobic respiration.",
        marks: 6,
        commandTerm: "Outline",
        markscheme: [
          "Aerobic uses oxygen, anaerobic does not",
          "Aerobic occurs in mitochondria, anaerobic in cytoplasm",
          "Aerobic produces ~36-38 ATP per glucose, anaerobic produces only 2 ATP",
          "Aerobic: glucose → CO₂ + H₂O, Anaerobic: glucose → ethanol + CO₂ (yeast) OR lactate (animals)",
          "Aerobic is more efficient / releases more energy per glucose molecule",
          "Both begin with glycolysis in the cytoplasm"
        ],
        type: "extended"
      }
    ]
  },

  // BIOLOGY SL - Paper 2 (May 2022)
  {
    id: "bi-p2-m22",
    subject: "biology",
    title: "Biology SL — Paper 2: Genetics & Evolution",
    year: "2022",
    session: "May",
    paper: "Paper 2",
    duration: 75,
    totalMarks: 50,
    questions: [
      {
        id: "bi-m22-q1",
        questionNumber: "1",
        text: "In pea plants, the allele for tall stems (T) is dominant over the allele for short stems (t).\n\n(a) Define the term 'genotype'. [1]\n(b) Draw a Punnett square to show the expected offspring from a cross between two heterozygous plants (Tt × Tt). [3]\n(c) State the expected phenotypic ratio. [1]\n(d) Explain why the observed ratio in an actual cross may differ from the expected ratio. [3]",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "(a) Genotype: the alleles of an organism for a particular gene/trait [1 mark]",
          "(b) Punnett square showing: TT, Tt, Tt, tt — correct gametes and combinations [3 marks]",
          "(c) Phenotypic ratio: 3 tall : 1 short (3:1) [1 mark]",
          "(d) Random fertilization — chance determines which gametes fuse",
          "Small sample size leads to greater deviation from expected ratio",
          "Expected ratio is theoretical/based on probability",
          "Larger sample sizes tend to approach expected ratios (law of large numbers)"
        ],
        type: "data-response"
      },
      {
        id: "bi-m22-q2",
        questionNumber: "2",
        text: "Describe the process of natural selection, using a named example.",
        marks: 8,
        commandTerm: "Describe",
        markscheme: [
          "Variation exists within a population (genetic variation due to mutation/sexual reproduction)",
          "Organisms produce more offspring than can survive (overproduction)",
          "There is a struggle for survival / competition for resources",
          "Individuals with advantageous traits are more likely to survive",
          "These individuals reproduce and pass on their alleles to offspring",
          "Over generations, the frequency of the advantageous allele increases",
          "Named example required (e.g., peppered moth, antibiotic resistance, Darwin's finches)",
          "Example must be linked clearly to the mechanism described"
        ],
        type: "extended"
      },
      {
        id: "bi-m22-q3",
        questionNumber: "3",
        text: "Compare and contrast the structures of DNA and RNA.",
        marks: 6,
        commandTerm: "Compare",
        markscheme: [
          "Both are nucleic acids made of nucleotide monomers",
          "DNA is double-stranded, RNA is usually single-stranded",
          "DNA contains deoxyribose sugar, RNA contains ribose sugar",
          "DNA uses thymine (T), RNA uses uracil (U) — both have A, G, C",
          "DNA is found mainly in the nucleus, RNA is found in nucleus and cytoplasm",
          "DNA stores genetic information, RNA has various roles (mRNA, tRNA, rRNA)"
        ],
        type: "extended"
      },
      {
        id: "bi-m22-q4",
        questionNumber: "4",
        text: "Explain the role of the circulatory system in gas exchange.",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "Blood transports O₂ from lungs to body cells and CO₂ from cells to lungs",
          "Hemoglobin in red blood cells binds oxygen to form oxyhemoglobin",
          "Oxygen is released in tissues where O₂ concentration is low",
          "CO₂ is transported dissolved in plasma or as bicarbonate ions (HCO₃⁻)",
          "Pulmonary circulation: heart → lungs → heart (gas exchange at alveoli)",
          "Systemic circulation: heart → body → heart (gas exchange at tissues)",
          "Thin alveolar walls and capillary walls allow diffusion",
          "Large surface area and concentration gradient maintained by blood flow and ventilation"
        ],
        type: "extended"
      }
    ]
  },

  // BIOLOGY SL - Paper 2 (November 2022)
  {
    id: "bi-p2-n22",
    subject: "biology",
    title: "Biology SL — Paper 2: Ecology & Human Physiology",
    year: "2022",
    session: "November",
    paper: "Paper 2",
    duration: 75,
    totalMarks: 50,
    questions: [
      {
        id: "bi-n22-q1",
        questionNumber: "1",
        text: "The table shows the population sizes of a species of deer over a 10-year period in a national park.\n\nYear: 2012 | 2014 | 2016 | 2018 | 2020 | 2022\nPopulation: 120 | 185 | 310 | 480 | 520 | 530\n\n(a) Describe the trend shown in the data. [2]\n(b) Suggest reasons for the change in population growth rate between 2018 and 2022. [4]\n(c) Explain the concept of carrying capacity. [2]",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "(a) Population increases rapidly from 2012-2018, then growth slows/levels off from 2018-2022",
          "Population approximately quadrupled over the 10-year period",
          "(b) Resources becoming limited (food, water, space)",
          "Increased competition (intraspecific) as population density rises",
          "Predation or disease may increase with higher population density",
          "Population approaching the carrying capacity of the environment",
          "(c) Maximum population size that an environment can sustain indefinitely",
          "Determined by limiting factors such as food, water, space, and shelter"
        ],
        type: "data-response"
      },
      {
        id: "bi-n22-q2",
        questionNumber: "2",
        text: "Describe the structure and function of the small intestine in relation to absorption of digested food.",
        marks: 8,
        commandTerm: "Describe",
        markscheme: [
          "Villi increase surface area for absorption",
          "Microvilli on epithelial cells further increase surface area",
          "Single layer of epithelial cells — short diffusion distance",
          "Rich blood capillary network maintains concentration gradient",
          "Lacteals absorb fatty acids and glycerol / lipid products",
          "Glucose and amino acids absorbed by active transport and facilitated diffusion",
          "Long length of small intestine increases absorption time",
          "Muscles in wall for peristalsis — moves food along"
        ],
        type: "extended"
      },
      {
        id: "bi-n22-q3",
        questionNumber: "3",
        text: "Explain how antibodies help to defend the body against pathogens.",
        marks: 6,
        commandTerm: "Explain",
        markscheme: [
          "Antibodies are proteins produced by B-lymphocytes / plasma cells",
          "Each antibody is specific to one antigen (complementary shape)",
          "Antibodies bind to antigens on the surface of pathogens",
          "This can neutralize toxins produced by pathogens",
          "Agglutination: antibodies cause clumping of pathogens, making them easier for phagocytes to engulf",
          "Memory cells remain after infection, enabling faster response on re-exposure (immunity)"
        ],
        type: "extended"
      },
      {
        id: "bi-n22-q4",
        questionNumber: "4",
        text: "Explain the greenhouse effect and its relationship to global warming.",
        marks: 6,
        commandTerm: "Explain",
        markscheme: [
          "Short-wave radiation from the sun passes through the atmosphere and heats Earth's surface",
          "Earth re-emits longer wavelength infrared/heat radiation",
          "Greenhouse gases (CO₂, methane, water vapor) absorb and re-radiate this infrared radiation",
          "This traps heat in the atmosphere, warming the Earth (natural greenhouse effect)",
          "Human activities (burning fossil fuels, deforestation) increase greenhouse gas concentrations",
          "Enhanced greenhouse effect leads to global warming / rising average temperatures"
        ],
        type: "extended"
      }
    ]
  },

  // MATH AI SL - Paper 2 (May 2023)
  {
    id: "ma-p2-m23",
    subject: "math-ai",
    title: "Math AI SL — Paper 2 (Calculator Allowed)",
    year: "2023",
    session: "May",
    paper: "Paper 2",
    duration: 90,
    totalMarks: 80,
    questions: [
      {
        id: "ma-p2m-q1",
        questionNumber: "1",
        text: "A company sells handmade candles. The cost function is C(x) = 200 + 8x and the revenue function is R(x) = 20x, where x is the number of candles.\n\n(a) Find the break-even point. [2]\n(b) Write down the profit function P(x). [1]\n(c) Find the profit when 50 candles are sold. [2]\n(d) The company wants to make a profit of at least $500. Find the minimum number of candles they need to sell. [2]",
        marks: 7,
        commandTerm: "Find",
        markscheme: [
          "(a) Break-even: R(x) = C(x) → 20x = 200 + 8x → 12x = 200 → x ≈ 16.7, so 17 candles [2 marks]",
          "(b) P(x) = R(x) - C(x) = 20x - 200 - 8x = 12x - 200 [1 mark]",
          "(c) P(50) = 12(50) - 200 = 600 - 200 = $400 [2 marks]",
          "(d) 12x - 200 ≥ 500 → 12x ≥ 700 → x ≥ 58.3, so 59 candles [2 marks]"
        ],
        type: "short"
      },
      {
        id: "ma-p2m-q2",
        questionNumber: "2",
        text: "The heights of 80 students are normally distributed with mean 165 cm and standard deviation 8 cm.\n\n(a) Find the probability that a randomly selected student has a height less than 170 cm. [2]\n(b) Find the probability that a student has a height between 155 cm and 175 cm. [3]\n(c) 20% of students are taller than h cm. Find h. [3]",
        marks: 8,
        commandTerm: "Find",
        markscheme: [
          "(a) P(X < 170) = P(Z < (170-165)/8) = P(Z < 0.625) ≈ 0.734 [2 marks]",
          "(b) P(155 < X < 175) = P(-1.25 < Z < 1.25) ≈ 0.789 [3 marks]",
          "(c) P(X > h) = 0.20, so P(X < h) = 0.80",
          "Z = invNorm(0.80) ≈ 0.842",
          "h = 165 + 0.842 × 8 = 165 + 6.74 ≈ 171.7 cm [3 marks]"
        ],
        type: "extended"
      },
      {
        id: "ma-p2m-q3",
        questionNumber: "3",
        text: "The following table shows data collected on the relationship between hours of study (x) and exam score (y) for 8 students.\n\nx: 2, 4, 5, 7, 8, 10, 12, 15\ny: 45, 55, 58, 68, 72, 80, 85, 92\n\n(a) Calculate the Pearson correlation coefficient r. [2]\n(b) Describe the correlation between hours of study and exam score. [1]\n(c) Find the equation of the regression line y on x. [2]\n(d) Use the regression line to predict the exam score for a student who studies 9 hours. [2]\n(e) Explain why it would be unreliable to predict the score for 25 hours of study. [1]",
        marks: 8,
        commandTerm: "Calculate",
        markscheme: [
          "(a) r ≈ 0.993 (using GDC) [2 marks]",
          "(b) Strong positive linear correlation [1 mark]",
          "(c) y = 3.61x + 38.5 (approximately, using GDC) [2 marks]",
          "(d) y = 3.61(9) + 38.5 = 32.49 + 38.5 ≈ 71.0 [2 marks]",
          "(e) 25 hours is outside the range of data (extrapolation), so the prediction is unreliable [1 mark]"
        ],
        type: "data-response"
      },
      {
        id: "ma-p2m-q4",
        questionNumber: "4",
        text: "A rectangular garden has a perimeter of 40 metres. Let x be the width of the garden.\n\n(a) Show that the area A of the garden is given by A = 20x - x². [2]\n(b) Find dA/dx. [1]\n(c) Find the value of x that gives the maximum area. [2]\n(d) Find the maximum area. [1]\n(e) Justify that this is a maximum. [2]",
        marks: 8,
        commandTerm: "Find",
        markscheme: [
          "(a) Perimeter: 2x + 2l = 40 → l = 20 - x. Area = x(20-x) = 20x - x² [2 marks]",
          "(b) dA/dx = 20 - 2x [1 mark]",
          "(c) Set dA/dx = 0: 20 - 2x = 0 → x = 10 [2 marks]",
          "(d) A = 20(10) - 10² = 200 - 100 = 100 m² [1 mark]",
          "(e) d²A/dx² = -2 < 0, therefore it is a maximum [2 marks]"
        ],
        type: "extended"
      }
    ]
  },

  // MATH AI SL - Paper 1 (November 2022)
  {
    id: "ma-p1-n22",
    subject: "math-ai",
    title: "Math AI SL — Paper 1 (No Calculator)",
    year: "2022",
    session: "November",
    paper: "Paper 1",
    duration: 90,
    totalMarks: 80,
    questions: [
      {
        id: "ma-n22-q1",
        questionNumber: "1",
        text: "The first term of a geometric sequence is 3 and the common ratio is 2.\n\n(a) Find the 8th term. [2]\n(b) Find the sum of the first 8 terms. [2]\n(c) Explain why this geometric series does not have a sum to infinity. [1]",
        marks: 5,
        commandTerm: "Find",
        markscheme: [
          "(a) u₈ = 3 × 2⁷ = 3 × 128 = 384 [2 marks]",
          "(b) S₈ = 3(2⁸ - 1)/(2 - 1) = 3(255) = 765 [2 marks]",
          "(c) |r| = 2 > 1, so the series diverges / terms get larger [1 mark]"
        ],
        type: "short"
      },
      {
        id: "ma-n22-q2",
        questionNumber: "2",
        text: "A box contains 5 red balls and 3 blue balls. Two balls are drawn without replacement.\n\n(a) Draw a tree diagram showing all possible outcomes. [3]\n(b) Find the probability that both balls are red. [2]\n(c) Find the probability that the balls are different colors. [3]",
        marks: 8,
        commandTerm: "Find",
        markscheme: [
          "(a) Tree diagram with correct probabilities: First draw: 5/8 red, 3/8 blue",
          "Second draw after red: 4/7 red, 3/7 blue; after blue: 5/7 red, 2/7 blue [3 marks]",
          "(b) P(RR) = 5/8 × 4/7 = 20/56 = 5/14 ≈ 0.357 [2 marks]",
          "(c) P(different) = P(RB) + P(BR) = 5/8 × 3/7 + 3/8 × 5/7 = 15/56 + 15/56 = 30/56 = 15/28 ≈ 0.536 [3 marks]"
        ],
        type: "extended"
      },
      {
        id: "ma-n22-q3",
        questionNumber: "3",
        text: "The volume of a sphere is given by V = (4/3)πr³.\n\n(a) Find dV/dr. [2]\n(b) Find the rate of change of volume when the radius is 5 cm. [2]\n(c) A spherical balloon is being inflated. When the radius is 5 cm, the radius is increasing at 0.3 cm/s. Find the rate at which the volume is increasing. [3]",
        marks: 7,
        commandTerm: "Find",
        markscheme: [
          "(a) dV/dr = 4πr² [2 marks]",
          "(b) When r = 5: dV/dr = 4π(25) = 100π ≈ 314 cm³/cm [2 marks]",
          "(c) dV/dt = dV/dr × dr/dt = 100π × 0.3 = 30π ≈ 94.2 cm³/s [3 marks]"
        ],
        type: "extended"
      },
      {
        id: "ma-n22-q4",
        questionNumber: "4",
        text: "The function f(x) = -x² + 6x - 5 models the height (in metres) of a ball thrown upward, where x is the time in seconds.\n\n(a) Find the height at x = 0. [1]\n(b) Find the time when the ball hits the ground (f(x) = 0). [3]\n(c) Find the maximum height reached by the ball. [3]\n(d) State the domain and range of this function in context. [2]",
        marks: 9,
        commandTerm: "Find",
        markscheme: [
          "(a) f(0) = -0 + 0 - 5 = -5... Note: context issue, but f(0) = -5 [1 mark]",
          "(b) -x² + 6x - 5 = 0 → x² - 6x + 5 = 0 → (x-1)(x-5) = 0 → x = 1 or x = 5 [3 marks]",
          "(c) Vertex: x = -b/2a = -6/(-2) = 3, f(3) = -9 + 18 - 5 = 4 m [3 marks]",
          "(d) Domain: 1 ≤ x ≤ 5 (time from launch to landing), Range: 0 ≤ f(x) ≤ 4 [2 marks]"
        ],
        type: "extended"
      }
    ]
  },

  // BUSINESS MANAGEMENT HL - Paper 2 (May 2023)
  {
    id: "bm-p2-m23",
    subject: "business",
    title: "Business Management HL — Paper 2: Structured Questions",
    year: "2023",
    session: "May",
    paper: "Paper 2",
    duration: 105,
    totalMarks: 50,
    questions: [
      {
        id: "bm-p2m-q1a",
        questionNumber: "1a",
        text: "Define the term 'cash flow forecast'.",
        marks: 2,
        commandTerm: "Define",
        markscheme: [
          "A prediction/estimate of the expected cash inflows and cash outflows over a future period",
          "Used to anticipate periods of cash surplus or deficit"
        ],
        type: "short"
      },
      {
        id: "bm-p2m-q1b",
        questionNumber: "1b",
        text: "Explain two reasons why a business might experience cash flow problems.",
        marks: 4,
        commandTerm: "Explain",
        markscheme: [
          "Overtrading — growing too quickly, expenses exceed incoming revenue",
          "Poor credit control — allowing customers too long to pay (high receivables)",
          "Seasonal demand — revenue fluctuates but costs remain constant",
          "Unexpected expenses — equipment breakdown, legal costs",
          "2 marks per reason: 1 for identification, 1 for explanation"
        ],
        type: "short"
      },
      {
        id: "bm-p2m-q1c",
        questionNumber: "1c",
        text: "GreenLeaf Ltd is a small organic food company. Their current ratio is 0.8 and their quick ratio is 0.3.\n\nAnalyse the financial position of GreenLeaf Ltd using the ratio data provided.",
        marks: 6,
        commandTerm: "Analyse",
        markscheme: [
          "Current ratio below 1 indicates potential difficulty paying short-term debts",
          "Quick ratio of 0.3 is very low — heavy reliance on stock for liquidity",
          "Large gap between current and quick ratio suggests high inventory levels",
          "May face difficulties paying suppliers and creditors on time",
          "Could indicate overinvestment in stock or slow-moving inventory",
          "Context: organic food may be perishable, making high stock risky"
        ],
        type: "extended"
      },
      {
        id: "bm-p2m-q2",
        questionNumber: "2",
        text: "Evaluate the use of social media marketing for a new small business entering a competitive market.",
        marks: 10,
        commandTerm: "Evaluate",
        markscheme: [
          "Advantages: low cost compared to traditional advertising",
          "Wide reach — access to global audience, target specific demographics",
          "Direct interaction with customers — builds relationships and loyalty",
          "Viral potential — content can spread rapidly at no extra cost",
          "Disadvantages: negative reviews/feedback visible to all",
          "Time-consuming to manage effectively and create content",
          "Algorithm changes can reduce visibility without paid promotion",
          "May not reach all target demographics (older consumers)",
          "Comparison with alternative marketing strategies",
          "Justified conclusion with reference to the specific context"
        ],
        type: "essay"
      }
    ]
  },

  // BUSINESS MANAGEMENT HL - Paper 1 (November 2022)
  {
    id: "bm-p1-n22",
    subject: "business",
    title: "Business Management HL — Paper 1: Case Study",
    year: "2022",
    session: "November",
    paper: "Paper 1",
    duration: 90,
    totalMarks: 40,
    questions: [
      {
        id: "bm-n22-q1a",
        questionNumber: "1a",
        text: "Define the term 'organizational culture'.",
        marks: 2,
        commandTerm: "Define",
        markscheme: [
          "The shared values, beliefs, attitudes, and norms that characterize an organization",
          "It influences how employees behave, make decisions, and interact"
        ],
        type: "short"
      },
      {
        id: "bm-n22-q1b",
        questionNumber: "1b",
        text: "With reference to FreshBrew Coffee, explain two benefits of having a strong corporate culture.",
        marks: 4,
        commandTerm: "Explain",
        markscheme: [
          "Employee motivation and retention — shared sense of purpose reduces turnover",
          "Consistent brand identity — employees deliver uniform customer experience",
          "Easier decision-making — shared values guide behavior without micromanagement",
          "Attraction of talent — strong culture appeals to like-minded employees",
          "Must be applied to FreshBrew context for full marks"
        ],
        type: "short"
      },
      {
        id: "bm-n22-q1c",
        questionNumber: "1c",
        text: "Analyse the impact of Maslow's hierarchy of needs on FreshBrew's employee motivation strategy.",
        marks: 6,
        commandTerm: "Analyse",
        markscheme: [
          "Physiological: competitive wages and benefits",
          "Safety: job security, safe working conditions",
          "Social: team-building, collaborative work environment",
          "Esteem: recognition programs, opportunities for advancement",
          "Self-actualization: training, personal development, creative freedom",
          "Application to FreshBrew's specific workforce and context"
        ],
        type: "extended"
      },
      {
        id: "bm-n22-q1d",
        questionNumber: "1d",
        text: "Evaluate whether FreshBrew should use a franchising model to expand internationally.",
        marks: 10,
        commandTerm: "Evaluate",
        markscheme: [
          "Advantages: rapid expansion with lower capital investment",
          "Local knowledge of franchisees reduces cultural/market risk",
          "Franchise fees provide ongoing revenue stream",
          "Disadvantages: less control over quality and brand consistency",
          "Profit sharing with franchisees reduces per-unit earnings",
          "Risk of brand damage from poorly managed franchises",
          "Alternative strategies: company-owned stores, licensing, joint ventures",
          "Consideration of FreshBrew's resources, brand strength, and goals",
          "Balanced argument with justified final recommendation"
        ],
        type: "essay"
      }
    ]
  },

  // BUSINESS MANAGEMENT HL - Paper 2 (November 2022)
  {
    id: "bm-p2-n22",
    subject: "business",
    title: "Business Management HL — Paper 2: Data Response",
    year: "2022",
    session: "November",
    paper: "Paper 2",
    duration: 105,
    totalMarks: 50,
    questions: [
      {
        id: "bm-p2n-q1",
        questionNumber: "1a",
        text: "Define the term 'economies of scale'.",
        marks: 2,
        commandTerm: "Define",
        markscheme: [
          "The cost advantages that a business obtains due to expansion / increasing scale of production",
          "As output increases, average cost per unit decreases"
        ],
        type: "short"
      },
      {
        id: "bm-p2n-q2",
        questionNumber: "1b",
        text: "Explain one internal and one external economy of scale.",
        marks: 4,
        commandTerm: "Explain",
        markscheme: [
          "Internal: purchasing/bulk buying — lower per-unit costs from suppliers due to large orders",
          "Internal: technical — large-scale machinery is more efficient per unit of output",
          "External: skilled labor pool — concentration of industry attracts trained workers",
          "External: infrastructure — shared transport/communication networks in industrial areas",
          "1 internal + 1 external required, with explanation"
        ],
        type: "short"
      },
      {
        id: "bm-p2n-q3",
        questionNumber: "2",
        text: "NovaTech has the following financial data:\nRevenue: $2,400,000\nCost of goods sold: $1,440,000\nOperating expenses: $600,000\nNet profit: $360,000\n\n(a) Calculate the gross profit margin. [2]\n(b) Calculate the net profit margin. [2]\n(c) Analyse NovaTech's profitability using the data provided. [6]",
        marks: 10,
        commandTerm: "Calculate",
        markscheme: [
          "(a) Gross profit = 2,400,000 - 1,440,000 = $960,000. GPM = 960,000/2,400,000 × 100 = 40%",
          "(b) NPM = 360,000/2,400,000 × 100 = 15%",
          "(c) GPM of 40% means 60% of revenue goes to COGS — may need to reduce production costs",
          "NPM of 15% is reasonable but operating expenses are $600,000 (25% of revenue)",
          "Gap between GPM and NPM indicates significant overhead/operating costs",
          "Recommendations: reduce COGS through supplier negotiation, improve operational efficiency"
        ],
        type: "data-response"
      }
    ]
  },

  // ENGLISH A L&L SL - Paper 1 (November 2023)
  {
    id: "en-p1-n23",
    subject: "english-ll",
    title: "English A L&L SL — Paper 1: Guided Textual Analysis",
    year: "2023",
    session: "November",
    paper: "Paper 1",
    duration: 75,
    totalMarks: 20,
    questions: [
      {
        id: "en-p1n-q1",
        questionNumber: "1",
        text: "Analyse the following extract from a travel blog.\n\n[Stimulus Text]\n\"Lost in Translation: A Week in Tokyo\"\n\nI didn't come to Tokyo to find myself. That's what people say when they travel — as if identity is something you misplace between boarding gates. I came because I wanted to feel small. And Tokyo delivers.\n\nThe city doesn't care that you're here. Shibuya crossing moves with or without you. The neon signs speak a language your eyes can only pretend to read. And somewhere between the third cup of matcha and the seventh wrong train, you realize: being lost isn't the problem. It's the only honest state of being in a city this vast.\n\nThe locals don't stare. They don't need to. You are invisible here, and somehow, that's the most liberating thing you've ever felt.\n\nWrite a guided analysis examining how the writer uses language and structure to convey their experience.",
        marks: 20,
        commandTerm: "Analyse",
        markscheme: [
          "Text type: personal travel blog — informal, reflective, first person",
          "Subversion of travel cliché: 'I didn't come to find myself' — challenges expectations",
          "Personification: 'The city doesn't care' — Tokyo as indifferent entity",
          "Sensory imagery: neon signs, matcha, wrong trains — immersive experience",
          "Paradox: 'being lost isn't the problem' — reframing disorientation as positive",
          "Second person shifts ('you') — draws reader into the experience",
          "Short declarative sentences create rhythm and emphasis",
          "Oxymoron: 'invisible' yet 'liberating' — finding freedom in anonymity",
          "Overall tone: contemplative, honest, slightly self-deprecating"
        ],
        type: "essay"
      }
    ]
  },

  // ENGLISH A L&L SL - Paper 2 (May 2023)
  {
    id: "en-p2-m23",
    subject: "english-ll",
    title: "English A L&L SL — Paper 2: Comparative Essay",
    year: "2023",
    session: "May",
    paper: "Paper 2",
    duration: 105,
    totalMarks: 30,
    questions: [
      {
        id: "en-p2m-q1",
        questionNumber: "1",
        text: "How and why do writers use settings to explore the concept of belonging?\n\nCompare and contrast the ways in which at least two works you have studied use physical or social settings to examine themes of belonging, identity, or exclusion.",
        marks: 30,
        commandTerm: "Compare",
        markscheme: [
          "Clear thesis connecting setting to belonging across two or more works",
          "Analysis of how physical settings reflect characters' psychological states",
          "Discussion of social settings (class, culture, family) and their impact on belonging",
          "Specific textual evidence from at least two studied works",
          "Comparison: similarities and differences in how settings function",
          "Analysis of literary techniques (symbolism, imagery, pathetic fallacy)",
          "Consideration of authorial purpose — why these settings were chosen",
          "Personal engagement with the works — original thinking and interpretation",
          "Coherent structure with clear argument throughout",
          "Effective use of literary terminology"
        ],
        type: "essay"
      }
    ]
  },

  // ENGLISH A L&L SL - Paper 1 (May 2022)
  {
    id: "en-p1-m22",
    subject: "english-ll",
    title: "English A L&L SL — Paper 1: Guided Textual Analysis",
    year: "2022",
    session: "May",
    paper: "Paper 1",
    duration: 75,
    totalMarks: 20,
    questions: [
      {
        id: "en-m22-q1",
        questionNumber: "1",
        text: "Analyse the following opinion column from a newspaper.\n\n[Stimulus Text]\n\"The Death of the Dinner Table\"\n\nOnce upon a time — and yes, I'm aware of the irony of beginning a column about modernity with a fairy tale opener — families ate together. Not performatively, not for Instagram. They just... ate. They passed bread. They argued about politics. They complained about the weather. It was ordinary. It was everything.\n\nNow we eat in shifts. The microwave beeps at midnight. Breakfast is a protein bar consumed while scrolling through notifications. Dinner is a DoorDash delivery eaten cross-legged on a couch, eyes fixed on a screen that couldn't care less whether you're nourished.\n\nI'm not nostalgic. I'm angry. There's a difference.\n\nWrite a guided analysis examining how the writer constructs their argument.",
        marks: 20,
        commandTerm: "Analyse",
        markscheme: [
          "Text type: opinion column — persuasive, personal, journalistic",
          "Meta-awareness: 'I'm aware of the irony' — establishes self-aware, intelligent voice",
          "Contrast structure: past ('once upon a time') vs present ('now') — creates clear dichotomy",
          "Listing/accumulation: 'passed bread, argued, complained' — builds picture of community",
          "Use of brand names (Instagram, DoorDash) — grounds argument in contemporary reality",
          "Personification: screen that 'couldn't care less' — technology as indifferent replacement",
          "Short, punchy final paragraph: 'I'm not nostalgic. I'm angry.' — emotional climax",
          "Tone shift from reflective/warm to sharp/critical",
          "Audience: likely middle-aged readers who share the sentiment",
          "Effectiveness of emotive language and structural choices"
        ],
        type: "essay"
      }
    ]
  },

  // DEUTSCH A HL - Paper 2 (May 2023)
  {
    id: "de-p2-m23",
    subject: "deutsch",
    title: "Deutsch A HL — Paper 2: Vergleichender Aufsatz",
    year: "2023",
    session: "May",
    paper: "Paper 2",
    duration: 105,
    totalMarks: 30,
    questions: [
      {
        id: "de-p2m-q1",
        questionNumber: "1",
        text: "Wie und warum setzen Autoren Konflikte zwischen Individuum und Gesellschaft als literarisches Mittel ein?\n\nVergleichen Sie mindestens zwei Werke, die Sie im Unterricht behandelt haben, in Bezug auf die Darstellung dieses Konflikts. Achten Sie auf sprachliche, strukturelle und thematische Aspekte.",
        marks: 30,
        commandTerm: "Vergleichen",
        markscheme: [
          "Klare These, die den Konflikt Individuum vs. Gesellschaft in beiden Werken verbindet",
          "Analyse der Darstellungsmittel: Figurengestaltung, Erzählperspektive, Symbolik",
          "Textbelege aus mindestens zwei Werken",
          "Vergleichende Analyse: Gemeinsamkeiten und Unterschiede",
          "Berücksichtigung des historischen und kulturellen Kontexts",
          "Eigenständige Interpretation und persönliches Engagement",
          "Kohärente Argumentationsstruktur",
          "Korrekte Verwendung literarischer Fachbegriffe"
        ],
        type: "essay"
      }
    ]
  },

  // DEUTSCH A HL - Paper 1 (November 2022)
  {
    id: "de-p1-n22",
    subject: "deutsch",
    title: "Deutsch A HL — Paper 1: Textanalyse",
    year: "2022",
    session: "November",
    paper: "Paper 1",
    duration: 135,
    totalMarks: 40,
    questions: [
      {
        id: "de-n22-q1",
        questionNumber: "1",
        text: "Analysieren Sie den folgenden Auszug aus einer Rede zum Thema Umweltschutz.\n\n[Stimulus Text]\n\"Liebe Mitbürgerinnen und Mitbürger,\n\nwir stehen an einem Scheideweg. Hinter uns liegen Jahrzehnte des Wohlstands — aber auch Jahrzehnte der Ignoranz. Unsere Flüsse tragen mehr Plastik als Fische. Unsere Wälder schrumpfen schneller als unsere Versprechen wachsen.\n\nSie werden sagen: 'Das kostet zu viel.' Ich sage: Es kostet zu viel, nichts zu tun. Jeder Euro, den wir heute in erneuerbare Energien investieren, ist ein Euro, den unsere Enkel nicht für Katastrophenhilfe ausgeben müssen.\n\nDie Zukunft wartet nicht. Und sie verhandelt nicht.\"\n\nSchreiben Sie eine Textanalyse, in der Sie die Wirksamkeit der rhetorischen Strategien untersuchen.",
        marks: 20,
        commandTerm: "Analysieren",
        markscheme: [
          "Textart: politische Rede mit appellativer Funktion",
          "Antithese: 'Wohlstand' vs. 'Ignoranz', Kosten des Handelns vs. Kosten des Nicht-Handelns",
          "Bildhafte Sprache: 'Flüsse tragen mehr Plastik als Fische' — anschauliche Übertreibung",
          "Prolepse (vorweggenommener Einwand): 'Sie werden sagen...' — Entkräftung der Gegenposition",
          "Personifikation: 'Die Zukunft wartet nicht. Und sie verhandelt nicht.'",
          "Generationenargument: Appell an Verantwortung gegenüber den Enkeln",
          "Kurze, eindringliche Schlusssätze — erzeugen Dringlichkeit",
          "Analyse der Anrede und Einbeziehung des Publikums ('wir', 'Sie')"
        ],
        type: "essay"
      },
      {
        id: "de-n22-q2",
        questionNumber: "2",
        text: "Analysieren Sie den folgenden Textauszug aus einem zeitgenössischen Roman.\n\n[Stimulus]\n\"Er stand am Fenster und sah hinaus auf die Stadt, die er einmal seine Heimat genannt hatte. Aber Heimat — was bedeutete dieses Wort noch? Die Straßen trugen die gleichen Namen, die Häuser standen noch da, wo sie immer gestanden hatten. Und doch war alles fremd. Nicht die Stadt hatte sich verändert. Er hatte sich verändert. Und diese Erkenntnis war schwerer zu tragen als jede Reisetasche.\"\n\nUntersuchen Sie, wie der Autor das Thema Identität und Zugehörigkeit durch Sprache und Erzähltechnik darstellt.",
        marks: 20,
        commandTerm: "Analysieren",
        markscheme: [
          "Erzählperspektive: personaler Erzähler — Innensicht des Protagonisten",
          "Motiv des Fensters: Schwelle zwischen Innen und Außen, Beobachterposition",
          "Rhetorische Frage: 'was bedeutete dieses Wort noch?' — Infragestellung von Identität",
          "Paradoxon: vertraute Stadt ist fremd — Entfremdung trotz bekannter Umgebung",
          "Wendepunkt: 'Nicht die Stadt hatte sich verändert. Er hatte sich verändert.'",
          "Metapher der Reisetasche: konkretisiert abstrakte emotionale Last",
          "Thema Heimat und Zugehörigkeit im Kontext von Veränderung/Rückkehr",
          "Einfache, klare Sprache kontrastiert mit komplexem emotionalem Inhalt"
        ],
        type: "essay"
      }
    ]
  },

  // DEUTSCH A HL - Paper 1 (May 2022)
  {
    id: "de-p1-m22",
    subject: "deutsch",
    title: "Deutsch A HL — Paper 1: Textanalyse",
    year: "2022",
    session: "May",
    paper: "Paper 1",
    duration: 135,
    totalMarks: 40,
    questions: [
      {
        id: "de-m22-q1",
        questionNumber: "1",
        text: "Analysieren Sie die folgende Werbeanzeige.\n\n[Stimulus Text]\n\"WENIGER IST MEHR. MEHR ODER WENIGER.\"\n\nSie brauchen kein größeres Auto. Sie brauchen kein schnelleres Handy. Sie brauchen keine fünfte Jacke.\n\nWas Sie brauchen, ist Zeit. Zeit für die Menschen, die Ihnen wichtig sind. Zeit für die Dinge, die bleiben.\n\nUnsere nachhaltigen Produkte halten ein Leben lang. Weil weniger besitzen mehr leben bedeutet.\n\n— EINFACH GUT, seit 2015\n\nUntersuchen Sie, welche sprachlichen und visuellen Strategien eingesetzt werden, um die Zielgruppe zu überzeugen.",
        marks: 20,
        commandTerm: "Analysieren",
        markscheme: [
          "Textart: Werbeanzeige mit Nachhaltigkeits-Botschaft",
          "Wortspiel im Titel: 'Weniger ist mehr. Mehr oder weniger.' — spielerische Ambiguität",
          "Anapher: dreifache Wiederholung von 'Sie brauchen kein/keine' — rhythmische Verstärkung",
          "Antithese: materieller Besitz vs. immaterielle Werte (Zeit, Beziehungen)",
          "Direkte Anrede mit 'Sie' — höflich aber direkt, schafft Verbindung",
          "Neologismus/Slogan: 'weniger besitzen mehr leben' — verdichtete Botschaft",
          "Konsum-Kritik als Verkaufsstrategie — Paradoxon der 'nachhaltigen Werbung'",
          "Zielgruppenanalyse: umweltbewusste, gebildete Konsumenten"
        ],
        type: "essay"
      },
      {
        id: "de-m22-q2",
        questionNumber: "2",
        text: "Analysieren Sie das folgende Gedicht.\n\n\"Stadtrand\"\n\nZwischen Beton und Birke\nwächst ein schmaler Streifen Gras.\nKinder spielen Fußball\ngegen eine Wand, die Grenzen setzt\nund gleichzeitig Tor ist.\n\nEin alter Mann sitzt auf der Bank\nund zählt die Wolken.\nEr hat Zeit.\nEr hat sonst nichts.\n\nDie S-Bahn rattert vorbei,\nnimmt niemanden mit\naus dieser Gegend.\n\nSchreiben Sie eine Textanalyse.",
        marks: 20,
        commandTerm: "Analysieren",
        markscheme: [
          "Form: freie Verse, keine Reime — spiegelt die Ungebundenheit/Unordnung des Stadtrandlebens",
          "Kontrast 'Beton und Birke': Natur vs. Urbanisierung, koexistierend am Rand",
          "Doppeldeutigkeit der Wand: physische Grenze und Fußballtor — Beschränkung als Spielraum",
          "Enjambement: 'die Grenzen setzt / und gleichzeitig Tor ist' — formale Verstärkung des Inhalts",
          "Figur des alten Mannes: 'Er hat Zeit. Er hat sonst nichts.' — lakonische Tragik",
          "S-Bahn-Motiv: Verbindung zur Stadt existiert, aber 'nimmt niemanden mit' — Isolation",
          "Soziale Thematik: Marginalisierung, Armut, Abgehängtsein",
          "Knappe, nüchterne Sprache — Understatement verstärkt die emotionale Wirkung"
        ],
        type: "essay"
      }
    ]
  },

  // DESIGN TECHNOLOGY HL - Paper 2 (May 2023)
  {
    id: "dt-p2-m23",
    subject: "design-tech",
    title: "Design Technology HL — Paper 2: Design Project",
    year: "2023",
    session: "May",
    paper: "Paper 2",
    duration: 90,
    totalMarks: 50,
    questions: [
      {
        id: "dt-p2m-q1",
        questionNumber: "1a",
        text: "Define the term 'planned obsolescence'. Give one example.",
        marks: 3,
        commandTerm: "Define",
        markscheme: [
          "Deliberately designing a product with a limited useful life so that it will become obsolete after a certain period",
          "Example: smartphone batteries that cannot be replaced, fashion trends that change each season",
          "Purpose is to encourage consumers to purchase replacements"
        ],
        type: "short"
      },
      {
        id: "dt-p2m-q2",
        questionNumber: "1b",
        text: "Explain two ways in which designers can reduce the environmental impact of product packaging.",
        marks: 4,
        commandTerm: "Explain",
        markscheme: [
          "Use recycled or recyclable materials (e.g., cardboard instead of plastic)",
          "Minimize packaging — reduce material use, eliminate unnecessary layers",
          "Design for reuse — packaging that serves a second purpose",
          "Use biodegradable materials (e.g., mushroom packaging, cornstarch)",
          "2 marks per point: identification + explanation"
        ],
        type: "short"
      },
      {
        id: "dt-p2m-q3",
        questionNumber: "2",
        text: "A school wants to redesign its outdoor seating area to be more inclusive for students with disabilities.\n\n(a) Identify three user needs that should be considered. [3]\n(b) Describe how anthropometric data would be used in the design process. [4]\n(c) Evaluate the use of two different materials for the seating surfaces. [6]",
        marks: 13,
        commandTerm: "Evaluate",
        markscheme: [
          "(a) Wheelchair accessibility — appropriate heights and clearances",
          "Comfort for extended sitting — ergonomic support",
          "Weather resistance — shelter or material durability for outdoor use",
          "(b) Seat height based on popliteal height data (5th-95th percentile)",
          "Seat depth based on buttock-popliteal length",
          "Armrest height and table clearance for wheelchair users",
          "Data from relevant user group including wheelchair users",
          "(c) Material 1 evaluation (e.g., recycled plastic): durable, weather-resistant, but may lack aesthetic warmth",
          "Material 2 evaluation (e.g., treated hardwood): natural appearance, comfortable temperature, but requires maintenance",
          "Comparison of cost, maintenance, sustainability, user comfort",
          "Justified recommendation based on the specific context"
        ],
        type: "essay"
      },
      {
        id: "dt-p2m-q4",
        questionNumber: "3",
        text: "Discuss the role of Computer Aided Design (CAD) and Computer Aided Manufacturing (CAM) in modern product development.",
        marks: 8,
        commandTerm: "Discuss",
        markscheme: [
          "CAD allows rapid design iteration and modification",
          "3D visualization enables better communication with clients/stakeholders",
          "Simulation and testing before physical prototyping saves time and cost",
          "CAM enables precise manufacturing from digital files",
          "Integration: CAD to CAM workflow reduces errors and production time",
          "Rapid prototyping (3D printing) directly from CAD models",
          "Limitations: high initial cost, training required, technology dependency",
          "Environmental consideration: reduced material waste through precision"
        ],
        type: "essay"
      }
    ]
  },

  // DESIGN TECHNOLOGY HL - Paper 1 (November 2022)
  {
    id: "dt-p1-n22",
    subject: "design-tech",
    title: "Design Technology HL — Paper 1",
    year: "2022",
    session: "November",
    paper: "Paper 1",
    duration: 90,
    totalMarks: 40,
    questions: [
      {
        id: "dt-n22-q1",
        questionNumber: "1a",
        text: "State two properties of thermoplastics that make them suitable for food packaging.",
        marks: 2,
        commandTerm: "State",
        markscheme: [
          "Can be molded into different shapes when heated (formable/flexible)",
          "Lightweight, which reduces transport costs",
          "Can be made transparent for product visibility",
          "Can be recycled / remelted and reshaped"
        ],
        type: "short"
      },
      {
        id: "dt-n22-q2",
        questionNumber: "1b",
        text: "Compare injection moulding and blow moulding as manufacturing processes for plastic products.",
        marks: 6,
        commandTerm: "Compare",
        markscheme: [
          "Injection moulding: molten plastic injected into a mould under pressure",
          "Used for solid products (cases, components, toys)",
          "High initial tooling cost but low per-unit cost for high volumes",
          "Blow moulding: molten plastic tube inflated inside a mould",
          "Used for hollow products (bottles, containers, tanks)",
          "Both are suitable for mass production of thermoplastic products"
        ],
        type: "extended"
      },
      {
        id: "dt-n22-q3",
        questionNumber: "2",
        text: "With reference to a named classic design (product designed before 1990), discuss how the design reflects the social and technological context of its time.",
        marks: 12,
        commandTerm: "Discuss",
        markscheme: [
          "Named product clearly identified (e.g., Eames Lounge Chair, VW Beetle, Sony Walkman, Vespa)",
          "Description of key design features and materials used",
          "Social context: who was it designed for, what need did it address",
          "Technological context: what manufacturing processes/materials were available",
          "Cultural impact: how did it influence design or society",
          "Design movement connection (if applicable): Bauhaus, Art Deco, Modernism",
          "Legacy: has it influenced subsequent designs",
          "Critical evaluation: strengths and limitations of the design"
        ],
        type: "essay"
      },
      {
        id: "dt-n22-q4",
        questionNumber: "3",
        text: "Explain the concept of 'design for disassembly' and discuss its importance in sustainable product design.",
        marks: 8,
        commandTerm: "Explain",
        markscheme: [
          "Design for disassembly: products designed so they can be easily taken apart at end of life",
          "Uses snap-fits, screws (not adhesives/welding) for easy separation",
          "Materials are clearly labelled for sorting and recycling",
          "Reduces waste going to landfill",
          "Enables component reuse and material recovery",
          "Supports circular economy principles",
          "Examples: Fairphone, modular electronics",
          "Challenge: may increase manufacturing complexity or cost"
        ],
        type: "essay"
      }
    ]
  },

  // DESIGN TECHNOLOGY HL - Paper 2 (November 2022)
  {
    id: "dt-p2-n22",
    subject: "design-tech",
    title: "Design Technology HL — Paper 2",
    year: "2022",
    session: "November",
    paper: "Paper 2",
    duration: 90,
    totalMarks: 50,
    questions: [
      {
        id: "dt-p2n-q1",
        questionNumber: "1",
        text: "Define the term 'user-centered design' and explain why it is important.",
        marks: 4,
        commandTerm: "Define",
        markscheme: [
          "Design approach that focuses on the needs, wants, and limitations of end users",
          "Users are involved throughout the design process (research, testing, feedback)",
          "Results in products that are more intuitive, usable, and satisfying",
          "Reduces the risk of product failure by validating design decisions with real users"
        ],
        type: "short"
      },
      {
        id: "dt-p2n-q2",
        questionNumber: "2",
        text: "A company wants to design a reusable water bottle that appeals to environmentally conscious consumers aged 18-30.\n\n(a) Create a design specification with at least 5 criteria. [5]\n(b) Evaluate two possible materials for the bottle body. [6]\n(c) Describe one appropriate manufacturing process for the chosen material. [4]",
        marks: 15,
        commandTerm: "Evaluate",
        markscheme: [
          "(a) Specifications: food-safe material, holds 500-750ml, lightweight (<300g), BPA-free",
          "Leak-proof seal, fits in standard cup holders, aesthetically appealing to target market",
          "Durable for daily use, easy to clean, made from sustainable/recyclable material",
          "(b) Material 1 (stainless steel): durable, recyclable, keeps temperature, but heavier and more expensive",
          "Material 2 (Tritan plastic): lightweight, shatter-resistant, BPA-free, but not as sustainable",
          "Comparison on: cost, weight, durability, sustainability, aesthetic options",
          "(c) Stainless steel: deep drawing / hydroforming process described",
          "OR Plastic: injection moulding or blow moulding described",
          "Process steps, equipment needed, suitability for mass production"
        ],
        type: "essay"
      }
    ]
  }
];

export function getPapersBySubject(slug: string): PastPaper[] {
  return pastPapers.filter(p => p.subject === slug);
}

export interface TopicNote {
  topicId: string;
  keyConceptsTitle?: string;
  keyConcepts: string[];
  definitions?: { term: string; definition: string }[];
  examTip?: string;
}

// Notes keyed by topic ID from subjects.ts
export const topicNotes: Record<string, TopicNote> = {

  // ============================================================
  // BIOLOGY SL — Theme A: Unity and Diversity
  // ============================================================

  "bio-A1.1": {
    topicId: "bio-A1.1",
    keyConcepts: [
      "Water is a **polar molecule** — oxygen is more electronegative than hydrogen, creating partial charges (δ⁺ on H, δ⁻ on O).",
      "**Hydrogen bonds** form between the δ⁺ of one water molecule and the δ⁻ of another. These are weak individually but strong collectively.",
      "**Cohesion**: water molecules stick together (surface tension). Important for transport in xylem.",
      "**Adhesion**: water molecules stick to other polar surfaces (capillary action in plants).",
      "**High specific heat capacity**: water resists temperature changes → stabilizes aquatic environments and body temp.",
      "**High latent heat of vaporization**: evaporative cooling (sweating, transpiration) is very effective.",
      "**Solvent properties**: polar and ionic substances dissolve in water (hydrophilic). Non-polar substances don't (hydrophobic).",
      "**Ice is less dense than liquid water**: hydrogen bonds form an open lattice in ice → ice floats → insulates water below, allowing aquatic life to survive winter.",
    ],
    definitions: [
      { term: "Polar molecule", definition: "A molecule with an uneven distribution of electrical charge, resulting in partial positive and negative regions." },
      { term: "Hydrogen bond", definition: "A weak attraction between a δ⁺ hydrogen atom and a δ⁻ electronegative atom (O, N) on a nearby molecule." },
      { term: "Hydrophilic", definition: "Water-loving — substances that dissolve in or are attracted to water (polar/ionic)." },
      { term: "Hydrophobic", definition: "Water-fearing — substances that do not dissolve in water (non-polar, e.g., lipids)." },
    ],
    examTip: "When asked about water's properties, always link the property to its biological significance. E.g., 'high specific heat capacity → stable aquatic habitats'.",
  },

  "bio-A1.2": {
    topicId: "bio-A1.2",
    keyConcepts: [
      "Nucleotides are the monomers of nucleic acids. Each has: a **pentose sugar**, a **phosphate group**, and a **nitrogenous base**.",
      "**DNA**: deoxyribose sugar, bases A-T-G-C, double-stranded helix, stores genetic information.",
      "**RNA**: ribose sugar, bases A-U-G-C, single-stranded, involved in protein synthesis (mRNA, tRNA, rRNA).",
      "**Complementary base pairing**: Adenine–Thymine (2 H-bonds), Guanine–Cytosine (3 H-bonds). In RNA: A pairs with U.",
      "The two DNA strands run **antiparallel** (5'→3' and 3'→5').",
      "The sugar-phosphate backbone is held by strong **covalent (phosphodiester) bonds**. The strands are held together by **hydrogen bonds** between bases.",
      "DNA's double helix structure provides stability and allows accurate replication.",
    ],
    definitions: [
      { term: "Nucleotide", definition: "Monomer of nucleic acids: pentose sugar + phosphate group + nitrogenous base." },
      { term: "Complementary base pairing", definition: "A pairs with T (or U in RNA), G pairs with C — ensuring accurate DNA replication and transcription." },
      { term: "Antiparallel", definition: "The two DNA strands run in opposite directions (5'→3' and 3'→5')." },
    ],
    examTip: "Know the differences between DNA and RNA (sugar, bases, strands, function) — this is a very common exam question.",
  },

  "bio-A2.2": {
    topicId: "bio-A2.2",
    keyConcepts: [
      "**Prokaryotic cells** (bacteria): no nucleus, no membrane-bound organelles, circular DNA (+ plasmids), 70S ribosomes, cell wall (peptidoglycan), small (1-10 μm).",
      "**Eukaryotic cells**: membrane-bound nucleus, linear DNA on chromosomes, 80S ribosomes, membrane-bound organelles, larger (10-100 μm).",
      "Key organelles: **Nucleus** (DNA, gene expression), **Mitochondria** (aerobic respiration/ATP), **Rough ER** (protein synthesis), **Smooth ER** (lipid synthesis), **Golgi apparatus** (modify/package proteins), **Ribosomes** (translation).",
      "**Plant cells** additionally have: cellulose cell wall, chloroplasts (photosynthesis), large central vacuole (turgor), plasmodesmata.",
      "**Electron microscopes** reveal ultrastructure (organelles). **Light microscopes** show cells and some organelles at lower magnification.",
      "Magnification = image size / actual size. Resolution = ability to distinguish two close points.",
    ],
    definitions: [
      { term: "Prokaryote", definition: "Organism whose cells lack a membrane-bound nucleus (e.g., bacteria, archaea)." },
      { term: "Eukaryote", definition: "Organism whose cells have a membrane-bound nucleus and organelles (e.g., animals, plants, fungi)." },
      { term: "Organelle", definition: "A specialized structure within a cell that performs a specific function." },
    ],
    examTip: "Be able to draw and label both prokaryotic and eukaryotic cells. Know at least 5 differences between them.",
  },

  "bio-A3.1": {
    topicId: "bio-A3.1",
    keyConcepts: [
      "A **species** is a group of organisms that can interbreed and produce fertile offspring.",
      "**Binomial nomenclature**: two-part Latin name — Genus (capitalized) + species (lowercase), both italicized. E.g., *Homo sapiens*.",
      "**Biodiversity** exists at three levels: genetic (within species), species (between species), ecosystem (between ecosystems).",
      "A **karyotype** displays all chromosomes arranged in homologous pairs. Used to detect abnormalities (e.g., trisomy 21 = Down syndrome).",
      "Humans have **46 chromosomes** (23 pairs): 22 autosomal pairs + 1 sex chromosome pair (XX or XY).",
      "The **genome** is the entire genetic information of an organism. The **Human Genome Project** mapped all human genes.",
    ],
    definitions: [
      { term: "Species", definition: "A group of organisms that can interbreed naturally and produce fertile offspring." },
      { term: "Karyotype", definition: "An organized display of all chromosomes in a cell, arranged by size and centromere position." },
      { term: "Genome", definition: "The complete set of genetic information (all DNA) in an organism." },
    ],
    examTip: "Always write binomial names correctly — Genus capitalized, species lowercase, both italicized (or underlined if handwritten).",
  },

  "bio-A4.1": {
    topicId: "bio-A4.1",
    keyConcepts: [
      "**Evidence for evolution**: fossil record (shows change over time), homologous structures (shared ancestry), DNA/molecular evidence (similar sequences = closer relation), biogeography, observed natural selection.",
      "**Natural selection**: variation exists → overproduction of offspring → competition → those with advantageous traits survive and reproduce → allele frequencies change over time.",
      "**Mutations** are the ultimate source of new genetic variation.",
      "**Speciation**: formation of new species. Requires **reproductive isolation** (populations can no longer interbreed).",
      "**Allopatric speciation**: geographic barrier separates populations → independent evolution → reproductive isolation.",
      "**Genetic drift**: random changes in allele frequency, especially in small populations (founder effect, bottleneck effect).",
    ],
    definitions: [
      { term: "Natural selection", definition: "Process where organisms with heritable traits better suited to the environment survive and reproduce more." },
      { term: "Speciation", definition: "The formation of new, distinct species through evolution." },
      { term: "Homologous structures", definition: "Anatomical features with similar structure but potentially different functions, indicating common ancestry." },
    ],
    examTip: "For natural selection questions, always mention: variation, selection pressure, differential reproduction, and inheritance of advantageous alleles.",
  },

  "bio-A4.2": {
    topicId: "bio-A4.2",
    keyConcepts: [
      "Biodiversity is being lost at an unprecedented rate, primarily due to **human activities**.",
      "Main threats: **habitat destruction** (deforestation, urbanization), **pollution**, **overexploitation** (overfishing, poaching), **invasive species**, **climate change**.",
      "**Conservation strategies**: protected areas (national parks), captive breeding programs, seed banks, legislation (CITES), habitat restoration, ecotourism.",
      "**In situ conservation**: protecting species in their natural habitat. **Ex situ conservation**: protecting species outside their habitat (zoos, seed banks).",
      "Biodiversity has intrinsic value and provides **ecosystem services**: pollination, water purification, carbon sequestration, food, medicine.",
    ],
    definitions: [
      { term: "Biodiversity", definition: "The variety of life at all levels — genetic, species, and ecosystem diversity." },
      { term: "In situ conservation", definition: "Protecting species within their natural habitat (e.g., nature reserves)." },
      { term: "Ex situ conservation", definition: "Protecting species outside their natural habitat (e.g., zoos, botanical gardens, seed banks)." },
    ],
    examTip: "Be ready to discuss both sides — conservation vs economic development. IB values balanced arguments.",
  },

  // ============================================================
  // BIOLOGY SL — Theme B: Form and Function
  // ============================================================

  "bio-B1.1": {
    topicId: "bio-B1.1",
    keyConcepts: [
      "**Monosaccharides** (glucose, fructose, galactose): simple sugars, quick energy. Glucose = C₆H₁₂O₆.",
      "**Disaccharides** form by condensation: maltose (glucose+glucose), sucrose (glucose+fructose), lactose (glucose+galactose). Broken by hydrolysis.",
      "**Polysaccharides**: starch (energy storage in plants, amylose + amylopectin), glycogen (energy storage in animals, highly branched), cellulose (structural in plant cell walls, β-glucose, straight chains with H-bonds).",
      "**Lipids**: triglycerides = glycerol + 3 fatty acids (via ester bonds/condensation). Functions: energy storage (2× more than carbs), insulation, protection.",
      "**Saturated fatty acids**: no C=C double bonds, straight, solid at room temp (animal fats). **Unsaturated**: 1+ C=C bonds, kinked, liquid (oils).",
      "**Phospholipids**: glycerol + 2 fatty acids + phosphate. Amphipathic → form cell membrane bilayer.",
    ],
    definitions: [
      { term: "Condensation reaction", definition: "Joins two monomers by removing a water molecule, forming a covalent bond." },
      { term: "Hydrolysis", definition: "Breaks a polymer by adding water, releasing monomers." },
      { term: "Triglyceride", definition: "A lipid consisting of glycerol bonded to three fatty acid chains." },
    ],
    examTip: "Know the structural differences between starch, glycogen, and cellulose — and how structure relates to function.",
  },

  "bio-B1.2": {
    topicId: "bio-B1.2",
    keyConcepts: [
      "Proteins are polymers of **amino acids** joined by **peptide bonds** (condensation reaction).",
      "20 different amino acids, each with a unique **R-group** that determines properties.",
      "**Primary structure**: amino acid sequence. **Secondary**: α-helix and β-pleated sheet (H-bonds). **Tertiary**: 3D folding (R-group interactions: H-bonds, ionic, disulfide, hydrophobic). **Quaternary**: 2+ polypeptide chains (e.g., hemoglobin).",
      "**Protein functions**: enzymes (catalysts), hormones (signaling), structural (collagen, keratin), transport (hemoglobin), antibodies (defense), receptors.",
      "**Denaturation**: loss of 3D shape due to heat or extreme pH breaking H-bonds and ionic bonds. Active site changes → protein loses function.",
    ],
    definitions: [
      { term: "Peptide bond", definition: "Covalent bond between the amino group of one amino acid and the carboxyl group of another." },
      { term: "Denaturation", definition: "Irreversible loss of a protein's 3D structure and function due to heat or pH extremes." },
    ],
    examTip: "When discussing protein structure, always specify WHICH level of structure you mean and WHICH bonds maintain it.",
  },

  "bio-B2.1": {
    topicId: "bio-B2.1",
    keyConcepts: [
      "**Fluid mosaic model**: phospholipid bilayer with embedded proteins (integral/peripheral), cholesterol, and glycoproteins.",
      "**Fluid**: phospholipids and some proteins move laterally. **Mosaic**: diverse pattern of proteins.",
      "**Simple diffusion**: small, non-polar molecules (O₂, CO₂) move down concentration gradient through the bilayer. No energy needed.",
      "**Facilitated diffusion**: large or polar molecules (glucose, ions) move down gradient through channel or carrier proteins. No energy.",
      "**Osmosis**: net movement of water from lower solute to higher solute concentration through a selectively permeable membrane. Passive.",
      "**Active transport**: molecules move against concentration gradient (low → high) using carrier proteins and **ATP energy**.",
      "**Endocytosis**: cell membrane engulfs substances (phagocytosis = solids, pinocytosis = liquids). **Exocytosis**: vesicles fuse with membrane to release contents.",
    ],
    definitions: [
      { term: "Fluid mosaic model", definition: "Model of membrane structure: a fluid phospholipid bilayer with a mosaic of embedded proteins." },
      { term: "Active transport", definition: "Movement of substances against their concentration gradient, requiring ATP and carrier proteins." },
    ],
    examTip: "For transport questions, always state: direction (with/against gradient), energy requirement, and protein involvement.",
  },

  "bio-B2.2": {
    topicId: "bio-B2.2",
    keyConcepts: [
      "**Compartmentalization** allows eukaryotic cells to maintain different chemical environments for different reactions.",
      "**Nucleus**: contains DNA, site of transcription, surrounded by nuclear envelope with pores.",
      "**Mitochondria**: double membrane, inner membrane folded into cristae (increases SA for ATP production). Site of aerobic respiration.",
      "**Chloroplasts**: double membrane, internal thylakoid membranes (stacked into grana). Site of photosynthesis.",
      "**Rough ER**: studded with ribosomes, synthesizes and transports proteins. **Smooth ER**: no ribosomes, synthesizes lipids.",
      "**Golgi apparatus**: modifies, packages, and sorts proteins into vesicles for transport or secretion.",
      "**Ribosomes**: site of translation (protein synthesis). 80S in eukaryotes, 70S in prokaryotes.",
    ],
    definitions: [
      { term: "Compartmentalization", definition: "Separation of cellular processes into membrane-bound organelles, allowing optimal conditions for each." },
    ],
    examTip: "Link structure to function — e.g., cristae increase surface area for oxidative phosphorylation in mitochondria.",
  },

  "bio-B2.3": {
    topicId: "bio-B2.3",
    keyConcepts: [
      "**Cell differentiation**: process by which unspecialized cells become specialized for specific functions.",
      "**Stem cells**: undifferentiated cells that can divide and differentiate into specialized cell types.",
      "All cells contain the same DNA, but different genes are expressed in different cell types.",
      "**Surface area to volume ratio** (SA:V): as cells grow, volume increases faster than SA → exchange becomes insufficient → limits cell size.",
      "Small cells have a higher SA:V ratio, meaning more efficient exchange of materials per unit volume.",
      "This is why large organisms are **multicellular** rather than having fewer, larger cells.",
    ],
    definitions: [
      { term: "Differentiation", definition: "The process by which a cell becomes specialized for a particular function by expressing specific genes." },
      { term: "Stem cell", definition: "An undifferentiated cell capable of self-renewal and differentiation into specialized cell types." },
    ],
    examTip: "Be able to calculate SA:V ratios for cubes and explain why this limits cell size.",
  },

  "bio-B3.1": {
    topicId: "bio-B3.1",
    keyConcepts: [
      "Gas exchange surfaces share features: **large surface area**, **thin** (short diffusion distance), **moist**, **good blood supply** (maintains concentration gradient), **ventilation** (maintains gradient).",
      "**Alveoli** (lungs): one cell thick, surrounded by capillaries, ~300 million per lung for huge SA.",
      "**Fish gills**: filaments with lamellae, **countercurrent flow** (blood flows opposite to water) for maximum O₂ extraction.",
      "**Plant leaves**: stomata allow CO₂ in and O₂ out. Guard cells control stomatal opening.",
      "**Transpiration**: water loss from leaves through stomata. Driven by evaporation. Creates a transpiration pull in xylem.",
    ],
    definitions: [
      { term: "Ventilation", definition: "The mechanical process of moving air or water over a gas exchange surface to maintain concentration gradients." },
      { term: "Transpiration", definition: "The loss of water vapor from plant leaves through stomata." },
    ],
    examTip: "Always link structural features of gas exchange surfaces to Fick's Law: Rate ∝ (SA × concentration difference) / thickness.",
  },

  "bio-B3.2": {
    topicId: "bio-B3.2",
    keyConcepts: [
      "**Arteries**: thick muscular walls, small lumen, elastic fibres, carry blood away from heart at high pressure. No valves (except aortic/pulmonary).",
      "**Veins**: thinner walls, larger lumen, valves to prevent backflow, carry blood to heart at low pressure.",
      "**Capillaries**: one cell thick wall, tiny lumen, allow exchange of materials between blood and tissues.",
      "**Heart structure**: 4 chambers (2 atria, 2 ventricles). Left ventricle has thickest wall (pumps to whole body). Septum separates left and right.",
      "**Cardiac cycle**: Atrial systole → Ventricular systole → Diastole. SA node (pacemaker) initiates the heartbeat.",
      "**Double circulation**: pulmonary circuit (heart → lungs → heart) and systemic circuit (heart → body → heart). Maintains high blood pressure.",
      "**Coronary arteries** supply the heart muscle itself with oxygen and nutrients.",
    ],
    definitions: [
      { term: "Cardiac cycle", definition: "The sequence of contraction (systole) and relaxation (diastole) of heart chambers in one heartbeat." },
      { term: "Double circulation", definition: "Blood passes through the heart twice per complete circuit — once for lungs, once for body." },
    ],
    examTip: "Be able to draw and label the heart. Remember: left side = oxygenated blood (except pulmonary artery).",
  },

  "bio-B4.1": {
    topicId: "bio-B4.1",
    keyConcepts: [
      "Every species is adapted to its habitat through **structural, behavioral, and physiological adaptations**.",
      "**Structural**: physical features (thick fur, long roots). **Behavioral**: actions (migration, nocturnal activity). **Physiological**: internal processes (antifreeze proteins, venom production).",
      "Global distribution of species is influenced by **climate, altitude, ocean currents, continental drift**.",
      "**Biomes**: large ecological areas with characteristic climate and organisms (tropical rainforest, desert, tundra, taiga, temperate forest, grassland).",
      "**Coral reefs**: high biodiversity, warm shallow waters, mutualism between coral polyps and zooxanthellae (algae). Threatened by bleaching (high temperatures).",
    ],
    definitions: [
      { term: "Adaptation", definition: "An inherited characteristic that increases an organism's fitness in its environment." },
      { term: "Biome", definition: "A large geographic region defined by its climate, soil, and characteristic plant and animal communities." },
    ],
    examTip: "When describing adaptations, always explain HOW the feature helps survival/reproduction in that specific environment.",
  },

  "bio-B4.2": {
    topicId: "bio-B4.2",
    keyConcepts: [
      "**Fundamental niche**: full range of conditions a species could theoretically occupy. **Realized niche**: actual conditions occupied (limited by competition).",
      "**Autotrophs**: make their own food (producers). Photoautotrophs use light, chemoautotrophs use chemicals.",
      "**Heterotrophs**: consume other organisms. Types: herbivores, carnivores, omnivores, detritivores.",
      "**Saprotrophs** (decomposers): break down dead organic matter externally, absorb nutrients. Essential for nutrient recycling.",
      "**Mixotrophs**: organisms that can both photosynthesize and consume food (e.g., some protists like Euglena).",
    ],
    definitions: [
      { term: "Niche", definition: "The role and position of a species in its ecosystem — including its habitat, diet, interactions, and activity patterns." },
      { term: "Autotroph", definition: "An organism that produces its own organic molecules from inorganic substances using energy." },
      { term: "Detritivore", definition: "An organism that feeds on dead organic matter (detritus), e.g., earthworms." },
    ],
    examTip: "Distinguish fundamental from realized niche — competition is the key factor that narrows the niche.",
  },

  // ============================================================
  // BIOLOGY SL — Theme C: Interaction and Interdependence
  // ============================================================

  "bio-C1.1": {
    topicId: "bio-C1.1",
    keyConcepts: [
      "**Metabolism** = all chemical reactions in an organism. **Anabolic** reactions build complex molecules (require energy). **Catabolic** reactions break down molecules (release energy).",
      "**Enzymes**: biological catalysts (mostly proteins) that lower **activation energy** and speed up reactions without being consumed.",
      "**Active site**: specific region where substrate binds. **Induced fit model**: active site changes shape slightly on binding for a tighter fit.",
      "**Substrate specificity**: each enzyme catalyzes one specific reaction (lock-and-key concept).",
      "**Factors affecting enzyme activity**: Temperature (increases rate to optimum, then denatures), pH (each enzyme has optimal pH), Substrate concentration (rate increases until all active sites saturated = Vmax).",
      "**Denaturation**: extreme temperature or pH breaks bonds maintaining 3D structure → active site changes shape → enzyme no longer functions.",
    ],
    definitions: [
      { term: "Activation energy", definition: "The minimum energy required for a chemical reaction to occur. Enzymes lower this." },
      { term: "Enzyme-substrate complex", definition: "The temporary structure formed when a substrate binds to an enzyme's active site." },
      { term: "Vmax", definition: "Maximum rate of reaction when all enzyme active sites are saturated with substrate." },
    ],
    examTip: "Sketch and label rate-vs-temperature and rate-vs-substrate-concentration graphs. Explain the shape at each stage.",
  },

  "bio-C1.2": {
    topicId: "bio-C1.2",
    keyConcepts: [
      "**Cell respiration**: controlled release of energy from organic molecules to produce **ATP** (adenosine triphosphate).",
      "**ATP** = universal energy currency. Energy released by hydrolysis: ATP → ADP + Pi.",
      "**Aerobic respiration**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36-38 ATP. Requires oxygen. Much more efficient.",
      "**Anaerobic respiration** (no oxygen): **Lactic acid fermentation** (animals): pyruvate → lactate. 2 ATP only. Reversible. **Alcoholic fermentation** (yeast): pyruvate → ethanol + CO₂. 2 ATP. Irreversible.",
      "All respiration begins with **glycolysis** (cytoplasm): glucose → 2 pyruvate + 2 ATP. No oxygen needed.",
      "Aerobic respiration continues in **mitochondria**: Krebs cycle (matrix) and oxidative phosphorylation (inner membrane/cristae).",
    ],
    definitions: [
      { term: "ATP", definition: "Adenosine triphosphate — the cell's energy currency, providing immediate energy for cellular processes." },
      { term: "Aerobic respiration", definition: "Cellular respiration using oxygen, producing CO₂, water, and ~36-38 ATP per glucose." },
      { term: "Anaerobic respiration", definition: "Cellular respiration without oxygen, producing either lactate or ethanol + CO₂, and only 2 ATP." },
    ],
    examTip: "Know both equations by heart. Compare aerobic vs anaerobic: efficiency (ATP yield), location, products, oxygen requirement.",
  },

  "bio-C1.3": {
    topicId: "bio-C1.3",
    keyConcepts: [
      "**Photosynthesis equation**: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (requires light energy).",
      "Occurs in **chloroplasts**: light-dependent reactions in **thylakoid membranes**, light-independent reactions in **stroma**.",
      "**Chlorophyll** and accessory pigments absorb light (mainly blue and red wavelengths, reflect green).",
      "**Light-dependent reactions**: water is split (photolysis), O₂ released, ATP and NADPH produced.",
      "**Limiting factors**: light intensity, CO₂ concentration, temperature. The factor in shortest supply limits the overall rate.",
      "At **light saturation**, increasing light intensity no longer increases rate — another factor becomes limiting.",
    ],
    definitions: [
      { term: "Photolysis", definition: "The splitting of water molecules using light energy: 2H₂O → 4H⁺ + 4e⁻ + O₂." },
      { term: "Limiting factor", definition: "The factor in shortest supply that restricts the rate of a process (photosynthesis)." },
    ],
    examTip: "Be able to interpret graphs of rate vs light intensity/CO₂/temperature and identify plateaus caused by limiting factors.",
  },

  "bio-C2.2": {
    topicId: "bio-C2.2",
    keyConcepts: [
      "**Neuron structure**: cell body (soma), dendrites (receive signals), axon (transmits impulse), myelin sheath (insulation), nodes of Ranvier, synaptic terminals.",
      "**Resting potential** (~-70mV): inside of neuron is negative relative to outside. Maintained by Na⁺/K⁺ pump (3 Na⁺ out, 2 K⁺ in).",
      "**Action potential**: stimulus depolarizes membrane → Na⁺ channels open → Na⁺ rushes in → membrane depolarizes to +30mV → Na⁺ channels close, K⁺ channels open → repolarization → resting potential restored.",
      "**Saltatory conduction**: in myelinated neurons, impulse jumps between nodes of Ranvier → much faster transmission.",
      "**Synaptic transmission**: action potential arrives → Ca²⁺ enters terminal → vesicles fuse with membrane → neurotransmitter released into cleft → binds receptors on postsynaptic membrane → signal transmitted or inhibited.",
      "Neurotransmitters are removed by enzymes or reuptake to stop the signal.",
    ],
    definitions: [
      { term: "Action potential", definition: "A rapid reversal of membrane polarity that propagates along a neuron as a nerve impulse." },
      { term: "Synapse", definition: "The junction between two neurons where signals are transmitted chemically via neurotransmitters." },
      { term: "Neurotransmitter", definition: "Chemical messenger released at a synapse that transmits a signal to the next cell (e.g., acetylcholine, dopamine)." },
    ],
    examTip: "Know the sequence of synaptic transmission step by step — it's a common extended-response question.",
  },

  "bio-C3.1": {
    topicId: "bio-C3.1",
    keyConcepts: [
      "Organization hierarchy: **cells → tissues → organs → organ systems → organism**.",
      "**Nervous system**: rapid, short-lived, electrical signals. Central nervous system (brain + spinal cord) and peripheral nervous system.",
      "**Endocrine system**: slower, longer-lasting, chemical signals (hormones) transported in blood.",
      "The **brain** is the central coordinator: cerebrum (conscious thought, memory), cerebellum (balance, coordination), medulla oblongata (involuntary functions: heart rate, breathing).",
      "Nervous and endocrine systems work together to maintain **homeostasis** and respond to changes.",
    ],
    definitions: [
      { term: "Hormone", definition: "A chemical messenger produced by endocrine glands, transported in blood, acting on target cells." },
      { term: "Homeostasis", definition: "The maintenance of a stable internal environment despite external changes." },
    ],
    examTip: "Compare nervous and endocrine systems: speed, duration, specificity, transmission method.",
  },

  "bio-C3.2": {
    topicId: "bio-C3.2",
    keyConcepts: [
      "**Pathogens**: disease-causing organisms — bacteria, viruses, fungi, parasites, prions.",
      "**Non-specific defences (innate immunity)**: skin (physical barrier), mucous membranes, stomach acid, lysozyme in tears, phagocytes (engulf pathogens).",
      "**Specific immunity (adaptive)**: **B-lymphocytes** → plasma cells that produce **antibodies** (humoral). **T-lymphocytes** → destroy infected cells directly (cell-mediated).",
      "**Antibodies**: Y-shaped proteins that bind specifically to antigens. Functions: neutralization, agglutination, marking for phagocytosis.",
      "**Memory cells**: long-lived B and T cells that provide faster, stronger response on re-exposure (basis of immunity).",
      "**Vaccination**: introduces weakened/dead pathogen or antigens → immune response without disease → memory cells formed.",
      "**Antibiotics** kill bacteria or inhibit growth (target cell wall, ribosomes). Do NOT work on viruses. Overuse → antibiotic resistance via natural selection.",
    ],
    definitions: [
      { term: "Antigen", definition: "A molecule (usually protein) on a pathogen's surface that triggers an immune response." },
      { term: "Antibody", definition: "A Y-shaped protein produced by B-cells that binds specifically to an antigen." },
      { term: "Antibiotic resistance", definition: "When bacteria evolve to survive antibiotic exposure, selected by overuse/misuse of antibiotics." },
    ],
    examTip: "Explain vaccination as: antigen exposure → primary immune response → memory cell formation → rapid secondary response on re-infection.",
  },

  "bio-C4.1": {
    topicId: "bio-C4.1",
    keyConcepts: [
      "**Population**: group of organisms of the same species in the same area at the same time.",
      "Population growth follows an **S-curve**: lag phase → exponential growth → slowing growth → carrying capacity (K).",
      "**Density-dependent** limiting factors: competition, predation, disease, parasitism (increase with population size).",
      "**Density-independent** factors: natural disasters, climate, fire (affect population regardless of size).",
      "**Interspecific relationships**: competition (−/−), predation (+/−), mutualism (+/+), parasitism (+/−), commensalism (+/0).",
      "**Predator-prey cycles**: prey increases → predators increase → prey decreases → predators decrease → cycle repeats.",
    ],
    definitions: [
      { term: "Carrying capacity (K)", definition: "The maximum population size an environment can sustain indefinitely with available resources." },
      { term: "Mutualism", definition: "A symbiotic relationship where both species benefit (e.g., clownfish and anemone)." },
    ],
    examTip: "Be able to interpret population growth curves and identify lag, exponential, and plateau phases.",
  },

  "bio-C4.2": {
    topicId: "bio-C4.2",
    keyConcepts: [
      "**Producers** (autotrophs) convert solar energy to chemical energy via photosynthesis — the base of every food chain.",
      "**Food chains** show a single energy pathway. **Food webs** show interconnected food chains.",
      "**Trophic levels**: producer → primary consumer → secondary consumer → tertiary consumer.",
      "Only ~**10% of energy** transfers between trophic levels. ~90% is lost as heat (respiration), undigested material, excretion.",
      "This energy loss limits food chains to typically **4-5 trophic levels**.",
      "**Carbon cycle**: CO₂ in atmosphere → photosynthesis → organic compounds → respiration/decomposition/combustion → CO₂ returned. Fossil fuels = long-term carbon store.",
    ],
    definitions: [
      { term: "Trophic level", definition: "The position an organism occupies in a food chain (producer = level 1, primary consumer = level 2, etc.)." },
      { term: "Food web", definition: "A network of interconnected food chains showing multiple feeding relationships in an ecosystem." },
    ],
    examTip: "Calculate energy transfers: if producers have 10,000 kJ, primary consumers get ~1,000 kJ, secondary ~100 kJ, etc.",
  },

  // ============================================================
  // BIOLOGY SL — Theme D: Continuity and Change
  // ============================================================

  "bio-D1.1": {
    topicId: "bio-D1.1",
    keyConcepts: [
      "**Semi-conservative replication**: each new DNA molecule has one original strand and one new strand.",
      "Process: **Helicase** unwinds/separates strands → **DNA polymerase** adds complementary nucleotides (5'→3') → **Ligase** joins Okazaki fragments on lagging strand.",
      "**PCR (Polymerase Chain Reaction)**: amplifies DNA in vitro. Cycles: Denaturation (95°C, strands separate) → Annealing (55°C, primers bind) → Extension (72°C, Taq polymerase copies). Each cycle doubles the DNA.",
      "**Gel electrophoresis**: separates DNA fragments by size. DNA is negative → moves toward positive electrode. Smaller fragments travel further.",
      "**DNA profiling**: using gel electrophoresis patterns of non-coding DNA (STRs) to identify individuals. Used in forensics and paternity testing.",
    ],
    definitions: [
      { term: "Semi-conservative replication", definition: "Each new DNA double helix has one parent strand and one newly synthesized strand." },
      { term: "PCR", definition: "A technique to amplify small quantities of DNA using cycles of heating and cooling with Taq polymerase." },
    ],
    examTip: "Know the three PCR steps, temperatures, and what happens at each stage — very commonly tested.",
  },

  "bio-D1.2": {
    topicId: "bio-D1.2",
    keyConcepts: [
      "**Transcription** (nucleus): RNA polymerase reads DNA template strand (3'→5') and builds mRNA (5'→3'). mRNA exits through nuclear pores.",
      "**Translation** (ribosome): mRNA codons read → tRNA with matching anticodon delivers amino acid → peptide bond forms → polypeptide chain grows → stops at stop codon (UAA, UAG, UGA).",
      "**Genetic code**: triplet (3 bases = 1 codon), degenerate (multiple codons per amino acid), universal (same in nearly all organisms), non-overlapping.",
      "**Start codon**: AUG (methionine). **Stop codons**: UAA, UAG, UGA.",
      "64 possible codons code for 20 amino acids + 3 stop signals.",
    ],
    definitions: [
      { term: "Transcription", definition: "Synthesis of mRNA from a DNA template in the nucleus." },
      { term: "Translation", definition: "Synthesis of a polypeptide on a ribosome using the mRNA sequence." },
      { term: "Codon", definition: "A triplet of three mRNA bases that codes for one amino acid or a stop signal." },
    ],
    examTip: "Practice converting DNA → mRNA → amino acid using a codon table. Remember: DNA template strand is read 3'→5'.",
  },

  "bio-D1.3": {
    topicId: "bio-D1.3",
    keyConcepts: [
      "**Gene mutation**: a change in the nucleotide sequence of DNA.",
      "**Base substitution**: one base replaced by another. Can be: **silent** (same amino acid due to degeneracy), **missense** (different amino acid), **nonsense** (premature stop codon).",
      "**Insertion**: extra base added. **Deletion**: base removed. Both cause **frameshift** — all downstream codons change, usually producing non-functional protein.",
      "**Mutagens**: agents that increase mutation rate — radiation (UV, X-rays), chemicals (benzene, tar), biological (some viruses).",
      "Mutations are the **source of genetic variation** — they can be harmful, beneficial, or neutral depending on the effect and environment.",
      "**Sickle cell anemia**: caused by a single base substitution in the hemoglobin gene (GAG → GTG, Glu → Val).",
    ],
    definitions: [
      { term: "Mutation", definition: "A change in the base sequence of DNA that may alter the protein produced." },
      { term: "Frameshift mutation", definition: "An insertion or deletion that shifts the reading frame, changing all subsequent codons." },
      { term: "Mutagen", definition: "A physical, chemical, or biological agent that increases the rate of mutation." },
    ],
    examTip: "Sickle cell is a classic example — know the specific mutation and how it affects protein structure and function.",
  },

  "bio-D2.1": {
    topicId: "bio-D2.1",
    keyConcepts: [
      "**Mitosis**: one division → 2 genetically identical diploid cells. For growth, repair, asexual reproduction.",
      "Stages: **Interphase** (DNA replicates) → **Prophase** (chromosomes condense, nuclear envelope breaks) → **Metaphase** (chromosomes align at equator) → **Anaphase** (sister chromatids pulled apart) → **Telophase** (nuclear envelopes reform) → **Cytokinesis** (cell divides).",
      "**Meiosis**: two divisions → 4 genetically different haploid cells (gametes). For sexual reproduction.",
      "**Meiosis I**: homologous pairs separate. **Meiosis II**: sister chromatids separate (like mitosis).",
      "**Sources of genetic variation in meiosis**: **Crossing over** (prophase I — exchange of segments between homologous chromosomes at chiasmata), **Independent assortment** (metaphase I — random orientation of bivalents), **Random fertilization**.",
    ],
    definitions: [
      { term: "Mitosis", definition: "Nuclear division producing 2 genetically identical diploid daughter cells." },
      { term: "Meiosis", definition: "Two nuclear divisions producing 4 genetically different haploid daughter cells (gametes)." },
      { term: "Crossing over", definition: "Exchange of genetic material between homologous chromosomes during prophase I of meiosis." },
    ],
    examTip: "Be able to compare mitosis and meiosis in a table: number of divisions, daughter cells, ploidy, genetic variation, purpose.",
  },

  "bio-D2.3": {
    topicId: "bio-D2.3",
    keyConcepts: [
      "**Water potential**: the tendency of water to move from one area to another. Water moves from higher to lower water potential.",
      "In a **hypotonic solution** (low solute): water enters cell → animal cell may lyse (burst), plant cell becomes turgid (cell wall prevents bursting).",
      "In a **hypertonic solution** (high solute): water leaves cell → animal cell crenates (shrinks), plant cell plasmolyses (membrane pulls away from wall).",
      "In an **isotonic solution**: no net water movement.",
      "**Medical applications**: IV drips must be isotonic to avoid damaging blood cells.",
    ],
    definitions: [
      { term: "Turgid", definition: "A plant cell that is firm and swollen due to water absorption (full vacuole pushes against cell wall)." },
      { term: "Plasmolysis", definition: "Shrinkage of cell membrane away from cell wall when a plant cell loses water in a hypertonic solution." },
      { term: "Crenation", definition: "Shrinkage/shriveling of an animal cell when placed in a hypertonic solution." },
    ],
    examTip: "Draw diagrams of cells in each solution type. Remember: plant cells don't burst because of the cell wall.",
  },

  "bio-D3.1": {
    topicId: "bio-D3.1",
    keyConcepts: [
      "**Sexual reproduction**: involves meiosis and fertilization → genetically diverse offspring. Two parents contribute genetic material.",
      "**Asexual reproduction**: involves mitosis only → genetically identical offspring (clones). One parent. Faster but no variation.",
      "**Human reproductive system**: Males produce sperm (testes), females produce eggs (ovaries). Fertilization typically in fallopian tube.",
      "**Plant sexual reproduction**: flowers contain male (stamen: anther + filament) and female (carpel/pistil: stigma, style, ovary) parts. Pollination → fertilization → seed and fruit development.",
      "**Fertilization**: fusion of male and female gametes (haploid) to form a diploid zygote.",
    ],
    definitions: [
      { term: "Gamete", definition: "A haploid sex cell (sperm or egg) produced by meiosis." },
      { term: "Zygote", definition: "A diploid cell formed by the fusion of two gametes at fertilization." },
      { term: "Pollination", definition: "Transfer of pollen from anther to stigma (plants)." },
    ],
    examTip: "Compare sexual vs asexual reproduction: number of parents, genetic outcome, speed, variation, evolutionary advantage.",
  },

  "bio-D3.2": {
    topicId: "bio-D3.2",
    keyConcepts: [
      "**Mendelian genetics**: genes come in pairs (alleles), one from each parent. Alleles can be **dominant** (expressed when heterozygous) or **recessive** (expressed only when homozygous).",
      "**Monohybrid cross**: Aa × Aa → 1 AA : 2 Aa : 1 aa (genotypic ratio 1:2:1, phenotypic ratio 3:1).",
      "**Punnett squares**: grid for predicting offspring genotypes and phenotypes.",
      "**Codominance**: both alleles expressed equally in heterozygote (e.g., blood type AB: Iᴬ and Iᴮ both expressed).",
      "**Sex-linked inheritance**: genes on X chromosome. Males (XY) only need one recessive allele to be affected. Females (XX) can be carriers. E.g., hemophilia, colour blindness.",
      "**Pedigree charts**: family diagrams showing inheritance patterns across generations. Can identify dominant/recessive, autosomal/sex-linked.",
      "**Continuous variation**: range of phenotypes influenced by many genes + environment (e.g., height). **Discrete variation**: distinct categories, usually one gene (e.g., blood type).",
    ],
    definitions: [
      { term: "Genotype", definition: "The combination of alleles an organism has for a particular gene (e.g., Aa, BB)." },
      { term: "Phenotype", definition: "The observable characteristics of an organism, determined by genotype and environment." },
      { term: "Heterozygous", definition: "Having two different alleles for a gene (e.g., Aa)." },
      { term: "Homozygous", definition: "Having two identical alleles for a gene (e.g., AA or aa)." },
    ],
    examTip: "Practice Punnett squares for mono- and dihybrid crosses. For sex-linkage, use X^A and X^a notation.",
  },

  "bio-D3.3": {
    topicId: "bio-D3.3",
    keyConcepts: [
      "**Homeostasis**: maintaining stable internal conditions (temperature, blood glucose, pH, water balance) despite external changes.",
      "**Negative feedback**: a change triggers a response that **reverses** the change, returning to set point. Most homeostatic mechanisms.",
      "**Thermoregulation**: too hot → vasodilation, sweating, less shivering. Too cold → vasoconstriction, shivering, piloerection. Hypothalamus = thermostat.",
      "**Blood glucose regulation**: High glucose → **insulin** (from β-cells) → cells absorb glucose, liver stores glycogen → glucose falls. Low glucose → **glucagon** (from α-cells) → liver breaks down glycogen → glucose rises.",
      "**Type 1 diabetes**: autoimmune, β-cells destroyed, no insulin produced. Treated with insulin injections.",
      "**Type 2 diabetes**: cells become resistant to insulin. Linked to lifestyle (obesity, inactivity). Managed by diet, exercise, medication.",
    ],
    definitions: [
      { term: "Negative feedback", definition: "A mechanism where a change triggers a response that reverses the change, returning to a set point." },
      { term: "Insulin", definition: "Hormone from β-cells of the pancreas that lowers blood glucose by promoting uptake and glycogen storage." },
      { term: "Glucagon", definition: "Hormone from α-cells of the pancreas that raises blood glucose by triggering glycogen breakdown." },
    ],
    examTip: "Draw a negative feedback loop for blood glucose: stimulus → receptor → control center → effector → response → return to set point.",
  },

  "bio-D4.1": {
    topicId: "bio-D4.1",
    keyConcepts: [
      "**Variation** in a population comes from: mutations (new alleles), sexual reproduction (crossing over, independent assortment, random fertilization).",
      "**Natural selection**: individuals with traits better suited to the environment have higher fitness → survive and reproduce more → advantageous alleles increase in frequency.",
      "Over many generations, natural selection can lead to **adaptation** — the population becomes better suited to its environment.",
      "Examples: antibiotic resistance in bacteria, pesticide resistance in insects, industrial melanism in peppered moths.",
      "Natural selection acts on **phenotypes** but changes **allele frequencies** in the gene pool.",
    ],
    definitions: [
      { term: "Fitness", definition: "An organism's ability to survive and reproduce in its environment — measured by reproductive success." },
      { term: "Adaptation", definition: "An inherited trait that increases an organism's fitness in a particular environment." },
      { term: "Gene pool", definition: "The total set of all alleles in a population at a given time." },
    ],
    examTip: "For antibiotic resistance: the antibiotic doesn't cause the mutation — it selects for already-resistant bacteria. This is a key distinction.",
  },

  "bio-D4.2": {
    topicId: "bio-D4.2",
    keyConcepts: [
      "Ecosystems tend toward **equilibrium** — balanced interactions between biotic and abiotic factors.",
      "**Keystone species**: have disproportionately large effects relative to their abundance. Removal causes significant ecosystem change (e.g., sea otters → sea urchins → kelp forests).",
      "**Deforestation** impacts: habitat loss, biodiversity loss, soil erosion, increased CO₂ (reduced photosynthesis + decomposition), water cycle disruption.",
      "**Sustainable management**: using resources at a rate that allows natural replenishment. Includes quotas, selective harvesting, protected areas, replanting.",
    ],
    definitions: [
      { term: "Keystone species", definition: "A species whose removal would cause disproportionate changes in the ecosystem." },
      { term: "Sustainability", definition: "Using resources at a rate that meets current needs without compromising future availability." },
    ],
    examTip: "Be ready to discuss a specific example of a keystone species and explain the cascade effects of its removal.",
  },

  "bio-D4.3": {
    topicId: "bio-D4.3",
    keyConcepts: [
      "**Greenhouse effect** (natural): solar radiation → Earth absorbs and re-emits infrared → greenhouse gases (CO₂, CH₄, N₂O, H₂O) trap heat → warms planet to habitable temperatures.",
      "**Enhanced greenhouse effect**: human activities (burning fossil fuels, deforestation, agriculture) increase greenhouse gas concentrations → additional warming → climate change.",
      "**Evidence**: rising global temperatures, ice core data (CO₂ correlation with temperature), sea level rise, glacier retreat, shifting seasons.",
      "**Impacts on biodiversity**: coral bleaching, habitat loss, species migration, phenological shifts (earlier flowering, altered migration), increased extinction risk.",
      "**Mitigation**: reduce emissions (renewable energy, efficiency), carbon capture, reforestation, international agreements (Paris Agreement).",
    ],
    definitions: [
      { term: "Greenhouse effect", definition: "The trapping of infrared radiation by atmospheric gases, warming the Earth's surface." },
      { term: "Coral bleaching", definition: "Loss of symbiotic algae (zooxanthellae) from coral due to stress (high temperature), causing coral to turn white and potentially die." },
    ],
    examTip: "Distinguish natural greenhouse effect (essential for life) from enhanced greenhouse effect (human-caused, problematic).",
  },

  // ============================================================
  // MATH AI SL — Topic 1: Number and Algebra
  // ============================================================

  "mai-1.1": {
    topicId: "mai-1.1",
    keyConcepts: [
      "**Scientific notation**: a × 10ᵏ where 1 ≤ a < 10. E.g., 5,600,000 = 5.6 × 10⁶.",
      "Useful for very large or very small numbers. Your GDC displays this as 5.6E6.",
      "**Operations**: multiply/divide the coefficients and add/subtract the exponents. E.g., (3 × 10⁴) × (2 × 10³) = 6 × 10⁷.",
    ],
    definitions: [
      { term: "Scientific notation", definition: "A way to express numbers as a × 10ᵏ where 1 ≤ a < 10 and k is an integer." },
    ],
    examTip: "Make sure your GDC is set to scientific notation mode for very large/small answers. Check significant figures.",
  },

  "mai-1.2": {
    topicId: "mai-1.2",
    keyConcepts: [
      "**Arithmetic sequence**: constant difference (d) between consecutive terms. E.g., 3, 7, 11, 15... (d = 4).",
      "**nth term**: uₙ = u₁ + (n−1)d. Both in the formula booklet.",
      "**Sum of n terms**: Sₙ = n/2 × (2u₁ + (n−1)d) or Sₙ = n/2 × (u₁ + uₙ).",
      "Applications: salary increases by a fixed amount each year, seating rows in a stadium, simple savings plans.",
      "To find d: d = u₂ − u₁. To find u₁: rearrange the nth term formula.",
    ],
    definitions: [
      { term: "Common difference (d)", definition: "The constant value added to each term to get the next in an arithmetic sequence." },
      { term: "Arithmetic series", definition: "The sum of terms in an arithmetic sequence." },
    ],
    examTip: "Always identify u₁ and d first. Use the formula booklet — don't try to memorize formulas!",
  },

  "mai-1.3": {
    topicId: "mai-1.3",
    keyConcepts: [
      "**Geometric sequence**: constant ratio (r) between consecutive terms. E.g., 2, 6, 18, 54... (r = 3).",
      "**nth term**: uₙ = u₁ × rⁿ⁻¹.",
      "**Sum of n terms**: Sₙ = u₁(rⁿ − 1)/(r − 1).",
      "**Sum to infinity** (convergent series): S∞ = u₁/(1−r), only when **|r| < 1**.",
      "Applications: compound interest, population growth/decay, bouncing ball, depreciation.",
      "To find r: r = u₂/u₁. If |r| ≥ 1, the series diverges (no finite sum).",
    ],
    definitions: [
      { term: "Common ratio (r)", definition: "The constant multiplier between consecutive terms in a geometric sequence." },
      { term: "Convergent series", definition: "A geometric series where |r| < 1, so the sum approaches a finite value as n → ∞." },
    ],
    examTip: "Check |r| < 1 before using S∞. A common mistake is applying the infinite sum formula when the series diverges.",
  },

  "mai-1.4": {
    topicId: "mai-1.4",
    keyConcepts: [
      "**Compound interest**: FV = PV × (1 + r/100k)ᵏⁿ, where PV = present value, r = annual rate, k = compounding periods per year, n = years.",
      "**Depreciation**: value decreases. FV = PV × (1 − r/100)ⁿ.",
      "Use the **TVM solver** on your GDC (Finance app) for complex problems: N, I%, PV, PMT, FV, P/Y, C/Y.",
      "**Inflation**: general increase in prices over time, reducing purchasing power. Real value = nominal value adjusted for inflation.",
      "**Loans/Mortgages**: regular payments include both interest and principal repayment. Use GDC for PMT calculations.",
    ],
    definitions: [
      { term: "Present value (PV)", definition: "The current value of money, before interest or investment growth." },
      { term: "Future value (FV)", definition: "The value of money after a specified period with compound interest." },
      { term: "Annuity", definition: "A series of equal payments made at regular intervals over time." },
    ],
    examTip: "In GDC TVM solver: cash IN is positive, cash OUT is negative. PV of a loan is positive (you receive it), PMT is negative (you pay it).",
  },

  "mai-1.5": {
    topicId: "mai-1.5",
    keyConcepts: [
      "**Exponent laws**: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.",
      "**Logarithms**: logₐb = c means aᶜ = b. Logs are the inverse of exponents.",
      "**Log laws**: log(ab) = log a + log b, log(a/b) = log a − log b, log(aⁿ) = n·log a.",
      "**Change of base**: logₐb = ln b / ln a = log b / log a. Essential for GDC calculation.",
      "**Natural log (ln)**: log base e (≈ 2.718). ln and eˣ are inverse functions.",
      "Common: log₁₀(100) = 2 (because 10² = 100), ln(e) = 1, log(1) = 0 for any base.",
    ],
    definitions: [
      { term: "Logarithm", definition: "The exponent to which a base must be raised to produce a given number: logₐb = c ⟺ aᶜ = b." },
    ],
    examTip: "Use logs to solve exponential equations: if 2ˣ = 16, take log of both sides → x·log 2 = log 16 → x = log 16/log 2 = 4.",
  },

  "mai-1.6": {
    topicId: "mai-1.6",
    keyConcepts: [
      "**Percentage error** = |vₐ − vₑ|/vₑ × 100%, where vₐ = approximate, vₑ = exact.",
      "**Significant figures (s.f.)**: all non-zero digits are significant. Zeros between non-zeroes are significant. Leading zeros are not.",
      "**Estimation**: rounding to 1 s.f. for quick calculations. E.g., 4.8 × 21.3 ≈ 5 × 20 = 100.",
      "IB typically asks for **3 significant figures** unless otherwise stated.",
      "Don't round intermediate calculations — only round your **final answer**.",
    ],
    definitions: [
      { term: "Percentage error", definition: "The relative difference between an approximate and exact value, expressed as a percentage." },
    ],
    examTip: "If a question says 'give your answer to 3 s.f.', show more digits in working and only round at the very end.",
  },

  "mai-1.7": {
    topicId: "mai-1.7",
    keyConcepts: [
      "**Amortization**: paying off a loan through regular equal payments that cover both interest and principal.",
      "Use **GDC TVM solver** or spreadsheet: input N, I%, PV, PMT, FV.",
      "Early payments are mostly interest; later payments are mostly principal repayment.",
      "An **annuity** is a series of equal payments at regular intervals (e.g., pension payments, mortgage).",
      "You can use spreadsheets to model amortization schedules showing balance after each payment.",
    ],
    definitions: [
      { term: "Amortization", definition: "The gradual repayment of a loan through regular installments that cover interest and principal." },
    ],
    examTip: "Practice using the TVM solver on YOUR specific GDC model — the interface varies between TI and Casio.",
  },

  "mai-1.8": {
    topicId: "mai-1.8",
    keyConcepts: [
      "Use your GDC to solve **systems of linear equations** (simultaneous equations) — especially when there are 3 unknowns.",
      "Use the **equation solver** or **matrix methods** on your GDC.",
      "For polynomial equations, use the GDC's **polynomial solver** or graph and find x-intercepts.",
      "A system can have: one unique solution, no solution (parallel lines), or infinitely many solutions (same line).",
    ],
    examTip: "In the exam, show your setup (the equations) even if you solve with GDC. Write 'Using GDC:' before the answer.",
  },

  // ============================================================
  // MATH AI SL — Topic 2: Functions
  // ============================================================

  "mai-2.1": {
    topicId: "mai-2.1",
    keyConcepts: [
      "A **function** maps each input (x) to exactly one output (y). Written as f(x) or y = ...",
      "**Domain**: set of all possible x-values (inputs). **Range**: set of all possible y-values (outputs).",
      "**Vertical line test**: if any vertical line crosses a graph more than once, it's NOT a function.",
      "Notation: f(3) means 'substitute x = 3 into f'. E.g., if f(x) = 2x + 1, then f(3) = 7.",
    ],
    definitions: [
      { term: "Domain", definition: "The set of all possible input values (x) for which the function is defined." },
      { term: "Range", definition: "The set of all possible output values (y) that the function can produce." },
    ],
    examTip: "Read domain and range from graphs carefully. Domain = horizontal extent, Range = vertical extent.",
  },

  "mai-2.2": {
    topicId: "mai-2.2",
    keyConcepts: [
      "**Linear model**: f(x) = mx + c. Straight line. m = gradient (slope), c = y-intercept.",
      "**Gradient** = rise/run = (y₂−y₁)/(x₂−x₁). Positive = line goes up, negative = line goes down.",
      "**Interpretation in context**: m is the rate of change (e.g., 'cost increases by €5 per km'), c is the initial value.",
      "Two points → find m → use point-slope form: y − y₁ = m(x − x₁).",
    ],
    definitions: [
      { term: "Gradient (slope)", definition: "The rate of change of y with respect to x — how steep the line is." },
      { term: "y-intercept", definition: "The value of y where the graph crosses the y-axis (when x = 0)." },
    ],
    examTip: "Always interpret gradient and y-intercept in context of the problem — don't just state the numbers.",
  },

  "mai-2.5": {
    topicId: "mai-2.5",
    keyConcepts: [
      "**Quadratic**: f(x) = ax² + bx + c. Parabola shape. a > 0: opens up (U), a < 0: opens down (∩).",
      "**Vertex form**: f(x) = a(x−h)² + k, where (h, k) is the vertex (turning point).",
      "**Axis of symmetry**: x = −b/(2a) or x = h.",
      "**Zeros/roots**: where f(x) = 0. Find by factoring, quadratic formula, or GDC.",
      "**Quadratic formula**: x = (−b ± √(b²−4ac))/(2a). Discriminant Δ = b²−4ac.",
      "Δ > 0: 2 real roots. Δ = 0: 1 repeated root. Δ < 0: no real roots.",
    ],
    definitions: [
      { term: "Discriminant (Δ)", definition: "Δ = b²−4ac. Determines the number of real roots of a quadratic equation." },
      { term: "Vertex", definition: "The maximum or minimum point of a parabola — its turning point." },
    ],
    examTip: "Use vertex form to quickly identify max/min. Use the discriminant to discuss the nature of roots without solving.",
  },

  "mai-2.6": {
    topicId: "mai-2.6",
    keyConcepts: [
      "**Exponential growth**: f(x) = kaˣ + c where a > 1. Increases rapidly.",
      "**Exponential decay**: f(x) = kaˣ + c where 0 < a < 1. Decreases toward asymptote.",
      "**Horizontal asymptote**: y = c (the graph approaches but never reaches this value).",
      "Also written as f(x) = keˣ + c (using natural base e ≈ 2.718).",
      "Applications: population growth, radioactive decay, cooling/heating, compound interest, spread of disease.",
    ],
    definitions: [
      { term: "Asymptote", definition: "A line that a graph approaches but never touches or crosses." },
      { term: "Exponential growth", definition: "A pattern where the rate of increase is proportional to the current value." },
    ],
    examTip: "Identify the asymptote from the equation (y = c) and from the graph. State it explicitly in your answer.",
  },

  "mai-2.8": {
    topicId: "mai-2.8",
    keyConcepts: [
      "**Sinusoidal models**: f(x) = a sin(bx) + d or f(x) = a cos(bx) + d.",
      "**Amplitude** = |a| (half the distance between max and min).",
      "**Period** = 2π/b (or 360°/b). Time for one complete cycle.",
      "**Vertical shift** = d (the principal axis / midline).",
      "Max value = d + |a|, Min value = d − |a|.",
      "Applications: tides, temperature over a day/year, Ferris wheels, sound waves.",
    ],
    definitions: [
      { term: "Amplitude", definition: "Half the distance between the maximum and minimum values of a sinusoidal function." },
      { term: "Period", definition: "The length of one complete cycle of a periodic function." },
    ],
    examTip: "From a graph: amplitude = (max−min)/2, d = (max+min)/2, period = distance between two peaks.",
  },

  "mai-2.10": {
    topicId: "mai-2.10",
    keyConcepts: [
      "**Regression**: finding the best-fit model for data using GDC. Types: linear, quadratic, exponential, power, sinusoidal.",
      "**Correlation coefficient r** (Pearson's): measures strength and direction of linear relationship. −1 ≤ r ≤ 1.",
      "|r| close to 1 = strong correlation. |r| close to 0 = weak/no correlation. Positive r = positive slope, negative r = negative slope.",
      "**R²** (coefficient of determination): proportion of variance explained by the model. E.g., R² = 0.85 means 85% of variation is explained.",
      "Choose the model with the **highest R²** or most appropriate shape for the data.",
      "**Interpolation** (within data range) is reliable. **Extrapolation** (beyond data range) is unreliable.",
    ],
    definitions: [
      { term: "Correlation coefficient (r)", definition: "A measure of the strength and direction of a linear relationship, between −1 and 1." },
      { term: "Interpolation", definition: "Estimating a value within the range of observed data. Generally reliable." },
      { term: "Extrapolation", definition: "Estimating a value beyond the range of observed data. Unreliable." },
    ],
    examTip: "Always comment on the strength of correlation (strong/moderate/weak) AND warn about extrapolation when predicting outside the data range.",
  },

  // ============================================================
  // MATH AI SL — Topic 3: Geometry and Trigonometry
  // ============================================================

  "mai-3.1": {
    topicId: "mai-3.1",
    keyConcepts: [
      "**3D solids**: know formulas for volume and surface area (all in formula booklet).",
      "**Sphere**: V = 4πr³/3, SA = 4πr². **Cone**: V = πr²h/3, SA = πr² + πrl (l = slant height).",
      "**Cylinder**: V = πr²h, SA = 2πr² + 2πrh. **Pyramid**: V = ⅓ × base area × h.",
      "**Composite solids**: break into simpler shapes, calculate each, then add/subtract.",
      "**Distance between two points**: d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²) in 3D.",
      "**Midpoint**: M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2).",
    ],
    examTip: "Draw a clear diagram and label all dimensions. Use the formula booklet — don't waste time memorizing formulas.",
  },

  "mai-3.3": {
    topicId: "mai-3.3",
    keyConcepts: [
      "**Sine rule**: a/sin A = b/sin B = c/sin C. Use when you have: AAS, ASA, or ambiguous case (SSA).",
      "**Cosine rule**: a² = b² + c² − 2bc·cos A. Use for SAS or SSS.",
      "**Area of triangle**: Area = ½ab sin C (two sides and included angle).",
      "**When to use which**: Know 2 angles + 1 side → sine rule. Know 2 sides + included angle → cosine rule. Know 3 sides → cosine rule to find angles.",
      "The **ambiguous case** (SSA with sine rule) can give 0, 1, or 2 triangles. Check if sin gives a valid angle.",
    ],
    definitions: [
      { term: "Sine rule", definition: "a/sin A = b/sin B — relates sides and opposite angles in any triangle." },
      { term: "Cosine rule", definition: "a² = b² + c² − 2bc·cos A — relates three sides and one angle in any triangle." },
    ],
    examTip: "Always identify what you know (sides/angles) before choosing sine or cosine rule. Draw the triangle and label everything.",
  },

  "mai-3.5": {
    topicId: "mai-3.5",
    keyConcepts: [
      "**Voronoi diagram**: divides a plane into regions based on nearest site. Every point in a region is closer to its own site than any other.",
      "**Edges** are perpendicular bisectors of line segments connecting adjacent sites.",
      "**Vertices** are equidistant from three (or more) sites.",
      "**Nearest-neighbour interpolation**: estimate unknown value at a point by using the value of the nearest known site.",
      "**Toxic waste dump problem** (largest empty circle): find the Voronoi vertex farthest from any site — the optimal location to place something you want far from all sites.",
    ],
    definitions: [
      { term: "Voronoi diagram", definition: "A partition of a plane where each region contains all points closest to a particular site." },
    ],
    examTip: "For the toxic waste problem, check each Voronoi vertex — the answer is the vertex with the largest distance to its nearest site.",
  },

  // ============================================================
  // MATH AI SL — Topic 4: Statistics and Probability
  // ============================================================

  "mai-4.1": {
    topicId: "mai-4.1",
    keyConcepts: [
      "**Sampling techniques**: Simple random (every member has equal chance), Systematic (every kth member), Stratified (proportional from subgroups), Quota (set number from subgroups), Convenience (easiest to reach).",
      "**Bias** occurs when certain groups are over/under-represented. Convenience sampling has high bias.",
      "**Data types**: Quantitative (numerical: discrete or continuous) vs Qualitative (categorical).",
      "**Reliability**: data is reliable if similar results are obtained when repeated. **Validity**: data measures what it's supposed to measure.",
    ],
    definitions: [
      { term: "Bias", definition: "Systematic error in data collection that makes results unrepresentative of the population." },
      { term: "Stratified sampling", definition: "Dividing the population into subgroups and sampling proportionally from each." },
    ],
    examTip: "Be able to identify the sampling method used and discuss its advantages/disadvantages in context.",
  },

  "mai-4.2": {
    topicId: "mai-4.2",
    keyConcepts: [
      "**Frequency tables**: organize raw data into categories or class intervals.",
      "**Histograms**: bars touching, continuous data, frequency on y-axis. Width of bars = class interval.",
      "**Cumulative frequency graphs**: plot upper boundary vs cumulative frequency. S-shaped curve. Read off median, Q1, Q3.",
      "**Box-and-whisker plots**: show min, Q1, median, Q3, max. Great for comparing distributions. Outliers may be shown separately.",
    ],
    definitions: [
      { term: "Cumulative frequency", definition: "Running total of frequencies up to and including each class interval." },
    ],
    examTip: "From a cumulative frequency graph: median at 50% of total, Q1 at 25%, Q3 at 75%. IQR = Q3 − Q1.",
  },

  "mai-4.3": {
    topicId: "mai-4.3",
    keyConcepts: [
      "**Mean**: sum of all values / number of values. Affected by outliers.",
      "**Median**: middle value when ordered. Not affected by outliers. For n values: position = (n+1)/2.",
      "**Mode**: most frequent value. Can have no mode, one mode, or multiple modes.",
      "**Estimated mean for grouped data**: Σ(f × midpoint) / Σf. Use midpoints of class intervals.",
      "**Modal class**: the class interval with the highest frequency.",
    ],
    definitions: [
      { term: "Mean", definition: "The average — sum of values divided by the number of values." },
      { term: "Median", definition: "The middle value of an ordered dataset." },
    ],
    examTip: "For grouped data, you can only estimate the mean (using midpoints). State this clearly in your answer.",
  },

  "mai-4.5": {
    topicId: "mai-4.5",
    keyConcepts: [
      "**Scatter diagrams**: plot bivariate data to visualize relationships.",
      "**Pearson's r**: measures linear correlation. Strong: |r| > 0.75. Moderate: 0.5-0.75. Weak: < 0.5.",
      "**Line of best fit** (regression line): ŷ = ax + b. Use GDC to find a and b.",
      "**Correlation ≠ causation**: just because two variables correlate doesn't mean one causes the other. Lurking variables may explain the relationship.",
      "Only use the regression line for **interpolation** (within data range). Extrapolation is unreliable.",
    ],
    definitions: [
      { term: "Pearson's r", definition: "A measure of the strength and direction of the linear relationship between two variables (−1 to 1)." },
    ],
    examTip: "Always describe correlation with: direction (positive/negative), strength (strong/moderate/weak), and r-value. Add 'correlation does not imply causation'.",
  },

  "mai-4.8": {
    topicId: "mai-4.8",
    keyConcepts: [
      "**Venn diagrams**: show overlapping sets. Useful for P(A∪B), P(A∩B), P(A').",
      "**Tree diagrams**: show sequential events. Multiply along branches, add between branches.",
      "**Conditional probability**: P(A|B) = P(A∩B)/P(B). 'Probability of A given B has occurred.'",
      "**Independent events**: P(A∩B) = P(A) × P(B). One event doesn't affect the other.",
      "**Mutually exclusive**: P(A∩B) = 0. Events can't happen together. P(A∪B) = P(A) + P(B).",
    ],
    definitions: [
      { term: "Conditional probability", definition: "The probability of event A occurring given that event B has already occurred: P(A|B)." },
      { term: "Independent events", definition: "Events where the occurrence of one does not affect the probability of the other." },
    ],
    examTip: "Draw the diagram (Venn or tree) FIRST, label all regions/branches, then read off the required probability.",
  },

  "mai-4.11": {
    topicId: "mai-4.11",
    keyConcepts: [
      "**Normal distribution**: bell-shaped, symmetric about the mean. X ~ N(μ, σ²).",
      "Mean = median = mode (at the centre). Defined by μ (mean) and σ (standard deviation).",
      "**68-95-99.7 rule**: ~68% within ±1σ, ~95% within ±2σ, ~99.7% within ±3σ.",
      "Use GDC for probabilities: P(X < a), P(X > a), P(a < X < b). Also **inverse normal**: given probability, find the x-value.",
      "No need to standardize — use GDC directly with μ and σ.",
    ],
    definitions: [
      { term: "Normal distribution", definition: "A symmetric, bell-shaped probability distribution defined by its mean (μ) and standard deviation (σ)." },
    ],
    examTip: "Always sketch a normal curve, shade the required area, and label μ and the boundary values before using GDC.",
  },

  "mai-4.12": {
    topicId: "mai-4.12",
    keyConcepts: [
      "**Binomial distribution**: X ~ B(n, p). n = fixed number of trials, p = probability of success, independent trials, two outcomes only.",
      "**Mean** = np. **Variance** = np(1−p).",
      "Use GDC for P(X = k), P(X ≤ k), P(X ≥ k). Binomial PDF for exact, CDF for cumulative.",
      "Examples: coin flips, defective items, exam pass/fail, free throw success.",
    ],
    definitions: [
      { term: "Binomial distribution", definition: "Models the number of successes in n independent trials with constant probability p: X ~ B(n, p)." },
    ],
    examTip: "Check the 4 conditions: fixed n, two outcomes, constant p, independent trials. If they're met → binomial.",
  },

  "mai-4.13": {
    topicId: "mai-4.13",
    keyConcepts: [
      "**Chi-squared test for independence**: tests whether two categorical variables are associated.",
      "**H₀**: variables are independent (no association). **H₁**: variables are not independent (association exists).",
      "Steps: 1. State hypotheses. 2. Create observed and expected frequency tables. 3. Calculate χ² statistic. 4. Find degrees of freedom: (rows−1)(columns−1). 5. Compare p-value to significance level (usually 5%).",
      "**Expected frequency**: E = (row total × column total) / grand total. All expected values should be ≥ 5.",
      "If **p-value < significance level** → reject H₀ → there IS a significant association.",
      "If **p-value ≥ significance level** → do not reject H₀ → insufficient evidence for association.",
    ],
    definitions: [
      { term: "Chi-squared test", definition: "A hypothesis test to determine whether there is a significant association between two categorical variables." },
      { term: "Degrees of freedom", definition: "For a χ² test: df = (rows − 1)(columns − 1)." },
      { term: "p-value", definition: "The probability of obtaining the observed results (or more extreme) if H₀ is true." },
    ],
    examTip: "Always write a conclusion in context: 'There is sufficient evidence at the 5% level to suggest an association between X and Y.'",
  },

  "mai-4.15": {
    topicId: "mai-4.15",
    keyConcepts: [
      "**t-test**: tests whether a sample mean is significantly different from a known/hypothesized population mean.",
      "**H₀**: μ = μ₀ (population mean equals hypothesized value). **H₁**: μ ≠ μ₀ (or < or >).",
      "Requires data to be approximately normally distributed.",
      "Use GDC: input data, run t-test, get t-statistic and p-value.",
      "**Paired t-test**: compares means of two related groups (e.g., before and after treatment on the same subjects).",
      "Decision: if p-value < significance level → reject H₀.",
    ],
    definitions: [
      { term: "t-test", definition: "A hypothesis test comparing a sample mean to a population mean, used when population standard deviation is unknown." },
    ],
    examTip: "State H₀ and H₁ clearly, show GDC output, give the p-value, then write a conclusion in context.",
  },

  // ============================================================
  // MATH AI SL — Topic 5: Calculus
  // ============================================================

  "mai-5.1": {
    topicId: "mai-5.1",
    keyConcepts: [
      "The **derivative** f'(x) gives the **instantaneous rate of change** of f(x) at any point.",
      "Geometrically: f'(x) = the **gradient of the tangent line** to the curve at point x.",
      "**Limit concept**: the derivative is the limit of (f(x+h)−f(x))/h as h→0. (Understanding only, not calculated by hand in AI.)",
      "If f'(a) > 0 → function is increasing at x = a. If f'(a) < 0 → decreasing. If f'(a) = 0 → stationary point.",
    ],
    definitions: [
      { term: "Derivative", definition: "The rate of change of a function at a given point — the gradient of the tangent line." },
      { term: "Stationary point", definition: "A point where f'(x) = 0 — the function is neither increasing nor decreasing." },
    ],
    examTip: "The derivative tells you HOW the function is changing at each point. Always interpret in context (speed, rate, gradient).",
  },

  "mai-5.3": {
    topicId: "mai-5.3",
    keyConcepts: [
      "**Power rule**: if f(x) = axⁿ, then f'(x) = anxⁿ⁻¹.",
      "Differentiate term by term for polynomials. The derivative of a constant is 0.",
      "Examples: f(x) = 3x⁴ → f'(x) = 12x³. f(x) = 5x → f'(x) = 5. f(x) = 7 → f'(x) = 0.",
      "Can also differentiate x⁻¹, x^(1/2), etc. E.g., f(x) = √x = x^(1/2) → f'(x) = ½x^(-1/2).",
    ],
    examTip: "Rewrite before differentiating: √x = x^(1/2), 1/x = x⁻¹, 1/x² = x⁻². Then apply the power rule.",
  },

  "mai-5.5": {
    topicId: "mai-5.5",
    keyConcepts: [
      "**Stationary points**: where f'(x) = 0. Can be local max, local min, or point of inflection.",
      "**Second derivative test**: f''(x) > 0 → concave up → **local minimum**. f''(x) < 0 → concave down → **local maximum**. f''(x) = 0 → inconclusive (may be inflection point).",
      "**Optimization problems**: find max or min of a function in a real-world context.",
      "Steps: 1. Set up the function. 2. Differentiate. 3. Set f'(x) = 0 and solve. 4. Check it's a max/min (second derivative or context). 5. Answer the question.",
      "Use GDC to find max/min when algebra is complex.",
    ],
    definitions: [
      { term: "Local maximum", definition: "A point where f'(x) = 0 and f''(x) < 0 — the function changes from increasing to decreasing." },
      { term: "Optimization", definition: "Finding the maximum or minimum value of a function, often in a real-world context." },
    ],
    examTip: "In optimization, always verify your answer is a max or min (not just any stationary point). Check with f''(x) or reason from context.",
  },

  "mai-5.6": {
    topicId: "mai-5.6",
    keyConcepts: [
      "**Integration** is the reverse of differentiation (anti-differentiation).",
      "**Power rule for integration**: ∫axⁿ dx = axⁿ⁺¹/(n+1) + C (where n ≠ −1).",
      "**C** is the constant of integration — always include it for indefinite integrals.",
      "Examples: ∫3x² dx = x³ + C. ∫5 dx = 5x + C. ∫x⁻² dx = −x⁻¹ + C.",
      "To find C: use a known point. If F(2) = 10, substitute to find C.",
    ],
    definitions: [
      { term: "Indefinite integral", definition: "The reverse of differentiation, giving a family of functions: ∫f(x) dx = F(x) + C." },
      { term: "Constant of integration (C)", definition: "An arbitrary constant added because differentiation of a constant gives 0." },
    ],
    examTip: "Don't forget +C in indefinite integrals. For definite integrals (with bounds), C cancels out so you don't need it.",
  },

  "mai-5.7": {
    topicId: "mai-5.7",
    keyConcepts: [
      "**Definite integral**: ∫ₐᵇ f(x) dx = F(b) − F(a). Gives the **signed area** between the curve and x-axis.",
      "Area above x-axis = positive. Area below x-axis = negative.",
      "For **total area** (ignoring sign): split at x-intercepts, integrate each section, take absolute values, then sum.",
      "Use GDC to evaluate definite integrals when the function is complex.",
    ],
    definitions: [
      { term: "Definite integral", definition: "The integral evaluated between two bounds, giving the net signed area under the curve." },
    ],
    examTip: "If the curve crosses the x-axis, you MUST split the integral and use absolute values for the total area.",
  },

  "mai-5.8": {
    topicId: "mai-5.8",
    keyConcepts: [
      "**Trapezoidal rule**: approximates area under a curve using trapezoids.",
      "Formula: A ≈ h/2 × (y₀ + 2y₁ + 2y₂ + ... + 2yₙ₋₁ + yₙ), where h = (b−a)/n.",
      "More trapezoids (larger n) = better approximation.",
      "**Overestimate** if curve is concave up. **Underestimate** if concave down.",
    ],
    definitions: [
      { term: "Trapezoidal rule", definition: "A numerical method that approximates the area under a curve by dividing it into trapezoids." },
    ],
    examTip: "The formula is in the booklet. Just plug in the values carefully. State whether it's an over or underestimate based on the curve's shape.",
  },

  "mai-5.10": {
    topicId: "mai-5.10",
    keyConcepts: [
      "The **derivative** in context = rate of change. E.g., dh/dt = rate of change of height with respect to time (velocity).",
      "**Kinematics**: position s(t), velocity v(t) = s'(t), acceleration a(t) = v'(t) = s''(t).",
      "Other contexts: rate of profit change, rate of temperature change, rate of population growth.",
      "Interpret the sign: positive derivative = increasing, negative = decreasing, zero = momentarily stationary.",
    ],
    examTip: "Always include units in your answer. E.g., 'The rate of change of volume is 3.5 cm³/s' not just '3.5'.",
  },

  "mai-5.11": {
    topicId: "mai-5.11",
    keyConcepts: [
      "**Integration in kinematics**: velocity → displacement: s = ∫v(t) dt. Acceleration → velocity: v = ∫a(t) dt.",
      "**Displacement** = ∫v(t) dt (signed — accounts for direction).",
      "**Total distance** = ∫|v(t)| dt (always positive — split at zeros of v(t)).",
      "Use initial conditions to find the constant C.",
    ],
    examTip: "Displacement and total distance are different! If a particle goes forward then backward, displacement may be less than total distance.",
  },

  // ============================================================
  // BUSINESS MANAGEMENT HL — Unit 1
  // ============================================================

  "bm-1.1": {
    topicId: "bm-1.1",
    keyConcepts: [
      "A **business** is an organization that combines resources to produce goods or services to satisfy wants and needs.",
      "**Sectors**: Primary (extraction), Secondary (manufacturing), Tertiary (services), Quaternary (knowledge/IT).",
      "**Entrepreneurship**: identifying opportunities and taking risks to start a business. Entrepreneurs need creativity, risk tolerance, and leadership.",
      "**Challenges for startups**: limited finance, lack of experience, competition, cash flow problems, finding customers.",
      "**Opportunities**: gaps in the market, new technology, changing consumer trends, government incentives.",
    ],
    definitions: [
      { term: "Entrepreneur", definition: "Someone who organizes, manages, and takes the risk of starting a new business." },
      { term: "Opportunity cost", definition: "The next best alternative foregone when a decision is made." },
    ],
    examTip: "IB loves discussing entrepreneurship — know characteristics, challenges, and real-world examples.",
  },

  "bm-1.2": {
    topicId: "bm-1.2",
    keyConcepts: [
      "**Sole trader**: one owner, unlimited liability, simple to set up, all profits kept. Risk: personal assets at stake.",
      "**Partnership**: 2+ owners, unlimited liability (usually), shared decisions and profits. Partnership deed defines terms.",
      "**Private limited company (Ltd)**: shares sold privately, limited liability. Cannot sell shares on stock exchange.",
      "**Public limited company (PLC)**: shares on stock exchange, limited liability. Can raise large capital but risk hostile takeover.",
      "**Cooperatives**: owned and run by members. Profits shared. Democratic (one member = one vote).",
      "**Social enterprises**: primary goal is social/environmental, not just profit. E.g., TOMS, Grameen Bank.",
    ],
    definitions: [
      { term: "Limited liability", definition: "Owners' financial risk is limited to their investment — personal assets are protected." },
      { term: "Unlimited liability", definition: "Owners are personally responsible for all business debts — personal assets can be seized." },
    ],
    examTip: "For exam questions, compare business types using: liability, control, profit distribution, ability to raise finance.",
  },

  "bm-1.4": {
    topicId: "bm-1.4",
    keyConcepts: [
      "**Stakeholders**: anyone affected by or who can affect a business — employees, customers, suppliers, shareholders, government, community, NGOs.",
      "**Internal**: employees, managers, shareholders. **External**: customers, suppliers, government, competitors, local community.",
      "**Stakeholder conflicts**: shareholders want profit vs employees want higher wages. Growth vs environmental protection.",
      "Businesses must **balance** stakeholder interests — CSR, stakeholder mapping, communication.",
    ],
    definitions: [
      { term: "Stakeholder", definition: "Any individual or group that has an interest in or is affected by the activities of a business." },
      { term: "Stakeholder conflict", definition: "When the interests of different stakeholder groups clash with each other." },
    ],
    examTip: "In case studies, always identify multiple stakeholder perspectives and discuss conflicting interests.",
  },

  "bm-1.5": {
    topicId: "bm-1.5",
    keyConcepts: [
      "**Internal (organic) growth**: expanding from within — more staff, new products, new locations. Slow but lower risk.",
      "**External (inorganic) growth**: mergers, acquisitions, takeovers, joint ventures, strategic alliances, franchising. Faster but riskier.",
      "**Economies of scale**: average cost per unit falls as output increases. Types: purchasing, technical, financial, marketing, managerial.",
      "**Diseconomies of scale**: average costs rise when a business grows too large — communication breakdown, coordination problems, low morale.",
      "**Franchising**: franchisor sells the right to use its brand/model to franchisees. Lower risk, rapid expansion.",
    ],
    definitions: [
      { term: "Economies of scale", definition: "Cost advantages gained as output increases — average cost per unit falls." },
      { term: "Merger", definition: "Two firms agree to join and form a new, single company." },
      { term: "Acquisition", definition: "One firm buys another, which ceases to exist as a separate entity." },
    ],
    examTip: "Always discuss advantages AND disadvantages of each growth method. IB rewards balanced evaluation.",
  },

  "bm-2.4": {
    topicId: "bm-2.4",
    keyConcepts: [
      "**Taylor** (Scientific Management): workers motivated by money. Piece-rate pay. Division of labor.",
      "**Maslow** (Hierarchy of Needs): 5 levels — Physiological → Safety → Social → Esteem → Self-actualization. Lower needs first.",
      "**Herzberg** (Two-Factor Theory): **Motivators** (achievement, recognition, responsibility) → satisfaction. **Hygiene factors** (salary, conditions) → prevent dissatisfaction but don't motivate.",
      "**Adams** (Equity Theory): workers compare input/output ratios with others. Perceived unfairness → demotivation.",
      "**Pink** (Drive): Autonomy (control), Mastery (improvement), Purpose (meaning). Intrinsic motivation > extrinsic rewards for creative work.",
      "**Financial rewards**: salary, wages, commission, bonus, profit-sharing, share options.",
      "**Non-financial rewards**: job enrichment, empowerment, teamwork, flexible hours, recognition.",
    ],
    definitions: [
      { term: "Intrinsic motivation", definition: "Motivation from internal satisfaction — enjoyment of work, sense of achievement." },
      { term: "Extrinsic motivation", definition: "Motivation from external rewards — pay, bonuses, promotions." },
    ],
    examTip: "Know at least 3 motivation theories in detail. Apply them to case studies — 'According to Herzberg, this would be a hygiene factor because...'",
  },

  "bm-3.5": {
    topicId: "bm-3.5",
    keyConcepts: [
      "**Gross profit margin**: (Gross Profit / Revenue) × 100%. Shows production efficiency.",
      "**Net profit margin**: (Net Profit / Revenue) × 100%. Shows overall profitability after all costs.",
      "**Current ratio**: Current Assets / Current Liabilities. Measures short-term liquidity. Ideal: 1.5–2.0.",
      "**Acid test ratio**: (Current Assets − Inventory) / Current Liabilities. Stricter liquidity test. Ideal: 1.0+.",
      "**ROCE**: (Net Profit / Capital Employed) × 100%. Return on investment. Higher = better.",
      "Compare ratios over time (trends), with competitors (benchmarking), and with industry averages.",
    ],
    definitions: [
      { term: "Liquidity", definition: "A business's ability to meet its short-term financial obligations." },
      { term: "ROCE", definition: "Return on Capital Employed — measures how efficiently a business uses its capital to generate profit." },
    ],
    examTip: "Always interpret ratios in context — a current ratio of 3.0 might mean too much idle cash. State what the ratio means for the business.",
  },

  "bm-4.5": {
    topicId: "bm-4.5",
    keyConcepts: [
      "**Product**: what you sell. Product Life Cycle (PLC): Introduction → Growth → Maturity → Decline. Extension strategies: rebrand, new markets, add features.",
      "**Price**: strategies include cost-plus, penetration (low to gain share), skimming (high initially), competitive, psychological (€9.99).",
      "**Promotion**: above-the-line (mass media: TV, radio, billboards), below-the-line (targeted: social media, direct mail, sponsorship).",
      "**Place**: distribution channels. Direct (factory → consumer), retail, wholesale, online/e-commerce.",
      "**People**: employees who interact with customers. Training and attitude matter.",
      "**Process**: how the service is delivered. Efficient, customer-friendly processes.",
      "**Physical evidence**: tangible elements that support the service (store design, packaging, website).",
      "**BCG Matrix**: Stars (high share/high growth), Cash Cows (high share/low growth), Question Marks (low share/high growth), Dogs (low share/low growth).",
    ],
    definitions: [
      { term: "Marketing mix", definition: "The combination of factors (7Ps) a business uses to influence consumers to buy its product." },
      { term: "Product life cycle", definition: "The stages a product goes through from launch to withdrawal: introduction, growth, maturity, decline." },
    ],
    examTip: "When analyzing a marketing strategy, address ALL relevant Ps. Paper 2 often asks you to recommend changes to the marketing mix.",
  },

  "bm-5.5": {
    topicId: "bm-5.5",
    keyConcepts: [
      "**Break-even point**: where Total Revenue = Total Costs. Profit = 0.",
      "**Break-even quantity** = Fixed Costs / (Selling Price − Variable Cost per unit) = FC / Contribution per unit.",
      "**Contribution per unit** = Selling Price − Variable Cost per unit.",
      "**Total contribution** = Contribution per unit × Quantity sold.",
      "**Margin of safety** = Actual output − Break-even output. How far sales can drop before a loss is made.",
      "**Break-even chart**: plot TC, TR, and FC lines. Break-even point where TR crosses TC. Profit area above, loss area below.",
      "**Limitations**: assumes all output is sold, constant selling price, costs are neatly fixed/variable, single product.",
    ],
    definitions: [
      { term: "Break-even point", definition: "The level of output where total revenue equals total costs — no profit or loss." },
      { term: "Margin of safety", definition: "The difference between actual sales and break-even sales — how much sales can fall before losses occur." },
    ],
    examTip: "Be able to draw AND read break-even charts. Know how changes in price or costs shift the break-even point.",
  },

  "bm-toolkit": {
    topicId: "bm-toolkit",
    keyConcepts: [
      "**SWOT Analysis**: Strengths (internal +), Weaknesses (internal −), Opportunities (external +), Threats (external −). Strategic planning tool.",
      "**Ansoff Matrix**: 4 growth strategies by market/product: Market Penetration (existing/existing, lowest risk), Market Development (existing/new), Product Development (new/existing), Diversification (new/new, highest risk).",
      "**STEEPLE**: Social, Technological, Economic, Environmental, Political, Legal, Ethical. Macro-environment analysis.",
      "**BCG Matrix**: portfolio tool. Stars → invest. Cash Cows → milk profits. Question Marks → decide. Dogs → divest.",
      "**Decision Trees** (HL): visual tool for decision-making under uncertainty. Expected Value = Σ(probability × payoff). Subtract cost.",
      "**Porter's Generic Strategies** (HL): Cost Leadership, Differentiation, Focus (niche). Competitive advantage.",
      "**Force Field Analysis** (HL): driving forces (for change) vs restraining forces (against). Change succeeds when driving > restraining.",
    ],
    definitions: [
      { term: "SWOT analysis", definition: "A tool analyzing Strengths, Weaknesses, Opportunities, and Threats to inform strategic decisions." },
      { term: "Ansoff Matrix", definition: "A framework for choosing growth strategies based on markets (existing/new) and products (existing/new)." },
    ],
    examTip: "In Paper 2, always apply tools to the specific case study — don't just describe the tool in theory. Use evidence from the stimulus.",
  },

  // ============================================================
  // DESIGN TECHNOLOGY HL
  // ============================================================

  "dtech-1.1": {
    topicId: "dtech-1.1",
    keyConcepts: [
      "**Ergonomics**: designing products for human comfort, efficiency, and safety.",
      "**Anthropometrics**: body measurement data used to size products. Sources: databases of measurements (height, reach, grip strength).",
      "**Percentile ranges**: typically design for 5th–95th percentile (accommodates 90%). Safety-critical designs may use 1st–99th.",
      "**Static measurements**: body at rest (height, arm length). **Dynamic measurements**: body in motion (reach, range of motion).",
      "Tools: calipers, stadiometers, tape measures. Data varies by age, gender, ethnicity.",
    ],
    definitions: [
      { term: "Ergonomics", definition: "The science of designing products and environments to match human capabilities and limitations." },
      { term: "Anthropometrics", definition: "The measurement of the human body used to inform product dimensions and sizing." },
      { term: "Percentile", definition: "A value below which a given percentage of the population falls (e.g., 95th percentile = taller than 95% of people)." },
    ],
    examTip: "Always specify WHICH percentile and WHY. A door height uses the 95th male percentile so most people can walk through.",
  },

  "dtech-2.5": {
    topicId: "dtech-2.5",
    keyConcepts: [
      "**Green design**: designing to minimize environmental harm. Material selection, energy efficiency, reduced waste.",
      "**Eco-design**: integrates environmental considerations into all stages of design and development.",
      "**Life Cycle Assessment (LCA)**: evaluates environmental impact at every stage: raw material → manufacturing → distribution → use → disposal/recycling.",
      "**Design for Disassembly (DfD)**: products designed to be easily taken apart for repair, recycling, or material recovery.",
      "**Cradle-to-cradle** (C2C): all materials are either biological nutrients (compost) or technical nutrients (recycled infinitely). Zero waste.",
      "**Cradle-to-grave**: traditional linear model — resources extracted, used, then disposed of (waste).",
    ],
    definitions: [
      { term: "LCA", definition: "Life Cycle Assessment — systematic evaluation of environmental impact from raw material to end of life." },
      { term: "Cradle-to-cradle", definition: "A design philosophy where all materials are perpetually cycled — no waste, only nutrients." },
      { term: "Design for Disassembly", definition: "Designing products to be easily taken apart at end of life for recycling or repair." },
    ],
    examTip: "In exam answers about sustainability, always reference specific LCA stages and how the design addresses environmental impact at EACH stage.",
  },

  "dtech-4.2": {
    topicId: "dtech-4.2",
    keyConcepts: [
      "**Metals**: Ferrous (contain iron, magnetic, rust): steel, cast iron. Non-ferrous (no iron, corrosion-resistant): aluminium, copper, titanium, brass.",
      "**Alloys**: mixtures of metals for improved properties. Steel = iron + carbon. Brass = copper + zinc. Bronze = copper + tin.",
      "**Timber**: Hardwoods (deciduous, slow-growing, expensive: oak, mahogany), Softwoods (coniferous, fast-growing, cheaper: pine, spruce).",
      "**Manufactured boards**: plywood (cross-grained veneers), MDF (compressed fibres), chipboard. Consistent, large sheets, less warping.",
      "**Thermoplastics**: can be reheated and reshaped: PET, ABS, PP, HDPE, acrylic, nylon. Recyclable.",
      "**Thermosets**: permanently harden when cured, cannot be remelted: epoxy, melamine, polyester resin, Bakelite.",
      "**Composites**: two+ materials combined: carbon fibre (carbon + resin), GRP/fibreglass (glass + polyester), concrete (cement + aggregate).",
    ],
    definitions: [
      { term: "Alloy", definition: "A mixture of two or more metals (or metal + non-metal) to improve properties." },
      { term: "Composite", definition: "A material made from two or more constituent materials with different properties." },
    ],
    examTip: "For material selection questions, justify your choice with specific properties (strength, weight, cost, sustainability, aesthetics).",
  },

  "dtech-5.1": {
    topicId: "dtech-5.1",
    keyConcepts: [
      "**Invention**: creating something entirely new. **Innovation**: successfully applying an idea commercially or in a new way.",
      "**Incremental innovation**: small, gradual improvements (new iPhone model). **Disruptive innovation**: creates new markets, displaces existing ones (smartphones replacing cameras).",
      "**Market-pull**: consumer demand drives development (customers want more battery life).",
      "**Technology-push**: new technology creates products consumers didn't know they needed (touchscreens, 3D printing).",
      "**Intellectual property**: patents (inventions, 20 years), copyrights (creative works), trademarks (brand identity), registered designs.",
    ],
    definitions: [
      { term: "Innovation", definition: "The successful commercial application of a new idea, process, or product." },
      { term: "Disruptive innovation", definition: "An innovation that creates a new market and eventually displaces established competitors." },
      { term: "Patent", definition: "Legal protection for an invention, granting the inventor exclusive rights for a set period (usually 20 years)." },
    ],
    examTip: "Always distinguish invention FROM innovation — invention is creating something new, innovation is making it commercially successful.",
  },

  "dtech-7": {
    topicId: "dtech-7",
    keyConcepts: [
      "**User-Centred Design (UCD)**: the user is involved throughout the entire design process.",
      "**Usability goals**: Effectiveness, Efficiency, Satisfaction, Learnability, Memorability, Error prevention.",
      "**User research methods**: interviews, surveys, focus groups, ethnography (observing users in context), personas (fictional user profiles), task analysis.",
      "**Inclusive/Universal design**: designing for the widest possible range of users regardless of age, ability, or situation.",
      "**Norman's design levels**: Visceral (immediate reaction to appearance), Behavioral (pleasure of use), Reflective (meaning, status, identity).",
      "**Jordan's four pleasures**: Physio-pleasure (senses), Socio-pleasure (relationships), Psycho-pleasure (cognitive satisfaction), Ideo-pleasure (values/aesthetics).",
    ],
    definitions: [
      { term: "UCD", definition: "An approach where user needs, capabilities, and limitations drive all design decisions." },
      { term: "Persona", definition: "A fictional character representing a user type, based on research, to guide design decisions." },
      { term: "Universal design", definition: "Designing products usable by the widest range of people without need for adaptation." },
    ],
    examTip: "When discussing UCD, always reference specific user research methods and how findings informed design decisions.",
  },

  "dtech-10": {
    topicId: "dtech-10",
    keyConcepts: [
      "**JIT (Just-in-Time)**: stock arrives exactly when needed. Reduces storage costs and waste. Requires reliable suppliers. Risk: no buffer if supply disrupted.",
      "**JIC (Just-in-Case)**: buffer stock kept. Higher storage costs but guaranteed supply. Safer for unpredictable demand.",
      "**Lean production**: eliminating waste (muda) in all forms: overproduction, waiting, transport, processing, inventory, motion, defects.",
      "**Kaizen**: continuous improvement by ALL employees. Small, incremental changes.",
      "**Kanban**: visual scheduling system using cards/signals to trigger production or supply. Pull-based system.",
      "**TQM (Total Quality Management)**: everyone is responsible for quality. Zero defects as a goal. Prevention over inspection.",
      "**Quality control** (reactive): inspect finished products. **Quality assurance** (proactive): prevent defects through process standards.",
      "**CIM (Computer Integrated Manufacturing)**: CAD + CAM + robotics + automation integrated by computer systems.",
    ],
    definitions: [
      { term: "Lean production", definition: "A manufacturing approach focused on eliminating waste while maintaining quality." },
      { term: "Kaizen", definition: "Japanese philosophy of continuous improvement through small, incremental changes by all employees." },
      { term: "TQM", definition: "Total Quality Management — a system where every employee is responsible for maintaining quality standards." },
    ],
    examTip: "Compare JIT and JIC with specific advantages/disadvantages. Real examples: Toyota (JIT pioneer), COVID supply chain disruptions (JIT weakness).",
  },

  // ============================================================
  // DEUTSCH A HL
  // ============================================================

  "dt-aoe1": {
    topicId: "dt-aoe1",
    keyConcepts: [
      "Zentrale Frage: **Wie und warum erzeugen Texte Bedeutung?**",
      "Die Beziehung zwischen **Autor, Text und Leser** steht im Mittelpunkt — jeder bringt eigene Erfahrungen und Perspektiven mit.",
      "**Textarten**: literarisch (Roman, Gedicht, Drama) und nicht-literarisch (Rede, Werbung, Blog, Artikel, Kommentar).",
      "Analyse von **Stil und Sprache**: Wortwahl (Diktion), Satzstruktur, Bildsprache, Ton, Register.",
      "**Publikum und Zweck**: Für wen wurde der Text geschrieben? Was will der Autor erreichen? (informieren, überzeugen, unterhalten, provozieren)",
      "Die **Wirkung** auf den Leser ist immer zentral — nicht nur WAS der Text sagt, sondern WIE er es sagt.",
    ],
    examTip: "Bei Paper 1 immer zuerst: Textart, Zweck, Publikum identifizieren. Dann Stilmittel analysieren und ihre WIRKUNG erklären.",
  },

  "dt-aoe2": {
    topicId: "dt-aoe2",
    keyConcepts: [
      "Zentrale Frage: **Wie beeinflussen Kontexte die Textproduktion und -rezeption?**",
      "**Historischer Kontext**: Wann wurde der Text geschrieben? Welche Ereignisse prägten die Zeit?",
      "**Kultureller Kontext**: Welche Werte, Normen und Traditionen spiegelt der Text wider?",
      "**Sozialer Kontext**: Welche gesellschaftlichen Strukturen (Klasse, Geschlecht, Macht) werden dargestellt?",
      "Texte sind **Produkte ihrer Zeit** — aber sie können auch über ihre Zeit hinaus relevant sein.",
      "Ein Text wird **anders gelesen** je nach Zeit und Ort des Lesers (Rezeptionsästhetik).",
    ],
    examTip: "Zeige, wie der Kontext die Bedeutung VERÄNDERT. Z.B.: 'Dieser Text wurde 1945 geschrieben, was die Darstellung von X erklärt.'",
  },

  "dt-stilmittel": {
    topicId: "dt-stilmittel",
    keyConcepts: [
      "**Metapher**: übertragene Bedeutung ohne 'wie' ('Wüstenschiff'). **Vergleich**: mit 'wie' ('stark wie ein Löwe').",
      "**Personifikation**: Vermenschlichung ('Die Sonne lacht'). **Alliteration**: gleicher Anfangslaut ('Milch macht müde Männer munter').",
      "**Anapher**: Wortwiederholung am Satzanfang. **Parallelismus**: gleiche Satzstruktur. Beide betonen und steigern.",
      "**Hyperbel**: Übertreibung ('todmüde'). **Litotes**: Untertreibung ('nicht schlecht' = gut). **Ironie**: Gegenteil gemeint.",
      "**Antithese**: Gegenüberstellung ('Arm und Reich'). **Oxymoron**: Widerspruch in sich ('bittersüß').",
      "**Erzählperspektive**: Ich-Erzähler (subjektiv), auktorial (allwissend), personal (3. Person, eine Figur).",
      "**PEE-Methode**: Point (These) → Evidence (Zitat) → Explanation (Wirkung). Grundstruktur jeder Analyse.",
    ],
    definitions: [
      { term: "Stilmittel", definition: "Sprachliche Techniken, die bewusst eingesetzt werden, um eine bestimmte Wirkung zu erzielen." },
      { term: "Register", definition: "Die Stilebene: gehoben (literarisch), neutral (sachlich), umgangssprachlich (alltäglich)." },
    ],
    examTip: "Stilmittel BENENNEN ist nicht genug. Du musst immer die WIRKUNG erklären: Warum setzt der Autor dieses Mittel ein?",
  },

  "dt-io": {
    topicId: "dt-io",
    keyConcepts: [
      "**Aufbau**: 10 Minuten Präsentation + 5 Minuten Fragen. Gesamt: 15 Minuten.",
      "Du wählst: einen **literarischen Text** und einen **nicht-literarischen Text/Textkorpus**, verbunden durch eine **globale Fragestellung**.",
      "**Globale Fragestellung**: ein breites, transnationales Thema (z.B. Identität, Geschlechterrollen, Umwelt, Machtverhältnisse).",
      "Du arbeitest mit einem **40-Zeilen-Extrakt** aus jedem Text — wähle Stellen, die deine Argumentation stützen.",
      "**Bewertungskriterien**: A: Wissen & Verständnis (10), B: Analyse & Bewertung (10), C: Fokus & Organisation (10), D: Sprache (10). Gesamt: 40 Punkte.",
      "**Vorbereitung**: Übe mit Timer, strukturiere klar (Einleitung → Analyse Text 1 → Analyse Text 2 → Verbindung/Schluss).",
    ],
    definitions: [
      { term: "Globale Fragestellung", definition: "Ein breites, bedeutsames Thema, das über den einzelnen Text hinaus relevant ist und beide Texte verbindet." },
    ],
    examTip: "Die globale Fragestellung muss BEIDE Texte verbinden. Wähle ein Thema, das tiefe Analyse ermöglicht, nicht nur oberflächliche Vergleiche.",
  },

  "dt-hl-essay": {
    topicId: "dt-hl-essay",
    keyConcepts: [
      "**Länge**: 1200–1500 Wörter. Wird extern bewertet. **20% der Gesamtnote**.",
      "Du wählst ein Werk (oder Textkorpus) und entwickelst eine **eigene Fragestellung/These**.",
      "Der Essay muss eine **tiefgehende analytische Auseinandersetzung** zeigen — nicht nur zusammenfassen, sondern interpretieren.",
      "**Struktur**: Einleitung (These + Kontext) → Hauptteil (Argumente mit Textbelegen) → Schluss (Synthese, Rückbindung an These).",
      "Zeige Bewusstsein für **Autorenabsicht**, **Stil**, **Kontext** und **Leserreaktion**.",
    ],
    examTip: "Wähle eine Fragestellung, die du überzeugend in 1500 Wörtern beantworten kannst — nicht zu breit, nicht zu eng.",
  },

  // ============================================================
  // ENGLISH A L&L SL
  // ============================================================

  "ell-aoe1": {
    topicId: "ell-aoe1",
    keyConcepts: [
      "Central question: **How and why do we study language and literature?**",
      "Explores the relationship between **author, text, and reader** — each brings their own experience to meaning-making.",
      "**Text types**: literary (novel, poem, play) and non-literary (speech, advertisement, blog, article, editorial).",
      "Focus on **how texts create meaning** through language, structure, style, and rhetorical techniques.",
      "Always consider **audience and purpose**: who is the text for? What does it aim to achieve?",
      "The reader is not passive — meaning is **constructed** through the interaction between reader and text.",
    ],
    examTip: "In Paper 1, always identify text type, purpose, and audience FIRST, then analyze HOW language creates meaning.",
  },

  "ell-aoe2": {
    topicId: "ell-aoe2",
    keyConcepts: [
      "Central question: **How are texts shaped by their cultural and historical contexts?**",
      "Texts are products of their time — but they can transcend their original context.",
      "**Context of production**: when, where, and why was it written? What was happening socially, politically, culturally?",
      "**Context of reception**: how might different audiences interpret the text differently?",
      "A text written in colonial India is read differently today — **meaning changes across time and place**.",
      "Consider **power dynamics**: whose voice is heard? Whose is silenced? What assumptions does the text make?",
    ],
    examTip: "Show how context CHANGES meaning. 'A 1950s audience would interpret this differently because...' demonstrates sophisticated analysis.",
  },

  "ell-literary-devices": {
    topicId: "ell-literary-devices",
    keyConcepts: [
      "**Metaphor**: direct comparison without 'like/as' ('Time is a thief'). **Simile**: comparison with 'like/as' ('brave as a lion').",
      "**Personification**: giving human qualities to non-human things. **Symbolism**: an object represents a larger idea.",
      "**Imagery**: sensory language — visual, auditory, tactile, olfactory, gustatory.",
      "**Irony**: dramatic (audience knows more than character), situational (unexpected outcome), verbal (saying opposite of meaning).",
      "**Juxtaposition**: placing contrasting elements side by side. **Oxymoron**: contradictory terms together ('deafening silence').",
      "**Foreshadowing**: hints at future events. **Flashback**: returns to earlier events.",
      "**Tone**: author's attitude (angry, nostalgic, ironic). **Mood**: feeling created for the reader (tense, melancholic, hopeful).",
      "**Structure**: how a text is organized — chronological, fragmented, circular, stream of consciousness.",
    ],
    definitions: [
      { term: "Rhetoric", definition: "The art of persuasion — using language effectively to influence an audience." },
      { term: "Tone", definition: "The author's or speaker's attitude toward the subject, conveyed through word choice and style." },
      { term: "Motif", definition: "A recurring element (image, symbol, idea) that reinforces a text's themes." },
    ],
    examTip: "Never just identify a device — always explain its EFFECT. 'The metaphor creates a sense of... which suggests...'",
  },

  "ell-paper1": {
    topicId: "ell-paper1",
    keyConcepts: [
      "**SL Paper 1**: analyse **1 unseen text** (literary or non-literary) using a guiding question. 1 hour 15 min. 35% of grade.",
      "**Structure your analysis**: Introduction (text type, audience, purpose, thesis) → Body paragraphs (language, structure, tone with evidence) → Conclusion (overall effect).",
      "Focus on: **What is the text saying?** (content) + **How does it say it?** (technique) + **Why?** (purpose/effect).",
      "Use **embedded quotations** — weave short quotes into your sentences rather than long block quotes.",
      "Follow the **guiding question** — it directs your analysis but don't let it limit you if you notice other important features.",
      "**PEEL structure** for each paragraph: Point, Evidence (quote), Explanation, Link (to guiding question/thesis).",
    ],
    examTip: "Spend 5–10 minutes reading and annotating the text before writing. Identify 3–4 key features to discuss in depth rather than many features superficially.",
  },

  "ell-io": {
    topicId: "ell-io",
    keyConcepts: [
      "**Structure**: 10 min prepared presentation + 5 min follow-up questions. **30% of grade**.",
      "Connect **1 literary work** + **1 non-literary text/body of work** through a **global issue**.",
      "Select a **40-line extract** from each text as the basis for your analysis.",
      "**Global issues**: broad, transnational, significant. E.g., identity, power, inequality, environment, technology, gender, migration.",
      "**Assessment criteria**: A: Knowledge & understanding (10), B: Analysis & evaluation (10), C: Focus & organization (10), D: Language (10). Total: 40 marks.",
      "**Preparation tips**: practice with timer, have a clear structure, balance both texts equally, don't just summarize — analyze.",
    ],
    definitions: [
      { term: "Global issue", definition: "A broad, significant, transnational topic that can be explored through both a literary and non-literary text." },
    ],
    examTip: "Choose a global issue that allows genuine, deep connections between both texts — not just a surface-level theme they share.",
  },

  // ============================================================
  // MATH AI SL — remaining topics
  // ============================================================

  "mai-2.3": { topicId: "mai-2.3", keyConcepts: ["**Piecewise linear models**: different linear functions for different intervals. E.g., taxi fare: fixed charge + rate per km.", "Read from graph: identify breakpoints where the gradient changes.", "Creating models from data: plot points, identify pattern, use GDC regression or draw line of best fit.", "Interpret gradient and y-intercept in the context of the data."], examTip: "For piecewise models, write separate equations for each section and state the domain of each piece." },

  "mai-2.4": { topicId: "mai-2.4", keyConcepts: ["**Key graph features**: maximum and minimum values (turning points), x-intercepts (zeros/roots), y-intercept (when x = 0).", "**Symmetry**: a line of symmetry exists for quadratics at x = −b/(2a).", "**Vertex**: the highest or lowest point of a parabola.", "Use GDC to find these features: graph the function and use 'maximum', 'minimum', 'zero' functions."], examTip: "Always read the question — does it ask for the x-value, y-value, or coordinates of the max/min?" },

  "mai-2.7": { topicId: "mai-2.7", keyConcepts: ["**Direct variation**: y = axⁿ (n > 0). As x increases, y increases. E.g., area of circle (A = πr²).", "**Inverse variation**: y = a/xⁿ or y = ax⁻ⁿ. As x increases, y decreases. E.g., time = distance/speed.", "**Cubic models**: f(x) = ax³ + bx² + cx + d. S-shaped curve, can have up to 2 turning points.", "Use GDC regression to find the best model for data."], examTip: "Identify the type of variation from context: 'proportional to' = direct, 'inversely proportional to' = inverse." },

  "mai-2.9": { topicId: "mai-2.9", keyConcepts: ["**Logistic model**: f(x) = L/(1 + Ce⁻ᵏˣ). Models growth with a carrying capacity.", "**L** = carrying capacity (upper limit/horizontal asymptote).", "**Inflection point**: where growth rate is maximum (halfway to L).", "Applications: population growth (limited resources), spread of disease, adoption of technology, rumor spreading."], definitions: [{ term: "Carrying capacity (L)", definition: "The maximum value the logistic function approaches — the upper horizontal asymptote." }], examTip: "The logistic curve starts exponential then levels off. L is the max value, the inflection point is at y = L/2." },

  "mai-3.2": { topicId: "mai-3.2", keyConcepts: ["**Angle of elevation**: angle measured UP from horizontal to an object above.", "**Angle of depression**: angle measured DOWN from horizontal to an object below.", "**Bearings**: measured clockwise from North, always 3 digits (e.g., 045°, 270°).", "Draw clear diagrams — label all angles, distances, and compass directions.", "Combine with trigonometry (sine/cosine rules) or right-angle trig (SOH CAH TOA)."], examTip: "For bearings: always measure clockwise from North. A bearing of 270° = due West. Draw North arrows on your diagram." },

  "mai-3.4": { topicId: "mai-3.4", keyConcepts: ["**Arc length**: l = θ/360 × 2πr (degrees) or l = rθ (radians).", "**Sector area**: A = θ/360 × πr² (degrees) or A = ½r²θ (radians).", "**Radian measure**: 2π radians = 360°. Awareness only — most AI SL work is in degrees.", "Both formulas are in the formula booklet."], examTip: "Check whether the question uses degrees or radians before applying formulas. Your GDC must be in the correct mode." },

  "mai-3.6": { topicId: "mai-3.6", keyConcepts: ["**Equation of a line**: y = mx + c (gradient-intercept) or y − y₁ = m(x − x₁) (point-gradient).", "**Gradient**: m = (y₂ − y₁)/(x₂ − x₁).", "**Parallel lines**: same gradient (m₁ = m₂).", "**Perpendicular lines**: gradients multiply to −1 (m₁ × m₂ = −1). The perpendicular gradient is the negative reciprocal.", "**Distance between points**: d = √((x₂−x₁)² + (y₂−y₁)²). **Midpoint**: ((x₁+x₂)/2, (y₁+y₂)/2)."], examTip: "For perpendicular bisectors: find midpoint, find negative reciprocal gradient, use point-gradient form." },

  "mai-4.4": { topicId: "mai-4.4", keyConcepts: ["**Range**: max − min. Simple but affected by outliers.", "**Interquartile range (IQR)**: Q3 − Q1. Measures spread of the middle 50%. Not affected by outliers.", "**Standard deviation (σ)**: measures average spread from the mean. Use GDC to calculate.", "Small σ = data clustered near mean. Large σ = data spread out.", "**Variance** = σ². Adding a constant to all values: mean changes, σ stays same. Multiplying all values by k: mean × k, σ × k."], definitions: [{ term: "Interquartile range", definition: "The range of the middle 50% of data: IQR = Q3 − Q1." }], examTip: "Use IQR when there are outliers, standard deviation when the data is roughly symmetric with no outliers." },

  "mai-4.6": { topicId: "mai-4.6", keyConcepts: ["**Spearman's rank correlation (rₛ)**: measures the strength of a monotonic relationship (not just linear).", "Rank the data for each variable, then calculate rₛ using GDC or formula.", "Interpretation: same as Pearson's r (−1 to 1), but works for non-linear monotonic relationships.", "Use when data is ordinal (ranked) or when the relationship is not strictly linear."], definitions: [{ term: "Spearman's rₛ", definition: "A measure of the strength and direction of the monotonic relationship between two ranked variables." }], examTip: "If asked to compare Pearson's r and Spearman's rₛ: Pearson measures linear, Spearman measures monotonic (any consistently increasing/decreasing pattern)." },

  "mai-4.7": { topicId: "mai-4.7", keyConcepts: ["**Probability**: P(A) = number of favorable outcomes / total outcomes. Always between 0 and 1.", "**Complementary events**: P(A') = 1 − P(A). If P(rain) = 0.3, then P(no rain) = 0.7.", "**Expected number of outcomes** = n × P. E.g., roll die 60 times → expected sixes = 60 × 1/6 = 10.", "**Experimental vs theoretical probability**: experimental is from data, theoretical is calculated."], definitions: [{ term: "Probability", definition: "A measure of how likely an event is to occur, ranging from 0 (impossible) to 1 (certain)." }], examTip: "Probability answers should be given as fractions, decimals, or percentages — be consistent and follow the question's format." },

  "mai-4.9": { topicId: "mai-4.9", keyConcepts: ["**Addition rule**: P(A∪B) = P(A) + P(B) − P(A∩B). For mutually exclusive: P(A∪B) = P(A) + P(B).", "**Multiplication rule**: P(A∩B) = P(A) × P(B|A). For independent events: P(A∩B) = P(A) × P(B).", "**Conditional probability**: P(A|B) = P(A∩B)/P(B).", "Test for independence: events are independent if P(A|B) = P(A), or equivalently P(A∩B) = P(A)×P(B)."], examTip: "Draw a Venn diagram or tree diagram to visualize the problem before applying formulas." },

  "mai-4.10": { topicId: "mai-4.10", keyConcepts: ["**Discrete random variable X**: takes specific values (whole numbers usually). Each value has a probability.", "**Probability distribution**: table/list of all possible values and their probabilities. All probabilities sum to 1.", "**Expected value E(X)**: the mean of the distribution. E(X) = Σ(x × P(X=x)).", "Interpretation: E(X) is the long-run average if the experiment is repeated many times."], definitions: [{ term: "Expected value E(X)", definition: "The weighted average of all possible values of a random variable: E(X) = Σ(xᵢ × pᵢ)." }], examTip: "E(X) doesn't have to be a possible outcome. E.g., expected value of a die roll = 3.5." },

  "mai-4.14": { topicId: "mai-4.14", keyConcepts: ["**Goodness of fit test**: tests whether observed data fits an expected distribution.", "**H₀**: data follows the expected distribution. **H₁**: data does not follow the expected distribution.", "Steps: same as χ² independence test but with one variable. Degrees of freedom = number of categories − 1.", "Expected frequencies should all be ≥ 5 (combine categories if needed).", "Compare p-value to significance level to make decision."], examTip: "Degrees of freedom = k − 1 (where k = number of categories). This is different from the independence test!" },

  "mai-5.2": { topicId: "mai-5.2", keyConcepts: ["**f'(x) > 0**: function is increasing (going up).", "**f'(x) < 0**: function is decreasing (going down).", "**f'(x) = 0**: stationary point (potential max, min, or inflection).", "From the graph of f'(x): where f'(x) crosses the x-axis = stationary point of f(x). Where f'(x) is above x-axis = f is increasing."], examTip: "Be able to sketch f'(x) from the graph of f(x) and vice versa. This is a very common exam question." },

  "mai-5.4": { topicId: "mai-5.4", keyConcepts: ["**Tangent line**: touches the curve at one point, has the same gradient as the curve at that point.", "To find tangent at x = a: gradient = f'(a), point = (a, f(a)), equation: y − f(a) = f'(a)(x − a).", "**Normal line**: perpendicular to the tangent at the same point.", "Normal gradient = −1/f'(a) (negative reciprocal of tangent gradient)."], examTip: "Questions often ask for the tangent OR normal — read carefully. The normal is perpendicular, not parallel!" },

  "mai-5.9": { topicId: "mai-5.9", keyConcepts: ["Same as 5.5 but applied to real-world problems: maximize profit, minimize cost, optimize dimensions.", "Steps: 1. Define variables. 2. Write the function to optimize. 3. Differentiate. 4. Set f'(x) = 0. 5. Solve. 6. Verify max/min. 7. Answer in context.", "Often involves a **constraint** that lets you write the function in one variable.", "Use GDC for complex functions that are hard to differentiate by hand."], examTip: "Show all working clearly. State the answer in context with units. Verify it's a max or min (not just a stationary point)." },

  // ============================================================
  // BUSINESS MANAGEMENT HL — remaining topics
  // ============================================================

  "bm-1.3": { topicId: "bm-1.3", keyConcepts: ["A **mission statement** defines the business's purpose and core values — WHY it exists.", "A **vision statement** describes where the business wants to be in the future.", "**Strategic objectives**: long-term goals (3-5 years). **Tactical objectives**: short-term actions to achieve strategic goals.", "**SMART objectives**: Specific, Measurable, Achievable, Relevant, Time-bound.", "**CSR (Corporate Social Responsibility)**: acting ethically and considering impact on stakeholders, society, and environment beyond legal obligations."], definitions: [{ term: "Mission statement", definition: "A brief statement of why the business exists — its purpose, values, and what it aims to achieve." }, { term: "CSR", definition: "Corporate Social Responsibility — a business voluntarily going beyond legal requirements to benefit society and the environment." }], examTip: "Evaluate whether a company's mission statement matches its actual behaviour — IB rewards critical analysis." },

  "bm-1.6": { topicId: "bm-1.6", keyConcepts: ["**MNC (Multinational Company)**: operates in more than one country.", "Reasons: access to new markets, lower production costs, avoid trade barriers (tariffs/quotas), access to resources and talent.", "**Advantages for host country**: job creation, tax revenue, technology/skills transfer, infrastructure development.", "**Disadvantages for host country**: profit repatriation, cultural erosion, environmental damage, exploitation of labour, crowding out local businesses.", "MNCs wield significant power — can influence government policy and shift production globally."], definitions: [{ term: "MNC", definition: "A company that operates in two or more countries, with its headquarters in one country." }], examTip: "Always discuss BOTH host country AND home country impacts. Use real-world MNC examples in your answers." },

  "bm-2.1": { topicId: "bm-2.1", keyConcepts: ["**HRM (Human Resource Management)**: planning, recruiting, training, appraising, and managing the workforce.", "**Internal factors**: corporate culture, budget, existing workforce skills, organizational structure.", "**External factors**: labour market, technology, legislation (minimum wage, equality), economic conditions, demographics.", "**Workforce planning**: ensuring the right number of employees with the right skills are in the right place at the right time.", "**Resistance to change**: fear of unknown, loss of control, bad timing, lack of trust. Overcome with communication, training, involvement."], definitions: [{ term: "HRM", definition: "Human Resource Management — the strategic approach to managing an organization's people." }], examTip: "Link HRM decisions to business objectives — show how workforce planning supports the overall strategy." },

  "bm-2.2": { topicId: "bm-2.2", keyConcepts: ["**Organizational structure**: the formal system of authority, communication, roles, and workflow.", "**Tall structure**: many layers, narrow span of control. More supervision but slower communication.", "**Flat structure**: few layers, wide span of control. Faster communication but managers may be overloaded.", "**Matrix structure**: employees report to both functional manager and project manager. Flexible but can cause confusion.", "**Delegation**: passing authority to subordinates. Motivates employees but requires trust and training.", "**Span of control**: number of subordinates a manager directly supervises. Wide = more delegation, narrow = more control."], definitions: [{ term: "Chain of command", definition: "The formal line of authority from top to bottom of an organization." }, { term: "Delegation", definition: "Passing decision-making authority from a manager to a subordinate." }], examTip: "Draw organization charts to illustrate your points. Recommend structural changes based on the specific business context." },

  "bm-2.3": { topicId: "bm-2.3", keyConcepts: ["**Management**: organizing, planning, controlling resources. **Leadership**: inspiring and motivating people toward a vision.", "**Autocratic**: leader decides alone. Fast but can lower morale. Best in crises or with unskilled workers.", "**Paternalistic**: leader decides but considers employees' welfare. 'Father figure'. Can be patronizing.", "**Democratic**: consults team before deciding. Higher morale and creativity but slower decisions.", "**Laissez-faire**: hands-off. Employees decide. Works with highly skilled, motivated teams. Risk of lack of direction.", "**Situational leadership**: adapts style to the situation, task, and maturity of employees. Most flexible approach."], definitions: [{ term: "Leadership style", definition: "The approach a leader uses to provide direction, motivate people, and implement plans." }], examTip: "No single leadership style is 'best' — IB wants you to evaluate which is most appropriate for the SPECIFIC situation described." },

  "bm-2.5": { topicId: "bm-2.5", keyConcepts: ["**Organizational culture**: the shared values, beliefs, attitudes, and norms that shape behaviour within a business.", "**Handy's types**: Power (central figure), Role (bureaucratic, clear hierarchy), Task (team/project-based), Person (individuals are central).", "**Strong culture**: clear, shared values → high loyalty, less supervision needed. **Weak culture**: unclear values → inconsistency, low morale.", "**Cultural clashes**: common in mergers/acquisitions where two different cultures collide.", "**Changing culture**: difficult and slow. Requires leadership, communication, new hiring practices, training, and time."], definitions: [{ term: "Organizational culture", definition: "The shared values, beliefs, and norms that influence how employees behave and work together." }], examTip: "Identify the type of culture in a case study and evaluate whether it supports or hinders the business objectives." },

  "bm-2.6": { topicId: "bm-2.6", keyConcepts: ["**Communication**: the transfer of information between a sender and receiver through a channel.", "**Formal**: official channels (reports, meetings, memos). **Informal**: unofficial (conversations, grapevine).", "**Barriers to communication**: language, jargon, noise, information overload, cultural differences, poor medium choice.", "**Communication channels**: face-to-face, email, video call, reports, social media, notice boards.", "Effective communication is essential for motivation, coordination, decision-making, and reducing conflict."], examTip: "When recommending communication improvements, specify the channel AND explain why it suits that specific situation." },

  "bm-2.7": { topicId: "bm-2.7", keyConcepts: ["**Trade unions**: organizations that represent workers' interests — negotiate pay, conditions, job security.", "**Collective bargaining**: negotiation between unions and employers on behalf of all workers.", "**Sources of conflict**: pay disputes, redundancies, working conditions, management decisions, restructuring.", "**Conflict resolution**: conciliation (third party facilitates), arbitration (third party decides), mediation, no-strike agreements.", "Strong unions can improve conditions but may increase costs and reduce management flexibility."], definitions: [{ term: "Collective bargaining", definition: "Negotiation between trade unions and employers over pay, conditions, and other employment terms." }], examTip: "Discuss union impact from BOTH perspectives — benefits for workers AND implications for the business." },

  "bm-3.1": { topicId: "bm-3.1", keyConcepts: ["**Role of finance**: provide funds for operations, enable planning and decision-making, measure performance.", "**Capital expenditure**: spending on long-term assets (buildings, machinery, vehicles). Appears on balance sheet.", "**Revenue expenditure**: day-to-day running costs (wages, rent, materials). Appears on profit & loss account.", "Businesses need finance for: start-up, expansion, cash flow management, emergencies, R&D."], definitions: [{ term: "Capital expenditure", definition: "Spending on long-term assets that will benefit the business for more than one year." }, { term: "Revenue expenditure", definition: "Spending on day-to-day operations — consumed within the current financial year." }], examTip: "Classify each cost correctly as capital or revenue expenditure — this affects which financial statement it appears on." },

  "bm-3.2": { topicId: "bm-3.2", keyConcepts: ["**Internal sources**: retained profit (most common, no interest), sale of assets (quick but loses resources), reducing stock.", "**External sources**: bank loans (fixed repayment), overdrafts (flexible, short-term), share capital, venture capital, crowdfunding, leasing, trade credit, microfinance, business angels.", "**Short-term**: overdraft, trade credit (under 1 year). **Long-term**: loans, shares, debentures (over 1 year).", "Choice depends on: amount needed, time period, cost, risk tolerance, business type, control implications."], definitions: [{ term: "Retained profit", definition: "Profit kept in the business after dividends are paid — the most common source of finance." }, { term: "Crowdfunding", definition: "Raising small amounts of money from a large number of people, usually via online platforms." }], examTip: "For case studies, recommend the most APPROPRIATE source — consider the business's size, type, and situation." },

  "bm-3.3": { topicId: "bm-3.3", keyConcepts: ["**Fixed costs**: don't change with output (rent, salaries, insurance). Must be paid even if output = 0.", "**Variable costs**: change with output (raw materials, packaging, direct labour). Zero when output = 0.", "**Semi-variable costs**: have fixed and variable components (electricity: standing charge + usage).", "**Total cost** = Fixed costs + Variable costs. **Average cost** = Total cost / Quantity.", "**Revenue** = Price × Quantity sold. Different revenue streams can reduce risk."], definitions: [{ term: "Fixed costs", definition: "Costs that remain the same regardless of the level of output." }, { term: "Variable costs", definition: "Costs that change in direct proportion to the level of output." }], examTip: "Draw and label a cost/revenue graph showing FC, VC, TC, and TR. Know how each changes with output." },

  "bm-3.4": { topicId: "bm-3.4", keyConcepts: ["**Profit & Loss account**: shows revenue, costs, and profit over a period. Revenue − COGS = Gross Profit. Gross Profit − Expenses = Net Profit.", "**Balance sheet**: snapshot of assets, liabilities, and equity at a point in time. Assets = Liabilities + Equity.", "**Assets**: what the business owns. Current (cash, stock, debtors) and Non-current (property, equipment).", "**Liabilities**: what the business owes. Current (overdraft, creditors) and Non-current (long-term loans).", "**Intangible assets**: goodwill, patents, trademarks, brand value. Have value but no physical form.", "**Depreciation** (HL): reduction in asset value over time. Straight-line: equal amount each year. Reducing balance: percentage of remaining value."], definitions: [{ term: "Balance sheet", definition: "A financial statement showing a business's assets, liabilities, and equity at a specific date." }], examTip: "Know the structure of both statements. Be able to calculate gross and net profit from given data." },

  "bm-3.6": { topicId: "bm-3.6", keyConcepts: ["**Stock turnover** = COGS / Average stock. How many times stock is sold and replaced per year. Higher = more efficient.", "**Debtor days** = (Debtors / Revenue) × 365. Average time customers take to pay. Lower is better.", "**Creditor days** = (Creditors / COGS) × 365. Average time to pay suppliers. Higher gives more time but may damage relationships.", "**Gearing ratio** = (Long-term liabilities / Capital employed) × 100%. Above 50% = highly geared = more risk."], definitions: [{ term: "Gearing ratio", definition: "The proportion of a business's capital that comes from long-term borrowing — higher gearing = higher financial risk." }], examTip: "Interpret ratios comparatively — over time, against competitors, or against industry averages. Ratios alone mean little." },

  "bm-3.7": { topicId: "bm-3.7", keyConcepts: ["**Cash flow**: the movement of money in and out of a business. NOT the same as profit.", "**Cash flow forecast**: predicts future inflows and outflows. Opening balance + Inflows − Outflows = Closing balance.", "A profitable business can FAIL if it runs out of cash (cash flow crisis).", "**Causes of cash flow problems**: overtrading, seasonal demand, late payments, overinvestment, poor planning.", "**Solutions**: negotiate better credit terms, reduce costs, increase prices, sell assets, overdraft, factoring."], definitions: [{ term: "Cash flow", definition: "The movement of money into and out of a business over a period of time." }, { term: "Working capital", definition: "Current assets minus current liabilities — the money available for day-to-day operations." }], examTip: "Distinguish cash flow from profit clearly. A business can be profitable but cash-poor if customers pay late." },

  "bm-3.8": { topicId: "bm-3.8", keyConcepts: ["**Payback period**: time to recover the initial investment. Quick, simple, but ignores time value of money and cash flows after payback.", "**ARR (Average Rate of Return)**: (Average annual profit / Initial investment) × 100%. Easy to compare but ignores timing.", "**NPV (Net Present Value)** (HL): discounts future cash flows to present value using a discount rate. NPV > 0 = worthwhile investment.", "NPV accounts for the **time value of money**: $1 today is worth more than $1 in the future.", "Compare projects using all three methods — they may give different recommendations."], definitions: [{ term: "Payback period", definition: "The time taken for an investment to generate enough cash flows to recover its initial cost." }, { term: "NPV", definition: "The sum of all discounted future cash flows minus the initial investment — positive NPV = good investment." }], examTip: "NPV is the most sophisticated method — if asked to recommend, prioritize NPV over payback or ARR." },

  "bm-3.9": { topicId: "bm-3.9", keyConcepts: ["A **budget** is a financial plan for a future period — sets targets for revenue and spending.", "**Variance analysis**: comparing budgeted figures to actual figures. Favourable = better than expected. Adverse = worse.", "**Revenue budget**: expected income. **Cost budget**: planned spending. **Profit budget**: revenue − cost budgets.", "Budgets help with planning, coordination, control, motivation, and performance evaluation.", "Limitations: time-consuming, may be inaccurate, can be demotivating if unrealistic, may lead to budget padding."], definitions: [{ term: "Variance", definition: "The difference between budgeted and actual figures — favourable (positive) or adverse (negative)." }], examTip: "When analyzing variances, always suggest REASONS for the variance and ACTIONS to address adverse variances." },

  "bm-4.1": { topicId: "bm-4.1", keyConcepts: ["**Market orientation**: decisions driven by market research and customer needs. More responsive but expensive.", "**Product orientation**: focus on product quality and innovation first. Risk: product may not match demand.", "**Market share** = (Company sales / Total market sales) × 100%. **Market growth** = change in market size over time.", "**Social marketing**: considering societal wellbeing alongside customer satisfaction and company profit.", "**Relationship marketing**: building long-term customer relationships rather than focusing on individual transactions."], examTip: "Evaluate whether a business should be market-oriented or product-oriented based on their industry and competitive environment." },

  "bm-4.2": { topicId: "bm-4.2", keyConcepts: ["**Segmentation**: dividing the market into groups. Bases: demographic (age, gender, income), geographic, psychographic (lifestyle, values), behavioural (usage, loyalty).", "**Targeting**: choosing which segment(s) to focus on.", "**Positioning**: creating a distinct image in consumers' minds relative to competitors. Positioning map: 2 variables (e.g., price vs quality).", "**Niche market**: small, specific segment. Less competition but smaller market. **Mass market**: broad audience, economies of scale.", "**USP (Unique Selling Point)**: what makes the product different/better than competitors."], definitions: [{ term: "Market segmentation", definition: "Dividing a market into distinct groups of consumers with similar needs or characteristics." }, { term: "USP", definition: "Unique Selling Point — the distinctive benefit that sets a product apart from competitors." }], examTip: "Use a positioning map to show where a product sits relative to competitors — great visual tool for analysis." },

  "bm-4.3": { topicId: "bm-4.3", keyConcepts: ["**Sales forecasting**: predicting future sales based on past data and trends.", "**Time series analysis**: examining data over time to identify trends, seasonal patterns, cyclical variations, and random fluctuations.", "**Moving averages**: smooth out fluctuations to reveal the underlying trend. 3-point, 4-point, etc.", "**Extrapolation**: extending the trend line into the future. Useful but assumes past patterns continue.", "Limitations: external shocks, changing consumer tastes, new competitors cannot be predicted from historical data."], definitions: [{ term: "Moving average", definition: "A calculation that averages consecutive data points to smooth out short-term fluctuations and show trends." }], examTip: "Calculate moving averages carefully. State that extrapolation is unreliable — past trends may not continue." },

  "bm-4.4": { topicId: "bm-4.4", keyConcepts: ["**Primary research** (field): collected first-hand — surveys, interviews, focus groups, observations. Specific but expensive and time-consuming.", "**Secondary research** (desk): existing data — reports, government statistics, academic journals, online databases. Cheaper but may be outdated or not specific.", "**Qualitative data**: opinions, feelings, reasons (interviews, focus groups). Rich but hard to generalize.", "**Quantitative data**: numerical, measurable (surveys with scales, sales data). Easy to analyze but may lack depth.", "**Sampling methods**: random, convenience, quota, stratified, snowball."], examTip: "Recommend specific research methods based on the business's budget, time, and what information they need." },

  "bm-4.6": { topicId: "bm-4.6", keyConcepts: ["**International marketing**: selling products in foreign markets.", "**Entry methods**: exporting, licensing/franchising, joint ventures, direct investment (FDI), e-commerce.", "**Challenges**: cultural differences, language barriers, legal/regulatory differences, exchange rate fluctuations, distribution logistics.", "**Localisation**: adapting the product/marketing to local tastes and culture. **Globalisation**: standardizing across markets (lower cost).", "**Glocalization**: think globally, act locally — global brand with local adaptations (e.g., McDonald's menu variations)."], examTip: "Evaluate whether localisation or globalisation is more appropriate for the specific product and market." },

  "bm-5.1": { topicId: "bm-5.1", keyConcepts: ["**Operations management**: the management of the process that transforms inputs into outputs (goods/services).", "Operations interact with all other functions: marketing (what to produce), finance (budgets), HRM (workforce).", "**Sustainability in operations**: reducing waste, energy efficiency, sustainable sourcing, circular economy principles.", "**Efficiency** = actual output / maximum possible output × 100%."], examTip: "Show how operations decisions affect other business functions — IB rewards an integrated approach." },

  "bm-5.2": { topicId: "bm-5.2", keyConcepts: ["**Job production**: one-off custom items (wedding cake, bridge). High quality, expensive, slow.", "**Batch production**: groups of identical items (bakery, clothing). Flexible, moderate cost.", "**Mass/flow production**: continuous large-scale output (cars, electronics). Low unit cost, high setup cost, less flexible.", "**Mass customization**: combining mass production with customization (Nike By You, Dell laptops).", "**Cellular manufacturing**: small teams produce complete units. Combines benefits of job and flow production."], examTip: "Match the production method to the product type, demand level, and business size in case studies." },

  "bm-5.3": { topicId: "bm-5.3", keyConcepts: ["**Lean production**: minimizing waste while maximizing value. **Muda** = any activity that doesn't add value.", "**Kaizen**: continuous improvement by all employees. Small changes, big cumulative effect.", "**Kanban**: visual signal system to trigger production. Pull system — produce only when needed.", "**JIT**: stock arrives exactly when needed. Reduces storage costs but requires reliable suppliers.", "**Cradle-to-cradle**: designing products for perpetual material cycling.", "**Quality control** (reactive): inspecting products after production. **Quality assurance** (proactive): building quality into every process.", "**TQM**: everyone responsible for quality. Customer focus, zero defects goal. **Benchmarking**: comparing practices with industry leaders."], examTip: "Evaluate lean production: great in stable conditions but vulnerable to supply chain disruptions (see COVID-19 impact on JIT)." },

  "bm-5.4": { topicId: "bm-5.4", keyConcepts: ["**Location factors**: proximity to market, suppliers, and labour; transport links; costs (rent, wages); government incentives; infrastructure.", "**Outsourcing**: contracting work to external providers. Reduces costs but risks quality loss and dependency.", "**Offshoring**: moving operations to another country (lower costs). **Reshoring**: bringing operations back home.", "**Insourcing**: bringing outsourced activities back in-house for more control.", "Location decisions are influenced by both **quantitative** (costs, revenue) and **qualitative** (lifestyle, image) factors."], examTip: "Recommend locations using a weighted scoring model — list factors, assign weights, score options, calculate totals." },

  "bm-5.6": { topicId: "bm-5.6", keyConcepts: ["**Supply chain**: the network from raw materials to finished product reaching the consumer.", "**JIT vs JIC**: JIT = no buffer stock, lower costs, higher risk. JIC = buffer stock, higher costs, supply guaranteed.", "**Stock control chart**: shows stock levels over time. Key elements: maximum stock level, reorder level, reorder quantity, lead time, buffer stock.", "**Capacity utilization** = (Actual output / Maximum possible output) × 100%. Low = wasted resources. Near 100% = no flexibility.", "**Make or buy decision**: compare cost to make in-house vs cost to buy from supplier. Consider quality, control, and reliability."], definitions: [{ term: "Lead time", definition: "The time between placing an order and receiving the stock." }, { term: "Buffer stock", definition: "Minimum stock level held as a safety net to prevent stockouts." }], examTip: "Draw and label a stock control diagram showing reorder level, lead time, buffer stock, and reorder quantity." },

  "bm-5.7": { topicId: "bm-5.7", keyConcepts: ["A **crisis** is an unexpected event that threatens the business's operations, reputation, or survival.", "Types: natural disasters, product recalls, data breaches, PR scandals, financial crises, pandemics.", "**Contingency planning**: preparing for potential crises before they happen. Action plans, communication plans, backup systems.", "**Business continuity**: ensuring critical operations can continue during and after a crisis.", "Cost of contingency planning vs cost of not having one — prevention is usually cheaper than crisis response."], examTip: "Evaluate contingency planning: it's an investment not an expense. Discuss costs AND benefits in context." },

  "bm-5.8": { topicId: "bm-5.8", keyConcepts: ["**R&D**: systematic investigation to develop new products, processes, or improve existing ones.", "**Innovation vs invention**: invention = new creation. Innovation = commercially successful application.", "**Intellectual property**: patents (20 years, inventions), copyrights (creative works), trademarks (brand identity).", "R&D is expensive and uncertain — no guarantee of commercial success. But essential for long-term competitiveness.", "First-mover advantage: being first to market can establish brand loyalty and market share."], examTip: "Discuss the risk-reward tradeoff of R&D spending. Link to the company's strategic objectives." },

  "bm-5.9": { topicId: "bm-5.9", keyConcepts: ["**MIS (Management Information Systems)**: systems that collect, process, store, and distribute information for decision-making.", "**Data analytics / Big data**: analyzing large datasets to identify patterns, trends, and insights for business decisions.", "**Cybersecurity**: protecting digital systems, networks, and data from unauthorized access or attacks.", "**AI in business**: automation, chatbots, predictive analytics, personalization, process optimization.", "**Ethical considerations**: data privacy, surveillance, algorithmic bias, job displacement from automation."], examTip: "Evaluate technology adoption: efficiency gains vs costs, job losses, data privacy concerns, and ethical implications." },

  // ============================================================
  // DESIGN TECHNOLOGY HL — remaining topics
  // ============================================================

  "dtech-1.2": { topicId: "dtech-1.2", keyConcepts: ["**Psychological factors**: how users perceive, process, and respond to products.", "**Mental models**: users' internal understanding of how something works. Good design matches expectations.", "**Affordance**: design features that suggest function (handle = pull, button = press, flat plate = push).", "**Likert scale**: measures attitudes on a 5 or 7-point scale (strongly disagree → strongly agree).", "**Semantic differential scale**: measures meaning using opposite adjective pairs (modern–traditional, complex–simple)."], definitions: [{ term: "Affordance", definition: "A design quality that indicates how an object should be used — e.g., a handle affords pulling." }, { term: "Mental model", definition: "A user's internal understanding of how a system works, shaped by prior experience." }], examTip: "When evaluating products, discuss whether the design matches the user's mental model — if not, explain why it causes confusion." },

  "dtech-1.3": { topicId: "dtech-1.3", keyConcepts: ["**Physiological factors**: bodily tolerances and physical capabilities that affect product use.", "**Fatigue**: physical tiredness from sustained or repetitive activity. Design should minimize fatigue.", "**RSI (Repetitive Strain Injury)**: caused by repeated movements. Prevent with ergonomic design and rest breaks.", "**Biomechanics**: study of body mechanics — forces, torque, posture during product use.", "**Safety**: products must not cause harm. Consider sharp edges, toxic materials, electrical hazards, choking risks."], examTip: "Link physiological factors to specific design solutions — e.g., 'curved handle reduces grip fatigue because it distributes pressure evenly'." },

  "dtech-2.1": { topicId: "dtech-2.1", keyConcepts: ["**Resources**: anything used to make products. **Reserves**: known, extractable quantities of a resource.", "**Renewable resources**: can be replenished (timber, solar, wind). **Non-renewable**: finite supply (oil, metals, coal).", "Resource depletion: non-renewables are being consumed faster than they form. Need sustainable alternatives.", "**Material scarcity** drives innovation in recycling, material substitution, and circular economy approaches."], definitions: [{ term: "Renewable resource", definition: "A resource that can be replenished naturally at a rate equal to or faster than consumption." }], examTip: "Discuss the environmental impact of resource extraction AND alternatives — IB values sustainability awareness." },

  "dtech-2.2": { topicId: "dtech-2.2", keyConcepts: ["**Waste hierarchy** (best to worst): Reduce → Reuse → Recycle → Recovery (energy) → Disposal (landfill).", "**Planned obsolescence**: deliberately limiting product lifespan. Types: technological (outdated), psychological (fashion), material (weak parts).", "**Designed longevity**: making products durable, repairable, upgradable. Opposite of planned obsolescence.", "**Extended producer responsibility**: manufacturers responsible for end-of-life management of their products."], definitions: [{ term: "Planned obsolescence", definition: "Intentionally designing products with a limited lifespan to encourage repeat purchases." }], examTip: "Evaluate planned obsolescence ethically: good for business profit but bad for environment. IB wants critical thinking." },

  "dtech-2.3": { topicId: "dtech-2.3", keyConcepts: ["**Embodied energy**: total energy consumed across a product's lifecycle — extraction, manufacturing, transport, use, disposal.", "**Energy sources**: fossil fuels (coal, oil, gas), nuclear, renewables (solar, wind, hydro, geothermal, biomass).", "Products with high embodied energy have larger environmental footprints.", "**Energy storage**: batteries, fuel cells, pumped hydro, compressed air. Important for renewable energy systems."], definitions: [{ term: "Embodied energy", definition: "The total energy required to produce a product from raw material extraction to final assembly." }], examTip: "When comparing materials, consider embodied energy — aluminium has very high embodied energy but is infinitely recyclable." },

  "dtech-2.4": { topicId: "dtech-2.4", keyConcepts: ["**Clean technology**: technologies that reduce environmental impact — pollution prevention, energy efficiency, waste reduction.", "Examples: electric vehicles, solar panels, water filtration, biodegradable packaging, carbon capture.", "Clean tech aims to reduce emissions, conserve resources, and minimize ecological footprint.", "**Pollution prevention** is better than pollution control — stop waste at the source rather than cleaning it up after."], examTip: "Give specific examples of clean technologies and explain how they reduce impact compared to conventional alternatives." },

  "dtech-3.1": { topicId: "dtech-3.1", keyConcepts: ["**Conceptual modelling**: sketching, idea generation, quick visual communication of design intent.", "**Orthographic projection**: 2D technical drawings showing front, side, and plan views with exact dimensions.", "**Isometric drawing**: 3D representation using 30° angles. Shows overall form but not true measurements.", "**Rendering**: adding shading, colour, texture, and light to drawings to make them look realistic.", "**Exploded views**: show how parts fit together. **Sectional views**: show internal features."], examTip: "Use the right drawing type for the right purpose: orthographic for manufacturing, isometric for presentation, sketches for ideation." },

  "dtech-3.2": { topicId: "dtech-3.2", keyConcepts: ["**Physical models**: mock-ups and prototypes made from card, foam, clay, or other materials.", "**CAD (Computer Aided Design)**: digital 2D/3D modelling. Easy to modify, share, simulate, and render.", "**CAM (Computer Aided Manufacture)**: using computer-controlled machines to make products (CNC, laser cutter).", "**3D printing** (additive manufacturing): FDM (fused filament), SLA (resin/laser), SLS (powder/laser). Fast prototyping.", "**Advantages of digital**: easy modification, accurate dimensions, simulation testing, file sharing, CAD-CAM integration."], examTip: "Compare physical and digital modelling: physical is better for user testing feel/ergonomics, digital for precision and iteration." },

  "dtech-4.1": { topicId: "dtech-4.1", keyConcepts: ["**Mechanical properties**: hardness (scratch resistance), toughness (absorbs impact), strength (resists force), elasticity (returns to shape), ductility (drawn into wire), malleability (hammered into sheets), brittleness (breaks without deforming).", "**Thermal properties**: conductivity (heat transfer), expansion, melting point.", "**Electrical properties**: conductivity, resistance, insulation.", "**Optical properties**: transparency, opacity, translucency, colour.", "**Aesthetic properties**: texture, colour, surface finish — affect user perception and appeal."], definitions: [{ term: "Hardness", definition: "Resistance to surface indentation or scratching." }, { term: "Toughness", definition: "Ability to absorb energy and deform without fracturing." }, { term: "Ductility", definition: "Ability to be drawn into wire without breaking." }], examTip: "For material selection questions, match required properties to the best material — justify with specific property names." },

  "dtech-4.3": { topicId: "dtech-4.3", keyConcepts: ["**One-off (job)**: single unique product. High cost, high quality, skilled labour. E.g., bespoke furniture.", "**Batch production**: set quantities of identical items. Flexible, moderate cost. E.g., bakery products.", "**Mass (flow) production**: continuous, high-volume output. Low unit cost, high setup cost. E.g., car manufacturing.", "**Continuous production**: 24/7 non-stop production. Very high volume. E.g., oil refining, chemicals.", "Choice depends on: demand volume, customization needs, budget, workforce skills, product type."], examTip: "Match the scale of production to the context — explain WHY that method is most appropriate for the specific product." },

  "dtech-4.4": { topicId: "dtech-4.4", keyConcepts: ["**Casting**: pouring molten material into a mould. Sand casting (metal), injection moulding (plastic), slip casting (ceramics).", "**Forming**: shaping materials using force. Press forming, vacuum forming, blow moulding, forging.", "**Joining**: permanent (welding, brazing, adhesives) or temporary (screws, bolts, clips, snap-fits).", "**Cutting**: sawing, laser cutting, CNC milling, turning (lathe), drilling.", "**Finishing**: painting, varnishing, anodizing, powder coating, polishing. Protects and enhances appearance."], examTip: "For each manufacturing process, know: what materials it works with, advantages, disadvantages, and typical products." },

  "dtech-5.2": { topicId: "dtech-5.2", keyConcepts: ["**Design thinking**: human-centred, iterative approach. Empathize → Define → Ideate → Prototype → Test.", "**SCAMPER**: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse. Idea generation technique.", "**Brainstorming**: group idea generation. No criticism, quantity over quality, build on others' ideas.", "**Lateral thinking**: approaching problems from new angles rather than logical step-by-step (Edward de Bono)."], examTip: "Use SCAMPER as a framework when asked to suggest improvements to an existing product." },

  "dtech-5.3": { topicId: "dtech-5.3", keyConcepts: ["**Product Life Cycle**: Introduction (low sales, high costs) → Growth (rising sales) → Maturity (peak, competition) → Decline (falling sales).", "**Extension strategies**: redesign, new markets, price reduction, new features, new packaging, rebranding.", "**Planned obsolescence**: intentionally limiting lifespan. Technological, psychological, or material obsolescence.", "Marketing and pricing strategies change at each PLC stage."], examTip: "Identify which PLC stage a product is in and recommend appropriate strategies for that stage." },

  "dtech-5.4": { topicId: "dtech-5.4", keyConcepts: ["**Rogers' Diffusion of Innovation**: how new products spread through a population over time.", "**Adopter categories**: Innovators (2.5%), Early Adopters (13.5%), Early Majority (34%), Late Majority (34%), Laggards (16%).", "**Chasm**: gap between Early Adopters and Early Majority — many innovations fail to cross this.", "**Five characteristics affecting adoption**: Relative advantage, Compatibility, Complexity, Trialability, Observability."], definitions: [{ term: "Diffusion", definition: "The process by which an innovation spreads through a population over time." }], examTip: "Explain why a specific product succeeded or failed using Rogers' adopter categories and the five characteristics." },

  "dtech-6.1": { topicId: "dtech-6.1", keyConcepts: ["What makes a design 'classic': timelessness, iconic status, wide recognition, influence on later designs.", "**Bauhaus** (1919-1933): 'Form follows function.' Minimalism, geometric shapes, industrial materials. Gropius, Breuer, Mies van der Rohe.", "**Art Deco** (1920s-30s): luxury, bold geometry, rich colours, exotic materials. Chrysler Building, Lalique.", "**Modernism** (mid-20th C): clean lines, functionalism, 'less is more'. Dieter Rams, Le Corbusier.", "**Memphis** (1980s): anti-functional, bold colours, playful, postmodern. Ettore Sottsass.", "**Form follows function** vs **Form follows emotion**: functional vs experiential design philosophy."], examTip: "Be able to analyze iconic products: identify the design movement, explain design principles, discuss why it's considered 'classic'." },

  "dtech-8": { topicId: "dtech-8", keyConcepts: ["**Sustainable development**: meeting present needs without compromising future generations' ability to meet theirs (Brundtland 1987).", "**Triple bottom line**: People (social), Planet (environmental), Profit (economic). All three must be balanced.", "**Life Cycle Assessment (LCA)**: evaluates environmental impact from cradle to grave.", "**Circular economy**: design out waste, keep products/materials in use, regenerate natural systems. Opposite of linear 'take-make-dispose'.", "**Biomimicry**: design inspired by nature. Velcro (burrs), bullet train (kingfisher), buildings (termite mounds).", "**UN Sustainable Development Goals**: 17 global goals for 2030 — relevant to design decisions."], definitions: [{ term: "Circular economy", definition: "An economic model that eliminates waste by keeping materials in use through reuse, repair, and recycling." }, { term: "Biomimicry", definition: "Innovation inspired by studying and imitating nature's time-tested strategies and designs." }], examTip: "Reference specific SDGs when discussing sustainability in design. Show awareness of the circular economy vs linear economy." },

  "dtech-9": { topicId: "dtech-9", keyConcepts: ["**CSR**: businesses considering social and environmental impact alongside profit. Voluntary, beyond legal requirements.", "**Market segmentation**: geographic, demographic, psychographic, behavioural. Identifies target groups.", "**Marketing mix (4Ps)**: Product, Price, Place, Promotion. Adapted for each market segment.", "**Branding**: creating a distinctive identity. Brand loyalty, brand equity, brand positioning.", "**Market research**: primary (surveys, focus groups) and secondary (reports, data). Qualitative and quantitative."], examTip: "Link design decisions to market research findings — show how understanding the target market shapes the product." },

  // ============================================================
  // DEUTSCH A HL — remaining topics
  // ============================================================

  "dt-aoe3": { topicId: "dt-aoe3", keyConcepts: ["Zentrale Frage: **Wie stehen Texte im Dialog miteinander?**", "**Intertextualität**: Texte existieren nicht isoliert — sie verweisen auf andere Texte, parodieren, zitieren oder widersprechen ihnen.", "Vergleich von Texten zeigt **gemeinsame oder gegensätzliche Werte, Einstellungen und Überzeugungen**.", "Formen der Intertextualität: Zitat, Anspielung, Parodie, Pastiche, Adaptation, Hommage.", "Wie verändert sich die Bedeutung eines Textes, wenn man ihn neben einen anderen stellt?"], examTip: "Beim Textvergleich: nicht nur Gemeinsamkeiten zeigen, sondern besonders die Unterschiede und ihre Bedeutung herausarbeiten." },

  "dt-concepts": { topicId: "dt-concepts", keyConcepts: ["Die **7 Schlüsselkonzepte** durchziehen den gesamten Kurs und sollten in jeder Analyse berücksichtigt werden:", "**Identität**: Wie spiegeln Texte Identität wider? Persönliche, kulturelle, nationale Identität.", "**Kultur**: Wie sind Texte durch kulturelle Kontexte geprägt? Welche kulturellen Werte zeigen sie?", "**Kreativität**: Wie und warum treffen Autoren kreative Entscheidungen? Stil, Form, Sprache.", "**Kommunikation**: Wie wird Bedeutung vermittelt und empfangen? Erfolgreiche/gescheiterte Kommunikation.", "**Perspektive**: Wessen Standpunkt wird dargestellt? Welche Vorurteile gibt es? Wie beeinflusst die Perspektive des Lesers?", "**Transformation**: Wie werden Texte verändert, angepasst, in neue Kontexte gestellt?", "**Repräsentation**: Wie stellt Sprache die Welt dar? Welche Realitäten werden gezeigt/ausgeblendet?"], examTip: "Nenne in jeder Analyse mindestens 1-2 Schlüsselkonzepte explizit. Das zeigt dem Prüfer konzeptionelles Verständnis." },

  "dt-gattungen": { topicId: "dt-gattungen", keyConcepts: ["**Epik** (erzählende Texte): Roman, Novelle, Kurzgeschichte, Fabel, Märchen. Merkmale: Erzähler, Prosa, Handlung.", "**Lyrik** (Dichtung): Gedichte. Merkmale: Verse, Strophen, Reimschema, Metrum, verdichtete Sprache.", "**Dramatik** (Theatertexte): Tragödie, Komödie, Tragikomödie. Merkmale: Dialog, Regieanweisungen, Akte/Szenen.", "**Erzählperspektiven**: Ich-Erzähler (subjektiv, begrenzt), auktorialer Erzähler (allwissend), personaler Erzähler (3. Person, eine Figur).", "**Nicht-literarische Textarten**: Rede, Kommentar, Leitartikel, Blog, Brief, Tagebuch, Werbung, Interview, Broschüre."], definitions: [{ term: "Epik", definition: "Literarische Gattung der erzählenden Texte — Romane, Novellen, Kurzgeschichten." }, { term: "Lyrik", definition: "Literarische Gattung der Dichtung — Gedichte in Versen und Strophen." }, { term: "Dramatik", definition: "Literarische Gattung der Bühnentexte — Theaterstücke mit Dialog und Regieanweisungen." }], examTip: "Kenne die Merkmale jeder Gattung und erkenne die Textart schnell — besonders wichtig für Paper 1." },

  "dt-paper1": { topicId: "dt-paper1", keyConcepts: ["**Paper 1 HL**: Analyse von **2 unbekannten nicht-literarischen Texten** anhand einer Leitfrage. 2 Stunden 15 Min. **35% der Note**.", "**Struktur**: Einleitung (Textart, Zweck, Publikum, These) → Hauptteil (Sprache, Struktur, Ton mit Belegen) → Schluss (Gesamtwirkung).", "Fokus auf: **WAS** sagt der Text (Inhalt) + **WIE** sagt er es (Technik/Stil) + **WARUM** (Zweck/Wirkung).", "**Eingebettete Zitate** verwenden — kurze Zitate in eigene Sätze einweben.", "Die **Leitfrage** gibt die Richtung vor, aber beschränke dich nicht darauf, wenn du weitere wichtige Merkmale entdeckst."], examTip: "5-10 Minuten zum Lesen und Annotieren vor dem Schreiben. 3-4 Hauptmerkmale tiefgehend analysieren statt viele oberflächlich." },

  "dt-paper2": { topicId: "dt-paper2", keyConcepts: ["**Paper 2**: Vergleichender Aufsatz über **mindestens 2 literarische Werke**. 1 Stunde 45 Min. **25% der Note**.", "Du wählst **eine von 4 Fragen** — alle sind offen formuliert und erlauben verschiedene Werke.", "**Vergleich** ist zentral: nicht zwei getrennte Analysen, sondern echte Verbindungen und Kontraste.", "**Struktur**: Einleitung (These + Werke nennen) → Hauptteil (thematisch vergleichen, nicht werkweise) → Schluss (Synthese).", "Belege mit **konkreten Textbeispielen** — Zitate, Szenen, Figuren, Stilmittel."], examTip: "Vergleiche THEMATISCH, nicht werkweise. Statt 'Werk A, dann Werk B' besser: 'Beide Werke zeigen X, aber auf unterschiedliche Weise...'" },

  "dt-sprache": { topicId: "dt-sprache", keyConcepts: ["Sprache ist nicht nur Kommunikationsmittel — sie **formt und spiegelt Identität**.", "**Standardsprache**: offizielle, normierte Sprache. Wird in Bildung, Medien, formellen Kontexten verwendet.", "**Dialekt**: regionale Sprachvariante (Bayerisch, Schweizerdeutsch, Wienerisch). Teil kultureller Identität.", "**Soziolekt**: Sprachvarietät einer sozialen Gruppe (Jugendsprache, Fachsprache, Bildungssprache).", "**Code-Switching**: Wechsel zwischen Sprachen/Varietäten je nach Situation, Gesprächspartner, Kontext.", "**Sprache und Macht**: Wer bestimmt, was 'korrekte' Sprache ist? Sprachpolitik, Sprachdiskriminierung."], definitions: [{ term: "Code-Switching", definition: "Wechsel zwischen verschiedenen Sprachen oder Sprachvarietäten innerhalb eines Gesprächs oder je nach Situation." }, { term: "Soziolekt", definition: "Eine Sprachvarietät, die für eine bestimmte soziale Gruppe charakteristisch ist." }], examTip: "Analysiere, wie Figuren in literarischen Texten durch ihre Sprache charakterisiert werden — Dialekt, Register, Wortwahl." },

  "dt-texte": { topicId: "dt-texte", keyConcepts: ["HL studiert **6 Werke** insgesamt über die drei Areas of Exploration verteilt.", "Mindestens **2 Werke in der Originalsprache** (Deutsch) und mindestens **2 Werke in Übersetzung**.", "Werke müssen aus **verschiedenen literarischen Gattungen** stammen (Prosa, Lyrik, Dramatik).", "Werke aus **verschiedenen Epochen und Regionen** für Vielfalt der Perspektiven.", "Werke werden von der **IB Prescribed Reading List (PRL)** ausgewählt.", "Neben literarischen Werken werden auch **nicht-literarische Texte** und Textkorpora studiert."], examTip: "Wähle Werke, die sich gut vergleichen lassen und die du wirklich gut kennst — Tiefe schlägt Breite." },

  // ============================================================
  // ENGLISH A L&L SL — remaining topics
  // ============================================================

  "ell-aoe3": { topicId: "ell-aoe3", keyConcepts: ["Central question: **How do texts connect with, inform, and influence each other?**", "**Intertextuality**: texts don't exist in isolation — they reference, respond to, and transform other texts.", "Comparing texts reveals **shared or divergent values, attitudes, and beliefs**.", "Forms: allusion, parody, pastiche, adaptation, homage, quotation, genre conventions.", "How does placing one text alongside another **change the meaning** of each?"], examTip: "When comparing texts, don't just list similarities — analyze WHY the differences matter and what they reveal about values/perspectives." },

  "ell-concepts": { topicId: "ell-concepts", keyConcepts: ["The **7 key concepts** should be woven into every analysis across the course:", "**Identity**: How do texts construct, express, and reflect identity?", "**Culture**: How are texts shaped by and how do they shape cultural contexts?", "**Creativity**: How and why do writers/speakers make particular creative choices?", "**Communication**: How and why do we communicate through language and texts?", "**Perspective**: How do texts offer, shape, and challenge perspectives? Whose voice is heard?", "**Transformation**: How are texts transformed across time, place, and medium?", "**Representation**: How does language represent the world? Whose reality is shown?"], examTip: "Explicitly name 1-2 key concepts in your analysis — this shows the examiner you're engaging with the course framework." },

  "ell-text-types": { topicId: "ell-text-types", keyConcepts: ["**Speeches**: rhetorical questions, rule of three, direct address, emotive language, repetition, anecdotes.", "**News articles**: inverted pyramid structure, objectivity, factual, 5W+H (who, what, when, where, why, how).", "**Editorials/Opinion pieces**: subjective, persuasive, represent the publication's stance.", "**Advertisements**: visual and verbal persuasion, target audience, emotional appeal, brand identity.", "**Blogs**: personal voice, informal tone, direct audience engagement, hyperlinks, comments.", "**Letters**: formal/informal, specific audience, clear purpose (persuade, inform, complain, request).", "Each text type has **conventions** — knowing them helps you analyze HOW and WHY the author makes choices."], examTip: "In Paper 1, identifying the text type correctly is crucial — it determines which conventions and features to analyze." },

  "ell-language-analysis": { topicId: "ell-language-analysis", keyConcepts: ["**Tone**: the author's/speaker's attitude toward the subject (angry, ironic, celebratory, melancholic).", "**Register**: level of formality — formal (academic, legal), informal (conversational), colloquial (slang).", "**Diction**: word choice. Connotation (emotional associations) vs denotation (literal meaning).", "**Syntax**: sentence structure. Short sentences = tension/urgency. Long sentences = flowing/descriptive.", "**Rhetoric**: ethos (credibility), pathos (emotion), logos (logic). The art of persuasion.", "**Imagery**: language that appeals to the senses — visual, auditory, tactile, olfactory, gustatory.", "**Figurative language**: metaphor, simile, personification, hyperbole — language beyond literal meaning."], definitions: [{ term: "Register", definition: "The level of formality in language, determined by audience, purpose, and context." }, { term: "Diction", definition: "An author's choice of words — the specific vocabulary used and its effect on meaning." }], examTip: "Don't just identify language features — always explain the EFFECT on the reader and HOW it serves the text's purpose." },

  "ell-paper2": { topicId: "ell-paper2", keyConcepts: ["**Paper 2 SL**: Comparative essay on **at least 2 literary works** studied. 1 hour 45 min. **35% of grade**.", "Choose **1 of 4 questions** — all are open-ended, allowing various works and approaches.", "**Comparison is key**: don't write two separate essays. Make genuine connections and contrasts throughout.", "**Structure**: Introduction (thesis + name both works) → Body (compare thematically, not work by work) → Conclusion (synthesis).", "Support arguments with **specific evidence** — quotes, scenes, characters, techniques."], examTip: "Compare THEMATICALLY, not sequentially. Instead of 'Work A then Work B', write: 'Both works explore X, but while A uses..., B employs...'" },

  "ell-texts": { topicId: "ell-texts", keyConcepts: ["SL studies **6 works** across the three Areas of Exploration.", "At least **1 work in translation** (studied in Area of Exploration 2: Time and Space).", "Works from at least **2 different literary forms** (e.g., prose fiction AND poetry, or drama AND novel).", "At least **2 works from the IB Prescribed Reading List (PRL)**.", "At least **3 different authors** to ensure diversity of voice and perspective.", "Non-literary texts and bodies of work are also studied alongside the literary works."], examTip: "Choose works you genuinely connect with — authentic engagement produces better analysis than studying 'safe' choices." },
};

// Helper to get notes for a specific topic
export function getTopicNotes(topicId: string): TopicNote | undefined {
  return topicNotes[topicId];
}

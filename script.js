const questionBank = [
  {
    id: 1,
    category: "MSK",
    difficulty: "medium",
    question: "A 28-year-old soccer player is 2 weeks post grade II lateral ankle sprain. Which intervention is MOST appropriate to restore dynamic stability?",
    options: [
      "Aggressive passive stretching into inversion",
      "Single-leg balance with perturbations",
      "Immobilization in walking boot for 4 more weeks",
      "Open-chain knee extensions only"
    ],
    correctIndex: 1,
    explanation: "Progressive proprioceptive and perturbation training best restores neuromuscular control and reduces recurrent sprain risk."
  },
  {
    id: 2,
    category: "Cardio",
    difficulty: "easy",
    question: "A patient with stable CHF reports mild dyspnea during exercise. Which intensity target is MOST appropriate in phase II cardiac rehab?",
    options: [
      "RPE 8-9/10 with frequent Valsalva",
      "RPE 3-4/10 with symptom monitoring",
      "Exercise only in supine to reduce preload",
      "No aerobic exercise is indicated"
    ],
    correctIndex: 1,
    explanation: "Moderate intensity with RPE around 3-4/10 and close symptom/vitals monitoring is appropriate for most stable CHF patients."
  },
  {
    id: 3,
    category: "Neuro",
    difficulty: "medium",
    question: "A patient 3 weeks post right MCA stroke has left neglect and poor safety awareness. What is the BEST immediate strategy during gait training?",
    options: [
      "Place therapist and cues on the neglected side",
      "Avoid visual cues to decrease dependence",
      "Use dual-task cognitive drills immediately",
      "Progress to unassisted community ambulation"
    ],
    correctIndex: 0,
    explanation: "Positioning and cueing on the neglected side promotes attention and improves safety during functional mobility."
  },
  {
    id: 4,
    category: "MSK",
    difficulty: "hard",
    question: "A patient is 6 weeks post ACL reconstruction with patellar tendon autograft. Which finding would MOST likely indicate overloading and need to modify program?",
    options: [
      "Mild quad fatigue after closed-chain exercises",
      "Effusion increase with loss of terminal knee extension",
      "Pain-free stationary cycling for 15 minutes",
      "Single-leg stance for 20 seconds"
    ],
    correctIndex: 1,
    explanation: "Increased effusion and reduced extension are red flags for excessive joint irritation and loading progression should be adjusted."
  },
  {
    id: 5,
    category: "Cardio",
    difficulty: "medium",
    question: "A patient with COPD demonstrates accessory muscle overuse at rest. Which breathing strategy should be emphasized first?",
    options: [
      "Rapid diaphragmatic sniffing",
      "Pursed-lip exhalation with relaxed inspiratory pattern",
      "Breath holding during transfers",
      "Incentive spirometry at maximal speed"
    ],
    correctIndex: 1,
    explanation: "Pursed-lip breathing reduces dynamic airway collapse and helps control respiratory rate and dyspnea."
  },
  {
    id: 6,
    category: "Acute Care",
    difficulty: "hard",
    question: "In acute care, which vital sign response during first ambulation after abdominal surgery warrants immediate termination?",
    options: [
      "Heart rate increase by 12 bpm",
      "SpO2 drop from 96% to 94%",
      "Systolic blood pressure drop of 25 mmHg with dizziness",
      "RPE of 3/10"
    ],
    correctIndex: 2,
    explanation: "A significant symptomatic orthostatic drop in systolic pressure suggests hemodynamic instability and activity should stop."
  },
  {
    id: 7,
    category: "Modalities",
    difficulty: "easy",
    question: "Which is a clear contraindication for continuous therapeutic ultrasound over the treatment area?",
    options: [
      "Subacute muscle strain",
      "Metal implant in a healed fracture site",
      "Known local malignancy",
      "Chronic tendinopathy"
    ],
    correctIndex: 2,
    explanation: "Ultrasound should not be applied over known or suspected malignancy due to risk of adverse tissue effects."
  },
  {
    id: 8,
    category: "Peds",
    difficulty: "easy",
    question: "A caregiver asks when independent walking typically emerges in typical development. What is the BEST response?",
    options: [
      "Around 4-6 months",
      "Around 8-10 months",
      "Around 12 months",
      "After 24 months"
    ],
    correctIndex: 2,
    explanation: "Independent walking commonly emerges around 12 months, with normal variation around this milestone."
  },
  {
    id: 9,
    category: "Geriatrics",
    difficulty: "medium",
    question: "An older adult demonstrates a Trendelenburg gait pattern on the right during stance. Which impairment is MOST likely?",
    options: [
      "Right plantarflexor weakness",
      "Left hip flexor tightness",
      "Right hip abductor weakness",
      "Bilateral hamstring weakness"
    ],
    correctIndex: 2,
    explanation: "Contralateral pelvic drop during stance is most associated with ipsilateral hip abductor insufficiency."
  },
  {
    id: 10,
    category: "Neuro",
    difficulty: "hard",
    question: "A patient with T6 complete SCI is being positioned in long sitting. Which precaution is MOST important to reduce skin injury risk?",
    options: [
      "Maintain prolonged pressure over sacrum to improve tolerance",
      "Use frequent pressure relief and inspect bony prominences",
      "Avoid any cushion to improve posture",
      "Restrict all upper extremity movement"
    ],
    correctIndex: 1,
    explanation: "Frequent pressure relief and skin checks at bony landmarks are essential due to impaired sensation and high pressure injury risk."
  },
  {
    id: 11,
    category: "MSK",
    difficulty: "medium",
    question: "A patient with lumbar radiculopathy has increased leg pain with repeated flexion and reduced symptoms with extension. Which initial directional strategy is MOST appropriate?",
    options: [
      "Repeated lumbar flexion in sitting",
      "Extension-biased repeated movement program",
      "Complete bed rest for 1 week",
      "Heavy rotational lifting drills"
    ],
    correctIndex: 1,
    explanation: "When extension centralizes or reduces symptoms, an extension-biased approach is typically indicated initially."
  },
  {
    id: 12,
    category: "Acute Care",
    difficulty: "medium",
    question: "A patient in ICU with line management needs early mobility. Which action is MOST appropriate before transfer training?",
    options: [
      "Disconnect lines independently to simplify movement",
      "Confirm line security, weight-bearing status, and team plan",
      "Delay mobility until all lines are removed",
      "Prioritize gait speed over safety"
    ],
    correctIndex: 1,
    explanation: "Safe early mobility requires line/tube review, medical precautions, and coordinated team communication before movement."
  }
];

const LOCAL_QUESTION_KEY = "jarvisLocalQuestionBank";
const PROCEDURAL_ID_PREFIX = "proc-";
const ALL_CATEGORIES = [
  "MSK",
  "Neuro",
  "Cardio",
  "Modalities",
  "Acute Care",
  "Peds",
  "Geriatrics",
  "Integumentary",
  "Vestibular",
  "Oncology",
  "Women's Health",
  "Ethics",
  "Research",
  "Assistive Devices",
  "Wheelchair / Seating",
  "Neurodegenerative",
  "Imaging",
  "Pharmacology",
  "Differential Diagnosis"
];
const ALL_DIFFICULTIES = ["easy", "medium", "hard"];

const proceduralTemplates = {
  stems: [
    "A patient is seen in outpatient PT with {presentation}. What is the MOST appropriate next step?",
    "During an NPTE-style case review, a patient presents with {presentation}. Which action is BEST?",
    "You are evaluating a patient with {presentation}. Which intervention should be prioritized FIRST?",
    "A clinician identifies {presentation}. What is the MOST defensible decision?"
  ],
  presentations: {
    "MSK": ["subacute joint pain and movement-control deficits", "post-operative tissue irritability with progressive strength deficits"],
    "Neuro": ["new balance impairment and unilateral motor control deficits", "task-specific gait dysfunction after CNS insult"],
    "Cardio": ["mild exertional dyspnea with stable vital responses", "deconditioning with monitored aerobic tolerance"],
    "Modalities": ["localized pain requiring adjunct symptom modulation", "subacute tissue irritation requiring dosing precautions"],
    "Acute Care": ["medical complexity with multiple lines and mobility goals", "post-op orthostatic symptoms during early mobilization"],
    "Peds": ["developmental delay impacting gross motor milestones", "caregiver concerns about age-appropriate mobility"],
    "Geriatrics": ["fall-risk factors with reduced functional reserve", "age-related strength decline and impaired postural control"],
    "Integumentary": ["a wound with drainage and peri-wound skin changes", "pressure injury risk due to prolonged loading"],
    "Vestibular": ["motion-provoked dizziness with positional triggers", "gaze instability and balance deficits"],
    "Oncology": ["cancer-related fatigue during functional training", "treatment-related deconditioning with safety concerns"],
    "Women's Health": ["postpartum pelvic floor dysfunction symptoms", "stress urinary incontinence with activity"],
    "Ethics": ["a conflict between patient autonomy and safety", "a request that challenges professional scope"],
    "Research": ["a clinical question about interpreting study results", "conflicting evidence quality between two interventions"],
    "Assistive Devices": ["an unsafe gait pattern requiring device selection", "energy-conservation needs during ambulation"],
    "Wheelchair / Seating": ["poor pressure distribution in seated posture", "functional mobility limits with current wheelchair setup"],
    "Neurodegenerative": ["progressive motor decline affecting mobility", "bradykinesia and postural instability in daily tasks"],
    "Imaging": ["red-flag symptoms requiring referral consideration", "imaging findings that do not match symptom severity"],
    "Pharmacology": ["medication-related dizziness during therapy", "polypharmacy influencing balance and exercise response"],
    "Differential Diagnosis": ["symptoms that could represent either musculoskeletal or systemic pathology", "non-mechanical pain with atypical progression"]
  },
  correctActions: {
    easy: [
      "Use a conservative, guideline-supported intervention and monitor response.",
      "Start with a low-risk treatment matched to current irritability and function.",
      "Provide patient education and select a safe, measurable first intervention."
    ],
    medium: [
      "Prioritize the impairment driving function and progress based on objective reassessment.",
      "Choose the intervention that addresses safety and the primary functional limitation.",
      "Use a criterion-based progression with close monitoring of symptom behavior."
    ],
    hard: [
      "Integrate risk stratification, functional goals, and contraindications before progressing care.",
      "Select the intervention that balances tissue healing, systems tolerance, and long-term outcomes.",
      "Apply a high-level clinical reasoning approach with immediate reassessment and adjustment."
    ]
  },
  distractors: {
    easy: [
      "Delay all intervention until symptoms fully resolve regardless of function.",
      "Use a high-intensity protocol immediately without reassessment.",
      "Ignore patient goals and choose treatment solely by habit."
    ],
    medium: [
      "Focus on a non-limiting impairment while ignoring the primary functional deficit.",
      "Progress intensity despite worsening objective signs and symptoms.",
      "Use an intervention contraindicated by the current clinical presentation."
    ],
    hard: [
      "Escalate treatment without considering red flags, comorbidities, or risk tolerance.",
      "Select a plan that conflicts with current evidence and patient-specific findings.",
      "Prioritize speed of progression over safety and outcome tracking."
    ]
  },
  explanations: {
    easy: "The best answer emphasizes safety, foundational clinical reasoning, and appropriate initial dosing.",
    medium: "The best answer targets the primary functional driver and uses objective reassessment for progression.",
    hard: "The best answer integrates complex risk-benefit analysis, evidence-informed care, and dynamic clinical decision-making."
  }
};

const categoryFilter = document.getElementById("categoryFilter");
const difficultyFilter = document.getElementById("difficultyFilter");
const generateBtn = document.getElementById("generateBtn");
const questionMeta = document.getElementById("questionMeta");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const feedbackText = document.getElementById("feedbackText");
const explanationText = document.getElementById("explanationText");
const nextBtn = document.getElementById("nextBtn");
const scoreValue = document.getElementById("scoreValue");
const totalValue = document.getElementById("totalValue");
const resetBtn = document.getElementById("resetBtn");

let localQuestionBank = [];
let currentQuestion = null;
let score = 0;
let totalQuestions = 0;
let answered = false;

function pickRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function ensureCategoryCoverage() {
  return ALL_CATEGORIES;
}

function loadLocalQuestions() {
  try {
    const saved = localStorage.getItem(LOCAL_QUESTION_KEY);
    if (!saved) {
      localQuestionBank = [];
      return;
    }

    const parsed = JSON.parse(saved);
    localQuestionBank = Array.isArray(parsed)
      ? parsed.filter((q) => q && q.question && Array.isArray(q.options) && typeof q.correctIndex === "number")
      : [];
  } catch (_error) {
    localQuestionBank = [];
  }
}

function getAllQuestions() {
  return [...questionBank, ...localQuestionBank];
}

function getFilteredQuestions() {
  return getAllQuestions().filter((q) => {
    const categoryMatch = categoryFilter.value === "all" || q.category === categoryFilter.value;
    const difficultyMatch = difficultyFilter.value === "all" || q.difficulty === difficultyFilter.value;
    return categoryMatch && difficultyMatch;
  });
}

function pickRandomQuestion(list) {
  if (!list.length) return null;
  return pickRandomItem(list);
}

function generateProceduralQuestion() {
  const selectedCategory = categoryFilter.value === "all" ? pickRandomItem(ensureCategoryCoverage()) : categoryFilter.value;
  const selectedDifficulty = difficultyFilter.value === "all" ? pickRandomItem(ALL_DIFFICULTIES) : difficultyFilter.value;

  const stem = pickRandomItem(proceduralTemplates.stems);
  const presentationPool = proceduralTemplates.presentations[selectedCategory] || ["a complex presentation requiring clinical reasoning"];
  const presentation = pickRandomItem(presentationPool);

  const correct = pickRandomItem(proceduralTemplates.correctActions[selectedDifficulty]);
  const wrongPool = [...proceduralTemplates.distractors[selectedDifficulty]];
  const distractors = [];

  while (distractors.length < 3 && wrongPool.length) {
    const index = Math.floor(Math.random() * wrongPool.length);
    distractors.push(wrongPool.splice(index, 1)[0]);
  }

  const options = [correct, ...distractors];
  for (let i = options.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return {
    id: `${PROCEDURAL_ID_PREFIX}${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    category: selectedCategory,
    difficulty: selectedDifficulty,
    question: stem.replace("{presentation}", presentation),
    options,
    correctIndex: options.indexOf(correct),
    explanation: proceduralTemplates.explanations[selectedDifficulty]
  };
}

function renderQuestion(question) {
  currentQuestion = question;
  answered = false;
  nextBtn.disabled = true;

  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  explanationText.textContent = "";

  questionMeta.textContent = `Category: ${question.category} • Difficulty: ${question.difficulty.toUpperCase()}`;
  questionText.textContent = question.question;

  answersContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const answerBtn = document.createElement("button");
    answerBtn.className = "btn answer-btn";
    answerBtn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    answerBtn.addEventListener("click", () => submitAnswer(index, answerBtn));
    answersContainer.appendChild(answerBtn);
  });
}

function submitAnswer(selectedIndex, selectedButton) {
  if (!currentQuestion || answered) return;

  answered = true;
  totalQuestions += 1;

  const allButtons = [...answersContainer.querySelectorAll("button")];
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  if (isCorrect) {
    score += 1;
    selectedButton.classList.add("correct");
    feedbackText.textContent = "Correct!";
    feedbackText.classList.add("correct");
  } else {
    selectedButton.classList.add("wrong");
    if (allButtons[currentQuestion.correctIndex]) {
      allButtons[currentQuestion.correctIndex].classList.add("correct");
    }
    feedbackText.textContent = "Incorrect.";
    feedbackText.classList.add("wrong");
  }

  allButtons.forEach((btn) => {
    btn.disabled = true;
  });

  explanationText.textContent = `Explanation: ${currentQuestion.explanation}`;
  scoreValue.textContent = score;
  totalValue.textContent = totalQuestions;
  nextBtn.disabled = false;
}

function generateQuestion() {
  const filtered = getFilteredQuestions();
  const question = filtered.length ? pickRandomQuestion(filtered) : generateProceduralQuestion();
  renderQuestion(question);
}

function resetQuiz() {
  score = 0;
  totalQuestions = 0;
  currentQuestion = null;
  answered = false;

  scoreValue.textContent = "0";
  totalValue.textContent = "0";

  questionMeta.textContent = "Select filters and generate a question.";
  questionText.textContent = "Your NPTE-style question will appear here.";
  answersContainer.innerHTML = "";
  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  explanationText.textContent = "";
  nextBtn.disabled = true;
}

loadLocalQuestions();
generateBtn.addEventListener("click", generateQuestion);
nextBtn.addEventListener("click", generateQuestion);
resetBtn.addEventListener("click", resetQuiz);

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
  },
  {
    "id": 13,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A runner with iliotibial band syndrome reports lateral knee pain at 20 minutes of running. Which initial intervention is MOST appropriate?",
    "options": [
      "Increase downhill mileage to build tolerance",
      "Modify training volume and begin hip abductor strengthening",
      "Use prolonged knee immobilization",
      "Start deep friction massage daily over lateral femoral condyle for 30 minutes"
    ],
    "correctIndex": 1,
    "explanation": "Load management plus proximal strengthening addresses common contributing factors in early IT band syndrome management."
  },
  {
    "id": 14,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient 4 weeks after rotator cuff repair asks to begin resisted shoulder abduction. What is the BEST response?",
    "options": [
      "Begin heavy resistance to restore strength quickly",
      "Delay all shoulder motion until 12 weeks",
      "Follow protocol and prioritize protected ROM before resisted loading",
      "Start overhead plyometrics"
    ],
    "correctIndex": 2,
    "explanation": "Early post-op phases generally emphasize protection and controlled mobility before progressive resistance."
  },
  {
    "id": 15,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with adhesive capsulitis is in the painful freezing stage. Which treatment focus is MOST appropriate?",
    "options": [
      "High-grade mobilizations into pain every visit",
      "Pain modulation, gentle ROM, and activity modification",
      "Aggressive strengthening to fatigue",
      "Complete shoulder immobilization"
    ],
    "correctIndex": 1,
    "explanation": "During the freezing phase, symptom control and gentle mobility are preferred over aggressive techniques."
  },
  {
    "id": 16,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient has positive anterior drawer and inversion stress tests after an ankle injury 3 days ago. Which intervention is BEST initially?",
    "options": [
      "Early protected weight bearing and edema control",
      "Immediate return to cutting drills",
      "Forceful inversion stretching",
      "No movement for 6 weeks regardless of severity"
    ],
    "correctIndex": 0,
    "explanation": "Acute lateral ankle sprain care emphasizes protection, swelling control, and functional progression."
  },
  {
    "id": 17,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with patellofemoral pain demonstrates dynamic knee valgus during step-down testing. Which impairment should be targeted FIRST?",
    "options": [
      "Hip abductor and external rotator weakness",
      "Thoracic extension mobility",
      "Grip strength",
      "Cervical endurance"
    ],
    "correctIndex": 0,
    "explanation": "Proximal hip weakness often contributes to dynamic valgus and patellofemoral joint stress."
  },
  {
    "id": 18,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with lateral epicondylalgia has pain with resisted wrist extension. Which exercise approach has BEST evidence in early rehab?",
    "options": [
      "Heavy concentric-only loading daily",
      "Isometric loading with symptom-guided progression",
      "No forearm exercise for 3 months",
      "Ballistic plyometric gripping"
    ],
    "correctIndex": 1,
    "explanation": "Symptom-guided isometric and progressive tendon loading are commonly used in early tendinopathy management."
  },
  {
    "id": 19,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with lumbar spinal stenosis reports leg symptoms with standing and relief with sitting. Which exercise bias is MOST appropriate?",
    "options": [
      "Extension-based repeated movements",
      "Flexion-biased conditioning and walking tolerance strategies",
      "High-impact jumping",
      "Prone press-up progression only"
    ],
    "correctIndex": 1,
    "explanation": "Flexion-biased programs often reduce symptoms in lumbar stenosis presentations."
  },
  {
    "id": 20,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient 2 weeks after total knee arthroplasty has knee extension lag and poor quad activation. Which intervention is MOST appropriate?",
    "options": [
      "Open-chain heavy knee extension to failure",
      "Neuromuscular electrical stimulation with quad sets",
      "No strengthening until 8 weeks",
      "Aggressive long-duration passive flexion only"
    ],
    "correctIndex": 1,
    "explanation": "NMES can improve quadriceps activation deficits early after TKA."
  },
  {
    "id": 21,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with Achilles tendinopathy has morning stiffness and pain during hopping. Which loading strategy is BEST?",
    "options": [
      "Complete rest for 3 months",
      "Progressive tendon loading with activity modification",
      "Daily corticosteroid injection before activity",
      "Only passive calf stretching"
    ],
    "correctIndex": 1,
    "explanation": "Progressive loading is central for Achilles tendinopathy while modifying aggravating activities."
  },
  {
    "id": 22,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with suspected cauda equina syndrome reports new urinary retention and saddle anesthesia. What should the PT do FIRST?",
    "options": [
      "Begin core stabilization",
      "Urgent medical referral for emergency evaluation",
      "Trial lumbar traction",
      "Schedule follow-up in one week"
    ],
    "correctIndex": 1,
    "explanation": "Red-flag neurologic signs require immediate emergency referral."
  },
  {
    "id": 23,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with acute low back pain asks for strict bed rest. What is the BEST recommendation?",
    "options": [
      "Encourage brief relative rest with early return to tolerated activity",
      "Complete bed rest for 10 days",
      "Avoid all movement until pain-free",
      "Only use passive modalities"
    ],
    "correctIndex": 0,
    "explanation": "Guidelines favor maintaining activity within tolerance to improve outcomes in acute low back pain."
  },
  {
    "id": 24,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with femoroacetabular impingement has pain with deep squatting. Which movement modification is MOST appropriate initially?",
    "options": [
      "Increase depth into end-range hip flexion",
      "Reduce provocative depth and emphasize hip control",
      "Add weighted jump squats",
      "Immobilize hip in brace continuously"
    ],
    "correctIndex": 1,
    "explanation": "Reducing provocative positions while retraining movement control is appropriate early management."
  },
  {
    "id": 25,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient after distal radius fracture immobilization has significant wrist stiffness but healed radiographs. Which intervention is MOST appropriate?",
    "options": [
      "Progressive active/passive ROM and functional use",
      "Continue full immobilization for 6 more weeks",
      "High-velocity manipulation immediately",
      "Avoid hand use to prevent irritation"
    ],
    "correctIndex": 0,
    "explanation": "Once healing is confirmed, graded mobility and functional loading are indicated."
  },
  {
    "id": 26,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with cervical radiculopathy has symptom relief with manual cervical traction. Which plan is MOST appropriate?",
    "options": [
      "Incorporate intermittent traction with exercise progression",
      "Discontinue all activity",
      "Use traction continuously all day",
      "Begin heavy overhead lifting"
    ],
    "correctIndex": 0,
    "explanation": "When traction reduces symptoms, it can be combined with exercise and postural interventions."
  },
  {
    "id": 27,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with first-time traumatic anterior shoulder dislocation is in early rehab. Which exercise is MOST appropriate initially?",
    "options": [
      "Aggressive end-range external rotation stretching",
      "Submaximal rotator cuff and scapular isometrics",
      "Overhead snatch training",
      "No movement for 12 weeks"
    ],
    "correctIndex": 1,
    "explanation": "Early stabilization work typically starts with protected isometric activation."
  },
  {
    "id": 28,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with plantar fasciitis reports pain with first morning steps. Which intervention is MOST supported?",
    "options": [
      "Night splinting and calf/plantar fascia stretching",
      "High-impact barefoot running",
      "Long-term non-weight bearing",
      "Aggressive steroid iontophoresis only"
    ],
    "correctIndex": 0,
    "explanation": "Stretching and night splints are commonly supported conservative interventions."
  },
  {
    "id": 29,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient post meniscectomy demonstrates persistent knee effusion after exercise progression. What is the BEST next step?",
    "options": [
      "Progress to agility drills despite swelling",
      "Reduce load and address irritability before progressing",
      "Ignore swelling if pain is low",
      "Begin maximal leg extensions"
    ],
    "correctIndex": 1,
    "explanation": "Persistent effusion indicates joint irritability and should guide temporary load reduction."
  },
  {
    "id": 30,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with gluteal tendinopathy has lateral hip pain with single-leg stance. Which education point is MOST appropriate?",
    "options": [
      "Avoid all walking permanently",
      "Reduce compressive positions and dose hip abductor loading",
      "Sleep only on painful side",
      "Stretch into hip adduction aggressively"
    ],
    "correctIndex": 1,
    "explanation": "Managing tendon compression and graded loading helps reduce symptoms."
  },
  {
    "id": 31,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with rheumatoid arthritis presents during a systemic flare. Which exercise intensity is MOST appropriate?",
    "options": [
      "High-intensity resistance training to fatigue",
      "Gentle ROM and low-intensity activity within tolerance",
      "No movement for months",
      "Plyometrics for joint stimulation"
    ],
    "correctIndex": 1,
    "explanation": "During flare periods, lower-intensity activity and ROM are preferred to limit symptom exacerbation."
  },
  {
    "id": 32,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with osteoporotic vertebral compression fracture needs home exercise. Which movement should be AVOIDED?",
    "options": [
      "Thoracic extension strengthening",
      "Hip hinge training",
      "Loaded spinal flexion with rotation",
      "Balance training"
    ],
    "correctIndex": 2,
    "explanation": "Loaded spinal flexion and twisting increase fracture risk in osteoporosis."
  },
  {
    "id": 33,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with shoulder impingement has pain during overhead press. Which intervention is MOST appropriate first?",
    "options": [
      "Scapular control and rotator cuff strengthening below painful range",
      "Immediate heavy overhead pressing",
      "Complete upper-extremity immobilization",
      "Cervical traction only"
    ],
    "correctIndex": 0,
    "explanation": "Initial management targets scapular mechanics and cuff performance with symptom-guided dosing."
  },
  {
    "id": 34,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with post-op ACL reconstruction at 10 weeks has quad index 55% and no effusion. Which progression is BEST?",
    "options": [
      "Return to unrestricted pivoting sports",
      "Continue progressive strengthening and neuromuscular training",
      "Stop strengthening to protect graft",
      "Begin maximal depth plyometrics daily"
    ],
    "correctIndex": 1,
    "explanation": "Insufficient strength symmetry indicates continued rehab before return to sport."
  },
  {
    "id": 35,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with ulnar nerve entrapment at the elbow has nocturnal paresthesia. Which conservative recommendation is MOST appropriate?",
    "options": [
      "Night elbow extension splinting and activity modification",
      "Frequent prolonged elbow flexion",
      "Heavy gripping drills immediately",
      "Ignore symptoms unless constant"
    ],
    "correctIndex": 0,
    "explanation": "Night splinting and reducing provocative flexion/compression can reduce symptoms."
  },
  {
    "id": 36,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with chronic ankle instability reports repeated giving-way episodes. Which intervention has BEST support?",
    "options": [
      "Balance/proprioceptive training with progressive perturbations",
      "Passive modalities only",
      "Immobilization during all daily activity",
      "Isolated open-chain knee extension"
    ],
    "correctIndex": 0,
    "explanation": "Neuromuscular balance training is key for chronic ankle instability."
  },
  {
    "id": 37,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with suspected stress fracture of the tibia has focal tenderness and pain that worsens with impact. What is the BEST action?",
    "options": [
      "Continue running to tolerance",
      "Refer for imaging/medical evaluation and modify load",
      "Prescribe aggressive plyometrics",
      "Deep tissue massage over painful area"
    ],
    "correctIndex": 1,
    "explanation": "Potential stress fracture requires medical workup and immediate load modification."
  },
  {
    "id": 38,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with thoracic outlet syndrome has symptom reproduction with overhead sustained positions. Which strategy is MOST appropriate?",
    "options": [
      "Postural correction and gradual exposure with neural/soft tissue mobility",
      "Avoid all upper-extremity movement forever",
      "Immediate maximal overhead strengthening",
      "Rigid cervical collar full time"
    ],
    "correctIndex": 0,
    "explanation": "Conservative care emphasizes posture, tissue mobility, and graded activity exposure."
  },
  {
    "id": 39,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient 1 week after hamstring strain wants sprint drills. Which criterion is MOST important before return to high-speed running?",
    "options": [
      "No pain at rest only",
      "Near-symmetrical strength and pain-free progressive speed exposure",
      "Ability to stretch to end range once",
      "Two days since injury"
    ],
    "correctIndex": 1,
    "explanation": "High-speed return should follow objective strength/function recovery and graded exposure."
  },
  {
    "id": 40,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with de Quervain tenosynovitis reports pain lifting an infant. Which intervention is MOST appropriate initially?",
    "options": [
      "Thumb spica support with tendon-loading modification",
      "Aggressive thumb strengthening to failure",
      "No hand use for 3 months",
      "Forceful passive ulnar deviation stretching"
    ],
    "correctIndex": 0,
    "explanation": "Early management commonly includes splinting and load modification."
  },
  {
    "id": 41,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with medial tibial stress syndrome asks about training. Which advice is BEST?",
    "options": [
      "Increase hill sprints",
      "Temporarily reduce impact volume and address loading errors",
      "Stop all exercise permanently",
      "Use only passive ultrasound"
    ],
    "correctIndex": 1,
    "explanation": "MTSS responds to load adjustment and correction of training factors."
  },
  {
    "id": 42,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with hip osteoarthritis has pain and stiffness but wants to stay active. Which plan is MOST appropriate?",
    "options": [
      "Progressive strengthening, aerobic exercise, and self-management education",
      "Complete non-weight bearing program only",
      "High-impact jumping program",
      "Strict immobilization"
    ],
    "correctIndex": 0,
    "explanation": "Guidelines support exercise and education for hip OA management."
  },
  {
    "id": 43,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient after lumbar microdiscectomy is 3 weeks post-op with improving leg pain. Which intervention is MOST appropriate?",
    "options": [
      "Gradual walking progression and neutral-spine functional training",
      "Heavy deadlifts from floor",
      "Prolonged bed rest",
      "Repeated loaded trunk flexion"
    ],
    "correctIndex": 0,
    "explanation": "Early post-op rehab typically emphasizes walking and controlled functional progression."
  },
  {
    "id": 44,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with biceps tendinopathy reports pain during resisted elbow flexion and supination. Which strategy is BEST first-line?",
    "options": [
      "Activity modification and progressive tendon loading",
      "Immediate complete immobilization for 8 weeks",
      "Daily maximal eccentric overload from day 1",
      "No upper-extremity exercise ever"
    ],
    "correctIndex": 0,
    "explanation": "Tendinopathy management emphasizes symptom-guided loading and irritability control."
  },
  {
    "id": 45,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with recurrent patellar dislocation demonstrates poor VMO timing and hip weakness. Which intervention is MOST appropriate?",
    "options": [
      "Neuromuscular control training with hip/knee strengthening",
      "Open-chain knee extension to pain every session",
      "Avoid all closed-chain tasks",
      "Immediate return to pivot sports"
    ],
    "correctIndex": 0,
    "explanation": "Combined proximal and knee control training improves dynamic alignment and stability."
  },
  {
    "id": 46,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with trigger finger has painful locking in the morning. Which conservative treatment is MOST appropriate?",
    "options": [
      "Night splinting and activity modification",
      "Aggressive resisted gripping",
      "No hand movement for 12 weeks",
      "High-velocity manipulation"
    ],
    "correctIndex": 0,
    "explanation": "Initial trigger finger management often includes splinting and reducing repetitive gripping."
  },
  {
    "id": 47,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with postoperative rotator cuff repair at 14 weeks has full PROM and minimal pain. Which progression is MOST appropriate?",
    "options": [
      "Initiate progressive resisted strengthening per protocol",
      "Return directly to overhead sport competition",
      "Stop therapy because ROM is full",
      "Begin maximal plyometric throws on day 1"
    ],
    "correctIndex": 0,
    "explanation": "At this stage, progression to strengthening is typical if healing milestones are met."
  },
  {
    "id": 48,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with lumbar spondylolisthesis has pain provoked by extension and prolonged standing. Which exercise focus is MOST appropriate?",
    "options": [
      "Extension loading drills only",
      "Trunk stabilization and flexion-tolerant conditioning",
      "Maximal spinal rotation with load",
      "Strict bed rest"
    ],
    "correctIndex": 1,
    "explanation": "Stabilization and flexion-tolerant programming are commonly used for symptomatic spondylolisthesis."
  },
  {
    "id": 49,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with shoulder osteoarthritis has painful crepitus and limited elevation. Which intervention is MOST appropriate?",
    "options": [
      "Joint-protection education, ROM, and gradual strengthening",
      "High-force end-range mobilization every session",
      "No movement due to crepitus",
      "Explosive overhead lifting"
    ],
    "correctIndex": 0,
    "explanation": "Conservative OA care emphasizes symptom-guided mobility and strengthening."
  },
  {
    "id": 50,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with acute grade I MCL sprain asks about brace use. What is the BEST recommendation?",
    "options": [
      "Use functional support as needed and begin early controlled rehab",
      "Rigid casting for 8 weeks",
      "Immediate unrestricted contact sport",
      "No lower-extremity activity for 3 months"
    ],
    "correctIndex": 0,
    "explanation": "Mild MCL sprains are typically managed with early protected motion and progressive exercise."
  },
  {
    "id": 51,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with chronic neck pain has forward head posture and low endurance of deep neck flexors. Which exercise is MOST appropriate?",
    "options": [
      "Deep neck flexor endurance training with postural re-education",
      "Heavy shrugs only",
      "No cervical exercise",
      "Aggressive cervical manipulation as sole treatment"
    ],
    "correctIndex": 0,
    "explanation": "Endurance-focused cervical motor control training is beneficial for chronic neck pain."
  },
  {
    "id": 52,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with proximal humerus fracture is cleared for active motion at 6 weeks. Which progression is MOST appropriate?",
    "options": [
      "Begin gentle active ROM and functional reaching",
      "Maintain full immobilization indefinitely",
      "Start maximal resistance overhead press",
      "Avoid all shoulder movement despite clearance"
    ],
    "correctIndex": 0,
    "explanation": "Once medically cleared, graded active motion supports functional recovery."
  },
  {
    "id": 53,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with chronic low back pain is fearful of movement despite low irritability. Which strategy is MOST appropriate?",
    "options": [
      "Pain neuroscience education with graded exposure",
      "Advise strict activity avoidance",
      "Use imaging findings to justify inactivity",
      "Only passive modalities"
    ],
    "correctIndex": 0,
    "explanation": "Education and graded exposure address fear-avoidance and improve function."
  },
  {
    "id": 54,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with posterior tibial tendon dysfunction has collapsing arch and pain with prolonged walking. Which intervention is MOST appropriate early?",
    "options": [
      "Foot orthosis support with tibialis posterior strengthening",
      "Barefoot running progression",
      "High-impact jumping drills",
      "No treatment unless deformity is rigid"
    ],
    "correctIndex": 0,
    "explanation": "Supportive orthoses plus targeted strengthening are common first-line interventions."
  },
  {
    "id": 55,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with SLAP lesion has pain during cocking phase of throwing. Which rehab focus is MOST appropriate initially?",
    "options": [
      "Scapular stabilization and posterior shoulder flexibility",
      "Immediate maximal throwing volume",
      "No shoulder exercise",
      "Rigid immobilization for 4 months"
    ],
    "correctIndex": 0,
    "explanation": "Throwing shoulder rehab typically begins with scapular and mobility deficits before high-load throwing."
  },
  {
    "id": 56,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with acute calf strain can walk without limp but has pain on resisted plantarflexion. Which return-to-run criterion is MOST appropriate?",
    "options": [
      "Pain-free hopping and near-symmetrical calf strength",
      "One pain-free walk",
      "No tenderness at rest only",
      "Two days since injury"
    ],
    "correctIndex": 0,
    "explanation": "Return to run should include functional loading tests and strength symmetry."
  },
  {
    "id": 57,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with adolescent Osgood-Schlatter symptoms has pain with jumping in season. Which recommendation is MOST appropriate?",
    "options": [
      "Load management and quadriceps/hip flexibility-strength program",
      "Mandatory full sports shutdown for 1 year",
      "Daily maximal loaded knee extension",
      "No intervention needed"
    ],
    "correctIndex": 0,
    "explanation": "Most cases respond to symptom-guided activity modification and progressive strengthening/flexibility."
  },
  {
    "id": 58,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with wrist TFCC irritation reports ulnar-sided pain during weight-bearing on hands. Which early modification is BEST?",
    "options": [
      "Use neutral-wrist loading alternatives and gradual reloading",
      "Continue painful full-weight bearing to desensitize",
      "Rigid immobilization for 6 months",
      "Aggressive passive end-range pronation"
    ],
    "correctIndex": 0,
    "explanation": "Reducing provocative loading positions while progressively reloading is appropriate."
  },
  {
    "id": 59,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with cubital tunnel syndrome has weakness in grip and numbness in ring/small fingers. Which finding warrants urgent referral?",
    "options": [
      "Mild intermittent paresthesia only",
      "Progressive motor weakness and intrinsic atrophy",
      "Night symptoms only",
      "Pain reduced with splinting"
    ],
    "correctIndex": 1,
    "explanation": "Progressive neurologic motor loss suggests more severe nerve compromise requiring specialist evaluation."
  },
  {
    "id": 60,
    "category": "MSK",
    "difficulty": "hard",
    "question": "A patient with mid-portion Achilles rupture repaired surgically is 8 weeks post-op in rehab. Which activity is MOST appropriate?",
    "options": [
      "Progressive protected loading per protocol and gait retraining",
      "Unrestricted plyometric jumping",
      "Full-speed sprint intervals",
      "No weight bearing despite surgeon clearance"
    ],
    "correctIndex": 0,
    "explanation": "Post-op Achilles rehab emphasizes staged loading and gait restoration."
  },
  {
    "id": 61,
    "category": "MSK",
    "difficulty": "easy",
    "question": "A patient with knee osteoarthritis asks whether exercise should stop when discomfort appears. What is the BEST response?",
    "options": [
      "Mild, short-lived symptom increase can be acceptable with monitored progression",
      "Any discomfort means permanent stop",
      "Exercise is contraindicated in OA",
      "Only passive treatment is safe"
    ],
    "correctIndex": 0,
    "explanation": "In OA care, tolerable symptom response with monitored progression supports long-term adherence and function."
  }  ,
  {
    "id": 62,
    "category": "MSK",
    "difficulty": "medium",
    "question": "A patient with chronic lateral ankle pain after repeated sprains demonstrates limited dorsiflexion and poor landing mechanics. Which intervention is MOST appropriate?",
    "options": [
      "Progress talocrural mobility, calf flexibility, and landing control drills",
      "Avoid all ankle motion permanently",
      "Use only passive ultrasound",
      "Return to cutting sport immediately"
    ],
    "correctIndex": 0,
    "explanation": "Addressing mobility restrictions and neuromuscular landing control helps reduce recurrent ankle symptoms and instability."
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

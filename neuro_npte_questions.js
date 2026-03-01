const questions = [
  {
    question: "A patient 2 weeks post right MCA stroke demonstrates left spatial neglect during wheelchair propulsion. Which intervention is MOST appropriate initially?",
    choices: ["Place visual anchors and cues on the left during task practice", "Train only on the right side to avoid frustration", "Use eyes-closed training to improve attention", "Delay mobility training until neglect resolves"],
    answer: 0
  },
  {
    question: "A patient with Parkinson disease has freezing of gait when turning in a narrow hallway. Which strategy is BEST to reduce freezing episodes?",
    choices: ["Increase gait speed without cueing", "Use external visual cue lines and wide arc turns", "Practice dual-task walking immediately", "Discourage assistive device use"],
    answer: 1
  },
  {
    question: "A patient with incomplete SCI at C7 reports dizziness and pounding headache during mat mobility. BP is 192/106 mmHg. What should the PT do FIRST?",
    choices: ["Continue therapy and monitor", "Lower head below knees", "Suspect autonomic dysreflexia and sit the patient upright", "Apply heat pack to neck"],
    answer: 2
  },
  {
    question: "A patient with vestibular hypofunction reports retinal slip during head turns. Which intervention is MOST indicated?",
    choices: ["Brandt-Daroff maneuvers", "Smooth pursuit only", "Saccades with static head", "VOR x1 gaze stabilization exercises"],
    answer: 3
  },
  {
    question: "A patient 1 month post cerebellar stroke has dysmetria during reaching. Which treatment focus is MOST appropriate?",
    choices: ["Task-specific coordinated reaching with visual feedback", "High-resistance ballistic strengthening", "Passive ROM only", "Prolonged bed rest to reduce tremor"],
    answer: 0
  },
  {
    question: "A patient with relapsing-remitting MS reports severe fatigue in late afternoon sessions. Which scheduling plan is BEST?",
    choices: ["Long high-intensity sessions at day's end", "Short morning sessions with energy conservation education", "No exercise due to fatigue", "Primarily heat-based modalities"],
    answer: 1
  },
  {
    question: "A patient with TBI is at Rancho Level IV and becomes agitated during gait training. What is the MOST appropriate PT response?",
    choices: ["Use complex multi-step commands", "Insist on full session completion", "Provide calm, structured, low-stimulation environment", "Discontinue all mobility for one week"],
    answer: 2
  },
  {
    question: "A patient post stroke demonstrates genu recurvatum in stance due to plantarflexor spasticity and weak dorsiflexors. Which orthosis is MOST appropriate?",
    choices: ["Soft cervical collar", "Knee immobilizer only", "Night resting splint", "Articulated or solid AFO based on motor control"],
    answer: 3
  },
  {
    question: "A patient with Guillain-Barré syndrome is in early recovery and fatigues rapidly with strengthening. Which principle is MOST important?",
    choices: ["Avoid overwork weakness by using submaximal dosing", "Train to failure each set", "Use high-velocity plyometrics", "Emphasize eccentric overload"],
    answer: 0
  },
  {
    question: "During BPPV evaluation, torsional upbeating nystagmus occurs with right Dix-Hallpike. Which canal and side are MOST likely involved?",
    choices: ["Left horizontal canal", "Right posterior canal", "Left anterior canal", "Central vestibular lesion"],
    answer: 1
  },
  {
    question: "A patient with acute complete SCI at T4 develops BP 78/50 mmHg and dizziness when brought upright in tilt table. What is MOST likely?",
    choices: ["Autonomic dysreflexia", "Seizure aura", "Orthostatic hypotension", "Myasthenic crisis"],
    answer: 2
  },
  {
    question: "A patient with left hemiparesis has absent active ankle dorsiflexion during swing phase. Which intervention MOST directly improves toe clearance during gait?",
    choices: ["Lumbar traction", "Hip adductor strengthening", "Sensory desensitization", "Functional electrical stimulation to dorsiflexors"],
    answer: 3
  },
  {
    question: "A patient with Parkinson disease has impaired anticipatory postural adjustments. Which training approach is BEST supported?",
    choices: ["Amplitude-based functional movement training", "Strictly isolated open-chain ankle exercises", "No balance challenge activities", "Passive stretching only"],
    answer: 0
  },
  {
    question: "A patient with peripheral neuropathy demonstrates sensory ataxia and frequent night falls. Which recommendation is MOST appropriate?",
    choices: ["Walk in dark rooms to improve adaptation", "Increase environmental lighting and use assistive device", "Practice barefoot on uneven surfaces unsupervised", "Limit all ambulation"],
    answer: 1
  },
  {
    question: "A patient 3 days post stroke has shoulder pain and one-finger subluxation. Which handling strategy is MOST appropriate during transfers?",
    choices: ["Pull on affected arm to assist sit-to-stand", "Use overhead pulley aggressively", "Support humerus/scapula and avoid traction to UE", "Immobilize in sling at all times"],
    answer: 2
  },
  {
    question: "A patient with ALS asks about exercise. Which prescription is MOST appropriate in early stage disease?",
    choices: ["High-intensity eccentric loading to failure", "No activity to preserve motor neurons", "Heavy resisted powerlifting", "Moderate, non-fatiguing aerobic and light strengthening"],
    answer: 3
  },
  {
    question: "A patient with unilateral vestibular loss shows poor dynamic visual acuity. Which outcome measure is MOST specific to this impairment?",
    choices: ["Dynamic Visual Acuity Test", "Berg Balance Scale", "Ashworth Scale", "Fugl-Meyer UE"],
    answer: 0
  },
  {
    question: "A patient with stroke has pusher syndrome and actively pushes toward the hemiparetic side. Which intervention is BEST?",
    choices: ["Force weight shift to pushing side", "Use visual vertical references and midline orientation training", "Avoid sitting activities", "Train only in supine"],
    answer: 1
  },
  {
    question: "A patient with myasthenia gravis reports increased ptosis and generalized weakness with repeated activity that improves with rest. What is the BEST session strategy?",
    choices: ["Progress intensity each set", "Prioritize evening high-intensity sessions", "Use frequent rest breaks and monitor fatigability", "Avoid all strengthening permanently"],
    answer: 2
  },
  {
    question: "A patient with C6 SCI needs pressure relief education for wheelchair use. Which method is MOST appropriate?",
    choices: ["Independent full push-up every 60 minutes", "No pressure relief needed with cushion", "Rely on tilt only once daily", "Perform forward or lateral weight shifts every 15-30 minutes"],
    answer: 3
  },
  {
    question: "A patient post stroke demonstrates reduced stance time on the paretic limb due to fear and poor confidence. Which intervention is MOST appropriate?",
    choices: ["Body-weight-supported gait with progressive loading on paretic side", "Immediate treadmill running", "Dual-task obstacle course from day 1", "Strengthen only non-paretic limb"],
    answer: 0
  },
  {
    question: "A patient with Huntington disease presents with chorea and high fall risk. Which assistive device is MOST appropriate for community ambulation?",
    choices: ["Standard cane", "Weighted rolling walker with supervision", "Axillary crutches", "No device to reduce dependency"],
    answer: 1
  },
  {
    question: "A patient with diabetic neuropathy has a plantar ulcer and diminished protective sensation. What is the MOST important PT priority?",
    choices: ["Maximize barefoot balance training", "Use high-impact plyometric drills", "Offloading and foot protection education", "Aggressive friction massage over ulcer"],
    answer: 2
  },
  {
    question: "A patient with severe TBI follows simple commands inconsistently but responds to routine and repetition. Which motor learning strategy is BEST?",
    choices: ["Random, variable practice with frequent context changes", "Error augmentation with no feedback", "Complex dual-task progression", "Blocked, consistent task practice with simple cues"],
    answer: 3
  },
  {
    question: "During exam of suspected central vestibular dysfunction, which finding MOST supports central rather than peripheral involvement?",
    choices: ["Direction-changing gaze-evoked nystagmus", "Positive head impulse test", "Unilateral hearing loss", "Brief latency-fatigable positional nystagmus"],
    answer: 0
  },
  {
    question: "A patient with stroke has impaired selective ankle control and extensor synergy during stance. Which intervention is MOST appropriate?",
    choices: ["Resisted mass extension patterns", "Task-specific gait training with manual facilitation of tibial progression", "Prolonged immobilization", "Recumbent-only exercise"],
    answer: 1
  },
  {
    question: "A patient with incomplete SCI develops sudden increase in lower-extremity extensor tone during transfers. What is the BEST immediate action?",
    choices: ["Increase transfer speed", "Apply quick stretch to quadriceps", "Assess for noxious trigger such as tight clothing or full bladder", "Terminate all rehab permanently"],
    answer: 2
  },
  {
    question: "A patient with Parkinson disease has festination and forward trunk lean. Which cue is MOST effective during gait?",
    choices: ["Take smaller faster steps", "Look down continuously", "Hold breath during stepping", "Take big steps and strike heel first using rhythmic cueing"],
    answer: 3
  },
  {
    question: "A patient with right CVA demonstrates left homonymous hemianopsia. Which compensatory strategy is MOST appropriate for safe ambulation?",
    choices: ["Systematic visual scanning toward the left field", "Patch the left eye", "Discourage head turning", "Ambulate only in darkness"],
    answer: 0
  },
  {
    question: "A patient with chronic stroke has plateaued overground gait speed. Which intervention is MOST likely to improve walking speed?",
    choices: ["Passive stretching only", "High-intensity interval treadmill training with task specificity", "Upper extremity ergometry only", "Static standing tolerance training"],
    answer: 1
  },
  {
    question: "A patient with vestibular neuritis is now medically stable but avoids head movement due to dizziness. Which approach is MOST appropriate?",
    choices: ["Long-term vestibular suppressant use", "Strict bed rest", "Progressive habituation and gaze stabilization exercises", "Immediate canalith repositioning maneuver"],
    answer: 2
  },
  {
    question: "A patient with C5 complete SCI asks which muscle is key for tenodesis grasp training. Which is MOST relevant?",
    choices: ["Intrinsic hand muscles", "Triceps brachii", "Pronator teres", "Active wrist extension with passive finger flexion"],
    answer: 3
  },
  {
    question: "A patient with stroke scores 42/56 on Berg Balance Scale before discharge home alone. What is the BEST interpretation?",
    choices: ["Elevated fall risk; implement targeted balance and safety plan", "No fall risk with this score", "Requires complete non-ambulatory status", "Indicates vestibular hypofunction specifically"],
    answer: 0
  },
  {
    question: "A patient with normal pressure hydrocephalus presents with magnetic gait and urinary incontinence. Which referral is MOST appropriate?",
    choices: ["Psychiatry", "Neurosurgery/neurology for shunt evaluation", "Pulmonology", "Dermatology"],
    answer: 1
  },
  {
    question: "A patient with suspected cauda equina syndrome reports saddle anesthesia and new urinary retention. What should the PT do?",
    choices: ["Begin core stabilization", "Schedule routine follow-up", "Urgent medical referral for emergency evaluation", "Trial traction first"],
    answer: 2
  },
  {
    question: "A patient with chronic incomplete SCI wants to improve cardiovascular fitness safely. Which mode is MOST appropriate?",
    choices: ["Unmonitored maximal sprinting", "Isometric holds only", "No aerobic training indicated", "Arm ergometry with RPE/HR monitoring"],
    answer: 3
  },
  {
    question: "A patient post stroke has severe aphasia but good comprehension of demonstration. Which teaching strategy is MOST effective?",
    choices: ["Use visual demonstration and simple one-step commands", "Provide lengthy verbal explanation only", "Require written instructions exclusively", "Delay all home exercise teaching"],
    answer: 0
  },
  {
    question: "A patient with Parkinson disease demonstrates retropulsion on pull test. Which intervention should be prioritized?",
    choices: ["Open-chain knee extensions", "Reactive balance and posterior stepping strategy training", "Isolated grip strengthening", "Supine stretching only"],
    answer: 1
  },
  {
    question: "A patient with right vestibular hypofunction reports dizziness only with rapid horizontal head turns while walking. Which progression is MOST appropriate?",
    choices: ["Static standing eyes open only", "Canalith repositioning daily", "Gait with head turns progressing speed and complexity", "No movement until asymptomatic"],
    answer: 2
  },
  {
    question: "A patient with post-polio syndrome complains of new weakness and fatigue. Which recommendation is MOST appropriate?",
    choices: ["Progressive overload to failure", "High-impact agility drills", "Daily maximal strengthening", "Pacing, energy conservation, and submaximal exercise"],
    answer: 3
  },
  {
    question: "A patient with stroke has increased finger flexor tone limiting hand opening. Which adjunct intervention may temporarily reduce tone for task practice?",
    choices: ["Prolonged weight bearing and slow sustained stretch", "Quick icing and tapping", "High-velocity resistance", "Avoid upper extremity loading"],
    answer: 0
  },
  {
    question: "A patient with SCI is learning transfers and has intact triceps bilaterally. Which transfer technique is MOST feasible initially?",
    choices: ["Dependent scoop transfer", "Lateral pivot transfer with transfer board progression", "Mechanical lift only permanently", "Standing pivot without braces"],
    answer: 1
  },
  {
    question: "A patient with suspected vertebrobasilar insufficiency develops diplopia and dysarthria during cervical extension testing. What is the BEST action?",
    choices: ["Continue to confirm findings", "Perform high-velocity thrust", "Stop test and refer for urgent medical evaluation", "Prescribe cervical strengthening immediately"],
    answer: 2
  },
  {
    question: "A patient with left cerebellar lesion demonstrates intention tremor during finger-to-nose. Which movement strategy is MOST helpful functionally?",
    choices: ["Increase movement speed", "Use no visual input", "Train with maximal resistance", "Use weighted utensils and proximal stabilization"],
    answer: 3
  },
  {
    question: "A patient with chronic stroke has learned nonuse of paretic UE but active wrist/finger extension is present. Which intervention is MOST appropriate?",
    choices: ["Constraint-induced movement therapy in selected candidates", "Botulinum toxin to non-paretic side", "Immobilize paretic arm", "Only bilateral passive ROM"],
    answer: 0
  },
  {
    question: "A patient with traumatic incomplete SCI ambulates with knee hyperextension in stance. Which intervention is BEST first-line?",
    choices: ["Increase plantarflexor tone", "Gait retraining with AFO/trial orthotic alignment and quadriceps control", "Avoid all weight bearing", "Use only seated cardio"],
    answer: 1
  },
  {
    question: "A patient with concussion reports worsening headache, confusion, and repeated vomiting during return-to-play progression. What is the MOST appropriate PT action?",
    choices: ["Resume prior stage tomorrow", "Proceed if symptoms resolve in 10 minutes", "Stop activity and refer immediately for medical evaluation", "Add vestibular loading to habituate symptoms"],
    answer: 2
  },
  {
    question: "A patient with peripheral facial nerve palsy has incomplete eye closure. Which priority education is MOST important early?",
    choices: ["Facial resistance exercise to fatigue", "Electrical stimulation at high intensity", "Chewing gum continuously", "Eye protection and lubrication strategies"],
    answer: 3
  },
  {
    question: "A patient with chronic vestibular dysfunction has high fear avoidance and activity restriction. Which measure BEST captures dizziness-related participation limits?",
    choices: ["Dizziness Handicap Inventory", "Modified Ashworth Scale", "MMT grading", "Glasgow Coma Scale"],
    answer: 0
  },
  {
    question: "A patient with stroke exhibits absent terminal stance due to reduced plantarflexor push-off. Which intervention is MOST specific?",
    choices: ["Hamstring stretching only", "Task-specific late-stance training with plantarflexor strengthening and cueing", "Upper limb ergometry", "Supine bridging exclusively"],
    answer: 1
  }
];

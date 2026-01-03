/**
 * ✅ COMMENT UTILISER
 * 1) Mets les fichiers audio dans /audio nommés q1.mp3, q2.mp3, q3.mp3...
 * 2) Modifie le tableau quiz ci-dessous :
 *    - choices : les options de réponse affichées
 *    - correctIndex : quelle option est correcte (index à partir de 0)
 *    - explanation : pourquoi la bonne réponse est correcte (et pourquoi les autres sont fausses)
 *
 * ⚠️ IMPORTANT : Ne change pas les champs choices / audio / explanation si tu veux garder le contenu tel quel.
 */

const quiz = [
  {
    audio: "audio/q1.mp3",
    choices: ["Mon rendez-vous est mardi.", "Mon rendez-vous est lundi.", "Mon rendez-vous est dimanche.", "Mon rendez-vous est vendredi."],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is on Monday.” La bonne réponse est “Mon rendez-vous est lundi.”"
  },
  {
    audio: "audio/q2.mp3",
    choices: ["J’ai un rendez-vous à 21h.", "J’ai un rendez-vous à 9h du soir.", "J’ai un rendez-vous à 9h du matin.", "J’ai un rendez-vous à midi."],
    correctIndex: 2,
    explanation:
      "Le son dit “I have an appointment at 9 a.m.” La bonne réponse est “J’ai un rendez-vous à 9h du matin.”"
  },
  {
    audio: "audio/q3.mp3",
    choices: ["Mon rendez-vous est à 3h du matin.", "Mon rendez-vous est à 13h.", "Mon rendez-vous est à 15h.", "Mon rendez-vous est à 5h."],
    correctIndex: 2,
    explanation:
      "Le son dit “My appointment is at 3 p.m.” La bonne réponse est “Mon rendez-vous est à 15h.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: ["J’ai un rendez-vous médical.", "J’ai un rendez-vous scolaire.", "J’ai un examen.", "J’ai un voyage."],
    correctIndex: 0,
    explanation:
      "Le son dit “I have a doctor’s appointment.” La bonne réponse est “J’ai un rendez-vous médical.”"
  },
  {
    audio: "audio/q5.mp3",
    choices: [
      "Mon rendez-vous est le 5 février 2024.",
      "Mon rendez-vous est le 2 mai 2024.",
      "Mon rendez-vous est le 24 février 2005.",
      "Mon rendez-vous est le 15 février 2024."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “My appointment is on February fifth, two thousand twenty-four.” La bonne réponse est “Mon rendez-vous est le 5 février 2024.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: ["02/05/2024.", "05/02/2024.", "02/02/2025.", "05/05/2024."],
    correctIndex: 0,
    explanation:
      "Le son demande “5 février 2024. Quelle est cette date en anglais américain ?” En anglais américain, on écrit mois/jour/année : 02/05/2024."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["Mon rendez-vous est le soir.", "Mon rendez-vous est l’après-midi.", "Mon rendez-vous est la nuit.", "Mon rendez-vous est le matin."],
    correctIndex: 3,
    explanation:
      "Le son dit “My appointment is in the morning.” La bonne réponse est “Mon rendez-vous est le matin.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: ["Mon rendez-vous est le matin.", "Mon rendez-vous est l’après-midi.", "Mon rendez-vous est le soir.", "Mon rendez-vous est à minuit."],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is in the afternoon.” La bonne réponse est “Mon rendez-vous est l’après-midi.”"
  },
  {
    audio: "audio/q9.mp3",
    choices: ["Mon rendez-vous est à minuit.", "Mon rendez-vous est à midi.", "Mon rendez-vous est à 12h du matin.", "Mon rendez-vous est à 13h."],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is at 12 p.m.” La bonne réponse est “Mon rendez-vous est à midi.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: ["Mon rendez-vous est à midi.", "Mon rendez-vous est à 12h30.", "Mon rendez-vous est à minuit.", "Mon rendez-vous est à 1h."],
    correctIndex: 2,
    explanation:
      "Le son dit “My appointment is at 12 a.m.” La bonne réponse est “Mon rendez-vous est à minuit.”"
  },
  {
    audio: "audio/q11.mp3",
    choices: ["J’ai un rendez-vous hier.", "J’ai un rendez-vous aujourd’hui.", "J’ai un rendez-vous demain.", "J’ai un rendez-vous ce soir."],
    correctIndex: 2,
    explanation:
      "Le son dit “I have an appointment tomorrow.” La bonne réponse est “J’ai un rendez-vous demain.”"
  },
  {
    audio: "audio/q12.mp3",
    choices: [
      "Mon rendez-vous est la semaine dernière.",
      "Mon rendez-vous est cette semaine.",
      "Mon rendez-vous est le mois prochain.",
      "Mon rendez-vous est la semaine prochaine."
    ],
    correctIndex: 3,
    explanation:
      "Le son dit “My appointment is next week.” La bonne réponse est “Mon rendez-vous est la semaine prochaine.”"
  },
  {
    audio: "audio/q13.mp3",
    choices: [
      "Mon rendez-vous est vendredi à 22h.",
      "Mon rendez-vous est vendredi à 10h du matin.",
      "Mon rendez-vous est jeudi à 10h.",
      "Mon rendez-vous est vendredi à midi."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is on Friday at 10 a.m.” La bonne réponse est “Mon rendez-vous est vendredi à 10h du matin.”"
  },
  {
    audio: "audio/q14.mp3",
    choices: [
      "Je dois annuler un rendez-vous.",
      "Je dois confirmer un rendez-vous.",
      "Je dois fixer un rendez-vous.",
      "Je dois arriver en retard."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “I need to schedule an appointment.” La bonne réponse est “Je dois fixer un rendez-vous.”"
  },
  {
    audio: "audio/q15.mp3",
    choices: ["Mon rendez-vous est en juin.", "Mon rendez-vous est en juillet.", "Mon rendez-vous est en août.", "Mon rendez-vous est en janvier."],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is in July.” La bonne réponse est “Mon rendez-vous est en juillet.”"
  },
  {
    audio: "audio/q16.mp3",
    choices: ["Mon rendez-vous est en hiver.", "Mon rendez-vous est au printemps.", "Mon rendez-vous est en été.", "Mon rendez-vous est en automne."],
    correctIndex: 2,
    explanation:
      "Le son dit “My appointment is in the summer.” La bonne réponse est “Mon rendez-vous est en été.”"
  },
  {
    audio: "audio/q17.mp3",
    choices: [
      "Mon rendez-vous est mercredi matin.",
      "Mon rendez-vous est mardi après-midi.",
      "Mon rendez-vous est mercredi après-midi.",
      "Mon rendez-vous est jeudi après-midi."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “My appointment is on Wednesday afternoon.” La bonne réponse est “Mon rendez-vous est mercredi après-midi.”"
  },
  {
    audio: "audio/q18.mp3",
    choices: [
      "J’ai annulé mon rendez-vous.",
      "J’ai déplacé mon rendez-vous.",
      "J’ai confirmé mon rendez-vous.",
      "J’ai oublié mon rendez-vous."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “I confirmed my appointment.” La bonne réponse est “J’ai confirmé mon rendez-vous.”"
  },
  {
    audio: "audio/q19.mp3",
    choices: [
      "Je dois confirmer mon rendez-vous.",
      "Je dois déplacer mon rendez-vous.",
      "Je dois prendre un rendez-vous.",
      "Je dois annuler mon rendez-vous."
    ],
    correctIndex: 3,
    explanation:
      "Le son dit “I need to cancel my appointment.” La bonne réponse est “Je dois annuler mon rendez-vous.”"
  },
  {
    audio: "audio/q20.mp3",
    choices: ["Mon rendez-vous est demain.", "Mon rendez-vous était hier.", "Mon rendez-vous est aujourd’hui.", "Mon rendez-vous est ce soir."],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment was yesterday.” La bonne réponse est “Mon rendez-vous était hier.”"
  },
  {
    audio: "audio/q21.mp3",
    choices: [
      "Mon rendez-vous est le 11 février 2023.",
      "Mon rendez-vous est le 20 novembre 2023.",
      "Mon rendez-vous est le 20 janvier 2023.",
      "Mon rendez-vous est le 11 décembre 2023."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is on 11/20/2023.” En anglais américain, 11/20/2023 = 20 novembre 2023. La bonne réponse est “Mon rendez-vous est le 20 novembre 2023.”"
  },
  {
    audio: "audio/q22.mp3",
    choices: ["Mon rendez-vous est à 6h du matin.", "Mon rendez-vous est à 16h.", "Mon rendez-vous est à 18h.", "Mon rendez-vous est à 6h."],
    correctIndex: 2,
    explanation:
      "Le son dit “My appointment is at 6 p.m.” La bonne réponse est “Mon rendez-vous est à 18h.”"
  },
  {
    audio: "audio/q23.mp3",
    choices: [
      "Mon rendez-vous est tard le soir.",
      "Mon rendez-vous est tôt le matin.",
      "Mon rendez-vous est à midi.",
      "Mon rendez-vous est l’après-midi."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “My appointment is early in the morning.” La bonne réponse est “Mon rendez-vous est tôt le matin.”"
  },
  {
    audio: "audio/q24.mp3",
    choices: [
      "J’ai un rendez-vous le jour de mon anniversaire.",
      "J’ai un rendez-vous demain.",
      "J’ai un rendez-vous en hiver.",
      "J’ai un rendez-vous le lundi."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “I have an appointment on my birthday.” La bonne réponse est “J’ai un rendez-vous le jour de mon anniversaire.”"
  },
  {
    audio: "audio/q25.mp3",
    choices: [
      "Mon rendez-vous est le 10 octobre à 14h.",
      "Mon rendez-vous est le 10 novembre à 14h.",
      "Mon rendez-vous est le 2 octobre à 10h.",
      "Mon rendez-vous est le 1er octobre à 14h."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “My appointment is on October tenth at 2 p.m.” La bonne réponse est “Mon rendez-vous est le 10 octobre à 14h.”"
  }
];

let current = 0;
let score = 0;
let selectedIndex = null;
let audioUnlocked = false;

// Stocker les réponses de l’utilisateur pour la révision finale
const userAnswers = []; // chaque élément : { selectedIndex, isCorrect }

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const doneScreen = document.getElementById("doneScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const progressBar = document.getElementById("progressBar");
const audioEl = document.getElementById("audio");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");

const scoreLine = document.getElementById("scoreLine");
const reviewList = document.getElementById("reviewList");

function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

async function playAudio() {
  try {
    audioEl.currentTime = 0;
    await audioEl.play();
  } catch (e) {
    // La lecture automatique peut être bloquée jusqu’à une interaction utilisateur (normal).
  }
}

function setProgress() {
  const total = quiz.length;
  const percent = Math.round((current / total) * 100);
  progressBar.style.width = `${percent}%`;
}

function renderChoices(q) {
  choicesEl.innerHTML = "";
  selectedIndex = null;
  nextBtn.disabled = true;
  feedbackEl.textContent = "";

  q.choices.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.className = "choiceBtn";
    btn.textContent = text;

    btn.addEventListener("click", () => {
      // Mettre en évidence la sélection
      Array.from(choicesEl.children).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      selectedIndex = idx;
      nextBtn.disabled = false;
      feedbackEl.textContent = "";
    });

    choicesEl.appendChild(btn);
  });
}

function renderQuestion() {
  const q = quiz[current];
  setProgress();

  audioEl.src = q.audio;
  renderChoices(q);

  if (audioUnlocked) playAudio();
}

function buildReviewPage() {
  reviewList.innerHTML = "";

  quiz.forEach((q, i) => {
    const ua = userAnswers[i];
    const isCorrect = ua && ua.isCorrect;

    const card = document.createElement("div");
    card.className = "reviewCard";

    const qTitle = document.createElement("div");
    qTitle.className = "reviewQ";
    qTitle.innerHTML = `Question ${i + 1} ${
      isCorrect ? `<span class="tag correct">Correct</span>` : `<span class="tag wrong">Faux</span>`
    }`;

    const yourAnswerText =
      ua && ua.selectedIndex != null ? q.choices[ua.selectedIndex] : "(Aucune réponse sélectionnée)";
    const correctText = q.choices[q.correctIndex];

    const row1 = document.createElement("div");
    row1.className = "row";
    row1.innerHTML = `<strong>Ta réponse :</strong> ${yourAnswerText}`;

    const row2 = document.createElement("div");
    row2.className = "row";
    row2.innerHTML = `<strong>Bonne réponse :</strong> ${correctText}`;

    const explain = document.createElement("div");
    explain.className = "explain";
    explain.innerHTML = `<strong>Explication :</strong> ${q.explanation}`;

    card.appendChild(qTitle);
    card.appendChild(row1);
    card.appendChild(row2);
    card.appendChild(explain);

    reviewList.appendChild(card);
  });
}

function finishQuiz() {
  progressBar.style.width = "100%";

  hide(quizScreen);
  show(doneScreen);

  scoreLine.textContent = `Score : ${score} / ${quiz.length}`;

  buildReviewPage();
}

function nextQuestion() {
  const q = quiz[current];

  // Enregistrer la réponse + le score
  const isCorrect = selectedIndex === q.correctIndex;
  userAnswers[current] = { selectedIndex, isCorrect };

  if (isCorrect) score++;

  current++;

  if (current >= quiz.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

startBtn.addEventListener("click", async () => {
  audioUnlocked = true;

  // Réinitialiser
  current = 0;
  score = 0;
  userAnswers.length = 0;

  hide(startScreen);
  hide(doneScreen);
  show(quizScreen);

  renderQuestion();

  // Ce clic “débloque” l’audio sur la plupart des navigateurs
  await playAudio();
});

replayBtn.addEventListener("click", () => {
  playAudio();
});

nextBtn.addEventListener("click", () => {
  if (selectedIndex === null) return;
  nextQuestion();
});

restartBtn.addEventListener("click", () => {
  hide(doneScreen);
  show(startScreen);
});

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
    choices: [
      "Il y a un restaurant près de ma maison.",
      "Il y a plusieurs restaurants dans ma maison.",
      "Le restaurant est loin de ma maison.",
      "Ma maison est un restaurant."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “There is a restaurant near my house.” La bonne réponse est “Il y a un restaurant près de ma maison.”"
  },
  {
    audio: "audio/q2.mp3",
    choices: [
      "Il y a une école dans cette zone.",
      "Il y a deux écoles dans cette zone.",
      "Les écoles sont grandes.",
      "Cette zone est une école."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “There are two schools in this area.” La bonne réponse est “Il y a deux écoles dans cette zone.”"
  },
  {
    audio: "audio/q3.mp3",
    choices: [
      "Il y a un arrêt de bus au coin de la rue.",
      "Il y a plusieurs bus dans la rue.",
      "Le bus est en retard.",
      "La rue est fermée."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “There is a bus stop on the corner.” La bonne réponse est “Il y a un arrêt de bus au coin de la rue.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: [
      "Il y a une personne dans la pièce.",
      "La pièce est petite.",
      "Il y a beaucoup de personnes dans la pièce.",
      "Les personnes sont assises."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “There are many people in the room.” La bonne réponse est “Il y a beaucoup de personnes dans la pièce.”"
  },
  {
    audio: "audio/q5.mp3",
    choices: [
      "Le rendez-vous est confirmé.",
      "Il y a un problème avec le rendez-vous.",
      "Le problème est résolu.",
      "Le rendez-vous est terminé."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “There is a problem with the appointment.” La bonne réponse est “Il y a un problème avec le rendez-vous.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: [
      "Il y a un rendez-vous aujourd’hui.",
      "Les rendez-vous sont annulés.",
      "Il y a trois rendez-vous aujourd’hui.",
      "Les rendez-vous sont demain."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “There are three appointments today.” La bonne réponse est “Il y a trois rendez-vous aujourd’hui.”"
  },
  {
    audio: "audio/q7.mp3",
    choices: [
      "Le médecin est absent.",
      "Il y a un email du médecin.",
      "Le médecin appelle par téléphone.",
      "L’email est pour le patient."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “There is an email from the doctor.” La bonne réponse est “Il y a un email du médecin.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: [
      "Il y a plusieurs réunions cet après-midi.",
      "Il n’y a pas de réunions cet après-midi.",
      "La réunion est ce matin.",
      "Les réunions sont longues."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “There are no meetings this afternoon.” La bonne réponse est “Il n’y a pas de réunions cet après-midi.”"
  },
  {
    audio: "audio/q9.mp3",
    choices: [
      "La date est correcte.",
      "Il y a une erreur dans la date.",
      "La date est demain.",
      "L’erreur est dans l’heure."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “There is a mistake in the date.” La bonne réponse est “Il y a une erreur dans la date.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: [
      "Il y a une chaise dans le bureau.",
      "Le bureau est grand.",
      "Il y a quatre chaises dans le bureau.",
      "Les chaises sont confortables."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “There are four chairs in the office.” La bonne réponse est “Il y a quatre chaises dans le bureau.”"
  },
  {
    audio: "audio/q11.mp3",
    choices: [
      "Le rendez-vous est maintenant.",
      "Il n’y a pas de temps.",
      "Il y a du temps avant le rendez-vous.",
      "Le rendez-vous est annulé."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “There is time before the appointment.” La bonne réponse est “Il y a du temps avant le rendez-vous.”"
  },
  {
    audio: "audio/q12.mp3",
    choices: [
      "Le planning est le même.",
      "Le planning est clair.",
      "Il y a des changements dans le planning.",
      "Le planning est terminé."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “There are changes to the schedule.” La bonne réponse est “Il y a des changements dans le planning.”"
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

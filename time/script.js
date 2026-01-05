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
    choices: ["It is 7 PM.", "It is 7 AM.", "It is 5 AM.", "It is 9 AM."],
    correctIndex: 1,
    explanation: "7 heures du matin correspond à 7 AM."
  },
  {
    audio: "audio/q2.mp3",
    choices: ["It is 3 AM.", "It is 2 PM.", "It is 3 PM.", "It is 5 PM."],
    correctIndex: 2,
    explanation: "3 heures de l’après-midi correspond à 3 PM."
  },
  {
    audio: "audio/q3.mp3",
    choices: ["It is 12 AM.", "It is 11 AM.", "It is 12 PM.", "It is 1 PM."],
    correctIndex: 2,
    explanation: "12 heures de l’après-midi correspond à 12 PM (midi)."
  },
  {
    audio: "audio/q4.mp3",
    choices: ["It is 12 PM.", "It is 11 PM.", "It is 12 AM.", "It is 1 AM."],
    correctIndex: 2,
    explanation: "Minuit correspond à 12 AM."
  },
  {
    audio: "audio/q5.mp3",
    choices: ["It is 9 AM.", "It is 8 PM.", "It is 9 PM.", "It is 10 PM."],
    correctIndex: 2,
    explanation: "9 heures du soir correspond à 9 PM."
  },
  {
    audio: "audio/q6.mp3",
    choices: ["It is 6 PM.", "It is 5 AM.", "It is 6 AM.", "It is 7 AM."],
    correctIndex: 2,
    explanation: "6 heures du matin correspond à 6 AM."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["It is 1 AM.", "It is 12 PM.", "It is 1 PM.", "It is 2 PM."],
    correctIndex: 2,
    explanation: "1 heure de l’après-midi correspond à 1 PM."
  },
  {
    audio: "audio/q8.mp3",
    choices: ["It is 10 AM.", "It is 9 PM.", "It is 10 PM.", "It is 11 PM."],
    correctIndex: 2,
    explanation: "10 heures du soir correspond à 10 PM."
  },
  {
    audio: "audio/q9.mp3",
    choices: ["It is 8 PM.", "It is 7 AM.", "It is 8 AM.", "It is 9 AM."],
    correctIndex: 2,
    explanation: "8 heures du matin correspond à 8 AM."
  },
  {
    audio: "audio/q10.mp3",
    choices: ["It is 4 AM.", "It is 3 PM.", "It is 4 PM.", "It is 5 PM."],
    correctIndex: 2,
    explanation: "4 heures de l’après-midi correspond à 4 PM."
  },
  {
    audio: "audio/q11.mp3",
    choices: ["It is 11 PM.", "It is 10 AM.", "It is 11 AM.", "It is 12 PM."],
    correctIndex: 2,
    explanation: "11 heures du matin correspond à 11 AM."
  },
  {
    audio: "audio/q12.mp3",
    choices: ["It is 2 PM.", "It is 1 AM.", "It is 2 AM.", "It is 3 AM."],
    correctIndex: 2,
    explanation: "2 heures du matin correspond à 2 AM."
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
